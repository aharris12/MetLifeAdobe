(function($){
	"use strict";

	function DROPDOWN( $el, callbackEvent ){
		var $win = $(window);
		var $doc = $(document);
		var self = this;
		var $target = $el.target,
			$elem = $el.el,
			$button = $el.button;

		var $list = {};
		$list.wrap = $el.wrap;
		$list.list = $el.list;
		$list.link = $el.link;

		var oldDevice;
		var focusable = window[sitename].MDOBJ.FOCUSABLE( $list.list );

		function setIndex(){
			$el.el.css('z-index', $el.len - $el.idx);
			$el.el.data('dropIndex', $el.idx);
		}

		function comphide( $target ){
			//console.log($target);
			$target.removeAttr('style');
		}

		function makeObj ( status, $this, $list ){
			var openHeight;
			var obj = {};
			//console.log(status);
			if( !status ) {
				$this.addClass('active');
				$list.wrap.css({
					'display':'block',
					'height':'0',
					'overflow':'hidden'
				});
				openHeight = $list.list.outerHeight();
			} else {
				$this.removeClass('active');
			}

			obj.height = (status) ? 0 : openHeight;
			obj.ease = Expo.easeOut;
			if( status ) {
				obj.onComplete = comphide;
				obj.onCompleteParams = [ $list.wrap ];
			}
			return obj;
		}

		function docAddEvent(){
			if( $button.hasClass('active') ) {
				$doc.off('click touchEnd', callbackEvent);
				$doc.on('click touchEnd', callbackEvent);
			} else {
				$doc.off('click touchEnd', callbackEvent);
			}
		}

		this.listOpen = function( $this, $list, callback ){
			//console.log($this);
			var efObj = makeObj( $this.hasClass('active'), $this, $list );
			TweenMax.killTweensOf( $list.wrap );
			//console.log(efObj);
			TweenMax.to( $list.wrap, 0.5 , efObj);

			if(callback != undefined) {
				callback();
			}

			if( $this.hasClass('active') ) {
				$elem.addClass('list-active');
			} else {
				$elem.removeClass('list-active');
			}
		};

		function openEffect( e, status ){
			e.stopPropagation();
			var $this = $(this);
			var callback;
			if($this.closest('div').hasClass('list-active')) {
				callback = docAddEvent;
			} else {
				callback = ($target.hasClass('list-active')) ? callbackEvent : docAddEvent;
			}
			//console.log(callback);
			self.listOpen($this, $list, callback);
		}

		function kwcagOpenEffect(e) {
			//var $this = $button;
			var $this = $(e.target);

			var keyCode = e.keyCode || e.which;
			if (keyCode == 9){
				if (!e.shiftKey) {
					if(!$this.hasClass('active')) {
						self.listOpen($this, $list)
					}

					if($list.link.index( $this ) == $list.link.length-1) {
						self.listOpen($this, $list)
					}
					/*if($(this).html() == $(focusable.el_lastFocus).html()) {
						console.log("check");
						self.listOpen($this, $list)
					}*/
				}
				if (e.shiftKey) {
					if($this.hasClass('active')) {
						self.listOpen($this, $list)
					}
				}
			}
		}

		function resizeSet(){
			if(window[sitename].VARS.IS_VIEWTYPE == oldDevice) return;
			$list.wrap.removeAttr('style');
			$button.removeClass('active');
			$elem.removeClass('list-active');
			oldDevice = window[sitename].VARS.IS_VIEWTYPE;
		}

		function addEvent() {
			$button.on('click', openEffect);
			$button.on('keydown', kwcagOpenEffect);
			$(focusable.el_lastFocus).on('keydown', kwcagOpenEffect);
			$win.on('resize', resizeSet);
		}

		this.init = function(){
			setIndex();
			addEvent();
			oldDevice = window[sitename].VARS.IS_VIEWTYPE;
		};
	}

	window[sitename].APPS.DROPDOWN = window[sitename].APPS.DROPDOWN || DROPDOWN;

})(jQuery);

