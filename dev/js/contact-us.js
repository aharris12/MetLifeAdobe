$(".contact-us__select").on("change", function(){
	var whichresults = $(".contact-us__select").val();
	$(".contact-us__results__wrapper").addClass('hidden');
	if( $(".contact-us__results__wrapper").hasClass(whichresults)){
		$("." + whichresults).removeClass("hidden");
	}
});

//Proper rendering of bullets on the contact-us single page
if($('.rtf-general-content').length > 0 && $('.rtf-general-content').prev('.contact-us-directory') > 0) {
	$('.rtf-general-content').addClass("rtf-general-content__contact-single--bullets");
	// console.log("This is true");
}