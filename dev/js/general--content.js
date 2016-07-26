// General Content Slide Toggle
$(".expand_button").click(function () {
		$(this).siblings(".unexpanded").slideToggle();
		$(this).find(".expand_button_open").toggleClass("hidden");
		$(this).find(".expand_button_close").toggleClass("hidden");
});
