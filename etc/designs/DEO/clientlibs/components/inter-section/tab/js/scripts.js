/* inter-section/tab script */


(function($){
	"use strict";

	function tabinit(){
		var $doc = $(document);
		var $elem = {};
		var $el = $('.tab-drop-listwrap');
		var tabmob = [];
		var activeClass = ".list-active";

		function closeCheck(e){
			//console.log(e);
			if(e) {
				$el.each(function (idx) {
					var $evBtn = $el.eq(idx).find('button');
					if ($evBtn.hasClass('active')) {
						closeList(e, idx, $evBtn);
					}
				});
			} else {
				var idx = $el.index( $(activeClass) );
				var $evBtn = $el.eq(idx).find('button');
				var $list = {};
				$list.wrap = $el.eq(idx).find('.tab-drop-list');
				$list.list = $el.eq(idx).find('.tab-container');
				tabmob[ idx ].listOpen($evBtn, $list);
			}
		}

		function closeList(e, idx, $evBtn) {
			var $target = $(e.target);
			var $list = {};
			$list.wrap = $el.eq(idx).find('.tab-drop-list');
			$list.list = $el.eq(idx).find('.tab-container');

			if($target[0].tagName.toUpperCase() == "A") return;
			tabmob[ idx ].listOpen($evBtn, $list);
		}

		function init () {
			$el.each(function(idx){
				$elem.target = $el;
				$elem.el = $elem.target.eq(idx);
				$elem.button = $elem.el.find('button');
				$elem.wrap = $elem.el.find('.tab-drop-list');
				$elem.list = $elem.el.find('.tab-container');
				$elem.link = $elem.el.find('a');
				$elem.idx = idx;
				$elem.len = $elem.el.length;
				tabmob[idx] = new window[sitename].APPS.DROPDOWN( $elem, closeCheck );
				tabmob[idx].init();
			});
		}

		init()
	}

	$(document).on('ready', tabinit)

})(jQuery);