(function($){
    "use strict";

    var pointArr = [0, 768, 1000, 1200, 1260];
    var pointClass = ["mobile", "tablet", "webs", "web", "webb"];
    var backpointArr = pointArr.reverse();
    var backpointClass = pointClass.reverse();

    function braekpoint(){
        var $body = $('body');
        for(var i = 0, len = pointArr.length; i < len; i++) {
            if( window[sitename].VARS.VIEWPORT_WIDTH < backpointArr[i] ) {
                $body.removeClass(backpointClass[i]);
            }
            if( window[sitename].VARS.VIEWPORT_WIDTH > pointArr[i] ) {
                $body.addClass(pointClass[i]);
            }
        }
    }

    $(document).on('ready', braekpoint);
    $(window).on('resize', braekpoint);

})(jQuery);


