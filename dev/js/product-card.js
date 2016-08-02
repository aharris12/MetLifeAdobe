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

if ($('.product-card').length > 0) {
    $('.product-card p').filter(function (index) {
            return $(this).text().length === 0;
        })
        .css('margin-bottom', "0");
    $(".product-card .content").find("ul + .hidden-xs:last-child, span + .hidden-xs:last-child, p + .hidden-xs:last-child").prev().addClass("product-card__content-body--margin");
}


//Ensuring that margin is always 50px in desktop for either last product card
//or promo.
function addProperMarginToBottom() {
    if ($(".product-card").length > 0) {
        if ($(".promocard").length > 0) {
            $(".promocard").last().addClass("product-card__promo--margin-bottom");
        } else if ($(".skinny-promo-tile").length > 0) {
            $(".skinny-promo-tile").last().addClass("product-card__skinny-promo--margin");
        } else {
            $(".container .row .product-card").last().addClass("product-card--last-margin-bottom");
        }
    }
}

addProperMarginToBottom();
/***** Product Card Module End ************************************************************/
