window[sitename].APPS.PARALLAX.animations = window[sitename].APPS.PARALLAX.animations || {};

(function($){
	var self = window[sitename].APPS.PARALLAX;
	var $win = $(window);
	var _util = self.util;

	self.animations.section = function( $el, options ) {
		var moveObj = {};
		moveObj.scrollTop = $win.scrollTop();
		moveObj.offsetArr = _util.getOffset( $el );
		moveObj.idx = _util.getTargetIdx( moveObj.offsetArr, moveObj.scrollTop );
		moveObj.elem = $el.eq( moveObj.idx );
		moveObj.factor = options.speedFactor;

		var speedFactor = (typeof moveObj.factor == "object") ? moveObj.factor[moveObj.idx] : moveObj.factor;
		var $target = moveObj.elem.find( options.sectionbg );
		$target.css("backgroundPositionY", Math.round((moveObj.offsetArr[moveObj.idx] - moveObj.scrollTop) * speedFactor) + "px")
	};
})(jQuery);
