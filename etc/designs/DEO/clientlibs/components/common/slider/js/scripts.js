/* common/slider script */

(function($){
	var _util = window[sitename].APPS.SLIDE.UTIL;

	var $slide = $('.ui-slide');
	var $slideElement = _util.slideDomElementMapping( $slide );

	$slide.imagesLoaded(function(){
		var slide = new window[sitename].APPS.SLIDE.SLIDELOAD();
		slide.init( $slideElement );
	})

})(jQuery);

