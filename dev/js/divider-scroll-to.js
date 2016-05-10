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
    $(window).scroll(function () {
        console.log('$("#carouselHero").length != 0 && $(".scroll-form-more-container").length != 0 ', $("#carouselHero").length != 0 && $(".scroll-form-more-container").length != 0)
        if ($("#carouselHero").length != 0 && $(".scroll-form-more-container").length != 0) {
            console.log('$(".hidden-sm").is(":visible") && $(".hidden-xs").is(":visible") ', $(".hidden-sm").is(":visible") && $(".hidden-xs").is(":visible"))
            if ($(".scroll-form-more-container").is(":visible")) {

                var height = $(".global_header").height();
                if ($(window).scroll(200) && $(".scroll-form-more-container").css("display") != "none") {
                    $('html, body').animate({scrollTop: $(".divider--snoopy").offset().top - height - 30}, 500);
                    $(".scroll-form-more-container").hide();


                }
            }
        }
    });
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