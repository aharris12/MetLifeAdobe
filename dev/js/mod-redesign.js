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