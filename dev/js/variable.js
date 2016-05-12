//Global variables
var breakpointMobile = 480;
var breakpointTablet = 751;
var breakpointDesktop = 1011;
var imagesPath = "";

if ( localStorage.getItem("contextPath") ) {
    imagesPath = localStorage.getItem("contextPath") + "/images/";
} else {
    imagesPath = "images/";
}
