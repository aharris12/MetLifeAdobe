/* sub-category/subc-product-tiles-container script */


(function($){

	$.fn.maxHeightFix = function( options, elemArr ){

		return this.each(function(){
			var $win = $(window);
			var max = [];

			function getMaxHeight( $value, idx ){
				var checkMax = 0;
				$value.each(function(){
					var $this = $(this),
						thisHeight = $this.height();
					if(checkMax > thisHeight) return false;
					if( checkMax < thisHeight ){
						checkMax = thisHeight;
					}
				});
				max[idx] = checkMax;
				return checkMax;
			}

			function heightSet( $value, idx, checkMax ) {
				$value.height( checkMax );
			}

			function heightInit() {
				elemArr.fixTarget.forEach(function( $value, idx ){
					var checkMax = getMaxHeight($value, idx);
					heightSet( $value, idx, checkMax );
				});
			}

			function removeHeight(){
				elemArr.fixTarget.forEach(function( $value ){
					if ($value.attr('style') == undefined) return false;
					$value.removeAttr('style')
				});
			}

			function resizeSet() {
				if( window[sitename].VARS.IS_VIEWTYPE != 'mobile' ){
					removeHeight();
					heightInit();
				} else {
					removeHeight();
				}
			}
			
			function addEvent(){
				$win.on('resize', resizeSet);
			}

			function init(){
				addEvent();
				if( window[sitename].VARS.IS_VIEWTYPE != 'mobile' ) {
					heightInit();
				}
			}

			if(options === 'init') {
				init();
			}
		})
	}

})(jQuery);



(function($){
	function init() {
		var $list = $('.subc-product-tiles-list');
		$list.each(function(idx){
			var $this = $(this);
			$list.eq(idx).maxHeightFix("init", {
				fixTarget : [$this.find('dt'), $this.find('dd')]
			});
		})
	}
	$(document).on('ready', init )

})(jQuery);