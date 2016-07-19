// Lazy-load Hero Carousel

$(".carousel-control").click(function(e){
    e.preventDefault();
})

$('.carousel-control.left').click(function() {
    $(this).closest(".carousel").carousel('prev');
});

$('.carousel-control.right').click(function() {
    $(this).closest(".carousel").carousel('next');
});

$('.carousel-indicators li').click(function() {
    $(this).closest(".carousel").carousel(parseInt($(this).attr("data-slide-to")));
});

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


    //var lazyPause = carouselInterval;
    ////Need to shrink carousel caption by 100px to center carousel hero message
    ////var carouselCaptionPaddingBottom = 100;
    //$.lazyLoadXT.autoLoadTime = lazyPause;
    ////Adjust carousel-caption container's height
    //$.lazyLoadXT.onload = function() {
    //    $('.carousel .carousel-caption--hero').innerHeight($('.carousel').height());
    //};
    //
    //
    //$('.carousel .carousel-caption--hero').innerHeight($('.carousel').height());
    //
    ////Reloadoad images on resize
    //var resizeTimeout;
    //  resizeTimeout = setTimeout(function () {
    //    $(window).lazyLoadXT({
    //        checkDuplicates: false
    //    });
    //    clearTimeout(resizeTimeout);
    //  });
    //$( window ).resize(function() {
    //    $('.carousel .carousel-caption--hero').innerHeight($('.carousel').height());
    //    resizeTimeout = setTimeout(function () {
    //        $(window).lazyLoadXT({
    //            checkDuplicates: false
    //        });
    //        clearTimeout(resizeTimeout);
    //    });
    //});
});