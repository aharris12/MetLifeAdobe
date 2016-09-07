$(window).scroll(function () {
	$('.in_view').bind('inview', function (event, visible) {
		if (visible == true) {
			$(this).addClass('on');
		}
	});
});

$(window).on("load", function () {
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