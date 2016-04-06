/**
 * Created by jfeng2 on 2/17/2016.
 */

$(document).ready(function () {
    positionOverlay();
});

$(window).resize(function(){
    positionOverlay();
});

function positionOverlay(){
    if ($('.opt-out__overlay').is(':visible')){
        $('body').css('padding-top','0');
    }
}
