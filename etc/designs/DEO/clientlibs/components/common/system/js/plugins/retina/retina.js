;(function($,window,document,undefined) {
	"use strict";

	(function(pluginName){

		var defaults = {
			'item' : '.retinaimg',
			'type' : 'image',
			'maxMobile' : window[sitename].VARS.IS_SIZE.MAXMOBILE || 768 ,
			'maxTablet' :  window[sitename].VARS.IS_SIZE.MAXTABLET || 1023
		};

		$.fn[pluginName] = function(options, settings) {
			settings = $.extend(true, {}, defaults, settings);

			var imgSrc = [];

			var _var = {
				itemLen : 0,
				viewType : 'mobile',
				oldViewType  : '',
				initFlag : true
			};

			if(options != undefined) {
				settings.item = ( options.item != undefined ) ? options.item : settings.item;
				settings.type = ( options.type != undefined ) ? options.type : settings.type;
			}

			window[sitename].MDOBJ.VIEWPORT();
			window[sitename].MDOBJ.CHECKMOBILE();

			return this.each(function(){
				var elem = this;
				var $item = (settings.item != ".retinaimg") ? $(options.item) : $(settings.item);
				_var.itemLen = $item.length;

				/**
				 * 단말기 구분은 기본적으로
				 * document.documentElement.clientWidth와 userAgent값을 가져와서 구분
				 */

				this.init = function () {
					window[sitename].MDOBJ.DEVICECHECK();
					this.RetinaReplace();
					if(settings.type == "image") {
						this.ChangeBandImgSrc();
					} else {
						this.ChangeBandBgSrc();
					}
				};


				/**
				 * 레티나 3x 이미지까지 고려
				 * 필요없는 경우 조정해서 이미지 개수 최소화
				 * 기본으로(아이폰6plus까지) pc 이미지 1개와 모바일 태블릿 이미지 3씩 준비 총 7장의 이미지가 필요함
				 * 맥북 레티나까지 고려와 @4x 까지 전체적으로 고려시 총 12장의 이미지가 필요
				 */

				this.RetinaReplace = function(){
					$item.each(function (index) {
						var $this = $(this);
						if(window[sitename].VARS.IS_VIEWTYPE != 'web' && window.devicePixelRatio != undefined) { // 일반적인 pc사용시

//				if(window.devicePixelRatio != undefined) { // 맥북 레티나 고려시
							if ($this.data(window[sitename].VARS.IS_VIEWTYPE).indexOf('@') != -1) {
								//if (window.devicePixelRatio >= 4) {
								//	imgSrc[index] = $this.data(viewType).replace(/\@1x/g, '@4x');
								//} else /* 4x 이미지 필요시 활성화 */
								if(window.devicePixelRatio >= 3) {
									imgSrc[index] = $this.data(window[sitename].VARS.IS_VIEWTYPE).replace(/\@1x/g, '@3x');
								} else if (window.devicePixelRatio >= 2) {
									imgSrc[index] = $this.data(window[sitename].VARS.IS_VIEWTYPE).replace(/\@1x/g, '@2x');
								} else if (window.devicePixelRatio >= 1 ) {
									imgSrc[index] = $this.data(window[sitename].VARS.IS_VIEWTYPE);
								}
							} else {
								imgSrc[index] = $this.data(window[sitename].VARS.IS_VIEWTYPE);
							}
						} else {
							imgSrc[index] = $this.data(window[sitename].VARS.IS_VIEWTYPE);
						}
					});
				};

				this.ChangeBandImgSrc = function(){
					if (_var.initFlag || _var.oldViewType != window[sitename].VARS.IS_VIEWTYPE) {
						var $img = [];
						$item.each(function (index) {
							$img[index] = $item.eq(index);
							$img[index].attr('src', imgSrc[index]);
						});
						_var.initFlag = false;
						_var.oldViewType = window[sitename].VARS.IS_VIEWTYPE;
					}
				};

				this.ChangeBandBgSrc = function(){
					if (_var.initFlag || _var.oldViewType != window[sitename].VARS.IS_VIEWTYPE) {
						var $img = [];
						$item.each(function (index) {
							$img[index] = $item.eq(index);
							$img[index].css('backgroundImage', 'url(' + imgSrc[index] +')');
						});
						_var.initFlag = false;
						_var.oldViewType = window[sitename].VARS.IS_VIEWTYPE;
					}
				};

				$(window).resize(function(){
					if (_var.itemLen > 0) {
						window[sitename].MDOBJ.VIEWPORT();
						window[sitename].MDOBJ.CHECKMOBILE();
						window[sitename].MDOBJ.DEVICECHECK();
						elem.RetinaReplace();
						if(settings.type == "image") {
							elem.ChangeBandImgSrc();
						} else {
							elem.ChangeBandBgSrc();
						}

					}
				});
				this.init();
			});
		};
		$.fn[pluginName].defaults = defaults;
	})('RetinaImg');
})(jQuery,window,document,undefined);

(function($){
	"use strict";

	// 디바이스별 이미지 변경
	$(document).ready( retinareplace );

	function retinareplace(){
		var $reitnaItem = $('.retinaimg');
		var $bgClass = $('.background-change');
		
		if($reitnaItem.length > 0) {
			$reitnaItem.RetinaImg();
		}
		
		if($bgClass.length > 0) {
			$bgClass.RetinaImg({
				"item" : ".background-change",
				"type" : "background"
			});
		}
	}

})(jQuery);