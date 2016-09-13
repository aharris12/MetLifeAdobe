/* VIEWPORT_WIDTH&HEIGHT */
window[sitename].MDOBJ.VIEWPORT = function(){
    window[sitename].VARS.VIEWPORT_WIDTH = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    window[sitename].VARS.VIEWPORT_HEIGHT = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
};

/* IS_MOBILE CHECK */
window[sitename].MDOBJ.CHECKMOBILE = function(){
    var mobileInfo = ['Android', 'iPhone', 'iPod', 'iPad', 'BlackBerry', 'Windows CE', 'SAMSUNG', 'LG', 'MOT', 'SonyEricsson'];
    $.each(mobileInfo, function(index){
        if (navigator.userAgent.match(mobileInfo[index]) != null){
            window[sitename].VARS.IS_MOBILE = true;
        }
    });
};

/* IS_VIEWTYPE CHECK */
window[sitename].MDOBJ.DEVICECHECK = function() {
    if(window[sitename].VARS.VIEWPORT_WIDTH < window[sitename].VARS.IS_SIZE.MAXMOBILE && window[sitename].VARS.IS_MOBILE){
        window[sitename].VARS.IS_VIEWTYPE = 'mobile';
    } else if(window[sitename].VARS.VIEWPORT_WIDTH <= window[sitename].VARS.IS_SIZE.MAXTABLET && window[sitename].VARS.IS_MOBILE){
        window[sitename].VARS.IS_VIEWTYPE = 'tablet';
    } else {
        if(window[sitename].VARS.VIEWPORT_WIDTH < window[sitename].VARS.IS_SIZE.MAXMOBILE ) {
            window[sitename].VARS.IS_VIEWTYPE = 'mobile';
        } else if (window[sitename].VARS.VIEWPORT_WIDTH <= window[sitename].VARS.IS_SIZE.MAXTABLET ) {
            window[sitename].VARS.IS_VIEWTYPE = 'tablet';
        } else {
            window[sitename].VARS.IS_VIEWTYPE = 'web';
        }
    }
};

/* CALLBACK DELAY FUNC */
window[sitename].MDOBJ.DELAY_FUNC = (function(){
    var timer = 0;
    return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();

;(function($){
    window[sitename].MDOBJ.VIEWPORT();
    window[sitename].MDOBJ.CHECKMOBILE();
    window[sitename].MDOBJ.DEVICECHECK();

    $(window).resize(function(){
        window[sitename].MDOBJ.VIEWPORT();
        window[sitename].MDOBJ.CHECKMOBILE();
        window[sitename].MDOBJ.DEVICECHECK();
        //console.log(window[sitename].VARS.IS_VIEWTYPE )
    });
})(jQuery);

(function($){

	window[sitename].MDOBJ.FOCUSABLE = function( $target ){
		var focusable = [];
		var focusableObj = {};
		focusableObj.el_firstFocus = null;
		focusableObj.el_lastFocus = null;

		$target.find('*').each(function(i, val) {
			if(val.tagName.match(/^A$|AREA|INPUT|TEXTAREA|SELECT|BUTTON/gim) && parseInt(val.getAttribute("tabIndex")) !== -1) {
				focusable.push(val);
			}
			if((val.getAttribute("tabIndex") !== null) && (parseInt(val.getAttribute("tabIndex")) >= 0) && (val.getAttribute("tabIndex", 2) !== 32768)) {
				focusable.push(val);
			}
		});
		focusableObj.el_firstFocus = focusable[0];
		focusableObj.el_lastFocus = focusable[focusable.length-1];

		return focusableObj;
	};





})(jQuery);


/* reduce ie8 support */
if (!Array.prototype.reduce) {
    Array.prototype.reduce = function(callback /*, initialValue*/) {
        'use strict';
        if (this == null) {
            throw new TypeError('Array.prototype.reduce called on null or undefined');
        }
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }
        var t = Object(this), len = t.length >>> 0, k = 0, value;
        if (arguments.length == 2) {
            value = arguments[1];
        } else {
            while (k < len && !(k in t)) {
                k++;
            }
            if (k >= len) {
                throw new TypeError('Reduce of empty array with no initial value');
            }
            value = t[k++];
        }
        for (; k < len; k++) {
            if (k in t) {
                value = callback(value, t[k], k, t);
            }
        }
        return value;
    };
}


