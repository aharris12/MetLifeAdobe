var selectedBtnGroupOption = "";
var valid = true;
var zipcode = 0;
var isNumber = false;

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

$('.find-office__dental, .find-office__vision').change(function(){
    validateFindOffice();
});

$('.btn-group .btn').click(function(){
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
        if (selectedBtnGroupOption == "dental") {
            $('.find-office__zip-city-state-container').addClass('full-width');
            $('.find-office__dental-container').css('display','block');
        } else if (selectedBtnGroupOption == "vision") {
            $('.find-office__zip-city-state-container').addClass('full-width');
            $('.find-office__vision-container').css('display','block');
        }
    }
});

$('.find-office__submit').click(function(){
    event.preventDefault();
    selectedBtnGroupOption = $('.btn-group .btn.active').attr('data-btn-group-option');    
    if (validateFindOffice()) {
        var urlStr = "";
        if (selectedBtnGroupOption == "office") {
            var x = window.location.href;
            urlStr = window.location.href + x.substring(0, x.lastIndexOf("/")) + "?zip=" + zipcode;
            urlStr = $(this).attr('data-href') + "?zip=" + zipcode;
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