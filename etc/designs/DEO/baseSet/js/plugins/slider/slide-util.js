
window[sitename].APPS.SLIDE = window[sitename].APPS.SLIDE || {};

/* slide util module */
(function($){
    var self = window[sitename].APPS.SLIDE;
    var autoTimer = null;
    self.UTIL = {

        slideDomElementMapping : function( $el ){
            var $slideElement = {};
            $slideElement.el = $el;
            $slideElement.content = $slideElement.el.find('.ui-slide-content');
            $slideElement.ul = $slideElement.content.find('ul');
            $slideElement.li = $slideElement.ul.find('li');
            //$slideElement.lilink = $slideElement.li.find('a');
            $slideElement.innerDiv = $slideElement.li.find('.ui-slide-inner');
            $slideElement.autoControl = $slideElement.el.find('.ui-slide-autoControl');
            $slideElement.playbtn = $slideElement.autoControl.find('.ui-slide-play');
            $slideElement.stopbtn = $slideElement.autoControl.find('.ui-slide-stop');
            $slideElement.control = $slideElement.el.find('.ui-slide-control');
            $slideElement.direct = $slideElement.el.find('.ui-slide-direct');
            $slideElement.nextbtn = $slideElement.direct.find('.ui-slide-next');
            $slideElement.prevbtn = $slideElement.direct.find('.ui-slide-prev');
            $slideElement.indicator = $slideElement.control.find('.ui-slide-indicator');
            $slideElement.indi = $slideElement.indicator.find('button');

            return $slideElement;
        },
        getSlideMode : function ( slideElemVar ){
            var mode = ( typeof slideElemVar.slideType == "object" ) ? slideElemVar.slideType[ slideElemVar.modeidx ] : slideElemVar.slideType;
            return mode;
        },
        getDataRetrun : function( data ){
            var retrunData = null;
            if(typeof data  == "number") {
                retrunData = data;
                return retrunData
            } else {
                if(data.indexOf(',') ) {
                    retrunData = data.split(',');
                } else {
                    retrunData = data;
                }
            }
            return retrunData;
        },
        getDeviceArrIdx : function( mode ){
            var num = null;
            switch(mode) {
                case "web":
                    num = 2;
                    break;
                case "tablet":
                    num = 1;
                    break;
                case "mobile":
                    num = 0;
                    break;
                default :
                    num = 2;
            }
            return num;
        },
        getActiveIndex : function( $el, $target ){
            return $el.index( $target );
        },
        retrunReduce : function (idx, arr){
            var q = idx;
            function cc(p, c, s, o){
                var n = c+(q+1);
                var len = o.length;
                p.push( ( n > len ) ? n - len : n );
                return p;
            }
            var b = arr.reduce(cc, []);
            return b;
        },
        domArrMake : function( $target ){
            var arr = new Array();
            $target.each(function(){
                arr.push( $(this)[0].outerHTML )
            });
            return arr;
        },
        domReMake :function (arr, modeLen){
            var listLen = arr.length;
            var innerLen = Math.ceil( listLen / modeLen );
            var listDom = "";
            var statNum = 1;

            for (var i=0; i < innerLen; i++) {
                listDom += "<li data-slide-id='"+ i +"' data-inner-colum='" + modeLen + "'>";
                for( var j = statNum; j <= listLen; j++ ) {
                    if ((j % modeLen) === 0){
                        listDom += arr[j-1];
                        statNum = j + 1;
                        break;
                    }

                    listDom += arr[j-1];
                }
                listDom += "</li>"
            }
            return listDom;

        },


        domMakeAppend : function( $elem, domArr, nowInnerLen, setElem, callback){
            $elem.li.remove();
            $elem.ul.append( self.UTIL.domReMake( domArr, nowInnerLen ) );
            $elem.li = $elem.ul.find('li');
            $elem.innerDiv = $elem.li.children('div');
            setElem();

            if(callback != undefined) {
                callback();
            }
        },
        makeSwipeEvt : function(nextEvt, prevEvt){

            function swipeStatus(event, phase, direction, distance, duration) {
                if (phase == "move" && (direction == "left" || direction == "right")) {
                } else if ( phase == "cancel" || phase =="end"){
                    if(distance>75){
                        if (direction == "right"){
                            prevEvt();
                        } else if (direction == "left"){
                            nextEvt();
                        }
                    }
                }
            }

            function tabEvent(event,target){
                if(event.type == 'touchend'){
                    if($(target).closest('a').attr('href')){
                        location.href= $(target).closest('a').attr('href');
                    }
                }
            }

            var swipeObj = {
                triggerOnTouchEnd : true,
                tap : tabEvent,
                swipeStatus : window[sitename].VARS.IS_MOBILE && swipeStatus,
                allowPageScroll:"vertical",
                threshold:80,
                excludedElements : []
            };

            return swipeObj;
        },
        autoPlay : function( fn ) {
            clearInterval(autoTimer);
            autoTimer = setInterval(function () {
                fn();
            }, 5000);
        },
        autoStop : function(){
            clearInterval(autoTimer);
        },
        autoHandler : function( e ) {
            var fn = e.data.fn;
            if(e != undefined) {
                if(e.type=="keydown" && e.keyCode != 13) return;
                e.preventDefault();
                e.data.elem.stopbtn.css('display', "block").focus();
                e.data.elem.playbtn.css('display',"none");
            }
            self.UTIL.autoPlay( fn );
        },
        stopHandler : function( e ){
            if(e != undefined) {

                if(e.type=="keydown" && e.keyCode != 13) return;
                console.log("check 2");
                e.preventDefault();
                e.data.elem.playbtn.css('display',"block").focus();
                e.data.elem.stopbtn.css('display',"none");
            }
            self.UTIL.autoStop();

        }
    }
})(jQuery);
