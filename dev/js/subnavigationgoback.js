/**
 * Created by jfeng2 on 12/17/2015.
 */

//I'm so sorry for this code

var hasTwoLinksInSubnav = false;

$(window).load(function () {
    matchSubnavHeight();
    if($('.subnav-go-back__list li').length === 2) {
        hasTwoLinksInSubnav = true;
        $('.subnav-go-back__list')
            .addClass('subnav-go-back--two-items-centered')
            .removeClass('subnav-go-back__list');
        centerAlignSubnavWithTwoLinks();
    }
});

$(window).resize(function (e) {
   removeSubnavAttr();
});


$(".subnav-go-back .subnav-go-back__menu a").click(function(e){
        if(!$(".hidden-xs").is(":visible")){
            e.preventDefault();
            if(!hasTwoLinksInSubnav) {
                $(".subnav-go-back__list").slideToggle()
            } else {
                $(".subnav-go-back--two-items-centered").slideToggle();
            }
        }
});

//$(".subnav-go-back .subnav-go-back__menu a").click(function(e){
//    if(!$(".hidden-xs").is(":visible")){
//        e.preventDefault();
//        $(".subnav-go-back__list").slideToggle();
//    }
//});

function removeSubnavAttr(){
    if($(".hidden-xs").is(":visible")){
        $(".subnav-go-back--two-items-centered").removeAttr('style');
    }
};


$(".subnav-go-back .subnav-go-back__list li a").each(function () {
    if ($(this).attr("href") == window.location.pathname) {
        $(this).addClass("active");
    }
});

$(".subnav-go-back .subnav-go-back--two-items-centered li a").each(function () {
    if ($(this).attr("href") == window.location.pathname) {
        $(this).addClass("active");
    }
});

function centerAlignSubnavWithTwoLinks() {
    //$('.subnav-go-back__list').addClass("subnav-go-back--two-items-centered");
    $('.subnav-go-back__list').css("text-align", "start");
    $(".subnav-go-back__list li").first().addClass("subnav-go-back--two-items-centered");
}


