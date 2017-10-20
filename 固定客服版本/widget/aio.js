/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;
}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",j.childNodes[0].style.borderCollapse="separate",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ra(a),g=l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Sa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Oa.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+eb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{
marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){if(!n.contains(a.ownerDocument||d,a))return!0;while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({
padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});

define("lib/jquery.min", function(){});

/*
	白梦超
	20160718
	滑动图片验证码
	版本 v3.2.0
*/

//参数设置方法
/*
var t_opt = {
    pic_position: ".pic_code",//图片验证码外包层class或id
    pic_original_width: , //图片原始宽(以px为单位,后台传过来的值)，
    pic_original_height: , //图片原始高(以px为单位,后台传过来的值)，
    pic_small_width: , //水印小图的宽（以px为单位,后台传过来的值）
    pic_small_height: , //水印小图的宽（以px为单位,后台传过来的值）
    div_width: 300,//显示图片的宽，默认300px
    div_height: ,//显示图片的高，通过计算得来的（初始的默认值是显示图片的宽的一半）
    valid_range: 5, // 图片验证正确的容错范围，默认是5,单位是px，不受unit影响
    unit: "px", // 宽高及容错范围单位 "px|vw", 默认px，且IE6/7/8强制使用px
    pic_mask: true,  //验证码大遮罩层，false-不显示遮罩层，true-显示遮罩层，默认true
    Pic_mask_color: "#000", //验证码大遮罩层颜色，默认黑色
    Pic_mask_opacity: 0.8, ////验证码大遮罩层透明度，默认0.8
    Pic_click_key: true, //开关，点击遮罩层验证码是否隐藏，true-隐藏，false-不隐藏，默认true
    Is_Cross_domain: false,//是否跨域 true-跨域（后端需配置跨域允许当前来源），false-不跨域，默认false
    Url_getPic: '/Pic_code/Pic_code.ashx', //获取图片地址的接口，跨域请填写带域名的地址，默认/Pic_code/Pic_code.ashx
    url_submit: '/Pic_code/Pic_code_valid.ashx', //验证码，验证完成提交的地址，跨域请填写带域名的地址，默认/Pic_code/Pic_code_valid.ashx
    z_index: 800, //设置标签z_index，默认800
    Callback_error: function () { // 验证失败回调，默认为滑块和拼图小块滑回原位pic_code.doMove(oDiv2);
        //pic_code.doMove();
    },
    Callback_error_repeatedly: function () { // 多次验证失败回调，刷新验证码重新验证，优先于Callback_error  默认事件pic_code.change_background_url();
        //pic_code.change_background_url();
    },
    Callback_error_repeatedly_count: 3, // 触发多次验证失败回调的失败次数
    Callback_success: function () { //验证成功回调，提示验证成功，默认方法：pic_code.valid_success_callback()  
        //pic_code.valid_success_callback();
    }
}
*/

var pic_code = {
    //获取dom元素
    dom_obj: {},
    //参数
    _opt: null,
    init: function (opt) {
        //设置默认参数
        var t_opt = {
            pic_position: ".pic_code",//图片验证码外包层class或id，默认.pic_code
            div_width: 300,//设置显示的大图的宽，默认300
            valid_range: 5, // 图片验证正确的容错范围，默认是5,单位是px，不受unit影响
            unit: "px", // 宽高及容错范围单位 "px|vw", 默认px，且IE6/7/8强制使用px
            pic_mask: true,  //验证码大遮罩层，false-不显示遮罩层，true-显示遮罩层，默认true
            Pic_mask_color: "#000", //验证码大遮罩层颜色，默认黑色
            Pic_mask_opacity: 0.8, ////验证码大遮罩层透明度，默认0.8
            Pic_click_key: true, //开关，点击遮罩层验证码是否隐藏，true-隐藏，false-不隐藏，默认true
            Is_Cross_domain: false,//是否跨域 true-跨域（后端需配置跨域允许当前来源），false-不跨域，默认false
            Url_getPic: '/Pic_code/Pic_code.ashx', //获取图片地址的接口，跨域请填写带域名的地址，默认'/Pic_code/Pic_code.ashx'
            url_submit: '/Pic_code/Pic_code_valid.ashx', //验证码，验证完成提交的地址，跨域请填写带域名的地址，默认'/Pic_code/Pic_code_valid.ashx'
            z_index: 800, //设置标签z_index，默认800
            position_default: true, //验证码是否居中显示，true-居中显示，false-自定义显示位置，默认true
            Callback_error: function () { // 验证失败回调，默认为滑块和拼图小块滑回原位pic_code.doMove();
                pic_code.doMove();
            },
            Callback_error_repeatedly: function () { // 多次验证失败回调，刷新验证码重新验证，优先于Callback_error  默认事件pic_code.change_background_url();
                pic_code.change_background_url();
            },
            Callback_error_repeatedly_count: 3, // 触发多次验证失败回调的失败次数，默认3
            Callback_success: function () { //验证成功回调，提示验证成功，默认方法：pic_code.valid_success_callback()  
                pic_code.valid_success_callback();
            }
        };

        //初始化数据
        pic_code._opt = $.extend(t_opt, opt);
        //单位换换
        if (pic_code._opt.unit == 'vw'){
            pic_code._opt.div_width = pic_code._opt.div_width/100*$(window).width();
            pic_code._opt.unit = 'px';
        }
        //设置验证码初始的默认高度
        pic_code._opt.div_height = pic_code._opt.div_width;

        //创建dom
        pic_code.create_dom();

        //设置外包层宽
        $(pic_code._opt.pic_position).css({'width':pic_code._opt.div_width + pic_code._opt.unit,'z-index': pic_code._opt.z_index});
        pic_code.dom_obj = {
            oPicCode: $(pic_code._opt.pic_position)    //验证码最外面一层
        };
        //设置验证码默认显示位置
        if (pic_code._opt.position_default){
            //设置验证码的位置
            pic_code.dom_obj.oPicCode.css({'position':'fixed','top':'50%','left':'50%'});                            
            pic_code.dom_obj.oPicCode.css({'margin-top':-(pic_code._opt.div_height+50)/2,'margin-left':-pic_code._opt.div_width/2});
        }
        

        //点击弹层验证码消失
        $('#pic_code_mask').click(function () {
            pic_code.pic_code_hide();
        });

        //ie6,7,8,不支持vw，强制使用px
        if (pic_code.params.agent) {
            pic_code._opt.unit = 'px';
        }
        //设置样式
        pic_code.set_style();
    },

    //显示验证码方法
    open : function(opt){
        //合并参数
        if (opt) {
            pic_code._opt = $.extend(pic_code._opt, opt);
        }
        pic_code.pic_code_show();
        pic_code.refresh_pic();
        //监听 刷新验证码按钮 点击事件
        pic_code.oRef_click();
    },

    params: {
        left_begin: 8,	//设置小块初始位置距左侧的距离
        agent: window.navigator.userAgent.indexOf('MSIE 6.0') != -1 || window.navigator.userAgent.indexOf('MSIE 7.0') != -1 || window.navigator.userAgent.indexOf('MSIE 8.0') != -1  //浏览器是ie6,7,8此值为true，否则为false
    },

    //记录验证错误次数
    pic_code_error_count: { error: 0 },

    //创建DOM
    create_dom: function () {
        var _this = this;
        var outDiv = $(_this._opt.pic_position);
        //创建验证码背景层
        _this.pic_code_bg = $(document.createElement('div')).css({
            "position": "fixed",
            "top": 0,
            "left": 0,
            "width": "100vw",
            "height": "100vh",
            "background": pic_code._opt.Pic_mask_color,
            "opacity": pic_code._opt.Pic_mask_opacity,
            "filter": "alpha(opacity=" + (pic_code._opt.Pic_mask_opacity * 100) + ")",
            "display": "none",
            "z-index": pic_code._opt.z_index
        }).attr('id', 'pic_code_mask');
        outDiv.before(_this.pic_code_bg);

        //创建验证码盒子
        _this.pic_box = $(document.createElement('div')).css({
            "width": _this._opt.div_width + _this._opt.unit,
            "height": _this._opt.div_height + _this._opt.unit,
            "overflow": "hidden",
            "position": "relative",
            "z-index": pic_code._opt.z_index
        }).addClass('pic_box').appendTo(outDiv);

        //创建大图外包
        _this.big_pic = $(document.createElement('div')).css({
            "width": _this._opt.div_width + _this._opt.unit,
            "position": "relative",
            "z-index": pic_code._opt.z_index
        }).addClass('pic_bao').appendTo(_this.pic_box);

        //创建大图div
        _this.big_pic_img = $(document.createElement('div')).css({
            "width": _this._opt.div_width + _this._opt.unit,
            "height": _this._opt.div_height + _this._opt.unit,
            "z-index": pic_code._opt.z_index
        }).addClass('pic').html('<img src="" />').appendTo(_this.big_pic);

        //创建刷新按钮
        _this.pic_code_fresh = $(document.createElement('div')).css({
            "width": "60px",
            "height": "20px",
            "background": "#ddd",
            "line-height": "20px",
            "font-size": "12px",
            "text-align": "center",
            "cursor": "pointer",
            "color": "#666",
            "border-radius": "10px",
            "float": "right",
            "position": "relative",
            "top":"-20px",
            "z-index": pic_code._opt.z_index
        }).addClass('refresh').html("点击刷新").appendTo(outDiv);

        //创建滑块与轨道外包层
        _this.pic_code_liBao = $(document.createElement('div')).css({
            "width": _this._opt.div_width + _this._opt.unit,
            "height": "30px",
            "position": "relative",
            "float": "left",
            "z-index": pic_code._opt.z_index
        }).addClass('line_bao').appendTo(outDiv);

        //创建滑块轨道
        _this.pic_code_line = $(document.createElement('div')).css({
            "width": _this._opt.div_width + _this._opt.unit,
            "height": "30px",
            "background": "#ece4dd",
            "border-radius": "10px",
            "font-size": "12px",
            "color": "#666",
            "line-height": "30px",
            "text-indent": "60px",
            "overflow": "hidden",
            "z-index": pic_code._opt.z_index
        }).addClass('line').appendTo(_this.pic_code_liBao);

        //创建圆滑块
        _this.pic_code_circle = $(document.createElement('div')).css({
            "width": "40px",
            "height": "40px",
            "background": "#ccc",
            "border-radius": "50%",
            "position": "relative",
            "top": "-35px",
            "left": "0px",
            "cursor": "pointer",
            "z-index": pic_code._opt.z_index
        }).addClass('circle').appendTo(_this.pic_code_liBao);

        //创建成功提示信息
        _this.pic_success = $(document.createElement('div')).css({
            "width": _this._opt.div_width + _this._opt.unit,
            "height": "30px",
            "background": "#0da726",
            "border-radius": "10px",
            "font-size": "14px",
            "color": "#fff",
            "line-height": "30px",
            "letter-spacing": "6px",
            "text-align": "center",
            "margin-top": "20px",
            "display": "none",
            "z-index": pic_code._opt.z_index
        }).addClass('success').html('验证成功').appendTo(outDiv);

        //创建验证失败盒子
        _this.pic_fail_box = $(document.createElement("div")).css({
            "width": _this._opt.div_width + _this._opt.unit,
            "height": "30px",
            "overflow": "hidden",
            "position": "relative",
            "z-index": pic_code._opt.z_index
        }).addClass('pic_fail_box').appendTo(_this.pic_box);

        //创建提示信息遮罩层
        _this.pic_success_mask = $(document.createElement('div')).css({
            "width": _this._opt.div_width + _this._opt.unit,
            "height": "30px",
            "background": "#fff",
            "opacity": "0.6",
            "filter": "alpha(opacity=60)",
            "position": "relative",
            "font-size": "60px",
            "line-height": "160px",
            "text-align": "center",
            "font-weight": "bold",
            "z-index": pic_code._opt.z_index
        }).addClass('pic_code_mask').appendTo(_this.pic_fail_box);

        //创建失败提示信息
        _this.pic_fail = $(document.createElement('div')).css({
            "width": _this._opt.div_width + _this._opt.unit,
            "height": "30px",
            "position": "absolute",
            "top": 0,
            "left": 0,
            "font-size": "14px",
            "line-height": "30px",
            "text-indent": "14px",
            "color": "#000",
            "font-weight": "normal",
            "text-align": "left",
            "z-index": pic_code._opt.z_index
        }).addClass('pic_code_content').html('<span style="color:#ff0000">验证失败</span> : 拖动滑块，完成正确拼图').appendTo(_this.pic_fail_box);

        //创建loading
        _this.loading = $(document.createElement('div')).css({
            "display":'block',
            "width": _this._opt.div_width + _this._opt.unit,
            "height": _this._opt.div_height + _this._opt.unit,
            "text-align":"center",
            "line-height": _this._opt.div_height + _this._opt.unit,
            "font-size": "16px",
            "color": "#fff",
            "position":"absolute",
            "top":"0",
            "left":"0",
            "background":"#000",
            "border":"2px solid #ccc",
            "z-index": (pic_code._opt.z_index+1)
            }).html('验证码生成中，请稍候').attr('id', 'loadingToast');
        _this.loading.appendTo(_this.pic_box);
    },

    //设置样式
    set_style: function () {
        var company = pic_code._opt.unit;
        pic_code.dom_obj.oPicCode.css('width', pic_code._opt.div_width + company);
        pic_code.big_pic.css('width', pic_code._opt.div_width + company);
        pic_code.pic_code_line.css('width', pic_code._opt.div_width + company);
        pic_code.pic_success.css('width', pic_code._opt.div_width + company);
        pic_code.big_pic_img.css({ 'width': pic_code._opt.div_width + company, 'height': pic_code._opt.div_height + company });
        pic_code.pic_success_mask.css({ 'width': pic_code._opt.div_width + company });
        //设置验证码盒子高度
        pic_code.pic_box.css('height',pic_code._opt.div_height);
        //设置大图div高
        pic_code.big_pic_img.css('height',pic_code._opt.div_height);
        //设置loaning高度
        pic_code.loading.css({'height':pic_code._opt.div_height,'line-height':pic_code._opt.div_height + pic_code._opt.unit});
    },

    // 换大图
    change_background_url: function () {
        //显示滑块
        pic_code.pic_code_circle.css({ 'left': '-5px','display':'block' });
        //显示刷新按钮
        pic_code.pic_code_fresh.css('visibility', 'visible');
        //取消滑块滑动事件
        pic_code.Cancle_oCircle_Click();
        clearTimeout(pic_code.timer);
        pic_code.pic_fail_box.animate({ 'top': '0px' }, 100);

        pic_code.pic_code_error_count.error = 0;
        pic_code.pic_code_circle.css('left', '-5px');
        pic_code.pic_code_line.css({"text-indent": "60px","text-align":"left"}).html('按住左边滑块，拖动完成上方拼图');
        pic_code.delateDiv();
        pic_code.loading.css('display', 'block');
        if (pic_code._opt.Is_Cross_domain) {
            $.ajax({
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                url: pic_code._opt.Url_getPic,
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                type: 'post',
                data: {

                },
                success: function (data) {

                    if (!data.error){
                        data = $.parseJSON(data);
                    }
                    if (data.error == 'success' || data.error == 'SUCCESS') {
                        //小图路径
                        pic_code._opt.img1 = data.img2;
                        //大图路径
                        pic_code._opt.img2 = data.img1;
                        pic_code.big_pic_img.find('img').attr('src', data.img2);
                        pic_code.big_pic_img.find('img').css('width', '100%');
                        //小图的宽
                        pic_code._opt.pic_small_width = data.water_width;
                        //小图的高
                        pic_code._opt.pic_small_height = data.water_height;
                        //原始图片的宽
                        pic_code._opt.pic_original_width = data.original_width;
                        //原始图片的高
                        pic_code._opt.pic_original_height = data.original_height;
                        //计算原图与显示图的比例
                        pic_code._opt.Proportion = pic_code._opt.pic_original_width/pic_code._opt.div_width;
                        //水印图片距顶部距离
                        pic_code._opt.Y = data.Y / pic_code._opt.Proportion;                        
                        //计算显示图片的高
                        pic_code._opt.div_height = pic_code._opt.pic_original_height/pic_code._opt.Proportion;
                        //设置验证码默认显示位置
                        if (pic_code._opt.position_default){
                            //设置验证码的位置
                            pic_code.dom_obj.oPicCode.css({'position':'fixed','top':'50%','left':'50%'});
                            pic_code.dom_obj.oPicCode.css({'margin-top':-(pic_code._opt.div_height+50)/2,'margin-left':-pic_code._opt.div_width/2});
                        }
                        
                        //设置样式
                        pic_code.set_style();
                        

                        var oImg_1 = new Image(); 
                        oImg_1.src=data.img2;

                        var oImg_2 = new Image(); 
                        oImg_2.src=data.img1;

                        var num = 0;
                        var complete = function(){
                            
                            pic_code.delateDiv();
                            pic_code.create_div();
                            pic_code.oCircle_Click();
                            pic_code.loading.css('display', 'none');
                            // 监听 刷新验证码按钮 点击事件
                            pic_code.oRef_click();
                        };
                        oImg_1.onload = function(){
                            num++;
                            if(num>=2){
                                complete();
                            }
                            
                        };
                        oImg_2.onload = function(){
                            num++;
                            if(num>=2){
                                complete();
                            }
                        };
                    }
                }
            });
        }
        else {
            $.ajax({
                url: pic_code._opt.Url_getPic,
                type: 'post',
                data: {

                },
                success: function (data) {
                    console.log(data);
                    if (!data.error){
                        data = $.parseJSON(data);
                    }
                    if (data.error == 'success' || data.error == 'SUCCESS') {
                        //小图路径
                        pic_code._opt.img1 = data.img2;
                        //大图路径
                        pic_code._opt.img2 = data.img1;
                        pic_code.big_pic_img.find('img').attr('src', data.img2);
                        pic_code.big_pic_img.find('img').css('width', '100%');
                        //小图的宽
                        pic_code._opt.pic_small_width = data.water_width;
                        //小图的高
                        pic_code._opt.pic_small_height = data.water_height;
                        //原始图片的宽
                        pic_code._opt.pic_original_width = data.original_width;
                        //原始图片的高
                        pic_code._opt.pic_original_height = data.original_height;
                        //计算原图与显示图的比例
                        pic_code._opt.Proportion = pic_code._opt.pic_original_width/pic_code._opt.div_width;
                        //水印图片距顶部距离
                        pic_code._opt.Y = data.Y / pic_code._opt.Proportion;                        
                        //计算显示图片的高
                        pic_code._opt.div_height = pic_code._opt.pic_original_height/pic_code._opt.Proportion;
                        //设置验证码默认显示位置
                        if (pic_code._opt.position_default){
                            //设置验证码的位置
                            pic_code.dom_obj.oPicCode.css({'position':'fixed','top':'50%','left':'50%'});                            
                            pic_code.dom_obj.oPicCode.css({'margin-top':-(pic_code._opt.div_height+50)/2,'margin-left':-pic_code._opt.div_width/2});
                        }
                        //设置样式
                        pic_code.set_style();

                        var oImg_1 = new Image(); 
                        oImg_1.src=data.img2;

                        var oImg_2 = new Image(); 
                        oImg_2.src=data.img1;

                        var num = 0;
                        var complete = function(){
                            
                            pic_code.delateDiv();
                            pic_code.create_div();
                            pic_code.oCircle_Click();
                            pic_code.loading.css('display', 'none');
                            // 监听 刷新验证码按钮 点击事件
                            pic_code.oRef_click();
                        };
                        oImg_1.onload = function(){
                            num++;
                            if(num>=2){
                                complete();
                            }
                            
                        };
                        oImg_2.onload = function(){
                            num++;
                            if(num>=2){
                                complete();
                            }
                        };
                        
                    }
                }
            });
        }

    },

    //验证失败小块滑回原位
    doMove: function () {
        //取消滑块滑动事件
        pic_code.Cancle_oCircle_Click();
        //隐藏刷新按钮
        pic_code.pic_code_fresh.css('visibility', 'hidden');
        if (pic_code.pic_code_error_count.error < pic_code._opt.Callback_error_repeatedly_count) {
            pic_code.pic_fail.html('<span style="color:#ff0000">验证失败</span> : 拖动滑块，完成正确拼图');
        } else {
            pic_code.pic_fail.html('<span style="color:#ff0000">验证次数过多</span> : 系统将自动刷新验证码');
        }
        pic_code.pic_fail_box.animate({ 'top': '-30px' }, 100);
        clearTimeout(pic_code.timer);
        pic_code.timer = setTimeout(function () {
            pic_code.pic_fail_box.animate({ 'top': '0px' }, 100);
            //显示刷新按钮
            pic_code.pic_code_fresh.css('visibility', 'visible');
        }, 1000);
        pic_code.pic_code_circle.css({ 'left': '-5px','display':'block' });
        //pic_code.pic_code_circle.animate({ 'left': '-5px' }, 300);
        $('.pic_code .pic_bao div').eq(1).animate({ 'left': pic_code.params.left_begin + 'px' }, 300);
        pic_code.pic_code_line.css({"text-indent": "60px","text-align":"left"}).html('按住左边滑块，拖动完成上方拼图');
        setTimeout(function () {

            pic_code.oCircle_Click();
            // 监听 刷新验证码按钮 点击事件
            pic_code.oRef_click();
            
        }, 300);
    },

    //验证成功的默认回调
    valid_success_callback: function () {
        pic_code.pic_success.css('display', 'block');
        pic_code.pic_code_liBao.css('display', 'none');
        pic_code.pic_code_fresh.css('display', 'none');
        pic_code.big_pic.unbind('click');
        pic_code.pic_code_fresh.unbind('click');
    },

    // 监听 滑块点击和拖动
    oCircle_Click: function () {
        pic_code.pic_code_circle.on('mousedown touchstart', function (event) {
            //隐藏刷新按钮
            pic_code.pic_code_fresh.css('visibility', 'hidden');
            //获取小滑块
            var oDiv1 = $('.pic_code .pic_bao div').eq(1);
            //var oDiv2=$('.pic_code .pic_bao div').eq(3);
            var oD_left = parseInt(oDiv1.offset().left);
            var disX = 0;
            if (event.originalEvent) {
                disX = event.clientX - parseInt(oDiv1.css('left')) || event.originalEvent.targetTouches[0].pageX - parseInt(oDiv1.css('left'));
            } else {
                disX = event.clientX - parseInt(oDiv1.css('left')) || event.targetTouches[0].pageX - parseInt(oDiv1.css('left'));
            }
            //圆滑块的最大left值
            var oL_max_px = parseInt(pic_code.pic_code_line.width()) - parseInt(pic_code.pic_code_circle.width());
            //可动的小块的最大leftzhi
            var oDiv1_left_max_px = parseInt(pic_code.big_pic_img.width()) - parseInt(oDiv1.width()) - pic_code.params.left_begin - 8;

            $(document).unbind('mousemove touchmove');
            $(document).unbind('mouseup touchend');

            $(document).on('mousemove touchmove', function (event) {
                //隐藏刷新按钮
                pic_code.pic_code_fresh.css('visibility', 'hidden');
                var oL = 0;
                if (event.originalEvent) {
                    oL = event.clientX - disX || event.originalEvent.targetTouches[0].pageX - disX;
                } else {
                    oL = event.clientX - disX || event.targetTouches[0].pageX - disX;
                }

                if (oL >= 10) {
                    pic_code.pic_code_line.html('');
                } else {
                    pic_code.pic_code_line.css({"text-indent": "60px","text-align":"left"}).html('按住左边滑块，拖动完成上方拼图');
                }

                if (oL <= 0) {
                    oL = 0;
                } else if (oL >= oL_max_px) {
                    oL = oL_max_px;
                }

                pic_code.pic_code_circle.css('left', oL + 'px');

                oDiv1.css('left', (oL / oL_max_px * oDiv1_left_max_px + pic_code.params.left_begin) + 'px');
            });

            $(document).on('mouseup touchend', function () {
                var dix_long = parseInt(parseInt(oDiv1.css('left'))*pic_code._opt.Proportion);
                pic_code.pic_code_line.css({"text-indent": "0px","text-align":"center"}).html('验证中，请稍候');
                // 取消 刷新验证码按钮 点击事件
                pic_code.Cancle_oRef_click();
                //取消滑块的点击事件
                pic_code.Cancle_oCircle_Click();
                //滑块消失
                pic_code.pic_code_circle.css('display', 'none');
                if (pic_code._opt.Is_Cross_domain) {
                    $.ajax({
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        url: pic_code._opt.url_submit,
                        xhrFields: {
                            withCredentials: true
                        },
                        crossDomain: true,
                        type: 'POST',
                        data: {
                            dix_long: dix_long,
                            valid_range: pic_code._opt.valid_range
                        },
                        success: function (data) {
                            if (!data.error){
                                data = $.parseJSON(data);
                            }
                            //验证成功的操作
                            if (data.error == 'success' || data.error == 'SUCCESS') {
                                pic_code._opt.Callback_success();
                                //验证失败的操作
                            } else {
                                pic_code.pic_code_error_count.error += 1;
                                pic_code.pic_code_circle.unbind('mousedown touchstart');
                                if (pic_code.pic_code_error_count.error >= pic_code._opt.Callback_error_repeatedly_count) {
                                    pic_code._opt.Callback_error();
                                    setTimeout(function () {
                                        pic_code._opt.Callback_error_repeatedly();
                                    }, 500);
                                } else {
                                    pic_code._opt.Callback_error();
                                }

                            }
                        }
                    });
                } else {
                    $.ajax({
                        url: pic_code._opt.url_submit,
                        type: 'POST',
                        data: {
                            dix_long: dix_long,
                            valid_range: pic_code._opt.valid_range
                        },
                        success: function (data) {
                            if (!data.error){
                                data = $.parseJSON(data);
                            }
                            
                            //验证成功的操作
                            if (data.error == 'success' || data.error == 'SUCCESS') {
                                pic_code._opt.Callback_success();
                                //验证失败的操作
                            } else {
                                pic_code.pic_code_error_count.error += 1;
                                pic_code.pic_code_circle.unbind('mousedown touchstart');
                                if (pic_code.pic_code_error_count.error >= pic_code._opt.Callback_error_repeatedly_count) {
                                    pic_code._opt.Callback_error();
                                    setTimeout(function () {
                                        pic_code._opt.Callback_error_repeatedly();
                                    }, 500);
                                } else {
                                    pic_code._opt.Callback_error();
                                }

                            }
                        }
                    });
                }

                $(document).unbind('mousemove touchmove');
                $(document).unbind('mouseup touchend');
            });
            return false;
        });
    },

    //取消滑块的点击事件
    Cancle_oCircle_Click : function(){
        pic_code.pic_code_circle.off('mousedown touchstart');
    },

    // 监听 刷新验证码按钮 点击事件
    oRef_click: function () {
        // 取消 刷新验证码按钮 点击事件
        pic_code.Cancle_oRef_click();

        pic_code.pic_code_fresh.on('click',function () {
            pic_code.refresh_pic();
        });
        pic_code.big_pic.on('click',function () {
            pic_code.refresh_pic();
        });
    },
    // 取消 刷新验证码按钮 点击事件
    Cancle_oRef_click : function(){
        pic_code.pic_code_fresh.off('click');
        pic_code.big_pic.off('click');
    },
    //刷新验证码
    refresh_pic: function () {
        // 取消 刷新验证码按钮 点击事件
        pic_code.Cancle_oRef_click();
        pic_code.pic_success.css('display', 'none');
        pic_code.pic_code_liBao.css('display', 'block');
        pic_code.pic_code_fresh.css('display', 'block');
        pic_code.delateDiv();
        pic_code.change_background_url();
    },

    // 创建小块
    create_div: function () {
        var oDiv1 = $('<div></div>');
        oDiv1.appendTo(pic_code.big_pic);
        oDiv1.css({ 'width': pic_code._opt.pic_small_width/pic_code._opt.Proportion, 'height': pic_code._opt.pic_small_height/pic_code._opt.Proportion, 'position': 'absolute', 'left': pic_code.params.left_begin + 'px', 'top': pic_code._opt.Y + 'px', 'overflow': 'hidden', 'box-shadow': '0px 0px 3px 3px yellow inset,0px 0px 3px 3px yellow' });
        oDiv1.html('<img src=' + pic_code._opt.img2 + ' style="width: 100%">');
    },

    // 删除小块
    delateDiv: function () {
        var len = $('.pic_code .pic_bao div').length;
        for (var i = len; i >= 1; i--) {
            $('.pic_code .pic_bao div').eq(i).remove();
        }
    },
    //显示验证码弹层
    pic_code_show: function () {
        $(pic_code._opt.pic_position).css('display', 'block');
        if (pic_code._opt.pic_mask) {
            $('#pic_code_mask').css('display', 'block');
        }
    },
    //隐藏验证码弹层
    pic_code_hide: function () {
        $(pic_code._opt.pic_position).css('display', 'none');
        $('#pic_code_mask').css('display', 'none');
    },
};


if (typeof define === "function" && define.amd) {
    define('lib/pic_code',[], function () {
        return pic_code;
    });
}

//返回一个m到n之间的随机数
function rnd(m, n) {
    return parseInt(Math.random() * (m - n) + n);
}


;
/*
    chat管理平台登录页js
    高京
    2017-05-25
*/

define('app/chat_mp_login',["lib/pic_code"], function($pic_code) {
    var chat_mp_login = {
        init: function() {

            var that = this;

            // 用户名获得焦点
            that.form_reset.apply(that);

            // 监听表单提交
            that.form_submit_Listener.apply(that);

            // 初始化 pic_code
            var opt = {
                pic_position: ".pic_code", //图片验证码外包层class或id，默认.pic_code
                div_width: 600, //设置显示的大图的宽，默认300
                valid_range: 5, // 图片验证正确的容错范围，默认是5,单位是px，不受unit影响
                // unit: "px", // 宽高及容错范围单位 "px|vw", 默认px，且IE6/7/8强制使用px
                // pic_mask: true, //验证码大遮罩层，false-不显示遮罩层，true-显示遮罩层，默认true
                // Pic_mask_color: "#000", //验证码大遮罩层颜色，默认黑色
                // Pic_mask_opacity: 0.8, ////验证码大遮罩层透明度，默认0.8
                // Pic_click_key: true, //开关，点击遮罩层验证码是否隐藏，true-隐藏，false-不隐藏，默认true
                // Is_Cross_domain: false, //是否跨域 true-跨域（后端需配置跨域允许当前来源），false-不跨域，默认false
                Url_getPic: '/Pic_code/create', //获取图片地址的接口，跨域请填写带域名的地址，默认'/Pic_code/Pic_code.ashx'
                url_submit: '/Pic_code/valid' //验证码，验证完成提交的地址，跨域请填写带域名的地址，默认'/Pic_code/Pic_code_valid.ashx'
                // z_index: 800, //设置标签z_index，默认800
                // position_default: true, //验证码是否居中显示，true-居中显示，false-自定义显示位置，默认true
                // Callback_error: function() { // 验证失败回调，默认为滑块和拼图小块滑回原位pic_code.doMove();
                //     pic_code.doMove();
                // },
                // Callback_error_repeatedly: function() { // 多次验证失败回调，刷新验证码重新验证，优先于Callback_error  默认事件pic_code.change_background_url();
                //     pic_code.change_background_url();
                // },
                // Callback_error_repeatedly_count: 3, // 触发多次验证失败回调的失败次数，默认3
                // Callback_success: function() { //验证成功回调，提示验证成功，默认方法：pic_code.valid_success_callback()  
                //     pic_code.valid_success_callback();
                // }
            }

            $pic_code.init(opt);
        },
        // 清空用户名密码，并让用户名获得焦点
        form_reset: function() {
            $(".username").val("").focus();
            $(".passwd").val("");
        },
        // 监听表单提交
        form_submit_Listener: function() {
            var that = this;
            $("form").unbind().on("submit", function() {

                that.form_submit_check.apply(that);
                return false;
            });
        },
        // 验证表单
        form_submit_check: function() {
            var that = this;

            var form = $("form");
            var form_data = {
                username: form.find("input.username").val(),
                passwd: form.find("input.passwd").val()
            };

            var iosDialog2 = $("#iosDialog2");

            if (form_data.username === "" || form_data.passwd === "") {
                iosDialog2.find(".weui-dialog__bd").text("用户名或密码错误");
                iosDialog2.find(".weui-dialog__btn_primary").unbind().on("click", function() {
                    iosDialog2.css("display", "none");
                });
                iosDialog2.css("display", "block");
            } else {
                that.show_PicCode.apply(that, [function() {
                    that.form_submit_deal.apply(that, [form_data]);
                }]);
            }

        },
        // 显示图片验证码
        // @callback: 成功回调
        show_PicCode: function(callback) {
            
            $pic_code.open({
                Callback_success: function() {
                    pic_code.valid_success_callback();
                    pic_code.pic_code_hide();
                    pic_code.change_background_url();
                    if (callback)
                        callback();
                }
            });
        },


        // 表单提交
        form_submit_deal: function(form_data) {

            var that = this;

            var loadingToast = $(".loadingToast");
            var iosDialog2 = $("#iosDialog2");

            $.ajax({
                url: "/" + Base_meta.from + "/login/deal",
                type: "post",
                data: form_data,
                beforeSend: function() {
                    loadingToast.find(".weui-toast__content").text("处理中");
                    loadingToast.css("display", "block");
                },
                success: function(result) {
                    // loadingToast.css("display", "none");
                    // console.log(result);
                    if (result == "success") {
                        location.href = "/" + Base_meta.from;
                    } else {
                        iosDialog2.find(".weui-dialog__bd").text("用户名或密码错误");
                        iosDialog2.find(".weui-dialog__btn_primary").unbind().on("click", function() {
                            iosDialog2.css("display", "none");
                            that.form_reset.apply(that);
                        });
                        iosDialog2.css("display", "block");
                        loadingToast.css("display", "none");
                    }
                }
            });

        }
    };

    return chat_mp_login;
});
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
/*
    chat管理平台页js
    高京
    2017-05-26
    that = {
        RECORD_COUNT: 消息每次加载数量,
        servicer_form_layershow: 添加修改客服的表单弹层对象,
        getRecords_opt = { // 获取消息记录的保留参数，获取更多历史消息时使用此值
            cid: cid,
            sid: sid
        }
    }
*/

define('app/chat_mp_index',["lib/LayerShow"], function($LayerShow) {
    var chat_mp_index = {

        RECORD_COUNT: 10,

        loadingToast: $(".loadingToast"),

        cellRight_p_loading: $(".wrapper_right p.loading"), // 加载中提示盒

        cellRight_talkList: $(".wrapper_right ul.talk_list"), // 右侧消息记录列表盒

        init: function() {

            var that = this;

            // 监听顶部按钮点击
            that.button_top_click_Listener.apply(that);

            // 监听行内按钮点击
            that.button_inline_click_Listener.apply(that);

        },
        // 监听顶部按钮点击
        button_top_click_Listener: function() {
            var that = this;

            $(".buttons li").unbind().on("click", function() {

                var button_this = $(this);

                if (button_this.hasClass("show_record")) {

                    // 清空原先记录
                    $(".wrapper_right li:not(.template,.more_record)").remove();

                    /* 消息记录 */
                    var cid = "";
                    var sid = "";
                    var start_count = 0;
                    var scroll_direction = "bottom";
                    that.getRecords_ajax.apply(that, [cid, sid, start_count, scroll_direction]);
                } else if (button_this.hasClass("show_risk_record")) {

                    // 清空原先记录
                    $(".wrapper_right li:not(.template,.more_record)").remove();

                    /* 消息记录 */
                    var cid = "";
                    var sid = "";
                    var start_count = 0;
                    var scroll_direction = "bottom";
                    var risk_match = true;
                    that.getRecords_ajax.apply(that, [cid, sid, start_count, scroll_direction, risk_match]);
                } else if (button_this.hasClass("add_servicer")) {

                    /* 添加新客服 */
                    var callback = function(result) {
                        that.showLayer_add_servicer.apply(that, [result]);
                    };
                    that.get_form.apply(that, [callback]);

                } else if (button_this.hasClass("set_init")) {

                    /* 设置 */
                    $.ajax({
                        url: "/mp/setInit/get_form",
                        type: "post",
                        beforeSend: function() {
                            that.loadingToast.css("display", "none");
                        },
                        success: function(result) {
                            that.showLayer_setInit.apply(that, [result]);
                        }
                    });
                } else if (button_this.hasClass("quit")) {

                    /* 退出 */
                    $.ajax({
                        url: "/mp/quit",
                        type: "post",
                        beforeSend: function() {
                            that.loadingToast.css("display", "block");
                        },
                        success: function() {
                            location.href = "/mp/login";
                        }
                    });

                }

            });
        },

        // ajax获取消息记录
        // @scroll_direction: "top" || "bottom"(默认)
        // @risk_match: 只查询疑似风险的记录 true || false(默认)
        getRecords_ajax: function(cid, sid, start_count, scroll_direction, risk_match) {
            var that = this;

            risk_match = risk_match || false;

            that.getRecords_opt = {
                cid: cid,
                sid: sid,
                risk_match: risk_match
            };

            // 获取消息记录
            $.ajax({
                url: "/mp/getRecords",
                type: "post",
                data: {
                    cid: cid,
                    sid: sid,
                    start_count: start_count,
                    risk_match: risk_match
                },
                beforeSend: function() {
                    that.cellRight_p_loading.css("display", "block");
                },
                success: function(result) {

                    that.cellRight_p_loading.css("display", "none");
                    that.cellRight_talkList.css("display", "block");

                    // console.dir(result);

                    var c = 0;

                    if (result.forEach) {

                        result.forEach(function(r) {

                            if (r.sender.toLowerCase() != "o")
                                c++;

                            that.send_message.apply(that, [r, scroll_direction]);

                        });
                    }

                    // 判断是否需要显示“查看更多历史消息”
                    var more_record = $("ul.talk_list .more_record");
                    if (c < that.RECORD_COUNT)
                        more_record.removeClass("show");
                    else {
                        if (!more_record.hasClass("show"))
                            more_record.addClass("show").css("cursor", "pointer");
                        more_record.prependTo(that.cellRight_talkList);
                        that.show_more_records_Listener.apply(that);
                    }
                }
            });
        },

        // 处理消息推送（包括本页自己发送的消息 和 socketio推送的消息）
        // @r: 消息记录对象
        // @scroll_direction: 加载完成后滚动方向 "top" | "bottom"(默认)
        send_message: function(r, scroll_direction) {

            var that = this;

            scroll_direction = scroll_direction || "bottom";

            // console.log("");
            // console.log(kind, msg, cid, sid, date, prepend);
            // console.log(date.toString().replace(/-/ig, "/"));

            var li;
            switch (r.sender.toLowerCase()) {
                case "o":
                    li = $("li.template.center").clone();
                    break;
                case "s":
                    li = $("li.template.right").clone();
                    break;
                case "c":
                    li = $("li.template.left").clone();
                    break;
            }

            // 装载内容
            li.find("p").html("<span class=\"arrow\"></span>" + r.content);

            // 装载昵称和头像
            switch (r.sender.toLowerCase()) {
                case "o":
                    break;
                case "s":
                    li.find("p").before(
                        $(document.createElement("span")).text(r.servicer.nickname + " TO: " + r.client.nickname).addClass("name")
                    );
                    li.find("img").attr("src", r.servicer.headimg);
                    break;
                case "c":
                    li.find(".name").text(r.client.nickname);
                    li.find("img").attr("src", r.client.headimg);
                    break;
            }

            // 装载li
            li.removeClass("template").prependTo(that.cellRight_talkList);

            // 消息窗口向上滚动
            var ul = that.cellRight_talkList;
            if (scroll_direction == "top")
                ul.scrollTop(0);
            else {
                var ul_height_px = ul.height();
                var ul_scrollHeight = ul[0].scrollHeight - ul.css("padding-bottom").replace("px", "");
                if (ul_scrollHeight > ul_height_px) {
                    ul.scrollTop(ul_scrollHeight - ul_height_px);
                }
            }
        },

        // 获取更多历史消息的点击监听
        show_more_records_Listener: function() {
            var that = this;

            $(".more_record.show").unbind().on("touchstart mousedown", function(e) {
                e.preventDefault();

                var start_count = $(".wrapper_right .talk_list li.message:not(.template)").length;
                that.getRecords_ajax.apply(that, [that.getRecords_opt.cid, that.getRecords_opt.sid, start_count, "top", that.getRecords_opt.risk_match]);

            });
        },

        // 获取添加/修改表单数据
        // callback(result): 成功回调
        // _id: 记录id，修改用
        get_form: function(callback, _id) {

            // var that = this;
            _id = _id || "";
            var loadingToast = $(".loadingToast");

            // ajax获得添加客服的表单代码
            $.ajax({
                url: "/mp/servicer/get_form",
                type: "post",
                data: {
                    _id: _id
                },
                beforeSend: function() {
                    loadingToast.find(".weui-toast__content").text("加载中");
                    loadingToast.css("display", "block");
                },
                success: function(result) {
                    loadingToast.css("display", "none");
                    if (callback)
                        callback(result);
                }
            });
        },

        // 监听行内按钮点击
        button_inline_click_Listener: function() {
            var that = this;

            $(".button_inline .weui-btn").unbind().on("click", function() {
                var li_obj = $(this).parents(".button_inline");
                var index = li_obj.parent().find(".button_inline").index(li_obj) + 1;
                switch (index) {
                    case 1:
                        that.button_inline_click_1.apply(that, [li_obj]);
                        break;
                    case 2:
                        that.button_inline_click_2.apply(that, [li_obj.parents(".line_li").attr("_id")]);
                        break;
                    case 3:
                        that.button_inline_click_3.apply(that, [li_obj.parents(".line_li")]);
                        break;
                    case 4:
                        that.button_inline_click_4.apply(that, [li_obj.parents(".line_li").attr("_id")]);
                        break;
                    default:
                        break;
                }
            });
        },
        // 行内按钮点击-1-接收新会话
        button_inline_click_1: function(button_obj) {
            // var that = this;

            var bubble_obj = button_obj.find(".bubble");
            var hasNo = bubble_obj.hasClass("no");

            $.ajax({
                url: "/mp/servicer/alive",
                type: "post",
                data: {
                    id: bubble_obj.parents("li.line_li").attr("_id")
                },
                beforeSend: function() {
                    bubble_obj.addClass("rotate");
                },
                success: function(result) {
                    var reg = /^success/i;
                    if (result.match(reg)) {
                        bubble_obj.removeClass("rotate");
                        if (hasNo)
                            bubble_obj.removeClass("no");
                        else
                            bubble_obj.addClass("no");
                    } else {
                        var iosDialog2 = $("#iosDialog2");
                        iosDialog2.find(".weui-dialog__bd").text(result);
                        iosDialog2.find(".weui-dialog__btn_primary").unbind().on("click", function() {
                            iosDialog2.css("display", "none");
                        });
                        iosDialog2.css("display", "block");
                    }
                }
            });
        },
        // 行内按钮点击-2-修改
        button_inline_click_2: function(_id) {
            var that = this;

            var callback = function(result) {
                that.showLayer_add_servicer.apply(that, [result]);
            };

            that.get_form.apply(that, [callback, _id]);
        },
        // 行内按钮点击-3-删除
        button_inline_click_3: function(line_obj) {
            // var that = this;
            var loadingToast = $(".loadingToast"),
                iosDialog1 = $("#iosDialog1"),
                iosDialog2 = $("#iosDialog2");

            var _id = line_obj.attr("_id");

            // 执行ajax
            var _deal_ajax = function(_id) {
                $.ajax({
                    url: "/mp/servicer/del",
                    type: "post",
                    data: {
                        _id: _id
                    },
                    beforeSend: function() {
                        loadingToast.find(".weui-toast__content").text("处理中");
                        loadingToast.css("display", "block");
                    },
                    success: function(result) {
                        if (result == "success") { // 删除成功
                            line_obj.animate({
                                height: 0
                            }, 200, function() {
                                line_obj.remove();
                                loadingToast.css("display", "none");
                            });
                        } else { // 失败
                            iosDialog2.find(".weui-dialog__bd").text(result);
                            iosDialog2.find(".weui-dialog__btn_primary").unbind().on("click", function() {
                                iosDialog2.css("display", "none");
                            });
                            iosDialog2.css("display", "block");
                        }
                    }
                });
            };

            // 发起删除询问
            iosDialog1.find(".weui-dialog__title").text("删除确认");
            iosDialog1.find(".weui-dialog__bd").text("此操作不可逆，是否继续？");
            iosDialog1.find(".weui-dialog__btn_default").text("取消").unbind().on("click", function() {
                iosDialog1.css("display", "none");
            });
            iosDialog1.find(".weui-dialog__btn_primary").text("继续").attr("_id", _id).unbind().on("click", function() {
                iosDialog1.css("display", "none");
                _deal_ajax($(this).attr("_id"));
            });
            iosDialog1.css("display", "block");
        },
        // 行内按钮点击-4-查看消息
        button_inline_click_4: function(_id) {

            var that = this;

            // 清空原先记录
            $(".wrapper_right li:not(.template,.more_record)").remove();

            that.getRecords_ajax.apply(that, ["", _id, 0, "bottom"]);
        },
        // 弹层处理
        // @opt：方法内有预设的默认opt，特殊opt可以通过此参数传递。
        showLayer_Handler: function(opt) {

            var that = this;

            // 创建新LayerShow实例。注意：不要反复的创建实例，每个实例会在show()之后创建一组dom
            if (!that.servicer_form_layershow)
                that.servicer_form_layershow = new $LayerShow();

            // 显示
            var opt_default = {
                // z_index: 弹层的z - index。 图片 / 图文内容层为z_index + 1。 默认400
                // bg_color: 背景层16进制颜色。 默认 #000000
                // bg_opacity: 背景层透明度，0～1。默认0.8
                showKind: 2,
                // Pics: showKind = 1 时有效。 图片路径列表， 数组。 如["/images/001.jpg", "/images/002.png"]。 无默认值
                // Pics_show_index: 默认显示图片的序号， 值大于等于图片数组的length时无效。 默认0
                // Pics_scroll_speed: showKind = 1 时有效。 图片切换时的速度。 毫秒。 默认500。 移动端建议设置为100 - 200， 过慢会有卡顿的现象
                // Pics_arrow_left: showKind = 1 时有效。 图片切换 左箭头图片路径。 默认 / inc / LayerShow_arrow_left.png。
                // Pics_arrow_right: showKind = 1 时有效。 图片切换 右箭头图片路径。 默认 / inc / LayerShow_arrow_left.png。
                // callback_image_click: showKind = 1 时有效。 图片点击回调： 1 - 关闭弹层 | 2 - 下一张图片 | function(li_obj) - 自定义方法。 默认 "1"
                // info_content: form_html,
                info_box_width_per: 80,
                // info_box_height_per: showKind = 2 时有效， 内容盒高度百分比。 默认90
                // info_box_radius: showKind = 2 时有效， 内容盒是否圆角。 默认true
                // info_box_bg: showKind = 2 时有效， 内容盒背景。 默认 "#ffffff"
                info_box_padding_px: 0,
                // info_box_fontSize: showKind = 2 时有效， 内容盒字体大小。 默认 "14px"
                // info_box_fontColor: showKind = 2 时有效， 内容盒字体颜色。 默认 "#333"
                // info_box_lineHeight: showKind = 2 时有效， 内容盒行间距。 默认 "30px"
                info_box_use_JRoll: false,
                // JRoll_obj: JRoll对象。 不使用JRoll做内容盒滚动， 可不传。
                info_bottom_fixed_content: "<input type=\"submit\" class=\"form_submit_button weui-btn weui-btn_plain-default\" style=\"height:50px;\" value=\"提 交\">",
                info_bottom_fixed_height: 50,
                // Pics_close_show: true / false。 显示关闭按钮。 默认true
                // Pics_close_path: 关闭按钮图片路径。 默认 / inc / LayerShow_close.png。
                // callback_before: 弹层前回调。 如显示loading层。 无默认
                // callback_close: 关闭弹层后的回调。 没想好如什么。 无默认
                // callback_success: function() {
                //     $("input.sname").focus();

                //     // 监听表单
                //     that.showLayer_add_servicer_form_Listener.apply(that);
                // }

            };
            that.servicer_form_layershow.show($.extend(opt_default, opt));
        },

        // 弹层-系统设置
        showLayer_setInit: function(form_html) {
            var that = this;

            var opt = {
                info_content: form_html,
                callback_success: function() {

                    // 监听表单
                    that.showLayer_setInit_form_Listener.apply(that);
                }
            };

            that.showLayer_Handler.apply(that, [opt]);
        },

        // 监听系统设置表单
        showLayer_setInit_form_Listener: function() {

            var that = this;

            $(".form_submit_button").unbind().on("click", function() {
                that.showLayer_setInit_form_check.apply(that);
            });
        },

        // 系统设置表单 验证
        showLayer_setInit_form_check: function() {

            var that = this;

            var form = $(".mp_setInit_form");

            var formData = {
                mp_user: form.find(".mp_user").val(),
                mp_passwd: form.find(".mp_passwd").val(),
                highlights_regExp: form.find(".highlights_regExp").val()
            };

            // 拆分highlights_regExp为数组
            var regExp = new RegExp(/\n/ig);
            formData.highlights_regExp = formData.highlights_regExp.split(regExp);

            var error_str = "";
            if (formData.mp_user === "") {
                error_str = "请键入账号";
            }

            if (error_str !== "") {
                that.show_errorLayer(error_str);
            } else {
                that.showLayer_setInit_form_submit.apply(that, [form, formData]);
            }
        },

        // 系统设置表单 提交
        // @form: form对象
        // @formData: 提交数据
        showLayer_setInit_form_submit: function(form, formData) {

            var that = this;

            $.ajax({
                url: "/mp/setInit/deal",
                type: "post",
                data: formData,
                beforeSend: function() {
                    that.loadingToast.css("display", "block");
                },
                success: function() {
                    that.loadingToast.css("display", "none");
                    that.show_errorLayer("修改成功");
                }
            })
        },

        // 弹层-添加/修改客服
        showLayer_add_servicer: function(form_html) {
            var that = this;

            var opt = {
                info_content: form_html,
                callback_success: function() {
                    $("input.sname").focus();

                    // 监听表单
                    that.showLayer_add_servicer_form_Listener.apply(that);
                }
            };

            that.showLayer_Handler.apply(that, [opt]);
        },
        // 监听添加/修改客服表单
        showLayer_add_servicer_form_Listener: function() {
            var that = this;

            // 监听头像点击
            that.add_servicer_headimg_click_Listener.apply(that);

            // 监听全部分类的点击
            that.add_servicer_sort_checkall_Listener.apply(that);

            // 监听分类点击
            that.add_servicer_sort_li_click_Listener.apply(that);

            // 监听表单提交
            that.add_servicer_form_submit_Listener.apply(that);
        },
        // 监听 添加/修改客服 - 头像点击
        add_servicer_headimg_click_Listener: function() {
            // var that = this;

            $(".headimg_ul li").unbind().click(function() {
                $(this).siblings(".selected").removeClass("selected");
                $(this).addClass("selected");
            });
        },
        // 监听 添加/修改客服 - 全部分类的点击
        add_servicer_sort_checkall_Listener: function() {
            var that = this;

            var checkall = $(".mp_servicer_form ul.form_line_ul li.sort_li .checkall");
            var sort_ul = $(".mp_servicer_form ul.form_line_ul .sort_ul");

            // 获取ul高度并存于that
            that.sort_ul_height_px = sort_ul.height();

            // 给ul定高
            sort_ul.css("height", that.sort_ul_height_px + "px");

            // 监听点击
            checkall.unbind().on("click", function() {
                var checked = checkall[0].checked;
                if (checked) {
                    // sort_ul.css({
                    //     height: 0
                    // });
                    sort_ul.find(".sort_b:not(.checked)").addClass("checked");
                } else {
                    // sort_ul.css({
                    //     height: that.sort_ul_height_px + "px"
                    // });
                    sort_ul.find(".sort_b").removeClass("checked");
                }
            });
        },
        // 监听 添加/修改客服 - 分类的点击
        add_servicer_sort_li_click_Listener: function() {

            var li = $(".mp_servicer_form ul.form_line_ul li.sort_li li.sort_b");

            li.unbind().on("click", function() {
                var _this = $(this);

                _this.toggleClass("checked");
            });
        },
        // 监听 添加/修改客服 - 表单提交
        add_servicer_form_submit_Listener: function() {
            var that = this;

            // 监听表单提交
            $(".mp_servicer_form form").unbind().on("submit", function() {

                // 表单提交验证
                that.add_servicer_form_submit_check.apply(that, [$(this)]);
                return false;
            });

            // 监听按钮点击，发起表单提交
            $(".form_submit_button").unbind().on("click", function() {
                $(".mp_servicer_form form").submit();
            });
        },
        // 添加/修改客服 - 表单提交验证
        add_servicer_form_submit_check: function(form_obj) {
            var that = this;
            var _id = form_obj.find(".form_line_ul").attr("_id"),
                sname = form_obj.find("input.sname").val(),
                nickname = form_obj.find("input.nickname").val(),
                passwd = form_obj.find("input.passwd").val(),
                headimg_li = form_obj.find(".headimg_ul .selected"),
                sort_li = form_obj.find(".sort_ul .sort_b.checked");

            // 验证报错，空字符串为正确
            var error_str = "";

            if (sname === "") {
                error_str = "请键入账号";
            } else if (nickname === "") {
                error_str = "请键入昵称";
            } else if (passwd === "" && _id === "") {
                error_str = "请键入密码";
            } else if (headimg_li.length === 0) {
                error_str = "请选择头像";
            }

            // 有错show错，没错提交
            if (error_str !== "") {
                that.show_errorLayer.apply(that, [error_str]);
            } else {

                // 拼接sort
                var sort = "";
                $.each(sort_li, function(index, s) {
                    sort += "<" + $(s).attr("Scid") + ">";
                });

                // 表单提交处理
                that.add_servicer_form_submit_deal.apply(that, [form_obj, {
                    _id: _id,
                    sname: sname,
                    nickname: nickname,
                    passwd: passwd,
                    headimg: headimg_li.find("img").attr("src"),
                    sort: sort
                }]);
            }
        },
        // 添加/修改客服 - 表单提交处理
        add_servicer_form_submit_deal: function(form_obj, form_data) {
            var that = this,
                loadingToast = $(".loadingToast"),
                toast = $("#toast");

            $.ajax({
                url: "/mp/servicer/form_deal",
                type: "post",
                data: form_data,
                beforeSend: function() {
                    loadingToast.css("display", "block");
                },
                success: function(result) {
                    var reg = /^success:(\d):(.+)$/i;
                    var reg_result = reg.exec(result);

                    if (!reg_result) { // 失败

                        var iosDialog2 = $("#iosDialog2");
                        iosDialog2.find(".weui-dialog__bd").text(result);
                        iosDialog2.find(".weui-dialog__btn_primary").unbind().on("click", function() {
                            iosDialog2.css("display", "none");
                        });
                        iosDialog2.css("display", "block");

                        loadingToast.css("display", "none");

                    } else { // 成功

                        // ul外盒
                        var list_ul = $(".servicer_list_ul");
                        var li;

                        switch (reg_result[1]) {
                            case "1": // 添加

                                // 追加新行
                                li = list_ul.find(".template").clone().removeClass("template");
                                li.attr("_id", reg_result[2]);
                                li.find(".line_item_ul img").attr("src", form_data.headimg);
                                li.find(".line_item_ul p").text(form_data.nickname);
                                li.appendTo(list_ul);

                                // 对新行内按钮进行监听
                                that.button_inline_click_Listener.apply(that);

                                break;

                            case "2": // 修改

                                // 修改行内信息
                                li = list_ul.find("li.line_li[_id=" + reg_result[2] + "]");
                                if (li) {
                                    li.find(".line_item_ul img").attr("src", form_data.headimg);
                                    li.find(".line_item_ul p").text(form_data.nickname);
                                }

                                // 关闭表单盒
                                that.servicer_form_layershow.close();

                                break;
                            default:
                                break;
                        }

                        // 表单还原
                        form_obj.find("input:not(.form_submit_button)").val("");
                        form_obj.find(".headimg_ul li.selected").removeClass("selected");

                        // 隐藏loading
                        loadingToast.css("display", "none");

                        // 完成提示
                        toast.find(".weui-toast__content").text("操作成功");
                        var toast_hide = function() {
                            toast.css("display", "none");
                            form_obj.find("input.sname").focus();
                        };
                        toast.unbind().on("click", toast_hide);
                        toast.css("display", "block");
                        setTimeout(toast_hide, 1000);

                    }
                }
            });
        },

        // 表单验证 报错
        show_errorLayer: function(error_str) {

            var iosDialog2 = $("#iosDialog2");
            iosDialog2.find(".weui-dialog__bd").text(error_str);
            iosDialog2.find(".weui-dialog__btn_primary").text("好的").unbind().on("click", function() {
                iosDialog2.css("display", "none");
            });
            iosDialog2.css("display", "block");
        }
    };

    return chat_mp_index;
});
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define('lib/socket.io.min',[],e):"object"==typeof exports?exports.io=e():t.io=e()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";function n(t,e){"object"===("undefined"==typeof t?"undefined":i(t))&&(e=t,t=void 0),e=e||{};var r,n=s(t),a=n.source,p=n.id,f=n.path,l=h[p]&&f in h[p].nsps,d=e.forceNew||e["force new connection"]||!1===e.multiplex||l;return d?(u("ignoring socket cache for %s",a),r=c(a,e)):(h[p]||(u("new io instance for %s",a),h[p]=c(a,e)),r=h[p]),n.query&&!e.query?e.query=n.query:e&&"object"===i(e.query)&&(e.query=o(e.query)),r.socket(n.path,e)}function o(t){var e=[];for(var r in t)t.hasOwnProperty(r)&&e.push(encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return e.join("&")}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=r(1),a=r(7),c=r(17),u=r(3)("socket.io-client");t.exports=e=n;var h=e.managers={};e.protocol=a.protocol,e.connect=n,e.Manager=r(17),e.Socket=r(44)},function(t,e,r){(function(e){"use strict";function n(t,r){var n=t;r=r||e.location,null==t&&(t=r.protocol+"//"+r.host),"string"==typeof t&&("/"===t.charAt(0)&&(t="/"===t.charAt(1)?r.protocol+t:r.host+t),/^(https?|wss?):\/\//.test(t)||(i("protocol-less url %s",t),t="undefined"!=typeof r?r.protocol+"//"+t:"https://"+t),i("parse %s",t),n=o(t)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";var s=n.host.indexOf(":")!==-1,a=s?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+a+":"+n.port,n.href=n.protocol+"://"+a+(r&&r.port===n.port?"":":"+n.port),n}var o=r(2),i=r(3)("socket.io-client:url");t.exports=n}).call(e,function(){return this}())},function(t,e){var r=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,n=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];t.exports=function(t){var e=t,o=t.indexOf("["),i=t.indexOf("]");o!=-1&&i!=-1&&(t=t.substring(0,o)+t.substring(o,i).replace(/:/g,";")+t.substring(i,t.length));for(var s=r.exec(t||""),a={},c=14;c--;)a[n[c]]=s[c]||"";return o!=-1&&i!=-1&&(a.source=e,a.host=a.host.substring(1,a.host.length-1).replace(/;/g,":"),a.authority=a.authority.replace("[","").replace("]","").replace(/;/g,":"),a.ipv6uri=!0),a}},function(t,e,r){(function(n){function o(){return"undefined"!=typeof document&&"WebkitAppearance"in document.documentElement.style||window.console&&(console.firebug||console.exception&&console.table)||navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31}function i(){var t=arguments,r=this.useColors;if(t[0]=(r?"%c":"")+this.namespace+(r?" %c":" ")+t[0]+(r?"%c ":" ")+"+"+e.humanize(this.diff),!r)return t;var n="color: "+this.color;t=[t[0],n,"color: inherit"].concat(Array.prototype.slice.call(t,1));var o=0,i=0;return t[0].replace(/%[a-z%]/g,function(t){"%%"!==t&&(o++,"%c"===t&&(i=o))}),t.splice(i,0,n),t}function s(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function a(t){try{null==t?e.storage.removeItem("debug"):e.storage.debug=t}catch(t){}}function c(){try{return e.storage.debug}catch(t){}if("undefined"!=typeof n&&"env"in n)return n.env.DEBUG}function u(){try{return window.localStorage}catch(t){}}e=t.exports=r(5),e.log=s,e.formatArgs=i,e.save=a,e.load=c,e.useColors=o,e.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:u(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],e.formatters.j=function(t){try{return JSON.stringify(t)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},e.enable(c())}).call(e,r(4))},function(t,e){function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function o(t){if(h===setTimeout)return setTimeout(t,0);if((h===r||!h)&&setTimeout)return h=setTimeout,setTimeout(t,0);try{return h(t,0)}catch(e){try{return h.call(null,t,0)}catch(e){return h.call(this,t,0)}}}function i(t){if(p===clearTimeout)return clearTimeout(t);if((p===n||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(t);try{return p(t)}catch(e){try{return p.call(null,t)}catch(e){return p.call(this,t)}}}function s(){y&&l&&(y=!1,l.length?d=l.concat(d):g=-1,d.length&&a())}function a(){if(!y){var t=o(s);y=!0;for(var e=d.length;e;){for(l=d,d=[];++g<e;)l&&l[g].run();g=-1,e=d.length}l=null,y=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function u(){}var h,p,f=t.exports={};!function(){try{h="function"==typeof setTimeout?setTimeout:r}catch(t){h=r}try{p="function"==typeof clearTimeout?clearTimeout:n}catch(t){p=n}}();var l,d=[],y=!1,g=-1;f.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];d.push(new c(t,e)),1!==d.length||y||o(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=u,f.addListener=u,f.once=u,f.off=u,f.removeListener=u,f.removeAllListeners=u,f.emit=u,f.binding=function(t){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(t){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},function(t,e,r){function n(){return e.colors[h++%e.colors.length]}function o(t){function r(){}function o(){var t=o,r=+new Date,i=r-(u||r);t.diff=i,t.prev=u,t.curr=r,u=r,null==t.useColors&&(t.useColors=e.useColors()),null==t.color&&t.useColors&&(t.color=n());for(var s=new Array(arguments.length),a=0;a<s.length;a++)s[a]=arguments[a];s[0]=e.coerce(s[0]),"string"!=typeof s[0]&&(s=["%o"].concat(s));var c=0;s[0]=s[0].replace(/%([a-z%])/g,function(r,n){if("%%"===r)return r;c++;var o=e.formatters[n];if("function"==typeof o){var i=s[c];r=o.call(t,i),s.splice(c,1),c--}return r}),s=e.formatArgs.apply(t,s);var h=o.log||e.log||console.log.bind(console);h.apply(t,s)}r.enabled=!1,o.enabled=!0;var i=e.enabled(t)?o:r;return i.namespace=t,i}function i(t){e.save(t);for(var r=(t||"").split(/[\s,]+/),n=r.length,o=0;o<n;o++)r[o]&&(t=r[o].replace(/[\\^$+?.()|[\]{}]/g,"\\$&").replace(/\*/g,".*?"),"-"===t[0]?e.skips.push(new RegExp("^"+t.substr(1)+"$")):e.names.push(new RegExp("^"+t+"$")))}function s(){e.enable("")}function a(t){var r,n;for(r=0,n=e.skips.length;r<n;r++)if(e.skips[r].test(t))return!1;for(r=0,n=e.names.length;r<n;r++)if(e.names[r].test(t))return!0;return!1}function c(t){return t instanceof Error?t.stack||t.message:t}e=t.exports=o.debug=o,e.coerce=c,e.disable=s,e.enable=i,e.enabled=a,e.humanize=r(6),e.names=[],e.skips=[],e.formatters={};var u,h=0},function(t,e){function r(t){if(t=String(t),!(t.length>1e4)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(e){var r=parseFloat(e[1]),n=(e[2]||"ms").toLowerCase();switch(n){case"years":case"year":case"yrs":case"yr":case"y":return r*h;case"days":case"day":case"d":return r*u;case"hours":case"hour":case"hrs":case"hr":case"h":return r*c;case"minutes":case"minute":case"mins":case"min":case"m":return r*a;case"seconds":case"second":case"secs":case"sec":case"s":return r*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r;default:return}}}}function n(t){return t>=u?Math.round(t/u)+"d":t>=c?Math.round(t/c)+"h":t>=a?Math.round(t/a)+"m":t>=s?Math.round(t/s)+"s":t+"ms"}function o(t){return i(t,u,"day")||i(t,c,"hour")||i(t,a,"minute")||i(t,s,"second")||t+" ms"}function i(t,e,r){if(!(t<e))return t<1.5*e?Math.floor(t/e)+" "+r:Math.ceil(t/e)+" "+r+"s"}var s=1e3,a=60*s,c=60*a,u=24*c,h=365.25*u;t.exports=function(t,e){e=e||{};var i=typeof t;if("string"===i&&t.length>0)return r(t);if("number"===i&&isNaN(t)===!1)return e.long?o(t):n(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}},function(t,e,r){function n(){}function o(t){var r="",n=!1;return r+=t.type,e.BINARY_EVENT!=t.type&&e.BINARY_ACK!=t.type||(r+=t.attachments,r+="-"),t.nsp&&"/"!=t.nsp&&(n=!0,r+=t.nsp),null!=t.id&&(n&&(r+=",",n=!1),r+=t.id),null!=t.data&&(n&&(r+=","),r+=f.stringify(t.data)),p("encoded %j as %s",t,r),r}function i(t,e){function r(t){var r=d.deconstructPacket(t),n=o(r.packet),i=r.buffers;i.unshift(n),e(i)}d.removeBlobs(t,r)}function s(){this.reconstructor=null}function a(t){var r={},n=0;if(r.type=Number(t.charAt(0)),null==e.types[r.type])return h();if(e.BINARY_EVENT==r.type||e.BINARY_ACK==r.type){for(var o="";"-"!=t.charAt(++n)&&(o+=t.charAt(n),n!=t.length););if(o!=Number(o)||"-"!=t.charAt(n))throw new Error("Illegal attachments");r.attachments=Number(o)}if("/"==t.charAt(n+1))for(r.nsp="";++n;){var i=t.charAt(n);if(","==i)break;if(r.nsp+=i,n==t.length)break}else r.nsp="/";var s=t.charAt(n+1);if(""!==s&&Number(s)==s){for(r.id="";++n;){var i=t.charAt(n);if(null==i||Number(i)!=i){--n;break}if(r.id+=t.charAt(n),n==t.length)break}r.id=Number(r.id)}return t.charAt(++n)&&(r=c(r,t.substr(n))),p("decoded %s as %j",t,r),r}function c(t,e){try{t.data=f.parse(e)}catch(t){return h()}return t}function u(t){this.reconPack=t,this.buffers=[]}function h(t){return{type:e.ERROR,data:"parser error"}}var p=r(8)("socket.io-parser"),f=r(11),l=r(13),d=r(14),y=r(16);e.protocol=4,e.types=["CONNECT","DISCONNECT","EVENT","ACK","ERROR","BINARY_EVENT","BINARY_ACK"],e.CONNECT=0,e.DISCONNECT=1,e.EVENT=2,e.ACK=3,e.ERROR=4,e.BINARY_EVENT=5,e.BINARY_ACK=6,e.Encoder=n,e.Decoder=s,n.prototype.encode=function(t,r){if(p("encoding packet %j",t),e.BINARY_EVENT==t.type||e.BINARY_ACK==t.type)i(t,r);else{var n=o(t);r([n])}},l(s.prototype),s.prototype.add=function(t){var r;if("string"==typeof t)r=a(t),e.BINARY_EVENT==r.type||e.BINARY_ACK==r.type?(this.reconstructor=new u(r),0===this.reconstructor.reconPack.attachments&&this.emit("decoded",r)):this.emit("decoded",r);else{if(!y(t)&&!t.base64)throw new Error("Unknown type: "+t);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");r=this.reconstructor.takeBinaryData(t),r&&(this.reconstructor=null,this.emit("decoded",r))}},s.prototype.destroy=function(){this.reconstructor&&this.reconstructor.finishedReconstruction()},u.prototype.takeBinaryData=function(t){if(this.buffers.push(t),this.buffers.length==this.reconPack.attachments){var e=d.reconstructPacket(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null},u.prototype.finishedReconstruction=function(){this.reconPack=null,this.buffers=[]}},function(t,e,r){function n(){return"WebkitAppearance"in document.documentElement.style||window.console&&(console.firebug||console.exception&&console.table)||navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31}function o(){var t=arguments,r=this.useColors;if(t[0]=(r?"%c":"")+this.namespace+(r?" %c":" ")+t[0]+(r?"%c ":" ")+"+"+e.humanize(this.diff),!r)return t;var n="color: "+this.color;t=[t[0],n,"color: inherit"].concat(Array.prototype.slice.call(t,1));var o=0,i=0;return t[0].replace(/%[a-z%]/g,function(t){"%%"!==t&&(o++,"%c"===t&&(i=o))}),t.splice(i,0,n),t}function i(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function s(t){try{null==t?e.storage.removeItem("debug"):e.storage.debug=t}catch(t){}}function a(){var t;try{t=e.storage.debug}catch(t){}return t}function c(){try{return window.localStorage}catch(t){}}e=t.exports=r(9),e.log=i,e.formatArgs=o,e.save=s,e.load=a,e.useColors=n,e.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:c(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],e.formatters.j=function(t){return JSON.stringify(t)},e.enable(a())},function(t,e,r){function n(){return e.colors[h++%e.colors.length]}function o(t){function r(){}function o(){var t=o,r=+new Date,i=r-(u||r);t.diff=i,t.prev=u,t.curr=r,u=r,null==t.useColors&&(t.useColors=e.useColors()),null==t.color&&t.useColors&&(t.color=n());var s=Array.prototype.slice.call(arguments);s[0]=e.coerce(s[0]),"string"!=typeof s[0]&&(s=["%o"].concat(s));var a=0;s[0]=s[0].replace(/%([a-z%])/g,function(r,n){if("%%"===r)return r;a++;var o=e.formatters[n];if("function"==typeof o){var i=s[a];r=o.call(t,i),s.splice(a,1),a--}return r}),"function"==typeof e.formatArgs&&(s=e.formatArgs.apply(t,s));var c=o.log||e.log||console.log.bind(console);c.apply(t,s)}r.enabled=!1,o.enabled=!0;var i=e.enabled(t)?o:r;return i.namespace=t,i}function i(t){e.save(t);for(var r=(t||"").split(/[\s,]+/),n=r.length,o=0;o<n;o++)r[o]&&(t=r[o].replace(/\*/g,".*?"),"-"===t[0]?e.skips.push(new RegExp("^"+t.substr(1)+"$")):e.names.push(new RegExp("^"+t+"$")))}function s(){e.enable("")}function a(t){var r,n;for(r=0,n=e.skips.length;r<n;r++)if(e.skips[r].test(t))return!1;for(r=0,n=e.names.length;r<n;r++)if(e.names[r].test(t))return!0;return!1}function c(t){return t instanceof Error?t.stack||t.message:t}e=t.exports=o,e.coerce=c,e.disable=s,e.enable=i,e.enabled=a,e.humanize=r(10),e.names=[],e.skips=[],e.formatters={};var u,h=0},function(t,e){function r(t){if(t=""+t,!(t.length>1e4)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(e){var r=parseFloat(e[1]),n=(e[2]||"ms").toLowerCase();switch(n){case"years":case"year":case"yrs":case"yr":case"y":return r*h;case"days":case"day":case"d":return r*u;case"hours":case"hour":case"hrs":case"hr":case"h":return r*c;case"minutes":case"minute":case"mins":case"min":case"m":return r*a;case"seconds":case"second":case"secs":case"sec":case"s":return r*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r}}}}function n(t){return t>=u?Math.round(t/u)+"d":t>=c?Math.round(t/c)+"h":t>=a?Math.round(t/a)+"m":t>=s?Math.round(t/s)+"s":t+"ms"}function o(t){return i(t,u,"day")||i(t,c,"hour")||i(t,a,"minute")||i(t,s,"second")||t+" ms"}function i(t,e,r){if(!(t<e))return t<1.5*e?Math.floor(t/e)+" "+r:Math.ceil(t/e)+" "+r+"s"}var s=1e3,a=60*s,c=60*a,u=24*c,h=365.25*u;t.exports=function(t,e){return e=e||{},"string"==typeof t?r(t):e.long?o(t):n(t)}},function(t,e,r){(function(t,r){var n=!1;(function(){function o(t,e){function r(t){if(r[t]!==g)return r[t];var o;if("bug-string-char-index"==t)o="a"!="a"[0];else if("json"==t)o=r("json-stringify")&&r("json-parse");else{var s,a='{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';if("json-stringify"==t){var c=e.stringify,h="function"==typeof c&&b;if(h){(s=function(){return 1}).toJSON=s;try{h="0"===c(0)&&"0"===c(new n)&&'""'==c(new i)&&c(v)===g&&c(g)===g&&c()===g&&"1"===c(s)&&"[1]"==c([s])&&"[null]"==c([g])&&"null"==c(null)&&"[null,null,null]"==c([g,v,null])&&c({a:[s,!0,!1,null,"\0\b\n\f\r\t"]})==a&&"1"===c(null,s)&&"[\n 1,\n 2\n]"==c([1,2],null,1)&&'"-271821-04-20T00:00:00.000Z"'==c(new u(-864e13))&&'"+275760-09-13T00:00:00.000Z"'==c(new u(864e13))&&'"-000001-01-01T00:00:00.000Z"'==c(new u(-621987552e5))&&'"1969-12-31T23:59:59.999Z"'==c(new u(-1))}catch(t){h=!1}}o=h}if("json-parse"==t){var p=e.parse;if("function"==typeof p)try{if(0===p("0")&&!p(!1)){s=p(a);var f=5==s.a.length&&1===s.a[0];if(f){try{f=!p('"\t"')}catch(t){}if(f)try{f=1!==p("01")}catch(t){}if(f)try{f=1!==p("1.")}catch(t){}}}}catch(t){f=!1}o=f}}return r[t]=!!o}t||(t=c.Object()),e||(e=c.Object());var n=t.Number||c.Number,i=t.String||c.String,a=t.Object||c.Object,u=t.Date||c.Date,h=t.SyntaxError||c.SyntaxError,p=t.TypeError||c.TypeError,f=t.Math||c.Math,l=t.JSON||c.JSON;"object"==typeof l&&l&&(e.stringify=l.stringify,e.parse=l.parse);var d,y,g,m=a.prototype,v=m.toString,b=new u(-0xc782b5b800cec);try{b=b.getUTCFullYear()==-109252&&0===b.getUTCMonth()&&1===b.getUTCDate()&&10==b.getUTCHours()&&37==b.getUTCMinutes()&&6==b.getUTCSeconds()&&708==b.getUTCMilliseconds()}catch(t){}if(!r("json")){var w="[object Function]",k="[object Date]",x="[object Number]",A="[object String]",C="[object Array]",B="[object Boolean]",S=r("bug-string-char-index");if(!b)var T=f.floor,E=[0,31,59,90,120,151,181,212,243,273,304,334],_=function(t,e){return E[e]+365*(t-1970)+T((t-1969+(e=+(e>1)))/4)-T((t-1901+e)/100)+T((t-1601+e)/400)};if((d=m.hasOwnProperty)||(d=function(t){var e,r={};return(r.__proto__=null,r.__proto__={toString:1},r).toString!=v?d=function(t){var e=this.__proto__,r=t in(this.__proto__=null,this);return this.__proto__=e,r}:(e=r.constructor,d=function(t){var r=(this.constructor||e).prototype;return t in this&&!(t in r&&this[t]===r[t])}),r=null,d.call(this,t)}),y=function(t,e){var r,n,o,i=0;(r=function(){this.valueOf=0}).prototype.valueOf=0,n=new r;for(o in n)d.call(n,o)&&i++;return r=n=null,i?y=2==i?function(t,e){var r,n={},o=v.call(t)==w;for(r in t)o&&"prototype"==r||d.call(n,r)||!(n[r]=1)||!d.call(t,r)||e(r)}:function(t,e){var r,n,o=v.call(t)==w;for(r in t)o&&"prototype"==r||!d.call(t,r)||(n="constructor"===r)||e(r);(n||d.call(t,r="constructor"))&&e(r)}:(n=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"],y=function(t,e){var r,o,i=v.call(t)==w,a=!i&&"function"!=typeof t.constructor&&s[typeof t.hasOwnProperty]&&t.hasOwnProperty||d;for(r in t)i&&"prototype"==r||!a.call(t,r)||e(r);for(o=n.length;r=n[--o];a.call(t,r)&&e(r));}),y(t,e)},!r("json-stringify")){var N={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},j="000000",O=function(t,e){return(j+(e||0)).slice(-t)},P="\\u00",R=function(t){for(var e='"',r=0,n=t.length,o=!S||n>10,i=o&&(S?t.split(""):t);r<n;r++){var s=t.charCodeAt(r);switch(s){case 8:case 9:case 10:case 12:case 13:case 34:case 92:e+=N[s];break;default:if(s<32){e+=P+O(2,s.toString(16));break}e+=o?i[r]:t.charAt(r)}}return e+'"'},D=function(t,e,r,n,o,i,s){var a,c,u,h,f,l,m,b,w,S,E,N,j,P,q,U;try{a=e[t]}catch(t){}if("object"==typeof a&&a)if(c=v.call(a),c!=k||d.call(a,"toJSON"))"function"==typeof a.toJSON&&(c!=x&&c!=A&&c!=C||d.call(a,"toJSON"))&&(a=a.toJSON(t));else if(a>-1/0&&a<1/0){if(_){for(f=T(a/864e5),u=T(f/365.2425)+1970-1;_(u+1,0)<=f;u++);for(h=T((f-_(u,0))/30.42);_(u,h+1)<=f;h++);f=1+f-_(u,h),l=(a%864e5+864e5)%864e5,m=T(l/36e5)%24,b=T(l/6e4)%60,w=T(l/1e3)%60,S=l%1e3}else u=a.getUTCFullYear(),h=a.getUTCMonth(),f=a.getUTCDate(),m=a.getUTCHours(),b=a.getUTCMinutes(),w=a.getUTCSeconds(),S=a.getUTCMilliseconds();a=(u<=0||u>=1e4?(u<0?"-":"+")+O(6,u<0?-u:u):O(4,u))+"-"+O(2,h+1)+"-"+O(2,f)+"T"+O(2,m)+":"+O(2,b)+":"+O(2,w)+"."+O(3,S)+"Z"}else a=null;if(r&&(a=r.call(e,t,a)),null===a)return"null";if(c=v.call(a),c==B)return""+a;if(c==x)return a>-1/0&&a<1/0?""+a:"null";if(c==A)return R(""+a);if("object"==typeof a){for(P=s.length;P--;)if(s[P]===a)throw p();if(s.push(a),E=[],q=i,i+=o,c==C){for(j=0,P=a.length;j<P;j++)N=D(j,a,r,n,o,i,s),E.push(N===g?"null":N);U=E.length?o?"[\n"+i+E.join(",\n"+i)+"\n"+q+"]":"["+E.join(",")+"]":"[]"}else y(n||a,function(t){var e=D(t,a,r,n,o,i,s);e!==g&&E.push(R(t)+":"+(o?" ":"")+e)}),U=E.length?o?"{\n"+i+E.join(",\n"+i)+"\n"+q+"}":"{"+E.join(",")+"}":"{}";return s.pop(),U}};e.stringify=function(t,e,r){var n,o,i,a;if(s[typeof e]&&e)if((a=v.call(e))==w)o=e;else if(a==C){i={};for(var c,u=0,h=e.length;u<h;c=e[u++],a=v.call(c),(a==A||a==x)&&(i[c]=1));}if(r)if((a=v.call(r))==x){if((r-=r%1)>0)for(n="",r>10&&(r=10);n.length<r;n+=" ");}else a==A&&(n=r.length<=10?r:r.slice(0,10));return D("",(c={},c[""]=t,c),o,i,n,"",[])}}if(!r("json-parse")){var q,U,M=i.fromCharCode,L={92:"\\",34:'"',47:"/",98:"\b",116:"\t",110:"\n",102:"\f",114:"\r"},I=function(){throw q=U=null,h()},H=function(){for(var t,e,r,n,o,i=U,s=i.length;q<s;)switch(o=i.charCodeAt(q)){case 9:case 10:case 13:case 32:q++;break;case 123:case 125:case 91:case 93:case 58:case 44:return t=S?i.charAt(q):i[q],q++,t;case 34:for(t="@",q++;q<s;)if(o=i.charCodeAt(q),o<32)I();else if(92==o)switch(o=i.charCodeAt(++q)){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:t+=L[o],q++;break;case 117:for(e=++q,r=q+4;q<r;q++)o=i.charCodeAt(q),o>=48&&o<=57||o>=97&&o<=102||o>=65&&o<=70||I();t+=M("0x"+i.slice(e,q));break;default:I()}else{if(34==o)break;for(o=i.charCodeAt(q),e=q;o>=32&&92!=o&&34!=o;)o=i.charCodeAt(++q);t+=i.slice(e,q)}if(34==i.charCodeAt(q))return q++,t;I();default:if(e=q,45==o&&(n=!0,o=i.charCodeAt(++q)),o>=48&&o<=57){for(48==o&&(o=i.charCodeAt(q+1),o>=48&&o<=57)&&I(),n=!1;q<s&&(o=i.charCodeAt(q),o>=48&&o<=57);q++);if(46==i.charCodeAt(q)){for(r=++q;r<s&&(o=i.charCodeAt(r),o>=48&&o<=57);r++);r==q&&I(),q=r}if(o=i.charCodeAt(q),101==o||69==o){for(o=i.charCodeAt(++q),43!=o&&45!=o||q++,r=q;r<s&&(o=i.charCodeAt(r),o>=48&&o<=57);r++);r==q&&I(),q=r}return+i.slice(e,q)}if(n&&I(),"true"==i.slice(q,q+4))return q+=4,!0;if("false"==i.slice(q,q+5))return q+=5,!1;if("null"==i.slice(q,q+4))return q+=4,null;I()}return"$"},z=function(t){var e,r;if("$"==t&&I(),"string"==typeof t){if("@"==(S?t.charAt(0):t[0]))return t.slice(1);if("["==t){for(e=[];t=H(),"]"!=t;r||(r=!0))r&&(","==t?(t=H(),"]"==t&&I()):I()),","==t&&I(),e.push(z(t));return e}if("{"==t){for(e={};t=H(),"}"!=t;r||(r=!0))r&&(","==t?(t=H(),"}"==t&&I()):I()),","!=t&&"string"==typeof t&&"@"==(S?t.charAt(0):t[0])&&":"==H()||I(),e[t.slice(1)]=z(H());return e}I()}return t},J=function(t,e,r){var n=X(t,e,r);n===g?delete t[e]:t[e]=n},X=function(t,e,r){var n,o=t[e];if("object"==typeof o&&o)if(v.call(o)==C)for(n=o.length;n--;)J(o,n,r);else y(o,function(t){J(o,t,r)});return r.call(t,e,o)};e.parse=function(t,e){var r,n;return q=0,U=""+t,r=z(H()),"$"!=H()&&I(),q=U=null,e&&v.call(e)==w?X((n={},n[""]=r,n),"",e):r}}}return e.runInContext=o,e}var i="function"==typeof n&&n.amd,s={function:!0,object:!0},a=s[typeof e]&&e&&!e.nodeType&&e,c=s[typeof window]&&window||this,u=a&&s[typeof t]&&t&&!t.nodeType&&"object"==typeof r&&r;if(!u||u.global!==u&&u.window!==u&&u.self!==u||(c=u),a&&!i)o(c,a);else{var h=c.JSON,p=c.JSON3,f=!1,l=o(c,c.JSON3={noConflict:function(){return f||(f=!0,c.JSON=h,c.JSON3=p,h=p=null),l}});c.JSON={parse:l.parse,stringify:l.stringify}}i&&n(function(){return l})}).call(this)}).call(e,r(12)(t),function(){return this}())},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},function(t,e){function r(t){if(t)return n(t)}function n(t){for(var e in r.prototype)t[e]=r.prototype[e];return t}t.exports=r,r.prototype.on=r.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks[t]=this._callbacks[t]||[]).push(e),this},r.prototype.once=function(t,e){function r(){n.off(t,r),e.apply(this,arguments)}var n=this;return this._callbacks=this._callbacks||{},r.fn=e,this.on(t,r),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r=this._callbacks[t];if(!r)return this;if(1==arguments.length)return delete this._callbacks[t],this;for(var n,o=0;o<r.length;o++)if(n=r[o],n===e||n.fn===e){r.splice(o,1);break}return this},r.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),r=this._callbacks[t];if(r){r=r.slice(0);for(var n=0,o=r.length;n<o;++n)r[n].apply(this,e)}return this},r.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks[t]||[]},r.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e,r){(function(t){var n=r(15),o=r(16);e.deconstructPacket=function(t){function e(t){if(!t)return t;if(o(t)){var i={_placeholder:!0,num:r.length};return r.push(t),i}if(n(t)){for(var s=new Array(t.length),a=0;a<t.length;a++)s[a]=e(t[a]);return s}if("object"==typeof t&&!(t instanceof Date)){var s={};for(var c in t)s[c]=e(t[c]);return s}return t}var r=[],i=t.data,s=t;return s.data=e(i),s.attachments=r.length,{packet:s,buffers:r}},e.reconstructPacket=function(t,e){function r(t){if(t&&t._placeholder){var o=e[t.num];return o}if(n(t)){for(var i=0;i<t.length;i++)t[i]=r(t[i]);return t}if(t&&"object"==typeof t){for(var s in t)t[s]=r(t[s]);return t}return t}return t.data=r(t.data),t.attachments=void 0,t},e.removeBlobs=function(e,r){function i(e,c,u){if(!e)return e;if(t.Blob&&e instanceof Blob||t.File&&e instanceof File){s++;var h=new FileReader;h.onload=function(){u?u[c]=this.result:a=this.result,--s||r(a)},h.readAsArrayBuffer(e)}else if(n(e))for(var p=0;p<e.length;p++)i(e[p],p,e);else if(e&&"object"==typeof e&&!o(e))for(var f in e)i(e[f],f,e)}var s=0,a=e;i(a),s||r(a)}}).call(e,function(){return this}())},function(t,e){t.exports=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)}},function(t,e){(function(e){function r(t){return e.Buffer&&e.Buffer.isBuffer(t)||e.ArrayBuffer&&t instanceof ArrayBuffer}t.exports=r}).call(e,function(){return this}())},function(t,e,r){"use strict";function n(t,e){return this instanceof n?(t&&"object"===("undefined"==typeof t?"undefined":o(t))&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.nsps={},this.subs=[],this.opts=e,this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor(e.randomizationFactor||.5),this.backoff=new l({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==e.timeout?2e4:e.timeout),this.readyState="closed",this.uri=t,this.connecting=[],this.lastPing=null,this.encoding=!1,this.packetBuffer=[],this.encoder=new c.Encoder,this.decoder=new c.Decoder,this.autoConnect=e.autoConnect!==!1,void(this.autoConnect&&this.open())):new n(t,e)}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=r(18),s=r(44),a=r(35),c=r(7),u=r(46),h=r(47),p=r(3)("socket.io-client:manager"),f=r(42),l=r(48),d=Object.prototype.hasOwnProperty;t.exports=n,n.prototype.emitAll=function(){this.emit.apply(this,arguments);for(var t in this.nsps)d.call(this.nsps,t)&&this.nsps[t].emit.apply(this.nsps[t],arguments)},n.prototype.updateSocketIds=function(){for(var t in this.nsps)d.call(this.nsps,t)&&(this.nsps[t].id=this.engine.id)},a(n.prototype),n.prototype.reconnection=function(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection},n.prototype.reconnectionAttempts=function(t){return arguments.length?(this._reconnectionAttempts=t,this):this._reconnectionAttempts},n.prototype.reconnectionDelay=function(t){return arguments.length?(this._reconnectionDelay=t,this.backoff&&this.backoff.setMin(t),this):this._reconnectionDelay},n.prototype.randomizationFactor=function(t){return arguments.length?(this._randomizationFactor=t,this.backoff&&this.backoff.setJitter(t),this):this._randomizationFactor},n.prototype.reconnectionDelayMax=function(t){return arguments.length?(this._reconnectionDelayMax=t,this.backoff&&this.backoff.setMax(t),this):this._reconnectionDelayMax},n.prototype.timeout=function(t){return arguments.length?(this._timeout=t,this):this._timeout},n.prototype.maybeReconnectOnOpen=function(){!this.reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()},n.prototype.open=n.prototype.connect=function(t,e){if(p("readyState %s",this.readyState),~this.readyState.indexOf("open"))return this;p("opening %s",this.uri),this.engine=i(this.uri,this.opts);var r=this.engine,n=this;this.readyState="opening",this.skipReconnect=!1;var o=u(r,"open",function(){n.onopen(),t&&t()}),s=u(r,"error",function(e){if(p("connect_error"),n.cleanup(),n.readyState="closed",n.emitAll("connect_error",e),t){var r=new Error("Connection error");r.data=e,t(r)}else n.maybeReconnectOnOpen()});if(!1!==this._timeout){var a=this._timeout;p("connect attempt will timeout after %d",a);var c=setTimeout(function(){p("connect attempt timed out after %d",a),o.destroy(),r.close(),r.emit("error","timeout"),n.emitAll("connect_timeout",a)},a);this.subs.push({destroy:function(){clearTimeout(c)}})}return this.subs.push(o),this.subs.push(s),this},n.prototype.onopen=function(){p("open"),this.cleanup(),this.readyState="open",this.emit("open");var t=this.engine;this.subs.push(u(t,"data",h(this,"ondata"))),this.subs.push(u(t,"ping",h(this,"onping"))),this.subs.push(u(t,"pong",h(this,"onpong"))),this.subs.push(u(t,"error",h(this,"onerror"))),this.subs.push(u(t,"close",h(this,"onclose"))),this.subs.push(u(this.decoder,"decoded",h(this,"ondecoded")))},n.prototype.onping=function(){this.lastPing=new Date,this.emitAll("ping")},n.prototype.onpong=function(){this.emitAll("pong",new Date-this.lastPing)},n.prototype.ondata=function(t){this.decoder.add(t)},n.prototype.ondecoded=function(t){this.emit("packet",t)},n.prototype.onerror=function(t){p("error",t),this.emitAll("error",t)},n.prototype.socket=function(t,e){function r(){~f(o.connecting,n)||o.connecting.push(n)}var n=this.nsps[t];if(!n){n=new s(this,t,e),this.nsps[t]=n;var o=this;n.on("connecting",r),n.on("connect",function(){n.id=o.engine.id}),this.autoConnect&&r()}return n},n.prototype.destroy=function(t){var e=f(this.connecting,t);~e&&this.connecting.splice(e,1),this.connecting.length||this.close()},n.prototype.packet=function(t){p("writing packet %j",t);var e=this;t.query&&0===t.type&&(t.nsp+="?"+t.query),e.encoding?e.packetBuffer.push(t):(e.encoding=!0,this.encoder.encode(t,function(r){for(var n=0;n<r.length;n++)e.engine.write(r[n],t.options);e.encoding=!1,e.processPacketQueue()}))},n.prototype.processPacketQueue=function(){if(this.packetBuffer.length>0&&!this.encoding){var t=this.packetBuffer.shift();this.packet(t)}},n.prototype.cleanup=function(){p("cleanup");for(var t=this.subs.length,e=0;e<t;e++){var r=this.subs.shift();r.destroy()}this.packetBuffer=[],this.encoding=!1,this.lastPing=null,this.decoder.destroy()},n.prototype.close=n.prototype.disconnect=function(){p("disconnect"),this.skipReconnect=!0,this.reconnecting=!1,"opening"===this.readyState&&this.cleanup(),this.backoff.reset(),this.readyState="closed",this.engine&&this.engine.close()},n.prototype.onclose=function(t){p("onclose"),this.cleanup(),this.backoff.reset(),this.readyState="closed",this.emit("close",t),this._reconnection&&!this.skipReconnect&&this.reconnect()},n.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var t=this;if(this.backoff.attempts>=this._reconnectionAttempts)p("reconnect failed"),this.backoff.reset(),this.emitAll("reconnect_failed"),this.reconnecting=!1;else{var e=this.backoff.duration();p("will wait %dms before reconnect attempt",e),this.reconnecting=!0;var r=setTimeout(function(){t.skipReconnect||(p("attempting reconnect"),t.emitAll("reconnect_attempt",t.backoff.attempts),t.emitAll("reconnecting",t.backoff.attempts),t.skipReconnect||t.open(function(e){e?(p("reconnect attempt error"),t.reconnecting=!1,t.reconnect(),t.emitAll("reconnect_error",e.data)):(p("reconnect success"),t.onreconnect())}))},e);this.subs.push({destroy:function(){clearTimeout(r)}})}},n.prototype.onreconnect=function(){var t=this.backoff.attempts;this.reconnecting=!1,this.backoff.reset(),this.updateSocketIds(),this.emitAll("reconnect",t)}},function(t,e,r){t.exports=r(19)},function(t,e,r){t.exports=r(20),t.exports.parser=r(27)},function(t,e,r){(function(e){function n(t,r){if(!(this instanceof n))return new n(t,r);r=r||{},t&&"object"==typeof t&&(r=t,t=null),t?(t=h(t),r.hostname=t.host,r.secure="https"===t.protocol||"wss"===t.protocol,r.port=t.port,t.query&&(r.query=t.query)):r.host&&(r.hostname=h(r.host).host),
this.secure=null!=r.secure?r.secure:e.location&&"https:"===location.protocol,r.hostname&&!r.port&&(r.port=this.secure?"443":"80"),this.agent=r.agent||!1,this.hostname=r.hostname||(e.location?location.hostname:"localhost"),this.port=r.port||(e.location&&location.port?location.port:this.secure?443:80),this.query=r.query||{},"string"==typeof this.query&&(this.query=f.decode(this.query)),this.upgrade=!1!==r.upgrade,this.path=(r.path||"/engine.io").replace(/\/$/,"")+"/",this.forceJSONP=!!r.forceJSONP,this.jsonp=!1!==r.jsonp,this.forceBase64=!!r.forceBase64,this.enablesXDR=!!r.enablesXDR,this.timestampParam=r.timestampParam||"t",this.timestampRequests=r.timestampRequests,this.transports=r.transports||["polling","websocket"],this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.policyPort=r.policyPort||843,this.rememberUpgrade=r.rememberUpgrade||!1,this.binaryType=null,this.onlyBinaryUpgrades=r.onlyBinaryUpgrades,this.perMessageDeflate=!1!==r.perMessageDeflate&&(r.perMessageDeflate||{}),!0===this.perMessageDeflate&&(this.perMessageDeflate={}),this.perMessageDeflate&&null==this.perMessageDeflate.threshold&&(this.perMessageDeflate.threshold=1024),this.pfx=r.pfx||null,this.key=r.key||null,this.passphrase=r.passphrase||null,this.cert=r.cert||null,this.ca=r.ca||null,this.ciphers=r.ciphers||null,this.rejectUnauthorized=void 0===r.rejectUnauthorized?null:r.rejectUnauthorized,this.forceNode=!!r.forceNode;var o="object"==typeof e&&e;o.global===o&&(r.extraHeaders&&Object.keys(r.extraHeaders).length>0&&(this.extraHeaders=r.extraHeaders),r.localAddress&&(this.localAddress=r.localAddress)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingIntervalTimer=null,this.pingTimeoutTimer=null,this.open()}function o(t){var e={};for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e}var i=r(21),s=r(35),a=r(3)("engine.io-client:socket"),c=r(42),u=r(27),h=r(2),p=r(43),f=r(36);t.exports=n,n.priorWebsocketSuccess=!1,s(n.prototype),n.protocol=u.protocol,n.Socket=n,n.Transport=r(26),n.transports=r(21),n.parser=r(27),n.prototype.createTransport=function(t){a('creating transport "%s"',t);var e=o(this.query);e.EIO=u.protocol,e.transport=t,this.id&&(e.sid=this.id);var r=new i[t]({agent:this.agent,hostname:this.hostname,port:this.port,secure:this.secure,path:this.path,query:e,forceJSONP:this.forceJSONP,jsonp:this.jsonp,forceBase64:this.forceBase64,enablesXDR:this.enablesXDR,timestampRequests:this.timestampRequests,timestampParam:this.timestampParam,policyPort:this.policyPort,socket:this,pfx:this.pfx,key:this.key,passphrase:this.passphrase,cert:this.cert,ca:this.ca,ciphers:this.ciphers,rejectUnauthorized:this.rejectUnauthorized,perMessageDeflate:this.perMessageDeflate,extraHeaders:this.extraHeaders,forceNode:this.forceNode,localAddress:this.localAddress});return r},n.prototype.open=function(){var t;if(this.rememberUpgrade&&n.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)t="websocket";else{if(0===this.transports.length){var e=this;return void setTimeout(function(){e.emit("error","No transports available")},0)}t=this.transports[0]}this.readyState="opening";try{t=this.createTransport(t)}catch(t){return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)},n.prototype.setTransport=function(t){a("setting transport %s",t.name);var e=this;this.transport&&(a("clearing existing transport %s",this.transport.name),this.transport.removeAllListeners()),this.transport=t,t.on("drain",function(){e.onDrain()}).on("packet",function(t){e.onPacket(t)}).on("error",function(t){e.onError(t)}).on("close",function(){e.onClose("transport close")})},n.prototype.probe=function(t){function e(){if(f.onlyBinaryUpgrades){var e=!this.supportsBinary&&f.transport.supportsBinary;p=p||e}p||(a('probe transport "%s" opened',t),h.send([{type:"ping",data:"probe"}]),h.once("packet",function(e){if(!p)if("pong"===e.type&&"probe"===e.data){if(a('probe transport "%s" pong',t),f.upgrading=!0,f.emit("upgrading",h),!h)return;n.priorWebsocketSuccess="websocket"===h.name,a('pausing current transport "%s"',f.transport.name),f.transport.pause(function(){p||"closed"!==f.readyState&&(a("changing transport and sending upgrade packet"),u(),f.setTransport(h),h.send([{type:"upgrade"}]),f.emit("upgrade",h),h=null,f.upgrading=!1,f.flush())})}else{a('probe transport "%s" failed',t);var r=new Error("probe error");r.transport=h.name,f.emit("upgradeError",r)}}))}function r(){p||(p=!0,u(),h.close(),h=null)}function o(e){var n=new Error("probe error: "+e);n.transport=h.name,r(),a('probe transport "%s" failed because of error: %s',t,e),f.emit("upgradeError",n)}function i(){o("transport closed")}function s(){o("socket closed")}function c(t){h&&t.name!==h.name&&(a('"%s" works - aborting "%s"',t.name,h.name),r())}function u(){h.removeListener("open",e),h.removeListener("error",o),h.removeListener("close",i),f.removeListener("close",s),f.removeListener("upgrading",c)}a('probing transport "%s"',t);var h=this.createTransport(t,{probe:1}),p=!1,f=this;n.priorWebsocketSuccess=!1,h.once("open",e),h.once("error",o),h.once("close",i),this.once("close",s),this.once("upgrading",c),h.open()},n.prototype.onOpen=function(){if(a("socket open"),this.readyState="open",n.priorWebsocketSuccess="websocket"===this.transport.name,this.emit("open"),this.flush(),"open"===this.readyState&&this.upgrade&&this.transport.pause){a("starting upgrade probes");for(var t=0,e=this.upgrades.length;t<e;t++)this.probe(this.upgrades[t])}},n.prototype.onPacket=function(t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(a('socket receive: type "%s", data "%s"',t.type,t.data),this.emit("packet",t),this.emit("heartbeat"),t.type){case"open":this.onHandshake(p(t.data));break;case"pong":this.setPing(),this.emit("pong");break;case"error":var e=new Error("server error");e.code=t.data,this.onError(e);break;case"message":this.emit("data",t.data),this.emit("message",t.data)}else a('packet received with socket readyState "%s"',this.readyState)},n.prototype.onHandshake=function(t){this.emit("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.onOpen(),"closed"!==this.readyState&&(this.setPing(),this.removeListener("heartbeat",this.onHeartbeat),this.on("heartbeat",this.onHeartbeat))},n.prototype.onHeartbeat=function(t){clearTimeout(this.pingTimeoutTimer);var e=this;e.pingTimeoutTimer=setTimeout(function(){"closed"!==e.readyState&&e.onClose("ping timeout")},t||e.pingInterval+e.pingTimeout)},n.prototype.setPing=function(){var t=this;clearTimeout(t.pingIntervalTimer),t.pingIntervalTimer=setTimeout(function(){a("writing ping packet - expecting pong within %sms",t.pingTimeout),t.ping(),t.onHeartbeat(t.pingTimeout)},t.pingInterval)},n.prototype.ping=function(){var t=this;this.sendPacket("ping",function(){t.emit("ping")})},n.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emit("drain"):this.flush()},n.prototype.flush=function(){"closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(a("flushing %d packets in socket",this.writeBuffer.length),this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emit("flush"))},n.prototype.write=n.prototype.send=function(t,e,r){return this.sendPacket("message",t,e,r),this},n.prototype.sendPacket=function(t,e,r,n){if("function"==typeof e&&(n=e,e=void 0),"function"==typeof r&&(n=r,r=null),"closing"!==this.readyState&&"closed"!==this.readyState){r=r||{},r.compress=!1!==r.compress;var o={type:t,data:e,options:r};this.emit("packetCreate",o),this.writeBuffer.push(o),n&&this.once("flush",n),this.flush()}},n.prototype.close=function(){function t(){n.onClose("forced close"),a("socket closing - telling transport to close"),n.transport.close()}function e(){n.removeListener("upgrade",e),n.removeListener("upgradeError",e),t()}function r(){n.once("upgrade",e),n.once("upgradeError",e)}if("opening"===this.readyState||"open"===this.readyState){this.readyState="closing";var n=this;this.writeBuffer.length?this.once("drain",function(){this.upgrading?r():t()}):this.upgrading?r():t()}return this},n.prototype.onError=function(t){a("socket error %j",t),n.priorWebsocketSuccess=!1,this.emit("error",t),this.onClose("transport error",t)},n.prototype.onClose=function(t,e){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState){a('socket close with reason: "%s"',t);var r=this;clearTimeout(this.pingIntervalTimer),clearTimeout(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),this.readyState="closed",this.id=null,this.emit("close",t,e),r.writeBuffer=[],r.prevBufferLen=0}},n.prototype.filterUpgrades=function(t){for(var e=[],r=0,n=t.length;r<n;r++)~c(this.transports,t[r])&&e.push(t[r]);return e}}).call(e,function(){return this}())},function(t,e,r){(function(t){function n(e){var r,n=!1,a=!1,c=!1!==e.jsonp;if(t.location){var u="https:"===location.protocol,h=location.port;h||(h=u?443:80),n=e.hostname!==location.hostname||h!==e.port,a=e.secure!==u}if(e.xdomain=n,e.xscheme=a,r=new o(e),"open"in r&&!e.forceJSONP)return new i(e);if(!c)throw new Error("JSONP disabled");return new s(e)}var o=r(22),i=r(24),s=r(39),a=r(40);e.polling=n,e.websocket=a}).call(e,function(){return this}())},function(t,e,r){(function(e){var n=r(23);t.exports=function(t){var r=t.xdomain,o=t.xscheme,i=t.enablesXDR;try{if("undefined"!=typeof XMLHttpRequest&&(!r||n))return new XMLHttpRequest}catch(t){}try{if("undefined"!=typeof XDomainRequest&&!o&&i)return new XDomainRequest}catch(t){}if(!r)try{return new(e[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(t){}}}).call(e,function(){return this}())},function(t,e){try{t.exports="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(e){t.exports=!1}},function(t,e,r){(function(e){function n(){}function o(t){if(c.call(this,t),this.requestTimeout=t.requestTimeout,e.location){var r="https:"===location.protocol,n=location.port;n||(n=r?443:80),this.xd=t.hostname!==e.location.hostname||n!==t.port,this.xs=t.secure!==r}else this.extraHeaders=t.extraHeaders}function i(t){this.method=t.method||"GET",this.uri=t.uri,this.xd=!!t.xd,this.xs=!!t.xs,this.async=!1!==t.async,this.data=void 0!==t.data?t.data:null,this.agent=t.agent,this.isBinary=t.isBinary,this.supportsBinary=t.supportsBinary,this.enablesXDR=t.enablesXDR,this.requestTimeout=t.requestTimeout,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.extraHeaders=t.extraHeaders,this.create()}function s(){for(var t in i.requests)i.requests.hasOwnProperty(t)&&i.requests[t].abort()}var a=r(22),c=r(25),u=r(35),h=r(37),p=r(3)("engine.io-client:polling-xhr");t.exports=o,t.exports.Request=i,h(o,c),o.prototype.supportsBinary=!0,o.prototype.request=function(t){return t=t||{},t.uri=this.uri(),t.xd=this.xd,t.xs=this.xs,t.agent=this.agent||!1,t.supportsBinary=this.supportsBinary,t.enablesXDR=this.enablesXDR,t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized,t.requestTimeout=this.requestTimeout,t.extraHeaders=this.extraHeaders,new i(t)},o.prototype.doWrite=function(t,e){var r="string"!=typeof t&&void 0!==t,n=this.request({method:"POST",data:t,isBinary:r}),o=this;n.on("success",e),n.on("error",function(t){o.onError("xhr post error",t)}),this.sendXhr=n},o.prototype.doPoll=function(){p("xhr poll");var t=this.request(),e=this;t.on("data",function(t){e.onData(t)}),t.on("error",function(t){e.onError("xhr poll error",t)}),this.pollXhr=t},u(i.prototype),i.prototype.create=function(){var t={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized;var r=this.xhr=new a(t),n=this;try{p("xhr open %s: %s",this.method,this.uri),r.open(this.method,this.uri,this.async);try{if(this.extraHeaders){r.setDisableHeaderCheck(!0);for(var o in this.extraHeaders)this.extraHeaders.hasOwnProperty(o)&&r.setRequestHeader(o,this.extraHeaders[o])}}catch(t){}if(this.supportsBinary&&(r.responseType="arraybuffer"),"POST"===this.method)try{this.isBinary?r.setRequestHeader("Content-type","application/octet-stream"):r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(t){}try{r.setRequestHeader("Accept","*/*")}catch(t){}"withCredentials"in r&&(r.withCredentials=!0),this.requestTimeout&&(r.timeout=this.requestTimeout),this.hasXDR()?(r.onload=function(){n.onLoad()},r.onerror=function(){n.onError(r.responseText)}):r.onreadystatechange=function(){4===r.readyState&&(200===r.status||1223===r.status?n.onLoad():setTimeout(function(){n.onError(r.status)},0))},p("xhr data %s",this.data),r.send(this.data)}catch(t){return void setTimeout(function(){n.onError(t)},0)}e.document&&(this.index=i.requestsCount++,i.requests[this.index]=this)},i.prototype.onSuccess=function(){this.emit("success"),this.cleanup()},i.prototype.onData=function(t){this.emit("data",t),this.onSuccess()},i.prototype.onError=function(t){this.emit("error",t),this.cleanup(!0)},i.prototype.cleanup=function(t){if("undefined"!=typeof this.xhr&&null!==this.xhr){if(this.hasXDR()?this.xhr.onload=this.xhr.onerror=n:this.xhr.onreadystatechange=n,t)try{this.xhr.abort()}catch(t){}e.document&&delete i.requests[this.index],this.xhr=null}},i.prototype.onLoad=function(){var t;try{var e;try{e=this.xhr.getResponseHeader("Content-Type").split(";")[0]}catch(t){}if("application/octet-stream"===e)t=this.xhr.response||this.xhr.responseText;else if(this.supportsBinary)try{t=String.fromCharCode.apply(null,new Uint8Array(this.xhr.response))}catch(e){for(var r=new Uint8Array(this.xhr.response),n=[],o=0,i=r.length;o<i;o++)n.push(r[o]);t=String.fromCharCode.apply(null,n)}else t=this.xhr.responseText}catch(t){this.onError(t)}null!=t&&this.onData(t)},i.prototype.hasXDR=function(){return"undefined"!=typeof e.XDomainRequest&&!this.xs&&this.enablesXDR},i.prototype.abort=function(){this.cleanup()},i.requestsCount=0,i.requests={},e.document&&(e.attachEvent?e.attachEvent("onunload",s):e.addEventListener&&e.addEventListener("beforeunload",s,!1))}).call(e,function(){return this}())},function(t,e,r){function n(t){var e=t&&t.forceBase64;h&&!e||(this.supportsBinary=!1),o.call(this,t)}var o=r(26),i=r(36),s=r(27),a=r(37),c=r(38),u=r(3)("engine.io-client:polling");t.exports=n;var h=function(){var t=r(22),e=new t({xdomain:!1});return null!=e.responseType}();a(n,o),n.prototype.name="polling",n.prototype.doOpen=function(){this.poll()},n.prototype.pause=function(t){function e(){u("paused"),r.readyState="paused",t()}var r=this;if(this.readyState="pausing",this.polling||!this.writable){var n=0;this.polling&&(u("we are currently polling - waiting to pause"),n++,this.once("pollComplete",function(){u("pre-pause polling complete"),--n||e()})),this.writable||(u("we are currently writing - waiting to pause"),n++,this.once("drain",function(){u("pre-pause writing complete"),--n||e()}))}else e()},n.prototype.poll=function(){u("polling"),this.polling=!0,this.doPoll(),this.emit("poll")},n.prototype.onData=function(t){var e=this;u("polling got data %s",t);var r=function(t,r,n){return"opening"===e.readyState&&e.onOpen(),"close"===t.type?(e.onClose(),!1):void e.onPacket(t)};s.decodePayload(t,this.socket.binaryType,r),"closed"!==this.readyState&&(this.polling=!1,this.emit("pollComplete"),"open"===this.readyState?this.poll():u('ignoring poll - transport state "%s"',this.readyState))},n.prototype.doClose=function(){function t(){u("writing close packet"),e.write([{type:"close"}])}var e=this;"open"===this.readyState?(u("transport open - closing"),t()):(u("transport not open - deferring close"),this.once("open",t))},n.prototype.write=function(t){var e=this;this.writable=!1;var r=function(){e.writable=!0,e.emit("drain")};s.encodePayload(t,this.supportsBinary,function(t){e.doWrite(t,r)})},n.prototype.uri=function(){var t=this.query||{},e=this.secure?"https":"http",r="";!1!==this.timestampRequests&&(t[this.timestampParam]=c()),this.supportsBinary||t.sid||(t.b64=1),t=i.encode(t),this.port&&("https"===e&&443!==Number(this.port)||"http"===e&&80!==Number(this.port))&&(r=":"+this.port),t.length&&(t="?"+t);var n=this.hostname.indexOf(":")!==-1;return e+"://"+(n?"["+this.hostname+"]":this.hostname)+r+this.path+t}},function(t,e,r){function n(t){this.path=t.path,this.hostname=t.hostname,this.port=t.port,this.secure=t.secure,this.query=t.query,this.timestampParam=t.timestampParam,this.timestampRequests=t.timestampRequests,this.readyState="",this.agent=t.agent||!1,this.socket=t.socket,this.enablesXDR=t.enablesXDR,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.forceNode=t.forceNode,this.extraHeaders=t.extraHeaders,this.localAddress=t.localAddress}var o=r(27),i=r(35);t.exports=n,i(n.prototype),n.prototype.onError=function(t,e){var r=new Error(t);return r.type="TransportError",r.description=e,this.emit("error",r),this},n.prototype.open=function(){return"closed"!==this.readyState&&""!==this.readyState||(this.readyState="opening",this.doOpen()),this},n.prototype.close=function(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this},n.prototype.send=function(t){if("open"!==this.readyState)throw new Error("Transport not open");this.write(t)},n.prototype.onOpen=function(){this.readyState="open",this.writable=!0,this.emit("open")},n.prototype.onData=function(t){var e=o.decodePacket(t,this.socket.binaryType);this.onPacket(e)},n.prototype.onPacket=function(t){this.emit("packet",t)},n.prototype.onClose=function(){this.readyState="closed",this.emit("close")}},function(t,e,r){(function(t){function n(t,r){var n="b"+e.packets[t.type]+t.data.data;return r(n)}function o(t,r,n){if(!r)return e.encodeBase64Packet(t,n);var o=t.data,i=new Uint8Array(o),s=new Uint8Array(1+o.byteLength);s[0]=v[t.type];for(var a=0;a<i.length;a++)s[a+1]=i[a];return n(s.buffer)}function i(t,r,n){if(!r)return e.encodeBase64Packet(t,n);var o=new FileReader;return o.onload=function(){t.data=o.result,e.encodePacket(t,r,!0,n)},o.readAsArrayBuffer(t.data)}function s(t,r,n){if(!r)return e.encodeBase64Packet(t,n);if(m)return i(t,r,n);var o=new Uint8Array(1);o[0]=v[t.type];var s=new k([o.buffer,t.data]);return n(s)}function a(t){try{t=d.decode(t)}catch(t){return!1}return t}function c(t,e,r){for(var n=new Array(t.length),o=l(t.length,r),i=function(t,r,o){e(r,function(e,r){n[t]=r,o(e,n)})},s=0;s<t.length;s++)i(s,t[s],o)}var u,h=r(28),p=r(29),f=r(30),l=r(31),d=r(32);t&&t.ArrayBuffer&&(u=r(33));var y="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),g="undefined"!=typeof navigator&&/PhantomJS/i.test(navigator.userAgent),m=y||g;e.protocol=3;var v=e.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6},b=h(v),w={type:"error",data:"parser error"},k=r(34);e.encodePacket=function(e,r,i,a){"function"==typeof r&&(a=r,r=!1),"function"==typeof i&&(a=i,i=null);var c=void 0===e.data?void 0:e.data.buffer||e.data;if(t.ArrayBuffer&&c instanceof ArrayBuffer)return o(e,r,a);if(k&&c instanceof t.Blob)return s(e,r,a);if(c&&c.base64)return n(e,a);var u=v[e.type];return void 0!==e.data&&(u+=i?d.encode(String(e.data)):String(e.data)),a(""+u)},e.encodeBase64Packet=function(r,n){var o="b"+e.packets[r.type];if(k&&r.data instanceof t.Blob){var i=new FileReader;return i.onload=function(){var t=i.result.split(",")[1];n(o+t)},i.readAsDataURL(r.data)}var s;try{s=String.fromCharCode.apply(null,new Uint8Array(r.data))}catch(t){for(var a=new Uint8Array(r.data),c=new Array(a.length),u=0;u<a.length;u++)c[u]=a[u];s=String.fromCharCode.apply(null,c)}return o+=t.btoa(s),n(o)},e.decodePacket=function(t,r,n){if(void 0===t)return w;if("string"==typeof t){if("b"==t.charAt(0))return e.decodeBase64Packet(t.substr(1),r);if(n&&(t=a(t),t===!1))return w;var o=t.charAt(0);return Number(o)==o&&b[o]?t.length>1?{type:b[o],data:t.substring(1)}:{type:b[o]}:w}var i=new Uint8Array(t),o=i[0],s=f(t,1);return k&&"blob"===r&&(s=new k([s])),{type:b[o],data:s}},e.decodeBase64Packet=function(t,e){var r=b[t.charAt(0)];if(!u)return{type:r,data:{base64:!0,data:t.substr(1)}};var n=u.decode(t.substr(1));return"blob"===e&&k&&(n=new k([n])),{type:r,data:n}},e.encodePayload=function(t,r,n){function o(t){return t.length+":"+t}function i(t,n){e.encodePacket(t,!!s&&r,!0,function(t){n(null,o(t))})}"function"==typeof r&&(n=r,r=null);var s=p(t);return r&&s?k&&!m?e.encodePayloadAsBlob(t,n):e.encodePayloadAsArrayBuffer(t,n):t.length?void c(t,i,function(t,e){return n(e.join(""))}):n("0:")},e.decodePayload=function(t,r,n){if("string"!=typeof t)return e.decodePayloadAsBinary(t,r,n);"function"==typeof r&&(n=r,r=null);var o;if(""==t)return n(w,0,1);for(var i,s,a="",c=0,u=t.length;c<u;c++){var h=t.charAt(c);if(":"!=h)a+=h;else{if(""==a||a!=(i=Number(a)))return n(w,0,1);if(s=t.substr(c+1,i),a!=s.length)return n(w,0,1);if(s.length){if(o=e.decodePacket(s,r,!0),w.type==o.type&&w.data==o.data)return n(w,0,1);var p=n(o,c+i,u);if(!1===p)return}c+=i,a=""}}return""!=a?n(w,0,1):void 0},e.encodePayloadAsArrayBuffer=function(t,r){function n(t,r){e.encodePacket(t,!0,!0,function(t){return r(null,t)})}return t.length?void c(t,n,function(t,e){var n=e.reduce(function(t,e){var r;return r="string"==typeof e?e.length:e.byteLength,t+r.toString().length+r+2},0),o=new Uint8Array(n),i=0;return e.forEach(function(t){var e="string"==typeof t,r=t;if(e){for(var n=new Uint8Array(t.length),s=0;s<t.length;s++)n[s]=t.charCodeAt(s);r=n.buffer}e?o[i++]=0:o[i++]=1;for(var a=r.byteLength.toString(),s=0;s<a.length;s++)o[i++]=parseInt(a[s]);o[i++]=255;for(var n=new Uint8Array(r),s=0;s<n.length;s++)o[i++]=n[s]}),r(o.buffer)}):r(new ArrayBuffer(0))},e.encodePayloadAsBlob=function(t,r){function n(t,r){e.encodePacket(t,!0,!0,function(t){var e=new Uint8Array(1);if(e[0]=1,"string"==typeof t){for(var n=new Uint8Array(t.length),o=0;o<t.length;o++)n[o]=t.charCodeAt(o);t=n.buffer,e[0]=0}for(var i=t instanceof ArrayBuffer?t.byteLength:t.size,s=i.toString(),a=new Uint8Array(s.length+1),o=0;o<s.length;o++)a[o]=parseInt(s[o]);if(a[s.length]=255,k){var c=new k([e.buffer,a.buffer,t]);r(null,c)}})}c(t,n,function(t,e){return r(new k(e))})},e.decodePayloadAsBinary=function(t,r,n){"function"==typeof r&&(n=r,r=null);for(var o=t,i=[],s=!1;o.byteLength>0;){for(var a=new Uint8Array(o),c=0===a[0],u="",h=1;255!=a[h];h++){if(u.length>310){s=!0;break}u+=a[h]}if(s)return n(w,0,1);o=f(o,2+u.length),u=parseInt(u);var p=f(o,0,u);if(c)try{p=String.fromCharCode.apply(null,new Uint8Array(p))}catch(t){var l=new Uint8Array(p);p="";for(var h=0;h<l.length;h++)p+=String.fromCharCode(l[h])}i.push(p),o=f(o,u)}var d=i.length;i.forEach(function(t,o){n(e.decodePacket(t,r,!0),o,d)})}}).call(e,function(){return this}())},function(t,e){t.exports=Object.keys||function(t){var e=[],r=Object.prototype.hasOwnProperty;for(var n in t)r.call(t,n)&&e.push(n);return e}},function(t,e,r){(function(e){function n(t){function r(t){if(!t)return!1;if(e.Buffer&&e.Buffer.isBuffer&&e.Buffer.isBuffer(t)||e.ArrayBuffer&&t instanceof ArrayBuffer||e.Blob&&t instanceof Blob||e.File&&t instanceof File)return!0;if(o(t)){for(var n=0;n<t.length;n++)if(r(t[n]))return!0}else if(t&&"object"==typeof t){t.toJSON&&"function"==typeof t.toJSON&&(t=t.toJSON());for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)&&r(t[i]))return!0}return!1}return r(t)}var o=r(15);t.exports=n}).call(e,function(){return this}())},function(t,e){t.exports=function(t,e,r){var n=t.byteLength;if(e=e||0,r=r||n,t.slice)return t.slice(e,r);if(e<0&&(e+=n),r<0&&(r+=n),r>n&&(r=n),e>=n||e>=r||0===n)return new ArrayBuffer(0);for(var o=new Uint8Array(t),i=new Uint8Array(r-e),s=e,a=0;s<r;s++,a++)i[a]=o[s];return i.buffer}},function(t,e){function r(t,e,r){function o(t,n){if(o.count<=0)throw new Error("after called too many times");--o.count,t?(i=!0,e(t),e=r):0!==o.count||i||e(null,n)}var i=!1;return r=r||n,o.count=t,0===t?e():o}function n(){}t.exports=r},function(t,e,r){var n;(function(t,o){!function(i){function s(t){for(var e,r,n=[],o=0,i=t.length;o<i;)e=t.charCodeAt(o++),e>=55296&&e<=56319&&o<i?(r=t.charCodeAt(o++),56320==(64512&r)?n.push(((1023&e)<<10)+(1023&r)+65536):(n.push(e),o--)):n.push(e);return n}function a(t){for(var e,r=t.length,n=-1,o="";++n<r;)e=t[n],e>65535&&(e-=65536,o+=b(e>>>10&1023|55296),e=56320|1023&e),o+=b(e);return o}function c(t,e){return b(t>>e&63|128)}function u(t){if(0==(4294967168&t))return b(t);var e="";return 0==(4294965248&t)?e=b(t>>6&31|192):0==(4294901760&t)?(e=b(t>>12&15|224),e+=c(t,6)):0==(4292870144&t)&&(e=b(t>>18&7|240),e+=c(t,12),e+=c(t,6)),e+=b(63&t|128)}function h(t){for(var e,r=s(t),n=r.length,o=-1,i="";++o<n;)e=r[o],i+=u(e);return i}function p(){if(v>=m)throw Error("Invalid byte index");var t=255&g[v];if(v++,128==(192&t))return 63&t;throw Error("Invalid continuation byte")}function f(){var t,e,r,n,o;if(v>m)throw Error("Invalid byte index");if(v==m)return!1;if(t=255&g[v],v++,0==(128&t))return t;if(192==(224&t)){var e=p();if(o=(31&t)<<6|e,o>=128)return o;throw Error("Invalid continuation byte")}if(224==(240&t)){if(e=p(),r=p(),o=(15&t)<<12|e<<6|r,o>=2048)return o;throw Error("Invalid continuation byte")}if(240==(248&t)&&(e=p(),r=p(),n=p(),o=(15&t)<<18|e<<12|r<<6|n,o>=65536&&o<=1114111))return o;throw Error("Invalid WTF-8 detected")}function l(t){g=s(t),m=g.length,v=0;for(var e,r=[];(e=f())!==!1;)r.push(e);return a(r)}var d="object"==typeof e&&e,y=("object"==typeof t&&t&&t.exports==d&&t,"object"==typeof o&&o);y.global!==y&&y.window!==y||(i=y);var g,m,v,b=String.fromCharCode,w={version:"1.0.0",encode:h,decode:l};n=function(){return w}.call(e,r,e,t),!(void 0!==n&&(t.exports=n))}(this)}).call(e,r(12)(t),function(){return this}())},function(t,e){!function(){"use strict";for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r=new Uint8Array(256),n=0;n<t.length;n++)r[t.charCodeAt(n)]=n;e.encode=function(e){var r,n=new Uint8Array(e),o=n.length,i="";for(r=0;r<o;r+=3)i+=t[n[r]>>2],i+=t[(3&n[r])<<4|n[r+1]>>4],i+=t[(15&n[r+1])<<2|n[r+2]>>6],i+=t[63&n[r+2]];return o%3===2?i=i.substring(0,i.length-1)+"=":o%3===1&&(i=i.substring(0,i.length-2)+"=="),i},e.decode=function(t){var e,n,o,i,s,a=.75*t.length,c=t.length,u=0;"="===t[t.length-1]&&(a--,"="===t[t.length-2]&&a--);var h=new ArrayBuffer(a),p=new Uint8Array(h);for(e=0;e<c;e+=4)n=r[t.charCodeAt(e)],o=r[t.charCodeAt(e+1)],i=r[t.charCodeAt(e+2)],s=r[t.charCodeAt(e+3)],p[u++]=n<<2|o>>4,p[u++]=(15&o)<<4|i>>2,p[u++]=(3&i)<<6|63&s;return h}}()},function(t,e){(function(e){function r(t){for(var e=0;e<t.length;e++){var r=t[e];if(r.buffer instanceof ArrayBuffer){var n=r.buffer;if(r.byteLength!==n.byteLength){var o=new Uint8Array(r.byteLength);o.set(new Uint8Array(n,r.byteOffset,r.byteLength)),n=o.buffer}t[e]=n}}}function n(t,e){e=e||{};var n=new i;r(t);for(var o=0;o<t.length;o++)n.append(t[o]);return e.type?n.getBlob(e.type):n.getBlob()}function o(t,e){return r(t),new Blob(t,e||{})}var i=e.BlobBuilder||e.WebKitBlobBuilder||e.MSBlobBuilder||e.MozBlobBuilder,s=function(){try{var t=new Blob(["hi"]);return 2===t.size}catch(t){return!1}}(),a=s&&function(){try{var t=new Blob([new Uint8Array([1,2])]);return 2===t.size}catch(t){return!1}}(),c=i&&i.prototype.append&&i.prototype.getBlob;t.exports=function(){return s?a?e.Blob:o:c?n:void 0}()}).call(e,function(){return this}())},function(t,e,r){function n(t){if(t)return o(t)}function o(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}t.exports=n,n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},n.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r=this._callbacks["$"+t];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var n,o=0;o<r.length;o++)if(n=r[o],n===e||n.fn===e){r.splice(o,1);break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),r=this._callbacks["$"+t];if(r){r=r.slice(0);for(var n=0,o=r.length;n<o;++n)r[n].apply(this,e)}return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e){e.encode=function(t){var e="";for(var r in t)t.hasOwnProperty(r)&&(e.length&&(e+="&"),e+=encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return e},e.decode=function(t){for(var e={},r=t.split("&"),n=0,o=r.length;n<o;n++){var i=r[n].split("=");e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return e}},function(t,e){t.exports=function(t,e){var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}},function(t,e){"use strict";function r(t){var e="";do e=s[t%a]+e,t=Math.floor(t/a);while(t>0);return e}function n(t){var e=0;for(h=0;h<t.length;h++)e=e*a+c[t.charAt(h)];return e}function o(){var t=r(+new Date);return t!==i?(u=0,i=t):t+"."+r(u++)}for(var i,s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),a=64,c={},u=0,h=0;h<a;h++)c[s[h]]=h;o.encode=r,o.decode=n,t.exports=o},function(t,e,r){(function(e){function n(){}function o(t){i.call(this,t),this.query=this.query||{},a||(e.___eio||(e.___eio=[]),a=e.___eio),this.index=a.length;var r=this;a.push(function(t){r.onData(t)}),this.query.j=this.index,e.document&&e.addEventListener&&e.addEventListener("beforeunload",function(){r.script&&(r.script.onerror=n)},!1)}var i=r(25),s=r(37);t.exports=o;var a,c=/\n/g,u=/\\n/g;s(o,i),o.prototype.supportsBinary=!1,o.prototype.doClose=function(){this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),this.form&&(this.form.parentNode.removeChild(this.form),this.form=null,this.iframe=null),i.prototype.doClose.call(this)},o.prototype.doPoll=function(){var t=this,e=document.createElement("script");this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),e.async=!0,e.src=this.uri(),e.onerror=function(e){t.onError("jsonp poll error",e)};var r=document.getElementsByTagName("script")[0];r?r.parentNode.insertBefore(e,r):(document.head||document.body).appendChild(e),this.script=e;var n="undefined"!=typeof navigator&&/gecko/i.test(navigator.userAgent);n&&setTimeout(function(){var t=document.createElement("iframe");document.body.appendChild(t),document.body.removeChild(t)},100)},o.prototype.doWrite=function(t,e){function r(){n(),e()}function n(){if(o.iframe)try{o.form.removeChild(o.iframe)}catch(t){o.onError("jsonp polling iframe removal error",t)}try{var t='<iframe src="javascript:0" name="'+o.iframeId+'">';i=document.createElement(t)}catch(t){i=document.createElement("iframe"),i.name=o.iframeId,i.src="javascript:0"}i.id=o.iframeId,o.form.appendChild(i),o.iframe=i}var o=this;if(!this.form){var i,s=document.createElement("form"),a=document.createElement("textarea"),h=this.iframeId="eio_iframe_"+this.index;s.className="socketio",s.style.position="absolute",s.style.top="-1000px",s.style.left="-1000px",s.target=h,s.method="POST",s.setAttribute("accept-charset","utf-8"),a.name="d",s.appendChild(a),document.body.appendChild(s),this.form=s,this.area=a}this.form.action=this.uri(),n(),t=t.replace(u,"\\\n"),this.area.value=t.replace(c,"\\n");try{this.form.submit()}catch(t){}this.iframe.attachEvent?this.iframe.onreadystatechange=function(){"complete"===o.iframe.readyState&&r();
}:this.iframe.onload=r}}).call(e,function(){return this}())},function(t,e,r){(function(e){function n(t){var e=t&&t.forceBase64;e&&(this.supportsBinary=!1),this.perMessageDeflate=t.perMessageDeflate,this.usingBrowserWebSocket=p&&!t.forceNode,this.usingBrowserWebSocket||(f=o),i.call(this,t)}var o,i=r(26),s=r(27),a=r(36),c=r(37),u=r(38),h=r(3)("engine.io-client:websocket"),p=e.WebSocket||e.MozWebSocket;if("undefined"==typeof window)try{o=r(41)}catch(t){}var f=p;f||"undefined"!=typeof window||(f=o),t.exports=n,c(n,i),n.prototype.name="websocket",n.prototype.supportsBinary=!0,n.prototype.doOpen=function(){if(this.check()){var t=this.uri(),e=void 0,r={agent:this.agent,perMessageDeflate:this.perMessageDeflate};r.pfx=this.pfx,r.key=this.key,r.passphrase=this.passphrase,r.cert=this.cert,r.ca=this.ca,r.ciphers=this.ciphers,r.rejectUnauthorized=this.rejectUnauthorized,this.extraHeaders&&(r.headers=this.extraHeaders),this.localAddress&&(r.localAddress=this.localAddress);try{this.ws=this.usingBrowserWebSocket?new f(t):new f(t,e,r)}catch(t){return this.emit("error",t)}void 0===this.ws.binaryType&&(this.supportsBinary=!1),this.ws.supports&&this.ws.supports.binary?(this.supportsBinary=!0,this.ws.binaryType="nodebuffer"):this.ws.binaryType="arraybuffer",this.addEventListeners()}},n.prototype.addEventListeners=function(){var t=this;this.ws.onopen=function(){t.onOpen()},this.ws.onclose=function(){t.onClose()},this.ws.onmessage=function(e){t.onData(e.data)},this.ws.onerror=function(e){t.onError("websocket error",e)}},n.prototype.write=function(t){function r(){n.emit("flush"),setTimeout(function(){n.writable=!0,n.emit("drain")},0)}var n=this;this.writable=!1;for(var o=t.length,i=0,a=o;i<a;i++)!function(t){s.encodePacket(t,n.supportsBinary,function(i){if(!n.usingBrowserWebSocket){var s={};if(t.options&&(s.compress=t.options.compress),n.perMessageDeflate){var a="string"==typeof i?e.Buffer.byteLength(i):i.length;a<n.perMessageDeflate.threshold&&(s.compress=!1)}}try{n.usingBrowserWebSocket?n.ws.send(i):n.ws.send(i,s)}catch(t){h("websocket closed before onclose event")}--o||r()})}(t[i])},n.prototype.onClose=function(){i.prototype.onClose.call(this)},n.prototype.doClose=function(){"undefined"!=typeof this.ws&&this.ws.close()},n.prototype.uri=function(){var t=this.query||{},e=this.secure?"wss":"ws",r="";this.port&&("wss"===e&&443!==Number(this.port)||"ws"===e&&80!==Number(this.port))&&(r=":"+this.port),this.timestampRequests&&(t[this.timestampParam]=u()),this.supportsBinary||(t.b64=1),t=a.encode(t),t.length&&(t="?"+t);var n=this.hostname.indexOf(":")!==-1;return e+"://"+(n?"["+this.hostname+"]":this.hostname)+r+this.path+t},n.prototype.check=function(){return!(!f||"__initialize"in f&&this.name===n.prototype.name)}}).call(e,function(){return this}())},function(t,e){},function(t,e){var r=[].indexOf;t.exports=function(t,e){if(r)return t.indexOf(e);for(var n=0;n<t.length;++n)if(t[n]===e)return n;return-1}},function(t,e){(function(e){var r=/^[\],:{}\s]*$/,n=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,o=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,i=/(?:^|:|,)(?:\s*\[)+/g,s=/^\s+/,a=/\s+$/;t.exports=function(t){return"string"==typeof t&&t?(t=t.replace(s,"").replace(a,""),e.JSON&&JSON.parse?JSON.parse(t):r.test(t.replace(n,"@").replace(o,"]").replace(i,""))?new Function("return "+t)():void 0):null}}).call(e,function(){return this}())},function(t,e,r){"use strict";function n(t,e,r){this.io=t,this.nsp=e,this.json=this,this.ids=0,this.acks={},this.receiveBuffer=[],this.sendBuffer=[],this.connected=!1,this.disconnected=!0,r&&r.query&&(this.query=r.query),this.io.autoConnect&&this.open()}var o=r(7),i=r(35),s=r(45),a=r(46),c=r(47),u=r(3)("socket.io-client:socket"),h=r(29);t.exports=e=n;var p={connect:1,connect_error:1,connect_timeout:1,connecting:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1,ping:1,pong:1},f=i.prototype.emit;i(n.prototype),n.prototype.subEvents=function(){if(!this.subs){var t=this.io;this.subs=[a(t,"open",c(this,"onopen")),a(t,"packet",c(this,"onpacket")),a(t,"close",c(this,"onclose"))]}},n.prototype.open=n.prototype.connect=function(){return this.connected?this:(this.subEvents(),this.io.open(),"open"===this.io.readyState&&this.onopen(),this.emit("connecting"),this)},n.prototype.send=function(){var t=s(arguments);return t.unshift("message"),this.emit.apply(this,t),this},n.prototype.emit=function(t){if(p.hasOwnProperty(t))return f.apply(this,arguments),this;var e=s(arguments),r=o.EVENT;h(e)&&(r=o.BINARY_EVENT);var n={type:r,data:e};return n.options={},n.options.compress=!this.flags||!1!==this.flags.compress,"function"==typeof e[e.length-1]&&(u("emitting packet with ack id %d",this.ids),this.acks[this.ids]=e.pop(),n.id=this.ids++),this.connected?this.packet(n):this.sendBuffer.push(n),delete this.flags,this},n.prototype.packet=function(t){t.nsp=this.nsp,this.io.packet(t)},n.prototype.onopen=function(){u("transport is open - connecting"),"/"!==this.nsp&&(this.query?this.packet({type:o.CONNECT,query:this.query}):this.packet({type:o.CONNECT}))},n.prototype.onclose=function(t){u("close (%s)",t),this.connected=!1,this.disconnected=!0,delete this.id,this.emit("disconnect",t)},n.prototype.onpacket=function(t){if(t.nsp===this.nsp)switch(t.type){case o.CONNECT:this.onconnect();break;case o.EVENT:this.onevent(t);break;case o.BINARY_EVENT:this.onevent(t);break;case o.ACK:this.onack(t);break;case o.BINARY_ACK:this.onack(t);break;case o.DISCONNECT:this.ondisconnect();break;case o.ERROR:this.emit("error",t.data)}},n.prototype.onevent=function(t){var e=t.data||[];u("emitting event %j",e),null!=t.id&&(u("attaching ack callback to event"),e.push(this.ack(t.id))),this.connected?f.apply(this,e):this.receiveBuffer.push(e)},n.prototype.ack=function(t){var e=this,r=!1;return function(){if(!r){r=!0;var n=s(arguments);u("sending ack %j",n);var i=h(n)?o.BINARY_ACK:o.ACK;e.packet({type:i,id:t,data:n})}}},n.prototype.onack=function(t){var e=this.acks[t.id];"function"==typeof e?(u("calling ack %s with %j",t.id,t.data),e.apply(this,t.data),delete this.acks[t.id]):u("bad ack %s",t.id)},n.prototype.onconnect=function(){this.connected=!0,this.disconnected=!1,this.emit("connect"),this.emitBuffered()},n.prototype.emitBuffered=function(){var t;for(t=0;t<this.receiveBuffer.length;t++)f.apply(this,this.receiveBuffer[t]);for(this.receiveBuffer=[],t=0;t<this.sendBuffer.length;t++)this.packet(this.sendBuffer[t]);this.sendBuffer=[]},n.prototype.ondisconnect=function(){u("server disconnect (%s)",this.nsp),this.destroy(),this.onclose("io server disconnect")},n.prototype.destroy=function(){if(this.subs){for(var t=0;t<this.subs.length;t++)this.subs[t].destroy();this.subs=null}this.io.destroy(this)},n.prototype.close=n.prototype.disconnect=function(){return this.connected&&(u("performing disconnect (%s)",this.nsp),this.packet({type:o.DISCONNECT})),this.destroy(),this.connected&&this.onclose("io client disconnect"),this},n.prototype.compress=function(t){return this.flags=this.flags||{},this.flags.compress=t,this}},function(t,e){function r(t,e){var r=[];e=e||0;for(var n=e||0;n<t.length;n++)r[n-e]=t[n];return r}t.exports=r},function(t,e){"use strict";function r(t,e,r){return t.on(e,r),{destroy:function(){t.removeListener(e,r)}}}t.exports=r},function(t,e){var r=[].slice;t.exports=function(t,e){if("string"==typeof e&&(e=t[e]),"function"!=typeof e)throw new Error("bind() requires a function");var n=r.call(arguments,2);return function(){return e.apply(t,n.concat(r.call(arguments)))}}},function(t,e){function r(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}t.exports=r,r.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),r=Math.floor(e*this.jitter*t);t=0==(1&Math.floor(10*e))?t-r:t+r}return 0|Math.min(t,this.max)},r.prototype.reset=function(){this.attempts=0},r.prototype.setMin=function(t){this.ms=t},r.prototype.setMax=function(t){this.max=t},r.prototype.setJitter=function(t){this.jitter=t}}])});
/*
    1.0.10
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
        2017-08-02
        解决ios端fixed居底input被键盘遮挡的问题
        @dom_selector: 监听focus和blur的Dom的选择器
    */
    fix_ios_fixed_bottom_input: function(dom_selector) {

        // 安卓orIOS
        // var device;
        if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
            // device = "ios";
        } else {
            return;
        }

        var footer_input = $(dom_selector);

        footer_input.focus(function() {
            setTimeout(function() {
                document.body.scrollTop = document.body.scrollHeight; //获取焦点后将浏览器内所有内容高度赋给浏览器滚动部分高度
            }, 1500);
        });
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
            } else
                setTimeout(function() {
                    set_scrollTop();
                }, perTime);
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
    高京
    2017-06-10
    客服会话

    this= {
        socket,
        loadingToast,
        iosDialog2,
        lastTime // 最后一条消息的时间的毫秒数(long)
    }
*/

define('app/chat_servicer',[
    "lib/socket.io.min",
    "lib/functions",
    "modules/footer_button_mute"
], function(
    $io,
    $func,
    $mute
) {
    var chat_servicer = {
        RECORD_COUNT: 10,
        init: function() {

            var that = this;

            that.loadingToast = $(".loadingToast");
            that.iosDialog2 = $("#iosDialog2");

            // 静音按钮的状态判断和监听
            $mute.init.apply($mute, [{
                button_mute_selector: ".cell_title .buttons .mute"
            }]);

            // 左侧会话列表的点击监听
            that.left_chatLine_click_Listener.apply(that);

            // 退出按钮点击监听
            that.quit_button_click_Listener.apply(that);

            // 发送消息按键监听
            that.textarea_keypress_Listener.apply(that);

            // 连接socket
            that.socket_connect.apply(that);

        },
        // 左侧会话列表的点击监听
        left_chatLine_click_Listener: function() {
            var that = this;

            $(".comm_chat_list_template .chat_line").unbind("click").on("click", function() {
                var chat_line = $(this); // 点击行
                var talk_list = $("ul.talk_list"); // 右侧消息列表
                var content_fixed = $(".content_fixed");
                var p_loading = $(".wrapper_right p.loading"); // 加载中提示盒

                // 判断是否为当前高亮会话
                if (chat_line.hasClass("now"))
                    return;

                // 切换高亮行
                chat_line.siblings(".now").removeClass("now");
                chat_line.removeClass("new").addClass("now");

                // 隐藏输入框
                if (!content_fixed.hasClass("hidden"))
                    content_fixed.addClass("hidden");

                // 清空右侧消息列表
                talk_list.find("li:not(.template,.more_record)").remove();

                // 还原that.lastTime
                that.lastTime = 0;

                // 显示loading
                p_loading.css("display", "block");

                // 执行ajax
                that.getRecords_ajax.apply(that, [chat_line]);
            });
        },

        // 获取更多历史消息的点击监听
        show_more_records_Listener: function() {
            var that = this;

            $(".more_record.show").unbind().on("touchstart mousedown", function(e) {
                e.preventDefault();

                that.getRecords_ajax.apply(that, [$(".comm_chat_list_template .chat_line.now"), "top"]);

            });
        },
        // 获取历史消息记录的ajax
        // @chat_line 左侧点击的li行
        // @scroll_direction: "top"/"bottom"(默认)，加载完消息后，屏幕移动到最顶还是最尾
        getRecords_ajax: function(chat_line, scroll_direction) {
            var that = this;

            var content_fixed = $(".content_fixed");
            var p_loading = $(".wrapper_right p.loading"); // 加载中提示盒

            // 获取消息记录
            $.ajax({
                url: "/servicer/getRecords",
                type: "post",
                data: {
                    cid: chat_line.attr("cid"),
                    start_count: $(".talk_list .message:not(.template)").length
                },
                success: function(result) {

                    var c = 0;

                    if (result.forEach) {
                        var sender_kind = 1;

                        result.forEach(function(r) {

                            c++;

                            switch (r.sender.toLowerCase()) {
                                case "o":
                                default:
                                    c--;
                                    sender_kind = 1;
                                    break;
                                case "s":
                                    sender_kind = 2;
                                    break;
                                case "c":
                                    sender_kind = 3;
                                    break;
                            }
                            // console.log(r.rdate);
                            that.send_message.apply(that, [sender_kind, r.content, r.cid, Base_meta.sid, r.rdate, true, scroll_direction]);

                        });
                    }

                    // 隐藏“加载中”
                    p_loading.css("display", "none");

                    // 显示消息输入框
                    if (content_fixed.hasClass("hidden"))
                        content_fixed.removeClass("hidden");

                    // 判断是否需要显示“查看更多历史消息”
                    var more_record = $("ul.talk_list .more_record");
                    if (c < that.RECORD_COUNT)
                        more_record.removeClass("show");
                    else {
                        if (!more_record.hasClass("show"))
                            more_record.addClass("show").css("cursor", "pointer");
                        more_record.prependTo("ul.talk_list");
                        that.show_more_records_Listener.apply(that);
                    }
                }
            });
        },
        // 退出按钮点击监听
        quit_button_click_Listener: function() {

            $(".wrapper_right .cell_title .quit").unbind().on("click", function() {
                $.ajax({
                    url: "/servicer/quit",
                    type: "post",
                    beforeSend: function() {
                        var loadingToast = $(".loadingToast");
                        loadingToast.find(".weui-toast__content").text("清理中");
                        loadingToast.css("display", "block");
                    },
                    success: function() {
                        location.href = "/servicer/login";
                    }
                });
            });
        },
        // 发送消息按键监听
        textarea_keypress_Listener: function() {
            var that = this;

            $(".content_fixed textarea").unbind().on("keypress", function(e) {
                var sendKind = $(".tool_icon.sendKey").attr("kind");
                var send = false;
                if (sendKind == 1 && e.charCode == 13 && !(e.altKey || e.ctrlKey || e.shiftKey)) { // Enter发送
                    send = true;
                }

                if (send) {
                    var kind = 2,
                        msg = $(this).val(),
                        cid = $(".comm_chat_list_template .chat_line.now").attr("cid"),
                        sid = Base_meta.sid;

                    if (msg.trim() === "") {
                        that.show_error_dialog.apply(that, ["请键入内容"]);
                    } else {
                        that.send_message(kind, msg.replace(/  /g, "&nbsp;&nbsp;").replace(/\n/g, "<br />"), cid, sid);
                    }

                    // 清空消息框
                    $(this).val("");

                    return false;
                }
            });
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

                // 加入room
                var changeData = {
                    kind: 2, // 记录此socket来源 1-客户端 2-客服端
                    cid: 0, // 客户id/token
                    sid: Base_meta.sid // 客服_id
                };
                that.send_join_room.apply(that, [changeData]);

                // 接收新客户连接成功推送
                that.socket_newClient_connected.apply(that);

                // 接收socket推送消息
                that.socket_send_message.apply(that);
            });
        },

        // 接收新客户连接成功推送
        socket_newClient_connected: function() {
            var that = this;

            that.socket.on("newClient_connected", function(cid) {

                // console.log(238, "here");

                if (cid === 0)
                    return;

                that.send_join_room.apply(that, [{

                    kind: 2, // 记录此socket来源 1-客户端 2-客服端
                    cid: cid, // 客户id/token
                    sid: Base_meta.sid // 客服_id
                }]);
            });
        },

        /*
            加入room
            @changeData : {
                kind: // 记录此socket来源 1-客户端 2-客服端,
                cid: // 客户id，0为全部
                sid: // 客服id，多个逗号分隔
            }
        */
        send_join_room: function(changeData) {
            // console.log(258);
            // console.dir(changeData);
            var that = this;
            that.socket.emit("join_room", changeData);
        },

        // 接收socket推送消息
        socket_send_message: function() {
            var that = this;

            that.socket.on("send_message", function(kind, msg, cid, sid, rdate) {

                // console.log(269, "here");

                // 验证消息发送者是否为当前对话框
                var chat_line = $(".chat_line[cid=" + cid + "]");

                // console.log(chat_line.length);

                if (chat_line.length === 0) { // 没找到此发送者记录，需要添加

                    // 根据cid和sid查找会话记录(sid来源于登录验证)
                    $.ajax({
                        url: "/servicer/findChatByCid",
                        type: "post",
                        data: {
                            cid: cid.toString()
                        },
                        success: function(chat) {

                            // console.dir(chat);

                            if (chat === "err") {
                                console.log("err");
                                return;
                            }

                            // 添加左侧消息者记录
                            var last_time = new Date(chat.last_timestamp);
                            var chat_template = $(".chat_line.template").clone()
                                .removeClass("template")
                                .addClass("new")
                                .attr("cid", chat.cid);
                            chat_template.find("img").attr("src", chat.client.headimg);
                            chat_template.find(".nickname").text(chat.client.nickname);
                            chat_template.find(".last_time").text($func.dateFormat_wx(last_time).toLocaleString());
                            chat_template.find(".last_content").text(chat.last_content);
                            chat_template.prependTo(".comm_chat_list_template");

                            // 监听左侧会话列表
                            that.left_chatLine_click_Listener.apply(that);
                        }
                    });

                } else { // 有此发送者记录

                    chat_line.find(".last_time").text($func.dateFormat_wx(rdate));
                    chat_line.find(".last_content").text(msg);

                    // 不在顶部，则移动至顶部
                    if (chat_line.parent().find("li").index(chat_line) !== 0)
                        chat_line.prependTo(".comm_chat_list_template");

                    // console.dir(chat_line.length);

                    if (chat_line.hasClass("now")) { // 是当前对话框，向右侧增加会话记录

                        // 更新客服端未读消息状态
                        that.update_noRead_record.apply(that, [cid]);

                        // 增加消息
                        that.send_message.apply(that, [3, msg, cid, sid, rdate]);
                    } else {
                        chat_line.addClass("new");
                    }
                }
            });
        },

        // 更新客服端未读消息状态
        update_noRead_record: function(cid) {

            $.ajax({
                url: "/servicer/update_noRead_record_servicer",
                type: "post",
                data: {
                    cid: cid
                }
            });
        },

        // 处理消息推送（包括本页自己发送的消息 和 socketio推送的消息）
        // @kind: 1-系统消息 2-我的消息 3-对方消息
        // @date: null为系统当前时间
        // @prepend: true/else。true时消息加在前面，而且不向服务器推送。读更多历史消息时，可以为true。
        // @scroll_direction: "top"/"bottom"(默认)，加载完消息后，屏幕移动到最顶还是最尾
        send_message: function(kind, msg, cid, sid, date, prepend, scroll_direction) {
            var that = this;

            prepend = prepend || false;
            scroll_direction = scroll_direction || "bottom";

            // console.log("");
            // console.log(kind, msg, cid, sid, date, prepend);

            date = date || new Date();
            // console.log(date.toString().replace(/-/ig, "/"));
            date = new Date(date.toString().replace(/-/ig, "/"));

            // console.log(date);

            // 声音提示
            if (kind == 3 && $(".cell_title .buttons .mute").hasClass("cancel") && prepend !== true) {
                document.getElementById("newMessageAudio").play();
            }

            if (kind == 2 && prepend !== true) {
                // 将消息发往服务器
                that.socket.emit("send_message", msg, "s", cid, sid, date);

                // 更新左侧记录
                var chat_line = $(".comm_chat_list_template .chat_line.now");
                chat_line.find(".last_time").text($func.dateFormat_wx(date));
                chat_line.find(".last_content").html(msg);
                if (chat_line.parent().find(".comm_chat_list_template").index(chat_line) !== 0)
                    chat_line.prependTo(".comm_chat_list_template");
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

                // console.log(!that.lastTime, date.getTime(), that.lastTime, date.getTime() - that.lastTime, 60 * 1000);

                // 时间差大于1分钟
                if (!that.lastTime || date.getTime() - that.lastTime >= 60 * 1000) {
                    // console.log(date);
                    that.send_message.apply(that, [1, $func.dateFormat_wx(date)]);
                }

                that.lastTime = date.getTime();

            }

            // 装载内容
            li.find("p").html("<span class=\"arrow\"></span>" + msg);

            // 装载昵称和头像
            if (kind == 2) {
                li.find("img").attr("src", Base_meta.headimg);
            } else if (kind == 3) {
                li.find(".name").text($(".comm_chat_list_template .chat_line.now .nickname").text());
                li.find("img").attr("src", $(".comm_chat_list_template .chat_line.now img").attr("src"));
            }

            // 装载li
            li.removeClass("template");

            if (prepend === true)
                li.prependTo("ul.talk_list");
            else
                li.appendTo("ul.talk_list");

            // 消息窗口向上滚动
            var ul = li.parents(".talk_list");
            if (scroll_direction == "top")
                ul.scrollTop(0);
            else {
                var ul_height_px = ul.height();
                var ul_scrollHeight = ul[0].scrollHeight - ul.css("padding-bottom").replace("px", "");
                if (ul_scrollHeight > ul_height_px) {
                    ul.scrollTop(ul_scrollHeight - ul_height_px);
                }
            }
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
        }
    };

    return chat_servicer;
});
define('app',["lib/jquery.min"], function() {

    var page_name = document.getElementById("script_page").getAttribute("page");
    switch (page_name) {

        case "chat_mp_login": // pc端客服管理平台 - 登录页
            require(["app/chat_mp_login"], function($obj) {
                $obj.init();
            });
            break;

        case "chat_mp_index": // pc端客服管理平台 - 主管理页
            require(["app/chat_mp_index"], function($obj) {
                $obj.init();
            });
            break;

        case "chat_servicer": // pc端客服会话页
            require(["app/chat_servicer"], function($obj) {
                $obj.init();
            });
            break;
    }
});

requirejs.config({
    // baseUrl: '/widget',
    // paths: {
    //     "test": "app/test"
    // },
    //     shim: {
    //         "test": {
    //             exports: "test"
    //         }
    //     }
});

require(["app"]);

define("main", function(){});

