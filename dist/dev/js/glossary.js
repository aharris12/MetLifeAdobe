/**
 * Created by icunningham on 2/12/2016.
 */

// Case Insensitive ":contains"
$.expr[":"].contains = $.expr.createPseudo(function (arg) {
    return function (elem) {
        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
});


if ($(".glossary").length > 0) {
    // Initialize the Glossary Selector
    glossarySelectorInitialize();

    // Swipe for Glossary Letter Selector
    $(".glossary-selector").swipe({
        swipeLeft: function() {
            var glossary = $(".selector-container");
            var width = parseFloat(glossary[0].style.width);
            var position = width - (100 + parseFloat(glossary[0].style.right));

            if (position > 100) {
                glossary.animate({right: '+=100%'}, "slow");
            } else {
                glossary.animate({right: '+=' + position + '%'}, "slow");
            }
        },
        swipeRight: function() {
            var glossary = $(".selector-container");
            var position = parseFloat(glossary[0].style.right);

            if (position > 100) {
                glossary.animate({right: '-=100%'}, "slow");
            } else {
                glossary.animate({right: '-=' + position + '%'}, "slow");
            }
        }
    });

    // Navigate to Selected Letter
    $(".glossary-selector a").on("click", function (evt) {
        evt.preventDefault();
        if ($(this).hasClass("active")) {
            var height = $(".global-header").height() + $(".glossary-selector .selector").height();
            var location = $(".glossary-group span:contains(" + $(this).attr("data-link") + ")");
            console.log(location.offset());
            $('html,body').animate({scrollTop: location.offset().top - height}, 'slow');
        }
    });

    // Scroll and Resize for Glossary Selector
    $(window).on({
        scroll: function () {
            glossarySelectorPosition();
        },
        resize: function () {
            glossarySelectorSize()
        }
    });
}

// Initializes the Glossary Selector
function glossarySelectorInitialize() {
    var glossary_letters = $(".glossary-group").find("span").text();
    var selector = $(".glossary-selector");
    var selectorContainer = $(".glossary-selector .selector-container");

    glossary_letters = glossary_letters.toLowerCase().split("").sort();
    selectorContainer.find("a").each(function () {
        var link = $(this);
        var link_letters = link.attr("data-letters").toLowerCase().split("").sort();
        link_letters.forEach(function (val) {
            if (glossary_letters.indexOf(val) > -1) {
                link.addClass("active");
                if (link.attr("data-link") == undefined) {
                    link.attr("data-link", val);
                }
            }
        });
    });
    glossarySelectorSize();

    selectorContainer.css("right", "0%");
    $(".page_title").addClass("glossary-top");

    selector.show();
    selector.addClass("glossary-height");
}

// Resizes the Glossary Selector on
function glossarySelectorSize() {
    var parent = $(".glossary-selector");
    var container, link, length;

    // Set widths for mobile
    if (!$(".hidden-xs").is(":visible") && !parent.hasClass("glossary-mobile")) {
        container = parent.find(".selector-container");
        link = parent.find("a");
        length = link.length;

        // set container width
        if (length <= 3) {
            container.css("width", "100%");
        } else {
            if (link.parent().hasClass("letter-group")) {
                container.css("width", length * 30 + "%");
            } else {
                container.css("width", length * 15 + "%");
            }
        }

        // set letter width
        link.each(function () {
            $(this).css("width", 100 / length + "%");
        });

        parent.removeClass("glossary-nonmobile");
        parent.addClass("glossary-mobile");
    }

    // Set widths for tablet/ desktop
    if ($(".hidden-xs").is(":visible") && !parent.hasClass("glossary-nonmobile")) {
        link = parent.find("a");
        length = link.length;

        // set container width
        parent.find(".selector-container").css("width", "");

        // set letter width
        if (length <= 5) {
            link.each(function () {
                $(this).css("width", "20%");
            });
        } else {
            link.each(function () {
                $(this).css("width", 100 / length + "%");
            });
        }

        parent.removeClass("glossary-mobile");
        parent.addClass("glossary-nonmobile");
    }
}

// Sets the Glossary Selector Position
function glossarySelectorPosition() {
    if ($(window).scrollTop() > $(".glossary-selector").offset().top - $(".global-header").height()) {
        $('.glossary-selector .selector').addClass("fixed");
    } else {
        $('.glossary-selector .selector').removeClass("fixed");
    }
}