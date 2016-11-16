/* home/life-stages script */



(function($){

	var _util = window[sitename].APPS.SLIDE.UTIL;

	function slideInit( $target ) {
		var $win = $(window);
		var $this = $target;
		var $slide = $this.find('.ui-slide') || $('.ui-slide');
		var $slideElement = _util.slideDomElementMapping( $slide );
		var slideMode = _util.getDataRetrun( $slideElement.el.data("slideType") );
		var oldView, newView;
		var vars = {
			slideType : slideMode[0],
			viewLen : _util.getDataRetrun( $slideElement.el.data("slideViewlen") ),
			modeidx : _util.getDeviceArrIdx( window[sitename].VARS.IS_VIEWTYPE )
		};
		
		function slideLoad(){
			var slide = new window[sitename].APPS.SLIDE.SLIDEEFFECT.basic( $slideElement, vars );
			var $el = $slideElement;
			var $conElContainer = $this.find('.life-stages-container'),
				$conEl = $this.find('.life-stages-content');
			var lifeStageKwcag = {
				prevbtnKeydown : function(e){
					var keyCode = e.keyCode || e.which;
					if (keyCode == 9){
						if (!e.shiftKey) {
							var callbackArr = [clickCustom, kwcagEvent];
							_util.domMakeAppend( $el, slide.domArr, slide.var.nowInnerLen, slide.setVars, callbackArr);
							slide.setDesigin();
							$el.li.find('a').removeAttr('tabindex');
							e.preventDefault();
							$el.ul.find( 'li:first-child>div:first-child>a:first-child').focus();
						}
					}
				},
				nextbtnKeydown : function(e){
					var keyCode = e.keyCode || e.which;
					if (keyCode == 9){
						var $this = $(this);
						if (!e.shiftKey) {
						} else {
							e.preventDefault();
							//var callbackArr = [clickCustom, kwcagEvent];
							//_util.domMakeAppend( $el, slide.domArr, slide.var.nowInnerLen, slide.setVars, callbackArr);
							//slide.setDesigin();
							///prevFn(e);
							clickCustom();
							kwcagEvent();
							var liLen = $el.innerDiv.length;
							var $onElem = $el.innerDiv.eq(liLen-1).find('a');
							$el.li.find('a').removeClass('active');
							$onElem.addClass('active');
							$onElem.focus()
						}
					}
				},
				listKeydown : function(e){
					var $this = $(this);
					var keyCode = e.keyCode || e.which;
					if (keyCode == 9){
						var thisidx = $el.innerDiv.index( $this.closest('div') );
						//console.log(thisidx);
						if (!e.shiftKey) {
							e.preventDefault();
							tabView( thisidx );
							$el.el.find('[data-lifestage-id='+ thisidx +'] a:first-child').focus();
						} else {
							if(thisidx != 0) {
								e.preventDefault();
								tabView(thisidx - 1);
								$el.innerDiv.eq(thisidx - 1).find('a:last-child').focus();
							}
						}
					}
				},
				conlinkKeydown : function(e){
					var $this = $(this);
					var keyCode = e.keyCode || e.which;
					if (keyCode == 9){
						if (!e.shiftKey) {
							var thisidx = $conEl.index( $this.parents( '.life-stages-content' ) );
							var liLen = $el.innerDiv.length;
							if( liLen-1 == thisidx) return;
							e.preventDefault();
							var $onElem = $el.innerDiv.eq(thisidx+1).find('a');
							$el.li.find('a').removeClass('active');
							$onElem.addClass('active');
							tabView( thisidx+1 );
							if( window[sitename].VARS.IS_VIEWTYPE != 'web') {
								if ( vars.viewLen[vars.modeidx] == "1" ) {
									nextFn(e);
								} else if(vars.viewLen[vars.modeidx]-1 == thisidx) {
									nextFn(e);
								}
							}
							$el.ul.find('li[data-slide-id='+ thisidx+1 +'] a:first-child').addClass('active');
							$onElem.focus();
						}
					}
				}
			};

			function tabView( idx ) {
				var thisidx = (idx != undefined ) ? idx : $el.innerDiv.index( $(this).closest('div') );
				var $openContent = $conElContainer.find('[data-lifestage-id='+ parseInt( thisidx ) +']');
				$conEl.removeClass('active').css('display','none');
				$openContent.css('display','table').addClass('active');
				$conEl.find('a').attr('tabindex','-1');
				$openContent.find('a').attr('tabindex','0');
			}

			function tabHandler(e) {
				var $this = $(this);
				if( $this.hasClass('active') ) return;
				//console.log($this);
				var thisidx = $el.innerDiv.index( $this.closest('div') );
				$el.li.find('a').removeClass('active');
				$this.addClass('active');
				$this.focus();
				tabView( thisidx );
			}

			function resizeSet(e) {
				var resizeCallback = [clickCustom, kwcagEvent];
				slide.resizeSet(e, resizeCallback);
				if( oldView != window[sitename].VARS.IS_VIEWTYPE ) {
					tabView(0)
				}
			}

			function slideAfter( $elem ){
				if(slide.var.direct == "next" ) {
					$el.ul.append($elem);
					$el.li = $el.ul.find('li');
					$elem.css("marginLeft", 0);
				}
				slide.var.isFlag = false;
				var slideid = $el.ul.find('li:first-child').data('slideId');
				var $targetDiv = $el.ul.find('[data-slide-id=' + slideid + ']>div:first-child');
				var $clickTarget = $el.ul.find('[data-slide-id=' + slideid + ']>div:first-child>a:first-child');
				$el.li.find('a').removeClass('active');
				$clickTarget.addClass('active');
				

				tabView( $el.innerDiv.index( $targetDiv ) )
			}

			function nextFn(e){
				slide.nextFn(e, slideAfter, $el);
			}

			function prevFn(e){
				slide.prevFn(e, slideAfter, $el);
			}

			function tabindexClose() {
				$conEl.find('a').attr('tabindex','-1');
			}

			function tabindexOpen() {
				var $this = $(this);
				var thisidx = $conEl.index( $this.parents( '.life-stages-content' ) );
				$conEl.eq(thisidx).find('a').attr('tabindex','0');
			}

			function clickCustom(){
				$el.li.find('a').off('focus');
				$el.li.find('a').off('focus', tabHandler);
				$el.li.find('a').on('focus', tabHandler);
				$el.li.find('a').off('click', tabHandler);
				$el.li.find('a').on('click', tabHandler);
				$el.li.find('a').off('focusout', tabindexClose);
				$el.li.find('a').on('focusout', tabindexClose);
			}

			function kwcagEvent() {
				$el.prevbtn.off('keydown', lifeStageKwcag.prevbtnKeydown);
				$el.prevbtn.on('keydown', lifeStageKwcag.prevbtnKeydown);
				$el.nextbtn.off('keydown', lifeStageKwcag.nextbtnKeydown);
				$el.nextbtn.on('keydown', lifeStageKwcag.nextbtnKeydown);
				$el.li.find("a").off('keydown', lifeStageKwcag.listKeydown);
				$el.li.find("a").on('keydown', lifeStageKwcag.listKeydown);
				$conEl.find("a:last-child").off('keydown', lifeStageKwcag.conlinkKeydown);
				$conEl.find("a:last-child").on('keydown', lifeStageKwcag.conlinkKeydown);
				$conEl.find("a").off('focus', tabindexOpen);
				$conEl.find("a").on('focus', tabindexOpen);
				$conEl.find("a").off('focusout', tabindexClose);
				$conEl.find("a").on('focusout', tabindexClose);
				$conEl.find('a').attr('tabindex','-1');
			}

			function addEvent() {
				clickCustom();
				$el.nextbtn.off('click');
				$el.nextbtn.on('click', nextFn);
				$el.prevbtn.off('click');
				$el.prevbtn.on('click', prevFn);
				kwcagEvent();
				var swipeOptions = _util.makeSwipeEvt(nextFn, prevFn);
				$el.ul.swipe( swipeOptions );
				$win.on('resize', resizeSet )
			}

			function lifeStageInit(){
				addEvent();
			}

			function init(){
				slide.init( true );
				slide.setVars();
				slide.setDesigin();
				slide.kwcagBtnRemoveEvent();
				slide.kwcagLiRemoveEvent();
				slide.addEvent();
				$el.li.find('a').removeAttr('tabindex');
				lifeStageInit();
				newView = window[sitename].VARS.IS_VIEWTYPE;
				oldView = newView;
			}

			init();

			slide.setDesigin();
		}

		$slide.imagesLoaded(slideLoad);
	}

	var $slideElem = $('.life-stages');
	window[sitename].MDOBJ.COMPCALL( $slideElem, slideInit );

})(jQuery);