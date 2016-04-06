var timer;
var homepageSubMenuSelected;
var delay = 500;
$('.homepage-nav__icon').hide();
function closeHomepageNav() {
    $('.homepage-nav').removeClass('homepage-nav--active');
    $('.homepage-nav__items').removeClass('homepage-nav__items--active');
    $('.homepage-nav__item').removeClass('homepage-nav__item--active');
    $('.homepage-nav__icon').hide();
    $('.homepage-sub').hide();
}

$('.homepage-nav__item').hover(function(){
    homepageSubMenuSelected = $(this);
    //homepageSubMenuContainer = $(this).attr('data-target');
    $('.homepage-nav').addClass('homepage-nav--active');
    $('.homepage-nav__items').addClass('homepage-nav__items--active');
    $(homepageSubMenuSelected).addClass('homepage-nav__item--active');
    $(homepageSubMenuSelected).find('.homepage-nav__icon').show();
    $(homepageSubMenuSelected).find('.homepage-sub').show();
}, function() {
    //timer = setTimeout(function() {                
        closeHomepageNav();
    //}, delay);
});

$('.homepage-sub').on('mouseover', function(){
    //clearTimeout(timer); 
    $('.homepage-nav').addClass('homepage-nav--active');
    $('.homepage-nav__items').addClass('homepage-nav__items--active');
    $(homepageSubMenuSelected).addClass('homepage-nav__item--active');
    //$(homepageSubMenuSelected).find('.homepage-nav__icon').show();
    $(homepageSubMenuSelected).find('.homepage-sub').show();
}).on('mouseleave', function(){
    $('.homepage-nav').removeClass('homepage-nav--active');
    $('.homepage-nav__items').removeClass('homepage-nav__items--active');
    $('.homepage-nav__item').removeClass('homepage-nav__item--active');
    //$('.homepage-nav__icon').hide();
    $('.homepage-sub').hide();
});
$(window).scroll(function () {
    closeHomepageNav();
});