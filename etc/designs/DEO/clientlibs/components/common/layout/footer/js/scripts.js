/* common/layout/footer script */



(function($){



	function footerInit() {
		var $win = $(window);
		var $doc = $(document);

		function siteUse(){
			var $mob_siteUse = $('.foot-siteuse-mob'),
				$mob_usebtn = $mob_siteUse.find('button');

			var $list = {};
			$list.wrap = $('.foot-siteuse-list');
			$list.list = $list.wrap.find('ul');
			var oldDevice;
			var focusable = window[sitename].MDOBJ.FOCUSABLE( $list.list );


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

		function init(){
			var uselist = new siteUse();
			uselist.init();

			var $elem = {};
			$elem.target = $('.foot-country-select');
			$elem.el = $elem.target;
			$elem.button = $elem.el.find('button');
			$elem.wrap = $elem.el.find('.foot-country-content-wrap');
			$elem.list = $elem.el.find('.foot-country-content');
			$elem.link = $elem.el.find('a');
			$elem.idx = $elem.target.index();
			$elem.len = $elem.el.length;

			function docAddEvent(){
				if($elem.button.hasClass('active')) {
					$doc.off('click touchEnd',countryCheck);
					$doc.on('click touchEnd',countryCheck);
				} else {
					$doc.off('click touchEnd',countryCheck);
				}
			}

			function countryCheck(e){
				if(!$elem.button.hasClass('active')) return;
				var $target = $(e.target);
				if($target.hasClass('foot-nation-list') || $target.hasClass('country-group-name') || $target.hasClass('country-flag') || $target.hasClass('country-base') || $target[0].innerHTML === $elem.button.find('span')[0].innerHTML) return;
				country.listOpen($elem.button, $elem, docAddEvent);
			}

			var country = new window[sitename].APPS.DROPDOWN( $elem, countryCheck );
			country.init();
		}

		init();
	}

	$(document).on('ready', footerInit)

})(jQuery);