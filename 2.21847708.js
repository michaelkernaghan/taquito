/*! For license information please see 2.21847708.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{149:function(e,t){var a,n,r=e.exports={};function c(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function o(e){if(a===setTimeout)return setTimeout(e,0);if((a===c||!a)&&setTimeout)return a=setTimeout,setTimeout(e,0);try{return a(e,0)}catch(t){try{return a.call(null,e,0)}catch(t){return a.call(this,e,0)}}}!function(){try{a="function"==typeof setTimeout?setTimeout:c}catch(e){a=c}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var l,s=[],u=!1,d=-1;function h(){u&&l&&(u=!1,l.length?s=l.concat(s):d=-1,s.length&&f())}function f(){if(!u){var e=o(h);u=!0;for(var t=s.length;t;){for(l=s,s=[];++d<t;)l&&l[d].run();d=-1,t=s.length}l=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function p(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)t[a-1]=arguments[a];s.push(new m(e,t)),1!==s.length||u||o(f)},m.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=p,r.addListener=p,r.once=p,r.off=p,r.removeListener=p,r.removeAllListeners=p,r.emit=p,r.prependListener=p,r.prependOnceListener=p,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},151:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var i=r.apply(null,n);i&&e.push(i)}else if("object"===c)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},172:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(165),i=a(150),o=a(156),l=a(1),s=a(9),u=a(157),d=function(){return null},h=a(183),f=a.n(h),m=a(151),p=a.n(m),v=a(121),g=a.n(v),b=function(){return r.a.createElement("span",{className:p()(g.a.toggle,g.a.moon)})},k=function(){return r.a.createElement("span",{className:p()(g.a.toggle,g.a.sun)})},y=function(e){var t=Object(i.a)().isClient;return r.a.createElement(f.a,Object(l.a)({disabled:!t,icons:{checked:r.a.createElement(b,null),unchecked:r.a.createElement(k,null)}},e))},E=function(){var e=n.useState("undefined"!=typeof document?document.querySelector("html").getAttribute("data-theme"):""),t=e[0],a=e[1];return n.useEffect((function(){try{a(localStorage.getItem("theme"))}catch(e){console.error(e)}}),[a]),[t,n.useCallback((function(e){try{localStorage.setItem("theme",e),a(e)}catch(t){console.error(t)}}),[a])]},_=a(122),T=a.n(_);function w(e){var t=e.to,a=e.href,n=e.label,c=(e.position,Object(s.a)(e,["to","href","label","position"])),i=Object(o.a)(t);return r.a.createElement(u.a,Object(l.a)({className:"navbar__item navbar__link"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{activeClassName:"navbar__link--active",to:i},c),n)}var O=function(){var e=Object(i.a)(),t=Object(n.useState)(!1),a=t[0],s=t[1],h=Object(n.useState)(!1),f=h[0],m=h[1],v=E(),g=v[0],b=v[1],k=e.siteConfig,_=void 0===k?{}:k,O=_.baseUrl,C=_.themeConfig,j=void 0===C?{}:C,N=j.navbar,I=void 0===N?{}:N,x=j.disableDarkMode,M=void 0!==x&&x,S=I.title,F=I.logo,P=void 0===F?{}:F,L=I.links,X=void 0===L?[]:L,B=Object(n.useCallback)((function(){s(!0)}),[s]),A=Object(n.useCallback)((function(){s(!1)}),[s]),D=Object(n.useCallback)((function(e){return b(e.target.checked?"dark":"")}),[b]),R=Object(o.a)(P.src);return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en","data-theme":g})),r.a.createElement("nav",{className:p()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":a})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:B,onKeyDown:B},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(u.a,{className:"navbar__brand",to:O},null!=P&&r.a.createElement("img",{className:"navbar__logo",src:R,alt:P.alt}),null!=S&&r.a.createElement("strong",{className:f?T.a.hideLogoText:""},S)),X.filter((function(e){return"right"!==e.position})).map((function(e,t){return r.a.createElement(w,Object(l.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},X.filter((function(e){return"right"===e.position})).map((function(e,t){return r.a.createElement(w,Object(l.a)({},e,{key:t}))})),!M&&r.a.createElement(y,{className:T.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:"dark"===g,onChange:D}),r.a.createElement(d,{handleSearchBarToggle:m,isSearchBarExpanded:f}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:function(){s(!1)}}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(u.a,{className:"navbar__brand",onClick:A,to:O},null!=P&&r.a.createElement("img",{className:"navbar__logo",src:R,alt:P.alt}),null!=S&&r.a.createElement("strong",null,S)),!M&&a&&r.a.createElement(y,{"aria-label":"Dark mode toggle in sidebar",checked:"dark"===g,onChange:D})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},X.map((function(e,t){return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(w,Object(l.a)({className:"menu__link"},e,{onClick:A})))}))))))))},C=a(173);a(123);t.a=function(e){var t=Object(i.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,l=a.tagline,s=a.title,u=a.themeConfig.image,d=a.url,h=e.children,f=e.title,m=e.noFooter,p=e.description,v=e.image,g=e.keywords,b=e.permalink,k=e.version,y=f||s+" \xb7 "+l,E=v||u,_=d+Object(o.a)(E),T=Object(o.a)(n);return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),y&&r.a.createElement("title",null,y),y&&r.a.createElement("meta",{property:"og:title",content:y}),n&&r.a.createElement("link",{rel:"shortcut icon",href:T}),p&&r.a.createElement("meta",{name:"description",content:p}),p&&r.a.createElement("meta",{property:"og:description",content:p}),k&&r.a.createElement("meta",{name:"docsearch:version",content:k}),g&&g.length&&r.a.createElement("meta",{name:"keywords",content:g.join(",")}),E&&r.a.createElement("meta",{property:"og:image",content:_}),E&&r.a.createElement("meta",{property:"twitter:image",content:_}),E&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+y}),b&&r.a.createElement("meta",{property:"og:url",content:d+b}),r.a.createElement("meta",{name:"twitter:card",content:"summary"})),r.a.createElement(O,null),r.a.createElement("div",{className:"main-wrapper"},h),!m&&r.a.createElement(C.a,null))}},183:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),i=h(c),o=h(a(151)),l=h(a(11)),s=h(a(184)),u=h(a(185)),d=a(186);function h(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,o.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return i.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},i.default.createElement("div",{className:"react-toggle-track"},i.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),i.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),i.default.createElement("div",{className:"react-toggle-thumb"}),i.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=f,f.displayName="Toggle",f.defaultProps={icons:{checked:i.default.createElement(s.default,null),unchecked:i.default.createElement(u.default,null)}},f.propTypes={checked:l.default.bool,disabled:l.default.bool,defaultChecked:l.default.bool,onChange:l.default.func,onFocus:l.default.func,onBlur:l.default.func,className:l.default.string,name:l.default.string,value:l.default.string,id:l.default.string,"aria-labelledby":l.default.string,"aria-label":l.default.string,icons:l.default.oneOfType([l.default.bool,l.default.shape({checked:l.default.node,unchecked:l.default.node})])}},184:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},185:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},186:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},189:function(e,t,a){(function(e){var n=void 0!==e&&e||"undefined"!=typeof self&&self||window,r=Function.prototype.apply;function c(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new c(r.call(setTimeout,n,arguments),clearTimeout)},t.setInterval=function(){return new c(r.call(setInterval,n,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},c.prototype.unref=c.prototype.ref=function(){},c.prototype.close=function(){this._clearFn.call(n,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},a(294),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,a(68))},294:function(e,t,a){(function(e,t){!function(e,a){"use strict";if(!e.setImmediate){var n,r,c,i,o,l=1,s={},u=!1,d=e.document,h=Object.getPrototypeOf&&Object.getPrototypeOf(e);h=h&&h.setTimeout?h:e,"[object process]"==={}.toString.call(e.process)?n=function(e){t.nextTick((function(){m(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,a=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=a,t}}()?e.MessageChannel?((c=new MessageChannel).port1.onmessage=function(e){m(e.data)},n=function(e){c.port2.postMessage(e)}):d&&"onreadystatechange"in d.createElement("script")?(r=d.documentElement,n=function(e){var t=d.createElement("script");t.onreadystatechange=function(){m(e),t.onreadystatechange=null,r.removeChild(t),t=null},r.appendChild(t)}):n=function(e){setTimeout(m,0,e)}:(i="setImmediate$"+Math.random()+"$",o=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(i)&&m(+t.data.slice(i.length))},e.addEventListener?e.addEventListener("message",o,!1):e.attachEvent("onmessage",o),n=function(t){e.postMessage(i+t,"*")}),h.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),a=0;a<t.length;a++)t[a]=arguments[a+1];var r={callback:e,args:t};return s[l]=r,n(l),l++},h.clearImmediate=f}function f(e){delete s[e]}function m(e){if(u)setTimeout(m,0,e);else{var t=s[e];if(t){u=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(a,n)}}(t)}finally{f(e),u=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,a(68),a(149))}}]);