/* inter-section/faqs/faq script */


(function($){

	function faqInit() {
		var $elem = {};
		$elem.el =  $('.comp-faq-con');
		$elem.list = $elem.el.find('li');
		$elem.openBtn = $elem.list.find('.comp-faq-question button');
		$elem.openClass = '.comp-faq-answer';
		$elem.allOpen = $('.comp-fap-allopen');
		$elem.allClose = $('.comp-fap-allclose');

		var faq = new window[sitename].APPS.FAQ( $elem );
		faq.init();
	}
	
	$(document).on('ready', faqInit)
	
})(jQuery);
