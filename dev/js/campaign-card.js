//$(document).ready(function(){
//    setElementsWidthToLargest($(".matching-element-width"));
//});



$(".campaign-contact-form .form-user-grp input, .campaign-contact-form .form-user-grp select, .campaign-contact-form .form-user-grp textarea").on("focus",function(){

    console.log("working");
    $(".campaign-contact-form .contactDisclaimer").removeClass('hidden');


});

$(".campaign-card .campaign-tel").on("click",function(e){
    if($(".hidden-xs").is(":visible")){
        e.preventDefault();

    }
});


function setElementsWidthToLargest(elements) {
    var maxWidth = 0;
    elements.each(function (index) {
        maxWidth = $(this).innerWidth() > maxWidth ? $(this).innerWidth() : maxWidth;
    });

    elements.each(function (index) {
        $(this).css("width", maxWidth);
    });
}