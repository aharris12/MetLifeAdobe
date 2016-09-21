//display bio card overlay on click
$('.js-bio-profile__bio-link').click(function () {
    $(this).parents('.bio-profile__content').next('.js-bio-overlay').removeClass('hidden');
});

//close bio overlay on X click
$('.js-bio-overlay .icon-close').click(function () {
    $(this).parents('.js-bio-overlay').addClass('hidden');
});

/*
 Bio Page select switch
 If the secondary select (which is optional) is on the page,
 checks primary switch & secondary switch data attributes on each bio profile to show appropriate bios
 If the secondary select is not on the page,
 only check the primary switch data attributes
 */
if ($('.js-secondary-biocontainer-switch').length > 0) {
    checkPrimaryAndSecondarySwitch();

    $('.js-primary-biocontainer-switch, .js-secondary-biocontainer-switch').change(function () {
        $('.bio-profile').addClass('hidden');
        checkPrimaryAndSecondarySwitch();
    });
} else {
    checkPrimarySwitch();

    $('.js-primary-biocontainer-switch').change(function () {
        $('.bio-profile').addClass('hidden');
        checkPrimarySwitch();
    });
}

function checkPrimaryAndSecondarySwitch() {
    $.each($('.bio-profile'), function () {
        if ($(this).data('primary-switch') == $('.js-primary-biocontainer-switch').val() && $(this).data('secondary-switch') == $('.js-secondary-biocontainer-switch').val()) {
            $(this).removeClass('hidden');
        }
    });
}

function checkPrimarySwitch() {
    $.each($('.bio-profile'), function () {
        if ($(this).data('primary-switch') == $('.js-primary-biocontainer-switch').val()) {
            $(this).removeClass('hidden');
        }
    });
}
