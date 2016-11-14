/* category/small-product-tiles-container script */


(function($){

	$.fn.smalllistHeightFix = function(options){
		return this.each(function(){
			var $this = $(this),
				$thisTiles = $this.find('.small-product-tiles').closest('li'),

				$win = $(window);

			var minHeight = 380;

			function getHeight( basic ){
				var maxHeight = 0;
				maxHeight = (maxHeight=="auto") ? 0 : maxHeight;
				maxHeight = (basic != undefined) ? basic : maxHeight;
				$thisTiles.removeAttr('style');
				$thisTiles.each(function(idx){
					var $this = $(this);
					if(maxHeight < $thisTiles.outerHeight()){
						maxHeight = $thisTiles.outerHeight();
					}
				});

				if(window[sitename].VARS.IS_VIEWTYPE == "mobile") {
					maxHeight = "auto";
				}
				return maxHeight;
			}

			function setHeight( callback ){
				var height = getHeight();
				$thisTiles.removeAttr('style');
				heightSet( height );
			}

			function heightSet( h ) {


				if (window[sitename].VARS.IS_VIEWTYPE != "mobile") {
					$thisTiles.removeAttr('styles');
					$thisTiles.css({'height': h});
				} else {
					$thisTiles.removeAttr('style');
				}
			}

			function addEvent(){
				$win.on('resize', setHeight)
			}

			function init(){
				addEvent();
				$win.on('load', setHeight)
			}

			if(options === 'init') {
				init();
			}
		})
	}

})(jQuery);

(function($){
	function init() {
		var $list = $('.small-product-tiles-container');
		$list.each(function(idx){
			$list.eq(idx).smalllistHeightFix("init");
		})
	}
	$(document).on('ready', init())
	
})(jQuery);