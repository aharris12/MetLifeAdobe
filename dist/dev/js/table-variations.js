/**
 * Created by jfeng2 on 12/22/2015.
 */



/***** Rate Tables Begin ****************************************************************/
if ($(".rate_table").length > 0) {
    var tableColumns = 3;

    // Format Rate Tables
    setHealthGuidelinesTableHeader();
    formatRateTable();

    // Set Rate Table Sizes
    resizeRateTable();


    // Swipe to Next/Previous Set of Columns
    $('.rate_table .content_body').swipe({
        swipeLeft: function () {
            var parent = $(this).closest(".rate_table");
            if (!parent.find(".controls ol li").last().hasClass("active") && $('.controls').is(':visible')) {
                var number = parent.find("td.last").nextAll().length;
                if (number >= tableColumns) {
                    parent.find('.window').animate({right: '+=100%'}, "slow");
                    number = tableColumns;
                }
                else {
                    parent.find('.window').animate({right: '+=' + 100 / tableColumns * number + '%'}, "slow");
                }

                var indicator = parent.find("ol li.active");
                indicator.removeClass("active");
                indicator.next().addClass("active");

                var first = parent.find("td.first");
                var last = parent.find("td.last");
                first.removeClass("first");
                first.nextAll().eq(number - 1).addClass("first");
                last.removeClass("last");
                last.nextAll().eq(number - 1).addClass("last");
            }
        },
        swipeRight: function () {
            var parent = $(this).closest(".rate_table");
            if (!parent.find(".controls ol li").first().hasClass("active") && $('.controls').is(':visible')) {
                var number = parent.find("td.first").prevAll().length;
                if (number >= tableColumns) {
                    parent.find('.window').animate({right: '-=100%'}, "slow");
                    number = tableColumns;
                }
                else {
                    parent.find('.window').animate({right: '-=' + 100 / tableColumns * number + '%'}, "slow");
                }

                var indicator = parent.find("ol li.active");
                indicator.removeClass("active");
                indicator.prev().addClass("active");

                var first = parent.find("td.first");
                var last = parent.find("td.last");
                first.removeClass("first");
                first.prevAll().eq(number - 1).addClass("first");
                last.removeClass("last");
                last.prevAll().eq(number - 1).addClass("last");
            }
        }
    });
    
    
    //Swipe when user click on indicators below the table in Mobile view
    $('.rate_table .carousel-indicators > li').click(function() {
        
        //Determine active and clicked indicators
        var activeIndicator = $(this).parent().find("li.active").index() + 1;
        var clickedIndicator = $(this).index() + 1;
        
        //Determine if we need to swipe RIGHT or LEFT
        if (clickedIndicator > activeIndicator) {
            //Swipe Left
            var numOfColumnsToSwipe = '+=' + 100 * (clickedIndicator - activeIndicator) + '%' ;
            var parent = $(this).closest(".rate_table");
            if (!parent.find(".controls ol li").last().hasClass("active") && $('.controls').is(':visible')) {
                var number = parent.find("td.last").nextAll().length;
                if (number >= tableColumns) {
                    parent.find('.window').animate({right: numOfColumnsToSwipe}, "slow");
                    number = tableColumns;
                }
                else {
                    parent.find('.window').animate({right: '+=' + 100 / tableColumns * number + '%'}, "slow");
                }

                //Set clicked indicator to ACTIVE
                var indicator = parent.find("ol li.active");
                indicator.removeClass("active");
                $('.rate_table .carousel-indicators > li:eq(' + $(this).index() + ')').addClass("active");

                var first = parent.find("td.first");
                var last = parent.find("td.last");
                first.removeClass("first");
                first.nextAll().eq(number - 1).addClass("first");
                last.removeClass("last");
                last.nextAll().eq(number - 1).addClass("last");
            }
        } else if (clickedIndicator < activeIndicator) {
            //Swipe Right
            var numOfColumnsToSwipe = '-=' + 100 * (activeIndicator - clickedIndicator) + '%' ;
            var parent = $(this).closest(".rate_table");
            if (!parent.find(".controls ol li").first().hasClass("active") && $('.controls').is(':visible')) {
                var number = parent.find("td.first").prevAll().length;
                if (number >= tableColumns) {
                    parent.find('.window').animate({right: numOfColumnsToSwipe}, "slow");
                    number = tableColumns;
                }
                else {
                    parent.find('.window').animate({right: '-=' + 100 / tableColumns * number + '%'}, "slow");
                }

                //Set clicked indicator to ACTIVE
                var indicator = parent.find("ol li.active");
                indicator.removeClass("active");
                $('.rate_table .carousel-indicators > li:eq(' + $(this).index() + ')').addClass("active");

                var first = parent.find("td.first");
                var last = parent.find("td.last");
                first.removeClass("first");
                first.prevAll().eq(number - 1).addClass("first");
                last.removeClass("last");
                last.prevAll().eq(number - 1).addClass("last");
            }
        }
    });

    // Scrolling for Rate Table
    $('.rate_table .content_body').on("scroll", function () {
        var parent = $(this).closest(".rate_table");
        parent.find(".content_top").scrollLeft($(this).scrollLeft());
        parent.find(".content_left").scrollTop($(this).scrollTop());
    });

    // Open & Close Monthly Rates Dropdown
    $(".monthly_rates .expand_button").click(function () {
        $(this).siblings(".unexpanded").slideToggle(function () {
            resizeRateTable();
        });
        resizeRateTable();
        $(this).find(".expand_button_open").toggleClass("hidden");
        $(this).find(".expand_button_close").toggleClass("hidden");
    });

    // Resize Rate table
    $(window).on("resize", function () {
        resizeRateTable();
    });
}

