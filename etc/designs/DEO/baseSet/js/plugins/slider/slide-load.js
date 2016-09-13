/* slide loading */
(function($){

    var self = window[sitename].APPS.SLIDE;
    var _util = self.UTIL;
    self.SLIDELOAD = function(){
        var _effect = window[sitename].APPS.SLIDE.SLIDEEFFECT;
        var self = this;
        var $win = $(window);
        var $elem;
        var slideElemVar = slideElemVar || {};
        var activeClass = "indi-active";
        slideElemVar.slideType = slideElemVar.slideType || [];
        slideElemVar.viewLen = slideElemVar.viewLen || [];
        var indicator;
        var oldView = window[sitename].VARS.IS_VIEWTYPE,
            newView,
            newMode, oldMode;

        function setSlideVar( $el ){
            slideElemVar.slideType = _util.getDataRetrun( $el.data("slideType") );
            slideElemVar.viewLen = _util.getDataRetrun( $el.data("slideViewlen") );
            slideElemVar.modeidx = _util.getDeviceArrIdx( window[sitename].VARS.IS_VIEWTYPE );
        }

        function resizeSet(){
            slideElemVar.modeidx = _util.getDeviceArrIdx( window[sitename].VARS.IS_VIEWTYPE );
            newView = window[sitename].VARS.IS_VIEWTYPE;
            if(oldView == newView) return;
            setSlideVar( $elem.el );
            newMode = _util.getSlideMode( slideElemVar );

            modeRemoveEvent();
            modeAddEvent();

            if ( $elem.indicator.length > 0 ) {
                indicator.indiMakeDispatch( slideElemVar.modeidx );
            }
            slideElemVar.oldModeIdx = slideElemVar.modeidx;
            oldMode = newMode;
            oldView = newView;
        }

        function modeAddEvent(){
            var eventTarget = self[ "slide-" + slideElemVar.slideType[ slideElemVar.modeidx ] ];
            eventTarget.init($elem, slideElemVar);
            eventTarget.addEvent();
        }

        function modeRemoveEvent() {
            var eventTarget = self[ "slide-" + slideElemVar.slideType[ slideElemVar.oldModeIdx ] ];
            eventTarget.removeEvent();
        }

        function addEvent(){
            $win.on("resize", resizeSet);
        }

        function removeEvent(){
            $win.off("resize", resizeSet);
        }

        function makeModeFn() {
            var len = slideElemVar.slideType.length;
            var loadEffct = [];

            for( var i=0; i < len; i++ ) {
                if( loadEffct.indexOf( slideElemVar.slideType[i] ) > -1 ) return;
                loadEffct[i] = slideElemVar.slideType[i];
                self[ "slide-" + slideElemVar.slideType[i] ] = new _effect[ slideElemVar.slideType[i] ]( $elem, slideElemVar );
            }
        }

        this.slideInit = function ( $elem ) {
            //self[ "slide-" + slideElemVar.slideType[slideElemVar.modeidx] ].init( $elem );
            //self[ "slide-" + slideElemVar.slideType[slideElemVar.modeidx] ].addEvent();
        };

        this.destory = function ( $elem ) {
            self[ "slide-" + slideElemVar.slideType[slideElemVar.modeidx] ].destory();
            removeEvent();
        };

        this.init = function ( $elemSet ){
            $elem = $elemSet;
            setSlideVar( $elem.el );
            newMode = _util.getSlideMode( slideElemVar );
            oldMode = _util.getSlideMode( slideElemVar );
            makeModeFn();
            addEvent();
            self.slideInit( $elem );
            if ( $elem.indicator.length > 0 ) {
                indicator = new window[sitename].APPS.SLIDE.INDICATOR.MAKE( $elem, slideElemVar);
                indicator.init();
                $elem.indi.eq(0).addClass(activeClass);
            }
            modeAddEvent();
            slideElemVar.oldModeIdx = slideElemVar.modeidx;

        };
    };

})(jQuery);
