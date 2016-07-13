$(document).ready(function(){
	removingPaddingContextualLinksContactForm();
	removingPaddingContextualLinksProductTiles();
	removingPaddingContextualLinksSmallCards();
	removeSpacingTopDisclaimer();
});

$(window).resize(function(){
	removingPaddingContextualLinksContactForm();
	removingPaddingContextualLinksProductTiles();
	removingPaddingContextualLinksSmallCards();
	removeSpacingTopDisclaimer();
});

function spacingBottomLastProductTiles(){

}

function removingPaddingContextualLinksContactForm() {

		var container = $(".container.contextual-links");
		if (container.length > 0) {
			var thisContainer = container.next("div");
			if (thisContainer.hasClass("contact-advisory")) {
				if (getViewport() != "mobile") {
					thisContainer.find(".container").css("cssText", "padding-top: 0px !important;");
					thisContainer.find(".container").find(".wrapper").css("cssText", "padding-top: 0px !important;");

				}else{
					thisContainer.find(".container").css("cssText", "padding: 15px 0;");
				}
				var h = $('.contact-container--form-card').outerHeight();
				$(".contact-container--form-card form").click(function() {
					$('.contact-container--form-card .hidden-field').show();
				});
				$('.form-card__img__inner').css('height', h + 'px');
		}
	}
}

function removingPaddingContextualLinksProductTiles() {

		var container = $(".container.contextual-links");
		if (container.length > 0) {
			var thisContainer = container.parent().prev().find(".product-card-parsys");
			var prevContainer = container.prev("div");
			if (thisContainer.length > 0 && prevContainer.length == 0) {
				if (getViewport() != "mobile") {
					thisContainer.find(".tile-container").last().find(".wrapper").css("cssText", "margin-bottom: -10px !important; padding-top: 10px!important");
					console.log(thisContainer.find(".tile-container").last())
					thisContainer.find(".tile-container").last().find(".wrapper").find(".product-row__tile").each(function () {
						$(this).css("cssText", "margin-bottom: 0px !important;");
					});
					thisContainer.last("tile-container").find(".single-promo").css("cssText", "margin-bottom: 0px !important;");
					thisContainer.last("tile-container").find(".double-promo").css("cssText", "margin-bottom: 0px !important;");
					thisContainer.last("tile-container").find(".triple-promo").css("cssText", "margin-bottom: 0px !important;");
				}else{
					thisContainer.find(".tile-container").last().find(".wrapper").css("cssText", "margin-bottom: 10px !important; padding: 0 10px;");
					thisContainer.find(".tile-container").find(".wrapper").find(".product-row__tile").each(function () {
						$(this).css("cssText", "margin-bottom: 10px");
					});
					thisContainer.find(".tile-container").first().find(".wrapper").find(".product-row__tile").last().css("cssText", "margin-bottom: 0px !important;");
					thisContainer.last("tile-container").find(".single-promo").css("cssText", "margin-bottom: initial;");
					thisContainer.last("tile-container").find(".double-promo").css("cssText", "margin-bottom: initial;");
					thisContainer.last("tile-container").find(".triple-promo").css("cssText", "margin-bottom: initial;");
				}
		}
	}
}

function removingPaddingContextualLinksSmallCards() {

		var container = $(".container.contextual-links");
		if (container.length > 0) {
			var thisContainer = container.prev("div");
			if (thisContainer.hasClass("small-product-container")) {


				console.log(getViewport() != "mobile")
			if (getViewport() != "mobile") {
				thisContainer.find(".wrapper ").css("cssText", "margin-bottom: 0px !important;  margin-top: 20px;");
			}else{
				thisContainer.find(".wrapper ").css("cssText", "margin-bottom: 20px !important  margin-top: initial;");
			}
		}
	}
}

function removeSpacingTopDisclaimer(){

	if (getViewport() != "mobile") {
		$(".wrapper").find(".disclaimer").first().css("cssText", "margin-top: 0px;");
	}else{
		$(".wrapper").find(".disclaimer").first().css("cssText", "margin-top: -10px;");
	}

}