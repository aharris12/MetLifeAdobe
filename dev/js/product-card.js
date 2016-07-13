/**
 * Created by icunningham on 3/16/2016.
 */


/***** Product Card Module Begin ***************************************************/
// Expands the Product Card
$('.expand-open, .expand-close').click(function () {
    var expand = $(this).siblings('.expand-content');
    expand.slideToggle(function () {
        if (expand.attr("style") == "display: block;") {
            expand.addClass("visible-xs visible-sm visible-lg");
        } else {
            expand.removeClass("visible-xs visible-sm visible-lg");
        }
        expand.removeAttr("style");
    });
    expand.siblings('.expand-open').toggle();
    expand.siblings('.expand-close').toggle();
});

// Navigates to the FAQ Section on Page
$(".product-card .read-more").click(function (e) {
    e.preventDefault();
    var height = $(".global_header").height();
    $('html, body').animate({scrollTop: $(".faq_background").offset().top - height}, 500);
});

$(function() {
    if ($('.product-card .action .btn-brand-2nd').length != 0) {
        $('.product-card .action .btn-brand-2nd')
            .filter(function () {
                return $(this).text().toLowerCase().length >= 12;
            }).each(function (i) {
                $(this).css("width", "140px");
            });
    }
});


if($('.product-card').length > 0) {
    $('.product-card p').filter(function(index) {
        return $(this).text().length === 0;
    })
    .css('margin-bottom', "0");
}


/***** Product Card Module End ************************************************************/
