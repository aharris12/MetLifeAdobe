/* productTilesContainer script */


(function($){

	$.fn.listHeightFix = function(options){
		return this.each(function(){
			var $this = $(this),
				$thisTiles = $this.find('.product-tiles'),
				$pomotionType = $this.find('.promo-card'),
				$promo_img = $this.find('.promo-card-imgbg'),
				$promo_content = $this.find('.promo-card-content'),
				$setElem = $thisTiles.find('.product-tiles-content'),
				$thislnk = $thisTiles.find('.product-tiles-link'),
				$win = $(window);

			var minHeight = 380;

			function getHeight( basic ){
				var maxHeight = 0;
				maxHeight = (maxHeight=="auto") ? 0 : maxHeight;
				maxHeight = (basic != undefined) ? basic : maxHeight;
				$setElem.each(function(idx){
					var $this = $(this);
					if(maxHeight < $this.find('dl').outerHeight()){
						maxHeight = $this.find('dl').outerHeight();
					}
				});

				if(window[sitename].VARS.IS_VIEWTYPE == "mobile") {
					maxHeight = "auto";
				}
				return maxHeight;
			}

			function setHeight( callback ){
				var height = getHeight();
				$setElem.removeAttr('style');
				heightSet( height );
			}

			function heightSet( h ) {
				$setElem.css('min-height', h);
				var imgurl = $promo_img.css('backgroundImage');

				if (window[sitename].VARS.IS_VIEWTYPE != "mobile") {
					if ($pomotionType.length > 0) {
						var setHeight = 0;

						$promo_img.removeAttr('style');
						$promo_content.removeAttr('style');
						$thisTiles.removeAttr('style');

						var productHeight = $thisTiles.height();
						var promoHeight = $promo_content.outerHeight();
						setHeight = ( productHeight <= promoHeight ) ? promoHeight : productHeight;
						console.log(setHeight);

						$setElem.parent().addClass('promoType-tiles');
						$setElem.removeAttr('style');
						$promo_img.css({'height': setHeight, 'backgroundImage': imgurl});
						$promo_content.css({'height': setHeight});
						$thisTiles.css({'height': setHeight});
					}
				} else {
						//console.log("check");
						$thisTiles.removeAttr('style');
						$setElem.parent().removeClass('promoType-tiles');
						$setElem.removeAttr('style');
						$promo_img.removeAttr('style');
						$promo_content.removeAttr('style');
						$promo_img.css({ 'backgroundImage': imgurl});
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
		var $list = $('.product-tiles-list');
		$list.each(function(idx){
			var $this = $(this);
			$list.eq(idx).listHeightFix("init");
		})




	}
	$(document).on('ready', init())
	
})(jQuery);