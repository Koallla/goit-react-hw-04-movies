(this["webpackJsonpreact-group-5"]=this["webpackJsonpreact-group-5"]||[]).push([[1],{81:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return p}));var n=a(33),r=a(34),c=a(36),s=a(35),i=a(37),l=a(0),o=a.n(l),u=a(32),p=function(t){function e(){var t,a;Object(n.a)(this,e);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(a=Object(c.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(i)))).state={casts:[]},a}return Object(i.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.id;Object(u.a)(e).then((function(e){return t.setState({casts:e.cast})}))}},{key:"render",value:function(){var t=this.state.casts;return o.a.createElement("div",null,o.a.createElement("h1",null,"CAST"),o.a.createElement("ul",null,t.map((function(t){return o.a.createElement("li",{style:{display:"block"},key:t.id},o.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300"+t.profile_path,alt:t.name}),o.a.createElement("p",{style:{marginTop:"0px",marginBottom:"20px"}},t.name))}))))}}]),e}(l.Component)}}]);
//# sourceMappingURL=cast-page.e1909c9f.chunk.js.map