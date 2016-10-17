var SpacingModule = (function () {
    var spacing = {
        "product-module-large": {
            "office-search": ["0 0 0", ""],
            "contextual-links": ["0 0 0", ""]
        },
        "product-module-medium": {
            "office-search": ["0 0 0", ""],
            "contextual-links": ["0 0 0", ""]
        },
        "product-module-small": {
            "office-search": ["0 0 0", ""],
            "contextual-links": ["0 0 0", ""]
        },
        "promo-card": {
            "disclaimer": ["10 40 50", ""]
        },
        "product-comparison-chart": {
            "first": "20 30 40"
        },
        "contextual-links": {
            "faq-and-video": ["", "20 40 50"],
            "skinny-product-tile": ["", "20 0 0"]
        },
        "skinny-product-tile": {
            "office-search": ["0 0 0", ""]
        },
        "faq-and-video": {
            "office-search": ["0 40 50", ""]
        },
        "product-tiles": {
            "product-module-small": ["10 30 40", ""]
        },
        "disclaimer": {}
    };

    // Initializes Spacing
    function init() {
        var components = $("[data-spacing]");
        var length = components.length;

        for (var index = 0; index < length; index++) {
            var comp1, comp2, prop1, prop2;
            comp1 = components.eq(index);
            prop1 = comp1.attr("data-spacing");


            // Apply TOP styling to first component
            if ((index == 0) && spacing.hasOwnProperty(prop1) && spacing[prop1].hasOwnProperty("first")) {
                comp1.addClass(classFormat(spacing[prop1]["first"], "top"));
            }

            // Apply BOTTOM styling to last component
            if ((index == length - 1) && spacing.hasOwnProperty(prop1) && spacing[prop1].hasOwnProperty("last")) {
                comp1.addClass(classFormat(spacing[prop1]["last"], "bottom"));
            }

            // Apply styling between components (BOTTOM/TOP)
            if (index < length - 1) {
                comp2 = components.eq(index + 1);
                prop2 = comp2.attr("data-spacing");

                if (spacing.hasOwnProperty(prop1) && spacing[prop1].hasOwnProperty(prop2)) {
                    comp1.addClass(classFormat(spacing[prop1][prop2][0], "bottom"));
                    comp2.addClass(classFormat(spacing[prop1][prop2][1], "top"));
                }
            }
        }
    }

    // Formats the CSS class names
    function classFormat(val, pos) {
        var string = "";
        if (val != "") {
            var pad = val.split(" ");
            if (pad.length == 3) {
                if (pos == "top") {
                    string += "pad-t-sm-" + pad[0] + " pad-t-md-" + pad[1] + " pad-t-lg-" + pad[2];
                } else if (pos == "bottom") {
                    string += "pad-b-sm-" + pad[0] + " pad-b-md-" + pad[1] + " pad-b-lg-" + pad[2];
                }
            }
        }

        return string;
    }

    return {
        init: init
    };
})();
SpacingModule.init();