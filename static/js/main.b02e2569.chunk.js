(this["webpackJsonpstudy-react-movieapp"]=this["webpackJsonpstudy-react-movieapp"]||[]).push([[0],{38:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n(0),c=n.n(a),i=n(12),r=n.n(i),o=(n(38),n(13)),m=n.n(o),j=n(25),u=n(26),d=n(27),l=n(32),v=n(31),h=n(28),b=n.n(h);n(58);var p=function(e){e.id;var t=e.title,n=e.year,a=e.summary,c=e.poster,i=e.genres;return Object(s.jsxs)("div",{className:"movie",children:[Object(s.jsx)("img",{src:c,alt:t,title:t}),Object(s.jsxs)("div",{className:"movie__data",children:[Object(s.jsx)("h3",{className:"movie__title",children:t}),Object(s.jsx)("h5",{className:"movie__year",children:n}),Object(s.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(s.jsx)("li",{className:"movie__genre",children:e},t)}))}),Object(s.jsxs)("p",{className:"movie__summary",children:[a.slice(0,180),"..."]})]})]})},x=(n(59),function(e){Object(l.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(u.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={isLoding:!0,movies:[]},e.getMovies=Object(j.a)(m.a.mark((function t(){var n,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,s=n.data.data.movies,e.setState({movies:s,isLoding:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoding,n=e.movies;return Object(s.jsx)(s.Fragment,{children:t?Object(s.jsx)("div",{className:"loader",children:Object(s.jsx)("span",{className:"loader__text",children:"Loding..."})}):Object(s.jsx)("div",{className:"movies",children:n.map((function(e){return Object(s.jsx)(p,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(c.a.Component));var O=function(){return Object(s.jsx)("span",{children:"About This Page"})},g=n(29),f=n(2);n(60);var y=function(){return Object(s.jsxs)(g.a,{children:[Object(s.jsx)(f.a,{path:"/about",component:O}),Object(s.jsx)(f.a,{path:"/",exact:!0,component:x})]})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),c(e),i(e)}))};r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(y,{})}),document.getElementById("root")),r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("root2")),_()}},[[66,1,2]]]);
//# sourceMappingURL=main.b02e2569.chunk.js.map