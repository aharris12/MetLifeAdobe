
$(document).ready(function(){
    footerBorder();
});


function closeCountryList() {
    $('.country__list').slideUp(200).scrollTop(0);
}

function processCountrySelection(evt) {
    var countrySelectActivationClasses = ['countryNameSelected','countryFlagSelected','countrySelected','countrySVG', 'country__label'];
    if (evt.target.id == "" || evt.target.id == "countryList" || evt.target.className == "country_continent" ) {

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
            $('.country__list').slideDown(400).scrollTop(0);
        }
    }
}

var clickDisabled = false;


$('body').on ('click touchstart', function(e){
    if (clickDisabled != true){
        var clickEvent = ((document.ontouchstart!==null)?'click':'touchstart');
        switch(clickEvent) {
            case 'click':
                processCountrySelection(e);
                break;
            case 'touchstart':
                processCountrySelection(e);
                break;
            default:
                break;
        }
        clickDisabled = true;
        setTimeout(function(){clickDisabled = false;}, 1000);
    }
});



/*
 When disclaimer is not present, remove top-border from footer
 */

function footerBorder(){
    if ($(".disclaimer").length == 0){
        $(".global-footer .wrapper:not(.global-footer--microsite .wrapper)").css("border-top", "none");
        $(".global-footer .wrapper:not(.global-footer--microsite .wrapper)").css("padding-top", "0");

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

