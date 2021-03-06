//Global Header
var currentView = getViewport();
var currentSpot = 0;
//Test comment
function optionalHeaderCTA() {
    var quoteOfficeLeft = $('.quote-office--left');
    var quoteOfficeRight = $('.quote-office--right');
    if (quoteOfficeLeft.find("div").first().hasClass("find-office__container")) {
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
        if ($(".megamenu").hasClass("megamenu--open")) {
            if (!$(".megamenu--open").hasClass("megamenu--open--mobile")) {
                $(".megamenu--open").addClass("megamenu--open--mobile");

            }
        }
    }
    if (getViewport() == "tablet" || getViewport() == "desktop") {
        if ($(".megamenu--open").hasClass("megamenu--open--mobile")) {
            $(".megamenu--open").removeClass("megamenu--open--mobile");

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
        if ($('.megamenu').is(':visible')) {
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


    if (!$('.container').children().hasClass('microsite-header')) {
        $("body > :not('.megamenu, .global-header')").toggleClass("megamenu--open--hide");
    }


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