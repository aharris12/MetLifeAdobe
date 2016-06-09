
$(window).load(function () {
    formatCTABoxes();
});

$(window).resize(function (e) {
    formatCTABoxes();
});



function formatCTABoxes() {

    if($(".cta-box-module").length!=0){
        $(".cta-box-module").each(function () {
            var layout = $(this);
            var number = layout.children().length;
            if (number <= 4) {
                layout.addClass("large");
            } else {
                layout.addClass("small");
            }
            layout.show();
        });
    }

}