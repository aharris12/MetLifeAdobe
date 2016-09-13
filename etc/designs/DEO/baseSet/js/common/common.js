(function($){
    
    var $win = $(window);

    function loadComplate() {
        var $body = $('body');
        var images = './images/test.png';
        $body.removeClass('doc-loading');
    }
    
    $win.on('load', loadComplate);
})(jQuery);