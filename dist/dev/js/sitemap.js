$(window).load(function(){
    sitemapLinkHeight();
});
$(window).resize(function () {
    sitemapLinkHeight();
});

function sitemapLinkHeight(){
    if($(".sitemap-section").length!=0){
        if($(".hidden-xs").is(":visible")){
            $(".sitemap-section .sitemap-section-links").each(function(){
                var elements = $(this).find(".sitemap-section-links-container");

                var height = 0;

                elements.css('min-height', '0px');
                elements.each(function () {
                    height = $(this).outerHeight() > height ? $(this).outerHeight() : height;

                });
                elements.css('min-height', height + 'px');

            });
        }else{
            $(".sitemap-section .sitemap-section-links").each(function(){
                var elements = $(this).find(".sitemap-section-links-container");
                elements.removeAttr('style');
            });
        }
    }
}

