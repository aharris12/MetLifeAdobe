
$(document).ready(function(){
	emailInputSize();
});

$(window).resize(function(){
	emailInputSize();
});

function emailInputSize(){
	if ($(".hidden-xs").is(":visible") && $(".email--unsubscribe__form-fields").length > 0) {
		var minusWidth = $(".email--unsubscribe__form-fields button")[0].getBoundingClientRect().width;
		var calcWidth = (minusWidth + 10).toFixed(2);
		$(".email--unsubscribe__form-fields input").css("width", "Calc(100% - " + calcWidth + "px" + ")");
	}else{
		$(".email--unsubscribe__form-fields input").css("width", "100%");
	}
}