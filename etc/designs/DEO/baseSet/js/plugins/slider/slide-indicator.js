window[sitename].APPS.SLIDE.INDICATOR = window[sitename].APPS.SLIDE.INDICATOR || {};

(function($){

    var self = window[sitename].APPS.SLIDE.INDICATOR;
    var _util = window[sitename].APPS.SLIDE.UTIL;

    self.MAKE = function($el, vars, exVar){
        var self = this;
        var $win = $(window);
        var $elem = $el,
            slideElemVar = vars;
        var type = [];
        var indiText;
        
        function numberSet (modeidx, arr, len){

            var dataLen = _util.getDataRetrun( $el.el.data('slideViewlen') );
            var modeLen = ( modeidx != undefined ) ? dataLen[ modeidx ] : dataLen[ slideElemVar.modeidx ];
            var listLen = (arr != undefined) ? arr.length : Math.ceil( $el.innerDiv.length / modeLen );
            var innerLen = (len != undefined) ? Math.ceil( listLen / modeLen ) : Math.ceil( $el.innerDiv.length / modeLen );
            var numHtml = '';
            for(var i = 0; i < innerLen; i++) {
                numHtml +='<button type="button">' + parseInt(i+1) +' '+ indiText + '</button>';
            }

            //console.log(modeidx != undefined);

            $elem.indi.remove();
            $elem.indicator.append( numHtml );
            $elem.indi = $elem.indicator.find('button');
        }

        function noneSet (){
            $elem.indi.remove();
        }

        function htmlSet (){
            console.log("html")
        }

        this.indiMakeDispatch = function( modeidx, arr, len ) {
            if ( slideElemVar.oldModeIdx == modeidx ) return;
            var calltype;
            if( arr != undefined ) { type = arr }
            if( type.length <= 0 ) { calltype = type[0]; } else { calltype = type[modeidx]; }
            
            switch (calltype) {
                case 'number' :
                    numberSet(modeidx, arr, len);
                    break;
                case 'none' :
                    noneSet();
                    break;
                case 'html' :
                    htmlSet();
                    break;
            }
            slideElemVar.oldModeIdx = modeidx;
        };

        this.init = function(){
            indiText = $elem.indicator.data("indiI18ntxt");
            type = _util.getDataRetrun( $elem.indicator.data('indiType') );
            self.indiMakeDispatch( slideElemVar.modeidx );
        }
    }

})(jQuery);