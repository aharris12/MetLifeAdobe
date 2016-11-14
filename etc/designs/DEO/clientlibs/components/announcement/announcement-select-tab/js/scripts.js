/* announcement/announcement-select-tab script */



(function($){
	"use strict";
	$.fn.faqInnerSelectTab = function(options){

		return this.each(function(){

			var $this = $(this),
				$select = $this.find('select'),
				$selectBtn = $this.find('.announcement-select-go'),
				$selectCon = $this.find('.announcement-select-sec');

			function selectShow(idx) {
				$selectCon.eq(idx).addClass('active');
			}

			function selectHide() {
				$selectCon.removeClass('active');
			}

			function selectHandler() {
				var idx = $select.prop('value');
				selectHide();
				selectShow(idx);
			}
			
			function addEvent() {
				$selectBtn.on('click', selectHandler)
			}
			
			function init() {
				addEvent();
				$selectCon.eq(0).addClass('active');
			}

			if(options == 'init') {
				init();
			}

		});
	};

})(jQuery);



(function($){

	function faqHtmlSelectTab(){
		var $elem = $('.announcement-select-tab');
		if($elem.length > 0) {
			$elem.faqInnerSelectTab('init');
		}
	}

	$(document).on('ready', faqHtmlSelectTab)

})(jQuery);