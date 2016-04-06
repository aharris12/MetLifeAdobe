// Lazy-load Hero Carousel
var carouselInterval = $(".carousel").attr("data-interval");
$( document ).ready(function() {

    $('.carousel.slide').carousel({
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
        $('.carousel .carousel-caption--hero').height($('.carousel').height());
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
        $('.carousel .carousel-caption--hero').height($('.carousel').height());
        resizeTimeout = setTimeout(function () {
            $(window).lazyLoadXT({
                checkDuplicates: false
            });
            clearTimeout(resizeTimeout);
        }, lazyPause);
    });
});