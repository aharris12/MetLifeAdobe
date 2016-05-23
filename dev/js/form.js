//Thankyou message functionality

function formPass(fid) {
    
    switch (fid){
        case "contactSidebar":
            $('.contactSideForm').fadeOut(2000);
            $('.contactSideThankyou, .contact-container--global .contactOtherDetails').fadeIn(800);  
        break;           
            
        case "contactSingle":
            $('.contact-us__contact-form').fadeOut(1000);
            $('#contact-single_thankyou, #contact-single_other').fadeIn(800);      
        break;    
                  
    } 
    
    $('.info-mandatory').removeClass("error-mandatory");
    $('.form-user-ctrl').removeClass("error");
    $('.form-user-grp').find('svg').css('fill', '#666');    

    setTimeout(function () {
        resetForm(fid);
    }, 5000);
}

function resetForm(fid) {
 
        switch (fid){
        case "contactSidebar":
          //in a timeout to avoid visual conflict with animation
           setTimeout(function () {
            $('#requestFormRightNav_Acc').trigger("reset");
            $('.contactSideThankyou, .contact-container--global .contactOtherDetails, .productUserType').fadeOut(2000);
            $('.contactSideForm').toggle();
            $('.contact-container--global').css("right", "-640px");
        }, 1000);
        break;        
            
        case "contactSingle":
            $('#requestFormRContactUs_Acc').trigger("reset"); 
            $('.contact-us__contact-form').fadeIn(1000);
            $('#contact-single_thankyou, #contact-single_other').fadeOut(2000);    
        break;
                  
    }
    
    
}

/*contact sidebar*/
/*$('[placeholder][data-required=true]').each(function () {
    console.log("broken")
    $(this).val($(this).attr('placeholder'));
});
$('[placeholder][data-placeholder]').each(function () {
    console.log("broken")
    $(this).val($(this).attr('placeholder'));
});*/

$('#productPolicy option[value=""]').attr('selected', true);


/***** Name Space Begin **************************************************************************/
var metlifeRedesign = {
    closeContacts: function () {
        $('.contactSliderOuterCon').animate({
            right: '-320'
        }, 200, function () {
            // $('.contactSideForm').removeClass('hidden');
            // $('.contactSideThankyou').addClass('hidden');
            $('.contactSideForm').show();
            $('.contactSideThankyou, .contactOtherDetails').hide();
            $('.contactSliderOuterCon').hide();
            $('.contactSideForm select').val("").trigger('change').removeClass('error').removeClass('formatError');
            $('.contactSideForm input,.contactSideForm textarea').val("").removeClass('error').removeClass('formatError');
            $('.contactSideForm input,.contactSideForm textarea').each(function () {
                var $this = $(this);
                var placeholder = $this.attr('placeholder');
                if (typeof placeholder != typeof undefined) {
                    $this.val(placeholder);
                }
            });
            $('.contactSideForm .info-mandatory').removeClass('error-mandatory');
            $('.feedbackLink').removeClass('hidden');
        });
    },
    onFSubmit: function ($this) {
        var fid = $this.attr('data-fsubmit');
        var $formid = $('[data-fid=' + fid + ']');
        var formStatus = true;
        // alert("form submitted.")

        //        var flag;
        //        $formid.find('[data-required=true]').each(function () {
        //            var $this = $(this);
        //            var placeholder = $this.attr('placeholder');
        //            if ($this.val() == placeholder) {
        //                $this.val("");
        //            }
        //            var val = $this.val();
        //            if (val.length == 0) {
        //                $this.addClass('error');
        //                $this.parent().find('.errorSpan').addClass('errorSpanOpen');
        //                $('.contactSideForm .info-mandatory').addClass('error-mandatory');
        //                $this.parent('.form-user-grp').find('svg').css('fill','#db3535');
        //                $this.val(placeholder);
        //                formStatus = false;
        //            }
        //        });

        var flag;
        $formid.find('[data-required=true]').each(function () {
            var $this = $(this);
            var placeholder = $this.attr('placeholder');
            if ($this.val() == placeholder) {
                $this.val("");
            }
            var val = $this.val();
            if (val == "New Product/Planning Services") {
                flag = "New";
            }
            if (val == "Existing Product/Policy") {
                flag = "Existing";
            }
            if (val.length == 0) {
                if (flag == "New") {
                    if (placeholder == "Policy/Contract #" || placeholder == "Question") {
                        $this.removeClass('error');
                        $this.parent().find('.errorSpan').removeClass('errorSpanOpen');
                        $this.parent('.form-user-grp').find('svg').css('fill', '#666');
                    }
                }
                else {
                    $this.addClass('error');
                    $this.parent().find('.errorSpan').addClass('errorSpanOpen');
                    $('.contactSideForm .info-mandatory').addClass('error-mandatory');
                    $this.parent('.form-user-grp').find('svg').css('fill', '#db3535');
                    $this.val(placeholder);
                    formStatus = false;
                }
            }
        });

        $formid.find('[data-valid-status]').each(function () {
            var attrDVS = $(this).attr('data-valid-status');
            if (attrDVS == 'failed') {
                $(this).addClass('error');
                formStatus = false;
            }
        });
        
        
        console.log(fid);

        if (formStatus && fid != "contactCard" && fid != "contactSidebarQuote") {
            formPass(fid);
        } else {
            $formid.find('.info-mandatory').addClass('error-mandatory');
        }
        return formStatus;
    }
};
/***** Name Space End ****************************************************************************/

