/* js folder ##common/layout/gnb## */

(function($){

    var $win = $(window);
    var $mobgnbcontainer = $('.gnb-container');
    var $mobopen = $('.mob-menu-open');
    var $mobclose = $('.mob-menu-close');
    var $gnb = $('.gnb-wrap');

    function menuOpen(){
        TweenMax.to($gnb, 0.7, {css:{
            left:0
        }, ease: Expo.easeOut});
        $mobgnbcontainer.addClass('active');
    }

    function menuClose() {
        TweenMax.to($gnb, 0.7, {css:{
            left:-300
        }, ease: Expo.easeOut});
        $mobgnbcontainer.removeClass('active');

    }

    function resizeFn() {
        $gnb.removeAttr('style');
    }

    function addEvent() {
        $mobopen.on('click', menuOpen);
        $mobclose.on('click', menuClose);
        $win.on('resize', resizeFn);
    }

    function mobMenuInit() {
        addEvent()
    }

    $(document).on('ready', mobMenuInit)

})(jQuery);