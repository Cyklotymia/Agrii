(()=>{var t={963:t=>{t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},7:(t,e,n)=>{var r=n(286);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},396:(t,e,n)=>{var r=n(741),o=n(797),i=n(508),a=n(875),c=n(886);t.exports=function(t,e){var n=1==t,s=2==t,u=3==t,l=4==t,f=6==t,p=5==t||f,h=e||c;return function(e,c,v){for(var d,b,m=i(e),y=o(m),g=r(c,v,3),_=a(y.length),x=0,E=n?h(e,_):s?h(e,0):void 0;_>x;x++)if((p||x in y)&&(b=g(d=y[x],x,m),t))if(n)E[x]=b;else if(b)switch(t){case 3:return!0;case 5:return d;case 6:return x;case 2:E.push(d)}else if(l)return!1;return f?-1:u||l?l:E}}},736:(t,e,n)=>{var r=n(286),o=n(302),i=n(314)("species");t.exports=function(t){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)||(e=void 0),r(e)&&null===(e=e[i])&&(e=void 0)),void 0===e?Array:e}},886:(t,e,n)=>{var r=n(736);t.exports=function(t,e){return new(r(t))(e)}},32:t=>{var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},645:t=>{var e=t.exports={version:"2.6.12"};"number"==typeof __e&&(__e=e)},741:(t,e,n)=>{var r=n(963);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},355:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},57:(t,e,n)=>{t.exports=!n(253)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},457:(t,e,n)=>{var r=n(286),o=n(816).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},985:(t,e,n)=>{var r=n(816),o=n(645),i=n(728),a=n(234),c=n(741),s=function(t,e,n){var u,l,f,p,h=t&s.F,v=t&s.G,d=t&s.S,b=t&s.P,m=t&s.B,y=v?r:d?r[e]||(r[e]={}):(r[e]||{}).prototype,g=v?o:o[e]||(o[e]={}),_=g.prototype||(g.prototype={});for(u in v&&(n=e),n)f=((l=!h&&y&&void 0!==y[u])?y:n)[u],p=m&&l?c(f,r):b&&"function"==typeof f?c(Function.call,f):f,y&&a(y,u,f,t&s.U),g[u]!=f&&i(g,u,p),b&&_[u]!=f&&(_[u]=f)};r.core=o,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},253:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},18:(t,e,n)=>{t.exports=n(825)("native-function-to-string",Function.toString)},816:t=>{var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},181:t=>{var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},728:(t,e,n)=>{var r=n(275),o=n(681);t.exports=n(57)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},734:(t,e,n)=>{t.exports=!n(57)&&!n(253)((function(){return 7!=Object.defineProperty(n(457)("div"),"a",{get:function(){return 7}}).a}))},797:(t,e,n)=>{var r=n(32);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},302:(t,e,n)=>{var r=n(32);t.exports=Array.isArray||function(t){return"Array"==r(t)}},286:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},461:t=>{t.exports=!1},275:(t,e,n)=>{var r=n(7),o=n(734),i=n(689),a=Object.defineProperty;e.f=n(57)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},681:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},234:(t,e,n)=>{var r=n(816),o=n(728),i=n(181),a=n(953)("src"),c=n(18),s="toString",u=(""+c).split(s);n(645).inspectSource=function(t){return c.call(t)},(t.exports=function(t,e,n,c){var s="function"==typeof n;s&&(i(n,"name")||o(n,"name",e)),t[e]!==n&&(s&&(i(n,a)||o(n,a,t[e]?""+t[e]:u.join(String(e)))),t===r?t[e]=n:c?t[e]?t[e]=n:o(t,e,n):(delete t[e],o(t,e,n)))})(Function.prototype,s,(function(){return"function"==typeof this&&this[a]||c.call(this)}))},825:(t,e,n)=>{var r=n(645),o=n(816),i="__core-js_shared__",a=o[i]||(o[i]={});(t.exports=function(t,e){return a[t]||(a[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(461)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},717:(t,e,n)=>{"use strict";var r=n(253);t.exports=function(t,e){return!!t&&r((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},467:t=>{var e=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:e)(t)}},875:(t,e,n)=>{var r=n(467),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},508:(t,e,n)=>{var r=n(355);t.exports=function(t){return Object(r(t))}},689:(t,e,n)=>{var r=n(286);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},953:t=>{var e=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+n).toString(36))}},314:(t,e,n)=>{var r=n(825)("wks"),o=n(953),i=n(816).Symbol,a="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=a&&i[t]||(a?i:o)("Symbol."+t))}).store=r},336:(t,e,n)=>{"use strict";var r=n(985),o=n(396)(0),i=n(717)([].forEach,!0);r(r.P+r.F*!i,"Array",{forEach:function(t){return o(this,t,arguments[1])}})},388:(t,e,n)=>{var r=n(985);r(r.S+r.F*!n(57),"Object",{defineProperty:n(275).f})}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}(()=>{"use strict";function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function e(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n(336),n(388);var r=function(){function n(){var t=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),e(this,"createElement",(function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=document.createElement(e);i.classList.add(n),o.sublistKey&&o.class&&o.textContent&&(i.dataset.sublist=o.sublistKey,t.configureSublist(o.sublistKey,o.class,o.textContent),i.addEventListener("click",(function(e){t.showSublist(e)}))),r.length&&r.forEach((function(t){var e,n,r=document.createElement(t.tag);r.classList.add(t.class),r.textContent=null!==(e=t.textContent)&&void 0!==e?e:"","a"===r.tag&&r.href&&(r.href=r.href),r.textContent=null!==(n=t.textContent)&&void 0!==n?n:"",i.appendChild(r)})),t.container.appendChild(i)})),e(this,"GetInfo",(function(){t.configList.elements.forEach((function(e){var n;t.createElement(e.tag,e.itemClass,e.inside,null!==(n=e.makeSub)&&void 0!==n?n:null)}))})),e(this,"configureSublist",(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(e){var r=document.querySelector("[data-sublist=".concat(t,"]")),o=r.querySelector(".js__subpopup-text");o&&(o.textContent=n)}})),e(this,"showSublist",(function(t){var e=t.target.closest("[data-sublist]");e&&document.querySelectorAll("[data-sublist=".concat(e.dataset.sublist,"]")).forEach((function(t){t.classList.add("active")}))}))}var r,o;return r=n,(o=[{key:"contructor",value:function(t){this.configList=t,this.container=document.querySelector(".".concat(this.configList.ulClass)),this.GetInfo()}}])&&t(r.prototype,o),n}();function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,(n=[{key:"contructor",value:function(t,e){this.hambList=t,this.section=document.querySelector(".".concat(t.section)),this.hambClass=e,this.hamburger=this.section.querySelector(".".concat(this.hambClass)),this.hambPopUp=this.section.querySelector(".".concat(this.hambList.popUpClass)),this.addListeners(),(new r).contructor(this.hambList)}},{key:"addListeners",value:function(){var t=this;this.hamburger.addEventListener("click",(function(){t.section.querySelectorAll(".hamburger__popup--sub").forEach((function(t){t.classList.remove("active")})),t.hamburger.classList.toggle("active"),t.hambPopUp.classList.toggle("active")})),document.addEventListener("click",(function(e){e.target.closest(".hamburger__popup")||e.target.closest(".".concat(t.hambClass))||e.target.closest(".hamburger__popup--sub")||(t.section.querySelectorAll(".hamburger__popup--sub").forEach((function(t){t.classList.remove("active")})),t.hamburger.classList.remove("active"),t.hambPopUp.classList.remove("active"))})),this.section.querySelectorAll(".hamburger__sub-popup-text").forEach((function(t){t.addEventListener("click",(function(t){t.target.closest(".hamburger__popup--sub").classList.remove("active")}))}))}}])&&o(e.prototype,n),t}();const a={section:"header",ulClass:"hamburger__popup-list",popUpClass:"hamburger__popup",elements:[{tag:"li",itemClass:"hamburger__popup-element",makeSub:{flag:"true",class:"hamburger__popup--sub",textContent:"Produkty",sublistKey:"produkty"},inside:[{tag:"span",class:"hamburger__popup-element-text",textContent:"Produkty"},{tag:"i",class:"icon-icon_05",flag:!0}]},{tag:"li",itemClass:"hamburger__popup-element",makeSub:{flag:"true",class:"hamburger__popup--sub",textContent:"Produkty2",sublistKey:"produkty2"},inside:[{tag:"span",class:"hamburger__popup-element-text",textContent:"Firma"},{tag:"i",class:"icon-icon_05",flag:!0}]},{tag:"li",itemClass:"hamburger__popup-element",makeSub:{flag:"true",class:"hamburger__popup--sub",textContent:"Produkty3",sublistKey:"produkty3"},inside:[{tag:"span",class:"hamburger__popup-element-text",textContent:"Nasze marki"},{tag:"i",class:"icon-icon_05",flag:!0}]}]};function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=function(){function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,"addListeners",(function(){document.addEventListener("click",(function(t){t.target.closest("[".concat(e.dataName,"]"))||e.RemoveActive()})),e.buttons.forEach((function(t){t.addEventListener("click",(function(t){var n=t.target.closest("[".concat(e.dataName,"]")).getAttribute("".concat(e.dataName)),r=e.container.querySelectorAll("[".concat(e.dataName,"=").concat(n,"]"));t.target.closest(".".concat(e.buttonsClass)).classList.contains("active")?e.RemoveActive():(e.RemoveActive(),r.forEach((function(t){t.classList.add("active")})))}))}))})),s(this,"RemoveActive",(function(){e.arrOfAllElementsWithThisData.forEach((function(t){t.classList.remove("active")}))}))}var e,n;return e=t,(n=[{key:"contructor",value:function(t,e,n){this.container=document.querySelector(".".concat(t)),this.buttonsClass=e,this.buttons=this.container.querySelectorAll(".".concat(this.buttonsClass)),this.dataName=n,this.arrOfAllElementsWithThisData=this.container.querySelectorAll("[".concat(n,"]")),this.addListeners()}}])&&c(e.prototype,n),t}();function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p=function(){function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,"addListeners",(function(t){e.headers.forEach((function(t){t.addEventListener("click",(function(t){e.addActive(t)}))})),t&&t.addEventListener("click",(function(t){e.addActive(t)}))})),f(this,"getElements",(function(){e.otherToListenArr.forEach((function(t){e.section.querySelectorAll(".".concat(t)).forEach((function(t){e.otherElement=t}))}))})),f(this,"addActive",(function(t){t.target.closest(".js__addActive").classList.toggle("active")}))}var e,n;return e=t,(n=[{key:"contructor",value:function(t,e,n){this.section=document.querySelector(".".concat(t)),this.headers=document.querySelectorAll(".".concat(e)),this.otherToListenArr=n,this.otherElement=null,this.getElements(),this.addListeners(this.otherElement)}}])&&l(e.prototype,n),t}();window.addEventListener("DOMContentLoaded",(function(){(new i).contructor(a,"hamburger"),(new u).contructor("menu","js__dynamicMenu","data-menu"),(new p).contructor("footer","footer__header-container",["footer__newsletter-agree-input"])}))})()})();