// Initial Formatting of Rate Table
function formatRateTable() {
    $(".rate_table").each(function () {
        var parent = $(this);
        if ($(this).hasClass("rate_table--variation-1")) {

            // appends the body content and data-target class
            var bodyContent;
            var bodyLocation = parent.find(".content_body--variation .content_table");
            for (var i = 0; i < parent.find(".content_temp tbody tr").length; i++) {
                bodyLocation.append("<tr></tr>");
                for (var j = 0; j < parent.find(".content_temp tr:first-child td").length; j++) {
                    bodyContent = parent.find(".content_temp tr").eq(i).children("td").eq(j).text();
                    switch (j) {
                        case 0:
                            bodyLocation.find("tr").eq(i + 1).append("<td class='sticky-left-column health-class-" + j + "'>" + bodyContent + "</td>");
                            break;
                        case 1:
                            bodyLocation.find("tr").eq(i + 1).append("<td class='active health-class-" + j + "'>" + bodyContent + "</td>");
                            break;
                        default:
                            bodyLocation.find("tr").eq(i + 1).append("<td class=' health-class-" + j + "'>" + bodyContent + "</td>");
                    }
                }
            }

            //removes temporary content
            parent.find(".content_temp").remove();

        } else if ($(this).hasClass("rate_table--variation-2")) {

            // appends the body content and data-target class
            var bodyContent;
            var bodyLocation = parent.find(".content_body--variation .content_table");




            for (var i = 0; i < parent.find(".content_temp tbody tr").length; i++) {
                bodyLocation.append("<tr></tr>");
                for (var j = 0; j < parent.find(".content_temp tr:first-child td").length; j++) {

                    bodyContent = parent.find(".content_temp tr").eq(i).children("td").eq(j).text();
                    switch (j) {
                        case 0:
                            bodyLocation.find("tr").eq(i + 1).append("<td class='sticky-left-column health-class-" + j + "'>" + bodyContent + "</td>");
                            break;
                        case 1:
                            bodyLocation.find("tr").eq(i + 1).append("<td class='active health-class-" + j + "'>" + bodyContent + "</td>");
                            j++;
                            bodyContent = parent.find(".content_temp tr").eq(i).children("td").eq(j).text();
                            bodyLocation.find("tr").eq(i + 1).append("<td class='active health-class-" + (j-1) + "'>" + bodyContent + "</td>");
                            break;
                        default:
                            bodyLocation.find("tr").eq(i + 1).append("<td class='health-class-" + ((j+1)/2) + "'>" + bodyContent + "</td>");
                            j++;
                            bodyContent = parent.find(".content_temp tr").eq(i).children("td").eq(j).text();
                            bodyLocation.find("tr").eq(i + 1).append("<td class='health-class-" + (j/2) + "'>" + bodyContent + "</td>");
                    }
                }
            }

            //removes temporary content
            parent.find(".content_temp").remove();

        }


        else {
            if (parent.parent().hasClass("two-column-table")) {
                // removes optional components
                parent.find(".content_corner, .content_top, .content_left").remove();
                parent.find(".controls").remove();

                // appends the body content
                parent.find(".content_body table").append(parent.find(".content_temp table"));
            } else {
                // appends corner content
                var cornerContent = parent.find(".content_temp tr:first-child td").eq(0).text();
                parent.find(".content_corner table").append("<tr><td>" + cornerContent + "</td></tr>");

                // appends top content
                var topContent;
                var topLocation = parent.find(".content_top table");
                topLocation.append("<tr></tr>");
                for (var i = 1; i < parent.find(".content_temp tr:first-child td").length; i++) {
                    topContent = parent.find(".content_temp tr:first-child td").eq(i).text();
                    topLocation.find("tr").append("<td>" + topContent + "</td>");
                }
                var columns = parent.find(".content_top table td").length;
                if (columns == 1) {
                    parent.find(".content_top table td").eq(0).addClass("first last");
                } else if (columns <= tableColumns) {
                    parent.find(".content_top table td").eq(0).addClass("first");
                    parent.find(".content_top table td").eq(columns - 1).addClass("last");
                } else {
                    parent.find(".content_top table td").eq(0).addClass("first");
                    parent.find(".content_top table td").eq(tableColumns - 1).addClass("last");
                }

                // appends left content
                var leftContent;
                var leftLocation = parent.find(".content_left table");
                for (var i = 1; i < parent.find(".content_temp tr").length; i++) {
                    leftContent = parent.find(".content_temp tr").eq(i).children("td").eq(0).text();
                    leftLocation.append("<tr><td>" + leftContent + "</td></tr>");
                }

                // appends the body content
                var bodyContent;
                var bodyLocation = parent.find(".content_body table");
                for (var i = 1; i < parent.find(".content_temp tr").length; i++) {
                    bodyLocation.append("<tr></tr>");
                    for (var j = 1; j < parent.find(".content_temp tr:first-child td").length; j++) {
                        bodyContent = parent.find(".content_temp tr").eq(i).children("td").eq(j).text();
                        bodyLocation.find("tr").eq(i - 1).append("<td>" + bodyContent + "</td>");
                    }
                }

                // sets buttons (for mobile)
                var buttons = Math.ceil(columns / tableColumns);
                if (buttons <= 1) {
                    parent.find(".controls").hide();
                } else {
                    var carousel = parent.find(".carousel-indicators");
                    carousel.append("<li class='active'></li>");
                    for (i = 0; i < buttons - 1; i++) {
                        carousel.append("<li></li>");
                    }
                }
            }

            // removes temporary content
            parent.find(".content_temp").remove();

        }
    });


}


