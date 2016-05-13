//Variables for all Services
var bootPagNum = 0;
var listCount = 10;
var count = 0;
var resultsListHTML ="";
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
var geocoder = new google.maps.Geocoder();
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
var dir_to_flag=true;
var directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true });

//Forms Lib Variables
var searchAgainFlag = false;


//News Room Variables
var firstTimeRunNewsRoom = true;
var newsMonth;
var newsYear;
var newsTopic;
var newsConcatenator;

$(document).ready(function(){
	ServicesAPI.loadEventListeners();
});
/****Blog Search****************************************/


$("#blog-category-dropdown").on("change", function(){
		var url = $(".blog-list").attr("data-url");
		var searchType = $(this).val();
		ServicesAPI.blogsServiceCall(url, searchType)
});

/****News Room Search****************************************/
$(".divider--load-more__link").click(function (e) {
	e.preventDefault();
	ServicesAPI.newsRoomServiceConstruction();
});

$("#list_month, #list_year, #list_topics").change(function () {
	ServicesAPI.newsRoomServiceConstruction();
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
		var query  = $(".js-formLib").attr("data-forms-query-parameter");
		var value = $('.js-formLib').val()
		url += value + query;
		ServicesAPI.formsLibraryServiceCall(url);
	});

	$(".form_library_container").on("click", ".form a", function() {
		$(".form_library_container").find(".form a").removeClass("selected");
		$(this).closest(".form").find("a").addClass("selected");
	});
}


//Site Search


// Search Results Page Search Start
$('.js-searchSubmit').on('click', function () {
	var searchRequest = $(".js-searchTextBox").val();
	var url = $(".js-searchSubmit").attr("data-search-ajax-url")+ "?query=" + searchRequest;
	if (searchRequest) {
		ServicesAPI.searchServiceCall(url);
	}
});

// Site Header Search
$('.js-searchIcon').click(function () {
	if($(".search-trigger__search-box").hasClass("js-oldSearch")) {
		if ($(window).width() >= 767 && $(".search-trigger__icon--open").length > 0) {
			ServicesAPI.legacySearch($(".search-trigger__search-box").val());
		}
	}else{
		//For Integration we only need this statment
		if ($(window).width() >= 767 && $(".search-trigger__icon--open").length > 0) {
			ServicesAPI.redirectToSearchResultsPage('.search-trigger__search-box');
		}
	}

});

$('.search-trigger__search-box').keypress(function (e) {
	if($(this).hasClass("js-oldSearch")){
		if (e.which == 13) {
			e.preventDefault();
			ServicesAPI.legacySearch($(".search-trigger__search-box").val());
		}
	}else{
		//For Integration we only need this statment
		if (e.which == 13) {
			e.preventDefault();
			ServicesAPI.redirectToSearchResultsPage('.search-trigger__search-box');
		}
	}

});


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

$('.search-results-container__correction-text > a').on('click', function (e) {
	e.preventDefault();
	var correctionClickedOn = $(this).text();
});

