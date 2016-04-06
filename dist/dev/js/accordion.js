// Expand All Accordions
//Test comment
$(".accordion .expandAll").click(function () {
    var parent = $(this).closest(".accordion");
    parent.find(".collapseAll").show();
    parent.find(".expandAll").hide();
    parent.find(".accordion__content").each(function () {
        if (!$(this).is(':visible')) {
            $(this).slideToggle('slow').scrollTop(0);
            $(this).siblings(".accordion__title").find('.icon-minus').show();
            $(this).siblings(".accordion__title").find('.icon-plus').hide();

        }
    });
});

// Collapse All Accordions
$(".accordion .collapseAll").click(function () {
    var parent = $(this).closest(".accordion");
    parent.find(".collapseAll").hide();
    parent.find(".expandAll").show();
    parent.find(".accordion__content").each(function () {
        if ($(this).is(':visible')) {
            $(this).slideToggle('slow').scrollTop(0);
            $(this).siblings(".accordion__title").find('.icon-minus').hide();
            $(this).siblings(".accordion__title").find('.icon-plus').show();
        }
    });
});

// Expand/Collapse Each Accordion
$(".accordion .accordion__title").click(function () {
    var parent = $(this).closest(".accordion");

    //Close others upon new open
    if (!$(this).siblings('.accordion__content').is(':visible')) {
        closeAll(parent);
    }

    $(this).siblings().slideToggle();

    $(this).find(".accordion__title__icon").each(function() {
        $(this).toggle();
    });

    if ($(".collapse").length === 0) {
        parent.find(".collapseAll").hide();
        parent.find(".expandAll").show();
    }
});

function closeAll(parent) {
    $(parent).children('div').children('.accordion__content').each(function () {
        if ($(this).is(':visible')) {
            $(this).slideToggle();
            $(this).parent().find(".accordion__title__icon").each(function() {
                $(this).toggle();
            });
        }
    });
}

$('.accordion-selector').change(function(){
    closeAll($(".accordion"));
    $(".accordion").find(".collapseAll").hide();
    $(".accordion").find(".expandAll").show();
})
