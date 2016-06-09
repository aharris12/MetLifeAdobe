//Current
/*$('.productPolicy').on('change', function () {
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

function postLeadform($formid){

 var formName = $formid.attr('name');
 formProcessorSubmit(formName,'a','chn-har-thankyou','chn-har-error','chn-har-exception');
 var requestType = $('[data-fid="' + formName + '"]').find(".productPolicy").find(':selected').val()
 var ajaxUrl;
 $('[data-fid="' + formName + '"]').find('[data-valid-type=phone]').val($('[data-fid="' + formName + '"]').find('[data-valid-type=phone]').val().replace(/[^\w\s]/gi, ''))
 if(requestType == 'New Product/Planning Services'){
 ajaxUrl = $('[data-fid="' + formName + '"]').attr("data-new-product");
 var jsonData = {};
 var formData = $('form[name='+formName+']').serializeArray();
 $.each(formData, function() {
 if (jsonData[this.name]) {

 if (!jsonData[this.name].push) {
 jsonData[this.name] = [jsonData[this.name]];

 }
 jsonData[this.name].push(this.value || '');
 } else {

 jsonData[this.name] = this.value || '';
 if (!jsonData[this.name].push) {
 if(this.name == "prodInt" || this.name == "prodInterest"){
 jsonData[this.name] = [jsonData[this.name]];

 }
 }
 }

 });

 console.log(JSON.stringify(jsonData));
 $.ajax({
 url: ajaxUrl,
 type: 'POST',
 dataType: 'json',
 data: JSON.stringify(jsonData),
 async: true,
 contentType: 'application/json',
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
});*/

/*IS THIS USED??*/
/*
$('.globalContact').on('click', function (evt) {
    evt.preventDefault();
    $(".contactSidebar").find(".form-user-grp").each(function () {
        $(this).find("input, select, textarea").removeClass('error');
        $(this)[0].reset();
    });
    $('.contactSliderOuterCon').show();
    $('.contactSliderOuterCon').stop().animate({
        right: '0'
    }, 200);
    $('.feedbackLink').addClass('hidden');
});

$('.contactsClose').click(function (e) {
    e.preventDefault();
    metlifeRedesign.closeContacts();
});

 function AddInputParameter(a, b, c, d, e) {
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
 var d = "";
 var e = window.location.search.split("?");
 var f = "";
 var g = "";
 var h = false;
 if (null != document.getElementById("WT.mc_id")) {
 mcid = getCookie("SessionMCID");
AddInputParameter(a, "input", "wb_code", mcid, document);
AddInputParameter(a, "input", "WT.mc_id", mcid, document);
}
if (2 == e.length) {
    var i = e[1].split("&");
    for (var j = 0; j < i.length; j++) {
        var k = i[j].split("=");
        if ("wt.mc_id" == k[0].toLowerCase()) {
            AddInputParameter(a, "input", "wb_code", k[1], document);
        }
        if ("" != b)
            if ("pagefrom" == k[0].toLowerCase()) {
                d = k[1] + "-" + b;
                if (j == i.length - 1) g = g + k[0] + "=" + d;
                else g = g + k[0] + "=" + d + "&";
                h = true;
            } else if (j == i.length - 1) g += i[j];
            else g = g + i[j] + "&";
    }
    if (h) {
        var l = document.URL;
        var m = l.split("?");
        f = window.location.href.split("#")[1];
        if ("" != f) c = m[0] + "?" + g;
        else c = m[0] + "?" + g + "#" + f;
    }
}
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

 //Begin Country Selector
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
 //End Country Selector


 //GLT Results expanded form functionality
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

$(".firstName, .lastName, .phoneNumber, .emailAddress").click(function () {
    $(".city, .state, .zip, .address, .disclaimer_text").addClass("display_on_click");
    $(".close_button").addClass("display_close_button_click");
});

$(".close_button").click(function () {
    $(".city, .state, .zip, .address, .disclaimer_text, .box_hidden_types").removeClass("display_on_click");
    $(".close_button").removeClass("display_close_button_click");
});
*/
/*IS THIS USED??*/

