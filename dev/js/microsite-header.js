// Open/Close Menu
$(".microsite-header .megamenu-trigger").on("click", function (e) {
    $('.' + $(this).attr('data-target')).slideToggle();
    $("html").toggleClass('megamenu--open--microsite');
    $('.subnav').toggleClass('subnav-mobile--open');
    $('.microsite-trigger__icon').toggleClass('megamenu-trigger__icon--open');
});