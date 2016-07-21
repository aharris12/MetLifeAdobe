$(".carousel-control").click(function (e) {
    e.preventDefault();
})

$('.carousel-control.left').click(function () {
    $(".contextual-links-carousel").carousel('prev');
});

$('.carousel-control.right').click(function () {
    $(".contextual-links-carousel").carousel('next');
});

$('.carousel-indicators li').click(function () {
    $(".contextual-links-carousel").carousel(parseInt($(this).attr("data-slide-to")));
});


$(document).ready(function () {
    initHpContextualLinks();
});

$(window).load(function () {
    if ($(".hidden-xs").is(":visible")) {
        if ($(".more-content__section").length > 4) {
            initHpContextualLinksCarousel();
        }
    }
});

$(window).resize(function () {
    if ($(".hidden-xs").is(":visible")) {
        initHpContextualLinksCarousel();
    } else {
        unWrapCarousel();
    }

});


function initHpContextualLinks() {
    if ($(".more-content").length != 0) {

        $(".more-content").each(function () {

            $(".more-content__section").each(function (index) {
                if (index != 0) {
                    $(this).find("a:first-of-type").addClass("hidden-xs");
                }
                if (index > 3) {
                    $(this).addClass("view-more-hidden");
                }
            });

            if ($(".more-content__section").length > 4) {
                $(".more-content__view--more").removeClass("hidden");
            }

        });
    }
};

$(".more-content__section").click(function () {
    if (!$(".hidden-xs").is(":visible")) {
        $(".more-content__section").find("a:first-of-type").addClass("hidden-xs");
        $(this).find("a:first-of-type").removeClass("hidden-xs");
        $(this).find("a:first-of-type").addClass("active");
        $('html, body').animate({
            scrollTop: $(this).offset().top - 20
        }, 300);
    }
});


var startIndexViewMore = 4;

$(".more-content__view--more").click(function () {
    var hiddenLength = $(".more-content__section.view-more-hidden").length;
    if (hiddenLength < 4) {
        $(".more-content__section").slice(startIndexViewMore).each(function (index) {

            $(this).removeClass("view-more-hidden");
            $(".more-content__view--more").addClass("hidden");
        });
    } else {
        $(".more-content__section").slice(startIndexViewMore, startIndexViewMore + 4).each(function (index) {

            $(this).removeClass("view-more-hidden");
        });
        startIndexViewMore += 4;
    }
});

var activeItem = 0;

function initHpContextualLinksCarousel() {
    if ($(".contextual-links-carousel").length == 0) {


        $(".more-content__section").wrapAll("<div class='carousel  contextual-links-carousel' id='contextualCarousel' data-interval='false' data-ride='carousel'>");
        $(".more-content__section").wrapAll("<div class='carousel-inner'>");
        $(".more-content__section").each(function (index) {
            $(this).addClass("carousel-item");
            $(this).attr("data-target", index);
        });


        var parent = $(".more-content");
        var length, contextual_link;

        contextual_link = parent.find(".more-content__section");
        length = contextual_link.length;

        $('.more-content .carousel-item').removeClass('selected');
        $('.more-content .carousel-item').eq(activeItem).addClass('selected');
        $('.more-content .carousel-item').eq(activeItem).show();

        if($(".full-promo").length !=0){
            splitter = 3;
        }else{
            var splitter = 4;
        }


        $('.more-content .item .more-content__section').removeClass('active').unwrap();
        for (var i = 0; i < length; i += splitter) {
            contextual_link.slice(i, i + splitter).wrapAll("<div class='item'></div>");
        }


        if ($('.more-content .carousel-inner').find(".item.active") != 0) {

        }
        $('.more-content .carousel-item.selected').parent(".item").addClass('active');

        $('#contextualCarousel').bind('slid.bs.carousel', function (e) {
            var nextIndex = $('.item.active > .carousel-item').attr('data-target');
            $('.more-content .carousel-item').eq(nextIndex).addClass('selected');
        });

        $(".carousel-control").removeClass("hidden");

    }

};

function unWrapCarousel() {

    if ($(".contextual-links-carousel").length != 0) {
        $(".more-content__section").removeClass("selected").removeClass("carousel-item").removeAttr("data-target");
        $(".more-content .more-content__section").unwrap();
        $(".carousel-control").addClass("hidden");

    }
};


