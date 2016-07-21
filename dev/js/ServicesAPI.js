//Variables for all Services
var bootPagNum = 0;
var listCount = 10;
var count = 0;
var resultsListHTML = "";
var loadingMore = false;
var page = 1;
//Quote Tool variables
var quoteDomain;
var quotelanguage;
var quoteProduct;
var quoteSubmit;
var quoteUrl;
var quoteToolForm;
var quoteRequest;
// Find an X variables
if ($(".find-an-x-search__container").length > 0) {
	var geocoder = new google.maps.Geocoder();
}
var startPointGeoCode;
var startPointGMarker;
var radiusInMiles;
var specialty = "";
var map;
var blueMarker;
var blackMarker;
var presentHighligtedInfo;
var selectedMarker;
var markersArray = [];
var dir_markerArray = [];
var dir_to_flag = true;
if ($(".find-an-x-search__container").length > 0) {
	var directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});
}

//Forms Lib Variables
var searchAgainFlag = false;


//News Room Variables
var firstTimeRunNewsRoom = true;
var firstTimeRunNewsRoomChange = true;
var newsMonth;
var newsYear;
var newsTopic;
var newsConcatenator;
var totalMonths = [];
var totalYears = [];

//Contact Variables
var radioDials = false;


$(document).ready(function () {

	ServicesAPI.loadEventListeners();
	if ($("#searchInPage").length != 0) {
		$("#searchInPage").val("");
	}

});
//Contact Forms

$(".form-radio-grp svg, .image_radio svg").on('click', function () {
	var radioButton = $(this).siblings('input');
	if (!radioButton.prop('checked')) {
		radioButton.prop('checked', true);
		var radioName = radioButton.prop('name');
		$('input[name=' + radioName + ']').siblings('svg').toggle();
	}
	;
});

$('#productPolicy option[value=""]').attr('selected', true);

$("[data-fid='contactCard'] input").click(function () {
	if ($('.contactCard .form-minimize').hasClass('hidden-sm')) {
		$('.contactCard .form-minimize').removeClass('hidden-sm hidden-md');
	}
});

$('.contactCard .form-minimize').click(function () {
	$('.contactCard .form-minimize').addClass('hidden-sm hidden-md');
	$('[data-request-type] option[value=""]').attr('selected', true);
	$("[data-request-type]").change();
	$('[data-request-type] option[value=""]').attr('selected', true);
});

$("[data-request-type]").on("change", function () {
	var thisValue = $(this).val()
	var thisForm = $(this).parent().parent().parent().parent().attr('data-fid');
	var $formid = $('[data-fid=' + thisForm + ']');
	radioDials = false;
	$formid.find("[data-observes-id]").find('input:radio').each(function () {
		$(this).next('span').removeClass('errorRadio');
	});
	$formid.find('[data-observes-id]').each(function () {

		if ($(this).attr('data-observes-value') == thisValue) {
			$(this).show();

		} else {
			$(this).hide();
		}
	});
	if (thisValue != "") {
		$(this).removeClass('error');
		$(this).attr('data-valid-status', 'success');
		$(this).parent('.form-user-grp').find('svg').css('fill', '#666');
	}
})


$("[data-observes-id]").find('textarea').on("change", function () {
	var thisForm = $(this).parent().parent().parent().parent().attr('data-fid');
	var $formid = $('[data-fid=' + thisForm + ']');
	var val = $formid.find("[data-observes-id]").find('textarea').val();
	var placeholder = $formid.find("[data-observes-id]").find('textarea').attr('placeholder');
	if (val == "" || val == placeholder) {
		$("[data-request-type]").attr('data-valid-status', 'failed');
	} else {
		$("[data-request-type]").attr('data-valid-status', 'success');
		$("[data-request-type]").removeClass('error');
	}
})

$("[data-observes-id]").find('input:text').on("change", function () {
	var thisForm = $(this).parent().parent().parent().parent().attr('data-fid');
	var $formid = $('[data-fid=' + thisForm + ']');
	var val = $formid.find("[data-observes-id]").find('input:text').val();
	var placeholder = $formid.find("[data-observes-id]").find('input:text').attr('placeholder');
	if (val == "" || val == placeholder) {
		$("[data-request-type]").attr('data-valid-status', 'failed');
	} else {
		$("[data-request-type]").attr('data-valid-status', 'success');
		$("[data-request-type]").removeClass('error');
	}
})


$("[data-observes-id]").find('input:radio').on('click', function () {
	/*$("[data-observes-id]").find("input:radio").each(function(){
	 $(this).removeAttr("checked");
	 $(this).next('span').removeClass('errorRadio');
	 });
	 $(this).attr('checked', true);*/
	radioDials = true;
	$("[data-request-type]").attr('data-valid-status', 'success');
	$("[data-request-type]").removeClass('error');
	$("[data-request-type]").parent().find('svg').css('fill', '#666');
});

//New This should be uncommented once form builder is in palce
$('[data-submit-type="clr"]').on('click', function (e) {
	e.preventDefault();
	var $this = $(this);
	var isValid = ServicesAPI.onFSubmit($(this));
	if (isValid) {
		var fid = $this.attr('data-fsubmit');
		var $formid = $('[data-fid=' + fid + ']');
		ServicesAPI.postLeadform($formid);

		$formid.find('[data-observes-id]').each(function () {
			$(this).hide();
		});

		if (fid == "advisorContactForm" || fid == "advisorContactForm-mob") {
			$('.aidFormCon').hide();
			$('.aiwHeading').hide();
			$('.advisorClose').hide();
			$('.adImageThankYou').css("display", "table-cell");
		} else if (fid == "quoteleadform") {
			$(this).closest('.quote_right_mlt').hide();
			$(this).closest('.quote_right_sit').hide();
			$('.quote_results_thank_you').show();
		} else if (fid == "contactCard") {
			var temp = "[data-fid='" + fid + "']";
			//$("[data-fid='contactCard']").hide();
			$('.contactCard').hide();
			$(temp).parents().find('.contactSideThankyou, .contactOtherDetails').show();
			setTimeout(function () {
				$(temp).parents().find('.contactSideThankyou, .contactOtherDetails').fadeOut('slow', function () {
					$('.contactCard').show();
					$('#requestFormContactCard_Acc').trigger("reset");
					$('.form-minimize').trigger('click');
				});
			}, 5000);
		} else if (fid == "contactSidebarQuote") {
			$(".results-form__text").addClass("hidden");
			$(".results-form__inputs").addClass("hidden");
			$(".apply-disclaimer").addClass("hidden");
			$(".contact-thanks").removeClass("hidden");

		} else {
			$('.' + fid).fadeOut('slow', function () {
				setTimeout(function () {
					$('.contactSliderOuterCon').fadeOut(2000);
					$('.contactsClose').trigger('click');
				}, 5000)
			});
		}
	} else {
		//alert("invalid");
	}
});

/*$('[data-fsubmit]').on('click', function (e) {
	e.preventDefault();
	var $this = $(this);
	var isValid = ServicesAPI.onFSubmit($(this));
	if (isValid) {
		var fid = $this.attr('data-fsubmit');
		var $formid = $('[data-fid=' + fid + ']');
		ServicesAPI.postLeadform($formid);

		$formid.find('[data-observes-id]').each(function () {
			$(this).hide();
		});

		if (fid == "advisorContactForm" || fid == "advisorContactForm-mob") {
			$('.aidFormCon').hide();
			$('.aiwHeading').hide();
			$('.advisorClose').hide();
			$('.adImageThankYou').css("display", "table-cell");
		} else if (fid == "quoteleadform") {
			$(this).closest('.quote_right_mlt').hide();
			$(this).closest('.quote_right_sit').hide();
			$('.quote_results_thank_you').show();
		} else if (fid == "contactCard") {
			var temp = "[data-fid='" + fid + "']";
			//$("[data-fid='contactCard']").hide();
			$('.contactCard').hide();
			$(temp).parents().find('.contactSideThankyou, .contactOtherDetails').show();
			setTimeout(function () {
				$(temp).parents().find('.contactSideThankyou, .contactOtherDetails').fadeOut('slow', function () {
					$('.contactCard').show();
					$('#requestFormContactCard_Acc').trigger("reset");
					$('.form-minimize').trigger('click');
				});
			}, 5000);
		} else if (fid == "contactSidebarQuote") {
			$(".results-form__text").addClass("hidden");
			$(".results-form__inputs").addClass("hidden");
			$(".apply-disclaimer").addClass("hidden");
			$(".contact-thanks").removeClass("hidden");

		} else {
			$('.' + fid).fadeOut('slow', function () {
				setTimeout(function () {
					$('.contactSliderOuterCon').fadeOut(2000);
					$('.contactsClose').trigger('click');
				}, 5000)
			});
		}
	} else {
		//alert("invalid");
	}
});*/
//New This should be uncommented once form builder is in palce

$('select[data-required=true]').on('change', function () {
	$(this).trigger('blur');
});

$('[data-required=true]').on('change', function () {
	$(this).trigger('blur');
});


$('[data-required=true]').on('blur keyup', function () {
	var $this = $(this);
	var placeholder = $this.attr('placeholder');
	if ($this.val() == placeholder) {
		$this.val("");
	}
	var val = $this.val();
	if (val.length == 0) {
		$this.addClass('error');
		//$this.val(placeholder);
	} else {
		var attrDVS = $this.attr('data-valid-status');
		if (typeof attrDVS !== typeof undefined && attrDVS !== false) {
			//do nothing
			if (attrDVS == 'failed') {
				//$(this).addClass('error');
				formStatus = false;
			}
		} else {
			$this.removeClass('error');
			$this.parent().find('.errorSpan').removeClass('errorSpanOpen');
			$this.parent('.form-user-grp').find('svg').css('fill', '#666');
		}
	}
});

$(".form-user-ctrl").on('click', function (evt) {
	if ($(this).hasClass("error")) {
		$(this).val("");
	}
});