$('.globalContact').on('click', function (evt) {
    evt.preventDefault();
    $('.contactSliderOuterCon').show();
    $('.contactSliderOuterCon').stop().animate({
        right: '0'
    }, 200);
    $('.feedbackLink').addClass('hidden');
});

// Closes contacts
$('.contactsClose').click(function (e) {
    e.preventDefault();
    metlifeRedesign.closeContacts();
});

function postLeadform($formid){

   console.log($formid)
   var formName = $formid.attr('name');
    console.log(formName)
    formProcessorSubmit(formName,'a','chn-har-thankyou','chn-har-error','chn-har-exception');
    var requestType = $('[data-fid="' + formName + '"]').find(".productPolicy").find(':selected').val()
    var ajaxUrl;
    console.log(requestType)
    if(requestType == 'New Product/Planning Services'){
        console.log(requestType == 'New Product/Planning Services')
        console.log($('[data-fid="' + formName + '"]').attr("data-new-product"))
        ajaxUrl = $('[data-fid="' + formName + '"]').attr("data-new-product");
        var formData = postSerialize($('form[name='+formName+']'));
        $.ajax({
            url: ajaxUrl,
            type: 'POST',
            data: formData,
            async: false,
            contentType: 'application/x-www-form-urlencoded',
            processData: false,
            success: function (returndata) {
                //console.log(returndata);
            },
            error: function(){
                console.log("error in ajax form submission");
            }
        });
    }
    if(requestType == 'Existing Product/Policy'){
        console.log(requestType == 'Existing Product/Policy')
        ajaxUrl = $('[data-fid="' + formName + '"]').attr("data-existing-product");
        if(typeof FormData !== 'undefined'){
            var formData = new FormData($('form[name='+formName+']')[0]);
            $.ajax({
                url: ajaxUrl,
                type: 'POST',
                data: formData,
                async: false,
                contentType: false,
                processData: false,
                success: function (returndata) {
                    //console.log(returndata);
                },
                error: function(){
                    console.log("error in ajax form submission");
                }
            });
        } else {
            var formData = postSerialize($('form[name='+formName+']'));
            $.ajax({
                url: ajaxUrl,
                type: 'POST',
                data: formData,
                async: false,
                contentType: 'application/x-www-form-urlencoded',
                processData: false,
                success: function (returndata) {
                    //console.log(returndata);
                },
                error: function(){
                    console.log("error in ajax form submission");
                }
            });
        }
    }
   /* if(typeof FormData !== 'undefined'){
        var formData = new FormData($('form[name='+formName+']')[0]);
        $.ajax({
            url: ajaxUrl,
            type: 'POST',
            data: formData,
            async: false,
            contentType: false,
            processData: false,
            success: function (returndata) {
                //console.log(returndata);
            },
            error: function(){
                console.log("error in ajax form submission");
            }
        });
    } else {
        var formData = postSerialize($('form[name='+formName+']'));
        $.ajax({
            url: ajaxUrl,
            type: 'POST',
            data: formData,
            async: false,
            contentType: 'application/x-www-form-urlencoded',
            processData: false,
            success: function (returndata) {
                //console.log(returndata);
            },
            error: function(){
                console.log("error in ajax form submission");
            }
        });
    }*/
}

