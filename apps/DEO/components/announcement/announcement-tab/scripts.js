/* js folder ##announcement/announcement-tab## */


(function($){
	"use strict";
	$.fn.faqInnerTab = function(options){

		return this.each(function(){

			var $this = $(this),
				$tabMenu = $this.find('button'),
				$tabContent = $this.find('.announcement-tabsec'),
				len = $tabMenu.length,
				tabConInner = [],
				reg = /^A$|AREA|INPUT|TEXTAREA|SELECT|BUTTON/gim,
				onclass = "active";


			$tabContent.find('*').each(function(i, val) {
				if(val.tagName.match(reg) && parseInt(val.getAttribute("tabIndex")) !== -1) {
					//tabConInner.indexOf(  )
					var tagName = val.tagName.toLowerCase();
					if(tabConInner.indexOf( tagName ) > -1) return;
					tabConInner.push(tagName);
				}
			});
			
			var kwcagKeyArry = [];
			var idx;

			function secShow() {
				$tabContent.eq(idx).addClass(onclass);
				tabConInner.forEach( function(value){
					removeTabIndex( value );
				});
			}
			
			function secHide(){
				$tabContent.removeClass('active');
				tabConInner.forEach( function(value){
					removeTabIndex( value );
				});
			}
			
			function showHandler() {
				var $this = $(this);
				idx = $this.index();
				if($this.hasClass(onclass)) return;
				kwcagKeyArry = window[sitename].MDOBJ.FOCUSABLE( $tabContent.eq( idx ) );
				$tabMenu.removeClass(onclass);
				$this.addClass(onclass);
				secHide();
				secShow();
			}

			function removeTabIndex( value ) {
				$tabContent.eq(idx).find(value).removeAttr('tabindex');
			}

			function addTabIndex( value ) {
				$tabContent.eq(idx).find(value).attr('tabindex','-1');
			}

			function kwcagTabMenuKeydown(e){
				var $this = $(this);
				var keyCode = e.keyCode || e.which;
				idx = $this.index();
				tabConInner.forEach( function(value){
					removeTabIndex( value );
				});

				kwcagKeyArry = window[sitename].MDOBJ.FOCUSABLE( $tabContent.eq( idx ) );
				if (keyCode == 9){
					if (!e.shiftKey) {
						if(!$tabContent.eq(idx).find('a').length) return;
						e.preventDefault();
						$(kwcagKeyArry.el_firstFocus).focus();
					} else {
						if(idx != 0) idx--;
						secHide();
						secShow();
					}
				}
			}

			function kwcagtabContentInnerKeydown(e){
				var $this = $(this);
				var keyCode = e.keyCode || e.which;
				if (keyCode == 9){
					if (!e.shiftKey) {
						if($this[0] == $(kwcagKeyArry.el_lastFocus)[0] && len != idx+1 ){
							e.preventDefault();
							$tabMenu.eq(idx+1).focus();
							tabConInner.forEach( function(value){
								addTabIndex( value );
							});
						}
					} else {
						if($this[0] == $(kwcagKeyArry.el_firstFocus)[0] && idx != 0 ){
							e.preventDefault();
							$tabMenu.eq(idx).focus();
							tabConInner.forEach( function(value){
								addTabIndex( value );
							});
						}
					}
				}
			}

			function innerEvent( value, i, arr ) {
				removeTabIndex( value );
				$tabContent.find(value).on('keydown', kwcagtabContentInnerKeydown);
			}

			function addEvent() {
				$tabMenu.on('focus click', showHandler);
				$tabMenu.on('keydown', kwcagTabMenuKeydown);
				//tabConInner.forEach( $ )
				if( tabConInner.length == 0 ) return;
				tabConInner.forEach( innerEvent )
			}
			
			function init() {
				idx = 0;
				kwcagKeyArry = window[sitename].MDOBJ.FOCUSABLE( $tabContent.eq( idx ) );
				addEvent();
				secShow();
				$tabMenu.eq(idx).addClass('active');
			}

			if(options == 'init') {
				init();
			}


		});
	};

})(jQuery);



(function($){

	function faqHtmlTab(){
		var $elem = $('.announcement-tab');
		if($elem.length > 0) {
			$elem.faqInnerTab('init');
		}
	}

	$(document).on('ready', faqHtmlTab)

})(jQuery);