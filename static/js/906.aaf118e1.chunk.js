"use strict";(self.webpackChunkreact_homework_hw05_movies=self.webpackChunkreact_homework_hw05_movies||[]).push([[906],{1687:function(e,t,n){n.d(t,{IQ:function(){return d},Jh:function(){return f},Mc:function(){return u},eS:function(){return l},hR:function(){return c}});var r=n(5861),o=n(7757),a=n.n(o),i=n(1243),s="63646d6cb2d06c3444ba8e63d051cd70";i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/trending/all/day?api_key=".concat(s,"&page=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={params:{api_key:s}},e.next=3,(0,i.Z)("/movie/".concat(t),n);case 3:return r=e.sent,o=r.data,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/search/movie?api_key=".concat(s,"&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},7563:function(e,t,n){var r=n(7689),o=n(1087),a=n(184);t.Z=function(e){var t=e.items,n=(0,r.TH)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("ul",{children:t.map((function(e,t){var r,i;return(0,a.jsx)("li",{children:(0,a.jsx)(o.rU,{to:"/movies/".concat(e.id),state:{from:n},children:null!==(r=null!==(i=e.title)&&void 0!==i?i:e.name)&&void 0!==r?r:e.original_title})},t)}))})})}},5906:function(e,t,n){n.r(t),n.d(t,{default:function(){return ie}});var r=n(5861),o=n(9439),a=n(7757),i=n.n(a),s=n(2791),c=n(1087);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=n(3433);function m(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=m(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var v=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=m(e))&&(r&&(r+=" "),r+=t);return r},g=["theme","type"],h=["delay","staleId"],y=function(e){return"number"==typeof e&&!isNaN(e)},E=function(e){return"string"==typeof e},b=function(e){return"function"==typeof e},T=function(e){return E(e)||b(e)?e:null},C=function(e){return(0,s.isValidElement)(e)||E(e)||b(e)||y(e)};function O(e){var t=e.enter,n=e.exit,r=e.appendPosition,o=void 0!==r&&r,a=e.collapse,i=void 0===a||a,c=e.collapseDuration,u=void 0===c?300:c;return function(e){var r=e.children,a=e.position,c=e.preventExitTransition,l=e.done,f=e.nodeRef,d=e.isIn,m=o?"".concat(t,"--").concat(a):t,v=o?"".concat(n,"--").concat(a):n,g=(0,s.useRef)(0);return(0,s.useLayoutEffect)((function(){var e,t=f.current,n=m.split(" "),r=function e(r){var o;r.target===f.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===g.current&&"animationcancel"!==r.type&&(o=t.classList).remove.apply(o,(0,p.Z)(n)))};(e=t.classList).add.apply(e,(0,p.Z)(n)),t.addEventListener("animationend",r),t.addEventListener("animationcancel",r)}),[]),(0,s.useEffect)((function(){var e=f.current,t=function t(){e.removeEventListener("animationend",t),i?function(e,t,n){void 0===n&&(n=300);var r=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,l,u):l()};d||(c?t():(g.current=1,e.className+=" ".concat(v),e.addEventListener("animationend",t)))}),[d]),s.createElement(s.Fragment,null,r)}}function _(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var w={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(r){var o=setTimeout((function(){r.apply(void 0,(0,p.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(o)}))}},x=function(e){var t=e.theme,n=e.type,r=d(e,g);return s.createElement("svg",f({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},r))},I={info:function(e){return s.createElement(x,f({},e),s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return s.createElement(x,f({},e),s.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return s.createElement(x,f({},e),s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return s.createElement(x,f({},e),s.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return s.createElement("div",{className:"Toastify__spinner"})}};function L(e){var t=(0,s.useReducer)((function(e){return e+1}),0),n=(0,o.Z)(t,2)[1],r=(0,s.useState)([]),a=(0,o.Z)(r,2),i=a[0],c=a[1],u=(0,s.useRef)(null),l=(0,s.useRef)(new Map).current,m=function(e){return-1!==i.indexOf(e)},v=(0,s.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:m,getToast:function(e){return l.get(e)}}).current;function g(e){var t=e.containerId;!v.props.limit||t&&v.containerId!==t||(v.count-=v.queue.length,v.queue=[])}function O(e){c((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function x(){var e=v.queue.shift();k(e.toastContent,e.toastProps,e.staleId)}function L(e,t){var r=t.delay,a=t.staleId,i=d(t,h);if(C(e)&&!function(e){return!u.current||v.props.enableMultiContainer&&e.containerId!==v.props.containerId||l.has(e.toastId)&&null==e.updateId}(i)){var c=i.toastId,p=i.updateId,m=i.data,g=v.props,L=function(){return O(c)},N=null==p;N&&v.count++;var P,R,j=f(f(f({},g),{},{style:g.toastStyle,key:v.toastKey++},Object.fromEntries(Object.entries(i).filter((function(e){var t=(0,o.Z)(e,2);t[0];return null!=t[1]})))),{},{toastId:c,updateId:p,data:m,closeToast:L,isIn:!1,className:T(i.className||g.toastClassName),bodyClassName:T(i.bodyClassName||g.bodyClassName),progressClassName:T(i.progressClassName||g.progressClassName),autoClose:!i.isLoading&&(P=i.autoClose,R=g.autoClose,!1===P||y(P)&&P>0?P:R),deleteToast:function(){var e=_(l.get(c),"removed");l.delete(c),w.emit(4,e);var t=v.queue.length;if(v.count=null==c?v.count-v.displayedToast:v.count-1,v.count<0&&(v.count=0),t>0){var r=null==c?v.props.limit:1;if(1===t||1===r)v.displayedToast++,x();else{var o=r>t?t:r;v.displayedToast=o;for(var a=0;a<o;a++)x()}}else n()}});j.iconOut=function(e){var t=e.theme,n=e.type,r=e.isLoading,o=e.icon,a=null,i={theme:t,type:n};return!1===o||(b(o)?a=o(i):(0,s.isValidElement)(o)?a=(0,s.cloneElement)(o,i):E(o)||y(o)?a=o:r?a=I.spinner():function(e){return e in I}(n)&&(a=I[n](i))),a}(j),b(i.onOpen)&&(j.onOpen=i.onOpen),b(i.onClose)&&(j.onClose=i.onClose),j.closeButton=g.closeButton,!1===i.closeButton||C(i.closeButton)?j.closeButton=i.closeButton:!0===i.closeButton&&(j.closeButton=!C(g.closeButton)||g.closeButton);var Z=e;(0,s.isValidElement)(e)&&!E(e.type)?Z=(0,s.cloneElement)(e,{closeToast:L,toastProps:j,data:m}):b(e)&&(Z=e({closeToast:L,toastProps:j,data:m})),g.limit&&g.limit>0&&v.count>g.limit&&N?v.queue.push({toastContent:Z,toastProps:j,staleId:a}):y(r)?setTimeout((function(){k(Z,j,a)}),r):k(Z,j,a)}}function k(e,t,n){var r=t.toastId;n&&l.delete(n);var o={content:e,props:t};l.set(r,o),c((function(e){return[].concat((0,p.Z)(e),[r]).filter((function(e){return e!==n}))})),w.emit(4,_(o,null==o.props.updateId?"added":"updated"))}return(0,s.useEffect)((function(){return v.containerId=e.containerId,w.cancelEmit(3).on(0,L).on(1,(function(e){return u.current&&O(e)})).on(5,g).emit(2,v),function(){l.clear(),w.emit(3,v)}}),[]),(0,s.useEffect)((function(){v.props=e,v.isToastActive=m,v.displayedToast=i.length})),{getToastToRender:function(t){var n=new Map,r=Array.from(l.values());return e.newestOnTop&&r.reverse(),r.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:u,isToastActive:m}}function k(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function N(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function P(e){var t=(0,s.useState)(!1),n=(0,o.Z)(t,2),r=n[0],a=n[1],i=(0,s.useState)(!1),c=(0,o.Z)(i,2),u=c[0],l=c[1],f=(0,s.useRef)(null),d=(0,s.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,s.useRef)(e),m=e.autoClose,v=e.pauseOnHover,g=e.closeToast,h=e.onClick,y=e.closeOnClick;function E(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),d.didMove=!1,document.addEventListener("mousemove",_),document.addEventListener("mouseup",w),document.addEventListener("touchmove",_),document.addEventListener("touchend",w);var n=f.current;d.canCloseOnClick=!0,d.canDrag=!0,d.boundingRect=n.getBoundingClientRect(),n.style.transition="",d.x=k(t.nativeEvent),d.y=N(t.nativeEvent),"x"===e.draggableDirection?(d.start=d.x,d.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(d.start=d.y,d.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function T(t){if(d.boundingRect){var n=d.boundingRect,r=n.top,o=n.bottom,a=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&d.x>=a&&d.x<=i&&d.y>=r&&d.y<=o?O():C()}}function C(){a(!0)}function O(){a(!1)}function _(t){var n=f.current;d.canDrag&&n&&(d.didMove=!0,r&&O(),d.x=k(t),d.y=N(t),d.delta="x"===e.draggableDirection?d.x-d.start:d.y-d.start,d.start!==d.x&&(d.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(d.delta,"px)"),n.style.opacity=""+(1-Math.abs(d.delta/d.removalDistance)))}function w(){document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",w),document.removeEventListener("touchmove",_),document.removeEventListener("touchend",w);var t=f.current;if(d.canDrag&&d.didMove&&t){if(d.canDrag=!1,Math.abs(d.delta)>d.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,s.useEffect)((function(){p.current=e})),(0,s.useEffect)((function(){return f.current&&f.current.addEventListener("d",C,{once:!0}),b(e.onOpen)&&e.onOpen((0,s.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;b(e.onClose)&&e.onClose((0,s.isValidElement)(e.children)&&e.children.props)}}),[]),(0,s.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||O(),window.addEventListener("focus",C),window.addEventListener("blur",O)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",C),window.removeEventListener("blur",O))}}),[e.pauseOnFocusLoss]);var x={onMouseDown:E,onTouchStart:E,onMouseUp:T,onTouchEnd:T};return m&&v&&(x.onMouseEnter=O,x.onMouseLeave=C),y&&(x.onClick=function(e){h&&h(e),d.canCloseOnClick&&g()}),{playToast:C,pauseToast:O,isRunning:r,preventExitTransition:u,toastRef:f,eventHandlers:x}}function R(e){var t=e.closeToast,n=e.theme,r=e.ariaLabel,o=void 0===r?"close":r;return s.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":o},s.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},s.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function j(e){var t=e.delay,n=e.isRunning,r=e.closeToast,o=e.type,a=void 0===o?"default":o,i=e.hide,c=e.className,l=e.style,d=e.controlledProgress,p=e.progress,m=e.rtl,g=e.isIn,h=e.theme,y=i||d&&0===p,E=f(f({},l),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:y?0:1});d&&(E.transform="scaleX(".concat(p,")"));var T=v("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(h),"Toastify__progress-bar--".concat(a),{"Toastify__progress-bar--rtl":m}),C=b(c)?c({rtl:m,type:a,defaultClassName:T}):v(T,c);return s.createElement("div",u({role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:C,style:E},d&&p>=1?"onTransitionEnd":"onAnimationEnd",d&&p<1?null:function(){g&&r()}))}var Z=function(e){var t=P(e),n=t.isRunning,r=t.preventExitTransition,o=t.toastRef,a=t.eventHandlers,i=e.closeButton,c=e.children,u=e.autoClose,l=e.onClick,d=e.type,p=e.hideProgressBar,m=e.closeToast,g=e.transition,h=e.position,y=e.className,E=e.style,T=e.bodyClassName,C=e.bodyStyle,O=e.progressClassName,_=e.progressStyle,w=e.updateId,x=e.role,I=e.progress,L=e.rtl,k=e.toastId,N=e.deleteToast,Z=e.isIn,M=e.isLoading,S=e.iconOut,D=e.closeOnClick,B=e.theme,A=v("Toastify__toast","Toastify__toast-theme--".concat(B),"Toastify__toast--".concat(d),{"Toastify__toast--rtl":L},{"Toastify__toast--close-on-click":D}),z=b(y)?y({rtl:L,position:h,type:d,defaultClassName:A}):v(A,y),F=!!I||!u,q={closeToast:m,type:d,theme:B},H=null;return!1===i||(H=b(i)?i(q):(0,s.isValidElement)(i)?(0,s.cloneElement)(i,q):R(q)),s.createElement(g,{isIn:Z,done:N,position:h,preventExitTransition:r,nodeRef:o},s.createElement("div",f(f({id:k,onClick:l,className:z},a),{},{style:E,ref:o}),s.createElement("div",f(f({},Z&&{role:x}),{},{className:b(T)?T({type:d}):v("Toastify__toast-body",T),style:C}),null!=S&&s.createElement("div",{className:v("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!M})},S),s.createElement("div",null,c)),H,s.createElement(j,f(f({},w&&!F?{key:"pb-".concat(w)}:{}),{},{rtl:L,theme:B,delay:u,isRunning:n,isIn:Z,closeToast:m,hide:p,type:d,style:_,className:O,controlledProgress:F,progress:I||0}))))},M=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},S=O(M("bounce",!0)),D=(O(M("slide",!0)),O(M("zoom")),O(M("flip")),(0,s.forwardRef)((function(e,t){var n=L(e),r=n.getToastToRender,o=n.containerRef,a=n.isToastActive,i=e.className,c=e.style,u=e.rtl,l=e.containerId;function d(e){var t=v("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":u});return b(i)?i({position:e,rtl:u,defaultClassName:t}):v(t,T(i))}return(0,s.useEffect)((function(){t&&(t.current=o.current)}),[]),s.createElement("div",{ref:o,className:"Toastify",id:l},r((function(e,t){var n=t.length?f({},c):f(f({},c),{},{pointerEvents:"none"});return s.createElement("div",{className:d(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var r=e.content,o=e.props;return s.createElement(Z,f(f({},o),{},{isIn:a(o.toastId),style:f(f({},o.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(o.key)}),r)})))})))})));D.displayName="ToastContainer",D.defaultProps={position:"top-right",transition:S,autoClose:5e3,closeButton:R,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var B,A=new Map,z=[],F=1;function q(){return""+F++}function H(e){return e&&(E(e.toastId)||y(e.toastId))?e.toastId:q()}function Q(e,t){return A.size>0?w.emit(0,e,t):z.push({content:e,options:t}),t.toastId}function U(e,t){return f(f({},t),{},{type:t&&t.type||e,toastId:H(t)})}function V(e){return function(t,n){return Q(t,U(e,n))}}function G(e,t){return Q(e,U("default",t))}G.loading=function(e,t){return Q(e,U("default",f({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},G.promise=function(e,t,n){var r,o=t.pending,a=t.error,i=t.success;o&&(r=E(o)?G.loading(o,n):G.loading(o.render,f(f({},n),o)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=function(e,t,o){if(null!=t){var a=f(f(f({type:e},s),n),{},{data:o}),i=E(t)?{render:t}:t;return r?G.update(r,f(f({},a),i)):G(i.render,f(f({},a),i)),o}G.dismiss(r)},u=b(e)?e():e;return u.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),u},G.success=V("success"),G.info=V("info"),G.error=V("error"),G.warning=V("warning"),G.warn=G.warning,G.dark=function(e,t){return Q(e,U("default",f({theme:"dark"},t)))},G.dismiss=function(e){A.size>0?w.emit(1,e):z=z.filter((function(t){return null!=e&&t.options.toastId!==e}))},G.clearWaitingQueue=function(e){return void 0===e&&(e={}),w.emit(5,e)},G.isActive=function(e){var t=!1;return A.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},G.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,r=A.get(n||B);return r&&r.getToast(e)}(e,t);if(n){var r=n.props,o=n.content,a=f(f(f({delay:100},r),t),{},{toastId:t.toastId||e,updateId:q()});a.toastId!==e&&(a.staleId=e);var i=a.render||o;delete a.render,Q(i,a)}}),0)},G.done=function(e){G.update(e,{progress:1})},G.onChange=function(e){return w.on(4,e),function(){w.off(4,e)}},G.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},G.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},w.on(2,(function(e){B=e.containerId||e,A.set(B,e),z.forEach((function(e){w.emit(0,e.content,e.options)})),z=[]})).on(3,(function(e){A.delete(e.containerId||e),0===A.size&&w.off(0).off(1).off(5)}));var W,X,Y,K=n(1687),J=n(168),$=n(6444),ee=$.ZP.div(W||(W=(0,J.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 30px 0;\n"]))),te=($.ZP.form(X||(X=(0,J.Z)(["\n  position: relative;\n"]))),n(184)),ne=function(e){var t=e.title,n=e.onChange,r=e.onSubmit;return(0,te.jsx)(ee,{children:(0,te.jsxs)("form",{onSubmit:r,children:[(0,te.jsx)("input",{type:"text",name:"title",autoComplete:"off",value:t,onChange:n,autoFocus:!0}),(0,te.jsx)("button",{type:"submit",children:"Search"})]})})},re=n(7563),oe=$.ZP.div(Y||(Y=(0,J.Z)(["\n  display: flex;\n   flex-direction: column;\n   margin: 0 auto;\n   padding: 0 20px;\n"]))),ae=function(){return G.error("Something went wrong. Please try again later.")},ie=function(){var e,t=(0,s.useState)([]),n=(0,o.Z)(t,2),a=n[0],u=n[1],l=(0,c.lr)(),f=(0,o.Z)(l,2),d=f[0],p=f[1],m=null!==(e=d.get("title"))&&void 0!==e?e:"",v=(0,s.useState)((function(){return null!==m&&void 0!==m?m:""})),g=(0,o.Z)(v,2),h=g[0],y=g[1];(0,s.useEffect)((function(){if(""!==m.trim()){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K.eS(m);case 3:(t=e.sent).results.length>0?u(t.results):G.error("Nothing was found for this request. Create another one."),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),ae();case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}}),[m]);return(0,te.jsxs)(oe,{children:[(0,te.jsx)(ne,{title:h,onChange:function(e){console.log("onChange \u0441\u043f\u0440\u0430\u0446\u044e\u0432\u0430\u0432: ",e.target.value),y(e.target.value)},onSubmit:function(e){(e.preventDefault(),h.trim())?(console.log(h),p(""===h?{}:{title:h})):ae()}}),a.length>0?(0,te.jsx)(re.Z,{items:a}):(0,te.jsx)("div",{children:"Nothing was found for this request. Create another one."}),(0,te.jsx)(D,{})]})}}}]);
//# sourceMappingURL=906.aaf118e1.chunk.js.map