$('.contatMeSidebarBtn, .contatMeContactCardBtn').on('click', function (e) {

    //alert("contact from submitted");
    e.preventDefault();
    var $this = $(this);
    var isValid = metlifeRedesign.onFSubmit($(this));

    //25-01-2016 : Ryan - None of this is working, commenting it, needs refactoring.

    if (isValid) {

        var fid = $this.attr('data-fsubmit');
        var $formid = $('[data-fid=' + fid + ']');
        postLeadform($formid);
        $('.productUserType').hide();

        if (fid == "advisorContactForm" || fid == "advisorContactForm-mob") {
            $('.aidFormCon').hide();
            $('.aiwHeading').hide();
            $('.advisorClose').hide();
            $('.adImageThankYou').css("display", "table-cell");
        } else if (fid == "quoteleadform") {
            $(this).closest('.quote_right_mlt').hide();
            $(this).closest('.quote_right_sit').hide();
            $('.quote_results_thank_you').show();
        } else if (fid == "contactCard") {
            var temp = "[data-fid='" + fid + "']";
            //$("[data-fid='contactCard']").hide();
            $('.contactCard').hide();
            $(temp).parents().find('.contactSideThankyou, .contactOtherDetails').show();
            setTimeout(function () {
                $(temp).parents().find('.contactSideThankyou, .contactOtherDetails').fadeOut('slow', function () {
                    $('.contactCard').show();
                    $('#requestFormContactCard_Acc').trigger("reset");
                    $('.form-minimize').trigger('click');
                });
            }, 5000);
        } else if (fid == "contactSidebarQuote") {
            $(".results-form__text").addClass("hidden");
            $(".results-form__inputs").addClass("hidden");
            $(".apply-disclaimer").addClass("hidden");
            $(".contact-thanks").removeClass("hidden");

        } else {
            $('.' + fid).fadeOut('slow', function () {
                setTimeout(function () {
                    $('.contactSliderOuterCon').fadeOut(2000);
                    $('.contactsClose').trigger('click');
                }, 5000)
            });
        }
    } else {
        //alert("invalid");
    }
});

/* contact sidebar script */
/*$('[placeholder][data-placeholder]').on('focus', function () {
    console.log("broken")
    $this = $(this);
    var placeholder = $(this).attr('placeholder');
    console.log($(this).val())
    if ($this.val() == placeholder) {
        $this.val("");
    }
});*/

/*$('[placeholder][data-placeholder]').on('blur', function () {
    console.log("broken")
    $this = $(this);
    var placeholder = $(this).attr('placeholder');
    if ($this.val() == "") {
        $this.val(placeholder);
    }
});*/

/*$('[placeholder][data-required=true]').on('focus', function () {
    console.log("broken")
    $this = $(this);
    var placeholder = $(this).attr('placeholder');
    if ($this.val() == placeholder) {
        $this.val("");
    }
    $this.removeClass('error formatError');
});*/

$('select[data-required=true]').on('change', function () {
    $(this).trigger('blur');
});

$('[data-required=true]').on('blur', function () {
    var $this = $(this);
    var placeholder = $this.attr('placeholder');
    if ($this.val() == placeholder) {
        $this.val("");
    }
    var val = $this.val();
    if (val.length == 0) {
        $this.addClass('error');
        $this.val(placeholder);
    } else {
        var attrDVS = $this.attr('data-valid-status');
        if (typeof attrDVS !== typeof undefined && attrDVS !== false) {
            //do nothing
            if (attrDVS == 'failed') {
                //$(this).addClass('error');
                formStatus = false;
            }
        } else {
            $this.removeClass('error');
            $this.parent().find('.errorSpan').removeClass('errorSpanOpen');
            $this.parent('.form-user-grp').find('svg').css('fill', '#666');
        }
    }
});

$('[data-valid-type=email]').on('blur', function (evt) {
    evt.preventDefault();
    var $this = $(this);
    var val = $this.val();
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    validateOnType(val, $this, re);
});

$('[data-valid-type=zip]').on('blur', function (evt) {
    evt.preventDefault();
    var $this = $(this);
    var val = $this.val();
    var re = /^\d{5}$/i;
    validateOnType(val, $this, re);
});

$('[data-valid-type=zip]').on('keyup', function (evt) {
    var regexp = /[^0-9]/;
    var str = $(this).val();
    if (str.match(regexp)) {
        str = str.replace(/\D/g, "");
        $(this).val(str);
    }
    var len = str.length;
    if (len > 5) {
        str = str.substr(0, 5);
        $(this).val(str);
        return false;
    }
});

$('[data-valid-type=phone]').on('blur', function (evt) {
    evt.preventDefault();
    var $this = $(this);
    $this.trigger('keyup')
    var val = $this.val();
    var re = /^([0-9]{3}[-][0-9]{3}[-][0-9]{4})$/;
    validateOnType(val, $this, re);
});

$('[data-valid-type=phone]').on('keyup', function (evt) {
    var regexp = /[^0-9]/;
    var input_value = $(this).val();
    if (input_value.match(regexp)) {
        input_value = input_value.replace(/\D/g, "");
        $(this).val(input_value);
    }
    var num_len = $(this).val().length;
    if (num_len >= 3 && num_len < 7) {
        input_value = input_value.substring(0, 3) + "-" + input_value.substring(3, num_len);
    } else if (num_len >= 7) {
        input_value = input_value.substring(0, 10)
        input_value = input_value.substring(0, 3) + "-" + input_value.substring(3, 6) + "-" + input_value.substring(6, num_len);
    }
    if (evt.keyCode == 8) {
        var str = input_value.charAt(input_value.length - 1);
        if (str == "-") {
            input_value = input_value.substring(0, input_value.length - 1)
        }
    }
    $(this).val(input_value);
});

