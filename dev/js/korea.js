
/* js folder ##global/sub-category## */

(function($){
	"use strict";
	$.fn.subCategory = function(options){

		return this.each(function(){

			var $this = $(this),
				$win = $(window),
				$openBtn = $this.find('button'),
				$openList = $this.find('.sub-cat-list');
			var openHeight;

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
				if(window[sitename].VARS.IS_VIEWTYPE == 'mobile') {
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
				}
			}

			function addEvent() {
				$openBtn.on('click', openToggle);
				$openBtn.on('keydown', keydownEvt);
				$(el_lastFocus).on('keydown', lastKeydownEvt);
				$win.on('resize', resizeSet);
			}

			function init() {
				addEvent();
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

(function($){

	$.fn.toggleShare = function( options ){


		return this.each(function(){
			var $this = $(this),
				$openBtn = $this.find('button'),
				$shareListWrap = $this.find('.share-sns-listwrap'),
				$shareList = $this.find('.share-sns-list'),
				$shareListlnk = $shareList.find('a'),
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
/* js folder ##global/header## */

(function($){
	function headerInit(){

		var $win = $(window);
		var $html = $('html');
		var $body = $('body');

		var $header = $('.header-container');
		var $menu = $('.allmenu-container');
		var $menuWrap = $('.allmenu-wrap');
		var $menuOpenBtn = $('.allmenu-btn-open');
		var $menuCloseBtn = $('.allmenu-btn-close');
		var $schOpenBtn = $('.header-search-open');
		var $schWrap = $('.header-search-wrap');
		var $dep1lnk = $('.dep1lnk');
		var $submenu = $('.submenu');

		var $schInput = $schWrap.find('input');
		var $submitBtn = $schWrap.find('.header-search-submit');
		var device = window[sitename].VARS.IS_VIEWTYPE;
		var screenHeight;
		var oldDevice;
		var search, menu;

		var focusable = [],
			el_firstFocus, el_lastFocus;

		$menuWrap.find('*').each(function(i, val) {
			if(val.tagName.match(/^A$|AREA|INPUT|TEXTAREA|SELECT|BUTTON/gim) && parseInt(val.getAttribute("tabIndex")) !== -1) {
				focusable.push(val);
			}
			if((val.getAttribute("tabIndex") !== null) && (parseInt(val.getAttribute("tabIndex")) >= 0) && (val.getAttribute("tabIndex", 2) !== 32768)) {
				focusable.push(val);
			}
		});
		el_firstFocus = focusable[0];
		el_lastFocus = focusable[focusable.length-1];


		function headerSch(){
			var self = this;
			var posLeft;

			function hideWrap() {
				$schWrap.removeAttr('style');
				$schWrap.css('left', posLeft);
			}

			function makeEffectObj( close ){
				device = window[sitename].VARS.IS_VIEWTYPE;
				var effect = {};
				if(device == 'mobile') {
					effect.top = (close) ? $schOpenBtn.height() - $schWrap.height() : $schOpenBtn.height();
				} else {
					var setWidth = (device == 'tablet') ? 180 : 220;
					effect.width = (close) ? 0 : setWidth;
					effect.left = posLeft || $schOpenBtn.offset().left;
					if(!close) { $schWrap.css('width','0'); }
				}

				effect.ease = Expo.easeOut;
				if(close) { effect.onComplete = hideWrap; }
				//console.log(effect);
				return effect;
			}

			this.openEffect = function(){
				dealyCall();
				$schInput.val('');
				$schOpenBtn.addClass('active');
				$schWrap.addClass('active');
				var openobj = makeEffectObj();
				$schWrap.css('display','block');
				TweenMax.killTweensOf( $schWrap );
				TweenMax.to( $schWrap, 0.5, openobj );
				$(document).on('click', docClose)
			};

			this.closeEffect = function(){
				var closeobj = makeEffectObj( true );
				$schOpenBtn.removeClass('active');
				$schWrap.removeClass('active');
				TweenMax.killTweensOf( $schWrap );
				TweenMax.to( $schWrap, 0.5, closeobj );
				$(document).off('click', docClose)
			};

			this.resizeSet = function() {
				$schWrap.removeClass('active');
				$schOpenBtn.removeClass('active');
				$schWrap.removeAttr('style');
				$schOpenBtn.removeAttr('style');
			};

			function docClose(e) {
				var $target = $(e.target);
				var $btnimg = $target.parent();

				if($btnimg.hasClass('allmenu-btn-open') || $btnimg.hasClass('allmenu-btn-close') || $target.hasClass('header-search-inputbox') || $target.hasClass('header-search-open') || $btnimg.hasClass('header-search-open') || $target.hasClass('header-search-submit')) return;
				self.closeEffect();
			}

			var kwcagHeaderSch = {
				openBtn : function(e){
					if(e.shiftKey && e.keyCode == 9) {
					} else if (e.keyCode == 9){
						e.preventDefault();
						self.openEffect();
						$schInput.focus();
					}
					if( e.keyCode == 13) {
						e.preventDefault();
						self.openEffect();
						$schInput.focus();
					}
				},
				submitBtn : function(e){
					if(e.shiftKey && e.keyCode == 9) {
					} else if (e.keyCode == 9){
						self.closeEffect();
					}
				},
				inputBack : function(e){
					if(e.shiftKey && e.keyCode == 9) {
						self.closeEffect();
					} else if (e.keyCode == 9){
					}
				}

			};

			function dealyCall() {
				posLeft = $schOpenBtn.offset().left;
				if(device == "mobile") {
					$schWrap.css('left', '0');
				} else {
					$schWrap.css('left', posLeft);
				}

			}

			function addEvent(){
				$schOpenBtn.on('keydown', kwcagHeaderSch.openBtn);
				$submitBtn.on('keydown', kwcagHeaderSch.submitBtn);
				$schInput.on('keydown', kwcagHeaderSch.inputBack);
				$("body").on("touchend", ".wrapper", self.closeEffect);
			}

			this.init = function(){
				addEvent();
			}
		}

		function headerAllMenu(){

			var self = this;
			var $oldDep;

			function showDimmd(e){
				screenHeight = parseInt( document.body.scrollHeight  - ( document.body.scrollHeight - window.innerHeight ));
			}

			function removeDefaultEvt(e) {
				e.preventDefault();
			}

			this.menuOpen = function(){
				//alert( parseInt( $win.height() - $header.height() ) )

				screenHeight = parseInt( document.body.scrollHeight  - ( document.body.scrollHeight - window.innerHeight ));
				if(device == "mobile") {
					$menuWrap.css({
						left: -$body.width(),
						height: screenHeight - $header.height()
					});
					TweenMax.to($menuWrap, 0.5, { left:0, ease:Expo.easeOut, onComplete : showDimmd });
					$body.css('overflow','hidden');
				} else {

				}
				$menu.addClass('active');
				$menuCloseBtn.css('display','block');
				$menuOpenBtn.css('display','none');
			};

			this.menuClose = function(){
				if(device == "mobile") {
					$menuWrap.removeAttr('style');
					$body.removeAttr('style');
				}
				$menu.removeClass('active');
				$menuOpenBtn.css('display','block');
				$menuCloseBtn.css('display','none');
			};


			function openEffect( $this ){
				$this.css({
					'display' : 'block',
					'height' : '0'
				});

				var openHeight = $this.find('ul').height();
				TweenMax.to( $this, 0.5, {height : openHeight, ease:Expo.easeOut} )
			}

			function depHide( $old, $target ) {
				$target.removeAttr('style');
				$old.removeClass('active');
			}

			function oldClose( $old ){
				var $oldElem = $old.next();
				TweenMax.killTweensOf($oldElem);
				TweenMax.to( $oldElem, 0.5, {height : 0, ease:Expo.easeOut, onComplete : depHide, onCompleteParams:[$old, $oldElem]} )
			}

			function subOpen(e, $keythis){
				if(e.type != 'focus' && window[sitename].VARS.IS_VIEWTYPE != 'mobile') {
					e.preventDefault();
				}

				var $this = (e.type != "keydown") ? $(this) : $keythis;
				var $thisDep2 = $this.next();

				if( $this.hasClass('active') ) {
					oldClose($this);
				} else {
					$this.addClass('active');
					$dep1lnk.each(function () {
						var $this = $(this);
						if ($this.hasClass('active')) {
							oldClose($this);
						}
					});
					openEffect($thisDep2);
				}
				$oldDep = $this;
			}

			this.resizeSet = function(){
				addEvent();
				$submenu.removeAttr('style');
				$dep1lnk.removeClass('active');
			};

			function mobFocus(e){
				if(window[sitename].VARS.IS_VIEWTYPE != 'mobile') return;
				var $this = $(this);
				var keyCode = e.keyCode || e.which;
				if (keyCode == 9) {
					if (!e.shiftKey) {
						subOpen( e, $this );
					}
				}
			}

			function addEvent(){
				/* kwcag 처리 */
				if(device == "mobile") {
					$dep1lnk.off('click', subOpen);
					$dep1lnk.on('click', subOpen);
					$dep1lnk.off('keydown', mobFocus);
					$dep1lnk.on('keydown', mobFocus);
				} else {
					$dep1lnk.off('click', subOpen);
				}
			}

			this.init = function(){
				addEvent();
			}
		}

		search = new headerSch();
		search.init();
		menu = new headerAllMenu();
		menu.init();

		function resizeSet() {
			device = window[sitename].VARS.IS_VIEWTYPE;
			if ($menu.hasClass('active')) {
				screenHeight = parseInt( document.body.scrollHeight  - ( document.body.scrollHeight - window.innerHeight ));
				if(device == 'mobile') {
					$body.css('overflow','hidden');
					$menuWrap.css('height', screenHeight - $header.height());
				} else {
					$body.removeAttr('style');
					$menuWrap.removeAttr('style');
				}
			} else {
				$body.removeAttr('style');
				$menuWrap.removeAttr('style');
			}
			if(device == oldDevice) return;
			search.resizeSet();
			menu.resizeSet();
			oldDevice = device;
		}

		function activeCheck(){
			var $this = $(this);
			if( !$this.hasClass('active') ) {
				search.openEffect();
				menu.menuClose();
			} else {
				search.closeEffect();
			}
		}

		function headermenuOpen(){
			$body.removeClass('minisize');
			//$header.removeClass('minisize');
			menu.menuOpen();
			$menuCloseBtn.focus();

			if($menu.hasClass('active')) {
				$(document).off('click');
				if (device != 'mobile' && !$schWrap.hasClass('active')) {
					search.openEffect();
					$(document).off('click')
				}
			}
			if(device == 'mobile'){
				search.closeEffect();
			}

		}

		function headermenuClose() {
			if(!$menu.hasClass('active')) return;
			if($win.scrollTop() != 0) {
				$body.addClass('minisize');
				//$header.addClass('minisize');
			} else {
				$body.removeClass('minisize');
				//$header.removeClass('minisize');
			}
			menu.menuClose();
			$menuOpenBtn.focus();
			if(device != 'mobile') {
				search.closeEffect();
			}
		}

		function scrollTopCheck() {
			if($win.scrollTop() != 0) {
				if($menu.hasClass('active')) return;
				$body.addClass('minisize');
				//$header.addClass('minisize');
			} else {
				$body.removeClass('minisize');
				//$header.removeClass('minisize');
			}
		}

		function otherClose(){
			var $mainCat = $('.main-cat-submenu');
			var mainCatLen = $mainCat.length;
			if(mainCatLen > 0) {
				$mainCat.trigger('mouseleave');
			}

		}

		function addEvent(){
			$header.on('mouseover', otherClose);
			$schOpenBtn.on('click', activeCheck);
			$menuOpenBtn.on('click', headermenuOpen);
			$menuCloseBtn.on('click', headermenuClose );

			$menuOpenBtn.on({
				'keydown' : function(e){
					if (e.target == this){
						var keyCode = e.keyCode || e.which;
						if (keyCode == 9){

							if (!e.shiftKey){
								headermenuOpen();
								e.preventDefault();
								$(el_firstFocus).focus();
							}

						}
					}
				}
			});

			$(el_firstFocus).on({
				'keydown' : function(e){
					if (e.target == this){
						var keyCode = e.keyCode || e.which;
						if (keyCode == 9){

							if (e.shiftKey){
								headermenuClose();
								e.preventDefault();
								$menuOpenBtn.focus();

							}
						}
					}
				}
			});

			$(el_lastFocus).on({
				'keydown' : function(e){
					var keyCode = e.keyCode || e.which;
					if (keyCode == 9){
						if (!e.shiftKey){
							headermenuClose();
						}
					}
				}
			});

			$win.on('resize', resizeSet);
			$win.on('scroll', scrollTopCheck);
		}

		function init(){
			device = window[sitename].VARS.IS_VIEWTYPE;
			screenHeight = parseInt( document.body.scrollHeight  - ( document.body.scrollHeight - window.innerHeight ));
			addEvent();
			//alert($win.height())
		}

		init();
		scrollTopCheck();
	}


	$(document).on('ready', headerInit)


})(jQuery);
/* js folder ##global/gnb## */

(function($){

	var $win = $(window);
	var $mobgnbcontainer = $('.gnb-container');
	var $mobopen = $('.mob-menu-open');
	var $mobclose = $('.mob-menu-close');
	var $gnb = $('.gnb-wrap');

	function menuOpen(){
		TweenMax.to($gnb, 0.7, {css:{
			left:0
		}, ease: Expo.easeOut});
		$mobgnbcontainer.addClass('active');
	}

	function menuClose() {
		TweenMax.to($gnb, 0.7, {css:{
			left:-300
		}, ease: Expo.easeOut});
		$mobgnbcontainer.removeClass('active');

	}

	function resizeFn() {
		$gnb.removeAttr('style');
	}

	function addEvent() {
		$mobopen.on('click', menuOpen);
		$mobclose.on('click', menuClose);
		$win.on('resize', resizeFn);
	}

	function mobMenuInit() {
		addEvent()
	}

	$(document).on('ready', mobMenuInit)

})(jQuery);
/* js folder ##global/footer## */


(function($){



	function footerInit() {
		var $win = $(window);
		var $doc = $(document);

		function comphide( $target ){
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
				obj.onCompleteParams = [$list.wrap];
			}
			return obj;
		}

		function listOpen( $this, $list, callback ){
			var efObj = makeObj( $this.hasClass('active'), $this, $list );
			TweenMax.killTweensOf( $list.wrap );
			TweenMax.to( $list.wrap, 0.5 , efObj);
			if(callback != undefined) {
				callback();
			}
		}





		function siteUse(){
			var $mob_siteUse = $('.foot-siteuse-mob'),
				$mob_usebtn = $mob_siteUse.find('button');

			var $list = {};
			$list.wrap = $('.foot-siteuse-list');
			$list.list = $list.wrap.find('ul');
			var oldDevice;
			var focusable = window[sitename].MDOBJ.FOCUSABLE( $list.list );


			function openEffect(){
				var $this = $(this);
				listOpen($this, $list)
			}

			function kwcagOpenEffect(e) {
				var $this = $mob_usebtn;

				var keyCode = e.keyCode || e.which;
				if (keyCode == 9){
					if (!e.shiftKey) {
						if(!$this.hasClass('active')) {
							listOpen($this, $list)
						}
						if($(this).html() == $(focusable.el_lastFocus).html()) {
							listOpen($this, $list)
						}
					}
					if (e.shiftKey) {
						if($this.hasClass('active')) {
							listOpen($this, $list)
						}
					}
				}
			}

			function resizeSet(){
				if(window[sitename].VARS.IS_VIEWTYPE == oldDevice) return;
				if(window[sitename].VARS.IS_VIEWTYPE == 'mobile') {
					$mob_usebtn.off('click', openEffect);
					$mob_usebtn.on('click', openEffect);
				} else {
					$list.wrap.removeAttr('style');
					$mob_usebtn.removeClass('active');
					$mob_usebtn.off('click');
				}
				oldDevice = window[sitename].VARS.IS_VIEWTYPE;
			}

			function addEvent() {
				if(window[sitename].VARS.IS_VIEWTYPE == 'mobile') {
					$mob_usebtn.on('click', openEffect);
					$mob_usebtn.on('keydown', kwcagOpenEffect);
					$(focusable.el_lastFocus).on('keydown', kwcagOpenEffect);
				}

				$win.on('resize', resizeSet);
			}

			this.init = function(){
				addEvent();
			};
		}

		function countrySelect(){
			var $country = $('.foot-country-select'),
				$countryBtn = $country.find('button');

			var $list = {};
			$list.wrap = $('.foot-country-content-wrap');
			$list.list = $list.wrap.find('.foot-country-content');

			var oldDevice;
			var focusable = window[sitename].MDOBJ.FOCUSABLE( $list.list );

			function openEffect( e, status ){
				e.stopPropagation();
				var $this = $(this);
				listOpen($this, $list, docAddEvent);
			}

			function kwcagOpenEffect(e) {
				var $this = $countryBtn;

				var keyCode = e.keyCode || e.which;
				if (keyCode == 9){
					if (!e.shiftKey) {
						if(!$this.hasClass('active')) {
							listOpen($this, $list)
						}
						if($(this).html() == $(focusable.el_lastFocus).html()) {
							listOpen($this, $list)
						}
					}
					if (e.shiftKey) {
						if($this.hasClass('active')) {
							listOpen($this, $list)
						}
					}
				}
			}

			function resizeSet(){
				if(window[sitename].VARS.IS_VIEWTYPE == oldDevice) return;
				$list.wrap.removeAttr('style');
				$countryBtn.removeClass('active');
				oldDevice = window[sitename].VARS.IS_VIEWTYPE;
			}

			function countryCheck(e){
				if(!$countryBtn.hasClass('active')) return;
				var $target = $(e.target);
				if($target.hasClass('foot-nation-list') || $target.hasClass('country-group-name') || $target.hasClass('country-flag') || $target.hasClass('country-base') || $target[0].innerHTML === $countryBtn.find('span')[0].innerHTML) return;
				listOpen($countryBtn, $list, docAddEvent);
			}

			function docAddEvent(){
				if($countryBtn.hasClass('active')) {
					$doc.off('click touchEnd',countryCheck);
					$doc.on('click touchEnd',countryCheck);
				} else {
					$doc.off('click touchEnd',countryCheck);
				}
			}

			function addEvent() {
				$countryBtn.on('click', openEffect);
				$countryBtn.on('keydown', kwcagOpenEffect);
				$(focusable.el_lastFocus).on('keydown', kwcagOpenEffect);
				$win.on('resize', resizeSet);
			}

			this.init = function(){
				addEvent();
				oldDevice = window[sitename].VARS.IS_VIEWTYPE;
			};
		}

		function init(){
			var uselist = new siteUse();
			uselist.init();

			var country = new countrySelect();
			country.init();
		}

		init();
	}

	$(document).on('ready', footerInit)

})(jQuery);
/* js folder ##productTilesContainer## */

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