/**
 * Created by jfeng2 on 1/27/2016.
 */

$(document).ready(function () {
    productTilePadding();
    productTilesLayout();
    productTilePullRight();
    callTextFontChange();

});

$(window).load(function () {
    productTilePadding();
    productTileHeight();
    productTilePullRight();
    positionTileButtonBottom();
    callTextFontChange();
});

$(window).resize(function (e) {
    productTilePadding();
    productTileHeight();
    productTilePullRight();
    positionTileButtonBottom();
    callTextFontChange();

});

$(".product-row__tile__img-tile__img").click(function(){
    var href;
    if ($(this).parent().hasClass("triple-promo")){
         href = $(this).parent().find(".product-row__tile--img-tile__text").find(".product-row__tile--img-tile__text--right").find("a").attr("href");
    }
    if ($(this).parent().hasClass("double-promo")){
         href = $(this).parent().find(".product-row__tile--img-tile__text").find(".product-row__tile__bottom").find("a").attr("href");
    }
    if ($(this).parent().hasClass("skinny-promo-tile")){
        href = $(this).parent().find(".product-row__tile--img-tile__text").find(".product-row__tile--img-tile__text--right").find("a").attr("href");
    }
    if ($(this).parent().hasClass("large-promo-tile")){
        href = $(this).parent().find(".product-row__tile--img-tile__text").find("a").attr("href");
    }
    window.location.href = href;

});
function productTilePadding(){
    if (getViewport() == "desktop" || getViewport() == "tablet"){
        $(".product-row").parent().css("padding","0 0 10px 0px");
    }else{
        $(".product-row").parent().css("padding","0 10px 10px 10px");
    }

}
function productTileHeight() {
    if ($(".hidden-xs").is(":visible")) {
        if ($(".product-row").length != 0) {

            $(".product-row").each(function () {
                //$(this).find($(".single-promo")).css("height", "320");
                var elements = $(this).find(".product-row__tile__top");
                var bottomElements = $(this).find(".product-row__tile__bottom");

                var height = 0;

                elements.css('min-height', '0px');
                elements.each(function () {

                    height = $(this).outerHeight() > height ? $(this).outerHeight() : height;

                });
                elements.css('min-height', height + 'px');

                var bottomHeight = 0;

                bottomElements.css('min-height', '0px');
                bottomElements.each(function () {

                    bottomHeight = $(this).outerHeight() > bottomHeight ? $(this).outerHeight() : bottomHeight;

                });

                bottomElements.css('min-height', bottomHeight + 'px');


                if ($(".product-row__tile").length != 0 && $(".product-row__tile--img-tile").length != 0) {
                    var subHeight = $(this).find(".product-row__tile").outerHeight();

                    if (subHeight < $(this).find(".product-row__tile--img-tile").outerHeight()) {
                        $(this).find(".product-row__tile").outerHeight($(this).find(".product-row__tile--img-tile").outerHeight());
                    } else {
                      /*  $(this).find(".product-row__tile--img-tile > .product-row__tile--img-tile__text").height(subHeight);*/
                        $(this).find(".product-row__tile--img-tile").height(subHeight);



                    }
                }


                $(".product-row__tile--img-tile").each(function () {
                    if ($(this).find(".product-row__tile__img-tile__img").css("float") == "right") {
                        var valHeight = $(this).outerHeight();
                        $(this).find(".product-row__tile__img-tile__img").height(valHeight);
                    }
                });
            });
        }
    } else {
        if ($(".product-row").length != 0) {
            //$(".product-row").parent().css("padding","0 10px 0 10px");
            $(".product-row").each(function () {
                var elements = $(this).find(".product-row__tile__top");
                var bottomElements = $(this).find(".product-row__tile__top");
                var subcatProductCards = $(this).find(".product-row__tile");
                subcatProductCards.css("height", "auto");
                elements.css('min-height', "auto");
                bottomElements.css('min-height', "auto");
                if ($(this).find(".product-row__tile").length == 1) {
                    $(this).find(".product-row__tile--img-tile").css("height", "auto");
                    $(this).find(".product-row__tile--img-tile .product-row__tile__img-tile__img").css("height", "150");
                    if ($(window).width() < 768) {
                        $(this).find(".product-row__tile--img-tile .product-row__tile__img-tile__img").css("height", "150");
                    }
                } else if ($(this).find(".product-row__tile").length == 2) {
                    // var mobileHeight = $(this).find(".subcategory-image-product-card .subcat-image-text").outerHeight();
                    $(this).find(".product-row__tile--img-tile").css("min-height", "220");
                    if ($(window).width() < 768) {
                        $(this).find(".product-row__tile--img-tile .product-row__tile__img-tile__img").css("min-height", "220");
                    }
                } else {
                    /*if ($(window).width() < 768) {
                     $(this).find(".product-row__tile--img-tile .product-row__tile__img-tile__img").css("height", "150");
                     }*/
                }

                $(".product-row__tile--img-tile").each(function () {


                    if ($(this).find(".product-row__tile__img-tile__img").css("float") == "right") {
                        $(this).find(".product-row__tile__img-tile__img").css("height", "auto");
                    }
                });
            });
        }
    }
};

