window[sitename].APPS.SLIDE.SLIDEEFFECT = window[sitename].APPS.SLIDE.SLIDEEFFECT || {};

(function($){

    var self = window[sitename].APPS.SLIDE.SLIDEEFFECT;
    var _util = window[sitename].APPS.SLIDE.UTIL;
    self.basicOpaicy  = self.basicOpaicy  || {};
    self.basicOpaicy  = function( $el, vars ){
        var self = this;
        var $win = $(window);
        var $elem = $el,
            slideElemVar = vars;                    // elements option vars
        this.domArr = [];
        this.var = {};
        var $moveElem, $oldElem = null;
        var autoTimer = null;
        var basicSpeed = 1.2;
        var index = 0;

        this.setDesigin = function() {
            $elem.li.css({ 'width': self.var.slideWidth });
            $elem.innerDiv.css({'width':self.var.slideWidth / self.var.nowInnerLen});
            $elem.content.css({ 'height': $elem.li.height() });
            $elem.el.css('opacity',1);
        };

        this.setVars = function(){
            self.var.modeidx = _util.getDeviceArrIdx( window[sitename].VARS.IS_VIEWTYPE );
            self.var.slideWidth = $elem.el.width();
            self.var.isFlag = false;
            self.var.len = $elem.li.length;
            self.var.speed = basicSpeed;
            self.var.nowInnerLen = (typeof slideElemVar.viewLen != "number") ? slideElemVar.viewLen[ self.var.modeidx ] : slideElemVar.viewLen;
            self.var.auto = ( $elem.el.data("slideAuto") && !extendtype) ? true : false;
        };

        function viewElemli( idx ){
            $elem.li.css('opacity','0');
            $elem.li.eq(idx).css('opacity','1');
        }
        


        function domMake(){
            if (self.var.nowInnerLen == self.var.oldInnerLen) return;
            _util.domMakeAppend( $elem, self.domArr, self.var.nowInnerLen, self.setVars);
            $elem.li = $elem.ul.find('li');
            self.var.oldInnerLen = self.var.nowInnerLen;
        }

        function aniComplete() {
            self.var.isFlag = false;
        }

        this.openani = function( $target ) {
            $moveElem = ( $target != undefined ) ? $target : $moveElem;
            $elem.ul.prepend( $moveElem );
            TweenMax.killTweensOf($moveElem);
            TweenMax.to($moveElem, self.var.speed, { opacity: 1, ease: Expo.easeOut, onComplete : aniComplete});

        };

        this.closeani = function( $target ) {
            if(self.var.isFlag) {
                TweenMax.killTweensOf($oldElem);
                $oldElem.css('opacity','0');
            }
            TweenMax.killTweensOf($target);
            TweenMax.to($target, self.var.speed, { opacity: 0, ease: Expo.easeOut});
            $oldElem = $target;
        };

        function nextfn( e, idx ){
            self.closeani( $elem.li.eq( index ) );
            self.var.isFlag = true;
            index = ( idx == undefined ) ? index + 1 : idx;
            index = ( self.var.len <= index ) ? 0 : index;
            $moveElem = $elem.ul.find('li[data-slide-id='+ index +']');
            self.openani();
        }

        function prevfn( e, idx ){
            self.closeani( $elem.li.eq( index ) );
            self.var.isFlag = true;
            index = ( idx == undefined ) ? index - 1 : idx;
            index = ( 0 > index ) ? self.var.len-1 : index;
            $moveElem = $elem.ul.find('li[data-slide-id='+ index +']');
            self.openani();
        }

        var kwcagHandler = {
            lnkKeydownEvt : function( e ){
                var $this = $(this);
                var thisIdx = $elem.li.innerDiv.index( $this.closest('div') );
                console.log( $this );
            }
        };

        var kwcagEvent = {
            addEvent : function(){
                console.log("kwcag add Event");
                console.log($elem.li.find('a').html());
                $elem.li.find('a').on('click', kwcagHandler.liLnkfocusEvt);
                console.log("test");
            },
            removeEvent : function(){

            }
        };

        this.addEvent = function () {
            kwcagEvent.addEvent();
            $elem.nextbtn.on("click", nextfn);
            $elem.prevbtn.on("click", prevfn);
            self.addResizeEvent();
        };

        function resizeSet(){
            /*if(self.var.auto && !extendtype) {
                if( $elem.playbtn.css("display") == "none" ) {
                    self.autoPlay();
                } else {
                    self.autoStop();
                }
            }*/
            index = 0;
            viewElemli( index );
            self.setVars();
            domMake(false);
            self.setDesigin();
            /*if(callback != undefined) {
                callback(false);
            }*/
        }

        this.addResizeEvent = function(){
            if( typeof slideElemVar.viewLen == "number" && slideElemVar.slideType.length <= 1) return;
            $win.on('resize', resizeSet)
        };
        
        this.init = function(){
            self.domArr = _util.domArrMake( $elem.innerDiv );
            self.setVars();
            domMake();
            self.setDesigin();
            viewElemli(index);
        }

    }
})(jQuery);