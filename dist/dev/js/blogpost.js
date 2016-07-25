/***** Blog Post Begins ***********************************************************/
// Hide/show popular blog post
$(".showPopular").click(function () {
	$(".showRecent").removeClass("blog-sidebar__header--selected");
	$(this).removeClass("blog-sidebar__header--deselected");
	$(this).addClass("blog-sidebar__header--selected");
	$(".showRecent").addClass("blog-sidebar__header--deselected");
	$(".blog-sidebar__content--recent").show();
	$(".blog-sidebar__content--popular").hide();
});

//Hide/show recent blog posts
$(".showRecent").click(function () {
	$(".showPopular").removeClass("blog-sidebar__header--selected");
	$(this).removeClass("blog-sidebar__header--deselected");
	$(this).addClass("blog-sidebar__header--selected");
	$(".showPopular").addClass("blog-sidebar__header--deselected");
	$(".blog-sidebar__content--recent").show();
	$(".blog-sidebar__content--popular").hide();

});

if ($(".bread-crumb span:last").text().length > 100) {
	$(".bread-crumb span:last").text($(".bread-crumb span:last").text().substring(0, 97) + "...");
}

$('video').click(function () {
	if (this.paused) {
		this.play();
	}
	else {
		this.pause();
	}
});

$('video').hover(function toggleControls() {
	if (this.hasAttribute("controls")) {
		this.removeAttribute("controls")
	} else {
		this.setAttribute("controls", "controls")
	}
});

$('.enlarge').click(function () {
	if ($(this).attr('src')) {
		$('#imgEnlarge').attr('src', $(this).attr('src'));
		$('#imgCaption').text($(this).attr('alt'));
	}
});

function blogCategoryMobileDesign() {
	if ($(".hidden-xs").is(":visible") == false) {
		$(".blog-sidebar").insertAfter(".mightAlsoLike");
	}
	else {
		if ($(".body").length != 0) {
			$(".blog-sidebar").insertAfter(".body");
		}
		if ($(".blog-article-list").length != 0) {
			$(".blog-sidebar").insertAfter(".blog-article-list");
		}
	}
}


/*
 // Conversion of video seconds to format
 function secondsToHms(d) {
 d = Number(d);
 var h = Math.floor(d / 3600);
 var m = Math.floor(d % 3600 / 60);
 var s = Math.floor(d % 3600 % 60);
 return ((h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s);
 }
 */
/***** Blog Post End ***********************************************************/
