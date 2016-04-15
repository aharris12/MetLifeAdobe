$(window).load(function () {
    intializeContextualLinks();
});


function intializeContextualLinks(){

    var parent = $(".contextual-links");
    var length, contextual_link;

    contextual_link = parent.find(".contextual-links__tile");
    length = contextual_link.length;



    if(length <=2){
        contextual_link.addClass("contextual-width-50");
        parent.find(".carousel-control").addClass("hidden-xs");
    }else{
        setupContextualLinksCarousel();
    }
    if( length < 6){
        parent.find(".carousel").addClass("tablet-desktop-no-carousel");
    }


};

var activeItem = 0;

function setupContextualLinksCarousel() {
    var parent = $(".contextual-links");
    var length, contextual_link;

    parent.addClass("carousel-padding");
    parent.find(".carousel").addClass("carousel-shadow");
    contextual_link = parent.find(".contextual-links__tile");
    length = contextual_link.length;

    $('.contextual-links .carousel-item').removeClass('selected');
    $('.contextual-links .carousel-item').eq(activeItem).addClass('selected');
    $('.contextual-links .carousel-item').eq(activeItem).show();

    var splitter = 1;

    $('.contextual-links .item .contextual-links__tile').removeClass('active').unwrap();
    for (var i = 0; i < length; i += splitter) {
        contextual_link.slice(i, i + splitter).wrapAll("<div class='item'></div>");
    }


    if($('.contextual-links .carousel-inner').find(".item.active") !=0){

    }
    $('.contextual-links .carousel-item.selected').parent(".item").addClass('active');

    $('#contextualCarousel').bind('slid.bs.carousel', function (e) {
        var nextIndex = $('.item.active > .carousel-item').attr('data-target');
        $('.contextual-links .carousel-item').eq(nextIndex).addClass('selected');
    });





        $('.contextual-links .carousel .item').each(function () {


            if ($(this).nextAll().slice(0, 4).length == 4) {
                $(this).nextAll().slice(0, 4).children(':first-child').clone().appendTo($(this)).addClass("clone clone-next");
            } else if ($(this).nextAll().slice(0, 4).length == 3) {
                $(this).nextAll().slice(0, 3).children(':first-child').clone().appendTo($(this)).addClass("clone clone-next");
                $(this).siblings(":first").nextAll().slice(0,1).children(':first-child').clone().appendTo($(this)).addClass("clone clone-next");

            } else if ($(this).nextAll().slice(0, 4).length == 2) {
                $(this).nextAll().slice(0, 2).children(':first-child').clone().appendTo($(this)).addClass("clone clone-next");
                $(this).siblings(":first").nextAll().slice(0,2).children(':first-child').clone().appendTo($(this)).addClass("clone clone-next");

            } else if ($(this).nextAll().slice(0, 4).length == 1) {
                $(this).nextAll().slice(0, 1).children(':first-child').clone().appendTo($(this)).addClass("clone clone-next");
                $(this).siblings(":first").nextAll().slice(0,3).children(':first-child').clone().appendTo($(this)).addClass("clone clone-next");
            } else {

                $(this).siblings(":first").nextAll().slice(0, 4).children(':first-child').clone().appendTo($(this)).addClass("clone clone-next");
            }

            if ($(this).prev().length == 0) {
                $(this).siblings(':last').children().eq(0).clone().prependTo($(this)).addClass("clone clone-prev");
            } else {
                $(this).prev().children().eq(1).clone().prependTo($(this)).addClass("clone clone-prev");
            }

        });



};

