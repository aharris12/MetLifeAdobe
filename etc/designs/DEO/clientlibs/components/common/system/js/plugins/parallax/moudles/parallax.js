(function($){
    var self = window[sitename].APPS.PARALLAX;
    var _util = self.util;
    var _animations = self.animations;
    var $elem, options;
    var offsetArr = [];
    var $win = $(window);

    var setElement = function( el, opt) {
        $elem = el;
        options = opt;
        options.typeArr = [];
        options.formCss = [];
        options.toCss = [];
    };

    function varSettings( el, opt ) {
        setElement( el, opt );
        $elem.each(function( idx ){
            var $this = $(this);
            offsetArr[idx] = $this.offset().top;
            options.typeArr[idx] = $this.data("parallaxType");
            options.formCss[idx] = $this.data("parallaxPosbefore") || null;
            options.toCss[idx] = $this.data("parallaxPosafter") || null;
        });
    }

    function parallaxScroll(){
        var scrollTop = $win.scrollTop();
        var elemIdx = _util.getTargetIdx( offsetArr, scrollTop );
        if(elemIdx == undefined) return;
        
        var sectype = options.typeArr[elemIdx].split(' ');
        if(sectype.length > 0) {
            for(var i = 0, len = sectype.length; i < len; i++) {
                _animations[sectype[i]]($elem, options);
            }
        } else {
            _animations[options.typeArr[elemIdx]]($elem, options);
        }
    }

    function addEvent(){
        $win.on('scroll', parallaxScroll)
    }

    function removeEvent() { $win.off('scroll', parallaxScroll) }

    self.PARALLAXMAKE = function( el, opt ){
        var self = this;
        self.distory = function(){ removeEvent(); };
        self.init = function(){
            addEvent();
            varSettings( el, opt );
            var cssarr = (options.formCss != undefined) ? options.formCss : null;
            _util.beforeSetCss( $elem, options.typeArr, cssarr ) ;

        }
    };
})(jQuery);

