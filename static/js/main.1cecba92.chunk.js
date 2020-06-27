(this["webpackJsonpif-a-year-were-only-a-pixel"]=this["webpackJsonpif-a-year-were-only-a-pixel"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),o=a.n(i),l=(a(13),a(1)),s=a(2),c=a(4),u=a(5),m=(a(14),function(e){return r.a.createElement("div",{style:{width:"30px",height:"1px",backgroundColor:"white",margin:"0 10px"}})}),h=function(e){var t=e.data,a=e.maxYear;if(t.years_from_today>a)return null;var n={position:"absolute",top:"".concat(t.years_from_today_augmented,"px"),transform:"translateY(-50%)",display:"flex",alignItems:"center",marginLeft:"5px"};return r.a.createElement("div",{className:"datapoint",style:n},r.a.createElement(m,null),t.title)},f=a(3),d=function(e){e.markingLocation;var t=e.yearsAgo,a=10;t%1e3===0?a=50:t%100===0&&(a=20);var n={height:"".concat(1,"px"),width:"".concat(a,"px"),backgroundColor:"red",position:"absolute",top:t,right:"0"};return r.a.createElement("div",{className:"ruler-marker",style:n})},y=function(e){var t=e.year;if(console.log(t),t<0)return null;0===t&&(t+=0);var a={position:"sticky",top:"".concat(window.innerHeight/2,"px"),transform:"translateY(-50%)",display:"flex",justifyContent:"flex-end",alignItems:"center",width:"200px"},n=t.toLocaleString(void 0,{minimumFrationDigits:0});return r.a.createElement("div",{style:a},r.a.createElement("div",null,n," years ago"),r.a.createElement(m,null))},p=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={scrollLocation:-1*window.innerHeight},e.handleScroll=e.handleScroll.bind(Object(f.a)(e)),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){this.setState({scrollLocation:window.scrollY-this.props.offset})}},{key:"uppermostMarkerPosition",value:function(){return Math.round((this.state.scrollLocation-window.innerHeight)/a.yearsPerMarking)*a.yearsPerMarking}},{key:"firstMarkingLocation",value:function(){return Math.max(this.uppermostMarkerPosition(),0)}},{key:"lastMarkingLocation",value:function(){return Math.min(this.lowermostMarkerPosition(),this.endOfHistory())}},{key:"lowermostMarkerPosition",value:function(){return this.firstMarkingLocation()+3*window.innerHeight}},{key:"endOfHistory",value:function(){return this.props.maxYear}},{key:"numberOfMarkings",value:function(){return(this.lastMarkingLocation()-this.firstMarkingLocation())/a.yearsPerMarking}},{key:"yearsAgo",value:function(e){return Math.round(this.firstMarkingLocation()+e*a.yearsPerMarking)}},{key:"markings",value:function(){for(var e=[],t=0;t<this.numberOfMarkings();t++){var a=this.yearsAgo(t);e.push(r.a.createElement(d,{key:a,yearsAgo:a}))}return e}},{key:"middleYear",value:function(){return Math.round(this.state.scrollLocation+window.innerHeight/2)}},{key:"render",value:function(){return r.a.createElement("div",{className:"ruler",style:{width:"250px",height:"100%",display:"flex"}},r.a.createElement("div",{className:"counter-container",style:{width:"0",height:"100%"}},r.a.createElement(y,{year:this.middleYear()})),r.a.createElement("div",{className:"markings",style:{marginLeft:"200px",height:"100%",width:"250px",position:"relative"}},this.markings()))}}],[{key:"yearsPerMarking",get:function(){return 10}}]),a}(r.a.Component),g=window.innerHeight,v=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={data:[]},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(window.location,"/data.json")).then((function(e){return e.json()})).then((function(t){e.setState({data:t})}))}},{key:"render",value:function(){var e=a.maxYear,t={height:"".concat(e,"px"),color:"white","background-color":"black"},n={height:"".concat(a.offset,"px"),position:"relative",display:"flex",flexDirection:"column",justifyContent:"space-between"},i={margin:"0 0"};return r.a.createElement("div",{className:"App",style:t},r.a.createElement("div",{className:"intro",style:n},r.a.createElement("header",{style:{position:"absolute",top:"30%",transform:"translateX(-50%)",left:"50%"}},r.a.createElement("h1",null,"if a year were only a pixel."),r.a.createElement("p",null,"a showcase of time.")),r.a.createElement("section",{style:{textAlign:"center",position:"absolute",top:"60%",transform:"translateX(-50%)",left:"50%"}},r.a.createElement("p",null,"scroll down to explore")),r.a.createElement("footer",{style:{textAlign:"center",position:"absolute",top:"90%",transform:"translateX(-50%)",left:"50%"}},r.a.createElement("p",null,"this first long red line is the year 2020"),r.a.createElement("p",{style:i},"every small mark is 10 years apart"),r.a.createElement("p",{style:i},"the bigger ones are 100 years apart"),r.a.createElement("p",{style:i},"the largest are 1000 years apart"))),r.a.createElement("div",{className:"history",style:{position:"relative",height:"100%",display:"flex"}},r.a.createElement(p,{offset:a.offset,maxYear:e}),r.a.createElement("div",{className:"datapoints",style:{height:"100%",width:"100%",position:"relative"}},this.state.data.map((function(t){return r.a.createElement(h,{data:t,maxYear:e})})))))}}],[{key:"maxYear",get:function(){return 9003020}},{key:"offset",get:function(){return g}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.1cecba92.chunk.js.map