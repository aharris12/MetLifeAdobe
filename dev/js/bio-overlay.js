//display bio card overlay on click
$('.js-bio-profile__bio-link').click(function() {
    $(this).next('.js-bio-overlay').removeClass('hidden');
});