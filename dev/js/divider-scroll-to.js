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
        if ($(".scroll-form-more-container").length != 0){
        $(window).scroll(function () {
            var height = $(".global_header").height(),
                carsouselHeight = $("#carouselHero").height(),
                scrollerlHeight = $(".scroll-form-more-container").height(),
                doc = document.documentElement,
                top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

            if ($(".hidden-sm, .hidden-xs").is(":visible") && top >= (carsouselHeight + height + scrollerlHeight + 200)) {
                if ($(".scroll-form-more-container").css("display") != "none") {
                    $('html, body').animate({scrollTop: $(".divider--snoopy").offset().top - height - 30}, 500);
                    $(".scroll-form-more-container").hide();
                }
            }

        });
    }
}

/*
function scrollForMoreFunction() {
    if ($("#carouselHero").length != 0 && $(".scroll-form-more-container").length != 0) {
        if ($(".hidden-sm").is(":visible") && $(".hidden-xs").is(":visible")) {
            $(window).scroll(function () {
                var height = $(".global_header").height();
                if ($(window).scroll(200) && $(".scroll-form-more-container").css("display") != "none") {
                    $('html, body').animate({scrollTop: $(".divider--snoopy").offset().top - height - 30}, 500);
                    $(".scroll-form-more-container").hide();
                }
            });
        }
    }
}
*/


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