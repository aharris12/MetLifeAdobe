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
removeProtoObject = false;


$(".divider--load-more__link").click(function (e) {
    e.preventDefault();
    totalYears = [];
    totalMonths = [];
    newsRoomServiceConstruction();
});

$("#list_month, #list_year").change(function () {
    firstTimeRunNewsRoomChange = true;
    totalYears = [];
    totalMonths = [];
    listCount = 0;
    newsRoomServiceConstruction();
});

$("#list_topics").change(function () {
    firstTimeRunNewsRoomChange = true;
    totalYears = [];
    totalMonths = [];
    listCount = 0;
    newsRoomServiceConstruction();
    setTimeout(function () {
        newsRoomTopicsChange();
    }, 500);
});

//$('#list_year').change(function() {
//    newsRoomServiceConstruction();
//    newsRoomYearChange();
//});

function newsRoomYearChange() {
    var firstTime = false;
    totalMonths.sort(function(a, b){return a - b});
    totalMonths = unique(totalMonths);
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

function newsRoomServiceCall(input, selectedMonth, newsTopicPicked) {
    resultsListHTML = "";
    var url = input;
    count = 0;
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
    //					resultsListHTML += "<a class=\"list__item__title\" href=\"" + newsRoomResults[i].link + "\">" + newsRoomResults[i].title + "</a>";
    //					resultsListHTML += "</div>";
    //				}
    //			}
    //			resultsListHTML += "</div>";
    //			ServicesAPI.createPagination(count);
    //			$(resultsListHTML).insertAfter($(".lists"));
    //		} else {
    //			$(".list__item--no-results").removeClass('hidden');
    //		}
    //		if (listCount >= newsRoomResults.length) {
    //			$(".divider--load-more__link").hide();
    //		} else {
    //			$(".divider--load-more__link").show();
    //		}
    //
    //	},
    //	error: function (e) {
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

function newsRoomServiceConstruction() {
    var url = $(".lists").attr("data-news-url");
    var query = $(".lists").attr("data-news-query-parameter");
    newsMonth = $("#list_month").val();
    newsYear = $("#list_year").val();
    newsTopic = $('#list_topics').val();
    newsConcatenator = $(".lists").attr("data-news-concatenator");
    //prod implementation of url
    //url += newsYear + newsConcatenator + newsMonth + newsConcatenator + newsTopic + query;
    //local implementation of url
    if(newsYear === "All" && newsMonth === "All") {
        url += newsTopic + query;
    } else if (newsYear === "All") {
        url += newsTopic + query;
        console.log(url);
    } else if (newsYear !== "All") {
        url += newsYear + query;
    }
    newsRoomServiceCall(url, newsMonth, newsTopic);
};

function parseNewsRoomResultsLocally(results, monthSelected, newsTopicSelected) {
    var numResults = results.length;
    var filteredResults = [];
    //If All months is selected, we don't begin filtering yet
    if(monthSelected === integerToMonthMapping[0]) {
        filteredResults = results;
    } else {
        for(var i = 0; i < numResults; i++) {
            //filter result for the given months
            if(results[i].month === monthSelected) {
                filteredResults.push(results[i]);
            }
        }
    }
    //Next filter for the topic selected
    console.log(newsTopicSelected);
    if(newsTopicSelected === "master-json-object") {
        filteredResults.news.sort(function(a, b) { return (parseInt(b.year) - parseInt(a.year)) || (a.month - b.month);});
    } else {
        filteredResults = searchForTopic(newsTopicSelected, filteredResults);
        filteredResults.news.sort(function(a, b) { return (parseInt(b.year) - parseInt(a.year)) || (a.month - b.month);});
    }

    return filteredResults;
}

function searchForTopic(nameKey, obj) {
    var arrWithFilteredTopics = [];
    var count = 0;
    for (var i = 0; i < obj.news.length; i++) {
        if(obj.news[i].topics === nameKey) {
            arrWithFilteredTopics[count] = obj.news[i];
            count++;
        }
    }
    var filteredObj = {};
    filteredObj["news"] = arrWithFilteredTopics;
    filteredObj["results"] = arrWithFilteredTopics.length;
    return filteredObj;
}

$(function() {
    integerToMonthMapping = mapIntegerToMonth();
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