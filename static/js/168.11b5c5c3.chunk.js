"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{952:function(e,r,t){t.d(r,{Jh:function(){return v},_3:function(){return w},bp:function(){return f},fO:function(){return o},ix:function(){return i},k0:function(){return p},kP:function(){return l}});var n=t(5861),a=t(4687),c=t.n(a),u=t(1243),s="63a14b057a1005b82828369b12cd1f9c";u.Z.defaults.baseURL="\nhttps://api.themoviedb.org/3/";var i=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("trending/all/day?api_key=".concat(s));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:return e.prev=7,e.t0=e.catch(0),console.error("Please wait, we are repair problem"),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("search/movie?api_key=".concat(s,"&language=en-US&query=").concat(r,"&page=1&include_adult=false"));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:return e.prev=7,e.t0=e.catch(0),console.error("Please wait, we are repair problem"),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("movie/".concat(r,"?api_key=").concat(s,"&language=en-US"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),console.error("Please wait, we are repair problem"),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}();function l(e){return e?"".concat("https://image.tmdb.org/t/p/w500","/").concat(e):"https://www.jsconsulting.kz/assets/img/noImg.jpg"}var f=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("movie/".concat(r,"/credits?api_key=").concat(s,"&language=en-US"));case 3:return t=e.sent,e.abrupt("return",t.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.error("Please wait, we are repair problem");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("movie/".concat(r,"/reviews?api_key=").concat(s,"&language=en-US"));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error("Please wait, we are repair problem");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}();function w(e){if(e)return e.split("-")[0]}},2639:function(e,r,t){t.d(r,{a:function(){return u}});var n=t(643),a="Loader_loader_position__EoZju",c=t(184),u=function(){return(0,c.jsx)("div",{className:a,children:(0,c.jsx)(n.Ll,{height:"80",width:"80",colors:["red","green","blue","yellow","orange","purple"],ariaLabel:"bars-loading",wrapperStyle:{},wrapperClass:"",visible:!0})})}},2168:function(e,r,t){t.r(r),t.d(r,{default:function(){return w}});var n=t(5861),a=t(9439),c=t(4687),u=t.n(c),s=t(952),i=t(2639),o=t(2791),p=t(9073),l=t(7689),f={reviews__wrapper:"Reviews_reviews__wrapper__Y5Oj3",reviews__title:"Reviews_reviews__title__+XJ8d"},v=t(184),w=function(){var e=(0,l.UO)().movieId,r=(0,o.useState)([]),t=(0,a.Z)(r,2),c=t[0],w=t[1],h=(0,o.useState)(!1),d=(0,a.Z)(h,2),_=d[0],m=d[1];if((0,o.useEffect)((function(){function r(){return(r=(0,n.Z)(u().mark((function r(){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,m(!0),r.next=4,(0,s.Jh)(e);case 4:(t=r.sent).length>0&&(w(t),m(!1)),r.next=12;break;case 8:r.prev=8,r.t0=r.catch(0),p.Am.error("Pleas wait a few minutes, we are repairing the website..."),m(!1);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})))).apply(this,arguments)}!function(){r.apply(this,arguments)}()}),[e]),c)return(0,v.jsxs)(v.Fragment,{children:[0===c.length?"Unfortunately we didn't find anything...":(0,v.jsx)("div",{className:f.reviews__wrapper,children:c.map((function(e){var r=e.author,t=e.content,n=e.id;return(0,v.jsxs)("div",{children:[(0,v.jsxs)("h3",{className:f.reviews__title,children:["Author: ",r]}),(0,v.jsxs)("p",{className:f.reviews__content,children:["Content: ",t]})]},n)}))}),(0,v.jsx)(p.x7,{}),_&&(0,v.jsx)(i.a,{})]})}}}]);
//# sourceMappingURL=168.11b5c5c3.chunk.js.map