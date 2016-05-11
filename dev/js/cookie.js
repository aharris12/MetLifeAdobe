/***** Cookie Banner Begins ***********************************************************/
var domain = getDomain(document.URL);
var gaReferrer = false;
var hasAcceptanceCookie;
console.log('cookieName ', cookieName)
console.log('createCookie ', createCookie)
console.log('Allowimmediatesiteanalytics ', Allowimmediatesiteanalytics)
console.log('cookieExpiry ', cookieExpiry)
console.log('cookieDelete ', cookieDelete)
console.log('cookieNamesDelete ', cookieNamesDelete)
	console.log('$(".cookieShell").length > 0 ', $(".cookieShell").length > 0)
	if ($(".cookieShell").length > 0) {
		console.log('checking if createCookie === undefined ', createCookie === undefined)
		if (createCookie === undefined) {
			console.log("enter Statement")
			var createCookie = false;
		}
		//if (cookieName === undefined) {
		//    var cookieName = "MLALUKCookiesAccepted";
		//}


		//if the cookie acceptance checkox is unchecked, drop the cookie right away
		console.log("checking if createCookie == false ", createCookie == false)
		if (createCookie == false) {
			console.log("enter Statement")
			checkExistance(cookieName);
			console.log("checking if hasAcceptanceCookie == false ", hasAcceptanceCookie == false)
			if (hasAcceptanceCookie == false) {
				console.log("enter Statement")
				setCookie(cookieName, "yes", cookieExpiry, "/", domain, "");
			}
		}



		// Will not do anything unless checkbox for creating cookies is selected
		console.log('checking if createCookie == true || Allowimmediatesiteanalytics == true ', createCookie == true || Allowimmediatesiteanalytics == true)
		if (createCookie == true || Allowimmediatesiteanalytics == true) {
			console.log("enter Statement")
			checkExistance(cookieName);
			console.log('checking if hasAcceptanceCookie == false ', hasAcceptanceCookie == false)
			if (hasAcceptanceCookie == false) {
				console.log("enter Statement")
				enterCookie();
			}

			deleteCookies();
		}

		if ($(".cookieShell").hasClass("hidden")) {
			$(".global-header").removeClass("cookie__header");
			$(".megamenu").removeClass("cookie__megamenu");
			$(".search-trigger__container").removeClass("cookie__search");
		}else{
			//var cookieHeight = $(".cookieShell").height();
			$(".global-header").addClass("cookie__header");
			$(".megamenu").addClass("cookie__megamenu");
			$(".search-trigger__container").addClass("cookie__search");
		}


	}




$(".js-cookieAccept").click(function () {
	$(".global-header").removeClass("cookie__header");
	$(".megamenu").removeClass("cookie__megamenu");
	$(".search-trigger__container").removeClass("cookie__search");
	$(".megamenu").removeClass('cookie-megamenu--minimized');
});

$("a").click(function () {
	console.log("creating cookie click")
	console.log('checking if $(this).attr("class") != "privacyPolicy" && createCookie == true ', $(this).attr("class") != "privacyPolicy" && createCookie == true)
	if ($(this).attr("class") != "privacyPolicy" && createCookie == true) {
		console.log('enter cookie')
		checkExistance(cookieName);
		console.log('checking if hasAcceptanceCookie == false ', hasAcceptanceCookie == false)
		if (hasAcceptanceCookie == false) {
			setCookie(cookieName, "yes", cookieExpiry, "/", domain, "");
		}
	}
});

function checkExistance() {
	console.log('checking if $.cookie(cookieName) != undefined ', $.cookie(cookieName) != undefined)
	console.log(' line 78 -  cookieName ', cookieName)
	console.log('line 78 - $.cookie(cookieName) ', $.cookie(cookieName))
	if ($.cookie(cookieName) != undefined) {
		hasAcceptanceCookie = true;
		console.log(hasAcceptanceCookie)
	}
	else {
		hasAcceptanceCookie = false;
	}
	console.log(hasAcceptanceCookie)
}

function enterCookie() {
	console.log('checking if Allowimmediatesiteanalytics == false ', Allowimmediatesiteanalytics == false)
	if (Allowimmediatesiteanalytics == false) {
		console.log("enter Statement if")
		showCookieBannerMessage();
	}
	else {
		console.log("enter Statement else")
		setCookie(cookieName, "yes", cookieExpiry, "/", domain, "");
		console.log(setCookie(cookieName, "yes", cookieExpiry, "/", domain, ""))
		showCookieBannerMessage();
	}
}

function getDomain(url) {
	return url.match(/:\/\/(.[^/]+)/)[1];
}

function showCookieBannerMessage() {
	console.log('removing hidden ', $('.cookieShell').removeClass("hidden"))
	$('.cookieShell').removeClass("hidden");
}

function deleteCookies() {
	// Remove cookies set by this application [Google Analytics, WebTrends, alicoRerral]
	if (cookieDelete) {
		var path = "/";
		var domain = getDomain(document.URL);
		var deleteCookie = cookieNamesDelete.split(';');
		for (var i = 0; i < deleteCookie.length; i++) {
			$.removeCookie(deleteCookie[i], {path: path});
		}
	}
}

function setCookie(name, value, expires, path, domain, secure) {
	console.log('enter setCookie')
	console.log('check if expires == 0 ', expires == 0)
	if (expires == 0) {
		console.log("if")
		$.cookie(name, value, {
			path: path,
			domain: domain,
			secure: secure
		});
		console.log($.cookie(name, value, {
			path: path,
			domain: domain,
			secure: secure
		}))
	}
	else {
		console.log("else")
		$.cookie(name, value, {
			expires: expires,
			path: path,
			domain: domain,
			secure: secure
		});
		console.log($.cookie(name, value, {
			expires: expires,
			path: path,
			secure: secure
		}))
	}
}

function setAcceptCookieDesktop(hasAppCookie) {
	if (hasAppCookie) {
		createReferral();
	}

	checkExistance(cookieName);
	if (hasAcceptanceCookie == false) {
		setCookie(cookieName, "yes", cookieExpiry, "/", domain, "");
	}
	$('.cookieShell').slideUp();
}

function createReferral() {
	// set cookie when the page has referral
	var referrerEmpty = '';
	var referrer = document.referrer;
	var bMatch = false;
	//var ignoredUrls =
	//    ["http://uae.alico.com",
	//        "https://uae.alico.com",
	//        "http://www.uae.alico.com",
	//        "https://www.aue.alico.com",
	//        "http://stage.uae.alico.com",
	//        "https://stage.uae.alico.com",
	//        "http://secure.uae.alico.com",
	//        "https://secure.uae.alico.com"];
	var ignoredUrlPattern = /^http(s)?:\/\/(((stage|stage2|stage|teststage|metlifestage|www)\.)?([a-z]{0,3}\.)?alico.com|(www\.)?interamericana.cl)/;
	if (referrer.match(ignoredUrlPattern)) bMatch = true;
	// if the referrer is not from our domain, then this is the first time.

	if (Allowimmediatesiteanalytics == false) {
		if (!bMatch && hasAcceptanceCookie) {
			setCookie("alicoReferral", document.referrer, 0, "/", domain, "");
		}
		if (referrer == "" && hasAcceptanceCookie) {
			setCookie("alicoReferral", referrerEmpty, 0, "/", domain, "");
		}
	}
	else {
		if (!bMatch) {
			setCookie("alicoReferral", document.referrer, 0, "/", domain, "");
		}
		if (referrer == "") {
			setCookie("alicoReferral", referrerEmpty, 0, "/", domain, "");
		}
	}
}

/***** Cookie Banner End ***********************************************************/