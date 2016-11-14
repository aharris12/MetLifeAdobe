/* js folder ##common/layout/header## */

(function($){
	function headerInit(){

		var $win = $(window);
		var $html = $('html');
		var $body = $('body');

		var $header = $('.header-container');
		var $headerUtils = $('.header-utils');
		var $menu = $('.allmenu-container');
		var $menuWrap = $('.allmenu-wrap');
		var $menuOpenBtn = $('.allmenu-btn-open');
		var $menuCloseBtn = $('.allmenu-btn-close');
		var $schOpenBtn = $('.header-search-open');
		var $schWrap = $('.header-search-wrap');
		var $aside = $('.header-aside');
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

			this.openEffect = function(){
				$schInput.val('');
				$schOpenBtn.addClass('active');
				$schWrap.addClass('active');
				$header.addClass('sch-active');
				$(document).on('click', docClose);
			};

			this.closeEffect = function(){
				$schOpenBtn.removeClass('active');
				$schWrap.removeClass('active');
				$header.removeClass('sch-active');
				$schWrap.find('input').val('');
				$schWrap.find('label').removeClass('screen_out');

				$(document).off('click', docClose);
			};

			this.resizeSet = function() {
				device = window[sitename].VARS.IS_VIEWTYPE;

				function removeSet(){
					removeStyle();
					addClassSet();

				}

				function removeStyle() {
					/*$header.removeAttr('style');
					$headerUtils.removeAttr('style');*/
					$schWrap.removeAttr('style');
					$header.off('webkitTransitionEnd oTransitionEnd transitionend msTransitionEnd', removeSet );

				}

				function addClassSet(){
					/*$header.addClass('sch-active');
					$schOpenBtn.addClass('active');
					$schWrap.addClass('active');*/
					//$header.off('webkitTransitionEnd oTransitionEnd transitionend msTransitionEnd', addClassSet );

				}

				if( $menu.hasClass('active') && device == "mobile" && $header.hasClass('sch-active') ) {
					$schOpenBtn.removeClass('active');
					$schWrap.removeClass('active');
				}


				if(oldDevice == device) return;
				/*callResizePos( function(){
				 $header.addClass('sch-active');
				 $schOpenBtn.addClass('active');
				 $schWrap.addClass('active');
				 });*/

				if(oldDevice == "mobile" && $header.hasClass('sch-active')) {
					if(!$html.hasClass('ie9')) {
						/*$header.css({ 'z-index' : '-1' });
						$headerUtils.css({ 'z-index' : '1' });*/
						$schWrap.css({ 'transition-duration': '0s' });
						/*$header.removeClass('sch-active');
						$schOpenBtn.removeClass('active');
						$schWrap.removeClass('active');*/

						$header.on('webkitTransitionEnd oTransitionEnd transitionend msTransitionEnd', removeSet );
					}
				}


				if($menu.hasClass('active') && device != "mobile") {
					$header.addClass('sch-active');
					$schOpenBtn.addClass('active');
					$schWrap.addClass('active');
				}

				if($menu.hasClass('active') && device == "mobile") {
					//$header.css({ 'z-index' : '-1' });
					//$headerUtils.css({ 'z-index' : '1' });
					//$schWrap.css({ 'transition-duration': '0s' });
					//self.closeEffect();
					//$header.on('webkitTransitionEnd oTransitionEnd transitionend msTransitionEnd', addClassSet );
				}
				/*$schWrap.removeClass('active');
				$schOpenBtn.removeClass('active');
				$schWrap.removeAttr('style');
				$schOpenBtn.removeAttr('style');*/
				oldDevice = device;
			};




			function docClose(e) {
				var $target = $(e.target);
				var $btnimg = $target.parent();
				//console.log($target);
				if($btnimg.hasClass('header-search-input') || $btnimg.hasClass('input-wrap') || $btnimg.hasClass('allmenu-btn-open') || $btnimg.hasClass('allmenu-btn-close') || $target.hasClass('header-search-inputbox') || $target.hasClass('header-search-open') || $btnimg.hasClass('header-search-open') || $target.hasClass('header-search-submit')) return;
				self.closeEffect();
			}

			var kwcagHeaderSch = {
				openBtn : function(e){
					if(e.shiftKey && e.keyCode == 9) {
					} else if (e.keyCode == 9){
						e.preventDefault();
						self.openEffect();
						window[sitename].MDOBJ.DELAY_FUNC(function(){
							$schInput.focus();
						}, 100);
						if( $menu.hasClass('active') && device=='mobile') {
							menu.menuClose();
						}
					}
					if( e.keyCode == 13) {
						e.preventDefault();
						self.openEffect();
						window[sitename].MDOBJ.DELAY_FUNC(function(){
							$schInput.focus();
						}, 100);
						if( $menu.hasClass('active') && device=='mobile') {
							menu.menuClose();
						}
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
				if(device != 'mobile') {
					$aside.css('display', 'none');
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
				if(device != 'mobile') {
					$aside.css('display', 'block');
				}
				$menuOpenBtn.css('display','block');
				$menuCloseBtn.css('display','none');
				$menu.removeClass('active');
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
				if(device == 'mobile') {
					$aside.css('display', 'block');
				} else {
					if($menu.hasClass('active')) {
						$aside.css('display', 'none');
					} else {
						$aside.css('display', 'block');
					}
				}
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
					window[sitename].MDOBJ.DELAY_FUNC(function(){
						$menuWrap.css('height', screenHeight - $header.height());
					},300);
				} else {
					//$body.removeAttr('style');
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
			$body.css('overflow','hidden');

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
				$body.removeAttr('style');

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