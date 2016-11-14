(function($){

	function ACCORDION( $elem ){
		"use strict";
		var self = this;
		var speed = 0.5;
		var $win = $(window);

		function showComplete( $target, $elem ) {
			$target.css('height','auto');
			//if( window[sitename].VARS.IS_VIEWTYPE == 'mobile' ) {
			//	var winTop = $elem.find('dl').offset().top - $elem.find('dl').height() ;
			//	$win.scrollTop( winTop );
			//}
		}
		function hideComplete( $elem ) {
			$elem.removeAttr('style');
		}

		function makeObj( status, $elem, $target ) {
			var obj = {};
			if( status ) { $target.css({ 'display':'block', 'height': 0 }); }
			var $heightTarget = $target.find('dl');
			obj.css = {};
			if( status ) { obj.css.display = 'block'; }
			obj.css.height = ( status ) ? $heightTarget.outerHeight() : 0;
			obj.ease = Expo.easeOut;
			obj.onComplete = ( status ) ? showComplete : hideComplete;
			obj.onCompleteParams = [ $target, $elem];
			return obj;
		}

		function openEvent( $elem ){
			var $openList = $elem.closest('li');
			var $openTarget = $elem.closest('div').next();
			var TweenObj;
			$openList.addClass('active');
			TweenObj = makeObj( true, $openList, $openTarget );
			Tweener( $openTarget, TweenObj )
		}

		function closeEvent( $elem ){
			var $openList = $elem.closest('li');
			var $openTarget = $elem.closest('div').next();
			var TweenObj;
			$openList.removeClass('active');
			TweenObj = makeObj( false, $openList, $openTarget );
			Tweener( $openTarget, TweenObj );
			statusCheck();
		}

		function statusCheck(){
			var status = false;
			$elem.list.each(function(){
				var $this = $(this);
				if( $this.hasClass('active') ){
					status = true;
				}
			});
			if( window[sitename].VARS.IS_VIEWTYPE != 'mobile' ) {
				if (status) {
					$elem.allClose.css('display', 'block');
					$elem.allOpen.css('display', 'none');
				} else {
					$elem.allClose.css('display', 'none');
					$elem.allOpen.css('display', 'block');
				}
			}
		}


		function Tweener( $elem, obj) {
			TweenMax.killTweensOf( $elem );
			TweenMax.to( $elem, speed, obj );
		}

		function openCheck( e, $this ) {
			var $btnThis = ( $this ) ? $this : $(this);
			var $openList = $btnThis.closest('li');
			var $oldActive = $elem.el.find('.active button');
			if( !$openList.hasClass('active') ) {
				closeEvent( $oldActive );
				openEvent( $btnThis );
			} else {
				closeEvent( $btnThis );
			}
		}

		function allOpenCheck(){
			$elem.allClose.css('display','block').focus();
			$elem.allOpen.css('display','none');
			$elem.list.each(function( idx ){
				var $this = $(this);
				if( !$this.hasClass('active') ) {
					openEvent( $this.find('button') );
				}
			})
		}

		function allCloseCheck(){
			$elem.allClose.css('display','none');
			$elem.allOpen.css('display','block').focus();
			$elem.list.each(function( idx ){
				var $this = $(this);
				if( $this.hasClass('active') ) {
					closeEvent( $this.find('button') );
				}
			})
		}

		function resizeSet() {
			$elem.allClose.removeAttr('style');
			$elem.allOpen.removeAttr('style');
		}

		function addEvent(){
			$elem.openBtn.on('click', openCheck);
			$elem.allOpen.on('click', allOpenCheck);
			$elem.allClose.on('click', allCloseCheck);
			$win.on('resize', resizeSet)
		}
		
		this.init = function(){
			addEvent();
		}

	}

	window[sitename].APPS.FAQ = window[sitename].APPS.ACCORDION || ACCORDION;


})(jQuery);