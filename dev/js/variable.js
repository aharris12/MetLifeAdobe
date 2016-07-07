//Global variables
var breakpointMobile = 480;
var breakpointTablet = 751;
var breakpointDesktop = 1007;

var breakpointMobileOverlay = 480;
var breakpointTabletOverlay = 768;
var breakpointDesktopOverlay = 1023;
var imagesPath = "";

//Production code
if ( localStorage.getItem("contextPath") ) {
    imagesPath = localStorage.getItem("contextPath") + "/static/images/";
} else {
    imagesPath = "/static/images/";
}

//Local testing code
//if ( localStorage.getItem("contextPath") ) {
//    imagesPath = localStorage.getItem("contextPath") + "/images/";
//} else {
//    imagesPath = "/images/";
//}