function callTextFontChange(){
        $(".product-row").each(function () {
            $(".product-row__tile").each(function () {
               if($(this).find(".product-tile__action").length > 1){
                   $(this).find(".product-tile__action").first().addClass("product-tile__action--noLink");
               }
            });
        });
}

function positionTileButtonBottom(){
    var minHeight;
    $(".product-row").each(function () {
        $(".product-row__tile").each(function () {
            if (getViewport() != "mobile") {
                minHeight = parseInt($(this).find(".product-row__tile__bottom").css("min-height"));
                $(this).find(".product-row__tile__top").css("margin-bottom", minHeight + 15 + "px");
            }else{

                $(this).find(".product-row__tile__top").css("margin-bottom", "15px");
            }
        });
        if($(".single-promo").length >0){
            if (getViewport() != "mobile") {
                $(this).find(".product-row__tile__top").css("margin-bottom", minHeight + 15 + "px");
            }else{
                $(this).find(".product-row__tile__top").css("margin-bottom", "15px");
            }
        }
        if($(".double-promo").length >0){
            if (getViewport() != "mobile") {
                $(this).find(".product-row__tile__top").css("margin-bottom", minHeight + 15 + "px");
            }else{
                $(this).find(".product-row__tile__top").css("margin-bottom", "15px");
            }
        }
    });



}

function productTilePullRight(){
/*
    if (getViewport() == "mobile") {
        if ($(".product-row__tile--img-tile__text").hasClass("pull-right")) {
            $(this).addClass("pull-left");
        }
    }else {
        if ($(".product-row__tile--img-tile__text").hasClass("pull-right")) {
            $(this).removeClass("pull-left");
        }
    }*/
}
function productTilesLayout() {

    if ($(".product-row").length != 0) {
        $(".product-row").each(function () {
            var numProductCards = $(this).find(".product-row__tile").length;
            var numImageCards = $(this).find(".product-row__tile--img-tile").length;
            /*if (numImageCards == 1) {
             $(this).find(".product-row__tile--img-tile").addClass("single-promo")

             }*/
            if ($(".product-row__tile").length != 0) {
                var numProductCards = $(this).find(".product-row__tile").length;
                if (numProductCards == 0) {
                    if ($(".product-row__tile").length != 0) {
                        $(this).find(".product-row__tile--img-tile").addClass("triple-promo");
                        $(this).find(".product-row__tile--img-tile__text").addClass("box-shadow");
                        $(this).find(".product-row__tile__top").removeClass("product-row__tile__top").addClass("product-row__tile--img-tile__text--left");
                        $(this).find(".product-row__tile__bottom").removeClass("product-row__tile__bottom").addClass("product-row__tile--img-tile__text--right");
                    }

                } else if (numProductCards == 1) {
                    if ($(".product-row__tile").length != 0) {
                        $(this).find(".product-row__tile--img-tile").addClass("double-promo");
                    }
                } else if (numProductCards == 2){
                    if ($(".product-row__tile").length != 0) {
                        $(this).find(".product-row__tile--img-tile").addClass("single-promo");
                    }
                }
            }
        });

    }
};