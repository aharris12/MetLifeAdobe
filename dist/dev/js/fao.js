//Find an X variables
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

var bootPagNum = 0;
var listCount = 10;
var count = 0;
var resultsListHTML ="";
var loadingMore = false;
var page = 1;

var faoURL;

/*
add a no border function for the global footer
 */

//need to add a function for the traffic overlay

$(window).on("resize",function(){
    /*if ($(".hidden-xs").is(":visible") == false) {
        var focusedElement = document.activeElement;
        $(".fax__container").find('.contact-container--form-card').insertAfter($(".results_list_container"));
        focusedElement.focus();
    }
    else {
        var focusedElement = document.activeElement;
        $(".fax__container").find('.contact-container--form-card').insertAfter($(".fax-results__container  > .maps-contact-form-container > button"));
        focusedElement.focus();
    }*/
    if ($(".hidden-xs").is(":visible") == false) {
        $(".fax__container").find('.contact-container--form-card').insertAfter($(".results_list_container"));

    }
    else {
        $(".fax__container").find('.contact-container--form-card').insertAfter($(".fax-results__container  > .maps-contact-form-container > button"));
    }
});

$(".find-an-x-search__container .find-an-x-input__container").on('click', function (event) {
    event.preventDefault();
    if ($(".mobile_expand_close").not(":visible") && !$(".hidden-xs").is(":visible")) {
        $(".find-an-x-search__container .mobile_expand_close").show();
        $(".find-an-x-search__container .find-an-x-search--expand").slideDown();
    }
});

$(".find-an-x-search__container .mobile_expand_close").on('click', function (event) {
    event.preventDefault();
    if ($(".mobile_expand_close").is(":visible") && !$(".hidden-xs").is(":visible")) {
        $(".find-an-x-search__container .mobile_expand_close").hide();
        $(".find-an-x-search__container .find-an-x-search--expand").slideUp();
    }
});
$(".cta_search").on("keyup",function(e){
    if (e.which == 13) {

    }else{
        $(this).removeClass("error");
    }


});

$(".find-an-x-search__container .directions_button").on('click',function (e) {
    //handle empty val
    if( $(".cta_search").val().length === 0 ) {
        $(".cta_search").addClass('error');
    }else{
        faxServices.showLocation();
    }

});

$(".search_location_image").on('click touchstart',function () {

        faxServices.showLocation();

});
$('.find-an-x-search__container .cta_search').on('keypress',function (event) {
    //handle empty val
    if( $(".cta_search").val().length === 0 ) {
        $(".cta_search").addClass('error');
    }else{
        faxServices.checkEnter(event);
    }

});

/* Function that is called whenever the user changes the radius*/
$(".find_an_office_radius").on('change',function () {

    faxServices.resetMap();
    faxServices.showLocation();

});


$('.get-directions-buttons .btn').on('click',function(){
    $('.get-directions-buttons .btn').removeClass('active');
    $(this).addClass('active');
    if($('.driving-directions-panel').is(':visible')){
        faxServices.getDirections();
    }
});

$(".get-directions-form .get_directions_button").on('click',function(){
    faxServices.getDirections();

});

/* back link on directions page work*/
$(".back-click").on('click',function(){
    if($('.driving-directions-panel').is(':visible')){
        $('.driving-directions-panel').addClass('hidden');
        $('.get-directions-form').removeClass('hidden');
        directionsDisplay.setMap(null);
        faxServices.getDirectionsPanel($('.get-directions-form .to-address').val());
    }
    else{
        faxServices.showLocation();
        if (!$(".find-an-x-search__container").hasClass("hidden")) {

            $('.page-title__heading').text($('.findOfficeText').text());
            faxServices.removeBreadCrumb();
        }
    }
});


$('.maps-button').click(function (clickedButton) {
    var moreMapText = $(".get_direction_more_map").text();
    var lessMapText = $(".get_direction_less_map").text();

    if ($('.maps-button').text() == moreMapText)
    {
        $('.google-maps-container').css('height', '400px');
        $('.maps-button').text(lessMapText);
        faxServices.resetMap();
        faxServices.resizeMap();
    } else {
        $('.google-maps-container').css('height', '200px');
        $('.maps-button').text(moreMapText);
        faxServices.resetMap();
        faxServices.resizeMap();
    }
});

$(window).on('load',function(e) {
    if($(".fax__container").length > 0){
        faoURL = window.location.href;
        blackMarker = $('.pngPath_icon_locpin_blk').text();
        blueMarker = $('.pngPath_icon_locpin_blue').text();
        faxServices.initializeFindAnOffice();
        if (document.referrer != ""){
            faxServices.showLocation();
        }
        if ($(".hidden-xs").is(":visible") == false) {
            $(".fax__container").find('.contact-container--form-card').insertAfter($(".results_list_container"));

        }
        else {
            $(".fax__container").find('.contact-container--form-card').insertAfter($(".fax-results__container  > .maps-contact-form-container > button"));
        }
    }

});


$("body").on('click touchstart', ".results_office_name", function () {
    var i = $(this).closest('.results_office_result').index();


    google.maps.event.trigger(markersArray[i], 'click');
});


$("body").on("ready", "[data-leg-index=\"1\"]", function(){
    $("[data-leg-index=\"1\"]").addClass("lastMarker");
});

$(".results_pagination").click(function(){
    $('html, body').animate({
        scrollTop: $('.fax-results__container')
    }, 'slow');
});


var faxServices = {
    createPagination : function (result) {
        $('.results_content').children().removeClass('.hidden');
        var notHiddenList = $(".results_content").children().not('.hidden');
        var listLength = result;
        var st_cnt = 0;
        var end_cnt = 0;

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
                //next: SearchG2Config.Search_paging_next_label,    // visible pagination
                leaps: true
                //prev: SearchG2Config.Search_paging_prev_label        // next/prev leaps through maxVisible
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
                 console.log(st_cnt);
                 console.log(end_cnt);
                $('.display_container .display-text > span:first-of-type').html(st_cnt + '&nbsp;' + 'of' + '&nbsp;' + end_cnt);
                // ... after content load -> change total to 10
                $('.results_pagination').bootpag({
                    total: Math.ceil(count / listCount),
                    maxVisible: listCount
                });
            });
        }

        if (count == 0){

            st_cnt = listLength;
            end_cnt = listLength;
            $('.display_container .display-text  > span:nth-of-type(2)').addClass('hidden');
            $('.results_pagination').addClass('hidden');
        }
        else {
            $('.display_container .display-text  > span:nth-of-type(2)').removeClass('hidden');
            $('.display_container .display-text  > span:nth-of-type(2)').html('&nbsp;' + count);
        }
        if (end_cnt < result) {
            console.log(st_cnt);
            console.log(end_cnt);
            $('.display_container .display-text > span:first-of-type').html(st_cnt + '&nbsp;' + '-' + '&nbsp;' + end_cnt);
        } else {
            $('.display_container .display-text  > span:first-of-type').html(st_cnt + '&nbsp;' + '-' + '&nbsp;' + result);
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
        faxServices.autocompleteOn();

        var trafficLayer = new google.maps.TrafficLayer();
        trafficLayer.setMap(map);
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
    resizeMap: function(){
        google.maps.event.trigger(map, 'resize');
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
        faxServices.initializeGoogleMapObject();
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
                        faxServices.addAddressToMap(response, status);
                    }else{
                        faxServices.resetMap();
                        faxServices.showSorryUnableToLocateMessage();
                    }
                });
            }else{
                faxServices.resetMap();
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
    addAddressToMap: function(response,status) {
        faxServices.clearOverlays();
        if (!response || status!= google.maps.GeocoderStatus.OK) {
            faxServices.showSorryUnableToLocateMessage();
        }else {
            var point = new google.maps.LatLng(response[0].geometry.location.lat(),response[0].geometry.location.lng());
            startPointGeoCode = point;
            // Reset the Map
            faxServices.resetMap();

            // Set the GMarker based on the geocode (GLatLng)

            startPointGMarker = faxServices.createStartPointMarker(startPointGeoCode);

            // Display progress indicator before retreiving offices
            //showProgressIndicator();

            // Now get the Met offices for this address
            faxServices.getMetOffices();
        }
    },
    resetMap : function() {
        // Clear any existing overlays
        faxServices.clearOverlays();
        directionsDisplay.setMap(null);
        // Pan the map back to the original start location
        // *** Must center map, before adding overlay

        map.setCenter(startPointGeoCode, 9);

    },
    getMetOffices : function() {

        var latitude = startPointGeoCode.lat();
        var longitude = startPointGeoCode.lng();
        var baseServiceUrl = $("[data-fao-url]").attr("data-fao-url");

        radiusInMiles = $('.find_an_office_radius').val();
        specialty = $('.different_services_dropdown').val();

        var serviceUrl = faxServices.buildServiceUrl(baseServiceUrl, latitude, longitude, radiusInMiles, specialty)

        /************LIVE FAO SERVICE***************/
        $.ajax({
            type: 'GET',
            url: serviceUrl,
            success: function(data) {
                faxServices.generateOfficeItems(data)
            },
            error: function() {
                faxServices.handleServiceError()
            }
        });
        /************LIVE FAO SERVICE***************/

        /************LOCAL FAO SERVICE***************/
        /*var faoSearchResults = $.getJSON("fao.json", function(data) {
         faxServices.generateOfficeItems(data);
         //faxServices.createPagination(count);
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
            $('.display_container .display-text').removeClass('hidden');
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
                    resultsListHTML += "<p class=\"results_office_get_directions results_office_get_directions_dentist\"><a href='#' onclick=\"faxServices.getDirectionsPanel(\'" + strDestination + "\');return false;\">" + $('.getDirectionsText').text() + "</a></p>";
                    resultsListHTML += "<p class=\"results_office_street_address dentist_left\">" + fclt_addr.toLowerCase() + "</p>";
                    resultsListHTML += "<p class=\"results_office_education dentist_right\">" + label_education + ": " + fclt_education.toLowerCase() + "</p>";
                }else{
                    resultsListHTML += "<p class=\"results_office_type\">" + fclt_ctgy +"</p>";
                    resultsListHTML += "<p class=\"results_office_get_directions\"><a href='#' onclick=\"faxServices.getDirectionsPanel(\'" + strDestination + "\');return false;\">" + $('.getDirectionsText').text() + "</a></p>";
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
                resultsListHTML += "<div><button class=\"results_office_get_directions_button btn btn-brand-2nd\" onclick=\"faxServices.getDirectionsPanel(\'" + strDestination + "\');return false;\">" + $('.getDirectionsText').text() + "</button></div>";
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
                console.log(iconNumber);
                var fclt_marker = faxServices.createOfficeMarker(fclt_point, markerInfoHTML, iconNumber);
            }
            resultsListHTML += "</div>";
            $(resultsListHTML).insertBefore($(".results_pagination"));
            faxServices.createPagination(count);
        }
        else {
            faxServices.showSorryUnableToLocateMessage();
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
        var browsername= faxServices.getBrowserName();
        if(key == 13){ //if character code is equal to ascii 13 (if enter key)
            //alert('ENTER pressed, show location, and return false');
            faxServices.showLocation();
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
    getDirectionsPanel : function(strpDestination) {
        $('.page-title__heading').text($('.getDirectionsText').text());
        if ($(".generatedBreadCrumb").length ==0) {
            faxServices.addBreadCrumb();
        }


        faxServices.clearOverlays();
        //.setMap(null);	$('.contact_advisor_input_container').removeClass('visible-xs');
        $('.fax-results__container, .driving-directions-panel, .find-an-x-search__container,.cta_search__container, .directions_error').addClass('hidden');
        $('.driving-direction-container, .maps-button, #googleDrivingMapsContainer').removeClass('hidden');
        var fromAddr = $('.find-an-x-search__container .cta_search').val();
        faxServices.initializeDrivingGoogleMapObject();

        $('.get-directions-form .from-address').val(fromAddr);
        if (fromAddr == '')
        {
            //console('Please enter an Address.');
            $('.find-an-x-search__container .cta_search').focus();
            return;
        }
        geocoder.geocode( { 'address': fromAddr}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                var res = faxServices.makeMarker(results[0].geometry.location,'A');
            }
        });


        //clearOverlays();
        var toAddr = strpDestination.split(":");
        $('.get-directions-form .to-address').val(faxServices.formatDestination(toAddr[0]));



        faxServices.resetMap();
        var dest_marker = $('.get-directions-form .to-address').val();
        geocoder.geocode( { 'address': dest_marker}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                var res = faxServices.makeMarker(results[0].geometry.location,'B');

            }
        });
        faxServices.clearOverlays();
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
        //var directions = new GDirections(map, officeResultsPanel);
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
        // directions.load(fromAddr +" to "+ formatDestination(toAddr[0]));
        directionsService.route(request, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                faxServices.clearOverlays();
                $('.get-directions-form,.directions_error').addClass('hidden');
                $('.driving-directions-panel').removeClass('hidden');
                directionsDisplay.setDirections(response);
                var leg = response.routes[ 0 ].legs[ 0 ];
                faxServices.makeMarker( leg.start_location,"A" );
                faxServices.makeMarker( leg.end_location, 'B' );
            }else{
                directionsDisplay.setMap(null);
                $('.driving-directions-panel').addClass('hidden');
                $('.directions_error').removeClass('hidden');
            }
        });

    },
    formatDestination : function(destAddress){
        var regex = new RegExp("[0-9]TH|[0-9]RD|[0-9]ND", "i");

        // //console("destAddress "+destAddress);
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
            //GEvent.addListener(dir_lat_lng, "error", function(){resultsOverlay.innerHTML = "Unable to find directions between the selected addresses"});
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
                    $('.get-directions-form .from-address').val(faxServices.formatDestination(results[0].formatted_address));
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
    clearOverlays: function() {
        for (var i = 0; i < markersArray.length; i++ ) {
            markersArray[i].setMap(null);
        }
        for (var i = 0; i < dir_markerArray.length; i++ ) {
            dir_markerArray[i].setMap(null);
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
    }

};