/*   OnlineOpinion v5.7.2 Released: 5/17/2013. Compiled 05/17/2013 12:57:44 PM -0500 Branch: master 36f77a5a76ec82459bd577be7c1cd3093acb20ab Components: Full The following code is Copyright 1998-2013 Opinionlab, Inc.  All rights reserved. Unauthorized use is prohibited. This product and other products of OpinionLab, Inc. are protected by U.S. Patent No. 6606581, 6421724, 6785717 B1 and other patents pending. http://www.opinionlab    */var OOo={__detectBrowser:function(a){var b=Object.prototype.toString.call(window.opera)==='[object Opera]',c={IE:!!window.attachEvent&&!b,Opera:b,WebKit:a.indexOf('AppleWebKit/')>-1,Chrome:a.indexOf('Chrome')>-1,Gecko:a.indexOf('Gecko')>-1&&a.indexOf('KHTML')===-1,MobileSafari:/Apple.*Mobile.*Safari/.test(a),PalmPre:a.indexOf('Pre/')>-1,BlackBerry:a.indexOf('BlackBerry')>-1,Fennec:a.indexOf('Fennec')>-1,IEMobile:a.indexOf('IEMobile')>-1,OperaMobile:a.search(/Opera (?:Mobi|Mini)/)>-1,Kindle:a.search(/[ ](Kindle|Silk)/)>-1,ua:a},d=false;c.isMobile=(c.MobileSafari||c.PalmPre||c.BlackBerry||c.Fennec||c.IEMobile||c.OperaMobile||c.Kindle);c.isMobileNonIOS=(c.isMobile&&(!c.MobileSafari||a.search('Android')!==-1));return c}};OOo.Browser=OOo.__detectBrowser(navigator.userAgent);OOo.Cache={};OOo.instanceCount=0;OOo.K=function(){};var OnlineOpinion=OnlineOpinion||OOo;(function(){function k(a){return document.getElementById(a)}function l(a,b){var c;for(c in b){if(b.hasOwnProperty(c)){a[c]=b[c]}}return a}function m(a,b,c,d){if(a.addEventListener){a.addEventListener(b,c,d)}else if(a.attachEvent){a.attachEvent('on'+b,c)}}function r(a,b,c,d){if(a.removeEventListener){a.removeEventListener(b,c,d)}else if(a.detachEvent){a.detachEvent('on'+b,c)}}function o(a){var b=[],c;for(c in a){if(a.hasOwnProperty(c)){b.push(c+'='+(encodeURIComponent(a[c])||''))}}return b.join('&')}function t(a){var b=o(a.metrics),c=a.tealeafId+'|'+a.clickTalePID+'/'+a.clickTaleUID+'/'+a.clickTaleSID;b+='&custom_var='+OOo.createLegacyVars(a.legacyVariables,c);if(a.metrics.type==='OnPage'){b+='|iframe'}if(a.asm){b+='&asm=2'}b+="&_"+'rev=2';if(a.customVariables){b+='&customVars='+encodeURIComponent(OOo.serialize(a.customVariables))}return b}function n(a,b){var c=document,d=c.createElement('form'),e=c.createElement('input'),f=a.referrerRewrite;a.metrics.referer=location.href;if(f){a.metrics.referer=OOo.referrerRewrite(f)}d.style.display='none';d.method='post';d.target=b||'OnlineOpinion';d.action=a.onPageCard?'https://secure.opinionlab.com/ccc01/comment_card_json_4_0_b.asp?r='+location.href:'https://secure.opinionlab.com/ccc01/comment_card_d.asp';if(a.commentCardUrl){d.action=a.commentCardUrl;if(a.onPageCard){d.action+='?r='+location.href}}e.name='params';e.value=t(a);d.appendChild(e);c.body.appendChild(d);return d}function s(){return{width:screen.width,height:screen.height,referer:location.href,prev:document.referrer,time1:(new Date()).getTime(),time2:null,currentURL:location.href,ocodeVersion:'5.7.2'}}function u(a){var b='';if(a&&a.search('://')>-1){var c=a.split('/');for(i=3;i<c.length;i++){b+="/";b+=c[i]}}return b}function p(a,b){a=a||{};if(typeof a==='string'){return b+'|'+a}return a.override?a.vars:b+(a.vars?'|'+a.vars:'')}function q(a,b){if(!b){b=location}if(typeof a==="string")return a;return a.searchPattern?b.href.replace(a.searchPattern,a.replacePattern):a.replacePattern}var w=(function(){var a=document.body,b,c,d,e,f;if(document.createElement&&a&&a.appendChild&&a.removeChild){b=document.createElement('div');if(!b.getBoundingClientRect){return null}b.innerHTML='x';b.style.cssText='position:fixed;top:100px;';a.appendChild(b);c=a.style.height;d=a.scrollTop;a.style.height='3000px';a.scrollTop=500;e=b.getBoundingClientRect().top;a.style.height=c;f=(e===100);a.removeChild(b);a.scrollTop=d;return f}return null}()),x=(function(){if(navigator.appName==="Microsoft Internet Explorer"&&navigator.userAgent.search("MSIE 6")!==-1){return true}var a=document.body,b,c;if(document.createElement&&a&&a.appendChild&&a.removeChild){b=document.createElement('iframe');c=false;b.setAttribute('name','oo_test');b.style.display='none';a.appendChild(b);c=!!!document.getElementsByName('oo_test')[0];a.removeChild(b);return c}else{return null}}());function v(){OOo.$('oo_container').style.display='none'}function A(){var a=OOo.$('oo_invitation_prompt');if(a){var b=OOo.$('oo_container');this.showPrompt(b);return}var c=window.XMLHttpRequest?new XMLHttpRequest():new window.ActiveXObject("Microsoft.XMLHTTP"),d=this,e=document.createElement('link'),f;c.onreadystatechange=function(){if(c.readyState!==4){return}d.showPrompt(c.responseText)};c.open("GET",this.options.pathToAssets+this.options.promptMarkup,true);c.send(null)}function y(a,b){var c=document,d=typeof a==='string'?c.createElement('div'):a,e=c.createElement('div'),f,g,h=this.options,j;e.id='oo_invitation_overlay';d.id='oo_container';d.style.visibility='hidden';if(typeof a==='string'){d.innerHTML=a;c.body.appendChild(d)}d.appendChild(e);j=OOo.$('oo_launch_prompt');if(h.companyLogo){f=new Image();f.src=h.companyLogo;OOo.$('oo_company_logo').appendChild(f)}OOo.addEventListener(j,'click',b.bind(this),false);if(h.clickCallbacks){if(typeof h.clickCallbacks.yes==='function'){OOo.addEventListener(j,'click',function(){h.clickCallbacks.yes()},false)}if(typeof h.clickCallbacks.no==='function'){OOo.addEventListener(OOo.$('oo_no_thanks'),'click',function(){h.clickCallbacks.no()},false)}}if(h.neverShowAgainButton){g=OOo.$('oo_never_show');g.style.visibility='visible';OOo.addEventListener(g,'click',this.killPrompt.bind(this),false)}if(OOo.Browser.IE&&!window.XMLHttpRequest){e.style.position='absolute';e.style.width=Math.max(document.documentElement.clientWidth,document.body.offsetWidth)+'px';e.style.height=Math.max(document.documentElement.clientHeight,document.body.offsetHeight)+'px';d.style.position='absolute'}d.style.visibility='visible';d.style.display='block';e.className='no_loading'}l(OOo,{extend:l,toQueryString:o,addEventListener:m,$:k,appendOOForm:n,removeEventListener:r,createMetrics:s,truncateMetric:u,createLegacyVars:p,POSITION_FIXED_SUPPORTED:w,DYNAMIC_FRAME_NAME_IS_BUGGY:x,getFormParams:t,referrerRewrite:q,hidePrompt:v,getPrompt:A,showPrompt:y})}());(function(){function f(a){if(!a){return null}switch(typeof a){case'number':case'boolean':case'function':return a;case'string':return'\''+a+'\'';case'object':var b,c,d,e;if(a.constructor===Array||typeof a.callee!=='undefined'){b='[';d=a.length;for(c=0;c<d-1;c+=1){b+=f(a[c])+','}b+=f(a[c])+']'}else{b='{';for(e in a){if(a.hasOwnProperty(e)){b+=e+':'+f(a[e])+','}}b=b.replace(/\,$/,'')+'}'}return b;default:return null}}OOo.extend(OOo,{serialize:f})}());(function(){function e(a,b,c){var d;if(a.search(b[0])!==-1){OOo.createCookie(c,0);return false}else if(OOo.readCookie(c)){d=parseInt(OOo.readCookie(c),10);if((a.search(b[d+1])!==-1)&&(d+1!==b.length-1)){OOo.createCookie(c,d+1);return false}else if(a.search(b[d])!==-1){return false}else if(d+1===b.length-1&&a.search(b.pop())!==-1){OOo.eraseCookie(c);return true}else{OOo.eraseCookie(c);return false}}else{return false}}OOo.extend(OOo,{checkTunnel:e})}());(function(){function s(a){var b="",c;for(c=7;c>=0;c-=1){b+='0123456789abcdef'.charAt((a>>(c*4))&0x0F)}return b}function u(a){var b=((a.length+8)>>6)+1,c=new Array(b*16),d;for(d=0;d<b*16;d+=1){c[d]=0}for(d=0;d<a.length;d+=1){c[d>>2]|=a.charCodeAt(d)<<(24-(d%4)*8)}c[d>>2]|=0x80<<(24-(d%4)*8);c[b*16-1]=a.length*8;return c}function p(a,b){var c=(a&0xFFFF)+(b&0xFFFF),d=(a>>16)+(b>>16)+(c>>16);return(d<<16)|(c&0xFFFF)}function q(a,b){return(a<<b)|(a>>>(32-b))}function w(a,b,c,d){if(a<20){return(b&c)|((~b)&d)}if(a<40){return b^c^d}if(a<60){return(b&c)|(b&d)|(c&d)}return b^c^d}function x(a){return(a<20)?1518500249:(a<40)?1859775393:(a<60)?-1894007588:-899497514}function v(a){var b=u(a),c=new Array(80),d=1732584193,e=-271733879,f=-1732584194,g=271733878,h=-1009589776,j,k,l,m,r,o,t,n;for(t=0;t<b.length;t+=16){j=d;k=e;l=f;m=g;r=h;for(n=0;n<80;n+=1){if(n<16){c[n]=b[t+n]}else{c[n]=q(c[n-3]^c[n-8]^c[n-14]^c[n-16],1)}o=p(p(q(d,5),w(n,e,f,g)),p(p(h,c[n]),x(n)));h=g;g=f;f=q(e,30);e=d;d=o}d=p(d,j);e=p(e,k);f=p(f,l);g=p(g,m);h=p(h,r)}return s(d)+s(e)+s(f)+s(g)+s(h)}OOo.extend(OOo,{sha1:v})}());(function(){function h(a,b){if(!b){b=location}var c=a.cookieName||'oo_abandon',d=OOo.readCookie(c),e=a.startPage,f=a.endPage,g=a.middle;if(!d){if(b.pathname.indexOf(e)!==-1){OOo.createCookie(c)}return false}else if(b.pathname.indexOf(f)!==-1){OOo.eraseCookie(c);return false}else if(b.pathname.search(g)!==-1){return false}else{OOo.eraseCookie(c);return true}}OOo.extend(OOo,{checkAbandonment:h})}());(function(){function d(a){var b,c;for(b=a.length-1;b>=0;b-=1){if(a[b].read){c=OOo.readCookie(a[b].name);if(!!c&&c===a[b].value){return true}else if(typeof a[b].value==='undefined'&&!!OOo.readCookie(a[b].name)){return true}}}return false}function e(a){var b;for(b=a.length-1;b>=0;b-=1){if(a[b].set){OOo.createCookie(a[b].name,a[b].value,a[b].expiration)}}}OOo.extend(OOo,{checkThirdPartyCookies:d,setThirdPartyCookies:e})}());OOo.extend(Function.prototype,(function(){if(typeof Function.prototype.bind!=="undefined"){return}var e=Array.prototype.slice;function f(a,b){var c=a.length,d=b.length;while(d){d-=1;a[c+d]=b[d]}return a}function g(a,b){a=e.call(a,0);return f(a,b)}function h(b){if(arguments.length<2&&typeof b==="undefined"){return this}var c=this,d=e.call(arguments,1);return function(){var a=g(d,arguments);return c.apply(b,a)}}return{bind:h}}()));(function(){function f(a){if(!a){a=location}var b;if(a.host.search(/\.[a-z]+/)!==-1){b=a.host.split('.').reverse();if(b.length>3){return a.host}b='.'+b[1]+'.'+b[0]}else{b=a.host}return b}function g(a,b,c){var d='',e='';if(c){d=new Date();d.setTime(d.getTime()+(c*1000));e="; expires="+d.toGMTString()}if(location.host!==f()){document.cookie=a+"="+b+e+"; path=/; domain="+f()+";"}else{document.cookie=a+"="+b+e+"; path=/;"}}function h(a){var b=a+"=",c=document.cookie.split(';'),d,e;for(e=0;e<c.length;e+=1){d=c[e];while(d.charAt(0)===' '){d=d.substring(1,d.length)}if(d.indexOf(b)===0){return d.substring(b.length,d.length)}}return null}function j(a){g(a,"",-1)}OOo.extend(OOo,{getCookieDomain:f,createCookie:g,readCookie:h,eraseCookie:j})}());OOo.Ocode=function(a){var b=OOo.Browser,c,d;if(a.disableMobile&&b.isMobile){return}if(a.disableNoniOS&&b.isMobileNonIOS){return}OOo.instanceCount+=1;this.options={tealeafCookieName:'TLTSID'};OOo.extend(this.options,a);c=this.options;c.metrics=OOo.createMetrics();this.frameName=c.onPageCard?'OnlineOpinion'+OOo.instanceCount:'OnlineOpinion';if(c.cookie&&OOo.Ocode.matchUrl(c.cookie,location)){return}if(c.thirdPartyCookies&&OOo.checkThirdPartyCookies(c.thirdPartyCookies)){return}if(c.abandonment&&!OOo.checkAbandonment(c.abandonment)){return}if(c.tunnel&&!OOo.checkTunnel(location.pathname,c.tunnel.path,c.tunnel.cookieName)){return}if(c.events&&c.events.onSingleClick){this.singProbability=Math.random()<1-c.events.onSingleClick/100}c.tealeafId=OOo.readCookie(c.tealeafCookieName)||OOo.readCookie(c.sessionCookieName);if(c.events){this.setupEvents();if(c.events.disableLinks||c.events.disableFormElements){this.setupDisableElements()}}if(c.floating){this.floating()}else if(c.bar){this.bar()}else if(c.tab){this.tab()}};OOo.Ocode.prototype={show:function(a,b){if(a==='Tab'&&b&&b.preventDefault){b.preventDefault()}if(this.onPageCardVisible){return}var c=this.options,d;if(c.events&&c.events.prompt){if(c.cookie)OOo.eraseCookie(c.cookie.name||'oo_r');OOo.hidePrompt()}if(this.interruptShow){return}if(!this.floatingLogo&&c.cookie&&OOo.Ocode.matchUrl(c.cookie)){return}if(!c.floating&&c.events&&this.singProbability){return}if(c.events&&c.events.onSingleClick){this.singProbability=true}if(c.cookie){OOo.Ocode.tagUrl(c.cookie)}if(c.thirdPartyCookies){if(OOo.checkThirdPartyCookies(c.thirdPartyCookies)){return}OOo.setThirdPartyCookies(c.thirdPartyCookies)}if(this.floatingLogo){this.floatingLogo.children[0].blur()}if(this.floatingLogo&&c.disappearOnClick){this.floatingLogo.style.display='none'}if(a){c.metrics.trigger=a}if(c.clickTalePID&&typeof window.ClickTale==='function'){c.clickTaleUID=window.ClickTaleGetUID();c.clickTaleSID=window.ClickTaleGetSID()}if(c.onPageCard&&!OOo.Browser.isMobile){this.setupOnPageCC()}else{this.launchOOPopup()}d=c.floating||c.tab||c.bar;if(d&&typeof d.onClickCallback==='function'){d.onClickCallback()}}};OOo.extend(OOo.Ocode,{tagUrl:function(a,b){if(!b){b=location}var c=a.name||'oo_r',d=a.type==='page'?b.href:b.hostname,e=OOo.readCookie(c)||'';if(OOo.Ocode.matchUrl(a,b)){return}OOo.createCookie(c,e+OOo.sha1(d),a.expiration)},matchUrl:function(a,b){if(!b){b=location}var c=OOo.readCookie(a.name||'oo_r'),d;if(!c){return false}d=a.type==='page'?b.href:b.hostname;return c.search(OOo.sha1(d))!==-1}});(function(){var g=0;function h(){var a=this.options,b=a.newWindowSize||[545,325],c=[parseInt((a.metrics.height-b[1])/2,10),parseInt((a.metrics.width-b[0])/2,10)],d,e,f='location=no,status=no,scrollbars=1,width='+b[0]+',height='+b[1]+',top='+c[0]+',left='+c[1];ie7=OOo.Browser.IE&&navigator.userAgent.search('MSIE 7')!==-1,windowName='OnlineOpinion';if(a.newWindow)windowName=windowName+(g++);a.metrics.time2=(new Date()).getTime();a.metrics.type='Popup';d=OOo.appendOOForm(a,windowName);if(OOo.Browser.isMobile&&OOo.Browser.ua.search('Android')!==-1){d.submit()}else{e=window.open(ie7?a.commentCardUrl||'https://secure.opinionlab.com/ccc01/comment_card_d.asp?'+d.children[0].value:'',windowName,f);if(e&&!ie7){d.submit()}}}OOo.extend(OOo.Ocode.prototype,{launchOOPopup:h})}());(function(){function k(){var a=this.options.events,b=[false,false],c=['onExit','onEntry'],d=OOo.Browser.Opera?'unload':'beforeunload',e,f,g,h,j;if(a.prompt){OOo.extend(this.options,{promptMarkup:a.prompt.promptMarkup||'oo_event_prompt.html',neverShowAgainButton:false,pathToAssets:a.prompt.pathToAssets})}for(g=c.length-1;g>=0;g-=1){e=c[g];if(a[e]instanceof Array){h=a[e];j=h.length;while(j&&!b[g]){j-=1;if(window.location.href.search(h[j].url)!==-1&&Math.random()>=1-h[j].p/100){b[g]=true}}}else if(a[e]&&Math.random()>=1-a[e]/100){b[g]=true}}if(b[0]){OOo.addEventListener(window,d,this.show.bind(this,'onExit'),false)}if(b[1]){if(a.delayEntry){window.setTimeout(function(){if(a.prompt)this.getPrompt();else this.show()}.bind(this,'onEntry'),a.delayEntry*1000)}else{if(a.prompt)this.getPrompt();else this.show('onEntry')}}}function l(a){var b=a||window.event,c=a.target||a.srcElement,d=this.options.events,e=c.parentNode,f=5,g=0;while(e&&(c.nodeName!=='A'||c.nodeName!=='INPUT')&&g!==f){if(e.nodeName==='A'){c=e}e=e.parentNode;g+=1}if(d.disableFormElements&&(c.tagName==="INPUT"||c.tagName==="BUTTON")&&(c.type==='submit'||c.type==='image'||c.type==='reset'||c.type==='button')){this.interruptShow=true}if(d.disableLinks&&(c.nodeName==='A'||c.nodeName==='AREA')&&c.href.substr(0,4)==='http'&&c.href.search(d.disableLinks)!==-1){this.interruptShow=true}}function m(a){this.interruptShow=true}function r(){OOo.addEventListener(document.body,'mousedown',l.bind(this));if(!this.options.events.disableFormElements){return}var a=document.getElementsByTagName('form'),b;for(b=a.length-1;b>=0;b-=1){OOo.addEventListener(a[b],'submit',m.bind(this))}}OOo.extend(OOo.Ocode.prototype,{setupEvents:k,setupDisableElements:r,getPrompt:function(){OOo.getPrompt.call(this)},showPrompt:function(a){if(this.options.cookie){OOo.Ocode.tagUrl(this.options.cookie)}OOo.showPrompt.call(this,a,this.show)}})}());OOo.extend(OOo.Ocode.prototype,{floating:function(){var d=document,e=this.floatingLogo=document.createElement('div'),f=d.createElement('div'),g=d.createElement('div'),h=d.createElement('div'),j=d.createElement('span'),k=this.options.floating,l=OOo.$(k.contentId),m='10px',r=k.id,o=d.createElement('span'),t,n,s,u,p,q,w,x;function v(a){return a.offsetLeft+a.offsetWidth}function A(a){u.style.left=v(l)+'px'}o.innerHTML="Screen reader users: Please switch to forms mode for this link.";o.className="screen_reader";if(r){e.id=r}e.className='oo_feedback_float';g.className='oo_transparent';f.className='olUp';h.className='olOver';f.tabIndex=0;f.onkeyup=function(a){t=a||window.event;if(t.keyCode!==13){return}this.show()}.bind(this);f.innerHTML=k.caption||'Feedback';e.appendChild(o);e.appendChild(f);j.innerHTML=k.hoverCaption||'Click here to<br>rate this page';h.appendChild(j);e.appendChild(h);e.appendChild(g);function y(a){var b=d.documentElement.scrollTop||d.body.scrollTop,c=d.documentElement.clientHeight||document.body.clientHeight;e.style.top=(b+c-(w||0)-10)+'px'}if(OOo.Browser.MobileSafari){if(OOo.Browser.ua.search('OS 4')!==-1){n=window.innerHeight;e.style.bottom=null;e.style.top=(window.pageYOffset+window.innerHeight-60)+'px';x=function(a){s=window.pageYOffset-(n-window.innerHeight);e.style.webkitTransform='translateY('+s+'px)'};OOo.addEventListener(window,'scroll',x,false);setTimeout(x,100)}}else if(!OOo.POSITION_FIXED_SUPPORTED){e.style.position='absolute';e.style.bottom='';OOo.addEventListener(window,'scroll',y,false);OOo.addEventListener(window,'resize',y,false);if(d.compatMode==="BackCompat"){e.style.background="white"}}if(k.position&&k.position.search(/Content/)&&l){u=this.spacer=d.createElement('div');p=OOo.Browser.WebKit?d.body:d.documentElement;u.id='oo_feedback_fl_spacer';u.style.left=v(l)+'px';d.body.appendChild(u);switch(k.position){case'rightOfContent':q=function(a){e.style.left=(v(l)-p.scrollLeft)+'px';if(!OOo.POSITION_FIXED_SUPPORTED){q=null}};break;case'fixedPreserveContent':q=function(a){var b=OOo.Browser.IE?d.body.clientWidth:window.innerWidth,c=OOo.POSITION_FIXED_SUPPORTED?p.scrollLeft:0;if(b<=v(l)+e.offsetWidth+parseInt(m,10)){e.style.left=(v(l)-c)+'px'}else{e.style.left='';e.style.right=m}};break;case'fixedContentMax':q=function(a){var b=OOo.Browser.IE?d.body.clientWidth:window.innerWidth;if(b<=v(l)+e.offsetWidth+parseInt(m,10)){e.style.left='';e.style.right=m;if(!OOo.POSITION_FIXED_SUPPORTED&&a&&a.type==='scroll'){e.style.left=(d.body.clientWidth+d.body.scrollLeft-105)+'px'}}else{e.style.left=(v(l)-p.scrollLeft)+'px';e.style.right=''}};break}window.setTimeout(q,0);OOo.addEventListener(window,'scroll',q,false);OOo.addEventListener(window,'resize',q,false);OOo.addEventListener(window,'resize',A,false)}else{e.style.right=m}OOo.addEventListener(e,'click',this.show.bind(this,'Floating'),false);OOo.addEventListener(e,'touchend',this.show.bind(this,'Floating'),false);d.body.appendChild(e);if(!OOo.POSITION_FIXED_SUPPORTED&&!OOo.Browser.MobileSafari){g.style.height=e.clientHeight+'px';w=e.clientHeight;setTimeout(y,100)}},removeFloatingLogo:function(){document.body.removeChild(this.floatingLogo);if(this.spacer){document.body.removeChild(this.spacer)}}});OOo.extend(OOo.Ocode.prototype,{bar:function(){var d=document,e=this.floatingLogo=d.createElement('div'),f=d.createElement('span'),g,h,j,k=d.documentElement.scrollTop||d.body.scrollTop,l=d.createElement('div');function m(a){var b=curtop=0;if(a.offsetParent){do{b+=a.offsetLeft;curtop+=a.offsetTop}while(a=a.offsetParent);return[b,curtop]}}function r(a){var b=document.activeElement,c;if(!b)return;c=m(b);if(!c)return;if(c[1]+b.clientHeight>(window.innerHeight||document.body.clientHeight)+(window.pageYOffset||document.body.scrollTop)-e.clientHeight)window.scrollBy(0,b.clientHeight+20)}l.innerHTML='Link opens comment card';l.className='screen_reader';e.appendChild(l);this.reflowBar=OOo.K;e.id='oo_bar';f.innerHTML=this.options.bar.caption||'Feedback';e.appendChild(f);e.tabIndex=0;e.onkeyup=function(a){var b=a||window.event;if(b.keyCode!==13){return}this.show()}.bind(this);OOo.addEventListener(e,'click',this.show.bind(this,'Bar'));document.body.className+=document.body.className<1?'oo_bar':' oo_bar';document.body.appendChild(e);var o=/MSIE ([\d\.]+);/.exec(window.navigator.userAgent);if(OOo.Browser.IE&&o&&+o[1]<8){if(d.compatMode==='CSS1Compat'){g=function(a){if(a&&a.type==='resize'){setTimeout(g,50)}e.style.top=(d.documentElement.scrollTop+document.documentElement.clientHeight-e.clientHeight-1)+'px';e.style.width=(Math.max(d.documentElement.clientWidth,d.body.offsetWidth))+'px'}}else{g=function(a){e.style.top=(d.body.scrollTop+document.body.clientHeight-e.clientHeight-1)+'px';e.style.width=(Math.max(d.documentElement.clientWidth,d.body.offsetWidth)-22)+'px'}}e.style.position='absolute';OOo.addEventListener(window,'scroll',g,false);OOo.addEventListener(window,'resize',g,false);this.reflowBar=function(){e.style.display='none';g();e.style.display='block'};g()}else if(OOo.Browser.MobileSafari&&OOo.Browser.ua.search('OS 4')!==-1){h=window.innerHeight;e.style.bottom=null;e.style.top=(window.pageYOffset+window.innerHeight-22)+'px';g=function(a){j=window.pageYOffset-(h-window.innerHeight);e.style.webkitTransform='translateY('+j+'px)'};OOo.addEventListener(window,'scroll',g,false);setTimeout(g,100)}OOo.addEventListener(document.body,'keyup',r,false)}});OOo.extend(OOo.Ocode.prototype,{tab:function(){var e=document,f=this.floatingLogo=e.createElement('div'),g=e.createElement('div'),h=e.createElement('div'),j=e.createElement('span'),k=this.options.tab;if(k.wcagBasePath){h=e.createElement('a');h.setAttribute('href','#');j=e.createElement('img');j.className='logo';j.setAttribute('alt',"Feedback");j.setAttribute('src',k.wcagBasePath+((OOo.Browser.ua.search('IE 6')!==-1)?"oo_tabie6.png":"oo_tab.png"))}function l(a){var b=e.documentElement.scrollTop||e.body.scrollTop,c=e.documentElement.scrollLeft||e.body.scrollLeft,d=e.documentElement.clientHeight||document.body.clientHeight;f.style.top=(b+(d/2-f.clientHeight/2))+'px';if((!k.position||k.position==='right'))f.style.right=(-1*c+2)+'px'}function m(a){f.style.top=pageYOffset+(innerHeight/2-f.clientHeight/2)+'px';f.style.right=document.documentElement.clientWidth-window.innerWidth-window.pageXOffset-15+'px'}f.id='oo_tab';f.className='oo_tab_'+(k.position||'right');if(k.wcagBasePath){f.className+=' wcag'}if(!OOo.POSITION_FIXED_SUPPORTED&&!OOo.Browser.MobileSafari){f.style.position='absolute';if((!k.position||k.position==='right')&&OOo.Browser.IE){f.className+=' oo_tab_ie_right';if(OOo.Browser.ua.search('IE 6')!==-1||OOo.Browser.ua.search('IE 7')!==-1){f.className+='  oo_tab_ie67_right'}if(OOo.Browser.ua.search('IE 6')===-1){OOo.addEventListener(window,'scroll',l,false);OOo.addEventListener(window,'resize',l,false)}}}if(typeof k.tabIndex==='number'){f.tabIndex=k.tabIndex}else if(typeof k.tabIndex==='undefined'){f.tabIndex=0}f.onkeyup=function(a){var b=a||window.event;if(b.keyCode!==13){return}this.show()}.bind(this);h.appendChild(j);f.appendChild(h);if(g){g.className='screen_reader';g.innerHTML='Activate to launch comment card';f.appendChild(g)}OOo.addEventListener(f,'click',this.show.bind(this,'Tab'),false);e.body.appendChild(f);if(OOo.Browser.MobileSafari&&OOo.Browser.ua.search('OS 4')!==-1){f.style.position='absolute';OOo.addEventListener(window,'scroll',m,false);setTimeout(m,100)}}});OOo.extend(OOo.Ocode.prototype,{setupOnPageCC:function(){var e=document,f=OOo.Cache.overlay||e.createElement('div'),g=this.wrapper=e.createElement('div'),h=e.createElement('div'),j=e.createElement('div'),k=e.createElement('span'),l=this.frameName,m=e.createElement(OOo.DYNAMIC_FRAME_NAME_IS_BUGGY?'<iframe name="'+l+'">':'iframe'),r=e.createDocumentFragment(),o=this.options,t=o.onPageCard,n='https://secure.opinionlab.com/ccc01/comment_card_json_4_0_b.asp',s,u,p,q=false,w=this,x,v,A,y,B,E,C,D=e.createElement('span');function z(a){if(a&&a.preventDefault){a.preventDefault()}document.body.focus();m.tabIndex=-1;m.title="empty";m['aria-hidden']='true';f.style.display='none';f.className='';e.body.removeChild(g);if(window.postMessage){OOo.removeEventListener(window,'message',B)}else{window.clearInterval(u)}q=false;w.onPageCardVisible=false;return false}B=OOo.Ocode.postMessageHandler(function(a){var b=parseInt(a,10),c,d;if(b>0){if(q){return}q=true;c=window.innerHeight||e.documentElement.clientHeight||e.body.clientHeight;d=b;C=g.offsetTop;if(d+C>c){d=c-40-C}m.style.width='555px';j.style.width='555px';m.style.height=d+'px';g.style.visibility='visible';if(k.clientHeight<20){k.style.height=g.offsetHeight+'px'}f.className="no_loading";w.onPageCardVisible=true;s&&e.body.removeChild(s)}else if(a==='submitted'){z()}if(OOo.Browser.IE&&e.compatMode==="BackCompat"){window.scrollTo(0,0)}},w.options.commentCardUrl);o.metrics.type='OnPage';OOo.Cache.overlay=f;f.id='oo_overlay';f.style.display='block';f.className='';j.className='iwrapper';g.className='oo_cc_wrapper';g.setAttribute('role','alert');g.setAttribute('aria-describedby','comment_card_description');D.className='screen_reader';D.id='comment_card_description';D.innerHTML='Please leave your feedback in the comment card you just activated';g.appendChild(D);h.className='oo_cc_close';h.innerHTML='<span class="screen_reader">Link closes comment card</span>X';h.title='Click to close comment card';g.style.visibility='hidden';h.tabIndex=0;h.onkeyup=function(a){var b=a||window.event;if(b.keyCode!==13){return}z()};if(OOo.Browser.IE){m.frameBorder='0';if(!window.XMLHttpRequest||e.compatMode==="BackCompat"){E=Math.max(e.documentElement.clientWidth,e.body.offsetWidth);f.style.position='absolute';f.style.width=e.compatMode==="BackCompat"?(E-21)+'px':E+'px';f.style.height=Math.max(e.documentElement.clientHeight,e.body.offsetHeight)+'px';g.style.position='absolute';OOo.addEventListener(window,'scroll',function(){f.style.top=(e.body.scrollTop+document.body.clientHeight-f.clientHeight)+'px';g.style.top=(e.body.scrollTop+C+25)+'px'})}}OOo.addEventListener(h,'click',z);if(t.closeWithOverlay&&!OOo.Browser.isMobile){g.appendChild(k);k.onclick=z;f.onclick=z}m.src=' ';m.name=l;m.title='Comment Card';j.appendChild(h);j.appendChild(m);g.appendChild(j);r.appendChild(g);r.appendChild(f);e.body.appendChild(r);if(window.postMessage){OOo.addEventListener(window,"message",B)}else{u=setInterval(B,500)}o.metrics.time2=(new Date()).getTime();s=OOo.appendOOForm(o,l);s.submit()}});OOo.extend(OOo.Ocode,{postMessageHandler:function(d,e,f){return function(a){var b='https://secure.opinionlab.com',c;if(!f){f=location}if((a&&!(a.origin===b||a.origin.indexOf(e)!==0))||(!a&&f.hash.search('OL=')===-1)){return false}c=a?a.data:f.hash.split('=').pop();if(!a&&location.hash){location.hash=''}d(c);return c}}});OOo.Invitation=function(a){if(OOo.Browser.isMobile){return}this.options={tunnelCookie:'oo_inv_tunnel',repromptTime:604800,responseRate:50,repromptCookie:'oo_inv_reprompt',promptMarkup:'oo_inv_prompt.html',promptStyles:'oo_inverstitial_style.css',percentageCookie:'oo_inv_percent',pagesHitCookie:'oo_inv_hit',popupType:'popunder',promptDelay:0,neverShowAgainButton:false,loadPopupInBackground:false,truncatePrevCurrentMetrics:false,disablePrevCurrentMetrics:false,tealeafCookieName:'TLTSID',monitorWindow:'oo_inv_monitor.html',beforePrompt:OOo.K};this.popupShown=false;OOo.extend(this.options,a);var b=this.options,c=parseInt(OOo.readCookie(b.pagesHitCookie),10)||0;OOo.Invitation.friendlyDomains=b.friendlyDomains||null;if(location.search.search('evs')!==-1||OOo.readCookie('oo_evs_friendly')==='yes'){OOo.eraseCookie('oo_evs_friendly');b.loadPopupInBackground=true;this.launchPopup();OOo.createCookie(b.repromptCookie,1,b.repromptTime===-1?0:b.repromptTime)}setTimeout(function(){if(!window.oo_inv_monitor){return}if(b.area&&location.href.search(b.area)===-1){this.options.popupType='popup';this.launchPopup()}else if(b.goal&&location.href.search(b.goal)!==-1){window.oo_inv_monitor.close()}}.bind(this),1600);if(OOo.readCookie(b.repromptCookie)){return}if(b.thirdPartyCookies&&OOo.checkThirdPartyCookies(b.thirdPartyCookies)){return}if(!OOo.readCookie(b.percentageCookie)){OOo.createCookie(b.percentageCookie,(Math.random()>1-(b.responseRate/100))?"1":"0")}if(typeof b.promptTrigger!=='undefined'){if(b.promptTrigger instanceof RegExp){if(!window.location.href.match(b.promptTrigger)){return}}else if(b.promptTrigger instanceof Array){if(!OOo.checkTunnel(location.pathname,b.promptTrigger,b.tunnelCookie)){return}}}c+=1;OOo.createCookie(b.pagesHitCookie,c);if(b.pagesHit&&c<b.pagesHit){return}OOo.eraseCookie(b.tunnelCookie);if(OOo.readCookie(b.percentageCookie)==='1'){window.setTimeout(function(){OOo.createCookie(b.repromptCookie,1,b.repromptTime);this.options.beforePrompt();this.getPrompt()}.bind(this),b.promptDelay*1000)}};OOo.Invitation.notifyFriendlyLocationChange=function(a){if(window.oo_inv_monitor){OOo.createCookie('oo_evs_friendly','yes')}};OOo.Invitation.prototype={getPrompt:function(){OOo.getPrompt.call(this)},showPrompt:function(a){OOo.showPrompt.call(this,a,this.launchPopup)},launchPopup:function(){if(this.popupShown){return}this.popupShown=true;var b=this.options,c=window.location.href,d=b.popupType==='popup'?'https://secure.opinionlab.com/ccc01/comment_card.asp?':b.pathToAssets+b.monitorWindow+'?'+(new Date()).getTime()+'&',e,f=[],g=b.asm?[555,500]:[400,335],h,j=OOo.createMetrics(),k=OOo.readCookie(b.tealeafCookieName),l;if(b.clickTalePID&&window.ClickTaleGetUID&&window.ClickTaleGetSID){k+='|'+[b.clickTalePID,window.ClickTaleGetUID(),window.ClickTaleGetSID()].join('/')}g=b.newWindowSize||g;l='location=no,status=no,width='+g[0]+',height='+g[1];if(b.referrerRewrite){j.referer=OOo.referrerRewrite(b.referrerRewrite)}if(b.truncatePrevCurrentMetrics){j.prev=OOo.truncateMetric(j.prev);j.currentURL=OOo.truncateMetric(j.currentURL)}if(b.disablePrevCurrentMetrics){j.prev='';j.currentURL=''}if(b.thirdPartyCookies){OOo.setThirdPartyCookies(b.thirdPartyCookies)}e=OOo.toQueryString(j)+'&type=Invitation';if(b.customVariables){e+='&customVars='+encodeURIComponent(OOo.serialize(b.customVariables))}e+='&custom_var='+OOo.createLegacyVars(b.legacyVariables,k);if(b.asm){e+='&asm=2';l+=',scrollbars=1'}d+=e;if(d.match(/\?/g).length===2)d=d.replace(/\?([^?]*)$/,'&$1');this.popup=h=window.open(d,'OnlineOpinionInvitation',l);if(!b.loadPopupInBackground&&OOo.$('oo_container')){OOo.hidePrompt()}if(b.popupType==='popunder'){if(!OOo.Browser.Chrome){h.blur();window.focus()}else{if(!b.loadPopupInBackground){window.alert(b.chromeMainWinPrompt||'Please fill out the form behind this window when you are finished.')}if(b.chromeSurveyPrompt){setTimeout(function(a){h.postMessage(b.chromeSurveyPrompt,"*")},500)}}}else if(window.oo_inv_monitor){if(!OOo.Browser.Chrome){window.blur();h.focus()}else{h.alert(b.chromeSurveyPrompt||'Please fill out the form');h.focused=true}}},killPrompt:function(){if(this.options.clickCallbacks&&typeof this.options.clickCallbacks.no==='function'){this.options.clickCallbacks.no()}OOo.createCookie(this.options.repromptCookie,1,157680000);OOo.hidePrompt()}};OOo.extend(OOo.Invitation,{navigateToFriendlyDomain:function(a){location.href=a}});
/*
 OnlineOpinion v5.7.2
 Released: 5/17/2013. Compiled 05/17/2013 12:57:44 PM -0500
 Branch: master 36f77a5a76ec82459bd577be7c1cd3093acb20ab
 Components: Full
 The following code is Copyright 1998-2013 Opinionlab, Inc.  All rights reserved. Unauthorized use is prohibited. This product and other products of OpinionLab, Inc. are protected by U.S. Patent No. 6606581, 6421724, 6785717 B1 and other patents pending. http://www.opinionlab
 */

/* [+] Tab Icon configuration */
var oo_tab = new OOo.Ocode({
	tab: {}
	, sessionCookieName: 'CTSID'
	, clickTalePID: 7
});