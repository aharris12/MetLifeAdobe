/**
 * Created by jfeng2 on 12/16/2015.
 */
$(window).load(function () {
    matchProductModuleHeights();
});

$(window).resize(function (e) {
    matchProductModuleHeights();
});



function matchProductModuleHeights(){
    
//    $('.row.wrapper.product-module').each(function () {
//        var moduleHeight = $(this).find('.product-module__medium').map(function () {
//                return $(this).height();
//            }).get(),
//            maxModuleHeight = Math.max.apply(null, moduleHeight);
//        $(this).find('.product-module__medium').height(maxModuleHeight);
//    });
    
    if ($(".hidden-xs").is(":visible")){
        if ($(".product-module").length != 0){
            $(".product-module").each(function(index){
                var productModuleTop= $(this).find(".product-module__top");
                var productModuleBottom = $(this).find(".product-module__bottom");
                var productModuleTopHeight = 0;
                var productModuleBottomHeight = 0;

                productModuleTop.css('min-height', '0px');
                productModuleTop.each(function () {

                    productModuleTopHeight = $(this).outerHeight() > productModuleTopHeight ? $(this).outerHeight() : productModuleTopHeight;

                });
                productModuleTop.css('min-height', productModuleTopHeight + 'px');


                productModuleBottom.css('min-height', '0px');
                productModuleBottom.each(function () {


                    productModuleBottomHeight = $(this).outerHeight() > productModuleBottomHeight ? $(this).outerHeight() : productModuleBottomHeight;

                });
                productModuleBottom.css('min-height', productModuleBottomHeight  + 'px');


            }) ;
        }
    }else{

        if ($(".product-module").length != 0){
            $(".product-module").each(function(){
                var productModuleTop= $(this).find(".product-module__top");
                var productModuleBottom = $(this).find(".product-module__bottom");

                productModuleTop.css('min-height', 'auto');
                productModuleBottom.css('min-height', 'auto');

            });
        }
    }

};

if($(".product-module").length > 0) {
    if($(".product-module").children(".product-module__small").length !== 0) {
        $(".product-module").addClass("product-module__small--min-height");
    }
}

