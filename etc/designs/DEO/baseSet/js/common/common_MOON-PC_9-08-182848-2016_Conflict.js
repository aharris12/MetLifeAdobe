(function($){
    
    var $win = $(window);

    function loadComplate() {
        var $body = $('body');
        var images = '/content/dam/DEO/baseSet/js/common/test.png';
        $body.removeClass('doc-loading');
    }
    
    $win.on('load', loadComplate);
})(jQuery);