$('.search-results-container__correction-text > a').on('click', function (e) {
	e.preventDefault();
	var correctionClickedOn = $(this).children('span').text();
	var searchRequest = correctionClickedOn;
	var url = $(".js-searchSubmit").attr("data-search-ajax-url")+ "?query=" + searchRequest;
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

$(".find-an-x-search__container .directions_button").on('click',function (e) {
	//handle empty val
	if( $(".cta_search").val().length === 0 ) {
		$(".cta_search").addClass('error');
	}else{
		ServicesAPI.showLocation();
	}

});

$(".search_location_image").on('click touchstart',function () {
	if ($(window).width() < 1025) {
		ServicesAPI.showLocation();
	}
});

$('.find-an-x-search__container .cta_search').on('keypress',function (event) {
	//handle empty val
	if( $(".cta_search").val().length + 1 === 0 ) {
		$(".cta_search").addClass('error');
	}else{
		$(".cta_search").removeClass('error');
		ServicesAPI.checkEnter(event);
	}

});

/* Function that is called whenever the user changes the radius*/
$(".find_an_office_radius").on('change',function () {
	ServicesAPI.resetMap();
	ServicesAPI.showLocation();
});

$(document).on('click',".results_office_name",function(){
	var i= $(this).closest('.results_office_result').index();
	var index = ((i + 1) + ((bootPagNum) * listCount))
	google.maps.event.trigger(markersArray[index], 'click');
});

$('.get-directions-buttons .btn').on('click',function(){
	$('.get-directions-buttons .btn').removeClass('active');
	$(this).addClass('active');
	if($('.driving-directions-panel').is(':visible')){
		ServicesAPI.getDirections();
	}
});

$(".get-directions-form .get_directions_button").on('click',function(){
	ServicesAPI.getDirections();
});

/* back link on directions page work*/
$(".back-click").on('click',function(){
	if($('.driving-directions-panel').is(':visible')){
		$('.driving-directions-panel').addClass('hidden');
		$('.get-directions-form').removeClass('hidden');
		directionsDisplay.setMap(null);
		ServicesAPI.getDirectionsPanel($('.get-directions-form .to-address').val());
	}
	else{
		ServicesAPI.showLocation();
		if (!$(".find-an-x-search__container").hasClass("hidden")) {

			$('.page-title__heading').text($('.findOfficeText').text());
			ServicesAPI.removeBreadCrumb();
		}
	}
});

//might not be needed, need to test.
/* update link for find an office breadcrumb*/
$('.bc_link_fao').on('click',function(){
	ServicesAPI.showLocation();
});

$('.maps-button').click(function (clickedButton) {
	var moreMapText = $(".get_direction_more_map").text();
	var lessMapText = $(".get_direction_less_map").text();

	if ($('.maps-button').text() == moreMapText)
	{
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

$(window).on('load',function(e) {
	if($(".fax__container").length > 0){
		faoURL = window.location.href;
		blackMarker = $('.pngPath_icon_locpin_blk').text();
		blueMarker = $('.pngPath_icon_locpin_blue').text();
		ServicesAPI.initializeFindAnOffice();
		if (document.referrer != ""){
			ServicesAPI.showLocation();
		}
		if ($(".hidden-xs").is(":visible") == false) {
			$(".fax__container").find('.contact-container--form-card').insertAfter($(".results_list_container"));

		}
		else {
			$(".fax__container").find('.contact-container--form-card').insertAfter($(".fax-results__container  > .maps-contact-form-container > button"));
		}
	}
	if($(".find-office__zip-city-state").length > 0){
		googleautocomplete = new google.maps.places.Autocomplete(document.getElementsByClassName("find-office__zip-city-state")[0]);
		//googleautocomplete.bindTo('bounds', map);
		google.maps.event.addListener(googleautocomplete, 'place_changed', function () {
			var place = googleautocomplete.getPlace();
			if (!place || !place.geometry) {

			}
		});
	}

});
//From FAO js, not sure what this does.
$("body").on("ready", "[data-leg-index=\"1\"]", function(){
	$("[data-leg-index=\"1\"]").addClass("lastMarker");
});

$(".results_pagination").click(function(){
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
		if(sessionStorage.getItem("product") !== null){
			$(".insurance-type").val($("[data-product='"+ sessionStorage.getItem("product") + "']").val());
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

$(".js-submitQuote").click(function(e){
	e.preventDefault();
	if($(".js-submitQuote").parent().parent().parent().parent().hasClass('quote-tool-form')){
		var baseUrl  = $(".quote-tool-form").attr("data-quote-url");
		quoteUrl ="";
		//quoteUrl = baseUrl + '{"domain":"' + quoteDomain + '","language":"'+ quotelanguage+'","product":"'+ quoteProduct +'","country":"default"';
		quoteUrl = baseUrl;
		quoteRequest = {domain:quoteDomain, language:quotelanguage,product: quoteProduct, country: 'default' };
		ServicesAPI.loopThroughQuoteInputs();
		//quoteUrl +=  '}';
		if(ServicesAPI.validateFields()){
			ServicesAPI.quoteServiceCall();
		}
	}
});


$(".insurance-type").on("change", function(){
	var formToShow = $(".insurance-type").val();
	$(".quote-tool-form").show();
	$(".quote-tool-form form").hide();
	$("[data-show-form='"+quoteToolForm+ "']").hide();
	quoteSubmit = $(".insurance-type").val();
	$("."+formToShow + " form").show();
	quoteSubmit = $(".insurance-type").val();
	if($("[data-quoteDescription='"+ quoteSubmit +"']").length > 0){
		$("[data-quoteDescription]").addClass("hidden");
		$("[data-quoteDescription='"+ quoteSubmit +"']").removeClass("hidden");
	}
	quoteToolForm = $(this).find(':selected').val();
	quoteDomain = $("[data-quoteTool='"+ quoteToolForm +"']").attr("data-domain");
	quotelanguage = $("[data-quoteTool='"+ quoteToolForm +"']").attr("data-lan");
	quoteProduct = $(this).find(':selected').attr('data-product');
	$(".js-hideButton").hide();
});

String.prototype.toTitleCase = function() {
	var i, j, str, lowers, uppers;
	str = this.replace(/([^\W_]+[^\s-]*) */g, function(txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});

	// Certain minor words should be left lowercase unless
	// they are the first or last words in the string
	lowers = ['A', 'An', 'The', 'And', 'But', 'Or', 'For', 'Nor', 'As', 'At',
		'By', 'For', 'From', 'In', 'Into', 'Near', 'Of', 'On', 'Onto', 'To', 'With'];
	for (i = 0, j = lowers.length; i < j; i++)
		str = str.replace(new RegExp('\\s' + lowers[i] + '\\s', 'g'),
			function(txt) {
				return txt.toLowerCase();
			});

	// Certain words such as initialisms or acronyms should be left uppercase
	uppers = ['Id', 'Tv'];
	for (i = 0, j = uppers.length; i < j; i++)
		str = str.replace(new RegExp('\\b' + uppers[i] + '\\b', 'g'),
			uppers[i].toUpperCase());

	return str;
}

var isWhole_re = /^\s*\d+\s*$/;
function isWhole (s) {
	return String(s).search (isWhole_re) != -1
}

var isNonblank_re    = /\S/;
function isNonblank (s) {
	return String (s).search (isNonblank_re) != -1
}

var ServicesAPI = {
	loadEventListeners: function(){
		ServicesAPI.gmapsAutoCompleteInit();
		if($(".search-results-container").length > 0)
			ServicesAPI.searchResultsPageLoad();
		if($(".js-resultsGlobal").length > 0 || $(".insurance-type").length > 0){
			ServicesAPI.loadQuoteResults();
			ServicesAPI.clearOverlays();
		}
		if($(".news-room").length > 0){
			listCount = 6;
			ServicesAPI.pressBackQuery();
			ServicesAPI.newsRoomServiceConstruction();
		}
		if($(".blog-list").length > 0){
			var url = $(".blog-list").attr("data-url");
			ServicesAPI.blogsServiceCall(url , "mostRecent")
		}
	},
	replaceAll : function(txt, replace, with_this) {
		return txt.replace(new RegExp('\\b' + replace + '\\b', 'gi'),with_this);
	},
	populateYearDropDown: function(year,min,element) {
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
	isLeapYear : function(a) {
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
	validateFields: function() {
		var areErrorFieldsPresent = false;

		$("[data-quoteTool='"+ quoteToolForm +"']").each(function(){
			if(!$("[data-quoteTool='"+ quoteToolForm +"']").find(".form-focus").find(".errorSpan").is(":visible")){
				areErrorFieldsPresent =  true;
			}
		});
		return areErrorFieldsPresent;
	},
	numberWithCommas: function(x){
		var parts = x.toString().split(".");
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		return parts.join(".");
	},
	toTitleCase: function(str){
		return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	},
	encode : function(d) {
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
	escapeChar : function(value) {
		var bb = "";
		for (i = 0; i < value.length; i++) {
			bb += encode(value.charAt(i));
		}
		return bb;
	},
	strTrim : function(a){
		a=a.replace(/^\s+/g,"");
		a=a.replace(/\s+$/g,"");
		return a;
	},
	calculateAge: function() {
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
	showSorryUnableToLocateMessage : function(){
		count = 0;
		ServicesAPI.createPagination(count);
		$('.results_error_info').removeClass('hidden').html($('.errorMsgtext_no_office_found').text());
		$('.results_content').remove();
		$('.results_pagination,.find_an_office_pagecount_wrap,.maps-button, .google-maps-container').addClass('hidden');
	},
	getQueryString: function(){
		var vars = [], hash;
		var hashes = window.location.href.slice(window.location.href.indexOf('#') + 1).split('&');
		for(var i = 0; i < hashes.length; i++)
		{
			hash = hashes[i].split('=');
			vars.push(hash[0]);
			vars[hash[0]] = hash[1];
		}
		return vars;
	},
	createPagination : function (result) {
		$('.results_content').children().removeClass('.hidden');
		var notHiddenList = $(".results_content").children().not('.hidden');
		var listLength = result;
		var st_cnt = 0;
		var end_cnt = 0;
		var next_label = $(".next_label").text();
		var prev_label  = $(".prev_label").text();
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
	formatQuotePremium : function(premium){
		//if(premium != Math.round(premium)){
		var dec = parseFloat(Math.round(premium*100)/100).toFixed(2);
		return dec;
	},
	quoteServiceCall: function() {

		$.ajax({
			url: quoteUrl + JSON.stringify(quoteRequest),
			contentType: "application/json; charset=utf-8",
			async: true,
			dataType:'json',
			data : JSON.stringify(quoteRequest),
			type: 'POST',
			success: function(response) {
				console.log(response)
				var numObjects = Object.keys(response.solution).length;
				window.sessionStorage.clear();
				ServicesAPI.setQuoteSessionStorage();

				if(response.solution.premium !== undefined &&  response.solution.premium !== null){
					var prem = ServicesAPI.numberWithCommas(ServicesAPI.formatQuotePremium(response.solution.premium));
					sessionStorage.setItem("premium", prem);
				}

				if(response.solution.age !== undefined && response.solution.age !== null){
					sessionStorage.setItem("age",response.solution.age);
				}
				if(response.solution.gender !== undefined && response.solution.gender !== null){
					sessionStorage.setItem("gender",response.solution.gender);
				}
				if(response.solution.coverage !== undefined && response.solution.coverage !== null){
					var cov = ServicesAPI.numberWithCommas(ServicesAPI.formatQuotePremium(response.solution.coverage));
					sessionStorage.setItem("coverage",cov);
				}
				if(response.solution.term !== undefined && response.solution.term !== null){
					sessionStorage.setItem("term",response.solution.term);
				}
				if(response.solution.coverageType !== undefined && response.solution.coverage_type !== null){
					sessionStorage.setItem("coverageType",response.solution.coverageType);
				}
				if(response.solution.state !== undefined && response.solution.state !== null){
					sessionStorage.setItem("state",response.solution.state);
				}
				if(response.solution.income !== undefined && response.solution.income !== null){
					sessionStorage.setItem("income",response.solution.income);
				}
				if($('#' +quoteToolForm + 'dobMonth').length > 0 && $('#' +quoteToolForm + 'dobDay').length > 0  && $('#' +quoteToolForm + 'dobYear').length > 0 ){
					sessionStorage.setItem('dobMonth', $('#' +quoteToolForm + 'dobMonth').val());
					sessionStorage.setItem('dobDay', $('#' +quoteToolForm + 'dobDay').val());
					sessionStorage.setItem('dobYear', $('#' +quoteToolForm + 'dobYear').val());
				}
				for(var i = 1; i <=numObjects; i++){
					var optionalSelect = response.solution.hasOwnProperty('optionalSelect' + i);
					if(optionalSelect){
						sessionStorage.setItem('optionalSelect' + i, response.solution['optionalSelect' + i]);
					}
					var optionalRadio = response.solution.hasOwnProperty('optionalRadio' + i);
					if(optionalRadio){
						sessionStorage.setItem('optionalRadio' + i, response.solution['optionalRadio' + i]);
					}
				}
				sessionStorage.setItem("product" , quoteProduct);
				ServicesAPI.redirectToQuoteResultsPage();
			},
			error: function(e) {
				console.log('error ',e);
			},
			timeout:30000
		});
	},
	loadQuoteResults: function(){
		if($(".js-resultsGlobal").length > 0){
			if(sessionStorage.getItem("premium") !== null){
				$(".results-card__quoteinfo__value").text(sessionStorage.getItem("premium"));
			}
			if(sessionStorage.getItem("coverage") !== null){
				$("[data-field='coverage'] .value").text(sessionStorage.getItem("coverage"));
			}

			if(sessionStorage.getItem("coverageType") !== null){
				var cov = sessionStorage.getItem("coverageType").toTitleCase();
				$("[data-field='coverage']").html('<span class="value"> ' + cov + ' </span>');
			}
			if(sessionStorage.getItem("coverageType") === null && sessionStorage.getItem("coverage") === null){
				$("[data-field='coverage']").remove();
			}

			if(sessionStorage.getItem("term") !== null){
				$("[data-field='term'] .value").text(sessionStorage.getItem("term"));
			}else{
				$("[data-field='term']").html('');
			}
		}else{
			if($(".list").length > 0 ){

			}else{
				$(".insurance-type").val($(".insurance-type option:first").val());
				sessionStorage.clear();
			}
		}
	},
	quoteFormReset : function() {
		$(".cta_header_quote").find(".generic-form").each(function () {
			$(this).find("input, select, textarea").removeClass('error');
			$(this)[0].reset();
		});
	},
	redirectToQuoteResultsPage: function() {
		var url = $("[data-quoteTool='"+ quoteToolForm +"']").attr("data-path-to-results");
		window.location.href = url;
	},
	setQuoteSessionStorage: function(){
		var thisForm = $("[data-quoteTool='"+ quoteToolForm +"']");
		var numInputs = thisForm.find(".form-focus").length;

		if($('#' +quoteToolForm + 'userAge').length > 0){
			sessionStorage.setItem("age", $('#' +quoteToolForm + 'userAge').val());
		}

		if($('#' +quoteToolForm + 'coverageType').length > 0){
			sessionStorage.setItem("coverageType", $('#' +quoteToolForm + 'coverageType').val());
		}

		if($('#' +quoteToolForm + 'coverageText').length > 0 ){
			sessionStorage.setItem("coverage", $('#' +quoteToolForm + 'coverageText').val());
		}


		if($('#' +quoteToolForm + 'state').length > 0){
			sessionStorage.setItem("state", $('#' +quoteToolForm + 'state').val());
		}

		if($('#' +quoteToolForm + 'gender').length > 0){
			sessionStorage.setItem("gender", $('#' +quoteToolForm + 'gender').val());
		}

		if($('#' +quoteToolForm + 'coverageAmount').length > 0){
			sessionStorage.setItem("coverage", $('#' +quoteToolForm + 'coverageAmount').val());
		}

		if($('#' +quoteToolForm + 'termLengthSelect').length > 0){
			sessionStorage.setItem("term", $('#' +quoteToolForm + 'termLengthSelect').val());
		}

		if($('#' +quoteToolForm + 'termLengthText').length > 0 ){
			sessionStorage.setItem("term", $('#' +quoteToolForm + 'termLengthText').val());
		}

		if($('#' +quoteToolForm + 'incomeSelect').length > 0){
			sessionStorage.setItem("income", $('#' +quoteToolForm + 'incomeSelect').val());
		}

		if($('#' +quoteToolForm + 'incomeText').length > 0 ){
			sessionStorage.setItem("income", $('#' +quoteToolForm + 'incomeText').val());
		}

		if($('#' +quoteToolForm + 'dobMonth').length > 0 && $('#' +quoteToolForm + 'dobDay').length > 0  && $('#' +quoteToolForm + 'dobYear').length > 0 ){
			sessionStorage.setItem("dobMonth", $('#' +quoteToolForm + 'dobMonth').val());
			sessionStorage.setItem("dobDay", $('#' +quoteToolForm + 'dobDay').val());
			sessionStorage.setItem("dobYear", $('#' +quoteToolForm + 'dobYear').val());
		}

		for(var i = 1; i <= numInputs; i++){
			if($('#' +quoteToolForm + 'optionalSelect' + i).length > 0){
				sessionStorage.setItem("optionalSelect" + i, $('#' +quoteToolForm + 'optionalSelect' + i).val());
			}

			if($('[name="'+quoteToolForm+'radioGroup'+i+'"]').length > 0){
				sessionStorage.setItem("optionalRadio" + i, $('[name="'+quoteToolForm+'radioGroup'+ i +'"]').val());
			}
		}
	},
	preFillQuoteForm: function(){
		var thisForm = $("[data-quoteTool='"+ quoteToolForm +"']");
		var numInputs = thisForm.find(".form-focus").length;

		if($('#' +quoteToolForm + 'userAge').length > 0){
			$('#' +quoteToolForm + 'userAge').val(sessionStorage.getItem('age'));
		}

		if($('#' +quoteToolForm + 'coverageType').length > 0){
			$('#' +quoteToolForm + 'coverageType').val(sessionStorage.getItem('coverageType'));
		}

		if($('#' +quoteToolForm + 'coverageText').length > 0 ){
			var cov = parseInt(sessionStorage.getItem('coverage').replace(/\,/g,''));
			$('#' +quoteToolForm + 'coverageText').val(cov);
		}


		if($('#' +quoteToolForm + 'state').length > 0){
			$('#' +quoteToolForm + 'state').val(sessionStorage.getItem('state'));
			var state = $('#' +quoteToolForm + 'state').val();
		}

		if($('#' +quoteToolForm + 'gender').length > 0){
			$('#' +quoteToolForm + 'gender').val(sessionStorage.getItem('gender'));
		}

		if($('#' +quoteToolForm + 'coverageAmount').length > 0){
			var cov = parseInt(sessionStorage.getItem('coverage').replace(/\,/g,''));
			$('#' +quoteToolForm + 'coverageAmount').val(cov);
		}

		if($('#' +quoteToolForm + 'termLengthSelect').length > 0){
			$('#' +quoteToolForm + 'termLengthSelect').val(sessionStorage.getItem('term'));
		}

		if($('#' +quoteToolForm + 'termLengthText').length > 0 ){
			$('#' +quoteToolForm + 'termLengthText').val(sessionStorage.getItem('term'));
		}

		if($('#' +quoteToolForm + 'incomeSelect').length > 0){
			$('#' +quoteToolForm + 'incomeSelect').val(sessionStorage.getItem('income'))
		}

		if($('#' +quoteToolForm + 'incomeText').length > 0 ){
			$('#' +quoteToolForm + 'incomeText').val(sessionStorage.getItem('income'))

		}

		if($('#' +quoteToolForm + 'dobMonth').length > 0 && $('#' +quoteToolForm + 'dobDay').length > 0  && $('#' +quoteToolForm + 'dobYear').length > 0 ){
			$('#' +quoteToolForm + 'dobMonth').val(sessionStorage.getItem('dobMonth'));
			$('#' +quoteToolForm + 'dobDay').val(sessionStorage.getItem('dobDay'));
			$('#' +quoteToolForm + 'dobYear').val(sessionStorage.getItem('dobYear'));
		}

		for(var i = 1; i <= numInputs; i++){
			if($('#' +quoteToolForm + 'optionalSelect' + i).length > 0){
				$('#' +quoteToolForm + 'optionalSelect' + i).val(sessionStorage.getItem('optionalSelect' + i));
			}

			if($('[name="'+quoteToolForm+'radioGroup'+i+'"]').length > 0){
				$('[name="'+quoteToolForm+'radioGroup'+ i +'"]').val(sessionStorage.getItem('optionalRadio' + i)).attr("checked", true);
			}
		}
	},
	loopThroughQuoteInputs: function(){
		var thisForm = $("[data-quoteTool='"+ quoteToolForm +"']");
		var numInputs = thisForm.find(".form-focus").length;

		if($('#' +quoteToolForm + 'userAge').length > 0){
			var age = $('#' +quoteToolForm + 'userAge').val();
			if($('#' +quoteToolForm + 'userAge')[0].selectedIndex === 0){
				$('#' +quoteToolForm + 'userAge').addClass("error").next().show().css("display" , "block");
			}else{
				//quoteUrl += ',"age":"' + age +'"';
				quoteRequest["age"] = age;
				$('#' +quoteToolForm + 'userAge').removeClass("error").next().hide();
			}
		}

		if($('#' +quoteToolForm + 'coverageType').length > 0){
			var coverageType = $('#' +quoteToolForm + 'coverageType').val();
			if($('#' +quoteToolForm + 'coverageType')[0].selectedIndex === 0){
				$('#' +quoteToolForm + 'coverageType').addClass("error").next().show().css("display" , "block");
			}else{
				//quoteUrl += ',"coverageType":"' + coverageType +'"';
				quoteRequest["coverageType"] = coverageType;
				$('#' +quoteToolForm + 'coverageType').removeClass("error").next().hide();
			}
		}

		if($('#' +quoteToolForm + 'coverageText').length > 0 ){
			var coverageText = $('#' +quoteToolForm + 'coverageText').val();
			if(isWhole(coverageText)=== true){
				//quoteUrl += ',"coverage":"' + coverageText +'"';
				quoteRequest["coverage"] = coverageText;
				$('#' +quoteToolForm + 'coverageText').removeClass("error").next().hide();
			}else{
				$('#' +quoteToolForm + 'coverageText').addClass("error").next().show().css("display" , "block");
			}
		}

		if($('#' +quoteToolForm + 'state').length > 0){
			var state = $('#' +quoteToolForm + 'state').val();
			if($('#' +quoteToolForm + 'state')[0].selectedIndex === 0){
				$('#' +quoteToolForm + 'state').addClass("error").parent().find(".errorSpan").show().css("display" , "block");
			}else{
				//quoteUrl += ',"state":"' + state +'"';
				quoteRequest["state"] = state;
				$('#' +quoteToolForm + 'state').removeClass("error").parent().find(".errorSpan").hide();
			}
		}

		if($('#' +quoteToolForm + 'gender').length > 0){
			var gender = $('#' +quoteToolForm + 'gender').val();
			if($('#' +quoteToolForm + 'gender')[0].selectedIndex === 0){
				$('#' +quoteToolForm + 'gender').addClass("error").next().show().css("display" , "block");
			}else{
				//quoteUrl += ',"gender":"' + gender +'"';
				quoteRequest["gender"] = gender;
				$('#' +quoteToolForm + 'gender').removeClass("error").next().hide();
			}
		}

		if($('#' +quoteToolForm + 'coverageAmount').length > 0){
			var coverageAmount = $('#' +quoteToolForm + 'coverageAmount').val();
			if($('#' +quoteToolForm + 'coverageAmount')[0].selectedIndex === 0){
				$('#' +quoteToolForm + 'coverageAmount').addClass("error").next().show().css("display" , "block");
			}else{
				//quoteUrl += ',"coverage":"' + coverageAmount +'"';
				quoteRequest["coverage"] = coverageAmount;
				$('#' +quoteToolForm + 'coverageAmount').removeClass("error").next().hide();
			}
		}

		if($('#' +quoteToolForm + 'termLengthSelect').length > 0){
			var termLengthSelect = $('#' +quoteToolForm + 'termLengthSelect').val();
			if($('#' +quoteToolForm + 'termLengthSelect')[0].selectedIndex === 0){
				$('#' +quoteToolForm + 'termLengthSelect').addClass("error").next().show().css("display" , "block");
			}else{
				//quoteUrl += ',"term":"' + termLengthSelect +'"';
				quoteRequest["term"] = termLengthSelect;
				$('#' +quoteToolForm + 'termLengthSelect').removeClass("error").next().hide();
			}
		}

		if($('#' +quoteToolForm + 'termLengthText').length > 0 ){
			var termLengthText = $('#' +quoteToolForm + 'termLengthText').val();
			if(isNonblank(termLengthText)=== true){
				$('#' +quoteToolForm + 'termLengthText').removeClass("error").next().hide();
				//quoteUrl += ',"term":"' + termLengthText +'"';
				quoteRequest["term"] = termLengthText;
			}else{
				$('#' +quoteToolForm + 'termLengthText').addClass("error").next().show().css("display" , "block");

			}
		}

		if($('#' +quoteToolForm + 'incomeSelect').length > 0){
			var income = $('#' +quoteToolForm + 'incomeSelect').val();
			if($('#' +quoteToolForm + 'incomeSelect')[0].selectedIndex === 0){
				$('#' +quoteToolForm + 'incomeSelect').addClass("error").next().show().css("display" , "block");
			}else{
				//quoteUrl += ',"income":"' + income +'"';
				quoteRequest["income"] = income;
				$('#' +quoteToolForm + 'incomeSelect').removeClass("error").next().hide();
			}
		}

		if($('#' +quoteToolForm + 'incomeText').length > 0 ){
			var incomeText = $('#' +quoteToolForm + 'incomeText').val();
			if(isNonblank(incomeText)=== true){
				$('#' +quoteToolForm + 'incomeText').removeClass("error").next().hide();
				//quoteUrl += ',"income":"' + incomeText +'"';
				quoteRequest["income"] = incomeText;
			}else{
				$('#' +quoteToolForm + 'incomeText').addClass("error").next().show().css("display" , "block");

			}
		}

		if($('#' +quoteToolForm + 'dobMonth').length > 0 && $('#' +quoteToolForm + 'dobDay').length > 0  && $('#' +quoteToolForm + 'dobYear').length > 0 ){
			var age;
			if($('#' +quoteToolForm + 'dobMonth')[0].selectedIndex === 0){
				$('#' +quoteToolForm + 'dobMonth').addClass("error");
			}else{
				$('#' +quoteToolForm + 'dobMonth').removeClass("error");
			}

			if($('#' +quoteToolForm + 'dobDay')[0].selectedIndex === 0){
				$('#' +quoteToolForm + 'dobDay').addClass("error");
			}
			else{
				$('#' +quoteToolForm + 'dobDay').removeClass("error");
			}

			if($('#' +quoteToolForm + 'dobYear')[0].selectedIndex === 0){
				$('#' +quoteToolForm + 'dobYear').addClass("error");
			}
			else{
				$('#' +quoteToolForm + 'dobYear').removeClass("error");
			}

			if($('#' +quoteToolForm + 'dobMonth')[0].selectedIndex !== 0 && $('#' +quoteToolForm + 'dobDay')[0].selectedIndex !== 0 && $('#' +quoteToolForm + 'dobYear')[0].selectedIndex !== 0){
				age = ServicesAPI.calculateAge();
				//quoteUrl += ',"age":"' + age +'"';
				quoteRequest["age"] = age;
			}
		}
		for(var i = 1; i <= numInputs; i++){
			if($('#' +quoteToolForm + 'optionalSelect' + i).length > 0){
				var optionalSelect = $('#' +quoteToolForm + 'optionalSelect' + i).val();
				if($('#' +quoteToolForm + 'optionalSelect' + i)[0].selectedIndex === 0){
					$('#' +quoteToolForm + 'optionalSelect' + i).addClass("error").next().show().css("display" , "block");
				}else{
					//quoteUrl += ',"optionalSelect'+i+'":"' + optionalSelect +'"';
					var optionalSelectText = 'optionalSelect'+i;
					quoteRequest[optionalSelectText] = optionalSelect;
					$('#' +quoteToolForm + 'optionalSelect' + i).removeClass("error").next().hide();
				}
			}

			if($('[name="'+quoteToolForm+'radioGroup'+i+'"]').length > 0){
				var optionalRadio = $('[name="'+quoteToolForm+'radioGroup'+i+'"]:checked').val();
				if(optionalRadio === "" || optionalRadio === " " || optionalRadio === null || optionalRadio === undefined){
					$('[name="'+quoteToolForm+'radioGroup'+i+'"]').parent().parent().find(".errorSpan").show().css("display" , "block");
				}else{
					$('[name="'+quoteToolForm+'radioGroup'+i+'"]').parent().parent().find(".errorSpan").hide();
					//quoteUrl += ',"optionalRadio'+i+'":"' + optionalRadio +'"';
					var optionalSelectText = 'optionalRadio'+i;
					quoteRequest[optionalSelectText] = optionalRadio;
				}
			}
		}
	},
	searchServiceCall: function(input){
		count = 0;
		var url = input;
		var querySearch = ServicesAPI.getQueryString()["query"];
		if(querySearch !== null && querySearch !== undefined && querySearch !== "" && querySearch !== " "){
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
			dataType:'json',
			type: 'GET',
			success: function(data) {
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
			error: function(e) {
				ServicesAPI.showSorryUnableToLocateMessage();
			},
			timeout:30000
		});
		/************LIVE SERVICE***************/
	},
	legacySearch: function(serchQuery){
		var str = "https://www.metlife.com/searchresults?query=";
		var val2 = "&spell_check=true&and_on=Y&sel_path=metlife%2Findividual%2Findex.html&remoteUser=";
		str += serchQuery+val2;
		window.location.href = str;
	},
	redirectToSearchResultsPage: function(input){
		var searchTerm = sessionStorage.setItem("searchTerm" ,$(input).val());
		var url = $("#metSearchForm").attr("data-path-to-search-results");
		window.location.href = url;
	},
	searchResultsPageLoad: function(){
		var cov = sessionStorage.getItem("searchTerm");
		if(sessionStorage.getItem("searchTerm") !== null){
			if($(".js-searchTextBox").css("display") !== " none"){

				$(".js-searchTextBox").val(sessionStorage.getItem("searchTerm"));
				$(".js-searchSubmit").click();
			}
		}

	},
	newsRoomServiceConstruction : function(){
		var url = $(".lists").attr("data-news-url");
		var query  = $(".lists").attr("data-news-query-parameter");
		newsMonth = $("#list_month").val();
		newsYear = $("#list_year").val();
		newsTopic = $('#list_topics').val();
		newsConcatenator = $(".lists").attr("data-news-concatenator");
		url += newsYear + newsConcatenator + newsMonth + newsConcatenator + newsTopic + query;
		ServicesAPI.newsRoomServiceCall(url);
	},
	pressBackQuery : function() {
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
	newsRoomServiceCall: function(input){
		resultsListHTML = "";
		var url = input;
		count = 0;
		$(".results_content").remove();

		/************LIVE News Room SERVICE***************/
		$.ajax({
		 url: url,
		 contentType: "application/json; charset=utf-8",
		 async: true,
		 dataType:'json',
		 type: 'GET',
		 success: function(data) {
			 if(firstTimeRunNewsRoom === true){
				 firstTimeRunNewsRoom = false;
			 }else{
				 listCount +=6;
			 }
			 newsRoomResults = data.news;
			 if (newsRoomResults.length != 0) {
				 if (!$(".list__item--no-results").hasClass("hidden")) {
					 $(".list__item--no-results").addClass("hidden");
				 }
				 resultsListHTML += "<div class='results_content'>";
				 for (var i = 0; i < newsRoomResults.length; i++) {
					 count++;
					 if(count <= listCount) {
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
			 if(listCount >= newsRoomResults.length){
				 $(".divider--load-more__link").hide();
			 }else{
				 $(".divider--load-more__link").show();
			 }
		 },
		 error: function(e) {
		 console.log('error ',e);
		 },
		 timeout:30000
		 });
		/************LIVE News Room SERVICE***************/

		/************LOCAL News Room SERVICE***************/

		/*var newsRoomResults = $.getJSON("news.json", function(data) {
		 if(firstTimeRunNewsRoom === true){
			 firstTimeRunNewsRoom = false;
		 }else{
		    listCount +=6;
		 }
		 newsRoomResults = data.news;
		 if (newsRoomResults.length != 0) {
					 if (!$(".list__item--no-results").hasClass("hidden")) {
						 $(".list__item--no-results").addClass("hidden");
					 }
				 resultsListHTML += "<div class='results_content'>";
				 for (var i = 0; i < newsRoomResults.length; i++) {
					 count++;
					 if(count <= listCount) {
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
		 if(listCount >= newsRoomResults.length){
			    $(".divider--load-more__link").hide();
			 }else{
			    $(".divider--load-more__link").show();
			 }
		 });*/
		/************LOCAL News Room SERVICE***************/
	},
	blogsServiceCall: function(input, searchType) {
		resultsListHTML = "";
		$(".results_content").remove();
		console.log("fired");
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
			},
			error: function (e) {
				console.log('error ', e);
			},
			timeout: 30000
		});
		/************LIVE Blog SERVICE***************/
	},
	formsLibraryServiceCall: function(input){
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
			},
			error: function (e) {
				console.log('error ', e);
			},
			timeout: 30000
		});
		/************LIVE Forms SERVICE***************/
	},
	clearOverlays: function() {
		for (var i = 0; i < markersArray.length; i++ ) {
			markersArray[i].setMap(null);
		}
		for (var i = 0; i < dir_markerArray.length; i++ ) {
			dir_markerArray[i].setMap(null);
		}
	},
	initializeFindAnOffice : function() {
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
			scaleControl:false,
			scrollwheel:true,
			zoom:10
		};

		map = new google.maps.Map(document.getElementById("googleMapsContainer"), myOptions);
		ServicesAPI.autocompleteOn();
	},
	autocompleteOn: function() {
		googleautocomplete = new google.maps.places.Autocomplete(document.getElementsByClassName("cta_search")[0]);
		googleautocomplete.bindTo('bounds', map);
		google.maps.event.addListener(googleautocomplete, 'place_changed', function () {
			var place = googleautocomplete.getPlace();
			if (!place || !place.geometry) {

			}
		});
	},
	initializeGoogleMapObject : function() {
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
			scaleControl:false,
			scrollwheel:true,
			zoom:10
		};

		map = new google.maps.Map(document.getElementById("googleMapsContainer"), myOptions);
	},
	initializeDrivingGoogleMapObject : function() {
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
			scaleControl:false,
			scrollwheel:true,
			zoom:10
		};

		map = new google.maps.Map(document.getElementById("googleDrivingMapsContainer"), myOptions);
		googleautocomplete = new google.maps.places.Autocomplete(document.getElementsByClassName('from-address')[0]);
		googleautocomplete.bindTo('bounds', map);
		google.maps.event.addListener(googleautocomplete, 'place_changed', function () {
			var place = googleautocomplete.getPlace();
			if (!place || !place.geometry) {

			}
		});
	},
	gmapsAutoCompleteInit : function() {
		$('.find-office__zip-city-state, .cta_search').each(function () {
			new google.maps.places.Autocomplete($(this)[0]);
		});
	},
	showLocation : function() {
		$('.fax-results__container, .maps-button, .get-directions-form, .find-an-x-search__container, .cta_search__container').removeClass('hidden');
		$('.driving-direction-container, #googleDrivingMapsContainer').addClass('hidden');
		if(dir_to_flag ==true){
			$('.get-directions-form .from-address').val('');
		}
		var endsWith = function(str, suffix) {
			return str.indexOf(suffix, str.length - suffix.length) !== -1;
		};
		var startsWith = function(string, searchString, position){
			position = position || 0;
			return string.substr(position, searchString.length) === searchString;

		};
		$('.errorSpan.error_zip_code').html($('.errorMsgtext_no_office_found').text());
		ServicesAPI.initializeGoogleMapObject();
		var address;
		var zip = sessionStorage.getItem("faoZipCode");
		if (document.referrer == "" ||  endsWith(document.referrer, "/cf") || startsWith(document.referrer, document.origin+document.location.pathname)) {
			address = $('.find-an-x-search__container .cta_search').val();
		}else{
			$('.find-an-x-search__container .cta_search').val(zip);
			$('.find-an-x-search__container .cta_search').text(zip);
			address = $('.find-an-x-search__container .cta_search').val();
		}
		var validateAddress = address.trim();
		var isNumber =  /^\d+$/.test(validateAddress);
		if((!isNumber) || (isNumber && (address.length===5))){
			$('.errorSpan.error_zip_code').addClass('hidden');
			if(address!=null && address!='' && address!=undefined && address!=' '){
				geocoder.geocode({"address":address},function(response, status) {
					if (status == google.maps.GeocoderStatus.OK) {
						ServicesAPI.addAddressToMap(response, status);
					}else{
						ServicesAPI.resetMap();
						ServicesAPI.showSorryUnableToLocateMessage();
					}
				});
			}else{
				ServicesAPI.resetMap();
			}
		}else{
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
	//showLocation : function() {
	//	$('.fax-results-container, .maps-button, .get-directions-form, .find_an_x_cta_search, .contact_advisor_input_container,.wrapper_container_cta_search,.bread_crumb_fao').removeClass('hidden');
	//	$('.directions-container, .bread_crumb_dir, #googleDrivingMapsContainer').addClass('hidden');
	//	if(dir_to_flag ==true){
	//		$('.get-directions-form .from-address').val('');
	//	}
	//	var endsWith = function(str, suffix) {
	//		return str.indexOf(suffix, str.length - suffix.length) !== -1;
	//	};
	//	var startsWith = function(string, searchString, position){
	//		position = position || 0;
	//		return string.substr(position, searchString.length) === searchString;
	//
	//	};
	//	$('.errorSpan.error_zip_code').html($('.errorMsgtext_no_office_found').text());
	//	ServicesAPI.initializeGoogleMapObject();
	//	var address;
	//	var zip = sessionStorage.getItem("faoZipCode");
	//	if (document.referrer == "" ||  endsWith(document.referrer, "/cf") || startsWith(document.referrer, document.origin+document.location.pathname)) {
	//		address = $('.find_an_x_cta_search .cta_search').val();
	//	}else{
	//		$('.find_an_x_cta_search .cta_search').val(zip);
	//		$('.find_an_x_cta_search .cta_search').text(zip);
	//		address = $('.find_an_x_cta_search .cta_search').val();
	//	}
	//	var validateAddress = address.trim();
	//	var isNumber =  /^\d+$/.test(validateAddress);
	//	if((!isNumber) || (isNumber && (address.length===5))){
	//		$('.errorSpan.error_zip_code').addClass('hidden');
	//		if(address!=null && address!='' && address!=undefined && address!=' '){
	//			geocoder.geocode({"address":address},function(response, status) {
	//				if (status == google.maps.GeocoderStatus.OK) {
	//					ServicesAPI.addAddressToMap(response, status);
	//				}else{
	//					ServicesAPI.resetMap();
	//					ServicesAPI.showSorryUnableToLocateMessage();
	//				}
	//			});
	//		}else{
	//			ServicesAPI.resetMap();
	//		}
	//	}else{
	//		$('.errorSpan.error_zip_code').removeClass('hidden');
	//		if ($(".hidden-xs").is(":visible") == true) {
	//
	//			$(".mobile_expand_close").click();
	//			$(".error_zip_code").insertAfter(".mobile_expand");
	//		}
	//		if (($(".hidden-xs").is(":visible") == false) && ($(".mobile_expand").is(":visible"))) {
	//			$(".error_zip_code").insertAfter(".mobile_expand_open");
	//		}
	//	}
	//},
	addAddressToMap: function(response,status) {
		ServicesAPI.clearOverlays();
		if (!response || status!= google.maps.GeocoderStatus.OK) {
			ServicesAPI.showSorryUnableToLocateMessage();
		}else {
			var point = new google.maps.LatLng(response[0].geometry.location.lat(),response[0].geometry.location.lng());
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
	resetMap : function() {
		// Clear any existing overlays
		ServicesAPI.clearOverlays();
		directionsDisplay.setMap(null);
		// Pan the map back to the original start location
		// *** Must center map, before adding overlay

		map.setCenter(startPointGeoCode, 9);

	},
	getMetOffices : function() {

		var latitude = startPointGeoCode.lat();
		var longitude = startPointGeoCode.lng();
		var baseServiceUrl = $("[data-fao-url]").attr("data-fao-url");
		var faoMarket = '';
		if($('.directions_button').length != 0){
			faoMarket = $('.directions_button').attr("data-fao-market");
		}
		if($(".find-office__submit").length != 0){
			faoMarket = $(".find-office__submit").attr("data-fao-market");
		}
		radiusInMiles = $('.find_an_office_radius').val();
		if(faoMarket.toLowerCase() == "us"){
			specialty = 'AUTO%2C+HOME%2C+RENTERS%2C+ETC...';
			var serviceUrl = ServicesAPI.buildServiceUrlUS(baseServiceUrl, latitude, longitude, radiusInMiles, specialty);
		}else{
			specialty = $('.different_services_dropdown').val();
			var serviceUrl = ServicesAPI.buildServiceUrl(baseServiceUrl, latitude, longitude, radiusInMiles, specialty);
		}
		/************LIVE FAO SERVICE***************/
		$.ajax({
			 type: 'GET',
			 url: serviceUrl,
			 success: function(data) {
			 ServicesAPI.generateOfficeItems(data)
			 },
			 error: function() {
			 ServicesAPI.handleServiceError()
			 }
		 });
		/************LIVE FAO SERVICE***************/

		/************LOCAL FAO SERVICE***************/
		/*var faoSearchResults = $.getJSON("fao.json", function(data) {
			ServicesAPI.generateOfficeItems(data);
			ServicesAPI.createPagination(count);
		 });*/
		/************LOCAL FAO SERVICE***************/

	},
	generateOfficeItems : function(responseObject) {
		count=0;
		var resultsListHTML="";
		markersArray = [];
		$('.results_error_info,.results_pagination').addClass('hidden');
		if ( responseObject.facilities.length != 0 ) {
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
				var temp = strDestination.slice(-2);;
				if (temp == ", ") {
					strDestination = strDestination.substring(0, strDestination.length - 2);
				}
				var strDestination = fclt_addr + ", " + fclt_city + ", " + fclt_state + ", " + fclt_zip;
				resultsListHTML += "<div class=\"results_office_result\"><p class=\"results_office_count\">" + (i + 1) + "</p>";
				resultsListHTML += "<p class=\"results_office_name\">" + fclt_officeName + "</p>";
				resultsListHTML += "<div class=\"results_office_mileage\"><p class=\"results_office_distance\">" + (Math.round(fclt_distance * 100) / 100).toFixed(2) + "</p>";
				resultsListHTML += "<p class=\"results_office_mi\">" + "&nbsp;" + label_radius_unit + "</p></div>";
				if (fclt_education){
					resultsListHTML += "<p class=\"results_office_type results_office_type_dentist\">" + fclt_ctgy +"</p>";
					resultsListHTML += "<p class=\"results_office_get_directions results_office_get_directions_dentist\"><a href='#' onclick=\"ServicesAPI.getDirectionsPanel(\'" + strDestination + "\');return false;\">" + $('.getDirectionsText').text() + "</a></p>";
					resultsListHTML += "<p class=\"results_office_street_address dentist_left\">" + fclt_addr.toLowerCase() + "</p>";
					resultsListHTML += "<p class=\"results_office_education dentist_right\">" + label_education + ": " + fclt_education.toLowerCase() + "</p>";
				}else{
					resultsListHTML += "<p class=\"results_office_type\">" + fclt_ctgy +"</p>";
					resultsListHTML += "<p class=\"results_office_get_directions\"><a href='#' onclick=\"ServicesAPI.getDirectionsPanel(\'" + strDestination + "\');return false;\">" + $('.getDirectionsText').text() + "</a></p>";
					resultsListHTML += "<p class=\"results_office_street_address\">" + fclt_addr.toLowerCase() + "</p>";
				}
				if (fclt_languages){
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
				}else{
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
				}else{
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
	handleServiceError : function() {
		$('.results_error_info').removeClass('hidden').html($('.errorMsgText_server_busy').text());
		$('.results_content').html("");
		$('.results_pagination, .find_an_office_pagecount_wrap, .google-maps-container, .maps-button').addClass('hidden');
	},
	createStartPointMarker : function(latlng) {
		// Use the default marker
		var marker = new google.maps.Marker({
			position: latlng
		});
		markersArray.push(marker);
		return marker;
	},
	createOfficeMarker : function(point, html, officeNumber){
		var baseIcon = '';
		var numberedIcon = '';
		var marker = '';
		var numberedIconURL='';
		var marker;
		marker = new MarkerWithLabel({
			position: point,
			labelContent: officeNumber,
			//icon: " ",
			icon: {
				url: blueMarker,
				scaledSize: new google.maps.Size(33,42)// desired size
			},
			labelAnchor: new google.maps.Point(3, 33),
			labelClass: "my_label", // the CSS class for the label
			labelStyle: {opacity: 0.8},
			map: map});
		if ((officeNumber/10)>=1){
			marker.labelAnchor = new google.maps.Point(8, 33)
		}

		google.maps.event.addListener(marker, 'click', (function(marker, i) {

			return function() {
				if (selectedMarker) {
					selectedMarker.setIcon({
						url: blueMarker,
						scaledSize: new google.maps.Size(33,42)
					});
				}
				marker.setIcon({
					url: blackMarker,
					scaledSize: new google.maps.Size(33,42)
				});
				selectedMarker = marker;

				var infowindow = new google.maps.InfoWindow();
				infowindow.setContent(html);
				if ($(".hidden-xs").is(":visible")) {
					infowindow.open(map, marker);
				} else {

				}
				if(presentHighligtedInfo!=null)
				{
					presentHighligtedInfo.open(null, marker);
				}
				presentHighligtedInfo=infowindow;
			}
		})(marker, officeNumber));

		markersArray.push(marker);
		return marker;
	},
	checkEnter : function(e) {
		var key=e.keyCode || e.which;
		var browsername= ServicesAPI.getBrowserName();
		if(key == 13){ //if character code is equal to ascii 13 (if enter key)
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

		}else{
			returnValue = true;
		}
	},
	getBrowserName : function(){
		var browsername=navigator.appName;
		if (browsername.indexOf("Netscape")!=-1) {
			browsername="NS";
		}else if (browsername.indexOf("Microsoft")!=-1) {
			browsername="MSIE";
		}else {
			browsername="N/A";
		}
		return browsername;
	},
	addBreadCrumb: function(){
		var currentPageCrumb = $(".breadcrumb").find("span:last-of-type");
		currentPageCrumb.wrapInner("<a href=\"\"> </a>");
		currentPageCrumb.addClass("breadcrumb__crumb");
		currentPageCrumb.find("a").attr("href", faoURL);
		currentPageCrumb.after("<span class=\"generatedBreadCrumb\">" + $('.getDirectionsText').text() + "</span");
	},
	removeBreadCrumb: function(){
		$(".breadcrumb").find("span:last-of-type").remove();
		$(".breadcrumb").find("span:last-of-type a").contents().unwrap();
		$(".breadcrumb").find("span:last-of-type").removeClass("breadcrumb__crumb");
	},
	getDirectionsPanel : function(strpDestination) {
		$('.page-title__heading').text($('.getDirectionsText').text());
		if ($(".generatedBreadCrumb").length ==0) {
			ServicesAPI.addBreadCrumb();
		}
		ServicesAPI.clearOverlays();
		$('.fax-results__container, .driving-directions-panel, .find-an-x-search__container,.cta_search__container, .directions_error').addClass('hidden');
		$('.driving-direction-container, .maps-button, #googleDrivingMapsContainer').removeClass('hidden');
		var fromAddr = $('.find-an-x-search__container .cta_search').val();
		ServicesAPI.initializeDrivingGoogleMapObject();

		$('.get-directions-form .from-address').val(fromAddr);
		if (fromAddr == '')
		{
			$('.find-an-x-search__container .cta_search').focus();
			return;
		}
		geocoder.geocode( { 'address': fromAddr}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				var res = ServicesAPI.makeMarker(results[0].geometry.location,'A');
			}
		});


		//clearOverlays();
		var toAddr = strpDestination.split(":");
		$('.get-directions-form .to-address').val(ServicesAPI.formatDestination(toAddr[0]));



		ServicesAPI.resetMap();
		var dest_marker = $('.get-directions-form .to-address').val();
		geocoder.geocode( { 'address': dest_marker}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				var res = ServicesAPI.makeMarker(results[0].geometry.location,'B');

			}
		});
		ServicesAPI.clearOverlays();
	},
	makeMarker : function(point,title){
		marker = new MarkerWithLabel({
			position: point,
			labelContent: title,
			//icon: " ",
			icon: {
				url:blueMarker,
				scaledSize: new google.maps.Size(33,42)// desired size
			},
			labelAnchor: new google.maps.Point(5, 33),
			labelClass: "my_label", // the CSS class for the label
			labelStyle: {opacity: 0.8},
			map: map
		});
		dir_markerArray.push(marker);
	},
	getDirections : function(){
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
			directionsService.route(request, function(response, status) {
				if (status == google.maps.DirectionsStatus.OK) {
					ServicesAPI.clearOverlays();
					$('.get-directions-form,.directions_error').addClass('hidden');
					$('.driving-directions-panel').removeClass('hidden');
					directionsDisplay.setDirections(response);
					var leg = response.routes[ 0 ].legs[ 0 ];
					ServicesAPI.makeMarker( leg.start_location,"A" );
					ServicesAPI.makeMarker( leg.end_location, 'B' );
				}else{
					directionsDisplay.setMap(null);
					$('.driving-directions-panel').addClass('hidden');
					$('.directions_error').removeClass('hidden');
				}
			});

		}
	,
	formatDestination : function(destAddress){
		var regex = new RegExp("[0-9]TH|[0-9]RD|[0-9]ND", "i");
		while(regex.test(destAddress)){
			var matchedString = regex.exec(destAddress).toString();
			destAddress = destAddress.replace(matchedString, matchedString.substring(0,1));
		}

		regex.compile("\\bfl\\b", "i");
		while(regex.test(destAddress)){
			var matchedString = regex.exec(destAddress).toString();
			destAddress = destAddress.replace(matchedString, "FLOOR");
		}
		regex.compile("\\bst\\b","i");
		if(regex.test(destAddress)){
			var matchedString = regex.exec(destAddress).toString();
			destAddress = destAddress.replace(matchedString, "STREET");
		}
		return destAddress;
	},
	handleGetDirectionErrors : function(invDir, from, to_LatLng){
		// Try getting the directions using geocoding
		if(invDir.getStatus().code == G_GEO_UNKNOWN_ADDRESS){
			invDir.clear();
			var resultsOverlay = document.getElementById("officeResultsContent");
			resultsOverlay.innerHTML = '';

			var dir_lat_lng = new GDirections(map, resultsOverlay);

			dir_lat_lng.load(from +" to "+to_LatLng);
			google.maps.Event.addListener(dir_lat_lng, "error", function () { resultsOverlay.innerHTML = $('.get_direction_error').text() });
		}
	},
	getAddress : function() {
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(handle_geolocation_query);
		}
	},
	handle_geolocation_query : function(position){
		var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
		var geocoder = geocoder = new google.maps.Geocoder();
		geocoder.geocode({ 'latLng': latlng }, function (results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				if (results[1]) {
					var arrAddress = results[1].address_components;
					var itemLocality ="";
					$.each(arrAddress, function (i, address_component) {
						if (address_component.types[0] == "locality"){
							itemLocality = address_component.long_name;
						}
						if (address_component.types[0] == "administrative_area_level_1"){
							itemLocality += ', '+address_component.long_name;
						}
						$('.find-an-x-search__container .cta_search').val(itemLocality);
					});
				}
				if (results[0]) {
					dir_to_flag=false;
					$('.get-directions-form .from-address').val(ServicesAPI.formatDestination(results[0].formatted_address));
				}
			}
		});
	},
	buildServiceUrl: function(baseUrl, lat, lng, radius, specialty) {
		var latSelector = '.latitude=' + lat.toString().replace('.',','), //sling selector workaround
			lngSelector = '.longitude=' + lng.toString().replace('.',','),
			radiusSelector = '.radius=' + radius,
			specialtySelector = '.specialty=' + specialty;

		return baseUrl + latSelector + lngSelector + radiusSelector + specialtySelector + ".json";
	},
	buildServiceUrlUS: function(baseUrl, lat, lng, radius, specialty) {
		var latSelector = 'latitude=' + lat.toString(), //sling selector workaround
			lngSelector = '&longitude=' + lng.toString(),
			radiusSelector = '&radius=' + radius,
			specialtySelector = '&specialty=' + specialty;

		return baseUrl + latSelector + lngSelector + radiusSelector + specialtySelector + "&format=json";
	}
};
