$(document).ready(function(){
	removingPaddingContextualLinksContactForm();
	removingPaddingContextualLinksProductTiles();
	removingPaddingContextualLinksSmallCards()
});

$(window).resize(function(){
	removingPaddingContextualLinksContactForm();
	removingPaddingContextualLinksProductTiles();
	removingPaddingContextualLinksSmallCards()
});

function removingPaddingContextualLinksContactForm() {
	if (getViewport() != "mobile") {
		var container = $(".container.contextual-links");
		if (container.length > 0) {
			var thisContainer = container.next("div");
			if (thisContainer.hasClass("contact-advisory")) {
				thisContainer.find(".container").css("cssText", "padding-top: 0px !important;");
				thisContainer.find(".container").find(".wrapper").css("cssText", "padding-top: 0px !important;");
				var h = $('.contact-container--form-card').outerHeight();
				$(".contact-container--form-card form").click(function() {
					$('.contact-container--form-card .hidden-field').show();
				});
				$('.form-card__img__inner').css('height', h + 'px');
			}
		}
	}
}

function removingPaddingContextualLinksProductTiles() {
	if (getViewport() != "mobile") {
		var container = $(".container.contextual-links");
		if (container.length > 0) {
			var thisContainer = container.parent().prev().find(".product-card-parsys");
			var prevContainer = container.prev("div");
			if (thisContainer.length > 0 && prevContainer.length == 0) {
				thisContainer.find(".tile-container").last().find(".wrapper").css("cssText", "margin-bottom: -10px !important;");
				thisContainer.last(".tile-container").find(".wrapper").find(".product-row__tile").each(function () {
					$(this).css("cssText", "margin-bottom: 0px !important;");
				});
				thisContainer.last("tile-container").find(".single-promo").css("cssText", "margin-bottom: 0px !important;");
				thisContainer.last("tile-container").find(".double-promo").css("cssText", "margin-bottom: 0px !important;");
				thisContainer.last("tile-container").find(".triple-promo").css("cssText", "margin-bottom: 0px !important;");
			}
		}
	}
}

function removingPaddingContextualLinksSmallCards() {
	if (getViewport() != "mobile") {
		var container = $(".container.contextual-links");
		if (container.length > 0) {
			var thisContainer = container.prev("div");
			if (thisContainer.hasClass("small-product-container")) {
				thisContainer.find(".wrapper ").css("cssText", "margin-bottom: 0px !important;");
			}
		}
	}
}