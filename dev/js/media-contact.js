/**
 * Created by jfeng2 on 12/9/2015.
 */

$(".media-contact__list__section__title").click(function (evt) {
    
    if ($(".hidden-xs").is(":visible")) {
        evt.preventDefault();
    } else {
        $(this).siblings().slideToggle('slow');
        
        $(this).toggleClass('open');
    }
    
});

$(".media-contact__title").click(function (evt) {
    /*$(".media-contact__title").toggle();*/
    $(".media-contact-position").animate().toggleClass("media-contact--absolute");
    $(".media-contact__list--variation").slideToggle("slow");

});

//js that checks to apply the margin to the top of related links if it's sibling before is the product-card-tile div
if($(".related-content").prev().hasClass("product-card-tile")) {
    $(".related-content").addClass("related-content--dynamic-added-margin-top");
}