
$(document).ready(function(){
    footerBorder();
});

var marketingCarouselVisible;

$(window).scroll(function(){
    closeCountryList();
});


$(document).ready(function(){
    footerBorder();
});


function closeCountryList() {
    $('.country__list').slideUp(200);
}

function processCountrySelection(evt) {

    var countrySelectActivationClasses = ['countryNameSelected','countryFlagSelected','countrySelected','countrySVG'];
    if (evt.target.id == "" || evt.target.id == "countryList" || evt.target.className == "country_continent") {
        //evt.stopPropagation();
        closeCountryList();
        return;
    } else if (evt.target.className == "countryList") {
        var selectedCountry = $('.country__selected');
        selectedCountry.find('.country__flag--selected').removeClass().addClass('country__flag ' + $(this).attr('data-country-name'));
        selectedCountry.find('.country__name--selected').text($(this).text());
        if ($(this).attr('data-redirect') !== "" && $(this).attr('data-redirect')) {
            $('.country__list').hide();
            window.location.href = $(this).attr('data-redirect');
        } else {
            alert("Missing URL for " + $(this).find('.country__name').text());
        }
    } else {
        if($('.country__list').is(':visible')) {
            closeCountryList();
        } else if ($.inArray(evt.target.id, countrySelectActivationClasses) >-1 ) {
            $('.country__list').slideDown(400);
        }
    }
}

/*
 $('body').on('touchstart', function(e) {
 processCountrySelection(e);
 });
 */

var clickDisabled = false;

$('.country__list').on('touchmove', function(e) {
    e.stopPropagation();
});
$('.country__list').on('touchstart', function(e) {
    e.stopPropagation();
});
$('.country__selected').on('touchstart click', function(e) {
    e.stopImmediatePropagation();
    e.preventDefault()
    if (e.type == "touchstart") {
        if ($("#countryList").is(":visible") == true) {
            closeCountryList();
        } else {
            /*        if (clickDisabled != true) {
             if($("#countryList").is(":visible") == true){

             }else{
             processCountrySelection(e);
             }
             clickDisabled = true;
             setTimeout(function () {
             clickDisabled = false;
             }, 1000);
             }*/
            processCountrySelection(e);
        }
    } else {
        if($("#countryList").is(":visible") == true) {
            closeCountryList();
        } else {
            processCountrySelection(e);
        }
    }
});

$('body').on('click touchstart', function(e){
    e.stopPropagation();
    if (e.target.className != "country__selected") {
        if (e.type == "touchstart") {
            if ($("#countryList").is(":visible") == true) {
                closeCountryList();
            }
        } else {
            processCountrySelection(e);
        }
    }
});

/*
 When disclaimer is not present, remove top-border from footer
 */

function footerBorder(){
    if ($(".disclaimer--main").length == 0){
        $(".global-footer .wrapper").css("border-top", "none");
        $(".global-footer .wrapper").css("padding-top", "0");
    }
}



/*
 When disclaimer is not present, remove top-border from footer
 */

function footerBorder(){
    if ($(".disclaimer").length == 0){
        $(".global-footer .wrapper:not(.global-footer--microsite .wrapper)").css("border-top", "none");
    }
}

function matchFooterSectionHeights(){
    if ($(".footer-country-language-social").length != 0) {
        $(".footer-country-language-social").each(function (index) {
            var footerItems = $(".js-footerMatchHeights");
            var footerItemHeight = 0;

            footerItems.css('min-height', '0px');
           footerItems.each(function () {
                footerItemHeight = $(this).outerHeight() > footerItemHeight ? $(this).outerHeight() : footerItemHeight;

            });

            footerItems.css('min-height', footerItemHeight + 'px');


        });
    }
}

$(window).on("load",function(){
   if(!$(".hidden-xs").is(":visible")){
       matchFooterSectionHeights();
   }

});
$(window).on("resize",function(){
    if(!$(".hidden-xs").is(":visible")){
        matchFooterSectionHeights();
    }else{
        $(".footer-country-language-social").find("div.col-md-4:nth-of-type(-n+2)").removeAttr("style");

    }
});

