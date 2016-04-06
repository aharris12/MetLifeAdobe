$(".privacy-policy-index__linkContainer a").on("click", function (evt) {

    if ($(this).attr("href").length != 0) {
        var location = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(location).offset().top - 80
        }, 500);
        return false;
    }

});