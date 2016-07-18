$(document).ready(function(){
	removingPaddingContextualLinksContactForm();
	removingPaddingContextualLinksProductTiles();
	removingPaddingContextualLinksSmallCards();
	disclaimerPadding();
	removeSpacingFAQ();
	skinnyAndLargeSpacing();
	spacingCtaAndDisclaimer();
	mainPromoAndSmallMediumCards();
	contextualToolsDisclaimerPadding();
});

$(window).resize(function(){
	removingPaddingContextualLinksContactForm();
	removingPaddingContextualLinksProductTiles();
	removingPaddingContextualLinksSmallCards();
	disclaimerPadding();
	removeSpacingFAQ();
	skinnyAndLargeSpacing();
	spacingCtaAndDisclaimer();
	mainPromoAndSmallMediumCards();
	contextualToolsDisclaimerPadding();
});

function spacingCtaAndDisclaimer(){
	 var container = $(".promocard ");
	if (container.length > 0) {
		$(".disclaimer").first().css("cssText", "padding-top: 0px !important; margin-top: 0px;");
	}
}

function removingPaddingContextualLinksContactForm() {

		var container = $(".container.contextual-links");
		if (container.length > 0) {
			var thisContainer = container.next("div");
			if (thisContainer.hasClass("contact-advisory")) {
				if (getViewport() != "mobile") {
					thisContainer.find(".container").css("cssText", "padding-top: 0px !important;");
					$(".form-card").css("cssText", "padding: 0px !important; margin-top: 0px;");

				}else{
					$(".form-card").css("cssText", "padding: 15px 0 0 0;");
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
					thisContainer.find(".tile-container").last().find(".wrapper").css("cssText", "margin-bottom: -10px !important;");

					thisContainer.find(".tile-container").last().find(".wrapper").find(".product-row__tile").each(function () {
						$(this).css("cssText", "margin-bottom: 0px !important;");
					});
					thisContainer.last("tile-container").find(".single-promo").css("cssText", "margin-bottom: 0px !important;");
					thisContainer.last("tile-container").find(".double-promo").css("cssText", "margin-bottom: 0px !important;");
					thisContainer.last("tile-container").find(".triple-promo").css("cssText", "margin-bottom: 0px !important;");
				}else{
					thisContainer.find(".tile-container").last().find(".wrapper").css("cssText", "margin-bottom: 10px !important;    padding: 0px 10px 10px;");
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
			if (getViewport() != "mobile") {
				thisContainer.find(".wrapper ").css("cssText", "margin-bottom: 0px !important;  margin-top: 20px;");
			}else{
				thisContainer.find(".wrapper ").css("cssText", "margin-bottom: 20px !important  margin-top: initial;");
			}
		}
	}
}

function disclaimerPadding(){
	var container = $(".disclaimer");
	console.log(container.length > 0 && $(".quote-office").length < 1)
	if (container.length > 0 && $(".quote-office").length < 1) {
			if (getViewport() == "desktop") {
				container.css("cssText", "padding-top: 50px; padding-bottom: 20px;");
			}  else if (getViewport() == "tablet") {
				container.css("cssText", "padding-top: 40px; padding-bottom: 10px;");
			}else{
				container.css("cssText", "padding-top: 10px; padding-bottom: 10px;");
			}
	}

}

/*function contextualToolsDisclaimerPadding(){
	var container = $(".disclaimer");
	console.log(container.length > 0 && $(".quote-office").length < 1)
	if (container.length > 0 && $(".quote-office").length < 1) {
		if (getViewport() == "desktop") {
			container.css("cssText", "padding-top: 30px; padding-bottom: 30px;");
		}  else if (getViewport() == "tablet") {
			container.css("cssText", "padding-top: 30px; padding-bottom: 30px;");
		}else{
			container.css("cssText", "padding-top: 10px; padding-bottom: 10px;");
		}
	}

}*/

function removeSpacingFAQ(){
	var container = $(".container.contextual-links");
	if (container.length > 0) {
		var thisContainer = container.next("div");
		if (thisContainer.hasClass("faq")) {
			if (getViewport() == "desktop") {
				thisContainer.find(".container").first().css("cssText", "padding-top: 37px; padding-bottom: 40px;");
				container.find(".contextual-links-row").css("cssText", "padding-bottom: 0px;");
			}else if (getViewport() == "tablet"){
				thisContainer.find(".container").first().css("cssText", "padding-top: 37px; padding-bottom: 30px;");
				container.find(".contextual-links-row").css("cssText", "padding-bottom: 0px;");
			}else{
				container.find(".contextual-links-row").css("cssText", "padding-bottom: 20px;");
				thisContainer.find(".container").first().css("cssText", "padding-top: 0px; padding-bottom: 0px;");
			}
		}
	}

}

function skinnyAndLargeSpacing(){
	var skinnyContainer = $(".skinny-banner");
	var largeContainer  = $(".large-banner");
	if (skinnyContainer.length > 0) {
		var thisContainer = skinnyContainer.next("div");
		if (thisContainer.length == 0) {
			skinnyContainer.find(".skinny-promo-tile").css("cssText", "margin-bottom: 0px !important;");
			if (getViewport() == "desktop") {
				skinnyContainer.find(".row.wrapper").css("cssText", "padding-bottom: 17px !important;");
			}else if (getViewport() == "tablet") {
				skinnyContainer.find(".row.wrapper").css("cssText", "padding-bottom: 7px !important;");
			}else{
				skinnyContainer.find(".row.wrapper").css("cssText", "padding-bottom: 0px !important;");
			}
		}
	}
	if (largeContainer.length > 0) {
		var thisContainer = largeContainer.next("div");
		if (thisContainer.length == 0) {
			largeContainer.find(".skinny-promo-tile").css("cssText", "margin-bottom: 0px !important;");
			if (getViewport() == "desktop") {
				largeContainer.find(".row.wrapper").css("cssText", "padding-bottom: 17px !important;");
			}else if (getViewport() == "tablet") {
				largeContainer.find(".row.wrapper").css("cssText", "padding-bottom: 7px !important;");
			}else{
				skinnyContainer.find(".row.wrapper").css("cssText", "padding-bottom: 0px !important;");
			}
		}
	}
}


/*function mainDisclaimerMissing(){
	var container = $(".container.contextual-links");
	if (container.length > 0) {
		var thisContainer = container.next("div");
		if (thisContainer.length == 0) {
			if (getViewport() != "mobile") {
				$(".wrapper").find(".disclaimer").first().css("cssText", "margin-top: -52px;");
			}  else {
				$(".wrapper").find(".disclaimer").first().css("cssText", "margin-top: 0px;");
			}
		}
	}

}*/

function mainPromoAndSmallMediumCards(){
	var container = $(".promocard");
	if (container.length > 0 && $(".product-module").length > 0 ){
		container.css("margin-top" , "0px")
	}

}