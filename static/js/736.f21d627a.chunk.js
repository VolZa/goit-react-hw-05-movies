"use strict";(self.webpackChunkreact_homework_hw05_movies=self.webpackChunkreact_homework_hw05_movies||[]).push([[736],{1687:function(n,e,t){t.d(e,{IQ:function(){return h},Jh:function(){return f},Mc:function(){return o},eS:function(){return p},hR:function(){return s}});var r=t(5861),a=t(7757),c=t.n(a),u=t(1243),i="63646d6cb2d06c3444ba8e63d051cd70";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/all/day?api_key=".concat(i,"&page=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={params:{api_key:i}},n.next=3,(0,u.Z)("/movie/".concat(e),t);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},9736:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var r,a=t(5861),c=t(9439),u=t(7757),i=t.n(u),s=t(2791),o=t(7689),p=t(1687),f=t(4585),h=t(3524),d=t(168),l=t(6444).ZP.ul(r||(r=(0,d.Z)(["\n   display: flex;\n   max-width: 100%;\n   flex-wrap: wrap;\n   gap: 10px;\n   margin: 0 auto;\n   padding: 0 20px;\n"]))),v=t(184),m=function(){var n=(0,s.useState)([]),e=(0,c.Z)(n,2),t=e[0],r=e[1],u=(0,s.useState)(!1),d=(0,c.Z)(u,2),m=d[0],x=d[1],g=(0,s.useState)(!1),w=(0,c.Z)(g,2),k=w[0],y=w[1],Z=(0,o.UO)().movieId;return(0,s.useEffect)((function(){var n=function(){var n=(0,a.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,y(!0),n.next=4,p.IQ(e);case 4:t=n.sent,r(t.cast),y(!1),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),x(!0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}();n(Z)}),[Z]),(0,v.jsx)(v.Fragment,{children:k?(0,v.jsx)(f.a,{}):m?(0,v.jsx)("h2",{children:h.E.msg}):(0,v.jsxs)("section",{children:[(0,v.jsx)("h2",{children:"Cast"}),(0,v.jsx)(l,{children:t.length?t.map((function(n,e){var t=n.original_name,r=n.profile_path,a=n.character;return(0,v.jsxs)("li",{children:[(0,v.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w200".concat(r):"https://via.placeholder.com/200x300?text=No+Image",alt:t}),(0,v.jsx)("h3",{children:t}),(0,v.jsx)("p",{children:a})]},e)})):(0,v.jsx)("p",{children:"Actors not found."})})]})})}},3524:function(n,e,t){t.d(e,{E:function(){return r}});var r=Object.freeze({empty:"This field is required and cannot be empty",msg:"Oops something going wrong! Try again later!"})}}]);
//# sourceMappingURL=736.f21d627a.chunk.js.map