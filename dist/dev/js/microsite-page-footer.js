function setMicrositePageFooterDisclaimer(){
    if($(".global-footer--microsite-page").length != 0){
        if(getViewport() == "desktop"){
            $(".disclaimer--microsite").insertBefore($(".footer-legal__link"));
        }else{
            $(".disclaimer--microsite").insertBefore($(".global-footer--microsite-page"));
        }
    }
}




$(window).load(function(){
    setMicrositePageFooterDisclaimer();
});

$(window).resize(function(){
    setMicrositePageFooterDisclaimer();
});