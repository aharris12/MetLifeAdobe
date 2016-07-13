$(window).scroll(function () {
	$('.in_view').bind('inview', function (event, visible) {
		if (visible == true) {
			$(this).addClass('on');
		}
	});
});

$(document).ready(function () {
	$('.in_view').bind('inview', function (event, visible) {
		if (visible == true) {
			$(this).addClass('on');
		}
	});
});

$('.in_view').bind('inview', function (event, visible) {
	if (visible == true) {
		$(this).addClass('on');
	}
});