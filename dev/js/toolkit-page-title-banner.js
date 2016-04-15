var pageTitleHeight = function(){
	if($(".search-box__container").length > 0 && $(".page-title").length > 0){
		$(".page-title").addClass("page-title-toolkit");
	}
}

$(document).ready(function(){
	pageTitleHeight();
});

 $(".js-openBannerLinks").on("click", function(){
    $(".page-title-banner-links__linkgroup").slideToggle();
 });


 $(window).resize(function() {
	 if ($(window).width() >= 751) {
		 resizeBanner();
		if($(".page-title-banner-links__linkgroup").css("display") === "none"){
			$(".page-title-banner-links__linkgroup").show();
		}
	 }
	 if ($(window).width() <= 750) {
			 $(".page-title-banner-links__linkgroup").hide();
		 notMinBanner();
	 }
 });

 var resizeBanner = function(){
	 var scroll = $(window).scrollTop();
	 if ($(".page-title-banner-title-plain").length === 0) {
		 if (scroll > 5) {
			 $('.page-title-banner').addClass('page-title-banner--minimized bg-gray-5th');
			 $('.page-title-banner').removeClass('bg-gray-1st');
			 $(".page-title-banner-actions__text").addClass('page-tittle-banner__sroll__hidden');
			 $(".page-title-banner-updated").addClass('page-tittle-banner__sroll__hidden');

			 $(".page-title-banner-breadcrumb").addClass('page-title-banner-breadcrumb--minimized');
			 $(".page-title-banner-title").addClass('page-title-banner-title--minimized');
			 $(".page-title-banner-actions").addClass('page-title-banner-actions--minimized');
			 $(".page-title-banner-links").addClass('page-title-banner-links--minimized');
		 } else {
			 notMinBanner();
		 }
	 }
 };

 var notMinBanner = function() {
	 if ($(".page-title-banner-title-plain").length === 0) {
		 $('.page-title-banner').removeClass('page-title-banner--minimized bg-gray-5th');
		 $('.page-title-banner').addClass('bg-gray-1st');
		 $(".page-title-banner-actions__text").removeClass('page-tittle-banner__sroll__hidden');
		 $(".page-title-banner-updated").removeClass('page-tittle-banner__sroll__hidden');
		 $(".page-title-banner-breadcrumb").removeClass('page-title-banner-breadcrumb--minimized');
		 $(".page-title-banner-title").removeClass('page-title-banner-title--minimized');
		 $(".page-title-banner-actions").removeClass('page-title-banner-actions--minimized');
		 $(".page-title-banner-links").removeClass('page-title-banner-links--minimized');
	 }
 }
 $(window).scroll(function () {
	 if ($(window).width() >= 751) {
		 resizeBanner();
	 }
	 changeActiveLink();
 });

 var changeActiveLink = function(){
	 $(".page-title-banner-links .page-title-banner-links__linkgroup ul li a").removeClass("active");
	 var position = $(this).scrollTop();
	 var height = $(".global-header").height();
	 $('.column-component').each(function() {
		 var target = $(this).offset().top - height - 220;
		 var destination = $(this).attr('data-destination');


		 if (position >= target) {
			 $(".page-title-banner-links .page-title-banner-links__linkgroup ul li a").removeClass("active");
			 $("[data-link='"+ destination +"']").addClass('active');
		 }
	 });
 };

 $(".page-title-banner-links .page-title-banner-links__linkgroup ul li a").click(function(e) {
	 e.preventDefault();
	 var destination = $(this).attr("data-link");
	 console.log( $("[data-destination='"+ destination +"']").offset().top)
	 $('html, body').animate({
		 scrollTop: $("[data-destination='"+ destination +"']").offset().top - 120
	 }, 1000);
	 changeActiveLink();
 });
