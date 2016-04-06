//Global variables
var breakpointMobile = 480;
var breakpointTablet = 767;
var breakpointDesktop = 1024;
var imagesPath = "";

if ( localStorage.getItem("contextPath") ) {
    imagesPath = localStorage.getItem("contextPath") + "/images/";
} else {
    imagesPath = "images/";
}
