/**
 * Created by jfeng2 on 12/17/2015.
 */
$(window).load(function () {
    matchSubnavHeight();
});

$(window).resize(function (e) {
    matchSubnavHeight();
});

//matches the heights of the subnav items when text is longer in one than the others.


function matchSubnavHeight() {
    if ($(".subnav").length != 0) {
        $(".subnav").each(function (index) {
            var subnavItems = $(this).find("li a");
            var subnavItemHeight = 0;

            subnavItems.css('min-height', '0px');
            subnavItems.each(function () {

                subnavItemHeight = $(this).height() > subnavItemHeight ? $(this).height() : subnavItemHeight;

            });

            if (subnavItemHeight > 60) {
                subnavItems.css('min-height', subnavItemHeight + 'px');
            }else{
                subnavItems.css('min-height', 60 + 'px');
            }

        });
    }
};