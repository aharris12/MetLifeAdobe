/* common/layout/sub-category-3depth script */


(function($){
	"use strict";
	$.fn.subCategory = function(options){

		return this.each(function(){

			var $this = $(this),
				$win = $(window),
				$openBtn = $this.find('button'),
				$openList = $this.find('.sub-cat-list'),
				$listItem = $openList.find('li');
			var openHeight;
			var oldView, newView;

			var focusable = [],
				el_firstFocus, el_lastFocus;

				$openList.find('*').each(function(i, val) {
					if(val.tagName.match(/^A$|AREA|INPUT|TEXTAREA|SELECT|BUTTON/gim) && parseInt(val.getAttribute("tabIndex")) !== -1) {
						focusable.push(val);
					}
					if((val.getAttribute("tabIndex") !== null) && (parseInt(val.getAttribute("tabIndex")) >= 0) && (val.getAttribute("tabIndex", 2) !== 32768)) {
						focusable.push(val);
					}
				});
				el_firstFocus = focusable[0];
				el_lastFocus = focusable[focusable.length-1];

			function toggleComplete(status) {
				if(status) {
					$openList.css('display','none');
				}
			}

			function moveObject( status ){
				var obj = {};
				if(!status) {
					$openList.css('display','block');
					openHeight = $openList.find('ul').height();
					$openList.css('height','0');
				}
				obj.height = ( status ) ? 0 : openHeight;
				obj.ease = Expo.easeOut;
				obj.onComplete = toggleComplete;
				obj.onCompleteParams = [status];
				return obj
			}

			function openToggle() {
				var toggle = moveObject( $openBtn.hasClass( 'active' ) );
				if( $openBtn.hasClass( 'active' ) ) {
					$openBtn.removeClass('active');
				} else {
					$openBtn.addClass('active');
				}
				TweenMax.killTweensOf( $openList );
				TweenMax.to( $openList, 0.5, toggle )
			}

			function keydownEvt(e){
				var keyCode = e.keyCode || e.which;
				if (keyCode == 9){
					if (!e.shiftKey) {
						openToggle();
					}
					if(e.shiftKey && $openBtn.hasClass( 'active' ) ) {
						openToggle();
					}
				}
			}

			function lastKeydownEvt(e){
				
				var keyCode = e.keyCode || e.which;
				if (keyCode == 9){
					if (!e.shiftKey && window[sitename].VARS.IS_VIEWTYPE == 'mobile') {
						openToggle();
					}
				}
			}

			function resizeSet() {
				newView = window[sitename].VARS.IS_VIEWTYPE;
				if( oldView == newView ) return;
				$listItem.removeAttr('style');
				if(newView == 'mobile') {
					if ($openBtn.hasClass('active')) {
						$openList.css({
							'display':'block',
							'height' : openHeight
						});
					} else {
						$openList.removeAttr('style');
					}
				} else {
					$openList.removeAttr('style');
					setDesgin();
				}
				oldView = newView;
			}

			function addEvent() {
				$openBtn.on('click', openToggle);
				$openBtn.on('keydown', keydownEvt);
				$(el_lastFocus).on('keydown', lastKeydownEvt);
				$win.on('resize', resizeSet);
			}

			function setDesgin() {
				var maxWidth = 0;
				$listItem.each(function(){
					var $this = $(this);
					var thisWidth = $this.width();
					if(maxWidth < thisWidth) {
						maxWidth = thisWidth;
					}
				});
				$listItem.css('width', maxWidth);
			}

			function init() {
				addEvent();
				/* menu size fix */
				newView = window[sitename].VARS.IS_VIEWTYPE;
				if( newView != 'mobile' ) {
					setDesgin();
				}
				oldView = newView;
			}

			if(options == 'init') {
				init();
			}

		})

	};

})(jQuery);



(function($){

	function subCate(){
		var $elem = $('.sub-category');
		if($elem.length > 0) {
			$elem.subCategory('init');
		}
	}

	$(document).on('ready', subCate)

})(jQuery);