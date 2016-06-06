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
    console.log("fired");
    console.log("this works".toLowerCase().replace(/ /g, ''));
    console.log("this works".toLowerCase().trim() === "thisworks");
    $.each($('.product-card .action .btn-brand-2nd'), function(index, value) {
        console.log(value.text.toLowerCase().replace(/ /g, ''));
        var str = "getmyquote";
        if(value.text.toLowerCase().trim() === str) {
            console.log('fired again');
            value.css("width", "140px");
        }
    });
});
/***** Product Card Module End ************************************************************/
