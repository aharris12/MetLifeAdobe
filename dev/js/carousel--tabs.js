//
// Carousel with Tabs
//

function adjustBtnWidth() {
    //For each visible tab, stack buttons vertically if at least one button is too wide (larger than container minus padding/margins)
    $('.carousel--tabs .carousel--tabs__item:visible').each(function () {        
        //For a visible tab, get the max width of its buttons then set it to all buttons
        var btnPadding = 40;
        var btnWidth = $(this).find(".btn span").map(function () {
                return $(this).width();
            }).get(),
            maxBtnWidth = Math.max.apply(null, btnWidth);     
        maxBtnWidth += btnPadding;
        $(this).find('.btn').width(maxBtnWidth);
        //If maxBtnWidth is larger than the buttons container (minus padding/margin), stack buttons vertically.
        var btnMargin = $('.carousel--tabs .carousel--tabs__item:visible .v-divider-arrow .row [class*="col-"] .btn').css('padding-left').replace('px', '');
        var maxBtnContainerWidth = $('.carousel--tabs .carousel--tabs__item:visible .v-divider-arrow .row [class*="col-"]').width() - 2 * btnMargin; //multiply by 4 because we have 2 buttons and each has left and right padding
        if (maxBtnContainerWidth <= maxBtnWidth) {
            $('.carousel--tabs .carousel--tabs__item:visible .v-divider-arrow .row [class*="col-"]').addClass('full-width');
        }
        //If only two button, force full-width
        if ($(this).find(".btn").length <= 2) {
            $('.carousel--tabs .carousel--tabs__item:visible .v-divider-arrow .row [class*="col-"]').addClass('full-width');
        }
    });
}

function resetBootstrapItems() {

    // Init first block
    $('.carousel--tabs .carousel-item').removeClass('selected');
    $('.carousel--tabs .carousel-item .carousel--tabs__icon').hide();
    $('.carousel--tabs .carousel--tabs__item').hide();
    $('.carousel--tabs .carousel-item:first-child').addClass('selected');
    $('.carousel--tabs .carousel-item:first-child .carousel--tabs__icon').css('display','block');
    $('.carousel--tabs .carousel--tabs__item:first-child').show();

    //How many blocks to show per carousel slide? PASS USER INPUT FROM CMS
    var splitter = 3;

    // Determine how many blocks to show based on screen width
    var sWidth = $(window).width();
    var slides = $(".carousel--tabs .carousel-inner [class*='col-']");
    switch (true) {
    case (sWidth >= breakpointDesktop):
        splitter = slides.length;
        break;
    case (sWidth >= breakpointTablet):
        break;
    default:
        splitter = 1;
    }
    $('.carousel--tabs .carousel-inner [class*="col-"]').css('width', (100 / splitter) + '%');
    $('.carousel--tabs .item [class*=col-]').removeClass('active').unwrap();
    for (var i = 0; i < slides.length; i += splitter) {
        slides.slice(i, i + splitter).wrapAll("<div class='item'></div>");
    }

    // Activate first slide
    $('.carousel--tabs .item:first-child').addClass('active');
    adjustBtnWidth();

    // Style tab based on clicked block
    $('.carousel--tabs .carousel-item').click(function () {
        $('.carousel--tabs__items > div').hide();
        $('.carousel--tabs .carousel-item').removeClass('selected');
        $('.carousel--tabs .carousel-item .carousel--tabs__icon').hide();
        $(this).addClass('selected');
        $(this).find('.carousel--tabs__icon').css('display','block');
        $('.carousel--tabs__items > div').eq($(this).attr('data-target')).show();
        adjustBtnWidth();
    });

    // Style first tab after a carousel slide
    $('.carousel[data-carousel="lifeStages"]').bind('slid.bs.carousel', function (e) {
        $('.carousel--tabs__items > div').hide();
        $('.carousel--tabs .carousel-item').removeClass('selected');
        $('.carousel--tabs .carousel-item .carousel--tabs__icon').hide();
        var nextIndex = $('.item.active > .carousel-item').attr('data-target');
        $('.carousel--tabs__items > div').eq(nextIndex).show();
        $('.carousel--tabs .carousel-item').eq(nextIndex).addClass('selected');
        $('.carousel--tabs .carousel-item').eq(nextIndex).find('.carousel--tabs__icon').show();
        adjustBtnWidth();
    });

}
//OnLoad, OnResize
$(window).load(function () {
    resetBootstrapItems();
});
$(window).resize(function () {
    resetBootstrapItems();
});