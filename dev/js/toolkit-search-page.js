$(".search-page-results-side-filters a").on("click", function(e){
	e.preventDefault();
	$(this).next().slideToggle();
});

$(".search-page-results-body-content-container").mouseover(function(){
	if ($(window).width() >= 751) {
		if (!$(this).hasClass("hover-state")) {
			$(this).toggleClass("hover-state");
			$(this).find(".search-page-results-body-content-hover").toggleClass("hidden");
		}
	}
});

$(".search-page-results-body-content-container").mouseout(function(){
	if ($(window).width() >= 751) {
		if ($(this).hasClass("hover-state")) {
			$(this).toggleClass("hover-state");
			$(this).find(".search-page-results-body-content-hover").toggleClass("hidden");
		}
	}
});
var isOpen = false;
$(".js-ShowFilters").on("click", function(e){
	e.preventDefault();
	$(".search-page-results-side").slideToggle();
	$(".js-ShowFilters img").toggleClass("flip-image")
	if(isOpen === false){
		isOpen = true;
	}else{
		isOpen = false;
	}

});

$(window).resize(function() {
	if ($(window).width() >= 751) {
		if(isOpen === false){
			$(".search-page-results-side").css("display" , "inline-block");
			$(".js-ShowFilters img").toggleClass("flip-image")
			isOpen = true;
		}
	}
});