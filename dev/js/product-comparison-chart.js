/**
 * Created by jfeng2 on 12/21/2015.
 */

$(window).load(function () {
    productComparisonChart();
    micrositeCarouselSetup();
    micrositeComparisonChart();

});

$(window).resize(function (e) {
    micrositeComparisonChart();
    productComparisonChart();
});


//Product Comparison Chart

function productComparisonChart() {

    // Init first block
    $('.product_chart .carousel-item').removeClass('selected');
    $('.product_chart .carousel-item').first().addClass('selected');
    $('.product_chart .carousel-tab').first().show();


    // Determine how many blocks to show based on screen width
    var splitter = 0;
    var slides = $(".product_chart .carousel-inner [class*='col-']");
    switch (false) {
        case ($(".hidden-xs").is(":visible")):
            splitter = 1;
            break;
        default:
            splitter = 5;
    }
    $('.product_chart .item [class*=col-]').removeClass('active').unwrap();
    for (var i = 0; i < slides.length; i += splitter) {
        slides.slice(i, i + splitter).wrapAll("<div class='item'></div>");
    }

    $('.microsite-product-chart .item').first().addClass('active');


    // Style first tab after a carousel slide
    $('#productComparisonChartCarousel').bind('slid.bs.carousel', function (e) {
        var nextIndex = $('.item.active > .carousel-item').attr('data-target');
        $('.product_chart .carousel-item').eq(nextIndex).addClass('selected');
    });

}


// Microsite comparison chart
function micrositeCarouselSetup() {
    $(".microsite-product-chart .carousel .carousel-inner .carousel-item").each(function () {
        var columnNum = $(this).children(".column-wrapper").length;
        switch (columnNum) {
            case (1):

                if ($(".visible-xs").is(":visible")) {
                    if ($(this).parent().next().length != 0) {

                        $(this).find(".microsite-column-category").addClass("mcc2");
                        $(this).parent().next().find(".carousel-item").find(".microsite-column-category").clone().appendTo($(this)).addClass("visible-xs mcc2");
                        $(this).parent().next().find(".carousel-item").find(".column-wrapper").first().clone().appendTo($(this)).addClass("visible-xs col2");


                    } else {
                        $(this).find(".microsite-column-category").addClass("mcc2");
                        $(".carousel-item").first().find(".microsite-column-category").first().clone().appendTo($(this)).addClass("visible-xs mcc2");
                        $(".carousel-item").first().find(".column-wrapper").first().clone().appendTo($(this)).addClass("visible-xs col2");

                    }
                } else {
                    if ($(this).is(".carousel-item").last()) {
                        $(this).find(".microsite-column-category").addClass("mcc2");
                        $(this).parent().find(".carousel-item").first().find(".microsite-column-category").first().clone().appendTo($(this)).addClass("visible-xs mcc2");
                        $(this).parent().find(".carousel-item").first().find(".column-wrapper").first().clone().appendTo($(this)).addClass("visible-xs col2");

                    } else {
                        $(this).find(".microsite-column-category").addClass("mcc2");
                        $(this).next(".carousel-item").find(".microsite-column-category").clone().appendTo($(this)).addClass("visible-xs mcc2");
                        $(this).next(".carousel-item").find(".column-wrapper").first().clone().appendTo($(this)).addClass("visible-xs col2");
                    }

                }

                break;
            case (2):
                $(this).children(".column-wrapper").css("width", "50%");
                break;
            case (3):
                $(this).clone().addClass('visible-xs').insertAfter($(this)).find('.column-wrapper').first().remove();
                $(this).find('.column-wrapper').last().addClass("hidden-xs");
                break;
            case (4):
                $(this).clone().addClass('visible-xs').insertAfter($(this)).find('.column-wrapper:nth-child(-n+3)').remove();
                $(this).find('.column-wrapper:nth-child(n+4)').addClass("hidden-xs");
                break;
            case (5):
                $(this).clone().addClass('visible-xs').insertAfter($(this)).find('.column-wrapper:not(:nth-last-child(-n+2))').remove();
                ;
                $(this).clone().addClass('visible-xs').insertAfter($(this)).find('.column-wrapper:nth-child(-n+3), .column-wrapper').last().remove();
                $(this).find('.column-wrapper:nth-child(n+4)').addClass("hidden-xs");
                break;
            default:
        }


    });
};

