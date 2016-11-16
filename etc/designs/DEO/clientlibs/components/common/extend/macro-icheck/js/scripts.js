/* common/extend/macro-icheck script */


(function($){
	"use strict";

	var $ui_radio = $('.ui-radio');
	var $ui_checkbox = $('.ui-checkbox');

	if( $ui_radio.length > 0) {
		$('input[type="radio"]:visible').iCheck({
			checkboxClass: 'icheckbox_minimal',
			radioClass: 'iradio_minimal',
			increaseArea: '20%',
			aria: true
		});
	}

	if( $ui_checkbox.length > 0) {
		$('input[type="checkbox"]:visible').iCheck({
			checkboxClass: 'icheckbox_minimal',
			radioClass: 'iradio_minimal',
			increaseArea: '20%',
			aria: true
		});
	}


})(jQuery);