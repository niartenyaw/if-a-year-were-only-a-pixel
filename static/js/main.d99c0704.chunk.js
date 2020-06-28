(this["webpackJsonpif-a-year-were-only-a-pixel"]=this["webpackJsonpif-a-year-were-only-a-pixel"]||[]).push([[0],{16:function(e,t,n){e.exports=n(25)},21:function(e,t,n){},22:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(12),o=n.n(i),l=(n(21),n(1)),c=n(2),s=n(6),u=n(5),m=(n(22),n(7)),d=function(e){var t={width:"30px",height:"1px",backgroundColor:"white",margin:"0 10px"};return"vertical"===e.type&&Object.assign(t,{height:"30px",width:"1px",margin:"10px 0"}),r.a.createElement("div",{style:t})},h=n(8);function f(){var e=Object(m.a)(["\n  position: absolute;\n  left: ","px;\n  bottom: 0px;\n  display: flex;\n  flex-direction: column-reverse;\n  height: 100%;\n"]);return f=function(){return e},e}function y(){var e=Object(m.a)(["\n  transform: translateX(-50%)rotate(-90deg) translateX(50%);\n"]);return y=function(){return e},e}var p=h.a.div(y()),v=h.a.div(f(),(function(e){return e.year})),g=function(e){var t=e.data,n=e.maxYear;return t.years_from_today>n?null:r.a.createElement(v,{className:"datapoint",year:t.years_from_today_augmented},r.a.createElement(d,{type:"vertical"}),r.a.createElement(p,null,t.title))},k=n(3),w=function(e){e.markingLocation;var t=e.yearsAgo,n=10;t%1e3===0?n=50:t%100===0&&(n=20);var a={width:"".concat(1,"px"),height:"".concat(n,"px"),backgroundColor:"red",position:"absolute",left:t,top:"0"};return r.a.createElement("div",{className:"ruler-marker",style:a})},x=function(e){var t=e.year;if(console.log(t),t<0)return null;0===t&&(t+=0);var n={position:"fixed",left:"".concat(window.innerWidth/2,"px"),bottom:"20px",transform:"translateX(-50%)",display:"flex",flexDirection:"column-reverse",justifyContent:"flex-end",alignItems:"center",width:"140px"},a=t.toLocaleString(void 0,{minimumFrationDigits:0});return r.a.createElement("div",{style:n},r.a.createElement("div",null,r.a.createElement("div",null,a),r.a.createElement("div",null,"years ago")),r.a.createElement(d,{type:"vertical"}))},E=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={scrollLocation:-1*window.innerWidth},e.handleScroll=e.handleScroll.bind(Object(k.a)(e)),e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){this.setState({scrollLocation:window.scrollX-this.props.offset})}},{key:"uppermostMarkerPosition",value:function(){return Math.round((this.state.scrollLocation-window.innerWidth)/n.yearsPerMarking)*n.yearsPerMarking}},{key:"firstMarkingLocation",value:function(){return Math.max(this.uppermostMarkerPosition(),0)}},{key:"lastMarkingLocation",value:function(){return Math.min(this.lowermostMarkerPosition(),this.endOfHistory())}},{key:"lowermostMarkerPosition",value:function(){return this.firstMarkingLocation()+3*window.innerWidth}},{key:"endOfHistory",value:function(){return this.props.maxYear}},{key:"numberOfMarkings",value:function(){return(this.lastMarkingLocation()-this.firstMarkingLocation())/n.yearsPerMarking}},{key:"yearsAgo",value:function(e){return Math.round(this.firstMarkingLocation()+e*n.yearsPerMarking)}},{key:"markings",value:function(){for(var e=[],t=0;t<this.numberOfMarkings();t++){var n=this.yearsAgo(t);e.push(r.a.createElement(w,{key:n,yearsAgo:n}))}return e}},{key:"middleYear",value:function(){return Math.round(this.state.scrollLocation+window.innerWidth/2)}},{key:"render",value:function(){return r.a.createElement("div",{className:"ruler",style:{height:"150px",width:"100%",display:"flex",flexDirection:"column"}},r.a.createElement("div",{className:"counter-container",style:{height:"0",width:"100%"}},r.a.createElement(x,{year:this.middleYear()})),r.a.createElement("div",{className:"markings",style:{width:"100%",height:"150px",position:"relative"}},this.markings()))}}],[{key:"yearsPerMarking",get:function(){return 10}}]),n}(r.a.Component),b=window.innerWidth,M=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={data:[]},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(window.location,"/data.json")).then((function(e){return e.json()})).then((function(t){e.setState({data:t})}))}},{key:"render",value:function(){var e=n.maxYear,t={display:"flex",width:"".concat(e,"px"),height:"100vh",color:"white","background-color":"black"},a={height:"100vh",width:"".concat(n.offset,"px"),display:"flex",flexDirection:"column",justifyContent:"space-between"},i={margin:"0 0"};return r.a.createElement("div",{className:"App",style:t},r.a.createElement("div",{className:"intro",style:a},r.a.createElement("header",{style:{marginTop:"30%",padding:"0 50px"}},r.a.createElement("h1",null,"if a year were only a pixel."),r.a.createElement("p",null,"a showcase of time.")),r.a.createElement("section",{style:{}},r.a.createElement("p",null,"scroll right to explore")),r.a.createElement("footer",{style:{marginBottom:"30px"}},r.a.createElement("p",null,"this first long red line is the year 2020"),r.a.createElement("p",{style:i},"every small mark is 10 years apart"),r.a.createElement("p",{style:i},"the bigger ones are 100 years apart"),r.a.createElement("p",{style:i},"the largest are 1000 years apart"))),r.a.createElement("div",{className:"history",style:{position:"relative",width:"100%",display:"flex",flexDirection:"column-reverse"}},r.a.createElement(E,{offset:n.offset,maxYear:e}),r.a.createElement("div",{className:"datapoints",style:{height:"100%",width:"100%",position:"relative"}},this.state.data.map((function(t){return r.a.createElement(g,{data:t,maxYear:e})})))))}}],[{key:"maxYear",get:function(){return 9003020}},{key:"offset",get:function(){return b}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.d99c0704.chunk.js.map