/*AEM Specific Funcitons*/
function subNavClassSwitch(){
	if($(".subnav-go-back").length > 0){
		if($(".subnav-go-back__menu").length == 0){
			$('.subnav-go-back__list__item__anchor').each(function(){
				var subNavLabel = $(this).find('.subnav-go-back__list__item__anchor__label');
				$(this).find('div').remove();
				$(this).append(subNavLabel);
			})
			$('.subnav-go-back__list__item__anchor__label').each(function(){
				$(this).addClass("subnav__list__item__anchor__label").removeClass("subnav-go-back__list__item__anchor__label");

			})
			$('.subnav-go-back__list__item__anchor').each(function(){
				$(this).addClass("subnav__list__item__anchor").removeClass("subnav-go-back__list__item__anchor");
			})
			$('.subnav-go-back__list__item').each(function(){
				$(this).addClass("subnav__list__item").removeClass("subnav-go-back__list__item");
			})
			$(".subnav-go-back__list").addClass('subnav__list').removeClass('subnav-go-back__list');
			$(".subnav-go-back").addClass("subnav").removeClass("subnav-go-back")
		}
		}
}
function productCardAEM(){
	$(".subcat-row").each(function () {


		var sel = $('script[type="text/javascript"]' , $(this));

		if(sel.length != 0){
			var numProdCards = $(this).find(".subcategory-product-card").length;
			var numImageCards = $(this).find(".subcategory-image-product-card").length;
			var  current =  numProdCards + numImageCards;

			// var cardToChange = $(':last-child()', $(this));
			// console.log(cardToChange);
			if(current == 3){
				if ($(window).width() >= 751) {
					$(this).children(2).last().prev().css("margin-right", "0px");
					// console.log("$(window).width() >= 767");
				}

				if ($(window).width() <= 750){
					$(this).children(2).last().prev().css("margin-right", "10px")
					//console.log($(window).width());
				}
			}
		}
	});
}

function largeProductCardAEM(){
	$(".large_product_module_wrapper").each(function () {


		var sel = $('script[type="text/javascript"]' , $(this));

		if(sel.length != 0){
			if ($(window).width() >= 751) {
				$(this).children(2).last().prev().css("margin-right", "0px");
			}
		}
	});
}

function quoteToolImageLink(){
	$('.form-focus').each(function(){
		$('[data-quoteToolLink]').parent().parent().parent().find(".form-control").addClass("smallerForm");
	});
};

$("#opinion_lab_link").click(function(){
	$("#oo_tab").trigger("click");
});

$(document).ready(function(){
	productCardAEM();
	largeProductCardAEM();
	quoteToolImageLink();
});

$(window).resize(function(){
	productCardAEM();
	largeProductCardAEM();
	quoteToolImageLink();
});

$(window).load(function(){

	productCardAEM();
	largeProductCardAEM();
	quoteToolImageLink();
});

$(document).ready(function(){
	subNavClassSwitch();
	if($(".cta_wrapper").length != 0 && $(".cta_wrapper").parent().parent().parent().find(".find_an_x_wrap:first").find(".cta_wrapper").siblings(".dental_vision_wrap").length == 0){
		$(".cta_wrapper").parent().parent().parent().find(".find_an_x_wrap:first").find(".cta_wrapper").css("width", "calc(100% - 100px)");
	}

});

$(window).resize(function(){
	if ($(window).width() < 751 && $(".cta_wrapper").length != 0 && $(".cta_wrapper").parent().parent().parent().find(".find_an_x_wrap:first").find(".cta_wrapper").siblings(".dental_vision_wrap").length == 0) {
		$(".cta_wrapper").parent().parent().parent().find(".find_an_x_wrap:first").find(".cta_wrapper").css("width", "calc(100% - 100px)");
	}
});

function getActionLink(el){
	return $(el).parent().data('actionLink').trim();
}

$(".login_open").click(function (e) {
	if(!$(".login_open").hasClass("linkOnly")){
		e.preventDefault();
	}
});

$(".contact-us__select").on("change", function(){
	var whichresults = $(".contact-us__select").val();
	$(".contact-us__results__wrapper").addClass('hidden');
	if( $(".contact-us__results__wrapper").hasClass(whichresults)){
		$("." + whichresults).removeClass("hidden");
	}
});