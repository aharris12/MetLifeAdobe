/**
 * Created by jfeng2 on 12/17/2015.
 */
$(window).load(function () {
    matchSubnavHeight();
});

$(window).resize(function (e) {
   removeSubnavAttr();
});


$(".subnav-go-back .subnav-go-back__menu a").click(function(e){
        if(!$(".hidden-xs").is(":visible")){
            e.preventDefault();
            $(".subnav-go-back__list").slideToggle();
        }
});

function removeSubnavAttr(){
    if($(".hidden-xs").is(":visible")){
        $(".subnav-go-back__list").removeAttr('style');
    }
};


$(".subnav-go-back .subnav-go-back__list li a").each(function () {
    if ($(this).attr("href") == window.location.pathname) {
        $(this).addClass("active");
    }
});

function resizeSubNav(){
    var liTtl       = $("ul.subnav-go-back__list li").length,
        subnavWith  = document.getElementById('subnav-goback'),
        windowWidth = $(window).width();

    if (subnavWith) subnavWith = subnavWith.offsetWidth;

    if (windowWidth >=768){
        $( ".subnav-go-back__list__item" ).each(function( index ) {
            //for desktop we need to split the width by the total number of objects
            //$(this).width(subnavWith/liTtl-1);
            $(this).width(parseFloat(100/liTtl)+'%');
        });
    }else{
        $( ".subnav-go-back__list__item" ).each(function( index ) {
            //for mobile we need to inherit our default of full width
            $(this).removeAttr('style');
        });
    }

}
$( window ).resize(function() {
    resizeSubNav();
});

