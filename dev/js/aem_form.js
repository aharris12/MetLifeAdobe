// Log Code
var logTest = '';

if (typeof SFDC === "undefined") {
    var SFDC = {};
    SFDC.form = [];
}

var JsonOccupations = {};

SFDC.form.forEach(function (element) {

    var parent = $("." + element.type);
   /* $(".contact-sidebar.type");
    $('[data-fid="contact-sidebar"]');*/
    var submitText = parent.find('.form-submit').text();
    var processingText = parent.find('.form-submit').attr("data-proctext");

    (function ($) {
        var isValid = true;
        var POST_URL = '';
        var ERROR_URL = '';
        var PARENT_URL = '';
        var subjects = {};
        //var requestType = $("#request_type").val();
        var post_url = $('#post_url').val();
        var actualmarketvalue = $('#actual_market').val();
        var switchMarketvalue = $('#switch_market').val();

        return {
            init: function () {
                //console.log("init");

                var o = this;
                $(document).ready(function () {
                    var domain = document.domain;
                    parent.find('#Domain').attr("value", window.location.protocol + "//" + domain);

                    // Bind initial form events...
                    parent.find('.generic-form').bind('submit', function (e) {
                            e.preventDefault();
                            o.submitForm();
                            return false;
                        })
                        .find('.disclaimer')
                        .show()
                        .each(function () {
                            // Essentially, we need to wrap all previous elements in a div.clearfix
                            // to make sure disclaimers display correctly.
                            $(this).prevAll()
                                .reverse()  // prevAll will return elements in order from disclaimer or reverse DOM order
                                .wrapAll('<div class="clearfix"></div>');
                        });

                    // Initialize form and Bind Subjects
                    o._initForm()._bindSubjects();

                    // Submit form
                    parent.find('.form-submit').bind('click', function (e) {
                        e.preventDefault();
                        if (!parent.find(".form-submit").hasClass("disabled")) {
                            parent.find('.form-submit').addClass("disabled").html(processingText);
                            parent.find(".generic-form").submit();
                        }
                    });
                    POST_URL = $('#post_url').val();
                });
            },
            _initForm: function () {
                //console.log("initForm");

                // Iterate through all of the form fields identified in our fields Object...
                var fields = element.fields;
                var i = 0, len = element.fields.length;

                while (i < len) {
                    var field = fields[i];
                    var $field = parent.find('#' + field.id);

                    // Log Code
                    logTest += '' + field.type + ' - ' + field.id + '\n';


                    // Loosely, we'll grab the appropriate function and pass ID and inputs to it
                    if (field.type == "radio" || field.type == "checkBox") {
                        this[field.type](field.id, field.options);
                    }

                    if (field.type == "select") {
                        this[field.type](field.id, field.options, field.fieldDefaultValue);
                    }

                    // Hide hidden fields
                    if (field.hidden) {
                        this.hideElement($field);
                    }

                    // set height of forms
                   /* if ($(".contact-rep-with-image").length > 0) {
                        contactRepWithImageSize();
                    }*/

                    // Add required class
                    if (field.validator != "") {
                        if ($field.hasClass("input-group")) {
                            parent.find('#' + field.id + " :input").addClass("required");
                        }
                        else {
                            $field.addClass("required")
                        }
                    }

                    // Add observers
                    if (field.observes) {
                        var fieldId = field.id;
                        if (field.type == "dob") {
                            fieldId = field.id + 'd';
                        }
                        if (field.type == "phNo") {
                            fieldId = field.id + "ac";
                        }
                        if (field.type == "date") {
                            fieldId = field.id + 'd';
                        }
                        this._bindEvents(fieldId, field.observes);
                    }
                    i++;
                }


                return this;
            },

            /***
             * Binds observers' events to actions of subject.
             * @param {String} id Observer's ID
             * @param {Array} subject Array of subject's we're observing.
             */
            _bindEvents: function (id, subject) {
                //console.log("bind events");

                var $el = parent.find('#' + id);
                var i = 0, len = subject.length;
                while (i < len) {
                    var sub = subject[i];
                    this._addEvent($el, sub);
                    i++;
                }
            },

            /***
             * Adds appropriate classes and behavior to el so that it observes element with ID of subField.
             * Mainly used to avoid a closure created while iterating through subjects in _bindEvents( ).
             * @param {jQueryObject} $el el to become observer
             * @param {Object} subject Subject name and values el will observe
             */
            _addEvent: function ($el, sub) {
                //console.log("add event");

                var o = this;
                $el.addClass('observe-' + sub.field)
                    .setTrigger({name: sub.field, values: sub.values.join(',')})
                    .bind('observe.' + sub.field, function (e) {
                        $this = $(this);
                        var reqValue = e.val;
                        if (reqValue != null)
                            reqValue = e.val.replace(/\'/g, "&apos;");
                        o._setRequiredVals($this, {key: e.field, value: reqValue})
                            .validateElement($this);
                    });

                // Enqueue subject's ID; we'll need to make sure it's loaded in the DOM
                if (!(sub.field in subjects)) {
                    subjects[sub.field] = true;
                }
            },

            /***
             * Sets $el's trigger val for this particular key, indicating whether this particular display criteria has been met or not.
             * @param {jQueryObject} $el Element whose triggers we're updating.
             * @param {Object} val Key/value pair that we are setting.
             */
            _setRequiredVals: function ($el, val) {
                //console.log("set required vals");

                if ($el.data('trigger')[val.key].values.indexOf(val.value) > -1) {
                    $el.data('trigger')[val.key].valid = true;
                } else {
                    $el.data('trigger')[val.key].valid = false;
                }
                return this;
            },

            /***
             * Iterates through $el's "trigger" values, determining if all display criteria are met and $el should be shown/hidden.
             * @param {jQueryObject} $el Element we're evaluating.
             */
            validateElement: function ($el) {
                //console.log("validate element");

                var isValid = true;
                var trigger = $el.data('trigger');

                for (var req in trigger) {
                    isValid = isValid & trigger[req].valid;
                }

                if (isValid) {
                    this.showElement($el);
                } else {
                    this.hideElement($el);
                }
            },

            /***
             * Shows $el, also enabling it for validation on the back end.
             * @param {jQueryObject} $el Field we want to show/enable.
             */
            showElement: function ($el) {
                //console.log("show element");

                $fld = parent.find('#' + $el.attr('id'));
                $fld.closest('.form-focus, .form-hidden').show();
                //$fld.parents('.form-user-grp').show();

            },

            /***
             * Hides $el, also disabling it from validation on the back end.
             * @param {jQueryObject} $el Field we want to hide/disable.
             */
            hideElement: function ($el) {
                //console.log("hide element");

                $fld = parent.find('#' + $el.attr('id'));
                $fld.closest('.form-focus, .form-hidden').hide();
                //$fld.parents('.form-user-grp').hide();
            },

            /***
             * Bind triggers to change Events of our subjects array. Note that we must
             * defer this until after all subjects are written into the page, i.e. after processing form's init( ).
             */
            _bindSubjects: function () {
                //console.log("bind subjects");

                for (var s in subjects) {
                    var $subject = parent.find('#' + s);
                    if (!$subject.hasClass('observed')) {
                        this._addSubjectEvent($subject, s);
                    }
                }
                return this;
            },

            /***
             * Bind event to our subject's change event.
             * @param {jQueryObject} $subject Object we'll observe.
             * @param {String} id ID of subject; passed along in appropriate events.
             */
            _addSubjectEvent: function ($subject, id) {
                //console.log("add subject events");

                // Radio buttons and checkBoxes will actually be children of $subject
                if ($subject.attr("type") == "checkBox") {
                    $subject.change(function () {
                        var groupID = $subject.attr('id');
                        var numberChecked = 0;

                        parent.find('#' + groupID + ":checked").each(function () {
                            numberChecked += 1;
                            parent.find('.observe-' + id).trigger({
                                type: 'observe.' + id,
                                field: id,
                                val: $(this).val()
                            });
                        });

                        if (numberChecked == 0) {
                            parent.find('.observe-' + id).trigger({
                                type: 'observe.' + id,
                                field: id,
                                val: "none"
                            });
                        }
                    });
                }
                else if ($subject.hasClass('button_group')) {
                    $subject.change(function () {
                        var groupID = $subject.attr('id');

                        parent.find('#' + groupID + ":checked").each(function () {
                            parent.find('.observe-' + id).trigger({
                                type: 'observe.' + id,
                                field: id,
                                val: $(this).val()
                            });
                        });
                    });
                }
                else if ($subject.get(0).tagName.toLowerCase() == 'div') {
                    $subject = $subject.find('input');
                    $subject.bind('change', function () {
                        $el = $(this);
                        parent.find('.observe-' + id).trigger({
                            type: 'observe.' + id,
                            field: id,
                            val: $el.val()
                        });
                    });

                    // Pre-select radio buttons as per the UAE form.
                    var $first = $subject.filter(':first');
                    if ($first.is('input')) {
                        $first.click().trigger('change');
                    }
                }
                else if ($subject.get(0).tagName.toLowerCase() == 'select') {
                    $subject.change(function () {
                        parent.find('.observe-' + id).trigger({
                            type: 'observe.' + id,
                            field: id,
                            val: $subject.val()
                        });
                    });
                    var $subject = $subject.filter(':first');
                    $subject.trigger('change');
                }
            },

        
            /********  Validate Date ******/
            validateDate: function (dateString, type) {
                //console.log("validate date");
                // Parse the date parts to integers
                var parts, day, month, year;

                if (type == "dob" && formSubmissiontype == "form_direct_sfdc_type") {
                    // First check for the pattern
                    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
                        return false;

                    parts = dateString.split("/");
                    day = parseInt(parts[0], 10);
                    month = parseInt(parts[1], 10);
                    year = parseInt(parts[2], 10);
                }
                else {
                    // First check for the pattern
                    if (!/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(dateString))
                        return false;

                    parts = dateString.split("-");
                    year = parseInt(parts[0], 10);
                    month = parseInt(parts[1], 10);
                    day = parseInt(parts[2], 10);
                }


                // Check year
                if (year < 1900 || year > 2999)
                    return false;

                // Check month
                if (month == 0 || month > 12)
                    return false;

                // Check day
                var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

                // Adjust for leap years
                if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
                    monthLength[1] = 29;

                if (day <= 0 || day > monthLength[month - 1])
                    return false;

                // Check for current date
                var inputDate = new Date(month + "/" + day + "/" + year);
                var todayDate = new Date();

                if (inputDate.setHours(0, 0, 0, 0) > todayDate.setHours(0, 0, 0, 0)) {
                    return false;
                } else {
                    return true;
                }
            },

            /******** Hide Error *********/
            hideError: function (id) {
                //console.log("hide error: " + id);

                var element = parent.find('#' + id);
               
                element.siblings(".errorSpan").css("display", "none");
                // Go through groups and add only to inside
                // Ignore button groups, check box groups, and terms and conditions... which do not have inputs
                if (element.hasClass("input-group")) {
                    parent.find('#' + id + " :input").removeClass('error');
                }
                else {
                    if (!(element.hasClass("button_group")) && !(element.hasClass("checkboxGroup")) && !(element.hasClass("termsCondition"))) {
                        element.removeClass('error');
                    }
                }
                isValid = true;
            },

            /************ Show Error *********/
            showError: function (id, type) {
                //console.log("show error: " + id);

                var element = parent.find('#' + id);
               
                element.siblings(".errorSpan").css("display", "block");
               

                // Go through groups and add only to inside
                // Ignore button groups, check box groups, and terms and conditions... which do not have inputs
                if (element.hasClass("input-group")) {
                    parent.find('#' + id + " :input").addClass('error');
                }
                else {
                    if (!(element.hasClass("button_group")) && !(element.hasClass("checkboxGroup")) && !(element.hasClass("termsCondition"))) {
                        element.addClass('error');
                    }
                }
                isValid = false;
            },

            /***
             * Post the form to the server.
             *   - Success: Redirect to the thank-you page.
             *   - Error/failure : Display error messages, etc.
             */
            submitForm: function () {
                //console.log("submit form");

                // Post the form, handling any error messages that come back, etc.

                var switchformID = $('#switch_form_fieldID').val();

                if ($('#fld_' + switchformID).is(":visible")) {
                    var selectedValue = $('#' + switchformID).val();  // dropdown selected value
                    var switchValues = $('#switch_form_fieldValues').val();
                    var result = switchValues.match(selectedValue);
                    if (result) {
                        if (formSubmissiontype == "form_direct_sfdc_type") {
                            if ($('#oid').attr("name") == "oid") {
                                $('#oid').attr("name", "orgid")
                            }
                            else {
                                $('#oid').attr("name", "oid")
                            }
                            $('#post_url').attr("value", $('#switch_post_url').val());
                            $('#' + actualmarketvalue).attr("name", switchMarketvalue);
                            $('#' + actualmarketvalue).attr("id", switchMarketvalue);
                        }
                        else {
                            $('#request_type').attr("value", $('#switch_form_type').val());
                        }
                    }
                    else {
                        if (formSubmissiontype == "form_direct_sfdc_type") {
                            if ($('#oid').attr("name") == "oid") {
                                $('#oid').attr("name", "orgid")
                            }
                            else {
                                $('#oid').attr("name", "oid")
                            }
                            $('#post_url').attr("value", post_url);
                            $('#' + switchMarketvalue).attr("name", actualmarketvalue);
                            $('#' + switchMarketvalue).attr("id", actualmarketvalue);
                        } else
                            $('#request_type').attr("value", requestType);
                    }

                }

                var fields = element.fields;
                var i = 0, len = element.fields.length;

                while (i < len) {
                    var field = fields[i];
                    parent.find('#' + field.id).each(function() {
                        if ($(this).val() != null) {
                            $(this).val($(this).val().replace(/\'/g, "'"));
                        }
                    });

                    i++;
                }

                i = 0;
                var bool = true;
                while (i < len) {
                    var f = fields[i];
                    if (parent.find('#' + f.id).is(":visible")) {
                        var Phregex = new RegExp(/^\d{3}\-\d+$/);
                        //var Phregex = new RegExp(/^\d{3}\-\d{3}\-\d{4}$/);
                        if (f.type == "phNo") {
                            var number = "";
                            var areaCode = parent.find('#' + f.id + 'ac').val();
                            var numericVal = parent.find('#' + f.id + 'num').val();

                            number = areaCode + '-' + numericVal;
                            parent.find('#' + f.id).val(number);
                            parent.find('#' + f.id + "Input").val(number);
                        }
                        if (f.type == "dob" || f.type == "date") {
                            var dateInput = "";
                            var date = parent.find('#' + f.id + 'd').val();
                            var month = parent.find('#' + f.id + 'm').val();
                            var year = parent.find('#' + f.id + 'y').val();

                            date = ('0' + date).slice(-2);
                            month = ('0' + month).slice(-2);

                            if (f.type == "dob" && formSubmissiontype == "form_direct_sfdc_type") {
                                dateInput = date + '/' + month + '/' + year;
                            } else {
                                dateInput = year + '-' + month + '-' + date;
                            }
                            parent.find('#' + f.id).val(dateInput);
                            parent.find('#' + f.id + "Input").val(dateInput);
                        }
                        var fieldValue = parent.find('#' + f.id).val();
                        switch (f.validator) {
                            case false:
                                this.hideError(f.id);
                                break;
                            case "required":
                                if (f.type == "text" || f.type == "textArea") {
                                    if (fieldValue != "") {
                                        this.hideError(f.id);
                                    } else {
                                        this.showError(f.id, f.type);
                                    }
                                }
                                else if (f.type == "select") {
                                    if (parent.find('#' + f.id).get(0).selectedIndex == 0 && parent.find('#' + f.id).val() == null) {
                                        this.showError(f.id, f.type);
                                    } else {
                                        this.hideError(f.id);
                                    }
                                }
                                else if (f.type == "radio") {
                                    if (parent.find('#' + f.id).find('input[type=radio]:checked').length > 0) {
                                        this.hideError(f.id);
                                    } else {
                                        this.showError(f.id, f.type);
                                    }
                                }
                                else if (f.type == "checkBox") {
                                    if (parent.find('#' + f.id).find('input[type=checkBox]:checked').length > 0) {
                                        this.hideError(f.id);
                                    } else {
                                        this.showError(f.id, f.type);
                                    }
                                }
                                else if (f.type == "dob" || f.type == "date") {
                                    if (!this.validateDate(fieldValue, f.type)) {
                                        if (f.type == "dob" && formSubmissiontype != "form_direct_sfdc_type") {
                                            parent.find('#' + f.id + 'd').find('input[type="text"]').attr("val", "");
                                            parent.find('#' + f.id + 'm').find('input[type="text"]').attr("val", "");
                                            parent.find('#' + f.id + 'y').find('input[type="text"]').attr("val", "");
                                        }
                                        this.showError(f.id, f.type);
                                    } else {
                                        this.hideError(f.id);
                                    }
                                }
                                else if (f.type == "phNo") {
                                    if (Phregex.test(fieldValue)) {
                                        this.hideError(f.id);
                                    } else {
                                        if (formSubmissiontype != "form_direct_sfdc_type") {
                                            parent.find('#' + f.id + 'ac').find('input[type="text"]').attr("val", "");
                                            parent.find('#' + f.id + 'num').find('input[type="text"]').attr("val", "");
                                        }
                                        this.showError(f.id, f.type);
                                    }
                                }
                                break;
                            case "numeric":
                                if (fieldValue != "") {
                                    if (f.type == "phNo") {
                                        if (Phregex.test(fieldValue)) {
                                            this.hideError(f.id);
                                        } else {
                                            parent.find('#' + f.id + 'ac').find('input[type="text"]').attr("val", "");
                                            parent.find('#' + f.id + 'num').find('input[type="text"]').attr("val", "");
                                            this.showError(f.id, f.type);
                                        }
                                    }
                                    else if (f.type == "dob" || f.type == "date") {
                                        if (!this.validateDate(fieldValue, f.type)) {
                                            if (f.type == "dob" && formSubmissiontype != "form_direct_sfdc_type") {
                                                parent.find('#' + f.id + 'd').find('input[type="text"]').attr("val", "");
                                                parent.find('#' + f.id + 'm').find('input[type="text"]').attr("val", "");
                                                parent.find('#' + f.id + 'y').find('input[type="text"]').attr("val", "");
                                            }
                                            this.showError(f.id, f.type);
                                        } else {
                                            this.hideError(f.id);
                                        }
                                    }
                                    else {
                                        if (fieldValue.match(/^\d+$/)) {
                                            this.hideError(f.id);
                                        } else {
                                            this.showError(f.id, f.type);
                                        }
                                    }
                                }
                                break;
                            case "numeric_Req":
                                if (f.type == "phNo") {
                                    if (Phregex.test(fieldValue)) {
                                        this.hideError(f.id);
                                    } else {
                                        if (formSubmissiontype != "form_direct_sfdc_type") {
                                            parent.find('#' + f.id + 'ac').find('input[type="text"]').attr("val", " ");
                                            parent.find('#' + f.id + 'num').find('input[type="text"]').attr("val", " ");
                                        }
                                        this.showError(f.id, f.type);
                                    }
                                }
                                else if (f.type == "dob" || f.type == "date") {
                                    if (!this.validateDate(fieldValue, f.type)) {
                                        if (f.type == "dob" && formSubmissiontype != "form_direct_sfdc_type") {
                                            parent.find('#' + f.id + 'd').find('input[type="text"]').attr("val", "");
                                            parent.find('#' + f.id + 'm').find('input[type="text"]').attr("val", "");
                                            parent.find('#' + f.id + 'y').find('input[type="text"]').attr("val", "");
                                        }
                                        this.showError(f.id, f.type);
                                    } else {
                                        this.hideError(f.id);
                                    }
                                }
                                else {
                                    if (fieldValue.match(/^\d+$/)) {
                                        this.hideError(f.id);
                                    } else {
                                        this.showError(f.id, f.type);
                                    }
                                }
                                break;
                            case "email":
                                if (fieldValue != "") {
                                    var regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
                                    if (regex.test(fieldValue)) {
                                        this.hideError(f.id);
                                    } else {
                                        this.showError(f.id, f.type);
                                    }
                                }
                                break;
                            case "email_Req":
                                var regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
                                if (regex.test(fieldValue)) {
                                    this.hideError(f.id);
                                } else {
                                    this.showError(f.id, f.type);
                                }
                                break;
                            case "regex":
                                if (fieldValue != "") {
                                    var regexPattern = new RegExp(parent.find('#' + f.id).attr('pattern'));
                                    if (regexPattern.test(fieldValue) || fieldValue == "") {
                                        this.hideError(f.id);
                                    } else {
                                        this.showError(f.id, f.type);
                                    }
                                }
                                break;
                            case "regex_Req":
                                var regexPattern = new RegExp(parent.find('#' + f.id).attr('pattern'));
                                if (regexPattern.test(fieldValue)) {
                                    this.hideError(f.id);
                                } else {
                                    this.showError(f.id, f.type);
                                }
                                break;
                            case "TermsandconditionsFieldRequired":
                                if (parent.find('#' + f.id).find('input[type=checkBox]:checked').length > 0) {
                                    this.hideError(f.id);
                                } else {
                                    this.showError(f.id, f.type);
                                }
                        }
                    }
                    i++;
                    if (!isValid) {
                        bool = false;
                    }
                }

              
                if (bool) {
                    var formElement = parent.find(".generic-form");
                    var jsonData = {};
                    var formData;

                    var url;
                    var data;
                    if (formSubmissiontype == "form_direct_sfdc_type") {

                        url = '/global-assets/proxy/DirectSFDCProxy.aspx';
                        data = formElement.serialize();
                    }
                    else {

                        formData = formElement.serializeArray();
                        if (jsonData["MetlifeJson"]) {
                            if (!jsonData["MetlifeJson"].push) {
                                jsonData["MetlifeJson"] = [jsonData["MetlifeJson"]];
                            }
                            jsonData["MetlifeJson"].push("Crownpeak Form");
                        } else {
                            jsonData["MetlifeJson"] = "Crownpeak Form";
                        }
                        $.each(formData, function () {
                            if (jsonData[this.name]) {
                                if (!jsonData[this.name].push) {
                                    jsonData[this.name] = [jsonData[this.name]];
                                }
                                else {
                                    jsonData[this.name].push(this.value || '');
                                }
                            }
                            else {
                                jsonData[this.name] = this.value || '';
                            }

                            if (this.name == "termsandconditions") {
                                var selected = [];
                                selected.push(this.value);
                                selected.push('');
                                jsonData[this.name] = selected;
                            }
                        });
                        url = '/global-assets/proxy/GloballeadUtilityProxy.aspx';
                        data = JSON.stringify(jsonData);
                    }

                    $.ajax({
                        url: url,
                        dataType: 'json',
                        data: data,
                        async: true,
                        type: 'POST',
                        success: function (data, status, xhr) {

                            switch (data.result.toLowerCase()) {
                                case "success":

                                    formMessage(parent, "thanks");
                                    break;
                                case "fail":

                                    formMessage(parent, "error");
                                    break;
                                case "error":

                                    formMessage(parent, "error");
                                    break;
                                default:

                            }
                        },
                        error: function (xhr, status, error) {

                            formMessage(parent, "error");
                        }
                    });
               
            } else {
                    parent.find('.form-submit').removeClass("disabled").html(submitText);
                }
            },

            /***
             * Generates a radio group at [id], using key/value pairs in opts to generate radio buttons.
             * @param {String} id Name of radio group we want to create. Also used to determine fieldset into which we'll insert radios.
             * @param {Array} opts Array of key/value Objects representing radio labels and values. Example format: [{"key":"value"}, {"key2":"value2"}, ... {"keyN":"valueN"}]
             */
            radio: function (id, opts) {
                var h = '';
                var mod, columns;
                var i = 0, len = opts.length;

                // determine button grouping
                if (len <= 2) {
                    mod = 2;
                    columns = "two-columns";
                } else {
                    mod = 3;
                    columns = "three-columns";
                    if (!parent.parent().hasClass("quote-tool-form")) {
                        parent.find('#' + id).closest(".form-hidden, .form-focus").css("width", "100%");
                    }
                }
                while (i < len) {
                    var opt = opts[i];
                    for (var key in opt) {

                        // button grouping start
                       /* if (i % mod == 0) {
                            h += "<div>";
                        }*/

                        // button
                        h += '<label>';
                        h += '<div class="radio_button ' + columns + '" id="' + id + '">';


                        if (i == 0) {
                            h += '<input type="radio" id="' + id + '" name ="' + id + '" value="' + opt[key] + '" checked class="user-radio">';
                        } else {
                            h += '<input type="radio" id="' + id + '" name ="' + id + '" value="' + opt[key] + '" class="user-radio">';
                        }
                        h += '<span>' + key + '</span>';
                        h += '</div>';
                        h += '</label>';

                        // button grouping end
                        /*if ((i + 1) % mod == 0) {
                            h += "</div>";
                        }*/
                    }
                    i++;
                }

                // fills in missing spacing
                if (i % mod > 0) {
                    if (mod == 3) {
                        for (var k = 0; k < mod - (i % mod); k++) {

                            h += '<div class="radio_button ' + '"></div>';

                        }
                        h += "</div>";
                    } else {
                        h += "</div>";
                    }
                }

               //parent.find('#' + id).append(h);
            },

            /***
             * Generates a set of checkBoxes group at [id], using key/value pairs in opts to generate checkBoxes.
             * @param {String} id ID used to determine fieldset into which we'll insert checkBoxes.
             * @param {Array} opts Array of key/value Objects representing checkBox labels/names and values. Example format: [{"key":"value"}, {"key2":"value2"}, ... {"keyN":"valueN"}]
             */
            checkBox: function (id, opts) {
                var h = '';
                var mod, columns;
                var i = 0, len = opts.length;

                // determine button grouping
                if (len <= 2) {
                    mod = 2;
                    columns = "two-columns";
                } else {
                    mod = 3;
                    columns = "three-columns";
                    parent.find('#' + id).closest(".form-hidden, .form-focus").css("width", "100%");
                }

                while (i < len) {
                    var opt = opts[i];
                    for (var key in opt) {

                        var check_id = id + "" + i;

                        // button grouping start
                        if (i % mod == 0) {
                            h += "<div>";
                        }

                        // button
                        h += '<div class="checkBox ' + columns + '">';
                        h += '<label>';
                        h += '<input class="user-checkbox" type="checkBox" id="' + check_id + '" name ="' + id + '" value="' + opt[key] + '">';
                        h += '<span>' + key + '</span>';
                        h += '</label>';
                        h += '</div>';

                        // button grouping end
                        if ((i + 1) % mod == 0) {
                            h += "</div>";
                        }
                    }
                    i++;
                }

                // fills in missing spacing
                if (i % mod > 0) {
                    if (mod == 3) {
                        for (var k = 0; k < mod - (i % mod); k++) {
                            h += '<div class="checkBox ' + columns + '"></div>';
                        }
                        h += "</div>";
                    } else {
                        h += "</div>";
                    }
                }

                parent.find('#' + id).prepend(h);

                modCheckboxObserves(id);
            },

            /***
             * Generates options used for populating the select box given at ID.
             * @param {String} id ID of select whose options we will populate with generated HTML.
             * @param {Array} opts Array of Objects representing option key/value pairs. Can optionally contain named optgroups if "name" is not empty string. Example: [{name:'Group 1', options : {"key":"value"},{"key2":"value2"}]},{name : 'Group 2', options : [{"key":"value"}, {"key2":"value2"}]}]);
             */
            select: function (id, opts, defaultVal) {
                var h = '';
                var i = 0, len = opts.length;
                while (i < len) {
                    var opt = opts[i];

                    if (!parent.parent().hasClass("quote-tool-form")) {
                        var isLabel = opt.hasOwnProperty("label") && opt.label !== '';
                        var isGroup = opt.hasOwnProperty("name") && opt.name !== '';

                        if (isLabel) {
                            h += '<option selected="selected" disabled="disabled" value="">' + opt.label + '</option>';
                        }

                        if (isGroup && len > 1) {
                            h += '<optgroup label="' + opt.name + '">';
                        }
                        var childOpts = opt.options;
                        var j = 0, cLength = childOpts.length;
                        while (j < cLength) {
                            var cOpt = childOpts[j];
                            for (var key in cOpt) {
                                h += '<option value="' + cOpt[key] + '">' + key + '</option>'
                            }
                            j++;
                        }
                        if (isGroup && len > 1) {
                            h += '</optgroup>';
                        }
                    }
                    i++;
                }
                parent.find('select#' + id).append(h);
                if (parent.parent().hasClass("quote-tool-form")) {
                    parent.find('select#' + id).attr("data-default-val", defaultVal);
                }
            }
        }
    }(jQuery)).init();

    /* Mod check box observes? ***************/
    function modCheckboxObserves(id) {
        var fields = element.fields;
        var i = 0, len = element.fields.length;

        // Check every field to see if there is an observe in them
        for (var v = 0; v < len; v++) {
            // If field has an observe

            if (fields[v].observes != null && fields[v].observes.length > 0) {
                // Look at each observe
                for (var w = 0; w < fields[v].observes.length; w++) {
                    // If the observe comes from a checkbox group
                    var idOfObject = fields[v].observes[w].field;
                    if (idOfObject == id) {
                        // Get array of values of the checkbox group
                        var checkboxGroupValues = [];

                        parent.find("#" + idOfObject + " > div > label > input").each(function () {
                            checkboxGroupValues.push(this.value);
                        });
                        fields[v].observes[w].field = fields[v].observes[w].field + "" + jQuery.inArray(fields[v].observes[w].values[0], checkboxGroupValues);
                    }
                }
            }
        }
    }

    
    // Expands Form
    parent.find(".form-user-ctrl, .form-control, .formTextarea").on("focus", function () {
        parent.removeClass('form-off')
    });

    // Closes Form
    parent.find(".contact-close").on('click', function (evt) {
        evt.preventDefault();
        formReset(parent, element.fields);
        parent.find('.form-submit').removeClass("disabled").html(submitText);
    });
});

/***** Validations **************************************************/
// Contact Form Validatons
/*if ($(".generic-form").length > 0) {
    // Validation for Select Fields
    $('select[data-required=true]').on({
        change: function (evt) {
            $(this).trigger('blur');
        },
        blur: function (evt) {
            var $this = $(this);
            var val = $this.val();

            if (val != null) {
                if (val.length == 0) {
                    if ($this.hasClass("required")) {
                        $this.addClass('error');
                        $this.siblings(".errorSpan").show();
                    }
                } else {
                    $this.removeClass('error');
                    $this.siblings(".errorSpan").hide();
                    if ($this.parent().parent().hasClass("date-input")) {
                        $this.parent().parent().find("select").removeClass('error');
                        $this.parent().parent().siblings(".errorSpan").hide();
                    }
                }
            }
        }
    });

    // Validation for Text Fields
    $('input[type=text][data-required=true], textarea[data-required=true]').on({
        focus: function (evt) {
            $(this).trigger('keyup');
        },
        keyup: function (evt) {
            $(this).removeClass('error');
            $(this).siblings().removeClass('error');
            $(this).siblings(".errorSpan").hide();
            $(this).parent().siblings(".errorSpan").hide();
        }
    });

    // Validation for Radio Fields
    $(".generic-form").on("change", "input[type=radio]", function (evt) {
        var parent = $(this).closest(".form-user-grp");
        parent.find(".radio_button").removeClass('error');
        parent.find(".errorSpan").hide();
    });

    // Validation for Checkbox Fields
    $(".generic-form").on("click", "input[type=checkBox]", function (evt) {
        var parent = $(this).closest(".form-user-grp");
        parent.find(".user-checkbox").removeClass('error');
        parent.find(".errorSpan").hide();
    });
}*/
/***** Validations **************************************************/


/***** Contact Us and Privacy Forms *********************************/
// Sets the resize for label height
/*
if ($(".contact-privacy").length > 0) {
    contactAboutFromLayout();
}
*/

// Initialization for contact form text areas
/*function contactAboutFromLayout() {
    // text areas
    $(".generic-form .formTextarea").closest(".form-hidden, .form-focus").css("width", "100%");

    // terms and conditions
    $(".generic-form .termsCondition").closest(".form-hidden, .form-focus").css("width", "100%");
}*/
/***** Contact Us and Privacy Forms *********************************/


/***** Contact Rep with Image ***************************************/
// Sets the resize for form with contact image
/*$(window).load(function () {
    if ($(".contact-rep-with-image").length > 0) {
        contactRepWithImageSize();

        $(window).on("resize", function () {
            contactRepWithImageSize();
        });
    }
});*/

// Resize form image
/*function contactRepWithImageSize() {
    var parent = $(".contact-rep-with-image");
    var form = parent.find(".contact-lead-form");
    var image = parent.find(".image");
    var img = image.find("img");

    if (image.is(":visible") && form.hasClass("form-off")) {
        image.height(form.outerHeight());
    }

    img.css({'height': '100%', 'width': 'auto'});

    if (image.width() > img.width()) {
        img.css({'height': 'auto', 'width': '100%'});
    }
}*/
/***** Contact Rep with Image ***************************************/


/***** Quote Form ***************************************************/
/*$(document).ready(function () {
    $(function () {
        $(document).on('click', 'input[type=text]', function () {
            this.select();
        });
    });

    // CTA Header Quote Tool
    if ($(".cta_header_quote").length > 0) {
        $('.insurance-cta-type-switch').prop('selectedIndex', 0);
        $('.insurance-product-switch').attr("disabled", true);
        $(".cta_header_quote").find(".select_wrapper").on("change", function () {
            quoteFormReset();
            $(".cta_header_quote").find(".generic-form select").each(function () {
                var defval = $(this).attr("data-default-val");
                $(this).find("option").each(function () {
                    if (this.value == defval) {
                        $(this).parent("select").val(defval);
                        return false;
                    } else {
                        $(this).parent("select").prop("selectedIndex", 0);
                    }
                });
            });
        });
        $(".insurance-cta-type-switch").on("change", function () {
            $('.insurance-product-switch').attr("disabled", false);

            var productSwitch = $('.insurance-cta-type-switch').val();
            $('.select-insurance-product').addClass('hidden');
            $('.' + productSwitch).closest('.select-insurance-product').removeClass('hidden');
            $('.select-insurance-product').next('button').removeClass('hidden');
            $('.select-insurance-product').css('padding-right', '20px');
            $('.select-insurance-product').removeClass('col-xs-12');
            $('.select-insurance-product').addClass('col-xs-10');
            $('.quote-tool-form form').addClass('hidden');
            $('.insurance-product-switch').prop('selectedIndex', 0);

            $('.' + productSwitch).change(function () {
                if ($(this).find("option:selected").attr("data-form-route") != null && $(this).find("option:selected").attr("data-form-route") != "") {
                    window.location.href = $(this).find("option:selected").attr("data-form-route");
                }
                var formToShow = $(this).val();
                $(this).closest('.select-insurance-product').removeClass('col-xs-10');
                $(this).closest('.select-insurance-product').addClass('col-xs-12');
                $('.select-insurance-product').next('button').addClass('hidden');
                $(this).closest('.select-insurance-product').css('padding-right', '0');
                $(".quote-tool-form form").hide();

                //All forms for this page will have a hidden class on them by default...therefore we have remove the hidden
                //class on the form that corresponds to the product selected on the dropdown menu
                if ($("#" + formToShow).hasClass("hidden")) {
                    $("#" + formToShow).removeClass("hidden");
                }
                $("#" + formToShow).show();
                $(".generic-form").trigger("reset");
            });
        });
        //$(".cta_header_quote #insurance-type").prop("selectedIndex", 0);
    }

});*/





/***** Form Functions ***********************************************/
// Resets contact forms
/*function formReset(parent, fields) {
    parent.addClass('form-off');
    parent.children().removeAttr("style");
    parent.find("input, select, textarea").removeClass('error');
    parent.find(".errorSpan").hide();
    parent.find('.generic-form')[0].reset();

    if (parent.hasClass("contact-image")) {
        contactRepWithImageSize();
    }

    // Hide hidden fields
    for (var i = 0; i < fields.length; i++) {
        var field = fields[i];
        if (field.hidden) {
            parent.find('#' + field.id).closest('.form-focus, .form-hidden').hide();
        }
    }
}*/

// Displays thank you/error message for contact forms
function formMessage(parent, status) {
    var message;
    if (status == "thanks") {
        message = parent.find(".contactSideThankyou");
    } else {
        message = parent.find(".contactSideSubmitError");
    }
    message.siblings(":visible").fadeOut('slow', function () {
        message.css("display", "table-cell");
        setTimeout(function () {
            if (parent.parent().hasClass("contactSliderOuterCon")) {
                $('.contactSliderOuterCon').fadeOut(800, function () {
                    parent.find(".contact-close").trigger("click");
                });
            } else if (parent.parent().hasClass("about-contact-us-form")) {
                message.fadeOut(800, function () {
                    parent.find(".contact-close").trigger("click");
                });
            }
        }, 5000)
    });
}
/***** Form Functions ***********************************************/


/* jQuery plugin for adding multi-dimensional show/hide triggers to elements' $().data stores ***************/
(function ($) {
    $.fn.setTrigger = function (trigger) {
        return this.each(function () {
            $this = $(this);

            if ($this.data('trigger') === null || typeof $this.data('trigger') === 'undefined') {
                $this.data('trigger', {});
            }

            $this.data('trigger')[trigger.name] = {
                valid: false,
                values: trigger.values
            }
        });
    }
}(jQuery));

/* Mask Input Handling *************/
function maskInput(event, input, textbox, location, delimiter) {
    //Get the delimiter positons
    var locs = location.split(',');

    //Iterate until all the delimiters are placed in the textbox
    for (var delimCount = 0; delimCount <= locs.length; delimCount++) {
        for (var inputCharCount = 0; inputCharCount <= input.length; inputCharCount++) {

            //Check for the actual position of the delimiter
            if (inputCharCount == locs[delimCount]) {

                //Confirm thaft the delimiter is not already present in that position
                if (input.substring(inputCharCount, inputCharCount + 1) != delimiter) {
                    if (event.keyCode != 8 && event.keyCode != 46) {
                        input = input.substring(0, inputCharCount) + delimiter + input.substring(inputCharCount, input.length);
                    }
                }
            }
        }
    }
    textbox.value = input;
}

/* A few convenience plugins for jQuery *************/
(function ($) {
    // Reverse a jQuery array of elements
    $.fn.reverse = [].reverse;
}(jQuery));