var validateOnType = function (val, $this, re) {
    var placeholder = $this.attr('placeholder');
    if (val.length > 0 && val != placeholder) {
        if (val.match(re)) {
            $this.removeClass('error');
            $this.removeClass('formatError');
            $this.removeAttr('data-valid-status');
        } else {
            $this.addClass('error');
            $this.addClass('formatError');
            $this.attr('data-valid-status', 'failed');
        }
    } else {
        $this.removeClass('formatError');
        var attrDVS = $this.attr('data-required');
        if (typeof attrDVS !== typeof undefined && attrDVS !== false) {

        } else {
            $this.removeClass('error');
            $this.removeAttr('data-valid-status');
        }
    }
};

$('.productPolicy').on('change', function () {
    $(this).find('option').eq(1).val('New Product/Planning Services');
    $(this).find('option').eq(2).val('Existing Product/Policy');
    var val = $(this).val();
    var $this = $(this);
    var $con = $this.closest('.productPolicyTypes');
    if (val == "New Product/Planning Services") {
        $con.find('.productUserType').hide();
        $con.find('.newProductUser').show();
        var count = 0;
        $con.find('.newProductUser input[type=checkbox]').each(function () {
            if ($(this).is(':checked')) {
                count++;
            }
        });
        //if (count > 0 && count <= 5) {
        //if (count > 0 && count <= document.getElementById("maxCheckedItemId").value) {
        if (count > 0 && count <= $(this).parents().find('.newProductUser input[type=checkbox]').length ) {
            $this.attr('data-valid-status', 'success');
            $this.removeClass('error');
            $con.find('.productCount').removeClass('errorText');
        } else {
            $this.attr('data-valid-status', 'failed');
            //$this.addClass('error');
        }
        if ($this.hasClass('error')) {
            $con.find('.productCount').addClass('errorText');
        } else {
            $con.find('.productCount').removeClass('errorText');
        }
    } else if (val == "Existing Product/Policy") {
        $con.find('.productUserType').hide();
        $con.find('.existingProductUser').show();
        var val = $con.find('.productUserQuestion').val();
        var placeholder = $con.find('.productUserQuestion').attr('placeholder');
        if (val == "" || val == placeholder) {
            $this.attr('data-valid-status', 'failed');
            //$this.addClass('error');
        } else {
            $this.attr('data-valid-status', 'success');
            $this.removeClass('error');
        }
        if ($this.hasClass('error')) {
            $con.find('.productUserQuestion').addClass('error');
        }
    } else {
        $con.find('.productUserType').hide();
    }
});

$('.user-checkbox').on('click', function () {
    var count = 0;
    //var $con = $(this).closest('.productPolicyTypes');
    var $con = $(this).parents().find('.productPolicyTypes');
    $con.find('.newProductUser input[type=checkbox]').each(function () {
        if ($(this).is(':checked')) {
            count++;
        }
    });
    //if (count > 0 && count <= 5) {
    //if (count > 0 && count <= document.getElementById("maxCheckedItemId").value) {
    if (count > 0 && count <= $(this).parents().find('.newProductUser input[type=checkbox]').length ) {
        $con.find('.productPolicy').attr('data-valid-status', 'success');
        $con.find('.productPolicy').removeClass('error');
        $con.find('.productCount').removeClass('errorText');
        $('.productPolicyTypes').find('svg').css('fill', '#666');
    } else {
        $con.find('.productPolicy').attr('data-valid-status', 'failed');
        $con.find('.productPolicy').addClass('error');
        $con.find('.productCount').addClass('errorText');
        $('.productPolicyTypes').find('svg').css('fill', '#db3535');
    }
});

$('.productUserQuestion').on('blur', function () {
    var $this = $(this);
    var $con = $this.closest('.productPolicyTypes');
    var val = $this.val();
    var placeholder = $this.attr('placeholder');
    if ($this.val() == "") {
        $this.val(placeholder);
    }
    if (val == "" || val == placeholder) {
        $con.find('.productPolicy').attr('data-valid-status', 'failed');
        $con.find('.productPolicy').addClass('error');
        $this.addClass('error');
        $('.productPolicyTypes').find('svg').css('fill', '#db3535');
    } else {
        $con.find('.productPolicy').attr('data-valid-status', 'success');
        $con.find('.productPolicy').removeClass('error');
        $this.removeClass('error');
        $('.productPolicyTypes').find('svg').css('fill', '#666');
    }
});

$(document).on('focus', '.advFormOff .adFormFocus .form-user-ctrl', function () {
    $('.advFormOff').removeClass('advFormOff')
});

