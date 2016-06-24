//Global variables
var breakpointMobile = 480;
var breakpointTablet = 768;
var breakpointDesktop = 1007;

var breakpointMobileOverlay = 480;
var breakpointTabletOverlay = 768;
var breakpointDesktopOverlay = 1023;
var imagesPath = "";

if ( localStorage.getItem("contextPath") ) {
    imagesPath = localStorage.getItem("contextPath") + "/static/images/";
} else {
    imagesPath = "/static/images/";
}

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

function optionalHeaderCTA() {
    var fao = $('.find-office__container');
    var office = $('.get-quote__container');
    if (fao.length == 0) {
        $(".get-quote__container").addClass("noFao");
    }
    if(office.length == 0){
        $(".find-office__container").addClass("noOffice");
    }
}
$(window).load(function () {
    optionalHeaderCTA();
});
//DE8968
$(window).bind('pageshow', function() {
    $('.search-trigger__search-box').val("");
});

var resizeMenu = false;
//Adjust the width of second row of MegaMenu
function resizeMegaMenu () {
    if(getViewport() == "mobile") {
        /*if ($('body').hasClass('overlay-scroll__parent')) {
            $('body').removeClass('overlay-scroll__parent')
        }
        if ($('.megamenu').hasClass('overlay-scroll__child')) {
            $('.megamenu').removeClass('overlay-scroll__child')
        }
        if ($('.login-container').hasClass('overlay-scroll__child')) {
            $('.login-container').removeClass('overlay-scroll__child')
        }*/
    }
    if(getViewport() == "tablet" || getViewport() == "desktop"){
        $(".megamenu__sub-items").show();
        if( $('.megamenu').hasClass('megamenu--open')) {

            if($(".contact-trigger").css("display") != "none"){
                $(".contact-trigger").hide()
            }
            if($(".login-trigger").css("display")!= "none"){
                $(".login-trigger").hide()
            }
        }else{
            if($(".contact-trigger").css("display") != "none"){
                $(".contact-trigger").show()
            }
            if($(".login-trigger").css("display")!= "none"){
                $(".login-trigger").show()
            }
        }
        resizeMenu = true;
    }else{


            if(resizeMenu == true) {
                if ($(".megamenu__sub-items").css("display") != "none") {
                    $(".megamenu__sub-items").hide()
                }

                $(".megamenu__main-item").each(function(){
                    $(this).find('use').unwrap().wrap('<svg class="icon icon-chevron-right"><use xlink:href="' + imagesPath + 'icons-metlife.svg#icon-chevron-right"></use></svg>')
                    /*$(this).find('use').unwrap().wrap('<svg class="icon icon-chevron-right"><use xlink:href="' + imagesPath + 'icons-metlife.svg#icon-chevron-right"></use></svg>')*/
                });

            }

        resizeMenu = false;

        if($(".contact-trigger").css("display") != "none"){
            $(".contact-trigger").hide()
        }

        if($(".login-trigger").css("display")== "none"){
            $(".login-trigger").show()
        }
    }

}





function openSearchBox () {
    $('.search-trigger__container').toggle();
    $('.search-trigger').toggleClass('search-trigger--open');
    if (getViewport() == "mobile"){
        if( $('.megamenu').is(':visible') ){
            $('.megamenu').removeClass('megamenu--open');
            $('.megamenu-trigger__icon').removeClass('megamenu-trigger__icon--open');
        }
        $('.search-trigger__search-box').animate({width: '100%'}, 600);
        $('.search-trigger__icon').toggleClass('search-trigger__icon--open');
        $('.search-trigger__icon').animate({left: '145'}, 150);
        currentView = getViewport();
    } else {
        $('.search-trigger__search-box').animate({width: '170px'}, 600);
        $('.search-trigger__icon').toggleClass('search-trigger__icon--open');
        $('.search-trigger__icon').animate({left: '145'}, 150);
        currentView = getViewport();
    }
}

function closeSearchBox () {

    $('.search-trigger__search-box').animate({width: '0'}, 600);
    $('.search-trigger').removeClass('search-trigger--open');

    $('.search-trigger__icon').removeClass('search-trigger__icon--open');

    $('.search-trigger__icon').animate({left: '0'}, 150);
    setTimeout(function(){
        $('.search-trigger__container').hide();
    }, 400);
};

$(document).on("click tap", function (e) {
    var megaMenuTrigger = $(".megamenu-trigger");
    var container = $(".search-trigger");
    if (!container.is(e.target) && container.has(e.target).length === 0 &&!megaMenuTrigger.is(e.target) && megaMenuTrigger.has(e.target).length==0) {
        closeSearchBox();
    }
});

$('.megamenu-trigger').on('click', function(){
    if($(".icon-close.megamenu-trigger__icon").css("display") == "none"){
        $(".icon-close.megamenu-trigger__icon").css("display", "inline-block");
        $(".icon-menu.megamenu-trigger__icon").css("display", "none");
    }else{
        $(".icon-close.megamenu-trigger__icon").css("display", "none");
        $(".icon-menu.megamenu-trigger__icon").css("display", "inline-block");
    }

    $('.' + $(this).attr('data-target')).toggleClass('megamenu--open');
    $(".js-megaMenuToggle").toggleClass("hidden");
    $('.login-container').hide();
    closeContactForm();
    $('.megamenu-trigger__icon').toggleClass('megamenu-trigger__icon--open');

    if(getViewport() != "mobile") {
        if ($('body').hasClass('overlay-scroll__parent')) {
            $('body').removeClass('overlay-scroll__parent')
        } else {
            $('body').addClass('overlay-scroll__parent')
        }
        if ($('.megamenu').hasClass('overlay-scroll__child')) {
            $('.megamenu').removeClass('overlay-scroll__child')

                $(".global-header__middle h1").removeClass("menu--left")

        } else {
            $('.megamenu').addClass('overlay-scroll__child')

                $(".global-header__middle h1").addClass("menu--left")

        }
        if( $('.login-types').hasClass('overlay-scroll__child')){
            $('.login-types').removeClass('overlay-scroll__child');
            $('.login-container').removeClass('overlay-scroll__child');
        }

    }

    if (getViewport() == "desktop") {

        if( $('.megamenu').hasClass('megamenu--open')) {
            if( !$('.search-trigger__container').is(':visible') ) {
                closeSearchBox();
            }
            if($('.login-trigger').length != 0 ) {
                $('.login-trigger').hide();
            }
            if($('.contact-trigger').length != 0 ) {
                $('.contact-trigger').hide();
            }
            if($('.user-trigger').length != 0 ) {
                $('.user-trigger').hide();
            }
        }else{
            if( $('.search-trigger__container').is(':visible') ) {
                openSearchBox();
            } else {
                closeSearchBox();
            }
            if($('.login-trigger').length != 0 ) {
                $('.login-trigger').show();
            }
            if($('.contact-trigger').length != 0) {
                $('.contact-trigger').show();
            }
            if($('.user-trigger').length != 0 ) {
                $('.user-trigger').show();
            }
        }
    } else if(getViewport() == "tablet") {

        if( $('.megamenu').hasClass('megamenu--open')) {
            if( !$('.search-trigger__container').is(':visible') ) {
                openSearchBox();
            }
            if($('.login-trigger').length != 0 ) {
                $('.login-trigger').hide();
            }
            if($('.contact-trigger').length != 0 ) {
                $('.contact-trigger').hide();
            }
            if($('.user-trigger').length != 0 ) {
                $('.user-trigger').hide();
            }
        }else{
            if( $('.search-trigger__container').is(':visible') ) {
                openSearchBox();
            } else {
                closeSearchBox();
            }
            if($('.login-trigger').length != 0 ) {
                $('.login-trigger').show();
            }
            if($('.contact-trigger').length != 0) {
                $('.contact-trigger').show();
            }
            if($('.user-trigger').length != 0 ) {
                $('.user-trigger').show();
            }
        }
    }else{
        $("html, body").animate({ scrollTop: 0 }, "slow");
        closeSearchBox();

    }
});

$('.search-trigger__icon, .search-trigger__label').click(function() {
    openSearchBox();
});

// Minimize header after scrolling 30px
$(window).scroll(function () {
    adjustMegaMenu();
});
$(function() {
    adjustMegaMenu();
});

function headerPosition() {
    if ($(window).width() >= 751) {
        $('body').css('padding-top','70px');
    } else {
        $('body').css('padding-top','50px');
    }

    if ($('.microsite-header').length > 0){
        $('body').css('padding-top','0px');
    }
}

