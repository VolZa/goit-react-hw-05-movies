(self.webpackChunkreact_homework_hw05_movies=self.webpackChunkreact_homework_hw05_movies||[]).push([[987],{1687:function(e,n,t){"use strict";t.d(n,{IQ:function(){return l},Jh:function(){return d},Mc:function(){return u},eS:function(){return p},hR:function(){return o}});var r=t(5861),a=t(7757),i=t.n(a),s=t(1243),c="63646d6cb2d06c3444ba8e63d051cd70";s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/trending/all/day?api_key=".concat(c,"&page=").concat(n));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={params:{api_key:c}},e.next=3,(0,s.Z)("/movie/".concat(n),t);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/search/movie?api_key=".concat(c,"&query=").concat(n));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(n,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},3524:function(e,n,t){"use strict";t.d(n,{E:function(){return r}});var r=Object.freeze({empty:"This field is required and cannot be empty",msg:"Oops something going wrong! Try again later!"})},987:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return R}});var r,a=t(5861),i=t(9439),s=t(7757),c=t.n(s),o=t(2791),u=t(7689),p=t(1687),d=t(4585),l=t(2007),f=t.n(l),v=t(168),h=t(6444),x=h.ZP.div(r||(r=(0,v.Z)(["\n   display: flex;\n   gap: 20px;\n   margin: 0 auto 20px;\n   padding: 0 20px;\n"]))),m=t(184),g=function(e){var n=e.movie,t=e.isFetch;if(n){var r=n.poster_path,a=n.release_date,i=n.original_title,s=n.overview,c=n.vote_average,o=10*Math.ceil(c),u=new Date(a).getFullYear(),p=r?"https://image.tmdb.org/t/p/w400/".concat(r):"https://via.placeholder.com/400x600.png?text=Poster+Not+Available";return(0,m.jsx)(m.Fragment,{children:t?(0,m.jsx)(d.a,{}):(0,m.jsx)("section",{children:(0,m.jsxs)(x,{children:[(0,m.jsx)("img",{src:p,alt:i,width:400,heigh:600}),(0,m.jsx)("div",{children:(0,m.jsxs)("div",{children:[(0,m.jsxs)("h2",{children:[i," (",u,")"]}),(0,m.jsxs)("p",{children:["User Score: ",o,"%"]}),(0,m.jsx)("h2",{children:"Overview"}),(0,m.jsx)("p",{children:s})]})})]})})})}},y=g;g.propType={movie:f().shape({poster_path:f().string.isRequired,release_date:f().string.isRequired,original_title:f().string.isRequired,overview:f().string.isRequired,genres:f().number.isRequired,vote_average:f().string.isRequired}).isRequired,isFetch:f().bool.isRequired};var b,j,w=t(3524),_=t(1087),k=h.ZP.div(b||(b=(0,v.Z)(["\n   display: flex;\n   flex-direction: column;\n   margin: 0 auto;\n   padding: 0 20px;\n"]))),Z=(0,h.ZP)(_.rU)(j||(j=(0,v.Z)(["\n   margin: 20px 20px 20px 0;\n"]))),R=function(){var e,n,t,r,s,l,f=(0,o.useState)({}),v=(0,i.Z)(f,2),h=v[0],x=v[1],g=(0,o.useState)(!1),b=(0,i.Z)(g,2),j=b[0],_=b[1],R=(0,o.useState)(!1),T=(0,i.Z)(R,2),O=T[0],S=T[1],q=(0,u.UO)().movieId,P=(0,u.TH)(),E=(0,o.useRef)(null!==(e=null===(n=P.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/").current;return(0,o.useEffect)((function(){var e=function(){var e=(0,a.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,_(!0),e.next=4,(0,p.Mc)(n);case 4:t=e.sent,x(t),_(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),S(!0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}();e(q)}),[q]),(0,m.jsx)("main",{children:(0,m.jsx)(k,{children:O?(0,m.jsx)("div",{children:w.E.msg}):j?(0,m.jsx)(d.a,{}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(Z,{to:E,children:(0,m.jsx)("button",{type:"button",children:"Back"})}),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(y,{movie:h}),(0,m.jsxs)("div",{children:[(0,m.jsx)(Z,{to:"cast",state:{from:null!==(t=null===P||void 0===P||null===(r=P.state)||void 0===r?void 0:r.from)&&void 0!==t?t:"/"},children:(0,m.jsx)("button",{type:"button",children:"Cast"})}),(0,m.jsx)(Z,{to:"reviews",state:{from:null!==(s=null===P||void 0===P||null===(l=P.state)||void 0===l?void 0:l.from)&&void 0!==s?s:"/"},children:(0,m.jsx)("button",{type:"button",children:"Revievs"})})]}),(0,m.jsx)(o.Suspense,{fallback:(0,m.jsx)(d.a,{}),children:(0,m.jsx)(u.j3,{})})]})]})})})}},888:function(e,n,t){"use strict";var r=t(9047);function a(){}function i(){}i.resetWarningCache=a,e.exports=function(){function e(e,n,t,a,i,s){if(s!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:a};return t.PropTypes=t,t}},2007:function(e,n,t){e.exports=t(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=987.5c90299e.chunk.js.map