$('.advisorClose').on('click', function (evt) {
    evt.preventDefault();
    $('.adImageWidgetFormCon').addClass('advFormOff');
    $('.adImageWidgetFormCon select').val("").trigger('change').removeClass('error').removeClass('formatError');
    $('.adImageWidgetFormCon input,.adImageWidgetFormCon textarea').val("").removeClass('error').removeClass('formatError');
    $('.adImageWidgetFormCon input,.adImageWidgetFormCon textarea').each(function () {
        var $this = $(this);
        var placeholder = $this.attr('placeholder');
        if (typeof placeholder != typeof undefined) {
            $this.val(placeholder);
        }
    })
});

/***** Header End ********************************************************************/


/***** Expanded Contact Advisor Form Begin *****************************************************/
$(".firstName, .lastName, .phoneNumber, .emailAddress").click(function () {
    $(".city, .state, .zip, .address, .disclaimer_text").addClass("display_on_click");
    $(".close_button").addClass("display_close_button_click");
});

$(".close_button").click(function () {
    $(".city, .state, .zip, .address, .disclaimer_text, .box_hidden_types").removeClass("display_on_click");
    $(".close_button").removeClass("display_close_button_click");
});
/***** Expanded Contact Advisor Form End *****************************************************/



/* lead form functions */
function formProcessorSubmit(formName, formDiv, thankyouDiv, errorDiv, exceptionDiv) {
    var lead = "";
    var scenarioName = "";
    var mmrep = "";
    var formObjectName = document.getElementById(formName);
    var reserveid = getCookie("ReserveID");
    if (null != reserveid) AddInputParameter(formObjectName, "input", "reserveid", reserveid, document);
    else;

    //AddInputParameter(formObjectName, "input", "webFormPage_ThankYouPage", TKM, document);
    if (null != document.getElementById("beginapp-rep")) mmrep = document.getElementById("beginapp-rep").value;
    if (null != mmrep && "" != mmrep) {
       /* console.debug(subContentGroupDirectory);
        console.debug(contentGroupDirectory);
        console.debug(audience);*/
        var lsubContentGroupDirectory = "";
        var lcontentGroupDirectory = "";
        var laudience = "";
        if ("" != subContentGroupDirectory) {
            //console.debug("1.1" + subContentGroupDirectory);
            lsubContentGroupDirectory = subContentGroupDirectory + "-" + mmrep;
            lcontentGroupDirectory = contentGroupDirectory;
            laudience = audience;
        } else if ("" != contentGroupDirectory) {
           // console.debug("2.1" + contentGroupDirectory);
            lcontentGroupDirectory = contentGroupDirectory + "-" + mmrep;
            lsubContentGroupDirectory = subContentGroupDirectory;
            laudience = audience;
        } else if ("" != audience) {
           // console.debug("3.1" + audience);
            laudience = audience + "-" + mmrep;
            lcontentGroupDirectory = contentGroupDirectory;
            lsubContentGroupDirectory = subContentGroupDirectory;
        }
       /* console.debug(lsubContentGroupDirectory);
        console.debug(lcontentGroupDirectory);
        console.debug(laudience);*/
        if ("undefined" == typeof contentGroupDirectory) AddInputParameter(formObjectName, "input", "contentGroup", "", document);
        else AddInputParameter(formObjectName, "input", "contentGroup", lcontentGroupDirectory, document);
        if ("undefined" == typeof subContentGroupDirectory) AddInputParameter(formObjectName, "input", "subcontentGroup", "", document);
        else AddInputParameter(formObjectName, "input", "subcontentGroup", lsubContentGroupDirectory, document);
        if ("undefined" == typeof audience) AddInputParameter(formObjectName, "input", "audience", "", document);
        else AddInputParameter(formObjectName, "input", "audience", laudience, document);
    } else {
        var CGFrQS = "";
        var SCGFrQS = "";
        var AUFrQS = "";
        CGFrQS = getQueryString("CG");
        SCGFrQS = getQueryString("SCG");
        AUFrQS = getQueryString("AU");
        if ("" != CGFrQS) AddInputParameter(formObjectName, "input", "contentGroup", CGFrQS, document);
        else if ("undefined" == typeof contentGroupDirectory) AddInputParameter(formObjectName, "input", "contentGroup", "", document);
        else AddInputParameter(formObjectName, "input", "contentGroup", contentGroupDirectory, document);
        if ("" != SCGFrQS) AddInputParameter(formObjectName, "input", "subcontentGroup", SCGFrQS, document);
        else if ("undefined" == typeof subContentGroupDirectory) AddInputParameter(formObjectName, "input", "subcontentGroup", "", document);
        else AddInputParameter(formObjectName, "input", "subcontentGroup", subContentGroupDirectory, document);
        if ("" != AUFrQS) AddInputParameter(formObjectName, "input", "audience", AUFrQS, document);
        else if ("undefined" == typeof audience) AddInputParameter(formObjectName, "input", "audience", "", document);
        else AddInputParameter(formObjectName, "input", "audience", audience, document);
    }
    if ("requestFormRightNav_Acc" == formName) {
        var prodType = document.getElementById("requestType").value;
        if ("" != prodType)
            if ("Existing Product/Policy" == prodType) lead = "ServiceLead";
            else if (prodType.length > 11 && "New Product" == prodType.substr(0, 11)) lead = "NewLead";
    } else if ("requestFormRightNav" == formName) {
        var prodType = "";
        if (document.getElementById("requestTypeQuote")) prodType = document.getElementById("requestTypeQuote").value;
        else if (document.getElementById("requestType")) prodType = document.getElementById("requestType").value;
        if ("" != prodType)
            if ("Existing Product/Policy" == prodType) lead = "ServiceLead";
            else if (prodType.length >= 11 && "New Product" == prodType.substr(0, 11)) lead = "NewLead";
    } else {
        var prodType = "";
        if (document.getElementById("requestType")) prodType = document.getElementById("requestType").value;
        if ("" != prodType)
            if (prodType.length >= 11 && "New Product" == prodType.substr(0, 11)) lead = "NewLead";
            else if ("Existing Product/Policy" == prodType) lead = "ServiceLead";
    }
    if ("NewLead" != lead && "ServiceLead" != lead) {
        lead = "NonLeadForm";
        if (document.getElementById("scenarioName") && "" != document.getElementById("scenarioName").value) scenarioName = document.getElementById("scenarioName").value;
    }
   // console.debug("Lead type: " + lead);
    var results = document.cookie.match("(^|;) ?WT_FPC=([^;]*)(;|$)");
    if (null != results) {
        var fullID = unescape(results[2]);
        var partID = fullID.split(":");
        var visitorID = partID[0].split("=");
    }
    if ("undefined" == typeof visitorID) AddInputParameter(formObjectName, "input", "visitorIDReq", "", document);
    else AddInputParameter(formObjectName, "input", "visitorIDReq", visitorID[1], document);
    var urlNode = document.URL;
    urlNode = getPageFromURLNode(formObjectName, mmrep);
    if ("requestFormRightNav" == formName) {
        //console.debug("document.requestFormRightNav.coverage" + document.requestFormRightNav.coverage);
        if (document.requestFormRightNav.coverage)
            if (document.requestFormRightNav.coverage.value < 1e5) {
                urlNode = urlNode.split("?");
                urlNode = urlNode[0];
            }
    }
    AddInputParameter(formObjectName, "input", "webFormPage_urlPagevalue", urlNode, document);
    var validationSuccess = true;
    if (validationSuccess) {
        /*var tempURL = "www.metlife.com";
         if ("view" == location.host.match("view")) tempURL = "view.metlife.com"; else tempURL = "www.metlife.com";
         if ("int" == location.host.split(".", 1)) tempURL = "int." + tempURL; else if ("qa" == location.host.split(".", 1)) tempURL = "qa." + tempURL; else if ("dev" == location.host.split(".", 1)) tempURL = "dev." + tempURL;
         var preFill = formObjectName.lstPnPPreFillParameters;
         console.debug("Prefill Parameters is: " + preFill);
         if (null == preFill || "undefined" == typeof preFill) console.debug("No Prefill Parameters is: "); else {
         var prefillParam = preFill.value;
         var prefillList = prefillParam.split(",");
         var PnPPreFillValues = "";
         for (i = 0; i < prefillList.length; i++) {
         //var prefillListParam = eval("formObjectName." + prefillList[i] + ".value");
         //console.debug("prefillListParam is: " + prefillListParam);
         //PnPPreFillValues = PnPPreFillValues + prefillList[i] + ":" + prefillListParam + "|";
         }
         document.cookie = "PnPPreFill=" + PnPPreFillValues + "; path=/";
         }
         varwebformID = formObjectName.webformId;
         if (null == varwebformID || "undefined" == typeof varwebformID) var submitUrl = "https://" + tempURL + "/wps/proxy/MCGenericWebForms/WebFormServletAction"; else var submitUrl = "https://" + tempURL + "/wps/proxy/MCWebForms5KSales/WebFormServletAction";
         addSessionParameters(formObjectName);
         console.debug("Doing Webform submit to: " + submitUrl);
         */

    }
}

