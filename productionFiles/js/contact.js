(()=>{var t={963:t=>{t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},7:(t,e,n)=>{var r=n(286);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},396:(t,e,n)=>{var r=n(741),o=n(797),i=n(508),a=n(875),c=n(886);t.exports=function(t,e){var n=1==t,s=2==t,u=3==t,l=4==t,f=6==t,p=5==t||f,d=e||c;return function(e,c,h){for(var v,m,b=i(e),y=o(b),g=r(c,h,3),_=a(y.length),w=0,x=n?d(e,_):s?d(e,0):void 0;_>w;w++)if((p||w in y)&&(m=g(v=y[w],w,b),t))if(n)x[w]=m;else if(m)switch(t){case 3:return!0;case 5:return v;case 6:return w;case 2:x.push(v)}else if(l)return!1;return f?-1:u||l?l:x}}},736:(t,e,n)=>{var r=n(286),o=n(302),i=n(314)("species");t.exports=function(t){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)||(e=void 0),r(e)&&null===(e=e[i])&&(e=void 0)),void 0===e?Array:e}},886:(t,e,n)=>{var r=n(736);t.exports=function(t,e){return new(r(t))(e)}},32:t=>{var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},645:t=>{var e=t.exports={version:"2.6.12"};"number"==typeof __e&&(__e=e)},741:(t,e,n)=>{var r=n(963);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},355:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},57:(t,e,n)=>{t.exports=!n(253)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},457:(t,e,n)=>{var r=n(286),o=n(816).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},985:(t,e,n)=>{var r=n(816),o=n(645),i=n(728),a=n(234),c=n(741),s=function(t,e,n){var u,l,f,p,d=t&s.F,h=t&s.G,v=t&s.S,m=t&s.P,b=t&s.B,y=h?r:v?r[e]||(r[e]={}):(r[e]||{}).prototype,g=h?o:o[e]||(o[e]={}),_=g.prototype||(g.prototype={});for(u in h&&(n=e),n)f=((l=!d&&y&&void 0!==y[u])?y:n)[u],p=b&&l?c(f,r):m&&"function"==typeof f?c(Function.call,f):f,y&&a(y,u,f,t&s.U),g[u]!=f&&i(g,u,p),m&&_[u]!=f&&(_[u]=f)};r.core=o,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},253:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},18:(t,e,n)=>{t.exports=n(825)("native-function-to-string",Function.toString)},816:t=>{var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},181:t=>{var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},728:(t,e,n)=>{var r=n(275),o=n(681);t.exports=n(57)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},734:(t,e,n)=>{t.exports=!n(57)&&!n(253)((function(){return 7!=Object.defineProperty(n(457)("div"),"a",{get:function(){return 7}}).a}))},797:(t,e,n)=>{var r=n(32);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},302:(t,e,n)=>{var r=n(32);t.exports=Array.isArray||function(t){return"Array"==r(t)}},286:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},461:t=>{t.exports=!1},275:(t,e,n)=>{var r=n(7),o=n(734),i=n(689),a=Object.defineProperty;e.f=n(57)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},681:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},234:(t,e,n)=>{var r=n(816),o=n(728),i=n(181),a=n(953)("src"),c=n(18),s="toString",u=(""+c).split(s);n(645).inspectSource=function(t){return c.call(t)},(t.exports=function(t,e,n,c){var s="function"==typeof n;s&&(i(n,"name")||o(n,"name",e)),t[e]!==n&&(s&&(i(n,a)||o(n,a,t[e]?""+t[e]:u.join(String(e)))),t===r?t[e]=n:c?t[e]?t[e]=n:o(t,e,n):(delete t[e],o(t,e,n)))})(Function.prototype,s,(function(){return"function"==typeof this&&this[a]||c.call(this)}))},825:(t,e,n)=>{var r=n(645),o=n(816),i="__core-js_shared__",a=o[i]||(o[i]={});(t.exports=function(t,e){return a[t]||(a[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(461)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},717:(t,e,n)=>{"use strict";var r=n(253);t.exports=function(t,e){return!!t&&r((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},467:t=>{var e=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:e)(t)}},875:(t,e,n)=>{var r=n(467),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},508:(t,e,n)=>{var r=n(355);t.exports=function(t){return Object(r(t))}},689:(t,e,n)=>{var r=n(286);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},953:t=>{var e=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+n).toString(36))}},314:(t,e,n)=>{var r=n(825)("wks"),o=n(953),i=n(816).Symbol,a="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=a&&i[t]||(a?i:o)("Symbol."+t))}).store=r},336:(t,e,n)=>{"use strict";var r=n(985),o=n(396)(0),i=n(717)([].forEach,!0);r(r.P+r.F*!i,"Array",{forEach:function(t){return o(this,t,arguments[1])}})},371:(t,e,n)=>{"use strict";var r=n(985),o=n(396)(1);r(r.P+r.F*!n(717)([].map,!0),"Array",{map:function(t){return o(this,t,arguments[1])}})},388:(t,e,n)=>{var r=n(985);r(r.S+r.F*!n(57),"Object",{defineProperty:n(275).f})},53:t=>{t.exports=function(t){var e="string"==typeof t.elem?document.getElementById(t.elem):t.elem,n="js-Dropdown-title",r="is-selected",o="is-open",i=e.getElementsByTagName("optgroup"),a=e.options,c=a.length,s=0,u=document.createElement("div");u.className="js-Dropdown",e.id&&(u.id="custom-"+e.id);var l=document.createElement("button");l.className=n,l.textContent=a[0].textContent;var f=document.createElement("ul");if(f.className="js-Dropdown-list",i.length)for(var p=0;p<i.length;p++){var d=document.createElement("div");d.innerText=i[p].label,d.classList.add("js-Dropdown-optgroup"),f.appendChild(d),h(i[p].getElementsByTagName("option"))}else h(a);function h(t){for(var n=0;n<t.length;n++){var o=document.createElement("li");o.innerText=t[n].textContent,o.setAttribute("data-value",t[n].value),o.setAttribute("data-index",s++),a[e.selectedIndex].textContent===t[n].textContent&&(o.classList.add(r),l.textContent=t[n].textContent),f.appendChild(o)}}function v(){f.classList.toggle(o)}function m(){f.classList.remove(o)}return u.appendChild(l),u.appendChild(f),u.addEventListener("click",(function(t){t.preventDefault();var o=t.target;if(o.className===n&&v(),"LI"===o.tagName){u.querySelector("."+n).innerText=o.innerText,e.options.selectedIndex=o.getAttribute("data-index");var i=new CustomEvent("change");e.dispatchEvent(i);for(var a=0;a<c;a++)f.querySelectorAll("li")[a].classList.remove(r);o.classList.add(r),m()}})),e.parentNode.insertBefore(u,e),e.style.display="none",document.addEventListener("click",(function(t){u.contains(t.target)||m()})),{toggle:v,close:m,open:function(){f.classList.add(o)}}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function e(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n(336),n(388);var r=function(){function n(){var t=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),e(this,"createElement",(function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=document.createElement(e);i.classList.add(n),o.sublistKey&&o.class&&o.textContent&&(i.dataset.sublist=o.sublistKey,t.configureSublist(o.sublistKey,o.class,o.textContent),i.addEventListener("click",(function(e){t.showSublist(e)}))),r.length&&r.forEach((function(t){var e,n,r=document.createElement(t.tag);r.classList.add(t.class),r.textContent=null!==(e=t.textContent)&&void 0!==e?e:"","a"===r.tag&&r.href&&(r.href=r.href),r.textContent=null!==(n=t.textContent)&&void 0!==n?n:"",i.appendChild(r)})),t.container.appendChild(i)})),e(this,"GetInfo",(function(){t.configList.elements.forEach((function(e){var n;t.createElement(e.tag,e.itemClass,e.inside,null!==(n=e.makeSub)&&void 0!==n?n:null)}))})),e(this,"configureSublist",(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(e){var r=document.querySelector("[data-sublist=".concat(t,"]")),o=r.querySelector(".js__subpopup-text");o&&(o.textContent=n)}})),e(this,"showSublist",(function(t){var e=t.target.closest("[data-sublist]");e&&document.querySelectorAll("[data-sublist=".concat(e.dataset.sublist,"]")).forEach((function(t){t.classList.add("active")}))}))}var r,o;return r=n,(o=[{key:"contructor",value:function(t){this.configList=t,this.container=document.querySelector(".".concat(this.configList.ulClass)),this.GetInfo()}}])&&t(r.prototype,o),n}();function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,(n=[{key:"contructor",value:function(t,e){this.hambList=t,this.section=document.querySelector(".".concat(t.section)),this.hambClass=e,this.hamburger=this.section.querySelector(".".concat(this.hambClass)),this.hambPopUp=this.section.querySelector(".".concat(this.hambList.popUpClass)),this.addListeners(),(new r).contructor(this.hambList)}},{key:"addListeners",value:function(){var t=this;this.hamburger.addEventListener("click",(function(){t.section.querySelectorAll(".hamburger__popup--sub").forEach((function(t){t.classList.remove("active")})),t.hamburger.classList.toggle("active"),t.hambPopUp.classList.toggle("active")})),document.addEventListener("click",(function(e){e.target.closest(".hamburger__popup")||e.target.closest(".".concat(t.hambClass))||e.target.closest(".hamburger__popup--sub")||(t.section.querySelectorAll(".hamburger__popup--sub").forEach((function(t){t.classList.remove("active")})),t.hamburger.classList.remove("active"),t.hambPopUp.classList.remove("active"))})),this.section.querySelectorAll(".hamburger__sub-popup-text").forEach((function(t){t.addEventListener("click",(function(t){t.target.closest(".hamburger__popup--sub").classList.remove("active")}))}))}}])&&o(e.prototype,n),t}();const a={section:"header",ulClass:"hamburger__popup-list",popUpClass:"hamburger__popup",elements:[{tag:"li",itemClass:"hamburger__popup-element",makeSub:{flag:"true",class:"hamburger__popup--sub",textContent:"Produkty",sublistKey:"produkty"},inside:[{tag:"span",class:"hamburger__popup-element-text",textContent:"Produkty"},{tag:"i",class:"icon-icon_05",flag:!0}]},{tag:"li",itemClass:"hamburger__popup-element",makeSub:{flag:"true",class:"hamburger__popup--sub",textContent:"Produkty2",sublistKey:"produkty2"},inside:[{tag:"span",class:"hamburger__popup-element-text",textContent:"Firma"},{tag:"i",class:"icon-icon_05",flag:!0}]},{tag:"li",itemClass:"hamburger__popup-element",makeSub:{flag:"true",class:"hamburger__popup--sub",textContent:"Produkty3",sublistKey:"produkty3"},inside:[{tag:"span",class:"hamburger__popup-element-text",textContent:"Nasze marki"},{tag:"i",class:"icon-icon_05",flag:!0}]}]};function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=function(){function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,"addListeners",(function(){document.addEventListener("click",(function(t){t.target.closest("[".concat(e.dataName,"]"))||e.RemoveActive()})),e.buttons.forEach((function(t){t.addEventListener("click",(function(t){var n=t.target.closest("[".concat(e.dataName,"]")).getAttribute("".concat(e.dataName)),r=e.container.querySelectorAll("[".concat(e.dataName,"=").concat(n,"]"));t.target.closest(".".concat(e.buttonsClass)).classList.contains("active")?e.RemoveActive():(e.RemoveActive(),r.forEach((function(t){t.classList.add("active")})))}))}))})),s(this,"RemoveActive",(function(){e.arrOfAllElementsWithThisData.forEach((function(t){t.classList.remove("active")}))}))}var e,n;return e=t,(n=[{key:"contructor",value:function(t,e,n){this.container=document.querySelector(".".concat(t)),this.buttonsClass=e,this.buttons=this.container.querySelectorAll(".".concat(this.buttonsClass)),this.dataName=n,this.arrOfAllElementsWithThisData=this.container.querySelectorAll("[".concat(n,"]")),this.addListeners()}}])&&c(e.prototype,n),t}();function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p=function(){function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,"addListeners",(function(t){e.headers.forEach((function(t){t.addEventListener("click",(function(t){e.addActive(t)}))})),t&&t.addEventListener("click",(function(t){e.addActive(t)}))})),f(this,"getElements",(function(){e.otherToListenArr.forEach((function(t){e.section.querySelectorAll(".".concat(t)).forEach((function(t){e.otherElement=t}))}))})),f(this,"addActive",(function(t){t.target.closest(".js__addActive").classList.toggle("active")}))}var e,n;return e=t,(n=[{key:"contructor",value:function(t,e,n){this.section=document.querySelector(".".concat(t)),this.headers=document.querySelectorAll(".".concat(e)),this.otherToListenArr=n,this.otherElement=null,this.getElements(),this.addListeners(this.otherElement)}}])&&l(e.prototype,n),t}();function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v=function(){function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,"addListneres",(function(){e.elementsToListen.forEach((function(t){t.addEventListener("click",(function(t){e.count(t),e.addActive(t)}))}))})),h(this,"count",(function(t){var n=t.target.closest(".js__search-in"),r=n.querySelectorAll(".".concat(e.classOfElementToCount)),o=0;r.forEach((function(t){o+=t.offsetHeight})),e.addStyles(o,n,t)})),h(this,"addStyles",(function(t,n,r){var o=n.querySelector(".".concat(e.classOfElementToShow));o.style.opacity="1",o.style.height="".concat(t,"px"),console.log(r.target.closest(".js__addActive")),r.target.closest(".js__addActive").classList.contains("active")&&(o.style.opacity="0",o.style.height="0px")})),h(this,"addActive",(function(t){t.target.closest(".js__addActive").classList.toggle("active")}))}var e,n;return e=t,(n=[{key:"contructor",value:function(t,e,n,r){this.section=document.querySelector(".".concat(t)),this.elementsToListen=this.section.querySelectorAll(".".concat(e)),this.classOfElementToCount=n,this.classOfElementToShow=r,this.addListneres()}}])&&d(e.prototype,n),t}();function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n(371);var y=function(){function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,"Listeners",(function(){e.map.addEventListener("click",(function(t){e.showPopup(t)}))})),b(this,"showPopup",(function(t){var n=t.target.closest(".js__mapArea");n&&n.classList.forEach((function(t){var n=e.section.querySelector("[data-map=".concat(t,"]"));n&&(e.section.querySelectorAll("[data-map]").forEach((function(t){t.classList.remove("active")})),n.classList.add("active"))}))}))}var e,n;return e=t,(n=[{key:"contructor",value:function(t){this.section=document.querySelector(".".concat(t)),this.map=this.section.querySelector(".js__map"),this.Listeners()}}])&&m(e.prototype,n),t}(),g=n(53),_=n.n(g);function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function x(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var E=function(){function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),x(this,"listeners",(function(){document.querySelector(".js-Dropdown-list").addEventListener("click",(function(t){e.showAnotherInput(t)}))})),x(this,"showAnotherInput",(function(t){e.section.querySelectorAll(".js__showSelector").forEach((function(t){t.classList.remove("active")}));var n=t.target.textContent;console.log(n),"małopolskie"!==n&&"wielkopolskie"!==n||e.section.querySelector("[data-disc=".concat(n,"]")).classList.add("active")}))}var e,n;return e=t,(n=[{key:"contruktor",value:function(t){this.section=document.querySelector(".".concat(t)),console.log(t),this.listeners()}}])&&w(e.prototype,n),t}();window.addEventListener("DOMContentLoaded",(function(){(new i).contructor(a,"hamburger"),(new u).contructor("menu","js__dynamicMenu","data-menu"),(new p).contructor("footer","footer__header-container",["footer__newsletter-agree-input"]),(new v).contructor("asideMenu","asideMenu__element-header-container","asideMenu__popup-element","asideMenu__popup"),(new y).contructor("bigFarms"),new(_())({elem:"voivodeship"}),new(_())({elem:"małopolskie"}),new(_())({elem:"wielkopolskie"}),(new E).contruktor("bigFarms__form")}))})()})();