/* stuff for header */


$(document).ready(function(){
    setSearchSide();
});



$(window).resize(function(){
    setSearchSide();
});

function setSearchSide(){

    if(getViewport() == "desktop"){
        $(".search-trigger").insertAfter(".login-trigger");

    }else{
        $(".search-trigger").insertAfter(".megamenu-trigger");

    }
};

$(".newLifeStage-tile").click(function(){
    $(".newLifeStage-tile").removeClass("active");
    $(".newLifeStage-tile p").addClass("hidden");
    $(".newLifeStage-tile img").removeClass("hidden");
    $(this).addClass("active");
    $(this).find("p").removeClass("hidden");
    $(this).find("img").addClass("hidden");
});

$(".js-lifestage").click(function(){
   var page = $(".newLifeStage-tile.active").attr("data-redirect");
    window.location.href= page;
});