/* js folder ##common/extend/macro-input## */

(function($){
	"use strict";

	function fileUpInit(){
		var $fileTarget = $('.ui-uploader .uploader-hidden');
		var $findbtn = $('.file-findbtn');
		var filename;

		function fileChange(){
			var $this = $(this);
			var $fileStatText = $this.siblings('.uploader-name');
			if ( window.FileReader ) {
				filename = $this[0].files[0].name;
			} else {
				filename = $this.val().split('/').pop().split('\\').pop();
			}
			$fileStatText.text(filename);
		}

		function addEvent(){
			$fileTarget.on('change', fileChange );
			$findbtn.on( 'click', function(){
				$fileTarget.trigger('click');
			} );
		}

		addEvent();
	}

	$(document).on('ready', fileUpInit );

})(jQuery);