function AddInputParameter(a, b, c, d, e) {
   /* console.log('adding params');
    console.debug("form param nam eis" + c);
    console.debug("form param value is" + d);*/
    var f = e.createElement(b);
    f.setAttribute("type", "hidden");
    f.setAttribute("name", c);
    f.setAttribute("value", d);
    a.appendChild(f);
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) c_end = document.cookie.length;
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}

function getQueryString(a) {
    a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var b = "[\\?&]" + a + "=([^&#]*)";
    var c = new RegExp(b);
    var d = c.exec(window.location.href);
    if (null == d) return "";
    else return d[1];
}

function getPageFromURLNode(a, b) {
    var c = document.URL;
   // console.debug("url node is" + c);
    var d = "";
    var e = window.location.search.split("?");
    var f = "";
    var g = "";
    var h = false;
    if (null != document.getElementById("WT.mc_id")) {
        mcid = getCookie("SessionMCID");
        /*console.debug("mcid is empty for mc_id " + mcid);*/
        AddInputParameter(a, "input", "wb_code", mcid, document);
        AddInputParameter(a, "input", "WT.mc_id", mcid, document);
    }
    if (2 == e.length) {
        var i = e[1].split("&");
       /* console.debug("urlParams Length: " + i.length);*/
        for (var j = 0; j < i.length; j++) {
            var k = i[j].split("=");
            if ("wt.mc_id" == k[0].toLowerCase()) {
                /*console.debug("value for  wt_mc_id is " + k[1]);*/
                AddInputParameter(a, "input", "wb_code", k[1], document);
            }
            if ("" != b)
                if ("pagefrom" == k[0].toLowerCase()) {
                    d = k[1] + "-" + b;
                   /* console.debug("newPageFrom:" + d);*/
                    if (j == i.length - 1) g = g + k[0] + "=" + d;
                    else g = g + k[0] + "=" + d + "&";
                    h = true;
                } else if (j == i.length - 1) g += i[j];
                else g = g + i[j] + "&";
        }
        //console.debug("pageFrmCheck:" + h);
        //console.debug("newURLnodeParams:" + g);
        if (h) {
            var l = document.URL;
            var m = l.split("?");
            f = window.location.href.split("#")[1];
            if ("" != f) c = m[0] + "?" + g;
            else c = m[0] + "?" + g + "#" + f;
        }
    }
   // console.debug("urlNode:" + c);
   // console.debug("After Changing urlNode is " + c);
    return c;
}

