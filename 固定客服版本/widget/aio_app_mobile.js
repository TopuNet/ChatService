/* Zepto 1.2.0 - zepto event ajax form fx fx_methods selector touch ie - zeptojs.com/license */
!function(t,e){"function"==typeof define&&define.amd?define('lib/zepto.min',[],function(){return e(t)}):e(t)}(this,function(t){var e=function(){function A(t){return null==t?String(t):S[C.call(t)]||"object"}function $(t){return"function"==A(t)}function k(t){return null!=t&&t==t.window}function F(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function R(t){return"object"==A(t)}function Z(t){return R(t)&&!k(t)&&Object.getPrototypeOf(t)==Object.prototype}function q(t){var e=!!t&&"length"in t&&t.length,n=i.type(t);return"function"!=n&&!k(t)&&("array"==n||0===e||"number"==typeof e&&e>0&&e-1 in t)}function z(t){return a.call(t,function(t){return null!=t})}function _(t){return t.length>0?i.fn.concat.apply([],t):t}function I(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function X(t){return t in l?l[t]:l[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function H(t,e){return"number"!=typeof e||h[I(t)]?e:e+"px"}function U(t){var e,n;return c[t]||(e=f.createElement(t),f.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),c[t]=n),c[t]}function V(t){return"children"in t?u.call(t.children):i.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function Y(t,e){var n,i=t?t.length:0;for(n=0;i>n;n++)this[n]=t[n];this.length=i,this.selector=e||""}function B(t,i,r){for(n in i)r&&(Z(i[n])||L(i[n]))?(Z(i[n])&&!Z(t[n])&&(t[n]={}),L(i[n])&&!L(t[n])&&(t[n]=[]),B(t[n],i[n],r)):i[n]!==e&&(t[n]=i[n])}function J(t,e){return null==e?i(t):i(t).filter(e)}function W(t,e,n,i){return $(e)?e.call(t,n,i):e}function G(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function K(t,n){var i=t.className||"",r=i&&i.baseVal!==e;return n===e?r?i.baseVal:i:void(r?i.baseVal=n:t.className=n)}function Q(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?i.parseJSON(t):t):t}catch(e){return t}}function tt(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)tt(t.childNodes[n],e)}var e,n,i,r,P,O,o=[],s=o.concat,a=o.filter,u=o.slice,f=t.document,c={},l={},h={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},p=/^\s*<(\w+|!)[^>]*>/,d=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,m=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,g=/^(?:body|html)$/i,y=/([A-Z])/g,v=["val","css","html","text","data","width","height","offset"],x=["after","prepend","before","append"],b=f.createElement("table"),E=f.createElement("tr"),w={tr:f.createElement("tbody"),tbody:b,thead:b,tfoot:b,td:E,th:E,"*":f.createElement("div")},T=/complete|loaded|interactive/,j=/^[\w-]*$/,S={},C=S.toString,N={},M=f.createElement("div"),D={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},L=Array.isArray||function(t){return t instanceof Array};return N.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=M).appendChild(t),i=~N.qsa(r,e).indexOf(t),o&&M.removeChild(t),i},P=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},O=function(t){return a.call(t,function(e,n){return t.indexOf(e)==n})},N.fragment=function(t,n,r){var o,s,a;return d.test(t)&&(o=i(f.createElement(RegExp.$1))),o||(t.replace&&(t=t.replace(m,"<$1></$2>")),n===e&&(n=p.test(t)&&RegExp.$1),n in w||(n="*"),a=w[n],a.innerHTML=""+t,o=i.each(u.call(a.childNodes),function(){a.removeChild(this)})),Z(r)&&(s=i(o),i.each(r,function(t,e){v.indexOf(t)>-1?s[t](e):s.attr(t,e)})),o},N.Z=function(t,e){return new Y(t,e)},N.isZ=function(t){return t instanceof N.Z},N.init=function(t,n){var r;if(!t)return N.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&p.test(t))r=N.fragment(t,RegExp.$1,n),t=null;else{if(n!==e)return i(n).find(t);r=N.qsa(f,t)}else{if($(t))return i(f).ready(t);if(N.isZ(t))return t;if(L(t))r=z(t);else if(R(t))r=[t],t=null;else if(p.test(t))r=N.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==e)return i(n).find(t);r=N.qsa(f,t)}}return N.Z(r,t)},i=function(t,e){return N.init(t,e)},i.extend=function(t){var e,n=u.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){B(t,n,e)}),t},N.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],o=i||r?e.slice(1):e,s=j.test(o);return t.getElementById&&s&&i?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:u.call(s&&!i&&t.getElementsByClassName?r?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},i.contains=f.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},i.type=A,i.isFunction=$,i.isWindow=k,i.isArray=L,i.isPlainObject=Z,i.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},i.isNumeric=function(t){var e=Number(t),n=typeof t;return null!=t&&"boolean"!=n&&("string"!=n||t.length)&&!isNaN(e)&&isFinite(e)||!1},i.inArray=function(t,e,n){return o.indexOf.call(e,t,n)},i.camelCase=P,i.trim=function(t){return null==t?"":String.prototype.trim.call(t)},i.uuid=0,i.support={},i.expr={},i.noop=function(){},i.map=function(t,e){var n,r,o,i=[];if(q(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return _(i)},i.each=function(t,e){var n,i;if(q(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},i.grep=function(t,e){return a.call(t,e)},t.JSON&&(i.parseJSON=JSON.parse),i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){S["[object "+e+"]"]=e.toLowerCase()}),i.fn={constructor:N.Z,length:0,forEach:o.forEach,reduce:o.reduce,push:o.push,sort:o.sort,splice:o.splice,indexOf:o.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=N.isZ(e)?e.toArray():e;return s.apply(N.isZ(this)?this.toArray():this,n)},map:function(t){return i(i.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return i(u.apply(this,arguments))},ready:function(t){return T.test(f.readyState)&&f.body?t(i):f.addEventListener("DOMContentLoaded",function(){t(i)},!1),this},get:function(t){return t===e?u.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return o.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return $(t)?this.not(this.not(t)):i(a.call(this,function(e){return N.matches(e,t)}))},add:function(t,e){return i(O(this.concat(i(t,e))))},is:function(t){return this.length>0&&N.matches(this[0],t)},not:function(t){var n=[];if($(t)&&t.call!==e)this.each(function(e){t.call(this,e)||n.push(this)});else{var r="string"==typeof t?this.filter(t):q(t)&&$(t.item)?u.call(t):i(t);this.forEach(function(t){r.indexOf(t)<0&&n.push(t)})}return i(n)},has:function(t){return this.filter(function(){return R(t)?i.contains(this,t):i(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!R(t)?t:i(t)},last:function(){var t=this[this.length-1];return t&&!R(t)?t:i(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?i(t).filter(function(){var t=this;return o.some.call(n,function(e){return i.contains(e,t)})}):1==this.length?i(N.qsa(this[0],t)):this.map(function(){return N.qsa(this,t)}):i()},closest:function(t,e){var n=[],r="object"==typeof t&&i(t);return this.each(function(i,o){for(;o&&!(r?r.indexOf(o)>=0:N.matches(o,t));)o=o!==e&&!F(o)&&o.parentNode;o&&n.indexOf(o)<0&&n.push(o)}),i(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=i.map(n,function(t){return(t=t.parentNode)&&!F(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return J(e,t)},parent:function(t){return J(O(this.pluck("parentNode")),t)},children:function(t){return J(this.map(function(){return V(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||u.call(this.childNodes)})},siblings:function(t){return J(this.map(function(t,e){return a.call(V(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return i.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=U(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=$(t);if(this[0]&&!e)var n=i(t).get(0),r=n.parentNode||this.length>1;return this.each(function(o){i(this).wrapAll(e?t.call(this,o):r?n.cloneNode(!0):n)})},wrapAll:function(t){if(this[0]){i(this[0]).before(t=i(t));for(var e;(e=t.children()).length;)t=e.first();i(t).append(this)}return this},wrapInner:function(t){var e=$(t);return this.each(function(n){var r=i(this),o=r.contents(),s=e?t.call(this,n):t;o.length?o.wrapAll(s):r.append(s)})},unwrap:function(){return this.parent().each(function(){i(this).replaceWith(i(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var n=i(this);(t===e?"none"==n.css("display"):t)?n.show():n.hide()})},prev:function(t){return i(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return i(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;i(this).empty().append(W(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=W(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this.pluck("textContent").join(""):null},attr:function(t,i){var r;return"string"!=typeof t||1 in arguments?this.each(function(e){if(1===this.nodeType)if(R(t))for(n in t)G(this,n,t[n]);else G(this,t,W(this,i,e,this.getAttribute(t)))}):0 in this&&1==this[0].nodeType&&null!=(r=this[0].getAttribute(t))?r:e},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){G(this,t)},this)})},prop:function(t,e){return t=D[t]||t,1 in arguments?this.each(function(n){this[t]=W(this,e,n,this[t])}):this[0]&&this[0][t]},removeProp:function(t){return t=D[t]||t,this.each(function(){delete this[t]})},data:function(t,n){var i="data-"+t.replace(y,"-$1").toLowerCase(),r=1 in arguments?this.attr(i,n):this.attr(i);return null!==r?Q(r):e},val:function(t){return 0 in arguments?(null==t&&(t=""),this.each(function(e){this.value=W(this,t,e,this.value)})):this[0]&&(this[0].multiple?i(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(e){if(e)return this.each(function(t){var n=i(this),r=W(this,e,t,n.offset()),o=n.offsetParent().offset(),s={top:r.top-o.top,left:r.left-o.left};"static"==n.css("position")&&(s.position="relative"),n.css(s)});if(!this.length)return null;if(f.documentElement!==this[0]&&!i.contains(f.documentElement,this[0]))return{top:0,left:0};var n=this[0].getBoundingClientRect();return{left:n.left+t.pageXOffset,top:n.top+t.pageYOffset,width:Math.round(n.width),height:Math.round(n.height)}},css:function(t,e){if(arguments.length<2){var r=this[0];if("string"==typeof t){if(!r)return;return r.style[P(t)]||getComputedStyle(r,"").getPropertyValue(t)}if(L(t)){if(!r)return;var o={},s=getComputedStyle(r,"");return i.each(t,function(t,e){o[e]=r.style[P(e)]||s.getPropertyValue(e)}),o}}var a="";if("string"==A(t))e||0===e?a=I(t)+":"+H(t,e):this.each(function(){this.style.removeProperty(I(t))});else for(n in t)t[n]||0===t[n]?a+=I(n)+":"+H(n,t[n])+";":this.each(function(){this.style.removeProperty(I(n))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(i(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?o.some.call(this,function(t){return this.test(K(t))},X(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){r=[];var n=K(this),o=W(this,t,e,n);o.split(/\s+/g).forEach(function(t){i(this).hasClass(t)||r.push(t)},this),r.length&&K(this,n+(n?" ":"")+r.join(" "))}}):this},removeClass:function(t){return this.each(function(n){if("className"in this){if(t===e)return K(this,"");r=K(this),W(this,t,n,r).split(/\s+/g).forEach(function(t){r=r.replace(X(t)," ")}),K(this,r.trim())}})},toggleClass:function(t,n){return t?this.each(function(r){var o=i(this),s=W(this,t,r,K(this));s.split(/\s+/g).forEach(function(t){(n===e?!o.hasClass(t):n)?o.addClass(t):o.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var n="scrollTop"in this[0];return t===e?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var n="scrollLeft"in this[0];return t===e?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),r=g.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(i(t).css("margin-top"))||0,n.left-=parseFloat(i(t).css("margin-left"))||0,r.top+=parseFloat(i(e[0]).css("border-top-width"))||0,r.left+=parseFloat(i(e[0]).css("border-left-width"))||0,{top:n.top-r.top,left:n.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||f.body;t&&!g.test(t.nodeName)&&"static"==i(t).css("position");)t=t.offsetParent;return t})}},i.fn.detach=i.fn.remove,["width","height"].forEach(function(t){var n=t.replace(/./,function(t){return t[0].toUpperCase()});i.fn[t]=function(r){var o,s=this[0];return r===e?k(s)?s["inner"+n]:F(s)?s.documentElement["scroll"+n]:(o=this.offset())&&o[t]:this.each(function(e){s=i(this),s.css(t,W(this,r,e,s[t]()))})}}),x.forEach(function(n,r){var o=r%2;i.fn[n]=function(){var n,a,s=i.map(arguments,function(t){var r=[];return n=A(t),"array"==n?(t.forEach(function(t){return t.nodeType!==e?r.push(t):i.zepto.isZ(t)?r=r.concat(t.get()):void(r=r.concat(N.fragment(t)))}),r):"object"==n||null==t?t:N.fragment(t)}),u=this.length>1;return s.length<1?this:this.each(function(e,n){a=o?n:n.parentNode,n=0==r?n.nextSibling:1==r?n.firstChild:2==r?n:null;var c=i.contains(f.documentElement,a);s.forEach(function(e){if(u)e=e.cloneNode(!0);else if(!a)return i(e).remove();a.insertBefore(e,n),c&&tt(e,function(e){if(!(null==e.nodeName||"SCRIPT"!==e.nodeName.toUpperCase()||e.type&&"text/javascript"!==e.type||e.src)){var n=e.ownerDocument?e.ownerDocument.defaultView:t;n.eval.call(n,e.innerHTML)}})})})},i.fn[o?n+"To":"insert"+(r?"Before":"After")]=function(t){return i(t)[n](this),this}}),N.Z.prototype=Y.prototype=i.fn,N.uniq=O,N.deserializeValue=Q,i.zepto=N,i}();return t.Zepto=e,void 0===t.$&&(t.$=e),function(e){function h(t){return t._zid||(t._zid=n++)}function p(t,e,n,i){if(e=d(e),e.ns)var r=m(e.ns);return(a[h(t)]||[]).filter(function(t){return t&&(!e.e||t.e==e.e)&&(!e.ns||r.test(t.ns))&&(!n||h(t.fn)===h(n))&&(!i||t.sel==i)})}function d(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function m(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function g(t,e){return t.del&&!f&&t.e in c||!!e}function y(t){return l[t]||f&&c[t]||t}function v(t,n,r,o,s,u,f){var c=h(t),p=a[c]||(a[c]=[]);n.split(/\s/).forEach(function(n){if("ready"==n)return e(document).ready(r);var a=d(n);a.fn=r,a.sel=s,a.e in l&&(r=function(t){var n=t.relatedTarget;return!n||n!==this&&!e.contains(this,n)?a.fn.apply(this,arguments):void 0}),a.del=u;var c=u||r;a.proxy=function(e){if(e=j(e),!e.isImmediatePropagationStopped()){e.data=o;var n=c.apply(t,e._args==i?[e]:[e].concat(e._args));return n===!1&&(e.preventDefault(),e.stopPropagation()),n}},a.i=p.length,p.push(a),"addEventListener"in t&&t.addEventListener(y(a.e),a.proxy,g(a,f))})}function x(t,e,n,i,r){var o=h(t);(e||"").split(/\s/).forEach(function(e){p(t,e,n,i).forEach(function(e){delete a[o][e.i],"removeEventListener"in t&&t.removeEventListener(y(e.e),e.proxy,g(e,r))})})}function j(t,n){return(n||!t.isDefaultPrevented)&&(n||(n=t),e.each(T,function(e,i){var r=n[e];t[e]=function(){return this[i]=b,r&&r.apply(n,arguments)},t[i]=E}),t.timeStamp||(t.timeStamp=Date.now()),(n.defaultPrevented!==i?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(t.isDefaultPrevented=b)),t}function S(t){var e,n={originalEvent:t};for(e in t)w.test(e)||t[e]===i||(n[e]=t[e]);return j(n,t)}var i,n=1,r=Array.prototype.slice,o=e.isFunction,s=function(t){return"string"==typeof t},a={},u={},f="onfocusin"in t,c={focus:"focusin",blur:"focusout"},l={mouseenter:"mouseover",mouseleave:"mouseout"};u.click=u.mousedown=u.mouseup=u.mousemove="MouseEvents",e.event={add:v,remove:x},e.proxy=function(t,n){var i=2 in arguments&&r.call(arguments,2);if(o(t)){var a=function(){return t.apply(n,i?i.concat(r.call(arguments)):arguments)};return a._zid=h(t),a}if(s(n))return i?(i.unshift(t[n],t),e.proxy.apply(null,i)):e.proxy(t[n],t);throw new TypeError("expected function")},e.fn.bind=function(t,e,n){return this.on(t,e,n)},e.fn.unbind=function(t,e){return this.off(t,e)},e.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var b=function(){return!0},E=function(){return!1},w=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,T={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};e.fn.delegate=function(t,e,n){return this.on(e,t,n)},e.fn.undelegate=function(t,e,n){return this.off(e,t,n)},e.fn.live=function(t,n){return e(document.body).delegate(this.selector,t,n),this},e.fn.die=function(t,n){return e(document.body).undelegate(this.selector,t,n),this},e.fn.on=function(t,n,a,u,f){var c,l,h=this;return t&&!s(t)?(e.each(t,function(t,e){h.on(t,n,a,e,f)}),h):(s(n)||o(u)||u===!1||(u=a,a=n,n=i),(u===i||a===!1)&&(u=a,a=i),u===!1&&(u=E),h.each(function(i,o){f&&(c=function(t){return x(o,t.type,u),u.apply(this,arguments)}),n&&(l=function(t){var i,s=e(t.target).closest(n,o).get(0);return s&&s!==o?(i=e.extend(S(t),{currentTarget:s,liveFired:o}),(c||u).apply(s,[i].concat(r.call(arguments,1)))):void 0}),v(o,t,u,a,n,l||c)}))},e.fn.off=function(t,n,r){var a=this;return t&&!s(t)?(e.each(t,function(t,e){a.off(t,n,e)}),a):(s(n)||o(r)||r===!1||(r=n,n=i),r===!1&&(r=E),a.each(function(){x(this,t,r,n)}))},e.fn.trigger=function(t,n){return t=s(t)||e.isPlainObject(t)?e.Event(t):j(t),t._args=n,this.each(function(){t.type in c&&"function"==typeof this[t.type]?this[t.type]():"dispatchEvent"in this?this.dispatchEvent(t):e(this).triggerHandler(t,n)})},e.fn.triggerHandler=function(t,n){var i,r;return this.each(function(o,a){i=S(s(t)?e.Event(t):t),i._args=n,i.target=a,e.each(p(a,t.type||t),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t){e.fn[t]=function(e){return 0 in arguments?this.bind(t,e):this.trigger(t)}}),e.Event=function(t,e){s(t)||(e=t,t=e.type);var n=document.createEvent(u[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),j(n)}}(e),function(e){function p(t,n,i){var r=e.Event(n);return e(t).trigger(r,i),!r.isDefaultPrevented()}function d(t,e,n,r){return t.global?p(e||i,n,r):void 0}function m(t){t.global&&0===e.active++&&d(t,null,"ajaxStart")}function g(t){t.global&&!--e.active&&d(t,null,"ajaxStop")}function y(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||d(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void d(e,n,"ajaxSend",[t,e])}function v(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),d(n,r,"ajaxSuccess",[e,n,t]),b(o,e,n)}function x(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),d(i,o,"ajaxError",[n,i,t||e]),b(e,n,i)}function b(t,e,n){var i=n.context;n.complete.call(i,e,t),d(n,i,"ajaxComplete",[e,n]),g(n)}function E(t,e,n){if(n.dataFilter==w)return t;var i=n.context;return n.dataFilter.call(i,t,e)}function w(){}function T(t){return t&&(t=t.split(";",2)[0]),t&&(t==c?"html":t==f?"json":a.test(t)?"script":u.test(t)&&"xml")||"text"}function j(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function S(t){t.processData&&t.data&&"string"!=e.type(t.data)&&(t.data=e.param(t.data,t.traditional)),!t.data||t.type&&"GET"!=t.type.toUpperCase()&&"jsonp"!=t.dataType||(t.url=j(t.url,t.data),t.data=void 0)}function C(t,n,i,r){return e.isFunction(n)&&(r=i,i=n,n=void 0),e.isFunction(i)||(r=i,i=void 0),{url:t,data:n,success:i,dataType:r}}function P(t,n,i,r){var o,s=e.isArray(n),a=e.isPlainObject(n);e.each(n,function(n,u){o=e.type(u),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&s?t.add(u.name,u.value):"array"==o||!i&&"object"==o?P(t,u,i,n):t.add(n,u)})}var r,o,n=+new Date,i=t.document,s=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,a=/^(?:text|application)\/javascript/i,u=/^(?:text|application)\/xml/i,f="application/json",c="text/html",l=/^\s*$/,h=i.createElement("a");h.href=t.location.href,e.active=0,e.ajaxJSONP=function(r,o){if(!("type"in r))return e.ajax(r);var c,p,s=r.jsonpCallback,a=(e.isFunction(s)?s():s)||"Zepto"+n++,u=i.createElement("script"),f=t[a],l=function(t){e(u).triggerHandler("error",t||"abort")},h={abort:l};return o&&o.promise(h),e(u).on("load error",function(n,i){clearTimeout(p),e(u).off().remove(),"error"!=n.type&&c?v(c[0],h,r,o):x(null,i||"error",h,r,o),t[a]=f,c&&e.isFunction(f)&&f(c[0]),f=c=void 0}),y(h,r)===!1?(l("abort"),h):(t[a]=function(){c=arguments},u.src=r.url.replace(/\?(.+)=\?/,"?$1="+a),i.head.appendChild(u),r.timeout>0&&(p=setTimeout(function(){l("timeout")},r.timeout)),h)},e.ajaxSettings={type:"GET",beforeSend:w,success:w,error:w,complete:w,context:null,global:!0,xhr:function(){return new t.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:f,xml:"application/xml, text/xml",html:c,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0,dataFilter:w},e.ajax=function(n){var u,f,s=e.extend({},n||{}),a=e.Deferred&&e.Deferred();for(r in e.ajaxSettings)void 0===s[r]&&(s[r]=e.ajaxSettings[r]);m(s),s.crossDomain||(u=i.createElement("a"),u.href=s.url,u.href=u.href,s.crossDomain=h.protocol+"//"+h.host!=u.protocol+"//"+u.host),s.url||(s.url=t.location.toString()),(f=s.url.indexOf("#"))>-1&&(s.url=s.url.slice(0,f)),S(s);var c=s.dataType,p=/\?.+=\?/.test(s.url);if(p&&(c="jsonp"),s.cache!==!1&&(n&&n.cache===!0||"script"!=c&&"jsonp"!=c)||(s.url=j(s.url,"_="+Date.now())),"jsonp"==c)return p||(s.url=j(s.url,s.jsonp?s.jsonp+"=?":s.jsonp===!1?"":"callback=?")),e.ajaxJSONP(s,a);var O,d=s.accepts[c],g={},b=function(t,e){g[t.toLowerCase()]=[t,e]},C=/^([\w-]+:)\/\//.test(s.url)?RegExp.$1:t.location.protocol,N=s.xhr(),P=N.setRequestHeader;if(a&&a.promise(N),s.crossDomain||b("X-Requested-With","XMLHttpRequest"),b("Accept",d||"*/*"),(d=s.mimeType||d)&&(d.indexOf(",")>-1&&(d=d.split(",",2)[0]),N.overrideMimeType&&N.overrideMimeType(d)),(s.contentType||s.contentType!==!1&&s.data&&"GET"!=s.type.toUpperCase())&&b("Content-Type",s.contentType||"application/x-www-form-urlencoded"),s.headers)for(o in s.headers)b(o,s.headers[o]);if(N.setRequestHeader=b,N.onreadystatechange=function(){if(4==N.readyState){N.onreadystatechange=w,clearTimeout(O);var t,n=!1;if(N.status>=200&&N.status<300||304==N.status||0==N.status&&"file:"==C){if(c=c||T(s.mimeType||N.getResponseHeader("content-type")),"arraybuffer"==N.responseType||"blob"==N.responseType)t=N.response;else{t=N.responseText;try{t=E(t,c,s),"script"==c?(1,eval)(t):"xml"==c?t=N.responseXML:"json"==c&&(t=l.test(t)?null:e.parseJSON(t))}catch(i){n=i}if(n)return x(n,"parsererror",N,s,a)}v(t,N,s,a)}else x(N.statusText||null,N.status?"error":"abort",N,s,a)}},y(N,s)===!1)return N.abort(),x(null,"abort",N,s,a),N;var M="async"in s?s.async:!0;if(N.open(s.type,s.url,M,s.username,s.password),s.xhrFields)for(o in s.xhrFields)N[o]=s.xhrFields[o];for(o in g)P.apply(N,g[o]);return s.timeout>0&&(O=setTimeout(function(){N.onreadystatechange=w,N.abort(),x(null,"timeout",N,s,a)},s.timeout)),N.send(s.data?s.data:null),N},e.get=function(){return e.ajax(C.apply(null,arguments))},e.post=function(){var t=C.apply(null,arguments);return t.type="POST",e.ajax(t)},e.getJSON=function(){var t=C.apply(null,arguments);return t.dataType="json",e.ajax(t)},e.fn.load=function(t,n,i){if(!this.length)return this;var a,r=this,o=t.split(/\s/),u=C(t,n,i),f=u.success;return o.length>1&&(u.url=o[0],a=o[1]),u.success=function(t){r.html(a?e("<div>").html(t.replace(s,"")).find(a):t),f&&f.apply(r,arguments)},e.ajax(u),this};var N=encodeURIComponent;e.param=function(t,n){var i=[];return i.add=function(t,n){e.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(N(t)+"="+N(n))},P(i,t,n),i.join("&").replace(/%20/g,"+")}}(e),function(t){t.fn.serializeArray=function(){var e,n,i=[],r=function(t){return t.forEach?t.forEach(r):void i.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(i,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&r(t(o).val())}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(e),function(t,e){function y(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()}function v(t){return i?i+t:t.toLowerCase()}var i,a,u,f,c,l,h,p,d,m,n="",r={Webkit:"webkit",Moz:"",O:"o"},o=document.createElement("div"),s=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,g={};o.style.transform===e&&t.each(r,function(t,r){return o.style[t+"TransitionProperty"]!==e?(n="-"+t.toLowerCase()+"-",i=r,!1):void 0}),a=n+"transform",g[u=n+"transition-property"]=g[f=n+"transition-duration"]=g[l=n+"transition-delay"]=g[c=n+"transition-timing-function"]=g[h=n+"animation-name"]=g[p=n+"animation-duration"]=g[m=n+"animation-delay"]=g[d=n+"animation-timing-function"]="",t.fx={off:i===e&&o.style.transitionProperty===e,speeds:{_default:400,fast:200,slow:600},cssPrefix:n,transitionEnd:v("TransitionEnd"),animationEnd:v("AnimationEnd")},t.fn.animate=function(n,i,r,o,s){return t.isFunction(i)&&(o=i,r=e,i=e),t.isFunction(r)&&(o=r,r=e),t.isPlainObject(i)&&(r=i.easing,o=i.complete,s=i.delay,i=i.duration),i&&(i=("number"==typeof i?i:t.fx.speeds[i]||t.fx.speeds._default)/1e3),s&&(s=parseFloat(s)/1e3),this.anim(n,i,r,o,s)},t.fn.anim=function(n,i,r,o,v){var x,E,j,b={},w="",T=this,S=t.fx.transitionEnd,C=!1;if(i===e&&(i=t.fx.speeds._default/1e3),v===e&&(v=0),t.fx.off&&(i=0),"string"==typeof n)b[h]=n,b[p]=i+"s",b[m]=v+"s",b[d]=r||"linear",S=t.fx.animationEnd;else{E=[];for(x in n)s.test(x)?w+=x+"("+n[x]+") ":(b[x]=n[x],E.push(y(x)));w&&(b[a]=w,E.push(a)),i>0&&"object"==typeof n&&(b[u]=E.join(", "),b[f]=i+"s",b[l]=v+"s",b[c]=r||"linear")}return j=function(e){if("undefined"!=typeof e){if(e.target!==e.currentTarget)return;t(e.target).unbind(S,j)}else t(this).unbind(S,j);C=!0,t(this).css(g),o&&o.call(this)},i>0&&(this.bind(S,j),setTimeout(function(){C||j.call(T)},1e3*(i+v)+25)),this.size()&&this.get(0).clientLeft,this.css(b),0>=i&&setTimeout(function(){T.each(function(){j.call(this)})},0),this},o=null}(e),function(e,n){function u(t,i,r,o,s){"function"!=typeof i||s||(s=i,i=n);var a={opacity:r};return o&&(a.scale=o,t.css(e.fx.cssPrefix+"transform-origin","0 0")),t.animate(a,i,null,s)}function f(t,n,i,r){return u(t,n,0,i,function(){s.call(e(this)),r&&r.call(this)})}var i=t.document,o=(i.documentElement,e.fn.show),s=e.fn.hide,a=e.fn.toggle;e.fn.show=function(t,e){return o.call(this),t===n?t=0:this.css("opacity",0),u(this,t,1,"1,1",e)},e.fn.hide=function(t,e){return t===n?s.call(this):f(this,t,"0,0",e)},e.fn.toggle=function(t,i){return t===n||"boolean"==typeof t?a.call(this,t):this.each(function(){var n=e(this);n["none"==n.css("display")?"show":"hide"](t,i)})},e.fn.fadeTo=function(t,e,n){return u(this,t,e,null,n)},e.fn.fadeIn=function(t,e){var n=this.css("opacity");return n>0?this.css("opacity",0):n=1,o.call(this).fadeTo(t,n,e)},e.fn.fadeOut=function(t,e){return f(this,t,null,e)},e.fn.fadeToggle=function(t,n){return this.each(function(){var i=e(this);i[0==i.css("opacity")||"none"==i.css("display")?"fadeIn":"fadeOut"](t,n)})}}(e),function(t){function r(e){return e=t(e),!(!e.width()&&!e.height())&&"none"!==e.css("display")}function f(t,e){t=t.replace(/=#\]/g,'="#"]');var n,i,r=s.exec(t);if(r&&r[2]in o&&(n=o[r[2]],i=r[3],t=r[1],i)){var a=Number(i);i=isNaN(a)?i.replace(/^["']|["']$/g,""):a}return e(t,n,i)}var e=t.zepto,n=e.qsa,i=e.matches,o=t.expr[":"]={visible:function(){return r(this)?this:void 0},hidden:function(){return r(this)?void 0:this},selected:function(){return this.selected?this:void 0},checked:function(){return this.checked?this:void 0},parent:function(){return this.parentNode},first:function(t){return 0===t?this:void 0},last:function(t,e){return t===e.length-1?this:void 0},eq:function(t,e,n){return t===n?this:void 0},contains:function(e,n,i){return t(this).text().indexOf(i)>-1?this:void 0},has:function(t,n,i){return e.qsa(this,i).length?this:void 0}},s=new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),a=/^\s*>/,u="Zepto"+ +new Date;e.qsa=function(i,r){return f(r,function(o,s,f){try{var c;!o&&s?o="*":a.test(o)&&(c=t(i).addClass(u),o="."+u+" "+o);var l=n(i,o)}catch(h){throw console.error("error performing selector: %o",r),h}finally{c&&c.removeClass(u)}return s?e.uniq(t.map(l,function(t,e){return s.call(t,e,l,f)})):l})},e.matches=function(t,e){return f(e,function(e,n,r){return(!e||i(t,e))&&(!n||n.call(t,null,r)===t)})}}(e),function(e){function f(t,e,n,i){return Math.abs(t-e)>=Math.abs(n-i)?t-e>0?"Left":"Right":n-i>0?"Up":"Down"}function c(){s=null,n.last&&(n.el.trigger("longTap"),n={})}function l(){s&&clearTimeout(s),s=null}function h(){i&&clearTimeout(i),r&&clearTimeout(r),o&&clearTimeout(o),s&&clearTimeout(s),i=r=o=s=null,n={}}function p(t){return("touch"==t.pointerType||t.pointerType==t.MSPOINTER_TYPE_TOUCH)&&t.isPrimary}function d(t,e){return t.type=="pointer"+e||t.type.toLowerCase()=="mspointer"+e}var i,r,o,s,u,n={},a=750;e(document).ready(function(){var m,g,x,b,y=0,v=0;"MSGesture"in t&&(u=new MSGesture,u.target=document.body),e(document).bind("MSGestureEnd",function(t){var e=t.velocityX>1?"Right":t.velocityX<-1?"Left":t.velocityY>1?"Down":t.velocityY<-1?"Up":null;e&&(n.el.trigger("swipe"),n.el.trigger("swipe"+e))}).on("touchstart MSPointerDown pointerdown",function(t){(!(b=d(t,"down"))||p(t))&&(x=b?t:t.touches[0],t.touches&&1===t.touches.length&&n.x2&&(n.x2=void 0,n.y2=void 0),m=Date.now(),g=m-(n.last||m),n.el=e("tagName"in x.target?x.target:x.target.parentNode),i&&clearTimeout(i),n.x1=x.pageX,n.y1=x.pageY,g>0&&250>=g&&(n.isDoubleTap=!0),n.last=m,s=setTimeout(c,a),u&&b&&u.addPointer(t.pointerId))}).on("touchmove MSPointerMove pointermove",function(t){(!(b=d(t,"move"))||p(t))&&(x=b?t:t.touches[0],l(),n.x2=x.pageX,n.y2=x.pageY,y+=Math.abs(n.x1-n.x2),v+=Math.abs(n.y1-n.y2))}).on("touchend MSPointerUp pointerup",function(t){(!(b=d(t,"up"))||p(t))&&(l(),n.x2&&Math.abs(n.x1-n.x2)>30||n.y2&&Math.abs(n.y1-n.y2)>30?o=setTimeout(function(){n.el&&(n.el.trigger("swipe"),
n.el.trigger("swipe"+f(n.x1,n.x2,n.y1,n.y2))),n={}},0):"last"in n&&(30>y&&30>v?r=setTimeout(function(){var t=e.Event("tap");t.cancelTouch=h,n.el&&n.el.trigger(t),n.isDoubleTap?(n.el&&n.el.trigger("doubleTap"),n={}):i=setTimeout(function(){i=null,n.el&&n.el.trigger("singleTap"),n={}},250)},0):n={}),y=v=0)}).on("touchcancel MSPointerCancel pointercancel",h),e(t).on("scroll",h)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(t){e.fn[t]=function(e){return this.on(t,e)}})}(e),function(){try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;t.getComputedStyle=function(t,e){try{return n(t,e)}catch(i){return null}}}}(),e});
// 2.0.9
var mobile_stop_moved = {
    /*
        opt:{
            selector: "", // 容器盒选择器（resize_toWindow为false时，需要在样式表中将此盒定高），无默认值
            scroll: true, // 盒内可滚动，默认true
            resize_toWindow: true // 将容器盒自动设置为有效窗口高度(window.innerHeight)，并监听窗口大小改变——解决ios safari浏览器底部工具栏遮挡页面的问题，默认true
        }
    */
    init: function(opt) {
        var opt_default = {
            selector: "",
            scroll: true,
            resize_toWindow: true
        };
        opt = $.extend(opt_default, opt);

        // console.log("here");

        // 默认阻止
        $(window).on("touchmove", function(e) {
            e.preventDefault();
            e.stopPropagation();
        });

        if (opt.scroll) {

            var obj = $(opt.selector);
            obj.css("overflow", "scroll").css({
                "-webkit-overflow-scrolling": "touch",
                "overflow-scrolling": "touch",
                "overflow-x": "hidden"
            });
            var clientY_start;

            $(window).unbind().on("touchstart", function(e) {
                var touches = e.touches || e.originalEvent.touches;
                clientY_start = touches[0].clientY;
            });

            $(window).unbind("touchmove").on("touchmove", function(e) {

                var scrollHeight = obj[0].scrollHeight; // 盒内内容实际滚动高度
                var offsetHeight = obj.height(); // 盒高度
                var scrollTop = obj.scrollTop(); // 盒内内容已滚动高度
                var touches = e.touches || e.originalEvent.touches;
                var clientY_now = touches[0].clientY;
                var canScroll = true;

                var neednt = offsetHeight >= scrollHeight; // 不需要滚动（盒高度>=盒内容高度）
                var topest = scrollTop === 0 && clientY_now > clientY_start; // 本身在页首，还往下拉动页面
                var bottemest = scrollHeight <= (scrollTop + offsetHeight) && clientY_now < clientY_start; // 本身在页尾，还往上拉动页面

                if (neednt || topest || bottemest) {
                    canScroll = false;
                }

                if (!canScroll) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            });
        }

        if (opt.resize_toWindow) {

            var i = 0,
                orientation_old = window.orientation,
                orientation,
                window_size_px = {
                    width: window.innerWidth - (screen.height - window.innerHeight),
                    height: window.innerHeight
                };
            var resize_n = 0;
            var resize_do = function() {
                // console.log("resize:", resize_n + 1);
                if (++resize_n % 2 === 0) {
                    // console.log("return");
                    return;
                }

                setTimeout(function() {
                    orientation = window.orientation;
                    // console.log(orientation == orientation_old);
                    // console.log(window_size_px.height);
                    // console.log($(opt.selector).length);
                    // alert(orientation + ":" + orientation_old + ":" + window_size_px.height);
                    if (orientation == orientation_old) {
                        // console.log("true");
                        $(opt.selector).css("height", window_size_px.height + "px");
                    } else {
                        // console.log("false");
                        $(opt.selector).css("height", window_size_px.width + "px");
                    }
                    // $(opt.selector).css({
                    //     border: "solid 2px #ff0000"
                    // });
                    resize_n = 0;
                }, 0);

                // 专为手机浏览器配置代码，但只解决了安卓浏览器，ios还是没解决
                setTimeout(function() {
                    var innerHeight_px = window.innerHeight;
                    if (orientation == orientation_old)
                        window_size_px.height = innerHeight_px;
                    else
                        window_size_px.width = innerHeight_px;
                    $(opt.selector).css("height", innerHeight_px + "px");
                }, 500);
            };
            resize_do();

            $(window).resize(function() {
                resize_do();
            });
        }
    }
};

if (typeof define === "function" && define.amd) {
    define('lib/mobile_stop_moved',[], function() {
        return mobile_stop_moved;
    });
}
;
/*
 *@ 1.1.3
 *@ 高京
 *@ 20151009
 *@ 判断是否竖屏，横屏自动出黑屏动画
 */
var landscape_mask = {

    init: function() {

        // 加载样式
        landscape_mask.includeCSS("/inc/landscape_mask.min.css");

        // 动态增加遮罩DOM
        var tag_str = "<section class=\"landscape_mask\">" + "<div class=\"mod_div\">" + "<img src=\"/inc/landscape_mask.png\" />" + "<p>为了更好的体验，请使用竖屏浏览</p>" + "</div>" + "</section>";
        $("body").append(tag_str);

        var _selector = $("section.landscape_mask");

        $("p.a").html("0");

        // 发生屏幕旋转和打开页面时，重置遮罩层高度
        var changeDo = function() {

            var window_height_px = $(window).height();

            _selector.css("height", window_height_px + "px");

            $("p.a").html($("p.a").html() + "<br />32:" + window.orientation);
        };

        // 监听窗口大小改变（安卓弹出软键盘时，也会触发）
        var resize_n = 0;
        $(window).resize(function() {
            // 如果当前屏幕朝向等于0，则隐藏遮罩，并return（屏蔽安卓input获得焦点后的resize）。
            // 如朝向不为0，则显示遮罩，并先使所有input,select失去焦点（收起软键盘）后，再重置遮罩层高度
            $("p.a").html($("p.a").html() + "<br />39:window-" + window.orientation);
            if (window.orientation == 0) {
                _selector.removeClass("landscape_mask_show");
                return;
            } else if(!_selector.hasClass("landscape_mask_show"))
                _selector.addClass("landscape_mask_show");

            $("input,select").blur();
            if (resize_n++ > 0)
                return;
            setTimeout(function() {
                changeDo();
                resize_n = 0;
            }, 0);
        });
    },

    includeCSS: function(path) {
        var a = document.createElement("link");
        a.type = "text/css";
        a.rel = "stylesheet";
        a.href = path;
        var head = document.getElementsByTagName("head")[0];
        head.appendChild(a);
    }
};

if (typeof define === "function" && define.amd) {
    define('lib/landscape_mask',[],function() {
        return landscape_mask;
    })
} else
    landscape_mask.init();

/*
    移动端初始化设置
    zepto、横屏、mobile_stop_moved
    高京
    2017-05-25
*/

define('modules/mobile_end_init',[
    "lib/mobile_stop_moved",
    "lib/landscape_mask"
], function(
    $mobile_stop_moved,
    $landscape_mask
) {

    var opt = {
        selector: "div.stoped_wrapper", // 容器盒选择器（resize_toWindow为false时，需要在样式表中将此盒定高），无默认值
        scroll: true, // 盒内可滚动，默认true
        resize_toWindow: true // 将容器盒自动设置为有效窗口高度(window.innerHeight)，并监听窗口大小改变——解决ios safari浏览器底部工具栏遮挡页面的问题，默认true
    };
    $mobile_stop_moved.init(opt);
    $landscape_mask.init();
});
/*
    1.1.1
    高京
    2016-08-29
    JS类库
*/

var functions = {
    init: function() {

        $(function() {
            $(".li_touchstart").on("touchstart mousedown", function(e) {
                e.preventDefault();
                functions.li_click($(this));
            });

            $(".li_click").on("click", function() {
                functions.li_click($(this));
            });
        });
    },

    /*
        高京
        2017-10-25
        过滤表单非法字符
        @str: 需要过滤的字符串
    */
    convers: function(str) {

        var result = str;

        var regExp = new RegExp("\'", "ig");
        result = result.replace(regExp, "&acute;");

        regExp = new RegExp("\<", "ig");
        result = result.replace(regExp, "&lt;");

        regExp = new RegExp("\"", "ig");
        result = result.replace(regExp, "&quot;");

        return result;
    },

    /*
        高京
        2017-08-02
        日期格式化_仿微信
        @_date: 日期
    */
    dateFormat_wx: function(_date) {

        var date = new Date(_date);

        var year = date.getFullYear(),
            month = date.getMonth() + 1,
            day = date.getDate(),
            hour = date.getHours(),
            minute = date.getMinutes();

        var str = "";
        date = new Date();

        if (date.getFullYear() == year && date.getMonth() + 1 == month && date.getDate() == day)
            str = "";
        else {
            str = year + "年";
            // if (month < 10)
            //     str += "0";
            str += month + "月";
            // if (day < 10)
            //     str += "0";
            str += day + "日 ";
        }


        if (hour < 10)
            str += "0";
        str += hour + ":";
        if (minute < 10)
            str += "0";
        str += minute;
        // str += ":";
        // if (second < 10)
        //     str += "0";
        // str += second;

        return str;
    },

    /*
        高京
        2018-01-16
        判断mobile系统，返回 ios | android | others
    */
    judge_mobile_os: function() {
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

        if (isiOS)
            return "ios";
        else if (isAndroid)
            return "android";
        else
            return "others";
    },

    /*
        高京
        2018-01-08
        iphoneX底部需要空出来的高度(px)
    */
    iphoneX_bottom_space_px: 20,

    /*
        高京
        2018-01-16
        给iphoneX+微信浏览器：修改底部fixed盒的bottom；增加占位遮罩层；修改文档流内的占位盒高度
        建议默认将底部fixed盒隐藏，回调中显示

        opt = {
            bottom_fixed_selector: "", // 底部fixed盒的选择器，此盒将被修改bottom，无默认值
            document_fixed_space_selector: "", // 文档流内的占位盒选择器，此盒将被增加高度，无默认值
            fixed_space_div_bgColor: "#fff", // 底部新建占位遮罩盒的背景色，默认"#fff"，建议和页面背景色一致，以免穿帮
            callback: function(fixed_space_div) { // 回调(新建的底部占位遮罩层||undefined)，无论是否为iphoneX+微信浏览器都会执行
                fixed_space_div && fixed_space_div.css({
                    "background": "#000"
                });
            } 
        }
    */
    judge_iphoneX_MicroMessenger_changeStyle: function(opt) {
        var that = this;
        var opt_default = {
            bottom_fixed_selector: "",
            document_fixed_space_selector: "",
            fixed_space_div_bgColor: "#fff",
            callback: function() {}
        };
        opt = $.extend(opt_default, opt);

        var bottom_fixed_space_div;
        if (that.judge_iphoneX() && that.judge_MicroMessenger()) {

            // 设置底部fixed盒的bottom
            $(opt.bottom_fixed_selector).css({
                "bottom": that.iphoneX_bottom_space_px + "px"
            });

            // 新建底部占位遮罩盒
            bottom_fixed_space_div = $(document.createElement("div"))
                .addClass("bottom_fixed_space_div")
                .css({
                    "position": "fixed",
                    "left": "0",
                    "bottom": "0",
                    "width": "100vw",
                    "height": that.iphoneX_bottom_space_px + "px",
                    "background": opt.fixed_space_div_bgColor
                })
                .appendTo($("body"));

            // 调整文档流内的占位盒高度
            var document_fixed_space_obj = $(opt.document_fixed_space_selector)
            document_fixed_space_obj.length > 0 && document_fixed_space_obj.css({
                "height": (parseFloat(document_fixed_space_obj.css("height").replace("px", "")) + that.iphoneX_bottom_space_px).toString() + "px"
            });
        }

        if (opt.callback)
            opt.callback(bottom_fixed_space_div);
    },

    /*
        高京
        2018-01-08
        判断ios设备是不是iphoneX (true/false)
    */
    judge_iphoneX: function() {
        var regExp = new RegExp("iphone", "ig"),
            isIphone = regExp.test(window.navigator.userAgent),
            isX = isIphone && screen.availHeight == 812;

        return isX;
    },

    /*
        高京
        2018-01-08
        判断是不是微信浏览器 (true/false)
    */
    judge_MicroMessenger: function() {
        var regExp = new RegExp("MicroMessenger", "ig"),
            isMicroMessenger = regExp.test(window.navigator.userAgent);

        return isMicroMessenger;
    },

    /*
        胡天培
        2018-01-08
        解决移动端h5页面文档流中input和textarea获得焦点后被键盘遮挡的bug
        目前的思路是将焦点滚动到一个安全的可视位置
        ios 10/11.2 可测。11.1实在找不到
        android 尽量多机型和系统

        2018-01-08 胡天培
        ios问题不大，只处理安卓

        @opt = {
            Listener_selector: "",   //监听focus的dom选择器，默认"input,textarea"
            OutBox_selector:"",      //包裹被监听元素的最外层选择器，高度为屏幕高度的元素 无默认
            scroll_selector:"",      //向上滚动的核选择器 默认为：body
        }
    */
    fix_h5_input_focus_position: function(opt) {

        var that = this;

        var opt_default = {
            Listener_selector: "input,textarea"
        };

        opt = $.extend(opt_default, opt);

        // 监听对象
        var listener_obj = $(opt.Listener_selector);

        // focus的handler
        var focus_handler = function() {

            //判断设备
            var os = that.judge_mobile_os();
            if (os == "android") {

                //获得页面可视区域的高度
                var _height = $(window).height();

                //将外盒的高度设为此高度
                $(opt.OutBox_selector).css("height", _height + "px");

                //包裹监听元素的外盒对象
                var OutBox_selector_obj = $(opt.OutBox_selector);
                OutBox_selector_obj.css({
                    "transition": "all .2s"
                });

                //获取当前获取焦点的input
                var clickObj = $(opt.Listener_selector);

                //获取已滚动的距离
                var scrollTop;
                
                //获得距离顶部的高度
                var Top;
                
                //获取焦点时
                clickObj.on("focus", function() {
                
                    //获取向上滚动的距离
                    scrollTop = $(".wrapper").scrollTop();
                
                    //获取元素距离顶部的距离
                    Top = $(this).offset().top;
                
                    setTimeout(function() {
                        //向上滚动一定距离
                        $(opt.scroll_selector).scrollTop(scrollTop + Top - 100);
                    }, 1000);
                });
            }
        };


        // 监听focus
        listener_obj.unbind("focus").on("focus", focus_handler);
    },

    /*
        高京
        2017-08-02
        解决 h5页面 fixed居底input被键盘遮挡的问题
        
        2018-01-14：
        iphoneX(测试版本11.2.2)+微信浏览器：fixed居底的input移动到顶部
        其他环境不处理

        @opt = {
            dom_selector, // 监听focus和blur的Dom的选择器
            autocheck: false, // 自动执行innerHeight的改变监听，解决h5页面input.focus()后不能进入.on("focus")的handler的问题。默认false
            callback // 执行完focus_handler和blur_handler的回调
        }
    */
    fix_fixed_bottom_input: function(opt) {

        var opt_default = {
            autocheck: false
        };
        opt = $.extend(opt_default, opt);

        var dom_obj = $(opt.dom_selector);
        if (dom_obj.length === 0)
            return;

        // dom_obj的父盒遍历，position=fixed
        var box_obj = dom_obj.parent();
        while (box_obj.length > 0 && box_obj.css("position") != "fixed") {
            // console.log(box_obj);
            box_obj = box_obj.parent();
        }

        // 判断是否为 iphoneX
        var isIphoneX = (function() {
            var regExp = new RegExp("iphone", "ig"),
                isIphone = regExp.test(window.navigator.userAgent),
                isX = isIphone && screen.availHeight == 812;

            return isX;
        })();

        // 判断是否为微信浏览器
        var isMicroMessenger = (function() {
            var regExp = new RegExp("MicroMessenger", "ig"),
                isMicroMessenger = regExp.test(window.navigator.userAgent);

            return isMicroMessenger;
        })();

        // 非（iphoneX+微信浏览器）退出
        if (!(isIphoneX && isMicroMessenger))
            return;

        var box_obj_bottom; // 原先的bottom值
        // foucs处理
        var focus_handler = function() {
            box_obj_bottom = box_obj.css("bottom");
            box_obj.css({
                bottom: "100px"
            });

            $(".bottom_fixed_space_div").css("height", "100px");

            if (opt.callback)
                opt.callback();
        };

        // blur处理
        var blur_handler = function() {
            setTimeout(function() {

                box_obj.css({
                    "bottom": box_obj_bottom
                });

                $(".bottom_fixed_space_div").css("height", box_obj_bottom);

                if (opt.callback)
                    opt.callback();
            }, 0);
        };

        // 监听focus
        dom_obj.unbind("focus").on("focus", focus_handler);

        // 监听blur
        dom_obj.unbind("blur").on("blur", blur_handler);

        if (opt.autocheck)
            focus_handler();
    },


    /*
        高京
        2017-06-07
        乘除法计算，解决小数计算误差
        * kind：1-乘法（cal1×cal2） 2-除法（cal1÷cal2）
    */
    calculate: function(kind, cal1, cal2) {
        cal1 = cal1 || 1;
        cal2 = cal2 || 1;
        var lastDealNum = 0,
            i,
            str1 = cal1.toString(),
            str2 = cal2.toString(),
            str_lastDealNum = "1";

        // 根据小数点位置，获取需要处理的倍数
        var get_lastDealNum = function(str) {
            i = str.indexOf(".");
            if (i == -1)
                return 0;
            else
                return str.length - i - 1;
        };

        // 累加str1和str2对应的倍数
        lastDealNum += get_lastDealNum(str1);
        lastDealNum += get_lastDealNum(str2);

        // 根据需要处理的倍数，生成最后处理的数
        for (i = 0; i < lastDealNum; i++) {
            str_lastDealNum += "0";
        }

        // 计算
        switch (kind) {
            case 1:
                return parseFloat(str1.replace(".", "")) * parseFloat(str2.replace(".", "")) / parseFloat(str_lastDealNum);
            case 2:
                return parseFloat(str1.replace(".", "")) / parseFloat(str2.replace(".", "")) / parseFloat(str_lastDealNum);
            default:
                return 0;

        }
    },

    /*
        高京
        2016-09-10

        改变容器的scrollTop属性动画方法——解决zepto不支持animate改变scrollTop的动画问题
        
        opt = {
            obj_selector: "div.box", // 滚动元素。默认：window
            toTop_px: 0, // 滚至位置，像素。默认：0
            durTime_ms: 200, // 滚动至toTop_px所用时间，毫秒。默认：200
            callback: function(){} // 回调方法
        };

        使用时可以先用animate尝试改变，成功后再次调用此方法。如：
            $("html,body").animate({ scrollTop: "0px" }, 200, function() {
                functions.scrollTop({
                    callback: function() {
                        console.log("success");
                    }
                });
            });
    */

    scrollTop: function(opt) {
        var opt_default = {
            obj_selector: window,
            toTop_px: 0,
            durTime_ms: 200
        };
        opt = $.extend(opt_default, opt);

        if (opt.obj_selector === "window")
            opt.obj_selector = window;

        var perTime = 20;

        var scrollTop_selector = opt.obj_selector == window ? "html,body" : opt.obj_selector;
        var obj = $(scrollTop_selector);
        var top_now_px = obj.scrollTop();
        var top_per_px = (opt.toTop_px - top_now_px) / opt.durTime_ms * perTime;

        var set_scrollTop = function() {
            obj.scrollTop(obj.scrollTop() + top_per_px);
            var stop_toTop_bool = top_per_px <= 0 && (obj.scrollTop() + top_per_px) <= opt.toTop_px;
            var stop_toDown_bool = top_per_px >= 0 && (obj.scrollTop() + top_per_px) >= opt.toTop_px;
            if (stop_toTop_bool || stop_toDown_bool) {
                obj.scrollTop(opt.toTop_px);

                if (opt.callback)
                    opt.callback();
                return;
            } else {
                stop_toDown_bool = top_per_px >= 0 && (obj.scrollTop() + $(window).height() >= obj[0].scrollHeight);
                if (!stop_toDown_bool)
                    setTimeout(function() {
                        set_scrollTop();
                    }, perTime);
            }
        };

        set_scrollTop();
    },

    /*
        高京
        2016-02-24
        复制对象
            myOjb: 源对象
    */
    clone: function(myObj) {
        if (typeof(myObj) != 'object') return myObj;
        if (myObj === null) return myObj;

        var myNewObj = {};

        for (var i in myObj)
            myNewObj[i] = functions.clone(myObj[i]);

        return myNewObj;
    },
    /*
        高京
        2016-01-02
        插入css3的keyframes rule
            style：rule
    */
    insert_keyframe: function(style) {
        var _obj = document.styleSheets[0];
        if (_obj.insertRule)
            _obj.insertRule(style, 0);
        else
            _obj.appendRule(style, 0);
    },

    /*
        高京
        2016-01-02
        监听webkitAnimation
            selector：要监听的selector
            Callback_end：animation结束时的回调，可为null
            Callback_start：animation开始时的回调，可为null
            Callback_iteration：animation进行循环时的回调，可为null
    */
    webkitAnimationListen: function(selector, Callback_end, Callback_start, Callback_iteration) {
        var obj = document.querySelector(selector);
        if (Callback_end) {
            obj.addEventListener("webkitAnimationEnd", Callback_end);
        }
        if (Callback_start) {
            obj.addEventListener("webkitAnimationStart", Callback_start);
        }
        if (Callback_iteration) {
            obj.addEventListener("webkitAnimationIteration", Callback_iteration);
        }
    },

    /*
        高京
        2016-01-02
        移动端解决微信浏览器上下灰条并执行内部移动
            需要jquery或zepto支持
            selector: 固定高度的盒选择器。如.panel
            overflow_scrolling：是否执行盒内部移动。true-移动 else-不移动
    */
    mobile_stop_moved: function(selector, overflow_scrolling) {
        $(selector).css("overflow", "scroll");

        // 终止body应有的滚动事件
        $(document).on('touchmove', function(e) {
            e.preventDefault();
        });

        if (overflow_scrolling) {
            // $(selector).css("overflow", "scroll");
            $(selector).css("-webkit-overflow-scrolling", "touch");
            $("body").on('touchstart', selector, function(e) {
                var el = e.currentTarget;
                if (el.scrollTop === 0) {
                    el.scrollTop = 1;
                } else if (el.scrollHeight == el.scrollTop + el.offsetHeight) {
                    el.scrollTop = el.scrollTop - 1;
                }

            });
            $("body").on('touchmove', selector, function(e) {
                var el = e.currentTarget;
                if (el.scrollTop === 0)
                    return;
                e.stopPropagation();
            });
        }
    },

    /*
     *@高京
     *@20150909
     *li_click的点击事件转向方法
     */
    li_click: function(selector) {
        $("#link_new_window").remove();
        $("body").append("<a id=\"link_new_window\" href=\"" + $(selector).attr("url") + "\" target=\"" + $(selector).attr("target") + "\" style=\"cursor:pointer\"><span></span></a>");
        //safari
        try {
            var e = document.createEvent('MouseEvent');
            e.initEvent('click', false, false);
            var sub = document.getElementById("link_new_window");
            sub.dispatchEvent(e);
        }
        //!safari
        catch (ee) {
            $("#link_new_window span").click();
        }
    },

    /*
     *@高京
     *@20151006
     *在页面中引用其他js文件
     */
    includeJS: function(path) {
        var a = document.createElement("script");
        a.type = "text/javascript";
        a.src = path;
        var head = document.getElementsByTagName("head")[0];
        head.appendChild(a);
    },

    /*
     *@高京
     *@20151010
     *在页面中引用css文件
     */
    includeCSS: function(path) {
        var a = document.createElement("link");
        a.type = "text/css";
        a.rel = "stylesheet";
        a.href = path;
        var head = document.getElementsByTagName("head")[0];
        head.appendChild(a);
    },

    /*
     *@高京
     *@20151023
     *获得地址栏参数集，返回JSON对象
     */
    getQueryParas: function() {

        var Json_obj;

        var str = functions.getQueryParas_str(1, "");
        Json_obj = JSON.parse(str);

        return Json_obj;
    },

    /*
     *@高京
     *@20151023
     *自动获得地址栏参数集，并拼接为地址栏字符串：a=1&b=2&c=3
     *Para：过滤掉的参数名（键），多个用|分隔，区分大小写
     */
    transParameters: function(Para) {
        return functions.getQueryParas_str(2, Para);
    },

    /*
     *@高京
     *@20151023
     *获得地址栏参数集，返回JSON字符串或地址栏字符串
     *Kind：拼接种类。1-JSON字符串；2-地址栏字符串
     *Para：过滤掉的参数名（键），多个用|分隔
     */
    getQueryParas_str: function(Kind, Para) {
        var url = location.href;
        var s = url.indexOf("?");
        var str = "";

        //将|分隔的Para替换为<><><>格式
        try {
            Para = "<" + Para.replace(/\|/g, "><") + ">";
        } catch (e) {
            console.log("e:" + e);
        }


        if (s > -1) {
            url = url.substring(s + 1);
            var e = url.indexOf("=");
            var key;
            var value;
            while (e > -1) {
                key = url.substring(0, e).replace("&", "");

                //判断获得的键名是否过滤
                if (Para.indexOf("<" + key + ">") > -1) {
                    e = url.indexOf("&");
                    if (e == -1)
                        break;
                    url = url.substring(e + 1);
                    e = url.indexOf("=");
                    continue;
                }

                url = url.substring(e + 1);
                e = url.indexOf("&");
                if (e == -1)
                    value = url.substring(0);
                else
                    value = url.substring(0, e);
                url = url.substring(e + 1);
                e = url.indexOf("=");
                if (str !== "") {
                    if (Kind == 1)
                        str += ",";
                    else
                        str += "&";
                }

                if (Kind == 1)
                    str += "\"" + key + "\":\"" + value + "\"";
                else
                    str += key.replace("&", "") + "=" + value;
            }
        }

        if (Kind == 1) {
            str = "{" + str + "}";
        }

        return str;
    },

    /*
     *@高京
     *@20150909
     *判断是否为PC端访问，返回true/false
     */
    isPc: function() {
        var system = {
            win: false,
            mac: false,
            xll: false
        };

        //检测平台
        var p = navigator.platform;
        //alert(p);
        system.win = p.indexOf("Win") === 0;
        system.mac = p.indexOf("Mac") === 0;
        system.x11 = (p === "X11") || (p.indexOf("Linux") === 0);

        if (system.win || system.mac || system.xll) {
            return true;
        } else {
            return false;
        }
    },

    /*
     *@陈斌
     *@20160103
     * 传入字符串。返回字符串长度数值
     */

    StrLength: function(Str) {
        var _i = 0;
        var _n = Str.length;
        var _c; //遍历Str时的Char值
        var _l = 0; //记录字符串长度
        for (_i; _i < _n; _i++) {

            //根据字符ASCII判断占用字节数
            _c = Str.charCodeAt(_i);
            if (_c <= 126)
                _l += 1;
            else
                _l += 2;
        }

        return _l;
    }
};

if (typeof define === "function" && define.amd) {
    define('lib/functions',[],function() {
        functions.init();
        return functions;
    });
} else {
    functions.init();
};
/*
    2.3.2
    高京
    2016-10-25

    this = {
        dom_bg_layer: 背景层,
        dom_info_box: 内容层,
        dom_info_bottom_fixed_box: 底部fixed层
        dom_info_jroll_box: 内容jroll层,
        dom_info_p: 段落层,
        dom_image_box: 图片层,
        dom_close_box: 关闭层,
        dom_close_image: 关闭图片,
        dom_image_ul: 图片ul盒,
        dom_image_li: 图片li盒,
        dom_arrow_left_box: 图片左箭头盒,
        dom_arrow_left_image: 图片左箭头,
        dom_arrow_right_box: 图片右箭头盒,
        dom_arrow_right_image: 图片右箭头
    }
*/
function LayerShow() {
    return {
        // 图片尺寸占window的比例
        image_size_percent_from_window_width: 0.8,
        image_size_percent_from_window_height: 0.9,

        // 标记是否正在执行图片切换
        image_sliding: false,

        // 创建DOM
        create_dom: function() {

            var _this = this;
            var dom_body = $("body");

            // 背景层
            _this.dom_bg_layer = $(document.createElement("div"))
                .css({
                    "position": "fixed",
                    "top": 0,
                    "left": 0,
                    "opacity": 0,
                    "filter": "alpha(opacity=0)",
                    "-moz-opacity": 0
                })
                .appendTo(dom_body);

            // 内容层
            _this.dom_info_box = $(document.createElement("div"))
                .attr("id", "info_wrapper")
                .css({
                    "position": "fixed",
                    "display": "none",
                    "top": "0",
                    "left": "0",
                    "padding": "0",
                    "margin": "0"
                })
                .appendTo(dom_body);

            // 底部fixed层
            _this.dom_info_bottom_fixed_box = $(document.createElement("div")).appendTo(_this.dom_info_box);

            // 内容jroll层
            _this.dom_info_jroll_box = $(document.createElement("div"))
                .attr("class", "jroll")
                .prependTo(_this.dom_info_box);

            // 段落层
            _this.dom_info_p = $(document.createElement("p")).css("margin", "0").appendTo(_this.dom_info_jroll_box);

            // 图片层
            _this.dom_image_box = $(document.createElement("div"))
                .css({
                    "position": "fixed",
                    "display": "none",
                    "overflow": "hidden",
                    "top": "0",
                    "left": "0"
                })
                .appendTo(dom_body);

            // 关闭层
            _this.dom_close_box = $(document.createElement("div"))
                .css({
                    "position": "fixed",
                    "display": "none",
                    "top": "10px",
                    "right": "10px"
                })
                .appendTo(dom_body);

            // 关闭图片
            _this.dom_close_image = $(document.createElement("img"))
                .css({
                    "cursor": "pointer"
                })
                .appendTo(_this.dom_close_box)
                .on("touchstart mousedown", function(e) {
                    e.preventDefault();
                    _this.close.apply(_this);
                });

            // 图片ul盒
            _this.dom_image_ul = $(document.createElement("ul"))
                .css({
                    "position": "absolute",
                    "list-style": "none",
                    "padding": 0,
                    "margin": 0
                })
                .appendTo(_this.dom_image_box);

            // 图片li盒
            _this.dom_image_li = $(document.createElement("li"));

            // 图片左箭头盒
            _this.dom_arrow_left_box = $(document.createElement("div"))
                .css({
                    "position": "absolute",
                    "display": "none",
                    "text-align": "center"
                })
                .appendTo(_this.dom_image_box);

            // 图片左箭头
            _this.dom_arrow_left_image = $(document.createElement("img"))
                .css({
                    "display": "inline"
                })
                .appendTo(_this.dom_arrow_left_box);

            // 图片右箭头盒
            _this.dom_arrow_right_box = $(document.createElement("div"))
                .css({
                    "position": "absolute",
                    "display": "none"
                })
                .appendTo(_this.dom_image_box);

            // 图片右箭头
            _this.dom_arrow_right_image = $(document.createElement("img"))
                .css({
                    "display": "inline"
                })
                .appendTo(_this.dom_arrow_right_box);
        },

        // 设置宽高和位置
        resize: function() {
            var _this = this;

            // 获得窗口尺寸
            _this.window_width_px = $(window).width();
            _this.window_height_px = $(window).height();

            // 计算图片li盒的宽度（含margin-left）
            _this.li_width_px = _this.window_width_px * _this.image_size_percent_from_window_width;
            _this.li_marginLeft_px = _this.window_width_px * (1 - _this.image_size_percent_from_window_width) / 2;
            _this.li_item_width_px = _this.li_width_px + _this.li_marginLeft_px;

            // 背景层
            _this.dom_bg_layer.css({
                // "width": _this.window_width_px + "px",
                // "height": _this.window_height_px + "px",
                "width": "100%",
                "height": "100%",
                "background": _this.Paras.bg_color,
                "z-index": _this.Paras.z_index
            });

            // 关闭按钮层
            if (_this.Paras.Pics_close_show) {
                _this.imageLoad(_this.Paras.Pics_close_path, function($img) {

                    var box_size = {
                        width: _this.window_width_px * 0.1,
                        height: _this.window_width_px * 0.1
                    };
                    var img_size = _this.imageGetSize($img, box_size);

                    _this.dom_close_box.css({
                        "width": img_size.img_width + "px",
                        "height": img_size.img_height + "px",
                        "z-index": _this.Paras.z_index + 2
                    });

                    _this.dom_close_image.css({
                        "width": img_size.img_width + "px",
                        "height": img_size.img_height + "px"
                    }).attr("src", _this.Paras.Pics_close_path);

                    if (_this.Paras.showKind == 1)
                        _this.dom_close_box.appendTo(_this.dom_image_box);
                    else if (_this.Paras.showKind == 2)
                        _this.dom_close_box.appendTo(_this.dom_body);

                    // _this.dom_close_box.show(0);

                });
            }

            if (_this.Paras.showKind == 1) {

                // 图片层
                _this.dom_image_box.css({
                    "width": _this.window_width_px + "px",
                    "height": _this.window_height_px + "px",
                    "z-index": _this.Paras.z_index + 1
                });

                // 图片li盒
                var li_obj = _this.dom_image_ul.find("li");
                li_obj.css({
                    "width": _this.li_width_px + "px",
                    "height": _this.window_height_px * _this.image_size_percent_from_window_height + "px",
                    "margin-top": _this.window_height_px * (1 - _this.image_size_percent_from_window_height) / 2 + "px",
                    "margin-left": _this.li_marginLeft_px + "px"
                });

                // 图片ul盒
                _this.dom_image_ul.css({
                    "width": _this.li_item_width_px * li_obj.length + "px",
                    "height": _this.window_height_px + "px",
                    "top": 0,
                    "left": 0
                });

                // 左箭头 及 点击监听
                _this.imageLoad(_this.Paras.Pics_arrow_left, function($img) {

                    // 获得宽高
                    var arrow_width_px = _this.li_marginLeft_px * 0.8;
                    if (arrow_width_px > $img.width)
                        arrow_width_px = $img.width;
                    var arrow_height_px = arrow_width_px / $img.width * $img.height;

                    // 盒位置和宽高
                    _this.dom_arrow_left_box
                        .css({
                            "width": arrow_width_px + "px",
                            "height": arrow_height_px + "px",
                            "left": _this.li_marginLeft_px * 0.1,
                            "top": "50%",
                            "margin-top": "-" + (arrow_height_px / 2) + "px"
                        })
                        .unbind().on("touchstart mousedown", function(e) {
                            e.preventDefault();
                            _this.imageUlSlideLeft.apply(_this, [1]);
                        });

                    // 装载图片
                    _this.dom_arrow_left_image.attr("src", _this.Paras.Pics_arrow_left)
                        .css({
                            "cursor": "pointer",
                            "width": arrow_width_px + "px",
                            "height": arrow_height_px + "px"
                        });
                });

                // 右箭头 及 点击监听
                _this.imageLoad(_this.Paras.Pics_arrow_right, function($img) {

                    // 获得宽高
                    var arrow_width_px = _this.li_marginLeft_px * 0.8;
                    if (arrow_width_px > $img.width)
                        arrow_width_px = $img.width;
                    var arrow_height_px = arrow_width_px / $img.width * $img.height;

                    // 盒位置和宽高
                    _this.dom_arrow_right_box
                        .css({
                            "width": arrow_width_px + "px",
                            "height": arrow_height_px + "px",
                            "right": _this.li_marginLeft_px * 0.1,
                            "top": "50%",
                            "margin-top": "-" + (arrow_height_px / 2) + "px"
                        })
                        .unbind().on("touchstart mousedown", function(e) {
                            e.preventDefault();
                            _this.imageUlSlideRight.apply(_this, [1]);
                        });

                    // 装载图片
                    _this.dom_arrow_right_image.attr("src", _this.Paras.Pics_arrow_right)
                        .css({
                            "cursor": "pointer",
                            "width": arrow_width_px + "px",
                            "height": arrow_height_px + "px"
                        });
                });

            } else if (_this.Paras.showKind == 2) {

                // 获得弹层尺寸
                _this.info_box_width_px = _this.window_width_px * _this.Paras.info_box_width_per / 100;
                _this.info_box_height_px = _this.window_height_px * _this.Paras.info_box_height_per / 100;

                // 设置弹层样式
                _this.dom_info_box.css({
                    // "box-sizing": "border-box",
                    "width": _this.info_box_width_px + "px",
                    "height": _this.info_box_height_px + "px",
                    "top": "50%",
                    "left": "50%",
                    "margin-top": (-_this.info_box_height_px / 2) + "px",
                    "margin-left": (-_this.info_box_width_px / 2) + "px",
                    "background": _this.Paras.info_box_bg,
                    "overflow": "hidden",
                    "z-index": _this.Paras.z_index + 1
                });


                // 设置jroll层样式
                var jroll_height = _this.info_box_height_px;
                if (_this.Paras.info_bottom_fixed_content && _this.Paras.info_bottom_fixed_content !== "") {
                    jroll_height -= _this.Paras.info_bottom_fixed_height;

                    // 设置bottom_fixed样式
                    _this.dom_info_bottom_fixed_box.css({
                        "height": _this.Paras.info_bottom_fixed_height + "px"
                    });
                }
                _this.dom_info_jroll_box.css({
                    "height": jroll_height + "px",
                    "overflow": "auto"
                });

                // 设置段落样式
                _this.dom_info_p.css({
                    "font-size": _this.Paras.info_box_fontSize,
                    "color": _this.Paras.info_box_fontColor,
                    "padding": _this.Paras.info_box_padding_px + "px",
                    "line-height": _this.Paras.info_box_lineHeight
                });

                // 设置弹层圆角
                if (_this.Paras.info_box_radius)
                    _this.dom_info_box.css("border-radius", "5px");
            }

            // 监听窗口resize
            var resize_n = 0;
            var resize_do = function() {
                if (++resize_n > 1)
                    return;
                if (_this.dom_bg_layer.width() !== 0) {
                    setTimeout(function() {
                        if (_this.isIE678() && _this.Paras.showKind == 1) {
                            _this.close.apply(_this, [true]);
                        } else {
                            _this.resize.apply(_this);
                        }
                        resize_n = 0;
                    }, 0);
                }
            };
            $(window).unbind("resize", resize_do).bind("resize", resize_do);

        },

        // 显示弹层
        /*
            opt = {
                z_index: 弹层的z-index。图片/图文内容层为z_index+1。默认400
                bg_color: 背景层16进制颜色。默认#000000
                bg_opacity: 背景层透明度，0～1。默认0.8
                showKind: 1-图片 | 2-HTML。默认1
                Pics: showKind=1时有效。图片路径列表，数组。如 ["/images/001.jpg","/images/002.png"]。无默认值
                Pics_scroll_speed: showKind=1时有效。图片切换时的速度。毫秒。默认500。移动端建议设置为100-200，过慢会有卡顿的现象
                Pics_arrow_left: showKind=1时有效。图片切换 左箭头图片路径。默认/inc/LayerShow_arrow_left.png。
                Pics_arrow_right: showKind=1时有效。图片切换 右箭头图片路径。默认/inc/LayerShow_arrow_left.png。
                callback_image_click: showKind=1时有效。图片点击回调：1-关闭弹层 | 2-下一张图片 | function(li_obj)-自定义方法。默认"1"
                info_content: showKind=2时有效，装载内容。无默认
                info_box_width_per: showKind=2时有效，内容盒宽度百分比。默认80
                info_box_height_per: showKind=2时有效，内容盒高度百分比。默认90
                info_box_radius: showKind=2时有效，内容盒是否圆角。默认true
                info_box_bg: showKind=2时有效，内容盒背景。默认"#ffffff"
                info_box_padding_px: showKind=2时有效，内容盒padding。默认20
                info_box_fontSize: showKind=2时有效，内容盒字体大小。默认"14px"
                info_box_fontColor: showKind=2时有效，内容盒字体颜色。默认"#333"
                info_box_lineHeight: showKind=2时有效，内容盒行间距。默认"30px"
                info_box_use_JRoll: showKind=2时有效，内容盒使用JRoll滚动（建议移动端使用，web端不用。IE7、8不兼容）如使用，则需要依赖或引用jroll.js。默认true
                JRoll_obj: JRoll对象。不使用JRoll做内容盒滚动，可不传。
                info_bottom_fixed_content: showKind=2时有效，底部固定层内容。无默认。
                info_bottom_fixed_height: showKind=2 && info_bottom_fixed_content!="" 时有效，高度，单位px。默认40
                Pics_close_show: true/false。显示关闭按钮。默认true
                Pics_close_path: 关闭按钮图片路径。默认/inc/LayerShow_close.png。
                callback_before: 弹层前回调。如显示loading层。无默认
                callback_success: 弹层成功回调。如关闭loading层。无默认
                callback_close: 关闭弹层后的回调。没想好如什么。无默认
            }
        */
        show: function(opt) {
            var _this = this;

            var opt_default = {
                z_index: 400,
                bg_color: "#000",
                bg_opacity: 0.8,
                showKind: 1,
                Pics: [],
                Pics_show_index: 3,
                Pics_scroll_speed: 500,
                Pics_arrow_left: "/inc/LayerShow_arrow_left.png",
                Pics_arrow_right: "/inc/LayerShow_arrow_right.png",
                callback_image_click: 1,
                info_box_width_per: 80,
                info_box_height_per: 90,
                info_box_radius: true,
                info_box_bg: "#fff",
                info_box_padding_px: 20,
                info_box_fontSize: "14px",
                info_box_fontColor: "#333",
                info_box_lineHeight: "30px",
                info_box_use_JRoll: true,
                info_bottom_fixed_height: 40,
                Pics_close_show: true,
                Pics_close_path: "/inc/LayerShow_close.png"
            };

            _this.Paras = $.extend(opt_default, opt);

            // IE78强制不使用JRoll
            if (_this.isIE678())
                _this.Paras.info_box_use_JRoll = false;

            // 看有没有创建dom
            if (!_this.dom_bg_layer)
                _this.create_dom.apply(_this);

            // 执行弹层前回调
            if (_this.Paras.callback_before)
                _this.Paras.callback_before();

            // 装载图片或内容
            if (_this.Paras.showKind == 1) {
                if (_this.Paras.Pics.length > 0) {

                    // 重新组织Pics
                    if (_this.Paras.Pics_show_index > 0 && _this.Paras.Pics_show_index < _this.Paras.Pics.length) {
                        (function() {
                            var Pics_temp = _this.Paras.Pics;
                            _this.Paras.Pics = [];
                            var i = _this.Paras.Pics_show_index,
                                len = Pics_temp.length;
                            for (; i < len; i++) {
                                _this.Paras.Pics.push(Pics_temp[i]);
                            }
                            for (i = 0; i < _this.Paras.Pics_show_index; i++) {
                                _this.Paras.Pics.push(Pics_temp[i]);
                            }
                        })();
                    }

                    // 插入li到ul。监听li点击
                    var insert_li = function() {
                        _this.dom_image_li.clone()
                            .appendTo(_this.dom_image_ul)
                            .on("touchstart mousedown", function(e) {
                                e.preventDefault();

                                if (typeof _this.Paras.callback_image_click === "function") // 自定义方法
                                    _this.Paras.callback_image_click($(this));
                                else if (_this.Paras.callback_image_click == 1) // 关闭弹层
                                    _this.close.apply(_this);
                                else if (_this.Paras.callback_image_click == 2) // 下一张图片 
                                    _this.imageUlSlideLeft.apply(_this, [1]);
                            });
                    };

                    // 图片加载成功后的回调（获得图片组中显示大小）
                    var imageLoaded_success = function() {
                        var imageLoaded_success_count = 0;
                        return function($img, now_index) {

                            // 计算图片应显示尺寸
                            var img_size = _this.imageGetSize.apply(_this, [$img]);

                            // 获得背景图片尺寸的样式。如进行了缩小，则设为"contain"
                            var background_size = img_size.img_width + "px," + img_size.img_height + "px";
                            if ((img_size.img_width >= img_size.box_width || img_size.img_height >= img_size.box_height) && !_this.isIE678())
                                background_size = "contain";

                            // 装载图片到li
                            var li = _this.dom_image_ul.find("li");
                            var style = "";
                            style += "float:left;";
                            style += "cursor:pointer;";
                            if (_this.isIE678()) {
                                style += "position:relative;";

                                $(document.createElement("img"))
                                    .attr("src", $img.src)
                                    .css({
                                        "width": img_size.img_width,
                                        "height": img_size.img_height,
                                        "position": "absolute",
                                        "top": "50%",
                                        "left": "50%",
                                        "margin-top": "-" + (img_size.img_height / 2) + "px",
                                        "margin-left": "-" + (img_size.img_width / 2) + "px"
                                    }).appendTo($(li[now_index]));

                            } else {
                                style += "background: url(" + $img.src + ") no-repeat;"; //
                                // style += "background-attachment: fixed;";
                                style += "background-position: center;";
                                style += "background-size: " + background_size + ";";
                            }
                            if (now_index > 0) {
                                style += "width: " + $(li[0]).css("width") + ";";
                                style += "height: " + $(li[0]).css("height") + ";";
                                style += "margin-top: " + $(li[0]).css("margin-top") + ";";
                                style += "margin-left: " + $(li[0]).css("margin-left") + ";";
                            }
                            $(li[now_index]).attr("style", style);

                            if (now_index === 0) {

                                // 设置弹层宽高和位置
                                _this.resize.apply(_this);

                                // 显示关闭按钮
                                _this.dom_close_box.fadeIn(200);

                                // 加载其他图片
                                var i = 1,
                                    len = _this.Paras.Pics.length,

                                    // 加载成功后的回调，因为是循环调用，所以闭包伺候
                                    _imageLoaded_success = function(now_index) {
                                        return function($img) {
                                            imageLoaded_success($img, now_index);
                                        };
                                    };

                                for (; i < len; i++) {
                                    insert_li();
                                    _this.imageLoad.apply(_this, [_this.Paras.Pics[i], _imageLoaded_success(i)]);
                                }

                                // 显示弹层
                                _this.dom_bg_layer.fadeTo(200, _this.Paras.bg_opacity);
                                _this.dom_image_box.fadeIn(200, function() {
                                    if (_this.Paras.callback_success)
                                        _this.Paras.callback_success(li);
                                });

                            } else {

                                if (++imageLoaded_success_count + 1 == _this.Paras.Pics.length) {

                                    // console.log("514");
                                    // console.log(++imageLoaded_success_count);
                                    // console.log($(li[now_index]).width());

                                    // 重置ul宽度
                                    _this.dom_image_ul.css("width", _this.li_item_width_px * li.length + "px");

                                    // 显示左右箭头
                                    if (_this.dom_arrow_left_box.css("display") == "none") {
                                        _this.dom_arrow_left_box.fadeIn(200);
                                        _this.dom_arrow_right_box.fadeIn(200);
                                    }
                                }
                            }
                        };
                    }();

                    // 加载第一张图片。回调中显示弹层，开始加载其他图片
                    insert_li();
                    _this.imageLoad.apply(_this, [_this.Paras.Pics[0], function($img) {
                        imageLoaded_success($img, 0);
                    }]);
                }

            } else if (_this.Paras.showKind == 2) {

                // 获得窗口尺寸
                // _this.window_width_px = $(window).width();
                // _this.window_height_px = $(window).height();

                // 设置盒内容
                if (_this.Paras.info_content)
                    _this.dom_info_p.html(_this.Paras.info_content);

                // 设置底部fixed盒内容
                if (_this.Paras.info_bottom_fixed_content)
                    _this.dom_info_bottom_fixed_box.html(_this.Paras.info_bottom_fixed_content);

                // 设置弹层宽高和位置
                _this.resize.apply(_this);

                // 显示弹层
                _this.dom_bg_layer.fadeTo(200, _this.Paras.bg_opacity);
                _this.dom_info_box.fadeIn(200, function() {
                    // 设置JRoll滚动
                    if (_this.Paras.info_box_use_JRoll && _this.Paras.JRoll_obj) {
                        _this.jroll_obj = new _this.Paras.JRoll_obj(_this.dom_info_jroll_box[0]);
                        _this.dom_info_jroll_box.css({
                            "overflow": "hidden"
                        });
                    }

                    // console.log(_this.Paras.info_box_use_JRoll, _this.jroll_obj);
                    // 成功回调
                    if (_this.Paras.callback_success)
                        _this.Paras.callback_success(_this.jroll_obj);
                });
                _this.dom_close_box.fadeIn(200);

            }
        },
        // 关闭弹层
        // reShow==true时重新显示弹层。用于IE678的resize
        close: function(reShow) {
            var _this = this;

            _this.dom_bg_layer.fadeTo(200, 0, function() {
                $(this).css({
                    "width": 0,
                    "height": 0
                });
            });

            if (_this.Paras.showKind == 1) {
                _this.dom_image_box.fadeOut(200, function() {

                    // 清空li
                    _this.dom_image_ul.html("");

                    if (reShow) {
                        _this.show.apply(_this, [_this.Paras]);
                    } else if (_this.Paras.callback_close)
                        _this.Paras.callback_close();
                });
            } else if (_this.Paras.showKind == 2) {

                var info_wrapper_html = _this.dom_info_box.html();

                if (_this.Paras.info_box_use_JRoll) {
                    // 销毁jroll对象
                    _this.jroll_obj.destroy();

                    // 清空段落的style
                    _this.dom_info_p.removeAttr("style");
                }

                // 内容盒回到顶端
                _this.dom_info_box.scrollTop(0);

                // 清空内容盒
                _this.dom_info_p.html("");

                // 隐藏弹层
                _this.dom_close_box.fadeOut(200);
                _this.dom_info_box.fadeOut(200, function() {
                    if (reShow) {
                        _this.show.apply(_this, [_this.Paras]);
                    } else if (_this.Paras.callback_close)
                        _this.Paras.callback_close(info_wrapper_html);
                });
            }
        },
        // 图片加载
        // function(img)
        imageLoad: function(picPath, callback) {
            var img = new Image();
            img.src = picPath;
            var _callback = function() {
                if (callback)
                    callback(img);
            };
            if (img.width)
                _callback();
            else {
                img.onload = function() {
                    _callback();
                };
            }

        },
        // 根据图片和显示盒的宽高，计算图片最终显示大小
        // box_size{width:0,height:0}为显示盒的宽高，如图片大于此宽高尺寸，则缩放。
        // box_size 默认为{width: _this.window_width_px * _this.image_size_percent_from_window_width, height: _this.window_height_px * _this.image_size_percent_from_window_height}
        imageGetSize: function(img, box_size) {
            var _this = this;

            _this.window_width_px = $(window).width();
            _this.window_height_px = $(window).height();

            // 获得图片盒尺寸
            if (!box_size)
                box_size = {
                    width: _this.window_width_px * _this.image_size_percent_from_window_width,
                    height: _this.window_height_px * _this.image_size_percent_from_window_height
                };

            // 获得图片的宽、高、宽高比
            var img_width_px = img.width;
            var img_height_px = img.height;
            var img_ratio = img_width_px / img_height_px;

            // 获得容器的宽高比
            var box_ratio = box_size.width / box_size.height;

            // 根据宽高比，决定最后图片的宽、高
            if (img_ratio <= box_ratio && img_height_px > box_size.height) {
                img_height_px = box_size.height;
                img_width_px = img_height_px * img_ratio;
            } else if (img_ratio >= box_ratio && img_width_px > box_size.width) {
                img_width_px = box_size.width;
                img_height_px = img_width_px / img_ratio;
            }

            return {
                img_width: img_width_px,
                img_height: img_height_px,
                box_width: box_size.width,
                box_height: box_size.height
            };
        },
        // 图片向左移动X屏
        imageUlSlideLeft: function(x) {
            var _this = this;

            if (_this.image_sliding)
                return;

            _this.image_sliding = true;

            // 如果x大于图片总数-1，则退出
            var li_obj = _this.dom_image_ul.find("li");
            if (x > li_obj.length - 1)
                return;

            _this.dom_image_ul.animate({
                "left": -x * _this.li_item_width_px + "px"
            }, _this.Paras.Pics_scroll_speed, function() {

                // 将队列头部的x个li移到队尾
                var i = 0;
                for (; i < x; i++) {
                    $(li_obj[i]).appendTo(_this.dom_image_ul);
                }

                // 还原ul位置
                _this.dom_image_ul.css("left", 0);

                _this.image_sliding = false;
            });

        },
        // 图片向右移动X屏
        imageUlSlideRight: function(x) {
            var _this = this;

            if (_this.image_sliding)
                return;

            _this.image_sliding = true;

            // 如果x大于图片总数-1，则退出
            var li_obj = _this.dom_image_ul.find("li");
            if (x > li_obj.length - 1)
                return;

            // 将队列尾的x个li移到最前
            var i = 0,
                len = li_obj.length;
            for (; i < x; i++) {
                $(li_obj[len - i - 1]).prependTo(_this.dom_image_ul);
            }
            _this.dom_image_ul.css("left", -x * _this.li_item_width_px + "px");

            // 滚动
            _this.dom_image_ul.animate({
                "left": "0"
            }, _this.Paras.Pics_scroll_speed, function() {
                _this.image_sliding = false;
            });

        },
        // 判断是否为IE6/7/8浏览器
        isIE678: function() {
            var yes = false;
            var browser = navigator.appName;
            if (browser == "Microsoft Internet Explorer") {
                var b_version = navigator.appVersion;
                var version = b_version.split(";");
                var trim_Version = version[1].replace(/[ ]/g, "");
                if (trim_Version == "MSIE6.0" || trim_Version == "MSIE7.0" || trim_Version == "MSIE8.0") {
                    yes = true;
                }
            }
            return yes;
        }
    };
}

if (typeof define === "function" && define.amd) {
    define('lib/LayerShow',[],function() {
        return LayerShow;
    });
};
/*! JRoll v2.3.2 ~ (c) 2015-2016 Author:BarZu Git:https://github.com/chjtx/JRoll Website:http://www.chjtx.com/JRoll/ */




/* global define*/
(function(window, document, Math) {
    "use strict";

    // 判断是否为IE6/7/8浏览器
    var isIE678 = function() {
        var yes = false;
        var browser = navigator.appName;
        if (browser == "Microsoft Internet Explorer") {
            var b_version = navigator.appVersion;
            var version = b_version.split(";");
            var trim_Version = version[1].replace(/[ ]/g, "");
            if (trim_Version == "MSIE6.0" || trim_Version == "MSIE7.0" || trim_Version == "MSIE8.0") {
                yes = true;
            }
        }
        return yes;
    };

    if (isIE678()) {
        return null;
    }

    var JRoll;
    var VERSION = "2.3.2";
    var rAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(callback) {
        setTimeout(callback, 17);
    };
    var sty = document.createElement("div").style;
    var jrollMap = {}; //保存所有JRoll对象
    var ua = navigator.userAgent.toLowerCase();
    var prefix = (function() {
        var vendors = ["t", "webkitT", "MozT", "msT", "OT"],
            transform,
            i = vendors.length;

        while (i--) {
            transform = vendors[i] + "ransform";
            if (transform in sty) return vendors[i];
        }
    })();

    //实用工具
    var utils = {
        //兼容
        TSF: prefix + "ransform",
        TSD: prefix + "ransitionDuration",
        TFO: prefix + "ransformOrigin",
        isAndroid: /android/.test(ua),
        isIOS: /iphone|ipad/.test(ua),
        isMobile: /mobile|phone|android|pad/.test(ua),

        //判断浏览是否支持perspective属性，从而判断是否支持开启3D加速
        translateZ: (function(pre) {
            var f;
            if (pre) {
                f = pre + "Perspective" in sty;
            } else {
                f = "perspective" in sty;
            }
            return f ? " translateZ(0px)" : "";
        })(prefix.substr(0, prefix.length - 1)),

        //计算相对位置，a相对于b的位置
        computePosition: function(a, b) {
            var left = 0,
                top = 0;
            while (a) {
                left += a.offsetLeft;
                top += a.offsetTop;
                a = a.offsetParent;
                if (a === b) {
                    a = null;
                }
            }
            return {
                left: left,
                top: top
            };
        },

        //在指定时间内将指定元素从开始位置移到结束位置并执行回调方法
        //el 必须是dom元素，必填
        //x,y 结束位置，必填
        //duration 过渡时长，单位ms，可选
        //callback 回调方法，可选
        moveTo: function(el, x, y, duration, callback) {
            var startX = 0,
                startY = 0,
                endX, endY, zoom = 1,
                stepX, stepY, d, result;
            result = /translate\(([\-\d\.]+)px,\s+([\-\d\.]+)px\)\s+(?:translateZ\(0px\)\s+)?scale\(([\d\.]+)\)/.exec(el.style[utils.TSF]);
            if (result) {
                startX = Number(result[1]);
                startY = Number(result[2]);
                zoom = Number(result[3]);
            }
            d = duration || 17;
            stepX = (x - startX) / (d / 17);
            stepY = (y - startY) / (d / 17);
            endX = startX;
            endY = startY;

            function moving() {
                d = d - 17;
                if (d <= 0) {
                    endX = x;
                    endY = y;
                } else {
                    endX = parseInt(endX + stepX, 10);
                    endY = parseInt(endY + stepY, 10);
                }
                el.style[utils.TSF] = "translate(" + endX + "px, " + endY + "px)" + utils.translateZ + " scale(" + zoom + ")";

                if (d > 0 && !(endX === x && endY === y)) {
                    rAF(moving);
                } else if (typeof callback === "function") {
                    callback();
                }
            }

            moving();
        },

        //一层一层往上查找已实例化的jroll
        //el 目标元素
        //force 强制查找，忽略textarea
        findScroller: function(el, force) {
            var id;
            //遇到document或带垂直滚动条的textarea终止查找
            if (force || !(el.tagName === "TEXTAREA" && el.scrollHeight > el.offsetHeight)) {
                while (el !== document) {
                    id = el.getAttribute("jroll-id");
                    if (id) {
                        return jrollMap[id];
                    }
                    el = el.parentNode;
                }
            }
            return null;
        }
    };

    function _touchstart(e) {
        var jroll = utils.findScroller(e.target);
        if (jroll) {
            JRoll.jrollActive = jroll;

            if (jroll.moving) {
                e.preventDefault(); //防止按停滑动时误触a链接
                jroll.moving = false; //终止惯性
            }

            jroll._start(e);
        } else {
            JRoll.jrollActive = null;
        }
    }

    function _touchmove(e) {
        if (JRoll.jrollActive) {
            var activeElement = document.activeElement;
            if (JRoll.jrollActive.options.preventDefault) {
                e.preventDefault();
            }
            if (utils.isMobile && (activeElement.tagName === "INPUT" || activeElement.tagName === "TEXTAREA")) {
                activeElement.blur();
            }
            JRoll.jrollActive._move(e);
        }
    }

    function _touchend() {
        if (JRoll.jrollActive) {
            JRoll.jrollActive._end();
        }
    }

    function _resize() {
        setTimeout(function() {
            for (var i in jrollMap) {
                jrollMap[i].refresh().scrollTo(jrollMap[i].x, jrollMap[i].y, 200);
            }
        }, 600);
    }

    function _wheel(e) {
        var jroll = utils.findScroller(e.target);
        if (jroll) {
            jroll._wheel(e);
        }
    }

    function addEvent(type, method) {
        document.addEventListener(type, method, false);
    }

    //添加监听事件
    addEvent(utils.isMobile ? "touchstart" : "mousedown", _touchstart);
    addEvent(utils.isMobile ? "touchmove" : "mousemove", _touchmove);
    addEvent(utils.isMobile ? "touchend" : "mouseup", _touchend);
    if (utils.isMobile) {
        addEvent("touchcancel", _touchend);
    } else {
        addEvent(/firefox/.test(ua) ? "DOMMouseScroll" : "mousewheel", _wheel);
    }
    window.addEventListener("resize", _resize);
    window.addEventListener("orientationchange", _resize);

    JRoll = function(el, options) {
        this._init(el, options);
    };

    JRoll.version = VERSION;

    JRoll.utils = utils;

    JRoll.jrollMap = jrollMap;

    JRoll.prototype = {

        //初始化
        _init: function(el, options) {
            var me = this;
            me.wrapper = typeof el === "string" ? document.querySelector(el) : el;
            me.scroller = options && options.scroller ? (typeof options.scroller === "string" ? document.querySelector(options.scroller) : options.scroller) : me.wrapper.children[0];

            //防止重复多次new JRoll
            if (me.scroller.jroll) {
                me.scroller.jroll.refresh();
                return me.scroller.jroll;
            } else {
                me.scroller.jroll = me;
            }

            //计算wrapper相对document的位置
            me.wrapperOffset = utils.computePosition(me.wrapper, document.body);

            //创建ID
            me.id = (options && options.id) || me.scroller.getAttribute("jroll-id") || "jroll_" + Math.random().toString().substr(2, 8);

            //保存jroll对象
            me.scroller.setAttribute("jroll-id", me.id);
            jrollMap[me.id] = me;

            //默认选项
            me.options = {
                scrollX: false,
                scrollY: true,
                scrollFree: false, //自由滑动
                minX: null, //向左滑动的边界值，默认为0
                maxX: null, //向右滑动的边界值，默认为scroller的宽*-1
                minY: null, //向下滑动的边界值，默认为0
                maxY: null, //向上滑动的边界值，默认为scroller的高*-1
                zoom: false, //使能缩放
                zoomMin: 1, //最小缩放倍数
                zoomMax: 4, //最大缩放倍数
                bounce: true, //回弹
                scrollBarX: false, //开启x滚动条
                scrollBarY: false, //开启y滚动条
                scrollBarFade: false, //滚动条使用渐隐模式
                preventDefault: true, //禁止touchmove默认事件
                momentum: true, //滑动结束平滑过渡
                autoStyle: true //自动为wrapper和scroller添加样式
            };

            for (var i in options) {
                if (i !== "scroller") {
                    me.options[i] = options[i];
                }
            }

            if (me.options.autoStyle) {
                //将wrapper设为relative
                if (window.getComputedStyle(me.wrapper).position === "static") {
                    me.wrapper.style.position = "relative";
                    me.wrapper.style.top = "0";
                    me.wrapper.style.left = "0";
                }
                me.wrapper.style.overflow = "hidden";
                me.scroller.style.minHeight = "100%";
            }

            me.x = 0;
            me.y = 0;

            //当前状态，可取值 null | preScroll(准备滑动) | preZoom(准备缩放) | scrollX(横向) | scrollY(竖向) | scrollFree(各个方向)
            me.s = null;
            me.scrollBarX = null; //x滚动条
            me.scrollBarY = null; //y滚动条

            me._s = {
                startX: 0,
                startY: 0,
                lastX: 0,
                lastY: 0,
                endX: 0,
                endY: 0
            };

            me._z = {
                spacing: 0, //两指间间距
                scale: 1,
                startScale: 1
            };

            me._event = {
                "scrollStart": [],
                "scroll": [],
                "scrollEnd": [],
                "zoomStart": [],
                "zoom": [],
                "zoomEnd": [],
                "refresh": [],
                "touchEnd": []
            };

            me.refresh(true);
        },

        //开启
        enable: function() {
            var me = this;
            me.scroller.setAttribute("jroll-id", me.id);
            return me;
        },

        //关闭
        disable: function() {
            var me = this;
            me.scroller.removeAttribute("jroll-id");
            return me;
        },

        //销毁
        destroy: function() {
            var me = this;
            delete jrollMap[me.id];
            delete me.scroller.jroll;
            if (me.scrollBarX) {
                me.wrapper.removeChild(me.scrollBarX);
            }
            if (me.scrollBarY) {
                me.wrapper.removeChild(me.scrollBarY);
            }
            me.disable();
            me.scroller.style[utils.tSF] = "";
            me.scroller.style[utils.tSD] = "";
            me.prototype = null;
            for (var i in me) {
                if (me.hasOwnProperty(i)) {
                    delete me[i];
                }
            }
        },

        //替换对象
        call: function(target, e) {
            var me = this;
            me._s.lockX = false;
            me._s.lockY = false;
            me.scrollTo(me.x, me.y);
            JRoll.jrollActive = target;
            if (e) target._start(e);
            return target;
        },

        //刷新JRoll的宽高
        refresh: function(notRefreshEvent) {
            var me = this,
                wrapperStyle = getComputedStyle(me.wrapper),
                scrollerStyle = getComputedStyle(me.scroller),
                paddingX, paddingY, marginX, marginY, temp, size;

            me.wrapperWidth = me.wrapper.clientWidth;
            me.wrapperHeight = me.wrapper.clientHeight;

            me.scrollerWidth = Math.round(me.scroller.offsetWidth * me._z.scale);
            me.scrollerHeight = Math.round(me.scroller.offsetHeight * me._z.scale);

            //解决wrapper的padding和scroller的margin造成maxWidth/maxHeight计算错误的问题
            paddingX = parseInt(wrapperStyle["padding-left"]) + parseInt(wrapperStyle["padding-right"]);
            paddingY = parseInt(wrapperStyle["padding-top"]) + parseInt(wrapperStyle["padding-bottom"]);
            marginX = parseInt(scrollerStyle["margin-left"]) + parseInt(scrollerStyle["margin-right"]);
            marginY = parseInt(scrollerStyle["margin-top"]) + parseInt(scrollerStyle["margin-bottom"]);

            //最大/最小范围
            me.minScrollX = me.options.minX === null ? 0 : me.options.minX;
            me.maxScrollX = me.options.maxX === null ? me.wrapperWidth - me.scrollerWidth - paddingX - marginX : me.options.maxX;
            me.minScrollY = me.options.minY === null ? 0 : me.options.minY;
            me.maxScrollY = me.options.maxY === null ? me.wrapperHeight - me.scrollerHeight - paddingY - marginY : me.options.maxY;

            if (me.minScrollX < 0) {
                me.minScrollX = 0;
            }
            if (me.minScrollY < 0) {
                me.minScrollY = 0;
            }
            if (me.maxScrollX > 0) {
                me.maxScrollX = 0;
            }
            if (me.maxScrollY > 0) {
                me.maxScrollY = 0;
            }

            me._s.endX = me.x;
            me._s.endY = me.y;

            //x滚动条
            if (me.options.scrollBarX) {
                if (!me.scrollBarX) {
                    temp = me._createScrollBar("jroll-xbar", "jroll-xbtn", false);
                    me.scrollBarX = temp[0];
                    me.scrollBtnX = temp[1];
                }
                me.scrollBarScaleX = me.wrapper.clientWidth / me.scrollerWidth;
                size = Math.round(me.scrollBarX.clientWidth * me.scrollBarScaleX);
                me.scrollBtnX.style.width = (size > 8 ? size : 8) + "px";
                me._runScrollBarX();
            } else if (me.scrollBarX) {
                me.wrapper.removeChild(me.scrollBarX);
                me.scrollBarX = null;
            }
            //y滚动条
            if (me.options.scrollBarY) {
                if (!me.scrollBarY) {
                    temp = me._createScrollBar("jroll-ybar", "jroll-ybtn", true);
                    me.scrollBarY = temp[0];
                    me.scrollBtnY = temp[1];
                }
                me.scrollBarScaleY = me.wrapper.clientHeight / me.scrollerHeight;
                size = Math.round(me.scrollBarY.clientHeight * me.scrollBarScaleY);
                me.scrollBtnY.style.height = (size > 8 ? size : 8) + "px";
                me._runScrollBarY();
            } else if (me.scrollBarY) {
                me.wrapper.removeChild(me.scrollBarY);
                me.scrollBarY = null;
            }

            if (!notRefreshEvent) {
                me._execEvent("refresh");
            }

            return me;
        },

        scale: function(multiple) {
            var me = this;
            var z = parseFloat(multiple);
            if (!isNaN(z)) {
                me.scroller.style[utils.TFO] = "0 0";
                me._z.scale = z;
                me.refresh()._scrollTo(me.x, me.y);
                me.scrollTo(me.x, me.y, 400);
            }
            return me;
        },

        _wheel: function(e) {
            var me = this;
            var y = e.wheelDelta || -(e.detail / 3) * 120; //兼容火狐
            if (me.options.scrollY || me.options.scrollFree) {
                me.scrollTo(me.x, me._compute(me.y + y, me.minScrollY, me.maxScrollY));
            }
        },

        //滑动滚动条
        _runScrollBarX: function() {
            var me = this,
                x = Math.round(-1 * me.x * me.scrollBarScaleX);

            me._scrollTo.call({
                scroller: me.scrollBtnX,
                _z: {
                    scale: 1
                }
            }, x, 0);
        },
        _runScrollBarY: function() {
            var me = this,
                y = Math.round(-1 * me.y * me.scrollBarScaleY);

            me._scrollTo.call({
                scroller: me.scrollBtnY,
                _z: {
                    scale: 1
                }
            }, 0, y);
        },

        //创建滚动条
        _createScrollBar: function(a, b, isY) {
            var me = this,
                bar, btn;

            bar = document.createElement("div");
            btn = document.createElement("div");
            bar.className = a;
            btn.className = b;

            if (this.options.scrollBarX === true || this.options.scrollBarY === true) {
                if (isY) {
                    bar.style.cssText = "position:absolute;top:2px;right:2px;bottom:2px;width:6px;overflow:hidden;border-radius:2px;-webkit-transform: scaleX(.5);transform: scaleX(.5);";
                    btn.style.cssText = "background:rgba(0,0,0,.4);position:absolute;top:0;left:0;right:0;border-radius:2px;";
                } else {
                    bar.style.cssText = "position:absolute;left:2px;bottom:2px;right:2px;height:6px;overflow:hidden;border-radius:2px;-webkit-transform: scaleY(.5);transform: scaleY(.5);";
                    btn.style.cssText = "background:rgba(0,0,0,.4);height:100%;position:absolute;left:0;top:0;bottom:0;border-radius:2px;";
                }
            }

            if (me.options.scrollBarFade) {
                bar.style.opacity = 0;
            }

            bar.appendChild(btn);
            me.wrapper.appendChild(bar);

            return [bar, btn];
        },

        //滚动条渐隐
        _fade: function(bar, time) {
            var me = this;
            if (me.fading && time > 0) {
                time = time - 25;
                if (time % 100 === 0) bar.style.opacity = time / 1000;
            } else {
                return;
            }
            rAF(me._fade.bind(me, bar, time));
        },

        on: function(event, callback) {
            var me = this;
            switch (event) {
                case "scrollStart":
                    me._event.scrollStart.push(callback);
                    break;
                case "scroll":
                    me._event.scroll.push(callback);
                    break;
                case "scrollEnd":
                    me._event.scrollEnd.push(callback);
                    break;
                case "zoomStart":
                    me._event.zoomStart.push(callback);
                    break;
                case "zoom":
                    me._event.zoom.push(callback);
                    break;
                case "zoomEnd":
                    me._event.zoomEnd.push(callback);
                    break;
                case "refresh":
                    me._event.refresh.push(callback);
                    break;
                case "touchEnd":
                    me._event.touchEnd.push(callback);
                    break;
            }
        },

        _execEvent: function(event, e) {
            var me = this;
            var i = me._event[event].length - 1;
            for (; i >= 0; i--) {
                me._event[event][i].call(me, e);
            }
        },

        //计算x,y的值
        _compute: function(val, min, max) {
            var me = this;
            if (val > min) {
                if (me.options.bounce && (val > (min + 10))) {
                    return Math.round(min + ((val - min) / 4));
                } else {
                    return min;
                }
            }

            if (val < max) {
                if (me.options.bounce && (val < (max - 10))) {
                    return Math.round(max + ((val - max) / 4));
                } else {
                    return max;
                }
            }

            return val;
        },

        _scrollTo: function(x, y) {
            this.scroller.style[utils.TSF] = "translate(" + x + "px, " + y + "px)" + utils.translateZ + " scale(" + this._z.scale + ")";
        },

        /*供用户调用的scrollTo方法
         * x x坐标
         * y y坐标
         * timing 滑动时长，使用css3的transition-duration进行过渡
         * allow  是否允许超出边界，默认为undefined即不允许超出边界
         * system 为true时即是本程序自己调用，默认为undefined即非本程序调用
         */
        scrollTo: function(x, y, timing, allow, callback, system, t) {
            var me = this;
            if (!allow) {
                //x
                if (x >= me.minScrollX) {
                    me.x = me.minScrollX;

                    //滑到最大值时手指继续滑，重置开始、结束位置，优化体验
                    if (t) {
                        me._s.startX = t[0].pageX;
                        me._s.endX = me.minScrollX;
                    }
                } else if (x <= me.maxScrollX) {
                    me.x = me.maxScrollX;
                    if (t) {
                        me._s.startX = t[0].pageX;
                        me._s.endX = me.maxScrollX;
                    }
                } else {
                    me.x = x;
                }

                //y
                if (y >= me.minScrollY) {
                    me.y = me.minScrollY;
                    if (t) {
                        me._s.startY = t[0].pageY;
                        me._s.endY = me.minScrollY;
                    }
                } else if (y <= me.maxScrollY) {
                    me.y = me.maxScrollY;
                    if (t) {
                        me._s.startY = t[0].pageY;
                        me._s.endY = me.maxScrollY;
                    }
                } else {
                    me.y = y;
                }
            } else {
                me.x = x;
                me.y = y;
            }
            if (!system) {
                me._s.endX = me.x;
                me._s.endY = me.y;
            }
            if (timing) {
                utils.moveTo(me.scroller, me.x, me.y, timing, callback);
            } else {
                me._scrollTo(me.x, me.y);
                if (typeof callback === "function") {
                    callback();
                }
            }

            if (me.scrollBtnX) me._runScrollBarX();
            if (me.scrollBtnY) me._runScrollBarY();

            return me;
        },

        _endAction: function() {
            var me = this;
            me._s.endX = me.x;
            me._s.endY = me.y;
            me.moving = false;

            if (me.options.scrollBarFade && !me.fading) {
                me.fading = true; //标记渐隐滚动条
                if (me.scrollBarX) me._fade(me.scrollBarX, 2000);
                if (me.scrollBarY) me._fade(me.scrollBarY, 2000);
            }
            me._execEvent("scrollEnd");
        },

        _stepBounce: function() {
            var me = this;

            me.bouncing = false;

            function over() {
                me.scrollTo(me.x, me.y, 100);
            }

            if (me.s === "scrollY") { //y方向

                if (me.directionY === 1) {
                    me.scrollTo(me.x, me.minScrollY + 20, 100, true, over);
                    me.y = me.minScrollY;
                } else {
                    me.scrollTo(me.x, me.maxScrollY - 20, 100, true, over);
                    me.y = me.maxScrollY;
                }

            } else if (me.s === "scrollX") { //x方向

                if (me.directionX === 1) {
                    me.scrollTo(me.minScrollX + 20, me.y, 100, true, over);
                    me.x = me.minScrollX;
                } else {
                    me.scrollTo(me.maxScrollX - 20, me.y, 100, true, over);
                    me.x = me.maxScrollX;
                }

            }

        },

        _x: function(p) {
            var me = this;
            var n = me.directionX * p;
            if (!isNaN(n)) {
                me.x = me.x + n;
                //达到边界终止惯性，执行回弹
                if (me.x >= me.minScrollX || me.x <= me.maxScrollX) {
                    me.moving = false;
                    if (me.options.bounce) {
                        me.bouncing = true; //标记回弹
                    }
                }
            }
        },

        _y: function(p) {
            var me = this;
            var n = me.directionY * p;
            if (!isNaN(n)) {
                me.y = me.y + n;
                //达到边界终止惯性，执行回弹
                if (me.y >= me.minScrollY || me.y <= me.maxScrollY) {
                    me.moving = false;
                    if (me.options.bounce) {
                        me.bouncing = true; //标记回弹
                    }
                }
            }
        },

        _xy: function(p) {
            var me = this;
            var x = Math.round(me.cosX * p);
            var y = Math.round(me.cosY * p);
            if (!isNaN(x) && !isNaN(y)) {
                me.x = me.x + x;
                me.y = me.y + y;
                //达到边界终止惯性，执行回弹
                if ((me.x >= me.minScrollX || me.x <= me.maxScrollX) && (me.y >= me.minScrollY || me.y <= me.maxScrollY)) {
                    me.moving = false;
                }
            }
        },

        _step: function(time) {
            var me = this,
                now = Date.now(),
                t = now - time,
                s = 0;

            //惯性滑动结束，执行回弹
            if (me.bouncing) {
                me._stepBounce();
            }

            //终止
            if (!me.moving) {
                me._endAction();
                return;
            }

            //防止t为0滑动终止造成卡顿现象
            if (t > 10) {
                me.speed = me.speed - t * (me.speed > 1.2 ? 0.001 : (me.speed > 0.6 ? 0.0008 : 0.0006));
                s = Math.round(me.speed * t);
                if (me.speed <= 0 || s <= 0) {
                    me._endAction();
                    return;
                }
                time = now;

                //_do是可变方法，可为_x,_y或_xy，在判断方向时判断为何值，避免在次处进行过多的判断操作
                me._do(s);
                me.scrollTo(me.x, me.y, 0, false, null, true);
                me._execEvent("scroll");

            }

            rAF(me._step.bind(me, time));
        },

        _doScroll: function(d, e) {
            var me = this,
                pageY;
            me.distance = d;
            if (me.options.bounce) {
                me.x = me._compute(me.x, me.minScrollX, me.maxScrollX);
                me.y = me._compute(me.y, me.minScrollY, me.maxScrollY);
            }
            me.scrollTo(me.x, me.y, 0, me.options.bounce, null, true, (e.touches || [e]));
            me._execEvent("scroll", e);

            //解决垂直滑动超出屏幕边界时捕捉不到touchend事件无法执行结束方法的问题
            if (e && e.touches) {
                pageY = e.touches[0].pageY;
                if (pageY <= 10 || pageY >= window.innerHeight - 10) {
                    me._end();
                }
            }
        },

        _start: function(e) {
            var me = this,
                t = e.touches || [e];

            //判断滑动
            if ((me.options.scrollX || me.options.scrollY || me.options.scrollFree) && (t.length === 1 || !me.options.zoom)) {
                me.s = "preScroll";
                me.distance = 0;
                me.lastMoveTime = me.startTime = Date.now();
                me._s.lastX = me.startPositionX = me._s.startX = t[0].pageX;
                me._s.lastY = me.startPositionY = me._s.startY = t[0].pageY;

                me._execEvent("scrollStart", e);
                return;
            } else {
                me.s = null;
            }

            //判断缩放
            if (me.options.zoom && t.length > 1) {
                me.s = "preZoom";
                me.scroller.style[utils.TFO] = "0 0";

                var c1 = Math.abs(t[0].pageX - t[1].pageX),
                    c2 = Math.abs(t[0].pageY - t[1].pageY);

                me._z.spacing = Math.sqrt(c1 * c1 + c2 * c2);
                me._z.startScale = me._z.scale;

                me.originX = Math.abs(t[0].pageX + t[1].pageX) / 2 - me.wrapperOffset.left - me.x;
                me.originY = Math.abs(t[0].pageY + t[1].pageY) / 2 - me.wrapperOffset.top - me.y;
                me._execEvent("zoomStart", e);
                return;
            }
        },

        _move: function(e) {
            var me = this,
                t = e.touches || [e],
                now,
                x,
                y,
                dx,
                dy,
                px,
                py,
                sqrtXY,
                directionX = 1,
                directionY = 1;

            x = t[0].pageX;
            y = t[0].pageY;
            dx = x - me._s.lastX;
            dy = y - me._s.lastY;

            me._s.lastX = x;
            me._s.lastY = y;

            directionX = dx >= 0 ? 1 : -1; //手指滑动方向，1(向右) | -1(向左)
            directionY = dy >= 0 ? 1 : -1; //手指滑动方向，1(向下) | -1(向上)

            now = Date.now();

            if (now - me.lastMoveTime > 200 || me.directionX !== directionX || me.directionY !== directionY) {
                me.startTime = now;
                me.startPositionX = x;
                me.startPositionY = y;
                me.directionX = directionX;
                me.directionY = directionY;
            }

            me.lastMoveTime = now;

            px = x - me.startPositionX;
            py = y - me.startPositionY;

            //判断滑动方向
            if (me.s === "preScroll") {

                if (me.options.scrollBarFade) {
                    me.fading = false; //终止滑动条渐隐
                    if (me.scrollBarX) me.scrollBarX.style.opacity = 1;
                    if (me.scrollBarY) me.scrollBarY.style.opacity = 1;
                }

                //判断为y方向，y方向滑动较常使用，因此优先判断
                if (!me.options.scrollFree && me.options.scrollY && (!me.options.scrollX || Math.abs(y - me._s.startY) >= Math.abs(x - me._s.startX))) {
                    me._do = me._y;
                    me.s = "scrollY";
                    return;
                }

                //判断为x方向
                if (!me.options.scrollFree && me.options.scrollX && (!me.options.scrollY || Math.abs(y - me._s.startY) < Math.abs(x - me._s.startX))) {
                    me._do = me._x;
                    me.s = "scrollX";
                    return;
                }

                //判断为任意方向，自由滑动
                if (me.options.scrollFree) {
                    me._do = me._xy;
                    me.s = "scrollFree";
                    return;
                }

            }

            //y方向滑动
            if (me.s === "scrollY") {
                me.y = y - me._s.startY + me._s.endY;
                me._doScroll(py, e);
                return;
            }

            //x方向滑动
            if (me.s === "scrollX") {
                me.x = x - me._s.startX + me._s.endX;
                me._doScroll(px, e);
                return;
            }

            //任意方向滑动
            if (me.s === "scrollFree") {
                me.x = x - me._s.startX + me._s.endX;
                me.y = y - me._s.startY + me._s.endY;
                sqrtXY = Math.sqrt(px * px + py * py);
                me.cosX = px / sqrtXY;
                me.cosY = py / sqrtXY;
                me._doScroll(Math.sqrt(px * px + py * py), e);
                return;
            }

            //缩放
            if (me.s === "preZoom") {
                var c1 = Math.abs(t[0].pageX - t[1].pageX),
                    c2 = Math.abs(t[0].pageY - t[1].pageY),
                    spacing = Math.sqrt(c1 * c1 + c2 * c2),
                    scale = spacing / me._z.spacing * me._z.startScale,
                    lastScale;

                if (scale < me.options.zoomMin) {
                    scale = me.options.zoomMin;
                } else if (scale > me.options.zoomMax) {
                    scale = me.options.zoomMax;
                }

                lastScale = scale / me._z.startScale;

                me.x = Math.round(me.originX - me.originX * lastScale + me._s.endX);
                me.y = Math.round(me.originY - me.originY * lastScale + me._s.endY);
                me._z.scale = scale;

                me._scrollTo(me.x, me.y);
                me._execEvent("zoom", e);

                return;
            }
        },

        _end: function() {
            var me = this,
                ex1, ex2,
                now = Date.now(),
                s1 = me.s === "scrollY",
                s2 = me.s === "scrollX",
                s3 = me.s === "scrollFree";

            JRoll.jrollActive = null;

            me._execEvent("touchEnd");

            //滑动结束
            if (s1 || s2 || s3) {

                me.duration = now - me.startTime;

                ex1 = me.y > me.minScrollY || me.y < me.maxScrollY;
                ex2 = me.x > me.minScrollX || me.x < me.maxScrollX;

                if ((s1 && ex1) || (s2 && ex2) || (s3 && (ex1 || ex2))) { //超出边界回弹

                    me.scrollTo(me.x, me.y, 300)._endAction();

                } else if (me.options.momentum && me.duration < 200 && me.distance) { //惯性滑动

                    me.speed = Math.abs(me.distance / me.duration);
                    me.speed = me.speed > 2 ? 2 : me.speed;
                    me.moving = true;
                    rAF(me._step.bind(me, now));

                } else {

                    me._endAction();

                }

                return;
            }

            //缩放结束
            if (me.s === "preZoom") {

                if (me._z.scale > me.options.zoomMax) {
                    me._z.scale = me.options.zoomMax;
                } else if (me._z.scale < me.options.zoomMin) {
                    me._z.scale = me.options.zoomMin;
                }

                me.refresh();

                me.scrollTo(me.x, me.y, 400);

                me._execEvent("zoomEnd");

                return;
            }

            //隐藏滑动条
            if ((me.s === "preScroll" || me.s === "preZoom") && me.options.scrollBarFade && !me.fading) {
                me.fading = true;
                if (me.scrollBarX) me._fade(me.scrollBarX, 2000);
                if (me.scrollBarY) me._fade(me.scrollBarY, 2000);
            }

        }

    };

    if (typeof module !== "undefined" && module.exports) {
        module.exports = JRoll;
    }
    if (typeof define === "function") {
        define('lib/jroll',[],function() {
            return JRoll;
        });
    }

    window.JRoll = JRoll;

})(window, document, Math);

!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define('lib/socket.io.min',[],e):"object"==typeof exports?exports.io=e():t.io=e()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";function n(t,e){"object"===("undefined"==typeof t?"undefined":i(t))&&(e=t,t=void 0),e=e||{};var r,n=s(t),a=n.source,p=n.id,f=n.path,l=h[p]&&f in h[p].nsps,d=e.forceNew||e["force new connection"]||!1===e.multiplex||l;return d?(u("ignoring socket cache for %s",a),r=c(a,e)):(h[p]||(u("new io instance for %s",a),h[p]=c(a,e)),r=h[p]),n.query&&!e.query?e.query=n.query:e&&"object"===i(e.query)&&(e.query=o(e.query)),r.socket(n.path,e)}function o(t){var e=[];for(var r in t)t.hasOwnProperty(r)&&e.push(encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return e.join("&")}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=r(1),a=r(7),c=r(17),u=r(3)("socket.io-client");t.exports=e=n;var h=e.managers={};e.protocol=a.protocol,e.connect=n,e.Manager=r(17),e.Socket=r(44)},function(t,e,r){(function(e){"use strict";function n(t,r){var n=t;r=r||e.location,null==t&&(t=r.protocol+"//"+r.host),"string"==typeof t&&("/"===t.charAt(0)&&(t="/"===t.charAt(1)?r.protocol+t:r.host+t),/^(https?|wss?):\/\//.test(t)||(i("protocol-less url %s",t),t="undefined"!=typeof r?r.protocol+"//"+t:"https://"+t),i("parse %s",t),n=o(t)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";var s=n.host.indexOf(":")!==-1,a=s?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+a+":"+n.port,n.href=n.protocol+"://"+a+(r&&r.port===n.port?"":":"+n.port),n}var o=r(2),i=r(3)("socket.io-client:url");t.exports=n}).call(e,function(){return this}())},function(t,e){var r=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,n=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];t.exports=function(t){var e=t,o=t.indexOf("["),i=t.indexOf("]");o!=-1&&i!=-1&&(t=t.substring(0,o)+t.substring(o,i).replace(/:/g,";")+t.substring(i,t.length));for(var s=r.exec(t||""),a={},c=14;c--;)a[n[c]]=s[c]||"";return o!=-1&&i!=-1&&(a.source=e,a.host=a.host.substring(1,a.host.length-1).replace(/;/g,":"),a.authority=a.authority.replace("[","").replace("]","").replace(/;/g,":"),a.ipv6uri=!0),a}},function(t,e,r){(function(n){function o(){return"undefined"!=typeof document&&"WebkitAppearance"in document.documentElement.style||window.console&&(console.firebug||console.exception&&console.table)||navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31}function i(){var t=arguments,r=this.useColors;if(t[0]=(r?"%c":"")+this.namespace+(r?" %c":" ")+t[0]+(r?"%c ":" ")+"+"+e.humanize(this.diff),!r)return t;var n="color: "+this.color;t=[t[0],n,"color: inherit"].concat(Array.prototype.slice.call(t,1));var o=0,i=0;return t[0].replace(/%[a-z%]/g,function(t){"%%"!==t&&(o++,"%c"===t&&(i=o))}),t.splice(i,0,n),t}function s(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function a(t){try{null==t?e.storage.removeItem("debug"):e.storage.debug=t}catch(t){}}function c(){try{return e.storage.debug}catch(t){}if("undefined"!=typeof n&&"env"in n)return n.env.DEBUG}function u(){try{return window.localStorage}catch(t){}}e=t.exports=r(5),e.log=s,e.formatArgs=i,e.save=a,e.load=c,e.useColors=o,e.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:u(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],e.formatters.j=function(t){try{return JSON.stringify(t)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},e.enable(c())}).call(e,r(4))},function(t,e){function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function o(t){if(h===setTimeout)return setTimeout(t,0);if((h===r||!h)&&setTimeout)return h=setTimeout,setTimeout(t,0);try{return h(t,0)}catch(e){try{return h.call(null,t,0)}catch(e){return h.call(this,t,0)}}}function i(t){if(p===clearTimeout)return clearTimeout(t);if((p===n||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(t);try{return p(t)}catch(e){try{return p.call(null,t)}catch(e){return p.call(this,t)}}}function s(){y&&l&&(y=!1,l.length?d=l.concat(d):g=-1,d.length&&a())}function a(){if(!y){var t=o(s);y=!0;for(var e=d.length;e;){for(l=d,d=[];++g<e;)l&&l[g].run();g=-1,e=d.length}l=null,y=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function u(){}var h,p,f=t.exports={};!function(){try{h="function"==typeof setTimeout?setTimeout:r}catch(t){h=r}try{p="function"==typeof clearTimeout?clearTimeout:n}catch(t){p=n}}();var l,d=[],y=!1,g=-1;f.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];d.push(new c(t,e)),1!==d.length||y||o(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=u,f.addListener=u,f.once=u,f.off=u,f.removeListener=u,f.removeAllListeners=u,f.emit=u,f.binding=function(t){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(t){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},function(t,e,r){function n(){return e.colors[h++%e.colors.length]}function o(t){function r(){}function o(){var t=o,r=+new Date,i=r-(u||r);t.diff=i,t.prev=u,t.curr=r,u=r,null==t.useColors&&(t.useColors=e.useColors()),null==t.color&&t.useColors&&(t.color=n());for(var s=new Array(arguments.length),a=0;a<s.length;a++)s[a]=arguments[a];s[0]=e.coerce(s[0]),"string"!=typeof s[0]&&(s=["%o"].concat(s));var c=0;s[0]=s[0].replace(/%([a-z%])/g,function(r,n){if("%%"===r)return r;c++;var o=e.formatters[n];if("function"==typeof o){var i=s[c];r=o.call(t,i),s.splice(c,1),c--}return r}),s=e.formatArgs.apply(t,s);var h=o.log||e.log||console.log.bind(console);h.apply(t,s)}r.enabled=!1,o.enabled=!0;var i=e.enabled(t)?o:r;return i.namespace=t,i}function i(t){e.save(t);for(var r=(t||"").split(/[\s,]+/),n=r.length,o=0;o<n;o++)r[o]&&(t=r[o].replace(/[\\^$+?.()|[\]{}]/g,"\\$&").replace(/\*/g,".*?"),"-"===t[0]?e.skips.push(new RegExp("^"+t.substr(1)+"$")):e.names.push(new RegExp("^"+t+"$")))}function s(){e.enable("")}function a(t){var r,n;for(r=0,n=e.skips.length;r<n;r++)if(e.skips[r].test(t))return!1;for(r=0,n=e.names.length;r<n;r++)if(e.names[r].test(t))return!0;return!1}function c(t){return t instanceof Error?t.stack||t.message:t}e=t.exports=o.debug=o,e.coerce=c,e.disable=s,e.enable=i,e.enabled=a,e.humanize=r(6),e.names=[],e.skips=[],e.formatters={};var u,h=0},function(t,e){function r(t){if(t=String(t),!(t.length>1e4)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(e){var r=parseFloat(e[1]),n=(e[2]||"ms").toLowerCase();switch(n){case"years":case"year":case"yrs":case"yr":case"y":return r*h;case"days":case"day":case"d":return r*u;case"hours":case"hour":case"hrs":case"hr":case"h":return r*c;case"minutes":case"minute":case"mins":case"min":case"m":return r*a;case"seconds":case"second":case"secs":case"sec":case"s":return r*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r;default:return}}}}function n(t){return t>=u?Math.round(t/u)+"d":t>=c?Math.round(t/c)+"h":t>=a?Math.round(t/a)+"m":t>=s?Math.round(t/s)+"s":t+"ms"}function o(t){return i(t,u,"day")||i(t,c,"hour")||i(t,a,"minute")||i(t,s,"second")||t+" ms"}function i(t,e,r){if(!(t<e))return t<1.5*e?Math.floor(t/e)+" "+r:Math.ceil(t/e)+" "+r+"s"}var s=1e3,a=60*s,c=60*a,u=24*c,h=365.25*u;t.exports=function(t,e){e=e||{};var i=typeof t;if("string"===i&&t.length>0)return r(t);if("number"===i&&isNaN(t)===!1)return e.long?o(t):n(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}},function(t,e,r){function n(){}function o(t){var r="",n=!1;return r+=t.type,e.BINARY_EVENT!=t.type&&e.BINARY_ACK!=t.type||(r+=t.attachments,r+="-"),t.nsp&&"/"!=t.nsp&&(n=!0,r+=t.nsp),null!=t.id&&(n&&(r+=",",n=!1),r+=t.id),null!=t.data&&(n&&(r+=","),r+=f.stringify(t.data)),p("encoded %j as %s",t,r),r}function i(t,e){function r(t){var r=d.deconstructPacket(t),n=o(r.packet),i=r.buffers;i.unshift(n),e(i)}d.removeBlobs(t,r)}function s(){this.reconstructor=null}function a(t){var r={},n=0;if(r.type=Number(t.charAt(0)),null==e.types[r.type])return h();if(e.BINARY_EVENT==r.type||e.BINARY_ACK==r.type){for(var o="";"-"!=t.charAt(++n)&&(o+=t.charAt(n),n!=t.length););if(o!=Number(o)||"-"!=t.charAt(n))throw new Error("Illegal attachments");r.attachments=Number(o)}if("/"==t.charAt(n+1))for(r.nsp="";++n;){var i=t.charAt(n);if(","==i)break;if(r.nsp+=i,n==t.length)break}else r.nsp="/";var s=t.charAt(n+1);if(""!==s&&Number(s)==s){for(r.id="";++n;){var i=t.charAt(n);if(null==i||Number(i)!=i){--n;break}if(r.id+=t.charAt(n),n==t.length)break}r.id=Number(r.id)}return t.charAt(++n)&&(r=c(r,t.substr(n))),p("decoded %s as %j",t,r),r}function c(t,e){try{t.data=f.parse(e)}catch(t){return h()}return t}function u(t){this.reconPack=t,this.buffers=[]}function h(t){return{type:e.ERROR,data:"parser error"}}var p=r(8)("socket.io-parser"),f=r(11),l=r(13),d=r(14),y=r(16);e.protocol=4,e.types=["CONNECT","DISCONNECT","EVENT","ACK","ERROR","BINARY_EVENT","BINARY_ACK"],e.CONNECT=0,e.DISCONNECT=1,e.EVENT=2,e.ACK=3,e.ERROR=4,e.BINARY_EVENT=5,e.BINARY_ACK=6,e.Encoder=n,e.Decoder=s,n.prototype.encode=function(t,r){if(p("encoding packet %j",t),e.BINARY_EVENT==t.type||e.BINARY_ACK==t.type)i(t,r);else{var n=o(t);r([n])}},l(s.prototype),s.prototype.add=function(t){var r;if("string"==typeof t)r=a(t),e.BINARY_EVENT==r.type||e.BINARY_ACK==r.type?(this.reconstructor=new u(r),0===this.reconstructor.reconPack.attachments&&this.emit("decoded",r)):this.emit("decoded",r);else{if(!y(t)&&!t.base64)throw new Error("Unknown type: "+t);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");r=this.reconstructor.takeBinaryData(t),r&&(this.reconstructor=null,this.emit("decoded",r))}},s.prototype.destroy=function(){this.reconstructor&&this.reconstructor.finishedReconstruction()},u.prototype.takeBinaryData=function(t){if(this.buffers.push(t),this.buffers.length==this.reconPack.attachments){var e=d.reconstructPacket(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null},u.prototype.finishedReconstruction=function(){this.reconPack=null,this.buffers=[]}},function(t,e,r){function n(){return"WebkitAppearance"in document.documentElement.style||window.console&&(console.firebug||console.exception&&console.table)||navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31}function o(){var t=arguments,r=this.useColors;if(t[0]=(r?"%c":"")+this.namespace+(r?" %c":" ")+t[0]+(r?"%c ":" ")+"+"+e.humanize(this.diff),!r)return t;var n="color: "+this.color;t=[t[0],n,"color: inherit"].concat(Array.prototype.slice.call(t,1));var o=0,i=0;return t[0].replace(/%[a-z%]/g,function(t){"%%"!==t&&(o++,"%c"===t&&(i=o))}),t.splice(i,0,n),t}function i(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function s(t){try{null==t?e.storage.removeItem("debug"):e.storage.debug=t}catch(t){}}function a(){var t;try{t=e.storage.debug}catch(t){}return t}function c(){try{return window.localStorage}catch(t){}}e=t.exports=r(9),e.log=i,e.formatArgs=o,e.save=s,e.load=a,e.useColors=n,e.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:c(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],e.formatters.j=function(t){return JSON.stringify(t)},e.enable(a())},function(t,e,r){function n(){return e.colors[h++%e.colors.length]}function o(t){function r(){}function o(){var t=o,r=+new Date,i=r-(u||r);t.diff=i,t.prev=u,t.curr=r,u=r,null==t.useColors&&(t.useColors=e.useColors()),null==t.color&&t.useColors&&(t.color=n());var s=Array.prototype.slice.call(arguments);s[0]=e.coerce(s[0]),"string"!=typeof s[0]&&(s=["%o"].concat(s));var a=0;s[0]=s[0].replace(/%([a-z%])/g,function(r,n){if("%%"===r)return r;a++;var o=e.formatters[n];if("function"==typeof o){var i=s[a];r=o.call(t,i),s.splice(a,1),a--}return r}),"function"==typeof e.formatArgs&&(s=e.formatArgs.apply(t,s));var c=o.log||e.log||console.log.bind(console);c.apply(t,s)}r.enabled=!1,o.enabled=!0;var i=e.enabled(t)?o:r;return i.namespace=t,i}function i(t){e.save(t);for(var r=(t||"").split(/[\s,]+/),n=r.length,o=0;o<n;o++)r[o]&&(t=r[o].replace(/\*/g,".*?"),"-"===t[0]?e.skips.push(new RegExp("^"+t.substr(1)+"$")):e.names.push(new RegExp("^"+t+"$")))}function s(){e.enable("")}function a(t){var r,n;for(r=0,n=e.skips.length;r<n;r++)if(e.skips[r].test(t))return!1;for(r=0,n=e.names.length;r<n;r++)if(e.names[r].test(t))return!0;return!1}function c(t){return t instanceof Error?t.stack||t.message:t}e=t.exports=o,e.coerce=c,e.disable=s,e.enable=i,e.enabled=a,e.humanize=r(10),e.names=[],e.skips=[],e.formatters={};var u,h=0},function(t,e){function r(t){if(t=""+t,!(t.length>1e4)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(e){var r=parseFloat(e[1]),n=(e[2]||"ms").toLowerCase();switch(n){case"years":case"year":case"yrs":case"yr":case"y":return r*h;case"days":case"day":case"d":return r*u;case"hours":case"hour":case"hrs":case"hr":case"h":return r*c;case"minutes":case"minute":case"mins":case"min":case"m":return r*a;case"seconds":case"second":case"secs":case"sec":case"s":return r*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r}}}}function n(t){return t>=u?Math.round(t/u)+"d":t>=c?Math.round(t/c)+"h":t>=a?Math.round(t/a)+"m":t>=s?Math.round(t/s)+"s":t+"ms"}function o(t){return i(t,u,"day")||i(t,c,"hour")||i(t,a,"minute")||i(t,s,"second")||t+" ms"}function i(t,e,r){if(!(t<e))return t<1.5*e?Math.floor(t/e)+" "+r:Math.ceil(t/e)+" "+r+"s"}var s=1e3,a=60*s,c=60*a,u=24*c,h=365.25*u;t.exports=function(t,e){return e=e||{},"string"==typeof t?r(t):e.long?o(t):n(t)}},function(t,e,r){(function(t,r){var n=!1;(function(){function o(t,e){function r(t){if(r[t]!==g)return r[t];var o;if("bug-string-char-index"==t)o="a"!="a"[0];else if("json"==t)o=r("json-stringify")&&r("json-parse");else{var s,a='{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';if("json-stringify"==t){var c=e.stringify,h="function"==typeof c&&b;if(h){(s=function(){return 1}).toJSON=s;try{h="0"===c(0)&&"0"===c(new n)&&'""'==c(new i)&&c(v)===g&&c(g)===g&&c()===g&&"1"===c(s)&&"[1]"==c([s])&&"[null]"==c([g])&&"null"==c(null)&&"[null,null,null]"==c([g,v,null])&&c({a:[s,!0,!1,null,"\0\b\n\f\r\t"]})==a&&"1"===c(null,s)&&"[\n 1,\n 2\n]"==c([1,2],null,1)&&'"-271821-04-20T00:00:00.000Z"'==c(new u(-864e13))&&'"+275760-09-13T00:00:00.000Z"'==c(new u(864e13))&&'"-000001-01-01T00:00:00.000Z"'==c(new u(-621987552e5))&&'"1969-12-31T23:59:59.999Z"'==c(new u(-1))}catch(t){h=!1}}o=h}if("json-parse"==t){var p=e.parse;if("function"==typeof p)try{if(0===p("0")&&!p(!1)){s=p(a);var f=5==s.a.length&&1===s.a[0];if(f){try{f=!p('"\t"')}catch(t){}if(f)try{f=1!==p("01")}catch(t){}if(f)try{f=1!==p("1.")}catch(t){}}}}catch(t){f=!1}o=f}}return r[t]=!!o}t||(t=c.Object()),e||(e=c.Object());var n=t.Number||c.Number,i=t.String||c.String,a=t.Object||c.Object,u=t.Date||c.Date,h=t.SyntaxError||c.SyntaxError,p=t.TypeError||c.TypeError,f=t.Math||c.Math,l=t.JSON||c.JSON;"object"==typeof l&&l&&(e.stringify=l.stringify,e.parse=l.parse);var d,y,g,m=a.prototype,v=m.toString,b=new u(-0xc782b5b800cec);try{b=b.getUTCFullYear()==-109252&&0===b.getUTCMonth()&&1===b.getUTCDate()&&10==b.getUTCHours()&&37==b.getUTCMinutes()&&6==b.getUTCSeconds()&&708==b.getUTCMilliseconds()}catch(t){}if(!r("json")){var w="[object Function]",k="[object Date]",x="[object Number]",A="[object String]",C="[object Array]",B="[object Boolean]",S=r("bug-string-char-index");if(!b)var T=f.floor,E=[0,31,59,90,120,151,181,212,243,273,304,334],_=function(t,e){return E[e]+365*(t-1970)+T((t-1969+(e=+(e>1)))/4)-T((t-1901+e)/100)+T((t-1601+e)/400)};if((d=m.hasOwnProperty)||(d=function(t){var e,r={};return(r.__proto__=null,r.__proto__={toString:1},r).toString!=v?d=function(t){var e=this.__proto__,r=t in(this.__proto__=null,this);return this.__proto__=e,r}:(e=r.constructor,d=function(t){var r=(this.constructor||e).prototype;return t in this&&!(t in r&&this[t]===r[t])}),r=null,d.call(this,t)}),y=function(t,e){var r,n,o,i=0;(r=function(){this.valueOf=0}).prototype.valueOf=0,n=new r;for(o in n)d.call(n,o)&&i++;return r=n=null,i?y=2==i?function(t,e){var r,n={},o=v.call(t)==w;for(r in t)o&&"prototype"==r||d.call(n,r)||!(n[r]=1)||!d.call(t,r)||e(r)}:function(t,e){var r,n,o=v.call(t)==w;for(r in t)o&&"prototype"==r||!d.call(t,r)||(n="constructor"===r)||e(r);(n||d.call(t,r="constructor"))&&e(r)}:(n=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"],y=function(t,e){var r,o,i=v.call(t)==w,a=!i&&"function"!=typeof t.constructor&&s[typeof t.hasOwnProperty]&&t.hasOwnProperty||d;for(r in t)i&&"prototype"==r||!a.call(t,r)||e(r);for(o=n.length;r=n[--o];a.call(t,r)&&e(r));}),y(t,e)},!r("json-stringify")){var N={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},j="000000",O=function(t,e){return(j+(e||0)).slice(-t)},P="\\u00",R=function(t){for(var e='"',r=0,n=t.length,o=!S||n>10,i=o&&(S?t.split(""):t);r<n;r++){var s=t.charCodeAt(r);switch(s){case 8:case 9:case 10:case 12:case 13:case 34:case 92:e+=N[s];break;default:if(s<32){e+=P+O(2,s.toString(16));break}e+=o?i[r]:t.charAt(r)}}return e+'"'},D=function(t,e,r,n,o,i,s){var a,c,u,h,f,l,m,b,w,S,E,N,j,P,q,U;try{a=e[t]}catch(t){}if("object"==typeof a&&a)if(c=v.call(a),c!=k||d.call(a,"toJSON"))"function"==typeof a.toJSON&&(c!=x&&c!=A&&c!=C||d.call(a,"toJSON"))&&(a=a.toJSON(t));else if(a>-1/0&&a<1/0){if(_){for(f=T(a/864e5),u=T(f/365.2425)+1970-1;_(u+1,0)<=f;u++);for(h=T((f-_(u,0))/30.42);_(u,h+1)<=f;h++);f=1+f-_(u,h),l=(a%864e5+864e5)%864e5,m=T(l/36e5)%24,b=T(l/6e4)%60,w=T(l/1e3)%60,S=l%1e3}else u=a.getUTCFullYear(),h=a.getUTCMonth(),f=a.getUTCDate(),m=a.getUTCHours(),b=a.getUTCMinutes(),w=a.getUTCSeconds(),S=a.getUTCMilliseconds();a=(u<=0||u>=1e4?(u<0?"-":"+")+O(6,u<0?-u:u):O(4,u))+"-"+O(2,h+1)+"-"+O(2,f)+"T"+O(2,m)+":"+O(2,b)+":"+O(2,w)+"."+O(3,S)+"Z"}else a=null;if(r&&(a=r.call(e,t,a)),null===a)return"null";if(c=v.call(a),c==B)return""+a;if(c==x)return a>-1/0&&a<1/0?""+a:"null";if(c==A)return R(""+a);if("object"==typeof a){for(P=s.length;P--;)if(s[P]===a)throw p();if(s.push(a),E=[],q=i,i+=o,c==C){for(j=0,P=a.length;j<P;j++)N=D(j,a,r,n,o,i,s),E.push(N===g?"null":N);U=E.length?o?"[\n"+i+E.join(",\n"+i)+"\n"+q+"]":"["+E.join(",")+"]":"[]"}else y(n||a,function(t){var e=D(t,a,r,n,o,i,s);e!==g&&E.push(R(t)+":"+(o?" ":"")+e)}),U=E.length?o?"{\n"+i+E.join(",\n"+i)+"\n"+q+"}":"{"+E.join(",")+"}":"{}";return s.pop(),U}};e.stringify=function(t,e,r){var n,o,i,a;if(s[typeof e]&&e)if((a=v.call(e))==w)o=e;else if(a==C){i={};for(var c,u=0,h=e.length;u<h;c=e[u++],a=v.call(c),(a==A||a==x)&&(i[c]=1));}if(r)if((a=v.call(r))==x){if((r-=r%1)>0)for(n="",r>10&&(r=10);n.length<r;n+=" ");}else a==A&&(n=r.length<=10?r:r.slice(0,10));return D("",(c={},c[""]=t,c),o,i,n,"",[])}}if(!r("json-parse")){var q,U,M=i.fromCharCode,L={92:"\\",34:'"',47:"/",98:"\b",116:"\t",110:"\n",102:"\f",114:"\r"},I=function(){throw q=U=null,h()},H=function(){for(var t,e,r,n,o,i=U,s=i.length;q<s;)switch(o=i.charCodeAt(q)){case 9:case 10:case 13:case 32:q++;break;case 123:case 125:case 91:case 93:case 58:case 44:return t=S?i.charAt(q):i[q],q++,t;case 34:for(t="@",q++;q<s;)if(o=i.charCodeAt(q),o<32)I();else if(92==o)switch(o=i.charCodeAt(++q)){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:t+=L[o],q++;break;case 117:for(e=++q,r=q+4;q<r;q++)o=i.charCodeAt(q),o>=48&&o<=57||o>=97&&o<=102||o>=65&&o<=70||I();t+=M("0x"+i.slice(e,q));break;default:I()}else{if(34==o)break;for(o=i.charCodeAt(q),e=q;o>=32&&92!=o&&34!=o;)o=i.charCodeAt(++q);t+=i.slice(e,q)}if(34==i.charCodeAt(q))return q++,t;I();default:if(e=q,45==o&&(n=!0,o=i.charCodeAt(++q)),o>=48&&o<=57){for(48==o&&(o=i.charCodeAt(q+1),o>=48&&o<=57)&&I(),n=!1;q<s&&(o=i.charCodeAt(q),o>=48&&o<=57);q++);if(46==i.charCodeAt(q)){for(r=++q;r<s&&(o=i.charCodeAt(r),o>=48&&o<=57);r++);r==q&&I(),q=r}if(o=i.charCodeAt(q),101==o||69==o){for(o=i.charCodeAt(++q),43!=o&&45!=o||q++,r=q;r<s&&(o=i.charCodeAt(r),o>=48&&o<=57);r++);r==q&&I(),q=r}return+i.slice(e,q)}if(n&&I(),"true"==i.slice(q,q+4))return q+=4,!0;if("false"==i.slice(q,q+5))return q+=5,!1;if("null"==i.slice(q,q+4))return q+=4,null;I()}return"$"},z=function(t){var e,r;if("$"==t&&I(),"string"==typeof t){if("@"==(S?t.charAt(0):t[0]))return t.slice(1);if("["==t){for(e=[];t=H(),"]"!=t;r||(r=!0))r&&(","==t?(t=H(),"]"==t&&I()):I()),","==t&&I(),e.push(z(t));return e}if("{"==t){for(e={};t=H(),"}"!=t;r||(r=!0))r&&(","==t?(t=H(),"}"==t&&I()):I()),","!=t&&"string"==typeof t&&"@"==(S?t.charAt(0):t[0])&&":"==H()||I(),e[t.slice(1)]=z(H());return e}I()}return t},J=function(t,e,r){var n=X(t,e,r);n===g?delete t[e]:t[e]=n},X=function(t,e,r){var n,o=t[e];if("object"==typeof o&&o)if(v.call(o)==C)for(n=o.length;n--;)J(o,n,r);else y(o,function(t){J(o,t,r)});return r.call(t,e,o)};e.parse=function(t,e){var r,n;return q=0,U=""+t,r=z(H()),"$"!=H()&&I(),q=U=null,e&&v.call(e)==w?X((n={},n[""]=r,n),"",e):r}}}return e.runInContext=o,e}var i="function"==typeof n&&n.amd,s={function:!0,object:!0},a=s[typeof e]&&e&&!e.nodeType&&e,c=s[typeof window]&&window||this,u=a&&s[typeof t]&&t&&!t.nodeType&&"object"==typeof r&&r;if(!u||u.global!==u&&u.window!==u&&u.self!==u||(c=u),a&&!i)o(c,a);else{var h=c.JSON,p=c.JSON3,f=!1,l=o(c,c.JSON3={noConflict:function(){return f||(f=!0,c.JSON=h,c.JSON3=p,h=p=null),l}});c.JSON={parse:l.parse,stringify:l.stringify}}i&&n(function(){return l})}).call(this)}).call(e,r(12)(t),function(){return this}())},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},function(t,e){function r(t){if(t)return n(t)}function n(t){for(var e in r.prototype)t[e]=r.prototype[e];return t}t.exports=r,r.prototype.on=r.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks[t]=this._callbacks[t]||[]).push(e),this},r.prototype.once=function(t,e){function r(){n.off(t,r),e.apply(this,arguments)}var n=this;return this._callbacks=this._callbacks||{},r.fn=e,this.on(t,r),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r=this._callbacks[t];if(!r)return this;if(1==arguments.length)return delete this._callbacks[t],this;for(var n,o=0;o<r.length;o++)if(n=r[o],n===e||n.fn===e){r.splice(o,1);break}return this},r.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),r=this._callbacks[t];if(r){r=r.slice(0);for(var n=0,o=r.length;n<o;++n)r[n].apply(this,e)}return this},r.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks[t]||[]},r.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e,r){(function(t){var n=r(15),o=r(16);e.deconstructPacket=function(t){function e(t){if(!t)return t;if(o(t)){var i={_placeholder:!0,num:r.length};return r.push(t),i}if(n(t)){for(var s=new Array(t.length),a=0;a<t.length;a++)s[a]=e(t[a]);return s}if("object"==typeof t&&!(t instanceof Date)){var s={};for(var c in t)s[c]=e(t[c]);return s}return t}var r=[],i=t.data,s=t;return s.data=e(i),s.attachments=r.length,{packet:s,buffers:r}},e.reconstructPacket=function(t,e){function r(t){if(t&&t._placeholder){var o=e[t.num];return o}if(n(t)){for(var i=0;i<t.length;i++)t[i]=r(t[i]);return t}if(t&&"object"==typeof t){for(var s in t)t[s]=r(t[s]);return t}return t}return t.data=r(t.data),t.attachments=void 0,t},e.removeBlobs=function(e,r){function i(e,c,u){if(!e)return e;if(t.Blob&&e instanceof Blob||t.File&&e instanceof File){s++;var h=new FileReader;h.onload=function(){u?u[c]=this.result:a=this.result,--s||r(a)},h.readAsArrayBuffer(e)}else if(n(e))for(var p=0;p<e.length;p++)i(e[p],p,e);else if(e&&"object"==typeof e&&!o(e))for(var f in e)i(e[f],f,e)}var s=0,a=e;i(a),s||r(a)}}).call(e,function(){return this}())},function(t,e){t.exports=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)}},function(t,e){(function(e){function r(t){return e.Buffer&&e.Buffer.isBuffer(t)||e.ArrayBuffer&&t instanceof ArrayBuffer}t.exports=r}).call(e,function(){return this}())},function(t,e,r){"use strict";function n(t,e){return this instanceof n?(t&&"object"===("undefined"==typeof t?"undefined":o(t))&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.nsps={},this.subs=[],this.opts=e,this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor(e.randomizationFactor||.5),this.backoff=new l({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==e.timeout?2e4:e.timeout),this.readyState="closed",this.uri=t,this.connecting=[],this.lastPing=null,this.encoding=!1,this.packetBuffer=[],this.encoder=new c.Encoder,this.decoder=new c.Decoder,this.autoConnect=e.autoConnect!==!1,void(this.autoConnect&&this.open())):new n(t,e)}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=r(18),s=r(44),a=r(35),c=r(7),u=r(46),h=r(47),p=r(3)("socket.io-client:manager"),f=r(42),l=r(48),d=Object.prototype.hasOwnProperty;t.exports=n,n.prototype.emitAll=function(){this.emit.apply(this,arguments);for(var t in this.nsps)d.call(this.nsps,t)&&this.nsps[t].emit.apply(this.nsps[t],arguments)},n.prototype.updateSocketIds=function(){for(var t in this.nsps)d.call(this.nsps,t)&&(this.nsps[t].id=this.engine.id)},a(n.prototype),n.prototype.reconnection=function(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection},n.prototype.reconnectionAttempts=function(t){return arguments.length?(this._reconnectionAttempts=t,this):this._reconnectionAttempts},n.prototype.reconnectionDelay=function(t){return arguments.length?(this._reconnectionDelay=t,this.backoff&&this.backoff.setMin(t),this):this._reconnectionDelay},n.prototype.randomizationFactor=function(t){return arguments.length?(this._randomizationFactor=t,this.backoff&&this.backoff.setJitter(t),this):this._randomizationFactor},n.prototype.reconnectionDelayMax=function(t){return arguments.length?(this._reconnectionDelayMax=t,this.backoff&&this.backoff.setMax(t),this):this._reconnectionDelayMax},n.prototype.timeout=function(t){return arguments.length?(this._timeout=t,this):this._timeout},n.prototype.maybeReconnectOnOpen=function(){!this.reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()},n.prototype.open=n.prototype.connect=function(t,e){if(p("readyState %s",this.readyState),~this.readyState.indexOf("open"))return this;p("opening %s",this.uri),this.engine=i(this.uri,this.opts);var r=this.engine,n=this;this.readyState="opening",this.skipReconnect=!1;var o=u(r,"open",function(){n.onopen(),t&&t()}),s=u(r,"error",function(e){if(p("connect_error"),n.cleanup(),n.readyState="closed",n.emitAll("connect_error",e),t){var r=new Error("Connection error");r.data=e,t(r)}else n.maybeReconnectOnOpen()});if(!1!==this._timeout){var a=this._timeout;p("connect attempt will timeout after %d",a);var c=setTimeout(function(){p("connect attempt timed out after %d",a),o.destroy(),r.close(),r.emit("error","timeout"),n.emitAll("connect_timeout",a)},a);this.subs.push({destroy:function(){clearTimeout(c)}})}return this.subs.push(o),this.subs.push(s),this},n.prototype.onopen=function(){p("open"),this.cleanup(),this.readyState="open",this.emit("open");var t=this.engine;this.subs.push(u(t,"data",h(this,"ondata"))),this.subs.push(u(t,"ping",h(this,"onping"))),this.subs.push(u(t,"pong",h(this,"onpong"))),this.subs.push(u(t,"error",h(this,"onerror"))),this.subs.push(u(t,"close",h(this,"onclose"))),this.subs.push(u(this.decoder,"decoded",h(this,"ondecoded")))},n.prototype.onping=function(){this.lastPing=new Date,this.emitAll("ping")},n.prototype.onpong=function(){this.emitAll("pong",new Date-this.lastPing)},n.prototype.ondata=function(t){this.decoder.add(t)},n.prototype.ondecoded=function(t){this.emit("packet",t)},n.prototype.onerror=function(t){p("error",t),this.emitAll("error",t)},n.prototype.socket=function(t,e){function r(){~f(o.connecting,n)||o.connecting.push(n)}var n=this.nsps[t];if(!n){n=new s(this,t,e),this.nsps[t]=n;var o=this;n.on("connecting",r),n.on("connect",function(){n.id=o.engine.id}),this.autoConnect&&r()}return n},n.prototype.destroy=function(t){var e=f(this.connecting,t);~e&&this.connecting.splice(e,1),this.connecting.length||this.close()},n.prototype.packet=function(t){p("writing packet %j",t);var e=this;t.query&&0===t.type&&(t.nsp+="?"+t.query),e.encoding?e.packetBuffer.push(t):(e.encoding=!0,this.encoder.encode(t,function(r){for(var n=0;n<r.length;n++)e.engine.write(r[n],t.options);e.encoding=!1,e.processPacketQueue()}))},n.prototype.processPacketQueue=function(){if(this.packetBuffer.length>0&&!this.encoding){var t=this.packetBuffer.shift();this.packet(t)}},n.prototype.cleanup=function(){p("cleanup");for(var t=this.subs.length,e=0;e<t;e++){var r=this.subs.shift();r.destroy()}this.packetBuffer=[],this.encoding=!1,this.lastPing=null,this.decoder.destroy()},n.prototype.close=n.prototype.disconnect=function(){p("disconnect"),this.skipReconnect=!0,this.reconnecting=!1,"opening"===this.readyState&&this.cleanup(),this.backoff.reset(),this.readyState="closed",this.engine&&this.engine.close()},n.prototype.onclose=function(t){p("onclose"),this.cleanup(),this.backoff.reset(),this.readyState="closed",this.emit("close",t),this._reconnection&&!this.skipReconnect&&this.reconnect()},n.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var t=this;if(this.backoff.attempts>=this._reconnectionAttempts)p("reconnect failed"),this.backoff.reset(),this.emitAll("reconnect_failed"),this.reconnecting=!1;else{var e=this.backoff.duration();p("will wait %dms before reconnect attempt",e),this.reconnecting=!0;var r=setTimeout(function(){t.skipReconnect||(p("attempting reconnect"),t.emitAll("reconnect_attempt",t.backoff.attempts),t.emitAll("reconnecting",t.backoff.attempts),t.skipReconnect||t.open(function(e){e?(p("reconnect attempt error"),t.reconnecting=!1,t.reconnect(),t.emitAll("reconnect_error",e.data)):(p("reconnect success"),t.onreconnect())}))},e);this.subs.push({destroy:function(){clearTimeout(r)}})}},n.prototype.onreconnect=function(){var t=this.backoff.attempts;this.reconnecting=!1,this.backoff.reset(),this.updateSocketIds(),this.emitAll("reconnect",t)}},function(t,e,r){t.exports=r(19)},function(t,e,r){t.exports=r(20),t.exports.parser=r(27)},function(t,e,r){(function(e){function n(t,r){if(!(this instanceof n))return new n(t,r);r=r||{},t&&"object"==typeof t&&(r=t,t=null),t?(t=h(t),r.hostname=t.host,r.secure="https"===t.protocol||"wss"===t.protocol,r.port=t.port,t.query&&(r.query=t.query)):r.host&&(r.hostname=h(r.host).host),
this.secure=null!=r.secure?r.secure:e.location&&"https:"===location.protocol,r.hostname&&!r.port&&(r.port=this.secure?"443":"80"),this.agent=r.agent||!1,this.hostname=r.hostname||(e.location?location.hostname:"localhost"),this.port=r.port||(e.location&&location.port?location.port:this.secure?443:80),this.query=r.query||{},"string"==typeof this.query&&(this.query=f.decode(this.query)),this.upgrade=!1!==r.upgrade,this.path=(r.path||"/engine.io").replace(/\/$/,"")+"/",this.forceJSONP=!!r.forceJSONP,this.jsonp=!1!==r.jsonp,this.forceBase64=!!r.forceBase64,this.enablesXDR=!!r.enablesXDR,this.timestampParam=r.timestampParam||"t",this.timestampRequests=r.timestampRequests,this.transports=r.transports||["polling","websocket"],this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.policyPort=r.policyPort||843,this.rememberUpgrade=r.rememberUpgrade||!1,this.binaryType=null,this.onlyBinaryUpgrades=r.onlyBinaryUpgrades,this.perMessageDeflate=!1!==r.perMessageDeflate&&(r.perMessageDeflate||{}),!0===this.perMessageDeflate&&(this.perMessageDeflate={}),this.perMessageDeflate&&null==this.perMessageDeflate.threshold&&(this.perMessageDeflate.threshold=1024),this.pfx=r.pfx||null,this.key=r.key||null,this.passphrase=r.passphrase||null,this.cert=r.cert||null,this.ca=r.ca||null,this.ciphers=r.ciphers||null,this.rejectUnauthorized=void 0===r.rejectUnauthorized?null:r.rejectUnauthorized,this.forceNode=!!r.forceNode;var o="object"==typeof e&&e;o.global===o&&(r.extraHeaders&&Object.keys(r.extraHeaders).length>0&&(this.extraHeaders=r.extraHeaders),r.localAddress&&(this.localAddress=r.localAddress)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingIntervalTimer=null,this.pingTimeoutTimer=null,this.open()}function o(t){var e={};for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e}var i=r(21),s=r(35),a=r(3)("engine.io-client:socket"),c=r(42),u=r(27),h=r(2),p=r(43),f=r(36);t.exports=n,n.priorWebsocketSuccess=!1,s(n.prototype),n.protocol=u.protocol,n.Socket=n,n.Transport=r(26),n.transports=r(21),n.parser=r(27),n.prototype.createTransport=function(t){a('creating transport "%s"',t);var e=o(this.query);e.EIO=u.protocol,e.transport=t,this.id&&(e.sid=this.id);var r=new i[t]({agent:this.agent,hostname:this.hostname,port:this.port,secure:this.secure,path:this.path,query:e,forceJSONP:this.forceJSONP,jsonp:this.jsonp,forceBase64:this.forceBase64,enablesXDR:this.enablesXDR,timestampRequests:this.timestampRequests,timestampParam:this.timestampParam,policyPort:this.policyPort,socket:this,pfx:this.pfx,key:this.key,passphrase:this.passphrase,cert:this.cert,ca:this.ca,ciphers:this.ciphers,rejectUnauthorized:this.rejectUnauthorized,perMessageDeflate:this.perMessageDeflate,extraHeaders:this.extraHeaders,forceNode:this.forceNode,localAddress:this.localAddress});return r},n.prototype.open=function(){var t;if(this.rememberUpgrade&&n.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)t="websocket";else{if(0===this.transports.length){var e=this;return void setTimeout(function(){e.emit("error","No transports available")},0)}t=this.transports[0]}this.readyState="opening";try{t=this.createTransport(t)}catch(t){return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)},n.prototype.setTransport=function(t){a("setting transport %s",t.name);var e=this;this.transport&&(a("clearing existing transport %s",this.transport.name),this.transport.removeAllListeners()),this.transport=t,t.on("drain",function(){e.onDrain()}).on("packet",function(t){e.onPacket(t)}).on("error",function(t){e.onError(t)}).on("close",function(){e.onClose("transport close")})},n.prototype.probe=function(t){function e(){if(f.onlyBinaryUpgrades){var e=!this.supportsBinary&&f.transport.supportsBinary;p=p||e}p||(a('probe transport "%s" opened',t),h.send([{type:"ping",data:"probe"}]),h.once("packet",function(e){if(!p)if("pong"===e.type&&"probe"===e.data){if(a('probe transport "%s" pong',t),f.upgrading=!0,f.emit("upgrading",h),!h)return;n.priorWebsocketSuccess="websocket"===h.name,a('pausing current transport "%s"',f.transport.name),f.transport.pause(function(){p||"closed"!==f.readyState&&(a("changing transport and sending upgrade packet"),u(),f.setTransport(h),h.send([{type:"upgrade"}]),f.emit("upgrade",h),h=null,f.upgrading=!1,f.flush())})}else{a('probe transport "%s" failed',t);var r=new Error("probe error");r.transport=h.name,f.emit("upgradeError",r)}}))}function r(){p||(p=!0,u(),h.close(),h=null)}function o(e){var n=new Error("probe error: "+e);n.transport=h.name,r(),a('probe transport "%s" failed because of error: %s',t,e),f.emit("upgradeError",n)}function i(){o("transport closed")}function s(){o("socket closed")}function c(t){h&&t.name!==h.name&&(a('"%s" works - aborting "%s"',t.name,h.name),r())}function u(){h.removeListener("open",e),h.removeListener("error",o),h.removeListener("close",i),f.removeListener("close",s),f.removeListener("upgrading",c)}a('probing transport "%s"',t);var h=this.createTransport(t,{probe:1}),p=!1,f=this;n.priorWebsocketSuccess=!1,h.once("open",e),h.once("error",o),h.once("close",i),this.once("close",s),this.once("upgrading",c),h.open()},n.prototype.onOpen=function(){if(a("socket open"),this.readyState="open",n.priorWebsocketSuccess="websocket"===this.transport.name,this.emit("open"),this.flush(),"open"===this.readyState&&this.upgrade&&this.transport.pause){a("starting upgrade probes");for(var t=0,e=this.upgrades.length;t<e;t++)this.probe(this.upgrades[t])}},n.prototype.onPacket=function(t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(a('socket receive: type "%s", data "%s"',t.type,t.data),this.emit("packet",t),this.emit("heartbeat"),t.type){case"open":this.onHandshake(p(t.data));break;case"pong":this.setPing(),this.emit("pong");break;case"error":var e=new Error("server error");e.code=t.data,this.onError(e);break;case"message":this.emit("data",t.data),this.emit("message",t.data)}else a('packet received with socket readyState "%s"',this.readyState)},n.prototype.onHandshake=function(t){this.emit("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.onOpen(),"closed"!==this.readyState&&(this.setPing(),this.removeListener("heartbeat",this.onHeartbeat),this.on("heartbeat",this.onHeartbeat))},n.prototype.onHeartbeat=function(t){clearTimeout(this.pingTimeoutTimer);var e=this;e.pingTimeoutTimer=setTimeout(function(){"closed"!==e.readyState&&e.onClose("ping timeout")},t||e.pingInterval+e.pingTimeout)},n.prototype.setPing=function(){var t=this;clearTimeout(t.pingIntervalTimer),t.pingIntervalTimer=setTimeout(function(){a("writing ping packet - expecting pong within %sms",t.pingTimeout),t.ping(),t.onHeartbeat(t.pingTimeout)},t.pingInterval)},n.prototype.ping=function(){var t=this;this.sendPacket("ping",function(){t.emit("ping")})},n.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emit("drain"):this.flush()},n.prototype.flush=function(){"closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(a("flushing %d packets in socket",this.writeBuffer.length),this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emit("flush"))},n.prototype.write=n.prototype.send=function(t,e,r){return this.sendPacket("message",t,e,r),this},n.prototype.sendPacket=function(t,e,r,n){if("function"==typeof e&&(n=e,e=void 0),"function"==typeof r&&(n=r,r=null),"closing"!==this.readyState&&"closed"!==this.readyState){r=r||{},r.compress=!1!==r.compress;var o={type:t,data:e,options:r};this.emit("packetCreate",o),this.writeBuffer.push(o),n&&this.once("flush",n),this.flush()}},n.prototype.close=function(){function t(){n.onClose("forced close"),a("socket closing - telling transport to close"),n.transport.close()}function e(){n.removeListener("upgrade",e),n.removeListener("upgradeError",e),t()}function r(){n.once("upgrade",e),n.once("upgradeError",e)}if("opening"===this.readyState||"open"===this.readyState){this.readyState="closing";var n=this;this.writeBuffer.length?this.once("drain",function(){this.upgrading?r():t()}):this.upgrading?r():t()}return this},n.prototype.onError=function(t){a("socket error %j",t),n.priorWebsocketSuccess=!1,this.emit("error",t),this.onClose("transport error",t)},n.prototype.onClose=function(t,e){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState){a('socket close with reason: "%s"',t);var r=this;clearTimeout(this.pingIntervalTimer),clearTimeout(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),this.readyState="closed",this.id=null,this.emit("close",t,e),r.writeBuffer=[],r.prevBufferLen=0}},n.prototype.filterUpgrades=function(t){for(var e=[],r=0,n=t.length;r<n;r++)~c(this.transports,t[r])&&e.push(t[r]);return e}}).call(e,function(){return this}())},function(t,e,r){(function(t){function n(e){var r,n=!1,a=!1,c=!1!==e.jsonp;if(t.location){var u="https:"===location.protocol,h=location.port;h||(h=u?443:80),n=e.hostname!==location.hostname||h!==e.port,a=e.secure!==u}if(e.xdomain=n,e.xscheme=a,r=new o(e),"open"in r&&!e.forceJSONP)return new i(e);if(!c)throw new Error("JSONP disabled");return new s(e)}var o=r(22),i=r(24),s=r(39),a=r(40);e.polling=n,e.websocket=a}).call(e,function(){return this}())},function(t,e,r){(function(e){var n=r(23);t.exports=function(t){var r=t.xdomain,o=t.xscheme,i=t.enablesXDR;try{if("undefined"!=typeof XMLHttpRequest&&(!r||n))return new XMLHttpRequest}catch(t){}try{if("undefined"!=typeof XDomainRequest&&!o&&i)return new XDomainRequest}catch(t){}if(!r)try{return new(e[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(t){}}}).call(e,function(){return this}())},function(t,e){try{t.exports="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(e){t.exports=!1}},function(t,e,r){(function(e){function n(){}function o(t){if(c.call(this,t),this.requestTimeout=t.requestTimeout,e.location){var r="https:"===location.protocol,n=location.port;n||(n=r?443:80),this.xd=t.hostname!==e.location.hostname||n!==t.port,this.xs=t.secure!==r}else this.extraHeaders=t.extraHeaders}function i(t){this.method=t.method||"GET",this.uri=t.uri,this.xd=!!t.xd,this.xs=!!t.xs,this.async=!1!==t.async,this.data=void 0!==t.data?t.data:null,this.agent=t.agent,this.isBinary=t.isBinary,this.supportsBinary=t.supportsBinary,this.enablesXDR=t.enablesXDR,this.requestTimeout=t.requestTimeout,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.extraHeaders=t.extraHeaders,this.create()}function s(){for(var t in i.requests)i.requests.hasOwnProperty(t)&&i.requests[t].abort()}var a=r(22),c=r(25),u=r(35),h=r(37),p=r(3)("engine.io-client:polling-xhr");t.exports=o,t.exports.Request=i,h(o,c),o.prototype.supportsBinary=!0,o.prototype.request=function(t){return t=t||{},t.uri=this.uri(),t.xd=this.xd,t.xs=this.xs,t.agent=this.agent||!1,t.supportsBinary=this.supportsBinary,t.enablesXDR=this.enablesXDR,t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized,t.requestTimeout=this.requestTimeout,t.extraHeaders=this.extraHeaders,new i(t)},o.prototype.doWrite=function(t,e){var r="string"!=typeof t&&void 0!==t,n=this.request({method:"POST",data:t,isBinary:r}),o=this;n.on("success",e),n.on("error",function(t){o.onError("xhr post error",t)}),this.sendXhr=n},o.prototype.doPoll=function(){p("xhr poll");var t=this.request(),e=this;t.on("data",function(t){e.onData(t)}),t.on("error",function(t){e.onError("xhr poll error",t)}),this.pollXhr=t},u(i.prototype),i.prototype.create=function(){var t={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized;var r=this.xhr=new a(t),n=this;try{p("xhr open %s: %s",this.method,this.uri),r.open(this.method,this.uri,this.async);try{if(this.extraHeaders){r.setDisableHeaderCheck(!0);for(var o in this.extraHeaders)this.extraHeaders.hasOwnProperty(o)&&r.setRequestHeader(o,this.extraHeaders[o])}}catch(t){}if(this.supportsBinary&&(r.responseType="arraybuffer"),"POST"===this.method)try{this.isBinary?r.setRequestHeader("Content-type","application/octet-stream"):r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(t){}try{r.setRequestHeader("Accept","*/*")}catch(t){}"withCredentials"in r&&(r.withCredentials=!0),this.requestTimeout&&(r.timeout=this.requestTimeout),this.hasXDR()?(r.onload=function(){n.onLoad()},r.onerror=function(){n.onError(r.responseText)}):r.onreadystatechange=function(){4===r.readyState&&(200===r.status||1223===r.status?n.onLoad():setTimeout(function(){n.onError(r.status)},0))},p("xhr data %s",this.data),r.send(this.data)}catch(t){return void setTimeout(function(){n.onError(t)},0)}e.document&&(this.index=i.requestsCount++,i.requests[this.index]=this)},i.prototype.onSuccess=function(){this.emit("success"),this.cleanup()},i.prototype.onData=function(t){this.emit("data",t),this.onSuccess()},i.prototype.onError=function(t){this.emit("error",t),this.cleanup(!0)},i.prototype.cleanup=function(t){if("undefined"!=typeof this.xhr&&null!==this.xhr){if(this.hasXDR()?this.xhr.onload=this.xhr.onerror=n:this.xhr.onreadystatechange=n,t)try{this.xhr.abort()}catch(t){}e.document&&delete i.requests[this.index],this.xhr=null}},i.prototype.onLoad=function(){var t;try{var e;try{e=this.xhr.getResponseHeader("Content-Type").split(";")[0]}catch(t){}if("application/octet-stream"===e)t=this.xhr.response||this.xhr.responseText;else if(this.supportsBinary)try{t=String.fromCharCode.apply(null,new Uint8Array(this.xhr.response))}catch(e){for(var r=new Uint8Array(this.xhr.response),n=[],o=0,i=r.length;o<i;o++)n.push(r[o]);t=String.fromCharCode.apply(null,n)}else t=this.xhr.responseText}catch(t){this.onError(t)}null!=t&&this.onData(t)},i.prototype.hasXDR=function(){return"undefined"!=typeof e.XDomainRequest&&!this.xs&&this.enablesXDR},i.prototype.abort=function(){this.cleanup()},i.requestsCount=0,i.requests={},e.document&&(e.attachEvent?e.attachEvent("onunload",s):e.addEventListener&&e.addEventListener("beforeunload",s,!1))}).call(e,function(){return this}())},function(t,e,r){function n(t){var e=t&&t.forceBase64;h&&!e||(this.supportsBinary=!1),o.call(this,t)}var o=r(26),i=r(36),s=r(27),a=r(37),c=r(38),u=r(3)("engine.io-client:polling");t.exports=n;var h=function(){var t=r(22),e=new t({xdomain:!1});return null!=e.responseType}();a(n,o),n.prototype.name="polling",n.prototype.doOpen=function(){this.poll()},n.prototype.pause=function(t){function e(){u("paused"),r.readyState="paused",t()}var r=this;if(this.readyState="pausing",this.polling||!this.writable){var n=0;this.polling&&(u("we are currently polling - waiting to pause"),n++,this.once("pollComplete",function(){u("pre-pause polling complete"),--n||e()})),this.writable||(u("we are currently writing - waiting to pause"),n++,this.once("drain",function(){u("pre-pause writing complete"),--n||e()}))}else e()},n.prototype.poll=function(){u("polling"),this.polling=!0,this.doPoll(),this.emit("poll")},n.prototype.onData=function(t){var e=this;u("polling got data %s",t);var r=function(t,r,n){return"opening"===e.readyState&&e.onOpen(),"close"===t.type?(e.onClose(),!1):void e.onPacket(t)};s.decodePayload(t,this.socket.binaryType,r),"closed"!==this.readyState&&(this.polling=!1,this.emit("pollComplete"),"open"===this.readyState?this.poll():u('ignoring poll - transport state "%s"',this.readyState))},n.prototype.doClose=function(){function t(){u("writing close packet"),e.write([{type:"close"}])}var e=this;"open"===this.readyState?(u("transport open - closing"),t()):(u("transport not open - deferring close"),this.once("open",t))},n.prototype.write=function(t){var e=this;this.writable=!1;var r=function(){e.writable=!0,e.emit("drain")};s.encodePayload(t,this.supportsBinary,function(t){e.doWrite(t,r)})},n.prototype.uri=function(){var t=this.query||{},e=this.secure?"https":"http",r="";!1!==this.timestampRequests&&(t[this.timestampParam]=c()),this.supportsBinary||t.sid||(t.b64=1),t=i.encode(t),this.port&&("https"===e&&443!==Number(this.port)||"http"===e&&80!==Number(this.port))&&(r=":"+this.port),t.length&&(t="?"+t);var n=this.hostname.indexOf(":")!==-1;return e+"://"+(n?"["+this.hostname+"]":this.hostname)+r+this.path+t}},function(t,e,r){function n(t){this.path=t.path,this.hostname=t.hostname,this.port=t.port,this.secure=t.secure,this.query=t.query,this.timestampParam=t.timestampParam,this.timestampRequests=t.timestampRequests,this.readyState="",this.agent=t.agent||!1,this.socket=t.socket,this.enablesXDR=t.enablesXDR,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.forceNode=t.forceNode,this.extraHeaders=t.extraHeaders,this.localAddress=t.localAddress}var o=r(27),i=r(35);t.exports=n,i(n.prototype),n.prototype.onError=function(t,e){var r=new Error(t);return r.type="TransportError",r.description=e,this.emit("error",r),this},n.prototype.open=function(){return"closed"!==this.readyState&&""!==this.readyState||(this.readyState="opening",this.doOpen()),this},n.prototype.close=function(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this},n.prototype.send=function(t){if("open"!==this.readyState)throw new Error("Transport not open");this.write(t)},n.prototype.onOpen=function(){this.readyState="open",this.writable=!0,this.emit("open")},n.prototype.onData=function(t){var e=o.decodePacket(t,this.socket.binaryType);this.onPacket(e)},n.prototype.onPacket=function(t){this.emit("packet",t)},n.prototype.onClose=function(){this.readyState="closed",this.emit("close")}},function(t,e,r){(function(t){function n(t,r){var n="b"+e.packets[t.type]+t.data.data;return r(n)}function o(t,r,n){if(!r)return e.encodeBase64Packet(t,n);var o=t.data,i=new Uint8Array(o),s=new Uint8Array(1+o.byteLength);s[0]=v[t.type];for(var a=0;a<i.length;a++)s[a+1]=i[a];return n(s.buffer)}function i(t,r,n){if(!r)return e.encodeBase64Packet(t,n);var o=new FileReader;return o.onload=function(){t.data=o.result,e.encodePacket(t,r,!0,n)},o.readAsArrayBuffer(t.data)}function s(t,r,n){if(!r)return e.encodeBase64Packet(t,n);if(m)return i(t,r,n);var o=new Uint8Array(1);o[0]=v[t.type];var s=new k([o.buffer,t.data]);return n(s)}function a(t){try{t=d.decode(t)}catch(t){return!1}return t}function c(t,e,r){for(var n=new Array(t.length),o=l(t.length,r),i=function(t,r,o){e(r,function(e,r){n[t]=r,o(e,n)})},s=0;s<t.length;s++)i(s,t[s],o)}var u,h=r(28),p=r(29),f=r(30),l=r(31),d=r(32);t&&t.ArrayBuffer&&(u=r(33));var y="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),g="undefined"!=typeof navigator&&/PhantomJS/i.test(navigator.userAgent),m=y||g;e.protocol=3;var v=e.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6},b=h(v),w={type:"error",data:"parser error"},k=r(34);e.encodePacket=function(e,r,i,a){"function"==typeof r&&(a=r,r=!1),"function"==typeof i&&(a=i,i=null);var c=void 0===e.data?void 0:e.data.buffer||e.data;if(t.ArrayBuffer&&c instanceof ArrayBuffer)return o(e,r,a);if(k&&c instanceof t.Blob)return s(e,r,a);if(c&&c.base64)return n(e,a);var u=v[e.type];return void 0!==e.data&&(u+=i?d.encode(String(e.data)):String(e.data)),a(""+u)},e.encodeBase64Packet=function(r,n){var o="b"+e.packets[r.type];if(k&&r.data instanceof t.Blob){var i=new FileReader;return i.onload=function(){var t=i.result.split(",")[1];n(o+t)},i.readAsDataURL(r.data)}var s;try{s=String.fromCharCode.apply(null,new Uint8Array(r.data))}catch(t){for(var a=new Uint8Array(r.data),c=new Array(a.length),u=0;u<a.length;u++)c[u]=a[u];s=String.fromCharCode.apply(null,c)}return o+=t.btoa(s),n(o)},e.decodePacket=function(t,r,n){if(void 0===t)return w;if("string"==typeof t){if("b"==t.charAt(0))return e.decodeBase64Packet(t.substr(1),r);if(n&&(t=a(t),t===!1))return w;var o=t.charAt(0);return Number(o)==o&&b[o]?t.length>1?{type:b[o],data:t.substring(1)}:{type:b[o]}:w}var i=new Uint8Array(t),o=i[0],s=f(t,1);return k&&"blob"===r&&(s=new k([s])),{type:b[o],data:s}},e.decodeBase64Packet=function(t,e){var r=b[t.charAt(0)];if(!u)return{type:r,data:{base64:!0,data:t.substr(1)}};var n=u.decode(t.substr(1));return"blob"===e&&k&&(n=new k([n])),{type:r,data:n}},e.encodePayload=function(t,r,n){function o(t){return t.length+":"+t}function i(t,n){e.encodePacket(t,!!s&&r,!0,function(t){n(null,o(t))})}"function"==typeof r&&(n=r,r=null);var s=p(t);return r&&s?k&&!m?e.encodePayloadAsBlob(t,n):e.encodePayloadAsArrayBuffer(t,n):t.length?void c(t,i,function(t,e){return n(e.join(""))}):n("0:")},e.decodePayload=function(t,r,n){if("string"!=typeof t)return e.decodePayloadAsBinary(t,r,n);"function"==typeof r&&(n=r,r=null);var o;if(""==t)return n(w,0,1);for(var i,s,a="",c=0,u=t.length;c<u;c++){var h=t.charAt(c);if(":"!=h)a+=h;else{if(""==a||a!=(i=Number(a)))return n(w,0,1);if(s=t.substr(c+1,i),a!=s.length)return n(w,0,1);if(s.length){if(o=e.decodePacket(s,r,!0),w.type==o.type&&w.data==o.data)return n(w,0,1);var p=n(o,c+i,u);if(!1===p)return}c+=i,a=""}}return""!=a?n(w,0,1):void 0},e.encodePayloadAsArrayBuffer=function(t,r){function n(t,r){e.encodePacket(t,!0,!0,function(t){return r(null,t)})}return t.length?void c(t,n,function(t,e){var n=e.reduce(function(t,e){var r;return r="string"==typeof e?e.length:e.byteLength,t+r.toString().length+r+2},0),o=new Uint8Array(n),i=0;return e.forEach(function(t){var e="string"==typeof t,r=t;if(e){for(var n=new Uint8Array(t.length),s=0;s<t.length;s++)n[s]=t.charCodeAt(s);r=n.buffer}e?o[i++]=0:o[i++]=1;for(var a=r.byteLength.toString(),s=0;s<a.length;s++)o[i++]=parseInt(a[s]);o[i++]=255;for(var n=new Uint8Array(r),s=0;s<n.length;s++)o[i++]=n[s]}),r(o.buffer)}):r(new ArrayBuffer(0))},e.encodePayloadAsBlob=function(t,r){function n(t,r){e.encodePacket(t,!0,!0,function(t){var e=new Uint8Array(1);if(e[0]=1,"string"==typeof t){for(var n=new Uint8Array(t.length),o=0;o<t.length;o++)n[o]=t.charCodeAt(o);t=n.buffer,e[0]=0}for(var i=t instanceof ArrayBuffer?t.byteLength:t.size,s=i.toString(),a=new Uint8Array(s.length+1),o=0;o<s.length;o++)a[o]=parseInt(s[o]);if(a[s.length]=255,k){var c=new k([e.buffer,a.buffer,t]);r(null,c)}})}c(t,n,function(t,e){return r(new k(e))})},e.decodePayloadAsBinary=function(t,r,n){"function"==typeof r&&(n=r,r=null);for(var o=t,i=[],s=!1;o.byteLength>0;){for(var a=new Uint8Array(o),c=0===a[0],u="",h=1;255!=a[h];h++){if(u.length>310){s=!0;break}u+=a[h]}if(s)return n(w,0,1);o=f(o,2+u.length),u=parseInt(u);var p=f(o,0,u);if(c)try{p=String.fromCharCode.apply(null,new Uint8Array(p))}catch(t){var l=new Uint8Array(p);p="";for(var h=0;h<l.length;h++)p+=String.fromCharCode(l[h])}i.push(p),o=f(o,u)}var d=i.length;i.forEach(function(t,o){n(e.decodePacket(t,r,!0),o,d)})}}).call(e,function(){return this}())},function(t,e){t.exports=Object.keys||function(t){var e=[],r=Object.prototype.hasOwnProperty;for(var n in t)r.call(t,n)&&e.push(n);return e}},function(t,e,r){(function(e){function n(t){function r(t){if(!t)return!1;if(e.Buffer&&e.Buffer.isBuffer&&e.Buffer.isBuffer(t)||e.ArrayBuffer&&t instanceof ArrayBuffer||e.Blob&&t instanceof Blob||e.File&&t instanceof File)return!0;if(o(t)){for(var n=0;n<t.length;n++)if(r(t[n]))return!0}else if(t&&"object"==typeof t){t.toJSON&&"function"==typeof t.toJSON&&(t=t.toJSON());for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)&&r(t[i]))return!0}return!1}return r(t)}var o=r(15);t.exports=n}).call(e,function(){return this}())},function(t,e){t.exports=function(t,e,r){var n=t.byteLength;if(e=e||0,r=r||n,t.slice)return t.slice(e,r);if(e<0&&(e+=n),r<0&&(r+=n),r>n&&(r=n),e>=n||e>=r||0===n)return new ArrayBuffer(0);for(var o=new Uint8Array(t),i=new Uint8Array(r-e),s=e,a=0;s<r;s++,a++)i[a]=o[s];return i.buffer}},function(t,e){function r(t,e,r){function o(t,n){if(o.count<=0)throw new Error("after called too many times");--o.count,t?(i=!0,e(t),e=r):0!==o.count||i||e(null,n)}var i=!1;return r=r||n,o.count=t,0===t?e():o}function n(){}t.exports=r},function(t,e,r){var n;(function(t,o){!function(i){function s(t){for(var e,r,n=[],o=0,i=t.length;o<i;)e=t.charCodeAt(o++),e>=55296&&e<=56319&&o<i?(r=t.charCodeAt(o++),56320==(64512&r)?n.push(((1023&e)<<10)+(1023&r)+65536):(n.push(e),o--)):n.push(e);return n}function a(t){for(var e,r=t.length,n=-1,o="";++n<r;)e=t[n],e>65535&&(e-=65536,o+=b(e>>>10&1023|55296),e=56320|1023&e),o+=b(e);return o}function c(t,e){return b(t>>e&63|128)}function u(t){if(0==(4294967168&t))return b(t);var e="";return 0==(4294965248&t)?e=b(t>>6&31|192):0==(4294901760&t)?(e=b(t>>12&15|224),e+=c(t,6)):0==(4292870144&t)&&(e=b(t>>18&7|240),e+=c(t,12),e+=c(t,6)),e+=b(63&t|128)}function h(t){for(var e,r=s(t),n=r.length,o=-1,i="";++o<n;)e=r[o],i+=u(e);return i}function p(){if(v>=m)throw Error("Invalid byte index");var t=255&g[v];if(v++,128==(192&t))return 63&t;throw Error("Invalid continuation byte")}function f(){var t,e,r,n,o;if(v>m)throw Error("Invalid byte index");if(v==m)return!1;if(t=255&g[v],v++,0==(128&t))return t;if(192==(224&t)){var e=p();if(o=(31&t)<<6|e,o>=128)return o;throw Error("Invalid continuation byte")}if(224==(240&t)){if(e=p(),r=p(),o=(15&t)<<12|e<<6|r,o>=2048)return o;throw Error("Invalid continuation byte")}if(240==(248&t)&&(e=p(),r=p(),n=p(),o=(15&t)<<18|e<<12|r<<6|n,o>=65536&&o<=1114111))return o;throw Error("Invalid WTF-8 detected")}function l(t){g=s(t),m=g.length,v=0;for(var e,r=[];(e=f())!==!1;)r.push(e);return a(r)}var d="object"==typeof e&&e,y=("object"==typeof t&&t&&t.exports==d&&t,"object"==typeof o&&o);y.global!==y&&y.window!==y||(i=y);var g,m,v,b=String.fromCharCode,w={version:"1.0.0",encode:h,decode:l};n=function(){return w}.call(e,r,e,t),!(void 0!==n&&(t.exports=n))}(this)}).call(e,r(12)(t),function(){return this}())},function(t,e){!function(){"use strict";for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r=new Uint8Array(256),n=0;n<t.length;n++)r[t.charCodeAt(n)]=n;e.encode=function(e){var r,n=new Uint8Array(e),o=n.length,i="";for(r=0;r<o;r+=3)i+=t[n[r]>>2],i+=t[(3&n[r])<<4|n[r+1]>>4],i+=t[(15&n[r+1])<<2|n[r+2]>>6],i+=t[63&n[r+2]];return o%3===2?i=i.substring(0,i.length-1)+"=":o%3===1&&(i=i.substring(0,i.length-2)+"=="),i},e.decode=function(t){var e,n,o,i,s,a=.75*t.length,c=t.length,u=0;"="===t[t.length-1]&&(a--,"="===t[t.length-2]&&a--);var h=new ArrayBuffer(a),p=new Uint8Array(h);for(e=0;e<c;e+=4)n=r[t.charCodeAt(e)],o=r[t.charCodeAt(e+1)],i=r[t.charCodeAt(e+2)],s=r[t.charCodeAt(e+3)],p[u++]=n<<2|o>>4,p[u++]=(15&o)<<4|i>>2,p[u++]=(3&i)<<6|63&s;return h}}()},function(t,e){(function(e){function r(t){for(var e=0;e<t.length;e++){var r=t[e];if(r.buffer instanceof ArrayBuffer){var n=r.buffer;if(r.byteLength!==n.byteLength){var o=new Uint8Array(r.byteLength);o.set(new Uint8Array(n,r.byteOffset,r.byteLength)),n=o.buffer}t[e]=n}}}function n(t,e){e=e||{};var n=new i;r(t);for(var o=0;o<t.length;o++)n.append(t[o]);return e.type?n.getBlob(e.type):n.getBlob()}function o(t,e){return r(t),new Blob(t,e||{})}var i=e.BlobBuilder||e.WebKitBlobBuilder||e.MSBlobBuilder||e.MozBlobBuilder,s=function(){try{var t=new Blob(["hi"]);return 2===t.size}catch(t){return!1}}(),a=s&&function(){try{var t=new Blob([new Uint8Array([1,2])]);return 2===t.size}catch(t){return!1}}(),c=i&&i.prototype.append&&i.prototype.getBlob;t.exports=function(){return s?a?e.Blob:o:c?n:void 0}()}).call(e,function(){return this}())},function(t,e,r){function n(t){if(t)return o(t)}function o(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}t.exports=n,n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},n.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r=this._callbacks["$"+t];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var n,o=0;o<r.length;o++)if(n=r[o],n===e||n.fn===e){r.splice(o,1);break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),r=this._callbacks["$"+t];if(r){r=r.slice(0);for(var n=0,o=r.length;n<o;++n)r[n].apply(this,e)}return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e){e.encode=function(t){var e="";for(var r in t)t.hasOwnProperty(r)&&(e.length&&(e+="&"),e+=encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return e},e.decode=function(t){for(var e={},r=t.split("&"),n=0,o=r.length;n<o;n++){var i=r[n].split("=");e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return e}},function(t,e){t.exports=function(t,e){var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}},function(t,e){"use strict";function r(t){var e="";do e=s[t%a]+e,t=Math.floor(t/a);while(t>0);return e}function n(t){var e=0;for(h=0;h<t.length;h++)e=e*a+c[t.charAt(h)];return e}function o(){var t=r(+new Date);return t!==i?(u=0,i=t):t+"."+r(u++)}for(var i,s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),a=64,c={},u=0,h=0;h<a;h++)c[s[h]]=h;o.encode=r,o.decode=n,t.exports=o},function(t,e,r){(function(e){function n(){}function o(t){i.call(this,t),this.query=this.query||{},a||(e.___eio||(e.___eio=[]),a=e.___eio),this.index=a.length;var r=this;a.push(function(t){r.onData(t)}),this.query.j=this.index,e.document&&e.addEventListener&&e.addEventListener("beforeunload",function(){r.script&&(r.script.onerror=n)},!1)}var i=r(25),s=r(37);t.exports=o;var a,c=/\n/g,u=/\\n/g;s(o,i),o.prototype.supportsBinary=!1,o.prototype.doClose=function(){this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),this.form&&(this.form.parentNode.removeChild(this.form),this.form=null,this.iframe=null),i.prototype.doClose.call(this)},o.prototype.doPoll=function(){var t=this,e=document.createElement("script");this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),e.async=!0,e.src=this.uri(),e.onerror=function(e){t.onError("jsonp poll error",e)};var r=document.getElementsByTagName("script")[0];r?r.parentNode.insertBefore(e,r):(document.head||document.body).appendChild(e),this.script=e;var n="undefined"!=typeof navigator&&/gecko/i.test(navigator.userAgent);n&&setTimeout(function(){var t=document.createElement("iframe");document.body.appendChild(t),document.body.removeChild(t)},100)},o.prototype.doWrite=function(t,e){function r(){n(),e()}function n(){if(o.iframe)try{o.form.removeChild(o.iframe)}catch(t){o.onError("jsonp polling iframe removal error",t)}try{var t='<iframe src="javascript:0" name="'+o.iframeId+'">';i=document.createElement(t)}catch(t){i=document.createElement("iframe"),i.name=o.iframeId,i.src="javascript:0"}i.id=o.iframeId,o.form.appendChild(i),o.iframe=i}var o=this;if(!this.form){var i,s=document.createElement("form"),a=document.createElement("textarea"),h=this.iframeId="eio_iframe_"+this.index;s.className="socketio",s.style.position="absolute",s.style.top="-1000px",s.style.left="-1000px",s.target=h,s.method="POST",s.setAttribute("accept-charset","utf-8"),a.name="d",s.appendChild(a),document.body.appendChild(s),this.form=s,this.area=a}this.form.action=this.uri(),n(),t=t.replace(u,"\\\n"),this.area.value=t.replace(c,"\\n");try{this.form.submit()}catch(t){}this.iframe.attachEvent?this.iframe.onreadystatechange=function(){"complete"===o.iframe.readyState&&r();
}:this.iframe.onload=r}}).call(e,function(){return this}())},function(t,e,r){(function(e){function n(t){var e=t&&t.forceBase64;e&&(this.supportsBinary=!1),this.perMessageDeflate=t.perMessageDeflate,this.usingBrowserWebSocket=p&&!t.forceNode,this.usingBrowserWebSocket||(f=o),i.call(this,t)}var o,i=r(26),s=r(27),a=r(36),c=r(37),u=r(38),h=r(3)("engine.io-client:websocket"),p=e.WebSocket||e.MozWebSocket;if("undefined"==typeof window)try{o=r(41)}catch(t){}var f=p;f||"undefined"!=typeof window||(f=o),t.exports=n,c(n,i),n.prototype.name="websocket",n.prototype.supportsBinary=!0,n.prototype.doOpen=function(){if(this.check()){var t=this.uri(),e=void 0,r={agent:this.agent,perMessageDeflate:this.perMessageDeflate};r.pfx=this.pfx,r.key=this.key,r.passphrase=this.passphrase,r.cert=this.cert,r.ca=this.ca,r.ciphers=this.ciphers,r.rejectUnauthorized=this.rejectUnauthorized,this.extraHeaders&&(r.headers=this.extraHeaders),this.localAddress&&(r.localAddress=this.localAddress);try{this.ws=this.usingBrowserWebSocket?new f(t):new f(t,e,r)}catch(t){return this.emit("error",t)}void 0===this.ws.binaryType&&(this.supportsBinary=!1),this.ws.supports&&this.ws.supports.binary?(this.supportsBinary=!0,this.ws.binaryType="nodebuffer"):this.ws.binaryType="arraybuffer",this.addEventListeners()}},n.prototype.addEventListeners=function(){var t=this;this.ws.onopen=function(){t.onOpen()},this.ws.onclose=function(){t.onClose()},this.ws.onmessage=function(e){t.onData(e.data)},this.ws.onerror=function(e){t.onError("websocket error",e)}},n.prototype.write=function(t){function r(){n.emit("flush"),setTimeout(function(){n.writable=!0,n.emit("drain")},0)}var n=this;this.writable=!1;for(var o=t.length,i=0,a=o;i<a;i++)!function(t){s.encodePacket(t,n.supportsBinary,function(i){if(!n.usingBrowserWebSocket){var s={};if(t.options&&(s.compress=t.options.compress),n.perMessageDeflate){var a="string"==typeof i?e.Buffer.byteLength(i):i.length;a<n.perMessageDeflate.threshold&&(s.compress=!1)}}try{n.usingBrowserWebSocket?n.ws.send(i):n.ws.send(i,s)}catch(t){h("websocket closed before onclose event")}--o||r()})}(t[i])},n.prototype.onClose=function(){i.prototype.onClose.call(this)},n.prototype.doClose=function(){"undefined"!=typeof this.ws&&this.ws.close()},n.prototype.uri=function(){var t=this.query||{},e=this.secure?"wss":"ws",r="";this.port&&("wss"===e&&443!==Number(this.port)||"ws"===e&&80!==Number(this.port))&&(r=":"+this.port),this.timestampRequests&&(t[this.timestampParam]=u()),this.supportsBinary||(t.b64=1),t=a.encode(t),t.length&&(t="?"+t);var n=this.hostname.indexOf(":")!==-1;return e+"://"+(n?"["+this.hostname+"]":this.hostname)+r+this.path+t},n.prototype.check=function(){return!(!f||"__initialize"in f&&this.name===n.prototype.name)}}).call(e,function(){return this}())},function(t,e){},function(t,e){var r=[].indexOf;t.exports=function(t,e){if(r)return t.indexOf(e);for(var n=0;n<t.length;++n)if(t[n]===e)return n;return-1}},function(t,e){(function(e){var r=/^[\],:{}\s]*$/,n=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,o=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,i=/(?:^|:|,)(?:\s*\[)+/g,s=/^\s+/,a=/\s+$/;t.exports=function(t){return"string"==typeof t&&t?(t=t.replace(s,"").replace(a,""),e.JSON&&JSON.parse?JSON.parse(t):r.test(t.replace(n,"@").replace(o,"]").replace(i,""))?new Function("return "+t)():void 0):null}}).call(e,function(){return this}())},function(t,e,r){"use strict";function n(t,e,r){this.io=t,this.nsp=e,this.json=this,this.ids=0,this.acks={},this.receiveBuffer=[],this.sendBuffer=[],this.connected=!1,this.disconnected=!0,r&&r.query&&(this.query=r.query),this.io.autoConnect&&this.open()}var o=r(7),i=r(35),s=r(45),a=r(46),c=r(47),u=r(3)("socket.io-client:socket"),h=r(29);t.exports=e=n;var p={connect:1,connect_error:1,connect_timeout:1,connecting:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1,ping:1,pong:1},f=i.prototype.emit;i(n.prototype),n.prototype.subEvents=function(){if(!this.subs){var t=this.io;this.subs=[a(t,"open",c(this,"onopen")),a(t,"packet",c(this,"onpacket")),a(t,"close",c(this,"onclose"))]}},n.prototype.open=n.prototype.connect=function(){return this.connected?this:(this.subEvents(),this.io.open(),"open"===this.io.readyState&&this.onopen(),this.emit("connecting"),this)},n.prototype.send=function(){var t=s(arguments);return t.unshift("message"),this.emit.apply(this,t),this},n.prototype.emit=function(t){if(p.hasOwnProperty(t))return f.apply(this,arguments),this;var e=s(arguments),r=o.EVENT;h(e)&&(r=o.BINARY_EVENT);var n={type:r,data:e};return n.options={},n.options.compress=!this.flags||!1!==this.flags.compress,"function"==typeof e[e.length-1]&&(u("emitting packet with ack id %d",this.ids),this.acks[this.ids]=e.pop(),n.id=this.ids++),this.connected?this.packet(n):this.sendBuffer.push(n),delete this.flags,this},n.prototype.packet=function(t){t.nsp=this.nsp,this.io.packet(t)},n.prototype.onopen=function(){u("transport is open - connecting"),"/"!==this.nsp&&(this.query?this.packet({type:o.CONNECT,query:this.query}):this.packet({type:o.CONNECT}))},n.prototype.onclose=function(t){u("close (%s)",t),this.connected=!1,this.disconnected=!0,delete this.id,this.emit("disconnect",t)},n.prototype.onpacket=function(t){if(t.nsp===this.nsp)switch(t.type){case o.CONNECT:this.onconnect();break;case o.EVENT:this.onevent(t);break;case o.BINARY_EVENT:this.onevent(t);break;case o.ACK:this.onack(t);break;case o.BINARY_ACK:this.onack(t);break;case o.DISCONNECT:this.ondisconnect();break;case o.ERROR:this.emit("error",t.data)}},n.prototype.onevent=function(t){var e=t.data||[];u("emitting event %j",e),null!=t.id&&(u("attaching ack callback to event"),e.push(this.ack(t.id))),this.connected?f.apply(this,e):this.receiveBuffer.push(e)},n.prototype.ack=function(t){var e=this,r=!1;return function(){if(!r){r=!0;var n=s(arguments);u("sending ack %j",n);var i=h(n)?o.BINARY_ACK:o.ACK;e.packet({type:i,id:t,data:n})}}},n.prototype.onack=function(t){var e=this.acks[t.id];"function"==typeof e?(u("calling ack %s with %j",t.id,t.data),e.apply(this,t.data),delete this.acks[t.id]):u("bad ack %s",t.id)},n.prototype.onconnect=function(){this.connected=!0,this.disconnected=!1,this.emit("connect"),this.emitBuffered()},n.prototype.emitBuffered=function(){var t;for(t=0;t<this.receiveBuffer.length;t++)f.apply(this,this.receiveBuffer[t]);for(this.receiveBuffer=[],t=0;t<this.sendBuffer.length;t++)this.packet(this.sendBuffer[t]);this.sendBuffer=[]},n.prototype.ondisconnect=function(){u("server disconnect (%s)",this.nsp),this.destroy(),this.onclose("io server disconnect")},n.prototype.destroy=function(){if(this.subs){for(var t=0;t<this.subs.length;t++)this.subs[t].destroy();this.subs=null}this.io.destroy(this)},n.prototype.close=n.prototype.disconnect=function(){return this.connected&&(u("performing disconnect (%s)",this.nsp),this.packet({type:o.DISCONNECT})),this.destroy(),this.connected&&this.onclose("io client disconnect"),this},n.prototype.compress=function(t){return this.flags=this.flags||{},this.flags.compress=t,this}},function(t,e){function r(t,e){var r=[];e=e||0;for(var n=e||0;n<t.length;n++)r[n-e]=t[n];return r}t.exports=r},function(t,e){"use strict";function r(t,e,r){return t.on(e,r),{destroy:function(){t.removeListener(e,r)}}}t.exports=r},function(t,e){var r=[].slice;t.exports=function(t,e){if("string"==typeof e&&(e=t[e]),"function"!=typeof e)throw new Error("bind() requires a function");var n=r.call(arguments,2);return function(){return e.apply(t,n.concat(r.call(arguments)))}}},function(t,e){function r(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}t.exports=r,r.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),r=Math.floor(e*this.jitter*t);t=0==(1&Math.floor(10*e))?t-r:t+r}return 0|Math.min(t,this.max)},r.prototype.reset=function(){this.attempts=0},r.prototype.setMin=function(t){this.ms=t},r.prototype.setMax=function(t){this.max=t},r.prototype.setJitter=function(t){this.jitter=t}}])});
/*
    底部静音相关

    $obj.init.apply($obj,[opt]);

    opt = {
        button_mute_selector: 静音按钮选择器，默认 ".footer_button .mute"
    }

    that = {
        button_mute: 静音按钮对象
    }

*/

define('modules/footer_button_mute',[],function() {
    var footer_button_mute = {

        // 初始化
        init: function(opt) {
            var that = this;

            that.opt = that.deal_opt.apply(that, [opt]);

            that.button_mute = $(that.opt.button_mute_selector);

            if (that.button_mute.length > 0) {
                that.judge.apply(that);
                that.Listener.apply(that);
            }
        },

        // 处理opt并返回
        deal_opt: function(opt) {
            var that = this;

            var opt_default = {
                button_mute_selector: ".footer_button .mute"
            };

            return $.extend(opt_default, opt);
        },

        // 判断localStorage中存储的静音状态，并修改底部按钮样式
        judge: function() {
            var that = this;

            localStorage.chat_service_gj_mute = localStorage.chat_service_gj_mute || "yes";

            if (localStorage.chat_service_gj_mute == "no") {
                that.button_mute.addClass("cancel");
            } else {
                that.button_mute.removeClass("cancel");
            }
        },

        // 事件监听
        Listener: function() {
            var that = this;

            that.button_mute.unbind().on("touchstart mousedown", function(e) {
                e.preventDefault();

                $(this).toggleClass("cancel");

                if (localStorage.chat_service_gj_mute == "yes")
                    localStorage.chat_service_gj_mute = "no";
                else
                    localStorage.chat_service_gj_mute = "yes";
            });
        }
    };

    return footer_button_mute;
});
/*
    移动端会话列表页 js

    高京
    2017-10-09

    that = {
        sortHtml: 分类的视图,
        layershow: 弹层实例化对象,
        socket: socket连接对象
    }
*/

define('app/chat_list',[
    "lib/functions",
    "lib/LayerShow",
    "lib/jroll",
    "lib/socket.io.min",
    "modules/footer_button_mute"
], function(
    $func,
    $LayerShow,
    $jroll,
    $io,
    $footer_button_mute
) {
    var chat_list = {
        loadingToast: $(".loadingToast"),
        init: function() {

            var that = this;

            // 判断是否为iphoneX+微信浏览器，调整底部按钮高度
            that.judge_iphoneX.apply(that);

            // 进入页面时，如没有会话记录 则直接弹层选分类；否则 连接socket
            that.judge_LayerShow_auto.apply(that);

            // 咨询其他服务按钮的监听
            that.add_button_Listener.apply(that);

            // 返回按钮的监听
            that.return_button_Listener.apply(that);

            // 静音按钮的监听
            that.mute_button_Listener.apply(that);
        },

        // 判断是否为iphoneX+微信浏览器，调整底部按钮高度
        judge_iphoneX: function() {
            if ($func.judge_iphoneX() && $func.judge_MicroMessenger()) {
                var footer_button = $(".footer_button");

                footer_button.css({
                    "bottom": $func.iphoneX_bottom_space_px + "px"
                });

                $(document.createElement("div"))
                    .css({
                        "position": "fixed",
                        "height": footer_button.css("bottom"),
                        "width": "100vw",
                        "left": "0",
                        "bottom": "0",
                        "background": "#f5f5f5"
                    })
                    .appendTo($("body"));
            }
        },

        // 进入页面时，如没有会话记录 则直接弹层选分类；否则 连接socket
        judge_LayerShow_auto: function() {
            var that = this;

            if ($(".comm_chat_list_template li:not(.template)").length === 0) {
                that.add_button_Handler.apply(that);
            } else {
                that.socket_connect.apply(that);
            }
        },

        // 连接socket
        socket_connect: function() {
            var that = this;
            that.socket = $io.connect(Base_meta.GLOBAL_SOCKET_URL);

            // 监听socket连接成功
            that.socket_connect_success.apply(that);
        },

        // 接收socket连接成功推送
        socket_connect_success: function() {
            var that = this;
            that.socket.on("connect_success", function() {

                // 遍历会话列表，获取sid
                var sid = "";
                var chat_line_obj = $(".comm_chat_list_template li.chat_line:not(.template)");
                chat_line_obj.forEach(function(li) {
                    if (sid !== "")
                        sid += "|";
                    sid += $(li).attr("sid");
                });

                // 加入room
                var changeData = {
                    kind: 1, // 记录此socket来源 1-客户端 2-客服端
                    cid: Base_meta.cid, // 客户id，0为全部
                    sid: sid // 客服id，多个|分隔
                };
                that.send_join_room.apply(that, [changeData]);

                // 接收socket推送消息
                that.socket_send_message.apply(that);
            });
        },

        // 加入room
        /*
            
            @changeData : {
                kind: // 记录此socket来源 1-客户端 2-客服端,
                cid: // 客户id，0为全部
                sid: // 客服id，多个逗号分隔
            }
        */
        send_join_room: function(changeData) {
            var that = this;
            that.socket.emit("join_room", changeData);
        },

        // 接收socket推送消息
        socket_send_message: function() {
            var that = this;

            var audio_newMessage = document.getElementById("newMessage"),
                button_mute = $(".footer_button .mute");

            that.socket.on("send_message", function(kind, msg, cid, sid, rdate_locale, rdate) {

                // 播放声音
                if (button_mute.hasClass("cancel")) {
                    // alert(audio_newMessage.readyState);
                    audio_newMessage.muted = false;
                    audio_newMessage.play();
                }

                var chat_line = $(".chat_line.sid_" + sid);

                chat_line.find(".last_time").text($func.dateFormat_wx(rdate));
                chat_line.find(".last_content").html(msg);
                chat_line.addClass("new");

                // 不在顶部，则移动至顶部
                if (chat_line.parent().find("li").index(chat_line) !== 0)
                    chat_line.prependTo(".comm_chat_list_template");


            });
        },

        // 咨询其他服务按钮的监听
        add_button_Listener: function() {
            var that = this;

            $(".footer_button input.weui-btn_primary").unbind().on("click", function() {
                that.add_button_Handler.apply(that);
            });
        },

        // 返回按钮的监听
        return_button_Listener: function() {
            $(".footer_button .back").unbind("click").on("click", function() {
                switch (location.host) {
                    case "chat.zhongqifu.com.cn":
                        location.href = "http://wx.zhongqifu.com.cn";
                        break;
                    case "chat.taohuantang.com.cn":
                        if (Base_meta.from.toString() == "1")
                            location.href = "http://wechat.taohuantang.com.cn";
                        else
                            returnToApp();
                        break;
                    default:
                        alert("本地无处可跳");
                };
            });
        },

        // 静音按钮的监听
        mute_button_Listener: function() {

            $footer_button_mute.init.apply($footer_button_mute);
        },

        // 咨询其他服务按钮的点击处理
        add_button_Handler: function() {
            var that = this;

            that.loadingToast.css("display", "block");

            // 获得分类视图 并 弹层显示
            that.getSortHtml.apply(that, [function() {
                that.LayerShow.apply(that);
            }]);
        },

        // 获得分类视图
        getSortHtml: function(callback) {
            var that = this;

            if (that.sortHtml) {
                if (callback) {
                    callback();
                }
            } else {
                $.ajax({
                    url: "/chat/getSort",
                    type: "post",
                    data: {
                        from: Base_meta.from || "1" // 淘换堂
                    },
                    success: function(result) {
                        that.sortHtml = result;
                        if (callback)
                            callback();
                    }
                });
            }
        },

        // 弹层
        LayerShow: function() {
            var that = this;

            if (!that.layershow)
                that.layershow = new $LayerShow();

            var opt = {
                // z_index: 弹层的z-index。图片/图文内容层为z_index+1。默认400
                // bg_color: 背景层16进制颜色。默认#000000
                // bg_opacity: 背景层透明度，0～1。默认0.8
                showKind: 2,
                // Pics: showKind=1时有效。图片路径列表，数组。如 ["/images/001.jpg","/images/002.png"]。无默认值
                // Pics_show_index: 默认显示图片的序号，值大于等于图片数组的length时无效。默认0
                // Pics_scroll_speed: showKind=1时有效。图片切换时的速度。毫秒。默认500。移动端建议设置为100-200，过慢会有卡顿的现象
                // Pics_arrow_left: showKind=1时有效。图片切换 左箭头图片路径。默认/inc/LayerShow_arrow_left.png。
                // Pics_arrow_right: showKind=1时有效。图片切换 右箭头图片路径。默认/inc/LayerShow_arrow_left.png。
                // callback_image_click: showKind=1时有效。图片点击回调：1-关闭弹层 | 2-下一张图片 | function(li_obj)-自定义方法。默认"1"
                info_content: that.sortHtml,
                // info_box_width_per: showKind=2时有效，内容盒宽度百分比。默认80
                // info_box_height_per: showKind=2时有效，内容盒高度百分比。默认90
                // info_box_radius: showKind=2时有效，内容盒是否圆角。默认true
                // info_box_bg: showKind=2时有效，内容盒背景。默认"#ffffff"
                // info_box_padding_px: showKind=2时有效，内容盒padding。默认20
                // info_box_fontSize: showKind=2时有效，内容盒字体大小。默认"14px"
                // info_box_fontColor: showKind=2时有效，内容盒字体颜色。默认"#333"
                // info_box_lineHeight: showKind=2时有效，内容盒行间距。默认"30px"
                // info_box_use_JRoll: showKind = 2 时有效， 内容盒使用JRoll滚动（ 建议移动端使用， web端不用。 IE7、 8 不兼容） 如使用， 则需要依赖或引用jroll.js。 默认true
                JRoll_obj: $jroll,
                // info_bottom_fixed_content: showKind = 2 时有效， 底部固定层内容。 无默认。
                // info_bottom_fixed_height: showKind = 2 && info_bottom_fixed_content != "" 时有效， 高度， 单位px。 默认40
                // Pics_close_show: true / false。 显示关闭按钮。 默认true
                // Pics_close_path: 关闭按钮图片路径。 默认 / inc / LayerShow_close.png。
                // callback_before: 弹层前回调。 如显示loading层。 无默认
                callback_success: function(_jroll) {

                    that.loadingToast.css("display", "none");

                    // 监听分类sort_b，过滤已选分类
                    that.LayerShow_filterSelected.apply(that, [$(_jroll.wrapper).find(".sort_b")]);

                }
                // callback_close(info_wrapper_html): 关闭弹层后的回调。 info_wrapper_html为$("#info_wrapper").html()。 无默认
            };
            that.layershow.show(opt);
        },

        // 弹层 - 过滤已选分类
        // @sort_obj: sort_b对象数组
        LayerShow_filterSelected: function(sort_obj) {

            // 监听
            sort_obj.unbind().on("click", function(e) {

                location.href = "/chat?cid=" + Base_meta.cid + "&bid=-1&sort=" + $(this).attr("scid") + "&from=" + Base_meta.from.toString();

                $(this).addClass("isChecked").unbind();
            });

            // 拼接已选分类
            var sort = "";
            $(".comm_chat_list_template .chat_line").forEach(function(obj) {
                sort += $(obj).attr("sort");
            });

            // 遍历sort_b对象数组，比较是否已选
            sort_obj.forEach(function(s) {
                var _obj = $(s);
                if (sort.indexOf("<" + _obj.attr("scid") + ">") > -1) {
                    _obj.addClass("isChecked").unbind();
                }
            });
        }
    };

    return chat_list;

});
// 2.3.1
function RotatingBanner() {
    return {
        Timeout_id: null, // 记录定时器ID，清除时用
        Rotating: false, // 记录当前是否在轮播
        pointer_count: null, // 屏数量
        pointer_now: 0, // 当前高亮圆点
        box_width_px: null, // 外盒宽度，后续程序中获得
        li_width_px: null, // li宽度（含margin），后续程序中获得
        autoPlay: null, // 最原始传参的autoPlay（移动端touchend重启轮播用）
        // 参数集
        paras: {
            effect: null, // 过渡效果。move-横向移动；fade-淡出。默认 "move"
            mobile_effect: null, // 移动端效果：touchstart暂停、touchend重启并判断touchmove-x距离决定是否左右滑屏1次。effect=move时有效。默认false
            mobile_effect_touchmove_distance_vw: null, // 采用移动端效果时，监听触摸滑屏的起效距离，单位vw，默认30
            autoPlay: null, // 自动播放：left/right/null，默认值：null。effect=move时，left和right效果一致
            box_selector: null, // 外盒选择器，默认值：section.banner
            pic_ul_selector: null, // 图片li的ul盒选择器，此盒必须存在于box_selector中，且值中不用包含box_selector。默认值：ul.pic_ul
            pic_li_selector: null, // 图片li的选择器，此盒必须存在于pic_ul_selector中，且值中不用包含pic_ul_selector。解决li中含有子li的问题。默认值: li
            point_ul_selector: null, // 圆点li的ul盒选择器，空字符串为无圆点。此盒不必存在于box_selector中。默认值：section.banner ul.point_ul。
            point_autoCreate: null, // 自动生成圆点，默认值：false
            point_li_selected_className: null, // 圆点高亮li的className，默认值：selected
            arrow_left_selector: null, // 左箭头的盒选择器，此盒不必存在于box_selector中。null为无左箭头。默认值：null
            arrow_right_selector: null, // 右箭头的盒选择器，此盒不必存在于box_selector中。null为无右箭头。默认值：null
            duration: null, // 动画过渡时间，毫秒。默认500
            resize_li: null, // 自动改变li的宽高为外盒的宽高，默认true
            distance: null, // 自动轮播和圆点点击时，滚动距离：distance个li；不为1时，只支持单行多列平铺的li。默认为1。
            delay: null // 动画间隔，毫秒。默认5000
        },
        init: function(_paras) {

            var paras_default = {
                effect: "move",
                mobile_effect: false,
                mobile_effect_touchmove_distance_vw: 30,
                autoPlay: null,
                box_selector: "section.banner",
                pic_ul_selector: "ul.pic_ul",
                pic_li_selector: "li",
                point_ul_selector: "section.banner ul.point_ul",
                point_autoCreate: false,
                point_li_selected_className: "selected",
                arrow_left_selector: null,
                arrow_right_selector: null,
                duration: 500,
                resize_li: true,
                distance: 1,
                delay: 5000
            };
            this.paras = $.extend(paras_default, _paras);
            _paras = this.paras;
            this.autoPlay = _paras.autoPlay;

            if (_paras.effect == "fade")
                console.dir(_paras);

            if (this.paras.effect == "fade") {
                this.paras.mobile_effect = false;
                this.paras.distance = 1;
            }

            // 屏数量
            var pointer_count = $(_paras.box_selector + " " + _paras.pic_ul_selector + " " + _paras.pic_li_selector).length;
            this.pointer_count = parseInt(pointer_count / _paras.distance);
            if (pointer_count % _paras.distance !== 0)
                this.pointer_count++;

            // 创建圆点
            if (_paras.point_autoCreate) {
                var pointer_ul = $(_paras.point_ul_selector);
                var pointer_li = $(document.createElement("li"));
                var _i = 0;
                pointer_ul.html("");
                for (; _i < this.pointer_count; _i++) {
                    pointer_li.clone().appendTo(pointer_ul);
                }
            }

            // 监听重置窗口大小
            this.resize();

            if (this.pic_length > 1) {
                // 监听圆点
                if (_paras.point_ul_selector !== "")
                    this.PointListener();

                // 监听左箭头
                if (_paras.arrow_left_selector)
                    this.arrowLeftListener();

                // 监听右箭头
                if (_paras.arrow_right_selector)
                    this.arrowRightListener();

                // 轮播
                if (_paras.autoPlay)
                    this.preRotating(_paras.autoPlay.toLowerCase());

                // 移动端效果
                if (_paras.mobile_effect)
                    this.MobileEffectListen();
            }
        },

        // 监听重置窗口大小
        resize: function() {
            var n = 0; // 解决某些浏览器resize执行两遍的bug
            var this_obj = this;
            var _paras = this_obj.paras;
            var box_obj = $(_paras.box_selector); // 盒对象
            var pic_ul_obj = $(box_obj.find(_paras.pic_ul_selector)); // 图片ul对象
            var pic_li_obj = $(box_obj.find(_paras.pic_ul_selector + " " + _paras.pic_li_selector)); // 图片li对象

            this_obj.pic_length = pic_li_obj.length;

            $(window).resize(function() {
                if (++n % 2 === 0)
                    return;
                resize_do();
            });

            var resize_do = function() {

                var box_width_px = _paras.box_width_px = $.outerWidth ? box_obj.outerWidth() : box_obj.width();
                var box_height_px = _paras.box_height_px = $.outerHeight ? box_obj.outerHeight() : box_obj.height();

                setTimeout(function() {
                    if (_paras.resize_li) {


                        if (this_obj.pic_length < 1) // 没有li则不往下执行
                            return;
                        pic_li_obj.css("width", box_width_px + "px");
                        pic_li_obj.css("height", box_height_px + "px");
                    }

                    if (pic_li_obj.length === 0)
                        this_obj.li_width_px = 0;
                    else {
                        var _li_obj = $($(_paras.box_selector + " " + _paras.pic_ul_selector + " " + _paras.pic_li_selector)[0]);
                        this_obj.li_width_px = parseFloat(_li_obj.css("width").replace("px", "")) + parseFloat(_li_obj.css("margin-left").replace("px", "")) + parseFloat(_li_obj.css("margin-right").replace("px", ""));
                    }

                    var ul_width_px = this_obj.li_width_px;

                    if (_paras.effect == "move")
                        ul_width_px *= pic_li_obj.length;

                    pic_ul_obj.css("width", ul_width_px + "px");

                    n = 0;

                }, 0);

            };

            resize_do(this_obj);
        },

        // 轮播准备
        // direct：left/right
        preRotating: function(direct) {
            var this_obj = this;
            clearTimeout(this_obj.Timeout_id);

            // 渐进淡出
            if (this_obj.paras.effect == "fade") {
                this_obj.Timeout_id = setTimeout(function() {
                    if (this_obj.paras.autoPlay)
                        this_obj.fadeToNext();
                }, this_obj.paras.delay);
                return;
            }

            // 左右滑屏
            var switch_left_default = function() {
                this_obj.Timeout_id = setTimeout(function() {
                    if (this_obj.paras.autoPlay) {
                        this_obj.scrollToLeft();
                    }
                }, this_obj.paras.delay);
            };
            switch (direct.toLowerCase()) {
                case "left":
                    switch_left_default();
                    break;
                default:
                    switch_left_default();
                    break;
                case "right":
                    this_obj.Timeout_id = setTimeout(function() {
                        if (this_obj.paras.autoPlay)
                            this_obj.scrollToRight();
                    }, this_obj.paras.delay);
                    break;
            }
        },

        // 渐进淡出 X张
        fadeToNext: function(X) {
            var this_obj = this;
            if (this_obj.Rotating)
                return;
            this_obj.Rotating = true;
            var _paras = this_obj.paras;

            if (!X)
                X = this_obj.paras.distance;

            var ul_obj = $(_paras.box_selector + " " + _paras.pic_ul_selector);
            var li_obj = ul_obj.find(_paras.pic_li_selector);
            var li_length = li_obj.length;
            var li_obj_last = li_obj.last();

            if (X >= li_length)
                X = li_length - 1;

            if (X === 1) {
                li_obj = li_obj_last;
            } else {
                li_obj = ul_obj.find(_paras.pic_li_selector + ":gt(" + (li_length - X - 1) + ")");

                var i = 0;
                li_length = li_obj.length;

                for (; i < li_length - 1; i++)
                    $(li_obj[i]).css({
                        display: "none"
                    });
            }

            // console.log(li_obj.length);

            // 切换
            this_obj.setFadeTo.apply(this_obj, [li_obj, this_obj.paras.duration, function(_this_obj, _li_obj) {

                _li_obj.prependTo(ul_obj).css({
                    "opacity": "1",
                    "display": "block"
                });


                // 切换圆点
                _this_obj.pointer_now += X;
                if (_this_obj.pointer_now >= _this_obj.pointer_count) {
                    _this_obj.pointer_now -= _this_obj.pointer_count;
                }
                _this_obj.changePoint();

                _this_obj.Rotating = false;

                // 再次执行滚动（如autoPlay不为null）
                if (_this_obj.paras.autoPlay)
                    _this_obj.preRotating(_this_obj.paras.autoPlay.toLowerCase());

            }]);
        },

        // 向左滚X屏和Y个圆点位
        scrollToLeft: function(X, Y) {
            var this_obj = this;
            if (this_obj.Rotating)
                return;
            this_obj.Rotating = true;
            var _paras = this_obj.paras;

            if (!X)
                X = _paras.distance;
            if (!Y)
                Y = 1;

            var ul_obj = $(_paras.box_selector + " " + _paras.pic_ul_selector);

            // 计算滚动后的left值
            var ul_left_px_new = -X * this_obj.li_width_px;

            // 执行滚动
            this_obj.setTranslate.apply(this_obj, [ul_obj, _paras.duration, ul_left_px_new, function(_this_obj, ul_obj) {

                var li_obj = ul_obj.find(_paras.pic_li_selector);
                var i = 0;
                for (; i < X; i++) {
                    $(li_obj[i]).appendTo(ul_obj);
                }
                _this_obj.setTranslate.apply(_this_obj, [ul_obj, 0, 0]);

                // 切换pointer_now和pointer_now
                _this_obj.pointer_now += Y;
                if (_this_obj.pointer_now >= _this_obj.pointer_count) {
                    _this_obj.pointer_now = 0;
                }

                // 切换圆点
                _this_obj.changePoint();

                _this_obj.Rotating = false;

                // 再次执行滚动（如autoPlay不为null）
                if (_this_obj.paras.autoPlay)
                    _this_obj.preRotating(_this_obj.paras.autoPlay.toLowerCase());


            }]);
        },

        // 向右滚X屏和Y个圆点位
        scrollToRight: function(X, Y) {
            var this_obj = this;
            if (this_obj.Rotating)
                return;
            this_obj.Rotating = true;
            var _paras = this_obj.paras;

            if (!X)
                X = _paras.distance;
            if (!Y)
                Y = 1;

            var ul_obj = $(_paras.box_selector + " " + _paras.pic_ul_selector);

            var li_obj = $(ul_obj.find(_paras.pic_li_selector));
            var li_obj_len = li_obj.length;

            var i = 0;
            for (; i < X; i++)
                $(li_obj[li_obj_len - (i + 1)]).prependTo(ul_obj);

            this_obj.setTranslate.apply(this_obj, [ul_obj, 0, -X * this_obj.li_width_px]);

            setTimeout(function() {
                this_obj.setTranslate.apply(this_obj, [ul_obj, _paras.duration, 0, function(_this_obj) {

                    // 切换pointer_now
                    _this_obj.pointer_now -= Y;
                    if (_this_obj.pointer_now < 0) {
                        _this_obj.pointer_now = _this_obj.pointer_count - 1;
                    }

                    // 切换圆点
                    _this_obj.changePoint();

                    _this_obj.Rotating = false;

                    // 再次执行滚动（如autoPlay不为null）
                    if (_this_obj.paras.autoPlay)
                        _this_obj.preRotating(_this_obj.paras.autoPlay.toLowerCase());
                }]);
            }, 0);
        },

        // 切换圆点高亮
        changePoint: function() {
            var this_obj = this;
            var _paras = this_obj.paras;
            var obj = $(_paras.point_ul_selector + " li");
            obj.siblings("." + _paras.point_li_selected_className).removeClass(_paras.point_li_selected_className);
            $(obj[this_obj.pointer_now]).addClass(_paras.point_li_selected_className);
        },

        // 监听圆点
        PointListener: function() {
            var this_obj = this;
            var _paras = this_obj.paras;
            var obj = $(_paras.point_ul_selector + " li");
            $(obj[0]).addClass(_paras.point_li_selected_className);
            obj.on("touchstart mousedown", function(event) {
                event.preventDefault();
                var n = $(this).index();
                if (n == this_obj.pointer_now)
                    return;

                // clearTimeout();

                if (_paras.effect == "move") {
                    if (n < this_obj.pointer_now)
                        this_obj.scrollToRight((this_obj.pointer_now - n) * _paras.distance, this_obj.pointer_now - n);
                    if (n > this_obj.pointer_now)
                        this_obj.scrollToLeft((n - this_obj.pointer_now) * _paras.distance, n - this_obj.pointer_now);
                } else if (_paras.effect == "fade") {
                    var X = n - this_obj.pointer_now;
                    if (X < 0)
                        X += obj.length;
                    this_obj.fadeToNext(X);
                }
            });
        },

        // 监听左箭头
        arrowLeftListener: function() {
            var this_obj = this;
            var _paras = this_obj.paras;
            $(_paras.arrow_left_selector).on("touchstart mousedown", function(event) {
                event.preventDefault();
                this_obj.scrollToRight();
            });
        },

        // 监听右箭头
        arrowRightListener: function() {
            var this_obj = this;
            var _paras = this_obj.paras;
            $(_paras.arrow_right_selector).on("touchstart mousedown", function(event) {
                event.preventDefault();
                this_obj.scrollToLeft();
            });
        },

        // 暂停自动播放
        Pause: function() {
            this.paras.autoPlay = null;
        },

        // 重启自动播放
        reStart: function(direction) {
            if (!this.paras.autoPlay) {
                this.paras.autoPlay = direction || "left";
                this.preRotating(this.paras.autoPlay);
            }
        },

        // 移动端效果监听
        MobileEffectListen: function() {
            var this_obj = this;
            var _paras = this_obj.paras;
            var pic_ul_obj = $(_paras.box_selector + " " + _paras.pic_ul_selector);
            var touchstart_x;
            var touchend_x;
            var window_width_px = $(window).width();

            // touchstart
            pic_ul_obj.on("touchstart", function(event) {
                touchstart_x = event.touches[0].clientX;
                touchend_x = null;
                this_obj.Pause();
            });

            // touchmove
            pic_ul_obj.on("touchmove", function(event) {
                touchend_x = event.touches[0].clientX;
            });

            // touchend
            pic_ul_obj.on("touchend", function() {
                if(!touchend_x)
                    return;

                var distance_vw = (touchend_x - touchstart_x) / window_width_px * 100;
                var duration = 0;

                // 验证横向位移是否超过阈值
                if (distance_vw >= _paras.mobile_effect_touchmove_distance_vw || distance_vw <= -_paras.mobile_effect_touchmove_distance_vw) {

                    duration = _paras.duration;

                    if (distance_vw < 0)
                        this_obj.scrollToLeft();
                    else {
                        this_obj.scrollToRight();
                    }
                }

                if (this_obj.autoPlay)
                    setTimeout(function() {
                        this_obj.reStart(this_obj.autoPlay);
                    }, duration);

            });
        },

        // 设置translate-x样式
        // obj: 设置对象
        // duration: 动画时间，毫秒数
        // x: translate-x值
        // callback: 完成回调
        setTranslate: function(obj, duration, x, callback) {
            var this_obj = this;

            // 判断
            var transition = obj[0].style.transition;
            if (transition === undefined || transition === null) {

                obj.animate({
                    left: x + "px"
                }, duration, function() {
                    if (callback)
                        callback(this_obj, obj);
                });

            } else {

                obj.css({
                    "transition": "all " + duration * 0.001 + "s linear",
                    "transform": "translateX(" + x + "px)",
                    "-webkit-transform": "translateX(" + x + "px)",
                    "-moz-transform": "translateX(" + x + "px)",
                    "-o-transform": "translateX(" + x + "px)",
                    "-ms-transform": "translateX(" + x + "px)"
                });

                if (callback) {
                    setTimeout(function() {
                        callback(this_obj, obj);
                    }, duration);
                }
            }
        },

        // 设置透明度样式
        // obj: 设置对象
        // duration: 动画时间，毫秒数
        // callback: 完成回调
        setFadeTo: function(obj, duration, callback) {

            var this_obj = this;

            // 判断
            var transition = obj[0].style.transition;

            if (transition === undefined || transition === null) {
                obj.last().fadeOut(duration, function() {
                    if (callback) {
                        callback(this_obj, obj);
                    }
                });
            } else {

                // obj.one("transitionend", function() {
                //     // obj.css("transition", "none");
                //     console.log("here");
                //     if (callback)
                //         callback(this_obj, obj);
                // });


                obj.css({
                    "transition": "opacity " + duration * 0.001 + "s linear",
                    "opacity": 0
                });

                if (callback) {
                    setTimeout(function() {

                        if (callback)
                            callback(this_obj, obj);
                    }, duration);
                }
            }
        }
    };
}

if (typeof define === "function" && define.amd) {
    define('lib/RotatingBanner',[],function() {
        return RotatingBanner;
    });
};
/*
    表情面板相关js
    执行$obj.init(opt)启动
    @opt: {
        device: "mobile" | "pc",
        box_selector: 外盒选择器，默认值：.emotion_box,
        pic_ul_selector: 图片li的ul盒选择器，此盒必须存在于box_selector中，且值中不用包含box_selector。默认值：.emotion_panel,
        point_ul_selector: 圆点li的ul盒选择器，空字符串为无圆点。此盒不必存在于box_selector中。默认值：.emotion_box .point_li
    }

    that = {
        opt: 参数
    }
*/

define('modules/emotion',["lib/RotatingBanner"], function($rb) {
    var emotion = {
        init: function(opt) {
            var that = this;

            // 处理opt
            that.opt_deal.apply(that, [opt]);

            // 设置pic_ul_selector的宽度
            that.set_picUlSelector_width.apply(that);

            // 监听左右划屏轮播
            that.Rotating_Listener.apply(that);
        },

        // 处理opt
        opt_deal: function(opt) {

            var that = this;

            var opt_default = {
                mobile_effect: true,
                box_selector: ".emotion_box",
                pic_ul_selector: ".emotion_panel",
                point_ul_selector: ".emotion_box .point_ul",
                pic_li_selector: "li.screen_li",
                point_autoCreate: true,
                duration: 200,
                resize_li: false,
                mobile_effect_touchmove_distance_vw: 10
            };

            that.opt = $.extend(opt_default, opt);
        },

        // 设置pic_ul_selector的宽度
        set_picUlSelector_width: function() {
            var that = this;

            var panel = $(that.opt.pic_ul_selector),
                ul = panel.find("ul"),
                window_width_px = $(window).width();

            panel.css({
                width: ul.length * window_width_px + "px"
            });
        },

        // 监听左右划屏轮播
        Rotating_Listener: function() {

            var that = this;

            var RotatingBanner_1 = new $rb();
            RotatingBanner_1.init(that.opt);
        },

        // 更换表情，返回msg
        emotion_filter: function(msg) {

            // 正则条件对象
            var regExp = new RegExp(/((?:\[)*)(\[.+?\])/g);

            var name_index;

            msg = msg.replace(regExp, function(m, $1, $2) {

                name_index = comm_emotion.emotion_name_list.indexOf($2);

                if (name_index == -1)
                    return m;
                else
                    return $1 + "<span class=\"emotion\" style=\"background-image:url('/inc/emotion/Expression_" + name_index + ".png');\"></span>";
            });

            /*
            while (true) {
                result = regExp.exec(msg);

                // console.log("\n\n", "socketio", 257, "result:", result, "\n regExp_ext_str:" + regExp_ext_str);

                if (!result)
                    break;


                name_index = comm_emotion.emotion_name_list.indexOf(result[1]);

                console.log(name_index);

                // console.log("\n\n", "socketio", 265, "name_index:", name_index);
                if (name_index == -1) {
                    // regExp_ext_str += "\\" + result[2].replace("]", "\\]") + ".*?";
                    // regExp = new RegExp("(" + regExp_ext_str + ")" + regExp_base_str);
                } else {
                    msg = msg.replace(regExp, replace_callback);
                    console.log(msg);
                    break;
                }
            }
*/
            return msg;
        },

        // 备份
        emotion_filter_1: function(msg) {

            // 基础正则
            var regExp_base_str = "(\\[.+?\\])";

            // 扩展正则，出现在基础正则前面
            var regExp_ext_str = "";

            // 正则条件对象
            var regExp = new RegExp("()" + regExp_base_str);

            var result,
                name_index;
            var replace_callback = function(m, $1) {
                return (function() {
                    return $1 + "<span class=\"emotion\" style=\"background-image:url('/inc/emotion/Expression_" + name_index + ".png');\"></span>";
                })();
            };
            while (true) {
                result = regExp.exec(msg);


                // console.log("\n\n", "socketio", 257, "result:", result, "\n regExp_ext_str:" + regExp_ext_str);

                if (!result)
                    break;


                name_index = comm_emotion.emotion_name_list.indexOf(result[2]);

                // console.log("\n\n", "socketio", 265, "name_index:", name_index);
                if (name_index == -1) {
                    regExp_ext_str += "\\" + result[2].replace("]", "\\]") + ".*?";
                    regExp = new RegExp("(" + regExp_ext_str + ")" + regExp_base_str);
                } else {
                    msg = msg.replace(regExp, replace_callback);
                }
            }

            return msg;
        }
    };

    return emotion;
});
/*
    Chat 配套js文件
    高京
    2017-05-16

    this= {
        socket,
        loadingToast,
        iosDialog2,
        lastTime, // 最后一条消息的时间的毫秒数(long)
        title_height_px // 微信标题栏高度
    }
*/

define('app/chat',[
    "lib/socket.io.min",
    "lib/functions",
    "modules/footer_button_mute",
    "modules/emotion"
], function(
    $io,
    $func,
    $footer_button_mute,
    $emotion
) {
    var chat = {
        RECORD_COUNT: 10, // 一次读取的记录条数
        init: function() {
            var that = this;

            $footer_button_mute.init.apply($footer_button_mute);

            that.loadingToast = $(".loadingToast");
            that.iosDialog2 = $("#iosDialog2");
            that.title_height_px = window.screen.height - window.innerHeight;

            // that.send_message.apply(that, [1, "window_screen_height:" + window.screen.height]);
            // that.send_message.apply(that, [1, "window_innerHeight:" + window.innerHeight]);

            // 处理服务器端渲染err，无错误再进行其他事件的监听和socket连接
            that.deal_err.apply(that);
        },

        // 判断是否需要显示“查看更多历史消息”
        jduge_show_more_records: function() {
            var that = this;

            var message_li_count = $(".message:not(.template)").length;
            if (message_li_count >= that.RECORD_COUNT) {
                $(".more_record:not(.show)").addClass("show");
                that.show_more_records_Listener.apply(that);
            }
        },

        // 获取更多历史消息的点击监听
        show_more_records_Listener: function() {
            var that = this;

            $(".more_record.show").unbind().on("touchstart mousedown", function(e) {
                e.preventDefault();

                // console.log("here");

                $.ajax({
                    url: "/getMoreRecords",
                    type: "post",
                    data: {
                        cid: Base_meta.cid.toString(),
                        sid: Base_meta.sid,
                        start_count: $(".list .message:not(.template)").length
                    },
                    beforeSend: function() {
                        that.loadingToast.find(".weui-toast__content").text("请稍候");
                        that.loadingToast.css("display", "block");
                    },
                    success: function(result) {
                        that.loadingToast.css("display", "none");

                        var more_record = $("ul.list .more_record");

                        var c = 0;
                        if (result.forEach) {
                            result.forEach(function(r) {

                                c++;

                                var kind;
                                switch (r.sender) {
                                    case "c":
                                        kind = 2;
                                        break;
                                    case "s":
                                        kind = 3;
                                        break;
                                    default:
                                        c--;
                                        kind = 1;
                                        break;
                                }
                                that.send_message(kind, r.content, r.cid, r.sid, true);
                            });

                        }

                        if (c < that.RECORD_COUNT)
                            more_record.removeClass("show");
                        else
                            more_record.prependTo("ul.list");
                    }
                });

            });
        },

        // 默认滚动到最底
        rollToBottom: function() {
            // var that = this;

            // 在/lib/mobile_stop_moved中，setTimeOut 修改.stoped_wrapper的高，所以此处要延时处理
            setTimeout(function() {

                var stoped_wrapper = $(".stoped_wrapper");
                // console.log(stoped_wrapper.length);
                var stoped_wrapper_scrollheight_px = stoped_wrapper[0].scrollHeight;
                var stoped_wrapper_height_px = stoped_wrapper.height();

                stoped_wrapper.scrollTop(stoped_wrapper_scrollheight_px - stoped_wrapper_height_px);
            }, 500);
        },

        // 设置底部input盒高度
        set_messageContent_height: function() {

            var that = this,
                footer_button = $(".footer_button"),
                submit_height_px = parseFloat(footer_button.find(".weui-btn_primary").css("line-height").replace("px", ""));

            $func.judge_iphoneX_MicroMessenger_changeStyle({
                bottom_fixed_selector: ".footer_button", // 底部fixed盒的选择器，此盒将被修改bottom，无默认值
                document_fixed_space_selector: "", // 文档流内的占位盒选择器，此盒将被增加高度，无默认值
                fixed_space_div_bgColor: $("body").css("background"), // 底部新建占位遮罩盒的背景色，默认"#fff"，建议和页面背景色一致，以免穿帮
                callback: function(fixed_space_div) { // 回调(新建的底部占位遮罩层||undefined)，无论是否为iphoneX+微信浏览器都会执行

                    // fixed_space_div && fixed_space_div.css({
                    //     "background": "#000"
                    // });
                    that.wrapper_fixed_space_reset_height.apply(that);
                }
            });

            footer_button.find(".message_content_box,.message_content_div,.message_content_input").css({
                "height": submit_height_px + "px",
                "line-height": submit_height_px + "px"
            });
            footer_button.find(".message_content_box").css("display", "block");
        },

        // 监听底部input盒
        messageContentBox_Listener: function() {

            var message_content_box = $(".message_content_box"),
                message_div = message_content_box.find(".message_content_div"),
                message_input = message_content_box.find(".message_content_input");

            message_content_box.unbind().on("click", function() {
                message_div.css("display", "none");
                message_input.css("display", "block");
            });
        },

        // 监听底部input值改变
        messageContentInput_change_Listener: function() {

            var message_content_box = $(".message_content_box"),
                message_div = message_content_box.find(".message_content_div"),
                message_input = message_content_box.find(".message_content_input");

            message_input.unbind("change").on("change", function() {
                message_div.text(message_input.val());
            });
        },

        // 处理服务器端渲染err，无err则执行socket_connect⬇
        deal_err: function() {
            var that = this;

            // 无客服可提供服务
            if (Base_meta.err == "noServicers") {
                that.show_error_dialog("Sorry~暂时没有顾问可提供服务", function() {
                    location.href = "/?cid=" + Base_meta.cid + "&from=" + Base_meta.from;
                });
            } else if (Base_meta.err == "sidError") { // 基本不会了。
                that.show_error_dialog("此会话已结束", function() {
                    location.href = "/?cid=" + Base_meta.cid + "&from=" + Base_meta.from;
                });
            } else {

                // that.send_message.apply(that, [1, window.innerHeight + ":" + document.body.scrollHeight + ":" + document.body.scrollTop]);

                // 设置底部input高度
                that.set_messageContent_height.apply(that);

                // 监听底部input盒
                that.messageContentBox_Listener.apply(that);

                // 监听底部input值改变
                that.messageContentInput_change_Listener.apply(that);

                // 判断是否需要显示“查看更多历史消息”
                that.jduge_show_more_records.apply(that);

                // 解决ios端fixed居底input被键盘遮挡的问题
                $func.fix_fixed_bottom_input({
                    dom_selector: ".footer_button input[type=text]",
                    callback: function() {
                        that.wrapper_fixed_space_reset_height.apply(that);
                    }
                });

                // 默认滚动到最底
                that.rollToBottom.apply(that);

                // 监听表单提交
                that.form_send_submit_Listener.apply(that);

                // 连接socket
                that.socket_connect.apply(that);

                // 监听socket连接成功
                that.socket_connect_success.apply(that);

                // 接收socket推送消息
                that.socket_send_message.apply(that);

                // 监听返回按钮
                that.back_button_Listener.apply(that);

                // 监听表情和键盘按钮
                that.emotion_button_Listener.apply(that);

                // 监听表情面板
                $emotion.init.apply($emotion, [{
                    device: "mobile"
                    // box_selector: 外盒选择器， 默认值：.emotion_box,
                    // pic_ul_selector: 图片li的ul盒选择器， 此盒必须存在于box_selector中， 且值中不用包含box_selector。 默认值： ul,
                    // point_ul_selector: 圆点li的ul盒选择器， 空字符串为无圆点。 此盒不必存在于box_selector中。 默认值：.emotion_box.point_li
                }]);
            }
        },

        // 连接socket
        socket_connect: function() {
            var that = this;

            // 客户
            if (Base_meta.kind == "1")
                that.send_message.apply(that, [1, Base_meta.welcome_message]);
            // that.send_message.apply(that, [1, "您好!欢迎来到中企服！很高兴为您服务!<br />我们的专业顾问服务5*8小时在线，期待与您的沟通。"]);


            // that.socket = $io.connect("http://117.79.92.82:4545");
            that.socket = $io.connect(Base_meta.GLOBAL_SOCKET_URL);
        },

        // 接收socket连接成功推送
        socket_connect_success: function() {
            var that = this;
            that.socket.on("connect_success", function() {

                // console.log("here");

                $(".footer_button").css("display", "block");

                // 加入room
                var changeData = {
                    kind: Base_meta.kind, // 记录此socket来源 1-客户端 2-客服端
                    cid: Base_meta.cid, // 客户id/token
                    sid: Base_meta.sid // 客服_id
                };
                that.send_join_room.apply(that, [changeData]);

                // 客户
                // if (Base_meta.kind == 1) {

                // 向客服推送某个客户的在线状态
                // var online = true; // 上线/下线
                // that.send_onlineStatus_toServicer.apply(that, [online, Base_meta.cid, Base_meta.sid]);
                // }

                // 客服
                // if (Base_meta.kind == 2)
                //     that.send_message.apply(that, [2, "您好，请问有什么可以帮您？"]);

            });
        },

        // 接收socket推送消息
        socket_send_message: function() {
            var that = this;

            that.socket.on("send_message", function(kind, msg, cid, sid, rdate) {

                // 更新未读消息状态
                that.update_noRead_record.apply(that, [cid, sid]);

                // 处理消息推送
                that.send_message.apply(that, [kind, msg, cid, sid, rdate]);
            });
        },

        // 更新客户端未读消息状态
        update_noRead_record: function(cid, sid) {

            $.ajax({
                url: "/update_noRead_record_client",
                type: "post",
                data: {
                    cid: cid,
                    sid: sid
                }
            });
        },

        // 处理消息推送（包括本页自己发送的消息 和 socketio推送的消息）
        // kind: 1-系统消息 2-我的消息 3-对方消息
        // prepend: true/else。true时消息加在前面，而且不向服务器推送。读历史消息时，可以为true。
        send_message: function(kind, msg, cid, sid, prepend) {
            var that = this;

            prepend = prepend || false;

            var date = new Date();

            // console.log(kind, msg, cid, sid, date.toLocaleString());

            // 声音提示
            if (kind == 3 && $(".footer_button .mute").hasClass("cancel") && prepend !== true) {
                var newMessage_audio = document.getElementById("newMessage");
                newMessage_audio.muted = false;
                newMessage_audio.play();
            }

            // 将消息发往服务器
            if (kind == 2 && prepend !== true) { // 客户发送的消息
                that.socket.emit("send_message", msg, "c", cid, sid, date);
            }

            var li;
            switch (kind) {
                case 1:
                    li = $("li.template.center").clone();
                    break;
                case 2:
                    li = $("li.template.right").clone();
                    break;
                case 3:
                    li = $("li.template.left").clone();
                    break;
            }

            // 如果上一条消息的时间不为空，并且不是系统消息，则需要判断时间间隔来决定是否推送一条时间消息
            if (kind != 1 && prepend !== true) {

                // 时间差大于1分钟
                if (!that.lastTime || date.getTime() - that.lastTime >= 60 * 1000) {
                    that.send_message.apply(that, [1, $func.dateFormat_wx(date)]);
                }
                // 更新最后消息时间
                that.lastTime = date.getTime();

            }

            // 如果非系统消息，做内容的表情过滤
            if (kind > 1) {
                msg = $emotion.emotion_filter(msg);
            }

            // 装载内容
            li.find("p").html("<span class=\"arrow\"></span>" + msg);

            // 装载昵称和头像
            if (kind == 2) {
                li.find("img").attr("src", Base_meta.client_headimg);
            } else if (kind == 3) {
                li.find(".name").text(Base_meta.sname);
                li.find("img").attr("src", Base_meta.servicer_headimg);
            }

            // 装载li
            li.removeClass("template");
            if (prepend === true)
                li.prependTo("ul.list");
            else
                li.appendTo("ul.list");

            // 消息窗口向上／向下滚动
            var stoped_wrapper = $(".stoped_wrapper");
            if (prepend === true) {
                stoped_wrapper.scrollTop(0);
            } else {
                var ul = li.parents(".list");
                var ul_padding_bottom_px = (ul.css("padding-bottom") || "").replace("px", "");
                var ul_height_px = parseFloat(ul.height()) + parseFloat(ul_padding_bottom_px) + parseFloat($(".fixed_space").height());
                var stoped_wrapper_height_px = stoped_wrapper.height();
                // console.log(ul_height_px, stoped_wrapper_height_px);
                if (ul_height_px > stoped_wrapper_height_px) {
                    stoped_wrapper.scrollTop(ul_height_px - stoped_wrapper_height_px);
                }
            }
        },

        // 加入room
        /*
            
            @changeData : {
                kind: // 记录此socket来源 1-客户端 2-客服端,
                cid: // 客户id，0为全部
                sid: // 客服id，多个逗号分隔
            }
        */
        send_join_room: function(changeData) {
            var that = this;
            // console.log(changeData);
            that.socket.emit("join_room", changeData);
        },

        // 向客服推送某个客户的在线状态
        // online:true/false
        send_onlineStatus_toServicer: function(online, cid, sid) {
            var that = this;

            that.socket.emit("onlineStatus_change", online, cid, sid);
        },

        // 显示错误信息弹层
        show_error_dialog: function(msg, callback) {
            var that = this;

            that.iosDialog2.find(".weui-dialog__bd").text(msg);
            that.iosDialog2.find(".weui-dialog__btn_primary").unbind().on("touchstart mousedown", function(e) {
                e.preventDefault();

                if (callback)
                    callback();

                that.iosDialog2.css("display", "none");
            });
            that.iosDialog2.css("display", "block");
        },

        // 监听表单提交
        form_send_submit_Listener: function() {
            var that = this;
            var form = $(".footer_button form");
            var input_div = form.find(".message_content_div");
            var input = form.find(".message_content_input");

            form.unbind().on("submit", function(e) {
                e.preventDefault();

                $("input").blur();

                var text = input.val();
                if (text === "") {
                    that.show_error_dialog("请键入内容");
                } else {
                    that.send_message.apply(that, [2, $func.convers(text), Base_meta.cid, Base_meta.sid]);
                    input.val("");
                    input_div.text("");
                }
            });
        },

        // 监听返回按钮
        back_button_Listener: function() {
            $(".footer_button .back").unbind().on("click", function() {

                // from 淘换堂专用
                location.href = "/?cid=" + Base_meta.cid.toString() + "&from=" + Base_meta.from.toString();
            });
        },

        // 重置wrapper_fixed_space高度
        wrapper_fixed_space_reset_height: function() {

            var that = this;
            var footer_button = $(".footer_button");

            var footer_button_height_px = parseFloat(footer_button.css("height").replace("px", "")) + parseFloat(footer_button.css("bottom").replace("px", "")),
                fixed_space = $(".fixed_space");

            fixed_space.css("height", footer_button_height_px + "px");

            that.rollToBottom.apply(that);
        },

        // 监听表情和键盘按钮
        emotion_button_Listener: function() {
            var that = this;
            var footer_button = $(".footer_button");

            var footer_input_box = footer_button.find(".message_content_box");
            var footer_input_div = footer_button.find(".message_content_div");
            var footer_input = footer_button.find(".message_content_input");

            // that.send_message(1, "438:innerHeight:" + window.innerHeight);
            // setInterval(function() {
            //     that.send_message(1, "440:innerHeight:" + window.innerHeight);
            // }, 1000);

            // 收起表情面板，让input显示并获得焦点
            var setInputEnableFocus = function() {

                $(".footer_button").removeClass("showEmotion");
                // footer_input.removeAttr("disabled");
                footer_input_div.css("display", "none");
                footer_input.css("display", "block").focus();
                // $func.fix_fixed_bottom_input({
                //     dom_selector: ".footer_button input[type=text]",
                //     autocheck: true,
                //     callback: function() {
                //         that.wrapper_fixed_space_reset_height.apply(that);
                //     }
                // });
            };

            footer_button.find(".emotion").unbind().on("click", function() {

                if (footer_button.hasClass("showEmotion")) {
                    setInputEnableFocus();
                } else {

                    // 展开footer_button
                    $(".footer_button").addClass("showEmotion");

                    // 切换footer_input的显示
                    footer_input.css("display", "none");
                    footer_input_div.css("display", "block");

                    // 监听input_box的点击
                    footer_input_box.unbind().on("click", function() {
                        setInputEnableFocus();
                    });

                    // 在滑动footer_button时，禁止滑动stoped_wrapper
                    $(window).on("touchmove", function(e) {
                        var touch_footer = $(e.target).parents(".footer_button").length > 0;
                        if (touch_footer) {
                            e.preventDefault();
                            e.stopPropagation();
                        }
                    });

                    // 监听表情点击
                    that.emotion_Listener.apply(that);
                }

            });

            footer_button.unbind().on("webkitTransitionEnd transitionEnd", function(e) {

                e.preventDefault();

                // 重置wrapper_fixed_space高度
                that.wrapper_fixed_space_reset_height.apply(that);

            });
        },

        // 监听表情点击
        emotion_Listener: function() {

            var footer_button = $(".footer_button"),
                emotion_button = footer_button.find(".screen_li li:not(.space)"),
                input = footer_button.find(".message_content_input"),
                input_div = footer_button.find(".message_content_div");

            emotion_button.unbind().on("click", function() {
                var _this = $(this);

                var text_value = input.val();

                if (_this.hasClass("del")) {
                    if (text_value.length === 0)
                        return;

                    var regRex = new RegExp(/^.*(\[.+?\])$/ig);

                    var result = regRex.exec(text_value);

                    var exec_del_charactor = function() {
                        text_value = text_value.substring(0, text_value.length - 1);
                    };

                    if (result) {
                        if (comm_emotion.emotion_name_list &&
                            comm_emotion.emotion_name_list.length &&
                            comm_emotion.emotion_name_list.indexOf(result[1]) > -1) {
                            text_value = text_value.substring(0, text_value.length - result[1].length);
                        } else {
                            exec_del_charactor();
                        }
                    } else {
                        exec_del_charactor();
                    }

                    input.val(text_value);
                    input_div.text(text_value);

                } else {
                    input.val(text_value + _this.attr("name"));
                    input_div.text(input.val());
                }
            });
        }
    };

    return chat;
});
/*
	待接入列表页配套js
	高京
	2017-05-18

    this= {
        socket,
        loadingToast,
        iosDialog2
    }
*/

var GLOBAL_SOCKET_URL = "http://localhost:4545";

define('app/chat_tobeConnect',["lib/socket.io.min"], function($io) {

    var chat_tobeConnect = {
        init: function() {
            var that = this;

            that.loadingToast = $(".loadingToast");
            that.iosDialog2 = $("#iosDialog2");

            // 操作按钮点击监听
            that.line_button_Lisenter.apply(that);

            // 连接socket
            that.socket_connect.apply(that);
        },

        // 连接socket
        socket_connect: function() {
            var that = this;
            that.socket = $io.connect(GLOBAL_SOCKET_URL);
        },

        // 操作按钮点击监听
        line_button_Lisenter: function() {
            var that = this;

            $("span.buttons").unbind().on("click", function(e) {
                var _obj = $(e.target);
                switch (_obj.attr("class")) {
                    case "connectIn": // 接入
                        that.button_connectIn_click.apply(that, [_obj]);
                        break;
                    case "reIn": // 进入
                        that.button_reIn_click.apply(that, [_obj]);
                        break;
                    case "sendToOther": // 转接
                        that.button_sendToOther_click.apply(that, [_obj]);
                        break;
                }
            });
        },

        // 接入按钮点击执行
        button_connectIn_click: function(button) {
            var cid = button.parents("li.line").attr("cid");
            location.href = "./?kind=2&cid=" + cid + "&sid=" + Base_meta.servicer_id;
        },

        // 重进按钮点击执行
        button_reIn_click: function(button) {
            var cid = button.parents("li.line").attr("cid");
            location.href = "./?kind=2&cid=" + cid + "&sid=" + Base_meta.servicer_id;
        },

        // 转接按钮点击执行
        button_sendToOther_click: function(button) {
            var that = this;
            that.iosDialog2.find(".weui-dialog__bd").text("功能建设中");
            that.iosDialog2.find(".weui-dialog__btn_primary").unbind().on("mousedown touchstart", function(e) {
                e.preventDefault();
                that.iosDialog2.css("display", "none");
            });
            that.iosDialog2.css("display", "block");
        }

    };

    return chat_tobeConnect;
});

define('app/mobile/app',["../../lib/zepto.min", "../../modules/mobile_end_init"], function() {

    var page_name = document.getElementById("script_page").getAttribute("page");
    switch (page_name) {

        case "chat_list": // 移动端会话列表页
            require(["app/chat_list"], function($obj) {
                $obj.init();
            });
            break;

        case "chat": // 移动端会话页
            require(["app/chat"], function($obj) {
                $obj.init();
            });
            break;

        case "chat_tobeConnect": // 移动端会话列表页————不用了
            require(["app/chat_tobeConnect"], function($obj) {
                $obj.init();
            });
            break;
    }
});
requirejs.config({
    // baseUrl: '/widget',
    // paths: {
    //     "jweixin": "http://res.wx.qq.com/open/js/jweixin-1.2.0.js"
    // }
    // shim: {
    //     "jweixin": {
    //         exports: "jweixin"
    //     }
    // }
});

require(["app/mobile/app", "http://res.wx.qq.com/open/js/jweixin-1.0.0.js"]);
define("app/mobile/main", function(){});

