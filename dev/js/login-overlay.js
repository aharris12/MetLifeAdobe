var loginTypesPosition = 0;
window.addEventListener("orientationchange", function () {
    // Announce the new orientation number

    if (screen.height > screen.width) {
        $('.login-types').css('top', $(window).height() - 70 + 'px');
    }

    if (screen.height < screen.width) {
        $('.login-types').css('top', $(window).height() - 70 + 'px');
    }

}, false);
$('.login-types').css('top', $(window).height() - 70 + 'px');
$(window).resize(function () {
    $('.login-types').css('top', $(window).height() - 70 + 'px');
});

$('.login-container--close').click(function () {
    $('.login-container').hide();
    $('.login-types').removeClass('overlay-scroll__child');
    $('.login-container').removeClass('overlay-scroll__child');
    $('body').removeClass('overlay-scroll__parent');
})

//Show login info popout on hover
$('.login-container .icon.info').hover(
    function () {
        $('[data-popout-msg=' + $('select.login-type').val() + '-popout]').fadeIn();
    },
    function () {
        $('[data-popout-msg=' + $('select.login-type').val() + '-popout]').hide();
    }
);

//Show/hide login fields based on user input
$('select.login-type').change(function () {
    $('[data-popout-msg]').hide();
    var selectedLoginType = $(this).val();
    if (selectedLoginType == "for_individuals" || selectedLoginType == "for_brokers") {
        $('.login-type-biz-account').hide();
        $('.login-type-biz-purpose').hide();
        $('#biz-account-type').prop('selectedIndex', 0);
        $('#biz-account-purpose').prop('selectedIndex', 0);
        $('.login-type-username').show();
        $('.login-type-password').show();
    } else {
        $('.login-type-biz-account').show();
    }

    if ($('#biz-account-type :selected').val() != "") {
        $('.login-type-username, .login-type-password').show();
        if ($('#biz-account-type :selected').val() != "sbr") {
            $('[data-popout-msg=' + selectedLoginType + ']').show();
        }

        if ($('#biz-account-type :selected').val() == "metlink") {
            $('.not-registered-bus').hide();
        }
        if ($('#biz-account-type :selected').val() == "mybenefits") {
            $('[data-popout-msg="for_benefits"]').show();
        }
    } else {
        if (selectedLoginType == "for_individuals" || selectedLoginType == "for_brokers") {
            $('.login-type-username, .login-type-password').show();
            $('[data-popout-msg=' + selectedLoginType + ']').show();
            $('.login-popout.login-submit button').attr('disabled', false).removeClass('btn-brand-2nd--disabled');
        } else {
            $('.login-popout.login-submit button').attr('disabled', true).addClass('btn-brand-2nd--disabled');
            $('.login-type-username, .login-type-password').hide();
        }
    }
});

$('#biz-account-type').change(function () {
    if ($('#biz-account-type :selected').val() != "") {
        $('.login-type-username, .login-type-password').show();
        $('.login-popout.login-submit button').attr('disabled', false).removeClass('btn-brand-2nd--disabled');
        if ($(this).val() == "mybenefits") {
            $('.login-type-biz-purpose').show();
            $('.login-type-username').show();
            $('.login-type-password').show();
        } else if ($(this).val() == "sbr") {
            $('.login-type-biz-purpose').hide();
            $('.login-type-username').hide();
            $('.login-type-password').hide();
        } else {
            $('.login-type-biz-purpose').hide();
            $('.login-type-username').show();
            $('.login-type-password').show();
        }
        if ($('#biz-account-type :selected').val() != "sbr") {
            $('[data-popout-msg=for_businesses]').show();
        }

        if ($('#biz-account-type :selected').val() == "metlink") {
            $('.not-registered-bus').hide();
        }
    } else {

        $('.login-type-username, .login-type-password').hide();
    }
});
$('#biz-account-purpose').change(function () {
    $('[data-popout-msg=for_businesses]').show();
});


//Show/hide other login types
//loginTypesPosition = parseInt($(".login-types").css('top').replace('px',''));
$('.login-type-trigger__title').on('click touchstart', function (e) {
    e.preventDefault();

    var clickEvent = ((document.ontouchstart !== null) ? 'click' : 'touchstart');
    switch (clickEvent) {
        case 'click':
            toggleLoginTypes()
            break;
        case 'touchstart':
            toggleLoginTypes()
            break;
        default:
            break;
    }
    return false;
});

function toggleLoginTypes() {
    var minus = '<svg class="icon icon-minus"><use xlink:href="' + imagesPath + 'icons-metlife.svg#icon-minus"></use></svg>';
    var plus = '<svg class="icon icon-plus"><use xlink:href="' + imagesPath + 'icons-metlife.svg#icon-plus"></use></svg>';
    //Toggle main menu item's chevron
    if ($('.login-type-trigger__title').find('svg').attr('class').indexOf('icon-plus') > 0) {
        $('.login-type-trigger__title').find("svg").remove();
        $('.login-type-trigger__title').find('h2').append(minus);

    } else {
        $('.login-type-trigger__title').find("svg").remove();
        $('.login-type-trigger__title').find('h2').append(plus);
    }
    $('.login-types').toggleClass('overlay-scroll__child');
    $('.login-container').toggleClass('overlay-scroll__child');
    $('.login-type__contact').toggle();
    $('.login-type-trigger__title').toggleClass('login-type-trigger__title--open');
    var winHeight = $(window).height() - 100;
    if (loginTypesPosition == $('.global-header').height()) {
        $(".login-types").animate({top: winHeight + 30 + 'px'}, 500, function () {
            loginTypesPosition = parseInt($(".login-types").css('top').replace('px', ''));
        });
    } else {
        $(".login-types").animate({top: $('.global-header').height() + 'px'}, 500);
        loginTypesPosition = parseInt($('.global-header').height());
    }
    $('.login-type__details').slideToggle(500);
}

