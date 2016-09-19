/**
 * Created by jfeng2 on 1/28/2016.
 */

$(document).ready(function() {
    formCardExpand();
    formCardMinimize();
});

function formCardExpand(){
    var h = $('.contact-container--form-card').outerHeight();
    $(".contact-container--form-card form").click(function() {
        $('.contact-container--form-card .hidden-field').each(function(){
            if(!$(this).hasClass("observer")){
                $(this).show();
            }
        })
       // $('.contact-container--form-card .hidden-field').show();
    });

    $('.form-card__img__inner').css('height', h + 'px');
};

function formCardMinimize(){
    $(".contact-container--form-card .form-minimize").click(function() {
        $('#contactCard').trigger("reset");
        if(getViewport() == "mobile"){
            if(!$('.contact-container--form-card .hidden-field').hasClass("observer")){
                $('.contact-container--form-card .hidden-field').show();
            }
        }else{
            $('.contact-container--form-card .hidden-field').hide();
        }
        $('#contactCard').find('.error').removeClass('error');
        $('#contactCard').find('.errorSpan').removeClass('errorSpanOpen');
        $('#contactCard' +
            '').find('svg').css('fill','#666');
    });
};
var thisViewPort = getViewport();
$(window).on("resize",function(){
    if(thisViewPort != getViewport()){
        if(getViewport() == "mobile"){
            $('.contact-container--form-card .hidden-field').each(function(){
                if(!$(this).hasClass("observer")){
                    $(this).show();
                }
            });
            thisViewPort = getViewport();
        }
        if(getViewport() != "mobile"){
            $('.contact-container--form-card .hidden-field').hide();
            thisViewPort = getViewport();
        }
        formCardExpand()
    }
});