// Resize Rate Table
function resizeRateTable() {
    $(".rate_table").each(function () {
        var parent = $(this);
        if (!parent.parent().hasClass("two-column-table")) {
            var columns = parent.find(".content_top tr td").length;
            var rows = parent.find(".content_left tr").length;
            var height = parseInt(parent.find(".content_left").css("max-height"));

            // Set widths for all elements
            if (!$(".hidden-xs").is(":visible") && !parent.hasClass("table-mobile")) {
                var visible;
                if (columns >= tableColumns) {
                    visible = tableColumns;
                } else {
                    visible = columns;
                }
                parent.find(".content_left, .content_body").removeAttr("style");
                parent.find(".content_corner, .content_left").css("width", 1 / (visible + 1) * 100 + "%");
                parent.find(".content_top, .content_body").css("width", visible / (visible + 1) * 100 + "%");
                parent.find(".window").css("width", columns / visible * 100 + "%");
                parent.find("td").css("width", 1 / columns * 100 + "%");

                parent.removeClass("table-nonmobile");
                parent.addClass("table-mobile");
            }

            // Set column width for tablet/ desktop
            if ((getViewport() == "tablet" || getViewport() == "desktop") && !parent.hasClass("table-nonmobile")) {
                var width;
                var max_columns;
                if (parent.parent().hasClass("comparison-table")) {
                    max_columns = 4;
                } else {
                    max_columns = 10;
                }

                if ((columns + 1) > max_columns) {
                    width = 100 / max_columns;

                    parent.find(".content_left, .content_body").removeAttr("style");
                    parent.find(".content_corner, .content_left").css("width", width + "%");
                    parent.find(".content_top, .content_body").css("width", width * (max_columns - 1) + "%");
                    parent.find(".window").css("width", columns / (max_columns - 1) * 100 + "%");
                    parent.find("td").css("width", 1 / columns * 100 + "%");
                    parent.find(".content_left").css("max-height", height + "px");
                    parent.find(".content_body").css("max-height", height + 17 + "px");
                } else {
                    width = 100 / (columns + 1);

                    parent.find(".content_left, .content_body").removeAttr("style");
                    parent.find(".content_corner, .content_left").css("width", width + "%");
                    parent.find(".content_top, .content_body").css("width", width * (columns) + "%");
                    parent.find(".window").css("width", 100 + "%");
                    parent.find("td").css("width", 1 / columns * 100 + "%");
                }

                parent.removeClass("table-mobile");
                parent.addClass("table-nonmobile");
            }

            // Vertical height
            var content_left = parent.find(".content_left");
            if (content_left.height() >= content_left.find(".content_container").height()) {
                content_left.css("padding-bottom", "0px")
            }

            // Fix widths for scrollbar
            parent.find(".content_top").width(parent.find(".content_body .content_container").width() - 1);
        }
    });
}

