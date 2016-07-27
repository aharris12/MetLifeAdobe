$('.js-share').click(function(e){
    e.preventDefault();
    $('.' + $(this).attr('data-target')).toggleClass("share__chat—social__open");
   // $(".arrow-left").toggleClass("hidden");

});