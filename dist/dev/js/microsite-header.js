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

