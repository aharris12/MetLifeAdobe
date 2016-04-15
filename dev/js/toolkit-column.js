if ($(".expand-action").length > 0) {
    $(".expand-action").click(function(evt){
        if (getViewport() == "mobile"){
            $(this).siblings(".expandable").slideToggle('slow');
            $(this).children("img").toggleClass('hidden-xs');
        }
    });
}

