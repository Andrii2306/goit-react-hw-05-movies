"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[689],{952:function(e,r,t){t.d(r,{Jh:function(){return m},_3:function(){return v},bp:function(){return f},fO:function(){return o},ix:function(){return i},k0:function(){return l},kP:function(){return p}});var n=t(5861),a=t(4687),c=t.n(a),s=t(1243),u="63a14b057a1005b82828369b12cd1f9c";s.Z.defaults.baseURL="\nhttps://api.themoviedb.org/3/";var i=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("trending/all/day?api_key=".concat(u));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:return e.prev=7,e.t0=e.catch(0),console.error("Please wait, we are repair problem"),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("search/movie?api_key=".concat(u,"&language=en-US&query=").concat(r,"&page=1&include_adult=false"));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:return e.prev=7,e.t0=e.catch(0),console.error("Please wait, we are repair problem"),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("movie/".concat(r,"?api_key=").concat(u,"&language=en-US"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),console.error("Please wait, we are repair problem"),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}();function p(e){return e?"".concat("https://image.tmdb.org/t/p/w500","/").concat(e):"https://www.jsconsulting.kz/assets/img/noImg.jpg"}var f=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("movie/".concat(r,"/credits?api_key=").concat(u,"&language=en-US"));case 3:return t=e.sent,e.abrupt("return",t.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.error("Please wait, we are repair problem");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),m=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("movie/".concat(r,"/reviews?api_key=").concat(u,"&language=en-US"));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error("Please wait, we are repair problem");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}();function v(e){if(e)return e.split("-")[0]}},2639:function(e,r,t){t.d(r,{a:function(){return s}});var n=t(643),a="Loader_loader_position__EoZju",c=t(184),s=function(){return(0,c.jsx)("div",{className:a,children:(0,c.jsx)(n.Ll,{height:"80",width:"80",colors:["red","green","blue","yellow","orange","purple"],ariaLabel:"bars-loading",wrapperStyle:{},wrapperClass:"",visible:!0})})}},5689:function(e,r,t){t.r(r),t.d(r,{default:function(){return x}});var n=t(5861),a=t(9439),c=t(4687),s=t.n(c),u=t(952),i=t(2639),o=t(2791),l=t(9073),p="SearchBar_searchbar__xBucJ",f="SearchBar_search_form__JD4pT",m="SearchBar_search_form_button__74pXE",v="SearchBar_search_form_button_label__KBu-s",h="SearchBar_search_form_input__wqg06",_=t(184),d=function(e){var r=e.onSubmit,t=(0,o.useState)(""),n=(0,a.Z)(t,2),c=n[0],s=n[1];return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("div",{className:p,children:(0,_.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s(e.currentTarget.elements.query.value.trim()),""!==c.trim()?(r(c),s("")):l.Am.error("Pleas enter search word!")},className:f,children:[(0,_.jsx)("button",{type:"submit",className:m,children:(0,_.jsx)("span",{className:v,children:"Search"})}),(0,_.jsx)("input",{className:h,type:"text",name:"query",autoComplete:"off",onChange:function(e){s(e.currentTarget.value.toLowerCase())},value:c,autoFocus:!0,placeholder:"Enter your search name"})]})}),(0,_.jsx)(l.x7,{position:"top-right"})]})},w=t(1087),g=t(7689),b={movies__list:"Movies_movies__list__+pxmY",movies__item:"Movies_movies__item__blLkN"},x=function(){var e,r=(0,g.TH)(),t=(0,o.useState)({}),c=(0,a.Z)(t,2),p=c[0],f=c[1],m=(0,o.useState)(!1),v=(0,a.Z)(m,2),h=v[0],x=v[1],y=(0,w.lr)(),k=(0,a.Z)(y,2),j=k[0],S=k[1],Z=null!==(e=j.get("query"))&&void 0!==e?e:"";return(0,o.useEffect)((function(){function e(){return(e=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,(0,u.fO)(Z);case 4:(r=e.sent).length>0&&(f(r.map((function(e){return{id:e.id,title:e.original_title,name:e.title,overview:e.overview,release:e.release_date}}))),x(!1)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),l.Am.error("Pleas wait a few minutes, we are repairing the website..."),x(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}""!==Z&&function(){e.apply(this,arguments)}()}),[Z]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{className:b.movies__wrapper,children:[(0,_.jsx)(d,{onSubmit:function(e){S(""!==e?{query:e}:{})}}),(0,_.jsx)(l.x7,{position:"top-right"}),p.length>0&&(0,_.jsx)("ul",{className:b.movies__list,children:null===p||void 0===p?void 0:p.map((function(e){return(0,_.jsx)("li",{children:(0,_.jsx)(w.rU,{to:"/movies/".concat(e.id),state:{from:r},className:b.movies__item,children:e.title})},e.id)}))})]}),h&&(0,_.jsx)(i.a,{})]})}}}]);
//# sourceMappingURL=689.6fd8b0d4.chunk.js.map