function addSessionParameters(a) {
    var b = sessionVars.getSessionParams();
    for (var c in b)
        if (b.hasOwnProperty(c))
            if ("" !== b[c])
                if (checkFormField(a, c)) AddInputParameter(a, "input", c, b[c], document);
                else a.elements[c].value = b[c];
}

function checkFormField(a, b) {
    if (void 0 == a.elements[b]) return true;
    else return false;
}
var sessionVars = {
    init: function (a) {
        var b = "";
        if (a.override.length > 0 && a.no_override.length > 0) b = a.override + "," + a.no_override;
        else if (a.override.length > 0) b = a.override;
        else if (a.no_override.length > 0) b = a.no_override;
        if (b.length > 0) {
            var c = a.override.split(",");
            for (var d = 0; d < c.length; d++) c[d] = c[d].toLowerCase();
            var e = b.split(",");
            var f = sessionVars.getCookie("SESS_VARS");
            if (f.length > 0) {
                var g = sessionVars.getArrayFromString(f);
                for (var d in g)
                    if (g.hasOwnProperty(d))
                        if ("" == g[d] || sessionVars.isOverrideParam(c, d.toLowerCase()))
                            if ("" !== sessionVars.getParameterFromURL(d)) g[d] = sessionVars.getParameterFromURL(d);
                var h = "";
                for (var d in g)
                    if (g.hasOwnProperty(d)) h += d + "=" + g[d] + ":";
                if (h.length > 0) h = h.substring(0, h.length - 1);
                sessionVars.expairSecureCookie("SESS_VARS", h, "", "/", true);
            } else {
                var h = "";
                for (var d = 0; d < e.length; d++)
                    if (d == e.length - 1) h += e[d] + "=" + sessionVars.getParameterFromURL(e[d]);
                    else h += e[d] + "=" + sessionVars.getParameterFromURL(e[d]) + ":";
                sessionVars.expairSecureCookie("SESS_VARS", h, "", "/", true);
            }
        }
    },
    isOverrideParam: function (a, b) {
        if (a.indexOf(b) >= 0) return true;
        else return false;
    },
    getSessionParams: function () {
        var a = sessionVars.getCookie("SESS_VARS");
        if (a.length > 0) return sessionVars.getArrayFromString(a);
        else return null;
    },
    getArrayFromString: function (a) {
        var b = [];
        var c = a.split(":");
        for (var d = 0; d < c.length; d++) {
            var e = c[d].split("=");
            b[e[0]] = e[1];
        }
        return b;
    },
    setCookie: function (a, b, c) {
        var d = new Date();
        d.setDate(d.getDate() + c);
        document.cookie = a + "=" + escape(b) + (null == c ? "" : ";expires=" + d.toGMTString()) + ";path=/";
    },
    expairSecureCookie: function (a, b, c, d, e) {
        var f = new Date();
        f.setTime(f.getTime());
        if (c) c = 365 * c * 1e3 * 60 * 60 * 24;
        var g = new Date(f.getTime() + c);
        document.cookie = a + "=" + escape(b) + (c ? ";expires=" + g.toGMTString() : "") + (d ? ";path=" + d : "") + (e ? ";secure" : "");
    },
    getCookie: function (a) {
        if (document.cookie.length > 0) {
            c_start = document.cookie.indexOf(a + "=");
            if (c_start != -1) {
                c_start = c_start + a.length + 1;
                c_end = document.cookie.indexOf(";", c_start);
                if (c_end == -1) c_end = document.cookie.length;
                return unescape(document.cookie.substring(c_start, c_end));
            }
        }
        return "";
    },
    getParameterFromURL: function (a) {
        var b = window.location.search.substring(1);
        var c = function (b) {
            var c = b.split("=");
            var d = decodeURIComponent(c[0]);
            var e = decodeURIComponent(c[1]);
            if (d.toLowerCase() == a.toLowerCase()) return e;
            return "";
        };
        var d = "";
        if (b.indexOf("&") > -1) {
            var e = b.split("&");
            for (var f = 0; f < e.length; f++) {
                d = c(e[f]);
                if ("" !== d) break;
            }
        } else d = c(b);
        return d;
    }
};

