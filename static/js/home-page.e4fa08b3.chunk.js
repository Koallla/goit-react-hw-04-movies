(this["webpackJsonpreact-group-5"]=this["webpackJsonpreact-group-5"]||[]).push([[2],{32:function(t,n,e){"use strict";e.d(n,"e",(function(){return o})),e.d(n,"d",(function(){return i})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return s})),e.d(n,"b",(function(){return f}));var a=e(38),c=e.n(a);c.a.defaults.baseURL="https://api.themoviedb.org/3/";var r="?api_key=cff0af22b80c776aec1c17ab43adb9ad",o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"trending",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"movie",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"day",a="".concat(t,"/").concat(n,"/").concat(e).concat(r);return c.a.get(a).then((function(t){return t.data.results}))},i=function(t){return c.a.get("/movie/".concat(t).concat(r)).then((function(t){return t.data}))},u=function(t){return c.a.get("/search/movie".concat(r,"&query=").concat(t)).then((function(t){return t.data}))},s=function(t){return c.a.get("/movie/".concat(t,"/credits").concat(r)).then((function(t){return t.data}))},f=function(t){return c.a.get("/movie/".concat(t,"/reviews").concat(r)).then((function(t){return t.data}))}},40:function(t,n,e){"use strict";var a=e(0),c=e.n(a),r=e(7),o=e(5),i=e(41),u=e.n(i);n.a=Object(o.f)((function(t){var n=t.movies,e=void 0===n?[]:n,a=t.location;return c.a.createElement("ul",null,e.map((function(t){return c.a.createElement("li",{key:t.id,className:u.a.item},c.a.createElement(r.b,{to:{pathname:"/movies/".concat(t.id),state:{from:a}}},t.title))})))}))},41:function(t,n,e){t.exports={item:"movieList_item__1nGRG"}},79:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return v}));var a=e(33),c=e(34),r=e(36),o=e(35),i=e(37),u=e(0),s=e.n(u),f=e(32),d=e(40),v=function(t){function n(){var t,e;Object(a.a)(this,n);for(var c=arguments.length,i=new Array(c),u=0;u<c;u++)i[u]=arguments[u];return(e=Object(r.a)(this,(t=Object(o.a)(n)).call.apply(t,[this].concat(i)))).state={movies:[]},e}return Object(i.a)(n,t),Object(c.a)(n,[{key:"componentDidMount",value:function(){var t=this;Object(f.e)().then((function(n){return t.setState({movies:n})}))}},{key:"render",value:function(){var t=this.state.movies;return s.a.createElement("div",null,s.a.createElement("h1",null,"Trending today"),s.a.createElement(d.a,{movies:t}))}}]),n}(u.Component)}}]);
//# sourceMappingURL=home-page.e4fa08b3.chunk.js.map