/***** Rates Tables End ****************************************************************/


//Set text of table header to text in table tabs
function setHealthGuidelinesTableHeader() {
    if ($(".overlay-table-section").length > 0) {
        $(".overlay-table-section").each(function (indexParent) {
            $(this).find(".rate_table--variation .content_table").append("<thead class='hidden-xs'><tr></tr></thead>");
            $(this).find('.view-nav ul li').each(function (index) {
                var tabText = $(this).text();
                if (index == 0) {
                    $(".overlay-table-section .rate_table--variation .content_table thead tr").eq(indexParent).append("<th></th><th>" + tabText + "</th>");

                } else {
                    $(".overlay-table-section .rate_table--variation .content_table thead tr").eq(indexParent).append("<th>" + tabText + "</th>");
                }
            })
        });
    }
    if ($(".rate_table--variation-2").length>0){
        $(".overlay-table-section .rate_table--variation-2").find(".content_table th:not(':first-child')").attr("colspan",'2');
    }
}


$(".view-nav li").click(function () {
    var clickedHealthClass = $('.' + $(this).attr('data-target'));
    $(this).closest('ul').find('li').removeClass('active');
    $(this).addClass('active');
    $(this).closest(".overlay-table-section").find(".content_body--variation").find("td").not(".sticky-left-column").removeClass("active");
    $(this).closest(".overlay-table-section").find(".content_body--variation").find(clickedHealthClass).addClass("active");
});




