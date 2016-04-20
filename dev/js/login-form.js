/* login form script starts here */
$("#headerLoginSubmit").click(function(e) {
	e.preventDefault();
	var formStatus = true;
	$("#formLogin").find('[data-required=true]').each(function () {
		var $this = $(this);
		var placeholder = $this.attr('placeholder');
		if ($this.val() == placeholder) {
			$this.val("");
		}
		var val = $this.val();
		if (val.length == 0) {
			$this.addClass('login_error');
			$this.parent("#formLogin").siblings(".formFail").find(".errorSpan").css('display','block');
			$this.parent("#formLogin").siblings(".formFail").find(".errorSpan").addClass('errorSpanOpen');
			$this.parent("#formLogin").find(".loginformSubmit").addClass('login_submit_error');
			//$this.parent("#formLogin").find(".loginMoreoptions").addClass('login_submit_error');
			$this.val(placeholder);
			formStatus = false;
		}
		else{
			$this.parent("#formLogin").siblings(".formFail").find(".errorSpan").removeClass('errorSpanOpen');
			$this.siblings(".login_error").parent("#formLogin").siblings(".formFail").find(".errorSpan").css('display','block');
			$this.parent("#formLogin").find(".login_submit_error").removeClass('login_submit_error');
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
		}
	});
	if(formStatus){
		document.cookie="phoenixLoginBacktrack"+ "=deleted; expires=" + (new Date(0)).toUTCString() + "; domain=.metlife.com; path=/"
		$("#formLogin").submit();
	}

});

$("#formLogin").find('[data-required=true]').on('focus', function () {
	$this = $(this);
	$this.removeClass('login_error');
	var placeholder = $(this).attr('placeholder');
	if ($this.val() == placeholder) {
		$this.val("");

	}
});

$("#formLogin").find('[data-required=true]').on('blur', function () {
	var $this = $(this);
	var placeholder = $this.attr('placeholder');
	if ($this.val() == placeholder) {
		$this.val("");
	}
	var val = $this.val();
	if (val.length == 0) {
		$this.addClass('login_error');
		$this.parent("#formLogin").siblings(".formFail").find(".errorSpan").css('display','block');
		$this.parent("#formLogin").find(".loginformSubmit").addClass('login_submit_error');
		//$this.parent("#formLogin").find(".loginMoreoptions").addClass('login_submit_error');
		$this.val(placeholder);
	}
	else {
		$this.removeClass('login_error');
		$this.parent("#formLogin").siblings(".formFail").find(".errorSpanLogin").css('display','none');
		$this.parent("#formLogin").find(".login_submit_error").removeClass('login_submit_error');
	}
});

$(window).resize(function () {
	if (getViewport() == "mobile" || getViewport() == "tablet") {
		if ($(".loginOpen").css("display") == 'none') {
			$('.loginOpen').removeClass("login_mobile");
		}else{
			$('.loginOpen').addClass("login_mobile");
		}
		$(".loginOpen").css("top", "50px");
	}else{
		$('.loginOpen').removeClass("login_mobile");
		if ($(".global-header").hasClass("global-header--minimized")) {
			$(".loginOpen").css("top", "50px");
		} else {
			$(".loginOpen").css("top", "70px");
		}
	}

});


$(window).scroll(function () {
	if (getViewport() == "mobile" || getViewport() == "tablet") {
		$(".loginOpen").css("top", "50px");
	}else{
		if ($(".global-header").hasClass("global-header--minimized")) {
			$(".loginOpen").css("top", "50px");
		} else {
			$(".loginOpen").css("top", "70px");
		}
	}

	/*if ($(".global-header").hasClass("global-header--minimized")) {
		$(".loginOpen").css("top", "50px");
	} else {
		$(".loginOpen").css('top', '70px');
		if ($(window).width() < 751) {
			$(".loginOpen").css("top", "50px");

		}
	}*/
});

/* login form script Ends here */