function adjustMegaMenu(){
    var scroll = $(window).scrollTop();
    if (scroll > 5) {
        if ($(".cookieShell").length > 0) {
            $('.megamenu').addClass('cookie-megamenu--minimized');
        }
        if ($(".cookieShell").css("display") ==="none") {
            $('.megamenu').removeClass('cookie-megamenu--minimized');
        }
        $('.global-header').addClass('global-header--minimized');
        $('.global-header__left').addClass('global-header__left--minimized');
        $('.global-header__logo').addClass('global-header__logo--minimized');
        $('.login-trigger').addClass('login-trigger--minimized');
        //$('.login-container').css('top','50px');
        $('.contact-trigger').addClass('contact-trigger--minimized');
        $('.megamenu').addClass('megamenu--minimized');
        $('body').css('padding-top','50px');
        //$('.login-container').addClass('login-container--minimized');
        if ($('.microsite-header').length > 0){
            $('body').css('padding-top','0px');
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
        //$('.login-container').removeClass('login-container--minimized');
        headerPosition();
    }
}

$(window).resize(function(){
    var thisView = getViewport();
    headerPosition();
    resizeMegaMenu();
    if(thisView != currentView){
        closeSearchBox();
        closeContactForm();
    }

});

// Show sub menu (mobile only)
var optionsOpen = false;
$('.megamenu__main-item').click(function() {

    if (getViewport() == "mobile" ) {
        if ($(this).find('.megamenu__sub-items').is(':visible')) {
            $(this).find('.megamenu__sub-items').slideUp();
        } else {
            $('.megamenu__sub-items').slideUp();
            $(this).find('.megamenu__sub-items').slideToggle();
        }
        //Toggle main menu item's chevron

        if($(this).find('svg').attr("class").split(' ')[1] == "icon-chevron-right"){
            $('.megamenu__main-item').each(function(){
                $(this).find('use').unwrap().wrap('<svg class="icon icon-chevron-right"><use xlink:href="' + imagesPath + 'icons-metlife.svg#icon-chevron-right"></use></svg>')
            });
            $(this).find('use').unwrap().wrap('<svg class="icon icon-chevron-down"><use xlink:href="' + imagesPath + 'icons-metlife.svg#icon-chevron-down"></use></svg>')
        }else{
            $('.megamenu__main-item').each(function(){
                $(this).find('use').unwrap().wrap('<svg class="icon icon-chevron-right"><use xlink:href="' + imagesPath + 'icons-metlife.svg#icon-chevron-right"></use></svg>')
            });
        }
    }

});


$( ".megamenu--promobox--img" ).each(function() {
    var attr = $(this).attr('data-image-src');

    if (typeof attr !== typeof undefined && attr !== false) {
        $(this).css({'background' : 'url('+attr+')',
            'background-position' : 'center top',
            'background-size': 'cover'});
    }

});

$('.login-trigger').click(function(e){
    if(!$(".login-trigger").hasClass("linkOnly")) {
        e.preventDefault();
        $('body').addClass('overlay-scroll__parent');
        $('.login-container').addClass('overlay-scroll__child');
        $('.login-types').addClass('overlay-scroll__child');
        $(".global-header__middle h1").addClass("menu--left")
        $('.' + $(this).attr('data-target')).slideToggle();
        if ($('.megamenu').is(':visible')) {
            $('.megamenu').removeClass("overlay-scroll__child")
            $('.megamenu').toggleClass('megamenu--open');

            $('.megamenu-trigger__icon').toggleClass('megamenu-trigger__icon--open');
        }
    }
});

$('.contact-trigger').click(function(e){
    e.preventDefault();
    currentView = getViewport();
    $("#contactSidebar").find(".form-user-grp").each(function () {
        $(this).find("input, select, textarea").removeClass('error');
        $(this).find("input, select, textarea").val('')
    });
    $('.contact-container--global').stop().animate({right: '0'}, 400);
});

//Ryan moved the close code to a separate function because we're calling the close
// when we open the mega menu as well. this avoids 2 fixes should we tweak the animation
$('.contact-close').click(function(e){
    e.preventDefault();
    closeContactForm();

});
$('.productPolicyTypes').on('change', function(){
    currentView = getViewport();
})
function closeContactForm(){
    $('.contact-container--global').stop().animate({right: '-640'}, 400);
    $('.contactSideForm').find('.error-mandatory').removeClass('error-mandatory');
    $('.contactSideForm').find('.errorSpanOpen').removeClass('errorSpanOpen');
    $('.contactSideForm').find('.form-user-ctrl').removeClass('error');
    $('.contactSideForm').find('svg').css('fill','#666');
    $('.productUserType').hide();
    $('.productPolicyTypes').find('select').prop('selectedIndex',0);
    $('#state_Acc').prop('selectedIndex',0);
}


$(".megamenu__main-item-label.visible-xs").click(function(e){
    e.preventDefault();
})

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
    if ($(".disclaimer--main").length == 0){
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
    $('.homepage-nav__items').removeClass('homepage-nav__items--active');
    $('.homepage-nav__item').removeClass('homepage-nav__item--active');
    $('.homepage-nav__icon').hide();
    $('.homepage-sub').hide();
});
$(window).scroll(function () {
    closeHomepageNav();
});
// Lazy-load Hero Carousel
var carouselInterval = $(".carousel").attr("data-interval");
$( document ).ready(function() {

    $('#carouselHero').carousel({
        //interval: false
        interval: carouselInterval
    });
    
    if(typeof swipe == 'function') { //check if function is defined
        $(".carousel.slide").swipe({
            swipe:function(event, direction, distance, duration, fingerCount) {
                if(direction == "left")
                    $(this).carousel("next");
                else if(direction == "right")
                    $(this).carousel("prev");
            },
            threshold:20
        });
    }

    $(".carousel.slide").swipe({
        swipe:function(event, direction, distance, duration, fingerCount) {
            if(direction == "left")
                $(this).carousel("next");
            else if(direction == "right")
                $(this).carousel("prev");
        },
        threshold:20
    });
    // Lazyload image for first slide, wait 5 sec, then load images for remaining slides
    var lazyPause = carouselInterval - 500;
    //Need to shrink carousel caption by 100px to center carousel hero message
    //var carouselCaptionPaddingBottom = 100;
    $.lazyLoadXT.autoLoadTime = lazyPause;
    //Adjust carousel-caption container's height
    $.lazyLoadXT.onload = function() {
        $('.carousel .carousel-caption--hero').innerHeight($('.carousel').height());
    };
    //Reloadoad images on resize
    var resizeTimeout;
        resizeTimeout = setTimeout(function () {
            $(window).lazyLoadXT({
                checkDuplicates: false
            });
            clearTimeout(resizeTimeout);
        }, lazyPause);
    $( window ).resize(function() {
        $('.carousel .carousel-caption--hero').innerHeight($('.carousel').height());
        resizeTimeout = setTimeout(function () {
            $(window).lazyLoadXT({
                checkDuplicates: false
            });
            clearTimeout(resizeTimeout);
        }, lazyPause);
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

if ($(".contextual-links-container").length > 0) {
    if ($(".contextual-links-container").next().filter($(".faq")).length !== 0) {
        $('.faq').css("margin-top", "30px");
    }
}



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
            var number = layout.children().length;
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


$(".product__selector").on("change", function(){
    var productSelectorPage = $(this).find(':selected').attr("data-product-url");
    $(".js-productSelector").attr("href", productSelectorPage);
});

$(".find-office__zip-city-state").on("keyup", function(){
    $('.find-office__zip-city-state, .find-office__dental, .find-office__vision').removeClass('form-error');
    $('.error-span').hide();
});

function validateFindOffice() {
    //reset
    $('.find-office__zip-city-state, .find-office__dental, .find-office__vision').removeClass('form-error');
    $('.error-span').hide();
    valid=true;

    zipcode = $('.find-office__zip-city-state').val();
    isNumber =  /^\d+$/.test(zipcode);
    if( zipcode.length == 0 || (isNumber && zipcode.length != 5)) {
        $('.find-office__zip-city-state').addClass('form-error')
        $('.error-span').show();
        valid = false;
    }
    if (selectedBtnGroupOption == "dental" && $('.find-office__dental').val() == "") {
        $('.find-office__dental').addClass('form-error');
        valid = false;
    }
    if (selectedBtnGroupOption == "vision" && $('.find-office__vision').val() == "") {
        $('.find-office__vision').addClass('form-error');
        valid = false;
    }
    return valid;
}

$(document).ready(function(){
    selectedBtnGroupOption = $(".find-office .btn-group .btn.active").attr('data-btn-group-option');
});

$(".btn-group .btn").click(function(){
    //reset
    $('.find-office__zip-city-state-container').removeClass('full-width');
    $('.find-office__dental-container, .find-office__vision-container').css('display','none');
    selectedBtnGroupOption = $(this).attr('data-btn-group-option');
    if (!$(this).hasClass('active')) {
        $('.find-office__zip-city-state-container').removeClass('full-width');
        $('.find-office__dental-container, .find-office__vision-container').css('display','none');
    } else {
        //set
        $('.btn-group-selected').val(selectedBtnGroupOption);
    }
});

$(".find-office__zip-city-state").on("focus", function(){
    if (selectedBtnGroupOption == "vision"){
        console.log("vision")
        $('.find-office__zip-city-state-container').addClass('full-width');
        $('.find-office__vision-container').css('display','block');
        $('.find-office__dental-container').css('display','none');
    }else if(selectedBtnGroupOption == "dental") {
        console.log("dental")
        $('.find-office__zip-city-state-container').addClass('full-width');
        $('.find-office__vision-container').css('display','none');
        $('.find-office__dental-container').css('display','block');
    }else{
        console.log("other")
        $('.find-office__vision-container').css('display','none');
        $('.find-office__dental-container').css('display','none');
    }
});

$('.find-office__submit').click(function(event){
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

$('[data-target="vision_overlay"]').click(function(e){
    e.preventDefault();
    $(".vision_overlay").removeClass("hidden")
});

$('[data-target="dental_overlay"]').click(function(e){
    e.preventDefault();
    $(".dental_overlay").removeClass("hidden")
});

$(".vision_dental_overlay_close").click(function(e){
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



function matchProductModuleHeights(){
    
//    $('.row.wrapper.product-module').each(function () {
//        var moduleHeight = $(this).find('.product-module__medium').map(function () {
//                return $(this).height();
//            }).get(),
//            maxModuleHeight = Math.max.apply(null, moduleHeight);
//        $(this).find('.product-module__medium').height(maxModuleHeight);
//    });
    
    if ($(".hidden-xs").is(":visible")){
        if ($(".product-module").length != 0){
            $(".product-module").each(function(index){
                var productModuleTop= $(this).find(".product-module__top");
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
                productModuleBottom.css('min-height', productModuleBottomHeight + 20 + 'px');


            }) ;
        }
    }else{

        if ($(".product-module").length != 0){
            $(".product-module").each(function(){
                var productModuleTop= $(this).find(".product-module__top");
                var productModuleBottom = $(this).find(".product-module__bottom");

                productModuleTop.css('min-height', 'auto');
                productModuleBottom.css('min-height', 'auto');

            });
        }
    }

};


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
/**
 * Created by jfeng2 on 12/22/2015.
 */



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
    $('.rate_table .carousel-indicators > li').click(function() {
        
        //Determine active and clicked indicators
        var activeIndicator = $(this).parent().find("li.active").index() + 1;
        var clickedIndicator = $(this).index() + 1;
        
        //Determine if we need to swipe RIGHT or LEFT
        if (clickedIndicator > activeIndicator) {
            //Swipe Left
            var numOfColumnsToSwipe = '+=' + 100 * (clickedIndicator - activeIndicator) + '%' ;
            var parent = $(this).closest(".rate_table");
            if (!parent.find(".controls ol li").last().hasClass("active") && $('.controls').is(':visible')) {
                var number = parent.find("td.last").nextAll().length;
                if (number >= tableColumns) {
                    parent.find('.window').animate({right: numOfColumnsToSwipe}, "slow");
                    number = tableColumns;
                }
                else {
                    parent.find('.window').animate({right: '+=' + 100 / tableColumns * number + '%'}, "slow");
                }

                //Set clicked indicator to ACTIVE
                var indicator = parent.find("ol li.active");
                indicator.removeClass("active");
                $('.rate_table .carousel-indicators > li:eq(' + $(this).index() + ')').addClass("active");

                var first = parent.find("td.first");
                var last = parent.find("td.last");
                first.removeClass("first");
                first.nextAll().eq(number - 1).addClass("first");
                last.removeClass("last");
                last.nextAll().eq(number - 1).addClass("last");
            }
        } else if (clickedIndicator < activeIndicator) {
            //Swipe Right
            var numOfColumnsToSwipe = '-=' + 100 * (activeIndicator - clickedIndicator) + '%' ;
            var parent = $(this).closest(".rate_table");
            if (!parent.find(".controls ol li").first().hasClass("active") && $('.controls').is(':visible')) {
                var number = parent.find("td.first").prevAll().length;
                if (number >= tableColumns) {
                    parent.find('.window').animate({right: numOfColumnsToSwipe}, "slow");
                    number = tableColumns;
                }
                else {
                    parent.find('.window').animate({right: '-=' + 100 / tableColumns * number + '%'}, "slow");
                }

                //Set clicked indicator to ACTIVE
                var indicator = parent.find("ol li.active");
                indicator.removeClass("active");
                $('.rate_table .carousel-indicators > li:eq(' + $(this).index() + ')').addClass("active");

                var first = parent.find("td.first");
                var last = parent.find("td.last");
                first.removeClass("first");
                first.prevAll().eq(number - 1).addClass("first");
                last.removeClass("last");
                last.prevAll().eq(number - 1).addClass("last");
            }
        }
    });

    // Scrolling for Rate Table
    $('.rate_table .content_body').on("scroll", function () {
        var parent = $(this).closest(".rate_table");
        parent.find(".content_top").scrollLeft($(this).scrollLeft());
        parent.find(".content_left").scrollTop($(this).scrollTop());
    });

    // Open & Close Monthly Rates Dropdown
    $(".monthly_rates .expand_button").click(function () {
        $(this).siblings(".unexpanded").slideToggle(function () {
            resizeRateTable();
        });
        resizeRateTable();
        $(this).find(".expand_button_open").toggleClass("hidden");
        $(this).find(".expand_button_close").toggleClass("hidden");
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
        if ($(this).hasClass("rate_table--variation-1")) {

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

            //removes temporary content
            parent.find(".content_temp").remove();

        } else if ($(this).hasClass("rate_table--variation-2")) {

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
                            bodyLocation.find("tr").eq(i + 1).append("<td class='active health-class-" + (j-1) + "'>" + bodyContent + "</td>");
                            break;
                        default:
                            bodyLocation.find("tr").eq(i + 1).append("<td class='health-class-" + ((j+1)/2) + "'>" + bodyContent + "</td>");
                            j++;
                            bodyContent = parent.find(".content_temp tr").eq(i).children("td").eq(j).text();
                            bodyLocation.find("tr").eq(i + 1).append("<td class='health-class-" + (j/2) + "'>" + bodyContent + "</td>");
                    }
                }
            }

            //removes temporary content
            parent.find(".content_temp").remove();

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

            // removes temporary content
            parent.find(".content_temp").remove();

        }
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

            // Set widths for all elements
            if (!$(".hidden-xs").is(":visible") && !parent.hasClass("table-mobile")) {
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

                parent.removeClass("table-nonmobile");
                parent.addClass("table-mobile");
            }

            // Set column width for tablet/ desktop
            if ((getViewport() == "tablet" || getViewport() == "desktop") && !parent.hasClass("table-nonmobile")) {
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

                parent.removeClass("table-mobile");
                parent.addClass("table-nonmobile");
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
    if ($(".rate_table--variation-2").length>0){
        $(".overlay-table-section .rate_table--variation-2").find(".content_table th:not(':first-child')").attr("colspan",'2');
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

$('.login-types').css('top',$(window).height() - 70 + 'px');

$('.login-container--close').click(function(){
    $('.login-container').hide();
    $('.login-types').removeClass('overlay-scroll__child');
    $('.login-container').removeClass('overlay-scroll__child');
    $('body').removeClass('overlay-scroll__parent');
})

//Show login info popout on hover
$('.login-container .icon.info').hover(
    function () {
        $('[data-popout-msg='+$('select.login-type').val()+'-popout]').fadeIn();
    }, 
    function () {
        $('[data-popout-msg='+$('select.login-type').val()+'-popout]').hide();
    }
);
    
//Show/hide login fields based on user input
$('select.login-type').change(function(){
    $('[data-popout-msg]').hide();
    var selectedLoginType = $(this).val();
    if (selectedLoginType == "for_individuals" || selectedLoginType ==  "for_brokers") {
        $('.login-type-biz-account').hide();
        $('.login-type-biz-purpose').hide();
        $('#biz-account-type').prop('selectedIndex',0);
        $('#biz-account-purpose').prop('selectedIndex',0);
        $('.login-type-username').show();
        $('.login-type-password').show();
    } else {
        $('.login-type-biz-account').show();
    }
    
    if( $('#biz-account-type :selected').val() != "" ) {
        $('.login-type-username, .login-type-password').show();
        if( $('#biz-account-type :selected').val() != "sbr" ) {
            $('[data-popout-msg=' + selectedLoginType + ']').show();
        }

        if( $('#biz-account-type :selected').val() == "metlink" ) {
            $('.not-registered-bus').hide();
        }
        if( $('#biz-account-type :selected').val() == "mybenefits" ) {
            $('[data-popout-msg="for_benefits"]').show();
        }
    } else {
        if (selectedLoginType == "for_individuals" || selectedLoginType ==  "for_brokers") {
            $('.login-type-username, .login-type-password').show();
            $('[data-popout-msg=' + selectedLoginType + ']').show();
            $('.login-popout.login-submit button').attr('disabled',false).removeClass('btn-brand-2nd--disabled');
        } else {
            $('.login-popout.login-submit button').attr('disabled',true).addClass('btn-brand-2nd--disabled');
            $('.login-type-username, .login-type-password').hide();
        }
    }
});

$('#biz-account-type').change(function(){
    if( $('#biz-account-type :selected').val() != "" ) {
        $('.login-type-username, .login-type-password').show();
        $('.login-popout.login-submit button').attr('disabled',false).removeClass('btn-brand-2nd--disabled');
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
        if( $('#biz-account-type :selected').val() != "sbr" ) {
            $('[data-popout-msg=for_businesses]').show();
        }

        if( $('#biz-account-type :selected').val() == "metlink" ) {
            $('.not-registered-bus').hide();
        }
    } else {

        $('.login-type-username, .login-type-password').hide();
    }
});
$('#biz-account-purpose').change(function(){
    $('[data-popout-msg=for_businesses]').show();
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
    if( loginTypesPosition == $('.global-header').height() ) {
        $(".login-types").animate({top:winHeight+30 +'px'},500, function(){
            loginTypesPosition = parseInt($(".login-types").css('top').replace('px',''));
        });
    } else {
        $(".login-types").animate({top:$('.global-header').height()+'px'},500);
        loginTypesPosition = parseInt($('.global-header').height());
    }
    $('.login-type__details').slideToggle(500);
}

//Show/hide other login types
//loginTypesPosition = parseInt($(".login-types").css('top').replace('px',''));
$('.login-type-trigger__title').on('click touchstart',function(e){
    e.preventDefault();

    var clickEvent = ((document.ontouchstart!==null)?'click':'touchstart');
    switch(clickEvent) {
        case 'click':
            toggleLoginTypes()
            break;
        case 'touchstart':
            console.log(clickEvent)
            toggleLoginTypes()
            break;
        default:
            break;
    }
    return false;
});

$('.login-type__detail').click(function(){
    if($(window).width() < breakpointDesktop) {
        $('.login-type__detail').find('ul').slideUp();
        $('.login-type__detail').find('use').unwrap().wrap('<svg class="icon icon-chevron-right"><use xlink:href="' + imagesPath + 'icons-metlife.svg#icon-chevron-right"></use></svg>')
        if(!$(this).find('ul').is(':visible')) {
            $(this).find('ul').slideDown();
        }
        //Toggle main menu item's chevron
        if ($(this).find('svg').attr('class') == "icon icon-chevron-right") {
            $(this).find('use').unwrap().wrap('<svg class="icon icon-chevron-down"><use xlink:href="' + imagesPath + 'icons-metlife.svg#icon-chevron-down"></use></svg>')
        } else {
            $(this).find('use').unwrap().wrap('<svg class="icon icon-chevron-right"><use xlink:href="' + imagesPath + 'icons-metlife.svg#icon-chevron-right"></use></svg>')
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
function loginFunction(){

    var valid = true;
    var username = $('.login-type-username').find('input');
    var password = $('.login-type-password').find('input');
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
    $('.login-popout').find("input").each(function(){
        $(this).val($(this).attr("placeholder"));
        $(this).removeClass('error');
    });
    $('.login-type-username').show();
    $('.login-type-password').show();
    $('select.login-type').val("for_individuals");
    $('#biz-account-type').prop('selectedIndex',0);
    $('#biz-account-purpose').prop('selectedIndex',0);
    $('.login-type-biz-account').hide();
    $('.login-type-biz-purpose').hide();
}


//Show PASSWORD placeholder in password field.
function showPasswordPlaceholder () {
 
    // cache references to the input elements into variables
    var passwordField = $('input[name=password]');
 
    // add a password placeholder field to the html
    passwordField.after('<input id="passwordPlaceholder" type="text" value="Password" autocomplete="off" />');
    var passwordPlaceholder = $('#passwordPlaceholder');
 
    // show the placeholder with the prompt text and hide the actual password field
    passwordPlaceholder.show();
    passwordField.hide();

    // when focus is placed on the placeholder hide the placeholder and show the actual password field
    passwordPlaceholder.focus(function() {
        passwordPlaceholder.hide();
        passwordField.show();
        passwordField.focus();
    });
    // and vice versa: hide the actual password field if no password has yet been entered
    passwordField.blur(function() {
        if(passwordField.val() == '') {
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
        $('.contact-container--form-card .hidden-field').show();
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


/**
 * Created by jfeng2 on 12/21/2015.
 */

$(window).load(function () {
    productComparisonChart();
    micrositeCarouselSetup();
    micrositeComparisonChart();

});

$(window).resize(function (e) {
    micrositeComparisonChart();
    productComparisonChart();
});


//Product Comparison Chart

function productComparisonChart() {

    // Init first block
    $('.product_chart .carousel-item').removeClass('selected');
    $('.product_chart .carousel-item:first-child').addClass('selected');
    $('.product_chart .carousel-tab:first-child').show();


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

    $('.product_chart .item:first-child').addClass('active');


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
                    if ($(this).is(".carousel-item:last-child")) {
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
                $(this).find('.column-wrapper:last-child').addClass("hidden-xs");
                break;
            case (4):
                $(this).clone().addClass('visible-xs').insertAfter($(this)).find('.column-wrapper:nth-child(-n+3)').remove();
                $(this).find('.column-wrapper:nth-child(n+4)').addClass("hidden-xs");
                break;
            case (5):
                $(this).clone().addClass('visible-xs').insertAfter($(this)).find('.column-wrapper:not(:nth-last-child(-n+2))').remove();
                ;
                $(this).clone().addClass('visible-xs').insertAfter($(this)).find('.column-wrapper:nth-child(-n+3), .column-wrapper:last-child').remove();
                $(this).find('.column-wrapper:nth-child(n+4)').addClass("hidden-xs");
                break;
            default:
        }


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
};

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
                console.log("number of column wrapper in a carousel-item " + columnWrapperNum);
                $(this).css('width', columnWrapperNum/columnWrapperNumTotal * 100 + '%');

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
    $('.microsite-product-chart .carousel-item:first-child').addClass('selected');

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


    $('.microsite-product-chart .item:first-child').addClass('active');

    // Style first tab after a carousel slide
    $('#micrositeComparisonChartCarousel').bind('slid.bs.carousel', function (e) {
        matchHeights();
        var nextIndex = $('.item.active > .carousel-item').attr('data-target');
        $('.microsite-product-chart .carousel-item').eq(nextIndex).addClass('selected');
    });


};
/****** Microsite End ***************************************************************/
/**
 * Created by jfeng2 on 1/27/2016.
 */

$(document).ready(function () {
    productTilesLayout();
    productTilePullRight();
});

$(window).load(function () {
    productTileHeight();
    productTilePullRight();
});

$(window).resize(function (e) {
    productTileHeight();
    productTilePullRight();
});

function productTileHeight() {

    if (getViewport() == "tablet" || getViewport() == "desktop") {
        if ($(".product-row").length != 0) {
            $(".product-row").each(function () {
                $(this).find($(".single-promo")).css("height", "320");
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
$(window).load(function () {
    matchSubnavHeight();
});

$(window).resize(function (e) {
   removeSubnavAttr();
});


$(".subnav-go-back .subnav-go-back__menu a").click(function(e){
        if(!$(".hidden-xs").is(":visible")){
            e.preventDefault();
            $(".subnav-go-back__list").slideToggle();
        }
});

function removeSubnavAttr(){
    if($(".hidden-xs").is(":visible")){
        $(".subnav-go-back__list").removeAttr('style');
    }
};


$(".subnav-go-back .subnav-go-back__list li a").each(function () {
    if ($(this).attr("href") == window.location.pathname) {
        $(this).addClass("active");
    }
});





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
                      console.log(e);
                      window.location = JSON.parse(e.substring(e.indexOf("{"),e.indexOf("}")+1))["redirecturl"];
                      var str = JSON.parse(e.substring(e.indexOf("{"),e.indexOf("}")+1))["redirecturl"];
                      console.log(e.redirecturl);
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
                      console.log(e);
                      window.location = JSON.parse(e.substring(e.indexOf("{"),e.indexOf("}")+1))["redirecturl"];
                      var str = JSON.parse(e.substring(e.indexOf("{"),e.indexOf("}")+1))["redirecturl"];
                      console.log(e.redirecturl);
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

var ajaxURL = "/wps/suggest";

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

$(".search-trigger__search-box").blur( function() {
    ss_clear();
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
        firstcol.className = 'ss-gac-c';
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

            alt.className = 'ss-gac-c';
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
function ss_handleMouseC() {
    var fo = document.getElementById(ss_form_element);
    var tbl = document.getElementById(ss_popup_element);
    var rows = tbl.getElementsByTagName('tr');
    for (var ri = 0; ri < rows.length - 1; ri++) {
        if (rows[ri] == this) {
            var x = rows[ri].getElementsByTagName('td');
            console.log($(x)[0].innerText);
            $('#searchInPage,#Search').val($(x)[0].innerText);
            $('.search_submit').click();
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
  function tempCtor() {};
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
          } catch (e) {}
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
var count = 0;
var resultsListHTML ="";
var loadingMore = false;
var page = 1;
//Quote Tool variables
var quoteDomain;
var quotelanguage;
var quoteProduct;
var quoteSubmit;
var quoteUrl;
var quoteToolForm;
var quoteRequest;
// Find an X variables
var geocoder = new google.maps.Geocoder();
var startPointGeoCode;
var startPointGMarker;
var radiusInMiles;
var specialty = "";
var map;
var blueMarker;
var blackMarker;
var presentHighligtedInfo;
var selectedMarker;
var markersArray = [];
var dir_markerArray = [];
var dir_to_flag=true;
var directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true });

//Forms Lib Variables
var searchAgainFlag = false;


//News Room Variables
var firstTimeRunNewsRoom = true;
var newsMonth;
var newsYear;
var newsTopic;
var newsConcatenator;


//Contact Variables
var radioDials = false;



$(document).ready(function() {

	ServicesAPI.loadEventListeners();
	if ($("#searchInPage").length != 0) {
		$("#searchInPage").val("");
	}

});
//Contact Forms
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



$(".form-radio-grp svg, .image_radio svg").on('click', function(){
	var radioButton = $(this).siblings('input');
	if (!radioButton.prop('checked')){
		radioButton.prop('checked', true);
		var radioName = radioButton.prop('name');
		$('input[name=' + radioName + ']').siblings('svg').toggle();
	};
});

$('#productPolicy option[value=""]').attr('selected', true);

$("[data-fid='contactCard'] input").click(function() {
	if($('.contactCard .form-minimize').hasClass('hidden-sm')) {
		$('.contactCard .form-minimize').removeClass('hidden-sm hidden-md');
	}
});

$('.contactCard .form-minimize').click(function() {
	$('.contactCard .form-minimize').addClass('hidden-sm hidden-md');
	$('[data-request-type] option[value=""]').attr('selected', true);
	$("[data-request-type]").change();
	$('[data-request-type] option[value=""]').attr('selected', true);
});

$("[data-request-type]").on("change", function(){
	var thisValue = $(this).val()
	var thisForm = $(this).parent().parent().parent().parent().attr('data-fid');
	var $formid = $('[data-fid=' + thisForm + ']');
	radioDials = false;
	$formid.find("[data-observes-id]").find('input:radio').each(function(){
		$(this).next('span').removeClass('errorRadio');
	});
	$formid.find('[data-observes-id]').each(function () {

		if($(this).attr('data-observes-value') == thisValue ){
			$(this).show();

		}else{
			$(this).hide();
		}
	});
	if(thisValue != ""){
		$("[data-request-type]").removeClass('error');
		$(this).attr('data-valid-status', 'success');
		$(this).parent('.form-user-grp').find('svg').css('fill', '#666');
	}
})


$("[data-observes-id]").find('textarea').on("change", function(){
	var thisForm = $(this).parent().parent().parent().parent().attr('data-fid');
	var $formid = $('[data-fid=' + thisForm + ']');
	var val = $formid.find("[data-observes-id]").find('textarea').val();
	var placeholder  = $formid.find("[data-observes-id]").find('textarea').attr('placeholder');
	if (val == "" || val == placeholder) {
		$("[data-request-type]").attr('data-valid-status', 'failed');
	} else {
		$("[data-request-type]").attr('data-valid-status', 'success');
		$("[data-request-type]").removeClass('error');
	}
})

$("[data-observes-id]").find('input:text').on("change", function(){
	var thisForm = $(this).parent().parent().parent().parent().attr('data-fid');
	var $formid = $('[data-fid=' + thisForm + ']');
	var val = $formid.find("[data-observes-id]").find('input:text').val();
	var placeholder  = $formid.find("[data-observes-id]").find('input:text').attr('placeholder');
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
$('[data-fsubmit]').on('click', function (e) {
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
//New This should be uncommented once form builder is in palce

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

$(".form-user-ctrl").on('click', function(evt){
	if($(this).hasClass("error")) {
		$(this).val("");
	}
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
//Contact Forms


/****Blog Search****************************************/


$("#blog-category-dropdown").on("change", function(){
	var url = $(".blog-list").attr("data-url");
	var searchType = $(this).val();
	ServicesAPI.blogsServiceCall(url, searchType)
});

/****News Room Search****************************************/
$(".divider--load-more__link").click(function (e) {
	e.preventDefault();
	ServicesAPI.newsRoomServiceConstruction();
});

$("#list_month, #list_year, #list_topics").change(function () {
	ServicesAPI.newsRoomServiceConstruction();
});

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
		window.location.href = "/Press_Room";
	}
	sessionStorage.removeItem("press_back");
});

/**** Press Room Search****************************************/


//Forms Library
if ($(".js-formLib").length > 0) {
	$('.js-formLib').on("change", function () {
		searchAgainFlag = true;
		var url = $(".js-formLib").attr("data-forms-lib-url");
		var query  = $(".js-formLib").attr("data-forms-query-parameter");
		var value = $('.js-formLib').val()
		url += value + query;
		ServicesAPI.formsLibraryServiceCall(url);
	});

	$(".form_library_container").on("click", ".form a", function() {
		$(".form_library_container").find(".form a").removeClass("selected");
		$(this).closest(".form").find("a").addClass("selected");
	});
}


//Site Search


// Search Results Page Search Start
$('.js-searchSubmit').on('click', function () {
	var searchRequest = $(".js-searchTextBox").val();
	var url = $(".js-searchSubmit").attr("data-search-ajax-url")+ "?query=" + searchRequest;
	if (searchRequest) {
		ServicesAPI.searchServiceCall(url);
	}
});

// Site Header Search
$('.js-searchIcon').click(function () {
	if($(".search-trigger__search-box").hasClass("js-oldSearch")) {
		if ($(".search-trigger__icon--open").length > 0 && getViewport() != "mobile") {
			if($(".search-trigger__search-box").val() == "" || $(".search-trigger__search-box").val() == " "){
				ServicesAPI.legacySearch("search");
			}else{
				ServicesAPI.legacySearch($(".search-trigger__search-box").val());
			}

		}else{

		}

	}else{
		//For Integration we only need this statment
		if ($(window).width() >= 767 && $(".search-trigger__icon--open").length > 0) {
			ServicesAPI.redirectToSearchResultsPage('.search-trigger__search-box');
		}
	}

});

$('.js-searchIconMobile').click(function () {
	if($(".search-trigger__search-box").hasClass("js-oldSearch")) {
		if (getViewport() == "mobile" && $(".search-trigger__icon--open").length > 0) {
			ServicesAPI.legacySearch($(".search-trigger__search-box").val());
		}
	}else{
		//For Integration we only need this statment
		if ($(window).width() >= 767 && $(".search-trigger__icon--open").length > 0) {
			ServicesAPI.redirectToSearchResultsPage('.search-trigger__search-box');
		}
	}

});

$('.search-trigger__search-box').keypress(function (e) {
	if($(this).hasClass("js-oldSearch")){
		if (e.which == 13) {
			e.preventDefault();
			ServicesAPI.legacySearch($(".search-trigger__search-box").val());
		}
	}else{
		//For Integration we only need this statment
		if (e.which == 13) {
			e.preventDefault();
			ServicesAPI.redirectToSearchResultsPage('.search-trigger__search-box');
		}
	}

});


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
$('.js-SearchBox').click(function(e){
	e.preventDefault();
	var zipcode = $(".office-search__input").val();
	var urlStr;
	if ($(this).hasClass("office-search__action")){
		sessionStorage.setItem("faoZipCode", $(".office-search__input").val());
		urlStr = $(this).attr('data-href') + "?zip=" + zipcode;
		window.location.href = urlStr;
	}
});
$('.search-results-container__correction-text > a').on('click', function (e) {
	e.preventDefault();
	var correctionClickedOn = $(this).text();
});

$('.search-results-container__correction-text > a').on('click', function (e) {
	e.preventDefault();
	var correctionClickedOn = $(this).children('span').text();
	var searchRequest = correctionClickedOn;
	var url = $(".js-searchSubmit").attr("data-search-ajax-url")+ "?query=" + searchRequest;
	if (searchRequest) {
		ServicesAPI.searchServiceCall(url);
	}
});

//Pagination Update
$(".page-count").on('change', function () {
	listCount = $(this).val();
	ServicesAPI.createPagination(count);
	ServicesAPI.resetMap();
	ServicesAPI.showLocation();
});

//Find an X Click Functions
$(".find-an-x-search__container .cta_search").on('focus',function (e) {
	if(getViewport() == "mobile"){
		$('.find-an-x-search--expand').show();
	}
});
/*$("body").on("click tap", function (e) {
 var faoTrigger = $('.cta_search');
 var container = $(".find-an-x-search__container");
 if (!container.is(e.target) && container.has(e.target).length === 0) {
 $('.find-an-x-search--expand').hide();
 }
 });*/

$(".find-an-x-search__container .directions_button").on('click',function (e) {
	//handle empty val
	if( $(".cta_search").val().length === 0 ) {
		$(".cta_search").addClass('error');
	}else{
		ServicesAPI.showLocation();
	}

});

$(".search_location_image").on('click touchstart',function () {
	if ($(window).width() < 1025) {
		ServicesAPI.showLocation();
	}
});

$('.find-an-x-search__container .cta_search').on('keypress',function (event) {
	//handle empty val
	if( $(".cta_search").val().length + 1 === 0 ) {
		$(".cta_search").addClass('error');
	}else{
		$(".cta_search").removeClass('error');
		ServicesAPI.checkEnter(event);
	}

});

/* Function that is called whenever the user changes the radius*/
$(".find_an_office_radius").on('change',function () {
	ServicesAPI.resetMap();
	ServicesAPI.showLocation();
});

$(document).on('click',".results_office_name",function(){
	var i= $(this).closest('.results_office_result').index();
	var index = ((i + 1) + ((bootPagNum) * listCount))
	google.maps.event.trigger(markersArray[index], 'click');
});

$('.get-directions-buttons .btn').on('click',function(){
	$('.get-directions-buttons .btn').removeClass('active');
	$(this).addClass('active');
	if($('.driving-directions-panel').is(':visible')){
		ServicesAPI.getDirections();
	}
});

$(".get-directions-form .get_directions_button").on('click',function(){
	ServicesAPI.getDirections();
});

/* back link on directions page work*/
$(".back-click").on('click',function(){
	if($('.driving-directions-panel').is(':visible')){
		$('.driving-directions-panel').addClass('hidden');
		$('.get-directions-form').removeClass('hidden');
		directionsDisplay.setMap(null);
		ServicesAPI.getDirectionsPanel($('.get-directions-form .to-address').val());
	}
	else{
		ServicesAPI.showLocation();
		if (!$(".find-an-x-search__container").hasClass("hidden")) {

			$('.page-title__heading').text($('.findOfficeText').text());
			ServicesAPI.removeBreadCrumb();
		}
	}
});

//might not be needed, need to test.
/* update link for find an office breadcrumb*/
$('.bc_link_fao').on('click',function(){
	ServicesAPI.showLocation();
});

$('.maps-button').click(function (clickedButton) {
	var moreMapText = $(".get_direction_more_map").text();
	var lessMapText = $(".get_direction_less_map").text();

	if ($('.maps-button').text() == moreMapText)
	{
		$('.google-maps-container').css('height', '400px');
		$('.maps-button').text(lessMapText);
		ServicesAPI.resetMap();
		ServicesAPI.resizeMap();
	} else {
		$('.google-maps-container').css('height', '200px');
		$('.maps-button').text(moreMapText);
		ServicesAPI.resetMap();
		ServicesAPI.resizeMap();
	}
});

$(window).on('load',function(e) {
	if($(".fax__container").length > 0){
		faoURL = window.location.href;
		blackMarker = $('.pngPath_icon_locpin_blk').text();
		blueMarker = $('.pngPath_icon_locpin_blue').text();
		ServicesAPI.initializeFindAnOffice();
		if (document.referrer != ""){
			ServicesAPI.showLocation();
		}
		if ($(".hidden-xs").is(":visible") == false) {
			$(".fax__container").find('.contact-container--form-card').insertAfter($(".results_list_container"));

		}
		else {
			$(".fax__container").find('.contact-container--form-card').insertAfter($(".fax-results__container  > .maps-contact-form-container > button"));
		}
	}
	if($(".find-office__zip-city-state").length > 0){
		googleautocomplete = new google.maps.places.Autocomplete(document.getElementsByClassName("find-office__zip-city-state")[0]);
		//googleautocomplete.bindTo('bounds', map);
		google.maps.event.addListener(googleautocomplete, 'place_changed', function () {
			var place = googleautocomplete.getPlace();
			if (!place || !place.geometry) {

			}
		});
	}

});
//From FAO js, not sure what this does.
$("body").on("ready", "[data-leg-index=\"1\"]", function(){
	$("[data-leg-index=\"1\"]").addClass("lastMarker");
});

$(".results_pagination").click(function(){
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
		if(sessionStorage.getItem("product") !== null){
			$(".insurance-type").val($("[data-product='"+ sessionStorage.getItem("product") + "']").val());
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

$(".js-submitQuote").click(function(e){
	e.preventDefault();
	if($(".js-submitQuote").parent().parent().parent().parent().hasClass('quote-tool-form')){
		var baseUrl  = $(".quote-tool-form").attr("data-quote-url");
		quoteUrl ="";
		//quoteUrl = baseUrl + '{"domain":"' + quoteDomain + '","language":"'+ quotelanguage+'","product":"'+ quoteProduct +'","country":"default"';
		quoteUrl = baseUrl;
		quoteRequest = {domain:quoteDomain, language:quotelanguage,product: quoteProduct, country: 'default' };
		ServicesAPI.loopThroughQuoteInputs();
		//quoteUrl +=  '}';
		if(ServicesAPI.validateFields()){
			ServicesAPI.quoteServiceCall();
		}
	}
});


$(".insurance-type").on("change", function(){
	var formToShow = $(".insurance-type").val();
	$(".quote-tool-form").show();
	$(".quote-tool-form form").hide();
	$("[data-show-form='"+quoteToolForm+ "']").hide();
	quoteSubmit = $(".insurance-type").val();
	$("."+formToShow + " form").show();
	quoteSubmit = $(".insurance-type").val();
	if($("[data-quoteDescription='"+ quoteSubmit +"']").length > 0){
		$("[data-quoteDescription]").addClass("hidden");
		$("[data-quoteDescription='"+ quoteSubmit +"']").removeClass("hidden");
	}
	quoteToolForm = $(this).find(':selected').val();
	quoteDomain = $("[data-quoteTool='"+ quoteToolForm +"']").attr("data-domain");
	quotelanguage = $("[data-quoteTool='"+ quoteToolForm +"']").attr("data-lan");
	quoteProduct = $(this).find(':selected').attr('data-product');
	$(".js-hideButton").hide();
});

String.prototype.toTitleCase = function() {
	var i, j, str, lowers, uppers;
	str = this.replace(/([^\W_]+[^\s-]*) */g, function(txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});

	// Certain minor words should be left lowercase unless
	// they are the first or last words in the string
	lowers = ['A', 'An', 'The', 'And', 'But', 'Or', 'For', 'Nor', 'As', 'At',
		'By', 'For', 'From', 'In', 'Into', 'Near', 'Of', 'On', 'Onto', 'To', 'With'];
	for (i = 0, j = lowers.length; i < j; i++)
		str = str.replace(new RegExp('\\s' + lowers[i] + '\\s', 'g'),
			function(txt) {
				return txt.toLowerCase();
			});

	// Certain words such as initialisms or acronyms should be left uppercase
	uppers = ['Id', 'Tv'];
	for (i = 0, j = uppers.length; i < j; i++)
		str = str.replace(new RegExp('\\b' + uppers[i] + '\\b', 'g'),
			uppers[i].toUpperCase());

	return str;
}

var isWhole_re = /^\s*\d+\s*$/;
function isWhole (s) {
	return String(s).search (isWhole_re) != -1
}

var isNonblank_re    = /\S/;
function isNonblank (s) {
	return String (s).search (isNonblank_re) != -1
}

var ServicesAPI = {

	loadEventListeners: function(){
		ServicesAPI.updatePageFrom($('[name="pageFrom"]'));
		ServicesAPI.gmapsAutoCompleteInit();
		if($(".search-results-container").length > 0)
			ServicesAPI.searchResultsPageLoad();
		if($(".js-resultsGlobal").length > 0 || $(".insurance-type").length > 0){
			ServicesAPI.loadQuoteResults();
			ServicesAPI.clearOverlays();
		}
		if($(".news-room").length > 0){
			listCount = 6;
			ServicesAPI.pressBackQuery();
			ServicesAPI.newsRoomServiceConstruction();
		}
		if($(".blog-list").length > 0){
			var url = $(".blog-list").attr("data-url");
			ServicesAPI.blogsServiceCall(url , "mostRecent")
		}
	},
	replaceAll : function(txt, replace, with_this) {
		return txt.replace(new RegExp('\\b' + replace + '\\b', 'gi'),with_this);
	},
	populateYearDropDown: function(year,min,element) {
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
	isLeapYear : function(a) {
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
	validateFields: function() {
		var areErrorFieldsPresent = false;

		$("[data-quoteTool='"+ quoteToolForm +"']").each(function(){
			if(!$("[data-quoteTool='"+ quoteToolForm +"']").find(".form-focus").find(".errorSpan").is(":visible")){
				areErrorFieldsPresent =  true;
			}
		});
		return areErrorFieldsPresent;
	},
	numberWithCommas: function(x){
		var parts = x.toString().split(".");
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		return parts.join(".");
	},
	toTitleCase: function(str){
		return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	},
	encode : function(d) {
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
	escapeChar : function(value) {
		var bb = "";
		for (i = 0; i < value.length; i++) {
			bb += encode(value.charAt(i));
		}
		return bb;
	},
	strTrim : function(a){
		a=a.replace(/^\s+/g,"");
		a=a.replace(/\s+$/g,"");
		return a;
	},
	calculateAge: function() {
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
	showSorryUnableToLocateMessage : function(){
		count = 0;
		ServicesAPI.createPagination(count);
		$('.results_error_info').removeClass('hidden').html($('.errorMsgtext_no_office_found').text());
		$('.results_content').remove();
		$('.results_pagination,.find_an_office_pagecount_wrap,.maps-button, .google-maps-container').addClass('hidden');
	},
	getQueryStringNew: function(){
		var vars = [], hash;
		var hashes = window.location.href.slice(window.location.href.indexOf('#') + 1).split('&');
		for(var i = 0; i < hashes.length; i++)
		{
			hash = hashes[i].split('=');
			vars.push(hash[0]);
			vars[hash[0]] = hash[1];
		}
		return vars;
	},
	getQueryStringNoHash: function(){
		var vars = [], hash;
		var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		for(var i = 0; i < hashes.length; i++)
		{
			hash = hashes[i].split('=');
			vars.push(hash[0]);
			vars[hash[0]] = hash[1];
		}
		return vars;
	},
	createPagination : function (result) {
		$('.results_content').children().removeClass('.hidden');
		var notHiddenList = $(".results_content").children().not('.hidden');
		var listLength = result;
		var st_cnt = 0;
		var end_cnt = 0;
		var next_label = $(".next_label").text();
		var prev_label  = $(".prev_label").text();
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
				page: 1,            // default page
				maxVisible: listCount,
				next: next_label,    // visible pagination
				leaps: true,
				prev: prev_label        // next/prev leaps through maxVisible
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
					maxVisible: listCount
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
	formatQuotePremium : function(premium){
		//if(premium != Math.round(premium)){
		var dec = parseFloat(Math.round(premium*100)/100).toFixed(2);
		return dec;
	},
	quoteServiceCall: function() {

		$.ajax({
			url: quoteUrl + JSON.stringify(quoteRequest),
			contentType: "application/json; charset=utf-8",
			async: true,
			dataType:'json',
			data : JSON.stringify(quoteRequest),
			type: 'POST',
			success: function(response) {
				var numObjects = Object.keys(response.solution).length;
				window.sessionStorage.clear();
				ServicesAPI.setQuoteSessionStorage();

				if(response.solution.premium !== undefined &&  response.solution.premium !== null){
					var prem = ServicesAPI.numberWithCommas(ServicesAPI.formatQuotePremium(response.solution.premium));
					sessionStorage.setItem("premium", prem);
				}

				if(response.solution.age !== undefined && response.solution.age !== null){
					sessionStorage.setItem("age",response.solution.age);
				}
				if(response.solution.gender !== undefined && response.solution.gender !== null){
					sessionStorage.setItem("gender",response.solution.gender);
				}
				if(response.solution.coverage !== undefined && response.solution.coverage !== null){
					var cov = ServicesAPI.numberWithCommas(ServicesAPI.formatQuotePremium(response.solution.coverage));
					sessionStorage.setItem("coverage",cov);
				}
				if(response.solution.term !== undefined && response.solution.term !== null){
					sessionStorage.setItem("term",response.solution.term);
				}
				if(response.solution.coverageType !== undefined && response.solution.coverage_type !== null){
					sessionStorage.setItem("coverageType",response.solution.coverageType);
				}
				if(response.solution.state !== undefined && response.solution.state !== null){
					sessionStorage.setItem("state",response.solution.state);
				}
				if(response.solution.income !== undefined && response.solution.income !== null){
					sessionStorage.setItem("income",response.solution.income);
				}
				if($('#' +quoteToolForm + 'dobMonth').length > 0 && $('#' +quoteToolForm + 'dobDay').length > 0  && $('#' +quoteToolForm + 'dobYear').length > 0 ){
					sessionStorage.setItem('dobMonth', $('#' +quoteToolForm + 'dobMonth').val());
					sessionStorage.setItem('dobDay', $('#' +quoteToolForm + 'dobDay').val());
					sessionStorage.setItem('dobYear', $('#' +quoteToolForm + 'dobYear').val());
				}
				for(var i = 1; i <=numObjects; i++){
					var optionalSelect = response.solution.hasOwnProperty('optionalSelect' + i);
					if(optionalSelect){
						sessionStorage.setItem('optionalSelect' + i, response.solution['optionalSelect' + i]);
					}
					var optionalRadio = response.solution.hasOwnProperty('optionalRadio' + i);
					if(optionalRadio){
						sessionStorage.setItem('optionalRadio' + i, response.solution['optionalRadio' + i]);
					}
				}
				sessionStorage.setItem("product" , quoteProduct);
				ServicesAPI.redirectToQuoteResultsPage();
			},
			error: function(e) {
				console.log('error ',e);
			},
			timeout:30000
		});
	},
	loadQuoteResults: function(){
		if($(".js-resultsGlobal").length > 0){
			if(sessionStorage.getItem("premium") !== null){
				$(".results-card__quoteinfo__value").text(sessionStorage.getItem("premium"));
			}
			if(sessionStorage.getItem("coverage") !== null){
				$("[data-field='coverage'] .value").text(sessionStorage.getItem("coverage"));
			}

			if(sessionStorage.getItem("coverageType") !== null){
				var cov = sessionStorage.getItem("coverageType").toTitleCase();
				$("[data-field='coverage']").html('<span class="value"> ' + cov + ' </span>');
			}
			if(sessionStorage.getItem("coverageType") === null && sessionStorage.getItem("coverage") === null){
				$("[data-field='coverage']").remove();
			}

			if(sessionStorage.getItem("term") !== null){
				$("[data-field='term'] .value").text(sessionStorage.getItem("term"));
			}else{
				$("[data-field='term']").html('');
			}
		}else{
			if($(".list").length > 0 ){

			}else{
				$(".insurance-type").val($(".insurance-type option:first").val());
				sessionStorage.clear();
			}
		}
	},
	quoteFormReset : function() {
		$(".cta_header_quote").find(".generic-form").each(function () {
			$(this).find("input, select, textarea").removeClass('error');
			$(this)[0].reset();
		});
	},
	redirectToQuoteResultsPage: function() {
		var url = $("[data-quoteTool='"+ quoteToolForm +"']").attr("data-path-to-results");
		window.location.href = url;
	},
	setQuoteSessionStorage: function(){
		var thisForm = $("[data-quoteTool='"+ quoteToolForm +"']");
		var numInputs = thisForm.find(".form-focus").length;

		if($('#' +quoteToolForm + 'userAge').length > 0){
			sessionStorage.setItem("age", $('#' +quoteToolForm + 'userAge').val());
		}

		if($('#' +quoteToolForm + 'coverageType').length > 0){
			sessionStorage.setItem("coverageType", $('#' +quoteToolForm + 'coverageType').val());
		}

		if($('#' +quoteToolForm + 'coverageText').length > 0 ){
			sessionStorage.setItem("coverage", $('#' +quoteToolForm + 'coverageText').val());
		}


		if($('#' +quoteToolForm + 'state').length > 0){
			sessionStorage.setItem("state", $('#' +quoteToolForm + 'state').val());
		}

		if($('#' +quoteToolForm + 'gender').length > 0){
			sessionStorage.setItem("gender", $('#' +quoteToolForm + 'gender').val());
		}

		if($('#' +quoteToolForm + 'coverageAmount').length > 0){
			sessionStorage.setItem("coverage", $('#' +quoteToolForm + 'coverageAmount').val());
		}

		if($('#' +quoteToolForm + 'termLengthSelect').length > 0){
			sessionStorage.setItem("term", $('#' +quoteToolForm + 'termLengthSelect').val());
		}

		if($('#' +quoteToolForm + 'termLengthText').length > 0 ){
			sessionStorage.setItem("term", $('#' +quoteToolForm + 'termLengthText').val());
		}

		if($('#' +quoteToolForm + 'incomeSelect').length > 0){
			sessionStorage.setItem("income", $('#' +quoteToolForm + 'incomeSelect').val());
		}

		if($('#' +quoteToolForm + 'incomeText').length > 0 ){
			sessionStorage.setItem("income", $('#' +quoteToolForm + 'incomeText').val());
		}

		if($('#' +quoteToolForm + 'dobMonth').length > 0 && $('#' +quoteToolForm + 'dobDay').length > 0  && $('#' +quoteToolForm + 'dobYear').length > 0 ){
			sessionStorage.setItem("dobMonth", $('#' +quoteToolForm + 'dobMonth').val());
			sessionStorage.setItem("dobDay", $('#' +quoteToolForm + 'dobDay').val());
			sessionStorage.setItem("dobYear", $('#' +quoteToolForm + 'dobYear').val());
		}

		for(var i = 1; i <= numInputs; i++){
			if($('#' +quoteToolForm + 'optionalSelect' + i).length > 0){
				sessionStorage.setItem("optionalSelect" + i, $('#' +quoteToolForm + 'optionalSelect' + i).val());
			}

			if($('[name="'+quoteToolForm+'radioGroup'+i+'"]').length > 0){
				sessionStorage.setItem("optionalRadio" + i, $('[name="'+quoteToolForm+'radioGroup'+ i +'"]').val());
			}
		}
	},
	preFillQuoteForm: function(){
		var thisForm = $("[data-quoteTool='"+ quoteToolForm +"']");
		var numInputs = thisForm.find(".form-focus").length;

		if($('#' +quoteToolForm + 'userAge').length > 0){
			$('#' +quoteToolForm + 'userAge').val(sessionStorage.getItem('age'));
		}

		if($('#' +quoteToolForm + 'coverageType').length > 0){
			$('#' +quoteToolForm + 'coverageType').val(sessionStorage.getItem('coverageType'));
		}

		if($('#' +quoteToolForm + 'coverageText').length > 0 ){
			var cov = parseInt(sessionStorage.getItem('coverage').replace(/\,/g,''));
			$('#' +quoteToolForm + 'coverageText').val(cov);
		}


		if($('#' +quoteToolForm + 'state').length > 0){
			$('#' +quoteToolForm + 'state').val(sessionStorage.getItem('state'));
			var state = $('#' +quoteToolForm + 'state').val();
		}

		if($('#' +quoteToolForm + 'gender').length > 0){
			$('#' +quoteToolForm + 'gender').val(sessionStorage.getItem('gender'));
		}

		if($('#' +quoteToolForm + 'coverageAmount').length > 0){
			var cov = parseInt(sessionStorage.getItem('coverage').replace(/\,/g,''));
			$('#' +quoteToolForm + 'coverageAmount').val(cov);
		}

		if($('#' +quoteToolForm + 'termLengthSelect').length > 0){
			$('#' +quoteToolForm + 'termLengthSelect').val(sessionStorage.getItem('term'));
		}

		if($('#' +quoteToolForm + 'termLengthText').length > 0 ){
			$('#' +quoteToolForm + 'termLengthText').val(sessionStorage.getItem('term'));
		}

		if($('#' +quoteToolForm + 'incomeSelect').length > 0){
			$('#' +quoteToolForm + 'incomeSelect').val(sessionStorage.getItem('income'))
		}

		if($('#' +quoteToolForm + 'incomeText').length > 0 ){
			$('#' +quoteToolForm + 'incomeText').val(sessionStorage.getItem('income'))

		}

		if($('#' +quoteToolForm + 'dobMonth').length > 0 && $('#' +quoteToolForm + 'dobDay').length > 0  && $('#' +quoteToolForm + 'dobYear').length > 0 ){
			$('#' +quoteToolForm + 'dobMonth').val(sessionStorage.getItem('dobMonth'));
			$('#' +quoteToolForm + 'dobDay').val(sessionStorage.getItem('dobDay'));
			$('#' +quoteToolForm + 'dobYear').val(sessionStorage.getItem('dobYear'));
		}

		for(var i = 1; i <= numInputs; i++){
			if($('#' +quoteToolForm + 'optionalSelect' + i).length > 0){
				$('#' +quoteToolForm + 'optionalSelect' + i).val(sessionStorage.getItem('optionalSelect' + i));
			}

			if($('[name="'+quoteToolForm+'radioGroup'+i+'"]').length > 0){
				$('[name="'+quoteToolForm+'radioGroup'+ i +'"]').val(sessionStorage.getItem('optionalRadio' + i)).attr("checked", true);
			}
		}
	},
	loopThroughQuoteInputs: function(){
		var thisForm = $("[data-quoteTool='"+ quoteToolForm +"']");
		var numInputs = thisForm.find(".form-focus").length;

		if($('#' +quoteToolForm + 'userAge').length > 0){
			var age = $('#' +quoteToolForm + 'userAge').val();
			if($('#' +quoteToolForm + 'userAge')[0].selectedIndex === 0){
				$('#' +quoteToolForm + 'userAge').addClass("error").next().show().css("display" , "block");
			}else{
				//quoteUrl += ',"age":"' + age +'"';
				quoteRequest["age"] = age;
				$('#' +quoteToolForm + 'userAge').removeClass("error").next().hide();
			}
		}

		if($('#' +quoteToolForm + 'coverageType').length > 0){
			var coverageType = $('#' +quoteToolForm + 'coverageType').val();
			if($('#' +quoteToolForm + 'coverageType')[0].selectedIndex === 0){
				$('#' +quoteToolForm + 'coverageType').addClass("error").next().show().css("display" , "block");
			}else{
				//quoteUrl += ',"coverageType":"' + coverageType +'"';
				quoteRequest["coverageType"] = coverageType;
				$('#' +quoteToolForm + 'coverageType').removeClass("error").next().hide();
			}
		}

		if($('#' +quoteToolForm + 'coverageText').length > 0 ){
			var coverageText = $('#' +quoteToolForm + 'coverageText').val();
			if(isWhole(coverageText)=== true){
				//quoteUrl += ',"coverage":"' + coverageText +'"';
				quoteRequest["coverage"] = coverageText;
				$('#' +quoteToolForm + 'coverageText').removeClass("error").next().hide();
			}else{
				$('#' +quoteToolForm + 'coverageText').addClass("error").next().show().css("display" , "block");
			}
		}

		if($('#' +quoteToolForm + 'state').length > 0){
			var state = $('#' +quoteToolForm + 'state').val();
			if($('#' +quoteToolForm + 'state')[0].selectedIndex === 0){
				$('#' +quoteToolForm + 'state').addClass("error").parent().find(".errorSpan").show().css("display" , "block");
			}else{
				//quoteUrl += ',"state":"' + state +'"';
				quoteRequest["state"] = state;
				$('#' +quoteToolForm + 'state').removeClass("error").parent().find(".errorSpan").hide();
			}
		}

		if($('#' +quoteToolForm + 'gender').length > 0){
			var gender = $('#' +quoteToolForm + 'gender').val();
			if($('#' +quoteToolForm + 'gender')[0].selectedIndex === 0){
				$('#' +quoteToolForm + 'gender').addClass("error").next().show().css("display" , "block");
			}else{
				//quoteUrl += ',"gender":"' + gender +'"';
				quoteRequest["gender"] = gender;
				$('#' +quoteToolForm + 'gender').removeClass("error").next().hide();
			}
		}

		if($('#' +quoteToolForm + 'coverageAmount').length > 0){
			var coverageAmount = $('#' +quoteToolForm + 'coverageAmount').val();
			if($('#' +quoteToolForm + 'coverageAmount')[0].selectedIndex === 0){
				$('#' +quoteToolForm + 'coverageAmount').addClass("error").next().show().css("display" , "block");
			}else{
				//quoteUrl += ',"coverage":"' + coverageAmount +'"';
				quoteRequest["coverage"] = coverageAmount;
				$('#' +quoteToolForm + 'coverageAmount').removeClass("error").next().hide();
			}
		}

		if($('#' +quoteToolForm + 'termLengthSelect').length > 0){
			var termLengthSelect = $('#' +quoteToolForm + 'termLengthSelect').val();
			if($('#' +quoteToolForm + 'termLengthSelect')[0].selectedIndex === 0){
				$('#' +quoteToolForm + 'termLengthSelect').addClass("error").next().show().css("display" , "block");
			}else{
				//quoteUrl += ',"term":"' + termLengthSelect +'"';
				quoteRequest["term"] = termLengthSelect;
				$('#' +quoteToolForm + 'termLengthSelect').removeClass("error").next().hide();
			}
		}

		if($('#' +quoteToolForm + 'termLengthText').length > 0 ){
			var termLengthText = $('#' +quoteToolForm + 'termLengthText').val();
			if(isNonblank(termLengthText)=== true){
				$('#' +quoteToolForm + 'termLengthText').removeClass("error").next().hide();
				//quoteUrl += ',"term":"' + termLengthText +'"';
				quoteRequest["term"] = termLengthText;
			}else{
				$('#' +quoteToolForm + 'termLengthText').addClass("error").next().show().css("display" , "block");

			}
		}

		if($('#' +quoteToolForm + 'incomeSelect').length > 0){
			var income = $('#' +quoteToolForm + 'incomeSelect').val();
			if($('#' +quoteToolForm + 'incomeSelect')[0].selectedIndex === 0){
				$('#' +quoteToolForm + 'incomeSelect').addClass("error").next().show().css("display" , "block");
			}else{
				//quoteUrl += ',"income":"' + income +'"';
				quoteRequest["income"] = income;
				$('#' +quoteToolForm + 'incomeSelect').removeClass("error").next().hide();
			}
		}

		if($('#' +quoteToolForm + 'incomeText').length > 0 ){
			var incomeText = $('#' +quoteToolForm + 'incomeText').val();
			if(isNonblank(incomeText)=== true){
				$('#' +quoteToolForm + 'incomeText').removeClass("error").next().hide();
				//quoteUrl += ',"income":"' + incomeText +'"';
				quoteRequest["income"] = incomeText;
			}else{
				$('#' +quoteToolForm + 'incomeText').addClass("error").next().show().css("display" , "block");

			}
		}

		if($('#' +quoteToolForm + 'dobMonth').length > 0 && $('#' +quoteToolForm + 'dobDay').length > 0  && $('#' +quoteToolForm + 'dobYear').length > 0 ){
			var age;
			if($('#' +quoteToolForm + 'dobMonth')[0].selectedIndex === 0){
				$('#' +quoteToolForm + 'dobMonth').addClass("error");
			}else{
				$('#' +quoteToolForm + 'dobMonth').removeClass("error");
			}

			if($('#' +quoteToolForm + 'dobDay')[0].selectedIndex === 0){
				$('#' +quoteToolForm + 'dobDay').addClass("error");
			}
			else{
				$('#' +quoteToolForm + 'dobDay').removeClass("error");
			}

			if($('#' +quoteToolForm + 'dobYear')[0].selectedIndex === 0){
				$('#' +quoteToolForm + 'dobYear').addClass("error");
			}
			else{
				$('#' +quoteToolForm + 'dobYear').removeClass("error");
			}

			if($('#' +quoteToolForm + 'dobMonth')[0].selectedIndex !== 0 && $('#' +quoteToolForm + 'dobDay')[0].selectedIndex !== 0 && $('#' +quoteToolForm + 'dobYear')[0].selectedIndex !== 0){
				age = ServicesAPI.calculateAge();
				//quoteUrl += ',"age":"' + age +'"';
				quoteRequest["age"] = age;
			}
		}
		for(var i = 1; i <= numInputs; i++){
			if($('#' +quoteToolForm + 'optionalSelect' + i).length > 0){
				var optionalSelect = $('#' +quoteToolForm + 'optionalSelect' + i).val();
				if($('#' +quoteToolForm + 'optionalSelect' + i)[0].selectedIndex === 0){
					$('#' +quoteToolForm + 'optionalSelect' + i).addClass("error").next().show().css("display" , "block");
				}else{
					//quoteUrl += ',"optionalSelect'+i+'":"' + optionalSelect +'"';
					var optionalSelectText = 'optionalSelect'+i;
					quoteRequest[optionalSelectText] = optionalSelect;
					$('#' +quoteToolForm + 'optionalSelect' + i).removeClass("error").next().hide();
				}
			}

			if($('[name="'+quoteToolForm+'radioGroup'+i+'"]').length > 0){
				var optionalRadio = $('[name="'+quoteToolForm+'radioGroup'+i+'"]:checked').val();
				if(optionalRadio === "" || optionalRadio === " " || optionalRadio === null || optionalRadio === undefined){
					$('[name="'+quoteToolForm+'radioGroup'+i+'"]').parent().parent().find(".errorSpan").show().css("display" , "block");
				}else{
					$('[name="'+quoteToolForm+'radioGroup'+i+'"]').parent().parent().find(".errorSpan").hide();
					//quoteUrl += ',"optionalRadio'+i+'":"' + optionalRadio +'"';
					var optionalSelectText = 'optionalRadio'+i;
					quoteRequest[optionalSelectText] = optionalRadio;
				}
			}
		}
	},
	searchServiceCall: function(input){
		count = 0;
		var url = input;
		var querySearch = ServicesAPI.getQueryStringNew()["query"];
		if(querySearch !== null && querySearch !== undefined && querySearch !== "" && querySearch !== " "){
			url += "?query=" + querySearch;
		}
		$(".results_content").remove();
		resultsListHTML = "";
		/************LOCAL Site Search SERVICE***************/

		/*var siteSearchResults = $.getJSON("search.json", function(json) {
		 siteSearchResults = json.response.docs;
		 if (siteSearchResults.length != 0) {
		 $('.form-item__display').removeClass('hidden');
		 // $(".page-count").removeClass('hidden');
		 $(".no-results").addClass('hidden');
		 //results_content is the default component for listing out general results
		 resultsListHTML += "<div class=\"results_content\">";
		 for (var i = 0; i < siteSearchResults.length; i++) {
		 count++;
		 resultsListHTML += "<div class=\"list__item--no-border\">";
		 resultsListHTML += "<a class=\"list__item__anchor inline-block\" href=\"" + siteSearchResults[i].url + "\">" + siteSearchResults[i].title + "</a>";
		 resultsListHTML += "<p>" + siteSearchResults[i].content + "</p>";
		 resultsListHTML += "</div>";
		 }
		 resultsListHTML += "</div>";
		 } else {
		 $('.form-item__display').removeClass('hidden');
		 $(".page-count").addClass('hidden');
		 $(".no-results").removeClass('hidden');
		 }
		 $(resultsListHTML).insertAfter($(".search-results-container__correction-text"));
		 ServicesAPI.createPagination(count);
		 });*/
		/************LOCAL Site Search SERVICE***************/


		/************LIVE Site Search SERVICE***************/
		$.ajax({
			url: url,
			contentType: "application/json; charset=utf-8",
			async: true,
			dataType:'json',
			type: 'GET',
			success: function(data) {
				var siteSearchResults = json.response.docs;
				if (siteSearchResults.length != 0) {
					$('.form-item__display').removeClass('hidden');
					// $(".page-count").removeClass('hidden');
					$(".no-results").addClass('hidden');
					//results_content is the default component for listing out general results
					resultsListHTML += "<div class=\"results_content\">";
					for (var i = 0; i < siteSearchResults.length; i++) {
						count++;
						resultsListHTML += "<div class=\"list__item--no-border\">";
						resultsListHTML += "<a class=\"list__item__anchor inline-block\" href=\"" + siteSearchResults[i].url + "\">" + siteSearchResults[i].title + "</a>";
						resultsListHTML += "<p>" + siteSearchResults[i].content + "</p>";
						resultsListHTML += "</div>";
					}
					resultsListHTML += "</div>";
				} else {
					$('.form-item__display').removeClass('hidden');
					$(".page-count").addClass('hidden');
					$(".no-results").removeClass('hidden');
				}
				$(resultsListHTML).insertAfter($(".search-results-container__correction-text"));
				ServicesAPI.createPagination(count);
			},
			error: function(e) {
				ServicesAPI.showSorryUnableToLocateMessage();
			},
			timeout:30000
		});
		/************LIVE SERVICE***************/
	},
	legacySearch: function(serchQuery){
		var str = "https://www.metlife.com/searchresults?query=";
		var val2 = "&spell_check=true&and_on=Y&sel_path=metlife%2Findividual%2Findex.html&remoteUser=";
		str += serchQuery+val2;
		window.location.href = str;
	},
	redirectToSearchResultsPage: function(input){
		var searchTerm = sessionStorage.setItem("searchTerm" ,$(input).val());
		var url = $("#metSearchForm").attr("data-path-to-search-results");
		window.location.href = url;
	},
	searchResultsPageLoad: function(){
		var cov = sessionStorage.getItem("searchTerm");
		if(sessionStorage.getItem("searchTerm") !== null){
			if($(".js-searchTextBox").css("display") !== " none"){

				$(".js-searchTextBox").val(sessionStorage.getItem("searchTerm"));
				$(".js-searchSubmit").click();
			}
		}

	},
	newsRoomServiceConstruction : function(){
		var url = $(".lists").attr("data-news-url");
		var query  = $(".lists").attr("data-news-query-parameter");
		newsMonth = $("#list_month").val();
		newsYear = $("#list_year").val();
		newsTopic = $('#list_topics').val();
		newsConcatenator = $(".lists").attr("data-news-concatenator");
		url += newsYear + newsConcatenator + newsMonth + newsConcatenator + newsTopic + query;
		ServicesAPI.newsRoomServiceCall(url);
	},
	pressBackQuery : function() {
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
	newsRoomServiceCall: function(input){
		resultsListHTML = "";
		var url = input;
		count = 0;
		$(".results_content").remove();

		/************LIVE News Room SERVICE***************/
		$.ajax({
			url: url,
			contentType: "application/json; charset=utf-8",
			async: true,
			dataType:'json',
			type: 'GET',
			success: function(data) {
				if(firstTimeRunNewsRoom === true){
					firstTimeRunNewsRoom = false;
				}else{
					listCount +=6;
				}
				newsRoomResults = data.news;
				if (newsRoomResults.length != 0) {
					if (!$(".list__item--no-results").hasClass("hidden")) {
						$(".list__item--no-results").addClass("hidden");
					}
					resultsListHTML += "<div class='results_content'>";
					for (var i = 0; i < newsRoomResults.length; i++) {
						count++;
						if(count <= listCount) {
							resultsListHTML += "<div class=\"list__item\">";
							resultsListHTML += "<span class=\"list__item__date\">" + newsRoomResults[i].publishedDate + "</span>";
							resultsListHTML += "<a class=\"list__item__title\" href=\"" + newsRoomResults[i].link + "\">" + newsRoomResults[i].title + "</a>";
							resultsListHTML += "</div>";
						}
					}
					resultsListHTML += "</div>";
					ServicesAPI.createPagination(count);
					$(resultsListHTML).insertAfter($(".lists"));
				} else {
					$(".list__item--no-results").removeClass('hidden');
				}
				if(listCount >= newsRoomResults.length){
					$(".divider--load-more__link").hide();
				}else{
					$(".divider--load-more__link").show();
				}
			},
			error: function(e) {
				console.log('error ',e);
			},
			timeout:30000
		});
		/************LIVE News Room SERVICE***************/

		/************LOCAL News Room SERVICE***************/

		/*var newsRoomResults = $.getJSON("news.json", function(data) {
		 if(firstTimeRunNewsRoom === true){
		 firstTimeRunNewsRoom = false;
		 }else{
		 listCount +=6;
		 }
		 newsRoomResults = data.news;
		 if (newsRoomResults.length != 0) {
		 if (!$(".list__item--no-results").hasClass("hidden")) {
		 $(".list__item--no-results").addClass("hidden");
		 }
		 resultsListHTML += "<div class='results_content'>";
		 for (var i = 0; i < newsRoomResults.length; i++) {
		 count++;
		 if(count <= listCount) {
		 resultsListHTML += "<div class=\"list__item\">";
		 resultsListHTML += "<span class=\"list__item__date\">" + newsRoomResults[i].publishedDate + "</span>";
		 resultsListHTML += "<a class=\"list__item__title\" href=\"" + newsRoomResults[i].link + "\">" + newsRoomResults[i].title + "</a>";
		 resultsListHTML += "</div>";
		 }
		 }
		 resultsListHTML += "</div>";
		 ServicesAPI.createPagination(count);
		 $(resultsListHTML).insertAfter($(".lists"));
		 } else {
		 $(".list__item--no-results").removeClass('hidden');
		 }
		 if(listCount >= newsRoomResults.length){
		 $(".divider--load-more__link").hide();
		 }else{
		 $(".divider--load-more__link").show();
		 }
		 });*/
		/************LOCAL News Room SERVICE***************/
	},
	blogsServiceCall: function(input, searchType) {
		resultsListHTML = "";
		$(".results_content").remove();
		count = 0;
		var url = input + "?" + searchType;
		/*********LOCAL Blog SERVICE***************/
		/*var blogSearchResults = $.getJSON("blog.json", function(data) {
		 blogSearchResults = data.response.blogs;
		 resultsListHTML += "<div class=\"results_content\">";
		 if (blogSearchResults.length != 0) {
		 for (var i = 0; i < blogSearchResults.length; i++) {
		 count++
		 resultsListHTML += "<div class=\"blog-list__article \">";
		 resultsListHTML += "<div class=\"blog-list__img \">";
		 resultsListHTML += "<img src=\"" + blogSearchResults[i].imgsource +"\" alt=\"" + blogSearchResults[i].alttext +"\" class=\"enlarge\">";
		 resultsListHTML += "</div>";
		 resultsListHTML += "<div class=\"blog-list__text\">";
		 resultsListHTML += "<h5>" + blogSearchResults[i].title +"</h5>";
		 resultsListHTML += "<span class=\"blog-list__date blog-list__category\">" + blogSearchResults[i].date +"</span>";
		 resultsListHTML += "<span class=\"blog-list__category\">" + blogSearchResults[i].tags +"</span>";
		 resultsListHTML+= "<span class=\"blog-list__description\">" + blogSearchResults[i].description + " ";
		 if(blogSearchResults[i].link != null && blogSearchResults[i].link != undefined && blogSearchResults[i].link !== "" && blogSearchResults[i].link !== " "){
		 resultsListHTML += "<a href=\"" + blogSearchResults[i].link +"\">" + blogSearchResults[i].linktext +"</a>"
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
		 });*/

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
						resultsListHTML += "<img src=\"" + blogSearchResults[i].imgsource +"\" alt=\"" + blogSearchResults[i].alttext +"\" class=\"enlarge\">";
						resultsListHTML += "</div>";
						resultsListHTML += "<div class=\"blog-list__text\">";
						resultsListHTML += "<h5>" + blogSearchResults[i].title +"</h5>";
						resultsListHTML += "<span class=\"blog-list__date blog-list__category\">" + blogSearchResults[i].date +"</span>";
						resultsListHTML += "<span class=\"blog-list__category\">" + blogSearchResults[i].tags +"</span>";
						resultsListHTML+= "<span class=\"blog-list__description\">" + blogSearchResults[i].description + " ";
						if(blogSearchResults[i].link != null && blogSearchResults[i].link != undefined && blogSearchResults[i].link !== "" && blogSearchResults[i].link !== " "){
							resultsListHTML += "<a href=\"" + blogSearchResults[i].link +"\">" + blogSearchResults[i].linktext +"</a>"
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
	formsLibraryServiceCall: function(input){
		resultsListHTML = "";
		$(".results_content").remove();
		count = 0;
		var url = input;
		/*********LOCAL Forms SERVICE***************/
		/*var formsSearchResults = $.getJSON("forms.json", function(data) {
		 formsSearchResults = data.response.docs;
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
		 resultsListHTML += "<p>"+ formsSearchResults[i].file_description +"</p>";
		 resultsListHTML += "</div>";
		 }
		 if (formsSearchResults[i].file_type != null && formsSearchResults[i].file_type != undefined && formsSearchResults[i].file_type !== "" && formsSearchResults[i].file_type !== " ") {
		 resultsListHTML += "<div class=\"list__item--right\">";
		 resultsListHTML += "<a href=\"" + formsSearchResults[i].eform_url + "\">";
		 if (formsSearchResults[i].file_type.toLowerCase() == "doc" || formsSearchResults[i].file_type.toLowerCase() == "docx") {
		 resultsListHTML += "<img src=\"images/icon_word.png\" alt=\"Document icon\" class=\"document-icon\">";
		 } else if (formsSearchResults[i].file_type.toLowerCase() == "ppt" || formsSearchResults[i].file_type.toLowerCase() == "pptx") {
		 resultsListHTML += "<img src=\"images/icon_powerpoint.png\" alt=\"powerpoint icon\" class=\"document-icon\">";
		 } else if (formsSearchResults[i].file_type.toLowerCase() == "xls" || formsSearchResults[i].file_type.toLowerCase() == "xlsx") {
		 resultsListHTML += "<img src=\"images/icon_excel.png\" alt=\"Excel icon\" class=\"document-icon\">";
		 } else if (formsSearchResults[i].file_type.toLowerCase() == "pdf") {
		 resultsListHTML += "<img src=\"images/icon_pdf.png\" alt=\"PDF icon\" class=\"document-icon\">";
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
		 resultsListHTML += "<a href=\"" + formsSearchResults[i].file_url + "\" class=\"list__item__title text-bold\">" + formsSearchResults[i].file_title +"</a>";
		 resultsListHTML += "<p>"+ formsSearchResults[i].file_description +"</p>";
		 resultsListHTML += "</div>";
		 }
		 if (formsSearchResults[i].file_type != null && formsSearchResults[i].file_type != undefined && formsSearchResults[i].file_type !== "" && formsSearchResults[i].file_type !== " " && formsSearchResults[i].file_size != null && formsSearchResults[i].file_size != undefined && formsSearchResults[i].file_size != "" && formsSearchResults[i].file_size != " ") {
		 resultsListHTML += "<div class=\"list__item--right\">";
		 resultsListHTML += "<a href=\"" + formsSearchResults[i].file_url + "\">";
		 if (formsSearchResults[i].file_type.toLowerCase() == "doc" || formsSearchResults[i].file_type.toLowerCase() == "docx") {
		 resultsListHTML += "<img src=\"images/icon_word.png\" alt=\"Document icon\" class=\"document-icon\">";
		 } else if (formsSearchResults[i].file_type.toLowerCase() == "ppt" || formsSearchResults[i].file_type.toLowerCase() == "pptx") {
		 resultsListHTML += "<img src=\"images/icon_powerpoint.png\" alt=\"powerpoint icon\" class=\"document-icon\">";
		 } else if (formsSearchResults[i].file_type.toLowerCase() == "xls" || formsSearchResults[i].file_type.toLowerCase() == "xlsx") {
		 resultsListHTML += "<img src=\"images/icon_excel.png\" alt=\"Excel icon\" class=\"document-icon\">";
		 } else if (formsSearchResults[i].file_type.toLowerCase() == "pdf") {
		 resultsListHTML += "<img src=\"images/icon_pdf.png\" alt=\"PDF icon\" class=\"document-icon\">";
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
		 });*/

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
								resultsListHTML += "<p>"+ formsSearchResults[i].file_description +"</p>";
								resultsListHTML += "</div>";
							}
							if (formsSearchResults[i].file_type != null && formsSearchResults[i].file_type != undefined && formsSearchResults[i].file_type !== "" && formsSearchResults[i].file_type !== " ") {
								resultsListHTML += "<div class=\"list__item--right\">";
								resultsListHTML += "<a href=\"" + formsSearchResults[i].eform_url + "\">";
								if (formsSearchResults[i].file_type.toLowerCase() == "doc" || formsSearchResults[i].file_type.toLowerCase() == "docx") {
									resultsListHTML += "<img src=\"images/icon_word.png\" alt=\"Document icon\" class=\"document-icon\">";
								} else if (formsSearchResults[i].file_type.toLowerCase() == "ppt" || formsSearchResults[i].file_type.toLowerCase() == "pptx") {
									resultsListHTML += "<img src=\"images/icon_powerpoint.png\" alt=\"powerpoint icon\" class=\"document-icon\">";
								} else if (formsSearchResults[i].file_type.toLowerCase() == "xls" || formsSearchResults[i].file_type.toLowerCase() == "xlsx") {
									resultsListHTML += "<img src=\"images/icon_excel.png\" alt=\"Excel icon\" class=\"document-icon\">";
								} else if (formsSearchResults[i].file_type.toLowerCase() == "pdf") {
									resultsListHTML += "<img src=\"images/icon_pdf.png\" alt=\"PDF icon\" class=\"document-icon\">";
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
								resultsListHTML += "<a href=\"" + formsSearchResults[i].file_url + "\" class=\"list__item__title text-bold\">" + formsSearchResults[i].file_title +"</a>";
								resultsListHTML += "<p>"+ formsSearchResults[i].file_description +"</p>";
								resultsListHTML += "</div>";
							}
							if (formsSearchResults[i].file_type != null && formsSearchResults[i].file_type != undefined && formsSearchResults[i].file_type !== "" && formsSearchResults[i].file_type !== " " && formsSearchResults[i].file_size != null && formsSearchResults[i].file_size != undefined && formsSearchResults[i].file_size != "" && formsSearchResults[i].file_size != " ") {
								resultsListHTML += "<div class=\"list__item--right\">";
								resultsListHTML += "<a href=\"" + formsSearchResults[i].file_url + "\">";
								if (formsSearchResults[i].file_type.toLowerCase() == "doc" || formsSearchResults[i].file_type.toLowerCase() == "docx") {
									resultsListHTML += "<img src=\"images/icon_word.png\" alt=\"Document icon\" class=\"document-icon\">";
								} else if (formsSearchResults[i].file_type.toLowerCase() == "ppt" || formsSearchResults[i].file_type.toLowerCase() == "pptx") {
									resultsListHTML += "<img src=\"images/icon_powerpoint.png\" alt=\"powerpoint icon\" class=\"document-icon\">";
								} else if (formsSearchResults[i].file_type.toLowerCase() == "xls" || formsSearchResults[i].file_type.toLowerCase() == "xlsx") {
									resultsListHTML += "<img src=\"images/icon_excel.png\" alt=\"Excel icon\" class=\"document-icon\">";
								} else if (formsSearchResults[i].file_type.toLowerCase() == "pdf") {
									resultsListHTML += "<img src=\"images/icon_pdf.png\" alt=\"PDF icon\" class=\"document-icon\">";
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
	clearOverlays: function() {
		for (var i = 0; i < markersArray.length; i++ ) {
			markersArray[i].setMap(null);
		}
		for (var i = 0; i < dir_markerArray.length; i++ ) {
			dir_markerArray[i].setMap(null);
		}
	},
	initializeFindAnOffice : function() {
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
			scaleControl:false,
			scrollwheel:true,
			zoom:10
		};

		map = new google.maps.Map(document.getElementById("googleMapsContainer"), myOptions);
		ServicesAPI.autocompleteOn();
	},
	autocompleteOn: function() {
		googleautocomplete = new google.maps.places.Autocomplete(document.getElementsByClassName("cta_search")[0]);
		googleautocomplete.bindTo('bounds', map);
		google.maps.event.addListener(googleautocomplete, 'place_changed', function () {
			var place = googleautocomplete.getPlace();
			if (!place || !place.geometry) {

			}
		});
	},
	initializeGoogleMapObject : function() {
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
			scaleControl:false,
			scrollwheel:true,
			zoom:10
		};

		map = new google.maps.Map(document.getElementById("googleMapsContainer"), myOptions);
	},
	initializeDrivingGoogleMapObject : function() {
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
			scaleControl:false,
			scrollwheel:true,
			zoom:10
		};

		map = new google.maps.Map(document.getElementById("googleDrivingMapsContainer"), myOptions);
		googleautocomplete = new google.maps.places.Autocomplete(document.getElementsByClassName('from-address')[0]);
		googleautocomplete.bindTo('bounds', map);
		google.maps.event.addListener(googleautocomplete, 'place_changed', function () {
			var place = googleautocomplete.getPlace();
			if (!place || !place.geometry) {

			}
		});
	},
	gmapsAutoCompleteInit : function() {
		$('.find-office__zip-city-state, .cta_search').each(function () {
			new google.maps.places.Autocomplete($(this)[0]);
		});
	},
	showLocation : function() {
		$('.fax-results__container, .maps-button, .get-directions-form, .find-an-x-search__container, .cta_search__container').removeClass('hidden');
		$('.driving-direction-container, #googleDrivingMapsContainer').addClass('hidden');
		if(dir_to_flag ==true){
			$('.get-directions-form .from-address').val('');
		}
		var endsWith = function(str, suffix) {
			return str.indexOf(suffix, str.length - suffix.length) !== -1;
		};
		var startsWith = function(string, searchString, position){
			position = position || 0;
			return string.substr(position, searchString.length) === searchString;

		};
		$('.errorSpan.error_zip_code').html($('.errorMsgtext_no_office_found').text());
		ServicesAPI.initializeGoogleMapObject();
		var address;
		var zip = sessionStorage.getItem("faoZipCode");
		if (document.referrer == "" ||  endsWith(document.referrer, "/cf") || startsWith(document.referrer, document.origin+document.location.pathname)) {
			address = $('.find-an-x-search__container .cta_search').val();
		}else{
			$('.find-an-x-search__container .cta_search').val(zip);
			$('.find-an-x-search__container .cta_search').text(zip);
			address = $('.find-an-x-search__container .cta_search').val();
		}
		var validateAddress = address.trim();
		var isNumber =  /^\d+$/.test(validateAddress);
		if((!isNumber) || (isNumber && (address.length===5))){
			$('.errorSpan.error_zip_code').addClass('hidden');
			if(address!=null && address!='' && address!=undefined && address!=' '){
				geocoder.geocode({"address":address},function(response, status) {
					if (status == google.maps.GeocoderStatus.OK) {
						ServicesAPI.addAddressToMap(response, status);
					}else{
						ServicesAPI.resetMap();
						ServicesAPI.showSorryUnableToLocateMessage();
					}
				});
			}else{
				ServicesAPI.resetMap();
			}
		}else{
			$('.errorSpan.error_zip_code').removeClass('hidden');
			if ($(".hidden-xs").is(":visible") == true) {

				$(".mobile_expand_close").click();
				$(".error_zip_code").insertAfter(".mobile_expand");
			}
			if (($(".hidden-xs").is(":visible") == false) && ($(".mobile_expand").is(":visible"))) {
				$(".error_zip_code").insertAfter(".mobile_expand_open");
			}
		}
	},
	addAddressToMap: function(response,status) {
		ServicesAPI.clearOverlays();
		if (!response || status!= google.maps.GeocoderStatus.OK) {
			ServicesAPI.showSorryUnableToLocateMessage();
		}else {
			var point = new google.maps.LatLng(response[0].geometry.location.lat(),response[0].geometry.location.lng());
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
	resetMap : function() {
		// Clear any existing overlays
		ServicesAPI.clearOverlays();
		directionsDisplay.setMap(null);
		// Pan the map back to the original start location
		// *** Must center map, before adding overlay

		map.setCenter(startPointGeoCode, 9);

	},
	getMetOffices : function() {

		var latitude = startPointGeoCode.lat();
		var longitude = startPointGeoCode.lng();
		var baseServiceUrl = $("[data-fao-url]").attr("data-fao-url");
		var faoMarket = '';
		var directionButton = $('.directions_button').attr("data-fao-market");
		var officeSubmitButton = $(".find-office__submit").attr("data-fao-market");
		if(directionButton !== undefined && directionButton !== "" && directionButton !== " " ){
			faoMarket = directionButton;
		}
		if(officeSubmitButton !== undefined && officeSubmitButton !== "" && officeSubmitButton !== " "){
			faoMarket = officeSubmitButton;
		}
		radiusInMiles = $('.find_an_office_radius').val();
		if(faoMarket.toLowerCase() == "us"){
			specialty = 'AUTO%2C+HOME%2C+RENTERS%2C+ETC...';
			var serviceUrl = ServicesAPI.buildServiceUrlUS(baseServiceUrl, latitude, longitude, radiusInMiles, specialty);
		}else{
			specialty = $('.different_services_dropdown').val();
			var serviceUrl = ServicesAPI.buildServiceUrl(baseServiceUrl, latitude, longitude, radiusInMiles, specialty);
		}
		/************LIVE FAO SERVICE***************/
		$.ajax({
			type: 'GET',
			url: serviceUrl,
			success: function(data) {
				ServicesAPI.generateOfficeItems(data)
			},
			error: function() {
				ServicesAPI.handleServiceError()
			}
		});
		/************LIVE FAO SERVICE***************/

		/************LOCAL FAO SERVICE***************/
		/*	var faoSearchResults = $.getJSON("fao.json", function(data) {
		 ServicesAPI.generateOfficeItems(data);
		 ServicesAPI.createPagination(count);
		 });*/
		/************LOCAL FAO SERVICE***************/

	},
	generateOfficeItems : function(responseObject) {
		count=0;
		var resultsListHTML="";
		markersArray = [];
		$('.results_error_info,.results_pagination').addClass('hidden');
		if ( responseObject.facilities.length != 0 ) {
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
				var temp = strDestination.slice(-2);;
				if (temp == ", ") {
					strDestination = strDestination.substring(0, strDestination.length - 2);
				}
				var strDestination = fclt_addr + ", " + fclt_city + ", " + fclt_state + ", " + fclt_zip;
				resultsListHTML += "<div class=\"results_office_result\"><p class=\"results_office_count\">" + (i + 1) + "</p>";
				resultsListHTML += "<p class=\"results_office_name\">" + fclt_officeName + "</p>";
				resultsListHTML += "<div class=\"results_office_mileage\"><p class=\"results_office_distance\">" + (Math.round(fclt_distance * 100) / 100).toFixed(2) + "</p>";
				resultsListHTML += "<p class=\"results_office_mi\">" + "&nbsp;" + label_radius_unit + "</p></div>";
				if (fclt_education){
					resultsListHTML += "<p class=\"results_office_type results_office_type_dentist\">" + fclt_ctgy +"</p>";
					resultsListHTML += "<p class=\"results_office_get_directions results_office_get_directions_dentist\"><a href='#' onclick=\"ServicesAPI.getDirectionsPanel(\'" + strDestination + "\');return false;\">" + $('.getDirectionsText').text() + "</a></p>";
					resultsListHTML += "<p class=\"results_office_street_address dentist_left\">" + fclt_addr.toLowerCase() + "</p>";
					resultsListHTML += "<p class=\"results_office_education dentist_right\">" + label_education + ": " + fclt_education.toLowerCase() + "</p>";
				}else{
					resultsListHTML += "<p class=\"results_office_type\">" + fclt_ctgy +"</p>";
					resultsListHTML += "<p class=\"results_office_get_directions\"><a href='#' onclick=\"ServicesAPI.getDirectionsPanel(\'" + strDestination + "\');return false;\">" + $('.getDirectionsText').text() + "</a></p>";
					resultsListHTML += "<p class=\"results_office_street_address\">" + fclt_addr.toLowerCase() + "</p>";
				}
				if (fclt_languages){
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
				}else{
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
						resultsListHTML += "<p class=\"results_office_phone dentist_left\">" + label_phone + ": " + fclt_phone.replace(/\./g, '-') + "</p>";
					resultsListHTML += "<p class=\"results_office_gender dentist_right\">" + label_gender + ": " + fclt_gender.toLowerCase() + "</p>";
				}else{
					if (fclt_phone)
						resultsListHTML += "<p class=\"results_office_phone\">" + label_phone + ": " + fclt_phone.replace(/\./g, '-') + "</p>";
				}

				if (fclt_alt_phone)
					resultsListHTML += "<p class=\"results_office_phone\">" + label_alt_phone + ": " + fclt_alt_phone.replace(/\./g, '-') + "</p>";
				if (fclt_fax)
					resultsListHTML += "<p class=\"results_office_fax\">" + label_fax + ": " + fclt_fax.replace(/\./g, '-') + "</p>";
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
	handleServiceError : function() {
		$('.results_error_info').removeClass('hidden').html($('.errorMsgText_server_busy').text());
		$('.results_content').html("");
		$('.results_pagination, .find_an_office_pagecount_wrap, .google-maps-container, .maps-button').addClass('hidden');
	},
	createStartPointMarker : function(latlng) {
		// Use the default marker
		var marker = new google.maps.Marker({
			position: latlng
		});
		markersArray.push(marker);
		return marker;
	},
	createOfficeMarker : function(point, html, officeNumber){
		var baseIcon = '';
		var numberedIcon = '';
		var marker = '';
		var numberedIconURL='';
		var marker;
		marker = new MarkerWithLabel({
			position: point,
			labelContent: officeNumber,
			//icon: " ",
			icon: {
				url: blueMarker,
				scaledSize: new google.maps.Size(33,42)// desired size
			},
			labelAnchor: new google.maps.Point(3, 33),
			labelClass: "my_label", // the CSS class for the label
			labelStyle: {opacity: 0.8},
			map: map});
		if ((officeNumber/10)>=1){
			marker.labelAnchor = new google.maps.Point(8, 33)
		}

		google.maps.event.addListener(marker, 'click', (function(marker, i) {

			return function() {
				if (selectedMarker) {
					selectedMarker.setIcon({
						url: blueMarker,
						scaledSize: new google.maps.Size(33,42)
					});
				}
				marker.setIcon({
					url: blackMarker,
					scaledSize: new google.maps.Size(33,42)
				});
				selectedMarker = marker;

				var infowindow = new google.maps.InfoWindow();
				infowindow.setContent(html);
				if ($(".hidden-xs").is(":visible")) {
					infowindow.open(map, marker);
				} else {

				}
				if(presentHighligtedInfo!=null)
				{
					presentHighligtedInfo.open(null, marker);
				}
				presentHighligtedInfo=infowindow;
			}
		})(marker, officeNumber));

		markersArray.push(marker);
		return marker;
	},
	checkEnter : function(e) {
		var key=e.keyCode || e.which;
		var browsername= ServicesAPI.getBrowserName();
		if(key == 13){ //if character code is equal to ascii 13 (if enter key)
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

		}else{
			returnValue = true;
		}
	},
	getBrowserName : function(){
		var browsername=navigator.appName;
		if (browsername.indexOf("Netscape")!=-1) {
			browsername="NS";
		}else if (browsername.indexOf("Microsoft")!=-1) {
			browsername="MSIE";
		}else {
			browsername="N/A";
		}
		return browsername;
	},
	addBreadCrumb: function(){
		var currentPageCrumb = $(".breadcrumb").find("span:last-of-type");
		currentPageCrumb.wrapInner("<a href=\"\"> </a>");
		currentPageCrumb.addClass("breadcrumb__crumb");
		currentPageCrumb.find("a").attr("href", faoURL);
		currentPageCrumb.after("<span class=\"generatedBreadCrumb\">" + $('.getDirectionsText').text() + "</span>");
	},
	removeBreadCrumb: function(){
		$(".breadcrumb").find("span:last-of-type").remove();
		$(".breadcrumb").find("span:last-of-type a").contents().unwrap();
		$(".breadcrumb").find("span:last-of-type").removeClass("breadcrumb__crumb");
	},
	getDirectionsPanel : function(strpDestination) {
		$('.page-title__heading').text($('.getDirectionsText').text());
		if ($(".generatedBreadCrumb").length ==0) {
			ServicesAPI.addBreadCrumb();
		}
		ServicesAPI.clearOverlays();
		$('.fax-results__container, .driving-directions-panel, .find-an-x-search__container,.cta_search__container, .directions_error').addClass('hidden');
		$('.driving-direction-container, .maps-button, #googleDrivingMapsContainer').removeClass('hidden');
		var fromAddr = $('.find-an-x-search__container .cta_search').val();
		ServicesAPI.initializeDrivingGoogleMapObject();

		$('.get-directions-form .from-address').val(fromAddr);
		if (fromAddr == '')
		{
			$('.find-an-x-search__container .cta_search').focus();
			return;
		}
		geocoder.geocode( { 'address': fromAddr}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				var res = ServicesAPI.makeMarker(results[0].geometry.location,'A');
			}
		});


		//clearOverlays();
		var toAddr = strpDestination.split(":");
		$('.get-directions-form .to-address').val(ServicesAPI.formatDestination(toAddr[0]));



		ServicesAPI.resetMap();
		var dest_marker = $('.get-directions-form .to-address').val();
		geocoder.geocode( { 'address': dest_marker}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				var res = ServicesAPI.makeMarker(results[0].geometry.location,'B');

			}
		});
		ServicesAPI.clearOverlays();
	},
	makeMarker : function(point,title){
		marker = new MarkerWithLabel({
			position: point,
			labelContent: title,
			//icon: " ",
			icon: {
				url:blueMarker,
				scaledSize: new google.maps.Size(33,42)// desired size
			},
			labelAnchor: new google.maps.Point(5, 33),
			labelClass: "my_label", // the CSS class for the label
			labelStyle: {opacity: 0.8},
			map: map
		});
		dir_markerArray.push(marker);
	},
	getDirections : function(){
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
		directionsService.route(request, function(response, status) {
			if (status == google.maps.DirectionsStatus.OK) {
				ServicesAPI.clearOverlays();
				$('.get-directions-form,.directions_error').addClass('hidden');
				$('.driving-directions-panel').removeClass('hidden');
				directionsDisplay.setDirections(response);
				var leg = response.routes[ 0 ].legs[ 0 ];
				ServicesAPI.makeMarker( leg.start_location,"A" );
				ServicesAPI.makeMarker( leg.end_location, 'B' );
			}else{
				directionsDisplay.setMap(null);
				$('.driving-directions-panel').addClass('hidden');
				$('.directions_error').removeClass('hidden');
			}
		});

	},
	formatDestination : function(destAddress){
		var regex = new RegExp("[0-9]TH|[0-9]RD|[0-9]ND", "i");
		while(regex.test(destAddress)){
			var matchedString = regex.exec(destAddress).toString();
			destAddress = destAddress.replace(matchedString, matchedString.substring(0,1));
		}

		regex.compile("\\bfl\\b", "i");
		while(regex.test(destAddress)){
			var matchedString = regex.exec(destAddress).toString();
			destAddress = destAddress.replace(matchedString, "FLOOR");
		}
		regex.compile("\\bst\\b","i");
		if(regex.test(destAddress)){
			var matchedString = regex.exec(destAddress).toString();
			destAddress = destAddress.replace(matchedString, "STREET");
		}
		return destAddress;
	},
	handleGetDirectionErrors : function(invDir, from, to_LatLng){
		// Try getting the directions using geocoding
		if(invDir.getStatus().code == G_GEO_UNKNOWN_ADDRESS){
			invDir.clear();
			var resultsOverlay = document.getElementById("officeResultsContent");
			resultsOverlay.innerHTML = '';

			var dir_lat_lng = new GDirections(map, resultsOverlay);

			dir_lat_lng.load(from +" to "+to_LatLng);
			google.maps.Event.addListener(dir_lat_lng, "error", function () { resultsOverlay.innerHTML = $('.get_direction_error').text() });
		}
	},
	getAddress : function() {
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(handle_geolocation_query);
		}
	},
	handle_geolocation_query : function(position){
		var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
		var geocoder = geocoder = new google.maps.Geocoder();
		geocoder.geocode({ 'latLng': latlng }, function (results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				if (results[1]) {
					var arrAddress = results[1].address_components;
					var itemLocality ="";
					$.each(arrAddress, function (i, address_component) {
						if (address_component.types[0] == "locality"){
							itemLocality = address_component.long_name;
						}
						if (address_component.types[0] == "administrative_area_level_1"){
							itemLocality += ', '+address_component.long_name;
						}
						$('.find-an-x-search__container .cta_search').val(itemLocality);
					});
				}
				if (results[0]) {
					dir_to_flag=false;
					$('.get-directions-form .from-address').val(ServicesAPI.formatDestination(results[0].formatted_address));
				}
			}
		});
	},
	buildServiceUrl: function(baseUrl, lat, lng, radius, specialty) {
		var latSelector = '.latitude=' + lat.toString().replace('.',','), //sling selector workaround
			lngSelector = '.longitude=' + lng.toString().replace('.',','),
			radiusSelector = '.radius=' + radius,
			specialtySelector = '.specialty=' + specialty;

		return baseUrl + latSelector + lngSelector + radiusSelector + specialtySelector + ".json";
	},
	buildServiceUrlUS: function(baseUrl, lat, lng, radius, specialty) {
		var latSelector = 'latitude=' + lat.toString(), //sling selector workaround
			lngSelector = '&longitude=' + lng.toString(),
			radiusSelector = '&radius=' + radius,
			specialtySelector = '&specialty=' + specialty;

		return baseUrl + latSelector + lngSelector + radiusSelector + specialtySelector + "&format=json";
	},
	updatePageFrom: function(name){
		var pageFrom = ServicesAPI.getQueryStringNoHash()["pageFrom"];
		if(pageFrom != undefined){
			name.val(pageFrom);
		}
	},
	onFSubmit: function ($this) {
		var fid = $this.attr('data-fsubmit')
		var $formid = $('[data-fid=' + fid + ']');
		var formStatus = true;
		var flag;


		if($("[data-observes-id]").find("input:radio").parent().parent().parent().parent().css("display") != "none") {
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
			if($this.parent().parent().parent().css("display") != "none"){
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
				}else{
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
	formProcessorSubmit : function(formName, formDiv, thankyouDiv, errorDiv, exceptionDiv) {
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
		ServicesAPI.AddInputParameter(formObjectName, "input", "webFormPage_urlPagevalue", urlNode, document);
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
	validateOnType : function (val, $this, re) {
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
	AddInputParameter : function(a, b, c, d, e) {
		var f = e.createElement(b);
		f.setAttribute("type", "hidden");
		f.setAttribute("name", c);
		f.setAttribute("value", d);
		a.appendChild(f);
	},
	getCookie : function(c_name) {
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
	getQueryString : function(a) {
		a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var b = "[\\?&]" + a + "=([^&#]*)";
		var c = new RegExp(b);
		var d = c.exec(window.location.href);
		if (null == d) return "";
		else return d[1];
	},
	getPageFromURLNode : function(a, b) {
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
	addSessionParameters : function(a) {
		var b = sessionVars.getSessionParams();
		for (var c in b)
			if (b.hasOwnProperty(c))
				if ("" !== b[c])
					if (ServicesAPI.checkFormField(a, c)) ServicesAPI.AddInputParameter(a, "input", c, b[c], document);
					else a.elements[c].value = b[c];
	},
	checkFormField : function (a, b) {
		if (void 0 == a.elements[b]) return true;
		else return false;
	},
	postLeadform : function ($formid){
		var formName = $formid.attr('name');
		ServicesAPI.formProcessorSubmit(formName,'a','chn-har-thankyou','chn-har-error','chn-har-exception');
		var requestExist = $('[data-fid="' + formName + '"]').find("[data-request-type]").length;
		$('[data-fid="' + formName + '"]').find('[data-valid-type=phone]').val($('[data-fid="' + formName + '"]').find('[data-valid-type=phone]').val().replace(/[^\w\s]/gi, ''))
		var requestType;
		var ajaxUrl;
		if(requestExist > 0){
			requestType = $('[data-fid="' + formName + '"]').find("[data-request-type]").find(':selected').val();
			ajaxUrl = $('[data-fid="' + formName + '"]').find("[data-request-type]").find(':selected').attr('data-product-url');
			if(requestType == 'New Product/Planning Services'){
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
		}else{
			ajaxUrl = $('[data-fid="' + formName + '"]').attr("[data-product-url]");
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
		if($('[data-fid="' + formName + '"]').find('[data-valid-type=phone]').length > 0) {
			$('[data-fid="' + formName + '"]').find('[data-valid-type=phone]').val($('[data-fid="' + formName + '"]').find('[data-valid-type=phone]').val().replace(/[^\w\s]/gi, ''));
		}



	},
	postLeadformOld : function($formid){

		var formName = $formid.attr('name');
		ServicesAPI.formProcessorSubmit(formName,'a','chn-har-thankyou','chn-har-error','chn-har-exception');
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




	},
	formPass : function (fid) {

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
			ServicesAPI.resetForm(fid);
		}, 5000);
	},
	resetForm : function (fid) {

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
};

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
            console.log(location.offset());
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


function subcategoryProudctTilesHeight() {

	if ($(".hidden-xs").is(":visible")) {
		if ($(".subcat-row").length != 0) {
			$(".subcat-row").each(function () {
				$(".subcategory-image-product-card").each(function () {
					// console.log($(this));
					if ($(this).find(".subcat-image-top").css("float") == "right" && $(this).hasClass("subcategory-promo-skinny-card")){
						var valHeight = $(this).find(".subcat-image-text").outerHeight();
						$(this).find(".subcat-image-top").height(valHeight);
					}
					if ($(this).find(".subcat-image-top").css("float") == "left" && $(this).hasClass("subcategory-promo-skinny-card-left")){
						var valHeight = $(this).find(".subcat-image-text").outerHeight();
						$(this).find(".subcat-image-top").height(valHeight);
					}
				});
				if($('.subcategory-promo-large-card').hasClass('subcategory-promo-large-card-right')) {
					$(".subcategory-promo-large-card-right").find(".subcat-image-top").css('height' , '300');
					$(".subcategory-promo-large-card-right").find(".subcat-image-text").css('height' , '300');
				}
			});
		}
	} else {
		if ($(".subcat-row").length != 0) {
			$(".subcat-row").each(function () {
				$(".subcategory-image-product-card").each(function () {
					if ($(this).find(".subcat-image-top").css("float") == "right") {
						$(this).find(".subcat-image-top").css("height", "auto");
					}
				});
			});
		}
	}


};

function subcategoryProudctTilesLayout(){

	if ($(".subcat-row").length != 0) {
		$(".subcat-row").each(function () {
			var numImageCards = $(this).find(".subcategory-image-product-card").length;
			if (numImageCards > 1) {
				// console.log($(".subcategory-image-product-card").length);
				$(this).find(".subcategory-image-product-card").addClass("single-promo")
				$(this).find(".subcategory-image-product-card").css("height", "272");
			}
			if ($(".subcategory-product-card").length != 0) {
				var numProductCards = $(this).find(".subcategory-product-card").length;
				if( numProductCards == 1){
					if ($(".subcategory-product-card").length != 0){
						$(this).find(".subcategory-image-product-card").addClass("double-promo");
					}

				}else if(numProductCards == 2){
					if ($(".subcategory-product-card").length != 0){
						$(this).find(".subcategory-image-product-card").addClass("single-promo");
					}
				}
			}
		});
	}
};

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

$(function() {
    if ($('.product-card .action .btn-brand-2nd').length != 0) {
        $('.product-card .action .btn-brand-2nd')
            .filter(function () {
                return $(this).text().toLowerCase().length >= 12;
            }).each(function (i) {
                $(this).css("width", "140px");
            });
    }
});


/***** Product Card Module End ************************************************************/
