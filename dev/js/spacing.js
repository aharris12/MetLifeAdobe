var SpacingModule = (function () {
    var spacing = {
        "product-module-large": {
            "first": "pml-above",
            "product-module-medium": ["0 0 0", "1 1 1"],
            "product-module-small": ["2 2 2", "3 3 3"],
            "office-search": ["444", "555"],
            "promo-card": ["666", "777"],
            "disclaimer": ["888", "999"],
            "last": "below"
        },
        //"product-module-medium": "test",
        //"product-module-small": "test",
        //"office-search": "test",
        //"promo-card": "test",
        "disclaimer": {
            "last": "disc-below"
        }
    };


    // Initializes Spacing
    function init() {

    }

    function applySpacing() {
        var first, second, last, component;
        var components = $(".component[data-component]");

        //first
        first = components.first();
        component = first.attr("data-component");
        if (spacing.hasOwnProperty(component) && spacing[component].hasOwnProperty("first")) {
            first.addClass(spacing[component].first);
        }

        //middle
        var length = components.length;
        components.each(function(index) {
            var comp1, comp2, prop1, prop2;
            comp1 = $(this);
            prop1 = comp1.attr("data-component");
            comp2 = components.eq(index + 1);
            prop2 = comp2.attr("data-component");

            if (spacing.hasOwnProperty(prop1) && spacing[prop1].hasOwnProperty(prop2)) {
                comp1.addClass(spacing[prop1][prop2][0]);
                comp2.addClass(spacing[prop1][prop2][1]);
            }
        });


        //for (var i = 1; i < components.length - 1; i++) {
        //    console.log(components.eq(i).data("component"));
        //}

        //last
        last = components.last();
        component = last.data("component");
        if (spacing.hasOwnProperty(component) && spacing[component].hasOwnProperty("last")) {
            last.addClass(spacing[component].last);
        }
    }


    return {
        init: init,
        applySpacing: applySpacing
    };
})();
SpacingModule.init();
SpacingModule.applySpacing();