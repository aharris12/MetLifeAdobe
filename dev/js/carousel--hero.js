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
        swipeStatus: function (event, phase, direction, distance, duration, fingers, fingerData, currentDirection) {
            console.log(direction);
        },
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