window[sitename].APPS.PARALLAX  = window[sitename].APPS.PARALLAX || {};


(function($){
    var self = window[sitename].APPS.PARALLAX;
    self.util = {
        getOffset : function( $elem ){
            var arr = [];
            $elem.each(function( idx ){
                arr[idx] = $(this).offset().top;
            });
            return arr;
        },
        getTargetIdx : function( arr, scrollTop ){
            var idx;
            for(var i = 0, len = arr.length; i < len; i++) {
                if (arr[i] >= scrollTop && arr[i-1] <= scrollTop ) { idx = i; }
            }
            return idx;
        },
        beforeSetCss : function( $elem, arr, cssarr ){
            for( var i = 0, len = arr.length; i < len; i++ ) {
                if(arr[i] == "section" || arr[i] == null ) return;
                $elem.eq(i).css( cssarr[i] )
            }
        },
        getDataToObject : function ( $el, dataName ){
            var htmlVar = $el.data( dataName );
            var elemVarArr = [];
            if((htmlVar.indexOf(',') > -1)) {
                elemVarArr = htmlVar.split(',');
            } else {
                elemVarArr[0] = htmlVar;
            }
            var objectArr;
            var elemVar = {};

            for( var i = 0, len=elemVarArr.length; i < len; i++ ) {
                elemVarArr[i] = elemVarArr[i].replace(" ", "");
                objectArr = elemVarArr[i].split(":");
                elemVar[objectArr[0]] = objectArr[1];
            }
            return elemVar;
        },

        getMoveTime : function( $el, scrollTop, idx, arr){
            var $win = $(window);
            var midCenter= parseInt($win.height() / 2) + scrollTop;
            var $target = $el.eq( idx );
            for (var i = 0, len = $el.length; i < len; i++) {
                arr[i] = false;
            }
            
            if($target.offset().top < midCenter && midCenter < $target.offset().top + $target.height()) {
                arr[idx]= true;
            }
            return arr;
        }
    };

})(jQuery);