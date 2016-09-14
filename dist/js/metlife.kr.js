//Global variables
var breakpointMobile = 480;
var breakpointTablet = 751;
var breakpointDesktop = 1007;

var breakpointMobileOverlay = 480;
var breakpointTabletOverlay = 768;
var breakpointDesktopOverlay = 1023;
var imagesPath = "";

//Production code
if ( localStorage.getItem("contextPath") ) {
    imagesPath = localStorage.getItem("contextPath") + "/static/images/";
} else {
    imagesPath = "/static/images/";
}

//Local testing code
//if ( localStorage.getItem("contextPath") ) {
//    imagesPath = localStorage.getItem("contextPath") + "/images/";
//} else {
//    imagesPath = "/images/";
//}
//
// Determine viewport's width
//

function getViewport() {
    var vWidth = $(window).width();
    var screenMode = "mobile";
        switch (true) {
            case vWidth >= breakpointDesktop:
                screenMode = "desktop";
                break;
            case vWidth >= breakpointTablet:
                screenMode = "tablet";
                break;
        }


    return screenMode;
}

//
// Make backgorund images clickable
//

$('.bg.clickable').click(function() {
    if ($(this).attr('data-target') == "_blank") {
        window.open($(this).attr('data-redirect'));
    } else {
       window.location.href = $(this).attr('data-redirect'); 
    }
}); 

//
// Button Group
//

// Init button group
//$('.btn-group .btn:first-child').find('.icon').addClass('active');
$('.btn-group .btn:first-child').find('.btn-group__icon').show();
$('.btn-group .btn:first-child').addClass('active');
$('.btn-group-selected').val($('.btn-group .btn:first-child').attr('data-btn-group-option'));
// Manage button group
$('.btn-group .btn').click(function(event){
    event.preventDefault();
    if ($(this).hasClass('active')) {
        //un-comment to allow "no button selected" state 
        //$('.btn-group .btn').removeClass('active');
        //$('.btn-group .icon').hide();
        //$('.btn-group-selected').val();
    } else {
        $('.btn-group .btn').removeClass('active');
        $('.btn-group__icon').hide();
        $(this).find('.btn-group__icon').show(); 
        $(this).addClass('active');
    }
})

//Trick for select dropdown
//$('.icon').click(function(){
//    $(this).parent().find('select').attr('size',3);
//})
//$('select').change(function(){
//    $(this).attr('size',1);
//})



////Validate Form
//$('input').each(function(){
//    if( $(this).attr('data-validate') == "integer" ) {
//        var isNumber =  /^\d+$/.test($(this).val());
//        if(!isNumber) {
//            $('.find-office__zip-city-state').addClass('form-error');
//        }
//    }
//})

//If user on desktop, disable phone dialing
var ua = navigator.userAgent.toLowerCase();
var isDesktop = !(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows|nexus (ce|phone)|xda|xiino/i.test(ua)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(ua.substr(0,4)));
if (isDesktop) {
    $("a[href*='tel']").each(function(){
        $(this).removeAttr('href').addClass('disabled-anchor');
    });
}


//Global Header
var currentView = getViewport();
var currentSpot = 0;
//Test comment
function optionalHeaderCTA() {
    var quoteOfficeLeft = $('.quote-office--left');
    var quoteOfficeRight = $('.quote-office--right');
    if(quoteOfficeLeft.find("div").first().hasClass("find-office__container")){
        quoteOfficeLeft.addClass("light--blue");
        quoteOfficeRight.addClass("dark--blue");
    }

    if (quoteOfficeLeft.length != 0 && quoteOfficeRight.length == 0) {
        quoteOfficeLeft.addClass("single__fao--container")
    }
    if (quoteOfficeRight.length != 0 && quoteOfficeLeft.length == 0) {
        quoteOfficeRight.addClass("single__fao--container")
    }

}
$(window).ready(function () {
    optionalHeaderCTA();
});
//DE8968
$(window).bind('pageshow', function () {
    $('.search-trigger__search-box').val("");
});

var resizeMenu = false;
//Adjust the width of second row of MegaMenu
function resizeMegaMenu() {
    if (getViewport() == "mobile") {
        if($(".megamenu").hasClass("megamenu--open")) {
            if(!$(".megamenu--open").hasClass("megamenu--open--mobile")) {
                $(".megamenu--open").addClass("megamenu--open--mobile");
                $("body").css("overflow", "hidden");
            }
        }
    }
    if (getViewport() == "tablet" || getViewport() == "desktop") {
        if($(".megamenu--open").hasClass("megamenu--open--mobile")) {
            $(".megamenu--open").removeClass("megamenu--open--mobile");
           /* $("body").css("overflow", "visible");
            $("body").css("overflow-x", "hidden");*/
        }
        $(".megamenu__sub-items").show();
        if ($('.megamenu').hasClass('megamenu--open')) {

            if ($(".contact-trigger").css("display") != "none") {
                $(".contact-trigger").hide()
            }
            if ($(".login-trigger").css("display") != "none") {
                $(".login-trigger").hide()
            }
        } else {
            if ($(".contact-trigger").css("display") == "none") {
                $(".contact-trigger").show()
            }
            if ($(".login-trigger").css("display") == "none") {
                $(".login-trigger").show()
            }
        }
        resizeMenu = true;
    } else {


        if (resizeMenu == true) {
            if ($(".megamenu__sub-items").css("display") != "none") {
                $(".megamenu__sub-items").hide()
            }

            $(".megamenu__main-item").each(function () {
                $(this).find('use').unwrap().wrap('<svg class="icon icon-chevron-right"><use xlink:href="' + imagesPath + 'icons-metlife.svg#icon-chevron-right"></use></svg>')
                /*$(this).find('use').unwrap().wrap('<svg class="icon icon-chevron-right"><use xlink:href="' + imagesPath + 'icons-metlife.svg#icon-chevron-right"></use></svg>')*/
            });

        }

        resizeMenu = false;

        if ($(".contact-trigger").css("display") != "none") {
            $(".contact-trigger").hide()
        }

        if ($(".login-trigger").css("display") == "none") {
            $(".login-trigger").show()
        }
    }

}

function openSearchBox() {
    $('.search-trigger').toggleClass('search-trigger--open');
    //actions for mobile viewport
    if (getViewport() == "mobile") {
        //check and close megamenu if it is open
        if ($('.megamenu').is(':visible')) {
            $('.megamenu').removeClass('megamenu--open');
            $('.icon-menu').toggle();
            $('.icon-close').toggle();
            $(".js-megaMenuToggle").toggleClass("hidden");
            $('.megamenu-trigger__link').removeClass('megamenu-trigger__icon--open');
        }
        //Open searchbox in mobile
        if ($('.search-trigger__container').css("display") == "none") {
            $("body > :not('.megamenu, .global-header')").removeClass("megamenu--open--hide");
            $("html, body, .global-header").removeClass('megamenu--open--style');
            /*$("body").css("overflow", "visible");
            $("body").css("overflow-x", "hidden");*/
            $('.search-trigger__icon').addClass('search-trigger__icon--open');
            $('.search-trigger__container').css('display', 'block');
            $(".search-trigger__container").animate({
                top: "50"
            }, 50, function () {
                $('.search-trigger__container').addClass('search-trigger__container--open');
                $('.search-trigger__container').css('top', '');
                $('.search-trigger__container').css('display', '');
            });

        } else {
            //close searchbox in mobile
            $('.search-trigger__icon').removeClass('search-trigger__icon--open');
            $('.search-trigger__container').css('display', 'none');
            $(".search-trigger__container").animate({
                top: "0"
            }, 50, function () {
                $('.search-trigger__container').removeClass('search-trigger__container--open');
                $('.search-trigger__container').css('top', '');
            });
            setTimeout(function () {
                $(".search-trigger__container").removeClass('search-trigger__container--open');
            }, 250);
        }
        currentView = getViewport();
    } else {
        //actions for tablet/desktop viewport
        if ($('.search-trigger__container').css("display") == "none") {
            //open searchbox in tablet/desktop
            $(".search-trigger__icon").animate({
                left: "145"
            }, 150, function () {
                $('.search-trigger__icon').addClass('search-trigger__icon--open');
                $('.search-trigger__icon').css('left', '');
            });


            $('.search-trigger__container').css('display', 'block');
            $(".search-trigger__container").animate({
                top: "50"
            }, 50, function () {
                $('.search-trigger__container').addClass('search-trigger__container--open');
                $('.search-trigger__container').css('top', '');
                $('.search-trigger__container').css('display', '');
            });
            $('.search-trigger__icon').toggleClass('search-trigger__icon--open');
            currentView = getViewport();
        }

    }
}
function adjustSearchBox() {
    if ($('.search-trigger__container--open').is(':visible')) {
        if (getViewport() == "mobile") {
            if ($('.megamenu').is(':visible')) {
                $(".search-trigger__icon").animate({
                    left: "12"
                }, 50, function () {
                    $('.search-trigger').removeClass('search-trigger--open');
                    $('.search-trigger__icon').css('left', '');
                });

                $('.search-trigger__container').css('display', 'none');
                $(".search-trigger__container").animate({
                    top: "0"
                }, 50, function () {
                    $('.search-trigger__container').removeClass('search-trigger__container--open');
                    $('.search-trigger__container').css('top', '');
                });
                setTimeout(function () {
                    $(".search-trigger__container").removeClass('search-trigger__container--open');
                }, 250);
                currentView = getViewport();
            }
        }
    }
    if (getViewport() != "mobile") {
        if ($('.megamenu').is(':visible')){
            $('.search-trigger__container').css('display', 'block');
            $(".search-trigger__container").animate({
                top: "50"
            }, 50, function () {
                $('.search-trigger__container').addClass('search-trigger__container--open');
                $('.search-trigger__container').css('top', '');
                $('.search-trigger__container').css('display', '');
            });
            $(".search-trigger__icon").animate({
                left: "145"
            }, 150, function () {
                $('.search-trigger__icon').addClass('search-trigger__icon--open');
                $('.search-trigger__icon').css('left', '');
            });
            currentView = getViewport();
        }

    }


}
function closeSearchBox() {
    $('.search-trigger').removeClass('search-trigger--open');
    $('.search-trigger__icon').removeClass('search-trigger__icon--open');
    setTimeout(function () {
        $('.search-trigger__container').hide();
    }, 100);
};

$('body').on('click touchstart tap', function (e) {
    var megaMenuTrigger = $(".megamenu-trigger");
    var container = $(".search-trigger");
    var suggestions = $(".suggestionsbox");
    var suggestionsTable = $(".ss-gac-table");
    var suggestionsTableBody = $(".ss-gac-m");
    var suggestionsTableBodyRowA = $(".ss-gac-a");
    var suggestionsTableBodyRowB = $(".ss-gac-b");
    var suggestionsTableBodyRowC = $(".ss-gac-c");
    if (!$('.megamenu-trigger__link').hasClass('megamenu-trigger__icon--open')) {
        if (!suggestionsTable.is(e.target) && suggestionsTable.has(e.target).length === 0 && !suggestions.is(e.target) && suggestions.has(e.target).length === 0 && !container.is(e.target) && container.has(e.target).length === 0 && !megaMenuTrigger.is(e.target) && megaMenuTrigger.has(e.target).length == 0 && !suggestionsTableBody.is(e.target) && suggestionsTableBody.has(e.target).length == 0 && !suggestionsTableBodyRowA.is(e.target) && suggestionsTableBodyRowA.has(e.target).length == 0 && !suggestionsTableBodyRowB.is(e.target) && suggestionsTableBodyRowB.has(e.target).length == 0 && !suggestionsTableBodyRowC.is(e.target) && suggestionsTableBodyRowC.has(e.target).length == 0) {
            closeSearchBox();
        }
    }
});



$('.megamenu-trigger').on('click', function () {
    
    
    if ($(".icon-close.megamenu-trigger__icon").css("display") == "none") {
        currentSpot = $('body').scrollTop();
        $(".icon-close.megamenu-trigger__icon").css("display", "inline-block");
        $(".icon-menu.megamenu-trigger__icon").css("display", "none");
        $("html, body").animate({scrollTop: 0}, 1);
    } else {
        $(".icon-close.megamenu-trigger__icon").css("display", "none");
        $(".icon-menu.megamenu-trigger__icon").css("display", "inline-block");
        $("html, body").animate({scrollTop: currentSpot}, 1);
    }

    $('.' + $(this).attr('data-target')).toggleClass('megamenu--open');
    $("body > :not('.megamenu, .global-header')").toggleClass("megamenu--open--hide");
    $("html, body, .global-header").toggleClass('megamenu--open--style');
    $(".js-megaMenuToggle").toggleClass("hidden");
    $('.login-container').hide();

    closeContactForm();
    $('.megamenu-trigger__link').toggleClass('megamenu-trigger__icon--open');

    if (getViewport() == "desktop") {

        if ($('.megamenu').hasClass('megamenu--open')) {
            if ($('.megamenu-trigger__link').hasClass('megamenu-trigger__icon--open')) {
                if (!$('.search-trigger__container').is(':visible')) {
                    openSearchBox();
                }
            } else {
                if ($('.search-trigger__container').is(':visible')) {
                    closeSearchBox();
                }
            }

            if ($('.login-trigger').length != 0) {
                $('.login-trigger').hide();
            }
            if ($('.contact-trigger').length != 0) {
                $('.contact-trigger').hide();
            }
            if ($('.user-trigger').length != 0) {
                $('.user-trigger').hide();
            }
        } else {
            if ($('.megamenu-trigger__link').hasClass('megamenu-trigger__icon--open')) {
                if (!$('.search-trigger__container').is(':visible')) {
                    openSearchBox();
                }
            } else {
                if ($('.search-trigger__container').is(':visible')) {
                    closeSearchBox();
                }
            }
            if ($('.login-trigger').length != 0) {
                $('.login-trigger').show();
            }
            if ($('.contact-trigger').length != 0) {
                $('.contact-trigger').show();
            }
            if ($('.user-trigger').length != 0) {
                $('.user-trigger').show();
            }
        }
    } else if (getViewport() == "tablet") {

        if ($('.megamenu').hasClass('megamenu--open')) {
            if ($('.megamenu-trigger__link').hasClass('megamenu-trigger__icon--open')) {
                if (!$('.search-trigger__container').is(':visible')) {
                    openSearchBox();
                }
            } else {
                if ($('.search-trigger__container').is(':visible')) {
                    closeSearchBox();
                }
            }
            if ($('.login-trigger').length != 0) {
                $('.login-trigger').hide();
            }
            if ($('.contact-trigger').length != 0) {
                $('.contact-trigger').hide();
            }
            if ($('.user-trigger').length != 0) {
                $('.user-trigger').hide();
            }
        } else {
            if ($('.megamenu-trigger__link').hasClass('megamenu-trigger__icon--open')) {
                if (!$('.search-trigger__container').is(':visible')) {
                    openSearchBox();
                }
            } else {
                if ($('.search-trigger__container').is(':visible')) {
                    closeSearchBox();
                }
            }
            if ($('.login-trigger').length != 0) {
                $('.login-trigger').show();
            }
            if ($('.contact-trigger').length != 0) {
                $('.contact-trigger').show();
            }
            if ($('.user-trigger').length != 0) {
                $('.user-trigger').show();
            }
        }
    } else {
        closeSearchBox();
        $(".megamenu").toggleClass('megamenu--open--mobile');
        /*if($(".megamenu").hasClass("megamenu--open--mobile")) {
            $("body").css("overflow", "hidden");
        } else {
            $("body").css("overflow", "visible");
            $("body").css("overflow-x", "hidden");

        }*/
    }
});

$('.search-trigger__icon, .search-trigger__label').click(function () {
    openSearchBox();
});

// Minimize header after scrolling 30px
$(window).scroll(function () {
    adjustMegaMenu();
});
$(function () {
    adjustMegaMenu();
});

function headerPosition() {
    if ($(window).width() >= 751) {
        $('body').css('padding-top', '70px');
    } else {
        $('body').css('padding-top', '50px');
    }

    if ($('.microsite-header').length > 0) {
        $('body').css('padding-top', '0px');
    }
}

function adjustMegaMenu() {
    var scroll = $(window).scrollTop();
    if (scroll > 5) {
        if ($(".cookieShell").length > 0) {
            $('.megamenu').addClass('cookie-megamenu--minimized');
        }
        if ($(".cookieShell").css("display") === "none") {
            $('.megamenu').removeClass('cookie-megamenu--minimized');
        }
        $('.global-header').addClass('global-header--minimized');
        $('.global-header__left').addClass('global-header__left--minimized');
        $('.global-header__logo').addClass('global-header__logo--minimized');
        $('.login-trigger').addClass('login-trigger--minimized');
        //$('.login-container').css('top','50px');
        $('.contact-trigger').addClass('contact-trigger--minimized');
        $('.megamenu').addClass('megamenu--minimized');
        $('.suggestionsbox').addClass('suggestionsbox--minimized');
        $('body').css('padding-top', '50px');
        //$('.login-container').addClass('login-container--minimized');
        if ($('.microsite-header').length > 0) {
            $('body').css('padding-top', '0px');
        }
    } else {
        if ($(".cookieShell").length > 0) {
            $('.megamenu').removeClass('cookie-megamenu--minimized');
        }
        $('.global-header').removeClass('global-header--minimized');
        $('.global-header__left').removeClass('global-header__left--minimized');
        $('.global-header__logo').removeClass('global-header__logo--minimized');
        $('.login-trigger').removeClass('login-trigger--minimized');
        //$('.login-container').css('top','70px');
        $('.contact-trigger').removeClass('contact-trigger--minimized');
        $('.megamenu').removeClass('megamenu--minimized');
        $('.suggestionsbox').removeClass('suggestionsbox--minimized');
        //$('.login-container').removeClass('login-container--minimized');
        headerPosition();
    }
}

$(window).resize(function () {
    var thisView = getViewport();
    headerPosition();
    resizeMegaMenu();
    if (thisView != currentView) {
        adjustSearchBox();
        closeContactForm();
        currentView = getViewport();
    }

});

// Show sub menu (mobile only)
var optionsOpen = false;
$('.megamenu__main-item').click(function () {

    var right = '<svg class="icon icon-chevron-right"><use xlink:href="' + imagesPath + 'icons-metlife.svg#icon-chevron-right"></use></svg>';
    var down = '<svg class="icon icon-chevron-down"><use xlink:href="' + imagesPath + 'icons-metlife.svg#icon-chevron-down"></use></svg>';

    if (getViewport() == "mobile") {
        $('.megamenu__sub-items').slideUp();
        $('.megamenu__main-item').find('svg').remove();
        $('.megamenu__main-item-label').after(right);

        if ($(this).find('.megamenu__sub-items').is(':visible')) {
            $(this).find('.megamenu__sub-items').slideUp();
            $(this).find('svg').remove();
            $(this).find('.megamenu__main-item-label').after(right);
        } else {
            $('.megamenu__sub-items').slideUp();
            $(this).find('.megamenu__sub-items').slideToggle();
            $(this).find('svg').remove();
            $(this).find('.megamenu__main-item-label').after(down);
        }
    }

});


$(".megamenu--promobox--img").each(function () {
    var attr = $(this).attr('data-image-src');

    if (typeof attr !== typeof undefined && attr !== false) {
        $(this).css({
            'background': 'url(' + attr + ')',
            'background-position': 'center top',
            'background-size': 'cover'
        });
    }

});

$('.login-trigger').click(function (e) {
    if (!$(".login-trigger").hasClass("linkOnly")) {
        e.preventDefault();
        $('body').addClass('overlay-scroll__parent');
        $('.login-container').addClass('overlay-scroll__child');
        $('.login-types').addClass('overlay-scroll__child');
        $(".global-header__middle").addClass("menu--left")
        $('.' + $(this).attr('data-target')).slideToggle();
        if ($('.megamenu').is(':visible')) {
            $("body > :not('.megamenu, .global-header')").removeClass("megamenu--open--hide");
            $("html, body, .global-header").removeClass('megamenu--open--style');
            $('.megamenu').removeClass("overlay-scroll__child")
            $('.megamenu').toggleClass('megamenu--open');
            $('.icon-close').toggle();
            $(".js-megaMenuToggle").toggleClass("hidden");
            $('.icon-menu').toggle();
        }
    }
});

$('.contact-trigger').click(function (e) {
    e.preventDefault();
    currentView = getViewport();
    $("#contactSidebar").find(".form-user-grp").each(function () {
        $(this).find("input, select, textarea").removeClass('error');
        $(this).find("input, select, textarea").val('')
    });
    $(".contactOtherDetails").show();
    $('.contact-container--global').stop().animate({right: '0'}, 400);
});

//Ryan moved the close code to a separate function because we're calling the close
// when we open the mega menu as well. this avoids 2 fixes should we tweak the animation
$('.contact-close').click(function (e) {
    e.preventDefault();
    closeContactForm();

});
$('.productPolicyTypes').on('change', function () {
    currentView = getViewport();
})
function closeContactForm() {
    $('.contact-container--global').stop().animate({right: '-640'}, 400);
    $('.contactSideForm').find('.error-mandatory').removeClass('error-mandatory');
    $('.contactSideForm').find('.errorSpanOpen').removeClass('errorSpanOpen');
    $('.contactSideForm').find('.form-user-ctrl').removeClass('error');
    $('.contactSideForm').find('svg').css('fill', '#666');
    $('.productUserType').hide();
    $('.productPolicyTypes').find('select').prop('selectedIndex', 0);
    $('#state_Acc').prop('selectedIndex', 0);
}


$(".megamenu__main-item-label.visible-xs").click(function (e) {
    e.preventDefault();
});

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


var timer;
var homepageSubMenuSelected;
var delay = 500;
$('.homepage-nav__icon').hide();
function closeHomepageNav() {
    $('.homepage-nav').removeClass('homepage-nav--active');
    $('.homepage-nav__items').removeClass('homepage-nav__items--active');
    $('.homepage-nav__item').removeClass('homepage-nav__item--active');
    $('.homepage-nav__icon').hide();
    $('.homepage-sub').hide();
}

$('.homepage-nav__item').hover(function(){
    homepageSubMenuSelected = $(this);
    //homepageSubMenuContainer = $(this).attr('data-target');
    $('.homepage-nav').addClass('homepage-nav--active');
    $('.homepage-nav__items').addClass('homepage-nav__items--active');
    $(homepageSubMenuSelected).addClass('homepage-nav__item--active');
    $(homepageSubMenuSelected).find('.homepage-nav__icon').show();
    $(homepageSubMenuSelected).find('.homepage-sub').show();
}, function() {
    //timer = setTimeout(function() {                
        closeHomepageNav();
    //}, delay);
});

$('.homepage-sub').on('mouseover', function(){
    //clearTimeout(timer); 
    $('.homepage-nav').addClass('homepage-nav--active');
    $('.homepage-nav__items').addClass('homepage-nav__items--active');
    $(homepageSubMenuSelected).addClass('homepage-nav__item--active');
    //$(homepageSubMenuSelected).find('.homepage-nav__icon').show();
    $(homepageSubMenuSelected).find('.homepage-sub').show();
}).on('mouseleave', function(){
    $('.homepage-nav').removeClass('homepage-nav--active');
    /*$('.homepage-nav__items').removeClass('homepage-nav__items--active');*/
   /* $('.homepage-nav__item').removeClass('homepage-nav__item--active');*/
    /*$('.homepage-nav__icon').hide();*/
    /*$('.homepage-sub').hide();*/
});
$(window).scroll(function () {
    closeHomepageNav();
});
// Lazy-load Hero Carousel

$(".carousel-control").click(function (e) {
    e.preventDefault();
});

$('.carousel-control.left').click(function () {
    $(this).closest(".carousel").carousel('prev');
});

$('.carousel-control.right').click(function () {
    $(this).closest(".carousel").carousel('next');
});

$('.carousel-indicators li').click(function () {
    $(this).closest(".carousel").carousel(parseInt($(this).attr("data-slide-to")));
});

var carouselInterval = $(".carousel").attr("data-interval");
$(document).ready(function () {

    $("#carouselHero, #carouselMicrosite").each(function () {
        if ($(this).find(".carousel-inner .item").length <= 1) {
            $(this).find(".carousel-indicators").hide();
            $(this).find(".carousel-control").hide();
        }
    });

    $('#carouselHero').carousel({
        //interval: false
        interval: carouselInterval
    });

    $(".carousel.slide").swipe({
        //swipeStatus: function (event, phase, direction, distance, duration, fingers, fingerData, currentDirection) {
        //    console.log(direction);
        //},
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
            $(this).carousel("next");
        },
        swipeRight: function (event, direction, distance, duration, fingerCount) {
            $(this).carousel("prev");
        },
        threshold: 20,
        allowPageScroll: "vertical"
        //preventDefaultEvents: false
    });
    // Lazyload image for first slide, wait 5 sec, then load images for remaining slides


    var lazyPause = carouselInterval;
    //Need to shrink carousel caption by 100px to center carousel hero message
    //var carouselCaptionPaddingBottom = 100;
    $.lazyLoadXT.autoLoadTime = lazyPause;
    //Adjust carousel-caption container's height
    /* $.lazyLoadXT.onload = function() {
     $('.carousel .carousel-caption--hero').innerHeight($('.carousel').height());
     };*/


    /*$('.carousel .carousel-caption--hero').innerHeight($('.carousel').height());*/

    //Reloadoad images on resize
    var resizeTimeout;
    resizeTimeout = setTimeout(function () {
        $(window).lazyLoadXT({
            checkDuplicates: false
        });
        clearTimeout(resizeTimeout);
    });
    $(window).resize(function () {
        //$('.carousel .carousel-caption--hero').innerHeight($('.carousel').height());
        resizeTimeout = setTimeout(function () {
            $(window).lazyLoadXT({
                checkDuplicates: false
            });
            clearTimeout(resizeTimeout);
        });
    });
});
//
// Carousel with Tabs
//

function adjustBtnWidth() {
    //For each visible tab, stack buttons vertically if at least one button is too wide (larger than container minus padding/margins)
    $('.carousel--tabs .carousel--tabs__item:visible').each(function () {        
        //For a visible tab, get the max width of its buttons then set it to all buttons
        var btnPadding = 40;
        var btnWidth = $(this).find(".btn span").map(function () {
                return $(this).width();
            }).get(),
            maxBtnWidth = Math.max.apply(null, btnWidth);     
        maxBtnWidth += btnPadding;
        $(this).find('.btn').width(maxBtnWidth);
        //If maxBtnWidth is larger than the buttons container (minus padding/margin), stack buttons vertically.
        var btnMargin = $('.carousel--tabs .carousel--tabs__item:visible .v-divider-arrow .row [class*="col-"] .btn').css('padding-left').replace('px', '');
        var maxBtnContainerWidth = $('.carousel--tabs .carousel--tabs__item:visible .v-divider-arrow .row [class*="col-"]').width() - 2 * btnMargin; //multiply by 4 because we have 2 buttons and each has left and right padding
        if (maxBtnContainerWidth <= maxBtnWidth) {
            $('.carousel--tabs .carousel--tabs__item:visible .v-divider-arrow .row [class*="col-"]').addClass('full-width');
        }
        //If only two button, force full-width
        if ($(this).find(".btn").length <= 2) {
            $('.carousel--tabs .carousel--tabs__item:visible .v-divider-arrow .row [class*="col-"]').addClass('full-width');
        }
    });
}

function resetBootstrapItems() {

    // Init first block
    $('.carousel--tabs .carousel-item').removeClass('selected');
    $('.carousel--tabs .carousel-item .carousel--tabs__icon').hide();
    $('.carousel--tabs .carousel--tabs__item').hide();
    $('.carousel--tabs .carousel-item:first-child').addClass('selected');
    $('.carousel--tabs .carousel-item:first-child .carousel--tabs__icon').css('display','block');
   // $('.carousel--tabs .carousel--tabs__item:first-child').show();
    $('.carousel--tabs .carousel--tabs__item').first().show();
    //How many blocks to show per carousel slide? PASS USER INPUT FROM CMS
    var splitter = 3;

    // Determine how many blocks to show based on screen width
    var sWidth = $(window).width();
    var slides = $(".carousel--tabs .carousel-inner [class*='col-']");
    switch (true) {
    case (sWidth >= breakpointDesktop):
        splitter = slides.length;
        break;
    case (sWidth >= breakpointTablet):
        break;
    default:
        splitter = 1;
    }
    $('.carousel--tabs .carousel-inner [class*="col-"]').css('width', (100 / splitter) + '%');
    $('.carousel--tabs .item [class*=col-]').removeClass('active').unwrap();
    for (var i = 0; i < slides.length; i += splitter) {
        slides.slice(i, i + splitter).wrapAll("<div class='item'></div>");
    }

    // Activate first slide
    $('.carousel--tabs .item:first-child').addClass('active');
    adjustBtnWidth();

    // Style tab based on clicked block
    $('.carousel--tabs .carousel-item').click(function () {
       // $('.carousel--tabs__items > div').hide();
        $('.carousel--tabs__items > .carousel--tabs__item').hide();
        $('.carousel--tabs .carousel-item').removeClass('selected');
        $('.carousel--tabs .carousel-item .carousel--tabs__icon').hide();
        $(this).addClass('selected');
        $(this).find('.carousel--tabs__icon').css('display','block');
       // $('.carousel--tabs__items > div').eq($(this).attr('data-target')).show();
        $('.carousel--tabs__items > .carousel--tabs__item').eq($(this).attr('data-target')).show();
        adjustBtnWidth();
    });

    // Style first tab after a carousel slide
    $('.carousel[data-carousel="lifeStages"]').bind('slid.bs.carousel', function (e) {
        //$('.carousel--tabs__items > div').hide();
        $('.carousel--tabs__items > .carousel--tabs__item').hide();
        $('.carousel--tabs .carousel-item').removeClass('selected');
        $('.carousel--tabs .carousel-item .carousel--tabs__icon').hide();
        var nextIndex = $('.item.active > .carousel-item').attr('data-target');
       // $('.carousel--tabs__items > div').eq(nextIndex).show();
        $('.carousel--tabs__items > .carousel--tabs__item').eq(nextIndex).show();
        $('.carousel--tabs .carousel-item').eq(nextIndex).addClass('selected');
        $('.carousel--tabs .carousel-item').eq(nextIndex).find('.carousel--tabs__icon').show();
        adjustBtnWidth();
    });

}
//OnLoad, OnResize
$(window).load(function () {
    resetBootstrapItems();
});
$(window).resize(function () {
    resetBootstrapItems();
});

$(document).ready(function() {
    $('.carousel--tabs .carousel.slide').carousel({
        interval: false
    });
});
// Expand All Accordions
//Test comment
$(".accordion .expandAll").click(function () {
    var parent = $(this).closest(".accordion");
    parent.find(".collapseAll").show();
    parent.find(".expandAll").hide();
    parent.find(".accordion__content").each(function () {
        if (!$(this).is(':visible')) {
            $(this).slideToggle('slow').scrollTop(0);
            $(this).siblings(".accordion__title").find('.icon-minus').show();
            $(this).siblings(".accordion__title").find('.icon-plus').hide();
        }
    });
});

// Collapse All Accordions
$(".accordion .collapseAll").click(function () {
    var parent = $(this).closest(".accordion");
    parent.find(".collapseAll").hide();
    parent.find(".expandAll").show();
    parent.find(".accordion__content").each(function () {
        if ($(this).is(':visible')) {
            $(this).slideToggle('slow').scrollTop(0);
            $(this).siblings(".accordion__title").find('.icon-minus').hide();
            $(this).siblings(".accordion__title").find('.icon-plus').show();
        }
    });
});

// Expand/Collapse Each Accordion
$(".accordion .accordion__title").click(function () {
    var parent = $(this).closest(".accordion");

    //Close others upon new open
    if (!$(this).siblings('.accordion__content').is(':visible')) {
        closeAll(parent);
    }

    $(this).siblings().slideToggle();

    $(this).find(".accordion__title__icon").each(function() {
        $(this).toggle();
    });

    if ($(".collapse").length === 0) {
        parent.find(".collapseAll").hide();
        parent.find(".expandAll").show();
    }
});

function closeAll(parent) {
    $(parent).children('div').children('.accordion__content').each(function () {
        if ($(this).is(':visible')) {
            $(this).slideToggle();
            $(this).parent().find(".accordion__title__icon").each(function() {
                $(this).toggle();
            });
        }
    });
}

$('.accordion-selector').change(function(){
    closeAll($(".accordion"));
    $(".accordion").find(".collapseAll").hide();
    $(".accordion").find(".expandAll").show();
})

$(".js-faqSelect").on("change", function(){
    var faqItem = $(".js-faqSelect").val();
    $(".accordion").addClass("hidden");
    $(("[data-faq='"+faqItem+ "']")).removeClass("hidden");
});







$(window).load(function () {
    formatCTABoxes();
});

$(window).resize(function (e) {
    formatCTABoxes();
});



function formatCTABoxes() {

    if($(".cta-box-module").length!=0){
        $(".cta-box-module").each(function () {
            var layout = $(this);
            var number = layout.children(".cta-box").length;
            if (number <= 4) {
                layout.addClass("large");
            } else {
                layout.addClass("small");
            }
            layout.show();
        });
    }

}
var selectedBtnGroupOption = "";
var valid = true;
var zipcode = 0;
var isNumber = false;


$(".find-office__zip-city-state").on("keyup", function () {
    $('.find-office__zip-city-state, .find-office__dental, .find-office__vision').removeClass('form-error');
    $('.find-office__dental, .find-office__vision').siblings("svg").css("fill", "");
    $('.error-span').hide();
});

function validateFindOffice() {
    //reset
    $('.find-office__zip-city-state, .find-office__dental, .find-office__vision').removeClass('form-error');
    $('.find-office__dental, .find-office__vision').siblings("svg").css("fill", "");
    $('.error-span').hide();
    valid = true;

    zipcode = $('.find-office__zip-city-state').val();
    isNumber = /^\d+$/.test(zipcode);
    if (zipcode.length == 0 || (isNumber && zipcode.length != 5)) {
        $('.find-office__zip-city-state').addClass('form-error');
        $('.error-span').show();
        valid = false;
    }
    if (selectedBtnGroupOption == "dental" && $('.find-office__dental').val() == "") {
        $('.find-office__dental').addClass('form-error');
        $('.find-office__dental').siblings("svg").css("fill", "#EB4646");
        valid = false;
    }
    if (selectedBtnGroupOption == "vision" && $('.find-office__vision').val() == "") {
        $('.find-office__vision').addClass('form-error');
        $('.find-office__vision').siblings("svg").css("fill", "#EB4646");
        valid = false;
    }
    return valid;
}

$(document).ready(function () {
    selectedBtnGroupOption = $(".find-office .btn-group .btn.active").attr('data-btn-group-option');
    setAddressContainerWidth();
});

$(window).resize(function () {

    if (!$(".hidden-xs").is(":visible")) {

        $(".find-office__zip-city-state-container, .find-office__dental-container, .find-office__vision-container, .cta_header_quote_type_of_insurance--sub").width('100%');
    } else {

        setAddressContainerWidth();
    }
});


function setAddressContainerWidth() {
    if ($(".find-office__container").length != 0) {
        if ($(".hidden-xs").is(":visible")) {
            var minusWidth = $(".find-office--submit .btn")[0].getBoundingClientRect().width;
            var calcWidth = (minusWidth + 10).toFixed(2);

            $(".find-office__zip-city-state-container, .find-office__dental-container, .find-office__vision-container").css("width", "Calc(100% - " + calcWidth + "px" + ")");


        }
    }
    if($(".cta_header_quote_type_of_insurance--sub").length != 0){
        if ($(".hidden-xs").is(":visible")) {
            var minusWidth = $(".js-productSelector")[0].getBoundingClientRect().width;
            var calcWidth = (minusWidth + 10).toFixed(2);

            $(".cta_header_quote_type_of_insurance--sub").css("width", "Calc(100% - " + calcWidth + "px" + ")");


        }

    }
};


$(".btn-group .btn").click(function () {
    //reset
    $('.find-office__zip-city-state-container').removeClass('full-width');
    $('.find-office__dental-container, .find-office__vision-container').css('display', 'none');
    selectedBtnGroupOption = $(this).attr('data-btn-group-option');
    if (!$(this).hasClass('active')) {
        $('.find-office__zip-city-state-container').removeClass('full-width');
        $('.find-office__dental-container, .find-office__vision-container').css('display', 'none');
    } else {
        //set
        $('.btn-group-selected').val(selectedBtnGroupOption);
    }
});

$(".find-office__zip-city-state").on("focus", function () {
    if (selectedBtnGroupOption == "vision") {
        $('.find-office__zip-city-state-container').addClass('full-width');
        $('.find-office__vision-container').css('display', 'block');
        $('.find-office__dental-container').css('display', 'none');
    } else if (selectedBtnGroupOption == "dental") {
        $('.find-office__zip-city-state-container').addClass('full-width');
        $('.find-office__vision-container').css('display', 'none');
        $('.find-office__dental-container').css('display', 'block');
    } else {
        $('.find-office__vision-container').css('display', 'none');
        $('.find-office__dental-container').css('display', 'none');
    }
});

$('.find-office__submit').click(function (event) {
    event.preventDefault();
    selectedBtnGroupOption = $('.btn-group .btn.active').attr('data-btn-group-option');
    var urlStr = "";
    if (validateFindOffice()) {

        if (selectedBtnGroupOption == "office") {
            urlStr = $('.btn-group .btn.active').attr('data-href') + "?zip=" + zipcode;
            sessionStorage.setItem("faoZipCode", $(".find-office__zip-city-state").val());
        } else if (selectedBtnGroupOption == "dental") {
            if (!($('.find-office__dental').val().trim() == 'TRICARE')) {
                urlStr = "https://metlocator.metlife.com/metlocator/execute/Search?searchType=findDentistMetLife&networkID=2&zip=" + zipcode + "&qsType=" + $('.find-office__dental').val();
            } else {
                urlStr = "http://www.metlife.com/tricare";
            }
        } else if (selectedBtnGroupOption == "vision") {
            if (!($('.find-office__vision').val().trim() == 'SafeGuard')) {
                urlStr = "https://mymetlifevision.com/find-provider-location.html?zip=" + zipcode + "&net=" + $('.find-office__vision').val().trim();
            } else {
                urlStr = "https://www.metlife.com/individual/insurance/dental-insurance/vision-providers/vision-facility-reference-guides.html";
            }
        }
        window.location.href = urlStr;
    }
});

$('[data-target="vision_overlay"]').click(function (e) {
    e.preventDefault();
    $(".vision_overlay").removeClass("hidden")
});

$('[data-target="dental_overlay"]').click(function (e) {
    e.preventDefault();
    $(".dental_overlay").removeClass("hidden")
});

$(".vision_dental_overlay_close").click(function (e) {
    e.preventDefault();
    $(".dental_overlay").addClass("hidden");
    $(".vision_overlay").addClass("hidden");
});



/*!
 * @copyright Copyright (c) 2015 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.1.0
 */
/*jslint browser: true */
/*global XDomainRequest, MutationObserver, window */
(function () {
    'use strict';
    if (window && window.addEventListener) {
        var cache = Object.create(null); // holds xhr objects to prevent multiple requests
        var checkUseElems,
            tid; // timeout id
        var debouncedCheck = function () {
            clearTimeout(tid);
            tid = setTimeout(checkUseElems, 100);
        };
        var unobserveChanges = function () {
            return;
        };
        var observeChanges = function () {
            var observer;
            if (window.MutationObserver) {
                observer = new MutationObserver(debouncedCheck);
                observer.observe(document.body, {
                    childList: true,
                    subtree: true,
                    attributes: true,
                    attributeFilter: ['xlink:href']
                });
                unobserveChanges = function () {
                    try {
                        observer.disconnect();
                    } catch (ignore) {}
                };
            } else {
                document.body.addEventListener('DOMSubtreeModified', debouncedCheck, false);
                unobserveChanges = function () {
                    document.body.removeEventListener('DOMSubtreeModified', debouncedCheck, false);
                };
            }
        };
        checkUseElems = function () {
            var base,
                bcr,
                fallback = '', // optional fallback URL in case no base path to SVG file was given and no symbol definition was found.
                hash,
                i,
                Request,
                inProgressCount = 0,
                url,
                uses,
                xhr;
            if (window.XMLHttpRequest) {
                Request = new XMLHttpRequest();
                if (Request.withCredentials !== undefined) {
                    Request = XMLHttpRequest;
                } else {
                    Request = XDomainRequest || undefined;
                }
            }
            if (Request === undefined) {
                return;
            }
            function observeIfDone() {
                // If done with making changes, start watching for chagnes in DOM again
                inProgressCount -= 1;
                if (inProgressCount === 0) { // if all xhrs were resolved
                    observeChanges(); // watch for changes to DOM
                }
            }
            function onload(xhr) {
                return function () {
                    var body = document.body,
                        x = document.createElement('x');
                    xhr.onload = null;
                    x.innerHTML = xhr.responseText;
                    body.insertBefore(x.firstChild, body.firstChild);
                    observeIfDone();
                };
            }
            function onErrorTimeout(xhr) {
                return function () {
                    xhr.onerror = null;
                    xhr.ontimeout = null;
                    observeIfDone();
                };
            }
            unobserveChanges(); // stop watching for changes to DOM
            // find all use elements
            uses = document.getElementsByTagName('use');
            for (i = 0; i < uses.length; i += 1) {
                try {
                    bcr = uses[i].getBoundingClientRect();
                } catch (e) {
                    // failed to get bounding rectangle of the use element
                    bcr = false;
                }
                url = uses[i].getAttribute('xlink:href').split('#');
                base = url[0];
                hash = url[1];
                if (bcr && bcr.width === 0 && bcr.height === 0) {
                    // the use element is empty
                    // if there is a reference to an external SVG, try to fetch it
                    // use the optional fallback URL if there is no reference to an external SVG
                    if (fallback && !base.length && hash && !document.getElementById(hash)) {
                        base = fallback;
                    }
                    if (base.length) {
                        xhr = cache[base];
                        if (xhr !== true) {
                            uses[i].setAttribute('xlink:href', '#' + hash);
                        }
                        if (xhr === undefined) {
                            xhr = new Request();
                            cache[base] = xhr;
                            xhr.onload = onload(xhr);
                            xhr.onerror = onErrorTimeout(xhr);
                            xhr.ontimeout = onErrorTimeout(xhr);
                            xhr.open('GET', base);
                            xhr.send();
                            inProgressCount += 1;
                        }
                    }
                } else {
                    // remember this URL if the use element was not empty and no request was sent
                    if (cache[base] === undefined) {
                        cache[base] = true;
                    }
                }
            }
            uses = '';
            inProgressCount += 1;
            observeIfDone();
        };
        // The load event fires when all resources have finished loading, which allows detecting whether SVG use elements are empty.
        window.addEventListener('load', function winLoad() {
            window.removeEventListener('load', winLoad, false); // to prevent memory leaks
            checkUseElems();
        }, false);
    }
}());


        
//        $('.divider--scroll__link').click( function() {
//            event.preventDefault();
//            $(this).toggleClass('divider--scroll__link--open');
//        });
        
$('.divider--scroll').click(function () {
    $('html, body').animate({
        scrollTop: $(this).offset().top - 35
    }, 500);
});

$(window).load(function () {
    scrollMoreBouncing();
    scrollForMoreFunction();
});


function scrollMoreBouncing() {
    $('.scroll-form-more-container').animate({'top': '675'}, {
        duration: 750,
        complete: function () {
            $('.scroll-form-more-container').animate({top: 725}, {
                duration: 750,
                complete: scrollMoreBouncing
            });
        }
    });
}


function scrollForMoreFunction() {
    if ($(".scroll-form-more-container").length != 0) {
        $(window).scroll(function () {
            var height = $(".global_header").height(),
                doc = document.documentElement,
                top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0),
                scrollVisible = $(".scroll-form-more-container").css("display");

            if ($(".hidden-sm, .hidden-xs").is(":visible") && top > 50 && scrollVisible != "none") {

                $('html, body').animate({scrollTop: $(".divider--snoopy").offset().top - height - 30}, 500);
                $(".scroll-form-more-container").hide();
                runOnce = false;
            }

        });
    }
}


$("#lifeStages .carousel-item").click(function () {
    var height = $(".global_header").height();

    $('html, body').animate({scrollTop: $(".divider--snoopy").offset().top - height - 30}, 500);
    $(".scroll-form-more-container").hide();
});

$(".scroll-form-more-container").click(function () {

    var height = $(".global_header").height();

    $('html, body').animate({scrollTop: $(".divider--snoopy").offset().top - height - 30}, 500);
    $(".scroll-form-more-container").hide();
});
/**
 * Created by jfeng2 on 12/16/2015.
 */
$(window).load(function () {
    matchProductModuleHeights();
});

$(window).resize(function (e) {
    matchProductModuleHeights();
});


function matchProductModuleHeights() {

//    $('.row.wrapper.product-module').each(function () {
//        var moduleHeight = $(this).find('.product-module__medium').map(function () {
//                return $(this).height();
//            }).get(),
//            maxModuleHeight = Math.max.apply(null, moduleHeight);
//        $(this).find('.product-module__medium').height(maxModuleHeight);
//    });

    if ($(".hidden-xs").is(":visible")) {
        if ($(".product-module").length != 0) {
            $(".product-module").each(function (index) {
                var productModuleTop = $(this).find(".product-module__top");
                var productModuleBottom = $(this).find(".product-module__bottom");
                var productModuleTopHeight = 0;
                var productModuleBottomHeight = 0;

                productModuleTop.css('min-height', '0px');
                productModuleTop.each(function () {

                    productModuleTopHeight = $(this).outerHeight() > productModuleTopHeight ? $(this).outerHeight() : productModuleTopHeight;

                });
                productModuleTop.css('min-height', productModuleTopHeight + 'px');


                productModuleBottom.css('min-height', '0px');
                productModuleBottom.each(function () {


                    productModuleBottomHeight = $(this).outerHeight() > productModuleBottomHeight ? $(this).outerHeight() : productModuleBottomHeight;

                });
                productModuleBottom.css('min-height', productModuleBottomHeight + 'px');


            });
        }
    } else {

        if ($(".product-module").length != 0) {
            $(".product-module").each(function () {
                var productModuleTop = $(this).find(".product-module__top");
                var productModuleBottom = $(this).find(".product-module__bottom");

                productModuleTop.css('min-height', 'auto');
                productModuleBottom.css('min-height', 'auto');

            });
        }
    }

};

if ($(".product-module").length > 0) {
    if ($(".product-module").children(".product-module__small").length !== 0) {
        $(".product-module").addClass("product-module__small--min-height");
    }

    if ($(".product-module__medium").closest(".container").next().filter($(".promocard").closest(".container")).length !== 0 ||
        $(".product-module__medium").parentsUntil(".content-parsys").last().next().filter($(".promocard").parentsUntil(".content-parsys").last()).length !== 0) {
        $(".product-module__medium").closest(".product-module").addClass("product-module--last");
    }
}



/**
 * Created by jfeng2 on 12/17/2015.
 */
$(window).load(function () {
    matchSubnavHeight();
});

$(window).resize(function (e) {
    matchSubnavHeight();
});

//matches the heights of the subnav items when text is longer in one than the others.


function matchSubnavHeight() {
    if ($(".subnav").length != 0) {
        $(".subnav").each(function (index) {
            var subnavItems = $(this).find("li a");
            var subnavItemHeight = 0;

            subnavItems.css('min-height', '0px');
            subnavItems.each(function () {

                subnavItemHeight = $(this).height() > subnavItemHeight ? $(this).height() : subnavItemHeight;

            });

            if (subnavItemHeight > 60) {
                subnavItems.css('min-height', subnavItemHeight + 'px');
            }else{
                subnavItems.css('min-height', 60 + 'px');
            }

        });
    }
};
/***** Rate Tables Begin ****************************************************************/
if ($(".rate_table").length > 0) {
    var tableColumns = 3;

    // Format Rate Tables
    setHealthGuidelinesTableHeader();
    formatRateTable();

    // Set Rate Table Sizes
    resizeRateTable();


    // Swipe to Next/Previous Set of Columns
    $('.rate_table .content_body').swipe({
        swipeLeft: function () {
            var parent = $(this).closest(".rate_table");
            if (!parent.find(".controls ol li").last().hasClass("active") && $('.controls').is(':visible')) {
                var number = parent.find("td.last").nextAll().length;
                if (number >= tableColumns) {
                    parent.find('.window').animate({right: '+=100%'}, "slow");
                    number = tableColumns;
                }
                else {
                    parent.find('.window').animate({right: '+=' + 100 / tableColumns * number + '%'}, "slow");
                }

                var indicator = parent.find("ol li.active");
                indicator.removeClass("active");
                indicator.next().addClass("active");

                var first = parent.find("td.first");
                var last = parent.find("td.last");
                first.removeClass("first");
                first.nextAll().eq(number - 1).addClass("first");
                last.removeClass("last");
                last.nextAll().eq(number - 1).addClass("last");
            }
        },
        swipeRight: function () {
            var parent = $(this).closest(".rate_table");
            if (!parent.find(".controls ol li").first().hasClass("active") && $('.controls').is(':visible')) {
                var number = parent.find("td.first").prevAll().length;
                if (number >= tableColumns) {
                    parent.find('.window').animate({right: '-=100%'}, "slow");
                    number = tableColumns;
                }
                else {
                    parent.find('.window').animate({right: '-=' + 100 / tableColumns * number + '%'}, "slow");
                }

                var indicator = parent.find("ol li.active");
                indicator.removeClass("active");
                indicator.prev().addClass("active");

                var first = parent.find("td.first");
                var last = parent.find("td.last");
                first.removeClass("first");
                first.prevAll().eq(number - 1).addClass("first");
                last.removeClass("last");
                last.prevAll().eq(number - 1).addClass("last");
            }
        }
    });

    //Swipe when user click on indicators below the table in Mobile view
    //$('.rate_table .carousel-indicators > li').click(function () {
    //
    //    //Determine active and clicked indicators
    //    var activeIndicator = $(this).parent().find("li.active").index() + 1;
    //    var clickedIndicator = $(this).index() + 1;
    //
    //    //Determine if we need to swipe RIGHT or LEFT
    //    if (clickedIndicator > activeIndicator) {
    //        //Swipe Left
    //        var numOfColumnsToSwipe = '+=' + 100 * (clickedIndicator - activeIndicator) + '%';
    //        var parent = $(this).closest(".rate_table");
    //        if (!parent.find(".controls ol li").last().hasClass("active") && $('.controls').is(':visible')) {
    //            var number = parent.find("td.last").nextAll().length;
    //            if (number >= tableColumns) {
    //                parent.find('.window').animate({right: numOfColumnsToSwipe}, "slow");
    //                number = tableColumns;
    //            }
    //            else {
    //                parent.find('.window').animate({right: '+=' + 100 / tableColumns * number + '%'}, "slow");
    //            }
    //
    //            //Set clicked indicator to ACTIVE
    //            var indicator = parent.find("ol li.active");
    //            indicator.removeClass("active");
    //            $('.rate_table .carousel-indicators > li:eq(' + $(this).index() + ')').addClass("active");
    //
    //            var first = parent.find("td.first");
    //            var last = parent.find("td.last");
    //            first.removeClass("first");
    //            first.nextAll().eq(number - 1).addClass("first");
    //            last.removeClass("last");
    //            last.nextAll().eq(number - 1).addClass("last");
    //        }
    //    }
    //    else if (clickedIndicator < activeIndicator) {
    //        //Swipe Right
    //        var numOfColumnsToSwipe = '-=' + 100 * (activeIndicator - clickedIndicator) + '%';
    //        var parent = $(this).closest(".rate_table");
    //        if (!parent.find(".controls ol li").first().hasClass("active") && $('.controls').is(':visible')) {
    //            var number = parent.find("td.first").prevAll().length;
    //            if (number >= tableColumns) {
    //                parent.find('.window').animate({right: numOfColumnsToSwipe}, "slow");
    //                number = tableColumns;
    //            }
    //            else {
    //                parent.find('.window').animate({right: '-=' + 100 / tableColumns * number + '%'}, "slow");
    //            }
    //
    //            //Set clicked indicator to ACTIVE
    //            var indicator = parent.find("ol li.active");
    //            indicator.removeClass("active");
    //            $('.rate_table .carousel-indicators > li:eq(' + $(this).index() + ')').addClass("active");
    //
    //            var first = parent.find("td.first");
    //            var last = parent.find("td.last");
    //            first.removeClass("first");
    //            first.prevAll().eq(number - 1).addClass("first");
    //            last.removeClass("last");
    //            last.prevAll().eq(number - 1).addClass("last");
    //        }
    //    }
    //});

    // Open & Close Monthly Rates Dropdown
    $(".monthly_rates .expand_button").click(function () {
        if ($(".monthly_rates").has(".wrapper-general")) {
            $(".expanded").siblings(".unexpanded").slideToggle(function () {
                resizeRateTable();
            });
            resizeRateTable();
            $(this).find(".expand_button_open").toggleClass("hidden");
            $(this).find(".expand_button_close").toggleClass("hidden");
        } else {
            $(this).siblings(".unexpanded").slideToggle(function () {
                resizeRateTable();
            });
            resizeRateTable();
            $(this).find(".expand_button_open").toggleClass("hidden");
            $(this).find(".expand_button_close").toggleClass("hidden");
        }

    });

    // Scrolling for Rate Table
    $('.rate_table .content_body').on("scroll", function () {
        var parent = $(this).closest(".rate_table");
        parent.find(".content_top").scrollLeft($(this).scrollLeft());
        parent.find(".content_left").scrollTop($(this).scrollTop());
    });

    // Resize Rate table
    $(window).on("resize", function () {
        resizeRateTable();
    });
}

// Initial Formatting of Rate Table
function formatRateTable() {
    $(".rate_table").each(function () {
        var parent = $(this);
        if (parent.hasClass("rate_table--variation-1")) {

            // appends the body content and data-target class
            var bodyContent;
            var bodyLocation = parent.find(".content_body--variation .content_table");
            for (var i = 0; i < parent.find(".content_temp tbody tr").length; i++) {
                bodyLocation.append("<tr></tr>");
                for (var j = 0; j < parent.find(".content_temp tr:first-child td").length; j++) {
                    bodyContent = parent.find(".content_temp tr").eq(i).children("td").eq(j).text();
                    switch (j) {
                        case 0:
                            bodyLocation.find("tr").eq(i + 1).append("<td class='sticky-left-column health-class-" + j + "'>" + bodyContent + "</td>");
                            break;
                        case 1:
                            bodyLocation.find("tr").eq(i + 1).append("<td class='active health-class-" + j + "'>" + bodyContent + "</td>");
                            break;
                        default:
                            bodyLocation.find("tr").eq(i + 1).append("<td class='health-class-" + j + "'>" + bodyContent + "</td>");
                    }
                }
            }
        }
        else if (parent.hasClass("rate_table--variation-2")) {

            // appends the body content and data-target class
            var bodyContent;
            var bodyLocation = parent.find(".content_body--variation .content_table");

            for (var i = 0; i < parent.find(".content_temp tbody tr").length; i++) {
                bodyLocation.append("<tr></tr>");
                for (var j = 0; j < parent.find(".content_temp tr:first-child td").length; j++) {

                    bodyContent = parent.find(".content_temp tr").eq(i).children("td").eq(j).text();
                    switch (j) {
                        case 0:
                            bodyLocation.find("tr").eq(i + 1).append("<td class='sticky-left-column health-class-" + j + "'>" + bodyContent + "</td>");
                            break;
                        case 1:
                            bodyLocation.find("tr").eq(i + 1).append("<td class='active health-class-" + j + "'>" + bodyContent + "</td>");
                            j++;
                            bodyContent = parent.find(".content_temp tr").eq(i).children("td").eq(j).text();
                            bodyLocation.find("tr").eq(i + 1).append("<td class='active health-class-" + (j - 1) + "'>" + bodyContent + "</td>");
                            break;
                        default:
                            bodyLocation.find("tr").eq(i + 1).append("<td class='health-class-" + ((j + 1) / 2) + "'>" + bodyContent + "</td>");
                            j++;
                            bodyContent = parent.find(".content_temp tr").eq(i).children("td").eq(j).text();
                            bodyLocation.find("tr").eq(i + 1).append("<td class='health-class-" + (j / 2) + "'>" + bodyContent + "</td>");
                    }
                }
            }
        }
        else {
            if (parent.parent().hasClass("two-column-table")) {
                // removes optional components
                parent.find(".content_corner, .content_top, .content_left").remove();
                parent.find(".controls").remove();

                // appends the body content
                parent.find(".content_body table").append(parent.find(".content_temp table"));
            } else {
                // appends corner content
                var cornerContent = parent.find(".content_temp tr:first-child td").eq(0).text();
                parent.find(".content_corner table").append("<tr><td>" + cornerContent + "</td></tr>");

                // appends top content
                var topContent;
                var topLocation = parent.find(".content_top table");
                topLocation.append("<tr></tr>");
                for (var i = 1; i < parent.find(".content_temp tr:first-child td").length; i++) {
                    topContent = parent.find(".content_temp tr:first-child td").eq(i).text();
                    topLocation.find("tr").append("<td>" + topContent + "</td>");
                }
                var columns = parent.find(".content_top table td").length;
                if (columns == 1) {
                    parent.find(".content_top table td").eq(0).addClass("first last");
                } else if (columns <= tableColumns) {
                    parent.find(".content_top table td").eq(0).addClass("first");
                    parent.find(".content_top table td").eq(columns - 1).addClass("last");
                } else {
                    parent.find(".content_top table td").eq(0).addClass("first");
                    parent.find(".content_top table td").eq(tableColumns - 1).addClass("last");
                }

                // appends left content
                var leftContent;
                var leftLocation = parent.find(".content_left table");
                for (var i = 1; i < parent.find(".content_temp tr").length; i++) {
                    leftContent = parent.find(".content_temp tr").eq(i).children("td").eq(0).text();
                    leftLocation.append("<tr><td>" + leftContent + "</td></tr>");
                }

                // appends the body content
                var bodyContent;
                var bodyLocation = parent.find(".content_body table");
                for (var i = 1; i < parent.find(".content_temp tr").length; i++) {
                    bodyLocation.append("<tr></tr>");
                    for (var j = 1; j < parent.find(".content_temp tr:first-child td").length; j++) {
                        bodyContent = parent.find(".content_temp tr").eq(i).children("td").eq(j).text();
                        bodyLocation.find("tr").eq(i - 1).append("<td>" + bodyContent + "</td>");
                    }
                }

                // sets buttons (for mobile)
                var buttons = Math.ceil(columns / tableColumns);
                if (buttons <= 1) {
                    parent.find(".controls").hide();
                } else {
                    var carousel = parent.find(".carousel-indicators");
                    carousel.append("<li class='active'></li>");
                    for (i = 0; i < buttons - 1; i++) {
                        carousel.append("<li></li>");
                    }
                }
            }
        }

        if (parent.closest(".campaign-card").length > 0) {
            parent.find(".window").addClass("right-0--desktop-start");
        } else {
            parent.find(".window").addClass("right-0--tablet-start");
        }

        //removes temporary content
        parent.find(".content_temp").remove();
    });
}


// Resize Rate Table
function resizeRateTable() {
    $(".rate_table").each(function () {
        var parent = $(this);
        if (!parent.parent().hasClass("two-column-table")) {
            var columns = parent.find(".content_top tr td").length;
            var rows = parent.find(".content_left tr").length;
            var height = parseInt(parent.find(".content_left").css("max-height"));

            // Set column width for mobile
            if (getViewport() == "mobile" && !parent.hasClass("table-mobile")) {
                mobileColumns();
                parent.removeClass("table-tablet");
                parent.removeClass("table-desktop");
                parent.addClass("table-mobile");
            }

            // Set column width for table
            if (getViewport() == "tablet" && !parent.hasClass("table-tablet")) {
                if (parent.closest(".campaign-card").length > 0) {
                    mobileColumns();
                } else {
                    desktopColumns();
                }

                parent.removeClass("table-mobile");
                parent.removeClass("table-desktop");
                parent.addClass("table-tablet");
            }

            // Set column width for desktop
            if (getViewport() == "desktop" && !parent.hasClass("table-desktop")) {
                desktopColumns();
                parent.removeClass("table-mobile");
                parent.removeClass("table-tablet");
                parent.addClass("table-desktop");
            }

            function mobileColumns() {
                var visible;
                if (columns >= tableColumns) {
                    visible = tableColumns;
                } else {
                    visible = columns;
                }
                parent.find(".content_left, .content_body").removeAttr("style");
                parent.find(".content_corner, .content_left").css("width", 1 / (visible + 1) * 100 + "%");
                parent.find(".content_top, .content_body").css("width", visible / (visible + 1) * 100 + "%");
                parent.find(".window").css("width", columns / visible * 100 + "%");
                parent.find("td").css("width", 1 / columns * 100 + "%");
            }

            function desktopColumns() {
                var width;
                var max_columns;
                if (parent.parent().hasClass("comparison-table")) {
                    max_columns = 4;
                } else {
                    max_columns = 10;
                }

                if ((columns + 1) > max_columns) {
                    width = 100 / max_columns;

                    parent.find(".content_left, .content_body").removeAttr("style");
                    parent.find(".content_corner, .content_left").css("width", width + "%");
                    parent.find(".content_top, .content_body").css("width", width * (max_columns - 1) + "%");
                    parent.find(".window").css("width", columns / (max_columns - 1) * 100 + "%");
                    parent.find("td").css("width", 1 / columns * 100 + "%");
                    parent.find(".content_left").css("max-height", height + "px");
                    parent.find(".content_body").css("max-height", height + 17 + "px");
                } else {
                    width = 100 / (columns + 1);

                    parent.find(".content_left, .content_body").removeAttr("style");
                    parent.find(".content_corner, .content_left").css("width", width + "%");
                    parent.find(".content_top, .content_body").css("width", width * (columns) + "%");
                    parent.find(".window").css("width", 100 + "%");
                    parent.find("td").css("width", 1 / columns * 100 + "%");
                }
            }

            // Vertical height
            var content_left = parent.find(".content_left");
            if (content_left.height() >= content_left.find(".content_container").height()) {
                content_left.css("padding-bottom", "0px")
            }

            // Fix widths for scrollbar
            parent.find(".content_top").width(parent.find(".content_body .content_container").width() - 1);
        }
    });
}

/***** Rates Tables End ****************************************************************/


//Set text of table header to text in table tabs
function setHealthGuidelinesTableHeader() {
    if ($(".overlay-table-section").length > 0) {
        $(".overlay-table-section").each(function (indexParent) {
            $(this).find(".rate_table--variation .content_table").append("<thead class='hidden-xs'><tr></tr></thead>");
            $(this).find('.view-nav ul li').each(function (index) {
                var tabText = $(this).text();
                if (index == 0) {
                    $(".overlay-table-section .rate_table--variation .content_table thead tr").eq(indexParent).append("<th scope='row'></th><th scope='row'>" + tabText + "</th>");

                } else {
                    $(".overlay-table-section .rate_table--variation .content_table thead tr").eq(indexParent).append("<th scope='row'>" + tabText + "</th>");
                }
            })
        });
    }
    if ($(".rate_table--variation-2").length > 0) {
        $(".overlay-table-section .rate_table--variation-2").find(".content_table th:not(':first-child')").attr("colspan", '2');
    }
}


$(".view-nav li").click(function () {
    var clickedHealthClass = $('.' + $(this).attr('data-target'));
    $(this).closest('ul').find('li').removeClass('active');
    $(this).addClass('active');
    $(this).closest(".overlay-table-section").find(".content_body--variation").find("td").not(".sticky-left-column").removeClass("active");
    $(this).closest(".overlay-table-section").find(".content_body--variation").find(clickedHealthClass).addClass("active");
});





var loginTypesPosition = 0;
window.addEventListener("orientationchange", function () {
    // Announce the new orientation number

    if (screen.height > screen.width) {
        $('.login-types').css('top', $(window).height() - 70 + 'px');
    }

    if (screen.height < screen.width) {
        $('.login-types').css('top', $(window).height() - 70 + 'px');
    }

}, false);
$('.login-types').css('top', $(window).height() - 70 + 'px');
$(window).resize(function () {
    $('.login-types').css('top', $(window).height() - 70 + 'px');
});

$('.login-container--close').click(function () {
    $('.login-container').hide();
    $('.login-types').removeClass('overlay-scroll__child');
    $('.login-container').removeClass('overlay-scroll__child');
    $('body').removeClass('overlay-scroll__parent');
})

//Show login info popout on hover
$('.login-container .icon.info').hover(
    function () {
        $('[data-popout-msg=' + $('select.login-type').val() + '-popout]').fadeIn();
    },
    function () {
        $('[data-popout-msg=' + $('select.login-type').val() + '-popout]').hide();
    }
);

//Show/hide login fields based on user input
$('select.login-type').change(function () {
    $('[data-popout-msg]').hide();
    var selectedLoginType = $(this).val();
    if (selectedLoginType == "for_individuals" || selectedLoginType == "for_brokers") {
        $('.login-type-biz-account').hide();
        $('.login-type-biz-purpose').hide();
        $('#biz-account-type').prop('selectedIndex', 0);
        $('#biz-account-purpose').prop('selectedIndex', 0);
        $('.login-type-username').show();
        $('.login-type-password').show();
    } else {
        $('.login-type-biz-account').show();
    }

    if ($('#biz-account-type :selected').val() != "") {
        $('.login-type-username, .login-type-password').show();
        if ($('#biz-account-type :selected').val() != "sbr") {
            $('[data-popout-msg=' + selectedLoginType + ']').show();
        }

        if ($('#biz-account-type :selected').val() == "metlink") {
            $('.not-registered-bus').hide();
        }
        if ($('#biz-account-type :selected').val() == "mybenefits") {
            $('[data-popout-msg="for_benefits"]').show();
        }
    } else {
        if (selectedLoginType == "for_individuals" || selectedLoginType == "for_brokers") {
            $('.login-type-username, .login-type-password').show();
            $('[data-popout-msg=' + selectedLoginType + ']').show();
            $('.login-popout.login-submit button').attr('disabled', false).removeClass('btn-brand-2nd--disabled');
        } else {
            $('.login-popout.login-submit button').attr('disabled', true).addClass('btn-brand-2nd--disabled');
            $('.login-type-username, .login-type-password').hide();
        }
    }
});

$('#biz-account-type').change(function () {
    if ($('#biz-account-type :selected').val() != "") {
        $('.login-type-username, .login-type-password').show();
        $('.login-popout.login-submit button').attr('disabled', false).removeClass('btn-brand-2nd--disabled');
        if ($(this).val() == "mybenefits") {
            $('.login-type-biz-purpose').show();
            $('.login-type-username').show();
            $('.login-type-password').show();
        } else if ($(this).val() == "sbr") {
            $('.login-type-biz-purpose').hide();
            $('.login-type-username').hide();
            $('.login-type-password').hide();
        } else {
            $('.login-type-biz-purpose').hide();
            $('.login-type-username').show();
            $('.login-type-password').show();
        }
        if ($('#biz-account-type :selected').val() != "sbr") {
            $('[data-popout-msg=for_businesses]').show();
        }

        if ($('#biz-account-type :selected').val() == "metlink") {
            $('.not-registered-bus').hide();
        }
    } else {

        $('.login-type-username, .login-type-password').hide();
    }
});
$('#biz-account-purpose').change(function () {
    $('[data-popout-msg=for_businesses]').show();
});


//Show/hide other login types
//loginTypesPosition = parseInt($(".login-types").css('top').replace('px',''));
$('.login-type-trigger__title').on('click touchstart', function (e) {
    e.preventDefault();

    var clickEvent = ((document.ontouchstart !== null) ? 'click' : 'touchstart');
    switch (clickEvent) {
        case 'click':
            toggleLoginTypes()
            break;
        case 'touchstart':
            toggleLoginTypes()
            break;
        default:
            break;
    }
    return false;
});

function toggleLoginTypes() {
    var minus = '<svg class="icon icon-minus"><use xlink:href="' + imagesPath + 'icons-metlife.svg#icon-minus"></use></svg>';
    var plus = '<svg class="icon icon-plus"><use xlink:href="' + imagesPath + 'icons-metlife.svg#icon-plus"></use></svg>';
    //Toggle main menu item's chevron
    if ($('.login-type-trigger__title').find('svg').attr('class').indexOf('icon-plus') > 0) {
        $('.login-type-trigger__title').find("svg").remove();
        $('.login-type-trigger__title').find('h2').append(minus);

    } else {
        $('.login-type-trigger__title').find("svg").remove();
        $('.login-type-trigger__title').find('h2').append(plus);
    }
    $('.login-types').toggleClass('overlay-scroll__child');
    $('.login-container').toggleClass('overlay-scroll__child');
    $('.login-type__contact').toggle();
    $('.login-type-trigger__title').toggleClass('login-type-trigger__title--open');
    var winHeight = $(window).height() - 100;
    if (loginTypesPosition == $('.global-header').height()) {
        $(".login-types").animate({top: winHeight + 30 + 'px'}, 500, function () {
            loginTypesPosition = parseInt($(".login-types").css('top').replace('px', ''));
        });
    } else {
        $(".login-types").animate({top: $('.global-header').height() + 'px'}, 500);
        loginTypesPosition = parseInt($('.global-header').height());
    }
    $('.login-type__details').slideToggle(500);
}

$('.login-type__detail').click(function () {

    var right = '<svg class="icon icon-chevron-right"><use xlink:href="' + imagesPath + 'icons-metlife.svg#icon-chevron-right"></use></svg>';
    var down = '<svg class="icon icon-chevron-down"><use xlink:href="' + imagesPath + 'icons-metlife.svg#icon-chevron-down"></use></svg>';

    if ($(window).width() < breakpointTablet) {
        $('.login-type__detail').find('ul').slideUp();
        $('.login-type__detail').find('svg').remove();
        $('h3').after(right);

        //Toggle clicked main menu item's chevron
        if (!$(this).find('ul').is(':visible')) {
            $(this).find('svg').remove();
            $(this).find('h3').after(down);
            $(this).find('ul').slideDown();
        } else {
            $(this).find('svg').remove();
            $(this).find('h3').after(right);
        }
    }
});

//Validate login fields before submitting
/*$('.js-submitLogin').click(function(){
 var valid = true;
 var username = $('.login-type-username').find('input');
 var password = $('.login-type-password').find('input');
 console.log(username.val())
 console.log(password.val())
 //Remove with PLACEHOLDER
 $('.login-popout').find("input").each(function(){
 if( $(this).attr("placeholder") == $(this).val() ) {
 $(this).val("");
 }
 })
 if(username.val() == "") {
 username.addClass('error');
 valid = false;
 }
 if(password.val() == "") {
 password.addClass('error');
 valid = false;
 }
 if( valid || $('#biz-account-type').val() == "sbr") {
 // loginFunction();
 $("#formLogin").submit();
 resetLoginFields();
 }else{
 return false;
 }
 });*/
document.cookie = "PLTRYNO=1; domain=.metlife.com; path=/";
function loginFunction() {

    var valid = true;
    var username = $('.login-type-username').find('input');
    var password = $('.login-type-password').find('input');
    //Remove with PLACEHOLDER
    $('.login-popout').find("input").each(function () {
        if ($(this).attr("placeholder") == $(this).val()) {
            $(this).val("");
        }
    })
    if (username.val() == "") {
        username.addClass('error');
        valid = false;
    }
    if (password.val() == "") {
        password.addClass('error');
        valid = false;
    }
    if (valid || $('#biz-account-type').val() == "sbr") {
        // loginFunction();
        $("#formLogin").submit();
        resetLoginFields();
    } else {
        return false;
    }
    /*var userName = $('#userID').val();
     var userPassword = $('#userPassword').val();
     var jsonData = {
     "serviceName":"validateUser",
     "userName":userName,
     "password":userPassword
     }

     $.ajax({
     url: "https://dev.www.metlife.com/wps/loginProxy/edge/services/public/channel/loginInteractionServices/loginservice",
     dataType: "json",contentType: "application/json; charset=utf-8",
     type:'POST',
     data: JSON.stringify(jsonData),
     success: function(data) {
     if (data.isLoginError) {
     window.location.href = "/individual/phoenixloginassist.html?phoenixLoginMsg=ok&TARGET=";
     }
     else {
     window.location.href = data.authenticationMap.redirectUrl;
     }
     }
     });*/
    // https://online.metlife.com/edge/web/public/identifyUser
    //  document.cookie="phoenixLoginBacktrack"+ "=deleted; expires=" + (new Date(0)).toUTCString() + "; domain=.metlife.com; path=/"
    //  $("#formLogin").submit();
}


//Reset login fields to default after submitting
function resetLoginFields() {
    $('.login-popout').find("input").each(function () {
        $(this).val($(this).attr("placeholder"));
        $(this).removeClass('error');
    });
    $('.login-type-username').show();
    $('.login-type-password').show();
    $('select.login-type').val("for_individuals");
    $('#biz-account-type').prop('selectedIndex', 0);
    $('#biz-account-purpose').prop('selectedIndex', 0);
    $('.login-type-biz-account').hide();
    $('.login-type-biz-purpose').hide();
}


//Show PASSWORD placeholder in password field.
function showPasswordPlaceholder() {

    // cache references to the input elements into variables
    var passwordField = $('input[name=password]');

    // add a password placeholder field to the html
    passwordField.after('<input id="passwordPlaceholder" type="text" value="Password" autocomplete="off" />');
    var passwordPlaceholder = $('#passwordPlaceholder');

    // show the placeholder with the prompt text and hide the actual password field
    passwordPlaceholder.show();
    passwordField.hide();

    // when focus is placed on the placeholder hide the placeholder and show the actual password field
    passwordPlaceholder.focus(function () {
        passwordPlaceholder.hide();
        passwordField.show();
        passwordField.focus();
    });
    // and vice versa: hide the actual password field if no password has yet been entered
    passwordField.blur(function () {
        if (passwordField.val() == '') {
            passwordPlaceholder.show();
            passwordField.hide();
        }
    });
}

/*
 showPasswordPlaceholder();
 $('input[name=password]').change(function(){
 if($(this).val() == "")
 showPasswordPlaceholder();
 })
 */


/**
 * Created by jfeng2 on 12/9/2015.
 */

$(".media-contact__list__section__title").click(function (evt) {
    
    if ($(".hidden-xs").is(":visible")) {
        evt.preventDefault();
    } else {
        $(this).siblings().slideToggle('slow');
        
        $(this).toggleClass('open');
    }
    
});

$(".media-contact__title").click(function (evt) {
    /*$(".media-contact__title").toggle();*/
    $(".media-contact-position").animate().toggleClass("media-contact--absolute");
    $(".media-contact__list--variation").slideToggle("slow");

});
/**
 * Created by jfeng2 on 1/28/2016.
 */

$(document).ready(function() {
    formCardExpand();
    formCardMinimize();
});

function formCardExpand(){
    var h = $('.contact-container--form-card').outerHeight();
    $(".contact-container--form-card form").click(function() {
        $('.contact-container--form-card .hidden-field').each(function(){
            if(!$(this).hasClass("observer")){
                $(this).show();
            }
        })
       // $('.contact-container--form-card .hidden-field').show();
    });

    $('.form-card__img__inner').css('height', h + 'px');
};

function formCardMinimize(){
    $(".contact-container--form-card .form-minimize").click(function() {
        $('#contactCard').trigger("reset");
        $('.contact-container--form-card .hidden-field').hide();
        $('#contactCard').find('.error').removeClass('error');
        $('#contactCard').find('.errorSpan').removeClass('errorSpanOpen');
        $('#contactCard' +
            '').find('svg').css('fill','#666');
    });
};
// Open Menu
$(".microsite-header .megamenu-trigger").on("click", function (e) {
    $('.' + $(this).attr('data-target')).slideToggle();
    $('.subnav').toggleClass('.subnav-mobile--open');
    $('.microsite-trigger__icon').toggleClass('.megamenu-trigger__icon--open');


    if ($(".hidden-xs").is(":visible")) {

        $('.subnav').css("left", "-800");
        $('.subnav').stop().animate({ left: '0' }, 300);
        $('.subnav').addClass('subnav-mobile--open');

    } else {
        $('body').css("height", "auto");
    }
});




//Close Menu
$(".microsite-header .megamenu-trigger").on("click", function (e) {
    $('.' + $(this).attr('data-target')).slideToggle();
    $('.subnav').toggleClass('subnav-mobile--open');
    $('.microsite-trigger__icon').toggleClass('.megamenu-trigger__icon--open');

    if ($(".hidden-xs").is(":visible")) {
        $('.subnav').stop().animate({ left: '-800' }, 300);
        $('.subnav').css("left", "-800");
        $('body').css("height", "auto");
        $('.subnav').removeClass('subnav-mobile--open');
    } else {

    }
});


$(window).load(function () {
    productComparisonChart();
    micrositeCarouselSetup();
    micrositeComparisonChart();
});

$(window).resize(function (e) {
    micrositeComparisonChart();
    productComparisonChart();
});


// Product Comparison Chart
function productComparisonChart() {

    // Init first block
    $('.product_chart .carousel-item').removeClass('selected');
    $('.product_chart .carousel-item').first().addClass('selected');
    $('.product_chart .carousel-tab').first().show();

    // Determine how many blocks to show based on screen width
    var splitter = 0;
    var slides = $(".product_chart .carousel-inner [class*='col-']");
    switch (false) {
        case ($(".hidden-xs").is(":visible")):
            splitter = 1;
            break;
        default:
            splitter = 5;
    }
    $('.product_chart .item [class*=col-]').removeClass('active').unwrap();
    for (var i = 0; i < slides.length; i += splitter) {
        slides.slice(i, i + splitter).wrapAll("<div class='item'></div>");
    }

    $('.microsite-product-chart .item').first().addClass('active');


    // Style first tab after a carousel slide
    $('#productComparisonChartCarousel').bind('slid.bs.carousel', function (e) {
        var nextIndex = $('.item.active > .carousel-item').attr('data-target');
        $('.product_chart .carousel-item').eq(nextIndex).addClass('selected');
    });
}

// Microsite comparison chart
function micrositeCarouselSetup() {
    $(".microsite-product-chart .carousel .carousel-inner .carousel-item").each(function () {
        var columnNum = $(this).children(".column-wrapper").length;
        switch (columnNum) {
            case (1):
                if ($(".visible-xs").is(":visible")) {
                    if ($(this).parent().next().length != 0) {
                        $(this).find(".microsite-column-category").addClass("mcc2");
                        $(this).parent().next().find(".carousel-item").find(".microsite-column-category").clone().appendTo($(this)).addClass("visible-xs mcc2");
                        $(this).parent().next().find(".carousel-item").find(".column-wrapper").first().clone().appendTo($(this)).addClass("visible-xs col2");
                    } else {
                        $(this).find(".microsite-column-category").addClass("mcc2");
                        $(".carousel-item").first().find(".microsite-column-category").first().clone().appendTo($(this)).addClass("visible-xs mcc2");
                        $(".carousel-item").first().find(".column-wrapper").first().clone().appendTo($(this)).addClass("visible-xs col2");
                    }
                } else {
                    if ($(this).is(".carousel-item").last()) {
                        $(this).find(".microsite-column-category").addClass("mcc2");
                        $(this).parent().find(".carousel-item").first().find(".microsite-column-category").first().clone().appendTo($(this)).addClass("visible-xs mcc2");
                        $(this).parent().find(".carousel-item").first().find(".column-wrapper").first().clone().appendTo($(this)).addClass("visible-xs col2");
                    } else {
                        $(this).find(".microsite-column-category").addClass("mcc2");
                        $(this).next(".carousel-item").find(".microsite-column-category").clone().appendTo($(this)).addClass("visible-xs mcc2");
                        $(this).next(".carousel-item").find(".column-wrapper").first().clone().appendTo($(this)).addClass("visible-xs col2");
                    }
                }
                break;
            case (2):
                $(this).children(".column-wrapper").css("width", "50%");
                break;
            case (3):
                $(this).clone().addClass('visible-xs').insertAfter($(this)).find('.column-wrapper').first().remove();
                $(this).find('.column-wrapper').last().addClass("hidden-xs");
                break;
            case (4):
                $(this).clone().addClass('visible-xs').insertAfter($(this)).find('.column-wrapper:nth-child(-n+3)').remove();
                $(this).find('.column-wrapper:nth-child(n+4)').addClass("hidden-xs");
                break;
            case (5):
                $(this).clone().addClass('visible-xs').insertAfter($(this)).find('.column-wrapper:not(:nth-last-child(-n+2))').remove();
                $(this).clone().addClass('visible-xs').insertAfter($(this)).find('.column-wrapper:nth-child(-n+3), .column-wrapper').last().remove();
                $(this).find('.column-wrapper:nth-child(n+4)').addClass("hidden-xs");
                break;
            default:
        }
    });

    $(".microsite-product-chart .carousel-control.left").click(function () {
        $(".microsite-product-chart .carousel").carousel("prev");
    });

    $(".microsite-product-chart .carousel-control.right").click(function () {
        $(".microsite-product-chart .carousel").carousel("next");
    });
};

function matchHeights() {
    if (!$(".visible-xs").is(":visible")) {
        $(".microsite-product-chart").each(function () {
            var elements = $(this).find(".microsite-column-category:nth-child(1)").not(":hidden");
            var height = 0;

            elements.css('min-height', '0px');
            elements.each(function () {
                height = $(this).height() > height ? $(this).height() : height;
            });
            elements.css('min-height', height + 'px');

        });
    } else {
        $(".microsite-product-chart .carousel .carousel-inner .item").each(function () {
            if ($(this).css("display") == "none") {
                return true;
            } else {
                var elements = $(this).find(".microsite-column-category").not(":hidden");
                var height = 0;

                elements.css('min-height', '0px');
                elements.each(function () {
                    height = $(this).height() > height ? $(this).height() : height;
                });
                elements.css('min-height', height + 'px');
                $(".left-col-mcc").css('min-height', height + 'px');
                $(".microsite-product-chart .carousel .carousel-inner .carousel-item ").each(function () {
                    $(this).find(".microsite-column-category:nth-child(3)").css("margin-top", 0 - height);
                });
            }
        });
    }
}

function micrositeComparisonChart() {
    matchHeights();

    if (!$(".hidden-xs").is(":visible")) {
        var columnNum = $(this).children(".column-wrapper").length;
        $(".microsite-product-chart .carousel .carousel-inner .carousel-item").css("width", "100%");
        $(".microsite-product-chart .carousel .carousel-inner .carousel-item .column-wrapper").css("width", "50%");

    } else {
        $('.carousel--microsite').each(function () {
            //total number of column wrappers
            //var columnWrapperNumTotal = $(this).find(".carousel-item").find('.column-wrapper').not('.visible-xs').length;
            //ALEX SOUFI - 02/10
            var columnWrapperNumTotal = $(this).find(".carousel-item:not(.visible-xs)").find('.column-wrapper').length;
            //console.log("number of total column wrappers " + columnWrapperNumTotal);
            $(".microsite-product-chart .carousel .carousel-inner .carousel-item").not('.visible-xs').each(function () {
                //number of column wrapper in a single carousel-item
                var columnWrapperNum = $(this).find('.column-wrapper').not('.visible-xs').length;
                $(this).css('width', columnWrapperNum / columnWrapperNumTotal * 100 + '%');

                $(this).find('.column-wrapper').css('width', 100 / columnWrapperNum + '%');
            });
        });
    }

    $(".microsite-product-chart .carousel .carousel-inner .carousel-item .column-wrapper").not(".visible-xs").each(function (index) {
        if (!$(".visible-xs").is(":visible")) {
            if (index % 2 == 0) {
                $(this).css("background-color", "#f2f2f2");
            } else {
                $(this).css("background-color", "#ffffff");
            }
        }

    });
    $(".microsite-product-chart .carousel .carousel-inner .carousel-item .column-wrapper").each(function (index) {
        if ($(".visible-xs").is(":visible")) {
            if (index % 2 == 0) {
                $(this).css("background-color", "#f2f2f2");
            } else {
                $(this).css("background-color", "#ffffff");
            }
        }

    });

    var splitter = 0;

    // Init first block
    $('.microsite-product-chart .carousel-item').removeClass('selected');
    $('.microsite-product-chart .carousel-item').first().addClass('selected');

    // Determine how many blocks to show based on screen width

    var slides = $(".microsite-product-chart .carousel-inner [class*='col-']");
    switch (false) {
        case ($(".hidden-xs").is(":visible")):
            splitter = 1;
            break;
        default:
            splitter = 5;
    }


    $('.microsite-product-chart .item [class*=col-]').removeClass('active').unwrap();
    for (var i = 0; i < slides.length; i += splitter) {
        slides.slice(i, i + splitter).wrapAll("<div class='item'></div>");
    }

    $('.microsite-product-chart .item').first().addClass('active');

    // Style first tab after a carousel slide
    $('#micrositeComparisonChartCarousel').bind('slid.bs.carousel', function (e) {
        matchHeights();
        var nextIndex = $('.item.active > .carousel-item').attr('data-target');
        $('.microsite-product-chart .carousel-item').eq(nextIndex).addClass('selected');
    });
}
/**
 * Created by jfeng2 on 1/27/2016.
 */

$(document).ready(function () {
    productTilePadding();
    productTilesLayout();
    productTilePullRight();
    callTextFontChange();

});

$(window).load(function () {
    productTilePadding();
    productTileHeight();
    productTilePullRight();
    positionTileButtonBottom();
    callTextFontChange();
});

$(window).resize(function (e) {
    productTilePadding();
    productTileHeight();
    productTilePullRight();
    positionTileButtonBottom();
    callTextFontChange();

});

$(".product-row__tile__img-tile__img").click(function(){
    var href;
    if ($(this).parent().hasClass("triple-promo")){
         href = $(this).parent().find(".product-row__tile--img-tile__text").find(".product-row__tile--img-tile__text--right").find("a").attr("href");
    }
    if ($(this).parent().hasClass("double-promo")){
         href = $(this).parent().find(".product-row__tile--img-tile__text").find(".product-row__tile__bottom").find("a").attr("href");
    }
    if ($(this).parent().hasClass("skinny-promo-tile")){
        href = $(this).parent().find(".product-row__tile--img-tile__text").find(".product-row__tile--img-tile__text--right").find("a").attr("href");
    }
    if ($(this).parent().hasClass("large-promo-tile")){
        href = $(this).parent().find(".product-row__tile--img-tile__text").find("a").attr("href");
    }
    window.location.href = href;

});
function productTilePadding(){
    if (getViewport() == "desktop" || getViewport() == "tablet"){
        $(".product-row").parent().css("padding","0 0 10px 0px");
    }else{
        $(".product-row").parent().css("padding","0 10px 10px 10px");
    }

}
function productTileHeight() {
    if ($(".hidden-xs").is(":visible")) {
        if ($(".product-row").length != 0) {

            $(".product-row").each(function () {
                //$(this).find($(".single-promo")).css("height", "320");
                var elements = $(this).find(".product-row__tile__top");
                var bottomElements = $(this).find(".product-row__tile__bottom");

                var height = 0;

                elements.css('min-height', '0px');
                elements.each(function () {

                    height = $(this).outerHeight() > height ? $(this).outerHeight() : height;

                });
                elements.css('min-height', height + 'px');

                var bottomHeight = 0;

                bottomElements.css('min-height', '0px');
                bottomElements.each(function () {

                    bottomHeight = $(this).outerHeight() > bottomHeight ? $(this).outerHeight() : bottomHeight;

                });

                bottomElements.css('min-height', bottomHeight + 'px');


                if ($(".product-row__tile").length != 0 && $(".product-row__tile--img-tile").length != 0) {
                    var subHeight = $(this).find(".product-row__tile").outerHeight();

                    if (subHeight < $(this).find(".product-row__tile--img-tile").outerHeight()) {
                        $(this).find(".product-row__tile").outerHeight($(this).find(".product-row__tile--img-tile").outerHeight());
                    } else {
                      /*  $(this).find(".product-row__tile--img-tile > .product-row__tile--img-tile__text").height(subHeight);*/
                        $(this).find(".product-row__tile--img-tile").height(subHeight);



                    }
                }


                $(".product-row__tile--img-tile").each(function () {
                    if ($(this).find(".product-row__tile__img-tile__img").css("float") == "right") {
                        var valHeight = $(this).outerHeight();
                        $(this).find(".product-row__tile__img-tile__img").height(valHeight);
                    }
                });
            });
        }
    } else {
        if ($(".product-row").length != 0) {
            //$(".product-row").parent().css("padding","0 10px 0 10px");
            $(".product-row").each(function () {
                var elements = $(this).find(".product-row__tile__top");
                var bottomElements = $(this).find(".product-row__tile__top");
                var subcatProductCards = $(this).find(".product-row__tile");
                subcatProductCards.css("height", "auto");
                elements.css('min-height', "auto");
                bottomElements.css('min-height', "auto");
                if ($(this).find(".product-row__tile").length == 1) {
                    $(this).find(".product-row__tile--img-tile").css("height", "auto");
                    $(this).find(".product-row__tile--img-tile .product-row__tile__img-tile__img").css("height", "150");
                    if ($(window).width() < 768) {
                        $(this).find(".product-row__tile--img-tile .product-row__tile__img-tile__img").css("height", "150");
                    }
                } else if ($(this).find(".product-row__tile").length == 2) {
                    // var mobileHeight = $(this).find(".subcategory-image-product-card .subcat-image-text").outerHeight();
                    $(this).find(".product-row__tile--img-tile").css("min-height", "220");
                    if ($(window).width() < 768) {
                        $(this).find(".product-row__tile--img-tile .product-row__tile__img-tile__img").css("min-height", "220");
                    }
                } else {
                    /*if ($(window).width() < 768) {
                     $(this).find(".product-row__tile--img-tile .product-row__tile__img-tile__img").css("height", "150");
                     }*/
                }

                $(".product-row__tile--img-tile").each(function () {


                    if ($(this).find(".product-row__tile__img-tile__img").css("float") == "right") {
                        $(this).find(".product-row__tile__img-tile__img").css("height", "auto");
                    }
                });
            });
        }
    }
};

function callTextFontChange(){
        $(".product-row").each(function () {
            $(".product-row__tile").each(function () {
               if($(this).find(".product-tile__action").length > 1){
                   $(this).find(".product-tile__action").first().addClass("product-tile__action--noLink");
               }
            });
        });
}

function positionTileButtonBottom(){
    var minHeight;
    $(".product-row").each(function () {
        $(".product-row__tile").each(function () {
            if (getViewport() != "mobile") {
                minHeight = parseInt($(this).find(".product-row__tile__bottom").css("min-height"));
                $(this).find(".product-row__tile__top").css("margin-bottom", minHeight + 15 + "px");
            }else{

                $(this).find(".product-row__tile__top").css("margin-bottom", "15px");
            }
        });
        if($(".single-promo").length >0){
            if (getViewport() != "mobile") {
                $(this).find(".product-row__tile__top").css("margin-bottom", minHeight + 15 + "px");
            }else{
                $(this).find(".product-row__tile__top").css("margin-bottom", "15px");
            }
        }
        if($(".double-promo").length >0){
            if (getViewport() != "mobile") {
                $(this).find(".product-row__tile__top").css("margin-bottom", minHeight + 15 + "px");
            }else{
                $(this).find(".product-row__tile__top").css("margin-bottom", "15px");
            }
        }
    });



}

function productTilePullRight(){
/*
    if (getViewport() == "mobile") {
        if ($(".product-row__tile--img-tile__text").hasClass("pull-right")) {
            $(this).addClass("pull-left");
        }
    }else {
        if ($(".product-row__tile--img-tile__text").hasClass("pull-right")) {
            $(this).removeClass("pull-left");
        }
    }*/
}
function productTilesLayout() {

    if ($(".product-row").length != 0) {
        $(".product-row").each(function () {
            var numProductCards = $(this).find(".product-row__tile").length;
            var numImageCards = $(this).find(".product-row__tile--img-tile").length;
            /*if (numImageCards == 1) {
             $(this).find(".product-row__tile--img-tile").addClass("single-promo")

             }*/
            if ($(".product-row__tile").length != 0) {
                var numProductCards = $(this).find(".product-row__tile").length;
                if (numProductCards == 0) {
                    if ($(".product-row__tile").length != 0) {
                        $(this).find(".product-row__tile--img-tile").addClass("triple-promo");
                        $(this).find(".product-row__tile--img-tile__text").addClass("box-shadow");
                        $(this).find(".product-row__tile__top").removeClass("product-row__tile__top").addClass("product-row__tile--img-tile__text--left");
                        $(this).find(".product-row__tile__bottom").removeClass("product-row__tile__bottom").addClass("product-row__tile--img-tile__text--right");
                    }

                } else if (numProductCards == 1) {
                    if ($(".product-row__tile").length != 0) {
                        $(this).find(".product-row__tile--img-tile").addClass("double-promo");
                    }
                } else if (numProductCards == 2){
                    if ($(".product-row__tile").length != 0) {
                        $(this).find(".product-row__tile--img-tile").addClass("single-promo");
                    }
                }
            }
        });

    }
};
    $('select.form-library').change(function(){
        $('[data-form-library-msg]').hide();
        var selectedLoginType = $(this).val();
        $('[data-form-library-msg=' + selectedLoginType + ']').show();
    }); 
/**
 * Created by jfeng2 on 12/17/2015.
 */

//I'm so sorry for this code

var hasTwoLinksInSubnav = false;

$(window).load(function () {
    matchSubnavHeight();
    if($('.subnav-go-back__list li').length === 2) {
        hasTwoLinksInSubnav = true;
        $('.subnav-go-back__list')
            .addClass('subnav-go-back--two-items-centered')
            .removeClass('subnav-go-back__list');
        centerAlignSubnavWithTwoLinks();
    }
});

$(window).resize(function (e) {
   removeSubnavAttr();
});


$(".subnav-go-back .subnav-go-back__menu a").click(function(e){
        if(!$(".hidden-xs").is(":visible")){
            e.preventDefault();
            if(!hasTwoLinksInSubnav) {
                $(".subnav-go-back__list").slideToggle()
            } else {
                $(".subnav-go-back--two-items-centered").slideToggle();
            }
        }
});

//$(".subnav-go-back .subnav-go-back__menu a").click(function(e){
//    if(!$(".hidden-xs").is(":visible")){
//        e.preventDefault();
//        $(".subnav-go-back__list").slideToggle();
//    }
//});

function removeSubnavAttr(){
    if($(".hidden-xs").is(":visible")){
        $(".subnav-go-back--two-items-centered").removeAttr('style');
    }
};


$(".subnav-go-back .subnav-go-back__list li a").each(function () {
    if ($(this).attr("href") == window.location.pathname) {
        $(this).addClass("active");
    }
});

$(".subnav-go-back .subnav-go-back--two-items-centered li a").each(function () {
    if ($(this).attr("href") == window.location.pathname) {
        $(this).addClass("active");
    }
});

function centerAlignSubnavWithTwoLinks() {
    //$('.subnav-go-back__list').addClass("subnav-go-back--two-items-centered");
    $('.subnav-go-back__list').css("text-align", "start");
    $(".subnav-go-back__list li").first().addClass("subnav-go-back--two-items-centered");
}



$(".privacy-policy-index__linkContainer a").on("click", function (evt) {

    if ($(this).attr("href").length != 0) {
        var location = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(location).offset().top - 80
        }, 500);
        return false;
    }

});
if ($(".wrapper__quote-card").length > 0) {
    // Open Edit Quote Form
    $(".results-card__quoteinfo__anchor").on("click", function(){
        //preFillQuoteForm();
        $(".results-form__wrapper").addClass("hidden");
        $(".edit-quote__form__wrapper").removeClass("hidden");
        $(".edit-quote__form__wrapper").css("display", "table-cell");
        //$(".results-form").addClass("results-form--dark-blue");
        $(".results-card__premium-card").addClass("results-card__premium-card--inactive");
    });

    // Close Edit Quote Form
    $(".form-close .icon-close").on("click", function(){
        $(".results-form__wrapper").removeClass("hidden");
        $(".edit-quote__form__wrapper").css("display", "none");
        //$(".edit-form-quote-results").removeClass("edit-form-quote-results--block");
        $(".results-card__premium-card").removeClass("results-card__premium-card--inactive");
    });

    $(".form-user-grp input").on("click", function() {
        $(".results-form__button").removeClass("hidden");
        $(".apply-disclaimer").removeClass("hidden");
    })

}
/**
 * Created by icunningham on 2/8/2016.
 */

if ($(".wrapper__quote-card").length > 0) {
    // Open Edit Quote Form
    $(".results-card__quoteinfo__anchor").on("click", function(){
        //preFillQuoteForm();
        $(".results-form__wrapper").addClass("hidden");
        $(".edit-quote__form__wrapper").removeClass("hidden");
        $(".edit-quote__form__wrapper").css("display", "table-cell");
        //$(".results-form").addClass("results-form--dark-blue");
        $(".results-card__premium-card").addClass("results-card__premium-card--inactive");
    });

    // Close Edit Quote Form
    $(".form-close .icon-close").on("click", function(){
        $(".results-form__wrapper").removeClass("hidden");
        $(".edit-quote__form__wrapper").css("display", "none");
        //$(".edit-form-quote-results").removeClass("edit-form-quote-results--block");
        $(".results-card__premium-card").removeClass("results-card__premium-card--inactive");
    });

    $(".form-user-grp input").on("click", function() {
        $(".results-form__button").removeClass("hidden");
        $(".apply-disclaimer").removeClass("hidden");
        $(".results-form__inputs .form-user-grp").removeClass("hidden");
        $(".results-form__inputs .form-user-grp-location").removeClass("hidden");
    })

//    $(".results-form__button").on("click", function() {
//        $(".results-form__text").addClass("hidden");
//        $(".results-form__inputs").addClass("hidden");
//        $(".apply-disclaimer").addClass("hidden");
//        $(".contact-thanks").removeClass("hidden");
//    })
    
}


//Added per HCL request
$('#resultsBuyNow').on('click',function(e){
    e.preventDefault();
    var $this = $(this);
    var isValid = ServicesAPI.onFSubmit($(this));
    if (isValid) {
          var fid = $this.attr('data-fsubmit');
          var $formid = $('[data-fid=' + fid + ']');
          // $('#phone_ql').val($('#phone_ql').val().replace(/-/g,""));
          var formName = $formid.attr('name');
          var formObject = document.getElementById(formName);
          formProcessorSubmit(formName,'a','chn-har-thankyou','chn-har-error','chn-har-exception');
          applyOnlineNow(formObject);
    }
})

function applyOnlineNow(e) {
    var o = getCookie("ReserveID");
    null  != o ? (console.debug("reserveid is not null and the  value =" + o),
          AddInputParameter(e, "input", "reserveid", o, document)) : console.debug("reserveid is empty for ReserveID "),
          addSessionParameters(e);

    var t = "/wps/proxy/MCOnlineEnterpriseApp/TranzactLeadService.do";
    var callCount = 0;

    if(typeof FormData !== 'undefined'){ 
          var formData = new FormData(e);
          $.ajax({
                url: t,
                type: 'POST',
                data: formData,
                async: false,
                contentType: false,
                processData: false,
                handleAs: "text",
                enctype:"multipart/form-data",
                contents:{increment:callCount++,fileFields: "attachURL"},
                success: function (e) {

                      window.location = JSON.parse(e.substring(e.indexOf("{"),e.indexOf("}")+1))["redirecturl"];
                      var str = JSON.parse(e.substring(e.indexOf("{"),e.indexOf("}")+1))["redirecturl"];

                      redirectToOEA(str)
                },
                error: function(){
                      window.location = "http://oea.metlifetermlife.com"
                }
          });
    } else {
          var formData = postSerialize($('#'+e.attributes.id.value));
          $.ajax({
                url: t,
                type: 'POST',
                data: formData,
                async: false,
                contentType: 'application/x-www-form-urlencoded',
                processData: false,
                handleAs: "text",
                enctype:"multipart/form-data",
                contents:{increment:callCount++,fileFields: "attachURL"},
                success: function (e) {

                      window.location = JSON.parse(e.substring(e.indexOf("{"),e.indexOf("}")+1))["redirecturl"];
                      var str = JSON.parse(e.substring(e.indexOf("{"),e.indexOf("}")+1))["redirecturl"];

                      redirectToOEA(str)
                },
                error: function(){
                      window.location = "http://oea.metlifetermlife.com"
                }
          });
    }
}
function redirectToOEA(e) {
    window.location = e
}

// Copyright 2004-2006 Google Inc.
// All Rights Reserved.

/**
 * @fileoverview A bunch of XML HTTP recipes used to do RPC from within
 * JavaScript from Gagan Saksena's wiki page
 * http://wiki.corp.google.com/twiki/bin/view/Main/JavaScriptRecipes
 */

/**
 * The active x identifier used for ie.
 *
 * @type String
 * @private
 */
var XH_ieProgId_;

// Domain for XMLHttpRequest readyState
var XML_READY_STATE_UNINITIALIZED = 0;
var XML_READY_STATE_LOADING = 1;
var XML_READY_STATE_LOADED = 2;
var XML_READY_STATE_INTERACTIVE = 3;
var XML_READY_STATE_COMPLETED = 4;

/**
 * Initialize the private state used by other functions.
 *
 * @private
 */
function XH_XmlHttpInit_() {
	// The following blog post describes what PROG IDs to use to create the
	// XMLHTTP object in Internet Explorer:
	// http://blogs.msdn.com/xmlteam/archive/2006/10/23/using-the-right-version-of-msxml-in-internet-explorer.aspx
	// However we do not (yet) fully trust that this will be OK for old versions
	// of IE on Win9x so we therefore keep the last 2.
	// Versions 4 and 5 have been removed because 3.0 is the preferred
	// "fallback"
	// per the article above.
	// - Version 5 was built for Office applications and is not recommended for
	// web applications.
	// - Version 4 has been superseded by 6 and is only intended for legacy
	// apps.
	// - Version 3 has a wide install base and is serviced regularly with the
	// OS.

	/**
	 * Candidate Active X types.
	 *
	 * @type Array.<String>
	 * @private
	 */
	var XH_ACTIVE_X_IDENTS = [ "MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0",
			"MSXML2.XMLHTTP", "Microsoft.XMLHTTP", "MSXML2.XMLHTTP.7.0",
			"MSXML2.XMLHTTP.8.0" ];
	if (typeof XMLHttpRequest == "undefined"
			&& typeof ActiveXObject != "undefined") {
		for ( var i = 0; i < XH_ACTIVE_X_IDENTS.length; i++) {
			var candidate = XH_ACTIVE_X_IDENTS[i];

			try {
				//alert(new ActiveXObject(candidate));
				XH_ieProgId_ = candidate;
				break;
			} catch (e) {
				// do nothing; try next choice
			}
		}

		// couldn't find any matches
		if (!XH_ieProgId_) {
			throw Error("Could not create ActiveXObject. ActiveX might be disabled,"
					+ " or MSXML might not be installed.");
		}
	}
}

XH_XmlHttpInit_();

/**
 * Create and return an xml http request object that can be passed to
 * {@link #XH_XmlHttpGET} or {@link #XH_XmlHttpPOST}.
 */
function XH_XmlHttpCreate() {
	/*
	 * if (XH_ieProgId_) { return new ActiveXObject(XH_ieProgId_); } else { try{
	 * return new XMLHttpRequest(); }
	 */
	try {
		return new ActiveXObject("Microsoft.XMLHTTP");
	} catch (e) {
		try {
			return new XMLHttpRequest();
		} catch (e) {
			//alert("creating ajax problem");
			return false;
		}

	}
}

/**
 * Send a get request.
 *
 * @param {XMLHttpRequest}
 *            xmlHttp as from {@link XH_XmlHttpCreate}.
 * @param {string}
 *            url the service to contact
 * @param {Function}
 *            handler function called when the response is received.
 */
function XH_XmlHttpGET(xmlHttp, url, handler) {
	xmlHttp.open("GET", url, true);
	xmlHttp.onreadystatechange = handler;
	XH_XmlHttpSend(xmlHttp, null);
}

/**
 * Send a post request.
 *
 * @param {XMLHttpRequest}
 *            xmlHttp as from {@link XH_XmlHttpCreate}.
 * @param {string}
 *            url the service to contact
 * @param {string}
 *            data the request content.
 * @param {Function}
 *            handler function called when the response is received.
 */
function XH_XmlHttpPOST(xmlHttp, url, data, handler) {
	xmlHttp.open("POST", url, true);
	xmlHttp.onreadystatechange = handler;
	xmlHttp.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
	xmlHttp.setRequestHeader("Content-Length",
	/** @type {string} */
	(data.length));
	XH_XmlHttpSend(xmlHttp, data);
}

/**
 * Opens a XMLHttpRequest object and sets the onreadystatechange handler
 *
 * @deprecated You might as well do this directly in your code.
 *
 * @param {XMLHttpRequest}
 *            xmlHttp as from {@link XH_XmlHttpCreate}.
 * @param {string}
 *            verb The HTTP verb to use.
 * @param {string}
 *            url the service to contact
 * @param {Function}
 *            handler function called when the response is received.
 */
function XH_XmlHttpOpen(xmlHttp, verb, url, handler) {
	xmlHttp.open(verb, url, true);
	xmlHttp.onreadystatechange = handler;
}

/**
 * Calls 'setRequestHeader' on the XMLHttpRequest object
 *
 * @deprecated This does not do anything.
 *
 * @param {XMLHttpRequest}
 *            xmlHttp as from {@link XH_XmlHttpCreate}.
 * @param {string}
 *            name The name of the HTTP header.
 * @param {string}
 *            value The value of the HTTP header.
 */
function XH_XmlHttpSetRequestHeader(xmlHttp, name, value) {
	xmlHttp.setRequestHeader(name, value);
}

/**
 * Calls 'send' on the XMLHttpRequest object and calls a function called 'log'
 * if any error occured.
 *
 * @deprecated This dependes on a function called 'log'. You are better of
 *             handling your errors on application level.
 *
 * @param {XMLHttpRequest}
 *            xmlHttp as from {@link XH_XmlHttpCreate}.
 * @param {string|null}
 *            data the request content.
 */
function XH_XmlHttpSend(xmlHttp, data) {
	try {
		xmlHttp.send(data);
	} catch (e) {
		// You may want to log/debug this error one that you should be aware of
		// is
		// e.number == -2146697208, which occurs when the 'Languages...' setting
		// in
		// IE is empty.
		// This is not entirely true. The same error code is used when the user
		// is
		// off line.
		log('XMLHttpSend failed ' + e.toString() + '<br>' + e.stack);
		throw e;
	}
}

/**
 * Calls 'abort' on the XMLHttpRequest object and calls a function called 'log'
 * if any error occured.
 *
 * @deprecated This depends on a function called 'SafeTimeout'. You should call
 *             'abort' directly on your XMLHttpRequest object instead.
 *
 * @param {XMLHttpRequest}
 *            xmlHttp as from {@link XH_XmlHttpCreate}.
 */
function XH_XmlHttpAbort(xmlHttp) {
	// IE crashes if you NULL out the onreadystatechange synchronously
	SafeTimeout(window, function() {
		xmlHttp.onreadystatechange = function() {
		};
	}, 0);
	if (xmlHttp.readyState < XML_READY_STATE_COMPLETED) {
		xmlHttp.abort();
	}
}

$("#searchInPage").keyup(function(e) {
    if(e.which == 13) {
        $('.search_submit').click();
    } else {
        if ($(this).val().length > 0) {
            $('.search-pane').slideDown();
        } else {
            $('.search-pane').text("");
            $('.search-pane').slideUp();
        }
        $('.search-pane').text( $(this).val() );
    }
});

//Removed per HCL request
//$(".search-trigger__icon svg").click(function(){
//    if($(".search-trigger__icon--open").length!=0){
//        var str = "https://www.metlife.com/searchresults?query=";
//        var val= $('#searchInPage').val();
//        var val2 = "&spell_check=true&and_on=Y&sel_path=metlife%2Findividual%2Findex.html&remoteUser=";
//        str += val+val2;
//        window.location.href = str;
//    }
//});
var QuoteToolAPI = {} || QuoteToolAPI;

QuoteToolAPI = {
    selectedInsurance: null,
    selectedState: null,
    quoteToolType: null,
    gawliStates: "AL,AK,AZ,AR,CA,CO,CT,DE,DC,FL,GA,HI,ID,IL,IN,IA,KS,KY,LA,ME,MD,MI,MN,MS,MO,MT,NE,NV,NH,NJ,NM,NY,NC,ND,OH,OK,OR,PA,RI,SC,SD,TN,TX,UT,VT,VA,WV,WI,WY",
    gawliOnlineAvailableStates: "AL,AK,AZ,AR,CA,CO,CT,DE,DC,FL,GA,HI,ID,IL,IN,IA,KS,KY,LA,ME,MD,MI,MN,MS,MO,NE,NV,NH,NJ,NM,NC,ND,OH,OK,OR,PA,RI,SC,SD,TN,TX,UT,VT,VA,WV,WI,WY",
    sitStates: "AL,AK,AZ,AR,CO,CT,DE,DC,FL,GA,HI,ID,IL,IN,IA,KS,KY,LA,ME,MD,MA,MI,MN,MS,MO,MT,NE,NV,NH,NJ,NM,NC,ND,OH,OK,OR,PA,RI,SC,SD,TN,TX,UT,VT,VA,WV,WI,WY",
    sitOnlineAvailableStates: "AL,AK,AZ,AR,CO,CT,DE,DC,FL,GA,HI,ID,IL,IN,IA,KS,KY,LA,ME,MD,MA,MI,MN,MS,MO,NE,NV,NH,NJ,NM,NC,ND,OH,OK,OR,PA,RI,SC,SD,TN,TX,UT,VT,VA,WV,WI,WY",
    mltApprovedStates: "AL,AK,AZ,AR,CA,CO,CT,DC,DE,FL,GA,HI,IA,ID,IL,IN,KS,KY,LA,MA,MD,MI,MN,MO,MS,MT,NC,ND,NE,NH,NJ,NM,NV,NY,OH,OK,OR,PA,RI,SC,SD,TN,TX,UT,VA,VT,WA,WI,WV,WY",
    sitCompatibleAge: null,
    quoteOption: 'online',
    quoteToolStarted: false,
    gawliAgeError: false,
    coverage: {
        "GAWLIAmounts": ["$2,000", "$2,500", "$5,000", "$7,500", "$10,000", "$15,000", "$20,000", "$25,000"],
        "GAWLIValues": ["2000", "2500", "5000", "7500", "10000", "15000", "20000", "25000"],
        /*	"GLTAmounts" : ["$750,000","$1,000,000","$1,500,000","$2,000,000","$2,500,000","$3,000,000","$3,500,000","$4,000,000","$4,500,000","$5,000,000"],
         "GLTValues" : ["750000","1000000","1500000","2000000","2500000","3000000","3500000","4000000","4500000","5000000"],
         "MLTAmounts" : ["$100,000","$150,000","$200,000","$250,000","$300,000","$400,000","$500,000"],
         "MLTValues" : ["100000","150000","200000","250000","300000","400000","500000"],
         "SITAmounts" : ["$10,000","$20,000","$30,000","$50,000"],
         "SITValues" : ["10000","20000","30000","50000"],*/
        "TERMAmounts": ["$10,000", "$20,000", "$30,000", "$50,000", "$100,000", "$150,000", "$200,000", "$250,000", "$300,000", "$400,000", "$500,000", "$750,000", "$1,000,000", "$1,500,000", "$2,000,000", "$2,500,000", "$3,000,000", "$3,500,000", "$4,000,000", "$4,500,000", "$5,000,000"],
        "TERMValues": ["10000", "20000", "30000", "50000", "100000", "150000", "200000", "250000", "300000", "400000", "500000", "750000", "1000000", "1500000", "2000000", "2500000", "3000000", "3500000", "4000000", "4500000", "5000000"],
        "MLTGLTAmounts": ["$100,000", "$150,000", "$200,000", "$250,000", "$300,000", "$400,000", "$500,000", "$750,000", "$1,000,000", "$1,500,000", "$2,000,000", "$2,500,000", "$3,000,000", "$3,500,000", "$4,000,000", "$4,500,000", "$5,000,000"],
        "MLTGLTValues": ["100000", "150000", "200000", "250000", "300000", "400000", "500000", "750000", "1000000", "1500000", "2000000", "2500000", "3000000", "3500000", "4000000", "4500000", "5000000"]
    },
    gawliAgeCriteria: {
        "AR": [50, 70],
        "MN": [50, 65],
        "MO": [50, 75],
        "NE": [50, 75],
        "NJ": [50, 75],
        "PA": [56, 70]
    },
    termLength: {
        51: [10, 15, 20, 30],
        66: [10, 15, 20],
        71: [10, 15],
        76: [10]
    },
    termLength_NY: {
        66: [10, 15, 20],
        76: [10]
    },
    termLength_WA: {
        51: [10, 15, 20, 30],
        66: [10, 15, 20],
        71: [10, 15]
    }
};

$(document).ready(function() {
    QuoteToolAPI.loadEventListeners();
    if ($("#submitBtn[data-page='quotes']").length = !0 && $("#recalculateQuote").attr('data-flow') != "GAWLI") {
        QuoteToolAPI.quoteToolType = 'SIT';
    }
});

QuoteToolAPI.loadEventListeners = function() {
    $("#insurance-type").change(function() {
        QuoteToolAPI.selectedInsurance = $(this).val();
        if (QuoteToolAPI.selectedInsurance == 'gawli') {
            QuoteToolAPI.quoteToolType = 'GAWLI';
            $('#term_txt').addClass('hidden');
            $('#gawli_txt').removeClass('hidden');
            $(this).removeClass('errorField errorArrow');
            var d = new Date();
            d = d.getFullYear();
            var r = QuoteToolAPI.gawliAgeCriteria[$("#state1-mmquote").val()];
            if (r != 'undefined') {
                if (typeof(r) == "object") {
                    QuoteToolAPI.populateYearDropDown(d - r[1], 18, "#year-mmquote");
                } else {
                    QuoteToolAPI.populateYearDropDown(d - 80, 18, "#year-mmquote");
                }
            }
        } else if (QuoteToolAPI.selectedInsurance == 'term') {
            $(".error_state_coverage").hide();
            //console.log('term');
            QuoteToolAPI.quoteToolType = 'SIT';
            $('#term_txt').removeClass('hidden');
            $('#gawli_txt').addClass('hidden');
            $(this).removeClass('errorField errorArrow');
        }
        if (QuoteToolAPI.quoteToolStarted) {
            $(".quote_tool_form,.error_age_coverage,.error_state_coverage").hide();
            $("#ctaHeaderQuoteSubmit").show();
            $(".dob_cta_quote").removeClass('visible-lg');
            $(".dob_cta_quote").removeClass('visible-md');
            var quoteHeight = $(".cta_header_quote").height();
            var findXHeight = $(".cta_header_find_x").height();


            $("#month-mmquote,#day-mmquote,#year-mmquote,#gender-mmquote,#term-mmquote,#tobacco-mmquote,#health-mmquote").val("");
            $(".rep_cta_check").removeAttr("checked");
            $(".online_cta_check").prop("checked", true);

            $(".rep_cta_check").siblings("svg").first().hide();
            $(".rep_cta_check").siblings("svg:not(\":first-of-type\")").show();
            $(".online_cta_check").siblings("svg").hide();
            $(".online_cta_check").siblings("svg").first().show();
        }
        /* for LI quote */
        if ($("#submitBtn[data-page='quotes']").length != 0) {
            QuoteToolAPI.goOnBlur();
        }
        QuoteToolAPI.updateCoverageAmount("#coverage-mmquote");
    });
    $("#state1-mmquote").change(function() {
        QuoteToolAPI.selectedState = $(this).val();
        if (QuoteToolAPI.quoteToolStarted) {
            var quoteHeight = $(".cta_header_quote").height();
            var findXHeight = $(".cta_header_find_x").height();
            $(".quote_tool_form,.error_age_coverage,.error_state_coverage").hide();
            $("#ctaHeaderQuoteSubmit").show();
            $(".dob_cta_quote").removeClass('visible-lg');
            $(".dob_cta_quote").removeClass('visible-md');
            $("#month-mmquote,#day-mmquote,#year-mmquote,#gender-mmquote,#term-mmquote,#tobacco-mmquote,#health-mmquote").val("");
            $(".rep_cta_check").removeAttr("checked");
            $(".online_cta_check").prop("checked", true);
            $(".rep_cta_check").siblings("svg").first().hide();
            $(".rep_cta_check").siblings("svg:not(\":first-of-type\")").show();
            $(".online_cta_check").siblings("svg").hide();
            $(".online_cta_check").siblings("svg").first().show();
        }


        if ($("#state1-mmquote").val() != null || $("#state1-mmquote").val() != '') {
            $(".select_state_cta_quote").removeClass('errorField errorArrow');

        }

        /* for LI quote */
        if ($("#submitBtn[data-page='quotes']").length != 0) {
            QuoteToolAPI.goOnBlur();
            if (QuoteToolAPI.selectedInsurance == 'gawli') {
                $(".error_state_not_selected").hide();
                if (QuoteToolAPI.gawliStates.indexOf(QuoteToolAPI.selectedState) == -1) {
                    if ($(".dob_label").is(':visible')) {
                        $(".gawli_error_state").insertAfter(".select_state");
                    } else {
                        $(".gawli_error_state").insertAfter(".dob_input");
                    }
                    $(".error_state_coverage").show();

                } else {
                    $(".error_state_coverage").hide();
                }
            } else {
                if (QuoteToolAPI.sitStates.indexOf(QuoteToolAPI.selectedState) == -1) {
                    $(".quoteBottom").show();
                    $("#term-mmquote,#tobacco-mmquote,#health-mmquote").attr('data-validation', true);
                } else {
                    $(".quoteBottom").hide();
                    $("#term-mmquote,#tobacco-mmquote,#health-mmquote").removeAttr('data-validation').removeClass('errorField');
                }
            }
        }
        if (QuoteToolAPI.sitStates.indexOf(QuoteToolAPI.selectedState) == -1) {
            QuoteToolAPI.verifyMLTorGLT();
        }
        QuoteToolAPI.updateCoverageAmount("#coverage-mmquote");
        QuoteToolAPI.selectedInsurance = $("#insurance-type").val();
        if (QuoteToolAPI.selectedInsurance == 'gawli') {
            QuoteToolAPI.quoteToolType = 'GAWLI';
            $('#term_txt').addClass('hidden');
            $('#gawli_txt').removeClass('hidden');
            $(this).removeClass('errorField errorArrow');
            var d = new Date();
            d = d.getFullYear();
            var r = QuoteToolAPI.gawliAgeCriteria[$("#state1-mmquote").val()];
            console.log(r != 'undefined');
            if (r != 'undefined') {
                if (typeof(r) == "object") {
                    QuoteToolAPI.populateYearDropDown(d - r[1], 18, "#year-mmquote");
                } else {
                    QuoteToolAPI.populateYearDropDown(d - 80, 18, "#year-mmquote");
                }
            }
        }
    });

    $("#ctaHeaderQuoteSubmit").click(function(e) {
        e.preventDefault();
        if ($("#insurance-type").val() == null || $("#insurance-type").val() == '') {
            $("#insurance-type").addClass('errorField errorArrow');
        }
        if ($("#state1-mmquote").val() == null || $("#state1-mmquote").val() == '') {
            $(".select_state_cta_quote").addClass('errorField errorArrow');
        } else //if(!QuoteToolAPI.areErrorFieldsPresent)
        {
            QuoteToolAPI.selectedInsurance = $("#insurance-type").val();
            var d = new Date();
            d = d.getFullYear();
            if (QuoteToolAPI.selectedInsurance == 'gawli') {
                if (QuoteToolAPI.gawliStates.indexOf(QuoteToolAPI.selectedState) == -1) {
                    if ($(".dob_label").is(':visible')) {
                        $(".gawli_error_state").insertAfter(".select_state");
                    } else {
                        $(".gawli_error_state").insertAfter(".dob_input");
                    }
                    $(".error_state_coverage").show();

                } else {
                    $(".quote_tool_form").show();
                    $(".quoteBottom,.error_state_coverage").hide();
                    $(".select_state_cta_quote").removeClass('errorField errorArrow');
                    $("#insurance-type").removeClass('errorField errorArrow');
                    $(".dob_cta_quote").insertBefore($(".state_wrapper")).addClass('visible-lg');
                    $(".dob_cta_quote").insertBefore($(".state_wrapper")).addClass('visible-md');
                    $("#month-mmquote,#day-mmquote,#year-mmquote,#gender-mmquote,#coverage-mmquote").attr('data-validation', true);
                    $(this).hide();
                    QuoteToolAPI.quoteToolType = 'GAWLI';
                    QuoteToolAPI.updateCoverageAmount("#coverage-mmquote");
                    QuoteToolAPI.quoteToolStarted = true;
                    var r = QuoteToolAPI.gawliAgeCriteria[QuoteToolAPI.selectedState];
                    if (typeof(r) == "object") {
                        QuoteToolAPI.populateYearDropDown(d - r[1], 18, "#year-mmquote");
                    } else {
                        QuoteToolAPI.populateYearDropDown(d - 80, 18, "#year-mmquote");
                    }
                }
                QuoteToolAPI.quoteToolType = 'GAWLI';
                QuoteToolAPI.sitCompatibleAge = false;
            } else if (QuoteToolAPI.selectedInsurance == 'term') {
                var d = new Date(),
                    r = QuoteToolAPI.sitStates.indexOf(QuoteToolAPI.selectedState);
                d = d.getFullYear();
                $(".quote_tool_form").show();
                $(this, ".error_state_coverage").hide();
                $(".dob_cta_quote").insertBefore($(".state_wrapper")).addClass('visible-lg');
                $(".dob_cta_quote").insertBefore($(".state_wrapper")).addClass('visible-md');
                $(".select_state_cta_quote").removeClass('errorField errorArrow');
                $("#insurance-type").removeClass('errorField errorArrow');
                $("#month-mmquote,#day-mmquote,#year-mmquote,#gender-mmquote,#coverage-mmquote").attr('data-validation', true);
                QuoteToolAPI.quoteToolType = 'SIT';
                QuoteToolAPI.populateYearDropDown(d - 75, 18, "#year-mmquote");
                QuoteToolAPI.quoteToolStarted = true;
                QuoteToolAPI.updateTermLength("#term-mmquote", "home");
                if (r == -1) {
                    $(".quoteBottom").show();
                    QuoteToolAPI.quoteToolType = 'MLT';
                } else {
                    $(".quoteBottom").hide();
                }
                QuoteToolAPI.updateCoverageAmount("#coverage-mmquote");
            }
        }
    });
    $("#month-mmquote,#day-mmquote,#year-mmquote").change(function() {
        var age = QuoteToolAPI.calculateAge();
        if (QuoteToolAPI.quoteToolType == 'GAWLI' && age != 0) {
            var range = QuoteToolAPI.gawliAgeCriteria[QuoteToolAPI.selectedState];
            if (typeof(range) == "object") {
                if (age < range[0] || age > range[1]) {
                    $(".error_age_coverage").show();
                } else {
                    $(".error_age_coverage").hide();
                }
            } else if (age < 50 || age > 80) {
                $(".error_age_coverage").show();
            } else {
                $(".error_age_coverage").hide();
            }
        } else {
            if (age > 70 && age < 76) { // && $("#coverage-mmquote").val() < 750000){
                //console.log('71-75');
                $(".quoteBottom").show();
                $("#term-mmquote,#tobacco-mmquote,#health-mmquote").attr('data-validation', true);
                QuoteToolAPI.sitCompatibleAge = false;
                QuoteToolAPI.verifyMLTorGLT();
                QuoteToolAPI.updateCoverageAmount("#coverage-mmquote");
            } else if (age > 17 && age < 71) {
                //console.log('18-70');
                if (QuoteToolAPI.sitStates.indexOf($("#state1-mmquote").val()) != -1) {
                    if ($("#coverage-mmquote").val() > 99999) {
                        $(".quoteBottom").show();
                        $("#term-mmquote,#tobacco-mmquote,#health-mmquote").attr('data-validation', true);
                        QuoteToolAPI.sitCompatibleAge = false;
                        QuoteToolAPI.updateTermLength("#term-mmquote", "home");
                        QuoteToolAPI.verifyMLTorGLT();
                    } else {
                        $(".quoteBottom").hide();
                        $(".quoteTermLength,.quoteTobacco,.quoteHealth,.quoteOptions").addClass('hidden').removeClass('errorField');
                        $("#term-mmquote,#tobacco-mmquote,#health-mmquote").removeAttr('data-validation');
                        QuoteToolAPI.sitCompatibleAge = true;
                        QuoteToolAPI.quoteToolType = 'SIT';
                    }
                }
                QuoteToolAPI.updateCoverageAmount("#coverage-mmquote");
            }
            QuoteToolAPI.updateTermLength("#term-mmquote", "home");
        }
    });
    $("#coverage-mmquote").change(function() {
        var val = $(this).val();
        if (QuoteToolAPI.quoteToolType != 'GAWLI') {
            if (parseInt(val) < 50001 && (QuoteToolAPI.calculateAge() == 0 || (QuoteToolAPI.calculateAge() > 17 && QuoteToolAPI.calculateAge() < 71)) && QuoteToolAPI.sitStates.indexOf(QuoteToolAPI.selectedState) != -1) {
                $(".quoteBottom").hide();
                $("#term-mmquote,#tobacco-mmquote,#health-mmquote").removeAttr('data-validation').removeClass('errorField')
                QuoteToolAPI.quoteToolType = 'SIT';
            } else {
                $(".quoteBottom").show();
                $("#term-mmquote,#tobacco-mmquote,#health-mmquote").attr('data-validation', true);
                QuoteToolAPI.verifyMLTorGLT();
            }
        }
        if (val > 750000) {
            $(".online_cta_check").removeAttr("checked");
            $(".rep_cta_check").prop("checked", true);
            $(".online_cta_check").siblings("svg").first().hide();
            $(".online_cta_check").siblings("svg:not(\":first-of-type\")").show();
            $(".rep_cta_check").siblings("svg").hide();
            $(".rep_cta_check").siblings("svg").first().show();
            QuoteToolAPI.quoteToolType = 'GLT';
        }
    });
    $("input[name='options']").change(function() {
        QuoteToolAPI.quoteOption = $(this).val();
    });
    $("#submitBtn").click(function(e) {
        e.preventDefault();
        var birthMonth = $("#month-mmquote").val();
        var birthDay = $("#day-mmquote").val();
        var birthYear = $("#year-mmquote").val();
        var dob = new Date();

        if (birthMonth != "" && (isNaN(birthMonth) == false)) {
            dob.setMonth(birthMonth);
        }
        if (birthDay != "" && (isNaN(birthDay) == false)) {
            dob.setDate(birthDay);
        }
        if (birthYear != "" && (isNaN(birthYear) == false)) {
            dob.setYear(birthYear);
        }
        var cancelRedirect = QuoteToolAPI.validateFields();
        var age = QuoteToolAPI.calculateAge();
        if ($("#insurance-type").val() == "gawli") {
            if (QuoteToolAPI.selectedState) {
                if (QuoteToolAPI.gawliStates.indexOf(QuoteToolAPI.selectedState) != -1) {
                    var range = QuoteToolAPI.gawliAgeCriteria[QuoteToolAPI.selectedState];
                    if (typeof(range) == "object" && (age < range[0] || age > range[1])) {
                        $(".error_age_coverage").show();
                        /*var quoteHeight = $(".cta_header_quote").height();
                         var findXHeight = $(".cta_header_find_x").height();
                         if ($(window).width() >= 751 && $(window).width() <= 1024) {
                         $(".icon_scroll_bar").css("margin-top", "478px");

                         }
                         if ($(window).width() >= 1025) {
                         $(".icon_scroll_bar").css("margin-top", "340px");

                         }*/
                    } else if (age < 50 || age > 80) {
                        $(".error_age_coverage").show();
                        /*var quoteHeight = $(".cta_header_quote").height();
                         var findXHeight = $(".cta_header_find_x").height();
                         if ($(window).width() >= 751 && $(window).width() <= 1024) {
                         $(".icon_scroll_bar").css("margin-top", "478px");

                         }
                         if ($(window).width() >= 1025) {
                         $(".icon_scroll_bar").css("margin-top", "340px");

                         }*/
                    } else {
                        $(".error_age_coverage").hide();
                        if (!cancelRedirect) {
                            //localstorage gawli
                            localStorage.setItem("GAWLIUrl", $(".cta_quote_form_wraper").attr("data-gawli-url"));
                            QuoteToolAPI.getQuotePremiumGAWLI();
                        }
                    }
                }
            } else {
                $(".error_state_not_selected").show();
            }
        } else if ($("#insurance-type").val() == "term") {

            if (QuoteToolAPI.quoteToolType == 'SIT') {
                if (age < 18 || age > 70) {
                    $(".error_age_coverage").show();
                    /*var quoteHeight = $(".cta_header_quote").height();
                     var findXHeight = $(".cta_header_find_x").height();
                     if ($(window).width() >= 751 && $(window).width() <= 1024) {
                     $(".icon_scroll_bar").css("margin-top", "478px");

                     }
                     if ($(window).width() >= 1025) {
                     $(".icon_scroll_bar").css("margin-top", "340px");

                     }*/
                } else {
                    $(".error_age_coverage").hide();
                    if (!cancelRedirect) {
                        //sit local storage
                        localStorage.setItem("SITUrl", $(".cta_quote_form_wraper").attr("data-sit-url"));
                        QuoteToolAPI.getQuotePremiumSIT();
                    }
                }
            } else if (QuoteToolAPI.quoteToolType == 'MLT') {
                if (!cancelRedirect) {
                    //mlt local storage
                    localStorage.setItem("MLTUrl", $(".cta_quote_form_wraper").attr("data-mlt-url"));
                    QuoteToolAPI.getQuotePremiumMLT();
                }
            } else if (QuoteToolAPI.quoteToolType == 'GLT') {
                if (!cancelRedirect) {
                    //glt local storage
                    localStorage.setItem("GLTUrl", $(".cta_quote_form_wraper").attr("data-glt-url"));
                    QuoteToolAPI.getQuotePremiumGLT();
                }
            }
        }
    });
    $(document).on("blur", "[data-validation='true']", function() {
        if ($(this).val() != null && $(this).val() != '') {
            $(this).removeClass('errorField errorArrow');
            if ($(this).hasClass('birth_month_cta_quote') || $(this).hasClass('birth_day_cta_quote') || $(this).hasClass('birth_year_cta_quote')) {
                var age = null;
                if ($("#recalculateQuote").length != 0) {
                    age = QuoteToolAPI.calculateAgeResults();
                } else {
                    age = QuoteToolAPI.calculateAge();
                }
                if (age != 0) {
                    $(".birth_month_cta_quote,.birth_day_cta_quote,.birth_year_cta_quote").removeClass('errorField errorArrow');
                }
            }
        }
    });
    $("#month-mmquote").on("change", function() {
        QuoteToolAPI.populateDaysDropDown("#");
    });
    $("#year-mmquote").on("change", function() {
        QuoteToolAPI.populateDaysDropDown("#");
    });
}

QuoteToolAPI.calculateAge = function() {
    var l = 0;
    if ((document.getElementById("month-mmquote").value != "") && (document.getElementById("day-mmquote").value != "") && (document.getElementById("year-mmquote").value != "")) {
        var b = parseInt(document.getElementById("month-mmquote").value);
        var k = parseInt(document.getElementById("day-mmquote").value);
        var m = parseInt(document.getElementById("year-mmquote").value);
        var g = new Date();
        var e = g.getFullYear();
        var h = g.getMonth() + 1;
        var f = g.getDate();
        var c = 0;
        var a = 0;
        if (e > m) {
            l = e - m;
            c = e - m;
        }
        if (h < b) {
            l = l - 1;
            c = c - 1;
            a = 12 - (b - h);
            if (k > f) {
                a = a - 1;
            }
        } else {
            if (h == b) {
                if (f < k) {
                    l = l - 1;
                    c = c - 1;
                    a = 12 - (b - h);
                }
            } else {
                if (h > b) {
                    if (f >= k) {
                        a = h - b;
                    } else {
                        a = (h - b) - 1;
                    }
                }
            }
        }
        if ((QuoteToolAPI.quoteToolType == 'GLT' || QuoteToolAPI.quoteToolType == 'MLT') && a >= 6) {
            l = l + 1
        }
    } else {}
    return l;
}

QuoteToolAPI.verifyMLTorGLT = function() {
    if (QuoteToolAPI.quoteOption == 'online') // && QuoteToolAPI.mltApprovedStates.indexOf(QuoteToolAPI.selectedState) != -1)
    {
        QuoteToolAPI.quoteToolType = 'MLT';
        /*if(QuoteToolAPI.mltApprovedStates.indexOf(QuoteToolAPI.selectedState) != -1)
         {
         QuoteToolAPI.quoteToolType = 'MLT';
         }
         else
         {
         QuoteToolAPI.quoteToolType = 'GLT';
         }*/
    } else if (QuoteToolAPI.quoteOption == 'advisor') {
        QuoteToolAPI.quoteToolType = 'GLT';
    }
};

QuoteToolAPI.updateCoverageAmount = function(id) {
    var amounts, values, len, coverageOption = QuoteToolAPI.quoteToolType;
    //console.log(QuoteToolAPI.quoteToolType);
    //console.log(coverageOption);
    //console.log(QuoteToolAPI.sitStates.indexOf(QuoteToolAPI.selectedState));
    var age = null;
    if (id == "#coverage-mmquote") {
        age = QuoteToolAPI.calculateAge();
    } else if (id == "#edit-coverage-mmquote") {
        age = QuoteToolAPI.calculateAgeResults();
    }
    if (QuoteToolAPI.quoteToolType == 'GAWLI') {
        coverageOption = 'GAWLI';
    } else if ((QuoteToolAPI.quoteToolType == 'GLT' || QuoteToolAPI.quoteToolType == 'MLT')) {
        if (((QuoteToolAPI.sitStates.indexOf(QuoteToolAPI.selectedState) != -1) && age > 70) || (QuoteToolAPI.sitStates.indexOf(QuoteToolAPI.selectedState) == -1)) {
            coverageOption = 'MLTGLT';
        } else {
            coverageOption = 'TERM';
        }
    } else //if(QuoteToolAPI.quoteToolType == 'SIT')
    {
        coverageOption = 'TERM';
    }

    amounts = QuoteToolAPI.coverage[coverageOption + "Amounts"];
    values = QuoteToolAPI.coverage[coverageOption + "Values"];
    //console.log(coverageOption);
    len = amounts.length;
    $(id).children().remove();
    $(id).append("<option value=''>Coverage Amount</option>");

    for (var i = 0; i < len; i++) {
        $(id).append("<option value=" + values[i] + ">" + amounts[i] + "</option>");
    }
}

QuoteToolAPI.redirectToResultsPage = function(quotePremium) {
    if(quotePremium == "-100")
    {
        var urlParamString = '';
        urlParamString += 's=' + $("#state1-mmquote").val() + ',';
        urlParamString += 'd=' + $("#day-mmquote").val() + ',';
        urlParamString += 'm=' + $("#month-mmquote").val() + ',';
        urlParamString += 'y=' + $("#year-mmquote").val() + ',';
        urlParamString += 'g=' + $("#gender-mmquote").val() + ',';
        urlParamString += 'c=' + $("#coverage-mmquote").val();
        if(QuoteToolAPI.quoteToolType == 'MLT' || QuoteToolAPI.quoteToolType == 'GLT')
        {
            urlParamString += ',t=' + $("#term-mmquote").val();
            urlParamString += ',n=' + $("#tobacco-mmquote").val() + ',';
            urlParamString += 'h=' + $("#health-mmquote").val();
        }
        urlParamString = QuoteToolAPI.base64Encode(urlParamString);
        console.log(urlParamString);
        var x = window.location.pathname;
        var urlBase = x.substring(0, x.lastIndexOf('/')+1);
        if($("#submitBtn").attr('data-page') && $("#submitBtn").attr('data-page') == 'quotes')
        {
            urlBase= x.substring(0, x.lastIndexOf('/insurance')+1);
        }
        var onlineAvailable = "n";
        if(QuoteToolAPI.quoteToolType == 'GAWLI'){
            if(QuoteToolAPI.gawliOnlineAvailableStates.indexOf(QuoteToolAPI.selectedState) != -1){
                onlineAvailable = "y";
            }
            //window.location.href = urlBase + "Other\\GAWLI Results\\guaranteed-acceptance.html?"+"ol="+QuoteToolAPI.base64Encode(onlineAvailable)+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium);
            window.location.href = urlBase + localStorage.getItem("GAWLIUrl")+"?"+"ol="+QuoteToolAPI.base64Encode(onlineAvailable)+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium) + "&errorstatus=error";
        }
        else if(QuoteToolAPI.quoteToolType == 'SIT'){
            if(QuoteToolAPI.sitOnlineAvailableStates.indexOf(QuoteToolAPI.selectedState) != -1){
                onlineAvailable = "y";
            }

            //window.location.href = urlBase + "Other\\SIT Results\\simplified-issue.html?"+"ol="+QuoteToolAPI.base64Encode(onlineAvailable)+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium);
            window.location.href =  urlBase + localStorage.getItem("SITUrl")+"?"+"ol="+QuoteToolAPI.base64Encode(onlineAvailable)+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium) + "&errorstatus=error";
        }
        else if(QuoteToolAPI.quoteToolType == 'MLT'){
            if(QuoteToolAPI.selectedState != 'NY'){
                onlineAvailable = "y";
            }
            //window.location.href = urlBase + "Other\\MLT Results\\term-life.html?"+"ol="+QuoteToolAPI.base64Encode(onlineAvailable)+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium);
            window.location.href = urlBase + localStorage.getItem("MLTUrl")+"?"+"ol="+QuoteToolAPI.base64Encode(onlineAvailable)+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium) + "&errorstatus=error";
        }
        else if(QuoteToolAPI.quoteToolType == 'GLT'){
            //window.location.href = urlBase + "Other\\GLT Results\\guaranteed-level.html?"+"ol="+QuoteToolAPI.base64Encode('')+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium);
            window.location.href = urlBase + localStorage.getItem("GLTUrl")+"?"+"ol="+QuoteToolAPI.base64Encode('')+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium) + "&errorstatus=error";
        }

    } else {

        var urlParamString = '';
        urlParamString += 's=' + $("#state1-mmquote").val() + ',';
        urlParamString += 'd=' + $("#day-mmquote").val() + ',';
        urlParamString += 'm=' + $("#month-mmquote").val() + ',';
        urlParamString += 'y=' + $("#year-mmquote").val() + ',';
        urlParamString += 'g=' + $("#gender-mmquote").val() + ',';
        urlParamString += 'c=' + $("#coverage-mmquote").val();
        if(QuoteToolAPI.quoteToolType == 'MLT' || QuoteToolAPI.quoteToolType == 'GLT')
        {
            urlParamString += ',t=' + $("#term-mmquote").val();
            urlParamString += ',n=' + $("#tobacco-mmquote").val() + ',';
            urlParamString += 'h=' + $("#health-mmquote").val();
        }
        urlParamString = QuoteToolAPI.base64Encode(urlParamString);
        console.log(urlParamString);
        var x = window.location.pathname;
        var urlBase = x.substring(0, x.lastIndexOf('/')+1);
        if($("#submitBtn").attr('data-page') && $("#submitBtn").attr('data-page') == 'quotes')
        {
            urlBase= x.substring(0, x.lastIndexOf('/insurance')+1);
        }
        var onlineAvailable = "n";
        if(QuoteToolAPI.quoteToolType == 'GAWLI'){
            if(QuoteToolAPI.gawliOnlineAvailableStates.indexOf(QuoteToolAPI.selectedState) != -1){
                onlineAvailable = "y";
            }
            //window.location.href = urlBase + "Other\\GAWLI Results\\guaranteed-acceptance.html?"+"ol="+QuoteToolAPI.base64Encode(onlineAvailable)+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium);
            window.location.href = urlBase + localStorage.getItem("GAWLIUrl")+"?"+"ol="+QuoteToolAPI.base64Encode(onlineAvailable)+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium);
        }
        else if(QuoteToolAPI.quoteToolType == 'SIT'){
            if(QuoteToolAPI.sitOnlineAvailableStates.indexOf(QuoteToolAPI.selectedState) != -1){
                onlineAvailable = "y";
            }

            //window.location.href = urlBase + "Other\\SIT Results\\simplified-issue.html?"+"ol="+QuoteToolAPI.base64Encode(onlineAvailable)+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium);
            window.location.href = urlBase + localStorage.getItem("SITUrl")+"?"+"ol="+QuoteToolAPI.base64Encode(onlineAvailable)+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium);
        }
        else if(QuoteToolAPI.quoteToolType == 'MLT'){
            if(QuoteToolAPI.selectedState != 'NY'){
                onlineAvailable = "y";
            }
            //window.location.href = urlBase + "Other\\MLT Results\\term-life.html?"+"ol="+QuoteToolAPI.base64Encode(onlineAvailable)+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium);
            window.location.href = urlBase + localStorage.getItem("MLTUrl")+"?"+"ol="+QuoteToolAPI.base64Encode(onlineAvailable)+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium);
        }
        else if(QuoteToolAPI.quoteToolType == 'GLT'){
            //window.location.href = urlBase + "Other\\GLT Results\\guaranteed-level.html?"+"ol="+QuoteToolAPI.base64Encode('')+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium);
            window.location.href = urlBase + localStorage.getItem("GLTUrl")+"?"+"ol="+QuoteToolAPI.base64Encode('')+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium);
        }
    }
}

QuoteToolAPI.validateFields = function() {
    var areErrorFieldsPresent = false;
    $("[data-validation='true']").each(function() {
        if ($(this).val() == null || $(this).val() == '') {
            $(this).addClass('errorField errorArrow');
            areErrorFieldsPresent = true;
        }
        console.log(areErrorFieldsPresent);
    });
    return areErrorFieldsPresent;
}

QuoteToolAPI.populateYearDropDown = function(year, min, element) {
    var yearOptions = $(element);
    var yr = new Date();
    yr = yr.getFullYear() - min;
    $(element).children().remove();
    $(element).append("<option value=''>YYYY</option>");
    for (i = yr; i >= year; i--) {
        var optionValue = i;
        yearOptions.append($('<option>', {
            value: optionValue,
            text: optionValue.toString()
        }));
    }
}

QuoteToolAPI.populateDaysDropDown = function(id) {
    if (($(id + "month-mmquote").val() == "09") || ($(id + "month-mmquote").val() == "04") ||
        ($(id + "month-mmquote").val() == "06") || ($(id + "month-mmquote").val() == "11")) {
        $(id + "day-mmquote option:eq(31)").remove();
    } else if ($(id + "month-mmquote").val() == "02") {

        if ((QuoteToolAPI.isLeapYear($(id + "year-mmquote").val()) == false) || $(id + "year-mmquote").val() == "") {
            $(id + "day-mmquote option:eq(31)").remove();
            $(id + "day-mmquote option:eq(30)").remove();
            $(id + "day-mmquote option:eq(29)").remove();
        } else {
            if (($(id + "day-mmquote option[value='29']").length > 0) == false) {
                $(id + "day-mmquote").append('<option value="29">29</option>');
            }
            $(id + "day-mmquote option:eq(31)").remove();
            $(id + "day-mmquote option:eq(30)").remove();
        }

    } else {
        if (($(id + "day-mmquote option[value='29']").length > 0) == false) {
            $(id + "day-mmquote").append('<option value="29">29</option>');
        }
        if (($(id + "day-mmquote option[value='30']").length > 0) == false) {
            $(id + "day-mmquote").append('<option value="30">30</option>');
        }
        if (($(id + "day-mmquote option[value='31']").length > 0) == false) {
            $(id + "day-mmquote").append('<option value="31">31</option>');
        }
    }
}

QuoteToolAPI.base64Encode = function(g) {
    if (typeof(btoa) == "function") {
        return btoa(g)
    }
    var h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var m, l, k;
    var d, c, b, a;
    var o = new Array();
    var e = 0;
    for (var f = 0; f < g.length; f += 3) {
        m = g.charCodeAt(f);
        l = g.charCodeAt(f + 1);
        k = g.charCodeAt(f + 2);
        d = m >> 2;
        c = ((m & 3) << 4) | (l >> 4);
        b = ((l & 15) << 2) | (k >> 6);
        a = k & 63;
        if (isNaN(l)) {
            b = a = 64;
        } else {
            if (isNaN(k)) {
                a = 64;
            }
        }
        o[e++] = h.charAt(d) + h.charAt(c) + h.charAt(b) + h.charAt(a)
    }
    return o.join("");
}

QuoteToolAPI.isLeapYear = function(a) {
    a = parseInt(a);
    if (a % 4 == 0) {
        if (a % 100 != 0) {
            return true
        } else {
            if (a % 400 == 0) {
                return true
            } else {
                return false
            }
        }
    }
    return false;
}

QuoteToolAPI.getQuotePremiumGAWLI = function() {
    var flag = null;
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    var todaydate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + hours + ":" + minutes + ":" + seconds;
    var dob = $("#month-mmquote").val() + "-" + $("#day-mmquote").val() + "-" + $("#year-mmquote").val();
    console.log(typeof dob);
    var reqObjParam = {
        "transaction": {
            "metaData": {},
            "transactionType": "diagnosticTool",
            "entities": {
                "user": {
                    "personalInfo": {
                        "firstName": "",
                        "middleName": "",
                        "lastName": "",
                        "email": "",
                        "street": "",
                        "city": "",
                        "zip": "",
                        "stateDesc": QuoteToolAPI.selectedState,
                        "primaryPhone": "",
                        "alternatePhone": ""
                    },
                    "inputFields": {
                        "gender": $("#gender-mmquote").val(),
                        "dateOfBirth": $("#month-mmquote").val() + "-" + $("#day-mmquote").val() + "-" + $("#year-mmquote").val(),
                        "state": QuoteToolAPI.selectedState,
                        "faceAmount": $("#coverage-mmquote").val(),
                        "productType": "GIWL",
                        "termLength": "10",
                        "age": QuoteToolAPI.calculateAge(),
                        "health": "Healthy",
                        "replacement": "No",
                        "healthClass": "Standard",
                        "tobacco": "No"
                    },
                    "agentId": "",
                    "agentName": "",
                    "appSrc": "ML.com",
                    "campaignCode": "",
                    "channelType": "BroadMarket",
                    "cRMID": "",
                    "submittedDateTime": todaydate
                }
            }
        }
    };
    reqObjParam = JSON.stringify(reqObjParam);

    $.ajax({
        //url: "/wps/qadiagnosticToolProxy/sales/getProdRcmdAndQuoteForJSONInput?CN=USA",
        url: "/wps/diagnosticToolProxy/sales/getProdRcmdAndQuoteForJSONInput?CN=USA",
        type: 'POST',
        dataType: 'json',
        data: reqObjParam,
        contentType: "application/json",
        success: function(e) {

            QuoteToolAPI.redirectToResultsPage(QuoteToolAPI.formatQuotePremium(e["GIWLResp"]["premium"]));
        },
        error: function(e) {
            console.log('error ', e); //	handleServiceError()
        },
        timeout: 30000
    });
}

QuoteToolAPI.getQuotePremiumSIT = function() {
    var flag = null;
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    var todaydate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + hours + ":" + minutes + ":" + seconds;
    var dob = $("#month-mmquote").val() + "-" + $("#day-mmquote").val() + "-" + $("#year-mmquote").val();
    var reqObjParam = {
        "transaction": {
            "metaData": {},
            "transactionType": "diagnosticTool",
            "entities": {
                "user": {
                    "personalInfo": {
                        "firstName": "",
                        "middleName": "",
                        "lastName": "",
                        "email": "",
                        "street": "",
                        "city": "",
                        "zip": "",
                        "stateDesc": QuoteToolAPI.selectedState,
                        "primaryPhone": "",
                        "alternatePhone": ""
                    },
                    "inputFields": {
                        "gender": $("#gender-mmquote").val(),
                        "dateOfBirth": $("#month-mmquote").val() + "-" + $("#day-mmquote").val() + "-" + $("#year-mmquote").val(),
                        "state": QuoteToolAPI.selectedState,
                        "faceAmount": $("#coverage-mmquote").val(),
                        "productType": "SIT",
                        "termLength": "10",
                        "age": QuoteToolAPI.calculateAge(),
                        "health": "Healthy",
                        "replacement": "No",
                        "healthClass": "Standard",
                        "tobacco": "No"
                    },
                    "agentId": "",
                    "agentName": "",
                    "appSrc": "ML.com",
                    "campaignCode": "",
                    "channelType": "BroadMarket",
                    "cRMID": "",
                    "submittedDateTime": todaydate
                }
            }
        }
    };
    reqObjParam = JSON.stringify(reqObjParam);
    $.ajax({
        //url: "/wps/qadiagnosticToolProxy/sales/getProdRcmdAndQuoteForJSONInput?CN=USA",
        url: "/wps/diagnosticToolProxy/sales/getProdRcmdAndQuoteForJSONInput?CN=USA",
        type: 'POST',
        dataType: 'json',
        data: reqObjParam,
        contentType: "application/json",
        success: function(e) {
            console.log('success ', e);
            QuoteToolAPI.redirectToResultsPage(QuoteToolAPI.formatQuotePremium(e['SITResp']['WithoutRider']['monthlypremium'].split(",")[1]));
        },
        error: function(e) {
            console.log('error ', e);
        },
        timeout: 30000
    });
}

QuoteToolAPI.getQuotePremiumMLT = function() {
    var jsonData = {
        "term": $("#term-mmquote").val(),
        "age": QuoteToolAPI.calculateAge(),
        "gender": $("#gender-mmquote").val(),
        "health": $("#health-mmquote").val(),
        "tobacco": $("#tobacco-mmquote").val(),
        "coverage": $("#coverage-mmquote").val(),
        "state": $("#state1-mmquote").val(),
        "lstPnPParameters": "state,DOB,coverage,term,tobacco,health,gender,age,lStatus",
        "lStatus": "Q",
        "rating": 0,
        "mcid": ""
    };
    var URL;
    console.log(jsonData);
    if ($("#submitBtn[data-page='quotes']").length == 1) {
        URL = "../../../wps/proxy/MCPremiumQuoteWS/MCCDTPremiumQuote";
    } else {
        URL = "../wps/proxy/MCPremiumQuoteWS/MCCDTPremiumQuote";
    }
    $.ajax({
        url: URL,
        //url: window.location.origin+"/wps/proxy/MCPremiumQuoteWS/MCCDTPremiumQuote",
        type: 'GET',
        contentType: "json",
        data: jsonData,
        success: function(e) {
            console.log('success ', e);
            QuoteToolAPI.redirectToResultsPage(QuoteToolAPI.formatQuotePremium(JSON.parse(e.substring(e.indexOf("{"), e.indexOf("}") + 1))["basepremium"]));
        },
        error: function(e) {
            console.log('error ', e);
        },
        timeout: 30000
    });
}

QuoteToolAPI.getQuotePremiumGLT = function() {
    var genderIs = "";
    var healthIs = $("#health-mmquote").val();
    if ($("#state1-mmquote").val() == "MT") {
        genderIs = "U";
        if (healthIs == "E") {
            healthIs = "VG"
        }
    } else {
        genderIs = $("#gender-mmquote").val()
    };
    var jsonData = {
        "term": $("#term-mmquote").val(),
        "age": QuoteToolAPI.calculateAge(),
        "gender": genderIs,
        "health": healthIs,
        "tobacco": $("#tobacco-mmquote").val(),
        "coverage": $("#coverage-mmquote").val(),
        "state": $("#state1-mmquote").val(),
        "lstPnPParameters": "state,DOB,coverage,term,tobacco,health,gender,age,lStatus",
        "lStatus": "Q",
        "rating": 0,
        "mcid": ""
    };
    if ($("#submitBtn[data-page='quotes']").length == 1) {
        URL = "../../../wps/proxy/MCPremiumQuoteWS/MCPremiumQuote";
    } else {
        URL = "../wps/proxy/MCPremiumQuoteWS/MCPremiumQuote";
    }
    $.ajax({
        url: URL,
        //url: window.location.origin+"/wps/proxy/MCPremiumQuoteWS/MCPremiumQuote",
        type: 'GET',
        contentType: "json",
        data: jsonData,
        success: function(e) {
            console.log('success ', e);
            QuoteToolAPI.redirectToResultsPage(QuoteToolAPI.formatQuotePremium(JSON.parse(e.substring(e.indexOf("{"), e.indexOf("}") + 1))["premium"]));
        },
        error: function(e) {
            console.log('error ', e);
        },
        timeout: 30000
    });
}

QuoteToolAPI.updateTermLength = function(id, page) {
    var terms = null,
        age, termRange, len = 0;
    if (page == 'home') {
        age = QuoteToolAPI.calculateAge();
    } else if (page == 'results') {
        age = QuoteToolAPI.calculateAgeResults();
    }
    if (age != 0 && age > 0) {
        if (QuoteToolAPI.quoteToolType != 'GAWLI') {
            if (QuoteToolAPI.selectedState == 'NY') {
                terms = QuoteToolAPI.termLength_NY;
            } else if (QuoteToolAPI.selectedState == 'WA') {
                terms = QuoteToolAPI.termLength_WA;
            } else {
                terms = QuoteToolAPI.termLength;
            }
            $(id).children().remove();
            $(id).append("<option value=''>Term Length</option>");
            for (var key in terms) {
                if (age < key && age > 17) {
                    //console.log('if ',key);
                    termRange = terms[key]
                    break;
                }
                //console.log('loop');
            }
            len = termRange.length;
            for (var i = 0; i < len; i++) {
                $(id).append("<option value=" + termRange[i] + ">" + termRange[i] + " Years</option>");
            }
        }
    }
}

QuoteToolAPI.goOnBlur = function() {
    /* for LI quote */
    if (($("#insurance-type").val() != "") && ($("#state1-mmquote").val() != "")) {
        $('.quoteTop select').removeAttr('disabled');
    }
    if (QuoteToolAPI.selectedInsurance != 'term') {
        $(".quoteBottom,.error_age_coverage,.error_state_coverage").hide();
        $("#month-mmquote,#day-mmquote,#year-mmquote,#gender-mmquote,#term-mmquote,#tobacco-mmquote,#health-mmquote").val("");
        $(".rep_cta_check").removeAttr("checked");
        $(".online_cta_check").prop("checked", true);

        $(".rep_cta_check").siblings("svg").first().hide();
        $(".rep_cta_check").siblings("svg:not(\":first-of-type\")").show();
        $(".online_cta_check").siblings("svg").hide();
        $(".online_cta_check").siblings("svg").first().show();
    }
}

QuoteToolAPI.formatQuotePremium = function(premium) {
    //if(premium != Math.round(premium)){
    var dec = parseFloat(Math.round(premium * 100) / 100).toFixed(2);
    return dec;
    /*} else{
     return premium;
     }*/
}

$("#edit-coverage-mmquote").change(function() {
    var val = $(this).val();
    if (val > 750000) {
        $(".online_cta_check").removeAttr("checked");
        $(".rep_cta_check").prop("checked", true);
        $(".online_cta_check").siblings("svg").first().hide();
        $(".online_cta_check").siblings("svg:not(\":first-of-type\")").show();
        $(".rep_cta_check").siblings("svg").hide();
        $(".rep_cta_check").siblings("svg").first().show();
    }
});

$("#insurance-type").on("change",function(){
    $('#state1-mmquote').removeAttr("disabled");

});
QuoteToolAPI.loadEventListenersForResults = function() {
    $("#edit-month-mmquote").on("change", function () {
        QuoteToolAPI.populateDaysDropDown("#edit-");
    });
    $("#edit-year-mmquote").on("change", function () {
        QuoteToolAPI.populateDaysDropDown("#edit-");
    });
    $("#edit-coverage-mmquote").change(function(){
        var val = $(this).val();
        if(QuoteToolAPI.quoteToolType != 'GAWLI')
        {
            if(parseInt(val) < 50001 && (QuoteToolAPI.calculateAgeResults() == 0 || (QuoteToolAPI.calculateAgeResults() > 17 && QuoteToolAPI.calculateAgeResults() < 71)) && QuoteToolAPI.sitStates.indexOf($("#edit-state1-mmquote").val()) != -1){
                $(".term_length,.tobacco_nicotine_users,.your_health,.apply_option,.apply_type").addClass('hidden');
                $("#edit-term-mmquote,#edit-tobacco-mmquote,#edit-health-mmquote").removeAttr('data-validation').removeClass('errorField');
                QuoteToolAPI.quoteToolType = 'SIT';
                //less margin
            }
            else{
                $(".term_length,.tobacco_nicotine_users,.your_health,.apply_option,.apply_type").removeClass('hidden');
                $("#edit-term-mmquote,#edit-tobacco-mmquote,#edit-health-mmquote").attr('data-validation',true);
                QuoteToolAPI.verifyMLTorGLT();
            }
        }
    });
    $("input[name='applyType']").change(function(){
        if($(this).val() ==0)
        {
            QuoteToolAPI.quoteToolType = 'MLT';
        }
        else
        {
            QuoteToolAPI.quoteToolType = 'GLT';
        }
    });
    $("#edit-state1-mmquote").change(function(){
        QuoteToolAPI.selectedState = $(this).val();
        if(QuoteToolAPI.quoteToolType != 'GAWLI')
        {
            /*if(QuoteToolAPI.sitStates.indexOf(QuoteToolAPI.selectedState) != -1)
             {
             if(QuoteToolAPI.calculateAgeResults() < 71 && $("#edit-coverage-mmquote").val()<50001)
             {
             $(".term_length,.tobacco_nicotine_users,.your_health,.apply_option,.apply_type").addClass('hidden');
             $("#edit-term-mmquote,#edit-tobacco-mmquote,#edit-health-mmquote").removeAttr('data-validation');
             QuoteToolAPI.quoteToolType = 'SIT';
             }
             else
             {
             QuoteToolAPI.verifyMLTorGLT();
             }
             $(".error_state_coverage").hide();
             }
             else if
             {
             $(".error_state_coverage").show();
             }*/
            if(QuoteToolAPI.quoteToolType == 'SIT')
            {
                if(QuoteToolAPI.sitStates.indexOf(QuoteToolAPI.selectedState) == -1)
                {
                    //$(".term_length,.tobacco_nicotine_users,.your_health,.apply_option,.apply_type").addClass('hidden');
                    //$("#edit-term-mmquote,#edit-tobacco-mmquote,#edit-health-mmquote").removeAttr('data-validation');
                    QuoteToolAPI.verifyMLTorGLT();
                }
            }
            else
            {

            }
        }
        if(QuoteToolAPI.quoteToolStarted)
        {
            $(".quote_tool_form,.error_age_coverage").hide();
            $(".error_state_coverage,#ctaHeaderQuoteSubmit").show();
            $(".dob_cta_quote").removeClass('visible-lg');
            $(".icon_scroll_bar").css("margin-top", "235px");
        }
        if(QuoteToolAPI.quoteToolType != 'GAWLI')
        {
            QuoteToolAPI.updateCoverageAmount("#edit-coverage-mmquote");
        }
        else
        {
            var d = new Date();
            d = d.getFullYear();
            var r = QuoteToolAPI.gawliAgeCriteria[$("#edit-state1-mmquote").val()];
            if(r != 'undefined')
            {
                if(typeof (r) == "object")
                {
                    QuoteToolAPI.populateYearDropDown(d-r[1],18,"#edit-year-mmquote");
                }
                else
                {
                    QuoteToolAPI.populateYearDropDown(d-80,18,"#edit-year-mmquote");
                }
            }
        }
    });
}

QuoteToolAPI.splitParams = function(){
    if($(".js-resultsUS").length != 0) {
        var paramslist = window.location.href.split("?")[1], online, editFields;
        var qvalue = "";
        paramslist = paramslist.split("&");
        // PROD ISsue fixes code apply.

        // PROD Issue fixes code ends
        for (j = 0; j < paramslist.length; j++) {
            var tempKey = paramslist[j].split("=")[0]
            var tempValue = paramslist[j].split("=")[1]
            //alert("tempKey"+tempKey);
            //alert("tempValue"+tempValue);
            if ("ol".match(tempKey)) {
                online = QuoteToolAPI.base64Decode(tempValue);
                //alert(online)
            } else if ("fv".match(tempKey)) {
                editFields = QuoteToolAPI.base64Decode(tempValue);
                //alert(editFields)
            } else if ("q".match(tempKey)) {
                qvalue = QuoteToolAPI.base64Decode(tempValue);
                //alert(qvalue)
            }
        }
        console.log("online" + online);
        console.log("editFields" + editFields);
        console.log("qvalue" + qvalue);
        //online = QuoteToolAPI.base64Decode(paramslist[0].split("=")[1]);
        //editFields = QuoteToolAPI.base64Decode(paramslist[1].split("=")[1]);
        if ((qvalue != null && typeof(qvalue) != undefined )) {
            $("#QuoteValue").html(qvalue.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"));
            $("#premium").val(qvalue);
        }
        if (online == "y") {
            $(".online_list,.online_form_title,#resultsBuyNow").removeClass('hidden');
        }
        else {
            $(".online_na_list,.online_na_form_title,#resultsSubmit").removeClass('hidden');
        }
        QuoteToolAPI.prefillEditQuoteFields(editFields);
    }
}

QuoteToolAPI.base64Decode = function(g) {
    g = g.replace(/[^a-z0-9\+\/=]/ig, "");
    if (typeof(atob) == "function") {
        return atob(g)
    }
    var h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var m, l, k;
    var d, c, b, a;
    var o = new Array();
    var e = 0;
    while ((g.length % 4) != 0) {
        g += "="
    }
    for (var f = 0; f < g.length; f += 4) {
        d = h.indexOf(g.charAt(f));
        c = h.indexOf(g.charAt(f + 1));
        b = h.indexOf(g.charAt(f + 2));
        a = h.indexOf(g.charAt(f + 3));
        m = (d << 2) | (c >> 4);
        l = ((c & 15) << 4) | (b >> 2);
        k = ((b & 3) << 6) | a;
        o[e++] = String.fromCharCode(m);
        if (b != 64) {
            o[e++] = String.fromCharCode(l)
        }
        if (a != 64) {
            o[e++] = String.fromCharCode(k)
        }
    }
    return o.join("")
}

QuoteToolAPI.prefillEditQuoteFields  = function(preFillValues){
    var fieldMapping = {
        s : "edit-state1-mmquote",
        d : "edit-day-mmquote",
        m : "edit-month-mmquote",
        y : "edit-year-mmquote",
        g : "edit-gender-mmquote",
        c : "edit-coverage-mmquote",
        t : "edit-term-mmquote",
        n :	"edit-tobacco-mmquote",
        h : "edit-health-mmquote"
    }
    var hiddenFieldMapping = {
        g : "gender",
        h : "healthClass",
        t : "term",
        c : "coverage",
        n : "tobacco",
        s : "state"
    }
    preFillValues = preFillValues.split(",");
    var len = preFillValues.length;
    for(var i=0;i<len;i++)	{
        var id = "#" + fieldMapping[preFillValues[i].split("=")[0]];
        var hiddenID = "#" + hiddenFieldMapping[preFillValues[i].split("=")[0]];
        var prefillValue = preFillValues[i].split("=")[1];
        $(id).val(prefillValue);
        $(hiddenID).val(prefillValue);
    }
    $("#dob").val($("#edit-month-mmquote").val()+"-"+$("#edit-day-mmquote").val()+"-"+$("#edit-year-mmquote").val());
    $("#CoverageAmt").html("$"+preFillValues[5].split("=")[1].replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"));
    $("#smoker").val($("#tobacco").val());
    QuoteToolAPI.quoteToolType = $("#recalculateQuote").attr('data-flow');
    if(QuoteToolAPI.quoteToolType != "GAWLI" && QuoteToolAPI.quoteToolType != 'SIT')
    {
        var val = $("#edit-term-mmquote").val();
        QuoteToolAPI.updateTermLength("#edit-term-mmquote","results");
        $("#edit-term-mmquote").val(val);
        $("#TermLengthValue").html(val);
    }
    QuoteToolAPI.selectedState = $("#edit-state1-mmquote").val();
    var val = $("#edit-coverage-mmquote").val();
    QuoteToolAPI.updateCoverageAmount("#edit-coverage-mmquote");
    $("#edit-coverage-mmquote").val(val);
}

QuoteToolAPI.calculateAgeResults = function(){
    var l = 0;
    if ((document.getElementById("edit-month-mmquote").value != "") && (document.getElementById("edit-day-mmquote").value != "") && (document.getElementById("edit-year-mmquote").value != "")) {
        var b = parseInt(document.getElementById("edit-month-mmquote").value);
        var k = parseInt(document.getElementById("edit-day-mmquote").value);
        var m = parseInt(document.getElementById("edit-year-mmquote").value);
        var g = new Date();
        var e = g.getFullYear();
        var h = g.getMonth() + 1;
        var f = g.getDate();
        var c = 0;
        var a = 0;
        if (e > m) {
            l = e - m;
            c = e - m;
        }
        if (h < b) {
            l = l - 1;
            c = c - 1;
            a = 12 - (b - h);
            if (k > f) {
                a = a - 1;
            }
        } else {
            if (h == b) {
                if (f < k) {
                    l = l - 1;
                    c = c - 1;
                    a = 12 - (b - h);
                }
            } else {
                if (h > b) {
                    if (f >= k) {
                        a = h - b;
                    } else {
                        a = (h - b) - 1;
                    }
                }
            }
        }
        if ((QuoteToolAPI.quoteToolType == 'GLT' || QuoteToolAPI.quoteToolType == 'MLT') && a>= 6) {l = l + 1}
    } else {}
    return l;
}

QuoteToolAPI.recalculateQuote = function(flow){
    if(QuoteToolAPI.quoteToolType == "GAWLI")
    {
        var age = QuoteToolAPI.calculateAgeResults();
        var range = QuoteToolAPI.gawliAgeCriteria[QuoteToolAPI.selectedState];
        if(QuoteToolAPI.gawliStates.indexOf(QuoteToolAPI.selectedState) == -1){
            if($(".dob_label").is(':visible'))
            {
                $(".gawli_error_state").insertAfter(".select_state");
            }
            else{
                $(".gawli_error_state").insertAfter(".dob_input");
            }
            $(".error_state_coverage").show();
        }
        else if(typeof(range) == "object" && (age < range[0] || age > range[1]))
        {
            $(".error_age_coverage").show();
        }
        else if(age < 50 || age > 80){
            $(".error_age_coverage").show();
        }
        else if(!QuoteToolAPI.gawliAgeError){
            $(".error_state_coverage,.error_age_coverage").hide();
            QuoteToolAPI.getQuotePremiumGAWLIResults();
        }
    }
    else if(QuoteToolAPI.quoteToolType == "SIT")
    {
        if(QuoteToolAPI.sitStates.indexOf(QuoteToolAPI.selectedState) == -1){
            if($(".dob_label").is(':visible'))
            {
                $(".gawli_error_state").insertAfter(".select_state");
            }
            else{
                $(".gawli_error_state").insertAfter(".dob_input");
            }
            $(".error_state_coverage").show();
        }
        else{
            QuoteToolAPI.getQuotePremiumSITResults();
        }
    }
    else if(QuoteToolAPI.quoteToolType == "MLT")
    {
        if(QuoteToolAPI.mltApprovedStates.indexOf(QuoteToolAPI.selectedState) == -1){
            if($(".dob_label").is(':visible'))
            {
                $(".gawli_error_state").insertAfter(".select_state");
            }
            else{
                $(".gawli_error_state").insertAfter(".dob_input");
            }
            $(".error_state_coverage").show();
        }
        else{
            QuoteToolAPI.getQuotePremiumMLTResults();
        }
    }
    else if(QuoteToolAPI.quoteToolType == "GLT")
    {
        QuoteToolAPI.getQuotePremiumGLTResults();
    }
}

QuoteToolAPI.getQuotePremiumGAWLIResults = function(){
    var flag = null;
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    var todaydate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + hours + ":" + minutes + ":" + seconds;
    var dob = $("#edit-month-mmquote").val()+"-"+$("#edit-day-mmquote").val()+"-"+$("#edit-year-mmquote").val();
    //console.log(typeof dob);
    var reqObjParam = {"transaction":{"metaData":{},"transactionType":"diagnosticTool","entities":{"user":{"personalInfo":{"firstName":"","middleName":"",	"lastName":"","email":"","street":"","city":"","zip":"","stateDesc": $("#edit-state1-mmquote").val(),"primaryPhone":"","alternatePhone":""},"inputFields":{"gender":$("#edit-gender-mmquote").val(),"dateOfBirth":$("#edit-month-mmquote").val()+"-"+$("#edit-day-mmquote").val()+"-"+$("#edit-year-mmquote").val(),"state":$("#edit-state1-mmquote").val(),"faceAmount":$("#edit-coverage-mmquote").val(),"productType":"GIWL","termLength":"10","age":QuoteToolAPI.calculateAgeResults(),"health":"Healthy","replacement":"No","healthClass":"Standard","tobacco":"No"},"agentId":"","agentName":"","appSrc":"ML.com","campaignCode":"","channelType":"BroadMarket","cRMID":"","submittedDateTime":todaydate}}}};
    reqObjParam =JSON.stringify(reqObjParam);

    $.ajax({
        //url: "/wps/qadiagnosticToolProxy/sales/getProdRcmdAndQuoteForJSONInput?CN=USA",
        url: "/wps/diagnosticToolProxy/sales/getProdRcmdAndQuoteForJSONInput?CN=USA",
        type: 'POST',
        dataType:'json',
        data: reqObjParam,
        contentType: "application/json",
        success: function(e) {
            console.log('success ',e);
            QuoteToolAPI.redirectToResultsPageInResults(QuoteToolAPI.formatQuotePremium(e["GIWLResp"]["premium"]));
        },
        error: function(e) {
            console.log('error ',e);//	handleServiceError()
        },
        timeout:30000
    });
}

QuoteToolAPI.getQuotePremiumSITResults = function(){
    var flag = null;
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    var todaydate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + hours + ":" + minutes + ":" + seconds;
    var dob = $("#edit-month-mmquote").val()+"-"+$("#edit-day-mmquote").val()+"-"+$("#edit-year-mmquote").val();
    var reqObjParam = {"transaction":{"metaData":{},"transactionType":"diagnosticTool","entities":{"user":{"personalInfo":{"firstName":"","middleName":"",	"lastName":"","email":"","street":"","city":"","zip":"","stateDesc": $("#edit-state1-mmquote").val(),"primaryPhone":"","alternatePhone":""},"inputFields":{"gender":$("#edit-gender-mmquote").val(),"dateOfBirth":$("#edit-month-mmquote").val()+"-"+$("#edit-day-mmquote").val()+"-"+$("#edit-year-mmquote").val(),"state":$("#edit-state1-mmquote").val(),"faceAmount":$("#edit-coverage-mmquote").val(),"productType":"SIT","termLength":"10","age":QuoteToolAPI.calculateAgeResults(),"health":"Healthy","replacement":"No","healthClass":"Standard","tobacco":"No"},"agentId":"","agentName":"","appSrc":"ML.com","campaignCode":"","channelType":"BroadMarket","cRMID":"","submittedDateTime":todaydate}}}};
    reqObjParam =JSON.stringify(reqObjParam);
    $.ajax({
        //url: "/wps/qadiagnosticToolProxy/sales/getProdRcmdAndQuoteForJSONInput?CN=USA",
        url: "/wps/diagnosticToolProxy/sales/getProdRcmdAndQuoteForJSONInput?CN=USA",
        type: 'POST',
        dataType:'json',
        data: reqObjParam,
        contentType: "application/json",
        success: function(e) {
            console.log('success ',e);
            QuoteToolAPI.redirectToResultsPageInResults(QuoteToolAPI.formatQuotePremium(e['SITResp']['WithoutRider']['monthlypremium'].split(",")[1]));
        },
        error: function(e) {
            console.log('error ',e);
        },
        timeout:30000
    });
}

QuoteToolAPI.getQuotePremiumMLTResults = function(){
    var  jsonData={"term":$("#edit-term-mmquote").val(),"age":QuoteToolAPI.calculateAgeResults(),"gender":$("#edit-gender-mmquote").val(),"health":$("#edit-health-mmquote").val(),"tobacco":$("#edit-tobacco-mmquote").val(),
        "coverage":$("#edit-coverage-mmquote").val(),
        "state":$("#edit-state1-mmquote").val(),
        "lstPnPParameters":"state,DOB,coverage,term,tobacco,health,gender,age,lStatus",
        "lStatus":"Q",
        "rating":0,
        "mcid":""
    };
    console.log(jsonData);
   /* $.ajax({
        url: "../../wps/proxy/MCPremiumQuoteWS/MCCDTPremiumQuote",
        //url: window.location.origin+"/wps/proxy/MCPremiumQuoteWS/MCCDTPremiumQuote",
        type: 'GET',
        contentType:"json",
        data: jsonData,
        success: function(e) {
            console.log('success ',e);
            QuoteToolAPI.redirectToResultsPageInResults(QuoteToolAPI.formatQuotePremium(JSON.parse(e.substring(e.indexOf("{"),e.indexOf("}")+1))["basepremium"]));
        },
        error: function(e) {
            console.log('error ',e);
        },
        timeout:30000
    });*/
    $.ajax({url: "/wps/proxy/MCPremiumQuoteWS/MCCDTPremiumQuote ",
        type: "GET",
        contentType: "json",
        data: a,
        success: function(a) {console.log("success ", a), QuoteToolAPI.redirectToResultsPageInResults(QuoteToolAPI.formatQuotePremium(JSON.parse(a.substring(a.indexOf("{"), a.indexOf("}") + 1)).basepremium))},
        error: function(a) {console.log("error ", a)},
        timeout: 3e4
    });
}

QuoteToolAPI.getQuotePremiumGLTResults = function(){
    var genderIs = "";
    var healthIs = $("#edit-health-mmquote").val();
    if ($("#edit-state1-mmquote").val() == "MT"){genderIs = "U";if(healthIs == "E"){healthIs = "VG"}}
    else {genderIs = $("#edit-gender-mmquote").val()};
    var  jsonData={"term":$("#edit-term-mmquote").val(),"age":QuoteToolAPI.calculateAgeResults(),"gender":genderIs,"health":healthIs,"tobacco":$("#edit-tobacco-mmquote").val(),
        "coverage":$("#edit-coverage-mmquote").val(),
        "state":$("#edit-state1-mmquote").val(),
        "lstPnPParameters":"state,DOB,coverage,term,tobacco,health,gender,age,lStatus",
        "lStatus":"Q",
        "rating":0,
        "mcid":""
    };
   /* $.ajax({
        url: "../../wps/proxy/MCPremiumQuoteWS/MCPremiumQuote",
        //url: window.location.origin+"/wps/proxy/MCPremiumQuoteWS/MCPremiumQuote",
        type: 'GET',
        contentType: "json",
        data: jsonData,
        success: function(e) {
            console.log('success ',e);
            QuoteToolAPI.redirectToResultsPageInResults(QuoteToolAPI.formatQuotePremium(JSON.parse(e.substring(e.indexOf("{"),e.indexOf("}")+1))["premium"]));
        },
        error: function(e) {
            console.log('error ',e);
        },
        timeout:30000
    });*/
    $.ajax({
        url: "/wps/proxy/MCPremiumQuoteWS/MCPremiumQuote",
        type: "GET",
        contentType:"json",
        data: c,
        success: function(a) {console.log("success ", a), QuoteToolAPI.redirectToResultsPageInResults(QuoteToolAPI.formatQuotePremium(JSON.parse(a.substring(a.indexOf("{"), a.indexOf("}") + 1)).premium))},
        error: function(a) {console.log("error ", a)},
        timeout: 3e4
    });
}

QuoteToolAPI.redirectToResultsPageInResults = function(quotePremium) {
    var urlParamString = '';
    urlParamString += 's=' + $("#edit-state1-mmquote").val() + ',';
    urlParamString += 'd=' + $("#edit-day-mmquote").val() + ',';
    urlParamString += 'm=' + $("#edit-month-mmquote").val() + ',';
    urlParamString += 'y=' + $("#edit-year-mmquote").val() + ',';
    urlParamString += 'g=' + $("#edit-gender-mmquote").val() + ',';
    urlParamString += 'c=' + $("#edit-coverage-mmquote").val();
    if(QuoteToolAPI.quoteToolType == 'MLT' || QuoteToolAPI.quoteToolType == 'GLT')
    {
        urlParamString += ',t=' + $("#edit-term-mmquote").val();
        urlParamString += ',n=' + $("#edit-tobacco-mmquote").val() + ',';
        urlParamString += 'h=' + $("#edit-health-mmquote").val();
    }
    urlParamString = QuoteToolAPI.base64Encode(urlParamString);

    var x = window.location.pathname;
    var urlBase = x.substring(0, x.lastIndexOf('/')+1);
    var onlineAvailable = "n";
    /*if(QuoteToolAPI.quoteToolType == 'GAWLI'){
        if(QuoteToolAPI.gawliOnlineAvailableStates.indexOf(QuoteToolAPI.selectedState) != -1){
            onlineAvailable = "y";
        }
        //window.location.href = urlBase + "Other\\GAWLI Results\\guaranteed-acceptance.html?"+"ol="+QuoteToolAPI.base64Encode(onlineAvailable)+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium);
        window.location.href = urlBase + "guaranteed-acceptance.html?ol="+QuoteToolAPI.base64Encode(onlineAvailable)+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium);
    }
    else if(QuoteToolAPI.quoteToolType == 'SIT'){
        if(QuoteToolAPI.sitOnlineAvailableStates.indexOf(QuoteToolAPI.selectedState) != -1){
            onlineAvailable = "y";
        }
        window.location.href = urlBase + "simplified-issue.html?ol="+QuoteToolAPI.base64Encode(onlineAvailable)+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium);
    }
    else if(QuoteToolAPI.quoteToolType == 'MLT'){
        if(QuoteToolAPI.selectedState != 'NY'){
            onlineAvailable = "y";
        }
        window.location.href = urlBase + "term-life.html?ol="+QuoteToolAPI.base64Encode(onlineAvailable)+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium);
    }
    else if(QuoteToolAPI.quoteToolType == 'GLT'){
        window.location.href = urlBase + "guaranteed-level.html?ol="+QuoteToolAPI.base64Encode('')+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium);
    }*/
    if(QuoteToolAPI.quoteToolType == 'GAWLI'){
        if(QuoteToolAPI.gawliOnlineAvailableStates.indexOf(QuoteToolAPI.selectedState) != -1){
            onlineAvailable = "y";
        }
        //window.location.href = urlBase + "Other\\GAWLI Results\\guaranteed-acceptance.html?"+"ol="+QuoteToolAPI.base64Encode(onlineAvailable)+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium);
        window.location.href = urlBase + localStorage.getItem("GAWLIUrl") + "?ol=" + QuoteToolAPI.base64Encode(onlineAvailable)+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium);
    }
    else if(QuoteToolAPI.quoteToolType == 'SIT'){
        if(QuoteToolAPI.sitOnlineAvailableStates.indexOf(QuoteToolAPI.selectedState) != -1){
            onlineAvailable = "y";
        }
        window.location.href = urlBase + localStorage.getItem("SITUrl") + "?ol=" + QuoteToolAPI.base64Encode(onlineAvailable)+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium);
    }
    else if(QuoteToolAPI.quoteToolType == 'MLT'){
        if(QuoteToolAPI.selectedState != 'NY'){
            onlineAvailable = "y";
        }
        window.location.href = urlBase + localStorage.getItem("MLTUrl") + "?ol=" + QuoteToolAPI.base64Encode(onlineAvailable)+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium);
    }
    else if(QuoteToolAPI.quoteToolType == 'GLT'){
        window.location.href = urlBase + localStorage.getItem("GLTUrl") + "?ol=" + QuoteToolAPI.base64Encode('')+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium);
    }
}

$(document).ready(function(){
    var d = new Date();
    d = d.getFullYear();
    if($("#recalculateQuote[data-flow='GAWLI']").length == 0){
        QuoteToolAPI.populateYearDropDown(d-75,18,"#edit-year-mmquote");
    }
    else{
        QuoteToolAPI.populateYearDropDown(d-80,18,"#edit-year-mmquote");
    }
    QuoteToolAPI.splitParams();
    QuoteToolAPI.quoteToolType = $("#recalculateQuote").attr('data-flow');
    QuoteToolAPI.loadEventListenersForResults();
});

$("#edit-month-mmquote,#edit-day-mmquote,#edit-year-mmquote").change(function(){
    var age = QuoteToolAPI.calculateAgeResults();
    if(QuoteToolAPI.quoteToolType == 'GAWLI' && age != 0){
        var range = QuoteToolAPI.gawliAgeCriteria[$("#edit-state1-mmquote").val()];
        if(typeof(range) == "object" && (age < range[0] || age > range[1]))
        {
            $(".error_age_coverage").show();
            QuoteToolAPI.gawliAgeError = true;
        }
        else if(age < 50 || age > 80){
            $(".error_age_coverage").show();
            QuoteToolAPI.gawliAgeError = true;
        }
        else
        {
            $(".error_age_coverage").hide();
            QuoteToolAPI.gawliAgeError = false;
        }
    }
    else {
        if(age > 70 && age < 76){
            //console.log('71-75');
            $(".term_length,.tobacco_nicotine_users,.your_health,.apply_option,.apply_type").removeClass('hidden');
            $("#edit-term-mmquote,#edit-tobacco-mmquote,#edit-health-mmquote").attr('data-validation',true);
            QuoteToolAPI.sitCompatibleAge = false;
            QuoteToolAPI.verifyMLTorGLT();
        }
        else if(age > 17 && age < 71){
            //console.log('18-70');
            /*$(".term_length,.tobacco_nicotine_users,.your_health,.apply_option,.apply_type").addClass('hidden');
             $("#edit-term-mmquote,#edit-tobacco-mmquote,#edit-health-mmquote").removeAttr('data-validation');
             QuoteToolAPI.sitCompatibleAge = true;
             QuoteToolAPI.quoteToolType = 'SIT';*/
            if(QuoteToolAPI.sitStates.indexOf($("#edit-state1-mmquote").val()) != -1)
            {
                /* code added for recalculating by Anusha*/
                if($("#edit-coverage-mmquote").val() > 99999)
                {
                    $(".quoteBottom").show();
                    $("#edit-term-mmquote,#edit-tobacco-mmquote,#edit-health-mmquote").attr('data-validation',true);
                    QuoteToolAPI.sitCompatibleAge = false;
                    QuoteToolAPI.updateTermLength("#edit-term-mmquote","results");
                    QuoteToolAPI.verifyMLTorGLT();
                }
                else
                {
                    $(".quoteBottom").hide();
                    $(".term_length,.tobacco_nicotine_users,.your_health,.apply_option,.apply_type").addClass('hidden');
                    $("#edit-term-mmquote,#edit-tobacco-mmquote,#edit-health-mmquote").removeAttr('data-validation');
                    QuoteToolAPI.sitCompatibleAge = true;
                    QuoteToolAPI.quoteToolType = 'SIT';
                }
                /* code added for recalculating by Anusha ends here*/
            }
        }
        QuoteToolAPI.updateCoverageAmount("#edit-coverage-mmquote");
    }
    QuoteToolAPI.updateTermLength("#edit-term-mmquote","results");
});

$("#recalculateQuote").click(function(e){
    e.preventDefault();
    var flag = false;
    $("#recalculateQuote").parents("form").find("select[data-validation='true']").each(function(){
        if($(this).val() == null || $(this).val() == '')
        {
            flag = true;
            $(this).addClass("errorField");
        }
        else
        {
            $(this).removeClass("errorField");
        }
    });
    if(!flag)
        QuoteToolAPI.recalculateQuote();
});
$(".rate-overlay-trigger").on("click", function () {
    $('.' + $(this).attr('data-target')).show();
    $("html, body").animate({scrollTop: 0}, 0);
    resizeRateTable();
});

// Closes View All Rates Overlay
$(".view-close").on("click", function () {
    $(this).closest(".rates-overlay").hide();
});

// Change  View All Rates Overlay Active Table
$(".view-all-rates-overlay .view-nav li").on("click", function () {
    var element = $(this);
    var index = element.index();

    // change active nav
    $(this).siblings().removeClass("active");
    $(this).addClass("active");

    // change active table
    var parent = $(this).closest(".view-all-rates-overlay");
    parent.find(".view-content").children().removeClass("active");
    parent.find(".view-content").children().eq(index).addClass("active");
    resizeRateTable();
});
if($(".find-an-x-search__container").length > 0) {
  /**
   * @name MarkerWithLabel for V3
   * @version 1.1.9 [June 30, 2013]
   * @author Gary Little (inspired by code from Marc Ridey of Google).
   * @copyright Copyright 2012 Gary Little [gary at luxcentral.com]
   * @fileoverview MarkerWithLabel extends the Google Maps JavaScript API V3
   *  <code>google.maps.Marker</code> class.
   *  <p>
   *  MarkerWithLabel allows you to define markers with associated labels. As you would expect,
   *  if the marker is draggable, so too will be the label. In addition, a marker with a label
   *  responds to all mouse events in the same manner as a regular marker. It also fires mouse
   *  events and "property changed" events just as a regular marker would. Version 1.1 adds
   *  support for the raiseOnDrag feature introduced in API V3.3.
   *  <p>
   *  If you drag a marker by its label, you can cancel the drag and return the marker to its
   *  original position by pressing the <code>Esc</code> key. This doesn't work if you drag the marker
   *  itself because this feature is not (yet) supported in the <code>google.maps.Marker</code> class.
   */

  /*!
   * Copyright 2016 MetLife
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *       http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /*jslint browser:true */
  /*global document,google */

  /**
   * @param {Function} childCtor Child class.
   * @param {Function} parentCtor Parent class.
   */
  function inherits(childCtor, parentCtor) {
    /** @constructor */
    function tempCtor() {
    };
    tempCtor.prototype = parentCtor.prototype;
    childCtor.superClass_ = parentCtor.prototype;
    childCtor.prototype = new tempCtor();
    /** @override */
    childCtor.prototype.constructor = childCtor;
  }

  /**
   * This constructor creates a label and associates it with a marker.
   * It is for the private use of the MarkerWithLabel class.
   * @constructor
   * @param {Marker} marker The marker with which the label is to be associated.
   * @param {string} crossURL The URL of the cross image =.
   * @param {string} handCursor The URL of the hand cursor.
   * @private
   */
  function MarkerLabel_(marker, crossURL, handCursorURL) {
    this.marker_ = marker;
    this.handCursorURL_ = marker.handCursorURL;

    this.labelDiv_ = document.createElement("div");
    this.labelDiv_.style.cssText = "position: absolute; overflow: hidden;";

    // Set up the DIV for handling mouse events in the label. This DIV forms a transparent veil
    // in the "overlayMouseTarget" pane, a veil that covers just the label. This is done so that
    // events can be captured even if the label is in the shadow of a google.maps.InfoWindow.
    // Code is included here to ensure the veil is always exactly the same size as the label.
    this.eventDiv_ = document.createElement("div");
    this.eventDiv_.style.cssText = this.labelDiv_.style.cssText;

    // This is needed for proper behavior on MSIE:
    this.eventDiv_.setAttribute("onselectstart", "return false;");
    this.eventDiv_.setAttribute("ondragstart", "return false;");

    // Get the DIV for the "X" to be displayed when the marker is raised.
    this.crossDiv_ = MarkerLabel_.getSharedCross(crossURL);
  }

  inherits(MarkerLabel_, google.maps.OverlayView);

  /**
   * Returns the DIV for the cross used when dragging a marker when the
   * raiseOnDrag parameter set to true. One cross is shared with all markers.
   * @param {string} crossURL The URL of the cross image =.
   * @private
   */
  MarkerLabel_.getSharedCross = function (crossURL) {
    var div;
    if (typeof MarkerLabel_.getSharedCross.crossDiv === "undefined") {
      div = document.createElement("img");
      div.style.cssText = "position: absolute; z-index: 1000002; display: none;";
      // Hopefully Google never changes the standard "X" attributes:
      div.style.marginLeft = "-8px";
      div.style.marginTop = "-9px";
      div.src = crossURL;
      MarkerLabel_.getSharedCross.crossDiv = div;
    }
    return MarkerLabel_.getSharedCross.crossDiv;
  };

  /**
   * Adds the DIV representing the label to the DOM. This method is called
   * automatically when the marker's <code>setMap</code> method is called.
   * @private
   */
  MarkerLabel_.prototype.onAdd = function () {
    var me = this;
    var cMouseIsDown = false;
    var cDraggingLabel = false;
    var cSavedZIndex;
    var cLatOffset, cLngOffset;
    var cIgnoreClick;
    var cRaiseEnabled;
    var cStartPosition;
    var cStartCenter;
    // Constants:
    var cRaiseOffset = 20;
    var cDraggingCursor = "url(" + this.handCursorURL_ + ")";

    // Stops all processing of an event.
    //
    var cAbortEvent = function (e) {
      if (e.preventDefault) {
        e.preventDefault();
      }
      e.cancelBubble = true;
      if (e.stopPropagation) {
        e.stopPropagation();
      }
    };

    var cStopBounce = function () {
      me.marker_.setAnimation(null);
    };

    this.getPanes().overlayImage.appendChild(this.labelDiv_);
    this.getPanes().overlayMouseTarget.appendChild(this.eventDiv_);
    // One cross is shared with all markers, so only add it once:
    if (typeof MarkerLabel_.getSharedCross.processed === "undefined") {
      this.getPanes().overlayImage.appendChild(this.crossDiv_);
      MarkerLabel_.getSharedCross.processed = true;
    }

    this.listeners_ = [
      google.maps.event.addDomListener(this.eventDiv_, "mouseover", function (e) {
        if (me.marker_.getDraggable() || me.marker_.getClickable()) {
          this.style.cursor = "pointer";
          google.maps.event.trigger(me.marker_, "mouseover", e);
        }
      }),
      google.maps.event.addDomListener(this.eventDiv_, "mouseout", function (e) {
        if ((me.marker_.getDraggable() || me.marker_.getClickable()) && !cDraggingLabel) {
          this.style.cursor = me.marker_.getCursor();
          google.maps.event.trigger(me.marker_, "mouseout", e);
        }
      }),
      google.maps.event.addDomListener(this.eventDiv_, "mousedown", function (e) {
        cDraggingLabel = false;
        if (me.marker_.getDraggable()) {
          cMouseIsDown = true;
          this.style.cursor = cDraggingCursor;
        }
        if (me.marker_.getDraggable() || me.marker_.getClickable()) {
          google.maps.event.trigger(me.marker_, "mousedown", e);
          cAbortEvent(e); // Prevent map pan when starting a drag on a label
        }
      }),
      google.maps.event.addDomListener(document, "mouseup", function (mEvent) {
        var position;
        if (cMouseIsDown) {
          cMouseIsDown = false;
          me.eventDiv_.style.cursor = "pointer";
          google.maps.event.trigger(me.marker_, "mouseup", mEvent);
        }
        if (cDraggingLabel) {
          if (cRaiseEnabled) { // Lower the marker & label
            position = me.getProjection().fromLatLngToDivPixel(me.marker_.getPosition());
            position.y += cRaiseOffset;
            me.marker_.setPosition(me.getProjection().fromDivPixelToLatLng(position));
            // This is not the same bouncing style as when the marker portion is dragged,
            // but it will have to do:
            try { // Will fail if running Google Maps API earlier than V3.3
              me.marker_.setAnimation(google.maps.Animation.BOUNCE);
              setTimeout(cStopBounce, 1406);
            } catch (e) {
            }
          }
          me.crossDiv_.style.display = "none";
          me.marker_.setZIndex(cSavedZIndex);
          cIgnoreClick = true; // Set flag to ignore the click event reported after a label drag
          cDraggingLabel = false;
          mEvent.latLng = me.marker_.getPosition();
          google.maps.event.trigger(me.marker_, "dragend", mEvent);
        }
      }),
      google.maps.event.addListener(me.marker_.getMap(), "mousemove", function (mEvent) {
        var position;
        if (cMouseIsDown) {
          if (cDraggingLabel) {
            // Change the reported location from the mouse position to the marker position:
            mEvent.latLng = new google.maps.LatLng(mEvent.latLng.lat() - cLatOffset, mEvent.latLng.lng() - cLngOffset);
            position = me.getProjection().fromLatLngToDivPixel(mEvent.latLng);
            if (cRaiseEnabled) {
              me.crossDiv_.style.left = position.x + "px";
              me.crossDiv_.style.top = position.y + "px";
              me.crossDiv_.style.display = "";
              position.y -= cRaiseOffset;
            }
            me.marker_.setPosition(me.getProjection().fromDivPixelToLatLng(position));
            if (cRaiseEnabled) { // Don't raise the veil; this hack needed to make MSIE act properly
              me.eventDiv_.style.top = (position.y + cRaiseOffset) + "px";
            }
            google.maps.event.trigger(me.marker_, "drag", mEvent);
          } else {
            // Calculate offsets from the click point to the marker position:
            cLatOffset = mEvent.latLng.lat() - me.marker_.getPosition().lat();
            cLngOffset = mEvent.latLng.lng() - me.marker_.getPosition().lng();
            cSavedZIndex = me.marker_.getZIndex();
            cStartPosition = me.marker_.getPosition();
            cStartCenter = me.marker_.getMap().getCenter();
            cRaiseEnabled = me.marker_.get("raiseOnDrag");
            cDraggingLabel = true;
            me.marker_.setZIndex(1000000); // Moves the marker & label to the foreground during a drag
            mEvent.latLng = me.marker_.getPosition();
            google.maps.event.trigger(me.marker_, "dragstart", mEvent);
          }
        }
      }),
      google.maps.event.addDomListener(document, "keydown", function (e) {
        if (cDraggingLabel) {
          if (e.keyCode === 27) { // Esc key
            cRaiseEnabled = false;
            me.marker_.setPosition(cStartPosition);
            me.marker_.getMap().setCenter(cStartCenter);
            google.maps.event.trigger(document, "mouseup", e);
          }
        }
      }),
      google.maps.event.addDomListener(this.eventDiv_, "click", function (e) {
        if (me.marker_.getDraggable() || me.marker_.getClickable()) {
          if (cIgnoreClick) { // Ignore the click reported when a label drag ends
            cIgnoreClick = false;
          } else {
            google.maps.event.trigger(me.marker_, "click", e);
            cAbortEvent(e); // Prevent click from being passed on to map
          }
        }
      }),
      google.maps.event.addDomListener(this.eventDiv_, "dblclick", function (e) {
        if (me.marker_.getDraggable() || me.marker_.getClickable()) {
          google.maps.event.trigger(me.marker_, "dblclick", e);
          cAbortEvent(e); // Prevent map zoom when double-clicking on a label
        }
      }),
      google.maps.event.addListener(this.marker_, "dragstart", function (mEvent) {
        if (!cDraggingLabel) {
          cRaiseEnabled = this.get("raiseOnDrag");
        }
      }),
      google.maps.event.addListener(this.marker_, "drag", function (mEvent) {
        if (!cDraggingLabel) {
          if (cRaiseEnabled) {
            me.setPosition(cRaiseOffset);
            // During a drag, the marker's z-index is temporarily set to 1000000 to
            // ensure it appears above all other markers. Also set the label's z-index
            // to 1000000 (plus or minus 1 depending on whether the label is supposed
            // to be above or below the marker).
            me.labelDiv_.style.zIndex = 1000000 + (this.get("labelInBackground") ? -1 : +1);
          }
        }
      }),
      google.maps.event.addListener(this.marker_, "dragend", function (mEvent) {
        if (!cDraggingLabel) {
          if (cRaiseEnabled) {
            me.setPosition(0); // Also restores z-index of label
          }
        }
      }),
      google.maps.event.addListener(this.marker_, "position_changed", function () {
        me.setPosition();
      }),
      google.maps.event.addListener(this.marker_, "zindex_changed", function () {
        me.setZIndex();
      }),
      google.maps.event.addListener(this.marker_, "visible_changed", function () {
        me.setVisible();
      }),
      google.maps.event.addListener(this.marker_, "labelvisible_changed", function () {
        me.setVisible();
      }),
      google.maps.event.addListener(this.marker_, "title_changed", function () {
        me.setTitle();
      }),
      google.maps.event.addListener(this.marker_, "labelcontent_changed", function () {
        me.setContent();
      }),
      google.maps.event.addListener(this.marker_, "labelanchor_changed", function () {
        me.setAnchor();
      }),
      google.maps.event.addListener(this.marker_, "labelclass_changed", function () {
        me.setStyles();
      }),
      google.maps.event.addListener(this.marker_, "labelstyle_changed", function () {
        me.setStyles();
      })
    ];
  };

  /**
   * Removes the DIV for the label from the DOM. It also removes all event handlers.
   * This method is called automatically when the marker's <code>setMap(null)</code>
   * method is called.
   * @private
   */
  MarkerLabel_.prototype.onRemove = function () {
    var i;
    this.labelDiv_.parentNode.removeChild(this.labelDiv_);
    this.eventDiv_.parentNode.removeChild(this.eventDiv_);

    // Remove event listeners:
    for (i = 0; i < this.listeners_.length; i++) {
      google.maps.event.removeListener(this.listeners_[i]);
    }
  };

  /**
   * Draws the label on the map.
   * @private
   */
  MarkerLabel_.prototype.draw = function () {
    this.setContent();
    this.setTitle();
    this.setStyles();
  };

  /**
   * Sets the content of the label.
   * The content can be plain text or an HTML DOM node.
   * @private
   */
  MarkerLabel_.prototype.setContent = function () {
    var content = this.marker_.get("labelContent");
    if (typeof content.nodeType === "undefined") {
      this.labelDiv_.innerHTML = content;
      this.eventDiv_.innerHTML = this.labelDiv_.innerHTML;
    } else {
      this.labelDiv_.innerHTML = ""; // Remove current content
      this.labelDiv_.appendChild(content);
      content = content.cloneNode(true);
      this.eventDiv_.appendChild(content);
    }
  };

  /**
   * Sets the content of the tool tip for the label. It is
   * always set to be the same as for the marker itself.
   * @private
   */
  MarkerLabel_.prototype.setTitle = function () {
    this.eventDiv_.title = this.marker_.getTitle() || "";
  };

  /**
   * Sets the style of the label by setting the style sheet and applying
   * other specific styles requested.
   * @private
   */
  MarkerLabel_.prototype.setStyles = function () {
    var i, labelStyle;

    // Apply style values from the style sheet defined in the labelClass parameter:
    this.labelDiv_.className = this.marker_.get("labelClass");
    this.eventDiv_.className = this.labelDiv_.className;

    // Clear existing inline style values:
    this.labelDiv_.style.cssText = "";
    this.eventDiv_.style.cssText = "";
    // Apply style values defined in the labelStyle parameter:
    labelStyle = this.marker_.get("labelStyle");
    for (i in labelStyle) {
      if (labelStyle.hasOwnProperty(i)) {
        this.labelDiv_.style[i] = labelStyle[i];
        this.eventDiv_.style[i] = labelStyle[i];
      }
    }
    this.setMandatoryStyles();
  };

  /**
   * Sets the mandatory styles to the DIV representing the label as well as to the
   * associated event DIV. This includes setting the DIV position, z-index, and visibility.
   * @private
   */
  MarkerLabel_.prototype.setMandatoryStyles = function () {
    this.labelDiv_.style.position = "absolute";
    this.labelDiv_.style.overflow = "hidden";
    // Make sure the opacity setting causes the desired effect on MSIE:
    if (typeof this.labelDiv_.style.opacity !== "undefined" && this.labelDiv_.style.opacity !== "") {
      this.labelDiv_.style.MsFilter = "\"progid:DXImageTransform.Microsoft.Alpha(opacity=" + (this.labelDiv_.style.opacity * 100) + ")\"";
      this.labelDiv_.style.filter = "alpha(opacity=" + (this.labelDiv_.style.opacity * 100) + ")";
    }

    this.eventDiv_.style.position = this.labelDiv_.style.position;
    this.eventDiv_.style.overflow = this.labelDiv_.style.overflow;
    this.eventDiv_.style.opacity = 0.01; // Don't use 0; DIV won't be clickable on MSIE
    this.eventDiv_.style.MsFilter = "\"progid:DXImageTransform.Microsoft.Alpha(opacity=1)\"";
    this.eventDiv_.style.filter = "alpha(opacity=1)"; // For MSIE

    this.setAnchor();
    this.setPosition(); // This also updates z-index, if necessary.
    this.setVisible();
  };

  /**
   * Sets the anchor point of the label.
   * @private
   */
  MarkerLabel_.prototype.setAnchor = function () {
    var anchor = this.marker_.get("labelAnchor");
    this.labelDiv_.style.marginLeft = -anchor.x + "px";
    this.labelDiv_.style.marginTop = -anchor.y + "px";
    this.eventDiv_.style.marginLeft = -anchor.x + "px";
    this.eventDiv_.style.marginTop = -anchor.y + "px";
  };

  /**
   * Sets the position of the label. The z-index is also updated, if necessary.
   * @private
   */
  MarkerLabel_.prototype.setPosition = function (yOffset) {
    var position = this.getProjection().fromLatLngToDivPixel(this.marker_.getPosition());
    if (typeof yOffset === "undefined") {
      yOffset = 0;
    }
    this.labelDiv_.style.left = Math.round(position.x) + "px";
    this.labelDiv_.style.top = Math.round(position.y - yOffset) + "px";
    this.eventDiv_.style.left = this.labelDiv_.style.left;
    this.eventDiv_.style.top = this.labelDiv_.style.top;

    this.setZIndex();
  };

  /**
   * Sets the z-index of the label. If the marker's z-index property has not been defined, the z-index
   * of the label is set to the vertical coordinate of the label. This is in keeping with the default
   * stacking order for Google Maps: markers to the south are in front of markers to the north.
   * @private
   */
  MarkerLabel_.prototype.setZIndex = function () {
    var zAdjust = (this.marker_.get("labelInBackground") ? -1 : +1);
    if (typeof this.marker_.getZIndex() === "undefined") {
      this.labelDiv_.style.zIndex = parseInt(this.labelDiv_.style.top, 10) + zAdjust;
      this.eventDiv_.style.zIndex = this.labelDiv_.style.zIndex;
    } else {
      this.labelDiv_.style.zIndex = this.marker_.getZIndex() + zAdjust;
      this.eventDiv_.style.zIndex = this.labelDiv_.style.zIndex;
    }
  };

  /**
   * Sets the visibility of the label. The label is visible only if the marker itself is
   * visible (i.e., its visible property is true) and the labelVisible property is true.
   * @private
   */
  MarkerLabel_.prototype.setVisible = function () {
    if (this.marker_.get("labelVisible")) {
      this.labelDiv_.style.display = this.marker_.getVisible() ? "block" : "none";
    } else {
      this.labelDiv_.style.display = "none";
    }
    this.eventDiv_.style.display = this.labelDiv_.style.display;
  };

  /**
   * @name MarkerWithLabelOptions
   * @class This class represents the optional parameter passed to the {@link MarkerWithLabel} constructor.
   *  The properties available are the same as for <code>google.maps.Marker</code> with the addition
   *  of the properties listed below. To change any of these additional properties after the labeled
   *  marker has been created, call <code>google.maps.Marker.set(propertyName, propertyValue)</code>.
   *  <p>
   *  When any of these properties changes, a property changed event is fired. The names of these
   *  events are derived from the name of the property and are of the form <code>propertyname_changed</code>.
   *  For example, if the content of the label changes, a <code>labelcontent_changed</code> event
   *  is fired.
   *  <p>
   * @property {string|Node} [labelContent] The content of the label (plain text or an HTML DOM node).
   * @property {Point} [labelAnchor] By default, a label is drawn with its anchor point at (0,0) so
   *  that its top left corner is positioned at the anchor point of the associated marker. Use this
   *  property to change the anchor point of the label. For example, to center a 50px-wide label
   *  beneath a marker, specify a <code>labelAnchor</code> of <code>google.maps.Point(25, 0)</code>.
   *  (Note: x-values increase to the right and y-values increase to the top.)
   * @property {string} [labelClass] The name of the CSS class defining the styles for the label.
   *  Note that style values for <code>position</code>, <code>overflow</code>, <code>top</code>,
   *  <code>left</code>, <code>zIndex</code>, <code>display</code>, <code>marginLeft</code>, and
   *  <code>marginTop</code> are ignored; these styles are for internal use only.
   * @property {Object} [labelStyle] An object literal whose properties define specific CSS
   *  style values to be applied to the label. Style values defined here override those that may
   *  be defined in the <code>labelClass</code> style sheet. If this property is changed after the
   *  label has been created, all previously set styles (except those defined in the style sheet)
   *  are removed from the label before the new style values are applied.
   *  Note that style values for <code>position</code>, <code>overflow</code>, <code>top</code>,
   *  <code>left</code>, <code>zIndex</code>, <code>display</code>, <code>marginLeft</code>, and
   *  <code>marginTop</code> are ignored; these styles are for internal use only.
   * @property {boolean} [labelInBackground] A flag indicating whether a label that overlaps its
   *  associated marker should appear in the background (i.e., in a plane below the marker).
   *  The default is <code>false</code>, which causes the label to appear in the foreground.
   * @property {boolean} [labelVisible] A flag indicating whether the label is to be visible.
   *  The default is <code>true</code>. Note that even if <code>labelVisible</code> is
   *  <code>true</code>, the label will <i>not</i> be visible unless the associated marker is also
   *  visible (i.e., unless the marker's <code>visible</code> property is <code>true</code>).
   * @property {boolean} [raiseOnDrag] A flag indicating whether the label and marker are to be
   *  raised when the marker is dragged. The default is <code>true</code>. If a draggable marker is
   *  being created and a version of Google Maps API earlier than V3.3 is being used, this property
   *  must be set to <code>false</code>.
   * @property {boolean} [optimized] A flag indicating whether rendering is to be optimized for the
   *  marker. <b>Important: The optimized rendering technique is not supported by MarkerWithLabel,
   *  so the value of this parameter is always forced to <code>false</code>.
   * @property {string} [crossImage="http://maps.gstatic.com/intl/en_us/mapfiles/drag_cross_67_16.png"]
   *  The URL of the cross image to be displayed while dragging a marker.
   * @property {string} [handCursor="http://maps.gstatic.com/intl/en_us/mapfiles/closedhand_8_8.cur"]
   *  The URL of the cursor to be displayed while dragging a marker.
   */
  /**
   * Creates a MarkerWithLabel with the options specified in {@link MarkerWithLabelOptions}.
   * @constructor
   * @param {MarkerWithLabelOptions} [opt_options] The optional parameters.
   */
  function MarkerWithLabel(opt_options) {
    opt_options = opt_options || {};
    opt_options.labelContent = opt_options.labelContent || "";
    opt_options.labelAnchor = opt_options.labelAnchor || new google.maps.Point(0, 0);
    opt_options.labelClass = opt_options.labelClass || "markerLabels";
    opt_options.labelStyle = opt_options.labelStyle || {};
    opt_options.labelInBackground = opt_options.labelInBackground || false;
    if (typeof opt_options.labelVisible === "undefined") {
      opt_options.labelVisible = true;
    }
    if (typeof opt_options.raiseOnDrag === "undefined") {
      opt_options.raiseOnDrag = true;
    }
    if (typeof opt_options.clickable === "undefined") {
      opt_options.clickable = true;
    }
    if (typeof opt_options.draggable === "undefined") {
      opt_options.draggable = false;
    }
    if (typeof opt_options.optimized === "undefined") {
      opt_options.optimized = false;
    }
    opt_options.crossImage = opt_options.crossImage || "http" + (document.location.protocol === "https:" ? "s" : "") + "://maps.gstatic.com/intl/en_us/mapfiles/drag_cross_67_16.png";
    opt_options.handCursor = opt_options.handCursor || "http" + (document.location.protocol === "https:" ? "s" : "") + "://maps.gstatic.com/intl/en_us/mapfiles/closedhand_8_8.cur";
    opt_options.optimized = false; // Optimized rendering is not supported

    this.label = new MarkerLabel_(this, opt_options.crossImage, opt_options.handCursor); // Bind the label to the marker

    // Call the parent constructor. It calls Marker.setValues to initialize, so all
    // the new parameters are conveniently saved and can be accessed with get/set.
    // Marker.set triggers a property changed event (called "propertyname_changed")
    // that the marker label listens for in order to react to state changes.
    google.maps.Marker.apply(this, arguments);
  }

  inherits(MarkerWithLabel, google.maps.Marker);

  /**
   * Overrides the standard Marker setMap function.
   * @param {Map} theMap The map to which the marker is to be added.
   * @private
   */
  MarkerWithLabel.prototype.setMap = function (theMap) {

    // Call the inherited function...
    google.maps.Marker.prototype.setMap.apply(this, arguments);

    // ... then deal with the label:
    this.label.setMap(theMap);
  };
}
$(".js-feedback").click(function(e){
	e.preventDefault();
	$("#oo_tab").trigger("click");
});
/***** Cookie Banner Begins ***********************************************************/
var domain = getDomain(document.URL);
var gaReferrer = false;
var hasAcceptanceCookie;

	if ($(".cookieShell").length > 0) {
		if (createCookie === undefined) {
			var createCookie = false;
		}
		//if (cookieName === undefined) {
		//    var cookieName = "MLALUKCookiesAccepted";
		//}


		//if the cookie acceptance checkox is unchecked, drop the cookie right away
		if (createCookie == false) {
			checkExistance(cookieName);
			if (hasAcceptanceCookie == false) {
				setCookie(cookieName, "yes", cookieExpiry, "/", domain, "");
			}
		}



		// Will not do anything unless checkbox for creating cookies is selected
		if (createCookie == true || Allowimmediatesiteanalytics == true) {
			checkExistance(cookieName);
			if (hasAcceptanceCookie == false) {
				enterCookie();
			}

			deleteCookies();
		}

		if ($(".cookieShell").hasClass("hidden")) {
			$(".global-header").removeClass("cookie__header");
			$(".megamenu").removeClass("cookie__megamenu");

		}else{
			//var cookieHeight = $(".cookieShell").height();
			$(".global-header").addClass("cookie__header");
			$(".megamenu").addClass("cookie__megamenu");

		}


	}




$(".js-cookieAccept").click(function () {
	$(".global-header").removeClass("cookie__header");
	$(".megamenu").removeClass("cookie__megamenu");
	
	$(".megamenu").removeClass('cookie-megamenu--minimized');
});

$("a").click(function () {
	if ($(this).attr("class") != "privacyPolicy" && createCookie == true) {
		checkExistance(cookieName);
		if (hasAcceptanceCookie == false) {
			setCookie(cookieName, "yes", cookieExpiry, "/", domain, "");
		}
	}
});

function checkExistance() {
	if ($.cookie(cookieName) != undefined) {
		hasAcceptanceCookie = true;
	}
	else {
		hasAcceptanceCookie = false;
	}
}

function enterCookie() {
	if (Allowimmediatesiteanalytics == false) {
		showCookieBannerMessage();
	}
	else {
		setCookie(cookieName, "yes", cookieExpiry, "/", domain, "");
		showCookieBannerMessage();
	}
}

function getDomain(url) {
	return url.match(/:\/\/(.[^/]+)/)[1];
}

function showCookieBannerMessage() {
	$('.cookieShell').removeClass("hidden");
}

function deleteCookies() {
	// Remove cookies set by this application [Google Analytics, WebTrends, alicoRerral]
	if (cookieDelete) {
		var path = "/";
		var domain = getDomain(document.URL);
		var deleteCookie = cookieNamesDelete.split(';');
		for (var i = 0; i < deleteCookie.length; i++) {
			$.removeCookie(deleteCookie[i], {path: path});
		}
	}
}

function setCookie(name, value, expires, path, domain, secure) {
	if (expires == 0) {
		$.cookie(name, value, {
			path: path,
			domain: domain,
			secure: secure
		});
	}
	else {
		$.cookie(name, value, {
			expires: expires,
			path: path,
			domain: domain,
			secure: secure
		});
	}
}

function setAcceptCookieDesktop(hasAppCookie) {
	if (hasAppCookie) {
		createReferral();
	}

	checkExistance(cookieName);
	if (hasAcceptanceCookie == false) {
		setCookie(cookieName, "yes", cookieExpiry, "/", domain, "");
	}
	$('.cookieShell').slideUp();
}

function createReferral() {
	// set cookie when the page has referral
	var referrerEmpty = '';
	var referrer = document.referrer;
	var bMatch = false;
	//var ignoredUrls =
	//    ["http://uae.alico.com",
	//        "https://uae.alico.com",
	//        "http://www.uae.alico.com",
	//        "https://www.aue.alico.com",
	//        "http://stage.uae.alico.com",
	//        "https://stage.uae.alico.com",
	//        "http://secure.uae.alico.com",
	//        "https://secure.uae.alico.com"];
	var ignoredUrlPattern = /^http(s)?:\/\/(((stage|stage2|stage|teststage|metlifestage|www)\.)?([a-z]{0,3}\.)?alico.com|(www\.)?interamericana.cl)/;
	if (referrer.match(ignoredUrlPattern)) bMatch = true;
	// if the referrer is not from our domain, then this is the first time.

	if (Allowimmediatesiteanalytics == false) {
		if (!bMatch && hasAcceptanceCookie) {
			setCookie("alicoReferral", document.referrer, 0, "/", domain, "");
		}
		if (referrer == "" && hasAcceptanceCookie) {
			setCookie("alicoReferral", referrerEmpty, 0, "/", domain, "");
		}
	}
	else {
		if (!bMatch) {
			setCookie("alicoReferral", document.referrer, 0, "/", domain, "");
		}
		if (referrer == "") {
			setCookie("alicoReferral", referrerEmpty, 0, "/", domain, "");
		}
	}
}

/***** Cookie Banner End ***********************************************************/
//Variables for all Services
var bootPagNum = 0;
var listCount = 10;
var maxPagCount = 5;
var count = 0;
var resultsListHTML = "";
var loadingMore = false;
var page = 1;
//Site Search Variables
var numSearchResults = 10;
var searchPaginationNumber;
var searchPaginationPrev;
var searchUrl;
var searchStart = 1;
var searchEnd = 10;
var totalSearchResults;
var didYouMean;
if ($(".page-count").length > 0) {
    var searchDefaultSelect = $(".page-count").val();
}

//Quote Tool variables
var quoteDomain;
var quotelanguage;
var quoteProduct;
var quoteSubmit;
var quoteUrl;
var quoteToolForm;
var quoteRequest;
// Find an X variables
if ($(".find-an-x-search__container").length > 0) {
    var geocoder = new google.maps.Geocoder();
}
var startPointGeoCode;
var startPointGMarker;
var radiusInMiles;
var specialty = "";
var specialtyDisplay = "";
var map;
var blueMarker;
var blackMarker;
var presentHighligtedInfo;
var selectedMarker;
var markersArray = [];
var dir_markerArray = [];
var dir_to_flag = true;
if ($(".find-an-x-search__container").length > 0) {
    var directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});
}

//Forms Lib Variables
var searchAgainFlag = false;

//Contact Variables
var radioDials = false;


$(document).ready(function () {
    ServicesAPI.loadEventListeners();
    if ($("#searchInPage").length != 0) {
        $("#searchInPage").val("");
    }

});

$(window).resize(function(){
    if($(".fax__container").length !=0) {
        if ($(".hidden-xs").is(":visible")) {
            $(".google-maps-container").attr('style', function (i, style) {
                return style.replace(/height[^;]+;?/g, '');
                google.maps.event.trigger(map, "resize");
            });
        }

        if (!$(".hidden-xs").is(":visible")) {
            $(".fax__container").find('.contact-container--form-card').insertAfter($(".results_list_container"));

        }
        else {
            $(".fax__container").find('.contact-container--form-card').insertAfter($(".fax-results__container  > .maps-contact-form-container > button"));
        }
    }
});


/****EMAIL UNSUB*************************/
$(".js-emailUnsub").click(function (event) {
    event.preventDefault();
    unsubscribeEmailDNSS();
});

$("#email").keydown(function (event) {
    if (event.keyCode == 13) {
        unsubscribeEmailDNSS();
        return false;
    }
});
$("#unsubscribeForm").submit(function (event) {
    event.preventDefault();
    unsubscribeEmailDNSS();
});
// Start Validations For Unsubscribe Email
function unsubscribeEmailDNSS(form) {
    $(".js-toggleEmailMessageFail").addClass("hidden");
    $("#email").blur();
    if ($("#email").hasClass("error")) {
        return false;
    } else {
        UnsubscribeProcessorSubmit();
        return false;
    }
}
// End Validations For Unsubscribe Email

function UnsubscribeProcessorSubmit() {
    if ($("#email").val() != null && $("#email").val() != "" && $("#email").val() != " ") {
        var formData = $('form[name="unsubscribeForm"]').serialize()
        var url = $(".email--unsubscribe-form").attr("data-url");
        $.ajax({
            url: url,
            type: 'POST',
            data: formData,
            contentType: 'application/x-www-form-urlencoded',
            processData: false,
            success: function (returndata) {
                console.log(returndata);
                $(".js-toggleEmailMessageDefault").addClass("hidden");
                $(".js-toggleEmailMessageSuccess").removeClass("hidden");
                $(".email--unsubscribe-form").hide();
            },
            error: function () {
                console.log("error in ajax form submission");
                $(".js-toggleEmailMessageFail").removeClass("hidden");
            }
        });
    }
}

//Contact Forms
$(".form-radio-grp svg, .image_radio svg").on('click', function () {
    var radioButton = $(this).siblings('input');
    if (!radioButton.prop('checked')) {
        radioButton.prop('checked', true);
        var radioName = radioButton.prop('name');
        $('input[name=' + radioName + ']').siblings('svg').toggle();
    }
    ;
});

$('#productPolicy option[value=""]').attr('selected', true);

$('.contactCard .form-minimize').click(function () {
    $('[data-request-type] option[value=""]').attr('selected', true);
    $("[data-request-type]").change();
    $('[data-request-type] option[value=""]').attr('selected', true);
});

$("[data-request-type]").on("change", function () {
    var thisValue = $(this).val()
    var thisForm = $(this).parent().parent().parent().parent().attr('data-fid');
    var $formid = $('[data-fid=' + thisForm + ']');
    radioDials = false;
    $formid.find("[data-observes-id]").find('input:radio').each(function () {
        $(this).next('span').removeClass('errorRadio');
    });
    $formid.find('[data-observes-id]').each(function () {

        if ($(this).attr('data-observes-value') == thisValue) {
            $(this).show();

        } else {
            $(this).hide();
        }
    });
    if (thisValue != "") {
        $(this).removeClass('error');
        $(this).attr('data-valid-status', 'success');
        $(this).parent('.form-user-grp').find('svg').css('fill', '#666');
    }
})


$("[data-observes-id]").find('textarea').on("change", function () {
    var thisForm = $(this).parent().parent().parent().parent().attr('data-fid');
    var $formid = $('[data-fid=' + thisForm + ']');
    var val = $formid.find("[data-observes-id]").find('textarea').val();
    var placeholder = $formid.find("[data-observes-id]").find('textarea').attr('placeholder');
    if (val == "" || val == placeholder) {
        $("[data-request-type]").attr('data-valid-status', 'failed');
    } else {
        $("[data-request-type]").attr('data-valid-status', 'success');
        $("[data-request-type]").removeClass('error');
    }
})

$("[data-observes-id]").find('input:text').on("change", function () {
    var thisForm = $(this).parent().parent().parent().parent().attr('data-fid');
    var $formid = $('[data-fid=' + thisForm + ']');
    var val = $formid.find("[data-observes-id]").find('input:text').val();
    var placeholder = $formid.find("[data-observes-id]").find('input:text').attr('placeholder');
    if (val == "" || val == placeholder) {
        $("[data-request-type]").attr('data-valid-status', 'failed');
    } else {
        $("[data-request-type]").attr('data-valid-status', 'success');
        $("[data-request-type]").removeClass('error');
    }
})


$("[data-observes-id]").find('input:radio').on('click', function () {
    /*$("[data-observes-id]").find("input:radio").each(function(){
     $(this).removeAttr("checked");
     $(this).next('span').removeClass('errorRadio');
     });
     $(this).attr('checked', true);*/
    radioDials = true;
    $("[data-request-type]").attr('data-valid-status', 'success');
    $("[data-request-type]").removeClass('error');
    $("[data-request-type]").parent().find('svg').css('fill', '#666');
});

//New This should be uncommented once form builder is in palce
$('[data-submit-type="clr"]').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var isValid = ServicesAPI.onFSubmit($(this));
    if (isValid) {
        var fid = $this.attr('data-fsubmit');
        var $formid = $('[data-fid=' + fid + ']');
        ServicesAPI.postLeadform($formid);

        $formid.find('[data-observes-id]').each(function () {
            $(this).hide();
        });

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

$('select[data-required=true]').on('change', function () {
    $(this).trigger('blur');
});

$('[data-required=true]').on('change', function () {
    $(this).trigger('blur');
});


$('[data-required=true]').on('blur keyup', function () {
    var $this = $(this);
    var placeholder = $this.attr('placeholder');
    if ($this.val() == placeholder) {
        $this.val("");
    }
    var val = $this.val();
    if (val.length == 0) {
        $this.addClass('error');
        //$this.val(placeholder);
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

$(".form-user-ctrl").on('click', function (evt) {
    if ($(this).hasClass("error")) {
        $(this).val("");
    }
});

$('[data-valid-type=number]').on('blur', function (evt) {
    evt.preventDefault();
    var $this = $(this);
    var val = $this.val();
    var re = /[0-9]/;
    ServicesAPI.validateOnType(val, $this, re);
});


$('[data-valid-type=text]').on('blur', function (evt) {
    evt.preventDefault();
    var $this = $(this);
    var val = $this.val();
    var re = /^([^0-9!@#$%\^&*()[\]{}\-\=\_\+'";:/?>.,<`~\ ]*)$/;
    /* var re = /^[0-9!@#$%\^&*)(+=._-]*$/;*/
    ServicesAPI.validateOnType(val, $this, re);
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
    if (count > 0 && count <= $(this).parents().find('.newProductUser input[type=checkbox]').length) {
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

$('[data-valid-type=email]').on('blur', function (evt) {
    evt.preventDefault();
    var $this = $(this);
    var val = $this.val();
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    ServicesAPI.validateOnType(val, $this, re);
});

$('[data-valid-type=zip]').on('blur', function (evt) {
    evt.preventDefault();
    var $this = $(this);
    var val = $this.val();
    var re = /^\d{5}$/i;
    ServicesAPI.validateOnType(val, $this, re);
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
    ServicesAPI.validateOnType(val, $this, re);
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

$('.productPolicy').on('blur', function () {
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
//Contact Forms

$('.form-user-grp > select').on('blur', function () {
    var $this = $(this);
    var val = $this.val();
    var placeholder = $this.attr('placeholder');
    if ($this.val() == "") {
        $this.val(placeholder);
    }
    if (val == "" || val == placeholder) {
        $this.closest('.form-user-grp').find('svg').css('fill', '#db3535');
    } else {
        $this.closest('.form-user-grp').find('svg').css('fill', '#666');
    }
});

/****Product Selector****************************************/


$(".product__selector").on("change", function () {
    var selectedProduct = $(this).find(':selected').attr("data-product-type");
    $(this).removeClass("error");
    $(this).parent('.select_wrapper').find('svg').css('fill', '#666');

    if ($(".product__selector--sub").length > 0) {
        $(".product__selector--sub").removeClass("error");
        $(".cta_header_quote_type_of_insurance--sub").addClass("hidden");
        $(".product__selector--sub").parent('.select_wrapper').find('svg').css('fill', '#666');
        $(".product__selector--sub").prop("disabled", true);
        $(".product__selector--sub").val("")
        $("[data-product-sub='" + selectedProduct + "']").removeClass("hidden");
        $("[data-product-sub='" + selectedProduct + "']").find(".product__selector--sub").prop("disabled", false);
        $(".js-productSelector").attr("href", "#");
    } else {
        var productSelectorPage = $(this).find(':selected').attr("data-product-url");
        $(".js-productSelector").attr("href", productSelectorPage);
    }


});

$(".product__selector--sub").on("change", function () {
    var productSelectorPage = $(this).find(':selected').attr("data-product-url");
    $(this).removeClass("error");
    $(this).parent('.select_wrapper').find('svg').css('fill', '#666');
    $(".js-productSelector").attr("href", productSelectorPage);
});

$(".js-productSelector").click(function (e) {
    var url = $(this).attr("href");
    if ($(".product__selector").length > 0 && $(".product__selector").find(':selected').val() == "") {
        $(".product__selector").parent('.select_wrapper').find('svg').css('fill', '#db3535');
        $(".product__selector").addClass("error")
    }
    if ($(".product__selector--sub").length > 0 && !$(".product__selector").find(':selected').val() == "" && $(".product__selector--sub").find(':selected').val() == "") {
        $(".product__selector--sub").addClass("error")
        $(".product__selector--sub").parent('.select_wrapper').find('svg').css('fill', '#db3535');
    }
    if (url == "#") {
        e.preventDefault();
    }
});
/****Blog Search****************************************/


$("#blog-category-dropdown").on("change", function () {
    var url = $(".blog-list").attr("data-url");
    var searchType = $(this).val();
    ServicesAPI.blogsServiceCall(url, searchType)
});

/****News Room Search****************************************/

// Store News Room search parameters
$(".list").on("click", ".list__item a", function () {
    sessionStorage.setItem("press_back", window.location.href);
    sessionStorage.setItem("press_month", $('#list_month').val());
    sessionStorage.setItem("press_year", $('#list_year').val());
    sessionStorage.setItem("press_search", $('#list_topics').val());
});

// Navigation for Press Room back button
$(".breadcrumb__crumb--back").on("click", function (evt) {
    evt.preventDefault();
    var url = sessionStorage.getItem("press_back");
    if (url != null) {
        window.location.href = url;
    } else {
        //window.location.href = "/Press_Room";
        window.history.go(-1);
        return false;
    }
    sessionStorage.removeItem("press_back");
});


/**** Press Room Search****************************************/


//Forms Library
if ($(".js-formLib").length > 0) {
    $('.js-formLib').on("change", function () {
        searchAgainFlag = true;
        var url = $(".js-formLib").attr("data-forms-lib-url");
        var query = $(".js-formLib").attr("data-forms-query-parameter");
        var value = $('.js-formLib').val()
        url += value + query;
        ServicesAPI.formsLibraryServiceCall(url);
    });

    $(".form_library_container").on("click", ".form a", function () {
        $(".form_library_container").find(".form a").removeClass("selected");
        $(this).closest(".form").find("a").addClass("selected");
    });
}


//Site Search


// Search Results Page Search Start
$('.js-searchSubmit').on('click', function () {
    /*var searchRequest = $(".js-searchTextBox").val();*/
    var searchRequest = $(".js-searchTextBox").val().split(" ").join("+OR+");
    /*var url = $(".js-searchSubmit").attr("data-search-ajax-url") + "?query=" + searchRequest;*/
    var url = $(".js-searchSubmit").attr("data-search-ajax-url");
    /*console.log(searchDefaultSelect)
     $(".page-count").val(searchDefaultSelect);*/
    if (searchRequest) {
        searchStart = 1;
        searchEnd = 10;
        searchPaginationPrev = undefined;
        searchPaginationNumber = 0;
        ServicesAPI.searchServiceCall(url, searchRequest);
    }
});

// Site Header Search click on icon
$('.js-searchIcon').click(function () {
    if ($('.search-trigger__search-box').val()) {
        var searchTerm = $(".search-trigger__search-box").val();
        if ($(".search-trigger__search-box").hasClass("js-oldSearch")) {
            if ($(".search-trigger__icon--open").length > 0 && getViewport() != "mobile") {
                if (!$(".search-trigger__search-box").val() == "" && !$(".search-trigger__search-box").val() == " ") {
                    ServicesAPI.legacySearch(searchTerm);
                }
            }

        } else {
            //For Integration we only need this statment
            if ($(window).width() >= 767 && $(".search-trigger__icon--open").length > 0) {
                ServicesAPI.redirectToSearchResultsPage(searchTerm);
            }
        }

    }
});


//Site header search in mobile
$('.js-searchIconMobile').click(function () {
    if ($('.search-trigger__search-box').val()) {
        var searchTerm = $(".search-trigger__search-box").val();
        if ($(".search-trigger__search-box").hasClass("js-oldSearch")) {
            if (getViewport() == "mobile" && $(".search-trigger__icon--open").length > 0) {
                ServicesAPI.legacySearch(searchTerm);
            }
        } else {
            //For Integration we only need this statment
            if ($(window).width() >= 767 && $(".search-trigger__icon--open").length > 0) {
                ServicesAPI.redirectToSearchResultsPage(searchTerm);
            }
        }
    }
});
//Site header search on keypress
$('.search-trigger__search-box').keypress(function (e) {

    if ($('.search-trigger__search-box').val()) {

        if ($(this).hasClass("js-oldSearch")) {
            if (e.which == 13) {
                var searchTerm = $(this).val();
                e.preventDefault();
                ServicesAPI.legacySearch(searchTerm);
            }
        } else {
            //For Integration we only need this statment
            if (e.which == 13) {
                var searchTerm = $(this).val();
                e.preventDefault();
                ServicesAPI.redirectToSearchResultsPage(searchTerm);
            }
        }
    }
});

$(".suggestionsbox").on("click", ".js-searchSuggestions", function () {
    var searchTerm = $(".search-trigger__search-box").val();
    if ($(".search-trigger__search-box").hasClass("js-oldSearch")) {
        ServicesAPI.legacySearch(searchTerm);
    } else {
        //For Integration we only need this statment
        ServicesAPI.redirectToSearchResultsPage(searchTerm);
    }
});
/*$("tbody.ss-gac-m").on("click", ".ss-gac-a, .ss-gac-b, .ss-gac-c, .ss-gac-d", function () {
 var searchTerm = $(this).find(".ss-gac-c").text();
 $(".search-trigger__search-box").val(searchTerm);
 if ($(".search-trigger__search-box").hasClass("js-oldSearch")) {
 $(".search-trigger__search-box").val(searchTerm);
 ServicesAPI.legacySearch(searchTerm);
 } else {
 //For Integration we only need this statment
 ServicesAPI.redirectToSearchResultsPage(searchTerm);
 }
 });*/


// Search in Page
$("#searchInPage, .js-searchSubmit").keypress(function (e) {
    if (e.which == 13) {
        $('.js-searchSubmit').click();//Trigger search button click event
    }
});

// Search in Search Results Page
$(".js-searchSubmit").keypress(function (e) {
    if (e.which == 13) {
        $('.js-searchSubmit').click();//Trigger search button click event
    }
});
$('.js-SearchBox').click(function (e) {
    e.preventDefault();
    var zipcode = $(".office-search__input").val();
    var urlStr;
    if ($(this).hasClass("office-search__action")) {
        sessionStorage.setItem("faoZipCode", $(".office-search__input").val());
        urlStr = $(this).attr('data-href') + "?zip=" + zipcode;
        window.location.href = urlStr;
    }
});


$('.js-searchSuggestion').on('click', function (e) {
    e.preventDefault();
    var correctionClickedOn = $(this).text().split(" ").join("+OR+");
    var searchRequest = correctionClickedOn;
    $(".js-searchTextBox").val($(this).text())
    var url = $(".js-searchSubmit").attr("data-search-ajax-url");
    if (searchRequest) {
        searchStart = 1;
        searchEnd = 10;
        searchPaginationPrev = undefined;
        searchPaginationNumber = 0;
        ServicesAPI.searchServiceCall(url, correctionClickedOn);
    }
});

//Pagination Update
$(".page-count").on('change', function () {
    if ($(".find-an-x-search__container").length > 0) {
        listCount = $(this).val();
        ServicesAPI.createPagination(count);
        ServicesAPI.resetMap();
        ServicesAPI.showLocation();
    }
    if ($(".search-results-container").length > 0) {
        listCount = parseInt($(this).val());
        numSearchResults = $(this).val();
        var searchRequest = $(".js-searchTextBox").val().split(" ").join("+OR+");
        var url = $(".js-searchSubmit").attr("data-search-ajax-url");
        if (searchRequest) {
            ServicesAPI.searchServiceCall(url, searchRequest);
        }

    }
});

$(".mobile_expand_close").click(function(){
    $(".find-an-x-search--expand").slideUp();
    $(".mobile_expand_close").hide();
});
//Find an X Click Functions
$(".find-an-x-search__container .cta_search").on('focus', function (e) {
    if (getViewport() == "mobile") {
        if($(".find-an-x-search--expand").css("display") == "none"){
            $(".find-an-x-search--expand").slideDown();
            $(".mobile_expand_close").show();
        }
        $(".find-an-x-input__container").addClass("find-an-x-input__container__margin");

    }
});
/*$("body").on("click tap", function (e) {
 var faoTrigger = $('.cta_search');
 var container = $(".find-an-x-search__container");
 if (!container.is(e.target) && container.has(e.target).length === 0) {
 $('.find-an-x-search--expand').hide();
 }
 });*/

$(".find-an-x-search__container .directions_button").on('click', function (e) {
    //handle empty val
    if ($(".cta_search").val().length === 0) {
        $(".cta_search").addClass('error');
    } else {
        ServicesAPI.showLocation();
    }

});

$(".search_location_image").on('click touchstart', function () {
    if ($(window).width() < 1025) {
        ServicesAPI.showLocation();
    }
});

$('.find-an-x-search__container .cta_search').on('keypress', function (event) {
    //handle empty val
    if ($(".cta_search").val().length + 1 === 0) {
        $(".cta_search").addClass('error');
    } else {
        $(".cta_search").removeClass('error');
        ServicesAPI.checkEnter(event);
    }

});

/* Function that is called whenever the user changes the radius*/
$(".find_an_office_radius").on('change', function () {
    ServicesAPI.resetMap();
    ServicesAPI.showLocation();
});

$("body").on('click tap'," .results_office_name",function(){
    var i= $(this).closest('.results_office_result').index();
    google.maps.event.trigger(markersArray[i],  'click');
});

$('.get-directions-buttons .btn').on('click', function () {
    $('.get-directions-buttons .btn').removeClass('active');
    $(this).addClass('active');
    if ($('.driving-directions-panel').is(':visible')) {
        ServicesAPI.getDirections();
    }
});

$(".get-directions-form .get_directions_button").on('click', function () {
    if ($(".from-address").val() == "" || $(".from-address").val() == " ") {
        $(".from-address").addClass('error');
    } else {
        $(".from-address").removeClass('error');
        ServicesAPI.getDirections();
    }
});

/* back link on directions page work*/
$(".back-click").on('click', function () {
    if ($('.driving-directions-panel').is(':visible')) {
        $('.driving-directions-panel').addClass('hidden');
        $('.get-directions-form').removeClass('hidden');
        directionsDisplay.setMap(null);
        ServicesAPI.getDirectionsPanel($('.get-directions-form .to-address').val());
    }
    else {
        ServicesAPI.showLocation();
        if (!$(".find-an-x-search__container").hasClass("hidden")) {

            $('.page-title__heading').text($('.findOfficeText').text());
            ServicesAPI.removeBreadCrumb();
        }
    }
});

//might not be needed, need to test.
/* update link for find an office breadcrumb*/
$('.bc_link_fao').on('click', function () {
    ServicesAPI.showLocation();
});

$('.maps-button').click(function (clickedButton) {
    var moreMapText = $(".get_direction_more_map").text();
    var lessMapText = $(".get_direction_less_map").text();

    if ($('.maps-button').text() == moreMapText) {
        $('.google-maps-container').css('height', '400px');
        $('.maps-button').text(lessMapText);
        google.maps.event.trigger(map, "resize");
        ServicesAPI.getMetOffices();
    } else {
        $('.google-maps-container').css('height', '200px');
        $('.maps-button').text(moreMapText);
        google.maps.event.trigger(map, "resize");
        ServicesAPI.getMetOffices();
    }
});
/*function gmapsAutoCompleteInit() {
 if (typeof countryCode !== 'undefined') {
 var options = {
 componentRestrictions: {country: countryCode}
 };
 $('.gmaps-auto-complete').each(function () {
 new google.maps.places.Autocomplete($(this)[0], options);
 });
 } else {
 $('.gmaps-auto-complete').each(function () {
 new google.maps.places.Autocomplete($(this)[0]);
 });
 }
 }*/
var countryCode = "";

$(window).on('load', function (e) {

    if ($(".fax__container").length > 0) {
        countryCode = $(".directions_button").attr("data-fao-market");
        faoURL = window.location.href;
        blackMarker = $('.pngPath_icon_locpin_blk').text();
        blueMarker = $('.pngPath_icon_locpin_blue').text();
        ServicesAPI.initializeFindAnOffice();
        if (document.referrer != "") {
            ServicesAPI.showLocation();
        }
        if (!$(".hidden-xs").is(":visible")) {
            $(".fax__container").find('.contact-container--form-card').insertAfter($(".results_list_container"));

        }
        else {
            $(".fax__container").find('.contact-container--form-card').insertAfter($(".fax-results__container  > .maps-contact-form-container > button"));
        }
    }
    if ($(".find-office__zip-city-state").length > 0) {
        countryCode = $(".find-office__submit").attr("data-fao-market");
        if (typeof countryCode !== 'undefined') {
            var options = {
                componentRestrictions: {country: countryCode}
            };
            googleautocomplete = new google.maps.places.Autocomplete(document.getElementsByClassName("find-office__zip-city-state")[0], options);
        } else {
            googleautocomplete = new google.maps.places.Autocomplete(document.getElementsByClassName("find-office__zip-city-state")[0]);
        }
        //googleautocomplete.bindTo('bounds', map);
        google.maps.event.addListener(googleautocomplete, 'place_changed', function () {
            var place = googleautocomplete.getPlace();
            if (!place || !place.geometry) {

            }
        });
    }

});
//From FAO js, not sure what this does.
$("body").on("ready", "[data-leg-index=\"1\"]", function () {
    $("[data-leg-index=\"1\"]").addClass("lastMarker");
});

$(".results_pagination").click(function () {
    $('html, body').animate({
        scrollTop: $('.fax-results__container')
    }, 'slow');
});


// Click Functions for Quote Tool
if ($(".cta_header_quote").length > 0) {
    $(".cta_header_quote").find(".select_wrapper").on("change", function () {
        ServicesAPI.quoteFormReset();
    });
}

// Initializes the quote results display and edit your quote
if ($(".js-editGlobal").length > 0) {
// Get Quote Results
// Open Edit Quote Form
    $(".js-editGlobal").on("click", function () {
        if (sessionStorage.getItem("product") !== null) {
            $(".insurance-type").val($("[data-product='" + sessionStorage.getItem("product") + "']").val());
        }
        $(".insurance-type").change();
        $(".contact-form-quote-results").addClass("contact-form-quote-results--hidden");
        $(".edit-form-quote-results").addClass("edit-form-quote-results--block");
        $(".results-form").addClass("results-form--dark-blue");
        $(".quote-box").addClass("quote-box--inactive");
        ServicesAPI.preFillQuoteForm();
    });

    // Close Edit Quote Form
    $(".edit-form-quote-results .form-close").on("click", function () {
        $(".results-form").removeClass("results-form--dark-blue");
        $(".contact-form-quote-results").removeClass("contact-form-quote-results--hidden");
        $(".edit-form-quote-results").removeClass("edit-form-quote-results--block");
        $(".quote-box").removeClass("quote-box--inactive");
    });
}

$(".js-submitQuote").click(function (e) {
    e.preventDefault();
    if ($(".js-submitQuote").parent().parent().parent().parent().hasClass('quote-tool-form')) {
        var baseUrl = $(".quote-tool-form").attr("data-quote-url");
        quoteUrl = "";
        //quoteUrl = baseUrl + '{"domain":"' + quoteDomain + '","language":"'+ quotelanguage+'","product":"'+ quoteProduct +'","country":"default"';
        quoteUrl = baseUrl;
        quoteRequest = {domain: quoteDomain, language: quotelanguage, product: quoteProduct, country: 'default'};
        ServicesAPI.loopThroughQuoteInputs();
        //quoteUrl +=  '}';
        if (ServicesAPI.validateFields()) {
            ServicesAPI.quoteServiceCall();
        }
    }
});


$(".insurance-type").on("change", function () {
    var formToShow = $(".insurance-type").val();
    $(".quote-tool-form").show();
    $(".quote-tool-form form").hide();
    $("[data-show-form='" + quoteToolForm + "']").hide();
    quoteSubmit = $(".insurance-type").val();
    $("." + formToShow + " form").show();
    quoteSubmit = $(".insurance-type").val();
    if ($("[data-quoteDescription='" + quoteSubmit + "']").length > 0) {
        $("[data-quoteDescription]").addClass("hidden");
        $("[data-quoteDescription='" + quoteSubmit + "']").removeClass("hidden");
    }
    quoteToolForm = $(this).find(':selected').val();
    quoteDomain = $("[data-quoteTool='" + quoteToolForm + "']").attr("data-domain");
    quotelanguage = $("[data-quoteTool='" + quoteToolForm + "']").attr("data-lan");
    quoteProduct = $(this).find(':selected').attr('data-product');
    $(".js-hideButton").hide();
});
String.prototype.replaceAll = function(str1, str2, ignore)
{
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
}
String.prototype.toTitleCase = function () {
    var i, j, str, lowers, uppers;
    str = this.replace(/([^\W_]+[^\s-]*) */g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });

    // Certain minor words should be left lowercase unless
    // they are the first or last words in the string
    lowers = ['A', 'An', 'The', 'And', 'But', 'Or', 'For', 'Nor', 'As', 'At',
        'By', 'For', 'From', 'In', 'Into', 'Near', 'Of', 'On', 'Onto', 'To', 'With'];
    for (i = 0, j = lowers.length; i < j; i++)
        str = str.replace(new RegExp('\\s' + lowers[i] + '\\s', 'g'),
            function (txt) {
                return txt.toLowerCase();
            });

    // Certain words such as initialisms or acronyms should be left uppercase
    uppers = ['Id', 'Tv'];
    for (i = 0, j = uppers.length; i < j; i++)
        str = str.replace(new RegExp('\\b' + uppers[i] + '\\b', 'g'),
            uppers[i].toUpperCase());

    return str;
}

function unique(list) {
    var result = [];
    $.each(list, function (i, e) {
        if ($.inArray(e, result) == -1) result.push(e);
    });
    return result;
}

var isWhole_re = /^\s*\d+\s*$/;
function isWhole(s) {
    return String(s).search(isWhole_re) != -1
}

var isNonblank_re = /\S/;
function isNonblank(s) {
    return String(s).search(isNonblank_re) != -1
}

var ServicesAPI = {

    loadEventListeners: function () {
        ServicesAPI.updatePageFrom($('[name="pageFrom"]'));
        ServicesAPI.gmapsAutoCompleteInit();
        if ($(".search-results-container").length > 0)
            ServicesAPI.searchResultsPageLoad();
        if ($(".js-resultsGlobal").length > 0 || $(".insurance-type").length > 0) {
            ServicesAPI.loadQuoteResults();
            ServicesAPI.clearOverlays();
        }
        if ($(".news-room").length > 0) {
            listCount = 6;
            ServicesAPI.pressBackQuery();
            //Refer to news-room.js to find this function
            newsRoomServiceConstruction();
        }
        if ($(".blog-list").length > 0) {
            var url = $(".blog-list").attr("data-url");
            ServicesAPI.blogsServiceCall(url, "mostRecent")
        }
        ServicesAPI.dropDownPreselection();
    },
    replaceAll: function (txt, replace, with_this) {
        return txt.replace(new RegExp('\\b' + replace + '\\b', 'gi'), with_this);
    },
    populateYearDropDown: function (year, min, element) {
        var yearOptions = $(element);
        var yr = new Date();

        yr = yr.getFullYear() - min;
        $(element).children().remove();
        $(element).append("<option value='' selected disabled>YYYY</option>");
        for (i = yr; i >= year; i--) {
            var optionValue = i;
            yearOptions.append($('<option>', {
                value: optionValue,
                text: optionValue.toString()
            }));
        }
    },
    isLeapYear: function (a) {
        a = parseInt(a);
        if (a % 4 == 0) {
            if (a % 100 != 0) {
                return true
            } else {
                if (a % 400 == 0) {
                    return true
                } else {
                    return false
                }
            }
        }
        return false;
    },
    populateDaysDropDown: function (id) {
        var numDayDropDown = $(".dobDay").length;
        var numMonthDropDown = $(".dobMonth").length;
        var numYearDropDown = $(".dobYear").length;
        if (($(".dobMonth").val() == "09") || ($(".dobMonth").val() == "04") ||
            ($(".dobMonth").val() == "06") || ($(".dobMonth").val() == "11")) {
            $(".dobDay option:eq(31)").remove();

        } else if ($(".dobMonth").val() == "02") {

            if ((ServicesAPI.isLeapYear($(".dobYear").val()) == false) || $(".dobYear").val() == "") {
                $(".dobDay option:eq(31)").remove();
                $(".dobDay option:eq(30)").remove();
                $(".dobDay option:eq(29)").remove();
            } else {
                if (($(".dobDay option[value='29']").length > (numDayDropDown - numDayDropDown)) == false) {
                    $(".dobDay").append('<option value="29">29</option>');
                }
                $(".dobDay option:eq(31)").remove();
                $(".dobDay option:eq(30)").remove();
            }

        } else {
            if ((($(".dobDay option[value='29']").length - numDayDropDown) > 0) == false) {

                $(".dobDay").append('<option value="29">29</option>');
            }
            if ((($(".dobDay option[value='30']").length - numDayDropDown) > 0) == false) {

                $(".dobDay").append('<option value="30">30</option>');
            }
            if ((($(".dobDay option[value='31']").length - numDayDropDown) > 0) == false) {

                $(".dobDay").append('<option value="31">31</option>');
            }
        }
    },
    validateFields: function () {
        var areErrorFieldsPresent = false;

        $("[data-quoteTool='" + quoteToolForm + "']").each(function () {
            if (!$("[data-quoteTool='" + quoteToolForm + "']").find(".form-focus").find(".errorSpan").is(":visible")) {
                areErrorFieldsPresent = true;
            }
        });
        return areErrorFieldsPresent;
    },
    numberWithCommas: function (x) {
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    },
    toTitleCase: function (str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    },
    encode: function (d) {
        if (d == '<')
            return '&lt;';
        if (d == '>')
            return '&gt;';
        if (d == '&')
            return '&amp;';

        if (d.charCodeAt(0) > 127) {
            return '&#' + d.charCodeAt(0) + ';';
        }
        return d;
    },
    escapeChar: function (value) {
        var bb = "";
        for (i = 0; i < value.length; i++) {
            bb += encode(value.charAt(i));
        }
        return bb;
    },
    strTrim: function (a) {
        a = a.replace(/^\s+/g, "");
        a = a.replace(/\s+$/g, "");
        return a;
    },
    calculateAge: function () {
        var l = 0;
        if (($('#' + quoteToolForm + 'dobMonth').val() != "") && ($('#' + quoteToolForm + 'dobDay').val() != "") && ($('#' + quoteToolForm + 'dobYear').val() != "")) {
            var b = parseInt($('#' + quoteToolForm + 'dobMonth').val());
            var k = parseInt($('#' + quoteToolForm + 'dobDay').val());
            var m = parseInt($('#' + quoteToolForm + 'dobYear').val());
            var g = new Date();
            var e = g.getFullYear();
            var h = g.getMonth() + 1;
            var f = g.getDate();
            var c = 0;
            var a = 0;
            if (e > m) {
                l = e - m;
                c = e - m;
            }
            if (h < b) {
                l = l - 1;
                c = c - 1;
                a = 12 - (b - h);
                if (k > f) {
                    a = a - 1;
                }
            } else {
                if (h == b) {
                    if (f < k) {
                        l = l - 1;
                        c = c - 1;
                        a = 12 - (b - h);
                    }
                } else {
                    if (h > b) {
                        if (f >= k) {
                            a = h - b;
                        } else {
                            a = (h - b) - 1;
                        }
                    }
                }

            }
            return l;
        }
    },
    showSorryUnableToLocateMessage: function () {
        count = 0;
        ServicesAPI.createPagination(count);
        $('.results_error_info').removeClass('hidden').html($('.errorMsgtext_no_office_found').text());
        $('.results_content').remove();
        $('.results_pagination,.find_an_office_pagecount_wrap,.maps-button, .google-maps-container').addClass('hidden');
    },
    getQueryStringNew: function () {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('#') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    },
    getQueryStringNoHash: function () {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    },
    createPagination: function (result) {
        $('.results_content').children().removeClass('.hidden');
        var notHiddenList = $(".results_content").children().not('.hidden');
        var listLength = result;
        var st_cnt = 0;
        var end_cnt = 0;
        // Setting listLength to 0 manually when only undefined are returned
        if (typeof result != 'undefined') {
            if (result.count == 0)
                listLength = 0;
        }
        if (result < listCount) {
            $('.results_pagination').addClass('hidden');
            $(".results_content").children().removeClass('hidden');
            st_cnt = 1;
            end_cnt = listCount;
        }
        else {
            st_cnt = 1;
            end_cnt = listCount;
            $('.results_pagination').removeClass('hidden');
            $(".results_content").children().addClass('hidden');
            $(".results_content").children(':lt(' + listCount + ')').removeClass('hidden');
            $('.results_pagination').bootpag({
                total: Math.ceil(listLength / listCount),
                page: 1,
                maxVisible: maxPagCount,
                leaps: false,
                firstLastUse: true,
                first: "&#10094;&#10094;",
                prev: "&#10094",
                last: "&#10095;&#10095;",
                next: "&#10095;"
            }).on("page", function (event, num) {
                $(".results_content").children().addClass('hidden');
                if (num == 1) {
                    $(".results_content").children(':lt(' + listCount + ')').removeClass('hidden');
                    st_cnt = 1;
                    end_cnt = listCount;
                }
                else {
                    var start = (listCount * (num - 1)) - 1;
                    var end = listCount;
                    $(".results_content").children(':gt(' + start + '):lt(' + end + ')').removeClass('hidden');
                    st_cnt = listCount * (num - 1) + 1;
                    end_cnt = listCount * num;
                }
                if (end_cnt > listLength) {
                    end_cnt = listLength;
                }
                $('.display-text > span:first-of-type').html(st_cnt + '&nbsp;' + 'of' + '&nbsp;' + end_cnt);
                // ... after content load -> change total to 10
                $('.results_pagination').bootpag({
                    total: Math.ceil(count / listCount),
                    maxVisible: maxPagCount
                });
            });
        }

        if (count == 0) {
            st_cnt = listLength;
            end_cnt = listLength;
            $('.display-text > span:nth-of-type(2)').addClass('hidden');
            $('.results_pagination').addClass('hidden');
        }
        else {
            $('.display-text > span:nth-of-type(2)').removeClass('hidden');
            $('.display-text > span:nth-of-type(2)').html('&nbsp;' + count);
        }
        if (end_cnt < result) {
            $('.display-text > span:first-of-type').html(st_cnt + '&nbsp;' + '-' + '&nbsp;' + end_cnt);
        } else {
            $('.display-text > span:first-of-type').html(st_cnt + '&nbsp;' + '-' + '&nbsp;' + result);
        }
    },
    formatQuotePremium: function (premium) {
        //if(premium != Math.round(premium)){
        var dec = parseFloat(Math.round(premium * 100) / 100).toFixed(2);
        return dec;
    },
    quoteServiceCall: function () {

        $.ajax({
            url: quoteUrl + JSON.stringify(quoteRequest),
            contentType: "application/json; charset=utf-8",
            async: true,
            dataType: 'json',
            data: JSON.stringify(quoteRequest),
            type: 'POST',
            success: function (response) {
                var numObjects = Object.keys(response.solution).length;
                window.sessionStorage.clear();
                ServicesAPI.setQuoteSessionStorage();

                if (response.solution.premium !== undefined && response.solution.premium !== null) {
                    var prem = ServicesAPI.numberWithCommas(ServicesAPI.formatQuotePremium(response.solution.premium));
                    sessionStorage.setItem("premium", prem);
                }

                if (response.solution.age !== undefined && response.solution.age !== null) {
                    sessionStorage.setItem("age", response.solution.age);
                }
                if (response.solution.gender !== undefined && response.solution.gender !== null) {
                    sessionStorage.setItem("gender", response.solution.gender);
                }
                if (response.solution.coverage !== undefined && response.solution.coverage !== null) {
                    var cov = ServicesAPI.numberWithCommas(ServicesAPI.formatQuotePremium(response.solution.coverage));
                    sessionStorage.setItem("coverage", cov);
                }
                if (response.solution.term !== undefined && response.solution.term !== null) {
                    sessionStorage.setItem("term", response.solution.term);
                }
                if (response.solution.coverageType !== undefined && response.solution.coverage_type !== null) {
                    sessionStorage.setItem("coverageType", response.solution.coverageType);
                }
                if (response.solution.state !== undefined && response.solution.state !== null) {
                    sessionStorage.setItem("state", response.solution.state);
                }
                if (response.solution.income !== undefined && response.solution.income !== null) {
                    sessionStorage.setItem("income", response.solution.income);
                }
                if ($('#' + quoteToolForm + 'dobMonth').length > 0 && $('#' + quoteToolForm + 'dobDay').length > 0 && $('#' + quoteToolForm + 'dobYear').length > 0) {
                    sessionStorage.setItem('dobMonth', $('#' + quoteToolForm + 'dobMonth').val());
                    sessionStorage.setItem('dobDay', $('#' + quoteToolForm + 'dobDay').val());
                    sessionStorage.setItem('dobYear', $('#' + quoteToolForm + 'dobYear').val());
                }
                for (var i = 1; i <= numObjects; i++) {
                    var optionalSelect = response.solution.hasOwnProperty('optionalSelect' + i);
                    if (optionalSelect) {
                        sessionStorage.setItem('optionalSelect' + i, response.solution['optionalSelect' + i]);
                    }
                    var optionalRadio = response.solution.hasOwnProperty('optionalRadio' + i);
                    if (optionalRadio) {
                        sessionStorage.setItem('optionalRadio' + i, response.solution['optionalRadio' + i]);
                    }
                }
                sessionStorage.setItem("product", quoteProduct);
                ServicesAPI.redirectToQuoteResultsPage();
            },
            error: function (e) {
                console.log('error ', e);
            },
            timeout: 30000
        });
    },
    loadQuoteResults: function () {
        if ($(".js-resultsGlobal").length > 0) {
            if (sessionStorage.getItem("premium") !== null) {
                $(".results-card__quoteinfo__value").text(sessionStorage.getItem("premium"));
            }
            if (sessionStorage.getItem("coverage") !== null) {
                $("[data-field='coverage'] .value").text(sessionStorage.getItem("coverage"));
            }

            if (sessionStorage.getItem("coverageType") !== null) {
                var cov = sessionStorage.getItem("coverageType").toTitleCase();
                $("[data-field='coverage']").html('<span class="value"> ' + cov + ' </span>');
            }
            if (sessionStorage.getItem("coverageType") === null && sessionStorage.getItem("coverage") === null) {
                $("[data-field='coverage']").remove();
            }

            if (sessionStorage.getItem("term") !== null) {
                $("[data-field='term'] .value").text(sessionStorage.getItem("term"));
            } else {
                $("[data-field='term']").html('');
            }
        } else {
            if ($(".list").length > 0) {

            } else {
                $(".insurance-type").val($(".insurance-type option:first").val());
                sessionStorage.clear();
            }
        }
    },
    quoteFormReset: function () {
        $(".cta_header_quote").find(".generic-form").each(function () {
            $(this).find("input, select, textarea").removeClass('error');
            $(this)[0].reset();
        });
    },
    redirectToQuoteResultsPage: function () {
        var url = $("[data-quoteTool='" + quoteToolForm + "']").attr("data-path-to-results");
        window.location.href = url;
    },
    setQuoteSessionStorage: function () {
        var thisForm = $("[data-quoteTool='" + quoteToolForm + "']");
        var numInputs = thisForm.find(".form-focus").length;

        if ($('#' + quoteToolForm + 'userAge').length > 0) {
            sessionStorage.setItem("age", $('#' + quoteToolForm + 'userAge').val());
        }

        if ($('#' + quoteToolForm + 'coverageType').length > 0) {
            sessionStorage.setItem("coverageType", $('#' + quoteToolForm + 'coverageType').val());
        }

        if ($('#' + quoteToolForm + 'coverageText').length > 0) {
            sessionStorage.setItem("coverage", $('#' + quoteToolForm + 'coverageText').val());
        }


        if ($('#' + quoteToolForm + 'state').length > 0) {
            sessionStorage.setItem("state", $('#' + quoteToolForm + 'state').val());
        }

        if ($('#' + quoteToolForm + 'gender').length > 0) {
            sessionStorage.setItem("gender", $('#' + quoteToolForm + 'gender').val());
        }

        if ($('#' + quoteToolForm + 'coverageAmount').length > 0) {
            sessionStorage.setItem("coverage", $('#' + quoteToolForm + 'coverageAmount').val());
        }

        if ($('#' + quoteToolForm + 'termLengthSelect').length > 0) {
            sessionStorage.setItem("term", $('#' + quoteToolForm + 'termLengthSelect').val());
        }

        if ($('#' + quoteToolForm + 'termLengthText').length > 0) {
            sessionStorage.setItem("term", $('#' + quoteToolForm + 'termLengthText').val());
        }

        if ($('#' + quoteToolForm + 'incomeSelect').length > 0) {
            sessionStorage.setItem("income", $('#' + quoteToolForm + 'incomeSelect').val());
        }

        if ($('#' + quoteToolForm + 'incomeText').length > 0) {
            sessionStorage.setItem("income", $('#' + quoteToolForm + 'incomeText').val());
        }

        if ($('#' + quoteToolForm + 'dobMonth').length > 0 && $('#' + quoteToolForm + 'dobDay').length > 0 && $('#' + quoteToolForm + 'dobYear').length > 0) {
            sessionStorage.setItem("dobMonth", $('#' + quoteToolForm + 'dobMonth').val());
            sessionStorage.setItem("dobDay", $('#' + quoteToolForm + 'dobDay').val());
            sessionStorage.setItem("dobYear", $('#' + quoteToolForm + 'dobYear').val());
        }

        for (var i = 1; i <= numInputs; i++) {
            if ($('#' + quoteToolForm + 'optionalSelect' + i).length > 0) {
                sessionStorage.setItem("optionalSelect" + i, $('#' + quoteToolForm + 'optionalSelect' + i).val());
            }

            if ($('[name="' + quoteToolForm + 'radioGroup' + i + '"]').length > 0) {
                sessionStorage.setItem("optionalRadio" + i, $('[name="' + quoteToolForm + 'radioGroup' + i + '"]').val());
            }
        }
    },
    preFillQuoteForm: function () {
        var thisForm = $("[data-quoteTool='" + quoteToolForm + "']");
        var numInputs = thisForm.find(".form-focus").length;

        if ($('#' + quoteToolForm + 'userAge').length > 0) {
            $('#' + quoteToolForm + 'userAge').val(sessionStorage.getItem('age'));
        }

        if ($('#' + quoteToolForm + 'coverageType').length > 0) {
            $('#' + quoteToolForm + 'coverageType').val(sessionStorage.getItem('coverageType'));
        }

        if ($('#' + quoteToolForm + 'coverageText').length > 0) {
            var cov = parseInt(sessionStorage.getItem('coverage').replace(/\,/g, ''));
            $('#' + quoteToolForm + 'coverageText').val(cov);
        }


        if ($('#' + quoteToolForm + 'state').length > 0) {
            $('#' + quoteToolForm + 'state').val(sessionStorage.getItem('state'));
            var state = $('#' + quoteToolForm + 'state').val();
        }

        if ($('#' + quoteToolForm + 'gender').length > 0) {
            $('#' + quoteToolForm + 'gender').val(sessionStorage.getItem('gender'));
        }

        if ($('#' + quoteToolForm + 'coverageAmount').length > 0) {
            var cov = parseInt(sessionStorage.getItem('coverage').replace(/\,/g, ''));
            $('#' + quoteToolForm + 'coverageAmount').val(cov);
        }

        if ($('#' + quoteToolForm + 'termLengthSelect').length > 0) {
            $('#' + quoteToolForm + 'termLengthSelect').val(sessionStorage.getItem('term'));
        }

        if ($('#' + quoteToolForm + 'termLengthText').length > 0) {
            $('#' + quoteToolForm + 'termLengthText').val(sessionStorage.getItem('term'));
        }

        if ($('#' + quoteToolForm + 'incomeSelect').length > 0) {
            $('#' + quoteToolForm + 'incomeSelect').val(sessionStorage.getItem('income'))
        }

        if ($('#' + quoteToolForm + 'incomeText').length > 0) {
            $('#' + quoteToolForm + 'incomeText').val(sessionStorage.getItem('income'))

        }

        if ($('#' + quoteToolForm + 'dobMonth').length > 0 && $('#' + quoteToolForm + 'dobDay').length > 0 && $('#' + quoteToolForm + 'dobYear').length > 0) {
            $('#' + quoteToolForm + 'dobMonth').val(sessionStorage.getItem('dobMonth'));
            $('#' + quoteToolForm + 'dobDay').val(sessionStorage.getItem('dobDay'));
            $('#' + quoteToolForm + 'dobYear').val(sessionStorage.getItem('dobYear'));
        }

        for (var i = 1; i <= numInputs; i++) {
            if ($('#' + quoteToolForm + 'optionalSelect' + i).length > 0) {
                $('#' + quoteToolForm + 'optionalSelect' + i).val(sessionStorage.getItem('optionalSelect' + i));
            }

            if ($('[name="' + quoteToolForm + 'radioGroup' + i + '"]').length > 0) {
                $('[name="' + quoteToolForm + 'radioGroup' + i + '"]').val(sessionStorage.getItem('optionalRadio' + i)).attr("checked", true);
            }
        }
    },
    loopThroughQuoteInputs: function () {
        var thisForm = $("[data-quoteTool='" + quoteToolForm + "']");
        var numInputs = thisForm.find(".form-focus").length;

        if ($('#' + quoteToolForm + 'userAge').length > 0) {
            var age = $('#' + quoteToolForm + 'userAge').val();
            if ($('#' + quoteToolForm + 'userAge')[0].selectedIndex === 0) {
                $('#' + quoteToolForm + 'userAge').addClass("error").next().show().css("display", "block");
            } else {
                //quoteUrl += ',"age":"' + age +'"';
                quoteRequest["age"] = age;
                $('#' + quoteToolForm + 'userAge').removeClass("error").next().hide();
            }
        }

        if ($('#' + quoteToolForm + 'coverageType').length > 0) {
            var coverageType = $('#' + quoteToolForm + 'coverageType').val();
            if ($('#' + quoteToolForm + 'coverageType')[0].selectedIndex === 0) {
                $('#' + quoteToolForm + 'coverageType').addClass("error").next().show().css("display", "block");
            } else {
                //quoteUrl += ',"coverageType":"' + coverageType +'"';
                quoteRequest["coverageType"] = coverageType;
                $('#' + quoteToolForm + 'coverageType').removeClass("error").next().hide();
            }
        }

        if ($('#' + quoteToolForm + 'coverageText').length > 0) {
            var coverageText = $('#' + quoteToolForm + 'coverageText').val();
            if (isWhole(coverageText) === true) {
                //quoteUrl += ',"coverage":"' + coverageText +'"';
                quoteRequest["coverage"] = coverageText;
                $('#' + quoteToolForm + 'coverageText').removeClass("error").next().hide();
            } else {
                $('#' + quoteToolForm + 'coverageText').addClass("error").next().show().css("display", "block");
            }
        }

        if ($('#' + quoteToolForm + 'state').length > 0) {
            var state = $('#' + quoteToolForm + 'state').val();
            if ($('#' + quoteToolForm + 'state')[0].selectedIndex === 0) {
                $('#' + quoteToolForm + 'state').addClass("error").parent().find(".errorSpan").show().css("display", "block");
            } else {
                //quoteUrl += ',"state":"' + state +'"';
                quoteRequest["state"] = state;
                $('#' + quoteToolForm + 'state').removeClass("error").parent().find(".errorSpan").hide();
            }
        }

        if ($('#' + quoteToolForm + 'gender').length > 0) {
            var gender = $('#' + quoteToolForm + 'gender').val();
            if ($('#' + quoteToolForm + 'gender')[0].selectedIndex === 0) {
                $('#' + quoteToolForm + 'gender').addClass("error").next().show().css("display", "block");
            } else {
                //quoteUrl += ',"gender":"' + gender +'"';
                quoteRequest["gender"] = gender;
                $('#' + quoteToolForm + 'gender').removeClass("error").next().hide();
            }
        }

        if ($('#' + quoteToolForm + 'coverageAmount').length > 0) {
            var coverageAmount = $('#' + quoteToolForm + 'coverageAmount').val();
            if ($('#' + quoteToolForm + 'coverageAmount')[0].selectedIndex === 0) {
                $('#' + quoteToolForm + 'coverageAmount').addClass("error").next().show().css("display", "block");
            } else {
                //quoteUrl += ',"coverage":"' + coverageAmount +'"';
                quoteRequest["coverage"] = coverageAmount;
                $('#' + quoteToolForm + 'coverageAmount').removeClass("error").next().hide();
            }
        }

        if ($('#' + quoteToolForm + 'termLengthSelect').length > 0) {
            var termLengthSelect = $('#' + quoteToolForm + 'termLengthSelect').val();
            if ($('#' + quoteToolForm + 'termLengthSelect')[0].selectedIndex === 0) {
                $('#' + quoteToolForm + 'termLengthSelect').addClass("error").next().show().css("display", "block");
            } else {
                //quoteUrl += ',"term":"' + termLengthSelect +'"';
                quoteRequest["term"] = termLengthSelect;
                $('#' + quoteToolForm + 'termLengthSelect').removeClass("error").next().hide();
            }
        }

        if ($('#' + quoteToolForm + 'termLengthText').length > 0) {
            var termLengthText = $('#' + quoteToolForm + 'termLengthText').val();
            if (isNonblank(termLengthText) === true) {
                $('#' + quoteToolForm + 'termLengthText').removeClass("error").next().hide();
                //quoteUrl += ',"term":"' + termLengthText +'"';
                quoteRequest["term"] = termLengthText;
            } else {
                $('#' + quoteToolForm + 'termLengthText').addClass("error").next().show().css("display", "block");

            }
        }

        if ($('#' + quoteToolForm + 'incomeSelect').length > 0) {
            var income = $('#' + quoteToolForm + 'incomeSelect').val();
            if ($('#' + quoteToolForm + 'incomeSelect')[0].selectedIndex === 0) {
                $('#' + quoteToolForm + 'incomeSelect').addClass("error").next().show().css("display", "block");
            } else {
                //quoteUrl += ',"income":"' + income +'"';
                quoteRequest["income"] = income;
                $('#' + quoteToolForm + 'incomeSelect').removeClass("error").next().hide();
            }
        }

        if ($('#' + quoteToolForm + 'incomeText').length > 0) {
            var incomeText = $('#' + quoteToolForm + 'incomeText').val();
            if (isNonblank(incomeText) === true) {
                $('#' + quoteToolForm + 'incomeText').removeClass("error").next().hide();
                //quoteUrl += ',"income":"' + incomeText +'"';
                quoteRequest["income"] = incomeText;
            } else {
                $('#' + quoteToolForm + 'incomeText').addClass("error").next().show().css("display", "block");

            }
        }

        if ($('#' + quoteToolForm + 'dobMonth').length > 0 && $('#' + quoteToolForm + 'dobDay').length > 0 && $('#' + quoteToolForm + 'dobYear').length > 0) {
            var age;
            if ($('#' + quoteToolForm + 'dobMonth')[0].selectedIndex === 0) {
                $('#' + quoteToolForm + 'dobMonth').addClass("error");
            } else {
                $('#' + quoteToolForm + 'dobMonth').removeClass("error");
            }

            if ($('#' + quoteToolForm + 'dobDay')[0].selectedIndex === 0) {
                $('#' + quoteToolForm + 'dobDay').addClass("error");
            }
            else {
                $('#' + quoteToolForm + 'dobDay').removeClass("error");
            }

            if ($('#' + quoteToolForm + 'dobYear')[0].selectedIndex === 0) {
                $('#' + quoteToolForm + 'dobYear').addClass("error");
            }
            else {
                $('#' + quoteToolForm + 'dobYear').removeClass("error");
            }

            if ($('#' + quoteToolForm + 'dobMonth')[0].selectedIndex !== 0 && $('#' + quoteToolForm + 'dobDay')[0].selectedIndex !== 0 && $('#' + quoteToolForm + 'dobYear')[0].selectedIndex !== 0) {
                age = ServicesAPI.calculateAge();
                //quoteUrl += ',"age":"' + age +'"';
                quoteRequest["age"] = age;
            }
        }
        for (var i = 1; i <= numInputs; i++) {
            if ($('#' + quoteToolForm + 'optionalSelect' + i).length > 0) {
                var optionalSelect = $('#' + quoteToolForm + 'optionalSelect' + i).val();
                if ($('#' + quoteToolForm + 'optionalSelect' + i)[0].selectedIndex === 0) {
                    $('#' + quoteToolForm + 'optionalSelect' + i).addClass("error").next().show().css("display", "block");
                } else {
                    //quoteUrl += ',"optionalSelect'+i+'":"' + optionalSelect +'"';
                    var optionalSelectText = 'optionalSelect' + i;
                    quoteRequest[optionalSelectText] = optionalSelect;
                    $('#' + quoteToolForm + 'optionalSelect' + i).removeClass("error").next().hide();
                }
            }

            if ($('[name="' + quoteToolForm + 'radioGroup' + i + '"]').length > 0) {
                var optionalRadio = $('[name="' + quoteToolForm + 'radioGroup' + i + '"]:checked').val();
                if (optionalRadio === "" || optionalRadio === " " || optionalRadio === null || optionalRadio === undefined) {
                    $('[name="' + quoteToolForm + 'radioGroup' + i + '"]').parent().parent().find(".errorSpan").show().css("display", "block");
                } else {
                    $('[name="' + quoteToolForm + 'radioGroup' + i + '"]').parent().parent().find(".errorSpan").hide();
                    //quoteUrl += ',"optionalRadio'+i+'":"' + optionalRadio +'"';
                    var optionalSelectText = 'optionalRadio' + i;
                    quoteRequest[optionalSelectText] = optionalRadio;
                }
            }
        }
    },
    createPaginationSearch: function () {
        if(didYouMean){
            var url = $(".js-searchSubmit").attr("data-search-ajax-url");
            if (didYouMean) {
                ServicesAPI.searchServiceCall(url, didYouMean);
            }

        }else {


            $('.results_content').children().removeClass('.hidden');
            // Setting totalSearchResults to 0 manually when only undefined are returned
            if (typeof totalSearchResults != 'undefined') {
                if (totalSearchResults.count == 0)
                    totalSearchResults = 0;
            }
            //If there are less total results than the number of results to show
            if (totalSearchResults < listCount) {
                $('.results_pagination').addClass('hidden');
                $(".results_content").children().removeClass('hidden');
                searchEnd = totalSearchResults;
                console.log("less results than listItem searchStart ", searchStart)
                console.log("less results than listItem searchEnd ", searchEnd)
            } else {
                //searchStart = 1;
                //First time loading , end count should be what ever the value is of the drop down box
                //searchEnd = listCount;
                console.log("first time loading searchStart ", searchStart)
                console.log("first time loading searchEnd ", searchEnd)
                $('.results_pagination').removeClass('hidden');
                var startPage;
                if (searchPaginationPrev != undefined) {
                    startPage = searchPaginationPrev;
                } else {
                    startPage = 1;
                }
            }
            console.log("searchEnd < totalSearchResults ", searchEnd < totalSearchResults)
            console.log("searchStart ", searchStart);
            console.log("searchEnd ", searchEnd);
            console.log("totalSearchResults ", totalSearchResults);
            if (searchEnd < totalSearchResults) {
                $('.display-text > span:first-of-type').html(searchStart + '&nbsp;' + '-' + '&nbsp;' + searchEnd);
            } else {
                $('.display-text > span:first-of-type').html(searchStart + '&nbsp;' + '-' + '&nbsp;' + totalSearchResults);
            }

            $('.results_pagination').bootpag({
                total: Math.ceil(totalSearchResults / listCount),
                page: startPage,            // default page
                maxVisible: maxPagCount,
                leaps: false,
                firstLastUse: true,
                first: "&#10094;&#10094;",
                prev: "&#10094",
                last: "&#10095;&#10095;",
                next: "&#10095;"
            }).on("page", function (event, num) {
                searchPaginationPrev = num;
                console.log(num)
                searchPaginationNumber = num;
                //If num is not 1 we have clicked one of the other pagination items.
                searchPaginationNumber = num + "0";
                searchPaginationNumber -= 10;
                if (listCount != 10) {
                    searchPaginationNumber += listCount - 10;
                }
                /*	if(num != 1){
                 //set search pagination number to num ie 1 + 0 - 10, So if we click the 2nd pagination number then this number will be 10 which is what we set our start to for the next search
                 searchPaginationNumber = num + "0";
                 searchPaginationNumber -= 10;

                 }else{
                 searchPaginationNumber = undefined;
                 }*/

                console.log("search pagination number ", searchPaginationNumber)
                sessionStorage.setItem("paginationNumber", num);
                var searchRequest = $(".js-searchTextBox").val().split(" ").join("+OR+");
                var url = $(".js-searchSubmit").attr("data-search-ajax-url");
                if (searchRequest) {
                    ServicesAPI.searchServiceCall(url, searchRequest);
                }

                if ($(".search-results-container").length > 0) {
                    if (sessionStorage.getItem("paginationNumber") !== null) {
                        var thisItem = sessionStorage.getItem("paginationNumber")
                        $(".pagination.bootpag li").each(function () {
                            $(this).removeClass("active");
                            if ($(this).attr("data-lp") == thisItem) {
                                $(this).addClass("active");
                            }
                            if ($(this).hasClass("prev") || $(this).hasClass("next")) {
                                $(this).removeClass("active");
                            }
                        });
                        window.sessionStorage.clear();
                    }
                }
                /*if (num == 1) {
                 searchStart = 1;
                 console.log(searchStart)
                 //this should be the last number of items in the set example 40-49
                 searchEnd = listCount;
                 console.log(searchEnd)
                 }else {
                 //this should be the last number of items in the set example 40-49
                 //This sets the start to search pagination number plus 1. So if you click pagnation 2 this would be 10
                 searchStart = searchPaginationNumber + 10;
                 console.log("searchStart " ,searchStart)

                 //this sets the end to search padination number + list count which is the number of items to show, So if you click paganation 2 this would be 10 + 10.
                 searchEnd = searchPaginationNumber + listCount + 10;
                 console.log("searchEnd ", searchEnd)
                 }*/
                console.log("searchEnd ", searchEnd + "> totalSearchResults ", totalSearchResults)
                console.log(searchEnd > totalSearchResults)
                if (searchEnd > totalSearchResults) {
                    searchEnd = totalSearchResults;
                }
                console.log("searchEnd ", searchEnd)
                console.log("searchEnd < totalSearchResults ", searchEnd < totalSearchResults)
                console.log("searchStart ", searchStart);
                console.log("searchEnd ", searchEnd);
                console.log("totalSearchResults ", totalSearchResults);
                if (searchEnd < totalSearchResults) {
                    console.log(searchStart + " " + searchEnd)
                    $('.display-text > span:first-of-type').html(searchStart + '&nbsp;' + '-' + '&nbsp;' + searchEnd);
                } else {
                    console.log(totalSearchResults - listCount + " " + totalSearchResults)
                    $('.display-text > span:first-of-type').html(totalSearchResults - listCount + '&nbsp;' + '-' + '&nbsp;' + totalSearchResults);

                }
            });

            console.log(count)
            //No results
            if (totalSearchResults == 0) {
                $('.display-text > span:nth-of-type(2)').addClass('hidden');
                $('.results_pagination').addClass('hidden');
            } else {
                $('.display-text > span:nth-of-type(2)').removeClass('hidden');
                $('.display-text > span:nth-of-type(2)').html('&nbsp;' + totalSearchResults);
            }

        }
    },
    searchServiceCall: function (url, query, e) {
        count = 0;
        var frontEnd = $(".js-searchSubmit").attr("data-front-end");
        var site = $(".js-searchSubmit").attr("data-site");
        console.log("ajax searchPaginationNumber ", searchPaginationNumber)
        if (searchPaginationNumber == undefined || searchPaginationNumber == 0) {
            searchUrl = url + 'access=p&output=xml_no_dtd&ie=UTF-8&oe=UTF-8&proxystylesheet=' + frontEnd + '&client=' + frontEnd + '&q=' + query + '&num=' + numSearchResults + '&getfields=*&site=' + site + '&rc=0';
            searchStart = 1;
            searchEnd = listCount;
        } else {
            searchUrl = url + 'access=p&output=xml_no_dtd&ie=UTF-8&oe=UTF-8&proxystylesheet=' + frontEnd + '&client=' + frontEnd + '&q=' + query + '&num=' + numSearchResults + '&getfields=*&site=' + site + '&rc=0&start=' + searchPaginationNumber;
            searchStart = searchPaginationNumber;
            searchEnd = searchPaginationNumber + listCount;
        }
        console.log("ajax search start ", searchStart)
        console.log("ajax search searchEnd ", searchEnd)
        console.log(searchUrl)
        $(".results_content").remove();
        $(".js-searchSuggestion").children().remove();
        resultsListHTML = "";

        /************LOCAL Site Search SERVICE***************/
        //var siteSearchResults = $.getJSON("search-gsa.json", function (data) {
        //    siteSearchResults = data.GSP.RES.R;
        //    var sitSearchResultsUrl = '.DU';
        //    var sitSearchResultsTitle = '.T';
        //    var sitSearchResultsContent = '.S';
        //    console.log(siteSearchResults)
        //    if (siteSearchResults.length != 0) {
        //
        //        $('.form-item__display').removeClass('hidden');
        //        // $(".page-count").removeClass('hidden');
        //        $(".no-results").addClass('hidden');
        //        //results_content is the default component for listing out general results
        //        resultsListHTML += "<div class=\"results_content\">";
        //        for (var i = 0; i < siteSearchResults.length; i++) {
        //            count++;
        //            sitSearchResultsUrl = data.GSP.RES.R[i].DU;
        //            sitSearchResultsTitle = data.GSP.RES.R[i].T;
        //            sitSearchResultsContent = data.GSP.RES.R[i].S;
        //            resultsListHTML += "<div class=\"list__item--no-border\">";
        //            resultsListHTML += "<a class=\"list__item__anchor inline-block\" href=\"" + sitSearchResultsUrl + "\">" + sitSearchResultsTitle + "</a>";
        //            resultsListHTML += "<p>" + sitSearchResultsContent + "</p>";
        //            resultsListHTML += "</div>";
        //        }
        //        resultsListHTML += "</div>";
        //    } else {
        //        $('.form-item__display').removeClass('hidden');
        //        $(".page-count").addClass('hidden');
        //        $(".no-results").removeClass('hidden');
        //    }
        //    $(resultsListHTML).insertAfter($(".search-results-container__correction-text"));
        //    ServicesAPI.createPagination(count);
        //});
        /************LOCAL Site Search SERVICE***************/

        /************LIVE Site Search SERVICE***************/
        if(didYouMean){
            console.log("suggestions text true")
            $.ajax({
                url: searchUrl,
                dataType: 'json',
                type: 'GET',
                async: false,
                contentType: 'application/x-www-form-urlencoded',
                processData: false,
                success: function (data) {
                    console.log(data)
                    if (data.GSP.hasOwnProperty("RES")) {
                        $(".form-item__display").show();
                        $(".page-count").removeClass('hidden');
                        $(".search-results-container__correction-text").removeClass("hidden");
                        totalSearchResults = data.GSP.RES.M;
                        console.log(totalSearchResults)
                        var siteSearchResults = data.GSP.RES.R;
                        var sitSearchResultsUrl;
                        var sitSearchResultsTitle;
                        var sitSearchResultsContent;
                        if (siteSearchResults.length != 0) {
                            var correctionHtml = '<a href="#">' + didYouMean + '</a>';
                            $(".js-searchSuggestion").append(correctionHtml);
                            $('.form-item__display').removeClass('hidden');
                            // $(".page-count").removeClass('hidden');
                            $(".no-results").addClass('hidden');
                            //results_content is the default component for listing out general results
                            resultsListHTML += "<div class=\"results_content\">";
                            for (var i = 0; i < siteSearchResults.length; i++) {
                                count++;
                                sitSearchResultsUrl = data.GSP.RES.R[i].DU;
                                sitSearchResultsTitle = data.GSP.RES.R[i].T;
                                sitSearchResultsContent = data.GSP.RES.R[i].S;
                                resultsListHTML += "<div class=\"list__item--no-border\">";
                                resultsListHTML += "<a class=\"list__item__anchor inline-block\" href=\"" + sitSearchResultsUrl + "\">" + sitSearchResultsTitle + "</a>";
                                resultsListHTML += "<p>" + sitSearchResultsContent + "</p>";
                                resultsListHTML += "</div>";
                            }
                            resultsListHTML += "</div>";
                        }
                        didYouMean = null;
                    } else {
                        $('.form-item__display').addClass('hidden');
                        $(".page-count").addClass('hidden');
                        $(".no-results").removeClass('hidden');
                        totalSearchResults = 0;
                    }
                    $(resultsListHTML).insertAfter($(".search-results-container__correction-text"));
                    ServicesAPI.createPaginationSearch(totalSearchResults);
                },
                error: function (e) {
                    ServicesAPI.showSorryUnableToLocateMessage();
                },
                timeout: 30000
            });
        }else{
            console.log("false")
            $.ajax({
                url: searchUrl,
                dataType: 'json',
                type: 'GET',
                async: false,
                contentType: 'application/x-www-form-urlencoded',
                processData: false,
                success: function (data) {
                    console.log(data)
                    if (data.GSP.hasOwnProperty("Spelling")) {
                        $(".form-item__display").hide();
                        $(".search-results-container__correction-text").removeClass("hidden");
                        var correctSpelling = data.GSP.Spelling.Suggestion[0].qe;
                        var newchar = ' '
                        correctSpelling = correctSpelling.split('+OR+').join(newchar);
                        console.log(correctSpelling)
                        $(".no-results").addClass('hidden');
                        var correctionHtml = '<a href="#">' + correctSpelling+ '</a>';
                        $(".js-searchSuggestion").append(correctionHtml);
                        didYouMean = correctSpelling;
                    } else if (data.GSP.hasOwnProperty("RES")) {
                        $(".form-item__display").show();
                        $(".page-count").removeClass('hidden');
                        $(".search-results-container__correction-text").addClass("hidden");
                        totalSearchResults = data.GSP.RES.M;
                        console.log(totalSearchResults)
                        var siteSearchResults = data.GSP.RES.R;
                        var sitSearchResultsUrl;
                        var sitSearchResultsTitle;
                        var sitSearchResultsContent;
                        if (siteSearchResults.length != 0) {

                            $('.form-item__display').removeClass('hidden');
                            // $(".page-count").removeClass('hidden');
                            $(".no-results").addClass('hidden');
                            //results_content is the default component for listing out general results
                            resultsListHTML += "<div class=\"results_content\">";
                            for (var i = 0; i < siteSearchResults.length; i++) {
                                count++;
                                sitSearchResultsUrl = data.GSP.RES.R[i].DU;
                                sitSearchResultsTitle = data.GSP.RES.R[i].T;
                                sitSearchResultsContent = data.GSP.RES.R[i].S;
                                resultsListHTML += "<div class=\"list__item--no-border\">";
                                resultsListHTML += "<a class=\"list__item__anchor inline-block\" href=\"" + sitSearchResultsUrl + "\">" + sitSearchResultsTitle + "</a>";
                                resultsListHTML += "<p>" + sitSearchResultsContent + "</p>";
                                resultsListHTML += "</div>";
                            }
                            resultsListHTML += "</div>";
                        }
                    } else {
                        $('.form-item__display').addClass('hidden');
                        $(".page-count").addClass('hidden');
                        $(".no-results").removeClass('hidden');
                        totalSearchResults = 0;
                    }
                    $(resultsListHTML).insertAfter($(".search-results-container__correction-text"));
                    ServicesAPI.createPaginationSearch(totalSearchResults);
                },
                error: function (e) {
                    ServicesAPI.showSorryUnableToLocateMessage();
                },
                timeout: 30000
            });
        }

        /************LIVE SERVICE***************/
    },
    legacySearch: function (serchQuery) {
        var str = "https://www.metlife.com/searchresults?query=";
        var val2 = "&spell_check=true&and_on=Y&sel_path=metlife%2Findividual%2Findex.html&remoteUser=";
        str += serchQuery + val2;
        window.location.href = str;
    },
    redirectToSearchResultsPage: function (input) {
        if ($('.searchResultsInputSR').length > 0) {
            $('.searchResultsInputSR').val(input);
            $('.search-filter__button').click();
            clear_suggestions();
        } else {
            var searchTerm = sessionStorage.setItem("searchTerm", input);
            var url = $("#metSearchForm").attr("data-path-to-search-results");
            window.location.href = url;
        }
    },
    searchResultsPageLoad: function () {
        var cov = sessionStorage.getItem("searchTerm");
        if (sessionStorage.getItem("searchTerm") !== null) {
            if ($(".js-searchTextBox").css("display") !== " none") {

                $(".js-searchTextBox").val(sessionStorage.getItem("searchTerm"));
                $(".js-searchSubmit").click();
            }
        }

    },
    pressBackQuery: function () {
        var month = sessionStorage.getItem("press_month");
        var year = sessionStorage.getItem("press_year");
        var search = sessionStorage.getItem("press_search");
        if (month != null && month != null && year != null) {
            $('#list_month').val(month);
            $('#list_year').val(year);
            $('#list_topics').val(search);
        }
        sessionStorage.removeItem("press_back");
        sessionStorage.removeItem("press_month");
        sessionStorage.removeItem("press_year");
        sessionStorage.removeItem("press_search");
    },
    blogsServiceCall: function (input, searchType) {
        resultsListHTML = "";
        $(".results_content").remove();
        count = 0;
        var url = input + "?" + searchType;

        /*********LOCAL Blog SERVICE***************/
        //var blogSearchResults = $.getJSON("blog.json", function (data) {
        //    blogSearchResults = data.response.blogs;
        //    resultsListHTML += "<div class=\"results_content\">";
        //    if (blogSearchResults.length != 0) {
        //        for (var i = 0; i < blogSearchResults.length; i++) {
        //            count++
        //            resultsListHTML += "<div class=\"blog-list__article \">";
        //            resultsListHTML += "<div class=\"blog-list__img \">";
        //            resultsListHTML += "<img src=\"" + blogSearchResults[i].imgsource + "\" alt=\"" + blogSearchResults[i].alttext + "\" class=\"enlarge\">";
        //            resultsListHTML += "</div>";
        //            resultsListHTML += "<div class=\"blog-list__text\">";
        //            resultsListHTML += "<h5>" + blogSearchResults[i].title + "</h5>";
        //            resultsListHTML += "<span class=\"blog-list__date blog-list__category\">" + blogSearchResults[i].date + "</span>";
        //            resultsListHTML += "<span class=\"blog-list__category\">" + blogSearchResults[i].tags + "</span>";
        //            resultsListHTML += "<span class=\"blog-list__description\">" + blogSearchResults[i].description + " ";
        //            if (blogSearchResults[i].link != null && blogSearchResults[i].link != undefined && blogSearchResults[i].link !== "" && blogSearchResults[i].link !== " ") {
        //                resultsListHTML += "<a href=\"" + blogSearchResults[i].link + "\">" + blogSearchResults[i].linktext + "</a>"
        //            }
        //            resultsListHTML += "</span>";
        //            resultsListHTML += "</div>";
        //            resultsListHTML += "<div class=\"clearfix\"></div>";
        //            resultsListHTML += "</div>";
        //        }
        //    }
        //    resultsListHTML += "</div>";
        //    $(resultsListHTML).insertBefore($(".results_pagination"));
        //    ServicesAPI.createPagination(count);
        //});
        /************LOCAL Blog SERVICE***************/

        /************LIVE Blog SERVICE***************/
        $.ajax({
            url: url,
            contentType: "application/json; charset=utf-8",
            async: true,
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                var blogSearchResults = data.response.blogs;
                resultsListHTML += "<div class=\"results_content\">";
                if (blogSearchResults.length != 0) {
                    for (var i = 0; i < blogSearchResults.length; i++) {
                        count++
                        resultsListHTML += "<div class=\"blog-list__article \">";
                        resultsListHTML += "<div class=\"blog-list__img \">";
                        resultsListHTML += "<img src=\"" + blogSearchResults[i].imgsource + "\" alt=\"" + blogSearchResults[i].alttext + "\" class=\"enlarge\">";
                        resultsListHTML += "</div>";
                        resultsListHTML += "<div class=\"blog-list__text\">";
                        resultsListHTML += "<h5>" + blogSearchResults[i].title + "</h5>";
                        resultsListHTML += "<span class=\"blog-list__date blog-list__category\">" + blogSearchResults[i].date + "</span>";
                        resultsListHTML += "<span class=\"blog-list__category\">" + blogSearchResults[i].tags + "</span>";
                        resultsListHTML += "<span class=\"blog-list__description\">" + blogSearchResults[i].description + " ";
                        if (blogSearchResults[i].link != null && blogSearchResults[i].link != undefined && blogSearchResults[i].link !== "" && blogSearchResults[i].link !== " ") {
                            resultsListHTML += "<a href=\"" + blogSearchResults[i].link + "\">" + blogSearchResults[i].linktext + "</a>"
                        }
                        resultsListHTML += "</span>";
                        resultsListHTML += "</div>";
                        resultsListHTML += "<div class=\"clearfix\"></div>";
                        resultsListHTML += "</div>";
                    }
                }
                resultsListHTML += "</div>";
                $(resultsListHTML).insertBefore($(".results_pagination"));
                ServicesAPI.createPagination(count);
            },
            error: function (e) {
                console.log('error ', e);
            },
            timeout: 30000
        });
        /************LIVE Blog SERVICE***************/
    },
    formsLibraryServiceCall: function (input) {
        resultsListHTML = "";
        $(".results_content").remove();
        count = 0;
        var url = input;
        /*********LOCAL Forms SERVICE***************/
        //var formsSearchResults = $.getJSON("forms.json", function (data) {
        //    formsSearchResults = data.response.docs;
        //    var metaDataResults = data.response.metaData[0];
        //    resultsListHTML += "<div class=\"results_content\">";
        //    if (formsSearchResults.length != 0) {
        //        for (var i = 0; i < formsSearchResults.length; i++) {
        //            count++;
        //            if (formsSearchResults[i].eform_url != null && formsSearchResults[i].eform_url != undefined && formsSearchResults[i].eform_url != "" && formsSearchResults[i].eform_url != " ") {
        //                resultsListHTML += "<div class=\"row list__item \">";
        //                if (formsSearchResults[i].file_category_title != null && formsSearchResults[i].file_category_title != undefined) {
        //                    resultsListHTML += "<span class=\"list__item__date\">" + formsSearchResults[i].file_category_title + "</span>";
        //                }
        //                if (formsSearchResults[i].file_title != null && formsSearchResults[i].file_title != undefined && formsSearchResults[i].file_description != null && formsSearchResults[i].file_description != undefined) {
        //                    resultsListHTML += " <div class=\"list__item--left\">";
        //                    resultsListHTML += "<a href=\"" + formsSearchResults[i].eform_url + "\" class=\"list__item__title text-bold\">" + formsSearchResults[i].file_title + "</a>";
        //                    resultsListHTML += "<p>" + formsSearchResults[i].file_description + "</p>";
        //                    resultsListHTML += "</div>";
        //                }
        //                if (formsSearchResults[i].file_type != null && formsSearchResults[i].file_type != undefined && formsSearchResults[i].file_type !== "" && formsSearchResults[i].file_type !== " ") {
        //                    resultsListHTML += "<div class=\"list__item--right\">";
        //                    resultsListHTML += "<a href=\"" + formsSearchResults[i].eform_url + "\">";
        //                    if (formsSearchResults[i].file_type.toLowerCase() == "doc" || formsSearchResults[i].file_type.toLowerCase() == "docx") {
        //                        resultsListHTML += "<img src=\"images/icon_word.png\" alt=\"Document icon\" class=\"document-icon\">";
        //                    } else if (formsSearchResults[i].file_type.toLowerCase() == "ppt" || formsSearchResults[i].file_type.toLowerCase() == "pptx") {
        //                        resultsListHTML += "<img src=\"images/icon_powerpoint.png\" alt=\"powerpoint icon\" class=\"document-icon\">";
        //                    } else if (formsSearchResults[i].file_type.toLowerCase() == "xls" || formsSearchResults[i].file_type.toLowerCase() == "xlsx") {
        //                        resultsListHTML += "<img src=\"images/icon_excel.png\" alt=\"Excel icon\" class=\"document-icon\">";
        //                    } else if (formsSearchResults[i].file_type.toLowerCase() == "pdf") {
        //                        resultsListHTML += "<img src=\"images/icon_pdf.png\" alt=\"PDF icon\" class=\"document-icon\">";
        //                    }
        //                    resultsListHTML += "</a>";
        //                    resultsListHTML += "<a href=\"" + formsSearchResults[i].eform_url + "\" class=\"hidden-xs download-link\">" + metaDataResults.download_text + "</a>";
        //                    resultsListHTML += "<span class=\"block document-size\">(" + formsSearchResults[i].file_type.toUpperCase() + "-" + (Math.round((formsSearchResults[i].eform_size) / 1024)) + " KB)</span>";
        //                    resultsListHTML += "</div>";
        //                }
        //                resultsListHTML += "<span class=\"clearfix\"></span>";
        //                resultsListHTML += "</div>";
        //
        //
        //            }
        //
        //            if (formsSearchResults[i].file_url != null && formsSearchResults[i].file_url != undefined && formsSearchResults[i].file_url != "" && formsSearchResults[i].file_url != " ") {
        //                resultsListHTML += "<div class=\"row list__item \">";
        //                if (formsSearchResults[i].file_category_title != null && formsSearchResults[i].file_category_title != undefined) {
        //                    resultsListHTML += "<span class=\"list__item__date\">" + formsSearchResults[i].file_category_title + "</span>";
        //                }
        //                if (formsSearchResults[i].file_title != null && formsSearchResults[i].file_title != undefined && formsSearchResults[i].file_description != null && formsSearchResults[i].file_description != undefined) {
        //                    resultsListHTML += " <div class=\"list__item--left\">";
        //                    resultsListHTML += "<a href=\"" + formsSearchResults[i].file_url + "\" class=\"list__item__title text-bold\">" + formsSearchResults[i].file_title + "</a>";
        //                    resultsListHTML += "<p>" + formsSearchResults[i].file_description + "</p>";
        //                    resultsListHTML += "</div>";
        //                }
        //                if (formsSearchResults[i].file_type != null && formsSearchResults[i].file_type != undefined && formsSearchResults[i].file_type !== "" && formsSearchResults[i].file_type !== " " && formsSearchResults[i].file_size != null && formsSearchResults[i].file_size != undefined && formsSearchResults[i].file_size != "" && formsSearchResults[i].file_size != " ") {
        //                    resultsListHTML += "<div class=\"list__item--right\">";
        //                    resultsListHTML += "<a href=\"" + formsSearchResults[i].file_url + "\">";
        //                    if (formsSearchResults[i].file_type.toLowerCase() == "doc" || formsSearchResults[i].file_type.toLowerCase() == "docx") {
        //                        resultsListHTML += "<img src=\"images/icon_word.png\" alt=\"Document icon\" class=\"document-icon\">";
        //                    } else if (formsSearchResults[i].file_type.toLowerCase() == "ppt" || formsSearchResults[i].file_type.toLowerCase() == "pptx") {
        //                        resultsListHTML += "<img src=\"images/icon_powerpoint.png\" alt=\"powerpoint icon\" class=\"document-icon\">";
        //                    } else if (formsSearchResults[i].file_type.toLowerCase() == "xls" || formsSearchResults[i].file_type.toLowerCase() == "xlsx") {
        //                        resultsListHTML += "<img src=\"images/icon_excel.png\" alt=\"Excel icon\" class=\"document-icon\">";
        //                    } else if (formsSearchResults[i].file_type.toLowerCase() == "pdf") {
        //                        resultsListHTML += "<img src=\"images/icon_pdf.png\" alt=\"PDF icon\" class=\"document-icon\">";
        //                    }
        //                    resultsListHTML += "</a>";
        //                    resultsListHTML += "<a href=\"" + formsSearchResults[i].file_url + "\" class=\"hidden-xs download-link\">" + metaDataResults.download_text + "</a>";
        //                    resultsListHTML += "<span class=\"block document-size\">(" + formsSearchResults[i].file_type.toUpperCase() + "-" + (Math.round((formsSearchResults[i].file_size) / 1024)) + " KB)</span>";
        //                    resultsListHTML += "</div>";
        //                }
        //                resultsListHTML += "<span class=\"clearfix\"></span>";
        //                resultsListHTML += "</div>";
        //            }
        //        }
        //    }
        //    resultsListHTML += "</div>";
        //    $(resultsListHTML).insertAfter($(".lists"));
        //    ServicesAPI.createPagination(count);
        //});
        /************LOCAL Forms SERVICE***************/

        /************LIVE Forms SERVICE***************/
        $.ajax({
            url: url,
            contentType: "application/json; charset=utf-8",
            async: true,
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                var formsSearchResults = data.response.docs;
                var metaDataResults = data.response.metaData[0];

                resultsListHTML += "<div class=\"results_content\">";
                if (formsSearchResults.length != 0) {
                    for (var i = 0; i < formsSearchResults.length; i++) {
                        count++
                        if (formsSearchResults[i].eform_url != null && formsSearchResults[i].eform_url != undefined && formsSearchResults[i].eform_url != "" && formsSearchResults[i].eform_url != " ") {
                            resultsListHTML += "<div class=\"row list__item \">";
                            if (formsSearchResults[i].file_category_title != null && formsSearchResults[i].file_category_title != undefined) {
                                resultsListHTML += "<span class=\"list__item__date\">" + formsSearchResults[i].file_category_title + "</span>";
                            }
                            if (formsSearchResults[i].file_title != null && formsSearchResults[i].file_title != undefined && formsSearchResults[i].file_description != null && formsSearchResults[i].file_description != undefined) {
                                resultsListHTML += " <div class=\"list__item--left\">";
                                resultsListHTML += "<a href=\"" + formsSearchResults[i].eform_url + "\" class=\"list__item__title text-bold\">" + formsSearchResults[i].file_title + "</a>";
                                resultsListHTML += "<p>" + formsSearchResults[i].file_description + "</p>";
                                resultsListHTML += "</div>";
                            }
                            if (formsSearchResults[i].file_type != null && formsSearchResults[i].file_type != undefined && formsSearchResults[i].file_type !== "" && formsSearchResults[i].file_type !== " ") {
                                resultsListHTML += "<div class=\"list__item--right\">";
                                resultsListHTML += "<a href=\"" + formsSearchResults[i].eform_url + "\">";
                                if (formsSearchResults[i].file_type.toLowerCase() == "doc" || formsSearchResults[i].file_type.toLowerCase() == "docx") {
                                    resultsListHTML += "<img src=\"/static/images/icon_word.png\" alt=\"Document icon\" class=\"document-icon\">";
                                } else if (formsSearchResults[i].file_type.toLowerCase() == "ppt" || formsSearchResults[i].file_type.toLowerCase() == "pptx") {
                                    resultsListHTML += "<img src=\"/static/images/icon_powerpoint.png\" alt=\"powerpoint icon\" class=\"document-icon\">";
                                } else if (formsSearchResults[i].file_type.toLowerCase() == "xls" || formsSearchResults[i].file_type.toLowerCase() == "xlsx") {
                                    resultsListHTML += "<img src=\"/static/images/icon_excel.png\" alt=\"Excel icon\" class=\"document-icon\">";
                                } else if (formsSearchResults[i].file_type.toLowerCase() == "pdf") {
                                    resultsListHTML += "<img src=\"/static/images/icon_pdf.png\" alt=\"PDF icon\" class=\"document-icon\">";
                                }
                                resultsListHTML += "</a>";
                                resultsListHTML += "<a href=\"" + formsSearchResults[i].eform_url + "\" class=\"hidden-xs download-link\">" + metaDataResults.download_text + "</a>";
                                resultsListHTML += "<span class=\"block document-size\">(" + formsSearchResults[i].file_type.toUpperCase() + "-" + (Math.round((formsSearchResults[i].eform_size) / 1024)) + " KB)</span>";
                                resultsListHTML += "</div>";
                            }
                            resultsListHTML += "<span class=\"clearfix\"></span>";
                            resultsListHTML += "</div>";


                        }

                        if (formsSearchResults[i].file_url != null && formsSearchResults[i].file_url != undefined && formsSearchResults[i].file_url != "" && formsSearchResults[i].file_url != " ") {
                            resultsListHTML += "<div class=\"row list__item \">";
                            if (formsSearchResults[i].file_category_title != null && formsSearchResults[i].file_category_title != undefined) {
                                resultsListHTML += "<span class=\"list__item__date\">" + formsSearchResults[i].file_category_title + "</span>";
                            }
                            if (formsSearchResults[i].file_title != null && formsSearchResults[i].file_title != undefined && formsSearchResults[i].file_description != null && formsSearchResults[i].file_description != undefined) {
                                resultsListHTML += " <div class=\"list__item--left\">";
                                resultsListHTML += "<a href=\"" + formsSearchResults[i].file_url + "\" class=\"list__item__title text-bold\">" + formsSearchResults[i].file_title + "</a>";
                                resultsListHTML += "<p>" + formsSearchResults[i].file_description + "</p>";
                                resultsListHTML += "</div>";
                            }
                            if (formsSearchResults[i].file_type != null && formsSearchResults[i].file_type != undefined && formsSearchResults[i].file_type !== "" && formsSearchResults[i].file_type !== " " && formsSearchResults[i].file_size != null && formsSearchResults[i].file_size != undefined && formsSearchResults[i].file_size != "" && formsSearchResults[i].file_size != " ") {
                                resultsListHTML += "<div class=\"list__item--right\">";
                                resultsListHTML += "<a href=\"" + formsSearchResults[i].file_url + "\">";
                                if (formsSearchResults[i].file_type.toLowerCase() == "doc" || formsSearchResults[i].file_type.toLowerCase() == "docx") {
                                    resultsListHTML += "<img src=\"/static/images/icon_word.png\" alt=\"Document icon\" class=\"document-icon\">";
                                } else if (formsSearchResults[i].file_type.toLowerCase() == "ppt" || formsSearchResults[i].file_type.toLowerCase() == "pptx") {
                                    resultsListHTML += "<img src=\"/static/images/icon_powerpoint.png\" alt=\"powerpoint icon\" class=\"document-icon\">";
                                } else if (formsSearchResults[i].file_type.toLowerCase() == "xls" || formsSearchResults[i].file_type.toLowerCase() == "xlsx") {
                                    resultsListHTML += "<img src=\"/static/images/icon_excel.png\" alt=\"Excel icon\" class=\"document-icon\">";
                                } else if (formsSearchResults[i].file_type.toLowerCase() == "pdf") {
                                    resultsListHTML += "<img src=\"/static/images/icon_pdf.png\" alt=\"PDF icon\" class=\"document-icon\">";
                                }
                                resultsListHTML += "</a>";
                                resultsListHTML += "<a href=\"" + formsSearchResults[i].file_url + "\" class=\"hidden-xs download-link\">" + metaDataResults.download_text + "</a>";
                                resultsListHTML += "<span class=\"block document-size\">(" + formsSearchResults[i].file_type.toUpperCase() + "-" + (Math.round((formsSearchResults[i].file_size) / 1024)) + " KB)</span>";
                                resultsListHTML += "</div>";
                            }
                            resultsListHTML += "<span class=\"clearfix\"></span>";
                            resultsListHTML += "</div>";
                        }
                    }
                }
                resultsListHTML += "</div>";
                $(resultsListHTML).insertAfter($(".lists"));
                ServicesAPI.createPagination(count);
            },
            error: function (e) {
                console.log('error ', e);
            },
            timeout: 30000
        });
        /************LIVE Forms SERVICE***************/
    },
    clearOverlays: function () {
        for (var i = 0; i < markersArray.length; i++) {
            markersArray[i].setMap(null);
        }
        for (var i = 0; i < dir_markerArray.length; i++) {
            dir_markerArray[i].setMap(null);
        }
    },
    initializeFindAnOffice: function () {
        var myOptions = {
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                position: google.maps.ControlPosition.RIGHT_BOTTOM,
                mapTypeIds: [
                    google.maps.MapTypeId.ROADMAP,
                    google.maps.MapTypeId.SATELLITE
                ]
            },
            zoomControl: true,
            zoomControlOptions: {
                position: google.maps.ControlPosition.TOP_LEFT
            },
            streetViewControl: true,
            streetViewControlOptions: {
                position: google.maps.ControlPosition.LEFT_TOP
            },
            scaleControl: false,
            scrollwheel: true,
            zoom: 10
        };

        map = new google.maps.Map(document.getElementById("googleMapsContainer"), myOptions);
        ServicesAPI.autocompleteOn();
    },
    autocompleteOn: function () {
        if (typeof countryCode !== 'undefined') {
            var options = {
                componentRestrictions: {country: countryCode}
            };
            googleautocomplete = new google.maps.places.Autocomplete(document.getElementsByClassName("cta_search")[0], options);
        } else {
            googleautocomplete = new google.maps.places.Autocomplete(document.getElementsByClassName("cta_search")[0]);
        }
        googleautocomplete.bindTo('bounds', map);
        google.maps.event.addListener(googleautocomplete, 'place_changed', function () {
            var place = googleautocomplete.getPlace();
            if (!place || !place.geometry) {

            }
        });
    },
    initializeGoogleMapObject: function () {
        $('#googleMapsContainer').removeClass('hidden');
        var myOptions = {
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                position: google.maps.ControlPosition.TOP_RIGHT,
                mapTypeIds: [
                    google.maps.MapTypeId.ROADMAP,
                    google.maps.MapTypeId.SATELLITE
                ]
            },
            zoomControl: true,
            zoomControlOptions: {
                position: google.maps.ControlPosition.TOP_LEFT
            },
            streetViewControl: true,
            streetViewControlOptions: {
                position: google.maps.ControlPosition.LEFT_TOP
            },
            scaleControl: false,
            scrollwheel: true,
            zoom: 10
        };

        map = new google.maps.Map(document.getElementById("googleMapsContainer"), myOptions);
    },
    initializeDrivingGoogleMapObject: function () {
        $('#googleDrivingMapsContainer').removeClass('hidden');
        var myOptions = {
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                position: google.maps.ControlPosition.TOP_RIGHT,
                mapTypeIds: [
                    google.maps.MapTypeId.ROADMAP,
                    google.maps.MapTypeId.SATELLITE
                ]
            },
            zoomControl: true,
            zoomControlOptions: {
                position: google.maps.ControlPosition.TOP_LEFT
            },
            streetViewControl: true,
            streetViewControlOptions: {
                position: google.maps.ControlPosition.LEFT_TOP
            },
            scaleControl: false,
            scrollwheel: true,
            zoom: 10
        };
        map = new google.maps.Map(document.getElementById("googleDrivingMapsContainer"), myOptions);
        if (typeof countryCode !== 'undefined') {
            var options = {
                componentRestrictions: {country: countryCode}
            };
            googleautocomplete = new google.maps.places.Autocomplete(document.getElementsByClassName('from-address')[0], options);
        } else {
            googleautocomplete = new google.maps.places.Autocomplete(document.getElementsByClassName('from-address')[0]);
        }
        googleautocomplete.bindTo('bounds', map);
        google.maps.event.addListener(googleautocomplete, 'place_changed', function () {
            var place = googleautocomplete.getPlace();
            if (!place || !place.geometry) {

            }
        });
    },
    gmapsAutoCompleteInit: function () {
        if (typeof countryCode !== 'undefined') {
            var options = {
                componentRestrictions: {country: countryCode}
            };
            $('.find-office__zip-city-state, .cta_search').each(function () {
                new google.maps.places.Autocomplete($(this)[0], options);
            });
        } else {
            $('.find-office__zip-city-state, .cta_search').each(function () {
                new google.maps.places.Autocomplete($(this)[0]);
            });
        }
    },
    showLocation: function () {
        $('.fax-results__container, .maps-button, .get-directions-form, .find-an-x-search__container, .cta_search__container').removeClass('hidden');
        $('.driving-direction-container, #googleDrivingMapsContainer').addClass('hidden');
        if (dir_to_flag == true) {
            $('.get-directions-form .from-address').val('');
        }
        var endsWith = function (str, suffix) {
            return str.indexOf(suffix, str.length - suffix.length) !== -1;
        };
        var startsWith = function (string, searchString, position) {
            position = position || 0;
            return string.substr(position, searchString.length) === searchString;

        };
        $('.errorSpan.error_zip_code').html($('.errorMsgtext_no_office_found').text());
        ServicesAPI.initializeGoogleMapObject();
        var address;
        var zip = sessionStorage.getItem("faoZipCode");
        if (document.referrer == "" || endsWith(document.referrer, "/cf") || startsWith(document.referrer, document.origin + document.location.pathname)) {
            address = $('.find-an-x-search__container .cta_search').val();
        } else {
            $('.find-an-x-search__container .cta_search').val(zip);
            $('.find-an-x-search__container .cta_search').text(zip);
            address = $('.find-an-x-search__container .cta_search').val();
        }
        $('.errorSpan.error_zip_code').addClass('hidden');
        if (address != null && address != '' && address != undefined && address != ' ') {
            geocoder.geocode({"address": address}, function (response, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    ServicesAPI.addAddressToMap(response, status);

                } else {
                    ServicesAPI.resetMap();
                    ServicesAPI.showSorryUnableToLocateMessage();

                }
            });
        } else {
            ServicesAPI.resetMap();

        }
    },
    addAddressToMap: function (response, status) {
        ServicesAPI.clearOverlays();
        if (!response || status != google.maps.GeocoderStatus.OK) {
            ServicesAPI.showSorryUnableToLocateMessage();
        } else {
            var point = new google.maps.LatLng(response[0].geometry.location.lat(), response[0].geometry.location.lng());
            startPointGeoCode = point;
            // Reset the Map
            ServicesAPI.resetMap();

            // Set the GMarker based on the geocode (GLatLng)

            startPointGMarker = ServicesAPI.createStartPointMarker(startPointGeoCode);

            // Display progress indicator before retreiving offices
            //showProgressIndicator();

            // Now get the Met offices for this address
            ServicesAPI.getMetOffices();
        }
    },
    resetMap: function () {
        // Clear any existing overlays
        ServicesAPI.clearOverlays();
        directionsDisplay.setMap(null);
        // Pan the map back to the original start location
        // *** Must center map, before adding overlay

        map.setCenter(startPointGeoCode, 9);

    },
    getMetOffices: function () {

        var latitude = startPointGeoCode.lat();
        var longitude = startPointGeoCode.lng();
        var baseServiceUrl = $("[data-fao-url]").attr("data-fao-url");
        var faoMarket = '';
        var directionButton = $('.directions_button').attr("data-fao-market");
        var officeSubmitButton = $(".find-office__submit").attr("data-fao-market");
        if (directionButton !== undefined && directionButton !== "" && directionButton !== " ") {
            faoMarket = directionButton;
        }
        if (officeSubmitButton !== undefined && officeSubmitButton !== "" && officeSubmitButton !== " ") {
            faoMarket = officeSubmitButton;
        }
        radiusInMiles = $('.find_an_office_radius').val();
        if (faoMarket.toLowerCase() == "us") {
            specialty = 'AUTO%2C+HOME%2C+RENTERS%2C+ETC...';
            specialtyDisplay = 'Auto, Home, Renters, ETC...';
            var serviceUrl = ServicesAPI.buildServiceUrlUS(baseServiceUrl, latitude, longitude, radiusInMiles, specialty);
        } else {
            if ($('.different_services_dropdown').length > 0) {
                specialty = encodeURIComponent($('.different_services_dropdown').val());
                specialtyDisplay = $('.different_services_dropdown').val();
            } else {
                specialtyDisplay = "";
                specialty = "";
            }
            var serviceUrl = ServicesAPI.buildServiceUrl(baseServiceUrl, latitude, longitude, radiusInMiles, specialty);
        }
        console.log(serviceUrl);

        /************LOCAL FAO SERVICE***************/
        //var faoSearchResults = $.getJSON("fao.json", function (data) {
        //    ServicesAPI.generateOfficeItems(data);
        //    ServicesAPI.createPagination(count);
        //});
        /************LOCAL FAO SERVICE***************/

        /************LIVE FAO SERVICE***************/
        $.ajax({
            type: 'GET',
            url: serviceUrl,
            success: function (data) {
                ServicesAPI.generateOfficeItems(data)
            },
            error: function () {
                ServicesAPI.handleServiceError()
            }
        });
        /************LIVE FAO SERVICE***************/
    },
    generateOfficeItems: function (responseObject) {
        count = 0;
        var resultsListHTML = "";
        markersArray = [];
        $('.results_error_info,.results_pagination').addClass('hidden');
        if (responseObject.facilities.length != 0) {
            $('.find_an_office_pagecount_wrap,.google_maps_container,.hidden_maps_container_button').removeClass('hidden');
            $('.display_container').removeClass('hidden');
            $(".page-count").removeClass('hidden');
            $(".no-results").addClass('hidden');
            // Now you can just use the object
            var metOfficeArray = responseObject.facilities;
            $(".results_content").remove();
            // Create the HTML for the Office results in the left panel
            resultsListHTML += "<div class=\"results_content\">";
            // Generate the markers for the map and also generate the markup for the results list
            for (var i = 0; i < metOfficeArray.length; i++) {
                count++;
                var fclt_officeName = metOfficeArray[i].fclt_name;
                var fclt_addr = metOfficeArray[i].fclt_addr;
                var fclt_city = metOfficeArray[i].fclt_city;
                var fclt_state = metOfficeArray[i].fclt_state;
                var fclt_zip = metOfficeArray[i].fclt_zip;
                var fclt_phone = metOfficeArray[i].tel_no;
                var fclt_fax = metOfficeArray[i].fax_no;
                var fclt_lat = metOfficeArray[i].fclt_lattd;
                var fclt_lng = metOfficeArray[i].fclt_longtd;
                var fclt_ctgy = metOfficeArray[i].fclt_ctgy;
                var fclt_distance = metOfficeArray[i].fclt_distance;
                var fclt_url = metOfficeArray[i].fclt_url;
                // Additional fields
                var fclt_alt_phone = metOfficeArray[i].fclt_alt_phone;
                var fclt_email = metOfficeArray[i].fclt_email;
                var fclt_secondary_email = metOfficeArray[i].fclt_secondary_email;
                var fclt_main_contact = metOfficeArray[i].fclt_main_contact;
                var fclt_hours = metOfficeArray[i].fclt_hours;
                var fclt_info = metOfficeArray[i].fclt_info;
                var fclt_gender = metOfficeArray[i].fclt_gender;
                var fclt_languages = metOfficeArray[i].fclt_languages;
                var fclt_education = metOfficeArray[i].fclt_education;
                var label_phone = $(".label_phone").text();
                var label_alt_phone = $(".label_alt_phone").text();
                var label_fax = $(".label_fax").text();
                var label_email = $(".label_email").text();
                var label_sec_email = $(".label_sec_email").text();
                var label_contact = $(".label_contact").text();
                var label_hours = $(".label_hours").text();
                var label_info = $(".label_info").text();
                var label_education = $(".label_education").text();
                var label_languages = $(".label_languages").text();
                var label_gender = $(".label_gender").text();
                var label_radius_unit = $(".label_radius_unit").text();
                if (label_radius_unit == "mi")
                    fclt_distance = parseInt(fclt_distance) / 1.609344;
                var strDestination = "";
                var destParams = "";
                if (fclt_addr != undefined) {
                    strDestination = strDestination + fclt_addr + ", ";
                }
                if (fclt_city != undefined) {
                    strDestination = strDestination + fclt_city + ", ";
                }
                if (fclt_state != undefined) {
                    strDestination = strDestination + fclt_state + ", ";
                }
                if (fclt_zip != undefined) {
                    strDestination = strDestination + fclt_zip;
                }
                destParams = strDestination;
                if (fclt_lat != undefined) {
                    destParams = destParams + ":" + fclt_lat + ","
                }
                if (fclt_lng != undefined) {
                    destParams = destParams + fclt_lng;
                }
                var temp = strDestination.slice(-2);
                ;
                if (temp == ", ") {
                    strDestination = strDestination.substring(0, strDestination.length - 2);
                }
                var strDestination = fclt_addr + ", " + fclt_city + ", " + fclt_state + ", " + fclt_zip;
                resultsListHTML += "<div class=\"results_office_result\"><p class=\"results_office_count\">" + (i + 1) + "</p>";
                resultsListHTML += "<p class=\"results_office_name\">" + fclt_officeName + "</p>";
                resultsListHTML += "<div class=\"results_office_mileage\"><p class=\"results_office_distance\">" + (Math.round(fclt_distance * 100) / 100).toFixed(2) + "</p>";
                resultsListHTML += "<p class=\"results_office_mi\">" + "&nbsp;" + label_radius_unit + "</p></div>";
                if (fclt_education) {
                    if (specialtyDisplay != "") {
                        resultsListHTML += "<p class=\"results_office_type results_office_type_dentist\">" + specialtyDisplay + "</p>";
                    }
                    resultsListHTML += "<p class=\"results_office_get_directions results_office_get_directions_dentist\"><a href='#' onclick=\"ServicesAPI.getDirectionsPanel(\'" + strDestination + "\');return false;\">" + $('.getDirectionsText').text() + "</a></p>";
                    resultsListHTML += "<p class=\"results_office_street_address dentist_left\">" + fclt_addr.toLowerCase() + "</p>";
                    resultsListHTML += "<p class=\"results_office_education dentist_right\">" + label_education + ": " + fclt_education.toLowerCase() + "</p>";
                } else {
                    if (specialtyDisplay != "") {
                        resultsListHTML += "<p class=\"results_office_type\">" + specialtyDisplay + "</p>";
                    }
                    resultsListHTML += "<p class=\"results_office_get_directions\"><a href='#' onclick=\"ServicesAPI.getDirectionsPanel(\'" + strDestination + "\');return false;\">" + $('.getDirectionsText').text() + "</a></p>";
                    resultsListHTML += "<p class=\"results_office_street_address\">" + fclt_addr.toLowerCase() + "</p>";
                }
                if (fclt_languages) {
                    resultsListHTML += "<p class=\"results_office_city_state_zip dentist_left\">"
                    if (fclt_city != null) {
                        resultsListHTML += fclt_city.toLowerCase() + ", ";
                    }
                    if (fclt_state != null) {
                        resultsListHTML += fclt_state.toLowerCase() + " ";
                    }
                    if (fclt_zip != null) {
                        resultsListHTML += fclt_zip.toLowerCase() + " ";
                    }
                    resultsListHTML += "</p>";
                    resultsListHTML += "<p class=\"results_office_languages dentist_right\">" + label_languages + ": " + fclt_languages.toLowerCase() + "</p>";
                } else {
                    resultsListHTML += "<p class=\"results_office_city_state_zip\">"
                    if (fclt_city != null) {
                        resultsListHTML += fclt_city.toLowerCase() + ", ";
                    }
                    if (fclt_state != null) {
                        resultsListHTML += fclt_state.toLowerCase() + " ";
                    }
                    if (fclt_zip != null) {
                        resultsListHTML += fclt_zip.toLowerCase() + " ";
                    }
                    resultsListHTML += "</p>";
                }

                if (fclt_gender) {
                    if (fclt_phone)
                        resultsListHTML += "<p class=\"results_office_phone dentist_left\">" + label_phone + ": <a href='tel:" + fclt_phone.replace(/\./g, '-') + "'>" + fclt_phone.replace(/\./g, '-') + "</a></p>";
                    resultsListHTML += "<p class=\"results_office_gender dentist_right\">" + label_gender + ": " + fclt_gender.toLowerCase() + "</p>";
                } else {
                    if (fclt_phone)
                        resultsListHTML += "<p class=\"results_office_phone\">" + label_phone + ": <a href='tel:" + fclt_phone.replace(/\./g, '-') + "'>" + fclt_phone.replace(/\./g, '-') + "</a></p>";
                }

                if (fclt_alt_phone)
                    resultsListHTML += "<p class=\"results_office_phone\">" + label_alt_phone + ": <a href='tel:" + fclt_alt_phone.replace(/\./g, '-') + "'>" + fclt_alt_phone.replace(/\./g, '-') + "</a></p>";
                if (fclt_fax)
                    resultsListHTML += "<p class=\"results_office_fax\">" + label_fax + ": <a href='tel:" + fclt_fax.replace(/\./g, '-') + "'>" + fclt_fax.replace(/\./g, '-') + "</a></p>";
                if (fclt_email)
                    resultsListHTML += "<p class=\"results_office_phone\">" + label_email + ": " + fclt_email + "</p>";
                if (fclt_secondary_email)
                    resultsListHTML += "<p class=\"results_office_phone\">" + label_sec_email + ": " + fclt_secondary_email + "</p>";
                if (fclt_main_contact)
                    resultsListHTML += "<p class=\"results_office_phone\">" + label_contact + ": " + fclt_main_contact + "</p>";
                if (fclt_hours)
                    resultsListHTML += "<p class=\"results_office_phone\">" + label_hours + ": " + fclt_hours + "</p>";
                if (fclt_info)
                    resultsListHTML += "<p class=\"results_office_phone\">" + label_info + ": " + fclt_info + "</p>";
                resultsListHTML += "<div><button class=\"results_office_get_directions_button btn btn-brand-2nd\" onclick=\"ServicesAPI.getDirectionsPanel(\'" + strDestination + "\');return false;\">" + $('.getDirectionsText').text() + "</button></div>";
                resultsListHTML += "</div>";
                var markerInfoHTML = "<div class=\"googleMarkerInfo\">";
                markerInfoHTML += "<p class=\"markerInfoOfficeName\">" + fclt_officeName + "</p>";
                markerInfoHTML += "<p class=\"markerInfoAddress\">" + fclt_addr.toLowerCase() + "</p>";
                markerInfoHTML += "<p class=\"markerInfoCityStateZip\">";
                if (fclt_city != null) {
                    markerInfoHTML += fclt_city.toLowerCase() + ", ";
                }
                if (fclt_state != null) {
                    markerInfoHTML += fclt_state.toLowerCase() + ", ";
                }
                if (fclt_zip != null) {
                    markerInfoHTML += fclt_zip.toLowerCase() + ", ";
                }
                markerInfoHTML += "</p>";
                if (fclt_phone)
                    markerInfoHTML += "<p class=\"markerInfoPhone\">" + label_phone + ": " + fclt_phone.replace(/\./g, '-') + "</p>";
                if (fclt_fax)
                    markerInfoHTML += "<p class=\"markerInfoFax\">" + label_fax + ": " + fclt_fax.replace(/\./g, '-') + "</p>";
                markerInfoHTML += "<p class=\"markerInfoDrivingDirections\"><a href='#' onclick=\"getDirectionsPanel(\'" + strDestination + "\');return false;\">" + "</a>" + "</p>";
                markerInfoHTML += "</div>";
                var fclt_point = new google.maps.LatLng(fclt_lat, fclt_lng);
                var iconNumber = ((i + 1) + ((bootPagNum) * listCount)) + '';
                var fclt_marker = ServicesAPI.createOfficeMarker(fclt_point, markerInfoHTML, iconNumber);
            }
            resultsListHTML += "</div>";
            $(resultsListHTML).insertBefore($(".results_pagination"));
            ServicesAPI.createPagination(count);
        }
        else {
            ServicesAPI.showSorryUnableToLocateMessage();
        }

        return responseObject;
    },
    handleServiceError: function () {
        $('.results_error_info').removeClass('hidden').html($('.errorMsgText_server_busy').text());
        $('.results_content').html("");
        $('.results_pagination, .find_an_office_pagecount_wrap, .google-maps-container, .maps-button').addClass('hidden');
    },
    createStartPointMarker: function (latlng) {
        // Use the default marker
        var marker = new google.maps.Marker({
            position: latlng
        });
        markersArray.push(marker);
        return marker;
    },
    createOfficeMarker: function (point, html, officeNumber) {
        var baseIcon = '';
        var numberedIcon = '';
        var marker = '';
        var numberedIconURL = '';
        var marker;
        marker = new MarkerWithLabel({
            position: point,
            labelContent: officeNumber,
            //icon: " ",
            icon: {
                url: blueMarker,
                scaledSize: new google.maps.Size(33, 42)// desired size
            },
            labelAnchor: new google.maps.Point(3, 33),
            labelClass: "my_label", // the CSS class for the label
            labelStyle: {opacity: 0.8},
            map: map
        });
        if ((officeNumber / 10) >= 1) {
            marker.labelAnchor = new google.maps.Point(8, 33)
        }

        google.maps.event.addListener(marker, 'click', (function (marker, i) {

            return function () {
                if (selectedMarker) {
                    selectedMarker.setIcon({
                        url: blueMarker,
                        scaledSize: new google.maps.Size(33, 42)
                    });
                }
                marker.setIcon({
                    url: blackMarker,
                    scaledSize: new google.maps.Size(33, 42)
                });
                selectedMarker = marker;

                var infowindow = new google.maps.InfoWindow();
                infowindow.setContent(html);
                infowindow.open(map, marker);
            }
        })(marker, officeNumber));

        markersArray.push(marker);
        return marker;
    },
    checkEnter: function (e) {
        var key = e.keyCode || e.which;
        var browsername = ServicesAPI.getBrowserName();
        if (key == 13) { //if character code is equal to ascii 13 (if enter key)
            //alert('ENTER pressed, show location, and return false');
            ServicesAPI.showLocation();
            //return false;
            /*if(browsername=="NS"){
             return false;
             }else if (browsername=="MSIE"){
             e.returnValue = false;
             }else{
             return false;
             }*/

        } else {
            returnValue = true;
        }
    },
    getBrowserName: function () {
        var browsername = navigator.appName;
        if (browsername.indexOf("Netscape") != -1) {
            browsername = "NS";
        } else if (browsername.indexOf("Microsoft") != -1) {
            browsername = "MSIE";
        } else {
            browsername = "N/A";
        }
        return browsername;
    },
    addBreadCrumb: function () {
        var currentPageCrumb = $(".breadcrumb").find("span:last-of-type");
        currentPageCrumb.wrapInner("<a href=\"\"> </a>");
        currentPageCrumb.addClass("breadcrumb__crumb");
        currentPageCrumb.find("a").attr("href", faoURL);
        currentPageCrumb.after("<span class=\"generatedBreadCrumb\">" + $('.getDirectionsText').text() + "</span>");
    },
    removeBreadCrumb: function () {
        $(".breadcrumb").find("span:last-of-type").remove();
        $(".breadcrumb").find("span:last-of-type a").contents().unwrap();
        $(".breadcrumb").find("span:last-of-type").removeClass("breadcrumb__crumb");
    },
    getDirectionsPanel: function (strpDestination) {
        $('.page-title__heading').text($('.getDirectionsText').text());
        if ($(".generatedBreadCrumb").length == 0) {
            ServicesAPI.addBreadCrumb();
        }
        ServicesAPI.clearOverlays();
        $('.fax-results__container, .driving-directions-panel, .find-an-x-search__container,.cta_search__container, .directions_error').addClass('hidden');
        $('.driving-direction-container, .maps-button, #googleDrivingMapsContainer').removeClass('hidden');
        var fromAddr = $('.find-an-x-search__container .cta_search').val();
        ServicesAPI.initializeDrivingGoogleMapObject();

        $('.get-directions-form .from-address').val(fromAddr);
        if (fromAddr == '') {
            $('.find-an-x-search__container .cta_search').focus();
            return;
        }
        geocoder.geocode({'address': fromAddr}, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                var res = ServicesAPI.makeMarker(results[0].geometry.location, 'A');
            }
        });


        //clearOverlays();
        var toAddr = strpDestination.split(":");
        $('.get-directions-form .to-address').val(ServicesAPI.formatDestination(toAddr[0]));


        ServicesAPI.resetMap();
        var dest_marker = $('.get-directions-form .to-address').val();
        geocoder.geocode({'address': dest_marker}, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                var res = ServicesAPI.makeMarker(results[0].geometry.location, 'B');

            }
        });
        ServicesAPI.clearOverlays();
    },
    makeMarker: function (point, title) {
        marker = new MarkerWithLabel({
            position: point,
            labelContent: title,
            //icon: " ",
            icon: {
                url: blueMarker,
                scaledSize: new google.maps.Size(33, 42)// desired size
            },
            labelAnchor: new google.maps.Point(5, 33),
            labelClass: "my_label", // the CSS class for the label
            labelStyle: {opacity: 0.8},
            map: map
        });
        dir_markerArray.push(marker);
    },
    getDirections: function () {
        $('.page-title__heading').text($('.getDirectionsText').text());
        var directionsService = new google.maps.DirectionsService();
        directionsDisplay.setMap(map);
        directionsDisplay.setPanel(document.getElementById('drivingDirectionsPanel'));
        var travel_mode = $('.get-directions-buttons .btn.active').attr('data-travel');
        var unit;
        var fromAddr = $('.get-directions-form .from-address').val();
        if ($('.Radius_unit').text() == "km") {
            unit = google.maps.UnitSystem.METRIC;
        }
        else {
            unit = google.maps.UnitSystem.IMPERIAL;
        }
        var request = {
            origin: fromAddr,
            destination: $('.get-directions-form .to-address').val(),
            travelMode: google.maps.DirectionsTravelMode[travel_mode],
            unitSystem: unit
        };
        directionsService.route(request, function (response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                ServicesAPI.clearOverlays();
                $('.get-directions-form,.directions_error').addClass('hidden');
                $('.driving-directions-panel').removeClass('hidden');
                directionsDisplay.setDirections(response);
                var leg = response.routes[0].legs[0];
                ServicesAPI.makeMarker(leg.start_location, "A");
                ServicesAPI.makeMarker(leg.end_location, 'B');
            } else {
                directionsDisplay.setMap(null);
                $('.driving-directions-panel').addClass('hidden');
                $('.directions_error').removeClass('hidden');
            }
        });

    },
    formatDestination: function (destAddress) {
        var regex = new RegExp("[0-9]TH|[0-9]RD|[0-9]ND", "i");
        while (regex.test(destAddress)) {
            var matchedString = regex.exec(destAddress).toString();
            destAddress = destAddress.replace(matchedString, matchedString.substring(0, 1));
        }

        regex.compile("\\bfl\\b", "i");
        while (regex.test(destAddress)) {
            var matchedString = regex.exec(destAddress).toString();
            destAddress = destAddress.replace(matchedString, "FLOOR");
        }
        regex.compile("\\bst\\b", "i");
        if (regex.test(destAddress)) {
            var matchedString = regex.exec(destAddress).toString();
            destAddress = destAddress.replace(matchedString, "STREET");
        }
        return destAddress;
    },
    handleGetDirectionErrors: function (invDir, from, to_LatLng) {
        // Try getting the directions using geocoding
        if (invDir.getStatus().code == G_GEO_UNKNOWN_ADDRESS) {
            invDir.clear();
            var resultsOverlay = document.getElementById("officeResultsContent");
            resultsOverlay.innerHTML = '';

            var dir_lat_lng = new GDirections(map, resultsOverlay);

            dir_lat_lng.load(from + " to " + to_LatLng);
            google.maps.Event.addListener(dir_lat_lng, "error", function () {
                resultsOverlay.innerHTML = $('.get_direction_error').text()
            });
        }
    },
    getAddress: function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(handle_geolocation_query);
        }
    },
    handle_geolocation_query: function (position) {
        var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var geocoder = geocoder = new google.maps.Geocoder();
        geocoder.geocode({'latLng': latlng}, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[1]) {
                    var arrAddress = results[1].address_components;
                    var itemLocality = "";
                    $.each(arrAddress, function (i, address_component) {
                        if (address_component.types[0] == "locality") {
                            itemLocality = address_component.long_name;
                        }
                        if (address_component.types[0] == "administrative_area_level_1") {
                            itemLocality += ', ' + address_component.long_name;
                        }
                        $('.find-an-x-search__container .cta_search').val(itemLocality);
                    });
                }
                if (results[0]) {
                    dir_to_flag = false;
                    $('.get-directions-form .from-address').val(ServicesAPI.formatDestination(results[0].formatted_address));
                }
            }
        });
    },
    /************Alex and Pablo solution FAO Url Constructor***************/
    //buildServiceUrl: function (baseUrl, lat, lng, radius, specialty) {
    //	var latSelector = '.latitude=' + lat.toString().replace('.', ','), //sling selector workaround
    //		lngSelector = '.longitude=' + lng.toString().replace('.', ','),
    //		radiusSelector = '.radius=' + radius,
    //		specialtySelector = '.specialty=' + specialty;
    //		return baseUrl + latSelector + lngSelector + radiusSelector + specialtySelector + ".json";
    //},
    /************Alex and Pablo solution FAO Url Constructor***************/

    /************Diego FAO Url Constructor***************/
    buildServiceUrl: function (baseUrl, lat, lng, radius, specialty) {
        var latSelector = 'latitude=' + lat.toString().replace('.', ','), //sling selector workaround
            lngSelector = '&longitude=' + lng.toString().replace('.', ','),
            radiusSelector = '&radius=' + radius,
            specialtySelector = '&specialty=' + specialty;
        //return baseUrl + latSelector + lngSelector + radiusSelector + specialtySelector + ".json";

        //modified url for integration
        return baseUrl + latSelector + lngSelector + radiusSelector + specialtySelector + "&format=json";
    },
    /************Diego FAO Url Constructor***************/
    buildServiceUrlUS: function (baseUrl, lat, lng, radius, specialty) {
        var latSelector = 'latitude=' + lat.toString(), //sling selector workaround
            lngSelector = '&longitude=' + lng.toString(),
            radiusSelector = '&radius=' + radius,
            specialtySelector = '&specialty=' + specialty;
        return baseUrl + latSelector + lngSelector + radiusSelector + specialtySelector + "&format=json";
    },
    updatePageFrom: function (name) {
        var pageFrom = ServicesAPI.getQueryStringNoHash()["pageFrom"];
        if (pageFrom != undefined) {
            name.val(pageFrom);
        }
    },
    onFSubmit: function ($this) {
        var fid = $this.attr('data-fsubmit')
        var $formid = $('[data-fid=' + fid + ']');
        var formStatus = true;
        var flag;


        if ($("[data-observes-id]").find("input:radio").parent().parent().parent().parent().css("display") != "none") {
            /*	$("[data-observes-id]").find("input:radio").each(function () {
             if ($(this).attr('checked') == "checked") {
             radioDials = true;
             }
             });*/
            if (radioDials != true) {
                $("[data-observes-id]").find("input:radio").each(function () {
                    $(this).next('span').addClass('errorRadio');
                });
                $('.contactSideForm .info-mandatory').addClass('error-mandatory');
                formStatus = false;
            }
        }
        $formid.find('[data-required=true]').each(function () {
            var $this = $(this);
            if ($this.parent().parent().parent().css("display") != "none") {
                var placeholder = $this.attr('placeholder');
                if ($this.val() == placeholder) {
                    $this.val("");
                }
                var val = $this.val();
                if (val.length == 0) {
                    $this.addClass('error');
                    //$this.parent().find('.errorSpan').addClass('errorSpanOpen');
                    $('.contactSideForm .info-mandatory').addClass('error-mandatory');
                    $this.parent('.form-user-grp').find('svg').css('fill', '#db3535');
                    $this.val(placeholder);
                    formStatus = false;
                } else {
                    $('.contactSideForm .info-mandatory').removeClass('error-mandatory');
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
        if (formStatus && fid != "contactCard" && fid != "contactSidebarQuote") {
            ServicesAPI.formPass(fid);
        } else {
            $formid.find('.info-mandatory').addClass('error-mandatory');
        }
        return formStatus;
    },
    formProcessorSubmit: function (formName, formDiv, thankyouDiv, errorDiv, exceptionDiv) {
        var lead = "";
        var scenarioName = "";
        var mmrep = "";
        var formObjectName = document.getElementById(formName);
        var reserveid = ServicesAPI.getCookie("ReserveID");
        if (null != reserveid) ServicesAPI.AddInputParameter(formObjectName, "input", "reserveid", reserveid, document);
        else;

        //AddInputParameter(formObjectName, "input", "webFormPage_ThankYouPage", TKM, document);
        if (null != document.getElementById("beginapp-rep")) mmrep = document.getElementById("beginapp-rep").value;
        if (null != mmrep && "" != mmrep) {
            var lsubContentGroupDirectory = "";
            var lcontentGroupDirectory = "";
            var laudience = "";
            if ("" != subContentGroupDirectory) {
                lsubContentGroupDirectory = subContentGroupDirectory + "-" + mmrep;
                lcontentGroupDirectory = contentGroupDirectory;
                laudience = audience;
            } else if ("" != contentGroupDirectory) {
                lcontentGroupDirectory = contentGroupDirectory + "-" + mmrep;
                lsubContentGroupDirectory = subContentGroupDirectory;
                laudience = audience;
            } else if ("" != audience) {
                laudience = audience + "-" + mmrep;
                lcontentGroupDirectory = contentGroupDirectory;
                lsubContentGroupDirectory = subContentGroupDirectory;
            }
            if ("undefined" == typeof contentGroupDirectory) ServicesAPI.AddInputParameter(formObjectName, "input", "contentGroup", "", document);
            else ServicesAPI.AddInputParameter(formObjectName, "input", "contentGroup", lcontentGroupDirectory, document);
            if ("undefined" == typeof subContentGroupDirectory) ServicesAPI.AddInputParameter(formObjectName, "input", "subcontentGroup", "", document);
            else ServicesAPI.AddInputParameter(formObjectName, "input", "subcontentGroup", lsubContentGroupDirectory, document);
            if ("undefined" == typeof audience) ServicesAPI.AddInputParameter(formObjectName, "input", "audience", "", document);
            else ServicesAPI.AddInputParameter(formObjectName, "input", "audience", laudience, document);
        } else {
            var CGFrQS = "";
            var SCGFrQS = "";
            var AUFrQS = "";
            CGFrQS = ServicesAPI.getQueryString("CG");
            SCGFrQS = ServicesAPI.getQueryString("SCG");
            AUFrQS = ServicesAPI.getQueryString("AU");
            if ("" != CGFrQS) ServicesAPI.AddInputParameter(formObjectName, "input", "contentGroup", CGFrQS, document);
            else if ("undefined" == typeof contentGroupDirectory) ServicesAPI.AddInputParameter(formObjectName, "input", "contentGroup", "", document);
            else ServicesAPI.AddInputParameter(formObjectName, "input", "contentGroup", contentGroupDirectory, document);
            if ("" != SCGFrQS) ServicesAPI.AddInputParameter(formObjectName, "input", "subcontentGroup", SCGFrQS, document);
            else if ("undefined" == typeof subContentGroupDirectory) ServicesAPI.AddInputParameter(formObjectName, "input", "subcontentGroup", "", document);
            else ServicesAPI.AddInputParameter(formObjectName, "input", "subcontentGroup", subContentGroupDirectory, document);
            if ("" != AUFrQS) ServicesAPI.AddInputParameter(formObjectName, "input", "audience", AUFrQS, document);
            else if ("undefined" == typeof audience) ServicesAPI.AddInputParameter(formObjectName, "input", "audience", "", document);
            else ServicesAPI.AddInputParameter(formObjectName, "input", "audience", audience, document);
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
        if ("undefined" == typeof visitorID) ServicesAPI.AddInputParameter(formObjectName, "input", "visitorIDReq", "", document);
        else ServicesAPI.AddInputParameter(formObjectName, "input", "visitorIDReq", visitorID[1], document);
        var urlNode = document.URL;
        urlNode = ServicesAPI.getPageFromURLNode(formObjectName, mmrep);
        if ("requestFormRightNav" == formName) {
            //console.debug("document.requestFormRightNav.coverage" + document.requestFormRightNav.coverage);
            if (document.requestFormRightNav.coverage)
                if (document.requestFormRightNav.coverage.value < 1e5) {
                    urlNode = urlNode.split("?");
                    urlNode = urlNode[0];
                }
        }
        if (lead == "NewLead") {
            ServicesAPI.AddInputParameter(formObjectName, "input", "formSubmissionSource", urlNode, document);
        }
        if (lead == "ServiceLead") {
            ServicesAPI.AddInputParameter(formObjectName, "input", "webFormPage_urlPagevalue", urlNode, document);
        }

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
             ServicesAPI.addSessionParameters(formObjectName);
             console.debug("Doing Webform submit to: " + submitUrl);
             */

        }
    },
    validateOnType: function (val, $this, re) {
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
    },
    AddInputParameter: function (a, b, c, d, e) {
        var f = e.createElement(b);
        f.setAttribute("type", "hidden");
        f.setAttribute("name", c);
        f.setAttribute("value", d);
        a.appendChild(f);
    },
    getCookie: function (c_name) {
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
    },
    getQueryString: function (a) {
        a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var b = "[\\?&]" + a + "=([^&#]*)";
        var c = new RegExp(b);
        var d = c.exec(window.location.href);
        if (null == d) return "";
        else return d[1];
    },
    getPageFromURLNode: function (a, b) {
        var c = document.URL;
        var d = "";
        var e = window.location.search.split("?");
        var f = "";
        var g = "";
        var h = false;
        if (null != document.getElementById("WT.mc_id")) {
            mcid = ServicesAPI.getCookie("SessionMCID");
            ServicesAPI.AddInputParameter(a, "input", "wb_code", mcid, document);
            ServicesAPI.AddInputParameter(a, "input", "WT.mc_id", mcid, document);
        }
        if (2 == e.length) {
            var i = e[1].split("&");
            for (var j = 0; j < i.length; j++) {
                var k = i[j].split("=");
                if ("wt.mc_id" == k[0].toLowerCase()) {
                    ServicesAPI.AddInputParameter(a, "input", "wb_code", k[1], document);
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
    },
    addSessionParameters: function (a) {
        var b = sessionVars.getSessionParams();
        for (var c in b)
            if (b.hasOwnProperty(c))
                if ("" !== b[c])
                    if (ServicesAPI.checkFormField(a, c)) ServicesAPI.AddInputParameter(a, "input", c, b[c], document);
                    else a.elements[c].value = b[c];
    },
    checkFormField: function (a, b) {
        if (void 0 == a.elements[b]) return true;
        else return false;
    },
    postLeadform: function ($formid) {
        var formName = $formid.attr('name');
        ServicesAPI.formProcessorSubmit(formName, 'a', 'chn-har-thankyou', 'chn-har-error', 'chn-har-exception');
        var requestExist = $('[data-fid="' + formName + '"]').find("[data-request-type]").length;
        $('[data-fid="' + formName + '"]').find('[data-valid-type=phone]').val($('[data-fid="' + formName + '"]').find('[data-valid-type=phone]').val().replace(/[^\w\s]/gi, ''))
        var requestType;
        var ajaxUrl;
        if (requestExist > 0) {
            requestType = $('[data-fid="' + formName + '"]').find("[data-request-type]").find(':selected').val();
            ajaxUrl = $('[data-fid="' + formName + '"]').find("[data-request-type]").find(':selected').attr('data-product-url');
            if (requestType == 'New Product/Planning Services') {
                var jsonData = {};
                var formData = $('form[name=' + formName + ']').serializeArray();
                $.each(formData, function () {
                    if (jsonData[this.name]) {

                        if (!jsonData[this.name].push) {
                            jsonData[this.name] = [jsonData[this.name]];

                        }
                        jsonData[this.name].push(this.value || '');
                    } else {

                        jsonData[this.name] = this.value || '';
                        if (!jsonData[this.name].push) {
                            if (this.name == "prodInt" || this.name == "prodInterest") {
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
                    error: function () {
                        console.log("error in ajax form submission");
                    }
                });
            }

            if (requestType == 'Existing Product/Policy') {
                if (typeof FormData !== 'undefined') {
                    var formData = new FormData($('form[name=' + formName + ']')[0]);
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
                        error: function () {
                            console.log("error in ajax form submission");
                        }
                    });
                } else {
                    var formData = postSerialize($('form[name=' + formName + ']'));
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
                        error: function () {
                            console.log("error in ajax form submission");
                        }
                    });
                }
            }
        } else {
            ajaxUrl = $('[data-fid="' + formName + '"]').attr("[data-product-url]");
            if (typeof FormData !== 'undefined') {
                var formData = new FormData($('form[name=' + formName + ']')[0]);
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
                    error: function () {
                        console.log("error in ajax form submission");
                    }
                });
            } else {
                var formData = postSerialize($('form[name=' + formName + ']'));
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
                    error: function () {
                        console.log("error in ajax form submission");
                    }
                });
            }
        }
        if ($('[data-fid="' + formName + '"]').find('[data-valid-type=phone]').length > 0) {
            $('[data-fid="' + formName + '"]').find('[data-valid-type=phone]').val($('[data-fid="' + formName + '"]').find('[data-valid-type=phone]').val().replace(/[^\w\s]/gi, ''));
        }


    },
    postLeadformOld: function ($formid) {

        var formName = $formid.attr('name');
        ServicesAPI.formProcessorSubmit(formName, 'a', 'chn-har-thankyou', 'chn-har-error', 'chn-har-exception');
        var requestType = $('[data-fid="' + formName + '"]').find(".productPolicy").find(':selected').val()
        var ajaxUrl;
        $('[data-fid="' + formName + '"]').find('[data-valid-type=phone]').val($('[data-fid="' + formName + '"]').find('[data-valid-type=phone]').val().replace(/[^\w\s]/gi, ''))
        if (requestType == 'New Product/Planning Services') {
            ajaxUrl = $('[data-fid="' + formName + '"]').attr("data-new-product");
            var jsonData = {};
            var formData = $('form[name=' + formName + ']').serializeArray();
            $.each(formData, function () {
                if (jsonData[this.name]) {

                    if (!jsonData[this.name].push) {
                        jsonData[this.name] = [jsonData[this.name]];

                    }
                    jsonData[this.name].push(this.value || '');
                } else {

                    jsonData[this.name] = this.value || '';
                    if (!jsonData[this.name].push) {
                        if (this.name == "prodInt" || this.name == "prodInterest") {
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
                error: function () {
                    console.log("error in ajax form submission");
                }
            });
        }

        if (requestType == 'Existing Product/Policy') {
            ajaxUrl = $('[data-fid="' + formName + '"]').attr("data-existing-product");
            if (typeof FormData !== 'undefined') {
                var formData = new FormData($('form[name=' + formName + ']')[0]);

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
                    error: function () {
                        console.log("error in ajax form submission");
                    }
                });
            } else {
                var formData = postSerialize($('form[name=' + formName + ']'));
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
                    error: function () {
                        console.log("error in ajax form submission");
                    }
                });
            }
        }


    },
    formPass: function (fid) {

        switch (fid) {
            case "contactSidebar":
                $('.contactSideForm').fadeOut(2000);
                $('.contactSideThankyou, .contact-container--global .contactOtherDetails').fadeIn(800);
                break;

            case "twoColumnContactForm":
                $('.twoColumnContactForm .contact-us__contact-form').fadeOut(1000);
                $('.twoColumnContactForm .contactSideThankyou, .twoColumnContactForm .contact-single_other').fadeIn(800);
                break;

            case "updateInfoForm":
                $('.updateInfoForm .contact-us__contact-form').fadeOut(1000);
                $('.updateInfoForm .contactSideThankyou, .updateInfoForm .contact-single_other').fadeIn(800);
                break;
        }

        $('.info-mandatory').removeClass("error-mandatory");
        $('.form-user-ctrl').removeClass("error");
        $('.form-user-grp').find('svg').css('fill', '#666');

        setTimeout(function () {
            ServicesAPI.resetForm(fid);
        }, 5000);
    },
    resetForm: function (fid) {
        switch (fid) {
            case "contactSidebar":
                //in a timeout to avoid visual conflict with animation
                setTimeout(function () {
                    $('#requestFormRightNav_Acc').trigger("reset");
                    $('.contactSideThankyou, .contact-container--global .contactOtherDetails, .productUserType, .contactSideSubmitError').fadeOut(2000);
                    $('.contactSideForm').show();
                    $('.contact-container--global').css("right", "-640px");
                }, 1000);
                break;

            case "twoColumnContactForm":
                $('#twoColumnContactForm').trigger("reset");
                $('.twoColumnContactForm .contact-us__contact-form').fadeIn(1000);
                $('.twoColumnContactForm .contactSideThankyou, .twoColumnContactForm .contact-single_other').fadeOut(2000);
                break;

            case "contactAdvisorSingle":
                $('#contactAdvisorSingle').trigger("reset");
                $('.contactAdvisorSingle .contact-us__contact-form').fadeIn(1000);
                $('.contactAdvisorSingle .contactSideThankyou').fadeOut(2000);
                break;

            case "updateInfoForm":
                $('#updateInfoForm').trigger("reset");
                $('.updateInfoForm .contact-us__contact-form').fadeIn(1000);
                $('.updateInfoForm .contactSideThankyou, .updateInfoForm .contact-single_other').fadeOut(2000);
                break;
        }


    },
    emailUnsub: function () {
        if ($("#email_unsub").hasClass("error")) {
            return false;
        } else {
            var ajaxUrl = $(".email--unsubscribe-form").attr("data-url");
            var jsonData = {};
            var formData = $('form[name="unsubscribeForm"]').serializeArray();
            $.each(formData, function () {
                if (jsonData[this.name]) {
                    if (!jsonData[this.name].push) {
                        jsonData[this.name] = [jsonData[this.name]];
                    }
                    jsonData[this.name].push(this.value || '');
                } else {

                    jsonData[this.name] = this.value || '';
                    if (!jsonData[this.name].push) {
                        if (this.name == "prodInt" || this.name == "prodInterest") {
                            jsonData[this.name] = [jsonData[this.name]];
                        }
                    }
                }
            });
            console.log(ajaxUrl)
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
                    console.log(returndata);
                    $(".email--unsubscribe--container").toggleClass("hidden");
                    $(".email--unsubscribe-form").hide();
                },
                error: function () {
                    console.log("error in ajax form submission");
                }
            });
        }
    },
    dropDownPreselection: function () {
        if ($(".js-DropDownPreselect").length > 0) {
            if (window.location.hash) {
                var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
                var exists = false;
                $('.js-DropDownPreselect option').each(function () {
                    console.log(this.value == hash)
                    if (this.value == hash) {
                        exists = true;
                        $(".js-DropDownPreselect").val(hash);
                        $(".js-DropDownPreselect").trigger("change");
                        return false;
                    }
                });
            }
        }
    }
};
// Log Code
var logTest = '';

/******
 * For Glu formSubmissiontype must be a empty string.
 *
 * for Web2Lead we will inject this value form_direct_sfdc_type into the data-form-Type on the .generic-form, this will enable the form to go to web2lead.
 *
 */
$('.form-user-grp > input, .form-user-grp > textarea, .triple-input > input').on('focus', function () {
    if($(this).hasClass("error")){
        $(this).removeClass("error")
    }
});
$('.form-user-grp > select').on('change', function () {
    if($(this).hasClass("error")){
        $(this).removeClass("error")
        $(this).closest('.form-user-grp').find('svg').css('fill', '#666');
    }
});
var formSubmissiontype = "";

function gluIsDown(){
    $(".generic-form").each(function(){
        formSubmissiontype = $(this).attr('data-form-Type');
    });
}
var thisForm;
$(".form-submit").click(function(){
    thisForm = $(this).attr("data-fsubmit");
});

$(document).ready(function(){
    gluIsDown();
});

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
                    //var domain = document.domain;
                    console.log(parent.find(".generic-form"))
                    var domain = parent.find(".generic-form").attr("data-domain");
                    console.log(domain)
                    parent.find('#Domain').attr("value", domain);
                    var LeadAssociatedSourceDesc = document.URL.replace(/^(?:\/\/|[^\/]+)*\//, "");
                    parent.find('#LeadAssociatedSourceDesc').attr("value", LeadAssociatedSourceDesc);
                   // parent.find('#Domain').attr("value", window.location.protocol + "//" + domain);
                    // parent.find('#Domain').attr("value", "https://redesign-ar.metlifestage.com");
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
                        if (field.type == "tel") {
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
                        var Phregex = new RegExp(/^\d{1,12}$/);
                        var MPhregex = new RegExp(/^\d{1,14}$/);

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

                                        parent.find('#' + f.id).closest('.form-user-grp').find('svg').css('fill', '#db3535');
                                    } else {
                                        this.hideError(f.id);
                                        parent.find('#' + f.id).closest('.form-user-grp').find('svg').css('fill', '#666');
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
                                else if (f.type == "tel") {
                                    if(f.id=="PhNum"){
                                        if (Phregex.test(fieldValue)) {
                                            this.hideError(f.id);
                                        } else {
                                            this.showError(f.id, f.type);
                                        }
                                    }
                                    if(f.id=="MobileNumber"){
                                        if (MPhregex.test(fieldValue)) {
                                            this.hideError(f.id);
                                        } else {
                                            this.showError(f.id, f.type);
                                        }
                                    }

                                }
                                break;
                            case "numeric":
                                if (fieldValue != "") {
                                    if (f.type == "tel") {
                                        if(f.id=="PhNum"){
                                            if (Phregex.test(fieldValue)) {
                                                this.hideError(f.id);
                                            } else {
                                                this.showError(f.id, f.type);
                                            }
                                        }
                                        if(f.id=="MobileNumber"){
                                            if (MPhregex.test(fieldValue)) {
                                                this.hideError(f.id);
                                            } else {
                                                this.showError(f.id, f.type);
                                            }
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
                                if (f.type == "tel") {
                                    if(f.id=="PhNum"){
                                        if (Phregex.test(fieldValue)) {
                                            this.hideError(f.id);
                                        } else {
                                            this.showError(f.id, f.type);
                                        }
                                    }
                                    if(f.id=="MobileNumber"){
                                        if (MPhregex.test(fieldValue)) {
                                            this.hideError(f.id);
                                        } else {
                                            this.showError(f.id, f.type);
                                        }
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

                    var url = formElement.attr("data-url");
                    console.log(url)
                    var data;
                    if (formSubmissiontype == "form_direct_sfdc_type") {

                        //url = 'https://login.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8';
                        data = formElement.serialize();
                    } else {

                        formData = formElement.serializeArray();
                        if (jsonData["MetlifeJson"]) {
                            if (!jsonData["MetlifeJson"].push) {
                                jsonData["MetlifeJson"] = [jsonData["MetlifeJson"]];
                            }
                            jsonData["MetlifeJson"].push("GLU Form");
                        } else {
                            jsonData["MetlifeJson"] = "GLU Form";
                        }

                        // 6 fields from the x form need to be concatenated
                        var concFields = ["ref1Name", "ref1Email", "ref1Phone",
                                          "ref2Name", "ref2Email", "ref2Phone"];
                        var concatenated = [];

                        $.each(formData, function () {
                            // Check if values should be concatenated
                            if($.inArray(this.name, concFields) > -1) {
                                concatenated.push(this.value);
                            }
                            else if (jsonData[this.name]) {
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

                        // If the concatenated array is not empty, append it to the data:
                        if(concatenated.length > 0) {
                            jsonData["LeadDesc"] = concatenated.join();
                        }

                        // url = 'https://qa.ese.metlife.com/MLGlobalLead/leadservice/ProcessGLUlead';
                        data = JSON.stringify(jsonData);

                    }
                    $.ajax({
                        url: url,
                        dataType: 'json',
                        data: data,
                        async: true,
                        type: 'POST',
                        contentType: "application/json; charset=utf-8",
                        /* headers: {
                         'Met_User':'gluuser2',
                         'Met_Pwd':'HRr2m0+R28ezfIdDvuBLdg',
                         'Met_PTNR_NM':'MetLife CP Redesign Sites'
                         },*/
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
    parent.find(".contact-close, .form-minimize").on('click', function (evt) {
        evt.preventDefault();
        formReset(parent, element.fields);
        //ServicesAPI.resetForm(thisForm)
        parent.find('.form-submit').removeClass("disabled").html(submitText);
    });
});

/***** Validations **************************************************/
// Contact Form Validatons
if ($(".generic-form").length > 0) {
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
}
/***** Validations **************************************************/



/***** Form Functions ***********************************************/
// Resets contact forms
function formReset(parent, fields) {
    /*   parent.addClass('form-off');
     parent.children().removeAttr("style");
     parent.find("input, select, textarea").removeClass('error');
     parent.find(".errorSpan").hide();
     parent.find('.generic-form')[0].reset();

     if (parent.hasClass("contact-image")) {
     formCardExpand();
     }*/

    ServicesAPI.resetForm(thisForm)
    // Hide hidden fields
    for (var i = 0; i < fields.length; i++) {
        var field = fields[i];
        if (field.hidden) {
            parent.find('#' + field.id).closest('.form-focus, .form-hidden, .hidden-field').hide();
        }
    }
    $(".generic-form").trigger("reset")
    if (parent.hasClass("contactAdvisor")) {
        $(".contactCard").show();
        setTimeout(function () {
            var h = $('.contact-container--form-card').outerHeight();
            $('.form-card__img__inner').css('height', h + 'px');
        }, 01)
    }
}

// Displays thank you/error message for contact forms
function formMessage(parent, status) {

    var message;
    if (status == "thanks") {
        message = parent.find(".contactSideThankyou");
    } else {
        message = parent.find(".contactSideSubmitError");
    }
    console.log(parent);
    message.siblings(":visible").fadeOut('slow', function () {
        message.css("display", "table-cell");
        var h = $('.contact-container--form-card').outerHeight();
        $('.form-card__img__inner').css('height', h + 'px');
        setTimeout(function () {
            if (parent.hasClass("contactSliderOuterCon")) {
                $('.contactSideForm').fadeOut(800, function () {
                    parent.find(".contact-close").trigger("click");
                    ServicesAPI.resetForm(thisForm);
                });
            } else if (parent.hasClass("contactAdvisor")) {
                message.fadeOut(800, function () {
                    parent.find(".form-minimize").trigger("click");
                    ServicesAPI.resetForm(thisForm);
                });
            } else if (parent.hasClass("twoColumnContactForm")){
                message.fadeOut(800, function () {
                    ServicesAPI.resetForm(thisForm);
                });
            } else if (parent.hasClass("updateInfoForm")){
                message.fadeOut(800, function () {
                    ServicesAPI.resetForm(thisForm);
                });
            } else if (parent.hasClass("contactAdvisorSingle")) {
                message.fadeOut(800, function () {
                    parent.find(".form-minimize").trigger("click");
                    ServicesAPI.resetForm(thisForm);
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
 var parent = $(".form-card");
 var form = parent.find(".contact-container--form-card");
 var image = parent.find(".form-card__img__inner");
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



// Copyright 2009 Google Inc. All Rights Reserved.

/**
 * @fileoverview JavaScript for GSA Suggest (Core).
 *
 * List of global variables defined in other files. We define these variables in
 * an XSLT accessible to customers so that they can customize it. Look at the
 * stylesheet_template.enterprise for detailed descriptions of these variables.
 * Listing here with short descriptions:
 * <ul>
 * <li> ss_form_element {string} Name of search form.
 * <li> ss_popup_element {string} Name of search suggestion drop down.
 * <li> ss_seq {array} Types of suggestions to include.
 * <li> ss_g_one_name_to_display {string} name to display to user.
 * <li> ss_g_more_names_to_display {string} name to display to user.
 * <li> ss_g_max_to_display {number} Max number of query suggestions to display.
 * <li> ss_max_to_display {number} Max number of all types of suggestions to
 * display.
 * <li> ss_wait_millisec {number} Idling internval for fast typers.
 * <li> ss_delay_millisec {number} Delay time to avoid contention when drawing
 * the suggestion box by various par allel processes.
 * <li> ss_gsa_host {string} Host name or IP address of GSA.
 * <li> SS_OUTPUT_FORMAT_LEGACY {string} Constant that contains the value for
 * legacy output format.
 * <li> SS_OUTPUT_FORMAT_OPEN_SEARCH {string} Constant that contains the value
 * for OpenSearch output format.
 * <li> SS_OUTPUT_FORMAT_RICH {string} Constant that contains the value for rich
 * output format.
 * <li> ss_g_protocol {string} Output format protocol to use.
 * <li> ss_allow_debug {boolean} Whether debugging is allowed.
 * </ul>
 */

var ss_form_element = "metSearchForm";

//var ss_form_element = 'metSearchForm'; // search form

var enableSuggestions = true;

var ss_popup_element = 'search_suggest'; // search suggestion drop-down

var ss_popup_element_table = 'search_suggest_table';

var ss_allow_debug = false;

var ss_wait_millisec = 500;

var ss_delay_millisec = 30;

var ss_seq = ['g'];

/**
 * Suggestion type name to display when there is only one suggestion.
 *
 * @type {string}
 */
var ss_g_one_name_to_display =
    "Suggestion";

/**
 * Suggestion type name to display when there are more than one suggestions.
 *
 * @type {string}
 */
var ss_g_more_names_to_display =
    "Suggestions";


var ss_g_max_to_display = 4;
var ss_max_to_display = 12;

var ss_cached = [];

var ss_gsa_host = null;

var ajaxURL = $('.search-trigger__container input').attr('data-search-url');
var dataSuggestionsFrontEnd = $('.search-trigger__container input').attr('data-suggestions-frontend');
var dataSuggestionsSite = $('.search-trigger__container input').attr('data-suggestions-site');
if (window.location.href.indexOf("metlife.com/mmi", 0) >= 0) {
    ajaxURL = "/wps/mmi/suggest";
}


var SS_OUTPUT_FORMAT_LEGACY = 'legacy';
var SS_OUTPUT_FORMAT_OPEN_SEARCH = 'os';
var SS_OUTPUT_FORMAT_RICH = 'rich';

var ss_protocol = SS_OUTPUT_FORMAT_RICH;

var textOverLayDivBack = "overlayerback";

var textBoxID = "searchInPage";

//var textBoxID="searchInPage";
var maxCharLen = 21;
var autoCompleteEnable = true;
var scheduler = null;
var failCount = 0;
var failCountMaxTries = 3;
/**
 * Cached query when using up and down arrows to move around the suggestion box.
 * When the user escapes from the suggestion box, the typed query is restored
 * from here.
 *
 * @type {string}
 */
var ss_qbackup = null;

/**
 * The query for which suggestions are displayed.
 *
 * @type {string}
 */
var ss_qshown = null;

/**
 * The table row location of the selected suggestion entry.
 *
 * @type {number}
 */
var ss_loc = -1;

/**
 * Lock to prevent painting the suggestion box for an expired query after the
 * required delay.
 *
 * @type {number}
 */
var ss_waiting = 0;

/**
 * Lock to prevent contention when drawing the suggestion box, especially for
 * the concurrent AJAX calls.
 *
 * @type {boolean}
 */
var ss_painting = false;

/**
 * Pending key handling request holder.
 */
var ss_key_handling_queue = null;

/**
 * Pending painting request holder.
 */
var ss_painting_queue = null;

/**
 * Global flag to indicate whether the search box is currently dismissed. The
 * suggestion box must not be drawn if it is false.
 *
 * @type {boolean}
 */
var ss_dismissed = false;

/**
 * Low-level raw information including AJAX requests and responses shown via
 * rudimental alert().
 *
 * @type {boolean}
 */
var ss_panic = false;

/**
 * Constant for the name of class for a row in suggestions drop down.
 *
 * @type {string}
 */
var SS_ROW_CLASS = 'ss-gac-a';

/**
 * Constant for the name of class for a selected row in suggestions drop down.
 *
 * @type {string}
 */
var SS_ROW_SELECTED_CLASS = 'ss-gac-b';

if (!Array.indexOf) {
    /**
     * Custom implementation of indexOf for browsers that do not support it. For
     * example, IE6 and IE7 do not support.
     *
     * @param {Object}
     *            obj The element to be searched in the array.
     *
     * @return {number} The index if the element is found, -1 otherwise.
     */
    Array.prototype.indexOf = function (obj) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] == obj) {
                return i;
            }
        }
        return -1;
    };
}

/**
 * Instance of debugger.
 *
 * @type {ss_Debugger}
 */
var ss_debug = new ss_Debugger();
var cacheTimeOut = 1000 * 60 * 30;

var timeStamp = new Date().getTime();

var isThemeMode = true;

var maxLengthFirstRow = 21;
var maxLenghtSecondRow = 31;
var textEntered;


function setSearchResultsPageIDS() {
    if (isThemeMode) {
        clear_suggestions();
        maxLengthFirstRow = 27;
        maxLenghtSecondRow = 40;
        clear_suggestions();
        ss_form_element = "frm_refineSearchResult";
        textOverLayDivBack = "overlayerback_sr";
        textBoxID = "form-refineSearchQuery_sr";
        maxCharLen = 21;
        autoCompleteEnable = true;
        ss_popup_element_table = 'search_suggest_table_sr';
        ss_popup_element = 'search_suggest_sr';
        isThemeMode = false;
    }
}

function setThemePageIDS() {
    if (!isThemeMode) {
        clear_suggestions();
        maxLengthFirstRow = 21;
        maxLenghtSecondRow = 31;
        ss_form_element = "metSearchForm";


        textOverLayDivBack = "overlayerback";

        textBoxID = "searchInPage";

        //textBoxID="searchInPage";
        maxCharLen = 24;
        autoCompleteEnable = true;
        ss_popup_element_table = 'search_suggest_table';
        ss_popup_element = 'search_suggest';
        isThemeMode = true;
    }
}

function clear_suggestions() {
    ss_dismissed = true;
    ss_clear();
}

function clearCache() {
    // alert(ss_cached['i'].g[0].q );
    ss_cached = [];
    // alert('cache cleared');
    timeStamp = new Date().getTime();
    scheduler = setTimeout("clearCache()", cacheTimeOut);
}


function doGetCaretPosition(oField) {

    // Initialize
    var iCaretPos = 0;

    // IE Support
    if (document.selection) {

        // Set focus on the element
        oField.focus();

        // To get cursor position, get empty selection range
        var oSel = document.selection.createRange();

        // Move selection start to 0 position
        oSel.moveStart('character', -oField.value.length);

        // The caret position is selection length
        iCaretPos = oSel.text.length;
    }

    // Firefox support
    else if (oField.selectionStart || oField.selectionStart == '0')
        iCaretPos = oField.selectionStart;

    // Return results
    return (iCaretPos);
}


function drawTextBox(suggest) {
    drawTextBox(suggest, null);
}

function isNonPrintableCharacter(e) {
    if (e != null)
        if (typeof e.which == "undefined") {
            // This is IE, which only fires keypress events for printable keys
            return true;
        } else if (typeof e.which == "number" && e.which > 0) {
            // In other browsers except old versions of WebKit, evt.which is
            // only greater than zero if the keypress is a printable key.
            // We need to filter out backspace and ctrl/alt/meta key
            // combinations

            return !e.ctrlKey && !e.metaKey && !e.altKey && e.which != 8;
        }
    return false;
}

/**
 * auto complete text writer
 *
 */
function drawTextBox(suggest, e) {
    var kid = -1;
    if (e != null) {
        kid = (window.event) ? window.event.keyCode : e.keyCode;
    }
    var textBox = document.getElementById(textBoxID);
    var overlayerback = document.getElementById(textOverLayDivBack);
    if (e != null && textEntered == textBox.value) {
        return;
    }
    else {
        textEntered = textBox.value;
    }

    if (textBox.value.length < maxCharLen) {
        if (kid != 37 && kid != 39)// not key left and not key right
        {
            if (suggest != null & suggest != '') {
                overlayerback.style.color = "silver";
                overlayerback.style.visibility = "visible";
                overlayerback.value = textBox.value + suggest;
            }
            else {
                overlayerback.style.visibility = "hidden";
            }
        }
    }
    else {
        overlayerback.style.color = "#ffffff";
    }
}

/**
 * Composes the suggest URI to be sent to EnterpriseFrontend. Extracts the user
 * input from the suggest form and then formats the URI based on that.
 *
 * @param {string}
 *            qVal The query string.
 * @param {Element}
 *            suggestForm The suggest form node.
 *
 * @return {string} The composed URI.
 */
function ss_composeSuggestUri(qVal, suggestForm) {
    /*
     * var siteVal = suggestForm.site ? suggestForm.site.value : null; var clientVal =
     * suggestForm.client ? suggestForm.client.value : null; if (!qVal || !siteVal ||
     * !clientVal) { return null; } var accessVal = (suggestForm.access &&
     * suggestForm.access.value) ? suggestForm.access.value : 'p';
     */
    var uri = ajaxURL;
    if (!qVal) {
        return null;
    }
    if (SS_OUTPUT_FORMAT_LEGACY == ss_protocol) {
        uri = uri + '?token=' + encodeURIComponent(qVal) +
            '&max_matches=' + ss_g_max_to_display;
    } else {
        // Same param names for other two formats.
        uri = uri + '?q=' + encodeURIComponent(qVal) +
            '&max=' + ss_g_max_to_display + '&cts=' + timeStamp;
    }
    /*
     * '&site=' + encodeURIComponent(siteVal)+ '&client=' +
     * encodeURIComponent(clientVal) + '&access=' +
     * encodeURIComponent(accessVal) +
     */
    uri = uri +
        '&format=' + encodeURIComponent(ss_protocol);
    uri += '&client=' + encodeURIComponent(dataSuggestionsFrontEnd) + "&site=" + encodeURIComponent(dataSuggestionsSite);
    return uri;
}

/**
 * Submits a suggest query to the EnterpriseFrontend.
 *
 * Also defines a nested function handler that is called when suggest results
 * are fetched. The handler function parses the JSON response to extract dynamic
 * result clusters, and document matches.
 *
 * @param {string}
 *            qVal The query that user enters.
 */
// TODO: This function is too big and needs to be re-factored.
function ss_suggest(qVal) {
    var startTimeMs = new Date().getTime();
    if (!ss_cached[qVal]) {
        ss_cached[qVal] = {};
    }
    var suggestForm = document.getElementById(ss_form_element);
    var uri = ss_composeSuggestUri(qVal, suggestForm);
    if (!uri) {
        return;
    }

    var url = ss_gsa_host ? 'http://' + ss_gsa_host + uri : uri;
    if (ss_panic) {
        // alert('ss_suggest() AJAX: ' + url);
    }
    var xmlhttp = XH_XmlHttpCreate();
    var handler = function () {

        if (xmlhttp.readyState == XML_READY_STATE_COMPLETED) {
            if (xmlhttp.status != null && xmlhttp.status != 200) {
                failCount++;
            }
            else {
                failCount = 0;
            }
            if (failCount >= failCountMaxTries) {
                if (typeof console != "undefined") {
                    console.info("suggestions disabled " + failCount);
                }
                enableSuggestions = false;
            }
            if (ss_panic) {
                // alert('ss_suggest() AJAX: ' + xmlhttp.responseText);
            }
            var suggested;
            try {
                suggested = eval('(' + xmlhttp.responseText + ')');
                autocompleteList = suggested;
            } catch (e) {
                ss_cached[qVal].g = null;

                // Always try to show suggestion box even if there is no results
                // because previous attempt may be skipped due to concurrent ajax
                // processing.
                ss_show(qVal);
                return;
            }
            if (scheduler == null) {
                scheduler = setTimeout("clearCache()", cacheTimeOut);
            }
            if (ss_use.g) {
                try {
                    switch (ss_protocol) {
                        case SS_OUTPUT_FORMAT_LEGACY:
                        default:
                            var suggestions = suggested;
                            if (suggestions && suggestions.length > 0) {
                                var found = false;
                                ss_cached[qVal].g = [];
                                var max = (ss_g_max_to_display <= 0) ?
                                    suggestions.length :
                                    Math.min(ss_g_max_to_display, suggestions.length);
                                for (var si = 0; si < max; si++) {
                                    ss_cached[qVal].g[si] = {'q': suggestions[si]};
                                    found = true;
                                }
                                if (!found) {
                                    ss_cached[qVal].g = null;
                                }
                            } else {
                                ss_cached[qVal].g = null;
                            }
                            break;
                        case SS_OUTPUT_FORMAT_OPEN_SEARCH:
                            if (suggested.length > 1) {
                                var suggestions = suggested[1];
                                if (suggestions && suggestions.length > 0) {
                                    var found = false;
                                    ss_cached[qVal].g = [];
                                    var max = (ss_g_max_to_display <= 0) ?
                                        suggestions.length :
                                        Math.min(ss_g_max_to_display, suggestions.length);
                                    for (var si = 0; si < max; si++) {
                                        if (suggestions[si] && suggestions[si] != suggested[0]) {
                                            ss_cached[qVal].g[si] = {'q': suggestions[si]};
                                            found = true;
                                        } else if ((suggested.length > 3) && ss_allow_non_query) {
                                            var title = (suggested[2].length > si) ?
                                                null : suggested[2][si];
                                            var url = (suggested[3].length > si) ?
                                                null : suggested[3][si];
                                            if (url) {
                                                title = !title ? ss_non_query_empty_title : title;
                                                ss_cached[qVal].g[si] = {'t': title, 'u': url};
                                                found = true;
                                            }
                                        }
                                    }
                                    if (!found) {
                                        ss_cached[qVal].g = null;
                                    }
                                } else {
                                    ss_cached[qVal].g = null;
                                }
                            } else {
                                ss_cached[qVal].g = null;
                            }
                            break;
                        case SS_OUTPUT_FORMAT_RICH:
                            var suggestions = suggested.results;
                            if (suggestions && suggestions.length > 0) {
                                var found = false;
                                ss_cached[qVal].g = [];
                                var max = (ss_g_max_to_display <= 0) ?
                                    suggestions.length :
                                    Math.min(ss_g_max_to_display, suggestions.length);
                                for (var si = 0; si < max; si++) {
                                    if (suggestions[si].name &&
                                        suggestions[si].name != suggested.query) {
                                        ss_cached[qVal].g[si] = {'q': suggestions[si].name};
                                        found = true;
                                    } else if (ss_allow_non_query) {
                                        var title = suggestions[si].content;
                                        var url = suggestions[si].moreDetailsUrl;
                                        if (url) {
                                            title = !title ? ss_non_query_empty_title : title;
                                            ss_cached[qVal].g[si] = {'t': title, 'u': url};
                                            found = true;
                                        }
                                    }
                                }
                                if (!found) {
                                    ss_cached[qVal].g = null;
                                }
                            } else {
                                ss_cached[qVal].g = null;
                            }
                            break;
                    }
                } catch (e) {
                    ss_cached[qVal].g = null;
                }
            }
            if (ss_allow_debug && ss_debug && ss_debug.getDebugMode()) {
                var stopTimeMs = new Date().getTime();
                ss_debug.addRequestDebugLine(qVal, 'suggest',
                    stopTimeMs - startTimeMs, ss_cached[qVal]);
            }

            // Always try to show suggestion box even if there is no results
            // because previous attempt may be skipped due to concurrent ajax
            // processing.
            ss_show(qVal);
        }
    };
    XH_XmlHttpGET(xmlhttp, url, handler);
}

/**
 * Determines if the query has been processed.
 *
 * @param {string}
 *            qVal The query that user enters.
 * @return {boolean} True if this query is already in cache.
 */
function ss_processed(qVal) {
    if (!ss_cached[qVal] && ss_use.g) {
        return false;
    }
    return true;
}


/**
 * Handles key stroke events for turning debug console on and off.
 */
//probably should add the textahead functionality here.
function ss_handleAllKey(e) {
    if (!enableSuggestions) {
        return;
    }
    var kid = (window.event) ? window.event.keyCode : e.keyCode;
    switch (kid) {
        case 40:  // "key down".
        case 38:  // "key up".
            // If the next line is activated, key down and up will bring search box
            // into focus which is useful if the user happens to click the mouse
            // outside of the search box and the suggestions, but it may not be
            // desirable if you want to use keyboard to scroll the page also, once
            // the
            // key is trapped here, it won't starts move the selection unless we add
            // suggestion movement code here, which would bring side effect to the
            // search box key stroke trapping.
            break;
        case 9:  // "tab".
            ss_qbackup = null;
            ss_dismissed = true;
            ss_clear(true);
        case 16:  // "shift-tab".
            ss_qbackup = null;
            ss_dismissed = true;
            var qry = document.getElementById(ss_form_element).query.value;
            if (!ss_processed(qry)) {
                // Fire new searches for the selected suggestion
                // useful for potential lucky guess.
                if (ss_panic) {
                    // alert('run ajax when key off');
                }
                ss_suggest(qry);
            }
            break;
        case 113:  // "F2".
            if (!ss_allow_debug) {
                break;
            }
            if (ss_debug && ss_debug.getDebugMode()) {
                ss_debug.deactivateConsole();
            } else {
                ss_debug.activateConsole();
            }
            break;
        default:
            break;
    }
}

function isBlockedChar(kid) {
    keyArr = [17, 20, 16, 18, 9, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 91, 92, 93, 45, 33, 34, 144, 145, 19];
    Array.prototype.contains = function (element) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] == element) {
                return true;
            }
        }
        return false;
    }

    return keyArr.contains(kid);
}

/**
 * Handles key stroke events for the search box.
 */
function ss_handleKey(e) {
    if (!enableSuggestions) {
        return;
    }
    var tbl = document.getElementById(ss_popup_element);
    var rows = tbl.getElementsByTagName('tr');
    var kid = (window.event) ? window.event.keyCode : e.keyCode;
    // alert(kid);
    var fo = document.getElementById(ss_form_element);
    var qnow = (!ss_qbackup) ? fo.query.value : ss_qbackup;
    var sum = 0;
    var tbl = document.getElementById(ss_popup_element);
    if (isBlockedChar(kid)) {
        return;
    }
    switch (kid) {
        case 40:  // "key down".
            ss_dismissed = false;
            if (ss_processed(qnow)) {
                sum = ss_countSuggestions(qnow);
                if (sum > 0) {
                    if (tbl.style.visibility == 'hidden') {
                        ss_show(qnow);
                        break;
                    }
                    if (ss_qbackup) {
                        ss_loc++;
                    } else {
                        ss_qbackup = qnow;
                        ss_loc = 0;
                    }
                    while (ss_loc >= sum)
                        ss_loc -= sum;
                    var rows = tbl.getElementsByTagName('tr');
                    for (var ri = 0; ri < rows.length - 1; ri++) {
                        if (ri == ss_loc + 1) {
                            rows[ri].className = SS_ROW_SELECTED_CLASS;
                        } else {
                            rows[ri].className = SS_ROW_CLASS;
                        }
                    }

                    // Find out what type of suggestion it is.
                    var suggestion = ss_locateSuggestion(qnow, ss_loc);

                    // Adjust the query in the search box.
                    if (suggestion.q) {
                        fo.query.value = suggestion.q;
                    } else {
                        fo.query.value = ss_qbackup;
                    }
                }
            } else {
                // May be here if using back button.
                if (ss_panic) {
                    // alert('run ajax when key down');
                }
                ss_suggest(qnow);
            }
            break;
        case 38:  // "key up".
            ss_dismissed = false;
            if (ss_processed(qnow)) {
                sum = ss_countSuggestions(qnow);
                if (sum > 0) {
                    if (tbl.style.visibility == 'hidden') {
                        ss_show(qnow);
                        break;
                    }
                    if (ss_qbackup) {
                        ss_loc--;
                    } else {
                        ss_qbackup = qnow;
                        ss_loc = -1;
                    }
                    while (ss_loc < 0)
                        ss_loc += sum;
                    var rows = tbl.getElementsByTagName('tr');
                    for (var ri = 1; ri < rows.length - 1; ri++) {
                        if (ri == ss_loc + 1) {
                            rows[ri].className = SS_ROW_SELECTED_CLASS;
                        } else {
                            rows[ri].className = SS_ROW_CLASS;
                        }
                    }

                    // Find out what type of suggestion it is.
                    var suggestion = ss_locateSuggestion(qnow, ss_loc);

                    // Adjust the query in the search box.
                    if (suggestion.q) {
                        fo.query.value = suggestion.q;
                    } else {
                        fo.query.value = ss_qbackup;
                    }
                }
            } else {
                // May be here if using back button.
                if (ss_panic) {
                    // alert('run ajax when key up');
                }
                ss_suggest(qnow);
            }
            break;
        case 13:  // "enter".
            var url = null;
            if (ss_processed(qnow) && ss_qbackup && ss_loc > -1) {
                // Find out what type of suggestion it is.
                var suggestion = ss_locateSuggestion(ss_qbackup, ss_loc);
                // Adjust the query in the search box.
                if (suggestion.u) {
                    url = suggestion.u;
                }
            }
            ss_qbackup = null;
            ss_dismissed = true;
            ss_clear();
            if (url) {
                window.location.href = url;
            }
            break;
        case 27:  // "escape".
            // alert("before escape key >"+textEntered);
            /* var x=textEntered; */
            if (ss_qbackup) {
                fo.query.value = ss_qbackup;
                ss_qbackup = null;
            }
            ss_dismissed = true;
            ss_clear();
            // alert("escape key >"+textEntered);
            /*
             * textEntered=x; fo.query.value=x;
             */
            break;
        case 37:  // "key left".
            autoCompleteEnable = false;
            break;
        case 16:  // "shift-tab".
            break;
        case 9:  // "tab".
            break;
        case 35 : // end
            if (!autoCompleteEnable) {
                autoCompleteEnable = true;
            }
            break;
        case 39: // key right
            if (ss_dismissed)
                return;
            if (doGetCaretPosition(fo.query) >= fo.query.value.length) {

                if (!autoCompleteEnable) {
                    autoCompleteEnable = true;
                    break;
                }
                ss_dismissed = false;
                if (ss_processed(qnow)) {
                    sum = ss_countSuggestions(qnow);
                    if (sum > 0) {
                        var queryToBeFilled = "";
                        // Find out what type of suggestion it is.
                        var suggestion = ss_locateSuggestion(qnow, 0);
                        if (suggestion.q) {
                            queryToBeFilled = suggestion.q;
                        }
                        for (var ri = 1; ri < rows.length - 1; ri++) {
                            if (rows[ri].className == SS_ROW_SELECTED_CLASS) {
                                ss_loc = ri - 1;
                                var suggestion = ss_locateSuggestion(ss_qbackup, ss_loc);
                                if (suggestion.q) {
                                    queryToBeFilled = suggestion.q;
                                }
                            }
                        }
                        // Adjust the query in the search box.
                        if (suggestion.q) {
                            fo.query.value = queryToBeFilled;
                            drawTextBox('');
                        }
                    }
                }
                clear_suggestions();
            }
            else {
                autoCompleteEnable = false;
                break;
            }


        default:
            ss_dismissed = false;
            if (fo.query.value == ss_qshown) {
                // The key stroke has not changed the searched text.
            } else {
                if (ss_key_handling_queue) {
                    // Ignore pending key handling request delayed earlier.
                    clearTimeout(ss_key_handling_queue);
                }
                ss_qbackup = null;
                ss_loc = -1;
                // Flow through for delayed AJAX calls.
                ss_waiting++;
                if (ss_allow_debug && ss_debug && ss_debug.getDebugMode()) {
                    ss_debug.addWaitDebugLine(fo.query.value, 'queue', ss_wait_millisec);
                }
                ss_key_handling_queue = setTimeout(
                    'ss_handleQuery("' + ss_escape(fo.query.value) + '", ' +
                    ss_waiting + ')', ss_wait_millisec);
            }
            break;
    }
}

/**
 * Triggers fetch for query suggestions or triggers the display depending on
 * whether the query has already been processed earlier or not.
 *
 * @param {string}
 *            query The query whose suggestions are needed.
 * @param {number}
 *            waiting1 The value to match the lock so as not to handle queries
 *            that are no longer valid.
 */
function ss_handleQuery(query, waiting1) {
    if (waiting1 != ss_waiting) return;
    ss_waiting = 0;
    if (query == '') {
        ss_clear();
    } else if (!ss_processed(query)) {
        if (ss_panic) {
            // alert('run ajax when key change');
        }
        ss_suggest(query);
    } else {
        ss_show(query);
    }
}

/**
 * Puts search box in focus.
 */
function ss_sf() {
    document.getElementById(ss_form_element).query.focus();
    ss_dismissed = false;
}

/**
 * Clears search suggestions.
 *
 * @param {boolean}
 *            nofocus The flag to indicate whether the search box must not be in
 *            focus, such as when user uses the tab key to move away to the
 *            search button(s).
 */
function ss_clear(nofocus) {
    drawTextBox('');
    ss_qshown = null;
    var fo = document.getElementById(ss_form_element);
    var qnow = (!ss_qbackup) ? fo.query.value : ss_qbackup;
    ss_hide(qnow);
    /*
     * if (!nofocus) { ss_sf(); }
     */
}

if ($(".suggestionsbox").length > 0) {
    $('body').on('click touchstart tap', function (event) {
        var target = $(event.target);
        if ($(".suggestionsbox > table").css("visibility") == "visible" && target.closest(".suggestionsbox").length == 0) {
            clear_suggestions();
        }
    });
}
$('.search-trigger__search-box').blur(function() {
    $(this).val('');
});

/**
 * Hides search suggestions.
 *
 * @param {string}
 *            qry The query to which suggestions to be closed.
 */
function ss_hide(qry) {
    //ss_popup_element = search_suggest
    var tbl = document.getElementById(ss_popup_element);
    if (tbl.style.visibility == 'visible') {
        //ss_panic = false;  Never initialized anywhere
        if (ss_panic) {
            // alert('close suggestion box');
        }
        if (ss_allow_debug && ss_debug && ss_debug.getDebugMode()) {
            ss_debug.addHideDebugLine(qry, 'hide');
        }
        tbl.style.visibility = 'hidden';
        // custom change
        document.getElementById(ss_popup_element_table).style.visibility = 'hidden';
    }
}

/**
 * Shows search suggestions.
 *
 * @param {string}
 *            qry The query to which suggestions to be presented.
 */
function ss_show(qry) {
    var currentQry = document.getElementById(ss_form_element).query.value;
    if (currentQry != qry) {
        // The query whose suggestions to be shown does not match the current query
        // this happens when the previous query takes much longer to process.
        if (ss_allow_debug && ss_debug && ss_debug.getDebugMode()) {
            ss_debug.addHideDebugLine(qry, 'skip');
        }
        return;
    }

    var startTimeMs = new Date().getTime();
    if (ss_dismissed) {
        // The suggestion box has been dismissed by mouse close or key
        // escape/enter/tab.
        ss_qshown = null;
        ss_hide(qry);
        return;
    }

    if (!ss_processed(qry)) {
        // Not all ajax calls have been processed, skip instead.
        return;
    }

    if (qry == '') {
        // Empty query should not have much to suggest, close if not already.
        ss_hide(qry);
        return;
    }

    var g = ss_cached[qry] ? ss_cached[qry].g : null;
    var disp = false;
    if (ss_use.g && g) {
        disp = true;
    }
    if (!disp) {
        // Nothing to show for.
        ss_qshown = null;
        ss_hide(qry);
        return;
    }
    // Check the lock.
    if (ss_painting) {
        if (ss_painting_queue) {
            // Ignore potential painting request delayed earlier.
            clearTimeout(ss_painting_queue);
        }
        // Postpone the call for later time.
        if (ss_allow_debug && ss_debug && ss_debug.getDebugMode()) {
            ss_debug.addWaitDebugLine(qry, 'delay', ss_delay_millisec);
        }
        ss_painting_queue = setTimeout('ss_show("' + ss_escape(qry) + '")',
            ss_delay_millisec);
        return;
    } else {
        // Set the lock, which may not be fool-proof when more than another thread
        // checks the lock just before.
        ss_painting = true;
    }
    var tbl = document.getElementById(ss_popup_element);
    for (var ri = tbl.rows.length - 1; ri > -1; ri--) {
        tbl.deleteRow(ri);
    }
    var cnt = 0;
    for (var z = 0; z < ss_seq.length; z++) {
        switch (ss_seq[z]) {
            case 'g':
                cnt += ss_showSuggestion(g, cnt, tbl, qry);
                break;
        }
        if (ss_max_to_display > 0 && cnt >= ss_max_to_display) {
            break;
        }
    }
    if (cnt > 0) {

        var row = tbl.insertRow(-1);
        row.className = 'ss-gac-e';
        var cls = document.createElement('td');
        cls.colSpan = 2;
        var clsTxt = document.createElement('span');
        clsTxt.onclick = function () {
            ss_qbackup = null;
            ss_clear();  // This will always turn off ss_dismiss after bring search
                         // box into focus.
            var query = document.getElementById(ss_form_element).query.value;
            if (!ss_processed(query)) {
                // Fire new searches for the selected suggestion
                // useful for potential lucky guess.
                ss_dismissed = true;
                if (ss_panic) {
                    // alert('run ajax when mouse close');
                }
                ss_suggest(query);
            }
        };
        clsTxt.appendChild(document.createTextNode('close'));
        cls.appendChild(clsTxt);
        row.appendChild(cls);
        tbl.style.visibility = 'visible';
        // custom change
        document.getElementById(ss_popup_element_table).style.visibility = 'visible';
        ss_qshown = qry;
        if (ss_panic) {
            // alert('open suggestion box for ' + qry);
        }
        if (ss_allow_debug && ss_debug && ss_debug.getDebugMode()) {
            var stopTimeMs = new Date().getTime();
            ss_debug.addShowDebugLine(qry, stopTimeMs - startTimeMs,
                ss_cached[qry], cnt);
        }
    } else {
        ss_hide(qry);
    }
    // Release the lock.
    ss_painting = false;
}

/**
 * Draws suggestion.
 *
 * @param {object}
 *            g The suggest server entry.
 * @param {number}
 *            cnt The current row index to start drawing.
 * @param {object}
 *            tbl The suggestion box element.
 * @param {string}
 *            qry The user's query.
 * @return {number} Returns the number of suggestions actually drawn.
 */
function ss_showSuggestion(g, cnt, tbl, qry) {
    if (ss_max_to_display > 0 && cnt >= ss_max_to_display) {
        return 0;
    }
    if (g && g.length > 0) {
        lqry = qry.toLowerCase().replace(/\"/g, "");


        var firstrow = tbl.insertRow(-1);
        firstrow.className = SS_ROW_CLASS;
        var firstcol = document.createElement('td');
        firstcol.className = 'ss-gac-c js-searchSuggestions';
        var clue = '';
        if (g.length == 1) {
            clue = ss_g_one_name_to_display;
        } else {
            clue = ss_g_more_names_to_display;
        }
        var secondcol = document.createElement('td');
        secondcol.appendChild(document.createTextNode(clue));
        secondcol.className = 'ss-gac-d';
        firstrow.appendChild(firstcol);
        firstrow.appendChild(secondcol);


        for (var i = 0; i < g.length; i++) {
            var row = tbl.insertRow(-1);
            row.onclick = ss_handleMouseC;
            row.onmousemove = ss_handleMouseM;
            row.className = SS_ROW_CLASS;
            var alt = document.createElement('td');
            // the suggestion will always start with the query.
            if (g[i].q) {
                var tempQ = g[i].q;

                if (tempQ.length > maxLenghtSecondRow)
                    tempQ = tempQ.substr(0, maxLenghtSecondRow) + "..";
                var txtNode = tempQ.substr(0, lqry.length);
                if (g[i].q.length > lqry.length) {
                    txtNode += '<b>' + tempQ.substring(lqry.length) + '</b>';
                    // for first row
                    if (i == 0) {
                        drawTextBox(g[i].q.substring(lqry.length));
                    }
                }
                alt.innerHTML = txtNode;
            } else {
                alt.innerHTML = '<i>' + g[i].t + '</i>';
            }

            alt.className = 'ss-gac-c js-searchSuggestions';
            row.appendChild(alt);
            alt.colSpan = 2;

            if (ss_max_to_display > 0 && cnt + i + 1 >= ss_max_to_display) {
                return i + 1;
            }
        }
        return g.length;
    }
    return 0;
}

/**
 * Handles mouse movement. To be attached to the row on mouse-over.
 *
 * @return {boolean} Always returns true after handling the event.
 * @this {Element}
 */
function ss_handleMouseM() {
    var fo = document.getElementById(ss_form_element);
    var tbl = document.getElementById(ss_popup_element);
    var rows = tbl.getElementsByTagName('tr');
    for (var ri = 1; ri < rows.length - 1; ri++) {
        if (rows[ri] == this && rows[ri].className != SS_ROW_SELECTED_CLASS) {
            // Select the row.
            rows[ri].className = SS_ROW_SELECTED_CLASS;
            // Back up the original query if not already, and adjust the reference
            // index.
            if (!ss_qbackup) {
                ss_qbackup = fo.query.value;
            }
            ss_loc = ri - 1;
            // Find out what type of suggestion it is.
            var suggestion = ss_locateSuggestion(ss_qbackup, ss_loc);
            // Adjust the query in the search box.
            if (suggestion.q) {
                fo.query.value = suggestion.q;
                drawTextBox('');
            } else {
                fo.query.value = ss_qbackup;
                drawTextBox('');
            }
        } else if (rows[ri] != this) {
            rows[ri].className = SS_ROW_CLASS;
        }
    }
    // Bring the search box back into focus to allow the next key down and key
    // up.
    ss_sf();
    return true;
}

/**
 * Handles mouse pressing, while keeping the history in the browser in case back
 * button is used. To be attached to the row on mouse clicking.
 *
 * @this {Element}
 */


suggestionsSearch = function () {

}

function ss_handleMouseC() {
    var fo = document.getElementById(ss_form_element);
    var tbl = document.getElementById(ss_popup_element);
    var rows = tbl.getElementsByTagName('tr');
    for (var ri = 0; ri < rows.length - 1; ri++) {
        if (rows[ri] == this) {
            var x = rows[ri].getElementsByTagName('td');

            $('#searchInPage,#Search').val($(x)[0].innerText);
            console.log($('#searchInPage,#Search').val())
            var searchTerm = $(".search-trigger__search-box").val();
            console.log(searchTerm)

            if ($(".search-trigger__search-box").hasClass("js-oldSearch")) {
                ServicesAPI.legacySearch(searchTerm);
            } else {
                //For Integration we only need this statment
                ServicesAPI.redirectToSearchResultsPage(searchTerm);
            }
            // Back up the original query if not already, and adjust the reference
            // index.
            /* if (!ss_qbackup) {
             ss_qbackup = fo.query.value;
             }
             ss_loc = ri-1;
             // Find out what type of suggestion it is.
             var suggestion = ss_locateSuggestion(ss_qbackup, ss_loc);
             // Adjust the query in the search box.
             if (suggestion.q) {
             fo.query.value = suggestion.q;
             fo.submit();
             } else {
             fo.query.value = ss_qbackup;
             if (suggestion.u) {
             // window.location.href = suggestion.u;
             }
             }
             ss_dismissed = true;
             ss_clear();
             break;*/
        }
    }
}

/**
 * Counts the total number of suggestions for the typed query.
 *
 * @param {string}
 *            query The typed query.
 * @return {number} The number of suggestions we have for displaying.
 */
function ss_countSuggestions(query) {
    var cnt = 0;
    for (var i = 0; i < ss_seq.length; i++) {
        switch (ss_seq[i]) {
            case 'g':
                cnt += ss_cached[query].g ? ss_cached[query].g.length : 0;
                break;
        }
        if (ss_max_to_display > 0 && cnt >= ss_max_to_display) {
            return ss_max_to_display;
        }
    }
    return cnt;
}

/**
 * Looks up the suggestion for the typed query.
 *
 * @param {string}
 *            query The typed query.
 * @param {number}
 *            loc The location index of the current suggestion selection.
 *
 * @return {string} The suggestion term for given query at the given loc.
 */
function ss_locateSuggestion(query, loc) {
    var cnt1 = 0;
    var cnt2 = 0;
    var type = null;
    for (var z = 0; z < ss_seq.length; z++) {
        switch (ss_seq[z]) {
            case 'g':
                cnt2 += ss_cached[query].g ? ss_cached[query].g.length : 0;
                break;
        }
        if (loc >= cnt1 && loc < cnt2) {
            switch (ss_seq[z]) {
                case 'g':
                    var qV = ss_cached[query].g[loc - cnt1].q;
                    if (qV) {
                        return {'q': qV};
                    } else {
                        return {'u': ss_cached[query].g[loc - cnt1].u};
                    }
            }
            break;
        }
        cnt1 = cnt2;
    }
    return null;
}

/**
 * Escapes query to be used in setTimeout().
 *
 * @param {string}
 *            query The query whose suggestions are needed.
 * @return {string} The escaped query.
 */
function ss_escape(query) {
    return query.replace(/\\/g, '\\\\').replace(/\"/g, '\\\"');
}

/**
 * Escapes query to be used in debugging display.
 *
 * @param {string}
 *            query The query whose suggestions are needed.
 * @return {string} The escaped query.
 */
function ss_escapeDbg(query) {
    var escapedQuery = '';
    var ch = query.split('');
    for (var i = 0; i < ch.length; i++) {
        switch (ch[i]) {
            case '&':
                escapedQuery += '&amp;';
                break;
            case '<':
                escapedQuery += '&lt;';
                break;
            case '>':
                escapedQuery += '&gt;';
                break;
            default:
                escapedQuery += ch[i];
                break;
        }
    }
    return escapedQuery;
}

/**
 * Debugger class.
 *
 * @constructor
 */
function ss_Debugger() {
    this.debugMode = false;
}

/**
 * Id of debug console in the DOM Tree.
 *
 * @type {string}
 */
ss_Debugger.DEBUG_CONSOLE_ID = 'ss_debug_console';

/**
 * Id of content node of debug console in the DOM Tree.
 *
 * @type {string}
 */
ss_Debugger.DEBUG_CONTENT_ID = 'ss_debug_content';

/**
 * Id of the button that minimizes/maximizes the debug console.
 *
 * @type {string}
 */
ss_Debugger.DEBUG_TOGGLE_ID = 'ss_debug_toggle';

/**
 * Getter method for debugMode member variable.
 *
 * @return {boolean} The value of debugMode variable.
 */
ss_Debugger.prototype.getDebugMode = function () {
    return this.debugMode;
};

/**
 * Activates debugger console.
 */
ss_Debugger.prototype.activateConsole = function () {
    var console = document.getElementById(ss_Debugger.DEBUG_CONSOLE_ID);
    if (console) {
        console.style.display = 'block';
    } else {
        var dc = document.createElement('div');
        dc.id = ss_Debugger.DEBUG_CONSOLE_ID;
        dc.zIndex = 100;
        dc.className = 'expanded';
        var title = document.createElement('h1');
        title.appendChild(document.createTextNode('GSA Suggest Debug Console'));
        title.style.display = 'inline';
        dc.appendChild(title);
        var actn = document.createElement('div');
        actn.style.float = 'right';
        var btn = document.createElement('button');
        btn.onclick = function (event) {
            var debugContent = document.getElementById(ss_Debugger.DEBUG_CONTENT_ID);
            if (debugContent) {
                for (var ri = debugContent.rows.length - 1; ri > 0; ri--) {
                    debugContent.deleteRow(ri);
                }
            }
        };
        btn.appendChild(document.createTextNode('Clear console'));
        actn.appendChild(btn);
        btn = document.createElement('button');
        btn.onclick = function (event) {
            ss_cached = [];
        };
        btn.appendChild(document.createTextNode('Clear cache'));
        actn.appendChild(btn);
        btn = document.createElement('button');
        btn.id = ss_Debugger.DEBUG_TOGGLE_ID;
        btn.onclick = function (event) {
            var debugConsole = document.getElementById(ss_Debugger.DEBUG_CONSOLE_ID);
            if (debugConsole) {
                var b = document.getElementById(ss_Debugger.DEBUG_TOGGLE_ID);
                if (debugConsole.className.indexOf('expanded') != -1) {
                    debugConsole.className = debugConsole.className.replace(
                        /expanded/, 'contracted');
                    b.innerHTML = 'Maximize';
                } else {
                    debugConsole.className = debugConsole.className.replace(
                        /contracted/, 'expanded');
                    b.innerHTML = 'Minimize';
                }
            }
        };
        btn.appendChild(document.createTextNode('Minimize'));
        actn.appendChild(btn);
        actn.style.display = 'inline';
        dc.appendChild(actn);
        dc.appendChild(document.createElement('br'));
        var pane = document.createElement('table');
        pane.id = ss_Debugger.DEBUG_CONTENT_ID;
        var dhr = pane.insertRow(-1);
        var dhc = document.createElement('th');
        dhc.innerHTML = 'Query';
        dhr.appendChild(dhc);
        dhc = document.createElement('th');
        dhc.innerHTML = 'Type';
        dhr.appendChild(dhc);
        dhc = document.createElement('th');
        dhc.innerHTML = 'Time';
        dhr.appendChild(dhc);
        dhc = document.createElement('th');
        dhc.innerHTML = 'g';
        dhr.appendChild(dhc);
        dhc = document.createElement('th');
        dhc.innerHTML = 'Total';
        dhr.appendChild(dhc);
        dc.appendChild(pane);
        document.body.appendChild(dc);
    }
    this.debugMode = true;
};

/**
 * De-activates debugger console.
 */
ss_Debugger.prototype.deactivateConsole = function () {
    var console = document.getElementById(ss_Debugger.DEBUG_CONSOLE_ID);
    if (console) {
        console.style.display = 'none';
    }
    this.debugMode = false;
};

ss_Debugger.prototype.addRequestDebugLine = function (query, type, time, obj) {
    var debugContent = document.getElementById(ss_Debugger.DEBUG_CONTENT_ID);
    if (debugContent) {
        var currentRow = debugContent.insertRow(1);
        var currentCell = document.createElement('td');
        currentCell.innerHTML = '&lt;' + ss_escapeDbg(query) + '&gt;';
        currentRow.appendChild(currentCell);
        currentCell = document.createElement('td');
        currentCell.innerHTML = type;
        currentRow.appendChild(currentCell);
        currentCell = document.createElement('td');
        currentCell.className = 'no';
        currentCell.innerHTML = time + ' ms';
        currentRow.appendChild(currentCell);
        switch (type) {
            case 'suggest':
                currentCell = document.createElement('td');
                currentCell.className = 'no';
                currentCell.innerHTML = (obj.g ? obj.g.length : 0);
                currentRow.appendChild(currentCell);
                currentCell = document.createElement('td');
                currentRow.appendChild(currentCell);
                break;
            default:
                currentCell = document.createElement('td');
                currentRow.appendChild(currentCell);
                currentCell = document.createElement('td');
                currentRow.appendChild(currentCell);
                break;
        }
    }
};

ss_Debugger.prototype.addShowDebugLine = function (query, time, o, total) {
    var debugContent = document.getElementById(ss_Debugger.DEBUG_CONTENT_ID);
    if (debugContent) {
        var currentRow = debugContent.insertRow(1);
        var currentCell = document.createElement('td');
        currentCell.innerHTML = '&lt;' + ss_escapeDbg(query) + '&gt;';
        currentRow.appendChild(currentCell);
        currentCell = document.createElement('td');
        currentCell.innerHTML = '<i>show</i>';
        currentRow.appendChild(currentCell);
        currentCell = document.createElement('td');
        currentCell.className = 'no';
        currentCell.innerHTML = time + ' ms';
        currentRow.appendChild(currentCell);
        currentCell = document.createElement('td');
        currentCell.className = 'no';
        currentCell.innerHTML = (o ? (o.g ? o.g.length : 0) : 0);
        currentRow.appendChild(currentCell);
        currentCell = document.createElement('td');
        currentCell.className = 'no';
        currentCell.innerHTML = total;
        currentRow.appendChild(currentCell);
    }
};

ss_Debugger.prototype.addHideDebugLine = function (query, type) {
    var debugContent = document.getElementById(ss_Debugger.DEBUG_CONTENT_ID);
    if (debugContent) {
        var currentRow = debugContent.insertRow(1);
        var currentCell = document.createElement('td');
        currentCell.innerHTML = '&lt;' + ss_escapeDbg(query) + '&gt;';
        currentRow.appendChild(currentCell);
        currentCell = document.createElement('td');
        currentCell.innerHTML = '<i>' + type + '</i>';
        currentRow.appendChild(currentCell);
        currentCell = document.createElement('td');
        currentCell.className = 'no';
        currentCell.innerHTML = '0 ms';
        currentRow.appendChild(currentCell);
        currentCell = document.createElement('td');
        currentRow.appendChild(currentCell);
        currentCell = document.createElement('td');
        currentRow.appendChild(currentCell);
    }
};

ss_Debugger.prototype.addWaitDebugLine = function (query, type, time) {
    var debugContent = document.getElementById(ss_Debugger.DEBUG_CONTENT_ID);
    if (debugContent) {
        var currentRow = debugContent.insertRow(1);
        var currentCell = document.createElement('td');
        currentCell.innerHTML = '&lt;' + ss_escapeDbg(query) + '&gt;';
        currentRow.appendChild(currentCell);
        currentCell = document.createElement('td');
        currentCell.innerHTML = '<i>' + type + '</i>';
        currentRow.appendChild(currentCell);
        currentCell = document.createElement('td');
        currentCell.className = 'no';
        currentCell.innerHTML = time + ' ms';
        currentRow.appendChild(currentCell);
        currentCell = document.createElement('td');
        currentRow.appendChild(currentCell);
        currentCell = document.createElement('td');
        currentRow.appendChild(currentCell);
    }
};

var ss_use = {};
ss_use.g = ss_seq.indexOf('g') >= 0;
$(".campaign-header-right").click(function () {
    $(".campaign-header__popup").toggle();
    $(".campaign-header__popup").toggleClass('open');
});

$(window).scroll(function () {
    var stickyOffset = $('.campaign-header').height() + 20;
    var scrollPos = $(window).scrollTop();
    if (scrollPos >= stickyOffset) {
        $(".campaign-header").addClass("campaign-header-on-scroll");

    } else {
        $(".campaign-header").removeClass("campaign-header-on-scroll");
    }

    if(scrollPos > 5) {
        $('.global-header__logo').addClass('global-header__logo--minimized');
    } else {
        $('.global-header__logo').removeClass('global-header__logo--minimized')
    }
});
//$(document).ready(function(){
//    setElementsWidthToLargest($(".matching-element-width"));
//});



$(".campaign-contact-form .form-user-grp input, .campaign-contact-form .form-user-grp select, .campaign-contact-form .form-user-grp textarea").on("focus",function(){
    $(".campaign-contact-form .contactDisclaimer").css("display", "block");
});

$(".campaign-card .campaign-tel").on("click",function(e){
    if($(".hidden-xs").is(":visible")){
        e.preventDefault();

    }
});


function setElementsWidthToLargest(elements) {
    var maxWidth = 0;
    elements.each(function (index) {
        maxWidth = $(this).innerWidth() > maxWidth ? $(this).innerWidth() : maxWidth;
    });

    elements.each(function (index) {
        $(this).css("width", maxWidth);
    });
}
/**
 * Created by icunningham on 2/12/2016.
 */

// Case Insensitive ":contains"
$.expr[":"].contains = $.expr.createPseudo(function (arg) {
    return function (elem) {
        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
});


if ($(".glossary").length > 0) {
    // Initialize the Glossary Selector
    glossarySelectorInitialize();

    // Swipe for Glossary Letter Selector
    $(".glossary-selector").swipe({
        swipeLeft: function() {
            var glossary = $(".selector-container");
            var width = parseFloat(glossary[0].style.width);
            var position = width - (100 + parseFloat(glossary[0].style.right));

            if (position > 100) {
                glossary.animate({right: '+=100%'}, "slow");
            } else {
                glossary.animate({right: '+=' + position + '%'}, "slow");
            }
        },
        swipeRight: function() {
            var glossary = $(".selector-container");
            var position = parseFloat(glossary[0].style.right);

            if (position > 100) {
                glossary.animate({right: '-=100%'}, "slow");
            } else {
                glossary.animate({right: '-=' + position + '%'}, "slow");
            }
        }
    });

    // Navigate to Selected Letter
    $(".glossary-selector a").on("click", function (evt) {
        evt.preventDefault();
        if ($(this).hasClass("active")) {
            var height = $(".global-header").height() + $(".glossary-selector .selector").height();
            var location = $(".glossary-group span:contains(" + $(this).attr("data-link") + ")");
            $('html,body').animate({scrollTop: location.offset().top - height}, 'slow');
        }
    });

    // Scroll and Resize for Glossary Selector
    $(window).on({
        scroll: function () {
            glossarySelectorPosition();
        },
        resize: function () {
            glossarySelectorSize()
        }
    });
}

// Initializes the Glossary Selector
function glossarySelectorInitialize() {
    var glossary_letters = $(".glossary-group").find("span").text();
    var selector = $(".glossary-selector");
    var selectorContainer = $(".glossary-selector .selector-container");

    glossary_letters = glossary_letters.toLowerCase().split("").sort();
    selectorContainer.find("a").each(function () {
        var link = $(this);
        var link_letters = link.attr("data-letters").toLowerCase().split("").sort();
        link_letters.forEach(function (val) {
            if (glossary_letters.indexOf(val) > -1) {
                link.addClass("active");
                if (link.attr("data-link") == undefined) {
                    link.attr("data-link", val);
                }
            }
        });
    });
    glossarySelectorSize();

    selectorContainer.css("right", "0%");
    $(".page_title").addClass("glossary-top");

    selector.show();
    selector.addClass("glossary-height");
}

// Resizes the Glossary Selector on
function glossarySelectorSize() {
    var parent = $(".glossary-selector");
    var container, link, length;

    // Set widths for mobile
    if (!$(".hidden-xs").is(":visible") && !parent.hasClass("glossary-mobile")) {
        container = parent.find(".selector-container");
        link = parent.find("a");
        length = link.length;

        // set container width
        if (length <= 3) {
            container.css("width", "100%");
        } else {
            if (link.parent().hasClass("letter-group")) {
                container.css("width", length * 30 + "%");
            } else {
                container.css("width", length * 15 + "%");
            }
        }

        // set letter width
        link.each(function () {
            $(this).css("width", 100 / length + "%");
        });

        parent.removeClass("glossary-nonmobile");
        parent.addClass("glossary-mobile");
    }

    // Set widths for tablet/ desktop
    if ($(".hidden-xs").is(":visible") && !parent.hasClass("glossary-nonmobile")) {
        link = parent.find("a");
        length = link.length;

        // set container width
        parent.find(".selector-container").css("width", "");

        // set letter width
        if (length <= 5) {
            link.each(function () {
                $(this).css("width", "20%");
            });
        } else {
            link.each(function () {
                $(this).css("width", 100 / length + "%");
            });
        }

        parent.removeClass("glossary-mobile");
        parent.addClass("glossary-nonmobile");
    }
}

// Sets the Glossary Selector Position
function glossarySelectorPosition() {
    if ($(window).scrollTop() > $(".glossary-selector").offset().top - $(".global-header").height()) {
        $('.glossary-selector .selector').addClass("fixed");
    } else {
        $('.glossary-selector .selector').removeClass("fixed");
    }
}

if($(".company-search-container").length > 0) {
    var Hashtable = (function () {
        var p = "function";
        var n = (typeof Array.prototype.splice == p) ? function (s, r) {
            s.splice(r, 1)
        } : function (u, t) {
            var s, v, r;
            if (t === u.length - 1) {
                u.length = t
            } else {
                s = u.slice(t + 1);
                u.length = t;
                for (v = 0, r = s.length; v < r; ++v) {
                    u[t + v] = s[v]
                }
            }
        };

        function a(t) {
            var r;
            if (typeof t == "string") {
                return t
            } else {
                if (typeof t.hashCode == p) {
                    r = t.hashCode();
                    return (typeof r == "string") ? r : a(r)
                } else {
                    if (typeof t.toString == p) {
                        return t.toString()
                    } else {
                        try {
                            return String(t)
                        } catch (s) {
                            return Object.prototype.toString.call(t)
                        }
                    }
                }
            }
        }

        function g(r, s) {
            return r.equals(s)
        }

        function e(r, s) {
            return (typeof s.equals == p) ? s.equals(r) : (r === s)
        }

        function c(r) {
            return function (s) {
                if (s === null) {
                    throw new Error("null is not a valid " + r)
                } else {
                    if (typeof s == "undefined") {
                        throw new Error(r + " must not be undefined")
                    }
                }
            }
        }

        var q = c("key"), l = c("value");

        function d(u, s, t, r) {
            this[0] = u;
            this.entries = [];
            this.addEntry(s, t);
            if (r !== null) {
                this.getEqualityFunction = function () {
                    return r
                }
            }
        }

        var h = 0, j = 1, f = 2;

        function o(r) {
            return function (t) {
                var s = this.entries.length, v, u = this.getEqualityFunction(t);
                while (s--) {
                    v = this.entries[s];
                    if (u(t, v[0])) {
                        switch (r) {
                            case h:
                                return true;
                            case j:
                                return v;
                            case f:
                                return [s, v[1]]
                        }
                    }
                }
                return false
            }
        }

        function k(r) {
            return function (u) {
                var v = u.length;
                for (var t = 0, s = this.entries.length; t < s; ++t) {
                    u[v + t] = this.entries[t][r]
                }
            }
        }

        d.prototype = {
            getEqualityFunction: function (r) {
                return (typeof r.equals == p) ? g : e
            }, getEntryForKey: o(j), getEntryAndIndexForKey: o(f), removeEntryForKey: function (s) {
                var r = this.getEntryAndIndexForKey(s);
                if (r) {
                    n(this.entries, r[0]);
                    return r[1]
                }
                return ""
            }, addEntry: function (r, s) {
                this.entries[this.entries.length] = [r, s]
            }, keys: k(0), values: k(1), getEntries: function (s) {
                var u = s.length;
                for (var t = 0, r = this.entries.length; t < r; ++t) {
                    s[u + t] = this.entries[t].slice(0)
                }
            }, containsKey: o(h), containsValue: function (s) {
                var r = this.entries.length;
                while (r--) {
                    if (s === this.entries[r][1]) {
                        return true
                    }
                }
                return false
            }
        };
        function m(s, t) {
            var r = s.length, u;
            while (r--) {
                u = s[r];
                if (t === u[0]) {
                    return r
                }
            }
            return ""
        }

        function i(r, s) {
            var t = r[s];
            return (t && (t instanceof d)) ? t : null
        }

        function b(t, r) {
            var w = this;
            var v = [];
            var u = {};
            var x = (typeof t == p) ? t : a;
            var s = (typeof r == p) ? r : null;
            this.put = function (B, C) {
                q(B);
                l(C);
                var D = x(B), E, A, z = null;
                E = i(u, D);
                if (E) {
                    A = E.getEntryForKey(B);
                    if (A) {
                        z = A[1];
                        A[1] = C
                    } else {
                        E.addEntry(B, C)
                    }
                } else {
                    E = new d(D, B, C, s);
                    v[v.length] = E;
                    u[D] = E
                }
                return z
            };
            this.get = function (A) {
                q(A);
                var B = x(A);
                var C = i(u, B);
                if (C) {
                    var z = C.getEntryForKey(A);
                    if (z) {
                        return z[1]
                    }
                }
                return ""
            };
            this.containsKey = function (A) {
                q(A);
                var z = x(A);
                var B = i(u, z);
                return B ? B.containsKey(A) : false
            };
            this.containsValue = function (A) {
                l(A);
                var z = v.length;
                while (z--) {
                    if (v[z].containsValue(A)) {
                        return true
                    }
                }
                return false
            };
            this.clear = function () {
                v.length = 0;
                u = {}
            };
            this.isEmpty = function () {
                return !v.length
            };
            var y = function (z) {
                return function () {
                    var A = [], B = v.length;
                    while (B--) {
                        v[B][z](A)
                    }
                    return A
                }
            };
            this.keys = y("keys");
            this.values = y("values");
            this.entries = y("getEntries");
            this.remove = function (B) {
                q(B);
                var C = x(B), z, A = null;
                var D = i(u, C);
                if (D) {
                    A = D.removeEntryForKey(B);
                    if (A !== null) {
                        if (!D.entries.length) {
                            z = m(v, C);
                            n(v, z);
                            delete u[C]
                        }
                    }
                }
                return A
            };
            this.size = function () {
                var A = 0, z = v.length;
                while (z--) {
                    A += v[z].entries.length
                }
                return A
            };
            this.each = function (C) {
                var z = w.entries(), A = z.length, B;
                while (A--) {
                    B = z[A];
                    C(B[0], B[1])
                }
            };
            this.putAll = function (H, C) {
                var B = H.entries();
                var E, F, D, z, A = B.length;
                var G = (typeof C == p);
                while (A--) {
                    E = B[A];
                    F = E[0];
                    D = E[1];
                    if (G && (z = w.get(F))) {
                        D = C(F, z, D)
                    }
                    w.put(F, D)
                }
            };
            this.clone = function () {
                var z = new b(t, r);
                z.putAll(w);
                return z
            }
        }

        return b
    })();
}
if ($(".company-search-container").length > 0) {
    var typesHash = new Hashtable();
    typesHash.put("24 HOUR FITNESS", "A8B");
    typesHash.put("3M", "0WJ");
    typesHash.put("7-ELEVEN", "B1K");
    typesHash.put("7 ELEVEN", "B1K");
    typesHash.put("7ELEVEN", "B1K");
    typesHash.put("A. H. BELO CORPORATION", "BGI");
    typesHash.put("AH BELO CORPORATION", "BGI");
    typesHash.put("A.T. CROSS COMPANY", "0JM");
    typesHash.put("AT CROSS COMPANY", "0JM");
    typesHash.put("AANA", "A5G");
    typesHash.put("AAR CORP", "AIR");
    typesHash.put("AB MAURI FOOD, INC", "AMR");
    typesHash.put("ABB", "017");
    typesHash.put("ABM INDUSTRIES INCORPORATED", "B3P");
    typesHash.put("ABRAXAS CORPORATION", "BKR");
    typesHash.put("ACCELRYS", "A1J");
    typesHash.put("ACCENTURE LLP", "BIH");
    typesHash.put("ACCESSPOINT, L.L.C", "B3R");
    typesHash.put("ACCO BRANDS . INC", "AWP");
    typesHash.put("ACCOUNT SOLUTIONS GROUP, LLC", "AI4");
    typesHash.put("ACCOUNTANTS ON CALL", "AOG");
    typesHash.put("ACE GROUP OF INSURANCE COMPANIES", "017");
    typesHash.put("ACTIVISION BLIZZARD", "A24");
    typesHash.put("ACUITY BRANDS", "BHC");
    typesHash.put("ADC TELECOMMUNICATIONS", "07M");
    typesHash.put("ADECCO", "017");
    typesHash.put("ADENA REGIONAL HEALTH SYSTEMS", "BTX");
    typesHash.put("ADMIRAL BEVERAGE CORPORATION", "AFK");
    typesHash.put("ADMIRALS BANK", "B6N");
    typesHash.put("ADOBE SYSTEMS INC", "A59");
    typesHash.put("ADP", "017");
    typesHash.put("ADP TOTALSOURCE, INC.", "017");
    typesHash.put("ADT, LLC", "B1U");
    typesHash.put("ADVANCE AUTO PARTS", "A56");
    typesHash.put("ADVANCED RESOURCE TECHNOLOGIES", "ATS");
    typesHash.put("ADVANTAGE NURSING SERVICES", "BQD");
    typesHash.put("ADVENTIST HEALTH SYSTEM/WEST", "017");
    typesHash.put("ADVOCATE HEALTH CARE", "04N");
    typesHash.put("AECOM", "017");
    typesHash.put("AEGIS MEDIA NORTH AMERICA", "A85");
    typesHash.put("AEROBICS & FITNESS ASOC. OF AMERICA", "BMJ");
    typesHash.put("AEROPOSTALE INC.", "BZQ");
    typesHash.put("AFFILIATED DISTRIBUTORS", "A5M");
    typesHash.put("AFFILIATED OPTOMETRISTS OF WALMART", "BXS");
    typesHash.put("AFFINITYTESTING DO NOT USE", "BTZ");
    typesHash.put("AFSCME COUNCIL 93 BOSTON", "B4R");
    typesHash.put("AFSCME COUNCIL 93 SUMUP", "BYX");
    typesHash.put("AFSCME MAINE MEMBERSHIP BENEFIT FND", "BXU");
    typesHash.put("AFSCME RETIREE CHAPTER 93", "BSH");
    typesHash.put("AGC AMERICA, INC.", "AE8");
    typesHash.put("AGCO CORPORATION", "02X");
    typesHash.put("AGGREGATE INDUSTRIES", "0ZU");
    typesHash.put("AGL RESOURCES INC", "AX9");
    typesHash.put("AGRI MARK", "B2T");
    typesHash.put("AGRICREDIT ACCEPTANCE COMPANY", "0EK");
    typesHash.put("AIMIA PROPRIETARY LOYALTY U.S. INC.", "BO4");
    typesHash.put("AIR EVAC SERVICES INC", "0JO");
    typesHash.put("AIR METHODS CORPORATION", "B4V");
    typesHash.put("AIRBORN MANAGEMENT, INC.", "AKC");
    typesHash.put("AIRGAS, INC.", "0VV");
    typesHash.put("AIRLINE TRAINING CENTER ARIZONA, IN", "AQO");
    typesHash.put("AJCP", "A4D");
    typesHash.put("AKIMA, LLC", "BN3");
    typesHash.put("AKRON GENERAL HEALTH SYSTEM", "A83");
    typesHash.put("ALAMEDA COUNTY MEDICAL CENTER", "BNJ");
    typesHash.put("ALAMOSA SCHOOL DISTRICT", "0VS");
    typesHash.put("ALASKA AIR GROUP", "BV0");
    typesHash.put("ALBANY INTERNATIONAL", "BNB");
    typesHash.put("ALBEMARLE CORPORATION", "B1Y");
    typesHash.put("ALBERTSON'S INC", "ACR");
    typesHash.put("ALBERTSON'S LLC", "017");
    typesHash.put("ALCOA", "A9I");
    typesHash.put("ALEGENT CREIGHTON HEALTH", "07G");
    typesHash.put("ALENT, INC", "0S1");
    typesHash.put("ALEXANDRIA EXTRUSION COMPANY", "0PO");
    typesHash.put("ALIANTE GAMING, LLC", "B19");
    typesHash.put("ALIGN TECHNOLOGY", "BRG");
    typesHash.put("ALKERMES INC", "BA1");
    typesHash.put("ALLEGIS GROUP", "AQ8");
    typesHash.put("ALLERGAN INC", "A50");
    typesHash.put("ALLIANCE DATA SYSTEMS", "AZ8");
    typesHash.put("ALLIANCE FOR AFFORDABLE SERVICES", "BVU");
    typesHash.put("ALLIANCE HEALTHCARE SERVICES", "ALB");
    typesHash.put("ALLIANCE RESIDENTIAL, LLC", "BR8");
    typesHash.put("ALLIANT ENERGY", "09U");
    typesHash.put("ALLIANT TECHSYSTEMS", "0RF");
    typesHash.put("ALLIANZ", "BA5");
    typesHash.put("ALLIED HOLDINGS, INC.", "AY2");
    typesHash.put("ALLINA HEALTH SYSTEM", "017");
    typesHash.put("ALLISON TRANSMISSION, INC.", "BNL");
    typesHash.put("ALLSCRIPTSMISYS HEALTHCARE SOLUTION", "AYB");
    typesHash.put("ALPHA NATURAL RESOURCES, INC.", "BVR");
    typesHash.put("ALPHARMA USPD", "0S3");
    typesHash.put("ALPHASOFT SERVICES CORPORATION", "ACK");
    typesHash.put("ALPHASTAFF INC", "BOW");
    typesHash.put("ALSAC, ST. JUDE CHILDRENS RESEARCH", "BCT");
    typesHash.put("ALSTOM", "AV4");
    typesHash.put("ALTEGRITY, INC.", "BSC");
    typesHash.put("ALTERA CORPORATION", "AZR");
    typesHash.put("ALTERNATIVE RESOURCES CORPORATION", "ADF");
    typesHash.put("ALTOONA REGIONAL HEALTH SYSTEM", "BBW");
    typesHash.put("ALTRIA", "017");
    typesHash.put("ALUMNI ASSOC COLLEGE OF LAKE COUNTY", "BBH");
    typesHash.put("AMADEUS AMERICAS INC", "BCS");
    typesHash.put("AMALGAMATED LIFE INSURANCE", "BJZ");
    typesHash.put("AMBROSE EMPLOYER GROUP LLC", "BUB");
    typesHash.put("AMDOCS", "A54");
    typesHash.put("AMERICA SERVICE GROUP", "AKM");
    typesHash.put("AMERICAN ACADEMY OF OTOLARYNGOLOGY", "BSW");
    typesHash.put("AMERICAN AIRLINES", "AXZ");
    typesHash.put("AMERICAN ASSOCIATION OF CLINICAL EN", "BPQ");
    typesHash.put("AMERICAN BASS ANGLERS ASSOCIATION", "B35");
    typesHash.put("AMERICAN BOATING ASSOCIATION, INC", "BGX");
    typesHash.put("AMERICAN BUREAU OF SHIPPING", "0GQ");
    typesHash.put("AMERICAN CANCER SOCIETY", "A7D");
    typesHash.put("AMERICAN CENTURY SERVICES, LLC", "APO");
    typesHash.put("AMERICAN CHAMBER OF COMMERCE", "BSN");
    typesHash.put("AMERICAN CHIROPRACTIC ASSOCIATION", "BIP");
    typesHash.put("AMERICAN COLLEGE OF OSTEOPATHIC FAM", "BS8");
    typesHash.put("AMERICAN COMMERCIAL LINES, LLC", "A8T");
    typesHash.put("AMERICAN COUNCIL OF ENGINEERING", "017");
    typesHash.put("AMERICAN DIABETES ASSOCIATION", "BV5");
    typesHash.put("AMERICAN EAGLE AIRLINES, INC", "BTS");
    typesHash.put("AMERICAN ELECTRIC POWER", "0AD");
    typesHash.put("AMERICAN EXPRESS BANKING CORP", "017");
    typesHash.put("AMERICAN FEDERATION OF GOVT EMPLOYE", "BSB");
    typesHash.put("AMERICAN FEDERATION OF TEACHERS", "BOS");
    typesHash.put("AMERICAN FEDERATION OF TEACHERS,CT", "A4G");
    typesHash.put("AMERICAN GREETINGS", "0UT");
    typesHash.put("AMERICAN HOTEL REGISTER COMPANY", "0Y0");
    typesHash.put("AMERICAN HUMANE ASSOCIATION", "BU1");
    typesHash.put("AMERICAN MASSAGE THERAPY ASSOC", "BGD");
    typesHash.put("AMERICAN PACKAGING CORP.", "0SN");
    typesHash.put("AMERICAN POSTAL WORKERS UNION", "BCX");
    typesHash.put("AMERICAN RADIO RELAY LEAGUE", "BDN");
    typesHash.put("AMERICAN RED CROSS", "017");
    typesHash.put("AMERICAN REPROGRAPHICS COMPANY", "BBZ");
    typesHash.put("AMERICAN SHOWA", "ASF");
    typesHash.put("AMERICAN SYSTEMS CORPORATION", "BK3");
    typesHash.put("AMERICAN TIRE DISTRIBUTORS INC.", "AMU");
    typesHash.put("AMERICAN UNIVERSITY", "BOD");
    typesHash.put("AMERICAN VETERANS", "BRW");
    typesHash.put("AMERICANS FOR FINANCIAL SECURITY", "BU6");
    typesHash.put("AMERICOLD LOGISTICS", "05A");
    typesHash.put("AMERIGROUP CORPORATION", "BHX");
    typesHash.put("AMERISOURCE BERGEN", "A1B");
    typesHash.put("AMERLUX, INC,", "B2A");
    typesHash.put("AMTROL INCORPORATED", "0L3");
    typesHash.put("AMWAY", "BGJ");
    typesHash.put("ANACOMP", "0MM");
    typesHash.put("ANALOG DEVICES, INC.", "BRK");
    typesHash.put("ANALOGIC CORPORATION", "BPJ");
    typesHash.put("ANALYSTS INTERNATIONAL", "0VM");
    typesHash.put("ANDRITZ INC", "0LM");
    typesHash.put("ANGIOTECH PHARMACEUTICALS INC", "BM4");
    typesHash.put("ANIXTER, INC.", "BPM");
    typesHash.put("ANSALDO STS UNA, INC.", "AXG");
    typesHash.put("ANSCHUTZ ENTERTAINMENT GROUP, INC", "BP3");
    typesHash.put("ANSON COUNTY SCHOOLS", "AYT");
    typesHash.put("ANSWERTHINK CONSULTING GROUP", "AWX");
    typesHash.put("ANTHEM EDUCATION GROUP", "ANR");
    typesHash.put("ANZA, INC.", "0YX");
    typesHash.put("AON CORPORATION", "BV2");
    typesHash.put("APACHE JUNCTION UNIFIED SCHOOL", "BRF");
    typesHash.put("APPLE INC", "BPO");
    typesHash.put("APPLEBEE'S INTERNATIONAL", "A6Y");
    typesHash.put("APPLETON COATED", "AFQ");
    typesHash.put("APPLICA CONSUMER PRODUCTS INC.", "0LV");
    typesHash.put("APPLIED TECHNOLOGY SYSTEMS, INC.", "ACL");
    typesHash.put("APRIA HEALTH", "A1H");
    typesHash.put("APS HEALTHCARE INC", "BH3");
    typesHash.put("APTARGROUP", "AP4");
    typesHash.put("APTIS", "0UU");
    typesHash.put("ARAMARK CORPORATION", "017");
    typesHash.put("ARBOR HOUSE ASSISTED LIVING CENTER", "B4N");
    typesHash.put("ARCHSTONE COMMUNITIES", "BU0");
    typesHash.put("AREVA INC", "BQB");
    typesHash.put("ARIZONA CHARTER SCHOOL", "BC6");
    typesHash.put("ARIZONA GOLF ASSOCIATION", "BGU");
    typesHash.put("ARIZONA STATE UNIVERSITY", "AZH");
    typesHash.put("ARKANSAS STATE EMPLOYEE ASSOCIATION", "BLV");
    typesHash.put("ARMED SERV. BEN.", "017");
    typesHash.put("ARMED SERVICES MUTUAL BENEFIT ASSOC", "A98");
    typesHash.put("ARMSTRONG WORLD INDUSTRIES", "AN7");
    typesHash.put("ARNOLD WORLDWIDE CORPORATION", "A76");
    typesHash.put("ARNOT OGDEN MEDICAL CENTER", "02N");
    typesHash.put("ARQULE", "0QW");
    typesHash.put("ARRIS", "0FU");
    typesHash.put("ARROW ELECTRONICS INC.", "AAZ");
    typesHash.put("ARROW EXTERMINATORS, INC.", "B5O");
    typesHash.put("ARUP LABORATORIES", "AWL");
    typesHash.put("ASCAP", "0HY");
    typesHash.put("ASCEND ONE CORPORATION", "ADJ");
    typesHash.put("ASHEVILLE-BUNCOMBE TECH COMMUNITY", "0HJ");
    typesHash.put("ASHLAND INC.", "017");
    typesHash.put("ASML US, INC.", "AR9");
    typesHash.put("ASPECT SOFTWARE INC.", "AOI");
    typesHash.put("ASPIRE", "0HX");
    typesHash.put("ASPIRE FCU", "BCM");
    typesHash.put("ASPIRUS, INC.", "BAD");
    typesHash.put("ASSOCIATED CREDIT UNION OF TEXAS", "BY8");
    typesHash.put("ASSOCIATED FOOD STORES", "094");
    typesHash.put("ASSOCIATED INDUSTRIES", "BZ3");
    typesHash.put("ASSOCIATED MATERIALS INCORPORATED", "A84");
    typesHash.put("ASSOCIATION OF AMERICAN MEDICAL COL", "A4Y");
    typesHash.put("ASTRAZENECA PHARMACEUTICALS LP", "A02");
    typesHash.put("ASTRONICS CORPORATION", "A48");
    typesHash.put("ASURION INSURANCE SERVICES INC", "BHQ");
    typesHash.put("AT&T", "017");
    typesHash.put("AT&T", "017");
    typesHash.put("ATARI", "0P9");
    typesHash.put("ATI LADISH LLC", "0DR");
    typesHash.put("ATKINS", "A46");
    typesHash.put("ATKORE INTERNATIONAL LTD", "BUA");
    typesHash.put("ATMOS ENERGY CORP", "A22");
    typesHash.put("ATR INTERNATIONAL, INC", "A7Q");
    typesHash.put("AUBURN COMMUNITY HOSPITAL", "0TL");
    typesHash.put("AUSTIN INDEPENDENT SCHOOL DISTRICT", "B3V");
    typesHash.put("AUTODESK, INC.", "AO5");
    typesHash.put("AUTOZONE PARTS INC", "BQ5");
    typesHash.put("AVAYA", "ABR");
    typesHash.put("AVBORNE INC", "BDK");
    typesHash.put("AVERA MCKENNAN HOSPITAL", "BR0");
    typesHash.put("AVERY DENNISON", "017");
    typesHash.put("AVIATION TECHNICAL SERVICES, INC", "BFQ");
    typesHash.put("AVID TECHNOLOGY", "AWA");
    typesHash.put("AVIS BUDGET GROUP", "AYY");
    typesHash.put("AVISTA CORPORATION", "BMU");
    typesHash.put("AVNET, INC.", "05N");
    typesHash.put("AVON AUTOMOTIVE INC,", "BET");
    typesHash.put("AVON RUBBER & PLASTICS, INC.", "0CV");
    typesHash.put("AXA EQUITABLE LIFE INSURANCE", "BV9");
    typesHash.put("AXCET HR SOLUTIONS", "B1N");
    typesHash.put("AZPB LP D/B/A ARIZONA", "AIJ");
    typesHash.put("B BRAUN MEDICAL INC.", "A1Q");
    typesHash.put("B. BRAUN MEDICAL INC.", "A1Q");
    typesHash.put("BABCOCK AND WILCOX INVESTMENT CO.", "B0B");
    typesHash.put("BADGER METER, INC.", "0BT");
    typesHash.put("BAE SYSTEMS INC", "0XL");
    typesHash.put("BAIN & COMPANY INC.", "0S5");
    typesHash.put("BALFOUR BEATTY CONSTRUCTION", "BRB");
    typesHash.put("BALFOUR BEATTY INVESTMENTS", "BMV");
    typesHash.put("BALFOUR BEATTY, INC.", "A34");
    typesHash.put("BALL STATE UNIVERSITY", "BI5");
    typesHash.put("BALLY TECHNOLOGIES, INC.", "BV4");
    typesHash.put("BALSZ SCHOOL DISTRICT 31", "B07");
    typesHash.put("BALTIMORE GAS & ELECTRIC", "03J");
    typesHash.put("BANCO DE SABADELL SA", "B6M");
    typesHash.put("BANFIELD, THE PET HOSPITAL", "A16");
    typesHash.put("BANK OF AMERICA", "02H");
    typesHash.put("BANK OF THE WEST", "BGR");
    typesHash.put("BANK OF TOKYO - MITSUBISHI UFJ, LTD", "0KQ");
    typesHash.put("BANKERS INSURANCE", "AMM");
    typesHash.put("BANNER HEALTH ARIZONA", "BYD");
    typesHash.put("BAPTIST HEALTH - ARKANSAS", "ADC");
    typesHash.put("BAPTIST HEALTH CARE", "B2M");
    typesHash.put("BARCLAY BANK", "BKK");
    typesHash.put("BARCO, INC.", "A2F");
    typesHash.put("BARNARD COLLEGE", "AJJ");
    typesHash.put("BARNES GROUP, INC.", "AU8");
    typesHash.put("BARRETT BUSINESS SERVICES", "BL5");
    typesHash.put("BARRINGTON BROADCASTING GROUP", "BO7");
    typesHash.put("BARTOW COUNTY SCHOOL SYSTEM", "BV8");
    typesHash.put("BASF", "017");
    typesHash.put("BATES USA", "04I");
    typesHash.put("BATTLE GROUND SCHOOL DISTRICT.", "BX2");
    typesHash.put("BAXTER INTERNATIONAL INC", "BOB");
    typesHash.put("BAYCARE HEALTH SYSTEMS", "BEF");
    typesHash.put("BAYER CORPORATE & BUSINESS SVCS,LLC", "A67");
    typesHash.put("BAYLOR HEALTH CARE SYSTEM", "BTJ");
    typesHash.put("BBDO", "05Q");
    typesHash.put("BD", "AX1");
    typesHash.put("BE&K, INC.", "ABT");
    typesHash.put("BEAULIEU GROUP, LLC", "BAW");
    typesHash.put("BEAUMONT", "017");
    typesHash.put("BEAUMONT SERVICES", "0HM");
    typesHash.put("BECU", "AP5");
    typesHash.put("BEHAVIORAL HEALTH NETWORK, INC", "BGN");
    typesHash.put("BELK STORES", "AXI");
    typesHash.put("BELL AND HOWELL, LLC", "BGG");
    typesHash.put("BELO CORPORATION", "AVM");
    typesHash.put("BELTSERVICE CORPORATION", "0RY");
    typesHash.put("BEMIS COMPANY, INC.", "0TD");
    typesHash.put("BENCHMARK ASSISTED LIVING", "BKE");
    typesHash.put("BENCHMARK ELECTRONICS, INC.", "04J");
    typesHash.put("BENEDICTINE UNIVERSITY", "0EE");
    typesHash.put("BENTLEY COLLEGE", "0AN");
    typesHash.put("BENTLEY SYSTEMS, INC.", "0V0");
    typesHash.put("BENTON EXPRESS, INC.", "AF8");
    typesHash.put("BERKSHIRE PROPERTY ADVISORS", "AQE");
    typesHash.put("BERRY PLASTICS", "BJV");
    typesHash.put("BERTELSMANN, INC.", "A73");
    typesHash.put("BEST WESTERN INTERNATIONAL", "0NQ");
    typesHash.put("BETTERINVESTING", "BUK");
    typesHash.put("BI, INCORPORATED", "0FF");
    typesHash.put("BILL AND MELINDA GATES FOUNDATION", "BN8");
    typesHash.put("BILLY GRAHAM EVANGELISTIC ASSOC.", "0G7");
    typesHash.put("BI-LO, LLC", "BA7");
    typesHash.put("BIMBO BAKERIES USA/WEST", "AZK");
    typesHash.put("BIOGEN", "0AF");
    typesHash.put("BIOMEDICAL ENGINEERING SOCIETY", "BQ0");
    typesHash.put("BLACK & DECKER TAMPA", "0JR");
    typesHash.put("BLACKROCK", "BSI");
    typesHash.put("BLOODCENTER OF WISCONSIN, INC", "B1M");
    typesHash.put("BLOOMBERG LP", "B4Z");
    typesHash.put("BLUE CROSS & BLUE SHIELD / RI", "A0B");
    typesHash.put("BLUE CROSS & BLUE SHIELD OF ARIZONA", "BND");
    typesHash.put("BLUE CROSS BLUE SHIELD OF MASS", "BH1");
    typesHash.put("BLUE CROSS OF IDAHO", "BI0");
    typesHash.put("BLUE CROSS/BLUE SHIELD OF KANSAS CI", "0RT");
    typesHash.put("BLUE CROSS/BLUE SHIELD OF UTICA/WAT", "0RX");
    typesHash.put("BLUE CROSS/C. NY", "0IU");
    typesHash.put("BLUE CROSS/MN", "04G");
    typesHash.put("BLUE CROSS/NC", "075");
    typesHash.put("BLUE RIDGE COMMUNITY COLLEGE", "0GM");
    typesHash.put("BLUE SHIELD OF CALIFORNIA", "017");
    typesHash.put("BLUMBERG EXCELSIOR", "0OU");
    typesHash.put("BLYTH, INC.", "ARD");
    typesHash.put("BMC", "AVP");
    typesHash.put("BMC SOFTWARE", "BAP");
    typesHash.put("BMW MANUFACTURING CORP.", "BNK");
    typesHash.put("BMW OF NORTH AMERICA", "BW6");
    typesHash.put("BNP PARIBAS", "A35");
    typesHash.put("BNY MELLON", "017");
    typesHash.put("BOART LONGYEAR CO", "BL1");
    typesHash.put("BOEHRINGHER INGELHEIM CORPORATION", "08Q");
    typesHash.put("BOISE STATE UNIVERSITY", "BSD");
    typesHash.put("BOOZ & COMPANY", "BLR");
    typesHash.put("BOOZ ALLEN HAMILTON INC", "BV6");
    typesHash.put("BOSLEY, INC", "BB3");
    typesHash.put("BOSTON COLLEGE", "058");
    typesHash.put("BOSTON FINANCIAL DATA SERVICES", "AQC");
    typesHash.put("BOSTON MARKET", "A6I");
    typesHash.put("BOSTON MEDICAL CENTER", "BVO");
    typesHash.put("BOSTON SCIENTIFIC", "017");
    typesHash.put("BOURN'S INC.", "0WG");
    typesHash.put("BOWNE & COMPANY, INC.", "AEK");
    typesHash.put("BP CORPORATION NORTH AMERICA INCORP", "B3I");
    typesHash.put("BRACCO DIAGNOSTICS INC.", "A2C");
    typesHash.put("BRADLEY COUNTY MEDICAL CENTER", "AI5");
    typesHash.put("BRIDGEPOINT EDUCATION, INC.", "BTB");
    typesHash.put("BRIDGESTONE AMERICAS INCORPORATED", "B14");
    typesHash.put("BRISTOL HOSPITAL", "0T1");
    typesHash.put("BROAD INSTITUTE", "BMP");
    typesHash.put("BROADCOM CORP", "BTK");
    typesHash.put("BROADRIDGE FINANCIAL SOLUTIONS, INC", "017");
    typesHash.put("BROCADE COMMUNICATIONS SYSTEMS", "AXS");
    typesHash.put("BROWN SHOE", "017");
    typesHash.put("BRYANT UNIVERSITY", "0B7");
    typesHash.put("BT AMERICAS HOLDINGS, INC.", "A2H");
    typesHash.put("BUCA, INC", "BAT");
    typesHash.put("BUCKS COUNTY COMMUNITY COLLEGE ALU", "BZA");
    typesHash.put("BULL INFORMATION SYSTEMS", "092");
    typesHash.put("BUREAU VERITAS INDUSTRIES & FAC", "BPK");
    typesHash.put("BURT HILL KOSAR RITTELMAN ASSOCIATE", "ARW");
    typesHash.put("BUTLER INTERNATIONAL", "AHU");
    typesHash.put("BUTLER SCHEIN ANIMAL HEALTH", "BTQ");
    typesHash.put("C & M CORPORATION", "0PH");
    typesHash.put("C&M CORPORATION", "0PH");
    typesHash.put("C R ENGLAND", "BMR");
    typesHash.put("C.R. ENGLAND", "BMR");
    typesHash.put("C&S WHOLESALE GROCERS", "AV3");
    typesHash.put("C & S WHOLESALE GROCERS", "AV3");
    typesHash.put("C.H. ROBINSON WORLDWIDE, INC.", "AEB");
    typesHash.put("CH ROBINSON WORLDWIDE, INC.", "AEB");
    typesHash.put("CA, INC", "0EV");
    typesHash.put("CABELA'S INC", "BMQ");
    typesHash.put("CABOT CORPORATION", "0AE");
    typesHash.put("CACI INTERNATIONAL", "AYQ");
    typesHash.put("CADENCE DESIGN SYSTEMS, INC.", "BAN");
    typesHash.put("CAJUN OPERATING COMPANY", "B4W");
    typesHash.put("CALDWELL COMMUNITY COLLEGE", "0QL");
    typesHash.put("CALIFORNIA BUILDERS EXCHANGES INSUR", "B4U");
    typesHash.put("CALIFORNIA CORRECTIONAL SUPERVISORS", "BNV");
    typesHash.put("CALIFORNIA INSTITUTE OF TECHNOLOGY", "B1T");
    typesHash.put("CALPORTLAND", "BEU");
    typesHash.put("CALSONIC KANSEI NORTH AMERICA", "AT3");
    typesHash.put("CAMBRIDGE HEALTH ALLIANCE", "B36");
    typesHash.put("CAMDEN CLARK MEMORIAL HOSPITAL", "A9C");
    typesHash.put("CAMPBELL SOUP COMPANY", "AAA");
    typesHash.put("CANBERRA INDUSTRIES", "B5P");
    typesHash.put("CANTOR FITZGERALD LLC", "0OT");
    typesHash.put("CAPE FEAR COMMUNITY COLLEGE", "ABD");
    typesHash.put("CAPGEMINI AMERICA INC,", "017");
    typesHash.put("CAPITAL DISTRICT PHYSICIANS", "A5J");
    typesHash.put("CAPITAL ONE FINANCIAL CORPORATION", "AYW");
    typesHash.put("CAPSUGEL", "BVH");
    typesHash.put("CARAUSTAR INDUSTRIES", "ARI");
    typesHash.put("CARDINGTON YUTAKA TECHNOLOGIES", "BEM");
    typesHash.put("CARE NEW ENGLAND", "A6M");
    typesHash.put("CARE TECH SOLUTIONS", "0W3");
    typesHash.put("CAREER EDUCATION CORPORATION", "017");
    typesHash.put("CARL ZEISS VISION INC.", "0TO");
    typesHash.put("CARLE FOUNDATION HOSPITAL", "BYK");
    typesHash.put("CARLSON COMPANIES", "03V");
    typesHash.put("CAROLINAS HEALTHCARE SYSTEM", "CHS");
    typesHash.put("CAROMONT HEALTH", "0D1");
    typesHash.put("CARONDELET HEALTH NETWORK", "0E6");
    typesHash.put("CARQUEST", "A27");
    typesHash.put("CARROLL HOSPITAL CENTER", "AX7");
    typesHash.put("CARTERET COMMUNITY COLLEGE", "0RD");
    typesHash.put("CASCADE VALLEY HOSPITAL & CLINICS", "ABG");
    typesHash.put("CASCADES TISSUE GROUP SALES INC.", "BZO");
    typesHash.put("CASE WESTERN RESERVE UNIVERSITY", "ADB");
    typesHash.put("CASTEC, INC.", "BCI");
    typesHash.put("CATERPILLAR", "017");
    typesHash.put("CATERPILLAR INSURANCE SERVICES CORP", "A5O");
    typesHash.put("CATHOLIC HEALTH EAST", "A4R");
    typesHash.put("CB RICHARD ELLIS/WHITTIER PARTNERS", "0V6");
    typesHash.put("CBEYOND COMMUNICATIONS", "BOC");
    typesHash.put("CBS RADIO", "A1V");
    typesHash.put("CDM SMITH", "0A1");
    typesHash.put("CEDARAPIDS,INC.", "0EZ");
    typesHash.put("CEDARS-SINAI MEDICAL CENTER", "BK4");
    typesHash.put("CELANESE AMERICAS CORPORATION", "0C4");
    typesHash.put("CENTEGRA HEALTH SYSTEM", "BVK");
    typesHash.put("CENTERPOINT ENERGY", "BIA");
    typesHash.put("CENTRA SOFTWARE", "AM9");
    typesHash.put("CENTRACARE HEALTH SYSTEM", "0BH");
    typesHash.put("CENTRAL ARIZONA PROJECT", "0NZ");
    typesHash.put("CENTRAL HEALTHCARE SERVICES INC.", "AX5");
    typesHash.put("CENTRAL MAINE MEDICAL CENTER", "ASB");
    typesHash.put("CENTRAL PURCHASING, INC", "BKW");
    typesHash.put("CENTURA HEALTH", "BGT");
    typesHash.put("CENTURION INDUSTRIES", "BS5");
    typesHash.put("CENTURY BANCORP", "AZX");
    typesHash.put("CENTURYLINK", "017");
    typesHash.put("CENVEO", "AVI");
    typesHash.put("CEPHEID", "B0C");
    typesHash.put("CERIDIAN", "AGE");
    typesHash.put("CERTIFIED PUBLIC ACCOUNTS OF NH", "A42");
    typesHash.put("CF INDUSTRIES", "0GX");
    typesHash.put("CGI-AMS INC.", "0IH");
    typesHash.put("CH2M HILL", "017");
    typesHash.put("CHAGRIN FALLS SCHOOLS PPT 81", "0XJ");
    typesHash.put("CHANDLER UNIFIED SCHOOL DISTRICT", "BWO");
    typesHash.put("CHAPARRAL ENERGY", "BQK");
    typesHash.put("CHARLES SCHWAB CORPORATION", "AQT");
    typesHash.put("CHARLOTTE HUNGERFORD HOSPITAL", "04C");
    typesHash.put("CHARLOTTE-MECKLENBURG SCHOOLS", "AU7");
    typesHash.put("CHART INDUSTRIES, INC.", "AGD");
    typesHash.put("CHARTER COMMUNICATIONS, INC.", "BLT");
    typesHash.put("CHARTER HR", "BSS");
    typesHash.put("CHEROKEE COUNTY BOARD OF EDUCATION", "A4J");
    typesHash.put("CHEVRON CORPORATION", "AMN");
    typesHash.put("CHEVRON RETIREE ASSOCIATION", "BU8");
    typesHash.put("CHG COMPANIES INC", "AIF");
    typesHash.put("CHICAGO ASSOCIATION FOR RETARDED CI", "ANQ");
    typesHash.put("CHICAGO BRIDGE & IRON (CB&I)", "AMQ");
    typesHash.put("CHICAGO LIGHTHOUSE", "0MI");
    typesHash.put("CHILDREN'S HEALTH SYSTEM", "AC5");
    typesHash.put("CHILDREN'S HEALTHCARE OF ATLANTA", "01X");
    typesHash.put("CHILDRENS HOME + AIDE SOCIETY OF IL", "0M1");
    typesHash.put("CHILDREN'S HOSPITAL BOSTON", "BE3");
    typesHash.put("CHILDREN'S HOSPITAL MEDICAL CENTER", "AJH");
    typesHash.put("CHILDREN'S MERCY HOSPITAL", "BPU");
    typesHash.put("CHILDRENS SPECIALIZED HOSPITAL", "BQQ");
    typesHash.put("CHIPOTLE MEXICAN GRILL, INC.", "A15");
    typesHash.put("CHRIST HOSPITAL", "BJ0");
    typesHash.put("CHRISTIANA CARE HEALTH SYSTEM", "017");
    typesHash.put("CHRYSLER GROUP LLC", "DCC");
    typesHash.put("CHRYSLER GROUP LLC - REPRESENTED", "DCX");
    typesHash.put("CIENA CORPORATION", "0W5");
    typesHash.put("CIGNA", "017");
    typesHash.put("CINCINNATI BELL, INC.", "BVL");
    typesHash.put("CIT GROUP INC.", "BWX");
    typesHash.put("CITGO PETROLEUM CORPORATION", "BRE");
    typesHash.put("CITI", "BGY");
    typesHash.put("CITIZENS BANK OF NEW HAMPSHIRE", "03A");
    typesHash.put("CITIZENS MEMORIAL HOSPITAL", "AFR");
    typesHash.put("CITY OF AURORA", "A6D");
    typesHash.put("CITY OF AUSTIN TEXAS", "B4Y");
    typesHash.put("CITY OF GRAPEVINE", "BU2");
    typesHash.put("CITY OF HOPE", "A1G");
    typesHash.put("CITY OF MANTECA", "B5N");
    typesHash.put("CITY OF NAPERVILLE", "BYR");
    typesHash.put("CITY OF NORTH LAS VEGAS", "A7S");
    typesHash.put("CITY OF PLANTATION", "BW4");
    typesHash.put("CITY OF TEMPE", "BSZ");
    typesHash.put("CITY OF UNIVERSITY CITY", "A4N");
    typesHash.put("CIVIL SERVICE EMPLOYEES ASSOCIATION", "BTY");
    typesHash.put("CJ MOYNA & SONS", "B47");
    typesHash.put("CKE RESTAURANTS", "BE7");
    typesHash.put("CLARCOR CORPORATION", "0H4");
    typesHash.put("CLARK ATLANTA UNIVERSITY", "BOH");
    typesHash.put("CLAXTON-HEPBURN MEDICAL CENTER", "AJ7");
    typesHash.put("CLEARWIRE CORPORATION", "BOL");
    typesHash.put("CLEVELAND CLINIC FOUNDATION", "0HU");
    typesHash.put("CLEVELAND COUNTY SCHOOLS", "AYV");
    typesHash.put("CLEVELAND REGIONAL MEDICAL CENTER", "AM0");
    typesHash.put("CLIFFS NATURAL RESOURCES INC.", "07C");
    typesHash.put("CLOSED ACCOUNT ADDITIONAL LINES", "AS8");
    typesHash.put("CLOSED ACCOUNT SPIN OFFS", "AS7");
    typesHash.put("CLOSED ACCOUNT STATE TO STATE TRANS", "AS6");
    typesHash.put("CLOW STAMPING COMPANY", "AHV");
    typesHash.put("CLUBCORP INC", "A58");
    typesHash.put("CMWA", "AEX");
    typesHash.put("COASTAL FEDERAL CREDIT UNION", "317");
    typesHash.put("COBHAM DEFENSE ELECTRONIC SYSTEMS", "BIU");
    typesHash.put("COEUR D' ALENE MINES CORPORATION", "0MV");
    typesHash.put("COGNIZANT TECHNOLOGY SOLUTIONS", "A6F");
    typesHash.put("COHERENT, INC.", "ARR");
    typesHash.put("COLDWATER CREEK", "0YQ");
    typesHash.put("COLE HAAN", "B38");
    typesHash.put("COLINX LLC", "AIM");
    typesHash.put("COLLECTION COMPANY OF AMERICA", "0X3");
    typesHash.put("COLLEGE OF NEW ROCHELLE", "0CS");
    typesHash.put("COLLEGE OF ST. BENEDICT", "0FQ");
    typesHash.put("COLLIN COUNTY COMMUNITY COLLEGE", "AN5");
    typesHash.put("COLONIAL PIPELINE COMPANY", "09C");
    typesHash.put("COLORADO COLLEGE", "APJ");
    typesHash.put("COLORADO HEALTH AND HOSPITAL ASCN", "BCG");
    typesHash.put("COLUMBUS REGIONAL HEALTHCARE SYSTEM", "0KP");
    typesHash.put("COMCAST", "017");
    typesHash.put("COMCAST SPECTACOR", "BB7");
    typesHash.put("COMERICA, INC.", "AV1");
    typesHash.put("COMMISSIONED OFFICERS ASSOCIATION O", "BYT");
    typesHash.put("COMMONWEALTH OF PENNSYLVANIA AUTO&H", "B4P");
    typesHash.put("COMMONWEALTH OF VIRGINIA", "AZW");
    typesHash.put("COMMONWEALTH PURCHASING GROUP LLC", "BLH");
    typesHash.put("COMMUNITY CARE PHYSICIANS", "0OF");
    typesHash.put("COMMUNITY COLLEGE OF RI ALUMNI", "BVJ");
    typesHash.put("COMMUNITY HEALTH NETWORK", "03Q");
    typesHash.put("COMMUNITY HIGH SCHOOL DISTRICT 218", "BWV");
    typesHash.put("COMMUNITY NEWSPAPER COMPANY", "AOT");
    typesHash.put("COMPASS BANK", "ANV");
    typesHash.put("COMPASS GROUP", "BWM");
    typesHash.put("COMPASS MINERALS GROUP", "ASI");
    typesHash.put("COMPUCOM SYSTEMS, INC.", "0W4");
    typesHash.put("COMPUTER AID INC", "BI2");
    typesHash.put("COMPUTERSHARE INVESTOR SERVICES", "A32");
    typesHash.put("COMPUWARE CORPORATION", "0KR");
    typesHash.put("COMVERSE INC.", "0A9");
    typesHash.put("CON EDISON", "017");
    typesHash.put("CON EDISON ENERGY", "017");
    typesHash.put("CONAGRA FOODS, INC.", "BGV");
    typesHash.put("CONAIR CORPORATION", "BK2");
    typesHash.put("CONCERTO SOFTWARE", "ATR");
    typesHash.put("CONCORD HOSPITALITY, INC.", "BA9");
    typesHash.put("CONE HEALTH", "A53");
    typesHash.put("CONFORMIS INC", "B4X");
    typesHash.put("CONN. STATE UNIV PROFESSORS", "A8R");
    typesHash.put("CONSERVATIVE50 PLUS", "BV7");
    typesHash.put("CONSOL ENERGY", "A5R");
    typesHash.put("CONSOLIDATED CONTAINER COMPANY LLC", "BF2");
    typesHash.put("CONTINENTAL AG", "0WD");
    typesHash.put("CONTINENTAL AIRLINES, INC.", "AMH");
    typesHash.put("CONTINENTAL GROUP", "BZX");
    typesHash.put("CONTINENTAL HEALTHCARE SYSTEMS INC.", "205");
    typesHash.put("CONTINENTAL MATERIALS GROUP DEL", "A1C");
    typesHash.put("CONTINUUM HEALTH ALLIANCE, LLC", "BSR");
    typesHash.put("CONVATEC", "BWY");
    typesHash.put("CONVERGYS", "AXX");
    typesHash.put("COOSA VALLEY MEDICAL CENTER", "A0X");
    typesHash.put("COPMEA", "BH2");
    typesHash.put("CORBIN RUSSWIN, INC.", "0CD");
    typesHash.put("CORELOGIC INC", "BPD");
    typesHash.put("CORINTHIAN COLLEGES, INC", "017");
    typesHash.put("CORNELL MEDICAL CENTER", "017");
    typesHash.put("CORNELL UNIVERSITY 78", "017");
    typesHash.put("CORNING GILBERT, INC.", "AVJ");
    typesHash.put("CORPORATE EXECUTIVE BOARD", "AV8");
    typesHash.put("CORRECT CARE SOLUTIONS LLC", "BMT");
    typesHash.put("CORVEL CORPORATION", "BB6");
    typesHash.put("COTT BEVERAGES USA", "APU");
    typesHash.put("COUNTY OF MENDOCINO", "BA3");
    typesHash.put("COVAD COMMUNICATIONS", "BAL");
    typesHash.put("COVIDIEN", "06J");
    typesHash.put("CPS SECURITY", "BZW");
    typesHash.put("CREDIT CONTROL SERVICES", "0LQ");
    typesHash.put("CREDIT SUISSE USA, INC.", "BVZ");
    typesHash.put("CREE, INC.", "AP3");
    typesHash.put("CRESCENT REAL ESTATE EQUITIES", "A75");
    typesHash.put("CRICKET COMMUNICATIONS, INC", "A7L");
    typesHash.put("CRITTENDEN MEMORIAL HOSPITAL", "AW6");
    typesHash.put("CRODA, INC.", "AMT");
    typesHash.put("CROUSE HOSPITAL", "BST");
    typesHash.put("CROWLEY MARITIME CORPORATION", "0HP");
    typesHash.put("CRUMP INSURANCE", "A1T");
    typesHash.put("CSC APPLIED TECHNOLOGIES", "A68");
    typesHash.put("CSEA SEIU LOCAL 2001760", "BAR");
    typesHash.put("CSL BEHRING", "B3J");
    typesHash.put("CSX CORPORATION", "088");
    typesHash.put("CTI", "AMS");
    typesHash.put("CUBA MEMORIAL HOSPITAL", "0U7");
    typesHash.put("CULLMAN REGIONAL MEDICAL CENTER", "BO6");
    typesHash.put("CUMBERLAND COUNTY SCHOOLS", "08G");
    typesHash.put("CURTISS-WRIGHT CORPORATION", "BMF");
    typesHash.put("CUSHMAN & WAKEFIELD", "AY9");
    typesHash.put("CUTTER & BUCK", "AH5");
    typesHash.put("CV INDUSTRIES", "AQ5");
    typesHash.put("CVS- PART TIME EMPLOYEES", "017");
    typesHash.put("CYBEX INTERNATIONAL", "017");
    typesHash.put("CYCLING SPORTS GROUP", "0A6");
    typesHash.put("CYMER, INC.", "AJS");
    typesHash.put("CYPRESS HEALTH GROUP", "BUJ");
    typesHash.put("D & S CONSULTANTS, INC.", "B4A");
    typesHash.put("D&S CONSULTANTS, INC.", "B4A");
    typesHash.put("DAIICHI SANKYO, INC.", "AU9");
    typesHash.put("DAIMLER TRUCKS OF NORTH AMERICA", "BAE");
    typesHash.put("DAK AMERICAS LLC", "BBY");
    typesHash.put("DALTON SCHOOLS", "A4W");
    typesHash.put("DANA-FARBER CANCER INSTITUTE", "AHG");
    typesHash.put("DANAHER CORPORATION", "BNU");
    typesHash.put("DANIEL J. EDELMAN, INC.", "AV5");
    typesHash.put("DARDEN RESTAURANTS INC.", "AST");
    typesHash.put("DARTMOUTH PRINTING", "0SU");
    typesHash.put("DATACARD CORPORATION", "BQH");
    typesHash.put("DATALOGIC SCANNING, INC", "A7H");
    typesHash.put("DATAMATICS CONSULTANTS, INC.", "0PN");
    typesHash.put("DATCU CREDIT UNION", "B59");
    typesHash.put("DAVID EVANS & ASSOCIATES", "BOO");
    typesHash.put("DAVID'S BRIDAL", "BWD");
    typesHash.put("DAVITA, INC.", "A6T");
    typesHash.put("DAVOL, INC.", "0XH");
    typesHash.put("DAWN FOOD PRODUCTS", "0TR");
    typesHash.put("DAYTON CHILDREN'S", "B3Y");
    typesHash.put("DAYTON FREIGHT LINES", "BE1");
    typesHash.put("DECATUR MEMORIAL HOSPITAL", "AL6");
    typesHash.put("DEER VALLEY SCHOOL DISTRICT", "AWJ");
    typesHash.put("DEFFENBAUGH INDUSTRIES INC.", "BJK");
    typesHash.put("DEKALB MEDICAL CENTER", "BXH");
    typesHash.put("DELAGE LANDEN FINANCIAL SERV., INC.", "AR0");
    typesHash.put("DELAWARE PARK MANAGEMENT COMPANY", "B2B");
    typesHash.put("DELAWARE RIVER & BAY AUTHORITY", "A01");
    typesHash.put("DELAWARE VALLEY HOSPITAL", "0EG");
    typesHash.put("DELHAIZE AMERICA, LLC", "01C");
    typesHash.put("DELL", "BC3");
    typesHash.put("DELTA AIRLINES", "BOE");
    typesHash.put("DELUXE CORPORATION", "0L7");
    typesHash.put("DENDREON CORPORATION", "B2F");
    typesHash.put("DENTSPLY", "BF3");
    typesHash.put("DENVER HEALTH & HOSPITAL", "0H5");
    typesHash.put("DENVER PUBLIC SCHOOLS", "AVR");
    typesHash.put("DENVER WHOLESALE FLORIST", "0H8");
    typesHash.put("DEPAUL UNIVERSITY", "0DK");
    typesHash.put("DEPENDABLE HIGHWAY EXPRESS", "B0L");
    typesHash.put("DEPUTY SHERIFFS ASSOC OF SAN DIEGO", "BZC");
    typesHash.put("DESA HEATING, LLC", "AU1");
    typesHash.put("DESERET MUTUAL BENEFIT ADMIN", "0FN");
    typesHash.put("DESERET MUTUAL BENEFIT ADMIN", "0FN");
    typesHash.put("DESERET MUTUAL BENEFIT ADMIN", "0FN");
    typesHash.put("DESERET MUTUAL BENEFIT ADMIN", "0FN");
    typesHash.put("DESERET MUTUAL BENEFIT ADMIN", "0FN");
    typesHash.put("DESERET MUTUAL BENEFIT ADMIN", "0FN");
    typesHash.put("DESERET MUTUAL BENEFIT ADMIN", "0FN");
    typesHash.put("DESERET MUTUAL BENEFIT ADMIN", "0FN");
    typesHash.put("DESERET MUTUAL BENEFIT ADMIN", "0FN");
    typesHash.put("DESERET MUTUAL BENEFIT ADMIN", "0FN");
    typesHash.put("DESERET MUTUAL BENEFIT ADMIN", "0FN");
    typesHash.put("DESERET MUTUAL BENEFIT ADMIN", "0FN");
    typesHash.put("DESERET MUTUAL BENEFIT ADMIN", "0FN");
    typesHash.put("DESERET MUTUAL BENEFIT ADMIN", "0FN");
    typesHash.put("DESERET MUTUAL BENEFIT ADMIN", "0FN");
    typesHash.put("DEUTSCH INC.", "AC3");
    typesHash.put("DEVRY INC.", "0JB");
    typesHash.put("DEX ONE CORPORATION", "0OP");
    typesHash.put("DIAGEO NORTH AMERICA", "A0Z");
    typesHash.put("DIALOGIC INC", "BKJ");
    typesHash.put("DICK CORPORATION", "AR2");
    typesHash.put("DICKINSON COLLEGE", "0FT");
    typesHash.put("DIGITAL RIVER", "BHW");
    typesHash.put("DIGNITY HEALTH", "017");
    typesHash.put("DIMENSION DATA", "AYF");
    typesHash.put("DIOCESE OF BUFFALO", "0RO");
    typesHash.put("DIOCESE OF METUCHEN", "BPN");
    typesHash.put("DISCOVER FINANCIAL SERVICES INC", "BG1");
    typesHash.put("DISCOVERY COMMUNICATIONS, LLC.", "0HN");
    typesHash.put("DISH NETWORK", "B0H");
    typesHash.put("DISNEY", "017");
    typesHash.put("DISTRICT COUNCIL 21", "BRS");
    typesHash.put("DISTRICT COUNCIL 37", "BB0");
    typesHash.put("DIVERSIFIED HUMAN RESOURCES", "BWZ");
    typesHash.put("DIXON TICONDEROGA", "AA0");
    typesHash.put("DJO, LLC", "AZP");
    typesHash.put("DMN MANAGEMENT", "BAF");
    typesHash.put("DOCTORS HOSPITAL OF SARASOTA", "0B2");
    typesHash.put("DOLCE INTERNATIONAL HOLDINGS", "A0G");
    typesHash.put("DOLE FOOD COMPANY, INC.", "AUB");
    typesHash.put("DOLEX DOLLAR EXPRESS, INC", "BPW");
    typesHash.put("DOMINION RESOURCES, INC.", "ATF");
    typesHash.put("DORMAN PRODUCTS,INC", "0VT");
    typesHash.put("DOUGLAS AUTOTECH CORP.", "0G0");
    typesHash.put("DOUGLAS MACHINE", "0SO");
    typesHash.put("DOWLING COLLEGE", "0MK");
    typesHash.put("DPR CONSTRUCTION", "A9E");
    typesHash.put("DPR REALTY", "BZV");
    typesHash.put("DRAPER LABS", "017");
    typesHash.put("DREW MEMORIAL HOSPITAL", "AI3");
    typesHash.put("DRIL-QUIP, INC.", "B3H");
    typesHash.put("DRISCOLL CHILDRENS HOSPITAL", "BFN");
    typesHash.put("DSM NUTRITIONAL PRODUCTS", "A2L");
    typesHash.put("DST SYSTEMS, INC.", "ALU");
    typesHash.put("DTE ENERGY", "0RC");
    typesHash.put("DUCKS UNLIMITED", "BW5");
    typesHash.put("DUFF & PHELPS", "BJJ");
    typesHash.put("DUKE REALTY CORP.", "BGW");
    typesHash.put("DUKE UNIVERSITY", "017");
    typesHash.put("DUN & BRADSTREET", "084");
    typesHash.put("DUNN EDWARDS CORP", "BJ5");
    typesHash.put("DUPONT .", "017");
    typesHash.put("DURHAM TECHNICAL COMMUNITY COLLEGE", "0MA");
    typesHash.put("DYNAMICS RESEARCH CORP", "08E");
    typesHash.put("DYNCORP", "0QG");
    typesHash.put("EARTH COLOR GROUP", "0T3");
    typesHash.put("EAST ALABAMA MEDICAL CENTER", "09S");
    typesHash.put("EAST KENTUCKY POWER COOPERATIVE", "AVW");
    typesHash.put("EASTERN NEW MEXICO UNIVERSITY", "AGO");
    typesHash.put("EATON VANCE", "A6U");
    typesHash.put("ECCO USA, INC.", "BPA");
    typesHash.put("ECFMG", "A6P");
    typesHash.put("ECHO SPHERE CORPORATION", "AQS");
    typesHash.put("ECOLAB", "017");
    typesHash.put("ECONOMIST NEWSPAPER GROUP INC.", "AOO");
    typesHash.put("EDDIE BAUER LLC", "A43");
    typesHash.put("EDGECOMBE COMMUNITY COLLEGE", "0GZ");
    typesHash.put("EECU CREDIT UNION", "B6Q");
    typesHash.put("EFI", "BEB");
    typesHash.put("EISAI CORPORATION OF NORTH AMERICA", "BVQ");
    typesHash.put("EISNER LLP", "0JU");
    typesHash.put("ELBIT SYSTEMS OF AMERICA INC.", "BC4");
    typesHash.put("ELCOM INTERNATIONAL", "0DP");
    typesHash.put("ELECTROLUX", "0FC");
    typesHash.put("EA", "BJL");
    typesHash.put("ELECTRONIC ARTS", "BJL");
    typesHash.put("ELKAY MANUFACTURING", "08F");
    typesHash.put("ELKHART GENERAL HOSPITAL", "ABL");
    typesHash.put("ELKS", "BSM");
    typesHash.put("ELMHURST MEMORIAL HOSPITAL", "BBU");
    typesHash.put("ELWYN INC", "B13");
    typesHash.put("EMC CORPORATION", "BLK");
    typesHash.put("EMD MILLIPORE CORPORATION", "AN3");
    typesHash.put("EMERGENCY CONSULTANTS", "BOP");
    typesHash.put("EMERGENCY MEDICINE PHYSICIANS", "0X9");
    typesHash.put("EMERGENCY NURSES ASSOCIATION", "BUC");
    typesHash.put("EMERITUS CORPORATION", "017");
    typesHash.put("EMERSON ELECTRIC CO.", "02K");
    typesHash.put("EMERSON SWAN, INC.", "AIV");
    typesHash.put("EMMIS COMMUNICATIONS", "BEO");
    typesHash.put("EMORY HEALTHCARE", "01G");
    typesHash.put("EMORY UNIVERSITY", "01F");
    typesHash.put("EMPIRE VISION CENTER INC", "BD9");
    typesHash.put("EMPIRIAN PROPERTY MANAGEMENT", "BBK");
    typesHash.put("EMPIRIX", "AGG");
    typesHash.put("EMPLOYEE ASSOCIATION VA LOMA LINDA", "BEX");
    typesHash.put("EMPLOYEE PROFESSIONALS", "BTR");
    typesHash.put("ENCANA OIL & GAS (USA) INC.", "BYB");
    typesHash.put("ENERCON SERVICES, INC.", "ATE");
    typesHash.put("ENERGIZER HOLDINGS, INC.", "AKO");
    typesHash.put("ENGILITY", "017");
    typesHash.put("ENGLEWOOD HOSPITAL & MEDICAL CENTER", "0FW");
    typesHash.put("ENHERENT", "AE9");
    typesHash.put("ENOVAPREMIER, LLC", "AKT");
    typesHash.put("ENSCO, INC.", "AJI");
    typesHash.put("ENSIGN SERVICES, INC.", "B4B");
    typesHash.put("ENSIGN-BICKFORD INDUSTRIES", "AIN");
    typesHash.put("ENTERGY SERVICES INC.", "0QS");
    typesHash.put("ENTERTAINMENT CONSUMER ASSOCIATION", "B57");
    typesHash.put("ENVISION HEALTHCARE CORPORATION", "ARO");
    typesHash.put("EPHRAIM MCDOWELL REGIONAL MED CTR", "BKA");
    typesHash.put("EQUINOX PAYMENTS", "AIQ");
    typesHash.put("EQUITY RESIDENTIAL SERVICES, L.L.C.", "AWO");
    typesHash.put("ERICKSON LIVING MANAGEMENT LLC", "BW9");
    typesHash.put("ESCO CORPORATION", "BR1");
    typesHash.put("ESSEX GROUP MANAGEMENT", "0RQ");
    typesHash.put("ETHAN ALLEN", "06F");
    typesHash.put("EURAMAX", "BR5");
    typesHash.put("EVERBRITE, LLC", "09R");
    typesHash.put("EVOLVING SYSTEMS, INC.", "0PE");
    typesHash.put("EVONIK DEGUSSA CORPORATION", "AUH");
    typesHash.put("EXELIS, INC.", "017");
    typesHash.put("EXELIXIS INC", "A0K");
    typesHash.put("EXELON CORPORATION", "BEC");
    typesHash.put("EXETER HEALTH RESOURCES", "0UP");
    typesHash.put("EXIDE TECHNOLOGIES", "0BS");
    typesHash.put("EXPERIAN INFORMATION SOLUTIONS, INC", "017");
    typesHash.put("EXPRESS MESSENGER", "BLL");
    typesHash.put("EXPRESS SCRIPTS", "AWQ");
    typesHash.put("EXTENDICARE HEALTH SERVICES, INC.", "B41");
    typesHash.put("EXTENSIS", "A4F");
    typesHash.put("EXTREME NETWORKS", "BGA");
    typesHash.put("F&P AMERICA MFG., INC", "BLJ");
    typesHash.put("F & P AMERICA MFG., INC", "BLJ");
    typesHash.put("FABICK CAT", "BZI");
    typesHash.put("FACTSET RESEARCH SYSTEMS", "AZJ");
    typesHash.put("FAIR ISAAC CORPORATION", "A18");
    typesHash.put("FAIR- RITE PRODUCTS CORPORATION", "0XM");
    typesHash.put("FAIRFIELD MEDICAL CENTER", "044");
    typesHash.put("FAIRFIELD UNIVERSITY", "AFS");
    typesHash.put("FAIRPOINT COMMUNICATIONS", "BGB");
    typesHash.put("FARGO ASSEMBLY OF PA", "B5T");
    typesHash.put("FARMERS NATIONAL COMPANY", "123");
    typesHash.put("FASTENAL COMPANY", "BEP");
    typesHash.put("FAYETTEVILLE TECHNICAL COMM COLLEGE", "AZS");
    typesHash.put("FAZOLI'S RESTAURANTS LLC", "BTE");
    typesHash.put("FCCI INSURANCE", "BBR");
    typesHash.put("FCI USA, LLC", "08H");
    typesHash.put("FEDERAL EXPRESS CORPORATION", "0IY");
    typesHash.put("FEDERAL FIRST", "BDH");
    typesHash.put("FEDERAL MOGUL", "02P");
    typesHash.put("FEDERAL RESERVE BANK", "017");
    typesHash.put("FEDERAL SIGNAL CORPORATION", "0C8");
    typesHash.put("FEDEX CUSTOM CRITICAL", "AWV");
    typesHash.put("FEDEX FREIGHT", "BDS");
    typesHash.put("FEDEX GROUND", "AIT");
    typesHash.put("FEDEX OFFICE", "A5N");
    typesHash.put("FEDEX SUPPLY CHAIN SYSTEMS, INC.", "AWT");
    typesHash.put("FENNER DUNLOP", "A5V");
    typesHash.put("FFMC/FDC", "01W");
    typesHash.put("FIDELITY INVESTMENTS", "0EB");
    typesHash.put("FIDELITY TECHNOLOGIES CORPORATION", "B31");
    typesHash.put("FIFTH THIRD BANK", "017");
    typesHash.put("FINANCIAL PLANNING ASSOCIATION", "B2E");
    typesHash.put("FIRST ALERT PROFESSIONAL SECURITY", "AZ4");
    typesHash.put("FIRST AMERICAN CORPORATION", "A6Z");
    typesHash.put("FIRST CITIZENS BANK & TRUST COMPANY", "A5I");
    typesHash.put("FIRST COMMONWEALTH FINANCIAL CORP", "BCY");
    typesHash.put("FIRST COMMUNITY BANK", "BIJ");
    typesHash.put("FIRST DATA INVESTOR SERVICES", "07F");
    typesHash.put("FIRST ENERGY", "017");
    typesHash.put("FIRST MIDWEST BANK", "A52");
    typesHash.put("FIRST TECH FEDERAL CREDIT UNION", "A9S");
    typesHash.put("FIRST TENNESSEE BANK", "0IG");
    typesHash.put("FIRSTHEALTH OF THE CAROLINAS", "0A5");
    typesHash.put("FIRSTMERIT CORPORATION", "A9P");
    typesHash.put("FISERV", "057");
    typesHash.put("FLEXTRONICS INTERNATIONAL USA", "BML");
    typesHash.put("FLORIDA BANKERS ASSOCIATION", "BQF");
    typesHash.put("FLORIDA DEPARTMENT OF EDUCATION", "05U");
    typesHash.put("FLORIDA RETIRED EDUCATOR ASSOC", "BQI");
    typesHash.put("FLSMIDTH INC", "BG5");
    typesHash.put("FLUOR CORPORATION", "AH0");
    typesHash.put("FMC TECHNOLOGIES", "ATM");
    typesHash.put("FOCUS HR", "BZ6");
    typesHash.put("FOOT LOCKER INC.", "BBG");
    typesHash.put("FORD MOTOR COMPANY 80", "017");
    typesHash.put("FOREST LABS", "0Q2");
    typesHash.put("FORMOSA PLASTICS CORPORATION, USA", "ACF");
    typesHash.put("FORRESTER RESEARCH, INC.", "ACS");
    typesHash.put("FORSYTH COUNTY SCHOOLS", "04K");
    typesHash.put("FORT OSAGE SCHOOL DISTRICT", "0Q4");
    typesHash.put("FORTNEY & WEYGANDT", "AG2");
    typesHash.put("FOX, INC", "017");
    typesHash.put("FPM LP", "0A0");
    typesHash.put("FRANCISCAN ALLIANCE", "0ZV");
    typesHash.put("FRANCISCAN SISTERS", "BGZ");
    typesHash.put("FRANKCRUM", "B0Q");
    typesHash.put("FRANKLIN TEMPLETON GROUP", "AJ6");
    typesHash.put("FRED A MORETON AND COMPANY", "0BK");
    typesHash.put("FREEDOM COMMUNICATIONS", "AMX");
    typesHash.put("FREEPORT HEALTH NETWORK", "0LD");
    typesHash.put("FREEPORT MCMORAN", "AMG");
    typesHash.put("FREESCALE SEMICONDUCTOR INC.", "BRZ");
    typesHash.put("FREMONT - RIDEOUT HEALTH GROUP", "BXG");
    typesHash.put("FRESENIUS KABI USA, LLC", "0TB");
    typesHash.put("FREUDENBERG-NOK", "017");
    typesHash.put("FRONTIER COMMUNICATIONS", "BP0");
    typesHash.put("FUJI PHOTO FILM USA, INC", "B5V");
    typesHash.put("FUJITSU MGMT SVCS OF AMERICA", "0H7");
    typesHash.put("FUNDAMENTAL AKA TRANS HEALTHCARE", "A7O");
    typesHash.put("GAMBRO RENAL PRODUCTS", "BLU");
    typesHash.put("GAMESTOP STORES", "BG6");
    typesHash.put("GANDER MOUNTAIN", "BR2");
    typesHash.put("GANNETT CO INC", "BPT");
    typesHash.put("GARDNER DENVER", "B10");
    typesHash.put("GARMIN INTERNATIONAL", "AIG");
    typesHash.put("GARTNER", "09X");
    typesHash.put("GATX CORPORATION", "AVO");
    typesHash.put("GEBA", "BKO");
    typesHash.put("GEMTRON", "0YF");
    typesHash.put("GENENTECH, INC.", "ALT");
    typesHash.put("GENERAL DYNAMICS", "0JD");
    typesHash.put("GENERAL FEDERATION OF WOMENS CLUBS", "BSQ");
    typesHash.put("GENERAL MILLS", "0QK");
    typesHash.put("GENERAL MOTORS", "BYY");
    typesHash.put("GENERAL PUBLIC GPC", "09Z");
    typesHash.put("GENERATION AMERICA, LLC", "BZ9");
    typesHash.put("GENEX SERVICES, INC.", "0FD");
    typesHash.put("GENOMIC HEALTH INC.", "BPV");
    typesHash.put("GENTIVA", "AB5");
    typesHash.put("GENZYME CORPORATION", "BHZ");
    typesHash.put("GEORGE MASON UNIVERSITY", "01S");
    typesHash.put("GEORGETOWN UNIVERSITY", "BLF");
    typesHash.put("GEORGIA REINSURANCE DIRECT BILL", "01N");
    typesHash.put("GEORGIA STATE UNIVERSITY", "BWE");
    typesHash.put("GERSON LEHRMAN GROUP, INC", "BQ3");
    typesHash.put("GETTY IMAGES INC.", "A3T");
    typesHash.put("GIRLING HEALTHCARE, INC.", "0SQ");
    typesHash.put("GIVAUDAN CORPORATION", "0OS");
    typesHash.put("GLAXOSMITHKLINE", "017");
    typesHash.put("GLOBAL AVIATION HOLDINGS, INC.", "BJR");
    typesHash.put("GLOBAL BRASS AND COPPER", "BIB");
    typesHash.put("GLOBAL CASH ACCESS", "0QI");
    typesHash.put("GLOBAL IMAGING SYSTEMS, INC.", "AEP");
    typesHash.put("GLOBAL KNOWLEDGE NETWORK", "0BY");
    typesHash.put("GLOBAL PAYMENTS", "BBP");
    typesHash.put("GLYNN COUNTY BOC", "BXE");
    typesHash.put("GOLDEN LIVING", "BEA");
    typesHash.put("GOLDENWEST FEDERAL CREDIT UNION", "B5A");
    typesHash.put("GOOD SAMARITAN HOSPITAL MEDICAL CTR", "0XN");
    typesHash.put("GOODMAN MANUFACTURING", "B1W");
    typesHash.put("GOODWILL INDUSTRIES - SUNCOAST", "BZE");
    typesHash.put("GOOGLE INC", "A51");
    typesHash.put("GRAEBEL COMPANIES", "ATJ");
    typesHash.put("GRAHAM PACKAGING COMPANY", "017");
    typesHash.put("GRAND VIEW HOSPITAL", "ADM");
    typesHash.put("GRANT THORNTON LLP", "0E2");
    typesHash.put("GRANVILLE COUNTY SCHOOLS", "AUW");
    typesHash.put("GRAYBAR ELECTRIC", "08S");
    typesHash.put("GREAT RIVER ENERGY", "B3K");
    typesHash.put("GREATWIDE LOGISICS SERVICES INC", "A93");
    typesHash.put("GREEN BAY PACKAGING, INC.", "06D");
    typesHash.put("GREEN TREE SERVICING LLC", "BHU");
    typesHash.put("GREENBRIER COMPANIES", "0YB");
    typesHash.put("GREENWICH HOSPITAL", "0IM");
    typesHash.put("GRIFFITH LABORATORIES", "0MJ");
    typesHash.put("GRIFOLS INC.", "AE0");
    typesHash.put("GROUP HEALTH INCORPORATED", "0UQ");
    typesHash.put("GROUP M", "ACI");
    typesHash.put("GROUP MANAGEMENT SERVICES", "BUO");
    typesHash.put("GROUPE STAHL", "BJ9");
    typesHash.put("GROVE HILL MEDICAL CENTER", "0HZ");
    typesHash.put("GSE SYSTEMS", "AVB");
    typesHash.put("GTECH CORPORATION", "AIB");
    typesHash.put("GUARANTY BANK FSB", "BI4");
    typesHash.put("GUIDELINE", "A7Y");
    typesHash.put("GULF COAST HEALTH CARE", "BUP");
    typesHash.put("GUNDERSEN HEALTH SYSTEM", "A11");
    typesHash.put("GWINNETT COUNTY BOARD OF EDUCATION", "BSO");
    typesHash.put("GZA GEO ENVIRONMENTAL TECHNOLOGIES", "0DZ");
    typesHash.put("H&M", "BJX");
    typesHash.put("H&R BLOCK", "09B");
    typesHash.put("H. P. HOOD", "017");
    typesHash.put("HP HOOD", "017");
    typesHash.put("HACKENSACK UNIV. MEDICAL CTR", "A09");
    typesHash.put("HAIN CELESTIAL GROUP", "A2W");
    typesHash.put("HALLIBURTON COMPANY", "B0R");
    typesHash.put("HALLMARK CARDS INC.", "0P6");
    typesHash.put("HALLMARK HEALTH SYSTEMS", "0QC");
    typesHash.put("HAMBLEN COUNTY BOARD OF EDUCATION", "AQY");
    typesHash.put("HAMPTON CITY SCHOOLS", "BM2");
    typesHash.put("HANCOCK HOLDING CO.", "AUI");
    typesHash.put("HANFORD RECREATION ASSOCIATION", "A3X");
    typesHash.put("HANOVER DIRECT INC", "BCK");
    typesHash.put("HAPAG LLOYD", "A7J");
    typesHash.put("HARBOR ONE CREDIT UNION", "A3Y");
    typesHash.put("HARBORSTONE CREDIT UNION", "BTL");
    typesHash.put("HARD ROCK CAFE INTERNATIONAL", "A88");
    typesHash.put("HARDING UNIVERSITY", "BM0");
    typesHash.put("HARLEY-DAVIDSON, INC.", "0IC");
    typesHash.put("HARPER HOSPITAL", "0IP");
    typesHash.put("HARRIS CORPORATION", "0D0");
    typesHash.put("HARRISON COUNTY BOARD OF EDUCATION", "A5Z");
    typesHash.put("HARVARD UNIVERSITY", "017");
    typesHash.put("HARVEY INDUSTRIES", "BB1");
    typesHash.put("HASBRO, INC.", "01T");
    typesHash.put("HAVAS", "ANX");
    typesHash.put("HAVERTY FURNITURE", "BP6");
    typesHash.put("HAWKER PACIFIC AEROSPACE", "AMY");
    typesHash.put("HAWORTH, INC.", "09Q");
    typesHash.put("HAYWOOD COMMUNITY COLLEGE", "0I7");
    typesHash.put("HCA HEALTHCARE CORP.", "017");
    typesHash.put("HCC INDUSTRIES", "A0U");
    typesHash.put("HCL AMERICA, INC.", "B52");
    typesHash.put("HD SUPPLY", "BFE");
    typesHash.put("HEADSTRONG", "A2S");
    typesHash.put("HEALTH AND HOSPITAL CORPORATION", "A87");
    typesHash.put("HEALTH CARE SERVICE CORPORTATION", "BLS");
    typesHash.put("HEALTH EAST", "0BO");
    typesHash.put("HEALTH MANAGEMENT", "BVC");
    typesHash.put("HEALTH NET, INC.", "017");
    typesHash.put("HEALTH PARTNERS", "0N4");
    typesHash.put("HEALTH PARTNERS CENTRAL MN CLINICS", "0DI");
    typesHash.put("HEALTHCARE ASSOC. OF NY ST.", "0CA");
    typesHash.put("HEALTHNOW NY", "A0T");
    typesHash.put("HEALTHPLAN HOLDINGS INC.", "07H");
    typesHash.put("HEALTHSOUTH CORP", "BJY");
    typesHash.put("HEALTHY TRUCKING ASSOCIATION OF AME", "B6E");
    typesHash.put("HEARST CORPORATION", "A0H");
    typesHash.put("HEARTHSIDE FOOD SOLUTIONS", "BK8");
    typesHash.put("HEARTLAND EMPLOYMENT SERVICES", "BAZ");
    typesHash.put("HEINZ", "A07");
    typesHash.put("HENKEL OF AMERICA", "017");
    typesHash.put("HENNESSY AUTOMOBILE COMPANIES", "A6N");
    typesHash.put("HENRY SCHEIN, INC.", "BGL");
    typesHash.put("HENRY WURST", "BAY");
    typesHash.put("HENSLEY AND COMPANY", "0XS");
    typesHash.put("HERMAN MILLER INC", "AZE");
    typesHash.put("HERR FOODS INC", "BLE");
    typesHash.put("HERSHEY COMPANY", "B0V");
    typesHash.put("HERTZ", "017");
    typesHash.put("HERZOG CONTRACTING", "0UE");
    typesHash.put("HEWLETT-PACKARD, EDS", "080");
    typesHash.put("HH SUMCO", "0Q3");
    typesHash.put("HHGREGG", "BWF");
    typesHash.put("HIBU INC", "BR4");
    typesHash.put("HICKMAN COUNTY", "AAR");
    typesHash.put("HIGHLAND HOSPITAL", "ANG");
    typesHash.put("HILLERICH & BRADSBY CO.", "0W8");
    typesHash.put("HILLSBORO COMMUNITY MEDICAL CENTER", "0R6");
    typesHash.put("HILLSBOROUGH COMMUNITY COLLEGE", "B2W");
    typesHash.put("HILLSIDE CHILDREN'S CENTER", "0WM");
    typesHash.put("HILTON WORLDWIDE", "A0N");
    typesHash.put("HITACHI DATA SYSTEMS", "ASN");
    typesHash.put("HITCHINER MFG. CO.", "04V");
    typesHash.put("HMC/CAH CONSOLIDATED, INC", "B21");
    typesHash.put("HMS HOLDING LTD/HENDRICK MOTORSPORT", "BKC");
    typesHash.put("HNC SOFTWARE, INC.", "AF0");
    typesHash.put("HOAG MEMORIAL HOSPITAL", "BJS");
    typesHash.put("HOBART BROTHERS", "01Q");
    typesHash.put("HOLLAND AMERICA LINE N.V.", "BP4");
    typesHash.put("HOLLINGSWORTH AND VOSE", "0QX");
    typesHash.put("HOLLISTER", "BBV");
    typesHash.put("HOLY SPIRIT HEALTH SYSTEMS", "0YT");
    typesHash.put("HONDA OF AMERICA MFG INC", "017");
    typesHash.put("HONEYWELL", "0WN");
    typesHash.put("HONEYWELL -RETIREE", "ANE");
    typesHash.put("HOOD COLLEGE", "0YI");
    typesHash.put("HOOTERS CASINO HOTEL", "BLM");
    typesHash.put("HORIZON BC/BS OF NJ", "A8N");
    typesHash.put("HORIZON LINES LLC", "AT2");
    typesHash.put("HORIZON SOLUTIONS CORP.", "AK1");
    typesHash.put("HOSPITAL FOR SPECIAL CARE", "0L0");
    typesHash.put("HOUGHTON MIFFLIN", "BM8");
    typesHash.put("HOV SERVICES", "0VL");
    typesHash.put("HOWARD COUNTY HOSPITAL", "AO1");
    typesHash.put("HOWARD HUGHES MEDICAL INSTITUTE", "0EN");
    typesHash.put("HOWARD UNIVERSITY", "BLZ");
    typesHash.put("HRSOURCE, INC.", "0R3");
    typesHash.put("HSBC NORTH AMERICA HOLDINGS, INC", "AIS");
    typesHash.put("HUDSON VALLEY BANK", "ANN");
    typesHash.put("HUMAN GENOME SCIENCES INC", "BHH");
    typesHash.put("HUMAN KINETICS", "AHK");
    typesHash.put("HUMANA", "017");
    typesHash.put("HUMILITY OF MARY HEALTH PARTNERS", "BKS");
    typesHash.put("HUNTER CONTRACTING", "BFV");
    typesHash.put("HUNTER DOUGLAS", "AZ3");
    typesHash.put("HUNTERDON MEDICAL CENTER", "0PB");
    typesHash.put("HUNTINGTON HOSPITAL", "AD4");
    typesHash.put("HUNTON & WILLIAMS", "BQ1");
    typesHash.put("HURON CONSULTING GROUP", "AUT");
    typesHash.put("HUSSMANN CORPORATION", "BW7");
    typesHash.put("HYATT LEGAL PLANS", "BT9");
    typesHash.put("I FLY AMERICA, INC.", "BHD");
    typesHash.put("IBEW LOCAL 102", "BPB");
    typesHash.put("IBM", "017");
    typesHash.put("ICE GALLERY", "AXO");
    typesHash.put("ICF CONSULTING GROUP", "BJP");
    typesHash.put("IGATE CORPORATION", "BFU");
    typesHash.put("IGNITE RESTAURANT GROUP", "BWC");
    typesHash.put("IKON OFFICE SOLUTIONS", "AVA");
    typesHash.put("ILLINOIS ASSOCIATION OF REALTORS", "BBS");
    typesHash.put("ILLINOIS CENTRAL RAILROAD COMPANY", "BZN");
    typesHash.put("IMATION CORP", "BDQ");
    typesHash.put("IMERYS CORPORATION", "BRT");
    typesHash.put("IMS HEALTH INCORPORATED", "0KU");
    typesHash.put("INDEPENDENCE AIR", "A6K");
    typesHash.put("INDEPENDENT PILOTS ASSOCIATION", "07Q");
    typesHash.put("INDIANA MEMBERS CREDIT UNION OF IND", "BBO");
    typesHash.put("INDIANA RETIRED TEACHERS ASSOCIATIO", "BJ8");
    typesHash.put("INDIANA STATE EMPLOYEES ASSOCIATION", "A0P");
    typesHash.put("INDIANA UNIVERSITY", "017");
    typesHash.put("INDIANA UNIVERSITY HEALTH", "BLB");
    typesHash.put("INFINITY INSURANCE COMPANY", "BAA");
    typesHash.put("INFOCROSSING", "ASR");
    typesHash.put("INFORMA USA", "BOX");
    typesHash.put("INFORMATICA CORPORATION", "BPI");
    typesHash.put("INFORMATION RESOURCES", "0IL");
    typesHash.put("INFOSYS LIMITED", "A3G");
    typesHash.put("ING FINANCIAL SERVICES CORPORATION", "0UH");
    typesHash.put("INGALLS HEALTH SYSTEM", "BIS");
    typesHash.put("INGERSOLL RAND", "017");
    typesHash.put("INNOVIA FILMS INC.", "A3P");
    typesHash.put("INOVA HEALTH SYSTEM SERVICES", "BPP");
    typesHash.put("INSIGNIA RESIDENTIAL GRP/DOUGLAS EL", "AUL");
    typesHash.put("IN-SINK-ERATOR DIVISION EMERSON E", "A3V");
    typesHash.put("INST OF ELECTRICAL & ELECTRONIC ENG", "AH7");
    typesHash.put("INSTITUTIONAL INVESTOR", "A7E");
    typesHash.put("INSTRON", "0OH");
    typesHash.put("INSURANCE TRUST", "BLN");
    typesHash.put("INSURANCE TRUST FOR DELTA RETIREES", "BRC");
    typesHash.put("INSURITY INC.", "BY5");
    typesHash.put("INTEGRA LIFESCIENCES", "A1Y");
    typesHash.put("INTEGRATED DEVICE TECHNOLOGY, INC.", "BLG");
    typesHash.put("INTEGRATED ELECTRICAL SERVICES INC.", "BE0");
    typesHash.put("INTEGRATED MARKETING", "IM1");
    typesHash.put("INTEGRITY APPLICATIONS INC", "B2K");
    typesHash.put("INTEL CORPORATION", "0BX");
    typesHash.put("INTELSAT GLOBAL SERVICES CORP", "BBA");
    typesHash.put("INTERACTIVE DATA CORPORATION", "AL5");
    typesHash.put("INTERGEN", "ABS");
    typesHash.put("INTERGRAPH CORPORATION", "A36");
    typesHash.put("INTERMOUNTAIN GAS COMPANY", "A7F");
    typesHash.put("INTERMOUNTAIN HEALTH CARE", "01P");
    typesHash.put("INTERNATIONAL ASSOC OF RETIRED FIRE", "BSV");
    typesHash.put("INTERNATIONAL GAME TECHNOLOGY", "ARB");
    typesHash.put("INTERNATIONAL PAPER", "BQ6");
    typesHash.put("INTERNATIONAL RECTIFIER", "ASW");
    typesHash.put("INTERNATIONAL SEMATECH", "AL3");
    typesHash.put("INTERPUBLIC GROUP COMPANIES INC.", "BI3");
    typesHash.put("INTERSIL CORPORATION", "0WK");
    typesHash.put("INT'L UNION OF OPERATING ENGINEERS", "BKM");
    typesHash.put("INTRADO", "AER");
    typesHash.put("INTRAPAC, CORP.", "AW4");
    typesHash.put("INTUIT, INC.", "B51");
    typesHash.put("INVENSYS SYSTEMS", "0B4");
    typesHash.put("INX", "AL7");
    typesHash.put("ION MEDIA NETWORKS, INC", "BXK");
    typesHash.put("IONA COLLEGE", "AAM");
    typesHash.put("IPA ASSOCATION OF AMERICA", "BMH");
    typesHash.put("IRA DAVENPORT MEMORIAL HOSPITAL", "0CT");
    typesHash.put("IRI, ISG, INC.", "BUE");
    typesHash.put("IRIS GRAPHICS", "0MX");
    typesHash.put("IRVINE COMPANY", "BJH");
    typesHash.put("ISBA - RETIREES & BOARD MEMBERS", "BPH");
    typesHash.put("ISO NEW ENGLAND", "AX8");
    typesHash.put("ITRON, INC.", "0WR");
    typesHash.put("ITT CORPORATION", "017");
    typesHash.put("IVY TECH ALUMNI ASSOCIATION", "B0F");
    typesHash.put("J CREW", "BPG");
    typesHash.put("J.B. HUNT", "017");
    typesHash.put("J.JILL GROUP", "AQF");
    typesHash.put("J. JILL GROUP", "AQF");
    typesHash.put("J JILL GROUP", "AQF");
    typesHash.put("JACKSON GENERAL HOSPITAL", "A8P");
    typesHash.put("JACOBS AEROSPACE TESTING ALLIANCE", "017");
    typesHash.put("JACOBS ENGINEERING GROUP INC.", "017");
    typesHash.put("JACOBS TECHNOLOGY GROUP INC.", "017");
    typesHash.put("JACOBSEN CONSTRUCTION", "AA8");
    typesHash.put("JAFRA COSMETICS INTERNATIONAL, INC.", "AEL");
    typesHash.put("JAMES HARDIE BUILDING PRODUCTS", "A13");
    typesHash.put("JANE PHILIPS MEDICAL CENTER", "BSP");
    typesHash.put("JANUS CAPITAL GROUP", "BM1");
    typesHash.put("JARDEN CORPORATION", "A8H");
    typesHash.put("JARDINE INSURANCE BROKERS", "0BC");
    typesHash.put("JAZZ SEMICONDUCTOR", "AW3");
    typesHash.put("JBT CORPORTION", "BHP");
    typesHash.put("JEFFERIES GROUP LLC", "B42");
    typesHash.put("JEFFERSON CNTY PUBLIC SCHOOLS", "05D");
    typesHash.put("JEFFERSON COUNTY", "BJT");
    typesHash.put("JEFFERSON WELLS INTERNATIONAL", "ACG");
    typesHash.put("JETBLUE AIRWAYS", "A19");
    typesHash.put("JIM ELLIS", "BAQ");
    typesHash.put("JJ KELLER", "0F7");
    typesHash.put("JM FAMILY", "ARE");
    typesHash.put("JM MANUFACTURING COMPANY, INC", "ALC");
    typesHash.put("JO-ANN STORES", "A9G");
    typesHash.put("JOHN HANCOCK LIFE INSURANCE CO (USA)", "AXD");
    typesHash.put("JOHN J KIRLIN INC", "BHG");
    typesHash.put("JOHN MUIR HEALTH", "A38");
    typesHash.put("JOHN WILEY & SONS, INC.", "08X");
    typesHash.put("JOHN'S HOPKINS UNIVERSITY", "017");
    typesHash.put("JOHNSON & JOHNSON", "JNJ");
    typesHash.put("JOHNSON AND WALES UNIVERSITY", "ACE");
    typesHash.put("JOHNSON CONTROLS INC.", "AO0");
    typesHash.put("JOHNSON CONTROLS, INC. - DB ONLY", "AKJ");
    typesHash.put("JOHNSTON COUNTY SCHOOLS", "02Z");
    typesHash.put("JOHNSTON MEMORIAL HOSPITAL", "0F8");
    typesHash.put("JOINT COMMISSION", "ALR");
    typesHash.put("JOINT SCHOOL DISTRICT NO. 2", "A8O");
    typesHash.put("JONES LANG LASALLE", "BWA");
    typesHash.put("JORDAN VALLEY MEDICAL CENTER", "AFD");
    typesHash.put("JORDANS FURNITURE", "A5B");
    typesHash.put("JP MORGAN CHASE", "AUY");
    typesHash.put("JUNIPER NETWORKS, INC.", "BUL");
    typesHash.put("K. HOVNANIAN COMPANIES", "017");
    typesHash.put("K HOVNANIAN COMPANIES", "017");
    typesHash.put("KAISER PERMANENTE OF COLORADO", "AMA");
    typesHash.put("KALEIDA HEALTH", "0WW");
    typesHash.put("KANSAS CITY SOUTHERN", "BQA");
    typesHash.put("KANSAS HOSPITAL ASSOC.", "0P7");
    typesHash.put("KAO CORPORATION OF AMERICA", "0D3");
    typesHash.put("KAPSTONE PAPER AND PACKAGING CORP", "BRR");
    typesHash.put("KATUN CORPORATION", "0NH");
    typesHash.put("KAYSER-ROTH CORPORATION", "0WC");
    typesHash.put("KB HOME", "BS3");
    typesHash.put("KCG, INC.", "0RH");
    typesHash.put("KEENAN AND ASSOCIATES", "BJC");
    typesHash.put("KELLOGG COMPANY", "AXT");
    typesHash.put("KENNEY MANUFACTURING", "AIY");
    typesHash.put("KENTON COUNTY BOARD OF EDUCATION", "A8W");
    typesHash.put("KENTUCKYONE", "ASL");
    typesHash.put("KESSLER REHABILITATION CORPORATION", "0VB");
    typesHash.put("KETTERING HEALTH NETWORK", "BCR");
    typesHash.put("KEY FAMILY OF COMPANIES", "APB");
    typesHash.put("KEYSTONE AUTOMOTIVE OPERATIONS", "AKU");
    typesHash.put("KEYSTONE COLLEGE", "ATC");
    typesHash.put("KGP TELECOMMUNICATIONS, INC", "B0J");
    typesHash.put("KIA MOTORS MANUFACTURING GEORGIA", "BF5");
    typesHash.put("KIK CUSTOM PRODUCTS", "A5F");
    typesHash.put("KIMPTON HOTEL & RESTAURANT GROUP", "BQ4");
    typesHash.put("KIMSTAFFHR, INC.", "BG9");
    typesHash.put("KINDRED HEALTHCARE, INC.", "BYS");
    typesHash.put("KINECTA FEDERAL CREDIT UNION", "BXT");
    typesHash.put("KINECTA FEDERAL CREDIT UNION", "B2N");
    typesHash.put("KINGSTON HOSPITAL", "0T7");
    typesHash.put("KITCHELL CORP.", "ANO");
    typesHash.put("KLA-TENCOR", "AOR");
    typesHash.put("KLEINFELDER", "A2M");
    typesHash.put("KNAACK MANUFACTURING", "AS3");
    typesHash.put("KNIGHT CAPITAL GROUP", "AM3");
    typesHash.put("K OCH INDUSTRIES", "AG4");
    typesHash.put("KOHL'S", "017");
    typesHash.put("KOOTENAI MEDICAL CENTER", "B3F");
    typesHash.put("KOPPERS INC.", "A1N");
    typesHash.put("KPMG PEAT MARWICK", "04Z");
    typesHash.put("KPSS INC.", "A8F");
    typesHash.put("KRAFT FOOD GROUP, INC.", "017");
    typesHash.put("KRATON POLYMERS", "AGV");
    typesHash.put("KRONOS", "0FH");
    typesHash.put("L OCCITANE INC.", "BDB");
    typesHash.put("L'OCCITANE INC.", "BDB");
    typesHash.put("L-3", "017");
    typesHash.put("L3", "017");
    typesHash.put("LABORATORY CORPORATION", "AAE");
    typesHash.put("LABORERS INTERNATIONAL UNION OF NOR", "B5J");
    typesHash.put("LAHEY CLINIC", "0GL");
    typesHash.put("LAIRD, INC.", "AXF");
    typesHash.put("LAKE COUNTY", "A7V");
    typesHash.put("LAKE FOREST HOSPITAL", "AMZ");
    typesHash.put("LAKELAND REGIONAL HEALTH SYSTEMS", "0PK");
    typesHash.put("LAM RESEARCH CORP", "BVW");
    typesHash.put("LAMADELEINE", "BD3");
    typesHash.put("LANDEAU METROPOLITAN", "BXL");
    typesHash.put("LARSON-JUHL", "AR7");
    typesHash.put("LAWRENCE LIVERMORE NATIONAL LABORAT", "0VQ");
    typesHash.put("LAWRENCE MEMORIAL HOSPITAL", "A6V");
    typesHash.put("LAWRENCE REGIONAL HEALTH SYSTEM INC", "BII");
    typesHash.put("LAYNE CHRISTENSEN COMPANY", "ALM");
    typesHash.put("LCC INTERNATIONAL", "ACT");
    typesHash.put("LEACH & GARNER CO", "0ZC");
    typesHash.put("LEAKE AND WATTS", "BS9");
    typesHash.put("LEAR CORPORATION", "BFB");
    typesHash.put("LEE COUNTY", "054");
    typesHash.put("LEE MEMORIAL", "017");
    typesHash.put("LEGG MASON", "0E7");
    typesHash.put("LEGGETT & PLATT INC", "A47");
    typesHash.put("LEHIGH HANSON", "BRY");
    typesHash.put("LEHIGH VALLEY BUSINESS COALITION", "BX3");
    typesHash.put("LEHMAN BROTHERS, INC.", "AK4");
    typesHash.put("LEMOYNE COLLEGE", "0QF");
    typesHash.put("LEND LEASE", "AZ9");
    typesHash.put("LENNAR CORPORATION", "AL0");
    typesHash.put("LENOX HILL HOSPITAL", "0U9");
    typesHash.put("LEO A DALY", "BT5");
    typesHash.put("LEVEL 3 COMMUNICATIONS", "AO6");
    typesHash.put("LEVI STRAUSS & CO.", "BK5");
    typesHash.put("LEXMARK INTERNATIONAL, INC.", "AB4");
    typesHash.put("LG ELECTRONICS", "BBN");
    typesHash.put("LIBERTY MEDICAL", "A08");
    typesHash.put("LIFE TECHNOLOGIES CORPORATION", "BC1");
    typesHash.put("LIFECARE MANAGEMENT SERVICES", "BJE");
    typesHash.put("LIFECARE, INC", "ABO");
    typesHash.put("LIFE'S WORC", "BZ2");
    typesHash.put("LIFESOUTH COMMUNITY BLOOD CENTERS", "BKT");
    typesHash.put("LIFESPAN", "06Z");
    typesHash.put("LIFETIME BRANDS, INC.", "BYW");
    typesHash.put("LIFETIME HEALTH CARE COMPANIES", "0F4");
    typesHash.put("LIFEWAY CHRISTIAN RESOURCES", "0TE");
    typesHash.put("LIMITED BRANDS", "B04");
    typesHash.put("LINCOLN COUNTY BOARD OF EDUCATION", "A8A");
    typesHash.put("LINCOLN INDUSTRIES", "BD1");
    typesHash.put("LITTLER MENDELSON PC", "BAC");
    typesHash.put("LITTLETON SCHOOL DISTRICT", "BTC");
    typesHash.put("LIVINGSTON BOARD OF EDUCATION", "0TQ");
    typesHash.put("LL BEAN", "0N9");
    typesHash.put("LOCKHEED MARTIN", "017");
    typesHash.put("LOCKHEED MARTIN GLOBAL TELECOMM", "0JW");
    typesHash.put("LODGENET", "BMM");
    typesHash.put("LOGAN BUS COMPANY", "B4J");
    typesHash.put("LOGITECH INC.", "A7R");
    typesHash.put("LONG ISLAND HOME, LTD", "0A4");
    typesHash.put("LONGVIEW FIBRE", "BXO");
    typesHash.put("LORD CORPORATION", "BN6");
    typesHash.put("LOREAL USA INC.", "A4C");
    typesHash.put("LOTUSHR", "BCO");
    typesHash.put("LOWE'S COMPANIES, INC.", "AUP");
    typesHash.put("LOYOLA MARYMOUNT UNIVERSITY", "BLI");
    typesHash.put("LSG SKY CHEFS", "ASA");
    typesHash.put("LSI CORPORATION", "AKI");
    typesHash.put("LUBBOCK INDEPENDENT SCHOOL DISTRICT", "0H2");
    typesHash.put("LUCENT TECHNOLOGIES", "0MH");
    typesHash.put("LUFTHANSA TECHNIK NORTH AMERICA", "AOY");
    typesHash.put("LUFTHANSA USA", "ALI");
    typesHash.put("LUTHERAN MEDICAL CENTER", "BMA");
    typesHash.put("LVMH MOET HENNESSY LOUIS VUITTON, I", "BXV");
    typesHash.put("LYONDELLBASSELL", "017");
    typesHash.put("M&T BANK CORPORATION", "0BI");
    typesHash.put("M.A. MORTENSON COMPANY", "ADN");
    typesHash.put("MAC-GRAY CORPORATION", "A8C");
    typesHash.put("MACK ENERGY CORPORATION", "A5Y");
    typesHash.put("MACY'S CREDIT AND CUSTOMER SERVICES", "02W");
    typesHash.put("MACY'S SYSTEMS AND TECHNOLOGY, INC.", "0KM");
    typesHash.put("MADD", "0SD");
    typesHash.put("MADISON COUNTY BOARD OF EDUCATION", "A1A");
    typesHash.put("MAERSK LINE", "AG7");
    typesHash.put("MAGELLAN HEALTH SERVICES", "0T6");
    typesHash.put("MAGMA DESIGN AUTOMATION INC.", "A2J");
    typesHash.put("MAGNA INTERNATIONAL", "0X4");
    typesHash.put("MAINE MEDICAL ASSOCIATION", "A3L");
    typesHash.put("MAINES PAPER AND FOOD SERVICE, INC", "AOH");
    typesHash.put("MAJOR LEAGUE BASEBALL", "AE2");
    typesHash.put("MALLINCKRODT GROUP", "B3O");
    typesHash.put("MANAGEMENT AND TRAINING CORP", "0JP");
    typesHash.put("MANNINGTON MILLS", "BI1");
    typesHash.put("MANSFIELD INDEPENDENT SCHOOL DISTRI", "B3S");
    typesHash.put("MANTECH INTERNATIONAL", "A03");
    typesHash.put("MARATHON OIL COMPANY", "BUX");
    typesHash.put("MARATHON PETROLEUM OIL", "07L");
    typesHash.put("MARICOPA COUNTY", "BZY");
    typesHash.put("MARICOPA INTEGRATED HEALTH SYSTEM", "B2I");
    typesHash.put("MARINE BIOLOGICAL LABORATORY", "AP7");
    typesHash.put("MARINEMAX, INC.", "AR5");
    typesHash.put("MARION COUNTY", "053");
    typesHash.put("MARQUETTE MEDICAL SYSTEMS", "06E");
    typesHash.put("MARQUETTE UNIVERSITY", "09D");
    typesHash.put("MARSH & MCLENNAN", "017");
    typesHash.put("MARTIN COMMUNITY COLLEGE", "0Q6");
    typesHash.put("MARTIN MEMORIAL HEALTH SYSTEMS", "BNA");
    typesHash.put("MARVELL SEMICONDUCTOR GROUP", "BUW");
    typesHash.put("MARYWOOD UNIVERSITY", "0AZ");
    typesHash.put("MASSACHUSETTS CORRECTIONS OFFICERS", "BL8");
    typesHash.put("MASSACHUSETTS HOSPITAL", "043");
    typesHash.put("MASTERCARD WORLDWIDE", "APL");
    typesHash.put("MATERION CORPORATION", "A55");
    typesHash.put("MATHEMATICAL ASSOCIATION OF AMERICA", "BZ8");
    typesHash.put("MATRIX SERVICE COMPANY", "BDY");
    typesHash.put("MAVERICK TRANSPORTATION USA", "BA0");
    typesHash.put("MAXELL CORPORATION OF AMERICA", "ATV");
    typesHash.put("MAXIMUS INC", "A4L");
    typesHash.put("MAYER ELECTRIC SUPPLY SERVICING CO", "BHJ");
    typesHash.put("MB FINANCIAL INC.", "ANA");
    typesHash.put("MCAFEE, INC", "BU4");
    typesHash.put("MCDONALD'S CORPORATION", "AQI");
    typesHash.put("MCDONALD'S LICENSEE", "BJ7");
    typesHash.put("MCDONALD'S OPERATING CORPORATE CREW", "BNP");
    typesHash.put("MCGLADREY, LLP", "BXP");
    typesHash.put("MCGRAW HILL EDUCATION", "B16");
    typesHash.put("MCGRAW-HILL, INC.", "08W");
    typesHash.put("MCKESSON", "BBX");
    typesHash.put("MCKINSTRY CO.", "BKQ");
    typesHash.put("MDC PARTNERS", "BY2");
    typesHash.put("MEADOW GOLD DAIRIES", "0X0");
    typesHash.put("MEDIA GENERAL INC.", "B1P");
    typesHash.put("MEDICA HEALTH PLANS", "BNT");
    typesHash.put("MEDICAL CENTER OF PLANO", "0US");
    typesHash.put("MEDIMPACT", "AE4");
    typesHash.put("MEDISYS HEALTH NETWORK, INC.", "B4Q");
    typesHash.put("MEDLINE INDUSTRIES, INC.", "AMP");
    typesHash.put("MEDTRONIC, INC.", "A4I");
    typesHash.put("MEHARRY MEDICAL COLLEGE", "BZF");
    typesHash.put("MELALEUCA INC.", "BHF");
    typesHash.put("MELROSE CREDIT UNION", "B1R");
    typesHash.put("MEMBER INSURANCE", "0C5");
    typesHash.put("MEMBERS", "01E");
    typesHash.put("MEMORIAL HERMANN BAPTIST BEAUMONT", "AF3");
    typesHash.put("MEMORIAL HERMANN BAPTIST ORANGE HOS", "AF7");
    typesHash.put("MEMORIAL HERMANN HEALTHCARE", "017");
    typesHash.put("MERCEDES BENZ US INTERNATIONAL", "A06");
    typesHash.put("MERCEDES-BENZ USA, LLC", "A7A");
    typesHash.put("MERCHANTS BANK", "04X");
    typesHash.put("MERCK & CO., INC.", "A6E");
    typesHash.put("MERCURY SYSTEMS", "A7Z");
    typesHash.put("MERCY COLLEGE", "0AH");
    typesHash.put("MERCY HEALTH", "AEI");
    typesHash.put("MERCY MEDICAL CENTER, CEDAR RAPIDS", "BFG");
    typesHash.put("MERCY MEMORIAL HOSPITAL SYSTEM", "BNO");
    typesHash.put("MERCYHURST UNIVERSITY ALUMNI", "BUY");
    typesHash.put("MERIAL", "A9D");
    typesHash.put("MERIDIAN HEALTH SYSTEM", "0TX");
    typesHash.put("MERIT RESOURCES INC.", "B0X");
    typesHash.put("MERVYNS", "017");
    typesHash.put("MESA AIR GROUP", "0W7");
    typesHash.put("MESQUITE INDEPENDENT SCHOOL DISTRIC", "B46");
    typesHash.put("MET MORTGAGE", "03O");
    typesHash.put("METHODIST LE BONHEUR HEALTHCARE", "BZ4");
    typesHash.put("METLIFE CAPITAL CORPORATION", "04P");
    typesHash.put("METRO ONE TELECOMMUNICATIONS", "017");
    typesHash.put("METROPOLITAN GOLF ASSOCIATION", "BW2");
    typesHash.put("METROPOLITAN NASHVILLE AIRPORT AUTH", "ATD");
    typesHash.put("METROPOLITAN TRANSIT AUTH", "BEK");
    typesHash.put("METLIFE", "010");
    typesHash.put("MFS", "017");
    typesHash.put("MGM RESORTS INTERNATIONAL", "A5U");
    typesHash.put("MHMR OF TARRANT COUNTY", "B4S");
    typesHash.put("M-I LLC", "BEG");
    typesHash.put("MICHAEL FOODS, INC.", "B1C");
    typesHash.put("MICHIGAN STATE UNIVERSITY", "B0T");
    typesHash.put("MICRO ELECTRONICS INC", "A5A");
    typesHash.put("MICROCHIP TECHNOLOGY", "AU2");
    typesHash.put("MICRON TECHNOLOGY, INC.", "A2B");
    typesHash.put("MICROSOFT", "06R");
    typesHash.put("MICROSOFT ALUMNI NETWORK", "AUO");
    typesHash.put("MIDDLESEX COUNTY COLLEGE", "AA6");
    typesHash.put("MILLENNIUM LABORATORIES", "B32");
    typesHash.put("MILLERCOORS", "AVG");
    typesHash.put("MINACS GROUP", "APD");
    typesHash.put("MINERALS TECHNOLOGIES INC.", "AY5");
    typesHash.put("MINISTRY EAST REGION", "BWN");
    typesHash.put("MINISTRY HEALTH CARE, INC", "BR3");
    typesHash.put("MINNESOTA BENEFIT ASSOCIATION", "09F");
    typesHash.put("MINNESOTA MEDICAL ASSOCIATION", "A4B");
    typesHash.put("MIT", "BIR");
    typesHash.put("MITCHELL DISTRIBUTING", "AQH");
    typesHash.put("MITRE CORPORATION", "017");
    typesHash.put("MITSUBISHI POLYESTER FILM", "0O9");
    typesHash.put("MIZUHO CORPORATE BANK", "BEZ");
    typesHash.put("MIZUNO USA INC", "0UM");
    typesHash.put("MMODAL", "BDE");
    typesHash.put("MODERN BUSINESS ASSOC.", "BWJ");
    typesHash.put("MOEN INCORPORATED", "0C0");
    typesHash.put("MOHAWK INDUSTRIES", "AZG");
    typesHash.put("MOLEX INC.", "BES");
    typesHash.put("MOMENTIVE", "BY1");
    typesHash.put("MONDELEZ INTERNATIONAL, LLC", "017");
    typesHash.put("MONEYGRAM INTERNATIONAL, INC.", "0CI");
    typesHash.put("MONITRONICS INTERNATIONAL, INC.", "BX4");
    typesHash.put("MONROE SCHOOL BOARD OF EDUCATION", "BUD");
    typesHash.put("MONSANTO COMPANY", "AK2");
    typesHash.put("MONTEFIORE MEDICAL CENTER", "08R");
    typesHash.put("MOODY'S CORPORATION", "AB2");
    typesHash.put("MOOSE INTERNATIONAL INC", "BXZ");
    typesHash.put("MORGAN STANLEY", "AVS");
    typesHash.put("MOTOROLA ISG", "031");
    typesHash.put("MOTOROLA MOBILITY", "BSJ");
    typesHash.put("MOUNT AUBURN", "ALE");
    typesHash.put("MOUNTAIN AMERICA CREDIT UNION", "BZK");
    typesHash.put("MOVADO GROUP", "0N2");
    typesHash.put("MOVIUS INTERACTIVE CORPORATION", "AT6");
    typesHash.put("MRV COMMUNICATIONS, INC", "09V");
    typesHash.put("MT. BAKER SCHOOL DISTRICT", "AQR");
    typesHash.put("MULTILINK", "AJA");
    typesHash.put("MUNGER, TOLLES & OLSON", "BLQ");
    typesHash.put("MUNICH RE AMERICA", "0RL");
    typesHash.put("MUSCULOSKELETAL TRANSPLANT FNDTN", "BFA");
    typesHash.put("MUSEUM OF MODERN ART", "AVZ");
    typesHash.put("MV TRANSPORTATION", "BHV");
    typesHash.put("MVP HEALTH PLAN", "0RU");
    typesHash.put("MYR GROUP", "A2A");
    typesHash.put("MYRIAD GENETICS, INC.", "0IQ");
    typesHash.put("N & M TRANSFER COMPANY, INC.", "0AO");
    typesHash.put("N&M TRANSFER COMPANY, INC.", "0AO");
    typesHash.put("N F A, INC.", "BHN");
    typesHash.put("NFA, INC.", "BHN");
    typesHash.put("NAACP", "BTD");
    typesHash.put("NACCO MATERIALS HANDLING GROUP, INC", "BDT");
    typesHash.put("NALCO", "BIY");
    typesHash.put("NAMMO TALLEY, INC.", "AE7");
    typesHash.put("NASA", "BCA");
    typesHash.put("NATIONAL AMUSEMENTS INC.", "B6I");
    typesHash.put("NATIONAL AQUARIUM", "AS0");
    typesHash.put("NATIONAL ASSOCIATION OF CONSERVATIV", "B30");
    typesHash.put("NATIONAL ASSOCIATION OF POSTAL SUPV", "0GJ");
    typesHash.put("NATIONAL COALITION OF PUBLIC SAFETY", "BPL");
    typesHash.put("NATIONAL COOPERATIVE BANK", "ANS");
    typesHash.put("NATIONAL CORVETTE OWNERS ASSOCIATIO", "BIN");
    typesHash.put("NATIONAL ELECTRONICS WARRANTY LLC", "A3F");
    typesHash.put("NATIONAL ENVELOPE CORPORATION", "BYP");
    typesHash.put("NATIONAL EXCHANGE CLUB", "B48");
    typesHash.put("NATIONAL GEOGRAPHIC SOCIETY", "A1M");
    typesHash.put("NATIONAL GRID", "AQV");
    typesHash.put("NATIONAL HEALTH MANAGEMENT", "AKG");
    typesHash.put("NATIONAL HIGH SCHOOL COACHES ASSOCI", "B0S");
    typesHash.put("NATIONAL LOUIS UNIVERSITY", "AOA");
    typesHash.put("NATIONAL MULTIPLE SCLEROSIS SOCIETY", "BF8");
    typesHash.put("NATIONAL OILWELL VARCO", "BUM");
    typesHash.put("NATIONAL PEO, LLC.", "BYQ");
    typesHash.put("NATIONAL PTA", "BMG");
    typesHash.put("NATIONAL RIFLE ASSOC OF AMERICA", "BR7");
    typesHash.put("NATIONAL TELECOMMUNICATIONS COOPERA", "BVA");
    typesHash.put("NATIONWIDE VISION CENTER, PC", "BRU");
    typesHash.put("NATL MULTIPLE SCLEROSIS SOC", "BQO");
    typesHash.put("NATL TRUST FOR HISTORIC PRESERVATIO", "0VZ");
    typesHash.put("NATL. ASSOC. FOR THE SELF EMPLOYED", "BIV");
    typesHash.put("NATURE'S WAY PRODUCTS, INC.", "AWG");
    typesHash.put("NAVARRO DISCOUNT PHARMACIES", "B1B");
    typesHash.put("NAVIGANT CONSULTING", "ASD");
    typesHash.put("NAVISTAR INTERNATIONAL CORP.", "BNC");
    typesHash.put("NAVTEQ", "BA4");
    typesHash.put("NAVY FEDERAL CREDIT UNION", "B49");
    typesHash.put("NBC UNIVERSAL", "017");
    typesHash.put("NCR", "067");
    typesHash.put("NEC DISPLAY SOLUTIONS OF AMERICA", "0ZM");
    typesHash.put("NEC SOLUTIONS AMERICA INC", "A0A");
    typesHash.put("NEC TECHNOLOGIES", "0J5");
    typesHash.put("NEGWER MATERIALS", "AD2");
    typesHash.put("NEMAK USA, INC", "AU6");
    typesHash.put("NESTLE USA INC.", "ARH");
    typesHash.put("NETAPP, INC", "BVI");
    typesHash.put("NETCENTRICS CORPORATION", "B5L");
    typesHash.put("NETJETS, INC.", "AR6");
    typesHash.put("NETWORK COMMUNICATIONS, INC.", "AIA");
    typesHash.put("NEUBERGER BERMAN GROUP LLC", "BOJ");
    typesHash.put("NEVADA HOTEL AND LODGING ASSOCIATIO", "BZS");
    typesHash.put("NEW ALBERTSON'S", "017");
    typesHash.put("NEW BALANCE", "BCD");
    typesHash.put("NEW ENGLAND FEDERAL CREDIT UNION", "307");
    typesHash.put("NEW FLYER OF AMERICA, INC.", "BY6");
    typesHash.put("NEW FREEDOM MORTGAGE CORPORATION", "AWU");
    typesHash.put("NEW HORIZON ACADEMY", "BNI");
    typesHash.put("NEW JERSEY MAP", "ARK");
    typesHash.put("NEW MEXICO FEDERATION OF TEACHERS", "0FI");
    typesHash.put("NEW MEXICO HIGHLANDS UNIVERSITY", "0NE");
    typesHash.put("NEW YORK METHODIST HOSPITAL", "0ON");
    typesHash.put("NEW YORK STATE UNITED TEACHERS", "005");
    typesHash.put("NEW YORK TIMES", "BK6");
    typesHash.put("NEW YORK UNIVERSITY", "017");
    typesHash.put("NEWBERG PUBLIC SCHOOLS", "BO0");
    typesHash.put("NEWELL COMPANY", "04E");
    typesHash.put("NEWMARKET INTERNATIONAL", "ADK");
    typesHash.put("NEWPAGE CORPORATION", "BNH");
    typesHash.put("NEWPORT HOSPITAL", "0JY");
    typesHash.put("NEWPORT MESA UNIFIED SCHOOL DIST.", "BEQ");
    typesHash.put("NEWS CORPORATION", "017");
    typesHash.put("NEXEO SOLUTIONS, LLC", "BTM");
    typesHash.put("NEXTERA ENERGY, INC.", "AS4");
    typesHash.put("NICE SYSTEMS, INC.", "AEJ");
    typesHash.put("NICHOLAS H. NOYES MEMORIAL HOSPITAL", "0MW");
    typesHash.put("NIKE, INC.", "0EO");
    typesHash.put("NIKON, INC.", "AM8");
    typesHash.put("NIPPON EXPRESS USA", "A1E");
    typesHash.put("NISSAN NORTH AMERICA, INC.", "AXR");
    typesHash.put("NIVIDIA", "BSA");
    typesHash.put("NOKIA", "AXW");
    typesHash.put("NORDSTROM INC", "0TV");
    typesHash.put("NORTH CAROLINA STATE FIREMANS ASSOC", "BZU");
    typesHash.put("NORTH JERSEY FEDERAL CREDIT UNION", "B1Q");
    typesHash.put("NORTHEAST BEHAVIORAL HEALTH", "AJM");
    typesHash.put("NORTHEAST CENTER FOR SPECIAL CARE", "BCB");
    typesHash.put("NORTHEAST COMMUNITY CREDIT UNION", "B4T");
    typesHash.put("NORTHEAST REHABILITATION HOSPITAL", "0ES");
    typesHash.put("NORTHEAST UTILITIES", "07K");
    typesHash.put("NORTHEASTERN UNIVERSITY", "05F");
    typesHash.put("NORTHERN TIER ENERGY", "B1L");
    typesHash.put("NORTHERN VIRGINIA FAMILY SERVICE", "A2T");
    typesHash.put("NORTHROP GRUMMAN", "BMB");
    typesHash.put("NORTHWEST COMMUNITY HOSPITAL", "0MB");
    typesHash.put("NORTHWEST TRAILER PARTS", "0WH");
    typesHash.put("NORTON HEALTHCARE", "A4U");
    typesHash.put("NOVANT HEALTH", "0FJ");
    typesHash.put("NOVARTIS CORPORATION", "AM2");
    typesHash.put("NOVELL, INC.", "AUQ");
    typesHash.put("NOVO NORDISK INC.", "0MS");
    typesHash.put("NSTAR", "03W");
    typesHash.put("NTN USA CORPORATION", "BQG");
    typesHash.put("NTT DATA INC.", "017");
    typesHash.put("NTT DATA, INC.", "0O7");
    typesHash.put("NU SKIN", "0GV");
    typesHash.put("NU-KOTE INTERNATIONAL", "0ZL");
    typesHash.put("NURSES FOUNDATION OF WISCONSIN", "BDO");
    typesHash.put("NUTMEG STATE FEDERAL CREDIT UNION", "A8D");
    typesHash.put("NV ENERGY", "BOY");
    typesHash.put("NW FINANCIAL ASSOC.EE BENEFIT TRUST", "BO1");
    typesHash.put("NY CONVENTION CENTER OPERATING CORP", "BOZ");
    typesHash.put("NYE COUNTY", "B0U");
    typesHash.put("NYK LINE INC.", "0UK");
    typesHash.put("NYPRO", "BOG");
    typesHash.put("NYSARC, INC.", "AVT");
    typesHash.put("NYSCOPBA", "BCH");
    typesHash.put("NYSE EURONEXT", "AS5");
    typesHash.put("O.C. TANNER COMPANY", "AJU");
    typesHash.put("OC TANNER COMPANY", "AJU");
    typesHash.put("OCCIDENTAL PETROLEUM CORPORATION", "BPC");
    typesHash.put("OCEAN SPRAY CRANBERRIES", "AZI");
    typesHash.put("OFFICE DEPOT", "BBT");
    typesHash.put("OFFICE MAX INC.", "017");
    typesHash.put("OFS FITEL, LLC", "B1X");
    typesHash.put("OGILVY & MATHER", "02Q");
    typesHash.put("OHIO DENTAL ASSOCIATION", "A5L");
    typesHash.put("OHIO OSTEOPATHIC ASSOCIATION", "A0M");
    typesHash.put("OHIOHEALTH", "A6G");
    typesHash.put("OKLAHOMA HEART HOSPITAL", "BFM");
    typesHash.put("OKLAHOMA PUBLIC EMPLOYEES ASSOC.", "B12");
    typesHash.put("OLD MUTUAL (US) HOLDINGS INC", "BJM");
    typesHash.put("OLDCASTLE INC.", "BB8");
    typesHash.put("OLIN CORPORATION", "017");
    typesHash.put("OLMSTED FALLS BOARD OF EDUCATION", "0X7");
    typesHash.put("O'MELVENY & MYERS LLP", "BN9");
    typesHash.put("OMELVENY & MYERS LLP", "BN9");
    typesHash.put("OMNI CIRCUITS, INC.", "0Y9");
    typesHash.put("ON SEMICONDUCTOR CORPORATION", "AT1");
    typesHash.put("O'NEAL STEEL INC", "A4S");
    typesHash.put("ONEAL STEEL INC", "A4S");
    typesHash.put("ONEAMERICA", "A9A");
    typesHash.put("ONYX SOFTWARE", "0UJ");
    typesHash.put("OPEIU LOCAL 100", "BZ1");
    typesHash.put("OPTUM, INC.", "0ZH");
    typesHash.put("ORANGE BUSINESS SERVICES HOLDINGS", "0VK");
    typesHash.put("ORANGE COAST TITLE COMPANY", "BDR");
    typesHash.put("ORANGE COUNTY'S CREDIT UNION", "BS7");
    typesHash.put("ORANGE REGIONAL MEDICAL CENTER", "0JS");
    typesHash.put("ORCHARD SUPPLY HARDWARE COPRORATION", "BXJ");
    typesHash.put("ORDER SONS OF ITALY IN AMERICA", "BRX");
    typesHash.put("OREGON GOLF ASSOCIATION", "BS4");
    typesHash.put("ORTHOLINK PHYSICIANS CORPORATION", "0XQ");
    typesHash.put("OSF SAINT ELIZABETH MEDICAL CENTER", "AYL");
    typesHash.put("OSMA", "BHS");
    typesHash.put("OSRAM SYLVANIA", "AQU");
    typesHash.put("OTTO BOCK HEALTHCARE, LP", "A3J");
    typesHash.put("OUR LADY OF CONSOLATION", "0XE");
    typesHash.put("OUR365", "08O");
    typesHash.put("OVERHEAD DOOR CORPORATION", "03C");
    typesHash.put("OVERLAKE HOSPITAL", "0NY");
    typesHash.put("OWENS & MINOR", "BVP");
    typesHash.put("OWENS CORNING", "017");
    typesHash.put("OZBURN-HESSEY LOGISTICS", "ANM");
    typesHash.put("OZINGA BROS., INC.", "BDG");
    typesHash.put("P.F. CHANG'S CHINA BISTRO, INC.", "BXX");
    typesHash.put("PF CHANG'S CHINA BISTRO, INC.", "BXX");
    typesHash.put("PA CONSULTING GROUP", "A1W");
    typesHash.put("PACE", "AR3");
    typesHash.put("PACE RESOURCES, INC.", "AJV");
    typesHash.put("PACIFIC ARCHITECTS AND ENGINEERS", "B18");
    typesHash.put("PACIFIC DENTAL SERVICES, INC", "A70");
    typesHash.put("PACIFICORP", "0DJ");
    typesHash.put("PALM ONE", "0Y8");
    typesHash.put("PALMDALE SCHOOL DISTRICT", "AXK");
    typesHash.put("PALOMAR HEALTH", "BMC");
    typesHash.put("PANASONIC CORP OF NORTH AMERICA", "0TN");
    typesHash.put("PAREXEL INTERNATIONAL CORPORATION", "0ED");
    typesHash.put("PARK NICOLLET", "ASK");
    typesHash.put("PARKHILL SCHOOL DISTRICT", "0JL");
    typesHash.put("PARKVIEW HEALTH", "AJ0");
    typesHash.put("PARLEX USA, INC.", "AGL");
    typesHash.put("PARSONS CORPORATION", "AZB");
    typesHash.put("PARTMINER, INC", "AJE");
    typesHash.put("PATHFINDER INC", "BY7");
    typesHash.put("PATHOLOGY ASSOCIATES MEDICAL LABORA", "BPF");
    typesHash.put("PAUL HASTINGS LLP", "BE4");
    typesHash.put("PAWLING CORPORATION", "0NF");
    typesHash.put("PAYCHEX, INC.", "AVC");
    typesHash.put("PBC", "A1L");
    typesHash.put("PBF HOLDING COMPANY LLC", "B2D");
    typesHash.put("PC CONNECTION, INC.", "AM5");
    typesHash.put("PC MALL", "A9M");
    typesHash.put("PECHANGA DEVELOPMENT CORPORATION", "BQY");
    typesHash.put("PECHINEY", "05E");
    typesHash.put("PEGASUS SOLUTIONS", "ATG");
    typesHash.put("PEIRCE-PHELPS", "AN2");
    typesHash.put("PENINSULA HOSPITAL CENTER", "0MZ");
    typesHash.put("PENNSYLVANIA PROFESSIONAL FIREFIGHT", "BZ5");
    typesHash.put("PEOPLES ENERGY CORPORATION", "0GR");
    typesHash.put("PEORIA UNIFIED SCHOOL DISTRICT", "AX0");
    typesHash.put("PEP BOYS MANNY MOE & JACK", "BTI");
    typesHash.put("PEPCO HOLDINGS INC.", "BI7");
    typesHash.put("PEPSICO", "ACA");
    typesHash.put("PERKINELMER", "0YO");
    typesHash.put("PERNOD RICARD", "BRV");
    typesHash.put("PETCO ANIMAL SUPPLIES, INC.", "BHA");
    typesHash.put("PETSMART", "BHR");
    typesHash.put("PFIZER", "0DF");
    typesHash.put("PHELPS COUNTY REGIONAL MEDICAL CENT", "A5E");
    typesHash.put("PHH CORP", "A57");
    typesHash.put("PHILADELPHIA INSURANCE COMPANIES", "BD4");
    typesHash.put("PHILIP MORRIS", "017");
    typesHash.put("PHILIPS ELECTRONICS", "0P2");
    typesHash.put("PHILLIPS EXETER ACADEMY", "A2V");
    typesHash.put("PHOENIX CHILDREN'S ACADEMY", "B2H");
    typesHash.put("PIKEVILLE COLLEGE", "A81");
    typesHash.put("PINELLAS COUNTY SCHOOLS", "AVY");
    typesHash.put("PINNACLE AIRLINES INC.", "AOZ");
    typesHash.put("PINNACLE FOODS GROUP, LLC", "BM7");
    typesHash.put("PINNACLE WEST CAPITAL CORPORATION", "0CO");
    typesHash.put("PIONEER VALLEY HOSPITAL", "AD3");
    typesHash.put("PITNEY BOWES, INC.", "03E");
    typesHash.put("PITT COMMUNITY COLLEGE", "0Q5");
    typesHash.put("PITT COMMUNITY COLLEGE ALUMNI ASSOC", "BX8");
    typesHash.put("PLATINUM EQUITY HOLDINGS", "AMW");
    typesHash.put("PLEXUS", "0PG");
    typesHash.put("PMC GROUP, INC.", "0Q8");
    typesHash.put("PMSI", "BI9");
    typesHash.put("PNC", "0XK");
    typesHash.put("POET LLC", "B2L");
    typesHash.put("POLYCOM, INC.", "06K");
    typesHash.put("PORTER NOVELLI", "AYN");
    typesHash.put("PORTLAND COMMUNITY COLLEGE", "0M0");
    typesHash.put("PORTLAND GENERAL ELECTRIC", "BH5");
    typesHash.put("PORTS AMERICA", "BW0");
    typesHash.put("POWELL INDUSTRIES", "BWK");
    typesHash.put("PPG INDUSTRIES, INC.", "BNM");
    typesHash.put("PQ CORPORATION", "ATB");
    typesHash.put("PR NEWSWIRE", "APX");
    typesHash.put("PRAXAIR INC", "AOX");
    typesHash.put("PRECIOUS PLATES", "B3W");
    typesHash.put("PRECISION ENGINEERED PRODUCTS", "AT5");
    typesHash.put("PREMIER HOME HEALTH CARE", "BUV");
    typesHash.put("PREMIER MEMBERS FEDERAL CREDIT UNIO", "118");
    typesHash.put("PREMIER RESEARCH", "BKX");
    typesHash.put("PRESS GANEY ASSOCIATES", "B0G");
    typesHash.put("PRESTIGE EMPLOYEE ADMINISTRATORS", "BPR");
    typesHash.put("PRICE CHOPPER", "017");
    typesHash.put("PRICEWATERHOUSECOOPERS", "0G4");
    typesHash.put("PRIDE MOBILITY PRODUCTS CORP.", "AHO");
    typesHash.put("PRIME HEALTHCARE SERVICES", "BSK");
    typesHash.put("PRIME TANNING CO., INC.", "0LT");
    typesHash.put("PRIME THERAPEUTICS", "0W0");
    typesHash.put("PRIMERICA FINANCIAL SERVICES, INC", "BRD");
    typesHash.put("PRIMESOURCE BUILDING PRODUCTS", "AVH");
    typesHash.put("PROGRESS SOFTWARE", "0JV");
    typesHash.put("PROGRESSIVE INSURANCE", "03K");
    typesHash.put("PROGRESSIVE NURSING STAFFERS", "AOW");
    typesHash.put("PROHEALTH CARE,INC", "0BF");
    typesHash.put("PRO-LIFT EQUIPMENT", "0XD");
    typesHash.put("PROTECTION ONE", "ACH");
    typesHash.put("PROVENA HEALTH", "BNW");
    typesHash.put("PROVIDENCE HEALTH & SERVICES", "BDI");
    typesHash.put("PROVIDENCE HOSPITALS", "BKN");
    typesHash.put("PSAV PRESENTATION SERVICES", "AF1");
    typesHash.put("PSE & G", "0DM");
    typesHash.put("PSEA", "0R8");
    typesHash.put("PSS WORLD, INC.", "AUJ");
    typesHash.put("PTC", "021");
    typesHash.put("PUBLIC EMPLOYEES FEDERATION", "BR6");
    typesHash.put("PUBLIC STORAGE", "BN1");
    typesHash.put("PUBLICIS GROUPE", "017");
    typesHash.put("PUBLISHERS CLEARING HOUSE", "0LA");
    typesHash.put("PULASKI COUNTY SPECIAL SCHOOL DIST", "B33");
    typesHash.put("PUMA NORTH AMERICA", "AIK");
    typesHash.put("PURDUE UNIVERSITY", "BRH");
    typesHash.put("PUTNAM INVESTMENTS", "017");
    typesHash.put("PVH CORP.", "0M4");
    typesHash.put("QEP RESOURCES, INC.", "BUN");
    typesHash.put("QIAGEN SCIENCES, INC.", "AUK");
    typesHash.put("QUAD GRAPHICS", "0EA");
    typesHash.put("QUALITY SYSTEMS, INC", "BKP");
    typesHash.put("QUANTUM CORPORATION", "06I");
    typesHash.put("QUEST DIAGNOSTICS", "ASG");
    typesHash.put("QUESTAR CORPORATION", "02S");
    typesHash.put("QUESTCO, INC.", "BWG");
    typesHash.put("QUICKEN LOANS", "BWI");
    typesHash.put("QUICKWAY CARRIERS", "AEE");
    typesHash.put("QUINTILES TRANSNATIONAL CORPORATION", "AQ1");
    typesHash.put("R.I.T", "017");
    typesHash.put("RIT", "017");
    typesHash.put("RABOBANK INTERNATIONAL", "ANZ");
    typesHash.put("RADISYS CORPORATION", "0Y4");
    typesHash.put("RANCHO SANTIAGO COMMUNITY COLLEGE", "AXQ");
    typesHash.put("RANDOLPH COUNTY BOARD OF EDUCATION", "AWH");
    typesHash.put("RANDSTAD PROFESSIONALS US, LP", "A4K");
    typesHash.put("RARITAN BAY MEDICAL CENTER", "BQE");
    typesHash.put("RAYTHEON", "03F");
    typesHash.put("RBC USA HOLDCO CORPORATION", "0S2");
    typesHash.put("RBS CITIZENS, NA", "AA2");
    typesHash.put("RCM TECHNOLOGIES", "AYO");
    typesHash.put("RCN CORPORATION", "BFR");
    typesHash.put("REA MAGNET WIRE COMPANY INC.", "0H1");
    typesHash.put("REA MAGNET WIRE COMPANY INC.", "0H1");
    typesHash.put("READER'S DIGEST", "05Z");
    typesHash.put("REAL ESTATE ADVISOR DEFENSE, INC.", "BQS");
    typesHash.put("RECALL-AMERICAS", "A0Q");
    typesHash.put("RECEIVABLE MANAGEMENT SERVICES CORP", "AMD");
    typesHash.put("RECKITT BENCKISER", "0LN");
    typesHash.put("RECORDING FOR THE BLIND & DYSLEXIC", "0U8");
    typesHash.put("RED BULL NORTH AMERICA, INC.", "AWW");
    typesHash.put("RED HAT, INC.", "A79");
    typesHash.put("REDBACK NETWORKS", "AY8");
    typesHash.put("REDDY ICE", "BW3");
    typesHash.put("REED ELSEVIER", "A7T");
    typesHash.put("REEDY CREEK IMPROVEMENT DISTRICT", "AG3");
    typesHash.put("REGENERON PHARMACEUTICALS", "0QP");
    typesHash.put("REGIONAL MANAGEMENT CORP", "B45");
    typesHash.put("REICHHOLD", "0PF");
    typesHash.put("RELIANT MEDICAL GROUP", "BO5");
    typesHash.put("REMEC DEFENSE AND SPACE, INC.", "A39");
    typesHash.put("REMINGTON ARMS COMPANY", "0V7");
    typesHash.put("RENAISSANCE", "0PR");
    typesHash.put("REPLACEMENTS, LTC", "A26");
    typesHash.put("RES-CARE", "017");
    typesHash.put("RESEARCH FOUNDATION FOR MENTAL HYG", "A9R");
    typesHash.put("RESOURCES FOR HUMAN DEVELOPMENT", "B09");
    typesHash.put("RESOURCES GLOBAL PROFESSIONALS", "BQ8");
    typesHash.put("RESTORATION HARDWARE", "BIZ");
    typesHash.put("RESURGENS ORTHOPAEDICS", "BGO");
    typesHash.put("RETIRED & DISABLED POLICE OF AMERIC", "BPZ");
    typesHash.put("RETIRED INDIANA PUBLIC EMPLOYEES", "A9N");
    typesHash.put("RETIRED PUBLIC EMPLOYEES OF NEVADA", "BVF");
    typesHash.put("REXEL HOLDINGS USA", "BSF");
    typesHash.put("REYES HOLDINGS L.L.C.", "BEY");
    typesHash.put("REYNOLDS & REYNOLDS", "06H");
    typesHash.put("REYNOLDS AMERICAN INC", "A8J");
    typesHash.put("RHF INVESTMENTS", "B55");
    typesHash.put("RHODE ISLAND ASSOC OF SCHOOL PRINCI", "AX2");
    typesHash.put("RHODE ISLAND COUNCIL 94 AFSCME", "B5R");
    typesHash.put("RIA GROUP", "0JF");
    typesHash.put("RICH PRODUCTS CORPORATION", "ACZ");
    typesHash.put("RICHFIELD HOSPITALITY,INC", "ARU");
    typesHash.put("RICOH CORPORATION", "AVL");
    typesHash.put("RIDGEWOOD BOARD OF EDUCATION", "0M5");
    typesHash.put("RIDGEWOOD SAVINGS BANK", "A6W");
    typesHash.put("RITE AID", "BDJ");
    typesHash.put("RIVERVIEW SCHOOL DISTRICT", "ACU");
    typesHash.put("RJF INTERNATIONAL CORPORATION", "B1A");
    typesHash.put("ROAD RUNNER CLUB OF AMERICA", "BGP");
    typesHash.put("ROANOKE-CHOWAN COMMUNITY COLLEGE", "0SC");
    typesHash.put("ROBBINS MANUFACTURING, INC", "B5S");
    typesHash.put("ROBERT MORRIS UNIVERSITY", "AO8");
    typesHash.put("ROCKFORD PRODUCTS CORPORATION", "0DY");
    typesHash.put("ROCKINGHAM COMMUNITY COLLEGE", "0GD");
    typesHash.put("ROCKINGHAM COUNTY SCHOOLS", "ARZ");
    typesHash.put("ROCKWELL AUTOMATION", "06W");
    typesHash.put("ROCKWELL COLLINS", "AYE");
    typesHash.put("ROCKWELL SCIENTIFIC COMPANY", "A3N");
    typesHash.put("ROCKY MOUNTAIN ORTHODONTICS", "ATZ");
    typesHash.put("ROHM & HAAS ELECTRONIC MATERIALS", "020");
    typesHash.put("ROLLINS INC.", "BLO");
    typesHash.put("ROOMS TO GO", "BL3");
    typesHash.put("ROTHMAN INSTITUTE", "B4D");
    typesHash.put("ROUNDY'S SUPERMARKETS, INC.", "02O");
    typesHash.put("ROVI CORPORATION", "BN7");
    typesHash.put("ROWAN COMPANIES INC", "BGE");
    typesHash.put("RR DONNELLEY", "0WU");
    typesHash.put("RSU #19", "A4P");
    typesHash.put("RTN FEDERAL CREDIT UNION", "0J9");
    typesHash.put("RUBY TUESDAY", "AAO");
    typesHash.put("RURAL/METRO CORPORATION", "AZ0");
    typesHash.put("RUSH COPLEY MEDICAL CENTER", "0ZS");
    typesHash.put("RUSH UNIVERSITY MEDICAL CENTER", "BJN");
    typesHash.put("RW BAIRD", "BRM");
    typesHash.put("S&S ARNOT OGDEN TERMINATED", "0LP");
    typesHash.put("S&S BANKBOSTON TERMED", "0V4");
    typesHash.put("S&S DYNAMICS RESEARCH TERM", "0G5");
    typesHash.put("S&S FLEET TERM", "0FE");
    typesHash.put("S&S HITCHNER TERMINATED", "0MC");
    typesHash.put("S&S ROADWAY TERMED", "0XU");
    typesHash.put("S. ABRAHAM & SONS", "ABX");
    typesHash.put("S ABRAHAM & SONS", "ABX");
    typesHash.put("SABINE STATE BANK & TRUST CO.", "B54");
    typesHash.put("SAFETY KLEEN", "BD2");
    typesHash.put("SAFEWAY, INC", "BHY");
    typesHash.put("SAGE", "A3R");
    typesHash.put("SAGER ELECTRONICS", "AFZ");
    typesHash.put("SAINT CLARES HEALTH SYSTEM", "BOK");
    typesHash.put("SAKS FIFTH AVENUE", "B3X");
    typesHash.put("SALINE MEMORIAL HOSPITAL", "AGQ");
    typesHash.put("SALT LAKE CITY", "0CH");
    typesHash.put("SALT LAKE COMMUNITY COLLEGE ALUMNI", "BZD");
    typesHash.put("SALT LAKE COUNTY", "A2O");
    typesHash.put("SALT LAKE REGIONAL", "0O8");
    typesHash.put("SALT RIVER PROJECT", "0BB");
    typesHash.put("SAMARITAN HEALTHCARE", "0N0");
    typesHash.put("SAMARITAN MEDICAL CENTER", "0OD");
    typesHash.put("SAMSUNG AUSTIN SEMICONDUCTOR", "BF9");
    typesHash.put("SAMSUNG INFORMATION SYSTEMS AMERICA", "BXA");
    typesHash.put("SAMSUNG TELECOMMUNICATIONS", "BDX");
    typesHash.put("SAMTEC", "AUD");
    typesHash.put("SAN ANTONIO FEDERAL CREDIT UNION", "BVT");
    typesHash.put("SAN ANTONIO INDEPENDENT SCHOOL", "BM9");
    typesHash.put("SAN DIEGO STATE UNIV. RESEARCH", "A1U");
    typesHash.put("SAN LEANDRO UNIFIED SCHOOL DISTRICT", "B0Y");
    typesHash.put("SANOFI", "AEN");
    typesHash.put("SANTANDER HOLDINGS USA, INC", "0XV");
    typesHash.put("SANYO NORTH AMERICA CORPORATION", "AJ9");
    typesHash.put("SAP AMERICA", "017");
    typesHash.put("SAPERS COM ENERGY TERMINATED", "0MD");
    typesHash.put("SAPERS STAPLES TERMINATED", "0PQ");
    typesHash.put("SAPIENT", "ALS");
    typesHash.put("SARAH BUSH", "0M7");
    typesHash.put("SARAH LAWRENCE COLLEGE", "0CZ");
    typesHash.put("SAS INSTITUTE", "AZ7");
    typesHash.put("SASAKI ASSOCIATES, INC.", "0IE");
    typesHash.put("SCANSOFT", "AKW");
    typesHash.put("SCF ARIZONA", "BD0");
    typesHash.put("SCHINDLER ELEVATOR CORPORATION", "AY7");
    typesHash.put("SCHLUMBERGER", "BV1");
    typesHash.put("SCHNEIDER NATIONAL", "03R");
    typesHash.put("SCHOLASTIC, INC", "AEO");
    typesHash.put("SCHOOL DIST KETTLE MORAINE-RETIREES", "0NV");
    typesHash.put("SCHOOL SPECIALTY, INC.", "ALN");
    typesHash.put("SCHWAN'S SHARED SERVICES, LLC", "BUG");
    typesHash.put("SCI COMPANIES", "A9J");
    typesHash.put("SCITOR CORPORATION", "AZM");
    typesHash.put("SCOTTISH RITE SOUTHERN JURISDICTION", "BMS");
    typesHash.put("SCOTT-MCRAE AUTOMOTIVE", "B0P");
    typesHash.put("SCOTTSDALE UNIFIED SCHOOL DISTRICT", "B0Z");
    typesHash.put("SEA RAY BOATS", "017");
    typesHash.put("SEABURY & SMITH * EMPLOYEES", "017");
    typesHash.put("SEACHANGE INTERNATIONAL", "0OW");
    typesHash.put("SEAGATE US, LLC", "BOQ");
    typesHash.put("SEARLES VALLEY MINERALS", "BOI");
    typesHash.put("SEARS HOLDINGS CORPORATION", "017");
    typesHash.put("SEBA", "BO9");
    typesHash.put("SECOND AMENDMENT FOUNDATION INC.", "BRL");
    typesHash.put("SEDGWICK CMS", "BTT");
    typesHash.put("SEI INVESTMENTS", "APQ");
    typesHash.put("SEIKO CORPORATION OF AMERICA", "017");
    typesHash.put("SELECT PORTFOLIO SERVICING", "A94");
    typesHash.put("SENECA FOODS CORP", "0CE");
    typesHash.put("SENSIENT TECHNOLOGIES", "04U");
    typesHash.put("SEPRACOR INC.", "0UR");
    typesHash.put("SERCO", "BLX");
    typesHash.put("SERENA SOFTWARE", "ADU");
    typesHash.put("SERIGRAPH, INC.", "0J0");
    typesHash.put("SETON HEALTHCARE NETWORK", "ABK");
    typesHash.put("SEVEN WORLDWIDE INC.", "0GY");
    typesHash.put("SEVERN TRENT SERVICES", "AW9");
    typesHash.put("SFM MUTUAL INSURANCE COMPANY", "AEM");
    typesHash.put("SGS NORTH AMERICA", "BNQ");
    typesHash.put("SHAMROCK FOODS, INC", "A0J");
    typesHash.put("SHANNON CLINIC", "AET");
    typesHash.put("SHANNON MEDICAL CENTER", "AAS");
    typesHash.put("SHARP", "0LE");
    typesHash.put("SHARP HEALTHCARE", "BIW");
    typesHash.put("SHEET METAL WORKERS LOCAL UNION 38", "BZ7");
    typesHash.put("SHELL OIL", "0FX");
    typesHash.put("SHISEIDO COSMETICS AMERICA LTD", "BTP");
    typesHash.put("SIEMENS CORPORATION", "AVK");
    typesHash.put("SIGNATURE PAYROLL SERVICES, LLC.", "BB5");
    typesHash.put("SILGAN PLASTICS CORPORATION", "0IK");
    typesHash.put("SIMMONS FOOD", "AJK");
    typesHash.put("SIMPLY FASHION STORES", "A91");
    typesHash.put("SINAI HOSPITAL OF BALTIMORE", "017");
    typesHash.put("SIPEX CORPORATION", "AHQ");
    typesHash.put("SIRVA INC", "BIO");
    typesHash.put("SITA", "0T0");
    typesHash.put("SIX FLAGS ENTERTAINMENT CORPORATION", "B06");
    typesHash.put("SKILLS OF CENTRAL PA", "0II");
    typesHash.put("SKYONE FEDERAL CREDIT UNION", "BYV");
    typesHash.put("SLM CORPORATION", "0UL");
    typesHash.put("SMARTHEALTH AND AFFILIATES", "AS2");
    typesHash.put("SMILE BRANDS INC", "BJA");
    typesHash.put("SMITH INTERNATIONAL INC", "AQ4");
    typesHash.put("SMITHGROUP INC", "A3M");
    typesHash.put("SNAP-ON INC EMPLOYEES & RETIREES", "017");
    typesHash.put("SOCIETY FOR HUMAN RESOURCE MANAGEME", "BZJ");
    typesHash.put("SOFTWARE AG", "0CC");
    typesHash.put("SOLAE, LLC", "0SB");
    typesHash.put("SOLO CUP COMPANY", "BEH");
    typesHash.put("SOMERSET MEDICAL CENTER", "AAG");
    typesHash.put("SONIC AUTOMOTIVE", "A4V");
    typesHash.put("SONY COMPUTER ENTERTAINMENT AMERICA", "BQZ");
    typesHash.put("SONY ELECTRONICS INC", "AZC");
    typesHash.put("SORIN GROUP", "0SI");
    typesHash.put("SOS STAFFING", "AKQ");
    typesHash.put("SOUND CREDIT UNION", "BYU");
    typesHash.put("SOUTH CAROLINA FEDERAL CREDIT UNION", "BXD");
    typesHash.put("SOUTH COUNTY HOSPITAL INC", "BKY");
    typesHash.put("SOUTH PIEDMONT COMMUNITY COLLEGE", "0G6");
    typesHash.put("SOUTH WHIDBEY SCHOOL DISTRICT", "AWC");
    typesHash.put("SOUTHEASTERN CONTAINER, INC.", "AIE");
    typesHash.put("SOUTHERN COMPANY", "0AL");
    typesHash.put("SOUTHERN MANAGEMENT", "AZ1");
    typesHash.put("SOUTHERN NEW HAMPSHIRE HEALTH", "AU0");
    typesHash.put("SOUTHERN RESEARCH INSTITUTE", "0GF");
    typesHash.put("SOUTHERN/NORTHERN NEVADA GOLF ASSOC", "BH4");
    typesHash.put("SOUTHWEST AIRLINES", "B08");
    typesHash.put("SOUTHWEST GENERAL HEALTH CENTER", "BIQ");
    typesHash.put("SOUTHWESTERN COMMUNITYY COLLEGE", "0I8");
    typesHash.put("SOUTHWIRE COMPANY", "079");
    typesHash.put("SPACE SYSTEMS LORAL LLC", "BL4");
    typesHash.put("SPACENET, INC.", "0O1");
    typesHash.put("SPARROW HEALTH SYSTEM", "BLC");
    typesHash.put("SPARTA, INC.", "B0D");
    typesHash.put("SPARTAN LIGHT METAL PRODUCTS, INC.", "0WY");
    typesHash.put("SPAULDING REHABILITATION HOSPITAL", "0LK");
    typesHash.put("SPECIALTY CARE", "B5H");
    typesHash.put("SPECTRUM HEALTH - KENT COMMUNITY", "0ZT");
    typesHash.put("SPOKANE PUBLIC SCHOOLS 81", "A40");
    typesHash.put("SPORTS AUTHORITY", "BCL");
    typesHash.put("SPRINT", "A8U");
    typesHash.put("SPX CORPORATION", "017");
    typesHash.put("SQUIRE, SANDERS & DEMPSEY", "BQL");
    typesHash.put("SRA INTERNATIONAL", "AYM");
    typesHash.put("SSA GLOBAL TECHNOLOGIES, INC.", "AS9");
    typesHash.put("ST MICROELECTRONICS", "017");
    typesHash.put("ST. ANTHONY'S MEDICAL CENTER", "AEH");
    typesHash.put("ST. BENEDICTS FAMILY MEDICAL CENTER", "AN8");
    typesHash.put("ST. CLOUD MEDICAL GROUP", "0J3");
    typesHash.put("ST. CROIX REGIONAL MEDICAL CENTER", "AYS");
    typesHash.put("ST. FRANCIS HOSP + MED CTR OF CT", "04A");
    typesHash.put("ST. JAMES MERCY HOSPITAL", "0A2");
    typesHash.put("ST. JOHN HEALTH SYSTEM", "BMN");
    typesHash.put("ST. JOHNS UNIVERSITY - MN", "0FP");
    typesHash.put("ST. JOSEPH HC CARONDELET-KANSAS CITY", "0F1");
    typesHash.put("ST. JOSEPH HEALTH SERV OF RHODE I", "AAV");
    typesHash.put("ST. JOSEPHS/CANDLER HEALTH SYSTEM", "BTW");
    typesHash.put("ST. LUKE'S EPISCOPAL HEALTH SYS", "BVD");
    typesHash.put("ST. LUKE'S EPISCOPAL PRESB HOSPITAL", "AID");
    typesHash.put("ST. LUKE'S HEALTH SYSTEM", "AA7");
    typesHash.put("ST. LUKE'S HOSPITAL", "0BN");
    typesHash.put("ST. MARY'S HEALTH SYSTEM", "A8K");
    typesHash.put("ST. MARY'S HOSPITAL OF CT", "0H0");
    typesHash.put("ST. PETERS COLLEGE", "0NN");
    typesHash.put("ST. THOMAS AQUINAS COLLEGE", "AEY");
    typesHash.put("ST. VINCENT HOSPITALS & HEALTH SERV", "0BD");
    typesHash.put("STANADYNE CORPORATION", "AVE");
    typesHash.put("STANDARD CHARTERED BANK", "AFC");
    typesHash.put("STANDARD ELECTRIC COMPANY", "0TP");
    typesHash.put("STANDARD REGISTER", "0EI");
    typesHash.put("STANFORD HOSPITALS & CLINICS", "017");
    typesHash.put("STANLEY BLACK & DECKER", "AP8");
    typesHash.put("STANLEY STEEMER INTERNATIONAL INC.", "AT9");
    typesHash.put("STAPLES-PART TIMERS", "017");
    typesHash.put("STAR GAS PARTNERS", "AWR");
    typesHash.put("STATE BAR OF GEORGIA", "BP5");
    typesHash.put("STATE BAR OF WISCONSIN", "B0M");
    typesHash.put("STATE EMPLOYEES ASSOCIATION OF NC", "BMO");
    typesHash.put("STATE OF ALABAMA", "BPY");
    typesHash.put("STATE OF ARIZONA", "BEE");
    typesHash.put("STATE OF CONNECTICUT", "087");
    typesHash.put("STATE OF FLORIDA - DEPT OF MGMT SVC", "017");
    typesHash.put("STATE OF TEXAS", "BY3");
    typesHash.put("STATE OF UTAH", "03T");
    typesHash.put("STATE STREET BANK AND TRUST COMPANY", "017");
    typesHash.put("STATION CASINOS, INC.", "BCC");
    typesHash.put("STEFANINI TECH TEAM", "BOV");
    typesHash.put("STEMILT GROWERS, LLC", "B3Q");
    typesHash.put("STERICYCLE", "A96");
    typesHash.put("STERLING MEDICAL CENTER", "BMY");
    typesHash.put("STEVENSON UNIVERSITY", "B5W");
    typesHash.put("STEWARD HEALTH CARE SYSTEMS, LLC.", "AFU");
    typesHash.put("STICKLEY L&JG, INC.", "ATW");
    typesHash.put("STIFEL NICOLAUS & COMPANY INC", "A7K");
    typesHash.put("STORMONT-VAIL HEALTHCARE", "0NT");
    typesHash.put("STRATEGIC OUTSOURCING INC", "B1Z");
    typesHash.put("STRATUS TECHNOLOGIES, INC.", "02L");
    typesHash.put("STREAM INTERNATIONAL, INC.", "AVV");
    typesHash.put("STRUCTURE TONE INCORPORATED", "0IX");
    typesHash.put("SUBARU OF INDIANA AUTOMOTIVE, INC.", "AB0");
    typesHash.put("SUB-HUB", "A7N");
    typesHash.put("SUBURBAN PROPANE", "0VG");
    typesHash.put("SULLIVAN UNIVERSITY SYSTEM", "BG0");
    typesHash.put("SUN CHEMICAL CORPORATION", "0TH");
    typesHash.put("SUNCAST CORPORATION", "0XZ");
    typesHash.put("SUNDT CONSTRUCTION", "AJT");
    typesHash.put("SUNNEN PRODUCTS COMPANY", "0DA");
    typesHash.put("SUNRISE COLONY LP", "AWD");
    typesHash.put("SUNRISE MEDICAL INC.", "AP2");
    typesHash.put("SUNS LEGACY PARTNERS, LLC.", "A0C");
    typesHash.put("SUPERIOR ESSEX", "A6L");
    typesHash.put("SUPERIOR PRINTING INC. COMPANY", "AKB");
    typesHash.put("SUPERMEDIA LLC", "BFK");
    typesHash.put("SUPERVALU", "017");
    typesHash.put("SUPREME COUNCIL, AASR", "BC9");
    typesHash.put("SURGE RESOURCES", "BMX");
    typesHash.put("SUSAN B. ALLEN MEMORIAL HOSPITAL", "0PT");
    typesHash.put("SUSQUEHANNA BANCSHARES, INC.", "BTF");
    typesHash.put("SUSQUEHANNA INTERNATIONAL GRP", "BLA");
    typesHash.put("SUTTER HEALTH", "BDL");
    typesHash.put("SWAROVSKI NORTH AMERICA LIMITED", "BD8");
    typesHash.put("SWEDISH AMERICAN HEALTH SYSTEM", "BYO");
    typesHash.put("SWIFT TRANSPORTATION COMPANY", "0D6");
    typesHash.put("SWIRE COCA-COLA, USA", "AHA");
    typesHash.put("SYCUAN", "BKH");
    typesHash.put("SYMANTEC CORPORATION", "BHM");
    typesHash.put("SYNIVERSE TECHNOLOGIES", "AOJ");
    typesHash.put("SYNOPSYS", "BBF");
    typesHash.put("SYNTHES USA", "BRP");
    typesHash.put("SYRACUSE UNIVERSITY", "0LI");
    typesHash.put("SYSCO CORPORATION", "ADL");
    typesHash.put("SYSTEMS & ELECTRONICS, INC.", "0GE");
    typesHash.put("T. ROWE PRICE", "0JI");
    typesHash.put("T ROWE PRICE", "0JI");
    typesHash.put("TACO, INC", "AIL");
    typesHash.put("TACOMA NEWS TRIBUNE", "0LH");
    typesHash.put("TAGHLEEF INDUSTRIES", "0L2");
    typesHash.put("TALLAHASSEE MEMORIAL REG. MEDICAL", "0S4");
    typesHash.put("TANG GROUP", "0M6");
    typesHash.put("TANGOE", "BX1");
    typesHash.put("TANNER MEDICAL CENTER, INC.", "A78");
    typesHash.put("TARGET", "017");
    typesHash.put("TARGET CW", "B0W");
    typesHash.put("TASC, INC.", "BXM");
    typesHash.put("TCS AMERICA", "BWW");
    typesHash.put("TDK CORPORATION", "0L8");
    typesHash.put("TE CONNECTIVITY", "BJW");
    typesHash.put("TEACHERS CREDIT UNION", "B1D");
    typesHash.put("TEAMSTERS LOCAL 25", "BOM");
    typesHash.put("TECH DATA CORPORATION", "BUT");
    typesHash.put("TECHNICOLOR", "ACW");
    typesHash.put("TECK COMINCO AMERICAN", "A9U");
    typesHash.put("TEICHERT, INC", "A0E");
    typesHash.put("TEKNION LLC", "A7B");
    typesHash.put("TELECT INC", "A66");
    typesHash.put("TELEPHONE AND DATA SYSTEMS", "0DX");
    typesHash.put("TELEPHONE WORKERS CREDIT UNION", "04Q");
    typesHash.put("TEMPEL STEEL", "0D5");
    typesHash.put("TEMPORARY ACCOUNT", "AAI");
    typesHash.put("TEMPUR-PEDIC INTERNATIONAL", "B1G");
    typesHash.put("TENNANT COMPANY", "07D");
    typesHash.put("TENNECO AUTOMOTIVE INC.", "AWM");
    typesHash.put("TENNESSEE DENTAL ASSOCIATION", "A89");
    typesHash.put("TENNESSEE MEDICAL ASSOCIATION", "A8M");
    typesHash.put("TERADATA CORPORATION", "BED");
    typesHash.put("TERADYNE INC.", "017");
    typesHash.put("TERRACON INC.", "ALL");
    typesHash.put("TERUMO BCT, INC.", "0DT");
    typesHash.put("TESTAMERICA", "BCV");
    typesHash.put("TETRA TECH, INC.", "0BL");
    typesHash.put("TEVA PHARMACEUTICALS", "BFX");
    typesHash.put("TEXANS CREDIT UNION", "B50");
    typesHash.put("TEXAS A&M UNIVERSITY", "B5Q");
    typesHash.put("TEXAS BAY AREA CREDIT UNION", "BY9");
    typesHash.put("TEXAS HEALTH RESOURCES", "BRO");
    typesHash.put("TEXAS LIFE INSURANCE COMPANY", "A2E");
    typesHash.put("TEXAS MUTUAL INSURANCE COMPANY", "0C1");
    typesHash.put("TEXAS ROADHOUSE", "BS1");
    typesHash.put("TEXTRON INCORPORATED", "0M9");
    typesHash.put("THE ADVISORY BOARD", "AKP");
    typesHash.put("THE AMBER WATCH FOUNDATION", "BXI");
    typesHash.put("THE ASSOCIATION OF PROFESSIONALS", "BTO");
    typesHash.put("THE BESSEMER GROUP, INC", "BVB");
    typesHash.put("THE BON TON DEPARTMENT STORES", "BY4");
    typesHash.put("THE CBE GROUP", "BH9");
    typesHash.put("THE CHARTER SCHOOL SAFETY GROUP", "B39");
    typesHash.put("THE CHEESECAKE FACTORY", "BEL");
    typesHash.put("THE CHRIST HOSPITAL", "017");
    typesHash.put("THE COLLEGE BOARD", "BLY");
    typesHash.put("THE CULINARY INSTITUTE OF AMERICA", "BVY");
    typesHash.put("THE DANNON COMPANY, INC", "0TS");
    typesHash.put("THE EVANGELICAL LUTHERAN GOOD SAMAR", "BUI");
    typesHash.put("THE FEDERAL SAVINGS BANK", "B5G");
    typesHash.put("THE FIELD MUSEUM", "0V8");
    typesHash.put("THE FINISH LINE INC", "BUQ");
    typesHash.put("THE FRIEDKIN COMPANIES", "BSY");
    typesHash.put("THE GREAT ATLANTIC & PACIFIC TEA CO", "B1V");
    typesHash.put("THE GUNLOCKE COMPANY", "0AG");
    typesHash.put("THE HAVI GROUP", "A9F");
    typesHash.put("THE HOME DEPOT", "AU3");
    typesHash.put("THE HOSPITAL OF CENTRAL CONNECTICUT", "0IB");
    typesHash.put("THE J. PAUL GETTY TRUST", "A0L");
    typesHash.put("THE JACKSON LABORATORY", "AUM");
    typesHash.put("THE JOHNS HOPKINS HEALTH SYSTEM", "AOF");
    typesHash.put("THE KROGER CO.", "ALK");
    typesHash.put("THE MATLEN SILVER GROUP", "0UO");
    typesHash.put("THE MENTOR NETWORK", "BPE");
    typesHash.put("THE METHODIST HOSPITAL SYSTEM", "BMW");
    typesHash.put("THE NATIONAL AFSCME", "BQV");
    typesHash.put("THE NATIONAL GRANGE", "BVN");
    typesHash.put("THE NEBRASKA MEDICAL CENTER", "AYX");
    typesHash.put("THE NEW YORK FOUNDLING HOSPITAL", "B43");
    typesHash.put("THE NIELSEN COMPANY", "0DH");
    typesHash.put("THE ORDER OF UNITED COMMERCIAL TRAV", "B4M");
    typesHash.put("THE PACIFIC INSTITUTE", "0U5");
    typesHash.put("THE PEIR GROUP, LLC", "A8L");
    typesHash.put("THE PENN COMPANIES", "0U6");
    typesHash.put("THE ROBERT PLAN CORPORATION", "0VW");
    typesHash.put("THE SALVATION ARMY EASTERN TERRITOR", "BZH");
    typesHash.put("THE SALVATION ARMY WESTERN TERRITOR", "B1J");
    typesHash.put("THE SAN DIEGO UNION-TRIBUNE LLC", "A3I");
    typesHash.put("THE SHEVELL GROUP", "BD7");
    typesHash.put("THE ST. PAUL COMPANIES, INC", "0UB");
    typesHash.put("THE SUTHERLAND GRP., LTD.", "AOM");
    typesHash.put("THE TEXAS HOSPITAL ASSOCIATION", "0N6");
    typesHash.put("THE TIRE RACK, INC.", "AKY");
    typesHash.put("THE UNITED GROUP", "AF9");
    typesHash.put("THE UNIVERSITY OF CHICAGO MEDICINE", "B4I");
    typesHash.put("THE UNIVERSITY OF KANSAS HOSPITAL", "BBM");
    typesHash.put("THE VENETIAN CASINO RESORT", "B2C");
    typesHash.put("THE WESTERN UNION COMPANY", "BAU");
    typesHash.put("THE WESTMINSTER SCHOOLS", "0YZ");
    typesHash.put("THE WOLF ORGANIZATION INC.", "BCE");
    typesHash.put("THE YANKEE CANDLE COMPANY", "APK");
    typesHash.put("THERMO FISHER SCIENTIFIC", "AXC");
    typesHash.put("THOMASVILLE CITY SCHOOLS", "AQW");
    typesHash.put("THOMPSONHEALTH", "0K4");
    typesHash.put("THOMSON REUTERS", "0AV");
    typesHash.put("THRESHOLDS, INC", "BCU");
    typesHash.put("THRUPOINT, INC.", "AM4");
    typesHash.put("THUNDERBIRD SCHOOL OF GLOBAL MGMT", "ABI");
    typesHash.put("TIBCO SOFTWARE INC", "BME");
    typesHash.put("TIDEWELL HOSPICE & PALLATIVE CARE", "BO8");
    typesHash.put("TIME WARNER CABLE LLC", "B4O");
    typesHash.put("TIMKEN COMPANY", "0P1");
    typesHash.put("TISHMAN HOTEL & REALTY", "A14");
    typesHash.put("TIVO INC.", "BFL");
    typesHash.put("TJX COMPANIES", "017");
    typesHash.put("TMC HEALTHCARE", "0JQ");
    typesHash.put("T-MOBILE", "BU9");
    typesHash.put("TMOBILE", "BU9");
    typesHash.put("TOLEDO BOARD OF EDUCATION", "A28");
    typesHash.put("TOLL BROTHERS, INC.", "AGR");
    typesHash.put("TOLTZ, KING, DUVALL, ANDERSON AND A", "AM6");
    typesHash.put("TORAY PLASTICS", "0LJ");
    typesHash.put("TORCHMARK CORPORATION", "ANC");
    typesHash.put("TORY BURCH", "BZB");
    typesHash.put("TOWN OF SHREWSBURY", "BZ0");
    typesHash.put("TOWNE PROPERTIES ASSET MGT. CO.", "AMC");
    typesHash.put("TOYOTA BOSHOKU", "BJQ");
    typesHash.put("TOYOTA MOTOR MFG NORTH AMERICA", "07V");
    typesHash.put("TOYOTA MOTOR SALES", "A30");
    typesHash.put("TRAILER BRIDGE, INC.", "0SL");
    typesHash.put("TRANS UNION", "0QZ");
    typesHash.put("TRANSDIGM", "BL9");
    typesHash.put("TRANSIT FEDERAL CREDIT UNION 1181", "BP8");
    typesHash.put("TRANSIT MIX CONCRETE CORPORATION", "AHE");
    typesHash.put("TRANS-LUX CORPORATION", "0KN");
    typesHash.put("TRANSPLACE INC.", "BB9");
    typesHash.put("TRANSPORT WORKERS UNION LOCAL 234", "A9Y");
    typesHash.put("TRAVEL LEADERS GROUP, LLC", "BHL");
    typesHash.put("TRAVELPORT INC.", "A95");
    typesHash.put("TRC ENVIRONMENTAL CORPORATION", "0KO");
    typesHash.put("TREASURE ISLAND, LLC.", "BMI");
    typesHash.put("TREASURY WINE ESTATES AMERICAS CO", "BCW");
    typesHash.put("TRIANGLE AUTO CENTER INC", "B2R");
    typesHash.put("TRIBUNE COMPANY", "B15");
    typesHash.put("TRI-CITY MEDICAL CENTER", "A6C");
    typesHash.put("TRILOGY MANAGEMENT SERVICES, LLC", "BLD");
    typesHash.put("TRINET", "AVQ");
    typesHash.put("TRINITY HEALTH SYSTEMS", "017");
    typesHash.put("TRIPP LITE", "0Q7");
    typesHash.put("TRI-STATE MOTOR TRANSIT", "0AK");
    typesHash.put("TRIZETTO CORPORATION", "AD9");
    typesHash.put("TROPICANA LAS VEGAS", "B1S");
    typesHash.put("TRUMAN MEDICAL CENTER", "06A");
    typesHash.put("TRUMP ENTERTAINMENT RESORTS", "BQX");
    typesHash.put("TS TECH HOLDING COMPANY", "ASM");
    typesHash.put("T.S. TECH HOLDING COMPANY", "ASM");
    typesHash.put("TUALATIN VALLEY FIRE", "0S6");
    typesHash.put("TUFTS MEDICAL CENTER", "AUN");
    typesHash.put("TUFTS UNIVERSITY", "0AM");
    typesHash.put("TULLYS COFFEE", "BC5");
    typesHash.put("TURNER BROADCASTING SYSTEM", "06M");
    typesHash.put("TWIN CITIES ORTHOPEDIC SURGEONS", "B3D");
    typesHash.put("TWU LOCAL 100 NYC TRANSIT", "BSL");
    typesHash.put("TYCO INTERNATIONAL", "BM6");
    typesHash.put("TYSON FOODS", "ATL");
    typesHash.put("U.S. HEALTHWORKS HOLDING COMPANY", "BOF");
    typesHash.put("U.S. VENTURE, INC.", "07A");
    typesHash.put("UAW FORD", "BM3");
    typesHash.put("UBM, LLC", "0E8");
    typesHash.put("UC HEALTH", "BHT");
    typesHash.put("UCB INC.", "0TI");
    typesHash.put("UCHEALTH (COLORADO)", "B4K");
    typesHash.put("UCHICAGO ARGONNE, LLC, PLAN SPONSOR", "0RM");
    typesHash.put("UFCW LOCAL 227", "B3T");
    typesHash.put("UFCW8", "B0A");
    typesHash.put("UGL SERVICES", "BFC");
    typesHash.put("U-HAUL INTERNATIONAL INC.", "B40");
    typesHash.put("ULTA SALON COSMETICS & FRAGRANCE", "BVE");
    typesHash.put("UNC HEALTHCARE", "AB6");
    typesHash.put("UNI SELECT USA", "BB4");
    typesHash.put("UNIFIED POLICE DEPARTMENT", "BO3");
    typesHash.put("UNIFORMS TO YOU & CO.", "402");
    typesHash.put("UNILEVER", "AM1");
    typesHash.put("UNION BANK OF SWITZERLAND", "0D4");
    typesHash.put("UNION BOARD OF EDUCATION", "0MQ");
    typesHash.put("UNION PUBLIC SCHOOLS", "BLW");
    typesHash.put("UNISOURCE ENERGY CORPORATION", "BT6");
    typesHash.put("UNISOURCE WORLDWIDE", "A1K");
    typesHash.put("UNITED HEALTH SERVICES", "017");
    typesHash.put("UNITED HEALTHCARE CORPORATION", "0B6");
    typesHash.put("UNITED HOSPITAL SYSTEM INC", "BSG");
    typesHash.put("UNITED MEMORIAL MEDICAL CENTER", "0BG");
    typesHash.put("UNITED NATIONS", "017");
    typesHash.put("UNITED RENTALS", "BN0");
    typesHash.put("UNITED SPACE ALLIANCE", "007");
    typesHash.put("UNITED STATES BOWLING CONGRESS", "0OL");
    typesHash.put("UNITED STATES COLD STORAGE", "BU5");
    typesHash.put("UNITED STATES INFRASTRUCTURE CORP", "0O6");
    typesHash.put("UNITED STATES PARACHUTE ASSOCIATION", "BVG");
    typesHash.put("UNITED STATES POWER SQUADRONS", "BRQ");
    typesHash.put("UNITED STATIONERS INC.", "BVS");
    typesHash.put("UNITED SUPERMARKETS", "BQR");
    typesHash.put("UNITED TECHNOLOGIES", "017");
    typesHash.put("UNITED WATER", "0RN");
    typesHash.put("UNIV. OF N. CAROLINA GREENSBORO", "AAU");
    typesHash.put("UNIVERA HEALTHCARE OF WESTERN NY", "ASO");
    typesHash.put("UNIVERSAL FOREST PRODUCTS", "BG4");
    typesHash.put("UNIVERSAL HEALTH SERVICES", "BG8");
    typesHash.put("UNIVERSAL HOSPITAL SERVICES", "BN4");
    typesHash.put("UNIVERSAL LABORATORY", "APS");
    typesHash.put("UNIVERSAL TECHNICAL INSTITUTE", "A05");
    typesHash.put("UNIVERSAL TECHNICAL INSTITUTE ALUMN", "BWU");
    typesHash.put("UNIVERSITY CREDIT UNION", "A8E");
    typesHash.put("UNIVERSITY HEALTH ASSOCIATES", "A3U");
    typesHash.put("UNIVERSITY HOSPITALS HEALTH SYSTEM", "0BU");
    typesHash.put("UNIVERSITY OF ALABAMA HEALTH", "09L");
    typesHash.put("UNIVERSITY OF BUFFALO FOUNDATION", "0ML");
    typesHash.put("UNIVERSITY OF KENTUCKY", "ATN");
    typesHash.put("UNIVERSITY OF MAINE SYSTEM", "BM5");
    typesHash.put("UNIVERSITY OF MASSACHUSETTS", "05T");
    typesHash.put("UNIVERSITY OF MD MED SYST", "04H");
    typesHash.put("UNIVERSITY OF PHOENIX INC", "BMD");
    typesHash.put("UNIVERSITY OF ROCHESTER", "ASX");
    typesHash.put("UNIVERSITY OF UTAH", "08Y");
    typesHash.put("UNIVERSITY OF UTAH HOSP & CLINICS", "BW1");
    typesHash.put("UNIVISION COMMUNICATIONS", "BQW");
    typesHash.put("UPMC HEALTH", "0YP");
    typesHash.put("UPS", "BDV");
    typesHash.put("URS CORPORATION", "017");
    typesHash.put("US AIRWAYS", "0BM");
    typesHash.put("US LBM HOLDINGS, LLC", "B3G");
    typesHash.put("US MARINE", "01Y");
    typesHash.put("US STEEL CORP", "0F0");
    typesHash.put("USA MOBILITY", "A3H");
    typesHash.put("USA TRIATHLON", "B2Q");
    typesHash.put("USBA INC.", "A5X");
    typesHash.put("USBA INC.", "A5X");
    typesHash.put("USBA INC.", "A5X");
    typesHash.put("USBA INC.", "A5X");
    typesHash.put("USBA INC.", "A5X");
    typesHash.put("USBA INC.", "A5X");
    typesHash.put("UT MEDICAL GROUP", "BXR");
    typesHash.put("UTAH STATE UNIV RESEARCH FOUNDATION", "BPS");
    typesHash.put("UTAH STATE UNIVERSITY", "0LB");
    typesHash.put("UTAH VALLEY UNIVERSITY", "ANH");
    typesHash.put("UW PHYSICIAN NETWORK", "AP0");
    typesHash.put("VAIL RESORTS MANAGEMENT COMPANY", "BQ9");
    typesHash.put("VAL VERDE REGIONAL MEDICAL CENTER", "AF6");
    typesHash.put("VALASSIS COMMUNICATIONS", "0AJ");
    typesHash.put("VALEO SYLVANIA, LLC", "B5C");
    typesHash.put("VALERO ENERGY CORPORATION", "BNE");
    typesHash.put("VALLEY BAPTIST MEDICAL CENTER", "BVM");
    typesHash.put("VALLEY MEDICAL CENTER", "AJZ");
    typesHash.put("VANCE COUNTY SCHOOLS", "ASU");
    typesHash.put("VANDERBILT UNIVERSITY", "ABF");
    typesHash.put("VANGUARD GROUP", "017");
    typesHash.put("VANGUARD HEALTH SYSTEMS INC.", "BS0");
    typesHash.put("VANTAGE ONCOLOGY", "B3U");
    typesHash.put("VARIAN MEDICAL SYSTEMS", "017");
    typesHash.put("VB SMART SOLUTIONS", "AQM");
    typesHash.put("VCU HEALTH SYSTEM", "BK0");
    typesHash.put("VECTREN CORP.", "08M");
    typesHash.put("VELCRO USA INC.", "BOT");
    typesHash.put("VENTANA MEDICAL SYSTEMS", "AJG");
    typesHash.put("VEOLIA TRANSPORTATION", "ARN");
    typesHash.put("VERIO", "0X5");
    typesHash.put("VERISIGN, INC", "AL4");
    typesHash.put("VERIZON", "AGA");
    typesHash.put("VERTAFORE, INC.", "ADO");
    typesHash.put("VERTEX GROUP", "BNR");
    typesHash.put("VERTIS COMMUNICATIONS", "A9V");
    typesHash.put("VESCOM CORPORATION", "B5M");
    typesHash.put("VESUVIUS USA CORPORATION", "B2Z");
    typesHash.put("VF CORPORATION", "017");
    typesHash.put("VIA TECHNOLOGY", "A5K");
    typesHash.put("VIAD", "0IS");
    typesHash.put("VIASAT, INC.", "AJO");
    typesHash.put("VICTAULIC COMPANY", "BXF");
    typesHash.put("VIRGINA HOSPITAL CENTER", "B2U");
    typesHash.put("VISA", "BS2");
    typesHash.put("VISANT", "0SH");
    typesHash.put("VISION SERVICE PLAN", "BAS");
    typesHash.put("VISIONS FEDERAL CREDIT UNION", "B0K");
    typesHash.put("VISTEON", "017");
    typesHash.put("VMWARE, INC.", "BXY");
    typesHash.put("VNA OF RHODE ISLAND", "AJ4");
    typesHash.put("VOICE MEDIA GROUP, INC.", "ALJ");
    typesHash.put("VOLKSWAGEN GROUP OF AMERICA", "B1E");
    typesHash.put("VUTEQ CORPORATION", "0QB");
    typesHash.put("VWR INTERNATIONAL INC", "BGQ");
    typesHash.put("W. W. GRAINGER", "01Z");
    typesHash.put("W W GRAINGER", "01Z");
    typesHash.put("WW GRAINGER", "01Z");
    typesHash.put("W.E. AUBUCHON", "08C");
    typesHash.put("WE AUBUCHON", "08C");
    typesHash.put("W E AUBUCHON", "08C");
    typesHash.put("W.R. BONSAL COMPANY", "ALH");
    typesHash.put("W R BONSAL COMPANY", "ALH");
    typesHash.put("WR BONSAL COMPANY", "ALH");
    typesHash.put("WACHUSETT REGIONAL SCHOOL DISTRICT", "BT7");
    typesHash.put("WAKE FOREST UNIVERSITY", "ASV");
    typesHash.put("WAKEFERN CORPORATE", "ATX");
    typesHash.put("WALKER & DUNLOP, LLC", "B44");
    typesHash.put("WALTER ENERGY, INC", "ATI");
    typesHash.put("WARD TRUCKING", "ALY");
    typesHash.put("WARNACO GROUP, INC", "BBL");
    typesHash.put("WARNER MUSIC GROUP", "BRI");
    typesHash.put("WASHINGTON MANUFACTURERS COUNCIL", "A3E");
    typesHash.put("WASHINGTON REGIONAL MEDICAL SYSTEM", "APH");
    typesHash.put("WASHINGTON STATE PTA", "BJF");
    typesHash.put("WATERWORKS, INC.", "ABN");
    typesHash.put("WAYNE MEMORIAL HOSPITAL", "BFJ");
    typesHash.put("WAYNESBORO HOSPITAL", "AAT");
    typesHash.put("WB MASON", "AXM");
    typesHash.put("WEATHERFORD INTERNATIONAL", "BUH");
    typesHash.put("WEBASTO ROOF SYSTEMS, INC", "AZU");
    typesHash.put("WEBER STATE UNIVERSITY", "BIF");
    typesHash.put("WEBMD", "BHI");
    typesHash.put("WEBSTER BANK", "0PA");
    typesHash.put("WEEKS MARINE, INC", "BVX");
    typesHash.put("WELLINGTON MANAGEMENT", "B0I");
    typesHash.put("WELLSPAN HEALTH", "A0S");
    typesHash.put("WEST MARINE PRODUCTS", "BFW");
    typesHash.put("WEST VIRGINIA AUTO & TRUCK DEALERS", "A9W");
    typesHash.put("WEST VIRGINIA MANUFACTURERS ASSOC.", "BAB");
    typesHash.put("WESTAR ENERGY", "ACB");
    typesHash.put("WESTCHESTER COMMUNITY COLLEGE ALUMN", "BYN");
    typesHash.put("WESTERLY HOSPITAL", "ALV");
    typesHash.put("WESTERN CONNECTICUT HEALTH NETWORK", "004");
    typesHash.put("WESTERN DENTAL SERVICES, INC.", "AH9");
    typesHash.put("WESTINGHOUSE ELECTRIC", "017");
    typesHash.put("WESTINGHOUSE LIGHTING CORPORATION", "0WE");
    typesHash.put("WESTLAKE HARDWARE INC.", "A1I");
    typesHash.put("WESTMINSTER COLLEGE", "AZT");
    typesHash.put("WESTON SOLUTIONS", "BH8");
    typesHash.put("WICHITA CLINIC", "0GB");
    typesHash.put("WIEDEN & KENNEDY", "AKV");
    typesHash.put("WILLIAM JEWELL COLLEGE", "0I2");
    typesHash.put("WILLIAMS LEA, INC.", "A2U");
    typesHash.put("WILLIAMS SCOTSMAN INC.", "BI6");
    typesHash.put("WILLIS NORTH AMERICA INC.", "02D");
    typesHash.put("WILLOW VALLEY RETIREMENT", "0TF");
    typesHash.put("WILSON INTERNATIONAL, INC.", "BFY");
    typesHash.put("WILSON TECHNICAL COMMUNITY COLLEGE", "0JT");
    typesHash.put("WILTON BRANDS LLC", "B2V");
    typesHash.put("WINCO FOODS, INC", "05P");
    typesHash.put("WINDSTREAM COMMUNICATIONS", "BNF");
    typesHash.put("WINGATE HEALTHCARE", "A3Q");
    typesHash.put("WINN-DIXIE STORES INC", "A31");
    typesHash.put("WINSTON & STRAWN LLP", "BAJ");
    typesHash.put("WINTHROP UNIVERSITY HOSPITAL", "03D");
    typesHash.put("WIPRO LTD", "B2P");
    typesHash.put("WMS INDUSTRIES, INC", "B2G");
    typesHash.put("WOLF CREEK NUCLEAR OPER CORP", "0IA");
    typesHash.put("WOLTERS KLUWER US CORP", "ARS");
    typesHash.put("WOOD GROUP", "BWR");
    typesHash.put("WOODBRIDGE TOWNSHIP BOARD OF ED", "0U1");
    typesHash.put("WOODMEN OF THE WORLD", "BWT");
    typesHash.put("WOODRUFF SAWER & CO.", "BCJ");
    typesHash.put("WOODWARD, INC", "0GC");
    typesHash.put("WORKERS COMPENSATION FUND", "BDU");
    typesHash.put("WORLD KITCHEN", "A6O");
    typesHash.put("WORLD TRAVEL HOLDINGS", "AUG");
    typesHash.put("WORLD TRAVELERS OF AMERICA, INC.", "BHE");
    typesHash.put("WORLDWIDE EQUIPMENT INC", "A9B");
    typesHash.put("WPP GROUP", "07E");
    typesHash.put("WTAS, LLC", "BKF");
    typesHash.put("WYLE", "BF0");
    typesHash.put("WYNN RESORTS", "017");
    typesHash.put("XCEL ENERGY", "006");
    typesHash.put("XCEL FEDERAL CREDIT UNION", "BUU");
    typesHash.put("XCEL HR", "B11");
    typesHash.put("XERIUM TECHNOLOGIES, INC.", "AK5");
    typesHash.put("XEROX BUSINESS SERVICES, LLC", "002");
    typesHash.put("XEROX CORPORATION", "08V");
    typesHash.put("XEROX-NASG", "017");
    typesHash.put("XILINX INC", "AWI");
    typesHash.put("XIUS BCGI", "0WV");
    typesHash.put("XTRA CORPORATION", "AEZ");
    typesHash.put("XYLEM INC.", "B1F");
    typesHash.put("YALE NEW HAVEN HEALTH SYSTEM", "017");
    typesHash.put("YALE UNIVERSITY", "BTH");
    typesHash.put("YAMAHA MOTOR CORPORATION, USA", "BFO");
    typesHash.put("YASKAWA AMERICA, INC. - MOTOMAN ROB", "ADT");
    typesHash.put("YASKAWA ELECTRIC AMERICA, INC.", "ABZ");
    typesHash.put("YAZAKI NORTH AMERICA, INC.", "ADX");
    typesHash.put("YELLOW ROADWAY CORP., WORLDWIDE", "04D");
    typesHash.put("YESCO", "0YK");
    typesHash.put("YM LLC USA", "B05");
    typesHash.put("YOAKUM COMMUNITY HOSPITAL", "AF5");
    typesHash.put("YOGA ALLIANCE", "B5I");
    typesHash.put("YOUNG ADULT INSTITUTE", "A1D");
    typesHash.put("YOUNG AND RUBICAM BRANDS", "06G");
    typesHash.put("YWCA OF GREATER PITTSBURGH", "0UF");
    typesHash.put("ZALE CORPORATION", "017");
    typesHash.put("ZAPPOS.COM INC", "BJO");
    typesHash.put("ZOCDOC", "B2O");
    typesHash.put("ZOETIS, INC", "B4H");
    typesHash.put("ZYGO CORPORATION", "AC1");
    typesHash.put("ZYNGA GAME NETWORK INC.", "BOU");
    function getURLParameter(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(window.location.href);
        if (results == null)
            return "";
        else
            return results[1];
    }

    function getCode(companyName) {
        var incomingParams = "";
        var ocID = getURLParameter("oc_id");
        var promoID = getURLParameter("promoid");
        var groupCode = getURLParameter("GPC");
        var nativeGroupCode = typesHash.get(companyName);
        if (ocID == "" && promoID == "" && groupCode == "") {
            incomingParams = "https://autohome.metlife.com/public/index.jsp" + "?GPC=" + nativeGroupCode + "%26oc_id=al000100%26promoid=B0178";
        } else if (groupCode == "" && promoID == "") {
            incomingParams = "https://autohome.metlife.com/public/index.jsp" + "?GPC=" + nativeGroupCode + "%26oc_id=" + ocID + "%26promoid=B0178";
        } else if (groupCode == "" && ocID == "") {
            incomingParams = "https://autohome.metlife.com/public/index.jsp" + "?GPC=" + nativeGroupCode + "%26oc_id=al000100%26promoid=" + promoID;
        } else if (promoID == "" && ocID == "") {
            incomingParams = "https://autohome.metlife.com/public/index.jsp" + "?GPC=" + groupCode + "%26oc_id=al000100%26promoid=B0178";
        } else if (groupCode == "") {
            incomingParams = "https://autohome.metlife.com/public/index.jsp" + "?GPC=" + nativeGroupCode + "%26oc_id=" + ocID + "%26promoid=" + promoID;
        } else if (promoID == "") {
            incomingParams = "https://autohome.metlife.com/public/index.jsp" + "?GPC=" + groupCode + "%26oc_id=" + ocID + "%26promoid=B0178";
        } else if (ocID == "") {
            incomingParams = "https://autohome.metlife.com/public/index.jsp" + "?GPC=" + groupCode + "%26oc_id=al000100%26promoid=" + promoID;
        }
        else {
            incomingParams = "https://autohome.metlife.com/public/index.jsp" + "?GPC=" + groupCode + "%26promoid=" + promoID + "%26oc_id=" + ocID;
        }
        incomingParams = decodeURIComponent(incomingParams);
        location.href = incomingParams;
    }

    var suggestions = new Array("24 HOUR FITNESS",
        "3M",
        "7-ELEVEN",
        "7 ELEVEN",
        "7ELEVEN",
        "A. H. BELO CORPORATION",
        "AH BELO CORPORATION",
        "A.T. CROSS COMPANY",
        "AT CROSS COMPANY",
        "AANA",
        "AAR CORP",
        "AB MAURI FOOD, INC",
        "ABB",
        "ABM INDUSTRIES INCORPORATED",
        "ABRAXAS CORPORATION",
        "ACCELRYS",
        "ACCENTURE LLP",
        "ACCESSPOINT, L.L.C.",
        "ACCO BRANDS INC.",
        "ACCOUNT SOLUTIONS GROUP, LLC",
        "ACCOUNTANTS ON CALL",
        "ACE GROUP OF INSURANCE COMPANIES",
        "ACTIVISION BLIZZARD",
        "ACUITY BRANDS",
        "ADC TELECOMMUNICATIONS",
        "ADECCO",
        "ADENA REGIONAL HEALTH SYSTEMS",
        "ADMIRAL BEVERAGE CORPORATION",
        "ADMIRALS BANK",
        "ADOBE SYSTEMS INC",
        "ADP",
        "ADP TOTALSOURCE, INC.",
        "ADT, LLC",
        "ADVANCE AUTO PARTS",
        "ADVANCED RESOURCE TECHNOLOGIES",
        "ADVANTAGE NURSING SERVICES",
        "ADVENTIST HEALTH SYSTEM/WEST",
        "ADVOCATE HEALTH CARE",
        "AECOM",
        "AEGIS MEDIA NORTH AMERICA",
        "AEROBICS & FITNESS ASOC. OF AMERICA",
        "AEROPOSTALE INC.",
        "AFFILIATED DISTRIBUTORS",
        "AFFILIATED OPTOMETRISTS OF WALMART",
        "AFFINITYTESTING DO NOT USE",
        "AFSCME COUNCIL 93 BOSTON",
        "AFSCME COUNCIL 93 SUMUP",
        "AFSCME MAINE MEMBERSHIP BENEFIT FND",
        "AFSCME RETIREE CHAPTER 93",
        "AGC AMERICA, INC.",
        "AGCO CORPORATION",
        "AGGREGATE INDUSTRIES",
        "AGL RESOURCES INC",
        "AGRI MARK",
        "AGRICREDIT ACCEPTANCE COMPANY",
        "AIMIA PROPRIETARY LOYALTY U.S. INC.",
        "AIR EVAC SERVICES INC",
        "AIR METHODS CORPORATION",
        "AIRBORN MANAGEMENT, INC.",
        "AIRGAS, INC.",
        "AIRLINE TRAINING CENTER ARIZONA, IN",
        "AJCP",
        "AKIMA, LLC",
        "AKRON GENERAL HEALTH SYSTEM",
        "ALAMEDA COUNTY MEDICAL CENTER",
        "ALAMOSA SCHOOL DISTRICT",
        "ALASKA AIR GROUP",
        "ALBANY INTERNATIONAL",
        "ALBEMARLE CORPORATION",
        "ALBERTSON'S INC",
        "ALBERTSON'S LLC",
        "ALCOA",
        "ALEGENT CREIGHTON HEALTH",
        "ALENT, INC",
        "ALEXANDRIA EXTRUSION COMPANY",
        "ALIANTE GAMING, LLC",
        "ALIGN TECHNOLOGY",
        "ALKERMES INC",
        "ALLEGIS GROUP",
        "ALLERGAN INC",
        "ALLIANCE DATA SYSTEMS",
        "ALLIANCE FOR AFFORDABLE SERVICES",
        "ALLIANCE HEALTHCARE SERVICES",
        "ALLIANCE RESIDENTIAL, LLC",
        "ALLIANT ENERGY",
        "ALLIANT TECHSYSTEMS",
        "ALLIANZ",
        "ALLIED HOLDINGS, INC.",
        "ALLINA HEALTH SYSTEM",
        "ALLISON TRANSMISSION, INC.",
        "ALLSCRIPTSMISYS HEALTHCARE SOLUTION",
        "ALPHA NATURAL RESOURCES, INC.",
        "ALPHARMA USPD",
        "ALPHASOFT SERVICES CORPORATION",
        "ALPHASTAFF INC",
        "ALSAC, ST. JUDE CHILDRENS RESEARCH",
        "ALSTOM",
        "ALTEGRITY, INC.",
        "ALTERA CORPORATION",
        "ALTERNATIVE RESOURCES CORPORATION",
        "ALTOONA REGIONAL HEALTH SYSTEM",
        "ALTRIA",
        "ALUMNI ASSOC COLLEGE OF LAKE COUNTY",
        "AMADEUS AMERICAS INC",
        "AMALGAMATED LIFE INSURANCE",
        "AMBROSE EMPLOYER GROUP LLC",
        "AMDOCS",
        "AMERICA SERVICE GROUP",
        "AMERICAN ACADEMY OF OTOLARYNGOLOGY",
        "AMERICAN AIRLINES",
        "AMERICAN ASSOCIATION OF CLINICAL EN",
        "AMERICAN BASS ANGLERS ASSOCIATION",
        "AMERICAN BOATING ASSOCIATION, INC",
        "AMERICAN BUREAU OF SHIPPING",
        "AMERICAN CANCER SOCIETY",
        "AMERICAN CENTURY SERVICES, LLC",
        "AMERICAN CHAMBER OF COMMERCE",
        "AMERICAN CHIROPRACTIC ASSOCIATION",
        "AMERICAN COLLEGE OF OSTEOPATHIC FAM",
        "AMERICAN COMMERCIAL LINES, LLC",
        "AMERICAN COUNCIL OF ENGINEERING",
        "AMERICAN DIABETES ASSOCIATION",
        "AMERICAN EAGLE AIRLINES, INC",
        "AMERICAN ELECTRIC POWER",
        "AMERICAN EXPRESS BANKING CORP",
        "AMERICAN FEDERATION OF GOVT EMPLOYE",
        "AMERICAN FEDERATION OF TEACHERS",
        "AMERICAN FEDERATION OF TEACHERS,CT",
        "AMERICAN GREETINGS",
        "AMERICAN HOTEL REGISTER COMPANY",
        "AMERICAN HUMANE ASSOCIATION",
        "AMERICAN MASSAGE THERAPY ASSOC",
        "AMERICAN PACKAGING CORP.",
        "AMERICAN POSTAL WORKERS UNION",
        "AMERICAN RADIO RELAY LEAGUE",
        "AMERICAN RED CROSS",
        "AMERICAN REPROGRAPHICS COMPANY",
        "AMERICAN SHOWA",
        "AMERICAN SYSTEMS CORPORATION",
        "AMERICAN TIRE DISTRIBUTORS INC.",
        "AMERICAN UNIVERSITY",
        "AMERICAN VETERANS",
        "AMERICANS FOR FINANCIAL SECURITY",
        "AMERICOLD LOGISTICS",
        "AMERIGROUP CORPORATION",
        "AMERISOURCE BERGEN",
        "AMERLUX, INC,",
        "AMTROL INCORPORATED",
        "AMWAY",
        "ANACOMP",
        "ANALOG DEVICES, INC.",
        "ANALOGIC CORPORATION",
        "ANALYSTS INTERNATIONAL",
        "ANDRITZ INC",
        "ANGIOTECH PHARMACEUTICALS INC",
        "ANIXTER, INC.",
        "ANSALDO STS UNA, INC.",
        "ANSCHUTZ ENTERTAINMENT GROUP, INC",
        "ANSON COUNTY SCHOOLS",
        "ANSWERTHINK CONSULTING GROUP",
        "ANTHEM EDUCATION GROUP",
        "ANZA, INC.",
        "AON CORPORATION",
        "APACHE JUNCTION UNIFIED SCHOOL",
        "APPLE INC",
        "APPLEBEE'S INTERNATIONAL",
        "APPLETON COATED",
        "APPLICA CONSUMER PRODUCTS INC.",
        "APPLIED TECHNOLOGY SYSTEMS, INC.",
        "APRIA HEALTH",
        "APS HEALTHCARE INC",
        "APTARGROUP",
        "APTIS",
        "ARAMARK CORPORATION",
        "ARBOR HOUSE ASSISTED LIVING CENTER",
        "ARCHSTONE COMMUNITIES",
        "AREVA INC",
        "ARIZONA CHARTER SCHOOL",
        "ARIZONA GOLF ASSOCIATION",
        "ARIZONA STATE UNIVERSITY",
        "ARKANSAS STATE EMPLOYEE ASSOCIATION",
        "ARMED SERV. BEN.",
        "ARMED SERVICES MUTUAL BENEFIT ASSOC",
        "ARMSTRONG WORLD INDUSTRIES",
        "ARNOLD WORLDWIDE CORPORATION",
        "ARNOT OGDEN MEDICAL CENTER",
        "ARQULE",
        "ARRIS",
        "ARROW ELECTRONICS INC.",
        "ARROW EXTERMINATORS, INC.",
        "ARUP LABORATORIES",
        "ASCAP",
        "ASCEND ONE CORPORATION",
        "ASHEVILLE-BUNCOMBE TECH COMMUNITY",
        "ASHLAND INC.",
        "ASML US, INC.",
        "ASPECT SOFTWARE INC.",
        "ASPIRE",
        "ASPIRE FCU",
        "ASPIRUS, INC.",
        "ASSOCIATED CREDIT UNION OF TEXAS",
        "ASSOCIATED FOOD STORES",
        "ASSOCIATED INDUSTRIES",
        "ASSOCIATED MATERIALS INCORPORATED",
        "ASSOCIATION OF AMERICAN MEDICAL COL",
        "ASTRAZENECA PHARMACEUTICALS LP",
        "ASTRONICS CORPORATION",
        "ASURION INSURANCE SERVICES INC",
        "AT&T",
        "AT&T",
        "ATARI",
        "ATI LADISH LLC",
        "ATKINS",
        "ATKORE INTERNATIONAL LTD",
        "ATMOS ENERGY CORP",
        "ATR INTERNATIONAL, INC",
        "AUBURN COMMUNITY HOSPITAL",
        "AUSTIN INDEPENDENT SCHOOL DISTRICT",
        "AUTODESK, INC.",
        "AUTOZONE PARTS INC",
        "AVAYA",
        "AVBORNE INC",
        "AVERA MCKENNAN HOSPITAL",
        "AVERY DENNISON",
        "AVIATION TECHNICAL SERVICES, INC",
        "AVID TECHNOLOGY",
        "AVIS BUDGET GROUP",
        "AVISTA CORPORATION",
        "AVNET, INC.",
        "AVON AUTOMOTIVE INC,",
        "AVON RUBBER & PLASTICS, INC.",
        "AXA EQUITABLE LIFE INSURANCE",
        "AXCET HR SOLUTIONS",
        "AZPB LP D/B/A ARIZONA",
        "B BRAUN MEDICAL INC.",
        "B. BRAUN MEDICAL INC.",
        "BABCOCK AND WILCOX INVESTMENT CO.",
        "BADGER METER, INC.",
        "BAE SYSTEMS INC",
        "BAIN & COMPANY INC.",
        "BALFOUR BEATTY CONSTRUCTION",
        "BALFOUR BEATTY INVESTMENTS",
        "BALFOUR BEATTY, INC.",
        "BALL STATE UNIVERSITY",
        "BALLY TECHNOLOGIES, INC.",
        "BALSZ SCHOOL DISTRICT 31",
        "BALTIMORE GAS & ELECTRIC",
        "BANCO DE SABADELL SA",
        "BANFIELD, THE PET HOSPITAL",
        "BANK OF AMERICA",
        "BANK OF THE WEST",
        "BANK OF TOKYO - MITSUBISHI UFJ, LTD",
        "BANKERS INSURANCE",
        "BANNER HEALTH ARIZONA",
        "BAPTIST HEALTH - ARKANSAS",
        "BAPTIST HEALTH CARE",
        "BARCLAY BANK",
        "BARCO, INC.",
        "BARNARD COLLEGE",
        "BARNES GROUP, INC.",
        "BARRETT BUSINESS SERVICES",
        "BARRINGTON BROADCASTING GROUP",
        "BARTOW COUNTY SCHOOL SYSTEM",
        "BASF",
        "BATES USA",
        "BATTLE GROUND SCHOOL DISTRICT.",
        "BAXTER INTERNATIONAL INC",
        "BAYCARE HEALTH SYSTEMS",
        "BAYER CORPORATE & BUSINESS SVCS,LLC",
        "BAYLOR HEALTH CARE SYSTEM",
        "BBDO",
        "BD",
        "BE&K, INC.",
        "BEAULIEU GROUP, LLC",
        "BEAUMONT",
        "BEAUMONT SERVICES",
        "BECU",
        "BEHAVIORAL HEALTH NETWORK, INC",
        "BELK STORES",
        "BELL AND HOWELL, LLC",
        "BELO CORPORATION",
        "BELTSERVICE CORPORATION",
        "BEMIS COMPANY, INC.",
        "BENCHMARK ASSISTED LIVING",
        "BENCHMARK ELECTRONICS, INC.",
        "BENEDICTINE UNIVERSITY",
        "BENTLEY COLLEGE",
        "BENTLEY SYSTEMS, INC.",
        "BENTON EXPRESS, INC.",
        "BERKSHIRE PROPERTY ADVISORS",
        "BERRY PLASTICS",
        "BERTELSMANN, INC.",
        "BEST WESTERN INTERNATIONAL",
        "BETTERINVESTING",
        "BI, INCORPORATED",
        "BILL AND MELINDA GATES FOUNDATION",
        "BILLY GRAHAM EVANGELISTIC ASSOC.",
        "BI-LO, LLC",
        "BIMBO BAKERIES USA/WEST",
        "BIOGEN",
        "BIOMEDICAL ENGINEERING SOCIETY",
        "BLACK & DECKER TAMPA",
        "BLACKROCK",
        "BLOODCENTER OF WISCONSIN, INC",
        "BLOOMBERG LP",
        "BLUE CROSS & BLUE SHIELD / RI",
        "BLUE CROSS & BLUE SHIELD OF ARIZONA",
        "BLUE CROSS BLUE SHIELD OF MASS",
        "BLUE CROSS OF IDAHO",
        "BLUE CROSS/BLUE SHIELD OF KANSAS CI",
        "BLUE CROSS/BLUE SHIELD OF UTICA/WAT",
        "BLUE CROSS/C. NY",
        "BLUE CROSS/MN",
        "BLUE CROSS/NC",
        "BLUE RIDGE COMMUNITY COLLEGE",
        "BLUE SHIELD OF CALIFORNIA",
        "BLUMBERG EXCELSIOR",
        "BLYTH, INC.",
        "BMC",
        "BMC SOFTWARE",
        "BMW MANUFACTURING CORP.",
        "BMW OF NORTH AMERICA",
        "BNP PARIBAS",
        "BNY MELLON",
        "BOART LONGYEAR CO",
        "BOEHRINGHER INGELHEIM CORPORATION",
        "BOISE STATE UNIVERSITY",
        "BOOZ & COMPANY",
        "BOOZ ALLEN HAMILTON INC",
        "BOSLEY, INC",
        "BOSTON COLLEGE",
        "BOSTON FINANCIAL DATA SERVICES",
        "BOSTON MARKET",
        "BOSTON MEDICAL CENTER",
        "BOSTON SCIENTIFIC",
        "BOURN'S INC.",
        "BOWNE & COMPANY, INC.",
        "BP CORPORATION NORTH AMERICA INCORP",
        "BRACCO DIAGNOSTICS INC.",
        "BRADLEY COUNTY MEDICAL CENTER",
        "BRIDGEPOINT EDUCATION, INC.",
        "BRIDGESTONE AMERICAS INCORPORATED",
        "BRISTOL HOSPITAL",
        "BROAD INSTITUTE",
        "BROADCOM CORP",
        "BROADRIDGE FINANCIAL SOLUTIONS, INC",
        "BROCADE COMMUNICATIONS SYSTEMS",
        "BROWN SHOE",
        "BRYANT UNIVERSITY",
        "BT AMERICAS HOLDINGS, INC.",
        "BUCA, INC",
        "BUCKS COUNTY COMMUNITY COLLEGE ALU",
        "BULL INFORMATION SYSTEMS",
        "BUREAU VERITAS INDUSTRIES & FAC",
        "BURT HILL KOSAR RITTELMAN ASSOCIATE",
        "BUTLER INTERNATIONAL",
        "BUTLER SCHEIN ANIMAL HEALTH",
        "C & M CORPORATION",
        "C&M CORPORATION",
        "C R ENGLAND",
        "C.R. ENGLAND",
        "C&S WHOLESALE GROCERS",
        "C & S WHOLESALE GROCERS",
        "C.H. ROBINSON WORLDWIDE, INC.",
        "CH ROBINSON WORLDWIDE, INC.",
        "CA, INC",
        "CABELA'S INC",
        "CABOT CORPORATION",
        "CACI INTERNATIONAL",
        "CADENCE DESIGN SYSTEMS, INC.",
        "CAJUN OPERATING COMPANY",
        "CALDWELL COMMUNITY COLLEGE",
        "CALIFORNIA BUILDERS EXCHANGES INSUR",
        "CALIFORNIA CORRECTIONAL SUPERVISORS",
        "CALIFORNIA INSTITUTE OF TECHNOLOGY",
        "CALPORTLAND",
        "CALSONIC KANSEI NORTH AMERICA",
        "CAMBRIDGE HEALTH ALLIANCE",
        "CAMDEN CLARK MEMORIAL HOSPITAL",
        "CAMPBELL SOUP COMPANY",
        "CANBERRA INDUSTRIES",
        "CANTOR FITZGERALD LLC",
        "CAPE FEAR COMMUNITY COLLEGE",
        "CAPGEMINI AMERICA INC,",
        "CAPITAL DISTRICT PHYSICIANS",
        "CAPITAL ONE FINANCIAL CORPORATION",
        "CAPSUGEL",
        "CARAUSTAR INDUSTRIES",
        "CARDINGTON YUTAKA TECHNOLOGIES",
        "CARE NEW ENGLAND",
        "CARE TECH SOLUTIONS",
        "CAREER EDUCATION CORPORATION",
        "CARL ZEISS VISION INC.",
        "CARLE FOUNDATION HOSPITAL",
        "CARLSON COMPANIES",
        "CAROLINAS HEALTHCARE SYSTEM",
        "CAROMONT HEALTH",
        "CARONDELET HEALTH NETWORK",
        "CARQUEST",
        "CARROLL HOSPITAL CENTER",
        "CARTERET COMMUNITY COLLEGE",
        "CASCADE VALLEY HOSPITAL & CLINICS",
        "CASCADES TISSUE GROUP SALES INC.",
        "CASE WESTERN RESERVE UNIVERSITY",
        "CASTEC, INC.",
        "CATERPILLAR",
        "CATERPILLAR INSURANCE SERVICES CORP",
        "CATHOLIC HEALTH EAST",
        "CB RICHARD ELLIS/WHITTIER PARTNERS",
        "CBEYOND COMMUNICATIONS",
        "CBS RADIO",
        "CDM SMITH",
        "CEDARAPIDS,INC.",
        "CEDARS-SINAI MEDICAL CENTER",
        "CELANESE AMERICAS CORPORATION",
        "CENTEGRA HEALTH SYSTEM",
        "CENTERPOINT ENERGY",
        "CENTRA SOFTWARE",
        "CENTRACARE HEALTH SYSTEM",
        "CENTRAL ARIZONA PROJECT",
        "CENTRAL HEALTHCARE SERVICES INC.",
        "CENTRAL MAINE MEDICAL CENTER",
        "CENTRAL PURCHASING, INC",
        "CENTURA HEALTH",
        "CENTURION INDUSTRIES",
        "CENTURY BANCORP",
        "CENTURYLINK",
        "CENVEO",
        "CEPHEID",
        "CERIDIAN",
        "CERTIFIED PUBLIC ACCOUNTS OF NH",
        "CF INDUSTRIES",
        "CGI-AMS INC.",
        "CH2M HILL",
        "CHAGRIN FALLS SCHOOLS PPT 81",
        "CHANDLER UNIFIED SCHOOL DISTRICT",
        "CHAPARRAL ENERGY",
        "CHARLES SCHWAB CORPORATION",
        "CHARLOTTE HUNGERFORD HOSPITAL",
        "CHARLOTTE-MECKLENBURG SCHOOLS",
        "CHART INDUSTRIES, INC.",
        "CHARTER COMMUNICATIONS, INC.",
        "CHARTER HR",
        "CHEROKEE COUNTY BOARD OF EDUCATION",
        "CHEVRON CORPORATION",
        "CHEVRON RETIREE ASSOCIATION",
        "CHG COMPANIES INC",
        "CHICAGO ASSOCIATION FOR RETARDED CI",
        "CHICAGO BRIDGE & IRON (CB&I)",
        "CHICAGO LIGHTHOUSE",
        "CHILDREN'S HEALTH SYSTEM",
        "CHILDREN'S HEALTHCARE OF ATLANTA",
        "CHILDRENS HOME + AIDE SOCIETY OF IL",
        "CHILDREN'S HOSPITAL BOSTON",
        "CHILDREN'S HOSPITAL MEDICAL CENTER",
        "CHILDREN'S MERCY HOSPITAL",
        "CHILDRENS SPECIALIZED HOSPITAL",
        "CHIPOTLE MEXICAN GRILL, INC.",
        "CHRIST HOSPITAL",
        "CHRISTIANA CARE HEALTH SYSTEM",
        "CHRYSLER GROUP LLC",
        "CHRYSLER GROUP LLC - REPRESENTED",
        "CIENA CORPORATION",
        "CIGNA",
        "CINCINNATI BELL, INC.",
        "CIT GROUP INC.",
        "CITGO PETROLEUM CORPORATION",
        "CITI",
        "CITIZENS BANK OF NEW HAMPSHIRE",
        "CITIZENS MEMORIAL HOSPITAL",
        "CITY OF AURORA",
        "CITY OF AUSTIN TEXAS",
        "CITY OF GRAPEVINE",
        "CITY OF HOPE",
        "CITY OF MANTECA",
        "CITY OF NAPERVILLE",
        "CITY OF NORTH LAS VEGAS",
        "CITY OF PLANTATION",
        "CITY OF TEMPE",
        "CITY OF UNIVERSITY CITY",
        "CIVIL SERVICE EMPLOYEES ASSOCIATION",
        "CJ MOYNA & SONS",
        "CKE RESTAURANTS",
        "CLARCOR CORPORATION",
        "CLARK ATLANTA UNIVERSITY",
        "CLAXTON-HEPBURN MEDICAL CENTER",
        "CLEARWIRE CORPORATION",
        "CLEVELAND CLINIC FOUNDATION",
        "CLEVELAND COUNTY SCHOOLS",
        "CLEVELAND REGIONAL MEDICAL CENTER",
        "CLIFFS NATURAL RESOURCES INC.",
        "CLOSED ACCOUNT ADDITIONAL LINES",
        "CLOSED ACCOUNT SPIN OFFS",
        "CLOSED ACCOUNT STATE TO STATE TRANS",
        "CLOW STAMPING COMPANY",
        "CLUBCORP INC",
        "CMWA",
        "COASTAL FEDERAL CREDIT UNION",
        "COBHAM DEFENSE ELECTRONIC SYSTEMS",
        "COEUR D' ALENE MINES CORPORATION",
        "COGNIZANT TECHNOLOGY SOLUTIONS",
        "COHERENT, INC.",
        "COLDWATER CREEK",
        "COLE HAAN",
        "COLINX LLC",
        "COLLECTION COMPANY OF AMERICA",
        "COLLEGE OF NEW ROCHELLE",
        "COLLEGE OF ST. BENEDICT",
        "COLLIN COUNTY COMMUNITY COLLEGE",
        "COLONIAL PIPELINE COMPANY",
        "COLORADO COLLEGE",
        "COLORADO HEALTH AND HOSPITAL ASCN",
        "COLUMBUS REGIONAL HEALTHCARE SYSTEM",
        "COMCAST",
        "COMCAST SPECTACOR",
        "COMERICA, INC.",
        "COMMISSIONED OFFICERS ASSOCIATION O",
        "COMMONWEALTH OF PENNSYLVANIA AUTO&H",
        "COMMONWEALTH OF VIRGINIA",
        "COMMONWEALTH PURCHASING GROUP LLC",
        "COMMUNITY CARE PHYSICIANS",
        "COMMUNITY COLLEGE OF RI ALUMNI",
        "COMMUNITY HEALTH NETWORK",
        "COMMUNITY HIGH SCHOOL DISTRICT 218",
        "COMMUNITY NEWSPAPER COMPANY",
        "COMPASS BANK",
        "COMPASS GROUP",
        "COMPASS MINERALS GROUP",
        "COMPUCOM SYSTEMS, INC.",
        "COMPUTER AID INC",
        "COMPUTERSHARE INVESTOR SERVICES",
        "COMPUWARE CORPORATION",
        "COMVERSE INC.",
        "CON EDISON",
        "CON EDISON ENERGY",
        "CONAGRA FOODS, INC.",
        "CONAIR CORPORATION",
        "CONCERTO SOFTWARE",
        "CONCORD HOSPITALITY, INC.",
        "CONE HEALTH",
        "CONFORMIS INC",
        "CONN. STATE UNIV PROFESSORS",
        "CONSERVATIVE50 PLUS",
        "CONSOL ENERGY",
        "CONSOLIDATED CONTAINER COMPANY LLC",
        "CONTINENTAL AG",
        "CONTINENTAL AIRLINES, INC.",
        "CONTINENTAL GROUP",
        "CONTINENTAL HEALTHCARE SYSTEMS INC.",
        "CONTINENTAL MATERIALS GROUP DEL",
        "CONTINUUM HEALTH ALLIANCE, LLC",
        "CONVATEC",
        "CONVERGYS",
        "COOSA VALLEY MEDICAL CENTER",
        "COPMEA",
        "CORBIN RUSSWIN, INC.",
        "CORELOGIC INC",
        "CORINTHIAN COLLEGES, INC",
        "CORNELL MEDICAL CENTER",
        "CORNELL UNIVERSITY 78",
        "CORNING GILBERT, INC.",
        "CORPORATE EXECUTIVE BOARD",
        "CORRECT CARE SOLUTIONS LLC",
        "CORVEL CORPORATION",
        "COTT BEVERAGES USA",
        "COUNTY OF MENDOCINO",
        "COVAD COMMUNICATIONS",
        "COVIDIEN",
        "CPS SECURITY",
        "CREDIT CONTROL SERVICES",
        "CREDIT SUISSE USA, INC.",
        "CREE, INC.",
        "CRESCENT REAL ESTATE EQUITIES",
        "CRICKET COMMUNICATIONS, INC",
        "CRITTENDEN MEMORIAL HOSPITAL",
        "CRODA, INC.",
        "CROUSE HOSPITAL",
        "CROWLEY MARITIME CORPORATION",
        "CRUMP INSURANCE",
        "CSC APPLIED TECHNOLOGIES",
        "CSEA SEIU LOCAL 2001760",
        "CSL BEHRING",
        "CSX CORPORATION",
        "CTI",
        "CUBA MEMORIAL HOSPITAL",
        "CULLMAN REGIONAL MEDICAL CENTER",
        "CUMBERLAND COUNTY SCHOOLS",
        "CURTISS-WRIGHT CORPORATION",
        "CUSHMAN & WAKEFIELD",
        "CUTTER & BUCK",
        "CV INDUSTRIES",
        "CVS- PART TIME EMPLOYEES",
        "CYBEX INTERNATIONAL",
        "CYCLING SPORTS GROUP",
        "CYMER, INC.",
        "CYPRESS HEALTH GROUP",
        "D & S CONSULTANTS, INC.",
        "D&S CONSULTANTS, INC.",
        "DAIICHI SANKYO, INC.",
        "DAIMLER TRUCKS OF NORTH AMERICA",
        "DAK AMERICAS LLC",
        "DALTON SCHOOLS",
        "DANA-FARBER CANCER INSTITUTE",
        "DANAHER CORPORATION",
        "DANIEL J. EDELMAN, INC.",
        "DARDEN RESTAURANTS INC.",
        "DARTMOUTH PRINTING",
        "DATACARD CORPORATION",
        "DATALOGIC SCANNING, INC",
        "DATAMATICS CONSULTANTS, INC.",
        "DATCU CREDIT UNION",
        "DAVID EVANS & ASSOCIATES",
        "DAVID'S BRIDAL",
        "DAVITA, INC.",
        "DAVOL, INC.",
        "DAWN FOOD PRODUCTS",
        "DAYTON CHILDREN'S",
        "DAYTON FREIGHT LINES",
        "DECATUR MEMORIAL HOSPITAL",
        "DEER VALLEY SCHOOL DISTRICT",
        "DEFFENBAUGH INDUSTRIES INC.",
        "DEKALB MEDICAL CENTER",
        "DELAGE LANDEN FINANCIAL SERV., INC.",
        "DELAWARE PARK MANAGEMENT COMPANY",
        "DELAWARE RIVER & BAY AUTHORITY",
        "DELAWARE VALLEY HOSPITAL",
        "DELHAIZE AMERICA, LLC",
        "DELL",
        "DELTA AIRLINES",
        "DELUXE CORPORATION",
        "DENDREON CORPORATION",
        "DENTSPLY",
        "DENVER HEALTH & HOSPITAL",
        "DENVER PUBLIC SCHOOLS",
        "DENVER WHOLESALE FLORIST",
        "DEPAUL UNIVERSITY",
        "DEPENDABLE HIGHWAY EXPRESS",
        "DEPUTY SHERIFFS ASSOC OF SAN DIEGO",
        "DESA HEATING, LLC",
        "DESERET MUTUAL BENEFIT ADMIN",
        "DESERET MUTUAL BENEFIT ADMIN",
        "DESERET MUTUAL BENEFIT ADMIN",
        "DESERET MUTUAL BENEFIT ADMIN",
        "DESERET MUTUAL BENEFIT ADMIN",
        "DESERET MUTUAL BENEFIT ADMIN",
        "DESERET MUTUAL BENEFIT ADMIN",
        "DESERET MUTUAL BENEFIT ADMIN",
        "DESERET MUTUAL BENEFIT ADMIN",
        "DESERET MUTUAL BENEFIT ADMIN",
        "DESERET MUTUAL BENEFIT ADMIN",
        "DESERET MUTUAL BENEFIT ADMIN",
        "DESERET MUTUAL BENEFIT ADMIN",
        "DESERET MUTUAL BENEFIT ADMIN",
        "DESERET MUTUAL BENEFIT ADMIN",
        "DEUTSCH INC.",
        "DEVRY INC.",
        "DEX ONE CORPORATION",
        "DIAGEO NORTH AMERICA",
        "DIALOGIC INC",
        "DICK CORPORATION",
        "DICKINSON COLLEGE",
        "DIGITAL RIVER",
        "DIGNITY HEALTH",
        "DIMENSION DATA",
        "DIOCESE OF BUFFALO",
        "DIOCESE OF METUCHEN",
        "DISCOVER FINANCIAL SERVICES INC",
        "DISCOVERY COMMUNICATIONS, LLC.",
        "DISH NETWORK",
        "DISNEY",
        "DISTRICT COUNCIL 21",
        "DISTRICT COUNCIL 37",
        "DIVERSIFIED HUMAN RESOURCES",
        "DIXON TICONDEROGA",
        "DJO, LLC",
        "DMN MANAGEMENT",
        "DOCTORS HOSPITAL OF SARASOTA",
        "DOLCE INTERNATIONAL HOLDINGS",
        "DOLE FOOD COMPANY, INC.",
        "DOLEX DOLLAR EXPRESS, INC",
        "DOMINION RESOURCES, INC.",
        "DORMAN PRODUCTS,INC",
        "DOUGLAS AUTOTECH CORP.",
        "DOUGLAS MACHINE",
        "DOWLING COLLEGE",
        "DPR CONSTRUCTION",
        "DPR REALTY",
        "DRAPER LABS",
        "DREW MEMORIAL HOSPITAL",
        "DRIL-QUIP, INC.",
        "DRISCOLL CHILDRENS HOSPITAL",
        "DSM NUTRITIONAL PRODUCTS",
        "DST SYSTEMS, INC.",
        "DTE ENERGY",
        "DUCKS UNLIMITED",
        "DUFF & PHELPS",
        "DUKE REALTY CORP.",
        "DUKE UNIVERSITY",
        "DUN & BRADSTREET",
        "DUNN EDWARDS CORP",
        "DUPONT .",
        "DURHAM TECHNICAL COMMUNITY COLLEGE",
        "DYNAMICS RESEARCH CORP",
        "DYNCORP",
        "EARTH COLOR GROUP",
        "EAST ALABAMA MEDICAL CENTER",
        "EAST KENTUCKY POWER COOPERATIVE",
        "EASTERN NEW MEXICO UNIVERSITY",
        "EATON VANCE",
        "ECCO USA, INC.",
        "ECFMG",
        "ECHO SPHERE CORPORATION",
        "ECOLAB",
        "ECONOMIST NEWSPAPER GROUP INC.",
        "EDDIE BAUER LLC",
        "EDGECOMBE COMMUNITY COLLEGE",
        "EECU CREDIT UNION",
        "EFI",
        "EISAI CORPORATION OF NORTH AMERICA",
        "EISNER LLP",
        "ELBIT SYSTEMS OF AMERICA INC.",
        "ELCOM INTERNATIONAL",
        "ELECTROLUX",
        "EA",
        "ELECTRONIC ARTS",
        "ELKAY MANUFACTURING",
        "ELKHART GENERAL HOSPITAL",
        "ELKS",
        "ELMHURST MEMORIAL HOSPITAL",
        "ELWYN INC",
        "EMC CORPORATION",
        "EMD MILLIPORE CORPORATION",
        "EMERGENCY CONSULTANTS",
        "EMERGENCY MEDICINE PHYSICIANS",
        "EMERGENCY NURSES ASSOCIATION",
        "EMERITUS CORPORATION",
        "EMERSON ELECTRIC CO.",
        "EMERSON SWAN, INC.",
        "EMMIS COMMUNICATIONS",
        "EMORY HEALTHCARE",
        "EMORY UNIVERSITY",
        "EMPIRE VISION CENTER INC",
        "EMPIRIAN PROPERTY MANAGEMENT",
        "EMPIRIX",
        "EMPLOYEE ASSOCIATION VA LOMA LINDA",
        "EMPLOYEE PROFESSIONALS",
        "ENCANA OIL & GAS (USA) INC.",
        "ENERCON SERVICES, INC.",
        "ENERGIZER HOLDINGS, INC.",
        "ENGILITY",
        "ENGLEWOOD HOSPITAL & MEDICAL CENTER",
        "ENHERENT",
        "ENOVAPREMIER, LLC",
        "ENSCO, INC.",
        "ENSIGN SERVICES, INC.",
        "ENSIGN-BICKFORD INDUSTRIES",
        "ENTERGY SERVICES INC.",
        "ENTERTAINMENT CONSUMER ASSOCIATION",
        "ENVISION HEALTHCARE CORPORATION",
        "EPHRAIM MCDOWELL REGIONAL MED CTR",
        "EQUINOX PAYMENTS",
        "EQUITY RESIDENTIAL SERVICES, L.L.C.",
        "ERICKSON LIVING MANAGEMENT LLC",
        "ESCO CORPORATION",
        "ESSEX GROUP MANAGEMENT",
        "ETHAN ALLEN",
        "EURAMAX",
        "EVERBRITE, LLC",
        "EVOLVING SYSTEMS, INC.",
        "EVONIK DEGUSSA CORPORATION",
        "EXELIS, INC.",
        "EXELIXIS INC",
        "EXELON CORPORATION",
        "EXETER HEALTH RESOURCES",
        "EXIDE TECHNOLOGIES",
        "EXPERIAN INFORMATION SOLUTIONS, INC",
        "EXPRESS MESSENGER",
        "EXPRESS SCRIPTS",
        "EXTENDICARE HEALTH SERVICES, INC.",
        "EXTENSIS",
        "EXTREME NETWORKS",
        "F&P AMERICA MFG., INC",
        "F & P AMERICA MFG., INC",
        "FABICK CAT",
        "FACTSET RESEARCH SYSTEMS",
        "FAIR ISAAC CORPORATION",
        "FAIR- RITE PRODUCTS CORPORATION",
        "FAIRFIELD MEDICAL CENTER",
        "FAIRFIELD UNIVERSITY",
        "FAIRPOINT COMMUNICATIONS",
        "FARGO ASSEMBLY OF PA",
        "FARMERS NATIONAL COMPANY",
        "FASTENAL COMPANY",
        "FAYETTEVILLE TECHNICAL COMM COLLEGE",
        "FAZOLI'S RESTAURANTS LLC",
        "FCCI INSURANCE",
        "FCI USA, LLC",
        "FEDERAL EXPRESS CORPORATION",
        "FEDERAL FIRST",
        "FEDERAL MOGUL",
        "FEDERAL RESERVE BANK",
        "FEDERAL SIGNAL CORPORATION",
        "FEDEX CUSTOM CRITICAL",
        "FEDEX FREIGHT",
        "FEDEX GROUND",
        "FEDEX OFFICE",
        "FEDEX SUPPLY CHAIN SYSTEMS, INC.",
        "FENNER DUNLOP",
        "FFMC/FDC",
        "FIDELITY INVESTMENTS",
        "FIDELITY TECHNOLOGIES CORPORATION",
        "FIFTH THIRD BANK",
        "FINANCIAL PLANNING ASSOCIATION",
        "FIRST ALERT PROFESSIONAL SECURITY",
        "FIRST AMERICAN CORPORATION",
        "FIRST CITIZENS BANK & TRUST COMPANY",
        "FIRST COMMONWEALTH FINANCIAL CORP",
        "FIRST COMMUNITY BANK",
        "FIRST DATA INVESTOR SERVICES",
        "FIRST ENERGY",
        "FIRST MIDWEST BANK",
        "FIRST TECH FEDERAL CREDIT UNION",
        "FIRST TENNESSEE BANK",
        "FIRSTHEALTH OF THE CAROLINAS",
        "FIRSTMERIT CORPORATION",
        "FISERV",
        "FLEXTRONICS INTERNATIONAL USA",
        "FLORIDA BANKERS ASSOCIATION",
        "FLORIDA DEPARTMENT OF EDUCATION",
        "FLORIDA RETIRED EDUCATOR ASSOC",
        "FLSMIDTH INC",
        "FLUOR CORPORATION",
        "FMC TECHNOLOGIES",
        "FOCUS HR",
        "FOOT LOCKER INC.",
        "FORD MOTOR COMPANY 80",
        "FOREST LABS",
        "FORMOSA PLASTICS CORPORATION, USA",
        "FORRESTER RESEARCH, INC.",
        "FORSYTH COUNTY SCHOOLS",
        "FORT OSAGE SCHOOL DISTRICT",
        "FORTNEY & WEYGANDT",
        "FOX, INC",
        "FPM LP",
        "FRANCISCAN ALLIANCE",
        "FRANCISCAN SISTERS",
        "FRANKCRUM",
        "FRANKLIN TEMPLETON GROUP",
        "FRED A MORETON AND COMPANY",
        "FREEDOM COMMUNICATIONS",
        "FREEPORT HEALTH NETWORK",
        "FREEPORT MCMORAN",
        "FREESCALE SEMICONDUCTOR INC.",
        "FREMONT - RIDEOUT HEALTH GROUP",
        "FRESENIUS KABI USA, LLC",
        "FREUDENBERG-NOK",
        "FRONTIER COMMUNICATIONS",
        "FUJI PHOTO FILM USA, INC",
        "FUJITSU MGMT SVCS OF AMERICA",
        "FUNDAMENTAL AKA TRANS HEALTHCARE",
        "GAMBRO RENAL PRODUCTS",
        "GAMESTOP STORES",
        "GANDER MOUNTAIN",
        "GANNETT CO INC",
        "GARDNER DENVER",
        "GARMIN INTERNATIONAL",
        "GARTNER",
        "GATX CORPORATION",
        "GEBA",
        "GEMTRON",
        "GENENTECH, INC.",
        "GENERAL DYNAMICS",
        "GENERAL FEDERATION OF WOMENS CLUBS",
        "GENERAL MILLS",
        "GENERAL MOTORS",
        "GENERAL PUBLIC GPC",
        "GENERATION AMERICA, LLC",
        "GENEX SERVICES, INC.",
        "GENOMIC HEALTH INC.",
        "GENTIVA",
        "GENZYME CORPORATION",
        "GEORGE MASON UNIVERSITY",
        "GEORGETOWN UNIVERSITY",
        "GEORGIA REINSURANCE DIRECT BILL",
        "GEORGIA STATE UNIVERSITY",
        "GERSON LEHRMAN GROUP, INC",
        "GETTY IMAGES INC.",
        "GIRLING HEALTHCARE, INC.",
        "GIVAUDAN CORPORATION",
        "GLAXOSMITHKLINE",
        "GLOBAL AVIATION HOLDINGS, INC.",
        "GLOBAL BRASS AND COPPER",
        "GLOBAL CASH ACCESS",
        "GLOBAL IMAGING SYSTEMS, INC.",
        "GLOBAL KNOWLEDGE NETWORK",
        "GLOBAL PAYMENTS",
        "GLYNN COUNTY BOC",
        "GOLDEN LIVING",
        "GOLDENWEST FEDERAL CREDIT UNION",
        "GOOD SAMARITAN HOSPITAL MEDICAL CTR",
        "GOODMAN MANUFACTURING",
        "GOODWILL INDUSTRIES - SUNCOAST",
        "GOOGLE INC",
        "GRAEBEL COMPANIES",
        "GRAHAM PACKAGING COMPANY",
        "GRAND VIEW HOSPITAL",
        "GRANT THORNTON LLP",
        "GRANVILLE COUNTY SCHOOLS",
        "GRAYBAR ELECTRIC",
        "GREAT RIVER ENERGY",
        "GREATWIDE LOGISICS SERVICES INC",
        "GREEN BAY PACKAGING, INC.",
        "GREEN TREE SERVICING LLC",
        "GREENBRIER COMPANIES",
        "GREENWICH HOSPITAL",
        "GRIFFITH LABORATORIES",
        "GRIFOLS INC.",
        "GROUP HEALTH INCORPORATED",
        "GROUP M",
        "GROUP MANAGEMENT SERVICES",
        "GROUPE STAHL",
        "GROVE HILL MEDICAL CENTER",
        "GSE SYSTEMS",
        "GTECH CORPORATION",
        "GUARANTY BANK FSB",
        "GUIDELINE",
        "GULF COAST HEALTH CARE",
        "GUNDERSEN HEALTH SYSTEM",
        "GWINNETT COUNTY BOARD OF EDUCATION",
        "GZA GEO ENVIRONMENTAL TECHNOLOGIES",
        "H&M",
        "H&R BLOCK",
        "H. P. HOOD",
        "HP HOOD",
        "HACKENSACK UNIV. MEDICAL CTR",
        "HAIN CELESTIAL GROUP",
        "HALLIBURTON COMPANY",
        "HALLMARK CARDS INC.",
        "HALLMARK HEALTH SYSTEMS",
        "HAMBLEN COUNTY BOARD OF EDUCATION",
        "HAMPTON CITY SCHOOLS",
        "HANCOCK HOLDING CO.",
        "HANFORD RECREATION ASSOCIATION",
        "HANOVER DIRECT INC",
        "HAPAG LLOYD",
        "HARBOR ONE CREDIT UNION",
        "HARBORSTONE CREDIT UNION",
        "HARD ROCK CAFE INTERNATIONAL",
        "HARDING UNIVERSITY",
        "HARLEY-DAVIDSON, INC.",
        "HARPER HOSPITAL",
        "HARRIS CORPORATION",
        "HARRISON COUNTY BOARD OF EDUCATION",
        "HARVARD UNIVERSITY",
        "HARVEY INDUSTRIES",
        "HASBRO, INC.",
        "HAVAS",
        "HAVERTY FURNITURE",
        "HAWKER PACIFIC AEROSPACE",
        "HAWORTH, INC.",
        "HAYWOOD COMMUNITY COLLEGE",
        "HCA HEALTHCARE CORP.",
        "HCC INDUSTRIES",
        "HCL AMERICA, INC.",
        "HD SUPPLY",
        "HEADSTRONG",
        "HEALTH AND HOSPITAL CORPORATION",
        "HEALTH CARE SERVICE CORPORTATION",
        "HEALTH EAST",
        "HEALTH MANAGEMENT",
        "HEALTH NET, INC.",
        "HEALTH PARTNERS",
        "HEALTH PARTNERS CENTRAL MN CLINICS",
        "HEALTHCARE ASSOC. OF NY ST.",
        "HEALTHNOW NY",
        "HEALTHPLAN HOLDINGS INC.",
        "HEALTHSOUTH CORP",
        "HEALTHY TRUCKING ASSOCIATION OF AME",
        "HEARST CORPORATION",
        "HEARTHSIDE FOOD SOLUTIONS",
        "HEARTLAND EMPLOYMENT SERVICES",
        "HEINZ",
        "HENKEL OF AMERICA",
        "HENNESSY AUTOMOBILE COMPANIES",
        "HENRY SCHEIN, INC.",
        "HENRY WURST",
        "HENSLEY AND COMPANY",
        "HERMAN MILLER INC",
        "HERR FOODS INC",
        "HERSHEY COMPANY",
        "HERTZ",
        "HERZOG CONTRACTING",
        "HEWLETT-PACKARD, EDS",
        "HH SUMCO",
        "HHGREGG",
        "HIBU INC",
        "HICKMAN COUNTY",
        "HIGHLAND HOSPITAL",
        "HILLERICH & BRADSBY CO.",
        "HILLSBORO COMMUNITY MEDICAL CENTER",
        "HILLSBOROUGH COMMUNITY COLLEGE",
        "HILLSIDE CHILDREN'S CENTER",
        "HILTON WORLDWIDE",
        "HITACHI DATA SYSTEMS",
        "HITCHINER MFG. CO.",
        "HMC/CAH CONSOLIDATED, INC",
        "HMS HOLDING LTD/HENDRICK MOTORSPORT",
        "HNC SOFTWARE, INC.",
        "HOAG MEMORIAL HOSPITAL",
        "HOBART BROTHERS",
        "HOLLAND AMERICA LINE N.V.",
        "HOLLINGSWORTH AND VOSE",
        "HOLLISTER",
        "HOLY SPIRIT HEALTH SYSTEMS",
        "HONDA OF AMERICA MFG INC",
        "HONEYWELL",
        "HONEYWELL -RETIREE",
        "HOOD COLLEGE",
        "HOOTERS CASINO HOTEL",
        "HORIZON BC/BS OF NJ",
        "HORIZON LINES LLC",
        "HORIZON SOLUTIONS CORP.",
        "HOSPITAL FOR SPECIAL CARE",
        "HOUGHTON MIFFLIN",
        "HOV SERVICES",
        "HOWARD COUNTY HOSPITAL",
        "HOWARD HUGHES MEDICAL INSTITUTE",
        "HOWARD UNIVERSITY",
        "HRSOURCE, INC.",
        "HSBC NORTH AMERICA HOLDINGS, INC",
        "HUDSON VALLEY BANK",
        "HUMAN GENOME SCIENCES INC",
        "HUMAN KINETICS",
        "HUMANA",
        "HUMILITY OF MARY HEALTH PARTNERS",
        "HUNTER CONTRACTING",
        "HUNTER DOUGLAS",
        "HUNTERDON MEDICAL CENTER",
        "HUNTINGTON HOSPITAL",
        "HUNTON & WILLIAMS",
        "HURON CONSULTING GROUP",
        "HUSSMANN CORPORATION",
        "HYATT LEGAL PLANS",
        "I FLY AMERICA, INC.",
        "IBEW LOCAL 102",
        "IBM",
        "ICE GALLERY",
        "ICF CONSULTING GROUP",
        "IGATE CORPORATION",
        "IGNITE RESTAURANT GROUP",
        "IKON OFFICE SOLUTIONS",
        "ILLINOIS ASSOCIATION OF REALTORS",
        "ILLINOIS CENTRAL RAILROAD COMPANY",
        "IMATION CORP",
        "IMERYS CORPORATION",
        "IMS HEALTH INCORPORATED",
        "INDEPENDENCE AIR",
        "INDEPENDENT PILOTS ASSOCIATION",
        "INDIANA MEMBERS CREDIT UNION OF IND",
        "INDIANA RETIRED TEACHERS ASSOCIATIO",
        "INDIANA STATE EMPLOYEES ASSOCIATION",
        "INDIANA UNIVERSITY",
        "INDIANA UNIVERSITY HEALTH",
        "INFINITY INSURANCE COMPANY",
        "INFOCROSSING",
        "INFORMA USA",
        "INFORMATICA CORPORATION",
        "INFORMATION RESOURCES",
        "INFOSYS LIMITED",
        "ING FINANCIAL SERVICES CORPORATION",
        "INGALLS HEALTH SYSTEM",
        "INGERSOLL RAND",
        "INNOVIA FILMS INC.",
        "INOVA HEALTH SYSTEM SERVICES",
        "INSIGNIA RESIDENTIAL GRP/DOUGLAS EL",
        "IN-SINK-ERATOR DIVISION EMERSON E",
        "INST OF ELECTRICAL & ELECTRONIC ENG",
        "INSTITUTIONAL INVESTOR",
        "INSTRON",
        "INSURANCE TRUST",
        "INSURANCE TRUST FOR DELTA RETIREES",
        "INSURITY INC.",
        "INTEGRA LIFESCIENCES",
        "INTEGRATED DEVICE TECHNOLOGY, INC.",
        "INTEGRATED ELECTRICAL SERVICES INC.",
        "INTEGRATED MARKETING",
        "INTEGRITY APPLICATIONS INC",
        "INTEL CORPORATION",
        "INTELSAT GLOBAL SERVICES CORP",
        "INTERACTIVE DATA CORPORATION",
        "INTERGEN",
        "INTERGRAPH CORPORATION",
        "INTERMOUNTAIN GAS COMPANY",
        "INTERMOUNTAIN HEALTH CARE",
        "INTERNATIONAL ASSOC OF RETIRED FIRE",
        "INTERNATIONAL GAME TECHNOLOGY",
        "INTERNATIONAL PAPER",
        "INTERNATIONAL RECTIFIER",
        "INTERNATIONAL SEMATECH",
        "INTERPUBLIC GROUP COMPANIES INC.",
        "INTERSIL CORPORATION",
        "INT'L UNION OF OPERATING ENGINEERS",
        "INTRADO",
        "INTRAPAC, CORP.",
        "INTUIT, INC.",
        "INVENSYS SYSTEMS",
        "INX",
        "ION MEDIA NETWORKS, INC",
        "IONA COLLEGE",
        "IPA ASSOCATION OF AMERICA",
        "IRA DAVENPORT MEMORIAL HOSPITAL",
        "IRI, ISG, INC.",
        "IRIS GRAPHICS",
        "IRVINE COMPANY",
        "ISBA - RETIREES & BOARD MEMBERS",
        "ISO NEW ENGLAND",
        "ITRON, INC.",
        "ITT CORPORATION",
        "IVY TECH ALUMNI ASSOCIATION",
        "J CREW",
        "J.B. HUNT",
        "J.JILL GROUP",
        "J. JILL GROUP",
        "J JILL GROUP",
        "JACKSON GENERAL HOSPITAL",
        "JACOBS AEROSPACE TESTING ALLIANCE",
        "JACOBS ENGINEERING GROUP INC.",
        "JACOBS TECHNOLOGY GROUP INC.",
        "JACOBSEN CONSTRUCTION",
        "JAFRA COSMETICS INTERNATIONAL, INC.",
        "JAMES HARDIE BUILDING PRODUCTS",
        "JANE PHILIPS MEDICAL CENTER",
        "JANUS CAPITAL GROUP",
        "JARDEN CORPORATION",
        "JARDINE INSURANCE BROKERS",
        "JAZZ SEMICONDUCTOR",
        "JBT CORPORTION",
        "JEFFERIES GROUP LLC",
        "JEFFERSON CNTY PUBLIC SCHOOLS",
        "JEFFERSON COUNTY",
        "JEFFERSON WELLS INTERNATIONAL",
        "JETBLUE AIRWAYS",
        "JIM ELLIS",
        "JJ KELLER",
        "JM FAMILY",
        "JM MANUFACTURING COMPANY, INC",
        "JO-ANN STORES",
        "JOHN HANCOCK LIFE INSURANCE CO (USA)",
        "JOHN J KIRLIN INC",
        "JOHN MUIR HEALTH",
        "JOHN WILEY & SONS, INC.",
        "JOHN'S HOPKINS UNIVERSITY",
        "JOHNSON & JOHNSON",
        "JOHNSON AND WALES UNIVERSITY",
        "JOHNSON CONTROLS INC.",
        "JOHNSON CONTROLS, INC. - DB ONLY",
        "JOHNSTON COUNTY SCHOOLS",
        "JOHNSTON MEMORIAL HOSPITAL",
        "JOINT COMMISSION",
        "JOINT SCHOOL DISTRICT NO. 2",
        "JONES LANG LASALLE",
        "JORDAN VALLEY MEDICAL CENTER",
        "JORDANS FURNITURE",
        "JP MORGAN CHASE",
        "JUNIPER NETWORKS, INC.",
        "K. HOVNANIAN COMPANIES",
        "K HOVNANIAN COMPANIES",
        "KAISER PERMANENTE OF COLORADO",
        "KALEIDA HEALTH",
        "KANSAS CITY SOUTHERN",
        "KANSAS HOSPITAL ASSOC.",
        "KAO CORPORATION OF AMERICA",
        "KAPSTONE PAPER AND PACKAGING CORP",
        "KATUN CORPORATION",
        "KAYSER-ROTH CORPORATION",
        "KB HOME",
        "KCG, INC.",
        "KEENAN AND ASSOCIATES",
        "KELLOGG COMPANY",
        "KENNEY MANUFACTURING",
        "KENTON COUNTY BOARD OF EDUCATION",
        "KENTUCKYONE",
        "KESSLER REHABILITATION CORPORATION",
        "KETTERING HEALTH NETWORK",
        "KEY FAMILY OF COMPANIES",
        "KEYSTONE AUTOMOTIVE OPERATIONS",
        "KEYSTONE COLLEGE",
        "KGP TELECOMMUNICATIONS, INC",
        "KIA MOTORS MANUFACTURING GEORGIA",
        "KIK CUSTOM PRODUCTS",
        "KIMPTON HOTEL & RESTAURANT GROUP",
        "KIMSTAFFHR, INC.",
        "KINDRED HEALTHCARE, INC.",
        "KINECTA FEDERAL CREDIT UNION",
        "KINECTA FEDERAL CREDIT UNION",
        "KINGSTON HOSPITAL",
        "KITCHELL CORP.",
        "KLA-TENCOR",
        "KLEINFELDER",
        "KNAACK MANUFACTURING",
        "KNIGHT CAPITAL GROUP",
        "K OCH INDUSTRIES",
        "KOHL'S",
        "KOOTENAI MEDICAL CENTER",
        "KOPPERS INC.",
        "KPMG PEAT MARWICK",
        "KPSS INC.",
        "KRAFT FOOD GROUP, INC.",
        "KRATON POLYMERS",
        "KRONOS",
        "L OCCITANE INC.",
        "L'OCCITANE INC.",
        "L-3",
        "L3",
        "LABORATORY CORPORATION",
        "LABORERS INTERNATIONAL UNION OF NOR",
        "LAHEY CLINIC",
        "LAIRD, INC.",
        "LAKE COUNTY",
        "LAKE FOREST HOSPITAL",
        "LAKELAND REGIONAL HEALTH SYSTEMS",
        "LAM RESEARCH CORP",
        "LAMADELEINE",
        "LANDEAU METROPOLITAN",
        "LARSON-JUHL",
        "LAWRENCE LIVERMORE NATIONAL LABORAT",
        "LAWRENCE MEMORIAL HOSPITAL",
        "LAWRENCE REGIONAL HEALTH SYSTEM INC",
        "LAYNE CHRISTENSEN COMPANY",
        "LCC INTERNATIONAL",
        "LEACH & GARNER CO",
        "LEAKE AND WATTS",
        "LEAR CORPORATION",
        "LEE COUNTY",
        "LEE MEMORIAL",
        "LEGG MASON",
        "LEGGETT & PLATT INC",
        "LEHIGH HANSON",
        "LEHIGH VALLEY BUSINESS COALITION",
        "LEHMAN BROTHERS, INC.",
        "LEMOYNE COLLEGE",
        "LEND LEASE",
        "LENNAR CORPORATION",
        "LENOX HILL HOSPITAL",
        "LEO A DALY",
        "LEVEL 3 COMMUNICATIONS",
        "LEVI STRAUSS & CO.",
        "LEXMARK INTERNATIONAL, INC.",
        "LG ELECTRONICS",
        "LIBERTY MEDICAL",
        "LIFE TECHNOLOGIES CORPORATION",
        "LIFECARE MANAGEMENT SERVICES",
        "LIFECARE, INC",
        "LIFE'S WORC",
        "LIFESOUTH COMMUNITY BLOOD CENTERS",
        "LIFESPAN",
        "LIFETIME BRANDS, INC.",
        "LIFETIME HEALTH CARE COMPANIES",
        "LIFEWAY CHRISTIAN RESOURCES",
        "LIMITED BRANDS",
        "LINCOLN COUNTY BOARD OF EDUCATION",
        "LINCOLN INDUSTRIES",
        "LITTLER MENDELSON PC",
        "LITTLETON SCHOOL DISTRICT",
        "LIVINGSTON BOARD OF EDUCATION",
        "LL BEAN",
        "LOCKHEED MARTIN",
        "LOCKHEED MARTIN GLOBAL TELECOMM",
        "LODGENET",
        "LOGAN BUS COMPANY",
        "LOGITECH INC.",
        "LONG ISLAND HOME, LTD",
        "LONGVIEW FIBRE",
        "LORD CORPORATION",
        "LOREAL USA INC.",
        "LOTUSHR",
        "LOWE'S COMPANIES, INC.",
        "LOYOLA MARYMOUNT UNIVERSITY",
        "LSG SKY CHEFS",
        "LSI CORPORATION",
        "LUBBOCK INDEPENDENT SCHOOL DISTRICT",
        "LUCENT TECHNOLOGIES",
        "LUFTHANSA TECHNIK NORTH AMERICA",
        "LUFTHANSA USA",
        "LUTHERAN MEDICAL CENTER",
        "LVMH MOET HENNESSY LOUIS VUITTON, I",
        "LYONDELLBASSELL",
        "M&T BANK CORPORATION",
        "M.A. MORTENSON COMPANY",
        "MAC-GRAY CORPORATION",
        "MACK ENERGY CORPORATION",
        "MACY'S CREDIT AND CUSTOMER SERVICES",
        "MACY'S SYSTEMS AND TECHNOLOGY, INC.",
        "MADD",
        "MADISON COUNTY BOARD OF EDUCATION",
        "MAERSK LINE",
        "MAGELLAN HEALTH SERVICES",
        "MAGMA DESIGN AUTOMATION INC.",
        "MAGNA INTERNATIONAL",
        "MAINE MEDICAL ASSOCIATION",
        "MAINES PAPER AND FOOD SERVICE, INC",
        "MAJOR LEAGUE BASEBALL",
        "MALLINCKRODT GROUP",
        "MANAGEMENT AND TRAINING CORP",
        "MANNINGTON MILLS",
        "MANSFIELD INDEPENDENT SCHOOL DISTRI",
        "MANTECH INTERNATIONAL",
        "MARATHON OIL COMPANY",
        "MARATHON PETROLEUM OIL",
        "MARICOPA COUNTY",
        "MARICOPA INTEGRATED HEALTH SYSTEM",
        "MARINE BIOLOGICAL LABORATORY",
        "MARINEMAX, INC.",
        "MARION COUNTY",
        "MARQUETTE MEDICAL SYSTEMS",
        "MARQUETTE UNIVERSITY",
        "MARSH & MCLENNAN",
        "MARTIN COMMUNITY COLLEGE",
        "MARTIN MEMORIAL HEALTH SYSTEMS",
        "MARVELL SEMICONDUCTOR GROUP",
        "MARYWOOD UNIVERSITY",
        "MASSACHUSETTS CORRECTIONS OFFICERS",
        "MASSACHUSETTS HOSPITAL",
        "MASTERCARD WORLDWIDE",
        "MATERION CORPORATION",
        "MATHEMATICAL ASSOCIATION OF AMERICA",
        "MATRIX SERVICE COMPANY",
        "MAVERICK TRANSPORTATION USA",
        "MAXELL CORPORATION OF AMERICA",
        "MAXIMUS INC",
        "MAYER ELECTRIC SUPPLY SERVICING CO",
        "MB FINANCIAL INC.",
        "MCAFEE, INC",
        "MCDONALD'S CORPORATION",
        "MCDONALD'S LICENSEE",
        "MCDONALD'S OPERATING CORPORATE CREW",
        "MCGLADREY, LLP",
        "MCGRAW HILL EDUCATION",
        "MCGRAW-HILL, INC.",
        "MCKESSON",
        "MCKINSTRY CO.",
        "MDC PARTNERS",
        "MEADOW GOLD DAIRIES",
        "MEDIA GENERAL INC.",
        "MEDICA HEALTH PLANS",
        "MEDICAL CENTER OF PLANO",
        "MEDIMPACT",
        "MEDISYS HEALTH NETWORK, INC.",
        "MEDLINE INDUSTRIES, INC.",
        "MEDTRONIC, INC.",
        "MEHARRY MEDICAL COLLEGE",
        "MELALEUCA INC.",
        "MELROSE CREDIT UNION",
        "MEMBER INSURANCE",
        "MEMBERS",
        "MEMORIAL HERMANN BAPTIST BEAUMONT",
        "MEMORIAL HERMANN BAPTIST ORANGE HOS",
        "MEMORIAL HERMANN HEALTHCARE",
        "MERCEDES BENZ US INTERNATIONAL",
        "MERCEDES-BENZ USA, LLC",
        "MERCHANTS BANK",
        "MERCK & CO., INC.",
        "MERCURY SYSTEMS",
        "MERCY COLLEGE",
        "MERCY HEALTH",
        "MERCY MEDICAL CENTER, CEDAR RAPIDS",
        "MERCY MEMORIAL HOSPITAL SYSTEM",
        "MERCYHURST UNIVERSITY ALUMNI",
        "MERIAL",
        "MERIDIAN HEALTH SYSTEM",
        "MERIT RESOURCES INC.",
        "MERVYNS",
        "MESA AIR GROUP",
        "MESQUITE INDEPENDENT SCHOOL DISTRIC",
        "MET MORTGAGE",
        "METHODIST LE BONHEUR HEALTHCARE",
        "METLIFE CAPITAL CORPORATION",
        "METRO ONE TELECOMMUNICATIONS",
        "METROPOLITAN GOLF ASSOCIATION",
        "METROPOLITAN NASHVILLE AIRPORT AUTH",
        "METROPOLITAN TRANSIT AUTH",
        "METLIFE",
        "MFS",
        "MGM RESORTS INTERNATIONAL",
        "MHMR OF TARRANT COUNTY",
        "M-I LLC",
        "MICHAEL FOODS, INC.",
        "MICHIGAN STATE UNIVERSITY",
        "MICRO ELECTRONICS INC",
        "MICROCHIP TECHNOLOGY",
        "MICRON TECHNOLOGY, INC.",
        "MICROSOFT",
        "MICROSOFT ALUMNI NETWORK",
        "MIDDLESEX COUNTY COLLEGE",
        "MILLENNIUM LABORATORIES",
        "MILLERCOORS",
        "MINACS GROUP",
        "MINERALS TECHNOLOGIES INC.",
        "MINISTRY EAST REGION",
        "MINISTRY HEALTH CARE, INC",
        "MINNESOTA BENEFIT ASSOCIATION",
        "MINNESOTA MEDICAL ASSOCIATION",
        "MIT",
        "MITCHELL DISTRIBUTING",
        "MITRE CORPORATION",
        "MITSUBISHI POLYESTER FILM",
        "MIZUHO CORPORATE BANK",
        "MIZUNO USA INC",
        "MMODAL",
        "MODERN BUSINESS ASSOC.",
        "MOEN INCORPORATED",
        "MOHAWK INDUSTRIES",
        "MOLEX INC.",
        "MOMENTIVE",
        "MONDELEZ INTERNATIONAL, LLC",
        "MONEYGRAM INTERNATIONAL, INC.",
        "MONITRONICS INTERNATIONAL, INC.",
        "MONROE SCHOOL BOARD OF EDUCATION",
        "MONSANTO COMPANY",
        "MONTEFIORE MEDICAL CENTER",
        "MOODY'S CORPORATION",
        "MOOSE INTERNATIONAL INC",
        "MORGAN STANLEY",
        "MOTOROLA ISG",
        "MOTOROLA MOBILITY",
        "MOUNT AUBURN",
        "MOUNTAIN AMERICA CREDIT UNION",
        "MOVADO GROUP",
        "MOVIUS INTERACTIVE CORPORATION",
        "MRV COMMUNICATIONS, INC",
        "MT. BAKER SCHOOL DISTRICT",
        "MULTILINK",
        "MUNGER, TOLLES & OLSON",
        "MUNICH RE AMERICA",
        "MUSCULOSKELETAL TRANSPLANT FNDTN",
        "MUSEUM OF MODERN ART",
        "MV TRANSPORTATION",
        "MVP HEALTH PLAN",
        "MYR GROUP",
        "MYRIAD GENETICS, INC.",
        "N & M TRANSFER COMPANY, INC.",
        "N&M TRANSFER COMPANY, INC.",
        "N F A, INC.",
        "NFA, INC.",
        "NAACP",
        "NACCO MATERIALS HANDLING GROUP, INC",
        "NALCO",
        "NAMMO TALLEY, INC.",
        "NASA",
        "NATIONAL AMUSEMENTS INC.",
        "NATIONAL AQUARIUM",
        "NATIONAL ASSOCIATION OF CONSERVATIV",
        "NATIONAL ASSOCIATION OF POSTAL SUPV",
        "NATIONAL COALITION OF PUBLIC SAFETY",
        "NATIONAL COOPERATIVE BANK",
        "NATIONAL CORVETTE OWNERS ASSOCIATIO",
        "NATIONAL ELECTRONICS WARRANTY LLC",
        "NATIONAL ENVELOPE CORPORATION",
        "NATIONAL EXCHANGE CLUB",
        "NATIONAL GEOGRAPHIC SOCIETY",
        "NATIONAL GRID",
        "NATIONAL HEALTH MANAGEMENT",
        "NATIONAL HIGH SCHOOL COACHES ASSOCI",
        "NATIONAL LOUIS UNIVERSITY",
        "NATIONAL MULTIPLE SCLEROSIS SOCIETY",
        "NATIONAL OILWELL VARCO",
        "NATIONAL PEO, LLC.",
        "NATIONAL PTA",
        "NATIONAL RIFLE ASSOC OF AMERICA",
        "NATIONAL TELECOMMUNICATIONS COOPERA",
        "NATIONWIDE VISION CENTER, PC",
        "NATL MULTIPLE SCLEROSIS SOC",
        "NATL TRUST FOR HISTORIC PRESERVATIO",
        "NATL. ASSOC. FOR THE SELF EMPLOYED",
        "NATURE'S WAY PRODUCTS, INC.",
        "NAVARRO DISCOUNT PHARMACIES",
        "NAVIGANT CONSULTING",
        "NAVISTAR INTERNATIONAL CORP.",
        "NAVTEQ",
        "NAVY FEDERAL CREDIT UNION",
        "NBC UNIVERSAL",
        "NCR",
        "NEC DISPLAY SOLUTIONS OF AMERICA",
        "NEC SOLUTIONS AMERICA INC",
        "NEC TECHNOLOGIES",
        "NEGWER MATERIALS",
        "NEMAK USA, INC",
        "NESTLE USA INC.",
        "NETAPP, INC",
        "NETCENTRICS CORPORATION",
        "NETJETS, INC.",
        "NETWORK COMMUNICATIONS, INC.",
        "NEUBERGER BERMAN GROUP LLC",
        "NEVADA HOTEL AND LODGING ASSOCIATIO",
        "NEW ALBERTSON'S",
        "NEW BALANCE",
        "NEW ENGLAND FEDERAL CREDIT UNION",
        "NEW FLYER OF AMERICA, INC.",
        "NEW FREEDOM MORTGAGE CORPORATION",
        "NEW HORIZON ACADEMY",
        "NEW JERSEY MAP",
        "NEW MEXICO FEDERATION OF TEACHERS",
        "NEW MEXICO HIGHLANDS UNIVERSITY",
        "NEW YORK METHODIST HOSPITAL",
        "NEW YORK STATE UNITED TEACHERS",
        "NEW YORK TIMES",
        "NEW YORK UNIVERSITY",
        "NEWBERG PUBLIC SCHOOLS",
        "NEWELL COMPANY",
        "NEWMARKET INTERNATIONAL",
        "NEWPAGE CORPORATION",
        "NEWPORT HOSPITAL",
        "NEWPORT MESA UNIFIED SCHOOL DIST.",
        "NEWS CORPORATION",
        "NEXEO SOLUTIONS, LLC",
        "NEXTERA ENERGY, INC.",
        "NICE SYSTEMS, INC.",
        "NICHOLAS H. NOYES MEMORIAL HOSPITAL",
        "NIKE, INC.",
        "NIKON, INC.",
        "NIPPON EXPRESS USA",
        "NISSAN NORTH AMERICA, INC.",
        "NIVIDIA",
        "NOKIA",
        "NORDSTROM INC",
        "NORTH CAROLINA STATE FIREMANS ASSOC",
        "NORTH JERSEY FEDERAL CREDIT UNION",
        "NORTHEAST BEHAVIORAL HEALTH",
        "NORTHEAST CENTER FOR SPECIAL CARE",
        "NORTHEAST COMMUNITY CREDIT UNION",
        "NORTHEAST REHABILITATION HOSPITAL",
        "NORTHEAST UTILITIES",
        "NORTHEASTERN UNIVERSITY",
        "NORTHERN TIER ENERGY",
        "NORTHERN VIRGINIA FAMILY SERVICE",
        "NORTHROP GRUMMAN",
        "NORTHWEST COMMUNITY HOSPITAL",
        "NORTHWEST TRAILER PARTS",
        "NORTON HEALTHCARE",
        "NOVANT HEALTH",
        "NOVARTIS CORPORATION",
        "NOVELL, INC.",
        "NOVO NORDISK INC.",
        "NSTAR",
        "NTN USA CORPORATION",
        "NTT DATA INC.",
        "NTT DATA, INC.",
        "NU SKIN",
        "NU-KOTE INTERNATIONAL",
        "NURSES FOUNDATION OF WISCONSIN",
        "NUTMEG STATE FEDERAL CREDIT UNION",
        "NV ENERGY",
        "NW FINANCIAL ASSOC.EE BENEFIT TRUST",
        "NY CONVENTION CENTER OPERATING CORP",
        "NYE COUNTY",
        "NYK LINE INC.",
        "NYPRO",
        "NYSARC, INC.",
        "NYSCOPBA",
        "NYSE EURONEXT",
        "O.C. TANNER COMPANY",
        "OC TANNER COMPANY",
        "OCCIDENTAL PETROLEUM CORPORATION",
        "OCEAN SPRAY CRANBERRIES",
        "OFFICE DEPOT",
        "OFFICE MAX INC.",
        "OFS FITEL, LLC",
        "OGILVY & MATHER",
        "OHIO DENTAL ASSOCIATION",
        "OHIO OSTEOPATHIC ASSOCIATION",
        "OHIOHEALTH",
        "OKLAHOMA HEART HOSPITAL",
        "OKLAHOMA PUBLIC EMPLOYEES ASSOC.",
        "OLD MUTUAL (US) HOLDINGS INC",
        "OLDCASTLE INC.",
        "OLIN CORPORATION",
        "OLMSTED FALLS BOARD OF EDUCATION",
        "O'MELVENY & MYERS LLP",
        "OMELVENY & MYERS LLP",
        "OMNI CIRCUITS, INC.",
        "ON SEMICONDUCTOR CORPORATION",
        "O'NEAL STEEL INC",
        "ONEAL STEEL INC",
        "ONEAMERICA",
        "ONYX SOFTWARE",
        "OPEIU LOCAL 100",
        "OPTUM, INC.",
        "ORANGE BUSINESS SERVICES HOLDINGS",
        "ORANGE COAST TITLE COMPANY",
        "ORANGE COUNTY'S CREDIT UNION",
        "ORANGE REGIONAL MEDICAL CENTER",
        "ORCHARD SUPPLY HARDWARE COPRORATION",
        "ORDER SONS OF ITALY IN AMERICA",
        "OREGON GOLF ASSOCIATION",
        "ORTHOLINK PHYSICIANS CORPORATION",
        "OSF SAINT ELIZABETH MEDICAL CENTER",
        "OSMA",
        "OSRAM SYLVANIA",
        "OTTO BOCK HEALTHCARE, LP",
        "OUR LADY OF CONSOLATION",
        "OUR365",
        "OVERHEAD DOOR CORPORATION",
        "OVERLAKE HOSPITAL",
        "OWENS & MINOR",
        "OWENS CORNING",
        "OZBURN-HESSEY LOGISTICS",
        "OZINGA BROS., INC.",
        "P.F. CHANG'S CHINA BISTRO, INC.",
        "PF CHANG'S CHINA BISTRO, INC.",
        "PA CONSULTING GROUP",
        "PACE",
        "PACE RESOURCES, INC.",
        "PACIFIC ARCHITECTS AND ENGINEERS",
        "PACIFIC DENTAL SERVICES, INC",
        "PACIFICORP",
        "PALM ONE",
        "PALMDALE SCHOOL DISTRICT",
        "PALOMAR HEALTH",
        "PANASONIC CORP OF NORTH AMERICA",
        "PAREXEL INTERNATIONAL CORPORATION",
        "PARK NICOLLET",
        "PARKHILL SCHOOL DISTRICT",
        "PARKVIEW HEALTH",
        "PARLEX USA, INC.",
        "PARSONS CORPORATION",
        "PARTMINER, INC",
        "PATHFINDER INC",
        "PATHOLOGY ASSOCIATES MEDICAL LABORA",
        "PAUL HASTINGS LLP",
        "PAWLING CORPORATION",
        "PAYCHEX, INC.",
        "PBC",
        "PBF HOLDING COMPANY LLC",
        "PC CONNECTION, INC.",
        "PC MALL",
        "PECHANGA DEVELOPMENT CORPORATION",
        "PECHINEY",
        "PEGASUS SOLUTIONS",
        "PEIRCE-PHELPS",
        "PENINSULA HOSPITAL CENTER",
        "PENNSYLVANIA PROFESSIONAL FIREFIGHT",
        "PEOPLES ENERGY CORPORATION",
        "PEORIA UNIFIED SCHOOL DISTRICT",
        "PEP BOYS MANNY MOE & JACK",
        "PEPCO HOLDINGS INC.",
        "PEPSICO",
        "PERKINELMER",
        "PERNOD RICARD",
        "PETCO ANIMAL SUPPLIES, INC.",
        "PETSMART",
        "PFIZER",
        "PHELPS COUNTY REGIONAL MEDICAL CENT",
        "PHH CORP",
        "PHILADELPHIA INSURANCE COMPANIES",
        "PHILIP MORRIS",
        "PHILIPS ELECTRONICS",
        "PHILLIPS EXETER ACADEMY",
        "PHOENIX CHILDREN'S ACADEMY",
        "PIKEVILLE COLLEGE",
        "PINELLAS COUNTY SCHOOLS",
        "PINNACLE AIRLINES INC.",
        "PINNACLE FOODS GROUP, LLC",
        "PINNACLE WEST CAPITAL CORPORATION",
        "PIONEER VALLEY HOSPITAL",
        "PITNEY BOWES, INC.",
        "PITT COMMUNITY COLLEGE",
        "PITT COMMUNITY COLLEGE ALUMNI ASSOC",
        "PLATINUM EQUITY HOLDINGS",
        "PLEXUS",
        "PMC GROUP, INC.",
        "PMSI",
        "PNC",
        "POET LLC",
        "POLYCOM, INC.",
        "PORTER NOVELLI",
        "PORTLAND COMMUNITY COLLEGE",
        "PORTLAND GENERAL ELECTRIC",
        "PORTS AMERICA",
        "POWELL INDUSTRIES",
        "PPG INDUSTRIES, INC.",
        "PQ CORPORATION",
        "PR NEWSWIRE",
        "PRAXAIR INC",
        "PRECIOUS PLATES",
        "PRECISION ENGINEERED PRODUCTS",
        "PREMIER HOME HEALTH CARE",
        "PREMIER MEMBERS FEDERAL CREDIT UNIO",
        "PREMIER RESEARCH",
        "PRESS GANEY ASSOCIATES",
        "PRESTIGE EMPLOYEE ADMINISTRATORS",
        "PRICE CHOPPER",
        "PRICEWATERHOUSECOOPERS",
        "PRIDE MOBILITY PRODUCTS CORP.",
        "PRIME HEALTHCARE SERVICES",
        "PRIME TANNING CO., INC.",
        "PRIME THERAPEUTICS",
        "PRIMERICA FINANCIAL SERVICES, INC",
        "PRIMESOURCE BUILDING PRODUCTS",
        "PROGRESS SOFTWARE",
        "PROGRESSIVE INSURANCE",
        "PROGRESSIVE NURSING STAFFERS",
        "PROHEALTH CARE,INC",
        "PRO-LIFT EQUIPMENT",
        "PROTECTION ONE",
        "PROVENA HEALTH",
        "PROVIDENCE HEALTH & SERVICES",
        "PROVIDENCE HOSPITALS",
        "PSAV PRESENTATION SERVICES",
        "PSE & G",
        "PSEA",
        "PSS WORLD, INC.",
        "PTC",
        "PUBLIC EMPLOYEES FEDERATION",
        "PUBLIC STORAGE",
        "PUBLICIS GROUPE",
        "PUBLISHERS CLEARING HOUSE",
        "PULASKI COUNTY SPECIAL SCHOOL DIST",
        "PUMA NORTH AMERICA",
        "PURDUE UNIVERSITY",
        "PUTNAM INVESTMENTS",
        "PVH CORP.",
        "QEP RESOURCES, INC.",
        "QIAGEN SCIENCES, INC.",
        "QUAD GRAPHICS",
        "QUALITY SYSTEMS, INC",
        "QUANTUM CORPORATION",
        "QUEST DIAGNOSTICS",
        "QUESTAR CORPORATION",
        "QUESTCO, INC.",
        "QUICKEN LOANS",
        "QUICKWAY CARRIERS",
        "QUINTILES TRANSNATIONAL CORPORATION",
        "R.I.T",
        "RIT",
        "RABOBANK INTERNATIONAL",
        "RADISYS CORPORATION",
        "RANCHO SANTIAGO COMMUNITY COLLEGE",
        "RANDOLPH COUNTY BOARD OF EDUCATION",
        "RANDSTAD PROFESSIONALS US, LP",
        "RARITAN BAY MEDICAL CENTER",
        "RAYTHEON",
        "RBC USA HOLDCO CORPORATION",
        "RBS CITIZENS, NA",
        "RCM TECHNOLOGIES",
        "RCN CORPORATION",
        "REA MAGNET WIRE COMPANY INC.",
        "REA MAGNET WIRE COMPANY INC.",
        "READER'S DIGEST",
        "REAL ESTATE ADVISOR DEFENSE, INC.",
        "RECALL-AMERICAS",
        "RECEIVABLE MANAGEMENT SERVICES CORP",
        "RECKITT BENCKISER",
        "RECORDING FOR THE BLIND & DYSLEXIC",
        "RED BULL NORTH AMERICA, INC.",
        "RED HAT, INC.",
        "REDBACK NETWORKS",
        "REDDY ICE",
        "REED ELSEVIER",
        "REEDY CREEK IMPROVEMENT DISTRICT",
        "REGENERON PHARMACEUTICALS",
        "REGIONAL MANAGEMENT CORP",
        "REICHHOLD",
        "RELIANT MEDICAL GROUP",
        "REMEC DEFENSE AND SPACE, INC.",
        "REMINGTON ARMS COMPANY",
        "RENAISSANCE",
        "REPLACEMENTS, LTC",
        "RES-CARE",
        "RESEARCH FOUNDATION FOR MENTAL HYG",
        "RESOURCES FOR HUMAN DEVELOPMENT",
        "RESOURCES GLOBAL PROFESSIONALS",
        "RESTORATION HARDWARE",
        "RESURGENS ORTHOPAEDICS",
        "RETIRED & DISABLED POLICE OF AMERIC",
        "RETIRED INDIANA PUBLIC EMPLOYEES",
        "RETIRED PUBLIC EMPLOYEES OF NEVADA",
        "REXEL HOLDINGS USA",
        "REYES HOLDINGS L.L.C.",
        "REYNOLDS & REYNOLDS",
        "REYNOLDS AMERICAN INC",
        "RHF INVESTMENTS",
        "RHODE ISLAND ASSOC OF SCHOOL PRINCI",
        "RHODE ISLAND COUNCIL 94 AFSCME",
        "RIA GROUP",
        "RICH PRODUCTS CORPORATION",
        "RICHFIELD HOSPITALITY,INC",
        "RICOH CORPORATION",
        "RIDGEWOOD BOARD OF EDUCATION",
        "RIDGEWOOD SAVINGS BANK",
        "RITE AID",
        "RIVERVIEW SCHOOL DISTRICT",
        "RJF INTERNATIONAL CORPORATION",
        "ROAD RUNNER CLUB OF AMERICA",
        "ROANOKE-CHOWAN COMMUNITY COLLEGE",
        "ROBBINS MANUFACTURING, INC",
        "ROBERT MORRIS UNIVERSITY",
        "ROCKFORD PRODUCTS CORPORATION",
        "ROCKINGHAM COMMUNITY COLLEGE",
        "ROCKINGHAM COUNTY SCHOOLS",
        "ROCKWELL AUTOMATION",
        "ROCKWELL COLLINS",
        "ROCKWELL SCIENTIFIC COMPANY",
        "ROCKY MOUNTAIN ORTHODONTICS",
        "ROHM & HAAS ELECTRONIC MATERIALS",
        "ROLLINS INC.",
        "ROOMS TO GO",
        "ROTHMAN INSTITUTE",
        "ROUNDY'S SUPERMARKETS, INC.",
        "ROVI CORPORATION",
        "ROWAN COMPANIES INC",
        "RR DONNELLEY",
        "RSU #19",
        "RTN FEDERAL CREDIT UNION",
        "RUBY TUESDAY",
        "RURAL/METRO CORPORATION",
        "RUSH COPLEY MEDICAL CENTER",
        "RUSH UNIVERSITY MEDICAL CENTER",
        "RW BAIRD",
        "S&S ARNOT OGDEN TERMINATED",
        "S&S BANKBOSTON TERMED",
        "S&S DYNAMICS RESEARCH TERM",
        "S&S FLEET TERM",
        "S&S HITCHNER TERMINATED",
        "S&S ROADWAY TERMED",
        "S. ABRAHAM & SONS",
        "S ABRAHAM & SONS",
        "SABINE STATE BANK & TRUST CO.",
        "SAFETY KLEEN",
        "SAFEWAY, INC",
        "SAGE",
        "SAGER ELECTRONICS",
        "SAINT CLARES HEALTH SYSTEM",
        "SAKS FIFTH AVENUE",
        "SALINE MEMORIAL HOSPITAL",
        "SALT LAKE CITY",
        "SALT LAKE COMMUNITY COLLEGE ALUMNI",
        "SALT LAKE COUNTY",
        "SALT LAKE REGIONAL",
        "SALT RIVER PROJECT",
        "SAMARITAN HEALTHCARE",
        "SAMARITAN MEDICAL CENTER",
        "SAMSUNG AUSTIN SEMICONDUCTOR",
        "SAMSUNG INFORMATION SYSTEMS AMERICA",
        "SAMSUNG TELECOMMUNICATIONS",
        "SAMTEC",
        "SAN ANTONIO FEDERAL CREDIT UNION",
        "SAN ANTONIO INDEPENDENT SCHOOL",
        "SAN DIEGO STATE UNIV. RESEARCH",
        "SAN LEANDRO UNIFIED SCHOOL DISTRICT",
        "SANOFI",
        "SANTANDER HOLDINGS USA, INC",
        "SANYO NORTH AMERICA CORPORATION",
        "SAP AMERICA",
        "SAPERS COM ENERGY TERMINATED",
        "SAPERS STAPLES TERMINATED",
        "SAPIENT",
        "SARAH BUSH",
        "SARAH LAWRENCE COLLEGE",
        "SAS INSTITUTE",
        "SASAKI ASSOCIATES, INC.",
        "SCANSOFT",
        "SCF ARIZONA",
        "SCHINDLER ELEVATOR CORPORATION",
        "SCHLUMBERGER",
        "SCHNEIDER NATIONAL",
        "SCHOLASTIC, INC",
        "SCHOOL DIST KETTLE MORAINE-RETIREES",
        "SCHOOL SPECIALTY, INC.",
        "SCHWAN'S SHARED SERVICES, LLC",
        "SCI COMPANIES",
        "SCITOR CORPORATION",
        "SCOTTISH RITE SOUTHERN JURISDICTION",
        "SCOTT-MCRAE AUTOMOTIVE",
        "SCOTTSDALE UNIFIED SCHOOL DISTRICT",
        "SEA RAY BOATS",
        "SEABURY & SMITH * EMPLOYEES",
        "SEACHANGE INTERNATIONAL",
        "SEAGATE US, LLC",
        "SEARLES VALLEY MINERALS",
        "SEARS HOLDINGS CORPORATION",
        "SEBA",
        "SECOND AMENDMENT FOUNDATION INC.",
        "SEDGWICK CMS",
        "SEI INVESTMENTS",
        "SEIKO CORPORATION OF AMERICA",
        "SELECT PORTFOLIO SERVICING",
        "SENECA FOODS CORP",
        "SENSIENT TECHNOLOGIES",
        "SEPRACOR INC.",
        "SERCO",
        "SERENA SOFTWARE",
        "SERIGRAPH, INC.",
        "SETON HEALTHCARE NETWORK",
        "SEVEN WORLDWIDE INC.",
        "SEVERN TRENT SERVICES",
        "SFM MUTUAL INSURANCE COMPANY",
        "SGS NORTH AMERICA",
        "SHAMROCK FOODS, INC",
        "SHANNON CLINIC",
        "SHANNON MEDICAL CENTER",
        "SHARP",
        "SHARP HEALTHCARE",
        "SHEET METAL WORKERS LOCAL UNION 38",
        "SHELL OIL",
        "SHISEIDO COSMETICS AMERICA LTD",
        "SIEMENS CORPORATION",
        "SIGNATURE PAYROLL SERVICES, LLC.",
        "SILGAN PLASTICS CORPORATION",
        "SIMMONS FOOD",
        "SIMPLY FASHION STORES",
        "SINAI HOSPITAL OF BALTIMORE",
        "SIPEX CORPORATION",
        "SIRVA INC",
        "SITA",
        "SIX FLAGS ENTERTAINMENT CORPORATION",
        "SKILLS OF CENTRAL PA",
        "SKYONE FEDERAL CREDIT UNION",
        "SLM CORPORATION",
        "SMARTHEALTH AND AFFILIATES",
        "SMILE BRANDS INC",
        "SMITH INTERNATIONAL INC",
        "SMITHGROUP INC",
        "SNAP-ON INC EMPLOYEES & RETIREES",
        "SOCIETY FOR HUMAN RESOURCE MANAGEME",
        "SOFTWARE AG",
        "SOLAE, LLC",
        "SOLO CUP COMPANY",
        "SOMERSET MEDICAL CENTER",
        "SONIC AUTOMOTIVE",
        "SONY COMPUTER ENTERTAINMENT AMERICA",
        "SONY ELECTRONICS INC",
        "SORIN GROUP",
        "SOS STAFFING",
        "SOUND CREDIT UNION",
        "SOUTH CAROLINA FEDERAL CREDIT UNION",
        "SOUTH COUNTY HOSPITAL INC",
        "SOUTH PIEDMONT COMMUNITY COLLEGE",
        "SOUTH WHIDBEY SCHOOL DISTRICT",
        "SOUTHEASTERN CONTAINER, INC.",
        "SOUTHERN COMPANY",
        "SOUTHERN MANAGEMENT",
        "SOUTHERN NEW HAMPSHIRE HEALTH",
        "SOUTHERN RESEARCH INSTITUTE",
        "SOUTHERN/NORTHERN NEVADA GOLF ASSOC",
        "SOUTHWEST AIRLINES",
        "SOUTHWEST GENERAL HEALTH CENTER",
        "SOUTHWESTERN COMMUNITYY COLLEGE",
        "SOUTHWIRE COMPANY",
        "SPACE SYSTEMS LORAL LLC",
        "SPACENET, INC.",
        "SPARROW HEALTH SYSTEM",
        "SPARTA, INC.",
        "SPARTAN LIGHT METAL PRODUCTS, INC.",
        "SPAULDING REHABILITATION HOSPITAL",
        "SPECIALTY CARE",
        "SPECTRUM HEALTH - KENT COMMUNITY",
        "SPOKANE PUBLIC SCHOOLS 81",
        "SPORTS AUTHORITY",
        "SPRINT",
        "SPX CORPORATION",
        "SQUIRE, SANDERS & DEMPSEY",
        "SRA INTERNATIONAL",
        "SSA GLOBAL TECHNOLOGIES, INC.",
        "ST MICROELECTRONICS",
        "ST. ANTHONY'S MEDICAL CENTER",
        "ST. BENEDICTS FAMILY MEDICAL CENTER",
        "ST. CLOUD MEDICAL GROUP",
        "ST. CROIX REGIONAL MEDICAL CENTER",
        "ST. FRANCIS HOSP + MED CTR OF CT",
        "ST. JAMES MERCY HOSPITAL",
        "ST. JOHN HEALTH SYSTEM",
        "ST. JOHNS UNIVERSITY - MN",
        "ST. JOSEPH HC CARONDELET-KANSAS CITY",
        "ST. JOSEPH HEALTH SERV OF RHODE I",
        "ST. JOSEPHS/CANDLER HEALTH SYSTEM",
        "ST. LUKE'S EPISCOPAL HEALTH SYS",
        "ST. LUKE'S EPISCOPAL PRESB HOSPITAL",
        "ST. LUKE'S HEALTH SYSTEM",
        "ST. LUKE'S HOSPITAL",
        "ST. MARY'S HEALTH SYSTEM",
        "ST. MARY'S HOSPITAL OF CT",
        "ST. PETERS COLLEGE",
        "ST. THOMAS AQUINAS COLLEGE",
        "ST. VINCENT HOSPITALS & HEALTH SERV",
        "STANADYNE CORPORATION",
        "STANDARD CHARTERED BANK",
        "STANDARD ELECTRIC COMPANY",
        "STANDARD REGISTER",
        "STANFORD HOSPITALS & CLINICS",
        "STANLEY BLACK & DECKER",
        "STANLEY STEEMER INTERNATIONAL INC.",
        "STAPLES-PART TIMERS",
        "STAR GAS PARTNERS",
        "STATE BAR OF GEORGIA",
        "STATE BAR OF WISCONSIN",
        "STATE EMPLOYEES ASSOCIATION OF NC",
        "STATE OF ALABAMA",
        "STATE OF ARIZONA",
        "STATE OF CONNECTICUT",
        "STATE OF FLORIDA - DEPT OF MGMT SVC",
        "STATE OF TEXAS",
        "STATE OF UTAH",
        "STATE STREET BANK AND TRUST COMPANY",
        "STATION CASINOS, INC.",
        "STEFANINI TECH TEAM",
        "STEMILT GROWERS, LLC",
        "STERICYCLE",
        "STERLING MEDICAL CENTER",
        "STEVENSON UNIVERSITY",
        "STEWARD HEALTH CARE SYSTEMS, LLC.",
        "STICKLEY L&JG, INC.",
        "STIFEL NICOLAUS & COMPANY INC",
        "STORMONT-VAIL HEALTHCARE",
        "STRATEGIC OUTSOURCING INC",
        "STRATUS TECHNOLOGIES, INC.",
        "STREAM INTERNATIONAL, INC.",
        "STRUCTURE TONE INCORPORATED",
        "SUBARU OF INDIANA AUTOMOTIVE, INC.",
        "SUB-HUB",
        "SUBURBAN PROPANE",
        "SULLIVAN UNIVERSITY SYSTEM",
        "SUN CHEMICAL CORPORATION",
        "SUNCAST CORPORATION",
        "SUNDT CONSTRUCTION",
        "SUNNEN PRODUCTS COMPANY",
        "SUNRISE COLONY LP",
        "SUNRISE MEDICAL INC.",
        "SUNS LEGACY PARTNERS, LLC.",
        "SUPERIOR ESSEX",
        "SUPERIOR PRINTING INC. COMPANY",
        "SUPERMEDIA LLC",
        "SUPERVALU",
        "SUPREME COUNCIL, AASR",
        "SURGE RESOURCES",
        "SUSAN B. ALLEN MEMORIAL HOSPITAL",
        "SUSQUEHANNA BANCSHARES, INC.",
        "SUSQUEHANNA INTERNATIONAL GRP",
        "SUTTER HEALTH",
        "SWAROVSKI NORTH AMERICA LIMITED",
        "SWEDISH AMERICAN HEALTH SYSTEM",
        "SWIFT TRANSPORTATION COMPANY",
        "SWIRE COCA-COLA, USA",
        "SYCUAN",
        "SYMANTEC CORPORATION",
        "SYNIVERSE TECHNOLOGIES",
        "SYNOPSYS",
        "SYNTHES USA",
        "SYRACUSE UNIVERSITY",
        "SYSCO CORPORATION",
        "SYSTEMS & ELECTRONICS, INC.",
        "T. ROWE PRICE",
        "T ROWE PRICE",
        "TACO, INC",
        "TACOMA NEWS TRIBUNE",
        "TAGHLEEF INDUSTRIES",
        "TALLAHASSEE MEMORIAL REG. MEDICAL",
        "TANG GROUP",
        "TANGOE",
        "TANNER MEDICAL CENTER, INC.",
        "TARGET",
        "TARGET CW",
        "TASC, INC.",
        "TCS AMERICA",
        "TDK CORPORATION",
        "TE CONNECTIVITY",
        "TEACHERS CREDIT UNION",
        "TEAMSTERS LOCAL 25",
        "TECH DATA CORPORATION",
        "TECHNICOLOR",
        "TECK COMINCO AMERICAN",
        "TEICHERT, INC",
        "TEKNION LLC",
        "TELECT INC",
        "TELEPHONE AND DATA SYSTEMS",
        "TELEPHONE WORKERS CREDIT UNION",
        "TEMPEL STEEL",
        "TEMPORARY ACCOUNT",
        "TEMPUR-PEDIC INTERNATIONAL",
        "TENNANT COMPANY",
        "TENNECO AUTOMOTIVE INC.",
        "TENNESSEE DENTAL ASSOCIATION",
        "TENNESSEE MEDICAL ASSOCIATION",
        "TERADATA CORPORATION",
        "TERADYNE INC.",
        "TERRACON INC.",
        "TERUMO BCT, INC.",
        "THE FINISH LINE INC",
        "THE FRIEDKIN COMPANIES",
        "THE GREAT ATLANTIC & PACIFIC TEA CO",
        "THE GUNLOCKE COMPANY",
        "THE HAVI GROUP",
        "THE HOME DEPOT",
        "THE HOSPITAL OF CENTRAL CONNECTICUT",
        "THE J. PAUL GETTY TRUST",
        "THE JACKSON LABORATORY",
        "THE JOHNS HOPKINS HEALTH SYSTEM",
        "THE KROGER CO.",
        "THE MATLEN SILVER GROUP",
        "THE MENTOR NETWORK",
        "THE METHODIST HOSPITAL SYSTEM",
        "THE NATIONAL AFSCME",
        "THE NATIONAL GRANGE",
        "THE NEBRASKA MEDICAL CENTER",
        "THE NEW YORK FOUNDLING HOSPITAL",
        "THE NIELSEN COMPANY",
        "THE ORDER OF UNITED COMMERCIAL TRAV",
        "THE PACIFIC INSTITUTE",
        "THE PEIR GROUP, LLC",
        "THE PENN COMPANIES",
        "THE ROBERT PLAN CORPORATION",
        "THE SALVATION ARMY EASTERN TERRITOR",
        "THE SALVATION ARMY WESTERN TERRITOR",
        "THE SAN DIEGO UNION-TRIBUNE LLC",
        "THE SHEVELL GROUP",
        "THE ST. PAUL COMPANIES, INC",
        "THE SUTHERLAND GRP., LTD.",
        "THE TEXAS HOSPITAL ASSOCIATION",
        "THE TIRE RACK, INC.",
        "THE UNITED GROUP",
        "THE UNIVERSITY OF CHICAGO MEDICINE",
        "THE UNIVERSITY OF KANSAS HOSPITAL",
        "THE VENETIAN CASINO RESORT",
        "THE WESTERN UNION COMPANY",
        "THE WESTMINSTER SCHOOLS",
        "THE WOLF ORGANIZATION INC.",
        "THE YANKEE CANDLE COMPANY",
        "THERMO FISHER SCIENTIFIC",
        "THOMASVILLE CITY SCHOOLS",
        "THOMPSONHEALTH",
        "THOMSON REUTERS",
        "THRESHOLDS, INC",
        "THRUPOINT, INC.",
        "THUNDERBIRD SCHOOL OF GLOBAL MGMT",
        "TIBCO SOFTWARE INC",
        "TIDEWELL HOSPICE & PALLATIVE CARE",
        "TIME WARNER CABLE LLC",
        "TIMKEN COMPANY",
        "TISHMAN HOTEL & REALTY",
        "TIVO INC.",
        "TJX COMPANIES",
        "TMC HEALTHCARE",
        "T-MOBILE",
        "TOLEDO BOARD OF EDUCATION",
        "TOLL BROTHERS, INC.",
        "TOLTZ, KING, DUVALL, ANDERSON AND A",
        "TORAY PLASTICS",
        "TORCHMARK CORPORATION",
        "TORY BURCH",
        "TOWN OF SHREWSBURY",
        "TOWNE PROPERTIES ASSET MGT. CO.",
        "TOYOTA BOSHOKU",
        "TOYOTA MOTOR MFG NORTH AMERICA",
        "TOYOTA MOTOR SALES",
        "TRAILER BRIDGE, INC.",
        "TRANS UNION",
        "TRANSDIGM",
        "TRANSIT FEDERAL CREDIT UNION 1181",
        "TRANSIT MIX CONCRETE CORPORATION",
        "TRANS-LUX CORPORATION",
        "TRANSPLACE INC.",
        "TRANSPORT WORKERS UNION LOCAL 234",
        "TRAVEL LEADERS GROUP, LLC",
        "TRAVELPORT INC.",
        "TRC ENVIRONMENTAL CORPORATION",
        "TREASURE ISLAND, LLC.",
        "TREASURY WINE ESTATES AMERICAS CO",
        "TRIANGLE AUTO CENTER INC",
        "TRIBUNE COMPANY",
        "TRI-CITY MEDICAL CENTER",
        "TRILOGY MANAGEMENT SERVICES, LLC",
        "TRINET",
        "TRINITY HEALTH SYSTEMS",
        "TRIPP LITE",
        "TRI-STATE MOTOR TRANSIT",
        "TRIZETTO CORPORATION A&H",
        "TROPICANA LAS VEGAS",
        "TRUMAN MEDICAL CENTER",
        "TRUMP ENTERTAINMENT RESORTS",
        "TS TECH HOLDING COMPANY",
        "TUALATIN VALLEY FIRE",
        "TUFTS MEDICAL CENTER",
        "TUFTS UNIVERSITY",
        "TULLYS COFFEE",
        "TURNER BROADCASTING SYSTEM",
        "TWIN CITIES ORTHOPEDIC SURGEONS",
        "TWU LOCAL 100 NYC TRANSIT",
        "TYCO INTERNATIONAL - A&H",
        "TYSON FOODS",
        "U.S. HEALTHWORKS HOLDING COMPANY",
        "U.S. VENTURE, INC.",
        "UAW FORD",
        "UBM, LLC",
        "UC HEALTH",
        "UCB INC.",
        "UCHEALTH (COLORADO)",
        "UCHICAGO ARGONNE, LLC, PLAN SPONSOR",
        "UFCW LOCAL 227",
        "UFCW8",
        "UGL SERVICES",
        "U-HAUL INTERNATIONAL INC.",
        "ULTA SALON COSMETICS & FRAGRANCE",
        "UNC HEALTHCARE",
        "UNI SELECT USA",
        "UNIFIED POLICE DEPARTMENT",
        "UNIFORMS TO YOU & CO.",
        "UNILEVER",
        "UNION BANK OF SWITZERLAND",
        "UNION BOARD OF EDUCATION",
        "UNION PUBLIC SCHOOLS",
        "UNISOURCE ENERGY CORPORATION",
        "UNISOURCE WORLDWIDE",
        "UNITED HEALTH SERVICES",
        "UNITED HEALTHCARE CORPORATION",
        "UNITED HOSPITAL SYSTEM INC",
        "UNITED MEMORIAL MEDICAL CENTER",
        "UNITED NATIONS",
        "UNITED RENTALS",
        "UNITED SPACE ALLIANCE",
        "UNITED STATES BOWLING CONGRESS",
        "UNITED STATES COLD STORAGE",
        "UNITED STATES INFRASTRUCTURE CORP",
        "UNITED STATES PARACHUTE ASSOCIATION",
        "UNITED STATES POWER SQUADRONS",
        "UNITED STATIONERS INC.",
        "UNITED SUPERMARKETS",
        "UNITED TECHNOLOGIES",
        "UNITED WATER",
        "UNIV. OF N. CAROLINA GREENSBORO",
        "UNIVERA HEALTHCARE OF WESTERN NY",
        "UNIVERSAL FOREST PRODUCTS",
        "UNIVERSAL HEALTH SERVICES",
        "UNIVERSAL HOSPITAL SERVICES",
        "UNIVERSAL LABORATORY",
        "UNIVERSAL TECHNICAL INSTITUTE",
        "UNIVERSAL TECHNICAL INSTITUTE ALUMN",
        "UNIVERSITY CREDIT UNION",
        "UNIVERSITY HEALTH ASSOCIATES",
        "UNIVERSITY HOSPITALS HEALTH SYSTEM",
        "UNIVERSITY OF ALABAMA HEALTH",
        "UNIVERSITY OF BUFFALO FOUNDATION",
        "UNIVERSITY OF KENTUCKY",
        "UNIVERSITY OF MAINE SYSTEM",
        "UNIVERSITY OF MASSACHUSETTS",
        "UNIVERSITY OF MD MED SYST",
        "UNIVERSITY OF PHOENIX INC",
        "UNIVERSITY OF ROCHESTER",
        "UNIVERSITY OF UTAH",
        "UNIVERSITY OF UTAH HOSP & CLINICS",
        "UNIVISION COMMUNICATIONS",
        "UPMC HEALTH",
        "UPS",
        "URS CORPORATION",
        "US AIRWAYS",
        "US LBM HOLDINGS, LLC",
        "US MARINE",
        "US STEEL CORP",
        "USA MOBILITY",
        "USA TRIATHLON",
        "USBA INC.",
        "USBA INC.",
        "USBA INC.",
        "USBA INC.",
        "USBA INC.",
        "USBA INC.",
        "UT MEDICAL GROUP",
        "UTAH STATE UNIV RESEARCH FOUNDATION",
        "UTAH STATE UNIVERSITY - A&H",
        "UTAH VALLEY UNIVERSITY",
        "UW PHYSICIAN NETWORK",
        "VAIL RESORTS MANAGEMENT COMPANY",
        "VAL VERDE REGIONAL MEDICAL CENTER",
        "VALASSIS COMMUNICATIONS",
        "VALEO SYLVANIA, LLC",
        "VALERO ENERGY CORPORATION",
        "VALLEY BAPTIST MEDICAL CENTER",
        "VALLEY MEDICAL CENTER",
        "VANCE COUNTY SCHOOLS",
        "VANDERBILT UNIVERSITY",
        "VANGUARD GROUP",
        "VANGUARD HEALTH SYSTEMS INC.",
        "VANTAGE ONCOLOGY",
        "VARIAN MEDICAL SYSTEMS",
        "VB SMART SOLUTIONS - SBC",
        "VCU HEALTH SYSTEM",
        "VECTREN CORP.",
        "VELCRO USA INC.",
        "VENTANA MEDICAL SYSTEMS",
        "VEOLIA TRANSPORTATION",
        "VERIO",
        "VERISIGN, INC",
        "VERIZON",
        "VERTAFORE, INC.",
        "VERTEX GROUP",
        "VERTIS COMMUNICATIONS",
        "VESCOM CORPORATION",
        "VESUVIUS USA CORPORATION",
        "VF CORPORATION",
        "VIA TECHNOLOGY",
        "VIAD",
        "VIASAT, INC.",
        "VICTAULIC COMPANY",
        "VIRGINA HOSPITAL CENTER",
        "VISA",
        "VISANT",
        "VISION SERVICE PLAN",
        "VISIONS FEDERAL CREDIT UNION",
        "VISTEON",
        "VMWARE, INC.",
        "VNA OF RHODE ISLAND",
        "VOICE MEDIA GROUP, INC.",
        "VOLKSWAGEN GROUP OF AMERICA",
        "VUTEQ CORPORATION",
        "VWR INTERNATIONAL INC",
        "W. W. GRAINGER",
        "W.E. AUBUCHON",
        "W.R. BONSAL COMPANY",
        "WACHUSETT REGIONAL SCHOOL DISTRICT",
        "WAKE FOREST UNIVERSITY",
        "WAKEFERN CORPORATE",
        "WALKER & DUNLOP, LLC",
        "WALTER ENERGY, INC",
        "WARD TRUCKING",
        "WARNACO GROUP, INC",
        "WARNER MUSIC GROUP",
        "WASHINGTON MANUFACTURERS COUNCIL",
        "WASHINGTON REGIONAL MEDICAL SYSTEM",
        "WASHINGTON STATE PTA",
        "WATERWORKS, INC.",
        "WAYNE MEMORIAL HOSPITAL",
        "WAYNESBORO HOSPITAL",
        "WB MASON",
        "WEATHERFORD INTERNATIONAL",
        "WEBASTO ROOF SYSTEMS, INC",
        "WEBER STATE UNIVERSITY",
        "WEBMD (A&H)",
        "WEBSTER BANK",
        "WEEKS MARINE, INC",
        "WELLINGTON MANAGEMENT",
        "WELLSPAN HEALTH",
        "WEST MARINE PRODUCTS",
        "WEST VIRGINIA AUTO & TRUCK DEALERS",
        "WEST VIRGINIA MANUFACTURERS ASSOC.",
        "WESTAR ENERGY",
        "WESTCHESTER COMMUNITY COLLEGE ALUMN",
        "WESTERLY HOSPITAL",
        "WESTERN CONNECTICUT HEALTH NETWORK",
        "WESTERN DENTAL SERVICES, INC.",
        "WESTINGHOUSE ELECTRIC",
        "WESTINGHOUSE LIGHTING CORPORATION",
        "WESTLAKE HARDWARE INC.",
        "WESTMINSTER COLLEGE",
        "WESTON SOLUTIONS",
        "WICHITA CLINIC",
        "WIEDEN & KENNEDY",
        "WILLIAM JEWELL COLLEGE",
        "WILLIAMS LEA, INC.",
        "WILLIAMS SCOTSMAN INC.",
        "WILLIS NORTH AMERICA INC.",
        "WILLOW VALLEY RETIREMENT",
        "WILSON INTERNATIONAL, INC.",
        "WILSON TECHNICAL COMMUNITY COLLEGE",
        "WILTON BRANDS LLC",
        "WINCO FOODS, INC",
        "WINDSTREAM COMMUNICATIONS",
        "WINGATE HEALTHCARE",
        "WINN-DIXIE STORES INC",
        "WINSTON & STRAWN LLP - A&H",
        "WINTHROP UNIVERSITY HOSPITAL",
        "WIPRO LTD",
        "WMS INDUSTRIES, INC",
        "WOLF CREEK NUCLEAR OPER CORP-RETIRE",
        "WOLTERS KLUWER US CORP",
        "WOOD GROUP",
        "WOODBRIDGE TOWNSHIP  BOARD OF ED",
        "WOODMEN OF THE WORLD",
        "WOODRUFF SAWER & CO.",
        "WOODWARD, INC",
        "WORKERS COMPENSATION FUND",
        "WORLD KITCHEN",
        "WORLD TRAVEL HOLDINGS",
        "WORLD TRAVELERS OF AMERICA, INC.",
        "WORLDWIDE EQUIPMENT INC",
        "WPP GROUP",
        "WTAS, LLC",
        "WYLE - A&H",
        "WYNN RESORTS",
        "XCEL ENERGY",
        "XCEL FEDERAL CREDIT UNION",
        "XCEL HR",
        "XERIUM TECHNOLOGIES, INC.",
        "XEROX BUSINESS SERVICES, LLC",
        "XEROX CORPORATION",
        "XEROX-NASG",
        "XILINX INC",
        "XIUS BCGI",
        "XTRA CORPORATION",
        "XYLEM INC.",
        "YALE NEW HAVEN HEALTH SYSTEM",
        "YALE UNIVERSITY",
        "YAMAHA MOTOR CORPORATION, USA",
        "YASKAWA AMERICA, INC. - MOTOMAN ROB",
        "YASKAWA ELECTRIC AMERICA, INC.",
        "YAZAKI NORTH AMERICA, INC.",
        "YELLOW ROADWAY CORP., WORLDWIDE",
        "YESCO",
        "YM LLC USA",
        "YOAKUM COMMUNITY HOSPITAL",
        "YOGA ALLIANCE",
        "YOUNG ADULT INSTITUTE",
        "YOUNG AND RUBICAM BRANDS",
        "YWCA OF GREATER PITTSBURGH",
        "ZALE CORPORATION",
        "ZAPPOS.COM INC",
        "ZOCDOC",
        "ZOETIS, INC",
        "ZYGO CORPORATION",
        "ZYNGA GAME NETWORK INC.");
    var outp;
    var oldins;
    var posi = -1;
    var words = new Array();
    var input;
    var key;


    $(document).ready(function () {
        init();
        setWidth();
    });

    $(window).resize(function () {
        if (!$(".hidden-xs").is(":visible")) {
            setVisible();
        }
        setWidth();

    });
    function setVisible(visi) {
        var x = document.getElementById("shadow");
        var t = document.getElementsByClassName("comapny-name-search")[0];
        x.style.top = (findPosY(t) + 3) + "px";
        x.style.left = (findPosX(t) - 30) + "px";
        x.style.visibility = visi;
    }

    function setWidth() {
        var searchWidth = document.getElementById("companyName").getBoundingClientRect().width;
        document.getElementById("output").setAttribute("style", "width:" + searchWidth + "px");
    }

    function init() {

        if ($(".shadow").length != 0) {
            outp = document.getElementById("output");
            window.setInterval("lookAt()", 100);
            setVisible("visible");
            document.onkeydown = keygetter; //needed for Opera...
            document.onkeyup = keyHandler;
        }

    }

    function findPosX(obj) {
        var curleft = 0;
        if (obj.offsetParent) {
            while (obj.offsetParent) {
                curleft += obj.offsetLeft;
                obj = obj.offsetParent;
            }
        }
        else if (obj.x)
            curleft += obj.x;
        return curleft;
    }

    function findPosY(obj) {
        var curtop = 0;
        if (obj.offsetParent) {
            curtop += obj.offsetHeight;
            while (obj.offsetParent) {
                curtop += obj.offsetTop;
                obj = obj.offsetParent;
            }
        }
        else if (obj.y) {
            curtop += obj.y;
            curtop += obj.height;
        }
        return curtop;
    }

    function lookAt() {
        var ins = document.getElementsByClassName("comapny-name-search")[0].value;
        if (oldins == ins) return;
        else if (posi > -1);
        else if (ins.length > 0) {
            words = getWord(ins);
            if (words.length > 0) {
                clearOutput();
                for (var i = 0; i < words.length; ++i) addWord(words[i]);
                setVisible("visible");
                input = document.getElementsByClassName("comapny-name-search")[0].value;
            }
            else {
                setVisible("hidden");
                posi = -1;
            }
        }
        else {
            setVisible("hidden");
            posi = -1;
        }
        oldins = ins;
    }

    function addWord(word) {
        var sp = document.createElement("div");
        sp.appendChild(document.createTextNode(word));
        sp.onmouseover = mouseHandler;
        sp.onmouseout = mouseHandlerOut;
        sp.onclick = mouseClick;
        outp.appendChild(sp);
    }

    function clearOutput() {
        while (outp.hasChildNodes()) {
            noten = outp.firstChild;
            outp.removeChild(noten);
        }
        posi = -1;
    }

    function getWord(beginning) {
        var words = new Array();
        for (var i = 0; i < suggestions.length; ++i) {
            var j = -1;
            var correct = 1;
            while (correct == 1 && ++j < beginning.length) {
                if (suggestions[i].charAt(j) != beginning.charAt(j).toLowerCase()) {
                    if (suggestions[i].charAt(j) != beginning.charAt(j).toUpperCase())
                        correct = 0;
                }
            }
            if (correct == 1 && beginning.length > 1)
                words[words.length] = suggestions[i];
        }
        return words;
    }


    function setColor(_posi, _color, _forg) {
        outp.childNodes[_posi].style.background = _color;
        outp.childNodes[_posi].style.color = _forg;
    }

    function keygetter(event) {
        if (!event && window.event) event = window.event;
        if (event) key = event.keyCode;
        else key = event.which;
    }

    function keyHandler(event) {
        if (document.getElementById("shadow").style.visibility == "visible") {
            var textfield = document.getElementsByClassName("comapny-name-search")[0];
            if (key == 40) { //Key down
                //alert (words);
                if (words.length > 0 && posi < words.length - 1) {
                    if (posi >= 0) setColor(posi, "#fff", "#666666");
                    else input = textfield.value;
                    setColor(++posi, "#5e81bc", "white");
                    textfield.value = outp.childNodes[posi].firstChild.nodeValue;
                }
            }
            else if (key == 38) { //Key up
                if (words.length > 0 && posi >= 0) {
                    if (posi >= 1) {
                        setColor(posi, "#fff", "#666666");
                        setColor(--posi, "#5e81bc", "white");
                        textfield.value = outp.childNodes[posi].firstChild.nodeValue;
                    }
                    else {
                        setColor(posi, "#fff", "#666666");
                        textfield.value = input;
                        textfield.focus();
                        posi--;
                    }
                }
            } else if (key == 13) {
                document.getElementsByClassName("comapny-name-search")[0].value = outp.childNodes[posi].firstChild.nodeValue;
                setVisible("hidden");
                posi = -1;
            }
            else if (key == 27) { // Esc
                textfield.value = input;
                setVisible("hidden");
                posi = -1;
                oldins = input;
            }
            else if (key == 8) { // Backspace
                posi = -1;
                oldins = -1;
            }
        }
    }

    var mouseHandler = function () {
        for (var i = 0; i < words.length; ++i)
            setColor(i, "white", "#666666");

        this.style.background = "#5e81bc";
        this.style.color = "white";
        
    }

    var mouseHandlerOut = function () {
        this.style.background = "white";
        this.style.color = "#666666";

    }

    var mouseClick = function () {
        document.getElementsByClassName("comapny-name-search")[0].value = this.firstChild.nodeValue;
        setVisible("hidden");
        posi = -1;
        oldins = this.firstChild.nodeValue;


    }

    $('body').on('click touchstart tap', function (e) {
        var companySearchContainer = $("#output");


        if (!companySearchContainer.is(e.target) && companySearchContainer.has(e.target).length === 0 ) {
            setVisible("hidden");
        }

    });

}
/***** Blog Post Begins ***********************************************************/
// Hide/show popular blog post
$(".showPopular").click(function () {
	$(".showRecent").removeClass("blog-sidebar__header--selected");
	$(this).removeClass("blog-sidebar__header--deselected");
	$(this).addClass("blog-sidebar__header--selected");
	$(".showRecent").addClass("blog-sidebar__header--deselected");
	$(".blog-sidebar__content--recent").show();
	$(".blog-sidebar__content--popular").hide();
});

//Hide/show recent blog posts
$(".showRecent").click(function () {
	$(".showPopular").removeClass("blog-sidebar__header--selected");
	$(this).removeClass("blog-sidebar__header--deselected");
	$(this).addClass("blog-sidebar__header--selected");
	$(".showPopular").addClass("blog-sidebar__header--deselected");
	$(".blog-sidebar__content--recent").show();
	$(".blog-sidebar__content--popular").hide();

});

if ($(".bread-crumb span:last").text().length > 100) {
	$(".bread-crumb span:last").text($(".bread-crumb span:last").text().substring(0, 97) + "...");
}

$('video').click(function () {
	if (this.paused) {
		this.play();
	}
	else {
		this.pause();
	}
});

$('video').hover(function toggleControls() {
	if (this.hasAttribute("controls")) {
		this.removeAttribute("controls")
	} else {
		this.setAttribute("controls", "controls")
	}
});

$('.enlarge').click(function () {
	if ($(this).attr('src')) {
		$('#imgEnlarge').attr('src', $(this).attr('src'));
		$('#imgCaption').text($(this).attr('alt'));
	}
});

function blogCategoryMobileDesign() {
	if ($(".hidden-xs").is(":visible") == false) {
		$(".blog-sidebar").insertAfter(".mightAlsoLike");
	}
	else {
		if ($(".body").length != 0) {
			$(".blog-sidebar").insertAfter(".body");
		}
		if ($(".blog-article-list").length != 0) {
			$(".blog-sidebar").insertAfter(".blog-article-list");
		}
	}
}


/*
 // Conversion of video seconds to format
 function secondsToHms(d) {
 d = Number(d);
 var h = Math.floor(d / 3600);
 var m = Math.floor(d % 3600 / 60);
 var s = Math.floor(d % 3600 % 60);
 return ((h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s);
 }
 */
/***** Blog Post End ***********************************************************/

/**
 * Created by jfeng2 on 2/17/2016.
 */

$(document).ready(function () {
    positionOverlay();
});

$(window).resize(function(){
    positionOverlay();
});

function positionOverlay(){
    if ($('.opt-out__overlay').is(':visible')){
        $('body').css('padding-top','0');
    }
}

/*AEM Specific Funcitons*/
function subNavClassSwitch(){
	if($(".subnav-go-back").length > 0){
		if($(".subnav-go-back__menu").length == 0){
			$('.subnav-go-back__list__item__anchor').each(function(){
				var subNavLabel = $(this).find('.subnav-go-back__list__item__anchor__label');
				$(this).find('div').remove();
				$(this).append(subNavLabel);
			})
			$('.subnav-go-back__list__item__anchor__label').each(function(){
				$(this).addClass("subnav__list__item__anchor__label").removeClass("subnav-go-back__list__item__anchor__label");

			})
			$('.subnav-go-back__list__item__anchor').each(function(){
				$(this).addClass("subnav__list__item__anchor").removeClass("subnav-go-back__list__item__anchor");
			})
			$('.subnav-go-back__list__item').each(function(){
				$(this).addClass("subnav__list__item").removeClass("subnav-go-back__list__item");
			})
			$(".subnav-go-back__list").addClass('subnav__list').removeClass('subnav-go-back__list');
			$(".subnav-go-back").addClass("subnav").removeClass("subnav-go-back")
		}
		}
}
function productCardAEM(){
	$(".subcat-row").each(function () {


		var sel = $('script[type="text/javascript"]' , $(this));

		if(sel.length != 0){
			var numProdCards = $(this).find(".subcategory-product-card").length;
			var numImageCards = $(this).find(".subcategory-image-product-card").length;
			var  current =  numProdCards + numImageCards;

			// var cardToChange = $(':last-child()', $(this));
			// console.log(cardToChange);
			if(current == 3){
				if ($(window).width() >= 751) {
					$(this).children(2).last().prev().css("margin-right", "0px");
					// console.log("$(window).width() >= 767");
				}

				if ($(window).width() <= 750){
					$(this).children(2).last().prev().css("margin-right", "10px")
					//console.log($(window).width());
				}
			}
		}
	});
}

function largeProductCardAEM(){
	$(".large_product_module_wrapper").each(function () {


		var sel = $('script[type="text/javascript"]' , $(this));

		if(sel.length != 0){
			if ($(window).width() >= 751) {
				$(this).children(2).last().prev().css("margin-right", "0px");
			}
		}
	});
}

function quoteToolImageLink(){
	$('.form-focus').each(function(){
		$('[data-quoteToolLink]').parent().parent().parent().find(".form-control").addClass("smallerForm");
	});
};

$("#opinion_lab_link").click(function(){
	$("#oo_tab").trigger("click");
});

$(document).ready(function(){
	productCardAEM();
	largeProductCardAEM();
	quoteToolImageLink();
});

$(window).resize(function(){
	productCardAEM();
	largeProductCardAEM();
	quoteToolImageLink();
});

$(window).load(function(){

	productCardAEM();
	largeProductCardAEM();
	quoteToolImageLink();
});

$(document).ready(function(){
	subNavClassSwitch();
	if($(".cta_wrapper").length != 0 && $(".cta_wrapper").parent().parent().parent().find(".find_an_x_wrap:first").find(".cta_wrapper").siblings(".dental_vision_wrap").length == 0){
		$(".cta_wrapper").parent().parent().parent().find(".find_an_x_wrap:first").find(".cta_wrapper").css("width", "calc(100% - 100px)");
	}

});

$(window).resize(function(){
	if ($(window).width() < 751 && $(".cta_wrapper").length != 0 && $(".cta_wrapper").parent().parent().parent().find(".find_an_x_wrap:first").find(".cta_wrapper").siblings(".dental_vision_wrap").length == 0) {
		$(".cta_wrapper").parent().parent().parent().find(".find_an_x_wrap:first").find(".cta_wrapper").css("width", "calc(100% - 100px)");
	}
});

function getActionLink(el){
	return $(el).parent().data('actionLink').trim();
}

$(".login_open").click(function (e) {
	if(!$(".login_open").hasClass("linkOnly")){
		e.preventDefault();
	}
});

$(".contact-us__select").on("change", function(){
	var whichresults = $(".contact-us__select").val();
	$(".contact-us__results__wrapper").addClass('hidden');
	if( $(".contact-us__results__wrapper").hasClass(whichresults)){
		$("." + whichresults).removeClass("hidden");
	}
});
$('.js-share').click(function(e){
    e.preventDefault();
    $('.' + $(this).attr('data-target')).toggleClass("share__chat—social__open");
   // $(".arrow-left").toggleClass("hidden");

});
/**
 * Created by icunningham on 3/16/2016.
 */


/***** Product Card Module Begin ***************************************************/
// Expands the Product Card
$('.expand-open, .expand-close').click(function () {
    var expand = $(this).siblings('.expand-content');
    expand.slideToggle(function () {
        if (expand.attr("style") == "display: block;") {
            expand.addClass("visible-xs visible-sm visible-lg");
        } else {
            expand.removeClass("visible-xs visible-sm visible-lg");
        }
        expand.removeAttr("style");
    });
    expand.siblings('.expand-open').toggle();
    expand.siblings('.expand-close').toggle();
});

// Navigates to the FAQ Section on Page
$(".product-card .read-more").click(function (e) {
    e.preventDefault();
    var height = $(".global_header").height();
    $('html, body').animate({scrollTop: $(".faq_background").offset().top - height}, 500);
});

if ($('.product-card').length > 0) {
    $('.product-card p').filter(function (index) {
        return $(this).text().length === 0;
    })
        .css('margin-bottom', "0");
    $(".product-card .content").find("ul + .hidden-xs:last-child, span + .hidden-xs:last-child, p + .hidden-xs:last-child").prev().addClass("product-card__content-body--margin");
}


//Ensuring that margin is always 50px in desktop for either last product card
//or promo.
function addProperMarginToBottom() {
    if ($(".product-card").length > 0) {
        if ($(".promocard").length > 0) {
            $(".promocard").last().addClass("product-card__promo--margin-bottom");
        } else if ($(".skinny-promo-tile").length > 0) {
            $(".skinny-promo-tile").last().addClass("product-card__skinny-promo--margin");
        } else {
            $(".container .row .product-card").last().addClass("product-card--last-margin-bottom");
        }
    }
}

addProperMarginToBottom();
/***** Product Card Module End ************************************************************/


function productCardSetImage() {
    if ($(".product-card__img").length != 0) {
        if ($(".hidden-xs").is(":visible")) {

                $(".product-card__img").each(function () {
                    $(this).css('background-image', 'url(' + $(this).attr("data-backgroundDesktop-src") + ')');
                    $(this).css('background-size', 'cover');
                    $(this).css('background-position', 'center center');
                });

        } else{

                $(".product-card__img").each(function () {
                    $(this).css('background-image', 'url(' + $(this).attr("data-backgroundMobile-src") + ')');
                    $(this).css('background-size', 'cover');
                    $(this).css('background-position', 'center center');

                });

        }
    }
};

$(window).on("load",function(){
    productCardSetImage();
});
$(window).resize(function(){
    productCardSetImage();
});

$(document).ready(function(){
	removingPaddingContextualLinksContactForm();
	removingPaddingContextualLinksProductTiles();
	removingPaddingContextualLinksSmallCards();
	disclaimerPadding();
	removeSpacingFAQ();
	skinnyAndLargeSpacing();
	mainPromoAndSmallMediumCards();
	homePageUsSkinnyBannerSpacing();
});

$(window).resize(function(){
	removingPaddingContextualLinksContactForm();
	removingPaddingContextualLinksProductTiles();
	removingPaddingContextualLinksSmallCards();
	disclaimerPadding();
	removeSpacingFAQ();
	skinnyAndLargeSpacing();
	mainPromoAndSmallMediumCards();
});

function homePageUsSkinnyBannerSpacing(){
	var container = $(".skinny-promo-tile");
	if (container.length > 0 &&  $(".promocard ").length > 0) {
		container.addClass("skinny-promo-tile-homepage")
		container.parent().addClass("skinny-card")
	}
}

function spacingCtaAndDisclaimer(){
	 var container = $(".promocard ");
	if (container.length > 0) {
		$(".disclaimer").first().css("cssText", "padding-top: 0px !important; margin-top: 0px;");
	}
}

function removingPaddingContextualLinksContactForm() {

		var container = $(".container.contextual-links");
		if (container.length > 0) {
			var thisContainer = container.next("div");
			if (thisContainer.hasClass("contact-advisory")) {
				if (getViewport() != "mobile") {
					thisContainer.find(".container").css("cssText", "padding-top: 0px !important;");
					$(".form-card").css("cssText", "padding: 0px !important; margin-top: 0px;");

				}else{
					$(".form-card").css("cssText", "padding: 15px 0 0 0;");
				}
				var h = $('.contact-container--form-card').outerHeight();
				$(".contact-container--form-card form").click(function() {
					$('.contact-container--form-card .hidden-field').show();
				});
				$('.form-card__img__inner').css('height', h + 'px');
		}
	}
}

function removingPaddingContextualLinksProductTiles() {

		var container = $(".container.contextual-links");
		if (container.length > 0) {
			var thisContainer = container.parent().prev().find(".product-card-parsys");
			var prevContainer = container.prev("div");
			if (thisContainer.length > 0 && prevContainer.length == 0) {
				if (getViewport() != "mobile") {
					thisContainer.find(".tile-container").last().find(".wrapper").css("cssText", "margin-bottom: -10px !important;");

					thisContainer.find(".tile-container").last().find(".wrapper").find(".product-row__tile").each(function () {
						$(this).css("cssText", "margin-bottom: 0px !important;");
					});
					thisContainer.last("tile-container").find(".single-promo").css("cssText", "margin-bottom: 0px !important;");
					thisContainer.last("tile-container").find(".double-promo").css("cssText", "margin-bottom: 0px !important;");
					thisContainer.last("tile-container").find(".triple-promo").css("cssText", "margin-bottom: 0px !important;");
				}else{
					thisContainer.find(".tile-container").last().find(".wrapper").css("cssText", "margin-bottom: 10px !important;    padding: 0px 10px 10px;");
					thisContainer.find(".tile-container").find(".wrapper").find(".product-row__tile").each(function () {
						$(this).css("cssText", "margin-bottom: 10px");
					});
					thisContainer.find(".tile-container").first().find(".wrapper").find(".product-row__tile").last().css("cssText", "margin-bottom: 0px !important;");
					thisContainer.last("tile-container").find(".single-promo").css("cssText", "margin-bottom: initial;");
					thisContainer.last("tile-container").find(".double-promo").css("cssText", "margin-bottom: initial;");
					thisContainer.last("tile-container").find(".triple-promo").css("cssText", "margin-bottom: initial;");
				}
		}
	}
}

function removingPaddingContextualLinksSmallCards() {

		var container = $(".container.contextual-links");
		if (container.length > 0) {
			var thisContainer = container.prev("div");
			if (thisContainer.hasClass("small-product-container")) {
			if (getViewport() != "mobile") {
				thisContainer.find(".wrapper ").css("cssText", "margin-bottom: 0px !important;  margin-top: 20px;");
			}else{
				thisContainer.find(".wrapper ").css("cssText", "margin-bottom: 20px !important  margin-top: initial;");
			}
		}
	}
}

function disclaimerPadding(){
	var container = $(".disclaimer");
	if (container.length > 0 && $(".quote-office").length < 1) {
			if (getViewport() == "desktop") {
				container.css("cssText", "padding-top: 50px; padding-bottom: 20px;");
			}  else if (getViewport() == "tablet") {
				container.css("cssText", "padding-top: 40px; padding-bottom: 10px;");
			}else{
				container.css("cssText", "padding-top: 10px; padding-bottom: 10px;");
			}
	}

}

/*function contextualToolsDisclaimerPadding(){
	var container = $(".disclaimer");
	console.log(container.length > 0 && $(".quote-office").length < 1)
	if (container.length > 0 && $(".quote-office").length < 1) {
		if (getViewport() == "desktop") {
			container.css("cssText", "padding-top: 30px; padding-bottom: 30px;");
		}  else if (getViewport() == "tablet") {
			container.css("cssText", "padding-top: 30px; padding-bottom: 30px;");
		}else{
			container.css("cssText", "padding-top: 10px; padding-bottom: 10px;");
		}
	}

}*/

function removeSpacingFAQ(){
	var container = $(".container.contextual-links");
	if (container.length > 0) {
		var thisContainer = container.next("div");
		if (thisContainer.hasClass("faq")) {
			if (getViewport() == "desktop") {
				thisContainer.find(".container").first().css("cssText", "padding-top: 37px; padding-bottom: 40px;");
				container.find(".contextual-links-row").css("cssText", "padding-bottom: 0px;");
			}else if (getViewport() == "tablet"){
				thisContainer.find(".container").first().css("cssText", "padding-top: 37px; padding-bottom: 30px;");
				container.find(".contextual-links-row").css("cssText", "padding-bottom: 0px;");
			}else{
				container.find(".contextual-links-row").css("cssText", "padding-bottom: 20px;");
				thisContainer.find(".container").first().css("cssText", "padding-top: 0px; padding-bottom: 0px;");
			}
		}
	}

}

function skinnyAndLargeSpacing(){
	var skinnyContainer = $(".skinny-banner");
	var largeContainer  = $(".large-banner");
	if (skinnyContainer.length > 0) {
		var thisContainer = skinnyContainer.next("div");
		if (thisContainer.length == 0) {
			skinnyContainer.find(".skinny-promo-tile").css("cssText", "margin-bottom: 0px !important;");
			if (getViewport() == "desktop") {
				skinnyContainer.find(".row.wrapper").css("cssText", "padding-bottom: 17px !important;");
			}else if (getViewport() == "tablet") {
				skinnyContainer.find(".row.wrapper").css("cssText", "padding-bottom: 7px !important;");
			}else{
				skinnyContainer.find(".row.wrapper").css("cssText", "padding-bottom: 0px !important;");
			}
		}
	}
	if (largeContainer.length > 0) {
		var thisContainer = largeContainer.next("div");
		if (thisContainer.length == 0) {
			largeContainer.find(".skinny-promo-tile").css("cssText", "margin-bottom: 0px !important;");
			if (getViewport() == "desktop") {
				largeContainer.find(".row.wrapper").css("cssText", "padding-bottom: 17px !important;");
			}else if (getViewport() == "tablet") {
				largeContainer.find(".row.wrapper").css("cssText", "padding-bottom: 7px !important;");
			}else{
				skinnyContainer.find(".row.wrapper").css("cssText", "padding-bottom: 0px !important;");
			}
		}
	}
}


/*function mainDisclaimerMissing(){
	var container = $(".container.contextual-links");
	if (container.length > 0) {
		var thisContainer = container.next("div");
		if (thisContainer.length == 0) {
			if (getViewport() != "mobile") {
				$(".wrapper").find(".disclaimer").first().css("cssText", "margin-top: -52px;");
			}  else {
				$(".wrapper").find(".disclaimer").first().css("cssText", "margin-top: 0px;");
			}
		}
	}

}*/

function mainPromoAndSmallMediumCards(){
	var container = $(".promocard");
	if (container.length > 0 && $(".product-module").length > 0 ){
		container.css("margin-top" , "0px")
	}

}

$(document).ready(function(){
	emailInputSize();
});

$(window).resize(function(){
	emailInputSize();
});

function emailInputSize(){
	if (getViewport() != "mobile" && $(".email--unsubscribe__form-fields").length > 0) {
		var minusWidth = $(".email--unsubscribe__form-fields button")[0].getBoundingClientRect().width;
		var calcWidth = (minusWidth + 10).toFixed(2);
		$(".email--unsubscribe__form-fields input").css("width", "Calc(100% - " + calcWidth + "px" + ")");
	}else{
		$(".email--unsubscribe__form-fields input").css("width", "100%");
	}
}
$(".generic_content .expand_button").click(function () {
	$(this).parent(".generic_content").find(".wrapper-general").find(".unexpanded").slideToggle();
	$(this).find(".expand_button_open").toggleClass("hidden");
	$(this).find(".expand_button_close").toggleClass("hidden");
	if ($(".rate_table").length > 0) {
		resizeRateTable();
	}
});
/**
 * Created by icunningham on 8/9/2016.
 */
//
// Press Room Variables
var firstTimeRunNewsRoom = true;
var firstTimeRunNewsRoomChange = true;
var newsMonth;
var newsYear;
var newsTopic;
var newsConcatenator;
var totalMonths = [];
var totalYears = [];
var integerToMonthMapping = {};
var masterMonthArray = [];
var monthToIntegerMapping = {};
//Not sure where removeProtoObject came from
removeProtoObject = false;
var listYearChange = false;
var listTopicChange = false;


$(".divider--load-more__link").click(function (e) {
    e.preventDefault();
    totalYears = [];
    totalMonths = [];
    newsRoomServiceConstruction();
});


//when a new year is selected, the month dropdown should
//default to "All", the Topics dropdown should remain the
//same, and a new query should be fired.
$("#list_year").change(function () {
    firstTimeRunNewsRoomChange = true;
    $("#list_month").val(integerToMonthMapping["0"]);
    totalYears = [];
    totalMonths = [];
    listCount = 0;
    listYearChange = true;
    newsRoomServiceConstruction();
});

//When a new list topic is selected, the month and year
//dropdowns should reset to "All", and a new query should be
//fired
$("#list_topics").change(function () {
    firstTimeRunNewsRoomChange = true;
    listTopicChange = true;
    //The first value of the integerToMonthMapping will be
    //the same for the month and year dropdown
    $("#list_year").val(integerToMonthMapping["0"]);
    $("#list_month").val(integerToMonthMapping["0"]);
    totalYears = [];
    totalMonths = [];
    listCount = 0;
    newsRoomServiceConstruction();
});

$("#list_month").change(function() {
    newsRoomServiceConstruction();
});

//Local function implementation...to be deleted
//function newsRoomYearChange() {
//    //totalMonths.sort(function(a, b){return a - b});
//    totalMonths = unique(totalMonths);
//    totalMonths.sort(function(a,b) {
//        return masterMonthArray.indexOf(a) > masterMonthArray.indexOf(b);
//    });
//    var selectMonth = $('#list_month');
//    selectMonth.empty();
//    selectMonth.append('<option value="All" selected>All</option>');
//    var monthsList = $('.pressroom-months-list > div[class="month-item"]');
//    if($("#list_topics").prop('selectedIndex') === 0 && $('#list_year').prop('selectedIndex') === 0){
//        for(var i = 1; i <=12; i++){
//            var monthItem = $(monthsList[i]);
//            selectMonth.append('<option value="'+ monthItem.data('month-value') + '">'+monthItem.data('month-text')+'</option>');
//        }
//    }else{
//
//        for (var i in totalMonths) {
//            for(var j = 0; j<monthsList.length; j++) {
//                var monthItem = $(monthsList[j]);
//                if(monthItem.data('month-value') === totalMonths[i]){
//                    selectMonth.append('<option value="'+ monthItem.data('month-value') + '">'+monthItem.data('month-text')+'</option>');
//                    break;
//                }
//            }
//        }
//    }
//}

//AEM modified function from Diego
function newsRoomYearChange() {
    //totalMonths.sort(function(a, b){return a - b});
    totalMonths = unique(totalMonths);
    totalMonths.sort(function(a,b) {
        return masterMonthArray.indexOf(a) > masterMonthArray.indexOf(b);
    });
    var selectMonth = $('#list_month');
    selectMonth.empty();
    selectMonth.append('<option value="" selected>All</option>');
    var thisMonth, thisMonthValue;
    var monthsList = $('.pressroom-months-list > div[class="month-item"]');
    if($("#list_topics").prop('selectedIndex') === 0 && $('#list_year').prop('selectedIndex') === 0){
        for(var i =0; i < monthsList.length; i++) {
            var monthItem = $(monthsList[i]);
            selectMonth.append('<option value="'+ monthItem.data('month-value') + '">'+monthItem.data('month-text')+'</option>');
        }
    }else{
        for (var i in totalMonths) {
            for(var j = 0; j<monthsList.length; j++) {
                var monthItem = $(monthsList[j]);
                if(monthItem.data('month-value') === totalMonths[i]){
                    selectMonth.append('<option value="'+ monthItem.data('month-value') + '">'+monthItem.data('month-text')+'</option>');
                    break;
                }
            }
        }
    }
}

//Local function implementation...to be deleted
//function newsRoomTopicsChange(){
//    totalYears.sort(function(a, b){return a - b});
//    //totalMonths.sort(function(a, b){return a - b});
//    totalYears = unique(totalYears);
//    totalMonths = unique(totalMonths);
//    totalMonths.sort(function(a,b) {
//        return masterMonthArray.indexOf(a) > masterMonthArray.indexOf(b);
//    });
//    console.log("Total months after new sort" + totalMonths);
//    var selectYear = $('#list_year');
//    selectYear.empty();
//    selectYear.append('<option value="All" selected>All</option>');
//    var firstTime = true;
//    for(var i = (totalYears.length - 1); i >= 0; i--) {
//        selectYear.append('<option value="'+totalYears[i] +'" >'+totalYears[i]+'</option>');
//    }
//    firstTime = false;
//    var selectMonth = $('#list_month');
//    selectMonth.empty();
//    selectMonth.append('<option value="All" selected>All</option>');
//    var monthsList = $('.pressroom-months-list > div[class="month-item"]');
//    if($("#list_topics").prop('selectedIndex') === 0){
//        for(var i = 1; i <= 12; i++){
//            var monthItem = $(monthsList[i]);
//            selectMonth.append('<option value="'+ monthItem.data('month-value') + '">'+monthItem.data('month-text')+'</option>');
//        }
//    }else{
//        for (var i in totalMonths) {
//            for(var j = 0; j<monthsList.length; j++) {
//                var monthItem = $(monthsList[j]);
//                if(monthItem.data('month-value') === totalMonths[i]){
//                    selectMonth.append('<option value="'+ monthItem.data('month-value') + '">'+monthItem.data('month-text')+'</option>');
//                    break;
//                }
//            }
//        }
//    }
//
//}

//AEM modified function from Diego
function newsRoomTopicsChange(){
    totalYears.sort(function(a, b){return a - b});
    //totalMonths.sort(function(a, b){return a - b});
    totalYears = unique(totalYears);
    totalMonths = unique(totalMonths);
    totalMonths.sort(function(a,b) {
        return masterMonthArray.indexOf(a) > masterMonthArray.indexOf(b);
    });
    var selectYear = $('#list_year');
    selectYear.empty();
    selectYear.append('<option value="" selected>All</option>');
    var firstTime = true;
    for(var i = (totalYears.length - 1); i >= 0; i--) {
        selectYear.append('<option value="'+totalYears[i] +'" >'+totalYears[i]+'</option>');
    }
    firstTime = false;
    var selectMonth = $('#list_month');
    selectMonth.empty();
    selectMonth.append('<option value="" selected>All</option>');
    var monthsList = $('.pressroom-months-list > div[class="month-item"]');
    if($("#list_topics").prop('selectedIndex') === 0){
        for(var i =0; i < monthsList.length; i++) {
            var monthItem = $(monthsList[i]);
            selectMonth.append('<option value="'+ monthItem.data('month-value') + '">'+monthItem.data('month-text')+'</option>');
        }
    } else {

        for (var i in totalMonths) {
            for(var j = 0; j<monthsList.length; j++) {
                var monthItem = $(monthsList[j]);
                if(monthItem.data('month-value') === totalMonths[i]){
                    selectMonth.append('<option value="'+ monthItem.data('month-value') + '">'+monthItem.data('month-text')+'</option>');
                    break;
                }
            }
        }
    }
}

function newsRoomServiceCall(input, selectedMonth, newsTopicPicked) {
    resultsListHTML = "";
    var url = input;
    count = 0;
    console.log(input);
    $(".results_content").remove();
    /************LIVE News Room SERVICE***************/
    $.ajax({
    	url: url,
    	contentType: "application/json; charset=utf-8",
    	async: true,
    	dataType: 'json',
    	type: 'GET',
    	success: function (data) {

    		if (firstTimeRunNewsRoom === false || firstTimeRunNewsRoomChange === false) {
    			listCount += 6;
    		}

    		if (firstTimeRunNewsRoom === true) {
    			firstTimeRunNewsRoom = false;
    		}
    		if (firstTimeRunNewsRoomChange === true) {
    			firstTimeRunNewsRoomChange = false;
    		}

            var results = sortArticlesLive(data);

    		newsRoomResults = results.news;
    		if (newsRoomResults.length != 0) {
    			if (!$(".list__item--no-results").hasClass("hidden")) {
    				$(".list__item--no-results").addClass("hidden");
    			}
    			resultsListHTML += "<div class='results_content'>";
    			for (var i = 0; i < newsRoomResults.length; i++) {
    				totalYears.push(newsRoomResults[i].year);
    				totalMonths.push(newsRoomResults[i].month);
    				count++;
    				if (count <= listCount) {
    					resultsListHTML += "<div class=\"list__item\">";
    					resultsListHTML += "<span class=\"list__item__date\">" + newsRoomResults[i].publishedDate + "</span>";
    					resultsListHTML += "<a class=\"list__item__title\" href=\"" + newsRoomResults[i].link + "\">" + newsRoomResults[i].articleTitle + "</a>";
    					resultsListHTML += "</div>";
    				}
    			}
    			resultsListHTML += "</div>";
    			ServicesAPI.createPagination(count);
    			$(resultsListHTML).insertAfter($(".lists"));
    		} else {
    			$(".list__item--no-results").removeClass('hidden');
    		}
            if(listYearChange) {
                newsRoomYearChange();
                listYearChange = false;
            }
            if(listTopicChange) {
                newsRoomTopicsChange();
                listTopicChange = false;
            }
    		if (listCount >= newsRoomResults.length) {
    			$(".divider--load-more__link").hide();
    		} else {
    			$(".divider--load-more__link").show();
    		}

    	},
    	error: function (e) {
      $('.list__item--no-results').removeClass("hidden");
    		console.log('error ', e);
    	},
    	timeout: 30000
    });
    /************LIVE News Room SERVICE***************/

    /************LOCAL News Room SERVICE***************/

    //$.ajax({
    //    url: url,
    //    contentType: "application/json charset=utf-8",
    //    async: true,
    //    dataType: 'json',
    //    type: 'GET',
    //    success: function(data) {
    //        console.log(data);
    //        if (firstTimeRunNewsRoom === false || firstTimeRunNewsRoomChange === false) {
    //            listCount += 6;
    //        }
    //        if (firstTimeRunNewsRoom === true) {
    //            firstTimeRunNewsRoom = false;
    //        }
    //        if (firstTimeRunNewsRoomChange === true) {
    //            firstTimeRunNewsRoomChange = false;
    //        }
    //
    //        var results = parseNewsRoomResultsLocally(data, selectedMonth, newsTopicPicked);
    //
    //        newsRoomResults = results.news;
    //        if (newsRoomResults.length != 0) {
    //            if (!$(".list__item--no-results").hasClass("hidden")) {
    //                $(".list__item--no-results").addClass("hidden");
    //            }
    //            resultsListHTML += "<div class='results_content'>";
    //            for (var i = 0; i < newsRoomResults.length; i++) {
    //                totalYears.push(newsRoomResults[i].year);
    //                totalMonths.push(newsRoomResults[i].month);
    //                count++;
    //                if (count <= listCount) {
    //                    resultsListHTML += "<div class=\"list__item\">";
    //                    resultsListHTML += "<span class=\"list__item__date\">" + newsRoomResults[i].publishedDate + "</span>";
    //                    resultsListHTML += "<a class=\"list__item__title\" href=\"" + newsRoomResults[i].link + "\">" + newsRoomResults[i].title + "</a>";
    //                    resultsListHTML += "</div>";
    //                }
    //            }
    //            resultsListHTML += "</div>";
    //            ServicesAPI.createPagination(count);
    //            $(resultsListHTML).insertAfter($(".lists"));
    //        } else {
    //            $(".list__item--no-results").removeClass('hidden');
    //        }
    //        if(listYearChange) {
    //            newsRoomYearChange();
    //            listYearChange = false;
    //        }
    //        if(listTopicChange) {
    //            newsRoomTopicsChange();
    //            listTopicChange = false;
    //        }
    //        if (listCount >= newsRoomResults.length) {
    //            $(".divider--load-more__link").hide();
    //        } else {
    //            $(".divider--load-more__link").show();
    //        }
    //    },
    //    error: function (e) {
    //        $('.list__item--no-results').removeClass("hidden");
    //        console.log('error ', e);
    //    },
    //    timeout: 30000
    //});
    /************LOCAL News Room SERVICE***************/
}

/************Live News Room Url Constructor***************/
function newsRoomServiceConstruction() {
    var url = $(".lists").attr("data-news-url");
    var query = $(".lists").attr("data-news-query-parameter");
    newsMonth = $("#list_month").val();
    console.log(newsMonth);
    newsYear = $("#list_year").val();
    newsTopic = $('#list_topics').val();
    newsConcatenator = $(".lists").attr("data-news-concatenator");
    //prod implementation of url
    url += "year=" + newsYear + "&" + "month=" + newsMonth + "&" + "topic=" + newsTopic;
    newsRoomServiceCall(url, newsMonth, newsTopic);
}
/************Live News Room Url Constructor***************/

/************LOCAL News Room Url Constructor***************/
//function newsRoomServiceConstruction() {
//    var url = $(".lists").attr("data-news-url");
//    var query = $(".lists").attr("data-news-query-parameter");
//    newsMonth = $("#list_month").val();
//    console.log(newsMonth);
//    newsYear = $("#list_year").val();
//    newsTopic = $('#list_topics').val();
//    newsConcatenator = $(".lists").attr("data-news-concatenator");
//    //prod implementation of url
//    //url += newsYear + newsConcatenator + newsMonth + newsConcatenator + newsTopic + query;
//    //local implementation of url
//    console.log(newsTopic);
//    if(newsYear === "All" && newsMonth === "All") {
//        console.log(newsTopic);
//        url += newsTopic + query;
//        console.log(url);
//    } else if (newsYear === "All") {
//        url += newsTopic + query;
//        console.log(url);
//    } else if (newsYear !== "All") {
//        url += newsYear + query;
//    }
//    console.log(url);
//    newsRoomServiceCall(url, newsMonth, newsTopic);
//}
/************LOCAL News Room Url Constructor***************/

//Only needed for local testing
function parseNewsRoomResultsLocally(results, monthSelected, newsTopicSelected) {
    var numResults = results.news.length;
    console.log(results);
    console.log(monthSelected);
    console.log(newsTopicSelected);
    var intRepresentationOfMonthToFilterOn = 0;
    for(var month in monthToIntegerMapping) {
        if(month === monthSelected) {
            console.log(parseInt(monthToIntegerMapping[month]));
            intRepresentationOfMonthToFilterOn = parseInt(monthToIntegerMapping[month]);
        }
    }
    var filteredResults = {};
    //If All months is selected, we don't begin filtering yet
    if(monthSelected === integerToMonthMapping["0"]) {
        console.log("Month is All");
        filteredResults = results;
    } else {
        console.log(numResults);
        filteredResults["news"] = [];
        filteredResults["results"] = 0;
        for(var i = 0; i < numResults; i++) {
            //filter result for the given months
            if(results.news[i].month === intRepresentationOfMonthToFilterOn) {
                console.log(results.news[i].month);
                console.log(monthSelected);
                filteredResults.news.push(results.news[i]);
            }
        }
        filteredResults["results"] = filteredResults["news"].length;
    }
    console.log(filteredResults);
    //Next filter for the topic selected, if "All" topics is selected sort by year first, then month
    if(newsTopicSelected === "master-json-object") {

        //filteredResults.news.sort(function(a, b) { return (parseInt(b.year) - parseInt(a.year)) || (a.month - b.month);});

        filteredResults.news.sort(function(a, b) { return (parseInt(b.year) - parseInt(a.year)) || (masterMonthArray.indexOf(a) - masterMonthArray.indexOf(b))} );
    } else {
        //else filter the topics and then sort by year then month.
        filteredResults = searchForTopic(newsTopicSelected, filteredResults);
        //filteredResults.news.sort(function(a, b) { return (parseInt(b.year) - parseInt(a.year)) || (a.month - b.month);});
        filteredResults.news.sort(function(a, b) { return (parseInt(b.year) - parseInt(a.year)) || (masterMonthArray.indexOf(a) - masterMonthArray.indexOf(b))} );
    }
    return filteredResults;
}




//sort the order of the articles in the list
//This function was created to account for the changes that Diego has made within the
//newsRoomTopicsChange and newsRoomYearChange event handlers.
function sortArticlesLive(resultsObj) {
    //news is an array of objects representing results for each article
    resultsObj.news.sort(function(a, b) { return (parseInt(b.year) - parseInt(a.year)) || (masterMonthArray.indexOf(a) - masterMonthArray.indexOf(b))} );
    return resultsObj;
}


//Only needed for local testing
function searchForTopic(nameKey, results) {
    var arrWithFilteredTopics = [];
    var count = 0;
    for (var i = 0; i < results.news.length; i++) {
        if(results.news[i].topics === nameKey) {
            arrWithFilteredTopics[count] = results.news[i];
            count++;
        }
    }
    //Create new object that mimics the json object we get back
    var filteredObj = {};
    filteredObj["news"] = arrWithFilteredTopics;
    filteredObj["results"] = arrWithFilteredTopics.length;
    return filteredObj;
}

//document.ready for mapping the months that are contained within the dropdown months
$(function() {
    integerToMonthMapping = mapIntegerToMonth();
    monthToIntegerMapping = mapMonthToInteger(integerToMonthMapping);
    //Create an array that will create a master order of months
    for(var i in integerToMonthMapping) {
        masterMonthArray[i] = integerToMonthMapping[i];
    }
});

function mapIntegerToMonth() {
    //Array that will map the months to integers (including the "All" option)
    var monthToIntMapping = {};
    var monthsInDropDown = $("#list_month").children();
    $.each(monthsInDropDown, function(index, value) {
        var int = "" + index;
        monthToIntMapping[int] = $(value).val();
    });
    return monthToIntMapping;
}

function mapMonthToInteger(integerToMonth) {
    var reverseMap = {};
    for (var key in integerToMonth) {
        reverseMap[integerToMonth[key]] = key;
    }
    return reverseMap;
}

$(window).scroll(function () {
	$('.in_view').bind('inview', function (event, visible) {
		if (visible == true) {
			$(this).addClass('on');
		}
	});
});

$(window).on("load", function () {
	$('.in_view').bind('inview', function (event, visible) {
		if (visible == true) {
			$(this).addClass('on');
		}
	});
});

$('.in_view').bind('inview', function (event, visible) {
	if (visible == true) {
		$(this).addClass('on');
	}
});
$(".contact-us__select").on("change", function(){
	var whichresults = $(".contact-us__select").val();
	$(".contact-us__results__wrapper").addClass('hidden');
	if( $(".contact-us__results__wrapper").hasClass(whichresults)){
		$("." + whichresults).removeClass("hidden");
	}
});

//Proper rendering of bullets on the contact-us single page
if($('.rtf-general-content').length > 0 && $('.rtf-general-content').prev('.contact-us-directory') > 0) {
	$('.rtf-general-content').addClass("rtf-general-content__contact-single--bullets");
	// console.log("This is true");
}
(function($){
    
    var $win = $(window);

    function loadComplate() {
        var $body = $('body');
        var images = './images/test.png';
        $body.removeClass('doc-loading');
    }
    
    $win.on('load', loadComplate);
})(jQuery);
/* global/footer script */



(function($){



	function footerInit() {
		var $win = $(window);
		var $doc = $(document);

		function comphide( $target ){
			$target.removeAttr('style');
		}

		function makeObj ( status, $this, $list ){
			var openHeight;
			var obj = {};
			//console.log(status);
			if( !status ) {
				$this.addClass('active');
				$list.wrap.css({
					'display':'block',
					'height':'0',
					'overflow':'hidden'
				});
				openHeight = $list.list.outerHeight();
			} else {
				$this.removeClass('active');
			}

			obj.height = (status) ? 0 : openHeight;
			obj.ease = Expo.easeOut;
			if( status ) {
				obj.onComplete = comphide;
				obj.onCompleteParams = [$list.wrap];
			}
			return obj;
		}

		function listOpen( $this, $list, callback ){
			var efObj = makeObj( $this.hasClass('active'), $this, $list );
			TweenMax.killTweensOf( $list.wrap );
			TweenMax.to( $list.wrap, 0.5 , efObj);
			if(callback != undefined) {
				callback();
			}
		}





		function siteUse(){
			var $mob_siteUse = $('.foot-siteuse-mob'),
				$mob_usebtn = $mob_siteUse.find('button');

			var $list = {};
			$list.wrap = $('.foot-siteuse-list');
			$list.list = $list.wrap.find('ul');
			var oldDevice;
			var focusable = window[sitename].MDOBJ.FOCUSABLE( $list.list );


			function openEffect(){
				var $this = $(this);
				listOpen($this, $list)
			}
			
			function kwcagOpenEffect(e) {
				var $this = $mob_usebtn;

				var keyCode = e.keyCode || e.which;
				if (keyCode == 9){
					if (!e.shiftKey) {
						if(!$this.hasClass('active')) {
							listOpen($this, $list)
						}
						if($(this).html() == $(focusable.el_lastFocus).html()) {
							listOpen($this, $list)
						}
					}
					if (e.shiftKey) {
						if($this.hasClass('active')) {
							listOpen($this, $list)
						}
					}
				}
			}

			function resizeSet(){
				if(window[sitename].VARS.IS_VIEWTYPE == oldDevice) return;
				if(window[sitename].VARS.IS_VIEWTYPE == 'mobile') {
					$mob_usebtn.off('click', openEffect);
					$mob_usebtn.on('click', openEffect);
				} else {
					$list.wrap.removeAttr('style');
					$mob_usebtn.removeClass('active');
					$mob_usebtn.off('click');
				}
				oldDevice = window[sitename].VARS.IS_VIEWTYPE;
			}

			function addEvent() {
				if(window[sitename].VARS.IS_VIEWTYPE == 'mobile') {
					$mob_usebtn.on('click', openEffect);
					$mob_usebtn.on('keydown', kwcagOpenEffect);
					$(focusable.el_lastFocus).on('keydown', kwcagOpenEffect);
				}

				$win.on('resize', resizeSet);
			}

			this.init = function(){
					addEvent();
			};
		}

		function countrySelect(){
			var $country = $('.foot-country-select'),
				$countryBtn = $country.find('button');

			var $list = {};
			$list.wrap = $('.foot-country-content-wrap');
			$list.list = $list.wrap.find('.foot-country-content');

			var oldDevice;
			var focusable = window[sitename].MDOBJ.FOCUSABLE( $list.list );

			function openEffect( e, status ){
				e.stopPropagation();
				var $this = $(this);
				listOpen($this, $list, docAddEvent);
			}

			function kwcagOpenEffect(e) {
				var $this = $countryBtn;

				var keyCode = e.keyCode || e.which;
				if (keyCode == 9){
					if (!e.shiftKey) {
						if(!$this.hasClass('active')) {
							listOpen($this, $list)
						}
						if($(this).html() == $(focusable.el_lastFocus).html()) {
							listOpen($this, $list)
						}
					}
					if (e.shiftKey) {
						if($this.hasClass('active')) {
							listOpen($this, $list)
						}
					}
				}
			}

			function resizeSet(){
				if(window[sitename].VARS.IS_VIEWTYPE == oldDevice) return;
				$list.wrap.removeAttr('style');
				$countryBtn.removeClass('active');
				oldDevice = window[sitename].VARS.IS_VIEWTYPE;
			}

			function countryCheck(e){
				if(!$countryBtn.hasClass('active')) return;
				var $target = $(e.target);
				if($target.hasClass('foot-nation-list') || $target.hasClass('country-group-name') || $target.hasClass('country-flag') || $target.hasClass('country-base') || $target[0].innerHTML === $countryBtn.find('span')[0].innerHTML) return;
				listOpen($countryBtn, $list, docAddEvent);
			}

			function docAddEvent(){
				if($countryBtn.hasClass('active')) {
					$doc.off('click touchEnd',countryCheck);
					$doc.on('click touchEnd',countryCheck);
				} else {
					$doc.off('click touchEnd',countryCheck);
				}
			}

			function addEvent() {
				$countryBtn.on('click', openEffect);
				$countryBtn.on('keydown', kwcagOpenEffect);
				$(focusable.el_lastFocus).on('keydown', kwcagOpenEffect);
				$win.on('resize', resizeSet);
			}

			this.init = function(){
				addEvent();
				oldDevice = window[sitename].VARS.IS_VIEWTYPE;
			};
		}

		function init(){
			var uselist = new siteUse();
			uselist.init();

			var country = new countrySelect();
			country.init();
		}

		init();
	}

	$(document).on('ready', footerInit)

})(jQuery);
/* global/gnb script */


(function($){

    var $win = $(window);
    var $mobgnbcontainer = $('.gnb-container');
    var $mobopen = $('.mob-menu-open');
    var $mobclose = $('.mob-menu-close');
    var $gnb = $('.gnb-wrap');

    function menuOpen(){
        TweenMax.to($gnb, 0.7, {css:{
            left:0
        }, ease: Expo.easeOut});
        $mobgnbcontainer.addClass('active');
    }

    function menuClose() {
        TweenMax.to($gnb, 0.7, {css:{
            left:-300
        }, ease: Expo.easeOut});
        $mobgnbcontainer.removeClass('active');

    }

    function resizeFn() {
        $gnb.removeAttr('style');
    }

    function addEvent() {
        $mobopen.on('click', menuOpen);
        $mobclose.on('click', menuClose);
        $win.on('resize', resizeFn);
    }

    function mobMenuInit() {
        addEvent()
    }

    $(document).on('ready', mobMenuInit)

})(jQuery);
/* global/header script */


(function($){
	function headerInit(){

		var $win = $(window);
		var $html = $('html');
		var $body = $('body');

		var $header = $('.header-container');
		var $menu = $('.allmenu-container');
		var $menuWrap = $('.allmenu-wrap');
		var $menuOpenBtn = $('.allmenu-btn-open');
		var $menuCloseBtn = $('.allmenu-btn-close');
		var $schOpenBtn = $('.header-search-open');
		var $schWrap = $('.header-search-wrap');
		var $dep1lnk = $('.dep1lnk');
		var $submenu = $('.submenu');

		var $schInput = $schWrap.find('input');
		var $submitBtn = $schWrap.find('.header-search-submit');
		var device = window[sitename].VARS.IS_VIEWTYPE;
		var screenHeight;
		var oldDevice;
		var search, menu;

		var focusable = [],
			el_firstFocus, el_lastFocus;

		$menuWrap.find('*').each(function(i, val) {
			if(val.tagName.match(/^A$|AREA|INPUT|TEXTAREA|SELECT|BUTTON/gim) && parseInt(val.getAttribute("tabIndex")) !== -1) {
				focusable.push(val);
			}
			if((val.getAttribute("tabIndex") !== null) && (parseInt(val.getAttribute("tabIndex")) >= 0) && (val.getAttribute("tabIndex", 2) !== 32768)) {
				focusable.push(val);
			}
		});
		el_firstFocus = focusable[0];
		el_lastFocus = focusable[focusable.length-1];


		function headerSch(){
			var self = this;
			var posLeft;

			function hideWrap() {
				$schWrap.removeAttr('style');
				$schWrap.css('left', posLeft);
			}

			function makeEffectObj( close ){
				device = window[sitename].VARS.IS_VIEWTYPE;
				var effect = {};
				if(device == 'mobile') {
					effect.top = (close) ? $schOpenBtn.height() - $schWrap.height() : $schOpenBtn.height();
				} else {
					var setWidth = (device == 'tablet') ? 180 : 220;
					effect.width = (close) ? 0 : setWidth;
					effect.left = posLeft || $schOpenBtn.offset().left;
					if(!close) { $schWrap.css('width','0'); }
				}

				effect.ease = Expo.easeOut;
				if(close) { effect.onComplete = hideWrap; }
				//console.log(effect);
				return effect;
			}

			this.openEffect = function(){
				dealyCall();
				$schInput.val('');
				$schOpenBtn.addClass('active');
				$schWrap.addClass('active');
				var openobj = makeEffectObj();
				$schWrap.css('display','block');
				TweenMax.killTweensOf( $schWrap );
				TweenMax.to( $schWrap, 0.5, openobj );
				$(document).on('click', docClose)
			};

			this.closeEffect = function(){
				var closeobj = makeEffectObj( true );
				$schOpenBtn.removeClass('active');
				$schWrap.removeClass('active');
				TweenMax.killTweensOf( $schWrap );
				TweenMax.to( $schWrap, 0.5, closeobj );
				$(document).off('click', docClose)
			};

			this.resizeSet = function() {
				$schWrap.removeClass('active');
				$schOpenBtn.removeClass('active');
				$schWrap.removeAttr('style');
				$schOpenBtn.removeAttr('style');
			};

			function docClose(e) {
				var $target = $(e.target);
				var $btnimg = $target.parent();

				if($btnimg.hasClass('allmenu-btn-open') || $btnimg.hasClass('allmenu-btn-close') || $target.hasClass('header-search-inputbox') || $target.hasClass('header-search-open') || $btnimg.hasClass('header-search-open') || $target.hasClass('header-search-submit')) return;
				self.closeEffect();
			}

			var kwcagHeaderSch = {
				openBtn : function(e){
					if(e.shiftKey && e.keyCode == 9) {
					} else if (e.keyCode == 9){
						e.preventDefault();
						self.openEffect();
						$schInput.focus();
					}
					if( e.keyCode == 13) {
						e.preventDefault();
						self.openEffect();
						$schInput.focus();
					}
				},
				submitBtn : function(e){
					if(e.shiftKey && e.keyCode == 9) {
					} else if (e.keyCode == 9){
						self.closeEffect();
					}
				},
				inputBack : function(e){
					if(e.shiftKey && e.keyCode == 9) {
						self.closeEffect();
					} else if (e.keyCode == 9){
					}
				}

			};

			function dealyCall() {
				posLeft = $schOpenBtn.offset().left;
				if(device == "mobile") {
					$schWrap.css('left', '0');
				} else {
					$schWrap.css('left', posLeft);
				}

			}

			function addEvent(){
				$schOpenBtn.on('keydown', kwcagHeaderSch.openBtn);
				$submitBtn.on('keydown', kwcagHeaderSch.submitBtn);
				$schInput.on('keydown', kwcagHeaderSch.inputBack);
				$("body").on("touchend", ".wrapper", self.closeEffect);
			}

			this.init = function(){
				addEvent();
			}
		}

		function headerAllMenu(){

			var self = this;
			var $oldDep;

			function showDimmd(e){
				screenHeight = parseInt( document.body.scrollHeight  - ( document.body.scrollHeight - window.innerHeight ));
			}

			function removeDefaultEvt(e) {
				e.preventDefault();
			}

			this.menuOpen = function(){
				//alert( parseInt( $win.height() - $header.height() ) )

				screenHeight = parseInt( document.body.scrollHeight  - ( document.body.scrollHeight - window.innerHeight ));
				if(device == "mobile") {
					$menuWrap.css({
						left: -$body.width(),
						height: screenHeight - $header.height()
					});
					TweenMax.to($menuWrap, 0.5, { left:0, ease:Expo.easeOut, onComplete : showDimmd });
					$body.css('overflow','hidden');
				} else {

				}
				$menu.addClass('active');
				$menuCloseBtn.css('display','block');
				$menuOpenBtn.css('display','none');
			};

			this.menuClose = function(){
				if(device == "mobile") {
					$menuWrap.removeAttr('style');
					$body.removeAttr('style');
				}
				$menu.removeClass('active');
				$menuOpenBtn.css('display','block');
				$menuCloseBtn.css('display','none');
			};


			function openEffect( $this ){
				$this.css({
					'display' : 'block',
					'height' : '0'
				});
				
				var openHeight = $this.find('ul').height();
				TweenMax.to( $this, 0.5, {height : openHeight, ease:Expo.easeOut} )
			}

			function depHide( $old, $target ) {
				$target.removeAttr('style');
				$old.removeClass('active');
			}

			function oldClose( $old ){
				var $oldElem = $old.next();
				TweenMax.killTweensOf($oldElem);
				TweenMax.to( $oldElem, 0.5, {height : 0, ease:Expo.easeOut, onComplete : depHide, onCompleteParams:[$old, $oldElem]} )
			}

			function subOpen(e, $keythis){
				if(e.type != 'focus' && window[sitename].VARS.IS_VIEWTYPE != 'mobile') {
					e.preventDefault();
				}

				var $this = (e.type != "keydown") ? $(this) : $keythis;
				var $thisDep2 = $this.next();

				if( $this.hasClass('active') ) {
					oldClose($this);
				} else {
					$this.addClass('active');
					$dep1lnk.each(function () {
						var $this = $(this);
						if ($this.hasClass('active')) {
							oldClose($this);
						}
					});
					openEffect($thisDep2);
				}
				$oldDep = $this;
			}

			this.resizeSet = function(){
				addEvent();
				$submenu.removeAttr('style');
				$dep1lnk.removeClass('active');
			};

			function mobFocus(e){
				if(window[sitename].VARS.IS_VIEWTYPE != 'mobile') return;
				var $this = $(this);
				var keyCode = e.keyCode || e.which;
				if (keyCode == 9) {
					if (!e.shiftKey) {
						subOpen( e, $this );
					}
				}
			}
			
			function addEvent(){
				/* kwcag 처리 */
				if(device == "mobile") {
					$dep1lnk.off('click', subOpen);
					$dep1lnk.on('click', subOpen);
					$dep1lnk.off('keydown', mobFocus);
					$dep1lnk.on('keydown', mobFocus);
				} else {
					$dep1lnk.off('click', subOpen);
				}
			}

			this.init = function(){
				addEvent();
			}
		}

		search = new headerSch();
		search.init();
		menu = new headerAllMenu();
		menu.init();

		function resizeSet() {
			device = window[sitename].VARS.IS_VIEWTYPE;
			if ($menu.hasClass('active')) {
				screenHeight = parseInt( document.body.scrollHeight  - ( document.body.scrollHeight - window.innerHeight ));
				if(device == 'mobile') {
					$body.css('overflow','hidden');
					$menuWrap.css('height', screenHeight - $header.height());
				} else {
					$body.removeAttr('style');
					$menuWrap.removeAttr('style');
				}
			} else {
				$body.removeAttr('style');
				$menuWrap.removeAttr('style');
			}
			if(device == oldDevice) return;
			search.resizeSet();
			menu.resizeSet();
			oldDevice = device;
		}

		function activeCheck(){
			var $this = $(this);
			if( !$this.hasClass('active') ) {
				search.openEffect();
				menu.menuClose();
			} else {
				search.closeEffect();
			}
		}

		function headermenuOpen(){
			$body.removeClass('minisize');
			//$header.removeClass('minisize');
			menu.menuOpen();
			$menuCloseBtn.focus();

			if($menu.hasClass('active')) {
				$(document).off('click');
				if (device != 'mobile' && !$schWrap.hasClass('active')) {
					search.openEffect();
					$(document).off('click')
				}
			}
			if(device == 'mobile'){
				search.closeEffect();
			}

		}

		function headermenuClose() {
			if(!$menu.hasClass('active')) return;
			if($win.scrollTop() != 0) {
				$body.addClass('minisize');
				//$header.addClass('minisize');
			} else {
				$body.removeClass('minisize');
				//$header.removeClass('minisize');
			}
			menu.menuClose();
			$menuOpenBtn.focus();
			if(device != 'mobile') {
				search.closeEffect();
			}
		}

		function scrollTopCheck() {
			if($win.scrollTop() != 0) {
				if($menu.hasClass('active')) return;
				$body.addClass('minisize');
				//$header.addClass('minisize');
			} else {
				$body.removeClass('minisize');
				//$header.removeClass('minisize');
			}
		}

		function otherClose(){
			var $mainCat = $('.main-cat-submenu');
			var mainCatLen = $mainCat.length;
			if(mainCatLen > 0) {
				$mainCat.trigger('mouseleave');
			}

		}

		function addEvent(){
			$header.on('mouseover', otherClose);
			$schOpenBtn.on('click', activeCheck);
			$menuOpenBtn.on('click', headermenuOpen);
			$menuCloseBtn.on('click', headermenuClose );

			$menuOpenBtn.on({
				'keydown' : function(e){
					if (e.target == this){
						var keyCode = e.keyCode || e.which;
						if (keyCode == 9){

							if (!e.shiftKey){
								headermenuOpen();
								e.preventDefault();
								$(el_firstFocus).focus();
							}

						}
					}
				}
			});

			$(el_firstFocus).on({
				'keydown' : function(e){
					if (e.target == this){
						var keyCode = e.keyCode || e.which;
						if (keyCode == 9){

							if (e.shiftKey){
								headermenuClose();
								e.preventDefault();
								$menuOpenBtn.focus();

							}
						}
					}
				}
			});

			$(el_lastFocus).on({
				'keydown' : function(e){
					var keyCode = e.keyCode || e.which;
					if (keyCode == 9){
						if (!e.shiftKey){
							headermenuClose();
						}
					}
				}
			});

			$win.on('resize', resizeSet);
			$win.on('scroll', scrollTopCheck);
		}

		function init(){
			device = window[sitename].VARS.IS_VIEWTYPE;
			screenHeight = parseInt( document.body.scrollHeight  - ( document.body.scrollHeight - window.innerHeight ));
			addEvent();
			//alert($win.height())
		}

		init();
		scrollTopCheck();
	}


	$(document).on('ready', headerInit)


})(jQuery);
/* productTilesContainer script */


(function($){

	$.fn.listHeightFix = function(options){
		return this.each(function(){
			var $this = $(this),
				$thisTiles = $this.find('.product-tiles'),
				$pomotionType = $this.find('.promo-card'),
				$promo_img = $this.find('.promo-card-imgbg'),
				$promo_content = $this.find('.promo-card-content'),
				$setElem = $thisTiles.find('.product-tiles-content'),
				$thislnk = $thisTiles.find('.product-tiles-link'),
				$win = $(window);

			var minHeight = 380;

			function getHeight( basic ){
				var maxHeight = 0;
				maxHeight = (maxHeight=="auto") ? 0 : maxHeight;
				maxHeight = (basic != undefined) ? basic : maxHeight;
				$setElem.each(function(idx){
					var $this = $(this);
					if(maxHeight < $this.find('dl').outerHeight()){
						maxHeight = $this.find('dl').outerHeight();
					}
				});

				if(window[sitename].VARS.IS_VIEWTYPE == "mobile") {
					maxHeight = "auto";
				}
				return maxHeight;
			}

			function setHeight( callback ){
				var height = getHeight();
				$setElem.removeAttr('style');
				heightSet( height );
			}

			function heightSet( h ) {
				$setElem.css('min-height', h);
				var imgurl = $promo_img.css('backgroundImage');

				if (window[sitename].VARS.IS_VIEWTYPE != "mobile") {
					if ($pomotionType.length > 0) {
						var setHeight = 0;

						$promo_img.removeAttr('style');
						$promo_content.removeAttr('style');
						$thisTiles.removeAttr('style');

						var productHeight = $thisTiles.height();
						var promoHeight = $promo_content.outerHeight();
						setHeight = ( productHeight <= promoHeight ) ? promoHeight : productHeight;
						console.log(setHeight);

						$setElem.parent().addClass('promoType-tiles');
						$setElem.removeAttr('style');
						$promo_img.css({'height': setHeight, 'backgroundImage': imgurl});
						$promo_content.css({'height': setHeight});
						$thisTiles.css({'height': setHeight});
					}
				} else {
						//console.log("check");
						$thisTiles.removeAttr('style');
						$setElem.parent().removeClass('promoType-tiles');
						$setElem.removeAttr('style');
						$promo_img.removeAttr('style');
						$promo_content.removeAttr('style');
						$promo_img.css({ 'backgroundImage': imgurl});
				}
			}

			function addEvent(){
				$win.on('resize', setHeight)
			}

			function init(){
				addEvent();
				$win.on('load', setHeight)

			}

			if(options === 'init') {
				init();
			}
		})
	}

})(jQuery);

(function($){
	function init() {
		var $list = $('.product-tiles-list');
		$list.each(function(idx){
			var $this = $(this);
			$list.eq(idx).listHeightFix("init");
		})




	}
	$(document).on('ready', init())
	
})(jQuery);
(function($){

	$.fn.toggleShare = function( options ){


		return this.each(function(){
			var $this = $(this),
				$openBtn = $this.find('button'),
				$shareListWrap = $this.find('.share-sns-listwrap'),
				$shareList = $this.find('.share-sns-list'),
				$shareListlnk = $shareList.find('a'),
				$shareListlnk_W = $shareListlnk.width(),
				$win = $(window),
				oldview,
				setWidth = ($shareListlnk.length * $shareListlnk_W) + 40,
				$doc = $(document);

			var focusable = window[sitename].MDOBJ.FOCUSABLE( $shareList );
			//console.log(focusable);

			function CallbackHdie() {
				$shareList.css('display', 'none');
			}

			function moveMake( status ){
				var obj = {};
				if( status ) {
					$shareList.css({
						'left' : $shareListWrap.width() ,
						'display':'table'
					})
				}

				obj.left = ( status ) ? 0 : parseInt( $shareListWrap.width() ) ;
				obj.ease = Expo.easeInOut;
				if( !status ) {
					obj.onComplete = CallbackHdie;
				}
				return obj;
			}

			function toggleEffect( object ){
				TweenMax.killTweensOf( $shareList );
				TweenMax.to( $shareList, 0.5, object )
			}

			function openList(e, direct){
				var moveObj = null;
				var status = false;
				if (direct == undefined) {
					if ($this.hasClass('active')) {
						$this.removeClass('active');
						status = false;
						moveObj = moveMake(status);
					} else {
						$this.addClass('active');
						status = true;
						moveObj = moveMake(status);
					}
				} else {
					status = direct;
					if( direct ) {
						$this.addClass('active');
					} else {
						$this.removeClass('active');
					}
					moveObj = moveMake(status);
				}
				toggleEffect( moveObj );
			}

			var kwcagEvent = {
				btnKeyCheck : function(e){
					var keyCode = e.keyCode || e.which;
					if (keyCode == 9){
						if (!e.shiftKey) {
							if( !$openBtn.parent().hasClass('active') ) {
								openList( e, true );
								e.preventDefault();
								$(focusable.el_firstFocus).focus();
							}
						}
					}
				},
				liLastKeyCheck : function (e){
					var keyCode = e.keyCode || e.which;
					if (keyCode == 9){
						if (!e.shiftKey) {
							openList( e, false );
						}
					}
				},
				listFisrtBack : function(e){
					var keyCode = e.keyCode || e.which;
					if (keyCode == 9){
						if (e.shiftKey) {
							openList( e, false );
						}
					}
				}
			};
			
			function addEvent(){
				$openBtn.on('click', openList);
				$openBtn.on('keydown', kwcagEvent.btnKeyCheck);
				if(window[sitename].VARS.IS_VIEWTYPE != "mobile") {
					$(focusable.el_lastFocus).on('keydown', kwcagEvent.liLastKeyCheck);
					$(focusable.el_firstFocus).on('keydown', kwcagEvent.listFisrtBack);
				}
			}

			function resizeSet(){
				if( window[sitename].VARS.IS_VIEWTYPE == 'mobile' ) {
					$shareList.removeAttr('style');
					$this.removeClass('active');
					$shareListWrap.removeAttr('style');
					$(focusable.el_lastFocus).off('keydown', kwcagEvent.liLastKeyCheck);
				} else {
					$(focusable.el_lastFocus).on('keydown', kwcagEvent.liLastKeyCheck);
				}

				if(window[sitename].VARS.IS_VIEWTYPE != oldview) {
					$shareList.removeAttr('style');
					$this.removeClass('active');
					$shareListWrap.removeAttr('style');
				}

				if(window[sitename].VARS.IS_VIEWTYPE != 'mobile' ) {
					if(window[sitename].VARS.IS_VIEWTYPE == oldview) return;
					setDesign();
				}

				oldview = window[sitename].VARS.IS_VIEWTYPE;
			}

			function setDesign(){
				setWidth = ($shareListlnk.length * $shareListlnk_W) + 40;
				$shareListWrap.css({
					'width': setWidth,
					'left' : -(setWidth-10),
					'top' : 0,
					'position':'absolute'
				})
			}

			function init() {
				if(window[sitename].VARS.IS_VIEWTYPE != 'mobile') {
					setDesign();
				}
				addEvent();
				oldview = window[sitename].VARS.IS_VIEWTYPE;
				$win.on('resize', resizeSet);
			}

			if(options == 'init') {
				init();
			}
		});
	};


	$.fn.sharePosition = function( options ){
		return this.each(function(){
			var $this = $(this),
				$win = $(window)

			function setDesign() {
				if (window[sitename].VARS.IS_VIEWTYPE != 'mobile') {
					if( $this.hasClass('share-sns') ) {
						$this.css('float','left');
					} else {
						$this.css('float','right');
					}
				} else {
					$this.css('float','none');
				}
			}



			function init() {
				setDesign();
				$win.on('resize', setDesign)
			}

			if(options == 'init') {
				init();
			}
		});
	};


})(jQuery);


(function($){

	function shareInit(){
		var $shareDiv = $('.share-call>div');
		$('.share-sns').toggleShare("init");

		if($shareDiv.length == 1) {
			$shareDiv.sharePosition("init")
		}
	}

	$(document).on('ready', shareInit)

})(jQuery);
/* VIEWPORT_WIDTH&HEIGHT */
window[sitename].MDOBJ.VIEWPORT = function(){
    window[sitename].VARS.VIEWPORT_WIDTH = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    window[sitename].VARS.VIEWPORT_HEIGHT = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
};

/* IS_MOBILE CHECK */
window[sitename].MDOBJ.CHECKMOBILE = function(){
    var mobileInfo = ['Android', 'iPhone', 'iPod', 'iPad', 'BlackBerry', 'Windows CE', 'SAMSUNG', 'LG', 'MOT', 'SonyEricsson'];
    $.each(mobileInfo, function(index){
        if (navigator.userAgent.match(mobileInfo[index]) != null){
            window[sitename].VARS.IS_MOBILE = true;
        }
    });
};

/* IS_VIEWTYPE CHECK */
window[sitename].MDOBJ.DEVICECHECK = function() {
    if(window[sitename].VARS.VIEWPORT_WIDTH < window[sitename].VARS.IS_SIZE.MAXMOBILE && window[sitename].VARS.IS_MOBILE){
        window[sitename].VARS.IS_VIEWTYPE = 'mobile';
    } else if(window[sitename].VARS.VIEWPORT_WIDTH <= window[sitename].VARS.IS_SIZE.MAXTABLET && window[sitename].VARS.IS_MOBILE){
        window[sitename].VARS.IS_VIEWTYPE = 'tablet';
    } else {
        if(window[sitename].VARS.VIEWPORT_WIDTH < window[sitename].VARS.IS_SIZE.MAXMOBILE ) {
            window[sitename].VARS.IS_VIEWTYPE = 'mobile';
        } else if (window[sitename].VARS.VIEWPORT_WIDTH <= window[sitename].VARS.IS_SIZE.MAXTABLET ) {
            window[sitename].VARS.IS_VIEWTYPE = 'tablet';
        } else {
            window[sitename].VARS.IS_VIEWTYPE = 'web';
        }
    }
};

/* CALLBACK DELAY FUNC */
window[sitename].MDOBJ.DELAY_FUNC = (function(){
    var timer = 0;
    return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();

;(function($){
    window[sitename].MDOBJ.VIEWPORT();
    window[sitename].MDOBJ.CHECKMOBILE();
    window[sitename].MDOBJ.DEVICECHECK();

    $(window).resize(function(){
        window[sitename].MDOBJ.VIEWPORT();
        window[sitename].MDOBJ.CHECKMOBILE();
        window[sitename].MDOBJ.DEVICECHECK();
        //console.log(window[sitename].VARS.IS_VIEWTYPE )
    });
})(jQuery);

(function($){

	window[sitename].MDOBJ.FOCUSABLE = function( $target ){
		var focusable = [];
		var focusableObj = {};
		focusableObj.el_firstFocus = null;
		focusableObj.el_lastFocus = null;

		$target.find('*').each(function(i, val) {
			if(val.tagName.match(/^A$|AREA|INPUT|TEXTAREA|SELECT|BUTTON/gim) && parseInt(val.getAttribute("tabIndex")) !== -1) {
				focusable.push(val);
			}
			if((val.getAttribute("tabIndex") !== null) && (parseInt(val.getAttribute("tabIndex")) >= 0) && (val.getAttribute("tabIndex", 2) !== 32768)) {
				focusable.push(val);
			}
		});
		focusableObj.el_firstFocus = focusable[0];
		focusableObj.el_lastFocus = focusable[focusable.length-1];

		return focusableObj;
	};





})(jQuery);


/* reduce ie8 support */
if (!Array.prototype.reduce) {
    Array.prototype.reduce = function(callback /*, initialValue*/) {
        'use strict';
        if (this == null) {
            throw new TypeError('Array.prototype.reduce called on null or undefined');
        }
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }
        var t = Object(this), len = t.length >>> 0, k = 0, value;
        if (arguments.length == 2) {
            value = arguments[1];
        } else {
            while (k < len && !(k in t)) {
                k++;
            }
            if (k >= len) {
                throw new TypeError('Reduce of empty array with no initial value');
            }
            value = t[k++];
        }
        for (; k < len; k++) {
            if (k in t) {
                value = callback(value, t[k], k, t);
            }
        }
        return value;
    };
}



/**
 *
 *	authore : Moon
 *  date : 2016.02.16
 *  description : namespace / common vars & libs
 *
 *  editor
 *  V : 1.0.0 / A : Moon / T : 2016.02.16 / G : 작업시작
 *
 */


var sitename = "DEO";

window[sitename] = window[sitename] || {};                                      // NAMESPACE 지정
window[sitename].VARS = window[sitename].VARS || {};                            // 공통 변수 OBJECT
window[sitename].VARS.VIEWPORT_WIDTH = null;                                    // WIDTH
window[sitename].VARS.VIEWPORT_HEIGHT = null;                                   // HEIGHT
window[sitename].VARS.IS_MOBILE = null;                                         // 모바일 변수
window[sitename].VARS.IS_IE8 = ( $('html').hasClass('ie8') ) ? true : false;    // IE8 체크
window[sitename].VARS.IS_SIZE = window[sitename].VARS.IS_SIZE || {};            // 반응형시 SIZE OBJECT
window[sitename].VARS.IS_SIZE.MAXMOBILE = 768;                                  // 반응형시 MOBILE 최대값
window[sitename].VARS.IS_SIZE.MAXTABLET = 1024;                                 // 반응형시 TABLET 최대값

window[sitename].APPS = window[sitename].APPS || {};                            // 공통 라이브러리
window[sitename].MDOBJ = window[sitename].MDOBJ || {};                            // 공통 모듈

/* global/sub-category script */


(function($){
	"use strict";
	$.fn.subCategory = function(options){

		return this.each(function(){

			var $this = $(this),
				$win = $(window),
				$openBtn = $this.find('button'),
				$openList = $this.find('.sub-cat-list');
			var openHeight;

			var focusable = [],
				el_firstFocus, el_lastFocus;

				$openList.find('*').each(function(i, val) {
					if(val.tagName.match(/^A$|AREA|INPUT|TEXTAREA|SELECT|BUTTON/gim) && parseInt(val.getAttribute("tabIndex")) !== -1) {
						focusable.push(val);
					}
					if((val.getAttribute("tabIndex") !== null) && (parseInt(val.getAttribute("tabIndex")) >= 0) && (val.getAttribute("tabIndex", 2) !== 32768)) {
						focusable.push(val);
					}
				});
				el_firstFocus = focusable[0];
				el_lastFocus = focusable[focusable.length-1];

			function toggleComplete(status) {
				if(status) {
					$openList.css('display','none');
				}
			}

			function moveObject( status ){
				var obj = {};
				if(!status) {
					$openList.css('display','block');
					openHeight = $openList.find('ul').height();
					$openList.css('height','0');
				}
				obj.height = ( status ) ? 0 : openHeight;
				obj.ease = Expo.easeOut;
				obj.onComplete = toggleComplete;
				obj.onCompleteParams = [status];
				return obj
			}

			function openToggle() {
				var toggle = moveObject( $openBtn.hasClass( 'active' ) );
				if( $openBtn.hasClass( 'active' ) ) {
					$openBtn.removeClass('active');
				} else {
					$openBtn.addClass('active');
				}
				TweenMax.killTweensOf( $openList );
				TweenMax.to( $openList, 0.5, toggle )
			}
			

			function keydownEvt(e){
				var keyCode = e.keyCode || e.which;
				if (keyCode == 9){
					if (!e.shiftKey) {
						openToggle();
					}
					if(e.shiftKey && $openBtn.hasClass( 'active' ) ) {
						openToggle();
					}
				}
			}

			function lastKeydownEvt(e){
				
				var keyCode = e.keyCode || e.which;
				if (keyCode == 9){
					if (!e.shiftKey && window[sitename].VARS.IS_VIEWTYPE == 'mobile') {
						openToggle();
					}
				}
			}

			function resizeSet() {
				if(window[sitename].VARS.IS_VIEWTYPE == 'mobile') {
					if ($openBtn.hasClass('active')) {
						$openList.css({
							'display':'block',
							'height' : openHeight
						});
					} else {
						$openList.removeAttr('style');
					}
				} else {
					$openList.removeAttr('style');
				}
			}

			function addEvent() {
				$openBtn.on('click', openToggle);
				$openBtn.on('keydown', keydownEvt);
				$(el_lastFocus).on('keydown', lastKeydownEvt);
				$win.on('resize', resizeSet);
			}

			function init() {
				addEvent();
			}

			if(options == 'init') {
				init();
			}

		})

	};

})(jQuery);



(function($){

	function subCate(){
		var $elem = $('.sub-category');
		if($elem.length > 0) {
			$elem.subCategory('init');
		}
	}

	$(document).on('ready', subCate)

})(jQuery);
/*!
 * VERSION: 1.17.0
 * DATE: 2015-05-27
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},r=function(t,e,s){i.call(this,t,e,s),this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0,this.render=r.prototype.render},n=1e-10,a=i._internals,o=a.isSelector,h=a.isArray,l=r.prototype=i.to({},.1,{}),_=[];r.version="1.17.0",l.constructor=r,l.kill()._gc=!1,r.killTweensOf=r.killDelayedCallsTo=i.killTweensOf,r.getTweensOf=i.getTweensOf,r.lagSmoothing=i.lagSmoothing,r.ticker=i.ticker,r.render=i.render,l.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),i.prototype.invalidate.call(this)},l.updateTo=function(t,e){var s,r=this.ratio,n=this.vars.immediateRender||t.immediateRender;e&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(s in t)this.vars[s]=t[s];if(this._initted||n)if(e)this._initted=!1,n&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&i._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var a=this._time;this.render(0,!0,!1),this._initted=!1,this.render(a,!0,!1)}else if(this._time>0||n){this._initted=!1,this._init();for(var o,h=1/(1-r),l=this._firstPT;l;)o=l.s+l.c,l.c*=h,l.s=o-l.c,l=l._next}return this},l.render=function(t,e,i){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var s,r,o,h,l,_,u,c,f=this._dirty?this.totalDuration():this._totalDuration,p=this._time,m=this._totalTime,d=this._cycle,g=this._duration,v=this._rawPrevTime;if(t>=f?(this._totalTime=f,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=g,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(s=!0,r="onComplete",i=i||this._timeline.autoRemoveChildren),0===g&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>v||v===n)&&v!==t&&(i=!0,v>n&&(r="onReverseComplete")),this._rawPrevTime=c=!e||t||v===t?t:n)):1e-7>t?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==m||0===g&&v>0)&&(r="onReverseComplete",s=this._reversed),0>t&&(this._active=!1,0===g&&(this._initted||!this.vars.lazy||i)&&(v>=0&&(i=!0),this._rawPrevTime=c=!e||t||v===t?t:n)),this._initted||(i=!0)):(this._totalTime=this._time=t,0!==this._repeat&&(h=g+this._repeatDelay,this._cycle=this._totalTime/h>>0,0!==this._cycle&&this._cycle===this._totalTime/h&&this._cycle--,this._time=this._totalTime-this._cycle*h,this._yoyo&&0!==(1&this._cycle)&&(this._time=g-this._time),this._time>g?this._time=g:0>this._time&&(this._time=0)),this._easeType?(l=this._time/g,_=this._easeType,u=this._easePower,(1===_||3===_&&l>=.5)&&(l=1-l),3===_&&(l*=2),1===u?l*=l:2===u?l*=l*l:3===u?l*=l*l*l:4===u&&(l*=l*l*l*l),this.ratio=1===_?1-l:2===_?l:.5>this._time/g?l/2:1-l/2):this.ratio=this._ease.getRatio(this._time/g)),p===this._time&&!i&&d===this._cycle)return m!==this._totalTime&&this._onUpdate&&(e||this._callback("onUpdate")),void 0;if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=p,this._totalTime=m,this._rawPrevTime=v,this._cycle=d,a.lazyTweens.push(this),this._lazy=[t,e],void 0;this._time&&!s?this.ratio=this._ease.getRatio(this._time/g):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==p&&t>=0&&(this._active=!0),0===m&&(2===this._initted&&t>0&&this._init(),this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===g)&&(e||this._callback("onStart"))),o=this._firstPT;o;)o.f?o.t[o.p](o.c*this.ratio+o.s):o.t[o.p]=o.c*this.ratio+o.s,o=o._next;this._onUpdate&&(0>t&&this._startAt&&this._startTime&&this._startAt.render(t,e,i),e||(this._totalTime!==m||s)&&this._callback("onUpdate")),this._cycle!==d&&(e||this._gc||this.vars.onRepeat&&this._callback("onRepeat")),r&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this._callback(r),0===g&&this._rawPrevTime===n&&c!==n&&(this._rawPrevTime=0))},r.to=function(t,e,i){return new r(t,e,i)},r.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new r(t,e,i)},r.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new r(t,e,s)},r.staggerTo=r.allTo=function(t,e,n,a,l,u,c){a=a||0;var f,p,m,d,g=n.delay||0,v=[],y=function(){n.onComplete&&n.onComplete.apply(n.onCompleteScope||this,arguments),l.apply(c||n.callbackScope||this,u||_)};for(h(t)||("string"==typeof t&&(t=i.selector(t)||t),o(t)&&(t=s(t))),t=t||[],0>a&&(t=s(t),t.reverse(),a*=-1),f=t.length-1,m=0;f>=m;m++){p={};for(d in n)p[d]=n[d];p.delay=g,m===f&&l&&(p.onComplete=y),v[m]=new r(t[m],e,p),g+=a}return v},r.staggerFrom=r.allFrom=function(t,e,i,s,n,a,o){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,r.staggerTo(t,e,i,s,n,a,o)},r.staggerFromTo=r.allFromTo=function(t,e,i,s,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,r.staggerTo(t,e,s,n,a,o,h)},r.delayedCall=function(t,e,i,s,n){return new r(e,0,{delay:t,onComplete:e,onCompleteParams:i,callbackScope:s,onReverseComplete:e,onReverseCompleteParams:i,immediateRender:!1,useFrames:n,overwrite:0})},r.set=function(t,e){return new r(t,0,e)},r.isTweening=function(t){return i.getTweensOf(t,!0).length>0};var u=function(t,e){for(var s=[],r=0,n=t._first;n;)n instanceof i?s[r++]=n:(e&&(s[r++]=n),s=s.concat(u(n,e)),r=s.length),n=n._next;return s},c=r.getAllTweens=function(e){return u(t._rootTimeline,e).concat(u(t._rootFramesTimeline,e))};r.killAll=function(t,i,s,r){null==i&&(i=!0),null==s&&(s=!0);var n,a,o,h=c(0!=r),l=h.length,_=i&&s&&r;for(o=0;l>o;o++)a=h[o],(_||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&(t?a.totalTime(a._reversed?0:a.totalDuration()):a._enabled(!1,!1))},r.killChildTweensOf=function(t,e){if(null!=t){var n,l,_,u,c,f=a.tweenLookup;if("string"==typeof t&&(t=i.selector(t)||t),o(t)&&(t=s(t)),h(t))for(u=t.length;--u>-1;)r.killChildTweensOf(t[u],e);else{n=[];for(_ in f)for(l=f[_].target.parentNode;l;)l===t&&(n=n.concat(f[_].tweens)),l=l.parentNode;for(c=n.length,u=0;c>u;u++)e&&n[u].totalTime(n[u].totalDuration()),n[u]._enabled(!1,!1)}}};var f=function(t,i,s,r){i=i!==!1,s=s!==!1,r=r!==!1;for(var n,a,o=c(r),h=i&&s&&r,l=o.length;--l>-1;)a=o[l],(h||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&a.paused(t)};return r.pauseAll=function(t,e,i){f(!0,t,e,i)},r.resumeAll=function(t,e,i){f(!1,t,e,i)},r.globalTimeScale=function(e){var s=t._rootTimeline,r=i.ticker.time;return arguments.length?(e=e||n,s._startTime=r-(r-s._startTime)*s._timeScale/e,s=t._rootFramesTimeline,r=i.ticker.frame,s._startTime=r-(r-s._startTime)*s._timeScale/e,s._timeScale=t._rootTimeline._timeScale=e,e):s._timeScale},l.progress=function(t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},l.totalProgress=function(t){return arguments.length?this.totalTime(this.totalDuration()*t,!1):this._totalTime/this.totalDuration()},l.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},l.duration=function(e){return arguments.length?t.prototype.duration.call(this,e):this._duration},l.totalDuration=function(t){return arguments.length?-1===this._repeat?this:this.duration((t-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},l.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},l.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},l.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},r},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){e.call(this,t),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var i,s,r=this.vars;for(s in r)i=r[s],h(i)&&-1!==i.join("").indexOf("{self}")&&(r[s]=this._swapSelfInParams(i));h(r.tweens)&&this.add(r.tweens,0,r.align,r.stagger)},r=1e-10,n=i._internals,a=s._internals={},o=n.isSelector,h=n.isArray,l=n.lazyTweens,_=n.lazyRender,u=[],c=_gsScope._gsDefine.globals,f=function(t){var e,i={};for(e in t)i[e]=t[e];return i},p=a.pauseCallback=function(t,e,i,s){var n,a=t._timeline,o=a._totalTime,h=t._startTime,l=0>t._rawPrevTime||0===t._rawPrevTime&&a._reversed,_=l?0:r,c=l?r:0;if(e||!this._forcingPlayhead){for(a.pause(h),n=t._prev;n&&n._startTime===h;)n._rawPrevTime=c,n=n._prev;for(n=t._next;n&&n._startTime===h;)n._rawPrevTime=_,n=n._next;e&&e.apply(s||a.vars.callbackScope||a,i||u),(this._forcingPlayhead||!a._paused)&&a.seek(o)}},m=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},d=s.prototype=new e;return s.version="1.17.0",d.constructor=s,d.kill()._gc=d._forcingPlayhead=!1,d.to=function(t,e,s,r){var n=s.repeat&&c.TweenMax||i;return e?this.add(new n(t,e,s),r):this.set(t,s,r)},d.from=function(t,e,s,r){return this.add((s.repeat&&c.TweenMax||i).from(t,e,s),r)},d.fromTo=function(t,e,s,r,n){var a=r.repeat&&c.TweenMax||i;return e?this.add(a.fromTo(t,e,s,r),n):this.set(t,r,n)},d.staggerTo=function(t,e,r,n,a,h,l,_){var u,c=new s({onComplete:h,onCompleteParams:l,callbackScope:_,smoothChildTiming:this.smoothChildTiming});for("string"==typeof t&&(t=i.selector(t)||t),t=t||[],o(t)&&(t=m(t)),n=n||0,0>n&&(t=m(t),t.reverse(),n*=-1),u=0;t.length>u;u++)r.startAt&&(r.startAt=f(r.startAt)),c.to(t[u],e,f(r),u*n);return this.add(c,a)},d.staggerFrom=function(t,e,i,s,r,n,a,o){return i.immediateRender=0!=i.immediateRender,i.runBackwards=!0,this.staggerTo(t,e,i,s,r,n,a,o)},d.staggerFromTo=function(t,e,i,s,r,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,this.staggerTo(t,e,s,r,n,a,o,h)},d.call=function(t,e,s,r){return this.add(i.delayedCall(0,t,e,s),r)},d.set=function(t,e,s){return s=this._parseTimeOrLabel(s,0,!0),null==e.immediateRender&&(e.immediateRender=s===this._time&&!this._paused),this.add(new i(t,0,e),s)},s.exportRoot=function(t,e){t=t||{},null==t.smoothChildTiming&&(t.smoothChildTiming=!0);var r,n,a=new s(t),o=a._timeline;for(null==e&&(e=!0),o._remove(a,!0),a._startTime=0,a._rawPrevTime=a._time=a._totalTime=o._time,r=o._first;r;)n=r._next,e&&r instanceof i&&r.target===r.vars.onComplete||a.add(r,r._startTime-r._delay),r=n;return o.add(a,0),a},d.add=function(r,n,a,o){var l,_,u,c,f,p;if("number"!=typeof n&&(n=this._parseTimeOrLabel(n,0,!0,r)),!(r instanceof t)){if(r instanceof Array||r&&r.push&&h(r)){for(a=a||"normal",o=o||0,l=n,_=r.length,u=0;_>u;u++)h(c=r[u])&&(c=new s({tweens:c})),this.add(c,l),"string"!=typeof c&&"function"!=typeof c&&("sequence"===a?l=c._startTime+c.totalDuration()/c._timeScale:"start"===a&&(c._startTime-=c.delay())),l+=o;return this._uncache(!0)}if("string"==typeof r)return this.addLabel(r,n);if("function"!=typeof r)throw"Cannot add "+r+" into the timeline; it is not a tween, timeline, function, or string.";r=i.delayedCall(0,r)}if(e.prototype.add.call(this,r,n),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(f=this,p=f.rawTime()>r._startTime;f._timeline;)p&&f._timeline.smoothChildTiming?f.totalTime(f._totalTime,!0):f._gc&&f._enabled(!0,!1),f=f._timeline;return this},d.remove=function(e){if(e instanceof t)return this._remove(e,!1);if(e instanceof Array||e&&e.push&&h(e)){for(var i=e.length;--i>-1;)this.remove(e[i]);return this}return"string"==typeof e?this.removeLabel(e):this.kill(null,e)},d._remove=function(t,i){e.prototype._remove.call(this,t,i);var s=this._last;return s?this._time>s._startTime+s._totalDuration/s._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},d.append=function(t,e){return this.add(t,this._parseTimeOrLabel(null,e,!0,t))},d.insert=d.insertMultiple=function(t,e,i,s){return this.add(t,e||0,i,s)},d.appendMultiple=function(t,e,i,s){return this.add(t,this._parseTimeOrLabel(null,e,!0,t),i,s)},d.addLabel=function(t,e){return this._labels[t]=this._parseTimeOrLabel(e),this},d.addPause=function(t,e,s,r){var n=i.delayedCall(0,p,["{self}",e,s,r],this);return n.data="isPause",this.add(n,t)},d.removeLabel=function(t){return delete this._labels[t],this},d.getLabelTime=function(t){return null!=this._labels[t]?this._labels[t]:-1},d._parseTimeOrLabel=function(e,i,s,r){var n;if(r instanceof t&&r.timeline===this)this.remove(r);else if(r&&(r instanceof Array||r.push&&h(r)))for(n=r.length;--n>-1;)r[n]instanceof t&&r[n].timeline===this&&this.remove(r[n]);if("string"==typeof i)return this._parseTimeOrLabel(i,s&&"number"==typeof e&&null==this._labels[i]?e-this.duration():0,s);if(i=i||0,"string"!=typeof e||!isNaN(e)&&null==this._labels[e])null==e&&(e=this.duration());else{if(n=e.indexOf("="),-1===n)return null==this._labels[e]?s?this._labels[e]=this.duration()+i:i:this._labels[e]+i;i=parseInt(e.charAt(n-1)+"1",10)*Number(e.substr(n+1)),e=n>1?this._parseTimeOrLabel(e.substr(0,n-1),0,s):this.duration()}return Number(e)+i},d.seek=function(t,e){return this.totalTime("number"==typeof t?t:this._parseTimeOrLabel(t),e!==!1)},d.stop=function(){return this.paused(!0)},d.gotoAndPlay=function(t,e){return this.play(t,e)},d.gotoAndStop=function(t,e){return this.pause(t,e)},d.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,a,o,h,u=this._dirty?this.totalDuration():this._totalDuration,c=this._time,f=this._startTime,p=this._timeScale,m=this._paused;if(t>=u)this._totalTime=this._time=u,this._reversed||this._hasPausedChild()||(n=!0,o="onComplete",h=!!this._timeline.autoRemoveChildren,0===this._duration&&(0===t||0>this._rawPrevTime||this._rawPrevTime===r)&&this._rawPrevTime!==t&&this._first&&(h=!0,this._rawPrevTime>r&&(o="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=u+1e-4;else if(1e-7>t)if(this._totalTime=this._time=0,(0!==c||0===this._duration&&this._rawPrevTime!==r&&(this._rawPrevTime>0||0>t&&this._rawPrevTime>=0))&&(o="onReverseComplete",n=this._reversed),0>t)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(h=n=!0,o="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(h=!0),this._rawPrevTime=t;else{if(this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,0===t&&n)for(s=this._first;s&&0===s._startTime;)s._duration||(n=!1),s=s._next;t=0,this._initted||(h=!0)}else this._totalTime=this._time=this._rawPrevTime=t;if(this._time!==c&&this._first||i||h){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==c&&t>0&&(this._active=!0),0===c&&this.vars.onStart&&0!==this._time&&(e||this._callback("onStart")),this._time>=c)for(s=this._first;s&&(a=s._next,!this._paused||m);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;else for(s=this._last;s&&(a=s._prev,!this._paused||m);)(s._active||c>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;this._onUpdate&&(e||(l.length&&_(),this._callback("onUpdate"))),o&&(this._gc||(f===this._startTime||p!==this._timeScale)&&(0===this._time||u>=this.totalDuration())&&(n&&(l.length&&_(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[o]&&this._callback(o)))}},d._hasPausedChild=function(){for(var t=this._first;t;){if(t._paused||t instanceof s&&t._hasPausedChild())return!0;t=t._next}return!1},d.getChildren=function(t,e,s,r){r=r||-9999999999;for(var n=[],a=this._first,o=0;a;)r>a._startTime||(a instanceof i?e!==!1&&(n[o++]=a):(s!==!1&&(n[o++]=a),t!==!1&&(n=n.concat(a.getChildren(!0,e,s)),o=n.length))),a=a._next;return n},d.getTweensOf=function(t,e){var s,r,n=this._gc,a=[],o=0;for(n&&this._enabled(!0,!0),s=i.getTweensOf(t),r=s.length;--r>-1;)(s[r].timeline===this||e&&this._contains(s[r]))&&(a[o++]=s[r]);return n&&this._enabled(!1,!0),a},d.recent=function(){return this._recent},d._contains=function(t){for(var e=t.timeline;e;){if(e===this)return!0;e=e.timeline}return!1},d.shiftChildren=function(t,e,i){i=i||0;for(var s,r=this._first,n=this._labels;r;)r._startTime>=i&&(r._startTime+=t),r=r._next;if(e)for(s in n)n[s]>=i&&(n[s]+=t);return this._uncache(!0)},d._kill=function(t,e){if(!t&&!e)return this._enabled(!1,!1);for(var i=e?this.getTweensOf(e):this.getChildren(!0,!0,!1),s=i.length,r=!1;--s>-1;)i[s]._kill(t,e)&&(r=!0);return r},d.clear=function(t){var e=this.getChildren(!1,!0,!0),i=e.length;for(this._time=this._totalTime=0;--i>-1;)e[i]._enabled(!1,!1);return t!==!1&&(this._labels={}),this._uncache(!0)},d.invalidate=function(){for(var e=this._first;e;)e.invalidate(),e=e._next;return t.prototype.invalidate.call(this)},d._enabled=function(t,i){if(t===this._gc)for(var s=this._first;s;)s._enabled(t,!0),s=s._next;return e.prototype._enabled.call(this,t,i)},d.totalTime=function(){this._forcingPlayhead=!0;var e=t.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},d.duration=function(t){return arguments.length?(0!==this.duration()&&0!==t&&this.timeScale(this._duration/t),this):(this._dirty&&this.totalDuration(),this._duration)},d.totalDuration=function(t){if(!arguments.length){if(this._dirty){for(var e,i,s=0,r=this._last,n=999999999999;r;)e=r._prev,r._dirty&&r.totalDuration(),r._startTime>n&&this._sortChildren&&!r._paused?this.add(r,r._startTime-r._delay):n=r._startTime,0>r._startTime&&!r._paused&&(s-=r._startTime,this._timeline.smoothChildTiming&&(this._startTime+=r._startTime/this._timeScale),this.shiftChildren(-r._startTime,!1,-9999999999),n=0),i=r._startTime+r._totalDuration/r._timeScale,i>s&&(s=i),r=e;this._duration=this._totalDuration=s,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==t&&this.timeScale(this._totalDuration/t),this},d.paused=function(e){if(!e)for(var i=this._first,s=this._time;i;)i._startTime===s&&"isPause"===i.data&&(i._rawPrevTime=0),i=i._next;return t.prototype.paused.apply(this,arguments)},d.usesFrames=function(){for(var e=this._timeline;e._timeline;)e=e._timeline;return e===t._rootFramesTimeline},d.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},s},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(t,e,i){var s=function(e){t.call(this,e),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},r=1e-10,n=e._internals,a=n.lazyTweens,o=n.lazyRender,h=new i(null,null,1,0),l=s.prototype=new t;return l.constructor=s,l.kill()._gc=!1,s.version="1.17.0",l.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),t.prototype.invalidate.call(this)},l.addCallback=function(t,i,s,r){return this.add(e.delayedCall(0,t,s,r),i)},l.removeCallback=function(t,e){if(t)if(null==e)this._kill(null,t);else for(var i=this.getTweensOf(t,!1),s=i.length,r=this._parseTimeOrLabel(e);--s>-1;)i[s]._startTime===r&&i[s]._enabled(!1,!1);return this},l.removePause=function(e){return this.removeCallback(t._internals.pauseCallback,e)},l.tweenTo=function(t,i){i=i||{};var s,r,n,a={ease:h,useFrames:this.usesFrames(),immediateRender:!1};for(r in i)a[r]=i[r];return a.time=this._parseTimeOrLabel(t),s=Math.abs(Number(a.time)-this._time)/this._timeScale||.001,n=new e(this,s,a),a.onStart=function(){n.target.paused(!0),n.vars.time!==n.target.time()&&s===n.duration()&&n.duration(Math.abs(n.vars.time-n.target.time())/n.target._timeScale),i.onStart&&n._callback("onStart")},n},l.tweenFromTo=function(t,e,i){i=i||{},t=this._parseTimeOrLabel(t),i.startAt={onComplete:this.seek,onCompleteParams:[t],callbackScope:this},i.immediateRender=i.immediateRender!==!1;var s=this.tweenTo(e,i);return s.duration(Math.abs(s.vars.time-t)/this._timeScale||.001)},l.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,h,l,_,u,c=this._dirty?this.totalDuration():this._totalDuration,f=this._duration,p=this._time,m=this._totalTime,d=this._startTime,g=this._timeScale,v=this._rawPrevTime,y=this._paused,T=this._cycle;if(t>=c)this._locked||(this._totalTime=c,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(n=!0,l="onComplete",_=!!this._timeline.autoRemoveChildren,0===this._duration&&(0===t||0>v||v===r)&&v!==t&&this._first&&(_=!0,v>r&&(l="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,this._yoyo&&0!==(1&this._cycle)?this._time=t=0:(this._time=f,t=f+1e-4);else if(1e-7>t)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==p||0===f&&v!==r&&(v>0||0>t&&v>=0)&&!this._locked)&&(l="onReverseComplete",n=this._reversed),0>t)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(_=n=!0,l="onReverseComplete"):v>=0&&this._first&&(_=!0),this._rawPrevTime=t;else{if(this._rawPrevTime=f||!e||t||this._rawPrevTime===t?t:r,0===t&&n)for(s=this._first;s&&0===s._startTime;)s._duration||(n=!1),s=s._next;t=0,this._initted||(_=!0)}else 0===f&&0>v&&(_=!0),this._time=this._rawPrevTime=t,this._locked||(this._totalTime=t,0!==this._repeat&&(u=f+this._repeatDelay,this._cycle=this._totalTime/u>>0,0!==this._cycle&&this._cycle===this._totalTime/u&&this._cycle--,this._time=this._totalTime-this._cycle*u,this._yoyo&&0!==(1&this._cycle)&&(this._time=f-this._time),this._time>f?(this._time=f,t=f+1e-4):0>this._time?this._time=t=0:t=this._time));if(this._cycle!==T&&!this._locked){var x=this._yoyo&&0!==(1&T),w=x===(this._yoyo&&0!==(1&this._cycle)),b=this._totalTime,P=this._cycle,k=this._rawPrevTime,S=this._time;if(this._totalTime=T*f,T>this._cycle?x=!x:this._totalTime+=f,this._time=p,this._rawPrevTime=0===f?v-1e-4:v,this._cycle=T,this._locked=!0,p=x?0:f,this.render(p,e,0===f),e||this._gc||this.vars.onRepeat&&this._callback("onRepeat"),w&&(p=x?f+1e-4:-1e-4,this.render(p,!0,!1)),this._locked=!1,this._paused&&!y)return;this._time=S,this._totalTime=b,this._cycle=P,this._rawPrevTime=k}if(!(this._time!==p&&this._first||i||_))return m!==this._totalTime&&this._onUpdate&&(e||this._callback("onUpdate")),void 0;if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==m&&t>0&&(this._active=!0),0===m&&this.vars.onStart&&0!==this._totalTime&&(e||this._callback("onStart")),this._time>=p)for(s=this._first;s&&(h=s._next,!this._paused||y);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=h;else for(s=this._last;s&&(h=s._prev,!this._paused||y);)(s._active||p>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=h;this._onUpdate&&(e||(a.length&&o(),this._callback("onUpdate"))),l&&(this._locked||this._gc||(d===this._startTime||g!==this._timeScale)&&(0===this._time||c>=this.totalDuration())&&(n&&(a.length&&o(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[l]&&this._callback(l)))},l.getActive=function(t,e,i){null==t&&(t=!0),null==e&&(e=!0),null==i&&(i=!1);var s,r,n=[],a=this.getChildren(t,e,i),o=0,h=a.length;for(s=0;h>s;s++)r=a[s],r.isActive()&&(n[o++]=r);return n},l.getLabelAfter=function(t){t||0!==t&&(t=this._time);var e,i=this.getLabelsArray(),s=i.length;for(e=0;s>e;e++)if(i[e].time>t)return i[e].name;return null},l.getLabelBefore=function(t){null==t&&(t=this._time);for(var e=this.getLabelsArray(),i=e.length;--i>-1;)if(t>e[i].time)return e[i].name;return null},l.getLabelsArray=function(){var t,e=[],i=0;for(t in this._labels)e[i++]={time:this._labels[t],name:t};return e.sort(function(t,e){return t.time-e.time}),e},l.progress=function(t,e){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),e):this._time/this.duration()},l.totalProgress=function(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this._totalTime/this.totalDuration()},l.totalDuration=function(e){return arguments.length?-1===this._repeat?this:this.duration((e-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(t.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},l.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},l.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},l.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},l.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},l.currentLabel=function(t){return arguments.length?this.seek(t,!0):this.getLabelBefore(this._time+1e-8)},s},!0),function(){var t=180/Math.PI,e=[],i=[],s=[],r={},n=_gsScope._gsDefine.globals,a=function(t,e,i,s){this.a=t,this.b=e,this.c=i,this.d=s,this.da=s-t,this.ca=i-t,this.ba=e-t},o=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",h=function(t,e,i,s){var r={a:t},n={},a={},o={c:s},h=(t+e)/2,l=(e+i)/2,_=(i+s)/2,u=(h+l)/2,c=(l+_)/2,f=(c-u)/8;return r.b=h+(t-h)/4,n.b=u+f,r.c=n.a=(r.b+n.b)/2,n.c=a.a=(u+c)/2,a.b=c-f,o.b=_+(s-_)/4,a.c=o.a=(a.b+o.b)/2,[r,n,a,o]},l=function(t,r,n,a,o){var l,_,u,c,f,p,m,d,g,v,y,T,x,w=t.length-1,b=0,P=t[0].a;for(l=0;w>l;l++)f=t[b],_=f.a,u=f.d,c=t[b+1].d,o?(y=e[l],T=i[l],x=.25*(T+y)*r/(a?.5:s[l]||.5),p=u-(u-_)*(a?.5*r:0!==y?x/y:0),m=u+(c-u)*(a?.5*r:0!==T?x/T:0),d=u-(p+((m-p)*(3*y/(y+T)+.5)/4||0))):(p=u-.5*(u-_)*r,m=u+.5*(c-u)*r,d=u-(p+m)/2),p+=d,m+=d,f.c=g=p,f.b=0!==l?P:P=f.a+.6*(f.c-f.a),f.da=u-_,f.ca=g-_,f.ba=P-_,n?(v=h(_,P,g,u),t.splice(b,1,v[0],v[1],v[2],v[3]),b+=4):b++,P=m;f=t[b],f.b=P,f.c=P+.4*(f.d-P),f.da=f.d-f.a,f.ca=f.c-f.a,f.ba=P-f.a,n&&(v=h(f.a,P,f.c,f.d),t.splice(b,1,v[0],v[1],v[2],v[3]))},_=function(t,s,r,n){var o,h,l,_,u,c,f=[];if(n)for(t=[n].concat(t),h=t.length;--h>-1;)"string"==typeof(c=t[h][s])&&"="===c.charAt(1)&&(t[h][s]=n[s]+Number(c.charAt(0)+c.substr(2)));if(o=t.length-2,0>o)return f[0]=new a(t[0][s],0,0,t[-1>o?0:1][s]),f;for(h=0;o>h;h++)l=t[h][s],_=t[h+1][s],f[h]=new a(l,0,0,_),r&&(u=t[h+2][s],e[h]=(e[h]||0)+(_-l)*(_-l),i[h]=(i[h]||0)+(u-_)*(u-_));return f[h]=new a(t[h][s],0,0,t[h+1][s]),f},u=function(t,n,a,h,u,c){var f,p,m,d,g,v,y,T,x={},w=[],b=c||t[0];u="string"==typeof u?","+u+",":o,null==n&&(n=1);for(p in t[0])w.push(p);if(t.length>1){for(T=t[t.length-1],y=!0,f=w.length;--f>-1;)if(p=w[f],Math.abs(b[p]-T[p])>.05){y=!1;break}y&&(t=t.concat(),c&&t.unshift(c),t.push(t[1]),c=t[t.length-3])}for(e.length=i.length=s.length=0,f=w.length;--f>-1;)p=w[f],r[p]=-1!==u.indexOf(","+p+","),x[p]=_(t,p,r[p],c);for(f=e.length;--f>-1;)e[f]=Math.sqrt(e[f]),i[f]=Math.sqrt(i[f]);if(!h){for(f=w.length;--f>-1;)if(r[p])for(m=x[w[f]],v=m.length-1,d=0;v>d;d++)g=m[d+1].da/i[d]+m[d].da/e[d],s[d]=(s[d]||0)+g*g;for(f=s.length;--f>-1;)s[f]=Math.sqrt(s[f])}for(f=w.length,d=a?4:1;--f>-1;)p=w[f],m=x[p],l(m,n,a,h,r[p]),y&&(m.splice(0,d),m.splice(m.length-d,d));return x},c=function(t,e,i){e=e||"soft";var s,r,n,o,h,l,_,u,c,f,p,m={},d="cubic"===e?3:2,g="soft"===e,v=[];if(g&&i&&(t=[i].concat(t)),null==t||d+1>t.length)throw"invalid Bezier data";for(c in t[0])v.push(c);for(l=v.length;--l>-1;){for(c=v[l],m[c]=h=[],f=0,u=t.length,_=0;u>_;_++)s=null==i?t[_][c]:"string"==typeof(p=t[_][c])&&"="===p.charAt(1)?i[c]+Number(p.charAt(0)+p.substr(2)):Number(p),g&&_>1&&u-1>_&&(h[f++]=(s+h[f-2])/2),h[f++]=s;for(u=f-d+1,f=0,_=0;u>_;_+=d)s=h[_],r=h[_+1],n=h[_+2],o=2===d?0:h[_+3],h[f++]=p=3===d?new a(s,r,n,o):new a(s,(2*r+s)/3,(2*r+n)/3,n);h.length=f}return m},f=function(t,e,i){for(var s,r,n,a,o,h,l,_,u,c,f,p=1/i,m=t.length;--m>-1;)for(c=t[m],n=c.a,a=c.d-n,o=c.c-n,h=c.b-n,s=r=0,_=1;i>=_;_++)l=p*_,u=1-l,s=r-(r=(l*l*a+3*u*(l*o+u*h))*l),f=m*i+_-1,e[f]=(e[f]||0)+s*s},p=function(t,e){e=e>>0||6;var i,s,r,n,a=[],o=[],h=0,l=0,_=e-1,u=[],c=[];for(i in t)f(t[i],a,e);for(r=a.length,s=0;r>s;s++)h+=Math.sqrt(a[s]),n=s%e,c[n]=h,n===_&&(l+=h,n=s/e>>0,u[n]=c,o[n]=l,h=0,c=[]);return{length:l,lengths:o,segments:u}},m=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.4",API:2,global:!0,init:function(t,e,i){this._target=t,e instanceof Array&&(e={values:e}),this._func={},this._round={},this._props=[],this._timeRes=null==e.timeResolution?6:parseInt(e.timeResolution,10);var s,r,n,a,o,h=e.values||[],l={},_=h[0],f=e.autoRotate||i.vars.orientToBezier;this._autoRotate=f?f instanceof Array?f:[["x","y","rotation",f===!0?0:Number(f)||0]]:null;for(s in _)this._props.push(s);for(n=this._props.length;--n>-1;)s=this._props[n],this._overwriteProps.push(s),r=this._func[s]="function"==typeof t[s],l[s]=r?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]():parseFloat(t[s]),o||l[s]!==h[0][s]&&(o=l);if(this._beziers="cubic"!==e.type&&"quadratic"!==e.type&&"soft"!==e.type?u(h,isNaN(e.curviness)?1:e.curviness,!1,"thruBasic"===e.type,e.correlate,o):c(h,e.type,l),this._segCount=this._beziers[s].length,this._timeRes){var m=p(this._beziers,this._timeRes);this._length=m.length,this._lengths=m.lengths,this._segments=m.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(f=this._autoRotate)for(this._initialRotations=[],f[0]instanceof Array||(this._autoRotate=f=[f]),n=f.length;--n>-1;){for(a=0;3>a;a++)s=f[n][a],this._func[s]="function"==typeof t[s]?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]:!1;s=f[n][2],this._initialRotations[n]=this._func[s]?this._func[s].call(this._target):this._target[s]}return this._startRatio=i.vars.runBackwards?1:0,!0},set:function(e){var i,s,r,n,a,o,h,l,_,u,c=this._segCount,f=this._func,p=this._target,m=e!==this._startRatio;if(this._timeRes){if(_=this._lengths,u=this._curSeg,e*=this._length,r=this._li,e>this._l2&&c-1>r){for(l=c-1;l>r&&e>=(this._l2=_[++r]););this._l1=_[r-1],this._li=r,this._curSeg=u=this._segments[r],this._s2=u[this._s1=this._si=0]}else if(this._l1>e&&r>0){for(;r>0&&(this._l1=_[--r])>=e;);0===r&&this._l1>e?this._l1=0:r++,this._l2=_[r],this._li=r,this._curSeg=u=this._segments[r],this._s1=u[(this._si=u.length-1)-1]||0,this._s2=u[this._si]
}if(i=r,e-=this._l1,r=this._si,e>this._s2&&u.length-1>r){for(l=u.length-1;l>r&&e>=(this._s2=u[++r]););this._s1=u[r-1],this._si=r}else if(this._s1>e&&r>0){for(;r>0&&(this._s1=u[--r])>=e;);0===r&&this._s1>e?this._s1=0:r++,this._s2=u[r],this._si=r}o=(r+(e-this._s1)/(this._s2-this._s1))*this._prec}else i=0>e?0:e>=1?c-1:c*e>>0,o=(e-i*(1/c))*c;for(s=1-o,r=this._props.length;--r>-1;)n=this._props[r],a=this._beziers[n][i],h=(o*o*a.da+3*s*(o*a.ca+s*a.ba))*o+a.a,this._round[n]&&(h=Math.round(h)),f[n]?p[n](h):p[n]=h;if(this._autoRotate){var d,g,v,y,T,x,w,b=this._autoRotate;for(r=b.length;--r>-1;)n=b[r][2],x=b[r][3]||0,w=b[r][4]===!0?1:t,a=this._beziers[b[r][0]],d=this._beziers[b[r][1]],a&&d&&(a=a[i],d=d[i],g=a.a+(a.b-a.a)*o,y=a.b+(a.c-a.b)*o,g+=(y-g)*o,y+=(a.c+(a.d-a.c)*o-y)*o,v=d.a+(d.b-d.a)*o,T=d.b+(d.c-d.b)*o,v+=(T-v)*o,T+=(d.c+(d.d-d.c)*o-T)*o,h=m?Math.atan2(T-v,y-g)*w+x:this._initialRotations[r],f[n]?p[n](h):p[n]=h)}}}),d=m.prototype;m.bezierThrough=u,m.cubicToQuadratic=h,m._autoCSS=!0,m.quadraticToCubic=function(t,e,i){return new a(t,(2*e+t)/3,(2*e+i)/3,i)},m._cssRegister=function(){var t=n.CSSPlugin;if(t){var e=t._internals,i=e._parseToProxy,s=e._setPluginRatio,r=e.CSSPropTween;e._registerComplexSpecialProp("bezier",{parser:function(t,e,n,a,o,h){e instanceof Array&&(e={values:e}),h=new m;var l,_,u,c=e.values,f=c.length-1,p=[],d={};if(0>f)return o;for(l=0;f>=l;l++)u=i(t,c[l],a,o,h,f!==l),p[l]=u.end;for(_ in e)d[_]=e[_];return d.values=p,o=new r(t,"bezier",0,0,u.pt,2),o.data=u,o.plugin=h,o.setRatio=s,0===d.autoRotate&&(d.autoRotate=!0),!d.autoRotate||d.autoRotate instanceof Array||(l=d.autoRotate===!0?0:Number(d.autoRotate),d.autoRotate=null!=u.end.left?[["left","top","rotation",l,!1]]:null!=u.end.x?[["x","y","rotation",l,!1]]:!1),d.autoRotate&&(a._transform||a._enableTransforms(!1),u.autoRotate=a._target._gsTransform),h._onInitTween(u.proxy,d,a._tween),o}})}},d._roundProps=function(t,e){for(var i=this._overwriteProps,s=i.length;--s>-1;)(t[i[s]]||t.bezier||t.bezierThrough)&&(this._round[i[s]]=e)},d._kill=function(t){var e,i,s=this._props;for(e in this._beziers)if(e in t)for(delete this._beziers[e],delete this._func[e],i=s.length;--i>-1;)s[i]===e&&s.splice(i,1);return this._super._kill.call(this,t)}}(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var i,s,r,n,a=function(){t.call(this,"css"),this._overwriteProps.length=0,this.setRatio=a.prototype.setRatio},o=_gsScope._gsDefine.globals,h={},l=a.prototype=new t("css");l.constructor=a,a.version="1.17.0",a.API=2,a.defaultTransformPerspective=0,a.defaultSkewType="compensated",a.defaultSmoothOrigin=!0,l="px",a.suffixMap={top:l,right:l,bottom:l,left:l,width:l,height:l,fontSize:l,padding:l,margin:l,perspective:l,lineHeight:""};var _,u,c,f,p,m,d=/(?:\d|\-\d|\.\d|\-\.\d)+/g,g=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,v=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,y=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,T=/(?:\d|\-|\+|=|#|\.)*/g,x=/opacity *= *([^)]*)/i,w=/opacity:([^;]*)/i,b=/alpha\(opacity *=.+?\)/i,P=/^(rgb|hsl)/,k=/([A-Z])/g,S=/-([a-z])/gi,R=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,O=function(t,e){return e.toUpperCase()},A=/(?:Left|Right|Width)/i,C=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,D=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,M=/,(?=[^\)]*(?:\(|$))/gi,z=Math.PI/180,I=180/Math.PI,F={},N=document,E=function(t){return N.createElementNS?N.createElementNS("http://www.w3.org/1999/xhtml",t):N.createElement(t)},L=E("div"),X=E("img"),B=a._internals={_specialProps:h},Y=navigator.userAgent,j=function(){var t=Y.indexOf("Android"),e=E("a");return c=-1!==Y.indexOf("Safari")&&-1===Y.indexOf("Chrome")&&(-1===t||Number(Y.substr(t+8,1))>3),p=c&&6>Number(Y.substr(Y.indexOf("Version/")+8,1)),f=-1!==Y.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Y))&&(m=parseFloat(RegExp.$1)),e?(e.style.cssText="top:1px;opacity:.55;",/^0.55/.test(e.style.opacity)):!1}(),U=function(t){return x.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1},q=function(t){window.console&&console.log(t)},V="",G="",W=function(t,e){e=e||L;var i,s,r=e.style;if(void 0!==r[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],s=5;--s>-1&&void 0===r[i[s]+t];);return s>=0?(G=3===s?"ms":i[s],V="-"+G.toLowerCase()+"-",G+t):null},Z=N.defaultView?N.defaultView.getComputedStyle:function(){},Q=a.getStyle=function(t,e,i,s,r){var n;return j||"opacity"!==e?(!s&&t.style[e]?n=t.style[e]:(i=i||Z(t))?n=i[e]||i.getPropertyValue(e)||i.getPropertyValue(e.replace(k,"-$1").toLowerCase()):t.currentStyle&&(n=t.currentStyle[e]),null==r||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:r):U(t)},$=B.convertToPixels=function(t,i,s,r,n){if("px"===r||!r)return s;if("auto"===r||!s)return 0;var o,h,l,_=A.test(i),u=t,c=L.style,f=0>s;if(f&&(s=-s),"%"===r&&-1!==i.indexOf("border"))o=s/100*(_?t.clientWidth:t.clientHeight);else{if(c.cssText="border:0 solid red;position:"+Q(t,"position")+";line-height:0;","%"!==r&&u.appendChild)c[_?"borderLeftWidth":"borderTopWidth"]=s+r;else{if(u=t.parentNode||N.body,h=u._gsCache,l=e.ticker.frame,h&&_&&h.time===l)return h.width*s/100;c[_?"width":"height"]=s+r}u.appendChild(L),o=parseFloat(L[_?"offsetWidth":"offsetHeight"]),u.removeChild(L),_&&"%"===r&&a.cacheWidths!==!1&&(h=u._gsCache=u._gsCache||{},h.time=l,h.width=100*(o/s)),0!==o||n||(o=$(t,i,s,r,!0))}return f?-o:o},H=B.calculateOffset=function(t,e,i){if("absolute"!==Q(t,"position",i))return 0;var s="left"===e?"Left":"Top",r=Q(t,"margin"+s,i);return t["offset"+s]-($(t,e,parseFloat(r),r.replace(T,""))||0)},K=function(t,e){var i,s,r,n={};if(e=e||Z(t,null))if(i=e.length)for(;--i>-1;)r=e[i],(-1===r.indexOf("-transform")||Pe===r)&&(n[r.replace(S,O)]=e.getPropertyValue(r));else for(i in e)(-1===i.indexOf("Transform")||be===i)&&(n[i]=e[i]);else if(e=t.currentStyle||t.style)for(i in e)"string"==typeof i&&void 0===n[i]&&(n[i.replace(S,O)]=e[i]);return j||(n.opacity=U(t)),s=Ne(t,e,!1),n.rotation=s.rotation,n.skewX=s.skewX,n.scaleX=s.scaleX,n.scaleY=s.scaleY,n.x=s.x,n.y=s.y,Se&&(n.z=s.z,n.rotationX=s.rotationX,n.rotationY=s.rotationY,n.scaleZ=s.scaleZ),n.filters&&delete n.filters,n},J=function(t,e,i,s,r){var n,a,o,h={},l=t.style;for(a in i)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=i[a])||r&&r[a])&&-1===a.indexOf("Origin")&&("number"==typeof n||"string"==typeof n)&&(h[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(y,"")?n:0:H(t,a),void 0!==l[a]&&(o=new fe(l,a,l[a],o)));if(s)for(a in s)"className"!==a&&(h[a]=s[a]);return{difs:h,firstMPT:o}},te={width:["Left","Right"],height:["Top","Bottom"]},ee=["marginLeft","marginRight","marginTop","marginBottom"],ie=function(t,e,i){var s=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),r=te[e],n=r.length;for(i=i||Z(t,null);--n>-1;)s-=parseFloat(Q(t,"padding"+r[n],i,!0))||0,s-=parseFloat(Q(t,"border"+r[n]+"Width",i,!0))||0;return s},se=function(t,e){(null==t||""===t||"auto"===t||"auto auto"===t)&&(t="0 0");var i=t.split(" "),s=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":i[0],r=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":i[1];return null==r?r="center"===s?"50%":"0":"center"===r&&(r="50%"),("center"===s||isNaN(parseFloat(s))&&-1===(s+"").indexOf("="))&&(s="50%"),t=s+" "+r+(i.length>2?" "+i[2]:""),e&&(e.oxp=-1!==s.indexOf("%"),e.oyp=-1!==r.indexOf("%"),e.oxr="="===s.charAt(1),e.oyr="="===r.charAt(1),e.ox=parseFloat(s.replace(y,"")),e.oy=parseFloat(r.replace(y,"")),e.v=t),e||t},re=function(t,e){return"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)},ne=function(t,e){return null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2))+e:parseFloat(t)},ae=function(t,e,i,s){var r,n,a,o,h,l=1e-6;return null==t?o=e:"number"==typeof t?o=t:(r=360,n=t.split("_"),h="="===t.charAt(1),a=(h?parseInt(t.charAt(0)+"1",10)*parseFloat(n[0].substr(2)):parseFloat(n[0]))*(-1===t.indexOf("rad")?1:I)-(h?0:e),n.length&&(s&&(s[i]=e+a),-1!==t.indexOf("short")&&(a%=r,a!==a%(r/2)&&(a=0>a?a+r:a-r)),-1!==t.indexOf("_cw")&&0>a?a=(a+9999999999*r)%r-(0|a/r)*r:-1!==t.indexOf("ccw")&&a>0&&(a=(a-9999999999*r)%r-(0|a/r)*r)),o=e+a),l>o&&o>-l&&(o=0),o},oe={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},he=function(t,e,i){return t=0>t?t+1:t>1?t-1:t,0|255*(1>6*t?e+6*(i-e)*t:.5>t?i:2>3*t?e+6*(i-e)*(2/3-t):e)+.5},le=a.parseColor=function(t){var e,i,s,r,n,a;return t&&""!==t?"number"==typeof t?[t>>16,255&t>>8,255&t]:(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),oe[t]?oe[t]:"#"===t.charAt(0)?(4===t.length&&(e=t.charAt(1),i=t.charAt(2),s=t.charAt(3),t="#"+e+e+i+i+s+s),t=parseInt(t.substr(1),16),[t>>16,255&t>>8,255&t]):"hsl"===t.substr(0,3)?(t=t.match(d),r=Number(t[0])%360/360,n=Number(t[1])/100,a=Number(t[2])/100,i=.5>=a?a*(n+1):a+n-a*n,e=2*a-i,t.length>3&&(t[3]=Number(t[3])),t[0]=he(r+1/3,e,i),t[1]=he(r,e,i),t[2]=he(r-1/3,e,i),t):(t=t.match(d)||oe.transparent,t[0]=Number(t[0]),t[1]=Number(t[1]),t[2]=Number(t[2]),t.length>3&&(t[3]=Number(t[3])),t)):oe.black},_e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(l in oe)_e+="|"+l+"\\b";_e=RegExp(_e+")","gi");var ue=function(t,e,i,s){if(null==t)return function(t){return t};var r,n=e?(t.match(_e)||[""])[0]:"",a=t.split(n).join("").match(v)||[],o=t.substr(0,t.indexOf(a[0])),h=")"===t.charAt(t.length-1)?")":"",l=-1!==t.indexOf(" ")?" ":",",_=a.length,u=_>0?a[0].replace(d,""):"";return _?r=e?function(t){var e,c,f,p;if("number"==typeof t)t+=u;else if(s&&M.test(t)){for(p=t.replace(M,"|").split("|"),f=0;p.length>f;f++)p[f]=r(p[f]);return p.join(",")}if(e=(t.match(_e)||[n])[0],c=t.split(e).join("").match(v)||[],f=c.length,_>f--)for(;_>++f;)c[f]=i?c[0|(f-1)/2]:a[f];return o+c.join(l)+l+e+h+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,n,c;if("number"==typeof t)t+=u;else if(s&&M.test(t)){for(n=t.replace(M,"|").split("|"),c=0;n.length>c;c++)n[c]=r(n[c]);return n.join(",")}if(e=t.match(v)||[],c=e.length,_>c--)for(;_>++c;)e[c]=i?e[0|(c-1)/2]:a[c];return o+e.join(l)+h}:function(t){return t}},ce=function(t){return t=t.split(","),function(e,i,s,r,n,a,o){var h,l=(i+"").split(" ");for(o={},h=0;4>h;h++)o[t[h]]=l[h]=l[h]||l[(h-1)/2>>0];return r.parse(e,o,n,a)}},fe=(B._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,s,r,n=this.data,a=n.proxy,o=n.firstMPT,h=1e-6;o;)e=a[o.v],o.r?e=Math.round(e):h>e&&e>-h&&(e=0),o.t[o.p]=e,o=o._next;if(n.autoRotate&&(n.autoRotate.rotation=a.rotation),1===t)for(o=n.firstMPT;o;){if(i=o.t,i.type){if(1===i.type){for(r=i.xs0+i.s+i.xs1,s=1;i.l>s;s++)r+=i["xn"+s]+i["xs"+(s+1)];i.e=r}}else i.e=i.s+i.xs0;o=o._next}},function(t,e,i,s,r){this.t=t,this.p=e,this.v=i,this.r=r,s&&(s._prev=this,this._next=s)}),pe=(B._parseToProxy=function(t,e,i,s,r,n){var a,o,h,l,_,u=s,c={},f={},p=i._transform,m=F;for(i._transform=null,F=e,s=_=i.parse(t,e,s,r),F=m,n&&(i._transform=p,u&&(u._prev=null,u._prev&&(u._prev._next=null)));s&&s!==u;){if(1>=s.type&&(o=s.p,f[o]=s.s+s.c,c[o]=s.s,n||(l=new fe(s,"s",o,l,s.r),s.c=0),1===s.type))for(a=s.l;--a>0;)h="xn"+a,o=s.p+"_"+h,f[o]=s.data[h],c[o]=s[h],n||(l=new fe(s,h,o,l,s.rxp[h]));s=s._next}return{proxy:c,end:f,firstMPT:l,pt:_}},B.CSSPropTween=function(t,e,s,r,a,o,h,l,_,u,c){this.t=t,this.p=e,this.s=s,this.c=r,this.n=h||e,t instanceof pe||n.push(this.n),this.r=l,this.type=o||0,_&&(this.pr=_,i=!0),this.b=void 0===u?s:u,this.e=void 0===c?s+r:c,a&&(this._next=a,a._prev=this)}),me=function(t,e,i,s,r,n){var a=new pe(t,e,i,s-i,r,-1,n);return a.b=i,a.e=a.xs0=s,a},de=a.parseComplex=function(t,e,i,s,r,n,a,o,h,l){i=i||n||"",a=new pe(t,e,0,0,a,l?2:1,null,!1,o,i,s),s+="";var u,c,f,p,m,v,y,T,x,w,b,k,S=i.split(", ").join(",").split(" "),R=s.split(", ").join(",").split(" "),O=S.length,A=_!==!1;for((-1!==s.indexOf(",")||-1!==i.indexOf(","))&&(S=S.join(" ").replace(M,", ").split(" "),R=R.join(" ").replace(M,", ").split(" "),O=S.length),O!==R.length&&(S=(n||"").split(" "),O=S.length),a.plugin=h,a.setRatio=l,u=0;O>u;u++)if(p=S[u],m=R[u],T=parseFloat(p),T||0===T)a.appendXtra("",T,re(m,T),m.replace(g,""),A&&-1!==m.indexOf("px"),!0);else if(r&&("#"===p.charAt(0)||oe[p]||P.test(p)))k=","===m.charAt(m.length-1)?"),":")",p=le(p),m=le(m),x=p.length+m.length>6,x&&!j&&0===m[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(R[u]).join("transparent")):(j||(x=!1),a.appendXtra(x?"rgba(":"rgb(",p[0],m[0]-p[0],",",!0,!0).appendXtra("",p[1],m[1]-p[1],",",!0).appendXtra("",p[2],m[2]-p[2],x?",":k,!0),x&&(p=4>p.length?1:p[3],a.appendXtra("",p,(4>m.length?1:m[3])-p,k,!1)));else if(v=p.match(d)){if(y=m.match(g),!y||y.length!==v.length)return a;for(f=0,c=0;v.length>c;c++)b=v[c],w=p.indexOf(b,f),a.appendXtra(p.substr(f,w-f),Number(b),re(y[c],b),"",A&&"px"===p.substr(w+b.length,2),0===c),f=w+b.length;a["xs"+a.l]+=p.substr(f)}else a["xs"+a.l]+=a.l?" "+p:p;if(-1!==s.indexOf("=")&&a.data){for(k=a.xs0+a.data.s,u=1;a.l>u;u++)k+=a["xs"+u]+a.data["xn"+u];a.e=k+a["xs"+u]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},ge=9;for(l=pe.prototype,l.l=l.pr=0;--ge>0;)l["xn"+ge]=0,l["xs"+ge]="";l.xs0="",l._next=l._prev=l.xfirst=l.data=l.plugin=l.setRatio=l.rxp=null,l.appendXtra=function(t,e,i,s,r,n){var a=this,o=a.l;return a["xs"+o]+=n&&o?" "+t:t||"",i||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=s||"",o>0?(a.data["xn"+o]=e+i,a.rxp["xn"+o]=r,a["xn"+o]=e,a.plugin||(a.xfirst=new pe(a,"xn"+o,e,i,a.xfirst||a,0,a.n,r,a.pr),a.xfirst.xs0=0),a):(a.data={s:e+i},a.rxp={},a.s=e,a.c=i,a.r=r,a)):(a["xs"+o]+=e+(s||""),a)};var ve=function(t,e){e=e||{},this.p=e.prefix?W(t)||t:t,h[t]=h[this.p]=this,this.format=e.formatter||ue(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},ye=B._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var s,r,n=t.split(","),a=e.defaultValue;for(i=i||[a],s=0;n.length>s;s++)e.prefix=0===s&&e.prefix,e.defaultValue=i[s]||a,r=new ve(n[s],e)},Te=function(t){if(!h[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";ye(t,{parser:function(t,i,s,r,n,a,l){var _=o.com.greensock.plugins[e];return _?(_._cssRegister(),h[s].parse(t,i,s,r,n,a,l)):(q("Error: "+e+" js file not loaded."),n)}})}};l=ve.prototype,l.parseComplex=function(t,e,i,s,r,n){var a,o,h,l,_,u,c=this.keyword;if(this.multi&&(M.test(i)||M.test(e)?(o=e.replace(M,"|").split("|"),h=i.replace(M,"|").split("|")):c&&(o=[e],h=[i])),h){for(l=h.length>o.length?h.length:o.length,a=0;l>a;a++)e=o[a]=o[a]||this.dflt,i=h[a]=h[a]||this.dflt,c&&(_=e.indexOf(c),u=i.indexOf(c),_!==u&&(-1===u?o[a]=o[a].split(c).join(""):-1===_&&(o[a]+=" "+c)));e=o.join(", "),i=h.join(", ")}return de(t,this.p,e,i,this.clrs,this.dflt,s,this.pr,r,n)},l.parse=function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(Q(t,this.p,r,!1,this.dflt)),this.format(e),n,a)},a.registerSpecialProp=function(t,e,i){ye(t,{parser:function(t,s,r,n,a,o){var h=new pe(t,r,0,0,a,2,r,!1,i);return h.plugin=o,h.setRatio=e(t,s,n._tween,r),h},priority:i})},a.useSVGTransformAttr=c||f;var xe,we="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),be=W("transform"),Pe=V+"transform",ke=W("transformOrigin"),Se=null!==W("perspective"),Re=B.Transform=function(){this.perspective=parseFloat(a.defaultTransformPerspective)||0,this.force3D=a.defaultForce3D!==!1&&Se?a.defaultForce3D||"auto":!1},Oe=window.SVGElement,Ae=function(t,e,i){var s,r=N.createElementNS("http://www.w3.org/2000/svg",t),n=/([a-z])([A-Z])/g;for(s in i)r.setAttributeNS(null,s.replace(n,"$1-$2").toLowerCase(),i[s]);return e.appendChild(r),r},Ce=N.documentElement,De=function(){var t,e,i,s=m||/Android/i.test(Y)&&!window.chrome;return N.createElementNS&&!s&&(t=Ae("svg",Ce),e=Ae("rect",t,{width:100,height:50,x:100}),i=e.getBoundingClientRect().width,e.style[ke]="50% 50%",e.style[be]="scaleX(0.5)",s=i===e.getBoundingClientRect().width&&!(f&&Se),Ce.removeChild(t)),s}(),Me=function(t,e,i,s,r){var n,o,h,l,_,u,c,f,p,m,d,g,v,y,T=t._gsTransform,x=Fe(t,!0);T&&(v=T.xOrigin,y=T.yOrigin),(!s||2>(n=s.split(" ")).length)&&(c=t.getBBox(),e=se(e).split(" "),n=[(-1!==e[0].indexOf("%")?parseFloat(e[0])/100*c.width:parseFloat(e[0]))+c.x,(-1!==e[1].indexOf("%")?parseFloat(e[1])/100*c.height:parseFloat(e[1]))+c.y]),i.xOrigin=l=parseFloat(n[0]),i.yOrigin=_=parseFloat(n[1]),s&&x!==Ie&&(u=x[0],c=x[1],f=x[2],p=x[3],m=x[4],d=x[5],g=u*p-c*f,o=l*(p/g)+_*(-f/g)+(f*d-p*m)/g,h=l*(-c/g)+_*(u/g)-(u*d-c*m)/g,l=i.xOrigin=n[0]=o,_=i.yOrigin=n[1]=h),T&&(r||r!==!1&&a.defaultSmoothOrigin!==!1?(o=l-v,h=_-y,T.xOffset+=o*x[0]+h*x[2]-o,T.yOffset+=o*x[1]+h*x[3]-h):T.xOffset=T.yOffset=0),t.setAttribute("data-svg-origin",n.join(" "))},ze=function(t){return!!(Oe&&"function"==typeof t.getBBox&&t.getCTM&&(!t.parentNode||t.parentNode.getBBox&&t.parentNode.getCTM))},Ie=[1,0,0,1,0,0],Fe=function(t,e){var i,s,r,n,a,o=t._gsTransform||new Re,h=1e5;if(be?s=Q(t,Pe,null,!0):t.currentStyle&&(s=t.currentStyle.filter.match(C),s=s&&4===s.length?[s[0].substr(4),Number(s[2].substr(4)),Number(s[1].substr(4)),s[3].substr(4),o.x||0,o.y||0].join(","):""),i=!s||"none"===s||"matrix(1, 0, 0, 1, 0, 0)"===s,(o.svg||t.getBBox&&ze(t))&&(i&&-1!==(t.style[be]+"").indexOf("matrix")&&(s=t.style[be],i=0),r=t.getAttribute("transform"),i&&r&&(-1!==r.indexOf("matrix")?(s=r,i=0):-1!==r.indexOf("translate")&&(s="matrix(1,0,0,1,"+r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",i=0))),i)return Ie;for(r=(s||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],ge=r.length;--ge>-1;)n=Number(r[ge]),r[ge]=(a=n-(n|=0))?(0|a*h+(0>a?-.5:.5))/h+n:n;return e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r},Ne=B.getTransform=function(t,i,s,n){if(t._gsTransform&&s&&!n)return t._gsTransform;var o,h,l,_,u,c,f=s?t._gsTransform||new Re:new Re,p=0>f.scaleX,m=2e-5,d=1e5,g=Se?parseFloat(Q(t,ke,i,!1,"0 0 0").split(" ")[2])||f.zOrigin||0:0,v=parseFloat(a.defaultTransformPerspective)||0;if(f.svg=!(!t.getBBox||!ze(t)),f.svg&&(Me(t,Q(t,ke,r,!1,"50% 50%")+"",f,t.getAttribute("data-svg-origin")),xe=a.useSVGTransformAttr||De),o=Fe(t),o!==Ie){if(16===o.length){var y,T,x,w,b,P=o[0],k=o[1],S=o[2],R=o[3],O=o[4],A=o[5],C=o[6],D=o[7],M=o[8],z=o[9],F=o[10],N=o[12],E=o[13],L=o[14],X=o[11],B=Math.atan2(C,F);f.zOrigin&&(L=-f.zOrigin,N=M*L-o[12],E=z*L-o[13],L=F*L+f.zOrigin-o[14]),f.rotationX=B*I,B&&(w=Math.cos(-B),b=Math.sin(-B),y=O*w+M*b,T=A*w+z*b,x=C*w+F*b,M=O*-b+M*w,z=A*-b+z*w,F=C*-b+F*w,X=D*-b+X*w,O=y,A=T,C=x),B=Math.atan2(M,F),f.rotationY=B*I,B&&(w=Math.cos(-B),b=Math.sin(-B),y=P*w-M*b,T=k*w-z*b,x=S*w-F*b,z=k*b+z*w,F=S*b+F*w,X=R*b+X*w,P=y,k=T,S=x),B=Math.atan2(k,P),f.rotation=B*I,B&&(w=Math.cos(-B),b=Math.sin(-B),P=P*w+O*b,T=k*w+A*b,A=k*-b+A*w,C=S*-b+C*w,k=T),f.rotationX&&Math.abs(f.rotationX)+Math.abs(f.rotation)>359.9&&(f.rotationX=f.rotation=0,f.rotationY+=180),f.scaleX=(0|Math.sqrt(P*P+k*k)*d+.5)/d,f.scaleY=(0|Math.sqrt(A*A+z*z)*d+.5)/d,f.scaleZ=(0|Math.sqrt(C*C+F*F)*d+.5)/d,f.skewX=0,f.perspective=X?1/(0>X?-X:X):0,f.x=N,f.y=E,f.z=L,f.svg&&(f.x-=f.xOrigin-(f.xOrigin*P-f.yOrigin*O),f.y-=f.yOrigin-(f.yOrigin*k-f.xOrigin*A))}else if(!(Se&&!n&&o.length&&f.x===o[4]&&f.y===o[5]&&(f.rotationX||f.rotationY)||void 0!==f.x&&"none"===Q(t,"display",i))){var Y=o.length>=6,j=Y?o[0]:1,U=o[1]||0,q=o[2]||0,V=Y?o[3]:1;f.x=o[4]||0,f.y=o[5]||0,l=Math.sqrt(j*j+U*U),_=Math.sqrt(V*V+q*q),u=j||U?Math.atan2(U,j)*I:f.rotation||0,c=q||V?Math.atan2(q,V)*I+u:f.skewX||0,Math.abs(c)>90&&270>Math.abs(c)&&(p?(l*=-1,c+=0>=u?180:-180,u+=0>=u?180:-180):(_*=-1,c+=0>=c?180:-180)),f.scaleX=l,f.scaleY=_,f.rotation=u,f.skewX=c,Se&&(f.rotationX=f.rotationY=f.z=0,f.perspective=v,f.scaleZ=1),f.svg&&(f.x-=f.xOrigin-(f.xOrigin*j+f.yOrigin*q),f.y-=f.yOrigin-(f.xOrigin*U+f.yOrigin*V))}f.zOrigin=g;for(h in f)m>f[h]&&f[h]>-m&&(f[h]=0)}return s&&(t._gsTransform=f,f.svg&&(xe&&t.style[be]?e.delayedCall(.001,function(){Be(t.style,be)}):!xe&&t.getAttribute("transform")&&e.delayedCall(.001,function(){t.removeAttribute("transform")}))),f},Ee=function(t){var e,i,s=this.data,r=-s.rotation*z,n=r+s.skewX*z,a=1e5,o=(0|Math.cos(r)*s.scaleX*a)/a,h=(0|Math.sin(r)*s.scaleX*a)/a,l=(0|Math.sin(n)*-s.scaleY*a)/a,_=(0|Math.cos(n)*s.scaleY*a)/a,u=this.t.style,c=this.t.currentStyle;if(c){i=h,h=-l,l=-i,e=c.filter,u.filter="";var f,p,d=this.t.offsetWidth,g=this.t.offsetHeight,v="absolute"!==c.position,y="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+h+", M21="+l+", M22="+_,w=s.x+d*s.xPercent/100,b=s.y+g*s.yPercent/100;if(null!=s.ox&&(f=(s.oxp?.01*d*s.ox:s.ox)-d/2,p=(s.oyp?.01*g*s.oy:s.oy)-g/2,w+=f-(f*o+p*h),b+=p-(f*l+p*_)),v?(f=d/2,p=g/2,y+=", Dx="+(f-(f*o+p*h)+w)+", Dy="+(p-(f*l+p*_)+b)+")"):y+=", sizingMethod='auto expand')",u.filter=-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?e.replace(D,y):y+" "+e,(0===t||1===t)&&1===o&&0===h&&0===l&&1===_&&(v&&-1===y.indexOf("Dx=0, Dy=0")||x.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf("gradient("&&e.indexOf("Alpha"))&&u.removeAttribute("filter")),!v){var P,k,S,R=8>m?1:-1;for(f=s.ieOffsetX||0,p=s.ieOffsetY||0,s.ieOffsetX=Math.round((d-((0>o?-o:o)*d+(0>h?-h:h)*g))/2+w),s.ieOffsetY=Math.round((g-((0>_?-_:_)*g+(0>l?-l:l)*d))/2+b),ge=0;4>ge;ge++)k=ee[ge],P=c[k],i=-1!==P.indexOf("px")?parseFloat(P):$(this.t,k,parseFloat(P),P.replace(T,""))||0,S=i!==s[k]?2>ge?-s.ieOffsetX:-s.ieOffsetY:2>ge?f-s.ieOffsetX:p-s.ieOffsetY,u[k]=(s[k]=Math.round(i-S*(0===ge||2===ge?1:R)))+"px"}}},Le=B.set3DTransformRatio=B.setTransformRatio=function(t){var e,i,s,r,n,a,o,h,l,_,u,c,p,m,d,g,v,y,T,x,w,b,P,k=this.data,S=this.t.style,R=k.rotation,O=k.rotationX,A=k.rotationY,C=k.scaleX,D=k.scaleY,M=k.scaleZ,I=k.x,F=k.y,N=k.z,E=k.svg,L=k.perspective,X=k.force3D;if(!(((1!==t&&0!==t||"auto"!==X||this.tween._totalTime!==this.tween._totalDuration&&this.tween._totalTime)&&X||N||L||A||O)&&(!xe||!E)&&Se))return R||k.skewX||E?(R*=z,b=k.skewX*z,P=1e5,e=Math.cos(R)*C,r=Math.sin(R)*C,i=Math.sin(R-b)*-D,n=Math.cos(R-b)*D,b&&"simple"===k.skewType&&(v=Math.tan(b),v=Math.sqrt(1+v*v),i*=v,n*=v,k.skewY&&(e*=v,r*=v)),E&&(I+=k.xOrigin-(k.xOrigin*e+k.yOrigin*i)+k.xOffset,F+=k.yOrigin-(k.xOrigin*r+k.yOrigin*n)+k.yOffset,xe&&(k.xPercent||k.yPercent)&&(m=this.t.getBBox(),I+=.01*k.xPercent*m.width,F+=.01*k.yPercent*m.height),m=1e-6,m>I&&I>-m&&(I=0),m>F&&F>-m&&(F=0)),T=(0|e*P)/P+","+(0|r*P)/P+","+(0|i*P)/P+","+(0|n*P)/P+","+I+","+F+")",E&&xe?this.t.setAttribute("transform","matrix("+T):S[be]=(k.xPercent||k.yPercent?"translate("+k.xPercent+"%,"+k.yPercent+"%) matrix(":"matrix(")+T):S[be]=(k.xPercent||k.yPercent?"translate("+k.xPercent+"%,"+k.yPercent+"%) matrix(":"matrix(")+C+",0,0,"+D+","+I+","+F+")",void 0;if(f&&(m=1e-4,m>C&&C>-m&&(C=M=2e-5),m>D&&D>-m&&(D=M=2e-5),!L||k.z||k.rotationX||k.rotationY||(L=0)),R||k.skewX)R*=z,d=e=Math.cos(R),g=r=Math.sin(R),k.skewX&&(R-=k.skewX*z,d=Math.cos(R),g=Math.sin(R),"simple"===k.skewType&&(v=Math.tan(k.skewX*z),v=Math.sqrt(1+v*v),d*=v,g*=v,k.skewY&&(e*=v,r*=v))),i=-g,n=d;else{if(!(A||O||1!==M||L||E))return S[be]=(k.xPercent||k.yPercent?"translate("+k.xPercent+"%,"+k.yPercent+"%) translate3d(":"translate3d(")+I+"px,"+F+"px,"+N+"px)"+(1!==C||1!==D?" scale("+C+","+D+")":""),void 0;e=n=1,i=r=0}l=1,s=a=o=h=_=u=0,c=L?-1/L:0,p=k.zOrigin,m=1e-6,x=",",w="0",R=A*z,R&&(d=Math.cos(R),g=Math.sin(R),o=-g,_=c*-g,s=e*g,a=r*g,l=d,c*=d,e*=d,r*=d),R=O*z,R&&(d=Math.cos(R),g=Math.sin(R),v=i*d+s*g,y=n*d+a*g,h=l*g,u=c*g,s=i*-g+s*d,a=n*-g+a*d,l*=d,c*=d,i=v,n=y),1!==M&&(s*=M,a*=M,l*=M,c*=M),1!==D&&(i*=D,n*=D,h*=D,u*=D),1!==C&&(e*=C,r*=C,o*=C,_*=C),(p||E)&&(p&&(I+=s*-p,F+=a*-p,N+=l*-p+p),E&&(I+=k.xOrigin-(k.xOrigin*e+k.yOrigin*i)+k.xOffset,F+=k.yOrigin-(k.xOrigin*r+k.yOrigin*n)+k.yOffset),m>I&&I>-m&&(I=w),m>F&&F>-m&&(F=w),m>N&&N>-m&&(N=0)),T=k.xPercent||k.yPercent?"translate("+k.xPercent+"%,"+k.yPercent+"%) matrix3d(":"matrix3d(",T+=(m>e&&e>-m?w:e)+x+(m>r&&r>-m?w:r)+x+(m>o&&o>-m?w:o),T+=x+(m>_&&_>-m?w:_)+x+(m>i&&i>-m?w:i)+x+(m>n&&n>-m?w:n),O||A?(T+=x+(m>h&&h>-m?w:h)+x+(m>u&&u>-m?w:u)+x+(m>s&&s>-m?w:s),T+=x+(m>a&&a>-m?w:a)+x+(m>l&&l>-m?w:l)+x+(m>c&&c>-m?w:c)+x):T+=",0,0,0,0,1,0,",T+=I+x+F+x+N+x+(L?1+-N/L:1)+")",S[be]=T};l=Re.prototype,l.x=l.y=l.z=l.skewX=l.skewY=l.rotation=l.rotationX=l.rotationY=l.zOrigin=l.xPercent=l.yPercent=l.xOffset=l.yOffset=0,l.scaleX=l.scaleY=l.scaleZ=1,ye("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(t,e,i,s,n,o,h){if(s._lastParsedTransform===h)return n;s._lastParsedTransform=h;var l,_,u,c,f,p,m,d,g,v=t._gsTransform,y=s._transform=Ne(t,r,!0,h.parseTransform),T=t.style,x=1e-6,w=we.length,b=h,P={},k="transformOrigin";if("string"==typeof b.transform&&be)u=L.style,u[be]=b.transform,u.display="block",u.position="absolute",N.body.appendChild(L),l=Ne(L,null,!1),N.body.removeChild(L),null!=b.xPercent&&(l.xPercent=ne(b.xPercent,y.xPercent)),null!=b.yPercent&&(l.yPercent=ne(b.yPercent,y.yPercent));else if("object"==typeof b){if(l={scaleX:ne(null!=b.scaleX?b.scaleX:b.scale,y.scaleX),scaleY:ne(null!=b.scaleY?b.scaleY:b.scale,y.scaleY),scaleZ:ne(b.scaleZ,y.scaleZ),x:ne(b.x,y.x),y:ne(b.y,y.y),z:ne(b.z,y.z),xPercent:ne(b.xPercent,y.xPercent),yPercent:ne(b.yPercent,y.yPercent),perspective:ne(b.transformPerspective,y.perspective)},m=b.directionalRotation,null!=m)if("object"==typeof m)for(u in m)b[u]=m[u];else b.rotation=m;"string"==typeof b.x&&-1!==b.x.indexOf("%")&&(l.x=0,l.xPercent=ne(b.x,y.xPercent)),"string"==typeof b.y&&-1!==b.y.indexOf("%")&&(l.y=0,l.yPercent=ne(b.y,y.yPercent)),l.rotation=ae("rotation"in b?b.rotation:"shortRotation"in b?b.shortRotation+"_short":"rotationZ"in b?b.rotationZ:y.rotation,y.rotation,"rotation",P),Se&&(l.rotationX=ae("rotationX"in b?b.rotationX:"shortRotationX"in b?b.shortRotationX+"_short":y.rotationX||0,y.rotationX,"rotationX",P),l.rotationY=ae("rotationY"in b?b.rotationY:"shortRotationY"in b?b.shortRotationY+"_short":y.rotationY||0,y.rotationY,"rotationY",P)),l.skewX=null==b.skewX?y.skewX:ae(b.skewX,y.skewX),l.skewY=null==b.skewY?y.skewY:ae(b.skewY,y.skewY),(_=l.skewY-y.skewY)&&(l.skewX+=_,l.rotation+=_)}for(Se&&null!=b.force3D&&(y.force3D=b.force3D,p=!0),y.skewType=b.skewType||y.skewType||a.defaultSkewType,f=y.force3D||y.z||y.rotationX||y.rotationY||l.z||l.rotationX||l.rotationY||l.perspective,f||null==b.scale||(l.scaleZ=1);--w>-1;)i=we[w],c=l[i]-y[i],(c>x||-x>c||null!=b[i]||null!=F[i])&&(p=!0,n=new pe(y,i,y[i],c,n),i in P&&(n.e=P[i]),n.xs0=0,n.plugin=o,s._overwriteProps.push(n.n));return c=b.transformOrigin,y.svg&&(c||b.svgOrigin)&&(d=y.xOffset,g=y.yOffset,Me(t,se(c),l,b.svgOrigin,b.smoothOrigin),n=me(y,"xOrigin",(v?y:l).xOrigin,l.xOrigin,n,k),n=me(y,"yOrigin",(v?y:l).yOrigin,l.yOrigin,n,k),(d!==y.xOffset||g!==y.yOffset)&&(n=me(y,"xOffset",v?d:y.xOffset,y.xOffset,n,k),n=me(y,"yOffset",v?g:y.yOffset,y.yOffset,n,k)),c=xe?null:"0px 0px"),(c||Se&&f&&y.zOrigin)&&(be?(p=!0,i=ke,c=(c||Q(t,i,r,!1,"50% 50%"))+"",n=new pe(T,i,0,0,n,-1,k),n.b=T[i],n.plugin=o,Se?(u=y.zOrigin,c=c.split(" "),y.zOrigin=(c.length>2&&(0===u||"0px"!==c[2])?parseFloat(c[2]):u)||0,n.xs0=n.e=c[0]+" "+(c[1]||"50%")+" 0px",n=new pe(y,"zOrigin",0,0,n,-1,n.n),n.b=u,n.xs0=n.e=y.zOrigin):n.xs0=n.e=c):se(c+"",y)),p&&(s._transformType=y.svg&&xe||!f&&3!==this._transformType?2:3),n},prefix:!0}),ye("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),ye("borderRadius",{defaultValue:"0px",parser:function(t,e,i,n,a){e=this.format(e);var o,h,l,_,u,c,f,p,m,d,g,v,y,T,x,w,b=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],P=t.style;for(m=parseFloat(t.offsetWidth),d=parseFloat(t.offsetHeight),o=e.split(" "),h=0;b.length>h;h++)this.p.indexOf("border")&&(b[h]=W(b[h])),u=_=Q(t,b[h],r,!1,"0px"),-1!==u.indexOf(" ")&&(_=u.split(" "),u=_[0],_=_[1]),c=l=o[h],f=parseFloat(u),v=u.substr((f+"").length),y="="===c.charAt(1),y?(p=parseInt(c.charAt(0)+"1",10),c=c.substr(2),p*=parseFloat(c),g=c.substr((p+"").length-(0>p?1:0))||""):(p=parseFloat(c),g=c.substr((p+"").length)),""===g&&(g=s[i]||v),g!==v&&(T=$(t,"borderLeft",f,v),x=$(t,"borderTop",f,v),"%"===g?(u=100*(T/m)+"%",_=100*(x/d)+"%"):"em"===g?(w=$(t,"borderLeft",1,"em"),u=T/w+"em",_=x/w+"em"):(u=T+"px",_=x+"px"),y&&(c=parseFloat(u)+p+g,l=parseFloat(_)+p+g)),a=de(P,b[h],u+" "+_,c+" "+l,!1,"0px",a);return a},prefix:!0,formatter:ue("0px 0px 0px 0px",!1,!0)}),ye("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,s,n,a){var o,h,l,_,u,c,f="background-position",p=r||Z(t,null),d=this.format((p?m?p.getPropertyValue(f+"-x")+" "+p.getPropertyValue(f+"-y"):p.getPropertyValue(f):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),g=this.format(e);if(-1!==d.indexOf("%")!=(-1!==g.indexOf("%"))&&(c=Q(t,"backgroundImage").replace(R,""),c&&"none"!==c)){for(o=d.split(" "),h=g.split(" "),X.setAttribute("src",c),l=2;--l>-1;)d=o[l],_=-1!==d.indexOf("%"),_!==(-1!==h[l].indexOf("%"))&&(u=0===l?t.offsetWidth-X.width:t.offsetHeight-X.height,o[l]=_?parseFloat(d)/100*u+"px":100*(parseFloat(d)/u)+"%");d=o.join(" ")}return this.parseComplex(t.style,d,g,n,a)},formatter:se}),ye("backgroundSize",{defaultValue:"0 0",formatter:se}),ye("perspective",{defaultValue:"0px",prefix:!0}),ye("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),ye("transformStyle",{prefix:!0}),ye("backfaceVisibility",{prefix:!0}),ye("userSelect",{prefix:!0}),ye("margin",{parser:ce("marginTop,marginRight,marginBottom,marginLeft")}),ye("padding",{parser:ce("paddingTop,paddingRight,paddingBottom,paddingLeft")}),ye("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,s,n,a){var o,h,l;return 9>m?(h=t.currentStyle,l=8>m?" ":",",o="rect("+h.clipTop+l+h.clipRight+l+h.clipBottom+l+h.clipLeft+")",e=this.format(e).split(",").join(l)):(o=this.format(Q(t,this.p,r,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,o,e,n,a)}}),ye("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),ye("autoRound,strictUnits",{parser:function(t,e,i,s,r){return r}}),ye("border",{defaultValue:"0px solid #000",parser:function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(Q(t,"borderTopWidth",r,!1,"0px")+" "+Q(t,"borderTopStyle",r,!1,"solid")+" "+Q(t,"borderTopColor",r,!1,"#000")),this.format(e),n,a)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(_e)||["#000"])[0]}}),ye("borderWidth",{parser:ce("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),ye("float,cssFloat,styleFloat",{parser:function(t,e,i,s,r){var n=t.style,a="cssFloat"in n?"cssFloat":"styleFloat";return new pe(n,a,0,0,r,-1,i,!1,0,n[a],e)}});var Xe=function(t){var e,i=this.t,s=i.filter||Q(this.data,"filter")||"",r=0|this.s+this.c*t;100===r&&(-1===s.indexOf("atrix(")&&-1===s.indexOf("radient(")&&-1===s.indexOf("oader(")?(i.removeAttribute("filter"),e=!Q(this.data,"filter")):(i.filter=s.replace(b,""),e=!0)),e||(this.xn1&&(i.filter=s=s||"alpha(opacity="+r+")"),-1===s.indexOf("pacity")?0===r&&this.xn1||(i.filter=s+" alpha(opacity="+r+")"):i.filter=s.replace(x,"opacity="+r))};ye("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,s,n,a){var o=parseFloat(Q(t,"opacity",r,!1,"1")),h=t.style,l="autoAlpha"===i;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+o),l&&1===o&&"hidden"===Q(t,"visibility",r)&&0!==e&&(o=0),j?n=new pe(h,"opacity",o,e-o,n):(n=new pe(h,"opacity",100*o,100*(e-o),n),n.xn1=l?1:0,h.zoom=1,n.type=2,n.b="alpha(opacity="+n.s+")",n.e="alpha(opacity="+(n.s+n.c)+")",n.data=t,n.plugin=a,n.setRatio=Xe),l&&(n=new pe(h,"visibility",0,0,n,-1,null,!1,0,0!==o?"inherit":"hidden",0===e?"hidden":"inherit"),n.xs0="inherit",s._overwriteProps.push(n.n),s._overwriteProps.push(i)),n
}});var Be=function(t,e){e&&(t.removeProperty?(("ms"===e.substr(0,2)||"webkit"===e.substr(0,6))&&(e="-"+e),t.removeProperty(e.replace(k,"-$1").toLowerCase())):t.removeAttribute(e))},Ye=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.setAttribute("class",0===t?this.b:this.e);for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:Be(i,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};ye("className",{parser:function(t,e,s,n,a,o,h){var l,_,u,c,f,p=t.getAttribute("class")||"",m=t.style.cssText;if(a=n._classNamePT=new pe(t,s,0,0,a,2),a.setRatio=Ye,a.pr=-11,i=!0,a.b=p,_=K(t,r),u=t._gsClassPT){for(c={},f=u.data;f;)c[f.p]=1,f=f._next;u.setRatio(1)}return t._gsClassPT=a,a.e="="!==e.charAt(1)?e:p.replace(RegExp("\\s*\\b"+e.substr(2)+"\\b"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),t.setAttribute("class",a.e),l=J(t,_,K(t),h,c),t.setAttribute("class",p),a.data=l.firstMPT,t.style.cssText=m,a=a.xfirst=n.parse(t,l.difs,a,o)}});var je=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,i,s,r,n,a=this.t.style,o=h.transform.parse;if("all"===this.e)a.cssText="",r=!0;else for(e=this.e.split(" ").join("").split(","),s=e.length;--s>-1;)i=e[s],h[i]&&(h[i].parse===o?r=!0:i="transformOrigin"===i?ke:h[i].p),Be(a,i);r&&(Be(a,be),n=this.t._gsTransform,n&&(n.svg&&this.t.removeAttribute("data-svg-origin"),delete this.t._gsTransform))}};for(ye("clearProps",{parser:function(t,e,s,r,n){return n=new pe(t,s,0,0,n,2),n.setRatio=je,n.e=e,n.pr=-10,n.data=r._tween,i=!0,n}}),l="bezier,throwProps,physicsProps,physics2D".split(","),ge=l.length;ge--;)Te(l[ge]);l=a.prototype,l._firstPT=l._lastParsedTransform=l._transform=null,l._onInitTween=function(t,e,o){if(!t.nodeType)return!1;this._target=t,this._tween=o,this._vars=e,_=e.autoRound,i=!1,s=e.suffixMap||a.suffixMap,r=Z(t,""),n=this._overwriteProps;var l,f,m,d,g,v,y,T,x,b=t.style;if(u&&""===b.zIndex&&(l=Q(t,"zIndex",r),("auto"===l||""===l)&&this._addLazySet(b,"zIndex",0)),"string"==typeof e&&(d=b.cssText,l=K(t,r),b.cssText=d+";"+e,l=J(t,l,K(t)).difs,!j&&w.test(e)&&(l.opacity=parseFloat(RegExp.$1)),e=l,b.cssText=d),this._firstPT=f=e.className?h.className.parse(t,e.className,"className",this,null,null,e):this.parse(t,e,null),this._transformType){for(x=3===this._transformType,be?c&&(u=!0,""===b.zIndex&&(y=Q(t,"zIndex",r),("auto"===y||""===y)&&this._addLazySet(b,"zIndex",0)),p&&this._addLazySet(b,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(x?"visible":"hidden"))):b.zoom=1,m=f;m&&m._next;)m=m._next;T=new pe(t,"transform",0,0,null,2),this._linkCSSP(T,null,m),T.setRatio=be?Le:Ee,T.data=this._transform||Ne(t,r,!0),T.tween=o,T.pr=-1,n.pop()}if(i){for(;f;){for(v=f._next,m=d;m&&m.pr>f.pr;)m=m._next;(f._prev=m?m._prev:g)?f._prev._next=f:d=f,(f._next=m)?m._prev=f:g=f,f=v}this._firstPT=d}return!0},l.parse=function(t,e,i,n){var a,o,l,u,c,f,p,m,d,g,v=t.style;for(a in e)f=e[a],o=h[a],o?i=o.parse(t,f,a,this,i,n,e):(c=Q(t,a,r)+"",d="string"==typeof f,"color"===a||"fill"===a||"stroke"===a||-1!==a.indexOf("Color")||d&&P.test(f)?(d||(f=le(f),f=(f.length>3?"rgba(":"rgb(")+f.join(",")+")"),i=de(v,a,c,f,!0,"transparent",i,0,n)):!d||-1===f.indexOf(" ")&&-1===f.indexOf(",")?(l=parseFloat(c),p=l||0===l?c.substr((l+"").length):"",(""===c||"auto"===c)&&("width"===a||"height"===a?(l=ie(t,a,r),p="px"):"left"===a||"top"===a?(l=H(t,a,r),p="px"):(l="opacity"!==a?0:1,p="")),g=d&&"="===f.charAt(1),g?(u=parseInt(f.charAt(0)+"1",10),f=f.substr(2),u*=parseFloat(f),m=f.replace(T,"")):(u=parseFloat(f),m=d?f.replace(T,""):""),""===m&&(m=a in s?s[a]:p),f=u||0===u?(g?u+l:u)+m:e[a],p!==m&&""!==m&&(u||0===u)&&l&&(l=$(t,a,l,p),"%"===m?(l/=$(t,a,100,"%")/100,e.strictUnits!==!0&&(c=l+"%")):"em"===m?l/=$(t,a,1,"em"):"px"!==m&&(u=$(t,a,u,m),m="px"),g&&(u||0===u)&&(f=u+l+m)),g&&(u+=l),!l&&0!==l||!u&&0!==u?void 0!==v[a]&&(f||"NaN"!=f+""&&null!=f)?(i=new pe(v,a,u||l||0,0,i,-1,a,!1,0,c,f),i.xs0="none"!==f||"display"!==a&&-1===a.indexOf("Style")?f:c):q("invalid "+a+" tween value: "+e[a]):(i=new pe(v,a,l,u-l,i,0,a,_!==!1&&("px"===m||"zIndex"===a),0,c,f),i.xs0=m)):i=de(v,a,c,f,!0,null,i,0,n)),n&&i&&!i.plugin&&(i.plugin=n);return i},l.setRatio=function(t){var e,i,s,r=this._firstPT,n=1e-6;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;r;){if(e=r.c*t+r.s,r.r?e=Math.round(e):n>e&&e>-n&&(e=0),r.type)if(1===r.type)if(s=r.l,2===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2;else if(3===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3;else if(4===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4;else if(5===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4+r.xn4+r.xs5;else{for(i=r.xs0+e+r.xs1,s=1;r.l>s;s++)i+=r["xn"+s]+r["xs"+(s+1)];r.t[r.p]=i}else-1===r.type?r.t[r.p]=r.xs0:r.setRatio&&r.setRatio(t);else r.t[r.p]=e+r.xs0;r=r._next}else for(;r;)2!==r.type?r.t[r.p]=r.b:r.setRatio(t),r=r._next;else for(;r;){if(2!==r.type)if(r.r&&-1!==r.type)if(e=Math.round(r.s+r.c),r.type){if(1===r.type){for(s=r.l,i=r.xs0+e+r.xs1,s=1;r.l>s;s++)i+=r["xn"+s]+r["xs"+(s+1)];r.t[r.p]=i}}else r.t[r.p]=e+r.xs0;else r.t[r.p]=r.e;else r.setRatio(t);r=r._next}},l._enableTransforms=function(t){this._transform=this._transform||Ne(this._target,r,!0),this._transformType=this._transform.svg&&xe||!t&&3!==this._transformType?2:3};var Ue=function(){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};l._addLazySet=function(t,e,i){var s=this._firstPT=new pe(t,e,0,0,this._firstPT,2);s.e=i,s.setRatio=Ue,s.data=this},l._linkCSSP=function(t,e,i,s){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,s=!0),i?i._next=t:s||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=i),t},l._kill=function(e){var i,s,r,n=e;if(e.autoAlpha||e.alpha){n={};for(s in e)n[s]=e[s];n.opacity=1,n.autoAlpha&&(n.visibility=1)}return e.className&&(i=this._classNamePT)&&(r=i.xfirst,r&&r._prev?this._linkCSSP(r._prev,i._next,r._prev._prev):r===this._firstPT&&(this._firstPT=i._next),i._next&&this._linkCSSP(i._next,i._next._next,r._prev),this._classNamePT=null),t.prototype._kill.call(this,n)};var qe=function(t,e,i){var s,r,n,a;if(t.slice)for(r=t.length;--r>-1;)qe(t[r],e,i);else for(s=t.childNodes,r=s.length;--r>-1;)n=s[r],a=n.type,n.style&&(e.push(K(n)),i&&i.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||qe(n,e,i)};return a.cascadeTo=function(t,i,s){var r,n,a,o,h=e.to(t,i,s),l=[h],_=[],u=[],c=[],f=e._internals.reservedProps;for(t=h._targets||h.target,qe(t,_,c),h.render(i,!0,!0),qe(t,u),h.render(0,!0,!0),h._enabled(!0),r=c.length;--r>-1;)if(n=J(c[r],_[r],u[r]),n.firstMPT){n=n.difs;for(a in s)f[a]&&(n[a]=s[a]);o={};for(a in n)o[a]=_[r][a];l.push(e.fromTo(c[r],i,o,n))}return l},t.activate([a]),a},!0),function(){var t=_gsScope._gsDefine.plugin({propName:"roundProps",priority:-1,API:2,init:function(t,e,i){return this._tween=i,!0}}),e=t.prototype;e._onInitAllProps=function(){for(var t,e,i,s=this._tween,r=s.vars.roundProps instanceof Array?s.vars.roundProps:s.vars.roundProps.split(","),n=r.length,a={},o=s._propLookup.roundProps;--n>-1;)a[r[n]]=1;for(n=r.length;--n>-1;)for(t=r[n],e=s._firstPT;e;)i=e._next,e.pg?e.t._roundProps(a,!0):e.n===t&&(this._add(e.t,t,e.s,e.c),i&&(i._prev=e._prev),e._prev?e._prev._next=i:s._firstPT===e&&(s._firstPT=i),e._next=e._prev=null,s._propLookup[t]=o),e=i;return!1},e._add=function(t,e,i,s){this._addTween(t,e,i,i+s,e,!0),this._overwriteProps.push(e)}}(),function(){var t=/(?:\d|\-|\+|=|#|\.)*/g,e=/[A-Za-z%]/g;_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.4.0",init:function(i,s){var r,n,a,o,h;if("function"!=typeof i.setAttribute)return!1;this._target=i,this._proxy={},this._start={},this._end={},this._suffix={};for(r in s)this._start[r]=this._proxy[r]=n=i.getAttribute(r)+"",this._end[r]=a=s[r]+"",this._suffix[r]=o=e.test(a)?a.replace(t,""):e.test(n)?n.replace(t,""):"",o&&(h=a.indexOf(o),-1!==h&&(a=a.substr(0,h))),this._addTween(this._proxy,r,parseFloat(n),a,r)||(this._suffix[r]=""),"="===a.charAt(1)&&(this._end[r]=this._firstPT.s+this._firstPT.c+o),this._overwriteProps.push(r);return!0},set:function(t){this._super.setRatio.call(this,t);for(var e,i=this._overwriteProps,s=i.length,r=1===t?this._end:t?this._proxy:this._start,n=r===this._proxy;--s>-1;)e=i[s],this._target.setAttribute(e,r[e]+(n?this._suffix[e]:""))}})}(),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.2.1",API:2,init:function(t,e){"object"!=typeof e&&(e={rotation:e}),this.finals={};var i,s,r,n,a,o,h=e.useRadians===!0?2*Math.PI:360,l=1e-6;for(i in e)"useRadians"!==i&&(o=(e[i]+"").split("_"),s=o[0],r=parseFloat("function"!=typeof t[i]?t[i]:t[i.indexOf("set")||"function"!=typeof t["get"+i.substr(3)]?i:"get"+i.substr(3)]()),n=this.finals[i]="string"==typeof s&&"="===s.charAt(1)?r+parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)):Number(s)||0,a=n-r,o.length&&(s=o.join("_"),-1!==s.indexOf("short")&&(a%=h,a!==a%(h/2)&&(a=0>a?a+h:a-h)),-1!==s.indexOf("_cw")&&0>a?a=(a+9999999999*h)%h-(0|a/h)*h:-1!==s.indexOf("ccw")&&a>0&&(a=(a-9999999999*h)%h-(0|a/h)*h)),(a>l||-l>a)&&(this._addTween(t,i,r,r+a,i),this._overwriteProps.push(i)));return!0},set:function(t){var e;if(1!==t)this._super.setRatio.call(this,t);else for(e=this._firstPT;e;)e.f?e.t[e.p](this.finals[e.p]):e.t[e.p]=this.finals[e.p],e=e._next}})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,s,r=_gsScope.GreenSockGlobals||_gsScope,n=r.com.greensock,a=2*Math.PI,o=Math.PI/2,h=n._class,l=function(e,i){var s=h("easing."+e,function(){},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,s},_=t.register||function(){},u=function(t,e,i,s){var r=h("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new s},!0);return _(r,t),r},c=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},f=function(e,i){var s=h("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,r.config=function(t){return new s(t)},s},p=u("Back",f("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),f("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),f("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),m=h("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=i===!0},!0),d=m.prototype=new t;return d.constructor=m,d.getRatio=function(t){var e=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},m.ease=new m(.7,.7),d.config=m.config=function(t,e,i){return new m(t,e,i)},e=h("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),d=e.prototype=new t,d.constructor=e,d.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},d.config=e.config=function(t){return new e(t)},i=h("easing.RoughEase",function(e){e=e||{};for(var i,s,r,n,a,o,h=e.taper||"none",l=[],_=0,u=0|(e.points||20),f=u,p=e.randomize!==!1,m=e.clamp===!0,d=e.template instanceof t?e.template:null,g="number"==typeof e.strength?.4*e.strength:.4;--f>-1;)i=p?Math.random():1/u*f,s=d?d.getRatio(i):i,"none"===h?r=g:"out"===h?(n=1-i,r=n*n*g):"in"===h?r=i*i*g:.5>i?(n=2*i,r=.5*n*n*g):(n=2*(1-i),r=.5*n*n*g),p?s+=Math.random()*r-.5*r:f%2?s+=.5*r:s-=.5*r,m&&(s>1?s=1:0>s&&(s=0)),l[_++]={x:i,y:s};for(l.sort(function(t,e){return t.x-e.x}),o=new c(1,1,null),f=u;--f>-1;)a=l[f],o=new c(a.x,a.y,o);this._prev=new c(0,0,0!==o.t?o:o.next)},!0),d=i.prototype=new t,d.constructor=i,d.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&e.t>=t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},d.config=function(t){return new i(t)},i.ease=new i,u("Bounce",l("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),l("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),l("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),u("Circ",l("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),l("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),l("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),s=function(e,i,s){var r=h("easing."+e,function(t,e){this._p1=t>=1?t:1,this._p2=(e||s)/(1>t?t:1),this._p3=this._p2/a*(Math.asin(1/this._p1)||0),this._p2=a/this._p2},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t,e){return new r(t,e)},r},u("Elastic",s("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*this._p2)+1},.3),s("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*this._p2))},.3),s("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*this._p2)+1},.45)),u("Expo",l("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),l("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),l("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),u("Sine",l("SineOut",function(t){return Math.sin(t*o)}),l("SineIn",function(t){return-Math.cos(t*o)+1}),l("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),h("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),_(r.SlowMo,"SlowMo","ease,"),_(i,"RoughEase","ease,"),_(e,"SteppedEase","ease,"),p},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t,e){"use strict";var i=t.GreenSockGlobals=t.GreenSockGlobals||t;if(!i.TweenLite){var s,r,n,a,o,h=function(t){var e,s=t.split("."),r=i;for(e=0;s.length>e;e++)r[s[e]]=r=r[s[e]]||{};return r},l=h("com.greensock"),_=1e-10,u=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},c=function(){},f=function(){var t=Object.prototype.toString,e=t.call([]);return function(i){return null!=i&&(i instanceof Array||"object"==typeof i&&!!i.push&&t.call(i)===e)}}(),p={},m=function(s,r,n,a){this.sc=p[s]?p[s].sc:[],p[s]=this,this.gsClass=null,this.func=n;var o=[];this.check=function(l){for(var _,u,c,f,d=r.length,g=d;--d>-1;)(_=p[r[d]]||new m(r[d],[])).gsClass?(o[d]=_.gsClass,g--):l&&_.sc.push(this);if(0===g&&n)for(u=("com.greensock."+s).split("."),c=u.pop(),f=h(u.join("."))[c]=this.gsClass=n.apply(n,o),a&&(i[c]=f,"function"==typeof define&&define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+s.split(".").pop(),[],function(){return f}):s===e&&"undefined"!=typeof module&&module.exports&&(module.exports=f)),d=0;this.sc.length>d;d++)this.sc[d].check()},this.check(!0)},d=t._gsDefine=function(t,e,i,s){return new m(t,e,i,s)},g=l._class=function(t,e,i){return e=e||function(){},d(t,[],function(){return e},i),e};d.globals=i;var v=[0,0,1,1],y=[],T=g("easing.Ease",function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?v.concat(e):v},!0),x=T.map={},w=T.register=function(t,e,i,s){for(var r,n,a,o,h=e.split(","),_=h.length,u=(i||"easeIn,easeOut,easeInOut").split(",");--_>-1;)for(n=h[_],r=s?g("easing."+n,null,!0):l.easing[n]||{},a=u.length;--a>-1;)o=u[a],x[n+"."+o]=x[o+n]=r[o]=t.getRatio?t:t[o]||new t};for(n=T.prototype,n._calcEnd=!1,n.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:.5>t?s/2:1-s/2},s=["Linear","Quad","Cubic","Quart","Quint,Strong"],r=s.length;--r>-1;)n=s[r]+",Power"+r,w(new T(null,null,1,r),n,"easeOut",!0),w(new T(null,null,2,r),n,"easeIn"+(0===r?",easeNone":"")),w(new T(null,null,3,r),n,"easeInOut");x.linear=l.easing.Linear.easeIn,x.swing=l.easing.Quad.easeInOut;var b=g("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});n=b.prototype,n.addEventListener=function(t,e,i,s,r){r=r||0;var n,h,l=this._listeners[t],_=0;for(null==l&&(this._listeners[t]=l=[]),h=l.length;--h>-1;)n=l[h],n.c===e&&n.s===i?l.splice(h,1):0===_&&r>n.pr&&(_=h+1);l.splice(_,0,{c:e,s:i,up:s,pr:r}),this!==a||o||a.wake()},n.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return s.splice(i,1),void 0},n.dispatchEvent=function(t){var e,i,s,r=this._listeners[t];if(r)for(e=r.length,i=this._eventTarget;--e>-1;)s=r[e],s&&(s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i))};var P=t.requestAnimationFrame,k=t.cancelAnimationFrame,S=Date.now||function(){return(new Date).getTime()},R=S();for(s=["ms","moz","webkit","o"],r=s.length;--r>-1&&!P;)P=t[s[r]+"RequestAnimationFrame"],k=t[s[r]+"CancelAnimationFrame"]||t[s[r]+"CancelRequestAnimationFrame"];g("Ticker",function(t,e){var i,s,r,n,h,l=this,u=S(),f=e!==!1&&P,p=500,m=33,d="tick",g=function(t){var e,a,o=S()-R;o>p&&(u+=o-m),R+=o,l.time=(R-u)/1e3,e=l.time-h,(!i||e>0||t===!0)&&(l.frame++,h+=e+(e>=n?.004:n-e),a=!0),t!==!0&&(r=s(g)),a&&l.dispatchEvent(d)};b.call(l),l.time=l.frame=0,l.tick=function(){g(!0)},l.lagSmoothing=function(t,e){p=t||1/_,m=Math.min(e,p,0)},l.sleep=function(){null!=r&&(f&&k?k(r):clearTimeout(r),s=c,r=null,l===a&&(o=!1))},l.wake=function(){null!==r?l.sleep():l.frame>10&&(R=S()-p+5),s=0===i?c:f&&P?P:function(t){return setTimeout(t,0|1e3*(h-l.time)+1)},l===a&&(o=!0),g(2)},l.fps=function(t){return arguments.length?(i=t,n=1/(i||60),h=this.time+n,l.wake(),void 0):i},l.useRAF=function(t){return arguments.length?(l.sleep(),f=t,l.fps(i),void 0):f},l.fps(t),setTimeout(function(){f&&5>l.frame&&l.useRAF(!1)},1500)}),n=l.Ticker.prototype=new l.events.EventDispatcher,n.constructor=l.Ticker;var O=g("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=e.immediateRender===!0,this.data=e.data,this._reversed=e.reversed===!0,U){o||a.wake();var i=this.vars.useFrames?j:U;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});a=O.ticker=new l.Ticker,n=O.prototype,n._dirty=n._gc=n._initted=n._paused=!1,n._totalTime=n._time=0,n._rawPrevTime=-1,n._next=n._last=n._onUpdate=n._timeline=n.timeline=null,n._paused=!1;var A=function(){o&&S()-R>2e3&&a.wake(),setTimeout(A,2e3)};A(),n.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},n.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},n.resume=function(t,e){return null!=t&&this.seek(t,e),this.paused(!1)},n.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},n.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},n.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},n.render=function(){},n.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},n.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&i+this.totalDuration()/this._timeScale>t},n._enabled=function(t,e){return o||a.wake(),this._gc=!t,this._active=this.isActive(),e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},n._kill=function(){return this._enabled(!1,!1)},n.kill=function(t,e){return this._kill(t,e),this},n._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},n._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},n._callback=function(t){var e=this.vars;e[t].apply(e[t+"Scope"]||e.callbackScope||this,e[t+"Params"]||y)},n.eventCallback=function(t,e,i,s){if("on"===(t||"").substr(0,2)){var r=this.vars;if(1===arguments.length)return r[t];null==e?delete r[t]:(r[t]=e,r[t+"Params"]=f(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,r[t+"Scope"]=s),"onUpdate"===t&&(this._onUpdate=e)}return this},n.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},n.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},n.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},n.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},n.totalTime=function(t,e,i){if(o||a.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,r=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:r._time)-(this._reversed?s-t:t)/this._timeScale,r._dirty||this._uncache(!1),r._timeline)for(;r._timeline;)r._timeline._time!==(r._startTime+r._totalTime)/r._timeScale&&r.totalTime(r._totalTime,!0),r=r._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==t||0===this._duration)&&(this.render(t,e,!1),I.length&&V())}return this},n.progress=n.totalProgress=function(t,e){return arguments.length?this.totalTime(this.duration()*t,e):this._time/this.duration()},n.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},n.endTime=function(t){return this._startTime+(0!=t?this.totalDuration():this.duration())/this._timeScale},n.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||_,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},n.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},n.paused=function(t){if(!arguments.length)return this._paused;var e,i,s=this._timeline;return t!=this._paused&&s&&(o||t||a.wake(),e=s.rawTime(),i=e-this._pauseTime,!t&&s.smoothChildTiming&&(this._startTime+=i,this._uncache(!1)),this._pauseTime=t?e:null,this._paused=t,this._active=this.isActive(),!t&&0!==i&&this._initted&&this.duration()&&this.render(s.smoothChildTiming?this._totalTime:(e-this._startTime)/this._timeScale,!0,!0)),this._gc&&!t&&this._enabled(!0,!1),this};var C=g("core.SimpleTimeline",function(t){O.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});n=C.prototype=new O,n.constructor=C,n.kill()._gc=!1,n._first=n._last=n._recent=null,n._sortChildren=!1,n.add=n.insert=function(t,e){var i,s;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),i=this._last,this._sortChildren)for(s=t._startTime;i&&i._startTime>s;)i=i._prev;return i?(t._next=i._next,i._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=i,this._recent=t,this._timeline&&this._uncache(!0),this},n._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),t._next=t._prev=t.timeline=null,t===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},n.render=function(t,e,i){var s,r=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;r;)s=r._next,(r._active||t>=r._startTime&&!r._paused)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=s},n.rawTime=function(){return o||a.wake(),this._totalTime};var D=g("TweenLite",function(e,i,s){if(O.call(this,i,s),this.render=D.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:D.selector(e)||e;var r,n,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),h=this.vars.overwrite;if(this._overwrite=h=null==h?Y[D.defaultOverwrite]:"number"==typeof h?h>>0:Y[h],(o||e instanceof Array||e.push&&f(e))&&"number"!=typeof e[0])for(this._targets=a=u(e),this._propLookup=[],this._siblings=[],r=0;a.length>r;r++)n=a[r],n?"string"!=typeof n?n.length&&n!==t&&n[0]&&(n[0]===t||n[0].nodeType&&n[0].style&&!n.nodeType)?(a.splice(r--,1),this._targets=a=a.concat(u(n))):(this._siblings[r]=G(n,this,!1),1===h&&this._siblings[r].length>1&&Z(n,this,null,1,this._siblings[r])):(n=a[r--]=D.selector(n),"string"==typeof n&&a.splice(r+1,1)):a.splice(r--,1);else this._propLookup={},this._siblings=G(e,this,!1),1===h&&this._siblings.length>1&&Z(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-_,this.render(-this._delay))},!0),M=function(e){return e&&e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},z=function(t,e){var i,s={};for(i in t)B[i]||i in e&&"transform"!==i&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!E[i]||E[i]&&E[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s};n=D.prototype=new O,n.constructor=D,n.kill()._gc=!1,n.ratio=0,n._firstPT=n._targets=n._overwrittenProps=n._startAt=null,n._notifyPluginsOfEnabled=n._lazy=!1,D.version="1.17.0",D.defaultEase=n._ease=new T(null,null,1,1),D.defaultOverwrite="auto",D.ticker=a,D.autoSleep=120,D.lagSmoothing=function(t,e){a.lagSmoothing(t,e)},D.selector=t.$||t.jQuery||function(e){var i=t.$||t.jQuery;return i?(D.selector=i,i(e)):"undefined"==typeof document?e:document.querySelectorAll?document.querySelectorAll(e):document.getElementById("#"===e.charAt(0)?e.substr(1):e)};var I=[],F={},N=D._internals={isArray:f,isSelector:M,lazyTweens:I},E=D._plugins={},L=N.tweenLookup={},X=0,B=N.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1},Y={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},j=O._rootFramesTimeline=new C,U=O._rootTimeline=new C,q=30,V=N.lazyRender=function(){var t,e=I.length;for(F={};--e>-1;)t=I[e],t&&t._lazy!==!1&&(t.render(t._lazy[0],t._lazy[1],!0),t._lazy=!1);I.length=0};U._startTime=a.time,j._startTime=a.frame,U._active=j._active=!0,setTimeout(V,1),O._updateRoot=D.render=function(){var t,e,i;if(I.length&&V(),U.render((a.time-U._startTime)*U._timeScale,!1,!1),j.render((a.frame-j._startTime)*j._timeScale,!1,!1),I.length&&V(),a.frame>=q){q=a.frame+(parseInt(D.autoSleep,10)||120);for(i in L){for(e=L[i].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete L[i]}if(i=U._first,(!i||i._paused)&&D.autoSleep&&!j._first&&1===a._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||a.sleep()}}},a.addEventListener("tick",O._updateRoot);var G=function(t,e,i){var s,r,n=t._gsTweenID;if(L[n||(t._gsTweenID=n="t"+X++)]||(L[n]={target:t,tweens:[]}),e&&(s=L[n].tweens,s[r=s.length]=e,i))for(;--r>-1;)s[r]===e&&s.splice(r,1);return L[n].tweens},W=function(t,e,i,s){var r,n,a=t.vars.onOverwrite;return a&&(r=a(t,e,i,s)),a=D.onOverwrite,a&&(n=a(t,e,i,s)),r!==!1&&n!==!1},Z=function(t,e,i,s,r){var n,a,o,h;if(1===s||s>=4){for(h=r.length,n=0;h>n;n++)if((o=r[n])!==e)o._gc||o._kill(null,t,e)&&(a=!0);else if(5===s)break;return a}var l,u=e._startTime+_,c=[],f=0,p=0===e._duration;for(n=r.length;--n>-1;)(o=r[n])===e||o._gc||o._paused||(o._timeline!==e._timeline?(l=l||Q(e,0,p),0===Q(o,l,p)&&(c[f++]=o)):u>=o._startTime&&o._startTime+o.totalDuration()/o._timeScale>u&&((p||!o._initted)&&2e-10>=u-o._startTime||(c[f++]=o)));for(n=f;--n>-1;)if(o=c[n],2===s&&o._kill(i,t,e)&&(a=!0),2!==s||!o._firstPT&&o._initted){if(2!==s&&!W(o,e))continue;o._enabled(!1,!1)&&(a=!0)}return a},Q=function(t,e,i){for(var s=t._timeline,r=s._timeScale,n=t._startTime;s._timeline;){if(n+=s._startTime,r*=s._timeScale,s._paused)return-100;s=s._timeline}return n/=r,n>e?n-e:i&&n===e||!t._initted&&2*_>n-e?_:(n+=t.totalDuration()/t._timeScale/r)>e+_?0:n-e-_};n._init=function(){var t,e,i,s,r,n=this.vars,a=this._overwrittenProps,o=this._duration,h=!!n.immediateRender,l=n.ease;if(n.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),r={};for(s in n.startAt)r[s]=n.startAt[s];if(r.overwrite=!1,r.immediateRender=!0,r.lazy=h&&n.lazy!==!1,r.startAt=r.delay=null,this._startAt=D.to(this.target,0,r),h)if(this._time>0)this._startAt=null;else if(0!==o)return}else if(n.runBackwards&&0!==o)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(h=!1),i={};for(s in n)B[s]&&"autoCSS"!==s||(i[s]=n[s]);if(i.overwrite=0,i.data="isFromStart",i.lazy=h&&n.lazy!==!1,i.immediateRender=h,this._startAt=D.to(this.target,0,i),h){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=l=l?l instanceof T?l:"function"==typeof l?new T(l,n.easeParams):x[l]||D.defaultEase:D.defaultEase,n.easeParams instanceof Array&&l.config&&(this._ease=l.config.apply(l,n.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],a?a[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,a);if(e&&D._onPluginEvent("_onInitAllProps",this),a&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),n.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=n.onUpdate,this._initted=!0},n._initProps=function(e,i,s,r){var n,a,o,h,l,_;if(null==e)return!1;F[e._gsTweenID]&&V(),this.vars.css||e.style&&e!==t&&e.nodeType&&E.css&&this.vars.autoCSS!==!1&&z(this.vars,e);for(n in this.vars){if(_=this.vars[n],B[n])_&&(_ instanceof Array||_.push&&f(_))&&-1!==_.join("").indexOf("{self}")&&(this.vars[n]=_=this._swapSelfInParams(_,this));else if(E[n]&&(h=new E[n])._onInitTween(e,this.vars[n],this)){for(this._firstPT=l={_next:this._firstPT,t:h,p:"setRatio",s:0,c:1,f:!0,n:n,pg:!0,pr:h._priority},a=h._overwriteProps.length;--a>-1;)i[h._overwriteProps[a]]=this._firstPT;(h._priority||h._onInitAllProps)&&(o=!0),(h._onDisable||h._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=i[n]=l={_next:this._firstPT,t:e,p:n,f:"function"==typeof e[n],n:n,pg:!1,pr:0},l.s=l.f?e[n.indexOf("set")||"function"!=typeof e["get"+n.substr(3)]?n:"get"+n.substr(3)]():parseFloat(e[n]),l.c="string"==typeof _&&"="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*Number(_.substr(2)):Number(_)-l.s||0;l&&l._next&&(l._next._prev=l)}return r&&this._kill(r,e)?this._initProps(e,i,s,r):this._overwrite>1&&this._firstPT&&s.length>1&&Z(e,this,i,this._overwrite,s)?(this._kill(i,e),this._initProps(e,i,s,r)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(F[e._gsTweenID]=!0),o)
},n.render=function(t,e,i){var s,r,n,a,o=this._time,h=this._duration,l=this._rawPrevTime;if(t>=h)this._totalTime=this._time=h,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,r="onComplete",i=i||this._timeline.autoRemoveChildren),0===h&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>l||l===_&&"isPause"!==this.data)&&l!==t&&(i=!0,l>_&&(r="onReverseComplete")),this._rawPrevTime=a=!e||t||l===t?t:_);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===h&&l>0)&&(r="onReverseComplete",s=this._reversed),0>t&&(this._active=!1,0===h&&(this._initted||!this.vars.lazy||i)&&(l>=0&&(l!==_||"isPause"!==this.data)&&(i=!0),this._rawPrevTime=a=!e||t||l===t?t:_)),this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var u=t/h,c=this._easeType,f=this._easePower;(1===c||3===c&&u>=.5)&&(u=1-u),3===c&&(u*=2),1===f?u*=u:2===f?u*=u*u:3===f?u*=u*u*u:4===f&&(u*=u*u*u*u),this.ratio=1===c?1-u:2===c?u:.5>t/h?u/2:1-u/2}else this.ratio=this._ease.getRatio(t/h);if(this._time!==o||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=o,this._rawPrevTime=l,I.push(this),this._lazy=[t,e],void 0;this._time&&!s?this.ratio=this._ease.getRatio(this._time/h):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==o&&t>=0&&(this._active=!0),0===o&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._time||0===h)&&(e||this._callback("onStart"))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&t!==-1e-4&&this._startAt.render(t,e,i),e||(this._time!==o||s)&&this._callback("onUpdate")),r&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&t!==-1e-4&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this._callback(r),0===h&&this._rawPrevTime===_&&a!==_&&(this._rawPrevTime=0))}},n._kill=function(t,e,i){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._lazy=!1,this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:D.selector(e)||e;var s,r,n,a,o,h,l,_,u,c=i&&this._time&&i._startTime===this._startTime&&this._timeline===i._timeline;if((f(e)||M(e))&&"number"!=typeof e[0])for(s=e.length;--s>-1;)this._kill(t,e[s],i)&&(h=!0);else{if(this._targets){for(s=this._targets.length;--s>-1;)if(e===this._targets[s]){o=this._propLookup[s]||{},this._overwrittenProps=this._overwrittenProps||[],r=this._overwrittenProps[s]=t?this._overwrittenProps[s]||{}:"all";break}}else{if(e!==this.target)return!1;o=this._propLookup,r=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(o){if(l=t||o,_=t!==r&&"all"!==r&&t!==o&&("object"!=typeof t||!t._tempKill),i&&(D.onOverwrite||this.vars.onOverwrite)){for(n in l)o[n]&&(u||(u=[]),u.push(n));if((u||!t)&&!W(this,i,e,u))return!1}for(n in l)(a=o[n])&&(c&&(a.f?a.t[a.p](a.s):a.t[a.p]=a.s,h=!0),a.pg&&a.t._kill(l)&&(h=!0),a.pg&&0!==a.t._overwriteProps.length||(a._prev?a._prev._next=a._next:a===this._firstPT&&(this._firstPT=a._next),a._next&&(a._next._prev=a._prev),a._next=a._prev=null),delete o[n]),_&&(r[n]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return h},n.invalidate=function(){return this._notifyPluginsOfEnabled&&D._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],O.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-_,this.render(-this._delay)),this},n._enabled=function(t,e){if(o||a.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=G(s[i],this,!0);else this._siblings=G(this.target,this,!0)}return O.prototype._enabled.call(this,t,e),this._notifyPluginsOfEnabled&&this._firstPT?D._onPluginEvent(t?"_onEnable":"_onDisable",this):!1},D.to=function(t,e,i){return new D(t,e,i)},D.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new D(t,e,i)},D.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new D(t,e,s)},D.delayedCall=function(t,e,i,s,r){return new D(e,0,{delay:t,onComplete:e,onCompleteParams:i,callbackScope:s,onReverseComplete:e,onReverseCompleteParams:i,immediateRender:!1,lazy:!1,useFrames:r,overwrite:0})},D.set=function(t,e){return new D(t,0,e)},D.getTweensOf=function(t,e){if(null==t)return[];t="string"!=typeof t?t:D.selector(t)||t;var i,s,r,n;if((f(t)||M(t))&&"number"!=typeof t[0]){for(i=t.length,s=[];--i>-1;)s=s.concat(D.getTweensOf(t[i],e));for(i=s.length;--i>-1;)for(n=s[i],r=i;--r>-1;)n===s[r]&&s.splice(i,1)}else for(s=G(t).concat(),i=s.length;--i>-1;)(s[i]._gc||e&&!s[i].isActive())&&s.splice(i,1);return s},D.killTweensOf=D.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var s=D.getTweensOf(t,e),r=s.length;--r>-1;)s[r]._kill(i,t)};var $=g("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=$.prototype},!0);if(n=$.prototype,$.version="1.10.1",$.API=2,n._firstPT=null,n._addTween=function(t,e,i,s,r,n){var a,o;return null!=s&&(a="number"==typeof s||"="!==s.charAt(1)?Number(s)-Number(i):parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)))?(this._firstPT=o={_next:this._firstPT,t:t,p:e,s:i,c:a,f:"function"==typeof t[e],n:r||e,r:n},o._next&&(o._next._prev=o),o):void 0},n.setRatio=function(t){for(var e,i=this._firstPT,s=1e-6;i;)e=i.c*t+i.s,i.r?e=Math.round(e):s>e&&e>-s&&(e=0),i.f?i.t[i.p](e):i.t[i.p]=e,i=i._next},n._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},n._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},D._onPluginEvent=function(t,e){var i,s,r,n,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=r;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:n)?o._prev._next=o:r=o,(o._next=s)?s._prev=o:n=o,o=a}o=e._firstPT=r}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},$.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===$.API&&(E[(new t[e])._propName]=t[e]);return!0},d.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,r=t.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},a=g("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){$.call(this,i,s),this._overwriteProps=r||[]},t.global===!0),o=a.prototype=new $(i);o.constructor=a,a.API=t.API;for(e in n)"function"==typeof t[e]&&(o[n[e]]=t[e]);return a.version=t.version,$.activate([a]),a},s=t._gsQueue){for(r=0;s.length>r;r++)s[r]();for(n in p)p[n].func||t.console.log("GSAP encountered missing dependency: com.greensock."+n)}o=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax");