/**
 * Created by icunningham on 8/9/2016.
 */
//
// Press Room Variables
var firstTimeRunNewsRoom = true;
var firstTimeRunNewsRoomChange = true;
var newsMonth;
var newsYear;
var newsTopic;
var newsConcatenator;
var totalMonths = [];
var totalYears = [];
var integerToMonthMapping = {};
var monthToIntegerMapping = {};
//Not sure where removeProtoObject came from
removeProtoObject = false;
var listYearChange = false;
var listTopicChange = false;


$(".divider--load-more__link").click(function (e) {
    e.preventDefault();
    totalYears = [];
    totalMonths = [];
    newsRoomServiceConstruction();
});

//$("#list_month, #list_year").change(function () {
//    firstTimeRunNewsRoomChange = true;
//    totalYears = [];
//    totalMonths = [];
//    listCount = 0;
//    newsRoomServiceConstruction();
//});

//when a new year is selected, the month dropdown should
//default to "All", the Topics dropdown should remain the
//same, and a new query should be fired.
$("#list_year").change(function () {
    firstTimeRunNewsRoomChange = true;
    $("#list_month").val(integerToMonthMapping["0"]);
    totalYears = [];
    totalMonths = [];
    listCount = 0;
    listYearChange = true;
    newsRoomServiceConstruction();
});

//When a new list topic is selected, the month and year
//dropdowns should reset to "All", and a new query should be
//fired
$("#list_topics").change(function () {
    firstTimeRunNewsRoomChange = true;
    listTopicChange = true;
    //The first value of the integerToMonthMapping will be
    //the same for the month and year dropdown
    $("#list_year").val(integerToMonthMapping["0"]);
    $("#list_month").val(integerToMonthMapping["0"]);
    totalYears = [];
    totalMonths = [];
    listCount = 0;
    newsRoomServiceConstruction();
});

$("#list_month").change(function() {
    newsRoomServiceConstruction();
});