$('.login-type__detail').click(function () {

    var right = '<svg class="icon icon-chevron-right"><use xlink:href="' + imagesPath + 'icons-metlife.svg#icon-chevron-right"></use></svg>';
    var down = '<svg class="icon icon-chevron-down"><use xlink:href="' + imagesPath + 'icons-metlife.svg#icon-chevron-down"></use></svg>';

    if ($(window).width() < breakpointTablet) {
        $('.login-type__detail').find('ul').slideUp();
        $('.login-type__detail').find('svg').remove();
        $('h3').after(right);

        //Toggle clicked main menu item's chevron
        if (!$(this).find('ul').is(':visible')) {
            $(this).find('svg').remove();
            $(this).find('h3').after(down);
            $(this).find('ul').slideDown();
        } else {
            $(this).find('svg').remove();
            $(this).find('h3').after(right);
        }
    }
});

//Validate login fields before submitting
/*$('.js-submitLogin').click(function(){
 var valid = true;
 var username = $('.login-type-username').find('input');
 var password = $('.login-type-password').find('input');
 console.log(username.val())
 console.log(password.val())
 //Remove with PLACEHOLDER
 $('.login-popout').find("input").each(function(){
 if( $(this).attr("placeholder") == $(this).val() ) {
 $(this).val("");
 }
 })
 if(username.val() == "") {
 username.addClass('error');
 valid = false;
 }
 if(password.val() == "") {
 password.addClass('error');
 valid = false;
 }
 if( valid || $('#biz-account-type').val() == "sbr") {
 // loginFunction();
 $("#formLogin").submit();
 resetLoginFields();
 }else{
 return false;
 }
 });*/
document.cookie = "PLTRYNO=1; domain=.metlife.com; path=/";
function loginFunction() {

    var valid = true;
    var username = $('.login-type-username').find('input');
    var password = $('.login-type-password').find('input');
    //Remove with PLACEHOLDER
    $('.login-popout').find("input").each(function () {
        if ($(this).attr("placeholder") == $(this).val()) {
            $(this).val("");
        }
    })
    if (username.val() == "") {
        username.addClass('error');
        valid = false;
    }
    if (password.val() == "") {
        password.addClass('error');
        valid = false;
    }
    if (valid || $('#biz-account-type').val() == "sbr") {
        // loginFunction();
        $("#formLogin").submit();
        resetLoginFields();
    } else {
        return false;
    }
    /*var userName = $('#userID').val();
     var userPassword = $('#userPassword').val();
     var jsonData = {
     "serviceName":"validateUser",
     "userName":userName,
     "password":userPassword
     }

     $.ajax({
     url: "https://dev.www.metlife.com/wps/loginProxy/edge/services/public/channel/loginInteractionServices/loginservice",
     dataType: "json",contentType: "application/json; charset=utf-8",
     type:'POST',
     data: JSON.stringify(jsonData),
     success: function(data) {
     if (data.isLoginError) {
     window.location.href = "/individual/phoenixloginassist.html?phoenixLoginMsg=ok&TARGET=";
     }
     else {
     window.location.href = data.authenticationMap.redirectUrl;
     }
     }
     });*/
    // https://online.metlife.com/edge/web/public/identifyUser
    //  document.cookie="phoenixLoginBacktrack"+ "=deleted; expires=" + (new Date(0)).toUTCString() + "; domain=.metlife.com; path=/"
    //  $("#formLogin").submit();
}


//Reset login fields to default after submitting
function resetLoginFields() {
    $('.login-popout').find("input").each(function () {
        $(this).val($(this).attr("placeholder"));
        $(this).removeClass('error');
    });
    $('.login-type-username').show();
    $('.login-type-password').show();
    $('select.login-type').val("for_individuals");
    $('#biz-account-type').prop('selectedIndex', 0);
    $('#biz-account-purpose').prop('selectedIndex', 0);
    $('.login-type-biz-account').hide();
    $('.login-type-biz-purpose').hide();
}


//Show PASSWORD placeholder in password field.
function showPasswordPlaceholder() {

    // cache references to the input elements into variables
    var passwordField = $('input[name=password]');

    // add a password placeholder field to the html
    passwordField.after('<input id="passwordPlaceholder" type="text" value="Password" autocomplete="off" />');
    var passwordPlaceholder = $('#passwordPlaceholder');

    // show the placeholder with the prompt text and hide the actual password field
    passwordPlaceholder.show();
    passwordField.hide();

    // when focus is placed on the placeholder hide the placeholder and show the actual password field
    passwordPlaceholder.focus(function () {
        passwordPlaceholder.hide();
        passwordField.show();
        passwordField.focus();
    });
    // and vice versa: hide the actual password field if no password has yet been entered
    passwordField.blur(function () {
        if (passwordField.val() == '') {
            passwordPlaceholder.show();
            passwordField.hide();
        }
    });
}

/*
 showPasswordPlaceholder();
 $('input[name=password]').change(function(){
 if($(this).val() == "")
 showPasswordPlaceholder();
 })
 */

