/***** Cookie Banner Begins ***********************************************************/
var domain = getDomain(document.URL);
var gaReferrer = false;
//var hasAcceptanceCookie = false;

if ($(".cookieShell").length > 0) {
	if (createCookie === undefined) {
		var createCookie = false;
	}
	//if (cookieName === undefined) {
	//    var cookieName = "MLALUKCookiesAccepted";
	//}
	$("a").click(function () {
		if ($(this).attr("class") != "privacyPolicy" && createCookie == true) {
			checkExistance(cookieName);
			if (hasAcceptanceCookie == false) {
				setCookie(cookieName, "yes", cookieExpiry, "/", domain, "");
			}
		}
	});

	//if the cookie acceptance checkox is unchecked, drop the cookie right away
	if (createCookie == false) {
		checkExistance(cookieName);
		if (hasAcceptanceCookie == false) {
			setCookie(cookieName, "yes", cookieExpiry, "/", domain, "");
		}
	}

	// Will not do anything unless checkbox for creating cookies is selected
	if (createCookie == true || Allowimmediatesiteanalytics == true) {
		checkExistance(cookieName);

		if (hasAcceptanceCookie == false) {
			enterCookie();
		}

		deleteCookies();
	}


	//var cookieHeight = $(".cookieShell").height();
	$(".global-header").addClass("cookie__header");
	$(".megamenu").addClass("cookie__megamenu");
	$(".search-trigger__container").addClass("cookie__search");
}


$(".js-cookieAccept").click(function () {
	$(".global-header").removeClass("cookie__header");
	$(".megamenu").removeClass("cookie__megamenu");
	$(".search-trigger__container").removeClass("cookie__search");
	$(".megamenu").removeClass('cookie-megamenu--minimized');
});

function checkExistance() {
	if ($.cookie(cookieName) != undefined) {
		hasAcceptanceCookie = true;
	}
	else {
		hasAcceptanceCookie = false;
	}
}

function enterCookie() {
	if (Allowimmediatesiteanalytics == false) {
		showCookieBannerMessage();
	}
	else {
		setCookie(cookieName, "yes", cookieExpiry, "/", domain, "");
		showCookieBannerMessage();
	}
}

function getDomain(url) {
	return url.match(/:\/\/(.[^/]+)/)[1];
}

function showCookieBannerMessage() {
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
	if (expires == 0) {
		$.cookie(name, value, {
			path: path,
			domain: domain,
			secure: secure
		});
	}
	else {
		$.cookie(name, value, {
			expires: expires,
			path: path,
			domain: domain,
			secure: secure
		});
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