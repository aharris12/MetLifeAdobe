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