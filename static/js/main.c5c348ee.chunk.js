(this["webpackJsonpif-a-year-were-only-a-pixel"]=this["webpackJsonpif-a-year-were-only-a-pixel"]||[]).push([[0],{15:function(e,t,n){e.exports=n(23)},20:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(11),r=n.n(i),l=(n(20),n(3)),c=n(4),d=n(2),s=n(7),u=n(6),m=n(1),p=m.a.div.withConfig({displayName:"Intro",componentId:"sc-8j1mex-0"})(["height:100vh;width:100vw;display:flex;flex-direction:column;align-items:center;"]),f=m.a.div.withConfig({displayName:"Intro__Header",componentId:"sc-8j1mex-1"})(["display:flex;flex-direction:column;align-items:center;"]),h=m.a.div.withConfig({displayName:"Intro__Main",componentId:"sc-8j1mex-2"})(["margin-bottom:30px;display:flex;flex-direction:column;align-items:center;"]),x=m.a.div.withConfig({displayName:"Intro__Footer",componentId:"sc-8j1mex-3"})([""]),w=m.a.div.withConfig({displayName:"Intro__Section",componentId:"sc-8j1mex-4"})(["margin:10px 0;display:flex;flex-direction:column;align-items:center;"]),y=m.a.p.withConfig({displayName:"Intro__Text",componentId:"sc-8j1mex-5"})(["margin:7px 0;"]),g=m.a.div.withConfig({displayName:"Intro__Heading",componentId:"sc-8j1mex-6"})(["display:flex;justify-content:center;flex-wrap:wrap;"]),v=m.a.h1.withConfig({displayName:"Intro__H1",componentId:"sc-8j1mex-7"})(["margin:0 5px;"]),b=m.a.div.withConfig({displayName:"Intro__Line",componentId:"sc-8j1mex-8"})(["height:20px;width:1px;background-color:red;"]),_=function(){return o.a.createElement(p,null,o.a.createElement(f,null,o.a.createElement(g,null,o.a.createElement(v,null,"if a year were"),o.a.createElement(v,null,"only a pixel.")),o.a.createElement("h3",null,"a showcase of evolutionary time.")),o.a.createElement(h,null,o.a.createElement(w,null,o.a.createElement(y,null,"if a year were compressed to the width of this line"),o.a.createElement(b,null),o.a.createElement(y,null,"what does human evolution look like?"))),o.a.createElement(x,null,o.a.createElement(y,null,"scroll right to explore ---\x3e")))},E=m.a.div.withConfig({displayName:"Point",componentId:"sc-1aop68s-0"})(["position:absolute;left:","px;bottom:0px;display:flex;align-items:flex-start;"],(function(e){return e.location})),I=m.a.div.withConfig({displayName:"Point__Arrow",componentId:"sc-1aop68s-1"})(["width:5px;height:","px;margin-right:5px;border-left:1px solid white;border-top:1px solid white;transition:height 0.5s ease-out;"],(function(e){return 70*e.layer})),C=m.a.div.withConfig({displayName:"Point__Title",componentId:"sc-1aop68s-2"})(["margin-top:-10px;width:max-content;max-width:300px;"]),k=function(e){var t=e.point;e.maxYear;return o.a.createElement(E,{location:t.location},o.a.createElement(I,{layer:t.layer||1}),o.a.createElement(C,null,t.title))};k.maxWidth=300;var j=k,N=m.a.div.withConfig({displayName:"Info",componentId:"ye6kgs-0"})(["position:absolute;left:","px;top:10%;display:flex;flex-direction:column-reverse;"],(function(e){return e.location})),Y=m.a.div.withConfig({displayName:"Info__Riser",componentId:"ye6kgs-1"})(["height:100%;"]),L=m.a.div.withConfig({displayName:"Info__Title",componentId:"ye6kgs-2"})(["width:80vw;max-width:600px;"]),W=function(e){var t=e.point,n=e.maxYear;return t.yearsFromToday>n?null:o.a.createElement(N,{location:t.location},o.a.createElement(Y,null),o.a.createElement(L,null,t.title))},S=function(e){var t=e.point,n=e.maxYear;if(t.yearsFromToday>n)return null;switch(t.type){case"point":return o.a.createElement(j,{point:t});case"info":return o.a.createElement(W,{point:t});default:return null}},T=m.a.div.withConfig({displayName:"Data__DataContainer",componentId:"sc-1xysers-0"})(["height:100%;width:100%;position:relative;"]),D=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={data:[]},e}return Object(d.a)(n,[{key:"presentedData",value:function(){for(var e=this,t=this.state.data.filter((function(t){return t.location>=e.lowerBound()&&t.location<=e.upperBound()})),n=1,a=0;a<t.length;a++){var o=t[a];"point"===o.type&&this.inWindow(o.location)&&(t[a]=Object.assign({},o,{layer:n}),n+=1)}return t}},{key:"inWindow",value:function(e){return e>=this.props.debouncedLocation-j.maxWidth&&e<=this.props.debouncedLocation+window.innerWidth}},{key:"lowerBound",value:function(){return this.props.debouncedLocation-this.buffer()}},{key:"upperBound",value:function(){return this.props.debouncedLocation+window.innerWidth+this.buffer()}},{key:"buffer",value:function(){return 10*window.innerWidth}},{key:"componentDidMount",value:function(){var e=this;window.fetch("".concat(window.location,"/data.json")).then((function(e){return e.json()})).then((function(t){var a=new Date(Date.now()).getYear()+1900;t.forEach((function(t){if(t.year)t.yearsFromToday=0-(t.year-a),t.location=e.props.maxYear-t.yearsFromToday;else if(t.feet_from_beginning)t.location=t.feet_from_beginning*n.pixelsPerFoot,t.yearsFromToday=e.props.maxYear-t.location;else if(t.years_from_beginning)t.location=t.years_from_beginning,t.yearsFromToday=e.props.maxYear-t.location;else if(t.years_ago)t.yearsFromToday=t.years_ago,t.location=e.props.maxYear-t.yearsFromToday;else if("hide"!==t.type)throw new Error("data point missing location info: ".concat(t.title))}));var o=t.sort((function(e,t){return e.location<t.location}));e.setState({data:o})}))}},{key:"render",value:function(){var e=this,t=this.presentedData();return o.a.createElement(T,null,t.map((function(t){return o.a.createElement(S,{key:t.title,point:t,maxYear:e.props.maxYear})})))}}],[{key:"pixelsPerFoot",get:function(){return 1e3}}]),n}(o.a.Component),F=m.a.div.attrs((function(e){var t=e.lineLength,n=e.location;return{style:{height:"".concat(t,"px"),left:"".concat(n,"px")}}})).withConfig({displayName:"Mark",componentId:"sc-1nxel93-0"})(["width:1px;background-color:red;position:absolute;top:0;"]),M=function(e){e.markingLocation;var t=e.location,n=10;return t%1e3===0?n=50:t%100===0&&(n=20),o.a.createElement(F,{lineLength:n,location:t})},O=m.a.div.withConfig({displayName:"Counter",componentId:"sc-1sui342-0"})(["position:fixed;left:","px;bottom:20px;transform:translateX(-50%);display:flex;flex-direction:column-reverse;justify-content:flex-end;align-items:center;width:140px;z-index:10;"],(function(e){return e.innerWidth/2})),A=m.a.div.withConfig({displayName:"Counter__Arrow",componentId:"sc-1sui342-1"})(["height:0;width:0;margin-bottom:20px;border-bottom:20px solid white;border-left:20px solid transparent;border-right:20px solid transparent;"]),B=m.a.div.withConfig({displayName:"Counter__TransparentBackground",componentId:"sc-1sui342-2"})(["position:absolute;height:150%;width:150%;background-image:radial-gradient(black,transparent);z-index:-1;"]),z=function(e){var t=e.year;if(t>e.maxYear||isNaN(t))return null;0===t&&(t+=0);var n=t.toLocaleString(void 0,{minimumFrationDigits:0});return o.a.createElement(O,{innerWidth:window.innerWidth},o.a.createElement(B,null),o.a.createElement("div",null,o.a.createElement("div",null,n),o.a.createElement("div",null,"years ago")),o.a.createElement(A,{layer:"1"}))},P=function(e){return Math.max(function(e){return 10*Math.round((e.debouncedLocation-5*window.innerWidth)/10)}(e),0)},R=function(e){return Math.min(function(e){return e.debouncedLocation+5*window.innerWidth}(e),e.maxYear)},H=function(e,t){return Math.round(P(e)+10*t)},J=function(e){var t=e.location;return e.maxYear-Math.round(t+window.innerWidth/2)},U=function(e){for(var t=[],n=function(e){return(R(e)-P(e))/10}(e),a=0;a<=n;a++){var i=H(e,a);t.push(o.a.createElement(M,{key:i,location:i}))}return t},X=m.a.div.withConfig({displayName:"Ruler__CounterContainer",componentId:"sc-4bvj51-0"})(["height:0;width:100%;"]),$=m.a.div.withConfig({displayName:"Ruler__MarksContainer",componentId:"sc-4bvj51-1"})(["width:100%;height:150px;position:relative;"]),q=m.a.div.withConfig({displayName:"Ruler",componentId:"sc-4bvj51-2"})(["height:150px;width:100%;display:flex;flex-direction:column;border-top:1px solid red;"]),G=function(e){return o.a.createElement(q,null,o.a.createElement(X,null,o.a.createElement(z,{year:J(e),maxYear:e.maxYear})),o.a.createElement($,null,U(e)))},K=m.a.div.withConfig({displayName:"App__AppContainer",componentId:"jag4nx-0"})(["width:","px;height:100vh;color:white;background-color:black;width:100vw;overflow:scroll;"],(function(e){return e.size})),Q=m.a.div.withConfig({displayName:"App__Scrollable",componentId:"jag4nx-1"})(["display:flex;width:","px;padding-right:","px;"],(function(e){return e.size}),(function(e){return e.offset/2})),V=m.a.div.withConfig({displayName:"App__Timeline",componentId:"jag4nx-2"})(["position:relative;width:100%;display:flex;flex-direction:column-reverse;"]),Z=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={debouncedLocation:-1*window.innerWidth,debounce:null},e.app=o.a.createRef(),e.handleScroll=e.handleScroll.bind(Object(c.a)(e)),e}return Object(d.a)(n,null,[{key:"maxYear",get:function(){return 6e6}},{key:"offset",get:function(){return window.innerWidth}}]),Object(d.a)(n,[{key:"componentDidMount",value:function(){this.app.current.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){this.app.current.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(e){var t=this;this.setState({location:e.target.scrollLeft-n.offset},(function(){if(t.state.debounce){var e=Date.now();e-t.state.debounce>=200?t.setState({debouncedLocation:t.state.location,debounce:e}):setTimeout((function(){var e=Date.now();t.state.debounce&&e-t.state.debounce>=300&&t.setState({debouncedLocation:t.state.location,debounce:null})}),500)}else t.setState({debounce:Date.now()})}))}},{key:"render",value:function(){return o.a.createElement(K,{ref:this.app,className:"App",size:n.maxYear},o.a.createElement(Q,{size:n.maxYear+n.offset,offset:n.offset},o.a.createElement(_,null),o.a.createElement(V,null,o.a.createElement(G,{debouncedLocation:this.state.debouncedLocation,location:this.state.location,offset:n.offset,maxYear:n.maxYear}),o.a.createElement(D,{debouncedLocation:this.state.debouncedLocation,maxYear:n.maxYear}))))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.c5c348ee.chunk.js.map