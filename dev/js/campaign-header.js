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