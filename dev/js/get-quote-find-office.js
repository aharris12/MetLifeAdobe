var selectedBtnGroupOption = "";
var valid = true;
var zipcode = 0;
var isNumber = false;


$(".product__selector").on("change", function(){
    var productSelectorPage = $(this).find(':selected').attr("data-product-url");
    $(".js-productSelector").attr("href", productSelectorPage);
});


$(".find-office__zip-city-state").on("keyup", function(){
    $('.find-office__zip-city-state, .find-office__dental, .find-office__vision').removeClass('form-error');
    $('.error-span').hide();
});

function validateFindOffice() {
    //reset
    $('.find-office__zip-city-state, .find-office__dental, .find-office__vision').removeClass('form-error');
    $('.error-span').hide();
    valid=true;

    zipcode = $('.find-office__zip-city-state').val();
    isNumber =  /^\d+$/.test(zipcode);
    if( zipcode.length == 0 || (isNumber && zipcode.length != 5)) {
        $('.find-office__zip-city-state').addClass('form-error')
        $('.error-span').show();
        valid = false;
    }
    if (selectedBtnGroupOption == "dental" && $('.find-office__dental').val() == "") {
        $('.find-office__dental').addClass('form-error');
        valid = false;
    }
    if (selectedBtnGroupOption == "vision" && $('.find-office__vision').val() == "") {
        $('.find-office__vision').addClass('form-error');
        valid = false;
    }
    return valid;
}


$(".btn-group .btn").click(function(){
    //reset
    $('.find-office__zip-city-state-container').removeClass('full-width');
    $('.find-office__dental-container, .find-office__vision-container').css('display','none');
    selectedBtnGroupOption = $(this).attr('data-btn-group-option');
    if (!$(this).hasClass('active')) {
        $('.find-office__zip-city-state-container').removeClass('full-width');
        $('.find-office__dental-container, .find-office__vision-container').css('display','none');
    } else {
        //set
        $('.btn-group-selected').val(selectedBtnGroupOption);
    }
});

$(".find-office__zip-city-state").on("focus", function(){
    if (selectedBtnGroupOption == "vision"){
        $('.find-office__zip-city-state-container').addClass('full-width');
        $('.find-office__vision-container').css('display','block');
        $('.find-office__dental-container').css('display','none');
    }else if(selectedBtnGroupOption == "dental") {
        $('.find-office__zip-city-state-container').addClass('full-width');
        $('.find-office__vision-container').css('display','none');
        $('.find-office__dental-container').css('display','block');
    }else{
        $('.find-office__vision-container').css('display','none');
        $('.find-office__dental-container').css('display','none');
    }

});

$('.find-office__submit').click(function(){
    event.preventDefault();
    selectedBtnGroupOption = $('.btn-group .btn.active').attr('data-btn-group-option');
    if (validateFindOffice()) {
        var urlStr = "";
        if (selectedBtnGroupOption == "office") {
            urlStr = $('.btn-group .btn.active').attr('data-href') + "?zip=" + zipcode;
            sessionStorage.setItem("faoZipCode", $(".find-office__zip-city-state").val());
        } else if (selectedBtnGroupOption == "dental") {
            if (!($('.find-office__dental').val().trim() == 'TRICARE')) {
                urlStr = "https://metlocator.metlife.com/metlocator/execute/Search?searchType=findDentistMetLife&networkID=2&zip=" + zipcode + "&qsType=" + $('.find-office__dental').val();
            } else {
                urlStr = "http://www.metlife.com/tricare";
            }
        } else if (selectedBtnGroupOption == "vision") {
            if (!($('.find-office__vision').val().trim() == 'SafeGuard')) {
                urlStr = "https://mymetlifevision.com/find-provider-location.html?zip=" + zipcode + "&net=" + $('.find-office__vision').val().trim();
            } else {
                urlStr = "https://www.metlife.com/individual/insurance/dental-insurance/vision-providers/vision-facility-reference-guides.html";
            }
        }
      window.location.href = urlStr;
    }
});

$('[data-target="vision_overlay"]').click(function(e){
    e.preventDefault();
    $(".vision_overlay").removeClass("hidden")
});

$('[data-target="dental_overlay"]').click(function(e){
    e.preventDefault();
    $(".dental_overlay").removeClass("hidden")
});

$(".vision_dental_overlay_close").click(function(e){
    e.preventDefault();
    $(".dental_overlay").addClass("hidden");
    $(".vision_overlay").addClass("hidden");
});