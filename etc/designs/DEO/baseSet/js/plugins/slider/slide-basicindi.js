window[sitename].APPS.SLIDE.SLIDEEFFECT = window[sitename].APPS.SLIDE.SLIDEEFFECT || {};

(function($){

    var self = window[sitename].APPS.SLIDE.SLIDEEFFECT;
    var _util = window[sitename].APPS.SLIDE.UTIL;
    self.basicindi = self.basicindi || {};
    self.basicindi = function( $el, vars ){
        var self = this;
        var $win = $(window);
        var autoTimer;
        var $elem = $el;
        var extendSlide;                            // basic slider
        var extendIndicator;                        // basic slider
        var nowidx=0,
            oldidx=null;
        var activeClass = "indi-active";
        var $prevControl = $elem.content.prev( $elem.control );
        var $prevNextbtn = $prevControl.find( $elem.nextbtn );
        var prevNextbtnLen = $prevNextbtn.length;
        var prevNextbtn = ( prevNextbtnLen > 0 ) ? true : false;


        function nextBtntriggerFn () {
            $elem.nextbtn.trigger("click")
        }

        this.autoPlay = function( status ) {
            var callback = nextBtntriggerFn;
            clearInterval( autoTimer );
            _util.autoPlay( callback );
			if( !status ) {
				$elem.playbtn.css('display', 'none');
				$elem.stopbtn.css('display', 'block');
			}
        };

        this.autoStop = function(){
            _util.autoStop();
            $elem.stopbtn.css('display','none');
            $elem.playbtn.css('display','block');
        };

        function indiReset( event ) {
            if (extendSlide.var.modeidx != extendSlide.var.oldModeIdx) {
                $elem.li = $elem.ul.find('li');
                nowidx=0;
                oldidx=null;
                extendIndicator.indiMakeDispatch( extendSlide.var.modeidx );
                $elem.indi = $elem.indicator.find('button');
                $elem.indi.eq(0).addClass(activeClass);
                if( !event ) {
                    indiEvent();
                    kwcagAddEvent.indiAddEvt();
                    kwcagAddEvent.liAddEvt();
                }
                extendSlide.var.oldModeIdx = extendSlide.var.modeidx
            }

        }

        function resizeSet (e) {
            extendSlide.setDesigin();
            extendSlide.var.modeidx = _util.getDeviceArrIdx( window[sitename].VARS.IS_VIEWTYPE );
            if( extendSlide.var.auto ) {
                self.autoPlay()
            }
            if (extendSlide.var.modeidx == extendSlide.var.oldModeIdx) {
                extendSlide.setVars();
                extendSlide.var.auto = $elem.el.data("slideAuto");
                extendSlide.setDesigin();
            } else {
                extendSlide.var.auto = $elem.el.data("slideAuto");
                extendSlide.resizeSet(e, indiReset);
            }

            //extendSlide.var.oldModeIdx = extendSlide.var.modeidx;

        }

        function getDirect() {
            if(nowidx > oldidx) {
                extendSlide.var.direct = "next"
            } else if(nowidx < oldidx){
                extendSlide.var.direct = "prev"
            }
        }

        function domSort( idx ) {
            var arr = [];
            var sortArr;
            $elem.li.each(function(idx){
                arr.push(idx)
            });
            sortArr = _util.retrunReduce( idx, arr );
            return sortArr
        }

        function aniComplete($el, idx) {
            var sortArr = domSort( nowidx );

            if(extendSlide.var.direct == "next" ) {
                $elem.ul.append($el);
                $elem.li = $elem.ul.find('li');
                $el.css("marginLeft", 0);
            }

            for( var i=0; i < $elem.li.length; i++ ) {
                $elem.ul.append( $elem.ul.find('li[data-slide-id='+ parseInt(sortArr[i]-1) +']') )
            }

            $elem.li = $elem.ul.find('li');
            extendSlide.var.isFlag = false;
        }

        function nextBefore(e){
            if(extendSlide.var.auto) {
                _util.autoStop();
            }

            $elem.li = $elem.ul.find('li');
            var $firstEl = (oldidx == null) ? $elem.li.eq(0) : $elem.ul.find('li[ data-slide-id='+ oldidx +' ]');
            var $secEl = $elem.ul.find('li[ data-slide-id='+ nowidx +' ]');
            $firstEl.after( $secEl );
            if( extendSlide.var.isFlag ) {
                extendSlide.nextFn( e, aniComplete, nowidx, oldidx );
            } else {
                extendSlide.nextFn( e, aniComplete, nowidx);
            }
        }

        function prevBefore(e){
            if(extendSlide.var.auto) {
                self.autoStop();
            }
            $elem.li = $elem.ul.find('li');
            var targetIdx = ( extendSlide.var.isFlag ) ? nowidx : nowidx ;
            var $target = $elem.ul.find('li[ data-slide-id='+ targetIdx +' ]');
            $elem.ul.prepend( $target );
            extendSlide.prevFn( e, aniComplete, nowidx, nowidx);
        }

        function elemAddClass( $el, idx, className){
            $el.removeClass( className );
            $el.eq(idx).addClass( className )
        }

        function directSlide(e, idx){
            var $this = $(this);
            nowidx = $this.index();
            if( oldidx == nowidx ) return;
            elemAddClass( $elem.indi, nowidx, activeClass );
            getDirect();
            if(extendSlide.var.direct == "next") { nextBefore(e); } else { prevBefore(e); }
            oldidx = nowidx;
        }

        function nextBtnFn(e){
            if(extendSlide.var.auto) {
                self.autoPlay();
                $elem.playbtn.css('display','none');
                $elem.stopbtn.css('display','block');
            }
            $elem.li = $elem.ul.find('li');
            nowidx = ( nowidx + 1 > extendSlide.var.len - 1 ) ? 0 : nowidx + 1;
            nowidx = ( nowidx >= extendSlide.var.len ) ? 0 : nowidx ;
            elemAddClass( $elem.indi, nowidx, activeClass );
            extendSlide.nextFn( e, aniComplete, nowidx, oldidx );
            //if(extendSlide.var.isFlag && oldidx == extendSlide.var.len -1 && nowidx == 0) {
            if(extendSlide.var.isFlag ) {
                var $flagFirstEl = $elem.ul.find('li[data-slide-id='+ oldidx +']');
                var $flagAppendEl = $elem.ul.find('li[data-slide-id='+ nowidx +']');
                $flagFirstEl.after( $flagAppendEl );
            }
            oldidx = nowidx;
        }

        function prevBtnFn(e) {
            if(extendSlide.var.auto) {
                self.autoPlay();
                $elem.playbtn.css('display','none');
                $elem.stopbtn.css('display','block');
            }
            $elem.li = $elem.ul.find('li');
            nowidx = ( nowidx - 1 < 0 ) ? extendSlide.var.len - 1 : nowidx - 1;
            elemAddClass( $elem.indi, nowidx, activeClass );
            TweenMax.killTweensOf( $elem.li.eq(0) );
            if(extendSlide.var.isFlag ) {
                extendSlide.prevFn( e, aniComplete, nowidx, nowidx );
            } else {
                extendSlide.prevFn( e, aniComplete, nowidx );
            }

            oldidx = nowidx;
        }

        function indiEvent(){
            $elem.indi.on('click', directSlide);
        }

        var kwcagHandler = {
            indiFocusEvt : function(e){
                if(extendSlide.var.auto) {
                    self.autoStop();
                }
                $elem.indi.removeAttr('tabindex');
            },
            indiFocusoutEvt : function(e){
                if(extendSlide.var.auto) {
                    self.autoPlay( true );
                }
                $elem.li.find('a').attr('tabindex', '-1');
                $elem.indi.attr('tabindex','-1');
            },
            indiKeydownEvt : function(e){
                var $this = $(this);
                var thisIdx = $elem.indi.index( $this );

                if( e.shiftKey && e.keyCode == 9 ){
                    e.preventDefault();
                    if (thisIdx == 0) {
                        $elem.prevbtn.focus()
                    } else {
                        $elem.li.find('a').removeAttr('tabindex');
                        extendSlide.prevFn( e );
                        elemAddClass( $elem.indi, thisIdx-1, activeClass );
                        $elem.ul.find('li[data-slide-id='+ parseInt(thisIdx-1) +']>div:last-child>a').focus();
                        nowidx = thisIdx - 1;
                        oldidx = thisIdx - 1;
                    }
                } else if( e.keyCode == 9 ) {
                    e.preventDefault();
                    $elem.ul.find('li[data-slide-id='+ thisIdx +']>div:first-child>a').focus();
                    $elem.li.find('a').removeAttr('tabindex');
                }
            },
            nextKeydownEvt : function(e){
                if( e.shiftKey && e.keyCode == 9 ){
                    var indiLen = $elem.indi.length;
                    $elem.li.find('a').removeAttr('tabindex');
                    $elem.indi.removeAttr('tabindex');
                    _util.domMakeAppend( $elem, extendSlide.domArr, extendSlide.var.nowInnerLen, extendSlide.setVars);
                    //extendSlide.domMakeSet();
                    extendSlide.setDesigin();
                    kwcagAddEvent.liAddEvt();
                    extendSlide.prevFn(e);
                    e.preventDefault();
                    elemAddClass( $elem.indi, indiLen-1, activeClass );
                    nowidx = indiLen - 1;
                    oldidx = indiLen - 1;
                    $elem.indi.eq(indiLen-1).focus();
                } else if( e.keyCode == 9 ) {
                    kwcagHandler.indiFocusoutEvt();
                }
            },
            prevKeydownEvt : function(e){

                if( e.shiftKey && e.keyCode == 9 ){
                } else if( e.keyCode == 9 ) {
                    if(extendSlide.var.auto) { self.autoStop(); }

                    e.preventDefault();
                    extendSlide.setVars();
                    _util.domMakeAppend( $elem, extendSlide.domArr, extendSlide.var.nowInnerLen, extendSlide.setVars);
                    //extendSlide.domMakeSet();
                    extendSlide.setDesigin();
                    kwcagAddEvent.liAddEvt();
                    $elem.li = $elem.ul.find('li');
                    $elem.indi = $elem.indicator.find('button');
                    $elem.indi.removeAttr('tabindex');
                    extendSlide.var.auto = $elem.el.data("slideAuto");
                    if(extendSlide.var.auto) {
                        $elem.autoControl.find('button').focus();
                    } else {
                        $elem.indi.eq(0).focus();
                    }


                    elemAddClass( $elem.indi, 0, activeClass );
                    oldidx = 0;
                }
            },
            liLnkKeydownEvt : function(e){
                var $this = $(this);
                var $thisli = $this.closest('li');
                var $thisDiv = $this.closest( $elem.innerDiv );
                var thisliIdx = $thisli.data('slideId');
                var listInnerTotLen = $elem.li.find( $elem.innerDiv ).length;
                var thisInnerIdx = $elem.innerDiv.index( $thisDiv );

                $elem.li.find('a').removeAttr('tabindex');
                $elem.indi.removeAttr('tabindex');
                if( e.shiftKey && e.keyCode == 9 ){
                    if( $thisDiv.index() == 0 ) {
                        if( thisliIdx != 0 ) {
                            //extendSlide.prevFn( e );
                            e.preventDefault();
                            elemAddClass( $elem.indi, thisliIdx, activeClass );
                            $elem.indi.eq( thisliIdx ).focus();
                            nowidx = thisliIdx - 1;
                            oldidx = thisliIdx - 1;
                        } else {
                            e.preventDefault();
                            $elem.prevbtn.focus()
                        }
                    }
                } else if( e.keyCode == 9 ) {
                    if( $thisDiv.index() == extendSlide.var.nowInnerLen - 1 ) {

                        if(listInnerTotLen - 1 != thisInnerIdx ) {
                            nowidx = thisliIdx;
                            nextBtnFn( e );
                            e.preventDefault();
                            $elem.indi.eq( thisliIdx+1 ).focus();

                            nowidx = thisliIdx + 1;
                            oldidx = thisliIdx + 1;
                        } else {
                            e.preventDefault();
                            $elem.li.find('a').attr('tabindex','-1');
                            $elem.nextbtn.focus();
                            if ( prevNextbtn ) {
                                e.preventDefault();
                                $prevNextbtn.focus()
                            }
                        }
                    }
                }
            },
            liLnkfocusEvt : function(){
                if(extendSlide.var.auto) {
                    self.autoStop();
                }
                $elem.li.find('a').removeAttr('tabindex');
                $elem.indi.removeAttr('tabindex');
            },
            liLnkfocusOutEvt : function(){
                if(extendSlide.var.auto) {
                    self.autoPlay();
                    $elem.playbtn.css('display','none');
                    $elem.stopbtn.css('display','block');
                }
                $elem.li.find('a').attr('tabindex','-1');
                $elem.indi.attr('tabindex','-1');
            }
        };

        var kwcagAddEvent = {
            liAddEvt : function(){
                $elem.li.find('a').attr('tabindex','-1');
                $elem.li.find('a').on('keydown', kwcagHandler.liLnkKeydownEvt);
                $elem.li.find('a').on('focus', kwcagHandler.liLnkfocusEvt);
                $elem.li.find('a').on('focusout', kwcagHandler.liLnkfocusOutEvt);
            },
            indiAddEvt : function(){
                $elem.indi.attr('tabindex','-1');
                $elem.indi.on('keydown', kwcagHandler.indiKeydownEvt);
                $elem.indi.on('focus', kwcagHandler.indiFocusEvt);
                $elem.indi.on('focusout', kwcagHandler.indiFocusoutEvt);
            },
            btnAddEvt : function(){
                $elem.nextbtn.on('keydown', kwcagHandler.nextKeydownEvt);
                //$elem.nextbtn.on('focusout', kwcagHandler.indiFocusoutEvt);
                $elem.prevbtn.on('keydown', kwcagHandler.prevKeydownEvt);
                //$elem.prevbtn.on('focusout', kwcagHandler.indiFocusoutEvt);
            },
            kwacgAllEvt : function(){
                this.liAddEvt();
                this.indiAddEvt();
                this.btnAddEvt();
            }
        };

        this.addEvent = function(){
            $elem.nextbtn.on('click', nextBtnFn);
            $elem.prevbtn.on('click', prevBtnFn);
            var swipeOptions = _util.makeSwipeEvt( nextBtnFn, prevBtnFn );
            $elem.ul.swipe( swipeOptions );
            $win.on('resize', resizeSet);
            indiEvent();
            kwcagAddEvent.kwacgAllEvt();
            if(extendSlide.var.auto) {
                autoPlayEvent();
            }
        };

        function autoPlayEvent() {
            $elem.playbtn.on('click keydown', { elem : $elem, fn : nextBtntriggerFn }, _util.autoHandler);
            $elem.stopbtn.on('click keydown', { elem : $elem }, _util.stopHandler);
        }

        this.removeEvent = function(){
            $elem.indi.off('click');
            $elem.nextbtn.off('click');
            $elem.prevbtn.off('click');

            $elem.nextbtn.off('keydown');
            $elem.prevbtn.off('keydown');

            $elem.li.find('a').off('keydown');
            $elem.li.find('a').off('focus');
            $elem.li.find('a').off('focusout');

            $elem.indi.off('keydown');
            $elem.indi.off('keydown');
            $elem.indi.off('focus');
            $elem.indi.off('focusout');

            $elem.ul.swipe( 'disable' );
            $win.off('resize', resizeSet);
            if(extendSlide.var.auto) {
                $elem.playbtn.off('click keydown');
                $elem.stopbtn.off('click keydown');            }
        };

        this.init = function() {
            extendSlide = new window[sitename].APPS.SLIDE.SLIDEEFFECT.basic( $elem, vars );
            extendSlide.init( true );
            extendSlide.setVars();
            extendIndicator = new window[sitename].APPS.SLIDE.INDICATOR.MAKE( $elem, vars);
            extendIndicator.init();
            $elem.indi.eq(0).addClass(activeClass);
            oldidx = 0;
            extendSlide.setVars();
            extendSlide.setDesigin();
            extendSlide.var.auto = $elem.el.data("slideAuto");
            if(extendSlide.var.auto) {
                $elem.playbtn.css('display',"none");
                self.autoPlay();
            } else {
                $elem.autoControl.remove();
            }
        };

    }


})(jQuery);

