/**
 * Created by icunningham on 6/30/2016.
 */
$(document).ready(function () {
    if ($('.tooltip').length > 0 || $('.tooltip-pos-left').length > 0) {
        applyTooltips();
    }

    $.each($('.tooltip'), function () {
        if ($(this).prevAll('label').text().length > 0) {
            $(this).css('top', '35px');
        }
    });
});

function applyToolTipster() {
    console.log("tooltips applied");
    if ($(window).width() > 1024) {
        console.log("entered tooltips 1024")
        $('.tooltip').not('.tooltipstered').tooltipster({
            position: 'right',
            trigger: 'hover',
            minWidth: 50,
            maxWidth: 300
        });
        $('.tooltip-pos-left').not('.tooltipstered').tooltipster({
            position: 'right',
            trigger: 'hover',
            minWidth: 50,
            maxWidth: 300
        });
    } else {
        $('.tooltip').not('.tooltipstered').tooltipster({
            position: 'right',
            trigger: 'click',
            minWidth: 50,
            maxWidth: 300
        });
        $('.tooltip-pos-left').not('.tooltipstered').tooltipster({
            position: 'right',
            trigger: 'click',
            minWidth: 50,
            maxWidth: 300
        });
    }
}

$(window).resize(function () {
    if ($('.tooltip').not('.tooltipstered').length > 0 || $('.tooltip-pos-left').not('.tooltipstered').length > 0) {
        applyTooltips();
    }
    $('.tooltip').filter('.tooltipstered').each(function () {
        $(this).tooltipster('hide');
    });
    $('.tooltip-pos-left').filter('.tooltipstered').each(function () {
        $(this).tooltipster('hide');
    })
});

function applyTooltips() {
    applyToolTipster();
    if ($(window).width() < 768) {
        $('.tooltip').filter('.tooltipstered').tooltipster('option', 'position', 'bottom-right');
        $('.tooltip').filter('.tooltipstered').tooltipster('option', 'offsetX', '7');
        $('.tooltip-pos-left').filter('.tooltipstered').tooltipster('option', 'position', 'bottom-left');
        $('.tooltip-pos-left').filter('.tooltipstered').tooltipster('option', 'offsetX', '-7');
    } else {
        $('.tooltip').filter('.tooltipstered').tooltipster('option', 'position', 'right');
        $('.tooltip').filter('.tooltipstered').tooltipster('option', 'offsetX', '0');
        $('.tooltip-pos-left').filter('.tooltipstered').tooltipster('option', 'position', 'left');
        $('.tooltip-pos-left').filter('.tooltipstered').tooltipster('option', 'offsetX', '0');
    }
    $('.tooltip').each(function () {
        var roomForToolTip = (($(window).width()) - $(this).offset().left) > 330;
        if (!roomForToolTip) {
            $(this).filter('.tooltipstered').tooltipster('option', 'position', 'bottom-right');
            $(this).filter('.tooltipstered').tooltipster('option', 'offsetX', '7');
        }
        $(this).closest('.form-user-grp').css({'margin-right': '30px', 'position': 'relative'});
        if (!($(this).closest('.form-user-grp').length > 0)) {
            $(this).prevAll('select').closest('.col-xs-12').css({'width': 'calc(100% - 30px)', 'position': 'relative'})
        }
    });
    $('.tooltip-pos-left').each(function () {
        $(this).closest('.form-user-grp').css({'margin-left': '30px', 'position': 'relative'});
    })
}
