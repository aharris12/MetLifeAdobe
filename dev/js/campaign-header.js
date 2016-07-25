$(".campaign-header-right").click(function () {
    $(".campaign-header__popup").toggle();
    $(".campaign-header__popup").toggleClass('open');

    if($(".campaign-header__popup").css("display") !== "none"){
        callNowInputWidth();
    }
});

$(window).scroll(function () {
    var stickyOffset = $('.campaign-header').height() + 20;
    var scrollPos = $(window).scrollTop();
    if (scrollPos >= stickyOffset) {
        $(".campaign-header").addClass("campaign-header-on-scroll");

    } else {
        $(".campaign-header").removeClass("campaign-header-on-scroll");

    }
});

$(document).ready(function(){
    callNowInputWidth();
});
$(window).resize(function(){
    callNowInputWidth();
});
function callNowInputWidth() {
    if ($(".campaign-header__popup__contact input").length > 0) {
        if ($(".hidden-xs").is(":visible")) {
            var minusWidth = $(".campaign-header__popup__contact a")[0].getBoundingClientRect().width;
            console.log(minusWidth)
            var calcWidth = (minusWidth + 10).toFixed(2);

            $(".campaign-header__popup__contact input").css("width", "Calc(100% - " + calcWidth + "px" + ")");


        }else {
            $(".campaign-header__popup__contact input").css("width", "100%");
        }
    }

}