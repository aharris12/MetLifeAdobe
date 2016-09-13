window[sitename].APPS.PARALLAX.animations = window[sitename].APPS.PARALLAX.animations || {};

(function($){
    var self = window[sitename].APPS.PARALLAX;
    var $win = $(window);
    var _util = self.util;
    var tween = tween || {};
    var movingTime = [];

    self.animations.element = function ( $el, options ) {
        var moveObj = {};
        moveObj.scrollTop = $win.scrollTop();
        moveObj.offsetArr = _util.getOffset( $el );
        moveObj.idx = _util.getTargetIdx( moveObj.offsetArr, moveObj.scrollTop );
        moveObj.elem = $el.eq( moveObj.idx ).find( options.innerElement );
        moveObj.factor = options.speedFactor;

        var $elSection = $el.eq( moveObj.idx );
        var triggerPoint = parseInt($win.height() / 2) + moveObj.scrollTop;
        var secHeight = $elSection.height();
        var secOffsetTop = $elSection.offset().top;

        

        //console.log( moveObj.elem.data('moveTo') )
        var elemVar = _util.getDataToObject( moveObj.elem, "moveTo" );
        movingTime = _util.getMoveTime( $el, moveObj.scrollTop, moveObj.idx, movingTime );

        function animation( moveObj, moveVar){
            if(tween[ moveObj.idx ] == undefined) { tween[ moveObj.idx ] = new TimelineLite(); }
            tween[ moveObj.idx ].to(moveObj.elem, 1, moveVar);
        }

        // +console.log(moveObj.idx)
        
        if( !movingTime[ moveObj.idx ] && triggerPoint > secOffsetTop + secHeight ) {
            moveObj.elem.css( elemVar )
        }
        
        if( !movingTime[ moveObj.idx ] ) return;
        animation( moveObj, elemVar );
    };

})(jQuery);


