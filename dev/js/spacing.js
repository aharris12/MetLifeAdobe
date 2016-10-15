var SpacingModule = (function () {
    var spacing = {
        "product-module-large": {
            "first": "30 30 30",
            "last": "20 20 20",
            "product-module-medium": ["30 30 30", ""],
            "product-module-small": ["30 30 30", ""],
            "office-search": ["30 30 30", ""],
            "promo-card": ["30 30 30", ""],
            "disclaimer": ["30 30 30", ""]
        },
        //"product-module-medium": "test",
        //"product-module-small": "test",
        //"office-search": "test",
        //"promo-card": "test",
        "disclaimer": {
            "last": "50 50 50"
        }
    };


    // Initializes Spacing
    function init() {

    }

    function applySpacing() {
        var components = $(".component[data-component]");
        var length = components.length;

        for (var index = 0; index < length - 1; index++) {
            var comp1, comp2, prop1, prop2;
            comp1 = components.eq(index);
            prop1 = comp1.attr("data-component");
            comp2 = components.eq(index + 1);
            prop2 = comp2.attr("data-component");

            // Apply TOP styling to first component
            if ((index == 0) && spacing.hasOwnProperty(prop1) && spacing[prop1].hasOwnProperty("first")) {
                comp1.addClass(classFormat(spacing[prop1]["first"], "top"));
            }

            // Apply styling between components (BOTTOM/TOP)
            if (spacing.hasOwnProperty(prop1) && spacing[prop1].hasOwnProperty(prop2)) {
                comp1.addClass(classFormat(spacing[prop1][prop2][0], "bottom"));
                comp2.addClass(classFormat(spacing[prop1][prop2][1], "top"));
            }

            // Apply BOTTOM styling to last component
            if ((index == length - 2) && spacing.hasOwnProperty(prop2) && spacing[prop2].hasOwnProperty("last")) {
                comp2.addClass(classFormat(spacing[prop2]["last"], "bottom"));
            }
        }
    }

    // Formats the CSS class names
    function classFormat(val, pos) {
        var string = "";
        if (val != "") {
            var pad = val.split(" ");
            if (pos == "top") {
                string += "pad-t-sm-" + pad[0] + " pad-t-md-" + pad[1] + " pad-t-lg-" + pad[2];
            } else if (pos == "bottom") {
                string += "pad-b-sm-" + pad[0] + " pad-b-md-" + pad[1] + " pad-b-lg-" + pad[2];
            }
        }

        return string;
    }


    return {
        init: init,
        applySpacing: applySpacing
    };
})();
SpacingModule.init();
SpacingModule.applySpacing();