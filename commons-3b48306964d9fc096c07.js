(self.webpackChunk_lazytechwork_iisdf=self.webpackChunk_lazytechwork_iisdf||[]).push([[351],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var u,c,s,l;if(Array.isArray(e)){if((u=e.length)!=a.length)return!1;for(c=u;0!=c--;)if(!o(e[c],a[c]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;for(l=e.entries();!(c=l.next()).done;)if(!o(c.value[1],a.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((u=e.length)!=a.length)return!1;for(c=u;0!=c--;)if(e[c]!==a[c])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((u=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(c=u;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,s[c]))return!1;if(t&&e instanceof Element)return!1;for(c=u;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!e.$$typeof)&&!o(e[s[c]],a[s[c]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,i=n(7294),o=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function l(){c=e(s.map((function(e){return e.props}))),f.canUseDOM?t(c):n&&(c=n(c))}var f=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return c},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var a=i.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return o.createElement(r,this.props)},i}(i.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",u),f}}},6170:function(e,t,n){"use strict";n.d(t,{Z:function(){return me}});var r,i,o,a,u=n(7294),c=n(5697),s=n.n(c),l=n(4839),f=n.n(l),M=n(2993),y=n.n(M),d=n(6494),L=n.n(d),p="bodyAttributes",N="htmlAttributes",m="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},j=(Object.keys(w).map((function(e){return w[e]})),"charset"),T="cssText",h="href",g="http-equiv",E="innerHTML",x="itemprop",b="name",C="property",v="rel",S="src",D="target",z={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},O="defaultTitle",A="defer",I="encodeSpecialCharacters",k="onChangeClientState",Y="titleTemplate",P=Object.keys(z).reduce((function(e,t){return e[z[t]]=t,e}),{}),U=[w.NOSCRIPT,w.SCRIPT,w.STYLE],Q="data-react-helmet",R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},B=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Z=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},G=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},V=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},_=function(e){var t=K(e,w.TITLE),n=K(e,Y);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=K(e,O);return t||r||void 0},F=function(e){return K(e,k)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return W({},e,t)}),{})},X=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},q=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+R(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var i={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),a=0;a<o.length;a++){var u=o[a],c=u.toLowerCase();-1===t.indexOf(c)||n===v&&"canonical"===e[n].toLowerCase()||c===v&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(u)||u!==E&&u!==T&&u!==x||(n=u)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][s]&&(i[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var u=o[a],c=L()({},r[u],i[u]);r[u]=c}return e}),[]).reverse()},K=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:n.g.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,M=e.titleAttributes;ce(w.BODY,r),ce(w.HTML,i),ue(f,M);var y={baseTag:se(w.BASE,n),linkTags:se(w.LINK,o),metaTags:se(w.META,a),noscriptTags:se(w.NOSCRIPT,u),scriptTags:se(w.SCRIPT,s),styleTags:se(w.STYLE,l)},d={},L={};Object.keys(y).forEach((function(e){var t=y[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(L[e]=y[e].oldTags)})),t&&t(),c(e,d,L)},ae=function(e){return Array.isArray(e)?e.join(""):e},ue=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),ce(w.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(Q),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(t),u=0;u<a.length;u++){var c=a[u],s=t[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===i.indexOf(c)&&i.push(c);var l=o.indexOf(c);-1!==l&&o.splice(l,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);i.length===o.length?n.removeAttribute(Q):n.getAttribute(Q)!==a.join(",")&&n.setAttribute(Q,a.join(","))}},se=function(e,t){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===E)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(Q,"true"),i.some((function(e,t){return a=t,n.isEqualNode(e)}))?i.splice(a,1):o.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:o}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[z[n]||n]=e[n],t}),t)},Me=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[Q]=!0,i=fe(n,r),[u.createElement(w.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=le(n),o=ae(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+V(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+V(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case p:case N:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[Q]=!0,r);return Object.keys(t).forEach((function(e){var n=z[e]||e;if(n===E||n===T){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),u.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===E||e===T)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+V(r[t],n)+'"';return e?e+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===U.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},ye=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,M=e.titleAttributes;return{base:Me(w.BASE,t,r),bodyAttributes:Me(p,n,r),htmlAttributes:Me(N,i,r),link:Me(w.LINK,o,r),meta:Me(w.META,a,r),noscript:Me(w.NOSCRIPT,u,r),script:Me(w.SCRIPT,c,r),style:Me(w.STYLE,s,r),title:Me(w.TITLE,{title:f,titleAttributes:M},r)}},de=f()((function(e){return{baseTag:X([h,D],e),bodyAttributes:J(p,e),defer:K(e,A),encode:K(e,I),htmlAttributes:J(N,e),linkTags:q(w.LINK,[v,h],e),metaTags:q(w.META,[b,j,g,C,x],e),noscriptTags:q(w.NOSCRIPT,[E],e),onChangeClientState:F(e),scriptTags:q(w.SCRIPT,[S,E],e),styleTags:q(w.STYLE,[T],e),title:_(e),titleAttributes:J(m,e)}}),(function(e){ie&&ne(ie),e.defer?ie=te((function(){oe(e,(function(){ie=null}))})):(oe(e),ie=null)}),ye)((function(){return null})),Le=(i=de,a=o=function(e){function t(){return H(this,t),G(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!y()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return W({},r,((t={})[n.type]=[].concat(r[n.type]||[],[W({},i,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,o=e.newChildProps,a=e.nestedChildren;switch(r.type){case w.TITLE:return W({},i,((t={})[r.type]=a,t.titleAttributes=W({},o),t));case w.BODY:return W({},i,{bodyAttributes:W({},o)});case w.HTML:return W({},i,{htmlAttributes:W({},o)})}return W({},i,((n={})[r.type]=W({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=W({},t);return Object.keys(e).forEach((function(t){var r;n=W({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return u.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)}(Z(i,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Z(e,["children"]),r=W({},n);return t&&(r=this.mapChildrenToProps(t,r)),u.createElement(i,r)},B(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(u.Component),o.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=i.peek,o.rewind=function(){var e=i.rewind();return e||(e=ye({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);Le.renderStatic=Le.rewind;var pe=Le,Ne=n(1597),me=function(e){var t=e.children,n=e.title,r=u.useRef();return(0,u.useEffect)((function(){var e,t=document.documentElement,n=document.body,r="scrollTop",i="scrollHeight",o=document.querySelector("#progress");window.scrollY,document.getElementById("header");document.addEventListener("scroll",(function(){e=(t[r]||n[r])/((t[i]||n[i])-t.clientHeight)*100,o.style.setProperty("--scroll",e+"%"),window.scrollY})),document.getElementById("nav-toggle").onclick=function(){document.getElementById("nav-content").classList.toggle("hidden")}}),[]),u.createElement("div",{className:"w-screen min-h-screen flex flex-col"},u.createElement(pe,null,u.createElement("html",{lang:"ru"}),u.createElement("title",null,null!=n?n:"ФРИИС"),u.createElement("body",{className:"bg-white font-sans leading-normal tracking-normal"})),u.createElement("nav",{id:"header",className:"fixed top-0 z-10 w-full bg-white",ref:r},u.createElement("div",{id:"progress",className:"top-0 z-20 h-1",style:{background:"linear-gradient(to right, var(--color-brand) var(--scroll), transparent 0)"}}),u.createElement("div",{className:"mx-auto mt-0 flex w-full flex-wrap items-baseline justify-between py-3 md:max-w-4xl"},u.createElement("div",{className:"mx-auto flex items-center justify-between gap-4"},u.createElement("div",{className:"pl-4 mb-1"},u.createElement(Ne.Link,{className:"block text-xl font-extrabold text-gray-900 no-underline hover:no-underline",to:"/"},u.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MC4zMiAxMS4zNCI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzBhODVlZDtmaWxsLXJ1bGU6ZXZlbm9kZDt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImEiIGQ9Ik0wLC4wN2MxLjQ2LDEuMTYsMS44NiwxLDMuNTYsMi44NXMyLjUsNCw0Ljg4LDUuNzhjLTEtLjIyLTEuMy0uNzktMS44OS0xLjE0YTcuMzEsNy4zMSwwLDAsMS0yLjcsMy41NmMuODQuNTksNC4zMi0uNzgsNS4zLTEuNDRzMi4xNC0uMjgsMy4zNi0xLjE2YzIuMjYtMS42MiwxLTMuMjIsMy40MS0zLjQyQTgsOCwwLDAsMCwxNCwzLjg1YzEuNTEtMiwzLjQyLTIuNjEsNS4xNC0zLjc3LTMtLjIzLTYuMTcuNC03Ljg4LDItMiwxLjg2LS41NCwzLDAsMy4xLDEuMTQuMiwxLjg0LTEuNzgsMy43LS4zOC0xLjE2LDEtLjY5LjY3LTEuMzEsMS45NEMxMiwxMCwxMC40Miw1LjM2LDkuMjQsMy43Miw3LjIyLjg5LDMuNjUtLjMzLDAsLjA3WiIvPjxwYXRoIGQ9Ik0yMi45MSwxMS4ydi0uNzdjLTIuMzMtLjItMy43MS0xLjI5LTMuNzEtMy4wNnMxLjM4LTIuODYsMy43MS0zLjA3VjMuNTJoMS42M1Y0LjNjMi4zMy4yMSwzLjcxLDEuMjksMy43MSwzLjA3cy0xLjM4LDIuODYtMy43MSwzLjA2di43N1ptMC0yLjIzVjUuNzdjLTEuMzMuMTYtMiwuNzMtMiwxLjZTMjEuNTgsOC44MSwyMi45MSw5Wm0xLjYzLTMuMlY5YzEuMzMtLjE1LDItLjczLDItMS42UzI1Ljg3LDUuOTMsMjQuNTQsNS43N1oiLz48cGF0aCBkPSJNMjkuNDEsMTEuMlYzLjUySDMzQTIuNCwyLjQsMCwwLDEsMzUuNTgsNiwyLjQsMi40LDAsMCwxLDMzLDguNDdoLTJWMTEuMlpNMzMuOTEsNmExLDEsMCwwLDAtMS4xMi0xSDMxLjA1VjdoMS43NEExLDEsMCwwLDAsMzMuOTEsNloiLz48cGF0aCBkPSJNMzYuNiwxMS4yVjMuNTJoMS42M3Y1bDMuNTYtNWgxLjY4VjExLjJINDEuODRWNi4wNUwzOC4xOCwxMS4yWiIvPjxwYXRoIGQ9Ik00NSwxMS4yVjMuNTJoMS42NHY1bDMuNTUtNWgxLjY5VjExLjJINTAuMjNWNi4wNUw0Ni41NywxMS4yWiIvPjxwYXRoIGQ9Ik01Myw3LjM3YTMuOSwzLjksMCwwLDEsNC4wOC00LDMuNTMsMy41MywwLDAsMSwzLjIyLDEuODhMNTguOTEsNkEyLjA3LDIuMDcsMCwwLDAsNTcuMSw0Ljg1YTIuMzksMi4zOSwwLDAsMC0yLjQsMi41MiwyLjM5LDIuMzksMCwwLDAsMi40LDIuNTIsMi4wNiwyLjA2LDAsMCwwLDEuODEtMS4xMmwxLjQxLjY4YTMuNTQsMy41NCwwLDAsMS0zLjIyLDEuODlBMy45LDMuOSwwLDAsMSw1Myw3LjM3WiIvPjwvc3ZnPg==",alt:"ФРИИС",className:"inline-block w-full",style:{maxWidth:"12rem"}}))),u.createElement("div",{className:"block pr-4 lg:hidden"},u.createElement("button",{id:"nav-toggle",className:"flex appearance-none items-center rounded border border-gray-600 px-3 py-2 text-gray-500 hover:border-green-500 hover:text-gray-900 focus:outline-none"},u.createElement("svg",{className:"h-3 w-3 fill-current",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},u.createElement("title",null,"Меню"),u.createElement("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}))))),u.createElement("div",{className:"z-20 mt-2 hidden w-full flex-grow bg-white lg:mt-0 lg:block lg:flex lg:w-auto lg:items-center",id:"nav-content"},u.createElement("ul",{className:"list-reset flex-1 items-center justify-end lg:flex"},u.createElement("li",{className:"mr-3"},u.createElement(Ne.Link,{className:"hover:text-underline inline-block px-4 text-gray-600 no-underline hover:text-gray-900",to:"/"},"Главная")),u.createElement("li",{className:"mr-3"},u.createElement(Ne.Link,{className:"hover:text-underline inline-block px-4 text-gray-600 no-underline hover:text-gray-900",to:"/team"},"Команда")),u.createElement("li",{className:"mr-3"},u.createElement(Ne.Link,{className:"hover:text-underline inline-block px-4 text-gray-600 no-underline hover:text-gray-900",to:"/jobs"},"Вакансии")),u.createElement("li",{className:"mr-3"},u.createElement(Ne.Link,{className:"hover:text-underline inline-block px-4 text-gray-600 no-underline hover:text-gray-900",to:"/projects"},"Проекты")),u.createElement("li",{className:"mr-3"},u.createElement("a",{className:"hover:text-underline inline-block px-4 text-gray-600 no-underline hover:text-gray-900",href:"//vk.com/iisdf",rel:"noreferrer",target:"_blank"},"ВКонтакте")))))),u.createElement("div",{className:"container mx-auto mb-12 w-full px-4 md:max-w-3xl lg:px-0 grow",style:{marginTop:r.current?r.current.clientHeight+32:106}},t),u.createElement("footer",{className:"border-t border-gray-400 bg-gray-100 shadow"},u.createElement("div",{className:"container mx-auto flex max-w-4xl py-8 px-4"},u.createElement("div",{className:"mx-auto flex flex-col md:flex-row w-full gap-8 items-center justify-center"},u.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTcuMyA3NS45NyI+PGRlZnM+PHN0eWxlPi5hLC5ie2ZpbGw6I2IzYjNiMzt9LmF7ZmlsbC1ydWxlOmV2ZW5vZGQ7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJhIiBkPSJNMTkuNjUuM2M2LDQuNjksNy41Niw0LjExLDE0LjUxLDExLjU5QzQxLjQ3LDE5Ljc2LDQ0LjM2LDI4LjA4LDU0LDM1LjQ1Yy00LS44OS01LjI2LTMuMjEtNy42OS00LjY1LTEuNzcsNS41MS03LjM4LDEyLjgzLTExLDE0LjVDMzguNzYsNDcuNzEsNTMsNDIuMTMsNTcsMzkuNDZjNC4zLTIuODcsOC43LTEuMTQsMTMuNjktNC43Miw5LjIyLTYuNjMsNC0xMy4xMywxMy45LTE0LTQuNzMtNC4zMy02LjE2LTMuNzEtNy44Ni01LjA4QzgyLjg3LDcuNDYsOTAuNjMsNS4wNyw5Ny42NS4zNGMtMTIuMDktMS0yNS4xNCwxLjYyLTMyLjEzLDhDNTcuMjIsMTYsNjMuMzUsMjAuNjcsNjUuMzEsMjFjNC42NS44NCw3LjUzLTcuMjYsMTUuMS0xLjU0LTQuNzEsNC4xNy0yLjgxLDIuNzQtNS4zNCw3LjktNi41MywxMy4zMy0xMy01LjUyLTE3Ljc2LTEyLjJDNDkuMDUsMy42NSwzNC41Mi0xLjMzLDE5LjY1LjNaIi8+PHBhdGggY2xhc3M9ImIiIGQ9Ik0xMC41OCw3NS41OHYtMi4yQzMuOTQsNzIuODIsMCw2OS43LDAsNjQuNjRzMy45NC04LjE1LDEwLjU4LTguNzRWNTMuNjdoNC42NlY1NS45YzYuNjQuNTksMTAuNTgsMy42OCwxMC41OCw4Ljc0cy0zLjk0LDguMTgtMTAuNTgsOC43NHYyLjJabTAtNi4zN1Y2MC4wN2MtMy43OC40Ni01Ljc4LDIuMTEtNS43OCw0LjU3UzYuOCw2OC43NSwxMC41OCw2OS4yMVptNC42Ni05LjE0djkuMTRjMy43OC0uNDMsNS44Mi0yLjA3LDUuODItNC41N1MxOSw2MC41MywxNS4yNCw2MC4wN1oiLz48cGF0aCBjbGFzcz0iYiIgZD0iTTI5LjE0LDc1LjU4VjUzLjY3SDM5LjM4YzQuNzcsMCw3LjM2LDMuMjIsNy4zNiw3LjA2cy0yLjYyLDcuMDYtNy4zNiw3LjA2SDMzLjh2Ny43OVpNNDIsNjAuNzNhMi45NCwyLjk0LDAsMCwwLTMuMjItM2gtNXY1LjkyaDVBMywzLDAsMCwwLDQyLDYwLjczWiIvPjxwYXRoIGNsYXNzPSJiIiBkPSJNNDkuNjMsNzUuNThWNTMuNjdINTQuM1Y2Ny44M0w2NC40NSw1My42N2g0Ljc5Vjc1LjU4SDY0LjU4VjYwLjlMNTQuMTMsNzUuNThaIi8+PHBhdGggY2xhc3M9ImIiIGQ9Ik03My41OCw3NS41OFY1My42N2g0LjY2VjY3LjgzTDg4LjM5LDUzLjY3aDQuOFY3NS41OEg4OC41MlY2MC45TDc4LjA4LDc1LjU4WiIvPjxwYXRoIGNsYXNzPSJiIiBkPSJNOTYuNDcsNjQuNjRjMC02Ljc0LDUuMDktMTEuMzMsMTEuNjYtMTEuMzNhMTAsMTAsMCwwLDEsOS4xNyw1LjM1bC00LDJhNiw2LDAsMCwwLTUuMTYtMy4xOWMtNCwwLTYuODYsMy4wNi02Ljg2LDcuMnMyLjg5LDcuMTksNi44Niw3LjE5YTUuODgsNS44OCwwLDAsMCw1LjE2LTMuMThsNCwxLjk0QTEwLjExLDEwLjExLDAsMCwxLDEwOC4xMyw3NkMxMDEuNTYsNzYsOTYuNDcsNzEuMzcsOTYuNDcsNjQuNjRaIi8+PC9zdmc+",alt:"ФРИИС",className:"w-full",style:{maxWidth:"8rem"}}),u.createElement("p",{className:"text-sm text-gray-600 text-center md:text-left"},"ООО «Фонд развития информационных и интеллектуальных систем» ",u.createElement("br",null),"Санкт-Петербург, Россия ",u.createElement("br",null)," ",u.createElement("br",null),"Фонд основан 17 октября 2016 года Иваном Петровым. ",u.createElement("br",null),"© 2021, ФРИИС")))))}}}]);
//# sourceMappingURL=commons-3b48306964d9fc096c07.js.map