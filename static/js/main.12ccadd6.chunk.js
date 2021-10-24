(this["webpackJsonpxsolla-school-frontend-2021"]=this["webpackJsonpxsolla-school-frontend-2021"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(5),i=n.n(a),s=(n(10),n(0)),o=function(){return Object(s.jsx)("header",{children:Object(s.jsx)("h1",{children:" Event Listing "})})},l=n(2),u=n(3),f=n.n(u),h=(n(13),n(14),function(e){var t=e.returnMark,n=e.isFavorite;return Object(s.jsx)("svg",{className:"favoriteIcon",onClick:function(){t(!n)},width:"16",height:"20",viewBox:"0 0 16 20",fill:n?"#ffffff":"none",xmlns:"http://www.w3.org/2000/svg",children:Object(s.jsx)("path",{d:"M15 19L8 14L1 19V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H13C13.5304 1 14.0391 1.21071 14.4142 1.58579C14.7893 1.96086 15 2.46957 15 3V19Z",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),j=function(e){var t=e.data,n=e.isFavorite,r=e.returnFavorite;return Object(s.jsxs)("div",{className:"card",style:{backgroundImage:"url(".concat(t.image,")")},children:[Object(s.jsx)("div",{className:"cardDay",children:Object(s.jsxs)("span",{className:"cardDayText",children:[" ",function(){var e=f()(t.date,"DD.MM.YYYY").date();return e<10&&(e="0"+e),e}()," "]})}),Object(s.jsx)(h,{returnMark:function(e){return r(t.id,e)},isFavorite:n}),Object(s.jsxs)("h1",{className:"cardName",children:[" ",t.name," "]})]})},d=(n(15),function(e){var t=e.cards,n=e.chosenCity,c=e.chosenMonth,a=e.getMonthFromDate,i=e.isOnlyFavorites,o=Object(r.useState)(function(){if(!localStorage.favorites){var e=new Map;return t.forEach((function(t){e[t.id]=!1})),JSON.stringify(e)}return localStorage.favorites}()),u=Object(l.a)(o,2),f=u[0],h=u[1];Object(r.useEffect)((function(){localStorage.favorites=f}),[f]);var d=function(e,t){var n=JSON.parse(f);n[e]=t,h(JSON.stringify(n))};return Object(s.jsx)("div",{id:"cardsField",children:function(){if(t){var e=[];return t.forEach((function(t){var r=t.city,o=a(t.date);"All"!==n&&r!==n||"All"!==c&&o!==c||i&&!0!==JSON.parse(f)[t.id]||e.push(Object(s.jsx)(j,{data:t,isFavorite:JSON.parse(f)[t.id],returnFavorite:d},t.id))})),e}}()})}),b=(n(16),function(e){var t=e.data,n=e.chosenCity,c=e.setChosenCity,a=e.chosenMonth,i=e.setChosenMonth,o=e.isOnlyFavorites,u=e.setIsOnlyFavorites,h=e.getMonthFromDate,j=Object(r.useState)(null),d=Object(l.a)(j,2),b=d[0],O=d[1],v=Object(r.useState)(null),m=Object(l.a)(v,2),x=m[0],y=m[1];Object(r.useEffect)((function(){if(t){var e=new Set(["All"]),n=new Set;t.forEach((function(t){e.add(t.city),n.add(f()(t.date,"DD.MM.YYYY").month()+1)}));var r=function(e){var t=Array.from(e);t.sort((function(e,t){return e-t}));var n=t.map((function(e){return h(e)}));return n.unshift("All"),n}(n);O(e),y(r)}}),[t]);var p=function(e){if(e){var t=[];return e.forEach((function(e){t.push(Object(s.jsxs)("option",{children:[" ",e," "]},e))})),t}};return Object(s.jsxs)("div",{className:"filters",children:[Object(s.jsxs)("div",{className:"filterWrapper",children:[Object(s.jsx)("label",{htmlFor:"cityFilter",children:"City:"}),Object(s.jsx)("select",{id:"cityFilter",className:"filter",value:n,onChange:function(e){return c(e.target.value)},children:p(b)})]}),Object(s.jsxs)("div",{className:"filterWrapper",children:[Object(s.jsx)("label",{htmlFor:"monthFilter",children:"Month:"}),Object(s.jsx)("select",{id:"monthFilter",className:"filter",value:a,onChange:function(e){return i(e.target.value)},children:p(x)})]}),Object(s.jsxs)("div",{className:"filterWrapper",children:[Object(s.jsx)("label",{htmlFor:"favoriteFilter",children:"Only favorites:"}),Object(s.jsx)("input",{type:"checkbox",id:"favoriteFilter",value:o,onChange:function(e){var t="false"===e.target.value;u(t)}})]})]})}),O=function(){var e={1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"},t=Object(r.useState)(null),n=Object(l.a)(t,2),c=n[0],a=n[1],i=Object(r.useState)(null),o=Object(l.a)(i,2),u=o[0],h=o[1],j=Object(r.useState)(null),O=Object(l.a)(j,2),v=O[0],m=O[1],x=Object(r.useState)(!1),y=Object(l.a)(x,2),p=y[0],F=y[1],g=Object(r.useState)(!0),M=Object(l.a)(g,2),S=M[0],C=M[1];Object(r.useEffect)((function(){w()}),[]);var N=function(t){if("number"===typeof t)return e[t];var n=f()(t,"DD.MM.YYYY").month()+1;return e[n]},w=function(){fetch("https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2021/main/events.json").then((function(e){return e.json()})).then((function(e){a(e),h("All"),m("All")})).then((function(){return C(!1)}))};return Object(s.jsx)("main",{children:function(){if(!S)return Object(s.jsxs)(r.Fragment,{children:[Object(s.jsx)(b,{data:c,chosenCity:u,setChosenCity:h,chosenMonth:v,setChosenMonth:m,isOnlyFavorites:p,setIsOnlyFavorites:F,getMonthFromDate:N}),Object(s.jsx)(d,{cards:c,chosenCity:u,chosenMonth:v,isOnlyFavorites:p,getMonthFromDate:N})]})}()})},v=function(){return Object(s.jsxs)("div",{id:"container",children:[Object(s.jsx)(o,{}),Object(s.jsx)(O,{})]})};n(17);i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(v,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.12ccadd6.chunk.js.map