//Local function implementation...to be deleted
function newsRoomYearChange() {
    totalMonths.sort(function(a, b){return a - b});
    totalMonths = unique(totalMonths);
    var selectMonth = $('#list_month');
    selectMonth.empty();
    selectMonth.append('<option value="All" selected>All</option>');
    var thisMonth;
    if($("#list_topics").prop('selectedIndex') === 0 && $('#list_year').prop('selectedIndex') === 0){
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
}


//AEM modified function from Diego
//function newsRoomYearChange() {
//    totalMonths.sort(function(a, b){return a - b});
//    totalMonths = unique(totalMonths);
//    var selectMonth = $('#list_month');
//    selectMonth.empty();
//    selectMonth.append('<option value="" selected>All</option>');
//    var thisMonth, thisMonthValue;
//    var monthsList = $('.pressroom-months-list > div[class="month-item"]');
//    if($("#list_topics").prop('selectedIndex') === 0 && $('#list_year').prop('selectedIndex') === 0){
//        for(var i =0; i < monthsList.length; i++) {
//            var monthItem = $(monthsList[i]);
//            selectMonth.append('<option value="'+ monthItem.data('month-value') + '">'+monthItem.data('month-text')+'</option>');
//        }
//    }else{
//        for (var i in totalMonths) {
//            for(var j = 0; j<monthsList.length; j++) {
//                var monthItem = $(monthsList[j]);
//                if(monthItem.data('month-value') === totalMonths[i]){
//                    selectMonth.append('<option value="'+ monthItem.data('month-value') + '">'+monthItem.data('month-text')+'</option>');
//                    break;
//                }
//            }
//        }
//    }
//}

//Local function implementation...to be deleted
function newsRoomTopicsChange(){
    totalYears.sort(function(a, b){return a - b});
    totalMonths.sort(function(a, b){return a - b});
    totalYears = unique(totalYears);
    totalMonths = unique(totalMonths);
    var selectYear = $('#list_year');
    selectYear.empty();
    selectYear.append('<option value="All" selected>All</option>');
    var firstTime = true;
    for(var i = (totalYears.length - 1); i >= 0; i--) {
        selectYear.append('<option value="'+totalYears[i] +'" >'+totalYears[i]+'</option>');
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

}

//AEM modified function from Diego
//function newsRoomTopicsChange(){
//    totalYears.sort(function(a, b){return a - b});
//    totalMonths.sort(function(a, b){return a - b});
//    totalYears = unique(totalYears);
//    totalMonths = unique(totalMonths);
//    var selectYear = $('#list_year');
//    selectYear.empty();
//    selectYear.append('<option value="" selected>All</option>');
//    var firstTime = true;
//    for(var i = (totalYears.length - 1); i >= 0; i--) {
//        selectYear.append('<option value="'+totalYears[i] +'" >'+totalYears[i]+'</option>');
//    }
//    firstTime = false;
//    var selectMonth = $('#list_month');
//    selectMonth.empty();
//    selectMonth.append('<option value="" selected>All</option>');
//    var thisMonth, thisMonthValue;
//    var monthsList = $('.pressroom-months-list > div[class="month-item"]');
//    if($("#list_topics").prop('selectedIndex') === 0){
//        for(var i =0; i < monthsList.length; i++) {
//            var monthItem = $(monthsList[i]);
//            selectMonth.append('<option value="'+ monthItem.data('month-value') + '">'+monthItem.data('month-text')+'</option>');
//        }
//    }else{
//
//        for (var i in totalMonths) {
//            for(var j = 0; j<monthsList.length; j++) {
//                var monthItem = $(monthsList[j]);
//                if(monthItem.data('month-value') === totalMonths[i]){
//                    selectMonth.append('<option value="'+ monthItem.data('month-value') + '">'+monthItem.data('month-text')+'</option>');
//                    break;
//                }
//            }
//        }
//    }
//
//}

function newsRoomServiceCall(input, selectedMonth, newsTopicPicked) {
    resultsListHTML = "";
    var url = input;
    count = 0;
    console.log(input);
    $(".results_content").remove();
    /************LIVE News Room SERVICE***************/
    //$.ajax({
    //	url: url,
    //	contentType: "application/json; charset=utf-8",
    //	async: true,
    //	dataType: 'json',
    //	type: 'GET',
    //	success: function (data) {
    //
    //		if (firstTimeRunNewsRoom === false || firstTimeRunNewsRoomChange === false) {
    //			listCount += 6;
    //		}
    //
    //		if (firstTimeRunNewsRoom === true) {
    //			firstTimeRunNewsRoom = false;
    //		}
    //		if (firstTimeRunNewsRoomChange === true) {
    //			firstTimeRunNewsRoomChange = false;
    //		}
    //
    //
    //		newsRoomResults = data.news;
    //		if (newsRoomResults.length != 0) {
    //			if (!$(".list__item--no-results").hasClass("hidden")) {
    //				$(".list__item--no-results").addClass("hidden");
    //			}
    //			resultsListHTML += "<div class='results_content'>";
    //			for (var i = 0; i < newsRoomResults.length; i++) {
    //				totalYears.push(newsRoomResults[i].year);
    //				totalMonths.push(newsRoomResults[i].month);
    //				count++;
    //				if (count <= listCount) {
    //					resultsListHTML += "<div class=\"list__item\">";
    //					resultsListHTML += "<span class=\"list__item__date\">" + newsRoomResults[i].publishedDate + "</span>";
    //					resultsListHTML += "<a class=\"list__item__title\" href=\"" + newsRoomResults[i].link + "\">" + newsRoomResults[i].articleTitle + "</a>";
    //					resultsListHTML += "</div>";
    //				}
    //			}
    //			resultsListHTML += "</div>";
    //			ServicesAPI.createPagination(count);
    //			$(resultsListHTML).insertAfter($(".lists"));
    //		} else {
    //			$(".list__item--no-results").removeClass('hidden');
    //		}
    //        if(listYearChange) {
    //            newsRoomYearChange();
    //            listYearChange = false;
    //        }
    //        if(listTopicChange) {
    //            newsRoomTopicsChange();
    //            listTopicChange = false;
    //        }
    //		if (listCount >= newsRoomResults.length) {
    //			$(".divider--load-more__link").hide();
    //		} else {
    //			$(".divider--load-more__link").show();
    //		}
    //
    //	},
    //	error: function (e) {
    //  $('.list__item--no-results').removeClass("hidden");
    //		console.log('error ', e);
    //	},
    //	timeout: 30000
    //});
    /************LIVE News Room SERVICE***************/

    /************LOCAL News Room SERVICE***************/

    $.ajax({
        url: url,
        contentType: "application/json charset=utf-8",
        async: true,
        dataType: 'json',
        type: 'GET',
        success: function(data) {
            console.log(data);
            if (firstTimeRunNewsRoom === false || firstTimeRunNewsRoomChange === false) {
                listCount += 6;
            }
            if (firstTimeRunNewsRoom === true) {
                firstTimeRunNewsRoom = false;
            }
            if (firstTimeRunNewsRoomChange === true) {
                firstTimeRunNewsRoomChange = false;
            }

            var results = parseNewsRoomResultsLocally(data, selectedMonth, newsTopicPicked);

            newsRoomResults = results.news;
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
            if(listYearChange) {
                newsRoomYearChange();
                listYearChange = false;
            }
            if(listTopicChange) {
                newsRoomTopicsChange();
                listTopicChange = false;
            }
            if (listCount >= newsRoomResults.length) {
                $(".divider--load-more__link").hide();
            } else {
                $(".divider--load-more__link").show();
            }
        },
        error: function (e) {
            $('.list__item--no-results').removeClass("hidden");
            console.log('error ', e);
        },
        timeout: 30000
    });
    /************LOCAL News Room SERVICE***************/
}

/************Live News Room Url Constructor***************/
//function newsRoomServiceConstruction() {
//    var url = $(".lists").attr("data-news-url");
//    var query = $(".lists").attr("data-news-query-parameter");
//    newsMonth = $("#list_month").val();
//    console.log(newsMonth);
//    newsYear = $("#list_year").val();
//    newsTopic = $('#list_topics').val();
//    newsConcatenator = $(".lists").attr("data-news-concatenator");
//    //prod implementation of url
//    url += "year=" + newsYear + "&" + "month=" + newsMonth + "&" + "topic=" + newsTopic;
//    newsRoomServiceCall(url, newsMonth, newsTopic);
//}
/************Live News Room Url Constructor***************/

/************LOCAL News Room Url Constructor***************/
function newsRoomServiceConstruction() {
    var url = $(".lists").attr("data-news-url");
    var query = $(".lists").attr("data-news-query-parameter");
    newsMonth = $("#list_month").val();
    console.log(newsMonth);
    newsYear = $("#list_year").val();
    newsTopic = $('#list_topics').val();
    newsConcatenator = $(".lists").attr("data-news-concatenator");
    //prod implementation of url
    //url += newsYear + newsConcatenator + newsMonth + newsConcatenator + newsTopic + query;
    //local implementation of url
    console.log(newsTopic);
    if(newsYear === "All" && newsMonth === "All") {
        console.log(newsTopic);
        url += newsTopic + query;
        console.log(url);
    } else if (newsYear === "All") {
        url += newsTopic + query;
        console.log(url);
    } else if (newsYear !== "All") {
        url += newsYear + query;
    }
    console.log(url);
    newsRoomServiceCall(url, newsMonth, newsTopic);
}
/************LOCAL News Room Url Constructor***************/

//Only needed for local testing
function parseNewsRoomResultsLocally(results, monthSelected, newsTopicSelected) {
    var numResults = results.news.length;
    console.log(results);
    console.log(monthSelected);
    console.log(newsTopicSelected);
    var intRepresentationOfMonthToFilterOn = 0;
    for(var month in monthToIntegerMapping) {
        if(month === monthSelected) {
            console.log(parseInt(monthToIntegerMapping[month]));
            intRepresentationOfMonthToFilterOn = parseInt(monthToIntegerMapping[month]);
        }
    }
    var filteredResults = {};
    //If All months is selected, we don't begin filtering yet
    if(monthSelected === integerToMonthMapping["0"]) {
        console.log("Month is All");
        filteredResults = results;
    } else {
        console.log(numResults);
        filteredResults["news"] = [];
        filteredResults["results"] = 0;
        for(var i = 0; i < numResults; i++) {
            //filter result for the given months
            if(results.news[i].month === intRepresentationOfMonthToFilterOn) {
                console.log(results.news[i].month);
                console.log(monthSelected);
                filteredResults.news.push(results.news[i]);
            }
        }
        filteredResults["results"] = filteredResults["news"].length;
    }
    console.log(filteredResults);
    //Next filter for the topic selected, if "All" topics is selected sort by year first, then month
    if(newsTopicSelected === "master-json-object") {
        filteredResults.news.sort(function(a, b) { return (parseInt(b.year) - parseInt(a.year)) || (a.month - b.month);});
    } else {
        //else filter the topics and then sort by year then month.
        filteredResults = searchForTopic(newsTopicSelected, filteredResults);
        filteredResults.news.sort(function(a, b) { return (parseInt(b.year) - parseInt(a.year)) || (a.month - b.month);});
    }
    return filteredResults;
}

//Only needed for local testing
function searchForTopic(nameKey, results) {
    var arrWithFilteredTopics = [];
    var count = 0;
    for (var i = 0; i < results.news.length; i++) {
        if(results.news[i].topics === nameKey) {
            arrWithFilteredTopics[count] = results.news[i];
            count++;
        }
    }
    //Create new object that mimics the json object we get back
    var filteredObj = {};
    filteredObj["news"] = arrWithFilteredTopics;
    filteredObj["results"] = arrWithFilteredTopics.length;
    return filteredObj;
}

//document.ready for mapping the months that are contained within the dropdown months
$(function() {
    integerToMonthMapping = mapIntegerToMonth();
    monthToIntegerMapping = mapMonthToInteger(integerToMonthMapping);
});

function mapIntegerToMonth() {
    //Array that will map the months to integers (including the "All" option)
    var monthToIntMapping = {};
    var monthsInDropDown = $("#list_month").children();
    $.each(monthsInDropDown, function(index, value) {
        var int = "" + index;
        monthToIntMapping[int] = $(value).val();
    });
    return monthToIntMapping;
}

function mapMonthToInteger(integerToMonth) {
    var reverseMap = {};
    for (var key in integerToMonth) {
        reverseMap[integerToMonth[key]] = key;
    }
    return reverseMap;
}
