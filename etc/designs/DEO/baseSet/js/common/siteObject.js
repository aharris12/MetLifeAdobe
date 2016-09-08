/**
 *
 *	authore : Moon
 *  date : 2016.02.16
 *  description : namespace / common vars & libs
 *
 *  editor
 *  V : 1.0.0 / A : Moon / T : 2016.02.16 / G : 작업시작
 *
 */


var sitename = "DEO";

window[sitename] = window[sitename] || {};                                      // NAMESPACE 지정
window[sitename].VARS = window[sitename].VARS || {};                            // 공통 변수 OBJECT
window[sitename].VARS.VIEWPORT_WIDTH = null;                                    // WIDTH
window[sitename].VARS.VIEWPORT_HEIGHT = null;                                   // HEIGHT
window[sitename].VARS.IS_MOBILE = null;                                         // 모바일 변수
window[sitename].VARS.IS_IE8 = ( $('html').hasClass('ie8') ) ? true : false;    // IE8 체크
window[sitename].VARS.IS_SIZE = window[sitename].VARS.IS_SIZE || {};            // 반응형시 SIZE OBJECT
window[sitename].VARS.IS_SIZE.MAXMOBILE = 768;                                  // 반응형시 MOBILE 최대값
window[sitename].VARS.IS_SIZE.MAXTABLET = 1024;                                 // 반응형시 TABLET 최대값

window[sitename].APPS = window[sitename].APPS || {};                            // 공통 라이브러리
window[sitename].MDOBJ = window[sitename].MDOBJ || {};                            // 공통 모듈
