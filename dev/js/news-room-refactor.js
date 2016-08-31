var NEWSROOMMODULE = (function() {
    //private variables so we don't pollute the namespace

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
//Not sure where this came from
    removeProtoObject = false;
    var listYearChange = false;

    return {
        years: totalYears,
        months: totalMonths,
        listYearChange: listYearChange,

    }

})();

$(".divider--load-more__link").click(function (e, NEWSROOMMODULE) {
    e.preventDefault();
    NEWSROOMMODULE.years = [];
    NEWSROOMMODULE.months = [];
    newsRoomServiceConstruction();
});

$("#list_year").change(function (NEWSROOMMODULE) {
    firstTimeRunNewsRoomChange = true;
    $("#list_month").val(integerToMonthMapping["0"]);
    NEWSROOMMODULE.years = [];
    NEWSROOMMODULE.months = [];
    listCount = 0;
    NEWSROOMMODULE.listYearChange = true;
    newsRoomServiceConstruction();
});

