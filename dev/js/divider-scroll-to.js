$('.divider--scroll').click(function () {
    $('html, body').animate({
        scrollTop: $(this).offset().top - 35
    }, 500);
});

var runOnce = true;
$(window).load(function () {
    scrollMoreBouncing();
    if(runOnce == true){
        console.log("true");
        scrollForMoreFunction();
        runOnce = false;
    }

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
        if ($("#carouselHero").length != 0 && $(".scroll-form-more-container").length != 0) {
            if ($(".hidden-sm").is(":visible") && $(".hidden-xs").is(":visible")) {
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