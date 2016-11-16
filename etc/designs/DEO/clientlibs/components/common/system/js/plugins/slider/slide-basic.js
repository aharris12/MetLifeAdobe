window[sitename].APPS.SLIDE.SLIDEEFFECT = window[sitename].APPS.SLIDE.SLIDEEFFECT || {};

(function($){

	var self = window[sitename].APPS.SLIDE.SLIDEEFFECT;
	var _util = window[sitename].APPS.SLIDE.UTIL;
	self.basic = self.basic || {};
	self.basic = function( $el, vars ){
		var self = this;
		var extendtype = false;
		var $win = $(window);
		var $elem = $el,
			slideElemVar = vars;                    // elements option vars
		this.domArr = [];
		this.var = {};
		var $moveElem, $oldElem = null;
		var autoTimer = null;
		var basicSpeed = 0.7;
		var $prevControl = $elem.content.prev( $elem.control );
		var $prevNextbtn = $prevControl.find( $elem.nextbtn );
		var prevNextbtnLen = $prevNextbtn.length;
		var prevNextbtn = ( prevNextbtnLen > 0 ) ? true : false;

		this.autoPlay = function() {
			_util.autoStop();
			_util.autoPlay( self.nextFn );
		};

		this.autoStop = function(){
			_util.autoStop();
		};

		this.setDesigin = function() {
			$elem.ul.css({ 'width':self.var.moveX * self.var.len });
			$elem.li.css({ 'width':self.var.slideWidth });
			$elem.innerDiv.css({'width':self.var.slideWidth / self.var.nowInnerLen});
			$elem.content.css({ 'height': $elem.li.height() });
			$elem.el.css('opacity',1);
		};



		function domMake(){
			if (self.var.nowInnerLen == self.var.oldInnerLen) return;
			_util.domMakeAppend( $elem, self.domArr, self.var.nowInnerLen, self.setVars);
			if (!extendtype) { kwcagLiAddEvent(); }
			self.var.oldInnerLen = self.var.nowInnerLen;
		}

		/*this.domMakeSet = function( callback ) {
		 $elem.li.remove();
		 $elem.ul.append( _util.domReMake( self.domArr, self.var.nowInnerLen ) );
		 $elem.li = $elem.ul.find('li');
		 $elem.innerDiv = $elem.li.children('div');
		 self.setVars();

		 if(callback != undefined) {
		 callback();
		 }
		 };*/

		this.setVars = function(){
			self.var.modeidx = _util.getDeviceArrIdx( window[sitename].VARS.IS_VIEWTYPE );
			self.var.slideWidth = $elem.el.width();
			self.var.moveX = self.var.slideWidth;
			self.var.isFlag = false;
			self.var.len = $elem.li.length;
			self.var.speed = basicSpeed;
			self.var.nowInnerLen = (typeof slideElemVar.viewLen != "number") ? slideElemVar.viewLen[ self.var.modeidx ] : slideElemVar.viewLen;
			self.var.auto = ( $elem.el.data("slideAuto") && !extendtype) ? true : false;
		};

		this.update = function( $elemSet, vars ) {
			$elem = $elemSet;
			slideElemVar = vars;
			self.setVars( $elem );
			self.setDesigin();
		};

		this.resizeSet = function(e, callback) {
			lengthCheck();
			if( self.var.auto && !extendtype ) {
				if( $elem.playbtn.css("display") == "none" ) {
					self.autoPlay();
				} else {
					self.autoStop();
				}
			}

			self.setVars();
			domMake(false);
			$elem.li.find('a').off('click', listLinkClick);
			$elem.li.find('a').on('click', listLinkClick);

			self.setDesigin();
			if(callback != undefined) {
				if(typeof callback == "object") {
					for(var i = 0, len = callback.length; i < len; i++) {
						callback[i]();
					}
				} else {
					callback(false);
				}
			}
		};

		function getMoveElem( indi ) {
			$elem.li = $elem.ul.find('li');
			var $moveEl = null;

			//var slideid = (indi != undefined) ? indi : $elem.li.eq(0).data("slideId");
			var slideid = $elem.li.eq(0).data("slideId");

			function nextElem(){
				var $flagEl = null,
					$target = null;
				if(self.var.isFlag) {
					slideid = ( self.var.oldDirect == self.var.direct ) ? slideid + 1 : slideid;
					slideid = ( slideid >= self.var.len ) ? 0 : slideid ;
					$flagEl = $elem.li.eq(0);
					if( self.var.oldDirect == self.var.direct ) {
						$elem.ul.append( $flagEl );
					} else {
						$elem.ul.prepend( $flagEl );
					}
					TweenMax.killTweensOf( $flagEl );
					$flagEl.css('marginLeft','0');
					$elem.li = $elem.ul.find('li');
				}
				var targetIdx = ( indi == undefined ) ? slideid : indi;

				$target = $elem.ul.find('li[data-slide-id=' + targetIdx + ']');
				return $target;
			}

			function prevElem(){
				var $flagEl = null,
					$target = null;

				slideid = (self.var.isFlag && self.var.oldDirect == "next") ? slideid : slideid - 1;
				slideid = ( slideid < 0 ) ? self.var.len - 1 : slideid;
				var targetIdx = ( indi == undefined ) ? slideid : indi;
				$target = $elem.ul.find('li[data-slide-id=' + targetIdx + ']');
				$target.css('marginLeft', -self.var.moveX);
				$elem.ul.prepend( $target );
				if(self.var.isFlag) {
					$flagEl = $target.next();
					TweenMax.killTweensOf( $flagEl );
					$flagEl.css('marginLeft','0');
				}
				return $target;
			}

			$moveEl = ( self.var.direct == "next" ) ? nextElem() : prevElem();
			return $moveEl
		}

		function getMoveObj( callbackParams, callback  ) {
			var obj = {};
			obj.marginLeft = ( self.var.direct == "next" ) ? -self.var.moveX : 0;
			obj.ease = Expo.easeOut;
			obj.onComplete = callback || aniComplete;
			obj.onCompleteParams = [ $moveElem, callbackParams ] || $moveElem;
			return obj;
		}

		this.nextFn = function(e, callback, callbackParams, indi) {
			if( $elem.li.length <= 1 ) return;
			if(e != undefined) {
				self.var.speed = (e.type == "keydown") ? 0 : basicSpeed;
				if(e.type == "keydown" && self.var.auto && !extendtype ) { self.autoStop(); }
				if(e.type == "click" && self.var.auto && !extendtype ) { self.autoPlay(); }
			}
			self.var.direct = "next";
			$moveElem = getMoveElem( indi );

			var nextobj = (callback != undefined) ? getMoveObj( callbackParams, callback ) : getMoveObj();
			self.var.isFlag = true;
			aniEffect( $moveElem, nextobj );
		};

		this.prevFn = function(e, callback, callbackParams, indi) {
			if( $elem.li.length <= 1 ) return;
			if(e != undefined) {
				self.var.speed = (e.type == "keydown") ? 0 : basicSpeed;
				if(e.type == "keydown" && self.var.auto && !extendtype ) { self.autoStop(); }
				if(e.type == "click" && self.var.auto && !extendtype ) { self.autoPlay(); }
			}
			self.var.direct = "prev";
			$moveElem = getMoveElem( indi );
			var prevobj = (callback != undefined) ? getMoveObj( callbackParams, callback ) : getMoveObj();
			self.var.isFlag = true;
			aniEffect( $moveElem, prevobj );
		};

		function aniComplete( $el ) {
			if(self.var.direct == "next" ) {
				$elem.ul.append($el);
				$elem.li = $elem.ul.find('li');
				$el.css("marginLeft", 0);
			}
			self.var.isFlag = false;
		}

		function aniEffect( $el, obj ) {
			TweenMax.killTweensOf($el);
			TweenMax.to($el, self.var.speed, obj);
			self.var.oldDirect = self.var.direct;
			$oldElem = $el;
		}

		function basicLiLnkKeyEvt( e ) {
			var $this = $(this);
			var $thisli = $this.closest('li');
			var $thisDiv = $this.closest( $elem.innerDiv );
			var thisliIdx = $thisli.data('slideId');
			var listInnerTotLen = $elem.li.find( $elem.innerDiv ).length;
			var thisInnerIdx = $elem.innerDiv.index( $thisDiv );
			removeTabindex();

			if( e.shiftKey && e.keyCode == 9  ) {
				if( $thisDiv.index() == 0 ) {
					if( thisliIdx != 0 ) {
						self.prevFn( e );
						e.preventDefault();
						$elem.ul.find( 'li[data-slide-id='+ parseInt( thisliIdx-1 ) +']>div:last-child>a' ).focus();
					} else {
						e.preventDefault();
						$elem.prevbtn.focus()
					}
				}
			} else if ( e.keyCode == 9 ) {
				if( $thisDiv.index() == self.var.nowInnerLen - 1 ) {
					if(listInnerTotLen - 1 != thisInnerIdx ) {
						self.nextFn( e );
						e.preventDefault();
						$elem.ul.find( 'li[data-slide-id='+ parseInt( thisliIdx+1 ) +']>div:first-child>a' ).focus();
					} else {
						$elem.li.find('a').attr('tabindex','-1');
						if ( prevNextbtn ) {
							e.preventDefault();
							$prevNextbtn.focus()
						}
					}
				} else {
					if( listInnerTotLen-1 == thisInnerIdx ) {
						$elem.li.find('a').attr('tabindex','-1');
						if ( prevNextbtn ) {
							e.preventDefault();
							$prevNextbtn.focus()
						}
					}
				}
			}
		}

		function basicLiLnkfocusOutEvt() {
			$elem.li.find('a').attr('tabindex','-1');
		}

		function nextKeydownEvt(e) {
			if(e.keyCode == 9 && e.shiftKey ) {
				$elem.li.find('a').removeAttr('tabindex');
				_util.domMakeAppend( $elem, self.domArr, self.var.nowInnerLen, self.setVars);
				self.setDesigin();
				kwcagLiAddEvent();
				removeTabindex();
				self.prevFn(e);
				e.preventDefault();
				/* indicator 처리 */
				$elem.ul.find( 'li:first-child>div:last-child>a:last-child' ).focus();
				if( self.var.auto && !extendtype ) { self.autoStop(); }
			} else if (e.keyCode == 9) {
				/* indicator 처리 */
				$elem.li.find('a').attr('tabindex', '-1');
				if( self.var.auto && !extendtype ) {
					self.var.speed = basicSpeed;
					self.autoPlay();
				}

			}
		}

		function prevKeydownEvt(e) {
			if( e.keyCode == 9 && e.shiftKey ) {
			} else if( e.keyCode == 9 ){
				_util.domMakeAppend( $elem, self.domArr, self.var.nowInnerLen, self.setVars);
				self.setDesigin();
				removeTabindex();
				e.preventDefault();
				kwcagLiAddEvent();

				$elem.li.find('a').removeAttr('tabindex');
				if(self.var.auto) {
					$elem.autoControl.find('button').focus();
				} else {
					$elem.ul.find( 'li:first-child>div:first-child>a:first-child').focus();
				}
				if( self.var.auto && !extendtype ) { self.autoStop(); }
			}
		}

		function kwcagLiAddEvent(){
			$elem.li.find('a').on('focus', removeTabindex );
			$elem.li.find('a').on('keydown', basicLiLnkKeyEvt);
			$elem.li.find('a').on('focusout', basicLiLnkfocusOutEvt);
		}

		this.kwcagLiRemoveEvent = function(){
			$elem.li.find('a').off('focus', removeTabindex );
			$elem.li.find('a').off('keydown', basicLiLnkKeyEvt);
			$elem.li.find('a').off('focusout', basicLiLnkfocusOutEvt);
		};

		function removeTabindex(){
			$elem.li.find('a').removeAttr('tabindex');
		}

		function kwcagBtnAddEvent() {
			$elem.nextbtn.on('keydown', nextKeydownEvt);
			//$elem.nextbtn.on('focusout', removeTabindex);
			$elem.prevbtn.on('keydown', prevKeydownEvt);
			//$elem.prevbtn.on('focusout', removeTabindex);
		}

		this.kwcagBtnRemoveEvent = function(){
			$elem.nextbtn.off('keydown', nextKeydownEvt);
			$elem.prevbtn.off('keydown', prevKeydownEvt);
		}

		/*function autoHandler(e) {
		 if(e != undefined) {
		 if(e.type=="keydown" && e.keyCode != 13) return;
		 e.preventDefault();
		 $elem.stopbtn.css('display', "block").focus();
		 $elem.playbtn.css('display',"none");
		 }
		 self.autoPlay();
		 }

		 function stopHandler(e) {
		 if(e != undefined) {
		 if(e.type=="keydown" && e.keyCode != 13) return;
		 e.preventDefault();
		 $elem.playbtn.css('display',"block").focus();
		 $elem.stopbtn.css('display',"none");
		 }
		 self.autoStop();
		 }*/

		function autoPlayEvent() {
			$elem.playbtn.on('click keydown', { elem : $elem, fn : self.nextFn }, _util.autoHandler);
			$elem.stopbtn.on('click keydown', { elem : $elem }, _util.stopHandler);
		}

		function listLinkClick() {
			var $this = $(this);
			$this.focus();
		}

		this.addEvent = function(e) {
			kwcagBtnAddEvent();
			$elem.nextbtn.on('click', self.nextFn);
			$elem.prevbtn.on('click', self.prevFn);
			var swipeOptions = _util.makeSwipeEvt(self.nextFn, self.prevFn);
			$elem.ul.swipe( swipeOptions );
			$elem.li.find('a').on('click', listLinkClick);
			if( $elem.li.length > 1  ) {
				$elem.li.find('a').attr('tabindex', -1);
			}

			if( self.var.auto && !extendtype ) { autoPlayEvent() }
			self.resizeEvent();

		};

		self.resizeEvent = function( e ){
			if( typeof slideElemVar.viewLen == "number" && slideElemVar.slideType.length <= 1) return;
			$win.on('resize', self.resizeSet);
		};

		this.removeEvent = function( ) {
			$elem.nextbtn.off('click');
			$elem.prevbtn.off('click');
			//$elem.nextbtn.off('focusout');
			//$elem.prevbtn.off('focusout');

			$elem.ul.swipe('disable');
			if( self.var.auto && !extendtype ) {
				$elem.playbtn.off('click keydown');
				$elem.stopbtn.off('click keydown');
			}

			if( $elem.nextbtn.length > 0 && $elem.prevbtn.length > 0 ) {
				$elem.nextbtn.off('keydown');
				$elem.prevbtn.off('keydown');
			}
			$elem.li.find('a').off('keydown');
			$elem.li.find('a').off('focusout');
			$elem.li.find('a').off('focus');

			$win.off('resize', self.resizeSet)
		};

		function lengthCheck(){
			var $link = $elem.li.find('a');
			function evtOff(){
				$link.off('focus', removeTabindex );
				$link.off('keydown', basicLiLnkKeyEvt);
				$link.off('focusout', basicLiLnkfocusOutEvt);
			}

			if( $elem.li.length <= 1 ) {
				evtOff();
			} else {
				evtOff();
				$link.on('focus', removeTabindex );
				$link.on('keydown', basicLiLnkKeyEvt);
				$link.on('focusout', basicLiLnkfocusOutEvt);
			}
		}

		this.init = function( extend ) {

			extendtype = extend;
			self.domArr = _util.domArrMake( $elem.innerDiv );
			self.setVars();
			domMake();

			self.setDesigin();
			if(self.var.auto && !extendtype ) {
				$elem.playbtn.css('display',"none");
				self.autoPlay();
			} else {
				if( !extendtype ) {
					$elem.autoControl.remove();
				}
			}

			lengthCheck()
		};

	}


})(jQuery);