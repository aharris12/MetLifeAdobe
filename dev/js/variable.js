//Global variables
var breakpointMobile = 480;
var breakpointTablet = 751;
var breakpointDesktop = 1007;

var breakpointMobileOverlay = 480;
var breakpointTabletOverlay = 768;
var breakpointDesktopOverlay = 1023;
var imagesPath = "";

if ( localStorage.getItem("contextPath") ) {
    imagesPath = localStorage.getItem("contextPath") + "/static/images/";
} else {
    imagesPath = "/satic/images/";
}
