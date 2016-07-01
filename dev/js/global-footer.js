
$(document).ready(function(){
    footerBorder();
});


$.fn.isOnScreen = function(){
    var win = $(window);
    var viewport = {
        top  : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};

var marketingCarouselVisible;

$(window).scroll(function(){
    if ($('#countryList').isOnScreen() == false) {
        closeCountryList();
    }
});


$(document).ready(function(){
    footerBorder();
});


function closeCountryList() {
    $('.country__list').slideUp(200).scrollTop(0);
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
            $('.country__list').slideDown(400).scrollTop(0);
        }
    }
}

/*
 $('body').on('touchstart', function(e) {
 processCountrySelection(e);
 });
 */

var clickDisabled = false;


$('body').on ('click touchstart', function(e){

    if (clickDisabled != true){

        var clickEvent = ((document.ontouchstart!==null)?'click':'touchstart');

        switch(clickEvent) {
            case 'click':
                processCountrySelection(e);
                break;
            case 'touchstart':

                //var cs = document.getElementById(("countryList");

                if($("#countryList").is(":visible") == true){
                    if (e.target.id == "countryList") {

                    } else {
                        closeCountryList();
                    }
                }else{
                    processCountrySelection(e);
                }

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