function matchHeights() {
    if (!$(".visible-xs").is(":visible")) {
        $(".microsite-product-chart").each(function () {
            var elements = $(this).find(".microsite-column-category:nth-child(1)").not(":hidden");

            var height = 0;

            elements.css('min-height', '0px');
            elements.each(function () {
                height = $(this).height() > height ? $(this).height() : height;

            });
            elements.css('min-height', height + 'px');

        });
    } else {
        $(".microsite-product-chart .carousel .carousel-inner .item").each(function () {
            if ($(this).css("display") == "none") {
                return true;
            } else {
                var elements = $(this).find(".microsite-column-category").not(":hidden");
                var height = 0;

                elements.css('min-height', '0px');
                elements.each(function () {

                    height = $(this).height() > height ? $(this).height() : height;


                });
                elements.css('min-height', height + 'px');
                $(".left-col-mcc").css('min-height', height + 'px');
                $(".microsite-product-chart .carousel .carousel-inner .carousel-item ").each(function () {
                    $(this).find(".microsite-column-category:nth-child(3)").css("margin-top", 0 - height);


                });


            }

        });
    }
};

function micrositeComparisonChart() {

    matchHeights();

    if (!$(".hidden-xs").is(":visible")) {
        var columnNum = $(this).children(".column-wrapper").length;
        $(".microsite-product-chart .carousel .carousel-inner .carousel-item").css("width", "100%");
        $(".microsite-product-chart .carousel .carousel-inner .carousel-item .column-wrapper").css("width", "50%");

    } else {
        $('.carousel--microsite').each(function () {
            //total number of column wrappers
            //var columnWrapperNumTotal = $(this).find(".carousel-item").find('.column-wrapper').not('.visible-xs').length;
            //ALEX SOUFI - 02/10
            var columnWrapperNumTotal = $(this).find(".carousel-item:not(.visible-xs)").find('.column-wrapper').length;
            //console.log("number of total column wrappers " + columnWrapperNumTotal);
            $(".microsite-product-chart .carousel .carousel-inner .carousel-item").not('.visible-xs').each(function () {
                //number of column wrapper in a single carousel-item
                var columnWrapperNum = $(this).find('.column-wrapper').not('.visible-xs').length;
                $(this).css('width', columnWrapperNum/columnWrapperNumTotal * 100 + '%');

                $(this).find('.column-wrapper').css('width', 100 / columnWrapperNum + '%');
            });
        });
    }


    $(".microsite-product-chart .carousel .carousel-inner .carousel-item .column-wrapper").not(".visible-xs").each(function (index) {

        if (!$(".visible-xs").is(":visible")) {
            if (index % 2 == 0) {
                $(this).css("background-color", "#f2f2f2");
            } else {
                $(this).css("background-color", "#ffffff");
            }


        }

    });
    $(".microsite-product-chart .carousel .carousel-inner .carousel-item .column-wrapper").each(function (index) {


        if ($(".visible-xs").is(":visible")) {
            if (index % 2 == 0) {
                $(this).css("background-color", "#f2f2f2");
            } else {
                $(this).css("background-color", "#ffffff");
            }


        }

    });

    var splitter = 0;

    // Init first block
    $('.microsite-product-chart .carousel-item').removeClass('selected');
    $('.microsite-product-chart .carousel-item').first().addClass('selected');

    // Determine how many blocks to show based on screen width

    var slides = $(".microsite-product-chart .carousel-inner [class*='col-']");
    switch (false) {
        case ($(".hidden-xs").is(":visible")):
            splitter = 1;

            break;
        default:
            splitter = 5;
    }


    $('.microsite-product-chart .item [class*=col-]').removeClass('active').unwrap();
    for (var i = 0; i < slides.length; i += splitter) {
        slides.slice(i, i + splitter).wrapAll("<div class='item'></div>");
    }


    $('.microsite-product-chart .item').first().addClass('active');

    // Style first tab after a carousel slide
    $('#micrositeComparisonChartCarousel').bind('slid.bs.carousel', function (e) {
        matchHeights();
        var nextIndex = $('.item.active > .carousel-item').attr('data-target');
        $('.microsite-product-chart .carousel-item').eq(nextIndex).addClass('selected');
    });


};
/****** Microsite End ***************************************************************/