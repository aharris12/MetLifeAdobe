$(".generic_content .expand_button").click(function () {
	$(this).parent(".generic_content").find(".wrapper-general").find(".unexpanded").slideToggle();
	$(this).find(".expand_button_open").toggleClass("hidden");
	$(this).find(".expand_button_close").toggleClass("hidden");
	if ($(".rate_table").length > 0) {
		resizeRateTable();
	}
});