$('[data-valid-type=text]').on('blur', function (evt) {
	evt.preventDefault();
	var $this = $(this);
	var val = $this.val();
	var re = /^([^0-9!@#$%\^&*()[\]{}\-\=\_\+'";:/?>.,<`~\ ]*)$/;
	/* var re = /^[0-9!@#$%\^&*)(+=._-]*$/;*/
	ServicesAPI.validateOnType(val, $this, re);
});

$('.user-checkbox').on('click', function () {
	var count = 0;
	//var $con = $(this).closest('.productPolicyTypes');
	var $con = $(this).parents().find('.productPolicyTypes');
	$con.find('.newProductUser input[type=checkbox]').each(function () {
		if ($(this).is(':checked')) {
			count++;
		}
	});
	//if (count > 0 && count <= 5) {
	//if (count > 0 && count <= document.getElementById("maxCheckedItemId").value) {
	if (count > 0 && count <= $(this).parents().find('.newProductUser input[type=checkbox]').length) {
		$con.find('.productPolicy').attr('data-valid-status', 'success');
		$con.find('.productPolicy').removeClass('error');
		$con.find('.productCount').removeClass('errorText');
		$('.productPolicyTypes').find('svg').css('fill', '#666');
	} else {
		$con.find('.productPolicy').attr('data-valid-status', 'failed');
		$con.find('.productPolicy').addClass('error');
		$con.find('.productCount').addClass('errorText');
		$('.productPolicyTypes').find('svg').css('fill', '#db3535');
	}
});

$('[data-valid-type=email]').on('blur', function (evt) {
	evt.preventDefault();
	var $this = $(this);
	var val = $this.val();
	var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	ServicesAPI.validateOnType(val, $this, re);
});

$('[data-valid-type=zip]').on('blur', function (evt) {
	evt.preventDefault();
	var $this = $(this);
	var val = $this.val();
	var re = /^\d{5}$/i;
	ServicesAPI.validateOnType(val, $this, re);
});

$('[data-valid-type=zip]').on('keyup', function (evt) {
	var regexp = /[^0-9]/;
	var str = $(this).val();
	if (str.match(regexp)) {
		str = str.replace(/\D/g, "");
		$(this).val(str);
	}
	var len = str.length;
	if (len > 5) {
		str = str.substr(0, 5);
		$(this).val(str);
		return false;
	}
});

$('[data-valid-type=phone]').on('blur', function (evt) {
	evt.preventDefault();
	var $this = $(this);
	$this.trigger('keyup')
	var val = $this.val();
	var re = /^([0-9]{3}[-][0-9]{3}[-][0-9]{4})$/;
	ServicesAPI.validateOnType(val, $this, re);
});

$('[data-valid-type=phone]').on('keyup', function (evt) {
	var regexp = /[^0-9]/;
	var input_value = $(this).val();
	if (input_value.match(regexp)) {
		input_value = input_value.replace(/\D/g, "");
		$(this).val(input_value);
	}
	var num_len = $(this).val().length;
	if (num_len >= 3 && num_len < 7) {
		input_value = input_value.substring(0, 3) + "-" + input_value.substring(3, num_len);
	} else if (num_len >= 7) {
		input_value = input_value.substring(0, 10)
		input_value = input_value.substring(0, 3) + "-" + input_value.substring(3, 6) + "-" + input_value.substring(6, num_len);
	}
	if (evt.keyCode == 8) {
		var str = input_value.charAt(input_value.length - 1);
		if (str == "-") {
			input_value = input_value.substring(0, input_value.length - 1)
		}
	}
	$(this).val(input_value);
});

$('.productPolicy').on('blur', function () {
	var $this = $(this);
	var $con = $this.closest('.productPolicyTypes');
	var val = $this.val();
	var placeholder = $this.attr('placeholder');
	if ($this.val() == "") {
		$this.val(placeholder);
	}
	if (val == "" || val == placeholder) {
		$con.find('.productPolicy').attr('data-valid-status', 'failed');
		$con.find('.productPolicy').addClass('error');
		$this.addClass('error');
		$('.productPolicyTypes').find('svg').css('fill', '#db3535');
	} else {
		$con.find('.productPolicy').attr('data-valid-status', 'success');
		$con.find('.productPolicy').removeClass('error');
		$this.removeClass('error');
		$('.productPolicyTypes').find('svg').css('fill', '#666');
	}
});
//Contact Forms

$('.form-user-grp > select').on('blur', function () {
	var $this = $(this);
	var val = $this.val();
	var placeholder = $this.attr('placeholder');
	if ($this.val() == "") {
		$this.val(placeholder);
	}
	if (val == "" || val == placeholder) {
		$this.closest('.form-user-grp').find('svg').css('fill', '#db3535');
	} else {
		$this.closest('.form-user-grp').find('svg').css('fill', '#666');
	}
});

/****Product Selector****************************************/


$(".product__selector").on("change", function () {
	var selectedProduct = $(this).find(':selected').attr("data-product-type");
	$(this).removeClass("error");
	$(".product__selector--sub").removeClass("error");
	$(this).parent('.select_wrapper').find('svg').css('fill', '#666');
	$(".product__selector--sub").parent('.select_wrapper').find('svg').css('fill', '#666');
	$(".cta_header_quote_type_of_insurance--sub").addClass("hidden");
	$(".product__selector--sub").prop("disabled", true);
	$(".product__selector--sub").val("")
	$("[data-product-sub='" + selectedProduct + "']").removeClass("hidden");
	$("[data-product-sub='" + selectedProduct + "']").find(".product__selector--sub").prop("disabled", false);
	$(".js-productSelector").attr("href", "#");
});

$(".product__selector--sub").on("change", function () {
	var productSelectorPage = $(this).find(':selected').attr("data-product-url");
	$(this).removeClass("error");
	$(this).parent('.select_wrapper').find('svg').css('fill', '#666');
	$(".js-productSelector").attr("href", productSelectorPage);
});

$(".js-productSelector").click(function (e) {
	var url = $(this).attr("href");
	if ($(".product__selector").find(':selected').val() == "") {
		$(".product__selector").parent('.select_wrapper').find('svg').css('fill', '#db3535');
		$(".product__selector").addClass("error")
	}
	if (!$(".product__selector").find(':selected').val() == "" && $(".product__selector--sub").find(':selected').val() == "") {
		$(".product__selector--sub").addClass("error")
		$(".product__selector--sub").parent('.select_wrapper').find('svg').css('fill', '#db3535');
	}
	if (url == "#") {
		e.preventDefault();
	}
});
/****Blog Search****************************************/


$("#blog-category-dropdown").on("change", function () {
	var url = $(".blog-list").attr("data-url");
	var searchType = $(this).val();
	ServicesAPI.blogsServiceCall(url, searchType)
});

/****News Room Search****************************************/
$(".divider--load-more__link").click(function (e) {
	e.preventDefault();
	totalYears = [];
	totalMonths = [];
	ServicesAPI.newsRoomServiceConstruction();
});

$("#list_month, #list_year").change(function () {
	firstTimeRunNewsRoomChange = true;
	totalYears = [];
	totalMonths = [];
	listCount = 0;
	ServicesAPI.newsRoomServiceConstruction();
});
$("#list_topics").change(function () {
	firstTimeRunNewsRoomChange = true;
	totalYears = [];
	totalMonths = [];
	listCount = 0;
	ServicesAPI.newsRoomServiceConstruction();
	setTimeout(function () {
		ServicesAPI.newsRoomTopicsChange();
	}, 500);

});

// Store News Room search parameters
$(".list").on("click", ".list__item a", function () {
	sessionStorage.setItem("press_back", window.location.href);
	sessionStorage.setItem("press_month", $('#list_month').val());
	sessionStorage.setItem("press_year", $('#list_year').val());
	sessionStorage.setItem("press_search", $('#list_topics').val());
});

// Navigation for Press Room back button
$(".breadcrumb__crumb--back").on("click", function (evt) {
	evt.preventDefault();
	var url = sessionStorage.getItem("press_back");
	if (url != null) {
		window.location.href = url;
	} else {
		window.location.href = "/Press_Room";
	}
	sessionStorage.removeItem("press_back");
});

/**** Press Room Search****************************************/


//Forms Library
if ($(".js-formLib").length > 0) {
	$('.js-formLib').on("change", function () {
		searchAgainFlag = true;
		var url = $(".js-formLib").attr("data-forms-lib-url");
		var query = $(".js-formLib").attr("data-forms-query-parameter");
		var value = $('.js-formLib').val()
		url += value + query;
		ServicesAPI.formsLibraryServiceCall(url);
	});

	$(".form_library_container").on("click", ".form a", function () {
		$(".form_library_container").find(".form a").removeClass("selected");
		$(this).closest(".form").find("a").addClass("selected");
	});
}


//Site Search


// Search Results Page Search Start
$('.js-searchSubmit').on('click', function () {
	var searchRequest = $(".js-searchTextBox").val();
	var url = $(".js-searchSubmit").attr("data-search-ajax-url") + "?query=" + searchRequest;
	if (searchRequest) {
		ServicesAPI.searchServiceCall(url);
	}
});

// Site Header Search click on icon
$('.js-searchIcon').click(function () {
	if ($('.search-trigger__search-box').val()) {
		var searchTerm = $(".search-trigger__search-box").val();
		if ($(".search-trigger__search-box").hasClass("js-oldSearch")) {
			if ($(".search-trigger__icon--open").length > 0 && getViewport() != "mobile") {
				if (!$(".search-trigger__search-box").val() == "" && !$(".search-trigger__search-box").val() == " ") {
					ServicesAPI.legacySearch(searchTerm);
				}
			}

		} else {
			//For Integration we only need this statment
			if ($(window).width() >= 767 && $(".search-trigger__icon--open").length > 0) {
				ServicesAPI.redirectToSearchResultsPage(searchTerm);
			}
		}

	}
});


//Site header search in mobile
$('.js-searchIconMobile').click(function () {
	if ($('.search-trigger__search-box').val()) {
		var searchTerm = $(".search-trigger__search-box").val();
		if ($(".search-trigger__search-box").hasClass("js-oldSearch")) {
			if (getViewport() == "mobile" && $(".search-trigger__icon--open").length > 0) {
				ServicesAPI.legacySearch(searchTerm);
			}
		} else {
			//For Integration we only need this statment
			if ($(window).width() >= 767 && $(".search-trigger__icon--open").length > 0) {
				ServicesAPI.redirectToSearchResultsPage(searchTerm);
			}
		}
	}
});
//Site header search on keypress
$('.search-trigger__search-box').keypress(function (e) {

	if ($('.search-trigger__search-box').val()) {

		if ($(this).hasClass("js-oldSearch")) {
			if (e.which == 13) {
				var searchTerm = $(this).val();
				e.preventDefault();
				ServicesAPI.legacySearch(searchTerm);
			}
		} else {
			//For Integration we only need this statment
			if (e.which == 13) {
				var searchTerm = $(this).val();
				e.preventDefault();
				ServicesAPI.redirectToSearchResultsPage(searchTerm);
			}
		}
	}
});

$(".suggestionsbox").on("click", ".js-searchSuggestions", function () {
	var searchTerm = $(".search-trigger__search-box").val();
	console.log(searchTerm)
	if ($(".search-trigger__search-box").hasClass("js-oldSearch")) {
		ServicesAPI.legacySearch(searchTerm);
	} else {
		//For Integration we only need this statment
		ServicesAPI.redirectToSearchResultsPage(searchTerm);
	}
});
/*$("tbody.ss-gac-m").on("click", ".ss-gac-a, .ss-gac-b, .ss-gac-c, .ss-gac-d", function () {
	var searchTerm = $(this).find(".ss-gac-c").text();
	$(".search-trigger__search-box").val(searchTerm);
	if ($(".search-trigger__search-box").hasClass("js-oldSearch")) {
		$(".search-trigger__search-box").val(searchTerm);
		ServicesAPI.legacySearch(searchTerm);
	} else {
		//For Integration we only need this statment
		ServicesAPI.redirectToSearchResultsPage(searchTerm);
	}
});*/


// Search in Page
$("#searchInPage, .js-searchSubmit").keypress(function (e) {
	if (e.which == 13) {
		$('.js-searchSubmit').click();//Trigger search button click event
	}
});

// Search in Search Results Page
$(".js-searchSubmit").keypress(function (e) {
	if (e.which == 13) {
		$('.js-searchSubmit').click();//Trigger search button click event
	}
});
$('.js-SearchBox').click(function (e) {
	e.preventDefault();
	var zipcode = $(".office-search__input").val();
	var urlStr;
	if ($(this).hasClass("office-search__action")) {
		sessionStorage.setItem("faoZipCode", $(".office-search__input").val());
		urlStr = $(this).attr('data-href') + "?zip=" + zipcode;
		window.location.href = urlStr;
	}
});
$('.search-results-container__correction-text > a').on('click', function (e) {
	e.preventDefault();
	var correctionClickedOn = $(this).text();
});

$('.search-results-container__correction-text > a').on('click', function (e) {
	e.preventDefault();
	var correctionClickedOn = $(this).children('span').text();
	var searchRequest = correctionClickedOn;
	var url = $(".js-searchSubmit").attr("data-search-ajax-url") + "?query=" + searchRequest;
	if (searchRequest) {
		ServicesAPI.searchServiceCall(url);
	}
});

//Pagination Update
$(".page-count").on('change', function () {
	listCount = $(this).val();
	ServicesAPI.createPagination(count);
	ServicesAPI.resetMap();
	ServicesAPI.showLocation();
});

//Find an X Click Functions
$(".find-an-x-search__container .cta_search").on('focus', function (e) {
	if (getViewport() == "mobile") {
		$('.find-an-x-search--expand').show();
	}
});
/*$("body").on("click tap", function (e) {
 var faoTrigger = $('.cta_search');
 var container = $(".find-an-x-search__container");
 if (!container.is(e.target) && container.has(e.target).length === 0) {
 $('.find-an-x-search--expand').hide();
 }
 });*/

$(".find-an-x-search__container .directions_button").on('click', function (e) {
	//handle empty val
	if ($(".cta_search").val().length === 0) {
		$(".cta_search").addClass('error');
	} else {
		ServicesAPI.showLocation();
	}

});

$(".search_location_image").on('click touchstart', function () {
	if ($(window).width() < 1025) {
		ServicesAPI.showLocation();
	}
});

$('.find-an-x-search__container .cta_search').on('keypress', function (event) {
	//handle empty val
	if ($(".cta_search").val().length + 1 === 0) {
		$(".cta_search").addClass('error');
	} else {
		$(".cta_search").removeClass('error');
		ServicesAPI.checkEnter(event);
	}

});

/* Function that is called whenever the user changes the radius*/
$(".find_an_office_radius").on('change', function () {
	ServicesAPI.resetMap();
	ServicesAPI.showLocation();
});

$(document).on('click', ".results_office_name", function () {
	var i = $(this).closest('.results_office_result').index();
	var index = ((i + 1) + ((bootPagNum) * listCount))
	google.maps.event.trigger(markersArray[index], 'click');
});

$('.get-directions-buttons .btn').on('click', function () {
	$('.get-directions-buttons .btn').removeClass('active');
	$(this).addClass('active');
	if ($('.driving-directions-panel').is(':visible')) {
		ServicesAPI.getDirections();
	}
});

$(".get-directions-form .get_directions_button").on('click', function () {
	ServicesAPI.getDirections();
});

/* back link on directions page work*/
$(".back-click").on('click', function () {
	if ($('.driving-directions-panel').is(':visible')) {
		$('.driving-directions-panel').addClass('hidden');
		$('.get-directions-form').removeClass('hidden');
		directionsDisplay.setMap(null);
		ServicesAPI.getDirectionsPanel($('.get-directions-form .to-address').val());
	}
	else {
		ServicesAPI.showLocation();
		if (!$(".find-an-x-search__container").hasClass("hidden")) {

			$('.page-title__heading').text($('.findOfficeText').text());
			ServicesAPI.removeBreadCrumb();
		}
	}
});

//might not be needed, need to test.
/* update link for find an office breadcrumb*/
$('.bc_link_fao').on('click', function () {
	ServicesAPI.showLocation();
});

$('.maps-button').click(function (clickedButton) {
	var moreMapText = $(".get_direction_more_map").text();
	var lessMapText = $(".get_direction_less_map").text();

	if ($('.maps-button').text() == moreMapText) {
		$('.google-maps-container').css('height', '400px');
		$('.maps-button').text(lessMapText);
		ServicesAPI.resetMap();
		ServicesAPI.resizeMap();
	} else {
		$('.google-maps-container').css('height', '200px');
		$('.maps-button').text(moreMapText);
		ServicesAPI.resetMap();
		ServicesAPI.resizeMap();
	}
});
/*function gmapsAutoCompleteInit() {
	if (typeof countryCode !== 'undefined') {
		var options = {
			componentRestrictions: {country: countryCode}
		};
		$('.gmaps-auto-complete').each(function () {
			new google.maps.places.Autocomplete($(this)[0], options);
		});
	} else {
		$('.gmaps-auto-complete').each(function () {
			new google.maps.places.Autocomplete($(this)[0]);
		});
	}
}*/
var countryCode ="us";

$(window).on('load', function (e) {

	if ($(".fax__container").length > 0) {
		faoURL = window.location.href;
		blackMarker = $('.pngPath_icon_locpin_blk').text();
		blueMarker = $('.pngPath_icon_locpin_blue').text();
		ServicesAPI.initializeFindAnOffice();
		if (document.referrer != "") {
			ServicesAPI.showLocation();
		}
		if ($(".hidden-xs").is(":visible") == false) {
			$(".fax__container").find('.contact-container--form-card').insertAfter($(".results_list_container"));

		}
		else {
			$(".fax__container").find('.contact-container--form-card').insertAfter($(".fax-results__container  > .maps-contact-form-container > button"));
		}
	}
	if ($(".find-office__zip-city-state").length > 0) {
		if (typeof countryCode !== 'undefined') {
			var options = {
				componentRestrictions: {country: countryCode}
			};
			googleautocomplete = new google.maps.places.Autocomplete(document.getElementsByClassName("find-office__zip-city-state")[0], options);
		}else{
			googleautocomplete = new google.maps.places.Autocomplete(document.getElementsByClassName("find-office__zip-city-state")[0]);
		}
		//googleautocomplete.bindTo('bounds', map);
		google.maps.event.addListener(googleautocomplete, 'place_changed', function () {
			var place = googleautocomplete.getPlace();
			if (!place || !place.geometry) {

			}
		});
	}

});
//From FAO js, not sure what this does.
$("body").on("ready", "[data-leg-index=\"1\"]", function () {
	$("[data-leg-index=\"1\"]").addClass("lastMarker");
});

$(".results_pagination").click(function () {
	$('html, body').animate({
		scrollTop: $('.fax-results__container')
	}, 'slow');
});


// Click Functions for Quote Tool
if ($(".cta_header_quote").length > 0) {
	$(".cta_header_quote").find(".select_wrapper").on("change", function () {
		ServicesAPI.quoteFormReset();
	});
}

// Initializes the quote results display and edit your quote
if ($(".js-editGlobal").length > 0) {
// Get Quote Results
// Open Edit Quote Form
	$(".js-editGlobal").on("click", function () {
		if (sessionStorage.getItem("product") !== null) {
			$(".insurance-type").val($("[data-product='" + sessionStorage.getItem("product") + "']").val());
		}
		$(".insurance-type").change();
		$(".contact-form-quote-results").addClass("contact-form-quote-results--hidden");
		$(".edit-form-quote-results").addClass("edit-form-quote-results--block");
		$(".results-form").addClass("results-form--dark-blue");
		$(".quote-box").addClass("quote-box--inactive");
		ServicesAPI.preFillQuoteForm();
	});

	// Close Edit Quote Form
	$(".edit-form-quote-results .form-close").on("click", function () {
		$(".results-form").removeClass("results-form--dark-blue");
		$(".contact-form-quote-results").removeClass("contact-form-quote-results--hidden");
		$(".edit-form-quote-results").removeClass("edit-form-quote-results--block");
		$(".quote-box").removeClass("quote-box--inactive");
	});
}

$(".js-submitQuote").click(function (e) {
	e.preventDefault();
	if ($(".js-submitQuote").parent().parent().parent().parent().hasClass('quote-tool-form')) {
		var baseUrl = $(".quote-tool-form").attr("data-quote-url");
		quoteUrl = "";
		//quoteUrl = baseUrl + '{"domain":"' + quoteDomain + '","language":"'+ quotelanguage+'","product":"'+ quoteProduct +'","country":"default"';
		quoteUrl = baseUrl;
		quoteRequest = {domain: quoteDomain, language: quotelanguage, product: quoteProduct, country: 'default'};
		ServicesAPI.loopThroughQuoteInputs();
		//quoteUrl +=  '}';
		if (ServicesAPI.validateFields()) {
			ServicesAPI.quoteServiceCall();
		}
	}
});


$(".insurance-type").on("change", function () {
	var formToShow = $(".insurance-type").val();
	$(".quote-tool-form").show();
	$(".quote-tool-form form").hide();
	$("[data-show-form='" + quoteToolForm + "']").hide();
	quoteSubmit = $(".insurance-type").val();
	$("." + formToShow + " form").show();
	quoteSubmit = $(".insurance-type").val();
	if ($("[data-quoteDescription='" + quoteSubmit + "']").length > 0) {
		$("[data-quoteDescription]").addClass("hidden");
		$("[data-quoteDescription='" + quoteSubmit + "']").removeClass("hidden");
	}
	quoteToolForm = $(this).find(':selected').val();
	quoteDomain = $("[data-quoteTool='" + quoteToolForm + "']").attr("data-domain");
	quotelanguage = $("[data-quoteTool='" + quoteToolForm + "']").attr("data-lan");
	quoteProduct = $(this).find(':selected').attr('data-product');
	$(".js-hideButton").hide();
});

String.prototype.toTitleCase = function () {
	var i, j, str, lowers, uppers;
	str = this.replace(/([^\W_]+[^\s-]*) */g, function (txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});

	// Certain minor words should be left lowercase unless
	// they are the first or last words in the string
	lowers = ['A', 'An', 'The', 'And', 'But', 'Or', 'For', 'Nor', 'As', 'At',
		'By', 'For', 'From', 'In', 'Into', 'Near', 'Of', 'On', 'Onto', 'To', 'With'];
	for (i = 0, j = lowers.length; i < j; i++)
		str = str.replace(new RegExp('\\s' + lowers[i] + '\\s', 'g'),
			function (txt) {
				return txt.toLowerCase();
			});

	// Certain words such as initialisms or acronyms should be left uppercase
	uppers = ['Id', 'Tv'];
	for (i = 0, j = uppers.length; i < j; i++)
		str = str.replace(new RegExp('\\b' + uppers[i] + '\\b', 'g'),
			uppers[i].toUpperCase());

	return str;
}

function unique(list) {
	var result = [];
	$.each(list, function (i, e) {
		if ($.inArray(e, result) == -1) result.push(e);
	});
	return result;
}

var isWhole_re = /^\s*\d+\s*$/;
function isWhole(s) {
	return String(s).search(isWhole_re) != -1
}

var isNonblank_re = /\S/;
function isNonblank(s) {
	return String(s).search(isNonblank_re) != -1
}

var ServicesAPI = {

	loadEventListeners: function () {
		ServicesAPI.updatePageFrom($('[name="pageFrom"]'));
		ServicesAPI.gmapsAutoCompleteInit();
		if ($(".search-results-container").length > 0)
			ServicesAPI.searchResultsPageLoad();
		if ($(".js-resultsGlobal").length > 0 || $(".insurance-type").length > 0) {
			ServicesAPI.loadQuoteResults();
			ServicesAPI.clearOverlays();
		}
		if ($(".news-room").length > 0) {
			listCount = 6;
			ServicesAPI.pressBackQuery();
			ServicesAPI.newsRoomServiceConstruction();
		}
		if ($(".blog-list").length > 0) {
			var url = $(".blog-list").attr("data-url");
			ServicesAPI.blogsServiceCall(url, "mostRecent")
		}
	},
	replaceAll: function (txt, replace, with_this) {
		return txt.replace(new RegExp('\\b' + replace + '\\b', 'gi'), with_this);
	},
	populateYearDropDown: function (year, min, element) {
		var yearOptions = $(element);
		var yr = new Date();

		yr = yr.getFullYear() - min;
		$(element).children().remove();
		$(element).append("<option value='' selected disabled>YYYY</option>");
		for (i = yr; i >= year; i--) {
			var optionValue = i;
			yearOptions.append($('<option>', {
				value: optionValue,
				text: optionValue.toString()
			}));
		}
	},
	isLeapYear: function (a) {
		a = parseInt(a);
		if (a % 4 == 0) {
			if (a % 100 != 0) {
				return true
			} else {
				if (a % 400 == 0) {
					return true
				} else {
					return false
				}
			}
		}
		return false;
	},
	populateDaysDropDown: function (id) {
		var numDayDropDown = $(".dobDay").length;
		var numMonthDropDown = $(".dobMonth").length;
		var numYearDropDown = $(".dobYear").length;
		if (($(".dobMonth").val() == "09") || ($(".dobMonth").val() == "04") ||
			($(".dobMonth").val() == "06") || ($(".dobMonth").val() == "11")) {
			$(".dobDay option:eq(31)").remove();

		} else if ($(".dobMonth").val() == "02") {

			if ((ServicesAPI.isLeapYear($(".dobYear").val()) == false) || $(".dobYear").val() == "") {
				$(".dobDay option:eq(31)").remove();
				$(".dobDay option:eq(30)").remove();
				$(".dobDay option:eq(29)").remove();
			} else {
				if (($(".dobDay option[value='29']").length > (numDayDropDown - numDayDropDown)) == false) {
					$(".dobDay").append('<option value="29">29</option>');
				}
				$(".dobDay option:eq(31)").remove();
				$(".dobDay option:eq(30)").remove();
			}

		} else {
			if ((($(".dobDay option[value='29']").length - numDayDropDown) > 0) == false) {

				$(".dobDay").append('<option value="29">29</option>');
			}
			if ((($(".dobDay option[value='30']").length - numDayDropDown) > 0) == false) {

				$(".dobDay").append('<option value="30">30</option>');
			}
			if ((($(".dobDay option[value='31']").length - numDayDropDown) > 0) == false) {

				$(".dobDay").append('<option value="31">31</option>');
			}
		}
	},
	validateFields: function () {
		var areErrorFieldsPresent = false;

		$("[data-quoteTool='" + quoteToolForm + "']").each(function () {
			if (!$("[data-quoteTool='" + quoteToolForm + "']").find(".form-focus").find(".errorSpan").is(":visible")) {
				areErrorFieldsPresent = true;
			}
		});
		return areErrorFieldsPresent;
	},
	numberWithCommas: function (x) {
		var parts = x.toString().split(".");
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		return parts.join(".");
	},
	toTitleCase: function (str) {
		return str.replace(/\w\S*/g, function (txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		});
	},
	encode: function (d) {
		if (d == '<')
			return '&lt;';
		if (d == '>')
			return '&gt;';
		if (d == '&')
			return '&amp;';

		if (d.charCodeAt(0) > 127) {
			return '&#' + d.charCodeAt(0) + ';';
		}
		return d;
	},
	escapeChar: function (value) {
		var bb = "";
		for (i = 0; i < value.length; i++) {
			bb += encode(value.charAt(i));
		}
		return bb;
	},
	strTrim: function (a) {
		a = a.replace(/^\s+/g, "");
		a = a.replace(/\s+$/g, "");
		return a;
	},
	calculateAge: function () {
		var l = 0;
		if (($('#' + quoteToolForm + 'dobMonth').val() != "") && ($('#' + quoteToolForm + 'dobDay').val() != "") && ($('#' + quoteToolForm + 'dobYear').val() != "")) {
			var b = parseInt($('#' + quoteToolForm + 'dobMonth').val());
			var k = parseInt($('#' + quoteToolForm + 'dobDay').val());
			var m = parseInt($('#' + quoteToolForm + 'dobYear').val());
			var g = new Date();
			var e = g.getFullYear();
			var h = g.getMonth() + 1;
			var f = g.getDate();
			var c = 0;
			var a = 0;
			if (e > m) {
				l = e - m;
				c = e - m;
			}
			if (h < b) {
				l = l - 1;
				c = c - 1;
				a = 12 - (b - h);
				if (k > f) {
					a = a - 1;
				}
			} else {
				if (h == b) {
					if (f < k) {
						l = l - 1;
						c = c - 1;
						a = 12 - (b - h);
					}
				} else {
					if (h > b) {
						if (f >= k) {
							a = h - b;
						} else {
							a = (h - b) - 1;
						}
					}
				}

			}
			return l;
		}
	},
	showSorryUnableToLocateMessage: function () {
		count = 0;
		ServicesAPI.createPagination(count);
		$('.results_error_info').removeClass('hidden').html($('.errorMsgtext_no_office_found').text());
		$('.results_content').remove();
		$('.results_pagination,.find_an_office_pagecount_wrap,.maps-button, .google-maps-container').addClass('hidden');
	},
	getQueryStringNew: function () {
		var vars = [], hash;
		var hashes = window.location.href.slice(window.location.href.indexOf('#') + 1).split('&');
		for (var i = 0; i < hashes.length; i++) {
			hash = hashes[i].split('=');
			vars.push(hash[0]);
			vars[hash[0]] = hash[1];
		}
		return vars;
	},
	getQueryStringNoHash: function () {
		var vars = [], hash;
		var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		for (var i = 0; i < hashes.length; i++) {
			hash = hashes[i].split('=');
			vars.push(hash[0]);
			vars[hash[0]] = hash[1];
		}
		return vars;
	},
	createPagination: function (result) {
		$('.results_content').children().removeClass('.hidden');
		var notHiddenList = $(".results_content").children().not('.hidden');
		var listLength = result;
		var st_cnt = 0;
		var end_cnt = 0;
		var next_label = $(".next_label").text();
		var prev_label = $(".prev_label").text();
		// Setting listLength to 0 manually when only undefined are returned
		if (typeof result != 'undefined') {
			if (result.count == 0)
				listLength = 0;
		}
		if (result < listCount) {
			$('.results_pagination').addClass('hidden');
			$(".results_content").children().removeClass('hidden');
			st_cnt = 1;
			end_cnt = listCount;
		}
		else {
			st_cnt = 1;
			end_cnt = listCount;
			$('.results_pagination').removeClass('hidden');
			$(".results_content").children().addClass('hidden');
			$(".results_content").children(':lt(' + listCount + ')').removeClass('hidden');
			$('.results_pagination').bootpag({
				total: Math.ceil(listLength / listCount),
				page: 1,            // default page
				maxVisible: listCount,
				next: next_label,    // visible pagination
				leaps: true,
				prev: prev_label        // next/prev leaps through maxVisible
			}).on("page", function (event, num) {
				$(".results_content").children().addClass('hidden');
				if (num == 1) {
					$(".results_content").children(':lt(' + listCount + ')').removeClass('hidden');
					st_cnt = 1;
					end_cnt = listCount;
				}
				else {
					var start = (listCount * (num - 1)) - 1;
					var end = listCount;
					$(".results_content").children(':gt(' + start + '):lt(' + end + ')').removeClass('hidden');
					st_cnt = listCount * (num - 1) + 1;
					end_cnt = listCount * num;
				}
				if (end_cnt > listLength) {
					end_cnt = listLength;
				}
				$('.display-text > span:first-of-type').html(st_cnt + '&nbsp;' + 'of' + '&nbsp;' + end_cnt);
				// ... after content load -> change total to 10
				$('.results_pagination').bootpag({
					total: Math.ceil(count / listCount),
					maxVisible: listCount
				});
			});
		}

		if (count == 0) {
			st_cnt = listLength;
			end_cnt = listLength;
			$('.display-text > span:nth-of-type(2)').addClass('hidden');
			$('.results_pagination').addClass('hidden');
		}
		else {
			$('.display-text > span:nth-of-type(2)').removeClass('hidden');
			$('.display-text > span:nth-of-type(2)').html('&nbsp;' + count);
		}
		if (end_cnt < result) {
			$('.display-text > span:first-of-type').html(st_cnt + '&nbsp;' + '-' + '&nbsp;' + end_cnt);
		} else {
			$('.display-text > span:first-of-type').html(st_cnt + '&nbsp;' + '-' + '&nbsp;' + result);
		}
	},
	formatQuotePremium: function (premium) {
		//if(premium != Math.round(premium)){
		var dec = parseFloat(Math.round(premium * 100) / 100).toFixed(2);
		return dec;
	},
	quoteServiceCall: function () {

		$.ajax({
			url: quoteUrl + JSON.stringify(quoteRequest),
			contentType: "application/json; charset=utf-8",
			async: true,
			dataType: 'json',
			data: JSON.stringify(quoteRequest),
			type: 'POST',
			success: function (response) {
				var numObjects = Object.keys(response.solution).length;
				window.sessionStorage.clear();
				ServicesAPI.setQuoteSessionStorage();

				if (response.solution.premium !== undefined && response.solution.premium !== null) {
					var prem = ServicesAPI.numberWithCommas(ServicesAPI.formatQuotePremium(response.solution.premium));
					sessionStorage.setItem("premium", prem);
				}

				if (response.solution.age !== undefined && response.solution.age !== null) {
					sessionStorage.setItem("age", response.solution.age);
				}
				if (response.solution.gender !== undefined && response.solution.gender !== null) {
					sessionStorage.setItem("gender", response.solution.gender);
				}
				if (response.solution.coverage !== undefined && response.solution.coverage !== null) {
					var cov = ServicesAPI.numberWithCommas(ServicesAPI.formatQuotePremium(response.solution.coverage));
					sessionStorage.setItem("coverage", cov);
				}
				if (response.solution.term !== undefined && response.solution.term !== null) {
					sessionStorage.setItem("term", response.solution.term);
				}
				if (response.solution.coverageType !== undefined && response.solution.coverage_type !== null) {
					sessionStorage.setItem("coverageType", response.solution.coverageType);
				}
				if (response.solution.state !== undefined && response.solution.state !== null) {
					sessionStorage.setItem("state", response.solution.state);
				}
				if (response.solution.income !== undefined && response.solution.income !== null) {
					sessionStorage.setItem("income", response.solution.income);
				}
				if ($('#' + quoteToolForm + 'dobMonth').length > 0 && $('#' + quoteToolForm + 'dobDay').length > 0 && $('#' + quoteToolForm + 'dobYear').length > 0) {
					sessionStorage.setItem('dobMonth', $('#' + quoteToolForm + 'dobMonth').val());
					sessionStorage.setItem('dobDay', $('#' + quoteToolForm + 'dobDay').val());
					sessionStorage.setItem('dobYear', $('#' + quoteToolForm + 'dobYear').val());
				}
				for (var i = 1; i <= numObjects; i++) {
					var optionalSelect = response.solution.hasOwnProperty('optionalSelect' + i);
					if (optionalSelect) {
						sessionStorage.setItem('optionalSelect' + i, response.solution['optionalSelect' + i]);
					}
					var optionalRadio = response.solution.hasOwnProperty('optionalRadio' + i);
					if (optionalRadio) {
						sessionStorage.setItem('optionalRadio' + i, response.solution['optionalRadio' + i]);
					}
				}
				sessionStorage.setItem("product", quoteProduct);
				ServicesAPI.redirectToQuoteResultsPage();
			},
			error: function (e) {
				console.log('error ', e);
			},
			timeout: 30000
		});
	},
	loadQuoteResults: function () {
		if ($(".js-resultsGlobal").length > 0) {
			if (sessionStorage.getItem("premium") !== null) {
				$(".results-card__quoteinfo__value").text(sessionStorage.getItem("premium"));
			}
			if (sessionStorage.getItem("coverage") !== null) {
				$("[data-field='coverage'] .value").text(sessionStorage.getItem("coverage"));
			}

			if (sessionStorage.getItem("coverageType") !== null) {
				var cov = sessionStorage.getItem("coverageType").toTitleCase();
				$("[data-field='coverage']").html('<span class="value"> ' + cov + ' </span>');
			}
			if (sessionStorage.getItem("coverageType") === null && sessionStorage.getItem("coverage") === null) {
				$("[data-field='coverage']").remove();
			}

			if (sessionStorage.getItem("term") !== null) {
				$("[data-field='term'] .value").text(sessionStorage.getItem("term"));
			} else {
				$("[data-field='term']").html('');
			}
		} else {
			if ($(".list").length > 0) {

			} else {
				$(".insurance-type").val($(".insurance-type option:first").val());
				sessionStorage.clear();
			}
		}
	},
	quoteFormReset: function () {
		$(".cta_header_quote").find(".generic-form").each(function () {
			$(this).find("input, select, textarea").removeClass('error');
			$(this)[0].reset();
		});
	},
	redirectToQuoteResultsPage: function () {
		var url = $("[data-quoteTool='" + quoteToolForm + "']").attr("data-path-to-results");
		window.location.href = url;
	},
	setQuoteSessionStorage: function () {
		var thisForm = $("[data-quoteTool='" + quoteToolForm + "']");
		var numInputs = thisForm.find(".form-focus").length;

		if ($('#' + quoteToolForm + 'userAge').length > 0) {
			sessionStorage.setItem("age", $('#' + quoteToolForm + 'userAge').val());
		}

		if ($('#' + quoteToolForm + 'coverageType').length > 0) {
			sessionStorage.setItem("coverageType", $('#' + quoteToolForm + 'coverageType').val());
		}

		if ($('#' + quoteToolForm + 'coverageText').length > 0) {
			sessionStorage.setItem("coverage", $('#' + quoteToolForm + 'coverageText').val());
		}


		if ($('#' + quoteToolForm + 'state').length > 0) {
			sessionStorage.setItem("state", $('#' + quoteToolForm + 'state').val());
		}

		if ($('#' + quoteToolForm + 'gender').length > 0) {
			sessionStorage.setItem("gender", $('#' + quoteToolForm + 'gender').val());
		}

		if ($('#' + quoteToolForm + 'coverageAmount').length > 0) {
			sessionStorage.setItem("coverage", $('#' + quoteToolForm + 'coverageAmount').val());
		}

		if ($('#' + quoteToolForm + 'termLengthSelect').length > 0) {
			sessionStorage.setItem("term", $('#' + quoteToolForm + 'termLengthSelect').val());
		}

		if ($('#' + quoteToolForm + 'termLengthText').length > 0) {
			sessionStorage.setItem("term", $('#' + quoteToolForm + 'termLengthText').val());
		}

		if ($('#' + quoteToolForm + 'incomeSelect').length > 0) {
			sessionStorage.setItem("income", $('#' + quoteToolForm + 'incomeSelect').val());
		}

		if ($('#' + quoteToolForm + 'incomeText').length > 0) {
			sessionStorage.setItem("income", $('#' + quoteToolForm + 'incomeText').val());
		}

		if ($('#' + quoteToolForm + 'dobMonth').length > 0 && $('#' + quoteToolForm + 'dobDay').length > 0 && $('#' + quoteToolForm + 'dobYear').length > 0) {
			sessionStorage.setItem("dobMonth", $('#' + quoteToolForm + 'dobMonth').val());
			sessionStorage.setItem("dobDay", $('#' + quoteToolForm + 'dobDay').val());
			sessionStorage.setItem("dobYear", $('#' + quoteToolForm + 'dobYear').val());
		}

		for (var i = 1; i <= numInputs; i++) {
			if ($('#' + quoteToolForm + 'optionalSelect' + i).length > 0) {
				sessionStorage.setItem("optionalSelect" + i, $('#' + quoteToolForm + 'optionalSelect' + i).val());
			}

			if ($('[name="' + quoteToolForm + 'radioGroup' + i + '"]').length > 0) {
				sessionStorage.setItem("optionalRadio" + i, $('[name="' + quoteToolForm + 'radioGroup' + i + '"]').val());
			}
		}
	},
	preFillQuoteForm: function () {
		var thisForm = $("[data-quoteTool='" + quoteToolForm + "']");
		var numInputs = thisForm.find(".form-focus").length;

		if ($('#' + quoteToolForm + 'userAge').length > 0) {
			$('#' + quoteToolForm + 'userAge').val(sessionStorage.getItem('age'));
		}

		if ($('#' + quoteToolForm + 'coverageType').length > 0) {
			$('#' + quoteToolForm + 'coverageType').val(sessionStorage.getItem('coverageType'));
		}

		if ($('#' + quoteToolForm + 'coverageText').length > 0) {
			var cov = parseInt(sessionStorage.getItem('coverage').replace(/\,/g, ''));
			$('#' + quoteToolForm + 'coverageText').val(cov);
		}


		if ($('#' + quoteToolForm + 'state').length > 0) {
			$('#' + quoteToolForm + 'state').val(sessionStorage.getItem('state'));
			var state = $('#' + quoteToolForm + 'state').val();
		}

		if ($('#' + quoteToolForm + 'gender').length > 0) {
			$('#' + quoteToolForm + 'gender').val(sessionStorage.getItem('gender'));
		}

		if ($('#' + quoteToolForm + 'coverageAmount').length > 0) {
			var cov = parseInt(sessionStorage.getItem('coverage').replace(/\,/g, ''));
			$('#' + quoteToolForm + 'coverageAmount').val(cov);
		}

		if ($('#' + quoteToolForm + 'termLengthSelect').length > 0) {
			$('#' + quoteToolForm + 'termLengthSelect').val(sessionStorage.getItem('term'));
		}

		if ($('#' + quoteToolForm + 'termLengthText').length > 0) {
			$('#' + quoteToolForm + 'termLengthText').val(sessionStorage.getItem('term'));
		}

		if ($('#' + quoteToolForm + 'incomeSelect').length > 0) {
			$('#' + quoteToolForm + 'incomeSelect').val(sessionStorage.getItem('income'))
		}

		if ($('#' + quoteToolForm + 'incomeText').length > 0) {
			$('#' + quoteToolForm + 'incomeText').val(sessionStorage.getItem('income'))

		}

		if ($('#' + quoteToolForm + 'dobMonth').length > 0 && $('#' + quoteToolForm + 'dobDay').length > 0 && $('#' + quoteToolForm + 'dobYear').length > 0) {
			$('#' + quoteToolForm + 'dobMonth').val(sessionStorage.getItem('dobMonth'));
			$('#' + quoteToolForm + 'dobDay').val(sessionStorage.getItem('dobDay'));
			$('#' + quoteToolForm + 'dobYear').val(sessionStorage.getItem('dobYear'));
		}

		for (var i = 1; i <= numInputs; i++) {
			if ($('#' + quoteToolForm + 'optionalSelect' + i).length > 0) {
				$('#' + quoteToolForm + 'optionalSelect' + i).val(sessionStorage.getItem('optionalSelect' + i));
			}

			if ($('[name="' + quoteToolForm + 'radioGroup' + i + '"]').length > 0) {
				$('[name="' + quoteToolForm + 'radioGroup' + i + '"]').val(sessionStorage.getItem('optionalRadio' + i)).attr("checked", true);
			}
		}
	},
	loopThroughQuoteInputs: function () {
		var thisForm = $("[data-quoteTool='" + quoteToolForm + "']");
		var numInputs = thisForm.find(".form-focus").length;

		if ($('#' + quoteToolForm + 'userAge').length > 0) {
			var age = $('#' + quoteToolForm + 'userAge').val();
			if ($('#' + quoteToolForm + 'userAge')[0].selectedIndex === 0) {
				$('#' + quoteToolForm + 'userAge').addClass("error").next().show().css("display", "block");
			} else {
				//quoteUrl += ',"age":"' + age +'"';
				quoteRequest["age"] = age;
				$('#' + quoteToolForm + 'userAge').removeClass("error").next().hide();
			}
		}

		if ($('#' + quoteToolForm + 'coverageType').length > 0) {
			var coverageType = $('#' + quoteToolForm + 'coverageType').val();
			if ($('#' + quoteToolForm + 'coverageType')[0].selectedIndex === 0) {
				$('#' + quoteToolForm + 'coverageType').addClass("error").next().show().css("display", "block");
			} else {
				//quoteUrl += ',"coverageType":"' + coverageType +'"';
				quoteRequest["coverageType"] = coverageType;
				$('#' + quoteToolForm + 'coverageType').removeClass("error").next().hide();
			}
		}

		if ($('#' + quoteToolForm + 'coverageText').length > 0) {
			var coverageText = $('#' + quoteToolForm + 'coverageText').val();
			if (isWhole(coverageText) === true) {
				//quoteUrl += ',"coverage":"' + coverageText +'"';
				quoteRequest["coverage"] = coverageText;
				$('#' + quoteToolForm + 'coverageText').removeClass("error").next().hide();
			} else {
				$('#' + quoteToolForm + 'coverageText').addClass("error").next().show().css("display", "block");
			}
		}

		if ($('#' + quoteToolForm + 'state').length > 0) {
			var state = $('#' + quoteToolForm + 'state').val();
			if ($('#' + quoteToolForm + 'state')[0].selectedIndex === 0) {
				$('#' + quoteToolForm + 'state').addClass("error").parent().find(".errorSpan").show().css("display", "block");
			} else {
				//quoteUrl += ',"state":"' + state +'"';
				quoteRequest["state"] = state;
				$('#' + quoteToolForm + 'state').removeClass("error").parent().find(".errorSpan").hide();
			}
		}

		if ($('#' + quoteToolForm + 'gender').length > 0) {
			var gender = $('#' + quoteToolForm + 'gender').val();
			if ($('#' + quoteToolForm + 'gender')[0].selectedIndex === 0) {
				$('#' + quoteToolForm + 'gender').addClass("error").next().show().css("display", "block");
			} else {
				//quoteUrl += ',"gender":"' + gender +'"';
				quoteRequest["gender"] = gender;
				$('#' + quoteToolForm + 'gender').removeClass("error").next().hide();
			}
		}

		if ($('#' + quoteToolForm + 'coverageAmount').length > 0) {
			var coverageAmount = $('#' + quoteToolForm + 'coverageAmount').val();
			if ($('#' + quoteToolForm + 'coverageAmount')[0].selectedIndex === 0) {
				$('#' + quoteToolForm + 'coverageAmount').addClass("error").next().show().css("display", "block");
			} else {
				//quoteUrl += ',"coverage":"' + coverageAmount +'"';
				quoteRequest["coverage"] = coverageAmount;
				$('#' + quoteToolForm + 'coverageAmount').removeClass("error").next().hide();
			}
		}

		if ($('#' + quoteToolForm + 'termLengthSelect').length > 0) {
			var termLengthSelect = $('#' + quoteToolForm + 'termLengthSelect').val();
			if ($('#' + quoteToolForm + 'termLengthSelect')[0].selectedIndex === 0) {
				$('#' + quoteToolForm + 'termLengthSelect').addClass("error").next().show().css("display", "block");
			} else {
				//quoteUrl += ',"term":"' + termLengthSelect +'"';
				quoteRequest["term"] = termLengthSelect;
				$('#' + quoteToolForm + 'termLengthSelect').removeClass("error").next().hide();
			}
		}

		if ($('#' + quoteToolForm + 'termLengthText').length > 0) {
			var termLengthText = $('#' + quoteToolForm + 'termLengthText').val();
			if (isNonblank(termLengthText) === true) {
				$('#' + quoteToolForm + 'termLengthText').removeClass("error").next().hide();
				//quoteUrl += ',"term":"' + termLengthText +'"';
				quoteRequest["term"] = termLengthText;
			} else {
				$('#' + quoteToolForm + 'termLengthText').addClass("error").next().show().css("display", "block");

			}
		}

		if ($('#' + quoteToolForm + 'incomeSelect').length > 0) {
			var income = $('#' + quoteToolForm + 'incomeSelect').val();
			if ($('#' + quoteToolForm + 'incomeSelect')[0].selectedIndex === 0) {
				$('#' + quoteToolForm + 'incomeSelect').addClass("error").next().show().css("display", "block");
			} else {
				//quoteUrl += ',"income":"' + income +'"';
				quoteRequest["income"] = income;
				$('#' + quoteToolForm + 'incomeSelect').removeClass("error").next().hide();
			}
		}

		if ($('#' + quoteToolForm + 'incomeText').length > 0) {
			var incomeText = $('#' + quoteToolForm + 'incomeText').val();
			if (isNonblank(incomeText) === true) {
				$('#' + quoteToolForm + 'incomeText').removeClass("error").next().hide();
				//quoteUrl += ',"income":"' + incomeText +'"';
				quoteRequest["income"] = incomeText;
			} else {
				$('#' + quoteToolForm + 'incomeText').addClass("error").next().show().css("display", "block");

			}
		}

		if ($('#' + quoteToolForm + 'dobMonth').length > 0 && $('#' + quoteToolForm + 'dobDay').length > 0 && $('#' + quoteToolForm + 'dobYear').length > 0) {
			var age;
			if ($('#' + quoteToolForm + 'dobMonth')[0].selectedIndex === 0) {
				$('#' + quoteToolForm + 'dobMonth').addClass("error");
			} else {
				$('#' + quoteToolForm + 'dobMonth').removeClass("error");
			}

			if ($('#' + quoteToolForm + 'dobDay')[0].selectedIndex === 0) {
				$('#' + quoteToolForm + 'dobDay').addClass("error");
			}
			else {
				$('#' + quoteToolForm + 'dobDay').removeClass("error");
			}

			if ($('#' + quoteToolForm + 'dobYear')[0].selectedIndex === 0) {
				$('#' + quoteToolForm + 'dobYear').addClass("error");
			}
			else {
				$('#' + quoteToolForm + 'dobYear').removeClass("error");
			}

			if ($('#' + quoteToolForm + 'dobMonth')[0].selectedIndex !== 0 && $('#' + quoteToolForm + 'dobDay')[0].selectedIndex !== 0 && $('#' + quoteToolForm + 'dobYear')[0].selectedIndex !== 0) {
				age = ServicesAPI.calculateAge();
				//quoteUrl += ',"age":"' + age +'"';
				quoteRequest["age"] = age;
			}
		}
		for (var i = 1; i <= numInputs; i++) {
			if ($('#' + quoteToolForm + 'optionalSelect' + i).length > 0) {
				var optionalSelect = $('#' + quoteToolForm + 'optionalSelect' + i).val();
				if ($('#' + quoteToolForm + 'optionalSelect' + i)[0].selectedIndex === 0) {
					$('#' + quoteToolForm + 'optionalSelect' + i).addClass("error").next().show().css("display", "block");
				} else {
					//quoteUrl += ',"optionalSelect'+i+'":"' + optionalSelect +'"';
					var optionalSelectText = 'optionalSelect' + i;
					quoteRequest[optionalSelectText] = optionalSelect;
					$('#' + quoteToolForm + 'optionalSelect' + i).removeClass("error").next().hide();
				}
			}

			if ($('[name="' + quoteToolForm + 'radioGroup' + i + '"]').length > 0) {
				var optionalRadio = $('[name="' + quoteToolForm + 'radioGroup' + i + '"]:checked').val();
				if (optionalRadio === "" || optionalRadio === " " || optionalRadio === null || optionalRadio === undefined) {
					$('[name="' + quoteToolForm + 'radioGroup' + i + '"]').parent().parent().find(".errorSpan").show().css("display", "block");
				} else {
					$('[name="' + quoteToolForm + 'radioGroup' + i + '"]').parent().parent().find(".errorSpan").hide();
					//quoteUrl += ',"optionalRadio'+i+'":"' + optionalRadio +'"';
					var optionalSelectText = 'optionalRadio' + i;
					quoteRequest[optionalSelectText] = optionalRadio;
				}
			}
		}
	},
	searchServiceCall: function (input) {
		count = 0;
		var url = input;
		var querySearch = ServicesAPI.getQueryStringNew()["query"];
		if (querySearch !== null && querySearch !== undefined && querySearch !== "" && querySearch !== " ") {
			url += "?query=" + querySearch;
		}
		$(".results_content").remove();
		resultsListHTML = "";
		/************LOCAL Site Search SERVICE***************/

		/*var siteSearchResults = $.getJSON("search.json", function(json) {
		 siteSearchResults = json.response.docs;
		 if (siteSearchResults.length != 0) {
		 $('.form-item__display').removeClass('hidden');
		 // $(".page-count").removeClass('hidden');
		 $(".no-results").addClass('hidden');
		 //results_content is the default component for listing out general results
		 resultsListHTML += "<div class=\"results_content\">";
		 for (var i = 0; i < siteSearchResults.length; i++) {
		 count++;
		 resultsListHTML += "<div class=\"list__item--no-border\">";
		 resultsListHTML += "<a class=\"list__item__anchor inline-block\" href=\"" + siteSearchResults[i].url + "\">" + siteSearchResults[i].title + "</a>";
		 resultsListHTML += "<p>" + siteSearchResults[i].content + "</p>";
		 resultsListHTML += "</div>";
		 }
		 resultsListHTML += "</div>";
		 } else {
		 $('.form-item__display').removeClass('hidden');
		 $(".page-count").addClass('hidden');
		 $(".no-results").removeClass('hidden');
		 }
		 $(resultsListHTML).insertAfter($(".search-results-container__correction-text"));
		 ServicesAPI.createPagination(count);
		 });*/
		/************LOCAL Site Search SERVICE***************/


		/************LIVE Site Search SERVICE***************/
		$.ajax({
			url: url,
			contentType: "application/json; charset=utf-8",
			async: true,
			dataType: 'json',
			type: 'GET',
			success: function (data) {
				var siteSearchResults = json.response.docs;
				if (siteSearchResults.length != 0) {
					$('.form-item__display').removeClass('hidden');
					// $(".page-count").removeClass('hidden');
					$(".no-results").addClass('hidden');
					//results_content is the default component for listing out general results
					resultsListHTML += "<div class=\"results_content\">";
					for (var i = 0; i < siteSearchResults.length; i++) {
						count++;
						resultsListHTML += "<div class=\"list__item--no-border\">";
						resultsListHTML += "<a class=\"list__item__anchor inline-block\" href=\"" + siteSearchResults[i].url + "\">" + siteSearchResults[i].title + "</a>";
						resultsListHTML += "<p>" + siteSearchResults[i].content + "</p>";
						resultsListHTML += "</div>";
					}
					resultsListHTML += "</div>";
				} else {
					$('.form-item__display').removeClass('hidden');
					$(".page-count").addClass('hidden');
					$(".no-results").removeClass('hidden');
				}
				$(resultsListHTML).insertAfter($(".search-results-container__correction-text"));
				ServicesAPI.createPagination(count);
			},
			error: function (e) {
				ServicesAPI.showSorryUnableToLocateMessage();
			},
			timeout: 30000
		});
		/************LIVE SERVICE***************/
	},
	legacySearch: function (serchQuery) {
		var str = "https://www.metlife.com/searchresults?query=";
		var val2 = "&spell_check=true&and_on=Y&sel_path=metlife%2Findividual%2Findex.html&remoteUser=";
		str += serchQuery + val2;
		window.location.href = str;
	},
	redirectToSearchResultsPage: function (input) {
		var searchTerm = sessionStorage.setItem("searchTerm", input);
		var url = $("#metSearchForm").attr("data-path-to-search-results");
		window.location.href = url;
	},
	searchResultsPageLoad: function () {
		var cov = sessionStorage.getItem("searchTerm");
		if (sessionStorage.getItem("searchTerm") !== null) {
			if ($(".js-searchTextBox").css("display") !== " none") {

				$(".js-searchTextBox").val(sessionStorage.getItem("searchTerm"));
				$(".js-searchSubmit").click();
			}
		}

	},
	newsRoomServiceConstruction: function () {
		var url = $(".lists").attr("data-news-url");
		var query = $(".lists").attr("data-news-query-parameter");
		newsMonth = $("#list_month").val();
		newsYear = $("#list_year").val();
		newsTopic = $('#list_topics').val();
		newsConcatenator = $(".lists").attr("data-news-concatenator");
		url += newsYear + newsConcatenator + newsMonth + newsConcatenator + newsTopic + query;
		ServicesAPI.newsRoomServiceCall(url);
	},
	pressBackQuery: function () {
		var month = sessionStorage.getItem("press_month");
		var year = sessionStorage.getItem("press_year");
		var search = sessionStorage.getItem("press_search");
		if (month != null && month != null && year != null) {
			$('#list_month').val(month);
			$('#list_year').val(year);
			$('#list_topics').val(search);
		}
		sessionStorage.removeItem("press_back");
		sessionStorage.removeItem("press_month");
		sessionStorage.removeItem("press_year");
		sessionStorage.removeItem("press_search");
	},
	newsRoomServiceCall: function (input) {
		resultsListHTML = "";
		var url = input;
		count = 0;
		$(".results_content").remove();
		/************LIVE News Room SERVICE***************/
		/*$.ajax({
			url: url,
			contentType: "application/json; charset=utf-8",
			async: true,
			dataType: 'json',
			type: 'GET',
			success: function (data) {

				if (firstTimeRunNewsRoom === false || firstTimeRunNewsRoomChange === false) {
					listCount += 6;
				}

				if (firstTimeRunNewsRoom === true) {
					firstTimeRunNewsRoom = false;
				}
				if (firstTimeRunNewsRoomChange === true) {
					firstTimeRunNewsRoomChange = false;
				}


				newsRoomResults = data.news;
				if (newsRoomResults.length != 0) {
					if (!$(".list__item--no-results").hasClass("hidden")) {
						$(".list__item--no-results").addClass("hidden");
					}
					resultsListHTML += "<div class='results_content'>";
					for (var i = 0; i < newsRoomResults.length; i++) {
						totalYears.push(newsRoomResults[i].year);
						totalMonths.push(newsRoomResults[i].month);
						count++;
						if (count <= listCount) {
							resultsListHTML += "<div class=\"list__item\">";
							resultsListHTML += "<span class=\"list__item__date\">" + newsRoomResults[i].publishedDate + "</span>";
							resultsListHTML += "<a class=\"list__item__title\" href=\"" + newsRoomResults[i].link + "\">" + newsRoomResults[i].title + "</a>";
							resultsListHTML += "</div>";
						}
					}
					resultsListHTML += "</div>";
					ServicesAPI.createPagination(count);
					$(resultsListHTML).insertAfter($(".lists"));
				} else {
					$(".list__item--no-results").removeClass('hidden');
				}
				if (listCount >= newsRoomResults.length) {
					$(".divider--load-more__link").hide();
				} else {
					$(".divider--load-more__link").show();
				}

			},
			error: function (e) {
				console.log('error ', e);
			},
			timeout: 30000
		});*/
		/************LIVE News Room SERVICE***************/

		/************LOCAL News Room SERVICE***************/
			if($("#list_topics").val() === "Studies"){
				var newsRoomResults = $.getJSON("newsStudies.json", function (data) {
					if (firstTimeRunNewsRoom === false || firstTimeRunNewsRoomChange === false) {
						listCount += 6;
					}

					if (firstTimeRunNewsRoom === true) {
						firstTimeRunNewsRoom = false;
					}
					if (firstTimeRunNewsRoomChange === true) {
						firstTimeRunNewsRoomChange = false;
					}


					newsRoomResults = data.news;
					if (newsRoomResults.length != 0) {
						if (!$(".list__item--no-results").hasClass("hidden")) {
							$(".list__item--no-results").addClass("hidden");
						}
						resultsListHTML += "<div class='results_content'>";
						for (var i = 0; i < newsRoomResults.length; i++) {
							totalYears.push(newsRoomResults[i].year);
							totalMonths.push(newsRoomResults[i].month);
							count++;
							if (count <= listCount) {
								resultsListHTML += "<div class=\"list__item\">";
								resultsListHTML += "<span class=\"list__item__date\">" + newsRoomResults[i].publishedDate + "</span>";
								resultsListHTML += "<a class=\"list__item__title\" href=\"" + newsRoomResults[i].link + "\">" + newsRoomResults[i].title + "</a>";
								resultsListHTML += "</div>";
							}
						}
						resultsListHTML += "</div>";
						ServicesAPI.createPagination(count);
						$(resultsListHTML).insertAfter($(".lists"));
					} else {
						$(".list__item--no-results").removeClass('hidden');
					}
					if (listCount >= newsRoomResults.length) {
						$(".divider--load-more__link").hide();
					} else {
						$(".divider--load-more__link").show();
					}
				});
			}else if($("#list_topics").val() === "Studies"){
				var newsRoomResults = $.getJSON("news.json", function (data) {
					if (firstTimeRunNewsRoom === false || firstTimeRunNewsRoomChange === false) {
						listCount += 6;
					}

					if (firstTimeRunNewsRoom === true) {
						firstTimeRunNewsRoom = false;
					}
					if (firstTimeRunNewsRoomChange === true) {
						firstTimeRunNewsRoomChange = false;
					}


					newsRoomResults = data.news;
					if (newsRoomResults.length != 0) {
						if (!$(".list__item--no-results").hasClass("hidden")) {
							$(".list__item--no-results").addClass("hidden");
						}
						resultsListHTML += "<div class='results_content'>";
						for (var i = 0; i < newsRoomResults.length; i++) {
							totalYears.push(newsRoomResults[i].year);
							totalMonths.push(newsRoomResults[i].month);
							count++;
							if (count <= listCount) {
								resultsListHTML += "<div class=\"list__item\">";
								resultsListHTML += "<span class=\"list__item__date\">" + newsRoomResults[i].publishedDate + "</span>";
								resultsListHTML += "<a class=\"list__item__title\" href=\"" + newsRoomResults[i].link + "\">" + newsRoomResults[i].title + "</a>";
								resultsListHTML += "</div>";
							}
						}
						resultsListHTML += "</div>";
						ServicesAPI.createPagination(count);
						$(resultsListHTML).insertAfter($(".lists"));
					} else {
						$(".list__item--no-results").removeClass('hidden');
					}
					if (listCount >= newsRoomResults.length) {
						$(".divider--load-more__link").hide();
					} else {
						$(".divider--load-more__link").show();
					}
				});
			}

		/************LOCAL News Room SERVICE***************/
	},
	newsRoomTopicsChange: function(){
		totalYears.sort(function(a, b){return a - b});
		totalMonths.sort(function(a, b){return a - b});
		totalYears = unique(totalYears);
		totalMonths = unique(totalMonths);
		var selectYear = $('#list_year');
		selectYear.empty();
		var firstTime = true;
		for (var i in totalYears) {
			if(firstTime === true){
				selectYear.append('<option value="'+totalYears[i] +'" selected>'+totalYears[i]+'</option>');
			}else {
				selectYear.append('<option value="' + totalYears[i] + '">' + totalYears[i] + '</option>');
			}
		}
		firstTime = false;
		var selectMonth = $('#list_month');
		selectMonth.empty();
		selectMonth.append('<option value="All" selected>All</option>');
		var thisMonth;
		if($("#list_topics").prop('selectedIndex') === 0){
			for(var i = 1; i <=12; i++){
				thisMonth = $(".month_"+ i).text();
				selectMonth.append('<option value="'+ thisMonth + '">'+thisMonth+'</option>');
			}
		}else{

			for (var i in totalMonths) {
				switch(totalMonths[i]){
					case 1:
						thisMonth = $(".month_1").text();
						break;
					case 2:
						thisMonth = $(".month_2").text();
						break;
					case 3:
						thisMonth = $(".month_3").text();
						break;
					case 4:
						thisMonth = $(".month_4").text();
						break;
					case 5:
						thisMonth = $(".month_5").text();
						break;
					case 6:
						thisMonth = $(".month_6").text();
						break;
					case 7:
						thisMonth = $(".month_7").text();
						break;
					case 8:
						thisMonth = $(".month_8").text();
						break;
					case 9:
						thisMonth = $(".month_9").text();
						break;
					case 10:
						thisMonth = $(".month_10").text();
						break;
					case 11:
						thisMonth = $(".month_11").text();
						break;
					default:
						thisMonth = $(".month_12").text();
						break;
				}
				selectMonth.append('<option value="'+thisMonth+'">'+thisMonth+'</option>');
			}
		}

	},
	blogsServiceCall: function (input, searchType) {
		resultsListHTML = "";
		$(".results_content").remove();
		count = 0;
		var url = input + "?" + searchType;
		/*********LOCAL Blog SERVICE***************/
		/*var blogSearchResults = $.getJSON("blog.json", function(data) {
		 blogSearchResults = data.response.blogs;
		 resultsListHTML += "<div class=\"results_content\">";
		 if (blogSearchResults.length != 0) {
		 for (var i = 0; i < blogSearchResults.length; i++) {
		 count++
		 resultsListHTML += "<div class=\"blog-list__article \">";
		 resultsListHTML += "<div class=\"blog-list__img \">";
		 resultsListHTML += "<img src=\"" + blogSearchResults[i].imgsource +"\" alt=\"" + blogSearchResults[i].alttext +"\" class=\"enlarge\">";
		 resultsListHTML += "</div>";
		 resultsListHTML += "<div class=\"blog-list__text\">";
		 resultsListHTML += "<h5>" + blogSearchResults[i].title +"</h5>";
		 resultsListHTML += "<span class=\"blog-list__date blog-list__category\">" + blogSearchResults[i].date +"</span>";
		 resultsListHTML += "<span class=\"blog-list__category\">" + blogSearchResults[i].tags +"</span>";
		 resultsListHTML+= "<span class=\"blog-list__description\">" + blogSearchResults[i].description + " ";
		 if(blogSearchResults[i].link != null && blogSearchResults[i].link != undefined && blogSearchResults[i].link !== "" && blogSearchResults[i].link !== " "){
		 resultsListHTML += "<a href=\"" + blogSearchResults[i].link +"\">" + blogSearchResults[i].linktext +"</a>"
		 }
		 resultsListHTML += "</span>";
		 resultsListHTML += "</div>";
		 resultsListHTML += "<div class=\"clearfix\"></div>";
		 resultsListHTML += "</div>";
		 }
		 }
		 resultsListHTML += "</div>";
		 $(resultsListHTML).insertBefore($(".results_pagination"));
		 ServicesAPI.createPagination(count);
		 });*/

		/************LOCAL Blog SERVICE***************/

		/************LIVE Blog SERVICE***************/
		$.ajax({
			url: url,
			contentType: "application/json; charset=utf-8",
			async: true,
			dataType: 'json',
			type: 'GET',
			success: function (data) {
				var blogSearchResults = data.response.blogs;
				resultsListHTML += "<div class=\"results_content\">";
				if (blogSearchResults.length != 0) {
					for (var i = 0; i < blogSearchResults.length; i++) {
						count++
						resultsListHTML += "<div class=\"blog-list__article \">";
						resultsListHTML += "<div class=\"blog-list__img \">";
						resultsListHTML += "<img src=\"" + blogSearchResults[i].imgsource + "\" alt=\"" + blogSearchResults[i].alttext + "\" class=\"enlarge\">";
						resultsListHTML += "</div>";
						resultsListHTML += "<div class=\"blog-list__text\">";
						resultsListHTML += "<h5>" + blogSearchResults[i].title + "</h5>";
						resultsListHTML += "<span class=\"blog-list__date blog-list__category\">" + blogSearchResults[i].date + "</span>";
						resultsListHTML += "<span class=\"blog-list__category\">" + blogSearchResults[i].tags + "</span>";
						resultsListHTML += "<span class=\"blog-list__description\">" + blogSearchResults[i].description + " ";
						if (blogSearchResults[i].link != null && blogSearchResults[i].link != undefined && blogSearchResults[i].link !== "" && blogSearchResults[i].link !== " ") {
							resultsListHTML += "<a href=\"" + blogSearchResults[i].link + "\">" + blogSearchResults[i].linktext + "</a>"
						}
						resultsListHTML += "</span>";
						resultsListHTML += "</div>";
						resultsListHTML += "<div class=\"clearfix\"></div>";
						resultsListHTML += "</div>";
					}
				}
				resultsListHTML += "</div>";
				$(resultsListHTML).insertBefore($(".results_pagination"));
				ServicesAPI.createPagination(count);
			},
			error: function (e) {
				console.log('error ', e);
			},
			timeout: 30000
		});
		/************LIVE Blog SERVICE***************/
	},
	formsLibraryServiceCall: function (input) {
		resultsListHTML = "";
		$(".results_content").remove();
		count = 0;
		var url = input;
		/*********LOCAL Forms SERVICE***************/
		/*var formsSearchResults = $.getJSON("forms.json", function(data) {
		 formsSearchResults = data.response.docs;
		 var metaDataResults = data.response.metaData[0];
		 resultsListHTML += "<div class=\"results_content\">";
		 if (formsSearchResults.length != 0) {
		 for (var i = 0; i < formsSearchResults.length; i++) {
		 count++
		 if (formsSearchResults[i].eform_url != null && formsSearchResults[i].eform_url != undefined && formsSearchResults[i].eform_url != "" && formsSearchResults[i].eform_url != " ") {
		 resultsListHTML += "<div class=\"row list__item \">";
		 if (formsSearchResults[i].file_category_title != null && formsSearchResults[i].file_category_title != undefined) {
		 resultsListHTML += "<span class=\"list__item__date\">" + formsSearchResults[i].file_category_title + "</span>";
		 }
		 if (formsSearchResults[i].file_title != null && formsSearchResults[i].file_title != undefined && formsSearchResults[i].file_description != null && formsSearchResults[i].file_description != undefined) {
		 resultsListHTML += " <div class=\"list__item--left\">";
		 resultsListHTML += "<a href=\"" + formsSearchResults[i].eform_url + "\" class=\"list__item__title text-bold\">" + formsSearchResults[i].file_title + "</a>";
		 resultsListHTML += "<p>"+ formsSearchResults[i].file_description +"</p>";
		 resultsListHTML += "</div>";
		 }
		 if (formsSearchResults[i].file_type != null && formsSearchResults[i].file_type != undefined && formsSearchResults[i].file_type !== "" && formsSearchResults[i].file_type !== " ") {
		 resultsListHTML += "<div class=\"list__item--right\">";
		 resultsListHTML += "<a href=\"" + formsSearchResults[i].eform_url + "\">";
		 if (formsSearchResults[i].file_type.toLowerCase() == "doc" || formsSearchResults[i].file_type.toLowerCase() == "docx") {
		 resultsListHTML += "<img src=\"images/icon_word.png\" alt=\"Document icon\" class=\"document-icon\">";
		 } else if (formsSearchResults[i].file_type.toLowerCase() == "ppt" || formsSearchResults[i].file_type.toLowerCase() == "pptx") {
		 resultsListHTML += "<img src=\"images/icon_powerpoint.png\" alt=\"powerpoint icon\" class=\"document-icon\">";
		 } else if (formsSearchResults[i].file_type.toLowerCase() == "xls" || formsSearchResults[i].file_type.toLowerCase() == "xlsx") {
		 resultsListHTML += "<img src=\"images/icon_excel.png\" alt=\"Excel icon\" class=\"document-icon\">";
		 } else if (formsSearchResults[i].file_type.toLowerCase() == "pdf") {
		 resultsListHTML += "<img src=\"images/icon_pdf.png\" alt=\"PDF icon\" class=\"document-icon\">";
		 }
		 resultsListHTML += "</a>";
		 resultsListHTML += "<a href=\"" + formsSearchResults[i].eform_url + "\" class=\"hidden-xs download-link\">" + metaDataResults.download_text + "</a>";
		 resultsListHTML += "<span class=\"block document-size\">(" + formsSearchResults[i].file_type.toUpperCase() + "-" + (Math.round((formsSearchResults[i].eform_size) / 1024)) + " KB)</span>";
		 resultsListHTML += "</div>";
		 }
		 resultsListHTML += "<span class=\"clearfix\"></span>";
		 resultsListHTML += "</div>";


		 }

		 if (formsSearchResults[i].file_url != null && formsSearchResults[i].file_url != undefined && formsSearchResults[i].file_url != "" && formsSearchResults[i].file_url != " ") {
		 resultsListHTML += "<div class=\"row list__item \">";
		 if (formsSearchResults[i].file_category_title != null && formsSearchResults[i].file_category_title != undefined) {
		 resultsListHTML += "<span class=\"list__item__date\">" + formsSearchResults[i].file_category_title + "</span>";
		 }
		 if (formsSearchResults[i].file_title != null && formsSearchResults[i].file_title != undefined && formsSearchResults[i].file_description != null && formsSearchResults[i].file_description != undefined) {
		 resultsListHTML += " <div class=\"list__item--left\">";
		 resultsListHTML += "<a href=\"" + formsSearchResults[i].file_url + "\" class=\"list__item__title text-bold\">" + formsSearchResults[i].file_title +"</a>";
		 resultsListHTML += "<p>"+ formsSearchResults[i].file_description +"</p>";
		 resultsListHTML += "</div>";
		 }
		 if (formsSearchResults[i].file_type != null && formsSearchResults[i].file_type != undefined && formsSearchResults[i].file_type !== "" && formsSearchResults[i].file_type !== " " && formsSearchResults[i].file_size != null && formsSearchResults[i].file_size != undefined && formsSearchResults[i].file_size != "" && formsSearchResults[i].file_size != " ") {
		 resultsListHTML += "<div class=\"list__item--right\">";
		 resultsListHTML += "<a href=\"" + formsSearchResults[i].file_url + "\">";
		 if (formsSearchResults[i].file_type.toLowerCase() == "doc" || formsSearchResults[i].file_type.toLowerCase() == "docx") {
		 resultsListHTML += "<img src=\"images/icon_word.png\" alt=\"Document icon\" class=\"document-icon\">";
		 } else if (formsSearchResults[i].file_type.toLowerCase() == "ppt" || formsSearchResults[i].file_type.toLowerCase() == "pptx") {
		 resultsListHTML += "<img src=\"images/icon_powerpoint.png\" alt=\"powerpoint icon\" class=\"document-icon\">";
		 } else if (formsSearchResults[i].file_type.toLowerCase() == "xls" || formsSearchResults[i].file_type.toLowerCase() == "xlsx") {
		 resultsListHTML += "<img src=\"images/icon_excel.png\" alt=\"Excel icon\" class=\"document-icon\">";
		 } else if (formsSearchResults[i].file_type.toLowerCase() == "pdf") {
		 resultsListHTML += "<img src=\"images/icon_pdf.png\" alt=\"PDF icon\" class=\"document-icon\">";
		 }
		 resultsListHTML += "</a>";
		 resultsListHTML += "<a href=\"" + formsSearchResults[i].file_url + "\" class=\"hidden-xs download-link\">" + metaDataResults.download_text + "</a>";
		 resultsListHTML += "<span class=\"block document-size\">(" + formsSearchResults[i].file_type.toUpperCase() + "-" + (Math.round((formsSearchResults[i].file_size) / 1024)) + " KB)</span>";
		 resultsListHTML += "</div>";
		 }
		 resultsListHTML += "<span class=\"clearfix\"></span>";
		 resultsListHTML += "</div>";
		 }
		 }
		 }
		 resultsListHTML += "</div>";
		 $(resultsListHTML).insertAfter($(".lists"));
		 ServicesAPI.createPagination(count);
		 });*/

		/************LOCAL Forms SERVICE***************/

		/************LIVE Forms SERVICE***************/
		$.ajax({
			url: url,
			contentType: "application/json; charset=utf-8",
			async: true,
			dataType: 'json',
			type: 'GET',
			success: function (data) {
				var formsSearchResults = data.response.docs;
				var metaDataResults = data.response.metaData[0];

				resultsListHTML += "<div class=\"results_content\">";
				if (formsSearchResults.length != 0) {
					for (var i = 0; i < formsSearchResults.length; i++) {
						count++
						if (formsSearchResults[i].eform_url != null && formsSearchResults[i].eform_url != undefined && formsSearchResults[i].eform_url != "" && formsSearchResults[i].eform_url != " ") {
							resultsListHTML += "<div class=\"row list__item \">";
							if (formsSearchResults[i].file_category_title != null && formsSearchResults[i].file_category_title != undefined) {
								resultsListHTML += "<span class=\"list__item__date\">" + formsSearchResults[i].file_category_title + "</span>";
							}
							if (formsSearchResults[i].file_title != null && formsSearchResults[i].file_title != undefined && formsSearchResults[i].file_description != null && formsSearchResults[i].file_description != undefined) {
								resultsListHTML += " <div class=\"list__item--left\">";
								resultsListHTML += "<a href=\"" + formsSearchResults[i].eform_url + "\" class=\"list__item__title text-bold\">" + formsSearchResults[i].file_title + "</a>";
								resultsListHTML += "<p>" + formsSearchResults[i].file_description + "</p>";
								resultsListHTML += "</div>";
							}
							if (formsSearchResults[i].file_type != null && formsSearchResults[i].file_type != undefined && formsSearchResults[i].file_type !== "" && formsSearchResults[i].file_type !== " ") {
								resultsListHTML += "<div class=\"list__item--right\">";
								resultsListHTML += "<a href=\"" + formsSearchResults[i].eform_url + "\">";
								if (formsSearchResults[i].file_type.toLowerCase() == "doc" || formsSearchResults[i].file_type.toLowerCase() == "docx") {
									resultsListHTML += "<img src=\"images/icon_word.png\" alt=\"Document icon\" class=\"document-icon\">";
								} else if (formsSearchResults[i].file_type.toLowerCase() == "ppt" || formsSearchResults[i].file_type.toLowerCase() == "pptx") {
									resultsListHTML += "<img src=\"images/icon_powerpoint.png\" alt=\"powerpoint icon\" class=\"document-icon\">";
								} else if (formsSearchResults[i].file_type.toLowerCase() == "xls" || formsSearchResults[i].file_type.toLowerCase() == "xlsx") {
									resultsListHTML += "<img src=\"images/icon_excel.png\" alt=\"Excel icon\" class=\"document-icon\">";
								} else if (formsSearchResults[i].file_type.toLowerCase() == "pdf") {
									resultsListHTML += "<img src=\"images/icon_pdf.png\" alt=\"PDF icon\" class=\"document-icon\">";
								}
								resultsListHTML += "</a>";
								resultsListHTML += "<a href=\"" + formsSearchResults[i].eform_url + "\" class=\"hidden-xs download-link\">" + metaDataResults.download_text + "</a>";
								resultsListHTML += "<span class=\"block document-size\">(" + formsSearchResults[i].file_type.toUpperCase() + "-" + (Math.round((formsSearchResults[i].eform_size) / 1024)) + " KB)</span>";
								resultsListHTML += "</div>";
							}
							resultsListHTML += "<span class=\"clearfix\"></span>";
							resultsListHTML += "</div>";


						}

						if (formsSearchResults[i].file_url != null && formsSearchResults[i].file_url != undefined && formsSearchResults[i].file_url != "" && formsSearchResults[i].file_url != " ") {
							resultsListHTML += "<div class=\"row list__item \">";
							if (formsSearchResults[i].file_category_title != null && formsSearchResults[i].file_category_title != undefined) {
								resultsListHTML += "<span class=\"list__item__date\">" + formsSearchResults[i].file_category_title + "</span>";
							}
							if (formsSearchResults[i].file_title != null && formsSearchResults[i].file_title != undefined && formsSearchResults[i].file_description != null && formsSearchResults[i].file_description != undefined) {
								resultsListHTML += " <div class=\"list__item--left\">";
								resultsListHTML += "<a href=\"" + formsSearchResults[i].file_url + "\" class=\"list__item__title text-bold\">" + formsSearchResults[i].file_title + "</a>";
								resultsListHTML += "<p>" + formsSearchResults[i].file_description + "</p>";
								resultsListHTML += "</div>";
							}
							if (formsSearchResults[i].file_type != null && formsSearchResults[i].file_type != undefined && formsSearchResults[i].file_type !== "" && formsSearchResults[i].file_type !== " " && formsSearchResults[i].file_size != null && formsSearchResults[i].file_size != undefined && formsSearchResults[i].file_size != "" && formsSearchResults[i].file_size != " ") {
								resultsListHTML += "<div class=\"list__item--right\">";
								resultsListHTML += "<a href=\"" + formsSearchResults[i].file_url + "\">";
								if (formsSearchResults[i].file_type.toLowerCase() == "doc" || formsSearchResults[i].file_type.toLowerCase() == "docx") {
									resultsListHTML += "<img src=\"images/icon_word.png\" alt=\"Document icon\" class=\"document-icon\">";
								} else if (formsSearchResults[i].file_type.toLowerCase() == "ppt" || formsSearchResults[i].file_type.toLowerCase() == "pptx") {
									resultsListHTML += "<img src=\"images/icon_powerpoint.png\" alt=\"powerpoint icon\" class=\"document-icon\">";
								} else if (formsSearchResults[i].file_type.toLowerCase() == "xls" || formsSearchResults[i].file_type.toLowerCase() == "xlsx") {
									resultsListHTML += "<img src=\"images/icon_excel.png\" alt=\"Excel icon\" class=\"document-icon\">";
								} else if (formsSearchResults[i].file_type.toLowerCase() == "pdf") {
									resultsListHTML += "<img src=\"images/icon_pdf.png\" alt=\"PDF icon\" class=\"document-icon\">";
								}
								resultsListHTML += "</a>";
								resultsListHTML += "<a href=\"" + formsSearchResults[i].file_url + "\" class=\"hidden-xs download-link\">" + metaDataResults.download_text + "</a>";
								resultsListHTML += "<span class=\"block document-size\">(" + formsSearchResults[i].file_type.toUpperCase() + "-" + (Math.round((formsSearchResults[i].file_size) / 1024)) + " KB)</span>";
								resultsListHTML += "</div>";
							}
							resultsListHTML += "<span class=\"clearfix\"></span>";
							resultsListHTML += "</div>";
						}
					}
				}
				resultsListHTML += "</div>";
				$(resultsListHTML).insertAfter($(".lists"));
				ServicesAPI.createPagination(count);
			},
			error: function (e) {
				console.log('error ', e);
			},
			timeout: 30000
		});
		/************LIVE Forms SERVICE***************/
	},
	clearOverlays: function () {
		for (var i = 0; i < markersArray.length; i++) {
			markersArray[i].setMap(null);
		}
		for (var i = 0; i < dir_markerArray.length; i++) {
			dir_markerArray[i].setMap(null);
		}
	},
	initializeFindAnOffice: function () {
		var myOptions = {
			mapTypeControl: true,
			mapTypeControlOptions: {
				style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
				position: google.maps.ControlPosition.TOP_RIGHT,
				mapTypeIds: [
					google.maps.MapTypeId.ROADMAP,
					google.maps.MapTypeId.SATELLITE
				]
			},
			zoomControl: true,
			zoomControlOptions: {
				position: google.maps.ControlPosition.TOP_LEFT
			},
			streetViewControl: true,
			streetViewControlOptions: {
				position: google.maps.ControlPosition.LEFT_TOP
			},
			scaleControl: false,
			scrollwheel: true,
			zoom: 10
		};

		map = new google.maps.Map(document.getElementById("googleMapsContainer"), myOptions);
		ServicesAPI.autocompleteOn();
	},
	autocompleteOn: function () {
		if (typeof countryCode !== 'undefined') {
			var options = {
				componentRestrictions: {country: countryCode}
			};
			googleautocomplete = new google.maps.places.Autocomplete(document.getElementsByClassName("cta_search")[0], options);
		}else{
			googleautocomplete = new google.maps.places.Autocomplete(document.getElementsByClassName("cta_search")[0]);
		}
		googleautocomplete.bindTo('bounds', map);
		google.maps.event.addListener(googleautocomplete, 'place_changed', function () {
			var place = googleautocomplete.getPlace();
			if (!place || !place.geometry) {

			}
		});
	},
	initializeGoogleMapObject: function () {
		$('#googleMapsContainer').removeClass('hidden');
		var myOptions = {
			mapTypeControl: true,
			mapTypeControlOptions: {
				style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
				position: google.maps.ControlPosition.TOP_RIGHT,
				mapTypeIds: [
					google.maps.MapTypeId.ROADMAP,
					google.maps.MapTypeId.SATELLITE
				]
			},
			zoomControl: true,
			zoomControlOptions: {
				position: google.maps.ControlPosition.TOP_LEFT
			},
			streetViewControl: true,
			streetViewControlOptions: {
				position: google.maps.ControlPosition.LEFT_TOP
			},
			scaleControl: false,
			scrollwheel: true,
			zoom: 10
		};

		map = new google.maps.Map(document.getElementById("googleMapsContainer"), myOptions);
	},
	initializeDrivingGoogleMapObject: function () {
		$('#googleDrivingMapsContainer').removeClass('hidden');
		var myOptions = {
			mapTypeControl: true,
			mapTypeControlOptions: {
				style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
				position: google.maps.ControlPosition.TOP_RIGHT,
				mapTypeIds: [
					google.maps.MapTypeId.ROADMAP,
					google.maps.MapTypeId.SATELLITE
				]
			},
			zoomControl: true,
			zoomControlOptions: {
				position: google.maps.ControlPosition.TOP_LEFT
			},
			streetViewControl: true,
			streetViewControlOptions: {
				position: google.maps.ControlPosition.LEFT_TOP
			},
			scaleControl: false,
			scrollwheel: true,
			zoom: 10
		};
		map = new google.maps.Map(document.getElementById("googleDrivingMapsContainer"), myOptions);
		if (typeof countryCode !== 'undefined') {
			var options = {
				componentRestrictions: {country: countryCode}
			};
			googleautocomplete = new google.maps.places.Autocomplete(document.getElementsByClassName('from-address')[0], options);
		}else{
			googleautocomplete = new google.maps.places.Autocomplete(document.getElementsByClassName('from-address')[0]);
		}
		googleautocomplete.bindTo('bounds', map);
		google.maps.event.addListener(googleautocomplete, 'place_changed', function () {
			var place = googleautocomplete.getPlace();
			if (!place || !place.geometry) {

			}
		});
	},
	gmapsAutoCompleteInit: function () {
		if (typeof countryCode !== 'undefined') {
			var options = {
				componentRestrictions: {country: countryCode}
			};
			$('.find-office__zip-city-state, .cta_search').each(function () {
				new google.maps.places.Autocomplete($(this)[0],options);
			});
		}else{
			$('.find-office__zip-city-state, .cta_search').each(function () {
				new google.maps.places.Autocomplete($(this)[0]);
			});
		}
	},
	showLocation: function () {
		$('.fax-results__container, .maps-button, .get-directions-form, .find-an-x-search__container, .cta_search__container').removeClass('hidden');
		$('.driving-direction-container, #googleDrivingMapsContainer').addClass('hidden');
		if (dir_to_flag == true) {
			$('.get-directions-form .from-address').val('');
		}
		var endsWith = function (str, suffix) {
			return str.indexOf(suffix, str.length - suffix.length) !== -1;
		};
		var startsWith = function (string, searchString, position) {
			position = position || 0;
			return string.substr(position, searchString.length) === searchString;

		};
		$('.errorSpan.error_zip_code').html($('.errorMsgtext_no_office_found').text());
		ServicesAPI.initializeGoogleMapObject();
		var address;
		var zip = sessionStorage.getItem("faoZipCode");
		if (document.referrer == "" || endsWith(document.referrer, "/cf") || startsWith(document.referrer, document.origin + document.location.pathname)) {
			address = $('.find-an-x-search__container .cta_search').val();
		} else {
			$('.find-an-x-search__container .cta_search').val(zip);
			$('.find-an-x-search__container .cta_search').text(zip);
			address = $('.find-an-x-search__container .cta_search').val();
		}
		var validateAddress = address.trim();
		var isNumber = /^\d+$/.test(validateAddress);
		if ((!isNumber) || (isNumber && (address.length === 5))) {
			$('.errorSpan.error_zip_code').addClass('hidden');
			if (address != null && address != '' && address != undefined && address != ' ') {
				geocoder.geocode({"address": address}, function (response, status) {
					if (status == google.maps.GeocoderStatus.OK) {
						ServicesAPI.addAddressToMap(response, status);
					} else {
						ServicesAPI.resetMap();
						ServicesAPI.showSorryUnableToLocateMessage();
					}
				});
			} else {
				ServicesAPI.resetMap();
			}
		} else {
			$('.errorSpan.error_zip_code').removeClass('hidden');
			if ($(".hidden-xs").is(":visible") == true) {

				$(".mobile_expand_close").click();
				$(".error_zip_code").insertAfter(".mobile_expand");
			}
			if (($(".hidden-xs").is(":visible") == false) && ($(".mobile_expand").is(":visible"))) {
				$(".error_zip_code").insertAfter(".mobile_expand_open");
			}
		}
	},
	addAddressToMap: function (response, status) {
		ServicesAPI.clearOverlays();
		if (!response || status != google.maps.GeocoderStatus.OK) {
			ServicesAPI.showSorryUnableToLocateMessage();
		} else {
			var point = new google.maps.LatLng(response[0].geometry.location.lat(), response[0].geometry.location.lng());
			startPointGeoCode = point;
			// Reset the Map
			ServicesAPI.resetMap();

			// Set the GMarker based on the geocode (GLatLng)

			startPointGMarker = ServicesAPI.createStartPointMarker(startPointGeoCode);

			// Display progress indicator before retreiving offices
			//showProgressIndicator();

			// Now get the Met offices for this address
			ServicesAPI.getMetOffices();
		}
	},
	resetMap: function () {
		// Clear any existing overlays
		ServicesAPI.clearOverlays();
		directionsDisplay.setMap(null);
		// Pan the map back to the original start location
		// *** Must center map, before adding overlay

		map.setCenter(startPointGeoCode, 9);

	},
	getMetOffices: function () {

		var latitude = startPointGeoCode.lat();
		var longitude = startPointGeoCode.lng();
		var baseServiceUrl = $("[data-fao-url]").attr("data-fao-url");
		var faoMarket = '';
		var directionButton = $('.directions_button').attr("data-fao-market");
		var officeSubmitButton = $(".find-office__submit").attr("data-fao-market");
		if (directionButton !== undefined && directionButton !== "" && directionButton !== " ") {
			faoMarket = directionButton;
		}
		if (officeSubmitButton !== undefined && officeSubmitButton !== "" && officeSubmitButton !== " ") {
			faoMarket = officeSubmitButton;
		}
		radiusInMiles = $('.find_an_office_radius').val();
		if (faoMarket.toLowerCase() == "us") {
			specialty = 'AUTO%2C+HOME%2C+RENTERS%2C+ETC...';
			var serviceUrl = ServicesAPI.buildServiceUrlUS(baseServiceUrl, latitude, longitude, radiusInMiles, specialty);
		} else {
			specialty = $('.different_services_dropdown').val();
			var serviceUrl = ServicesAPI.buildServiceUrl(baseServiceUrl, latitude, longitude, radiusInMiles, specialty);
		}
		/************LIVE FAO SERVICE***************/
		$.ajax({
			type: 'GET',
			url: serviceUrl,
			success: function (data) {
				ServicesAPI.generateOfficeItems(data)
			},
			error: function () {
				ServicesAPI.handleServiceError()
			}
		});
		/************LIVE FAO SERVICE***************/

		/************LOCAL FAO SERVICE***************/
		/*	var faoSearchResults = $.getJSON("fao.json", function(data) {
		 ServicesAPI.generateOfficeItems(data);
		 ServicesAPI.createPagination(count);
		 });*/
		/************LOCAL FAO SERVICE***************/

	},
	generateOfficeItems: function (responseObject) {
		count = 0;
		var resultsListHTML = "";
		markersArray = [];
		$('.results_error_info,.results_pagination').addClass('hidden');
		if (responseObject.facilities.length != 0) {
			$('.find_an_office_pagecount_wrap,.google_maps_container,.hidden_maps_container_button').removeClass('hidden');
			$('.display_container').removeClass('hidden');
			$(".page-count").removeClass('hidden');
			$(".no-results").addClass('hidden');
			// Now you can just use the object
			var metOfficeArray = responseObject.facilities;
			$(".results_content").remove();
			// Create the HTML for the Office results in the left panel
			resultsListHTML += "<div class=\"results_content\">";
			// Generate the markers for the map and also generate the markup for the results list
			for (var i = 0; i < metOfficeArray.length; i++) {
				count++;
				var fclt_officeName = metOfficeArray[i].fclt_name;
				var fclt_addr = metOfficeArray[i].fclt_addr;
				var fclt_city = metOfficeArray[i].fclt_city;
				var fclt_state = metOfficeArray[i].fclt_state;
				var fclt_zip = metOfficeArray[i].fclt_zip;
				var fclt_phone = metOfficeArray[i].tel_no;
				var fclt_fax = metOfficeArray[i].fax_no;
				var fclt_lat = metOfficeArray[i].fclt_lattd;
				var fclt_lng = metOfficeArray[i].fclt_longtd;
				var fclt_ctgy = metOfficeArray[i].fclt_ctgy;
				var fclt_distance = metOfficeArray[i].fclt_distance;
				var fclt_url = metOfficeArray[i].fclt_url;
				// Additional fields
				var fclt_alt_phone = metOfficeArray[i].fclt_alt_phone;
				var fclt_email = metOfficeArray[i].fclt_email;
				var fclt_secondary_email = metOfficeArray[i].fclt_secondary_email;
				var fclt_main_contact = metOfficeArray[i].fclt_main_contact;
				var fclt_hours = metOfficeArray[i].fclt_hours;
				var fclt_info = metOfficeArray[i].fclt_info;
				var fclt_gender = metOfficeArray[i].fclt_gender;
				var fclt_languages = metOfficeArray[i].fclt_languages;
				var fclt_education = metOfficeArray[i].fclt_education;
				var label_phone = $(".label_phone").text();
				var label_alt_phone = $(".label_alt_phone").text();
				var label_fax = $(".label_fax").text();
				var label_email = $(".label_email").text();
				var label_sec_email = $(".label_sec_email").text();
				var label_contact = $(".label_contact").text();
				var label_hours = $(".label_hours").text();
				var label_info = $(".label_info").text();
				var label_education = $(".label_education").text();
				var label_languages = $(".label_languages").text();
				var label_gender = $(".label_gender").text();
				var label_radius_unit = $(".label_radius_unit").text();
				if (label_radius_unit == "mi")
					fclt_distance = parseInt(fclt_distance) / 1.609344;
				var strDestination = "";
				var destParams = "";
				if (fclt_addr != undefined) {
					strDestination = strDestination + fclt_addr + ", ";
				}
				if (fclt_city != undefined) {
					strDestination = strDestination + fclt_city + ", ";
				}
				if (fclt_state != undefined) {
					strDestination = strDestination + fclt_state + ", ";
				}
				if (fclt_zip != undefined) {
					strDestination = strDestination + fclt_zip;
				}
				destParams = strDestination;
				if (fclt_lat != undefined) {
					destParams = destParams + ":" + fclt_lat + ","
				}
				if (fclt_lng != undefined) {
					destParams = destParams + fclt_lng;
				}
				var temp = strDestination.slice(-2);
				;
				if (temp == ", ") {
					strDestination = strDestination.substring(0, strDestination.length - 2);
				}
				var strDestination = fclt_addr + ", " + fclt_city + ", " + fclt_state + ", " + fclt_zip;
				resultsListHTML += "<div class=\"results_office_result\"><p class=\"results_office_count\">" + (i + 1) + "</p>";
				resultsListHTML += "<p class=\"results_office_name\">" + fclt_officeName + "</p>";
				resultsListHTML += "<div class=\"results_office_mileage\"><p class=\"results_office_distance\">" + (Math.round(fclt_distance * 100) / 100).toFixed(2) + "</p>";
				resultsListHTML += "<p class=\"results_office_mi\">" + "&nbsp;" + label_radius_unit + "</p></div>";
				if (fclt_education) {
					resultsListHTML += "<p class=\"results_office_type results_office_type_dentist\">" + fclt_ctgy + "</p>";
					resultsListHTML += "<p class=\"results_office_get_directions results_office_get_directions_dentist\"><a href='#' onclick=\"ServicesAPI.getDirectionsPanel(\'" + strDestination + "\');return false;\">" + $('.getDirectionsText').text() + "</a></p>";
					resultsListHTML += "<p class=\"results_office_street_address dentist_left\">" + fclt_addr.toLowerCase() + "</p>";
					resultsListHTML += "<p class=\"results_office_education dentist_right\">" + label_education + ": " + fclt_education.toLowerCase() + "</p>";
				} else {
					resultsListHTML += "<p class=\"results_office_type\">" + fclt_ctgy + "</p>";
					resultsListHTML += "<p class=\"results_office_get_directions\"><a href='#' onclick=\"ServicesAPI.getDirectionsPanel(\'" + strDestination + "\');return false;\">" + $('.getDirectionsText').text() + "</a></p>";
					resultsListHTML += "<p class=\"results_office_street_address\">" + fclt_addr.toLowerCase() + "</p>";
				}
				if (fclt_languages) {
					resultsListHTML += "<p class=\"results_office_city_state_zip dentist_left\">"
					if (fclt_city != null) {
						resultsListHTML += fclt_city.toLowerCase() + ", ";
					}
					if (fclt_state != null) {
						resultsListHTML += fclt_state.toLowerCase() + " ";
					}
					if (fclt_zip != null) {
						resultsListHTML += fclt_zip.toLowerCase() + " ";
					}
					resultsListHTML += "</p>";
					resultsListHTML += "<p class=\"results_office_languages dentist_right\">" + label_languages + ": " + fclt_languages.toLowerCase() + "</p>";
				} else {
					resultsListHTML += "<p class=\"results_office_city_state_zip\">"
					if (fclt_city != null) {
						resultsListHTML += fclt_city.toLowerCase() + ", ";
					}
					if (fclt_state != null) {
						resultsListHTML += fclt_state.toLowerCase() + " ";
					}
					if (fclt_zip != null) {
						resultsListHTML += fclt_zip.toLowerCase() + " ";
					}
					resultsListHTML += "</p>";
				}

				if (fclt_gender) {
					if (fclt_phone)
						resultsListHTML += "<p class=\"results_office_phone dentist_left\">" + label_phone + ": " + fclt_phone.replace(/\./g, '-') + "</p>";
					resultsListHTML += "<p class=\"results_office_gender dentist_right\">" + label_gender + ": " + fclt_gender.toLowerCase() + "</p>";
				} else {
					if (fclt_phone)
						resultsListHTML += "<p class=\"results_office_phone\">" + label_phone + ": " + fclt_phone.replace(/\./g, '-') + "</p>";
				}

				if (fclt_alt_phone)
					resultsListHTML += "<p class=\"results_office_phone\">" + label_alt_phone + ": " + fclt_alt_phone.replace(/\./g, '-') + "</p>";
				if (fclt_fax)
					resultsListHTML += "<p class=\"results_office_fax\">" + label_fax + ": " + fclt_fax.replace(/\./g, '-') + "</p>";
				if (fclt_email)
					resultsListHTML += "<p class=\"results_office_phone\">" + label_email + ": " + fclt_email + "</p>";
				if (fclt_secondary_email)
					resultsListHTML += "<p class=\"results_office_phone\">" + label_sec_email + ": " + fclt_secondary_email + "</p>";
				if (fclt_main_contact)
					resultsListHTML += "<p class=\"results_office_phone\">" + label_contact + ": " + fclt_main_contact + "</p>";
				if (fclt_hours)
					resultsListHTML += "<p class=\"results_office_phone\">" + label_hours + ": " + fclt_hours + "</p>";
				if (fclt_info)
					resultsListHTML += "<p class=\"results_office_phone\">" + label_info + ": " + fclt_info + "</p>";
				resultsListHTML += "<div><button class=\"results_office_get_directions_button btn btn-brand-2nd\" onclick=\"ServicesAPI.getDirectionsPanel(\'" + strDestination + "\');return false;\">" + $('.getDirectionsText').text() + "</button></div>";
				resultsListHTML += "</div>";
				var markerInfoHTML = "<div class=\"googleMarkerInfo\">";
				markerInfoHTML += "<p class=\"markerInfoOfficeName\">" + fclt_officeName + "</p>";
				markerInfoHTML += "<p class=\"markerInfoAddress\">" + fclt_addr.toLowerCase() + "</p>";
				markerInfoHTML += "<p class=\"markerInfoCityStateZip\">";
				if (fclt_city != null) {
					markerInfoHTML += fclt_city.toLowerCase() + ", ";
				}
				if (fclt_state != null) {
					markerInfoHTML += fclt_state.toLowerCase() + ", ";
				}
				if (fclt_zip != null) {
					markerInfoHTML += fclt_zip.toLowerCase() + ", ";
				}
				markerInfoHTML += "</p>";
				if (fclt_phone)
					markerInfoHTML += "<p class=\"markerInfoPhone\">" + label_phone + ": " + fclt_phone.replace(/\./g, '-') + "</p>";
				if (fclt_fax)
					markerInfoHTML += "<p class=\"markerInfoFax\">" + label_fax + ": " + fclt_fax.replace(/\./g, '-') + "</p>";
				markerInfoHTML += "<p class=\"markerInfoDrivingDirections\"><a href='#' onclick=\"getDirectionsPanel(\'" + strDestination + "\');return false;\">" + "</a>" + "</p>";
				markerInfoHTML += "</div>";
				var fclt_point = new google.maps.LatLng(fclt_lat, fclt_lng);
				var iconNumber = ((i + 1) + ((bootPagNum) * listCount)) + '';
				var fclt_marker = ServicesAPI.createOfficeMarker(fclt_point, markerInfoHTML, iconNumber);
			}
			resultsListHTML += "</div>";
			$(resultsListHTML).insertBefore($(".results_pagination"));
			ServicesAPI.createPagination(count);
		}
		else {
			ServicesAPI.showSorryUnableToLocateMessage();
		}

		return responseObject;
	},
	handleServiceError: function () {
		$('.results_error_info').removeClass('hidden').html($('.errorMsgText_server_busy').text());
		$('.results_content').html("");
		$('.results_pagination, .find_an_office_pagecount_wrap, .google-maps-container, .maps-button').addClass('hidden');
	},
	createStartPointMarker: function (latlng) {
		// Use the default marker
		var marker = new google.maps.Marker({
			position: latlng
		});
		markersArray.push(marker);
		return marker;
	},
	createOfficeMarker: function (point, html, officeNumber) {
		var baseIcon = '';
		var numberedIcon = '';
		var marker = '';
		var numberedIconURL = '';
		var marker;
		marker = new MarkerWithLabel({
			position: point,
			labelContent: officeNumber,
			//icon: " ",
			icon: {
				url: blueMarker,
				scaledSize: new google.maps.Size(33, 42)// desired size
			},
			labelAnchor: new google.maps.Point(3, 33),
			labelClass: "my_label", // the CSS class for the label
			labelStyle: {opacity: 0.8},
			map: map
		});
		if ((officeNumber / 10) >= 1) {
			marker.labelAnchor = new google.maps.Point(8, 33)
		}

		google.maps.event.addListener(marker, 'click', (function (marker, i) {

			return function () {
				if (selectedMarker) {
					selectedMarker.setIcon({
						url: blueMarker,
						scaledSize: new google.maps.Size(33, 42)
					});
				}
				marker.setIcon({
					url: blackMarker,
					scaledSize: new google.maps.Size(33, 42)
				});
				selectedMarker = marker;

				var infowindow = new google.maps.InfoWindow();
				infowindow.setContent(html);
				if ($(".hidden-xs").is(":visible")) {
					infowindow.open(map, marker);
				} else {

				}
				if (presentHighligtedInfo != null) {
					presentHighligtedInfo.open(null, marker);
				}
				presentHighligtedInfo = infowindow;
			}
		})(marker, officeNumber));

		markersArray.push(marker);
		return marker;
	},
	checkEnter: function (e) {
		var key = e.keyCode || e.which;
		var browsername = ServicesAPI.getBrowserName();
		if (key == 13) { //if character code is equal to ascii 13 (if enter key)
			//alert('ENTER pressed, show location, and return false');
			ServicesAPI.showLocation();
			//return false;
			/*if(browsername=="NS"){
			 return false;
			 }else if (browsername=="MSIE"){
			 e.returnValue = false;
			 }else{
			 return false;
			 }*/

		} else {
			returnValue = true;
		}
	},
	getBrowserName: function () {
		var browsername = navigator.appName;
		if (browsername.indexOf("Netscape") != -1) {
			browsername = "NS";
		} else if (browsername.indexOf("Microsoft") != -1) {
			browsername = "MSIE";
		} else {
			browsername = "N/A";
		}
		return browsername;
	},
	addBreadCrumb: function () {
		var currentPageCrumb = $(".breadcrumb").find("span:last-of-type");
		currentPageCrumb.wrapInner("<a href=\"\"> </a>");
		currentPageCrumb.addClass("breadcrumb__crumb");
		currentPageCrumb.find("a").attr("href", faoURL);
		currentPageCrumb.after("<span class=\"generatedBreadCrumb\">" + $('.getDirectionsText').text() + "</span>");
	},
	removeBreadCrumb: function () {
		$(".breadcrumb").find("span:last-of-type").remove();
		$(".breadcrumb").find("span:last-of-type a").contents().unwrap();
		$(".breadcrumb").find("span:last-of-type").removeClass("breadcrumb__crumb");
	},
	getDirectionsPanel: function (strpDestination) {
		$('.page-title__heading').text($('.getDirectionsText').text());
		if ($(".generatedBreadCrumb").length == 0) {
			ServicesAPI.addBreadCrumb();
		}
		ServicesAPI.clearOverlays();
		$('.fax-results__container, .driving-directions-panel, .find-an-x-search__container,.cta_search__container, .directions_error').addClass('hidden');
		$('.driving-direction-container, .maps-button, #googleDrivingMapsContainer').removeClass('hidden');
		var fromAddr = $('.find-an-x-search__container .cta_search').val();
		ServicesAPI.initializeDrivingGoogleMapObject();

		$('.get-directions-form .from-address').val(fromAddr);
		if (fromAddr == '') {
			$('.find-an-x-search__container .cta_search').focus();
			return;
		}
		geocoder.geocode({'address': fromAddr}, function (results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				var res = ServicesAPI.makeMarker(results[0].geometry.location, 'A');
			}
		});


		//clearOverlays();
		var toAddr = strpDestination.split(":");
		$('.get-directions-form .to-address').val(ServicesAPI.formatDestination(toAddr[0]));


		ServicesAPI.resetMap();
		var dest_marker = $('.get-directions-form .to-address').val();
		geocoder.geocode({'address': dest_marker}, function (results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				var res = ServicesAPI.makeMarker(results[0].geometry.location, 'B');

			}
		});
		ServicesAPI.clearOverlays();
	},
	makeMarker: function (point, title) {
		marker = new MarkerWithLabel({
			position: point,
			labelContent: title,
			//icon: " ",
			icon: {
				url: blueMarker,
				scaledSize: new google.maps.Size(33, 42)// desired size
			},
			labelAnchor: new google.maps.Point(5, 33),
			labelClass: "my_label", // the CSS class for the label
			labelStyle: {opacity: 0.8},
			map: map
		});
		dir_markerArray.push(marker);
	},
	getDirections: function () {
		$('.page-title__heading').text($('.getDirectionsText').text());
		var directionsService = new google.maps.DirectionsService();
		directionsDisplay.setMap(map);
		directionsDisplay.setPanel(document.getElementById('drivingDirectionsPanel'));
		var travel_mode = $('.get-directions-buttons .btn.active').attr('data-travel');
		var unit;
		var fromAddr = $('.get-directions-form .from-address').val();
		if ($('.Radius_unit').text() == "km") {
			unit = google.maps.UnitSystem.METRIC;
		}
		else {
			unit = google.maps.UnitSystem.IMPERIAL;
		}
		var request = {
			origin: fromAddr,
			destination: $('.get-directions-form .to-address').val(),
			travelMode: google.maps.DirectionsTravelMode[travel_mode],
			unitSystem: unit
		};
		directionsService.route(request, function (response, status) {
			if (status == google.maps.DirectionsStatus.OK) {
				ServicesAPI.clearOverlays();
				$('.get-directions-form,.directions_error').addClass('hidden');
				$('.driving-directions-panel').removeClass('hidden');
				directionsDisplay.setDirections(response);
				var leg = response.routes[0].legs[0];
				ServicesAPI.makeMarker(leg.start_location, "A");
				ServicesAPI.makeMarker(leg.end_location, 'B');
			} else {
				directionsDisplay.setMap(null);
				$('.driving-directions-panel').addClass('hidden');
				$('.directions_error').removeClass('hidden');
			}
		});

	},
	formatDestination: function (destAddress) {
		var regex = new RegExp("[0-9]TH|[0-9]RD|[0-9]ND", "i");
		while (regex.test(destAddress)) {
			var matchedString = regex.exec(destAddress).toString();
			destAddress = destAddress.replace(matchedString, matchedString.substring(0, 1));
		}

		regex.compile("\\bfl\\b", "i");
		while (regex.test(destAddress)) {
			var matchedString = regex.exec(destAddress).toString();
			destAddress = destAddress.replace(matchedString, "FLOOR");
		}
		regex.compile("\\bst\\b", "i");
		if (regex.test(destAddress)) {
			var matchedString = regex.exec(destAddress).toString();
			destAddress = destAddress.replace(matchedString, "STREET");
		}
		return destAddress;
	},
	handleGetDirectionErrors: function (invDir, from, to_LatLng) {
		// Try getting the directions using geocoding
		if (invDir.getStatus().code == G_GEO_UNKNOWN_ADDRESS) {
			invDir.clear();
			var resultsOverlay = document.getElementById("officeResultsContent");
			resultsOverlay.innerHTML = '';

			var dir_lat_lng = new GDirections(map, resultsOverlay);

			dir_lat_lng.load(from + " to " + to_LatLng);
			google.maps.Event.addListener(dir_lat_lng, "error", function () {
				resultsOverlay.innerHTML = $('.get_direction_error').text()
			});
		}
	},
	getAddress: function () {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(handle_geolocation_query);
		}
	},
	handle_geolocation_query: function (position) {
		var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
		var geocoder = geocoder = new google.maps.Geocoder();
		geocoder.geocode({'latLng': latlng}, function (results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				if (results[1]) {
					var arrAddress = results[1].address_components;
					var itemLocality = "";
					$.each(arrAddress, function (i, address_component) {
						if (address_component.types[0] == "locality") {
							itemLocality = address_component.long_name;
						}
						if (address_component.types[0] == "administrative_area_level_1") {
							itemLocality += ', ' + address_component.long_name;
						}
						$('.find-an-x-search__container .cta_search').val(itemLocality);
					});
				}
				if (results[0]) {
					dir_to_flag = false;
					$('.get-directions-form .from-address').val(ServicesAPI.formatDestination(results[0].formatted_address));
				}
			}
		});
	},
	buildServiceUrl: function (baseUrl, lat, lng, radius, specialty) {
		var latSelector = '.latitude=' + lat.toString().replace('.', ','), //sling selector workaround
			lngSelector = '.longitude=' + lng.toString().replace('.', ','),
			radiusSelector = '.radius=' + radius,
			specialtySelector = '.specialty=' + specialty;

		return baseUrl + latSelector + lngSelector + radiusSelector + specialtySelector + ".json";
	},
	buildServiceUrlUS: function (baseUrl, lat, lng, radius, specialty) {
		var latSelector = 'latitude=' + lat.toString(), //sling selector workaround
			lngSelector = '&longitude=' + lng.toString(),
			radiusSelector = '&radius=' + radius,
			specialtySelector = '&specialty=' + specialty;

		return baseUrl + latSelector + lngSelector + radiusSelector + specialtySelector + "&format=json";
	},
	updatePageFrom: function (name) {
		var pageFrom = ServicesAPI.getQueryStringNoHash()["pageFrom"];
		if (pageFrom != undefined) {
			name.val(pageFrom);
		}
	},
	onFSubmit: function ($this) {
		var fid = $this.attr('data-fsubmit')
		var $formid = $('[data-fid=' + fid + ']');
		var formStatus = true;
		var flag;


		if ($("[data-observes-id]").find("input:radio").parent().parent().parent().parent().css("display") != "none") {
			/*	$("[data-observes-id]").find("input:radio").each(function () {
			 if ($(this).attr('checked') == "checked") {
			 radioDials = true;
			 }
			 });*/
			if (radioDials != true) {
				$("[data-observes-id]").find("input:radio").each(function () {
					$(this).next('span').addClass('errorRadio');
				});
				$('.contactSideForm .info-mandatory').addClass('error-mandatory');
				formStatus = false;
			}
		}
		$formid.find('[data-required=true]').each(function () {
			var $this = $(this);
			if ($this.parent().parent().parent().css("display") != "none") {
				var placeholder = $this.attr('placeholder');
				if ($this.val() == placeholder) {
					$this.val("");
				}
				var val = $this.val();
				if (val.length == 0) {
					$this.addClass('error');
					//$this.parent().find('.errorSpan').addClass('errorSpanOpen');
					$('.contactSideForm .info-mandatory').addClass('error-mandatory');
					$this.parent('.form-user-grp').find('svg').css('fill', '#db3535');
					$this.val(placeholder);
					formStatus = false;
				} else {
					$('.contactSideForm .info-mandatory').removeClass('error-mandatory');
				}
			}

		});

		$formid.find('[data-valid-status]').each(function () {
			var attrDVS = $(this).attr('data-valid-status');
			if (attrDVS == 'failed') {
				$(this).addClass('error');
				formStatus = false;
			}
		});
		if (formStatus && fid != "contactCard" && fid != "contactSidebarQuote") {
			ServicesAPI.formPass(fid);
		} else {
			$formid.find('.info-mandatory').addClass('error-mandatory');
		}
		return formStatus;
	},
	formProcessorSubmit: function (formName, formDiv, thankyouDiv, errorDiv, exceptionDiv) {
		var lead = "";
		var scenarioName = "";
		var mmrep = "";
		var formObjectName = document.getElementById(formName);
		var reserveid = ServicesAPI.getCookie("ReserveID");
		if (null != reserveid) ServicesAPI.AddInputParameter(formObjectName, "input", "reserveid", reserveid, document);
		else;

		//AddInputParameter(formObjectName, "input", "webFormPage_ThankYouPage", TKM, document);
		if (null != document.getElementById("beginapp-rep")) mmrep = document.getElementById("beginapp-rep").value;
		if (null != mmrep && "" != mmrep) {
			var lsubContentGroupDirectory = "";
			var lcontentGroupDirectory = "";
			var laudience = "";
			if ("" != subContentGroupDirectory) {
				lsubContentGroupDirectory = subContentGroupDirectory + "-" + mmrep;
				lcontentGroupDirectory = contentGroupDirectory;
				laudience = audience;
			} else if ("" != contentGroupDirectory) {
				lcontentGroupDirectory = contentGroupDirectory + "-" + mmrep;
				lsubContentGroupDirectory = subContentGroupDirectory;
				laudience = audience;
			} else if ("" != audience) {
				laudience = audience + "-" + mmrep;
				lcontentGroupDirectory = contentGroupDirectory;
				lsubContentGroupDirectory = subContentGroupDirectory;
			}
			if ("undefined" == typeof contentGroupDirectory) ServicesAPI.AddInputParameter(formObjectName, "input", "contentGroup", "", document);
			else ServicesAPI.AddInputParameter(formObjectName, "input", "contentGroup", lcontentGroupDirectory, document);
			if ("undefined" == typeof subContentGroupDirectory) ServicesAPI.AddInputParameter(formObjectName, "input", "subcontentGroup", "", document);
			else ServicesAPI.AddInputParameter(formObjectName, "input", "subcontentGroup", lsubContentGroupDirectory, document);
			if ("undefined" == typeof audience) ServicesAPI.AddInputParameter(formObjectName, "input", "audience", "", document);
			else ServicesAPI.AddInputParameter(formObjectName, "input", "audience", laudience, document);
		} else {
			var CGFrQS = "";
			var SCGFrQS = "";
			var AUFrQS = "";
			CGFrQS = ServicesAPI.getQueryString("CG");
			SCGFrQS = ServicesAPI.getQueryString("SCG");
			AUFrQS = ServicesAPI.getQueryString("AU");
			if ("" != CGFrQS) ServicesAPI.AddInputParameter(formObjectName, "input", "contentGroup", CGFrQS, document);
			else if ("undefined" == typeof contentGroupDirectory) ServicesAPI.AddInputParameter(formObjectName, "input", "contentGroup", "", document);
			else ServicesAPI.AddInputParameter(formObjectName, "input", "contentGroup", contentGroupDirectory, document);
			if ("" != SCGFrQS) ServicesAPI.AddInputParameter(formObjectName, "input", "subcontentGroup", SCGFrQS, document);
			else if ("undefined" == typeof subContentGroupDirectory) ServicesAPI.AddInputParameter(formObjectName, "input", "subcontentGroup", "", document);
			else ServicesAPI.AddInputParameter(formObjectName, "input", "subcontentGroup", subContentGroupDirectory, document);
			if ("" != AUFrQS) ServicesAPI.AddInputParameter(formObjectName, "input", "audience", AUFrQS, document);
			else if ("undefined" == typeof audience) ServicesAPI.AddInputParameter(formObjectName, "input", "audience", "", document);
			else ServicesAPI.AddInputParameter(formObjectName, "input", "audience", audience, document);
		}
		if ("requestFormRightNav_Acc" == formName) {
			var prodType = document.getElementById("requestType").value;
			if ("" != prodType)
				if ("Existing Product/Policy" == prodType) lead = "ServiceLead";
				else if (prodType.length > 11 && "New Product" == prodType.substr(0, 11)) lead = "NewLead";
		} else if ("requestFormRightNav" == formName) {
			var prodType = "";
			if (document.getElementById("requestTypeQuote")) prodType = document.getElementById("requestTypeQuote").value;
			else if (document.getElementById("requestType")) prodType = document.getElementById("requestType").value;
			if ("" != prodType)
				if ("Existing Product/Policy" == prodType) lead = "ServiceLead";
				else if (prodType.length >= 11 && "New Product" == prodType.substr(0, 11)) lead = "NewLead";
		} else {
			var prodType = "";
			if (document.getElementById("requestType")) prodType = document.getElementById("requestType").value;
			if ("" != prodType)
				if (prodType.length >= 11 && "New Product" == prodType.substr(0, 11)) lead = "NewLead";
				else if ("Existing Product/Policy" == prodType) lead = "ServiceLead";
		}
		if ("NewLead" != lead && "ServiceLead" != lead) {
			lead = "NonLeadForm";
			if (document.getElementById("scenarioName") && "" != document.getElementById("scenarioName").value) scenarioName = document.getElementById("scenarioName").value;
		}
		// console.debug("Lead type: " + lead);
		var results = document.cookie.match("(^|;) ?WT_FPC=([^;]*)(;|$)");
		if (null != results) {
			var fullID = unescape(results[2]);
			var partID = fullID.split(":");
			var visitorID = partID[0].split("=");
		}
		if ("undefined" == typeof visitorID) ServicesAPI.AddInputParameter(formObjectName, "input", "visitorIDReq", "", document);
		else ServicesAPI.AddInputParameter(formObjectName, "input", "visitorIDReq", visitorID[1], document);
		var urlNode = document.URL;
		urlNode = ServicesAPI.getPageFromURLNode(formObjectName, mmrep);
		if ("requestFormRightNav" == formName) {
			//console.debug("document.requestFormRightNav.coverage" + document.requestFormRightNav.coverage);
			if (document.requestFormRightNav.coverage)
				if (document.requestFormRightNav.coverage.value < 1e5) {
					urlNode = urlNode.split("?");
					urlNode = urlNode[0];
				}
		}
		if (lead == "NewLead") {
			ServicesAPI.AddInputParameter(formObjectName, "input", "formSubmissionSource", urlNode, document);
		}
		if (lead == "ServiceLead") {
			ServicesAPI.AddInputParameter(formObjectName, "input", "webFormPage_urlPagevalue", urlNode, document);
		}

		var validationSuccess = true;
		if (validationSuccess) {
			/*var tempURL = "www.metlife.com";
			 if ("view" == location.host.match("view")) tempURL = "view.metlife.com"; else tempURL = "www.metlife.com";
			 if ("int" == location.host.split(".", 1)) tempURL = "int." + tempURL; else if ("qa" == location.host.split(".", 1)) tempURL = "qa." + tempURL; else if ("dev" == location.host.split(".", 1)) tempURL = "dev." + tempURL;
			 var preFill = formObjectName.lstPnPPreFillParameters;
			 console.debug("Prefill Parameters is: " + preFill);
			 if (null == preFill || "undefined" == typeof preFill) console.debug("No Prefill Parameters is: "); else {
			 var prefillParam = preFill.value;
			 var prefillList = prefillParam.split(",");
			 var PnPPreFillValues = "";
			 for (i = 0; i < prefillList.length; i++) {
			 //var prefillListParam = eval("formObjectName." + prefillList[i] + ".value");
			 //console.debug("prefillListParam is: " + prefillListParam);
			 //PnPPreFillValues = PnPPreFillValues + prefillList[i] + ":" + prefillListParam + "|";
			 }
			 document.cookie = "PnPPreFill=" + PnPPreFillValues + "; path=/";
			 }
			 varwebformID = formObjectName.webformId;
			 if (null == varwebformID || "undefined" == typeof varwebformID) var submitUrl = "https://" + tempURL + "/wps/proxy/MCGenericWebForms/WebFormServletAction"; else var submitUrl = "https://" + tempURL + "/wps/proxy/MCWebForms5KSales/WebFormServletAction";
			 ServicesAPI.addSessionParameters(formObjectName);
			 console.debug("Doing Webform submit to: " + submitUrl);
			 */

		}
	},
	validateOnType: function (val, $this, re) {
		var placeholder = $this.attr('placeholder');
		if (val.length > 0 && val != placeholder) {
			if (val.match(re)) {
				$this.removeClass('error');
				$this.removeClass('formatError');
				$this.removeAttr('data-valid-status');
			} else {
				$this.addClass('error');
				$this.addClass('formatError');
				$this.attr('data-valid-status', 'failed');
			}
		} else {
			$this.removeClass('formatError');
			var attrDVS = $this.attr('data-required');
			if (typeof attrDVS !== typeof undefined && attrDVS !== false) {

			} else {
				$this.removeClass('error');
				$this.removeAttr('data-valid-status');
			}
		}
	},
	AddInputParameter: function (a, b, c, d, e) {
		var f = e.createElement(b);
		f.setAttribute("type", "hidden");
		f.setAttribute("name", c);
		f.setAttribute("value", d);
		a.appendChild(f);
	},
	getCookie: function (c_name) {
		if (document.cookie.length > 0) {
			c_start = document.cookie.indexOf(c_name + "=");
			if (c_start != -1) {
				c_start = c_start + c_name.length + 1;
				c_end = document.cookie.indexOf(";", c_start);
				if (c_end == -1) c_end = document.cookie.length;
				return unescape(document.cookie.substring(c_start, c_end));
			}
		}
		return "";
	},
	getQueryString: function (a) {
		a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var b = "[\\?&]" + a + "=([^&#]*)";
		var c = new RegExp(b);
		var d = c.exec(window.location.href);
		if (null == d) return "";
		else return d[1];
	},
	getPageFromURLNode: function (a, b) {
		var c = document.URL;
		var d = "";
		var e = window.location.search.split("?");
		var f = "";
		var g = "";
		var h = false;
		if (null != document.getElementById("WT.mc_id")) {
			mcid = ServicesAPI.getCookie("SessionMCID");
			ServicesAPI.AddInputParameter(a, "input", "wb_code", mcid, document);
			ServicesAPI.AddInputParameter(a, "input", "WT.mc_id", mcid, document);
		}
		if (2 == e.length) {
			var i = e[1].split("&");
			for (var j = 0; j < i.length; j++) {
				var k = i[j].split("=");
				if ("wt.mc_id" == k[0].toLowerCase()) {
					ServicesAPI.AddInputParameter(a, "input", "wb_code", k[1], document);
				}
				if ("" != b)
					if ("pagefrom" == k[0].toLowerCase()) {
						d = k[1] + "-" + b;
						if (j == i.length - 1) g = g + k[0] + "=" + d;
						else g = g + k[0] + "=" + d + "&";
						h = true;
					} else if (j == i.length - 1) g += i[j];
					else g = g + i[j] + "&";
			}
			if (h) {
				var l = document.URL;
				var m = l.split("?");
				f = window.location.href.split("#")[1];
				if ("" != f) c = m[0] + "?" + g;
				else c = m[0] + "?" + g + "#" + f;
			}
		}
		return c;
	},
	addSessionParameters: function (a) {
		var b = sessionVars.getSessionParams();
		for (var c in b)
			if (b.hasOwnProperty(c))
				if ("" !== b[c])
					if (ServicesAPI.checkFormField(a, c)) ServicesAPI.AddInputParameter(a, "input", c, b[c], document);
					else a.elements[c].value = b[c];
	},
	checkFormField: function (a, b) {
		if (void 0 == a.elements[b]) return true;
		else return false;
	},
	postLeadform: function ($formid) {
		var formName = $formid.attr('name');
		ServicesAPI.formProcessorSubmit(formName, 'a', 'chn-har-thankyou', 'chn-har-error', 'chn-har-exception');
		var requestExist = $('[data-fid="' + formName + '"]').find("[data-request-type]").length;
		$('[data-fid="' + formName + '"]').find('[data-valid-type=phone]').val($('[data-fid="' + formName + '"]').find('[data-valid-type=phone]').val().replace(/[^\w\s]/gi, ''))
		var requestType;
		var ajaxUrl;
		if (requestExist > 0) {
			requestType = $('[data-fid="' + formName + '"]').find("[data-request-type]").find(':selected').val();
			ajaxUrl = $('[data-fid="' + formName + '"]').find("[data-request-type]").find(':selected').attr('data-product-url');
			if (requestType == 'New Product/Planning Services') {
				var jsonData = {};
				var formData = $('form[name=' + formName + ']').serializeArray();
				$.each(formData, function () {
					if (jsonData[this.name]) {

						if (!jsonData[this.name].push) {
							jsonData[this.name] = [jsonData[this.name]];

						}
						jsonData[this.name].push(this.value || '');
					} else {

						jsonData[this.name] = this.value || '';
						if (!jsonData[this.name].push) {
							if (this.name == "prodInt" || this.name == "prodInterest") {
								jsonData[this.name] = [jsonData[this.name]];

							}
						}
					}

				});

				console.log(JSON.stringify(jsonData));
				$.ajax({
					url: ajaxUrl,
					type: 'POST',
					dataType: 'json',
					data: JSON.stringify(jsonData),
					async: true,
					contentType: 'application/json',
					processData: false,
					success: function (returndata) {
						//console.log(returndata);
					},
					error: function () {
						console.log("error in ajax form submission");
					}
				});
			}

			if (requestType == 'Existing Product/Policy') {
				if (typeof FormData !== 'undefined') {
					var formData = new FormData($('form[name=' + formName + ']')[0]);
					$.ajax({
						url: ajaxUrl,
						type: 'POST',
						data: formData,
						async: false,
						contentType: false,
						processData: false,
						success: function (returndata) {
							//console.log(returndata);
						},
						error: function () {
							console.log("error in ajax form submission");
						}
					});
				} else {
					var formData = postSerialize($('form[name=' + formName + ']'));
					$.ajax({
						url: ajaxUrl,
						type: 'POST',
						data: formData,
						async: false,
						contentType: 'application/x-www-form-urlencoded',
						processData: false,
						success: function (returndata) {
							//console.log(returndata);
						},
						error: function () {
							console.log("error in ajax form submission");
						}
					});
				}
			}
		} else {
			ajaxUrl = $('[data-fid="' + formName + '"]').attr("[data-product-url]");
			if (typeof FormData !== 'undefined') {
				var formData = new FormData($('form[name=' + formName + ']')[0]);
				$.ajax({
					url: ajaxUrl,
					type: 'POST',
					data: formData,
					async: false,
					contentType: false,
					processData: false,
					success: function (returndata) {
						//console.log(returndata);
					},
					error: function () {
						console.log("error in ajax form submission");
					}
				});
			} else {
				var formData = postSerialize($('form[name=' + formName + ']'));
				$.ajax({
					url: ajaxUrl,
					type: 'POST',
					data: formData,
					async: false,
					contentType: 'application/x-www-form-urlencoded',
					processData: false,
					success: function (returndata) {
						//console.log(returndata);
					},
					error: function () {
						console.log("error in ajax form submission");
					}
				});
			}
		}
		if ($('[data-fid="' + formName + '"]').find('[data-valid-type=phone]').length > 0) {
			$('[data-fid="' + formName + '"]').find('[data-valid-type=phone]').val($('[data-fid="' + formName + '"]').find('[data-valid-type=phone]').val().replace(/[^\w\s]/gi, ''));
		}


	},
	postLeadformOld: function ($formid) {

		var formName = $formid.attr('name');
		ServicesAPI.formProcessorSubmit(formName, 'a', 'chn-har-thankyou', 'chn-har-error', 'chn-har-exception');
		var requestType = $('[data-fid="' + formName + '"]').find(".productPolicy").find(':selected').val()
		var ajaxUrl;
		$('[data-fid="' + formName + '"]').find('[data-valid-type=phone]').val($('[data-fid="' + formName + '"]').find('[data-valid-type=phone]').val().replace(/[^\w\s]/gi, ''))
		if (requestType == 'New Product/Planning Services') {
			ajaxUrl = $('[data-fid="' + formName + '"]').attr("data-new-product");
			var jsonData = {};
			var formData = $('form[name=' + formName + ']').serializeArray();
			$.each(formData, function () {
				if (jsonData[this.name]) {

					if (!jsonData[this.name].push) {
						jsonData[this.name] = [jsonData[this.name]];

					}
					jsonData[this.name].push(this.value || '');
				} else {

					jsonData[this.name] = this.value || '';
					if (!jsonData[this.name].push) {
						if (this.name == "prodInt" || this.name == "prodInterest") {
							jsonData[this.name] = [jsonData[this.name]];

						}
					}
				}

			});

			console.log(JSON.stringify(jsonData));
			$.ajax({
				url: ajaxUrl,
				type: 'POST',
				dataType: 'json',
				data: JSON.stringify(jsonData),
				async: true,
				contentType: 'application/json',
				processData: false,
				success: function (returndata) {
					//console.log(returndata);
				},
				error: function () {
					console.log("error in ajax form submission");
				}
			});
		}

		if (requestType == 'Existing Product/Policy') {
			ajaxUrl = $('[data-fid="' + formName + '"]').attr("data-existing-product");
			if (typeof FormData !== 'undefined') {
				var formData = new FormData($('form[name=' + formName + ']')[0]);

				$.ajax({
					url: ajaxUrl,
					type: 'POST',
					data: formData,
					async: false,
					contentType: false,
					processData: false,
					success: function (returndata) {
						//console.log(returndata);
					},
					error: function () {
						console.log("error in ajax form submission");
					}
				});
			} else {
				var formData = postSerialize($('form[name=' + formName + ']'));
				$.ajax({
					url: ajaxUrl,
					type: 'POST',
					data: formData,
					async: false,
					contentType: 'application/x-www-form-urlencoded',
					processData: false,
					success: function (returndata) {
						//console.log(returndata);
					},
					error: function () {
						console.log("error in ajax form submission");
					}
				});
			}
		}


	},
	formPass: function (fid) {

		switch (fid) {
			case "contactSidebar":
				$('.contactSideForm').fadeOut(2000);
				$('.contactSideThankyou, .contact-container--global .contactOtherDetails').fadeIn(800);
				break;

			case "contactSingle":
				$('.contact-us__contact-form').fadeOut(1000);
				$('#contact-single_thankyou, #contact-single_other').fadeIn(800);
				break;

		}

		$('.info-mandatory').removeClass("error-mandatory");
		$('.form-user-ctrl').removeClass("error");
		$('.form-user-grp').find('svg').css('fill', '#666');

		setTimeout(function () {
			ServicesAPI.resetForm(fid);
		}, 5000);
	},
	resetForm: function (fid) {

		switch (fid) {
			case "contactSidebar":
				//in a timeout to avoid visual conflict with animation
				setTimeout(function () {
					$('#requestFormRightNav_Acc').trigger("reset");
					$('.contactSideThankyou, .contact-container--global .contactOtherDetails, .productUserType').fadeOut(2000);
					$('.contactSideForm').toggle();
					$('.contact-container--global').css("right", "-640px");
				}, 1000);
				break;

			case "contactSingle":
				$('#requestFormRContactUs_Acc').trigger("reset");
				$('.contact-us__contact-form').fadeIn(1000);
				$('#contact-single_thankyou, #contact-single_other').fadeOut(2000);
				break;

		}


	}
};
