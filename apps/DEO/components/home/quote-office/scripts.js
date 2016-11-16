/* js folder ##home/quote-office## */


(function($){

	function tabInit(){
		var $targetActive = $('.office-tab ul li');
		var $target = $targetActive.find('a.tab-title');

		function openEvent(e){
			var $this = $(this);
			if( $this.parent().hasClass('active') ) return;	
			if($targetActive.hasClass('active')){
				$targetActive.removeClass('active');
				$this.parent().addClass('active');
			}else{
				$this.parent().addClass('active')
			}
		}

		function addEvent() {
			$target.on('click focus', openEvent);
		}

		function init() {
			addEvent();
		}

		init();

	}

	$(document).on('ready', tabInit)

})(jQuery);