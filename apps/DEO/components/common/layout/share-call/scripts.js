/* js folder ##common/layout/share-call## */

(function($){

	$.fn.toggleShare = function( options ){


		return this.each(function(){
			var $this = $(this),
				$openBtn = $this.find('button'),
				$shareListWrap = $this.find('.share-sns-listwrap'),
				$shareList = $this.find('.share-sns-list'),
				$shareListlnk = $shareList.find('a.tablet-view'),
				$shareListlnk_W = $shareListlnk.width(),
				$win = $(window),
				oldview,
				setWidth = ($shareListlnk.length * $shareListlnk_W) + 40,
				$doc = $(document);

			var focusable = window[sitename].MDOBJ.FOCUSABLE( $shareList );
			//console.log(focusable);

			function CallbackHdie() {
				$shareList.css('display', 'none');
			}

			function moveMake( status ){
				var obj = {};
				if( status ) {
					$shareList.css({
						'left' : $shareListWrap.width() ,
						'display':'table'
					})
				}

				obj.left = ( status ) ? 0 : parseInt( $shareListWrap.width() ) ;
				obj.ease = Expo.easeInOut;
				if( !status ) {
					obj.onComplete = CallbackHdie;
				}
				return obj;
			}

			function toggleEffect( object ){
				TweenMax.killTweensOf( $shareList );
				TweenMax.to( $shareList, 0.5, object )
			}

			function openList(e, direct){
				var moveObj = null;
				var status = false;
				if (direct == undefined) {
					if ($this.hasClass('active')) {
						$this.removeClass('active');
						status = false;
						moveObj = moveMake(status);
					} else {
						$this.addClass('active');
						status = true;
						moveObj = moveMake(status);
					}
				} else {
					status = direct;
					if( direct ) {
						$this.addClass('active');
					} else {
						$this.removeClass('active');
					}
					moveObj = moveMake(status);
				}
				toggleEffect( moveObj );
			}

			var kwcagEvent = {
				btnKeyCheck : function(e){
					var keyCode = e.keyCode || e.which;
					if (keyCode == 9){
						if (!e.shiftKey) {
							if( !$openBtn.parent().hasClass('active') ) {
								openList( e, true );
								e.preventDefault();
								$(focusable.el_firstFocus).focus();
							}
						}
					}
				},
				liLastKeyCheck : function (e){
					var keyCode = e.keyCode || e.which;
					if (keyCode == 9){
						if (!e.shiftKey) {
							openList( e, false );
						}
					}
				},
				listFisrtBack : function(e){
					var keyCode = e.keyCode || e.which;
					if (keyCode == 9){
						if (e.shiftKey) {
							openList( e, false );
						}
					}
				}
			};
			
			function addEvent(){
				$openBtn.on('click', openList);
				$openBtn.on('keydown', kwcagEvent.btnKeyCheck);
				if(window[sitename].VARS.IS_VIEWTYPE != "mobile") {
					$(focusable.el_lastFocus).on('keydown', kwcagEvent.liLastKeyCheck);
					$(focusable.el_firstFocus).on('keydown', kwcagEvent.listFisrtBack);
				}
			}

			function resizeSet(){
				if( window[sitename].VARS.IS_VIEWTYPE == 'mobile' ) {
					$shareList.removeAttr('style');
					$this.removeClass('active');
					$shareListWrap.removeAttr('style');
					$(focusable.el_lastFocus).off('keydown', kwcagEvent.liLastKeyCheck);
				} else {
					$(focusable.el_lastFocus).on('keydown', kwcagEvent.liLastKeyCheck);
				}

				if(window[sitename].VARS.IS_VIEWTYPE != oldview) {
					$shareList.removeAttr('style');
					$this.removeClass('active');
					$shareListWrap.removeAttr('style');
				}

				if(window[sitename].VARS.IS_VIEWTYPE != 'mobile' ) {
					if(window[sitename].VARS.IS_VIEWTYPE == oldview) return;
					setDesign();
				}

				oldview = window[sitename].VARS.IS_VIEWTYPE;
			}

			function setDesign(){
				setWidth = ($shareListlnk.length * $shareListlnk_W) + 40;
				$shareListWrap.css({
					'width': setWidth,
					'left' : -(setWidth-10),
					'top' : 0,
					'position':'absolute'
				})
			}

			function init() {
				if(window[sitename].VARS.IS_VIEWTYPE != 'mobile') {
					setDesign();
				}
				addEvent();
				oldview = window[sitename].VARS.IS_VIEWTYPE;
				$win.on('resize', resizeSet);
			}

			if(options == 'init') {
				init();
			}
		});
	};


	$.fn.sharePosition = function( options ){
		return this.each(function(){
			var $this = $(this),
				$win = $(window)

			function setDesign() {
				if (window[sitename].VARS.IS_VIEWTYPE != 'mobile') {
					if( $this.hasClass('share-sns') ) {
						$this.css('float','left');
					} else {
						$this.css('float','right');
					}
				} else {
					$this.css('float','none');
				}
			}



			function init() {
				setDesign();
				$win.on('resize', setDesign)
			}

			if(options == 'init') {
				init();
			}
		});
	};


})(jQuery);


(function($){

	function shareInit(){
		var $shareDiv = $('.share-call>div');
		$('.share-sns').toggleShare("init");

		if($shareDiv.length == 1) {
			$shareDiv.sharePosition("init")
		}
	}

	$(document).on('ready', shareInit)

})(jQuery);

