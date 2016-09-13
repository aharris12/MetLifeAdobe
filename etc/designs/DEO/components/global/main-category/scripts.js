/* global/main-category script */


(function($){
	"use strict";

	var maincate = function( $el, activeClass  ){
		var self = this;
		var $elem = $el,
			classname = activeClass || 'active';
		var focusable = window[sitename].MDOBJ.FOCUSABLE( $elem.wrap );

		var handler = {
			el : function( $this ){
				var $submenu = $this.next( $elem.openbox );
				return $submenu;
			},
			openMenu : function(){
				var $this = $(this);
				var _thisopenbox = handler.el( $this );
				handler.closeMenu();
				$elem.wrap.addClass('active');
				$this.addClass('active');
				_thisopenbox.addClass('active');
			},
			closeMenu : function(){
				$elem.wrap.removeClass( classname );
				$elem.ovMenu.removeClass( classname );
				$elem.openbox.removeClass( classname );
			},
			closeCheck : function(e){
				if( $(e.target).hasClass('main-cat-listwrap') ) {
					handler.closeMenu();
				}
			},
			lastkeydown : function(e){

				var keyCode = e.keyCode || e.which;
				if (keyCode == 9){
					if (!e.shiftKey) {
						handler.closeMenu();
					}
				}
			}
		};

		function addEvent(){
			//$elem.wrapList.children().on('mouseenter', handler.closeCheck);
			$elem.openbox.on('mouseleave', handler.closeMenu);
			$elem.wrap.on('mouseover mouseout', handler.closeCheck);
			$elem.ovMenu.on('mouseenter', handler.openMenu);
			$elem.ovMenu.on('focus', handler.openMenu);

			$(focusable.el_lastFocus).on('keydown', handler.lastkeydown);
		}

		this.init = function(){
			addEvent();
		}
	};

	window[sitename].APPS.MAINCATE = maincate
})(jQuery);




(function($){
	function mainCategory() {

		var activeClass = 'active';
		var $elem = {};
		$elem.wrap = $('.main-category');
		$elem.listwrap = $elem.wrap.find('.main-cat-listwrap');
		$elem.ovMenu = $elem.wrap.find('.main-menu');
		$elem.openbox = $elem.wrap.find('.main-cat-submenu');

		var maincate = new window[sitename].APPS.MAINCATE( $elem, activeClass );
		maincate.init()

	}
	$(document).on('ready', mainCategory);
})(jQuery);