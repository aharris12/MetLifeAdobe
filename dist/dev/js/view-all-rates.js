$(".rate-overlay-trigger").on("click", function () {
    $('.' + $(this).attr('data-target')).show();
    $("html, body").animate({scrollTop: 0}, 0);
    resizeRateTable();
});

// Closes View All Rates Overlay
$(".view-close").on("click", function () {
    $(this).closest(".rates-overlay").hide();
});

// Change  View All Rates Overlay Active Table
$(".view-all-rates-overlay .view-nav li").on("click", function () {
    var element = $(this);
    var index = element.index();

    // change active nav
    $(this).siblings().removeClass("active");
    $(this).addClass("active");

    // change active table
    var parent = $(this).closest(".view-all-rates-overlay");
    parent.find(".view-content").children().removeClass("active");
    parent.find(".view-content").children().eq(index).addClass("active");
    resizeRateTable();
});