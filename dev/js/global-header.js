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
    if (getViewport() == "desktop" || getViewport() == "tablet") {
        $('body').css('padding-top','70px');
        //$('.login-container').css('top','70px');
    } else {
        $('body').css('padding-top','50px');
        //$('.login-container').css('top','50px');
    }
    /*if ($('.campaign-header').length > 0){
        $('body').css('padding-top','0px');
        if (getViewport() == "desktop") {
            $('body').css('padding-top','70px');
            //$('.login-container').css('top','70px');
        } else {
            $('body').css('padding-top','50px');
            //$('.login-container').css('top','50px');
        }
    }*/
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