/***** Radio Selector Begin ***********************************************************/
// Sets the radio button image
$(".form-radio-grp svg, .image_radio svg").on('click', function(){
    console.log("I've been clicked");
    var radioButton = $(this).siblings('input');
    if (!radioButton.prop('checked')){
        radioButton.prop('checked', true);
        var radioName = radioButton.prop('name');
        $('input[name=' + radioName + ']').siblings('svg').toggle();
    };
});


// Sets the radio button image

/***** Radio Selector End ***********************************************************/


/***** Begin Country Selector ***********************************************************/
$('.country_selector_container').click(function () {
    $('.country_list_container').slideToggle(500).scrollTop(0);
    return false;
});

$('.country_group').click(function () {
    var selectedCountry = $('.country_selector_container .selected');
    selectedCountry.find('.country_flag').attr('src', $(this).find('.country_flag').attr('src'));
    selectedCountry.find('.country_name').text($(this).find('div.country_name').text());
    if ($(this).attr('data-redirect') !== "" && $(this).attr('data-redirect')) {
        window.location.href = $(this).attr('data-redirect');
    } else {
        alert("Missing URL for " + $(this).find('div.country_name').text());
    }
});
/***** End Country Selector *************************************************************/

/****** GLT Results expanded form functionality *********/
$(".first_name, .last_name, .phone_number, .email_address").click(function () {
    if ($(".disclaimer_apply").hasClass('hidden')) {
        $(".disclaimer_apply").removeClass('hidden');
    } else {
        $(".disclaimer_apply").removeClass('hidden');
    }
});


$(".first_name, .last_name, .phone_number, .email_address").click(function () {
    $(".htr_address").removeClass('hidden');
    $(".htr_city").removeClass('hidden');
    $(".htr_select_state").removeClass('hidden');
    $(".htr_zip_code").removeClass('hidden');
    $(".disclaimer_apply").removeClass('hidden-lg');
    $(".disclaimer_apply").addClass('visible-lg');
});


function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};

//Start Validations For Unsubscribe Email
function unsubscribeEmailDNSS() {	
	 
	var emailId = document.getElementById("email").value;
	var isValidEmailId = isValidEmailAddress(emailId)
	 
	if (isValidEmailId == false) {	
		document.getElementById('email').value = "";
		document.getElementById('errorText').style.visibility = "visible";
		document.getElementById('errorText').style.color = "red";
		document.getElementById('enterEmail').style.display = "block";
		document.getElementById('thanksMessage').style.display = "none";
	} else {	
		document.getElementById('enterEmail').style.display = "none";
		document.getElementById('thanksMessage').style.display = "block";
		document.getElementById('errorText').style.visibility = "hidden";		 
		UnsubscribeProcessorSubmit(emailId);
	}
}
// End Validations For Unsubscribe Email

function UnsubscribeProcessorSubmit(emailId)  {    
    	
	 var i = "/wps/proxy/MCDNSSService/emailPost.do?email="+emailId;
	 $.ajax({
		 url: i,
		 type: 'POST',      
         async: false,
         contentType: false,
         processData: false,
         handleAs: "text",
         enctype:"multipart/form-data",       
         success: function (data) {
               console.log(data);    
         },
         error: function(){         	
         }
   });
}