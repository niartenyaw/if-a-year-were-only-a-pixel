(this["webpackJsonpif-a-year-were-only-a-pixel"]=this["webpackJsonpif-a-year-were-only-a-pixel"]||[]).push([[0],{15:function(e,t,n){e.exports=n(23)},20:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(11),r=n.n(i),l=(n(20),n(3)),c=n(2),s=n(7),d=n(6),m=n(1),u={colors:{background:"#140E06",text:"#FFF5E9",primary:"#BFE297",secondary:"#8977AA"}},p=m.b.p.withConfig({displayName:"Text",componentId:"sc-19z91ly-0"})(["margin:7px 0;"]),f=m.b.div.withConfig({displayName:"Intro",componentId:"sc-8j1mex-0"})(["height:100vh;width:100vw;display:flex;flex-direction:column;align-items:center;flex-shrink:0;"]),h=m.b.div.withConfig({displayName:"Intro__Header",componentId:"sc-8j1mex-1"})(["display:flex;flex-direction:column;align-items:center;"]),x=m.b.div.withConfig({displayName:"Intro__Main",componentId:"sc-8j1mex-2"})(["margin-bottom:30px;display:flex;flex-direction:column;align-items:center;"]),y=m.b.div.withConfig({displayName:"Intro__Section",componentId:"sc-8j1mex-3"})(["margin:10px 0;display:flex;flex-direction:column;align-items:center;"]),w=m.b.div.withConfig({displayName:"Intro__Heading",componentId:"sc-8j1mex-4"})(["display:flex;justify-content:center;flex-wrap:wrap;"]),b=m.b.h1.withConfig({displayName:"Intro__H1",componentId:"sc-8j1mex-5"})(["margin:0 5px;"]),g=Object(m.c)(m.b.div.withConfig({displayName:"Intro__Line",componentId:"sc-8j1mex-6"})(["height:20px;width:1px;background-color:",";"],(function(e){return e.theme.colors.primary}))),v=m.b.div.withConfig({displayName:"Intro__Footer",componentId:"sc-8j1mex-7"})(["display:flex;align-items:center;"]),E=m.b.div.withConfig({displayName:"Intro__Github",componentId:"sc-8j1mex-8"})(["margin-bottom:-4px;"]),_=Object(m.c)(m.b.a.withConfig({displayName:"Intro__A",componentId:"sc-8j1mex-9"})(["text-decoration:none;color:",";"],(function(e){return e.theme.colors.text}))),I=m.b.img.withConfig({displayName:"Intro__Img",componentId:"sc-8j1mex-10"})(["height:30px;width:auto;"]),C=m.b.div.withConfig({displayName:"Intro__Inspiration",componentId:"sc-8j1mex-11"})(["margin-bottom:6px;"]),j=Object(m.c)(m.b.div.withConfig({displayName:"Intro__InspirationText",componentId:"sc-8j1mex-12"})(["border-bottom:1px solid ",";margin-bottom:-5px;"],(function(e){return e.theme.colors.text}))),k=m.b.div.withConfig({displayName:"Intro__Separator",componentId:"sc-8j1mex-13"})([':before{content:"|";margin:0 10px;}']),N=function(e){var t=e.offset;return a.a.createElement(f,{size:t},a.a.createElement(h,null,a.a.createElement(w,null,a.a.createElement(b,null,"if a year were"),a.a.createElement(b,null,"only a pixel.")),a.a.createElement("h3",null,"a showcase of evolutionary time.")),a.a.createElement(x,null,a.a.createElement(y,null,a.a.createElement(p,null,"if a year were compressed to the width of this line"),a.a.createElement(g,null),a.a.createElement(p,null,"what does the scale of human evolution look like?")),a.a.createElement(y,null,a.a.createElement(p,null,"scroll right to explore ---\x3e"))),a.a.createElement(v,null,a.a.createElement(E,null,a.a.createElement(_,{href:"https://github.com/niartenyaw/if-a-year-were-only-a-pixel"},a.a.createElement(I,{src:"/if-a-year-were-only-a-pixel/github.png"}))),a.a.createElement(k,null),a.a.createElement(C,null,a.a.createElement(_,{href:"https://www.joshworth.com/dev/pixelspace/pixelspace_solarsystem.html"},a.a.createElement(j,null,"inspiration")))))},Y=n(4),F=m.b.div.withConfig({displayName:"Scrollable__ScrollableContainer",componentId:"sc-1642pgs-0"})(["display:flex;overflow:scroll;width:100vw;"]),L=m.b.div.withConfig({displayName:"Scrollable__Scroller",componentId:"sc-1642pgs-1"})(["width:","px;display:flex;flex-shrink:0;"],(function(e){return e.size})),O=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={location:-1*window.innerWidth,debouncedLocation:-1*window.innerWidth,debounce:null},e.scrollable=a.a.createRef(),e.handleScroll=e.handleScroll.bind(Object(Y.a)(e)),e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.scrollable.current.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){this.scrollable.current.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(e){var t=this;this.setState({location:e.target.scrollLeft-this.props.offset},(function(){if(t.state.debounce){var e=Date.now();e-t.state.debounce>=200?t.setState({debouncedLocation:t.state.location,debounce:e}):setTimeout((function(){var e=Date.now();t.state.debounce&&e-t.state.debounce>=300&&t.setState({debouncedLocation:t.state.location,debounce:null})}),500)}else t.setState({debounce:Date.now()})}))}},{key:"children",value:function(){var e=this;return this.props.children.map((function(t){return a.a.cloneElement(t,{location:e.state.location,debouncedLocation:e.state.debouncedLocation},[])}))}},{key:"render",value:function(){return a.a.createElement(F,{ref:this.scrollable,offset:this.props.offset},a.a.createElement(L,{size:this.props.size},this.children()))}}]),n}(a.a.Component),S=m.b.div.withConfig({displayName:"Point",componentId:"sc-1aop68s-0"})(["position:absolute;left:","px;bottom:0px;display:flex;align-items:flex-start;"],(function(e){return e.location})),W=Object(m.c)(m.b.div.withConfig({displayName:"Point__Arrow",componentId:"sc-1aop68s-1"})(["width:5px;height:","px;margin-right:5px;border-left:1px solid ",";border-top:1px solid ",";transition:height 0.5s ease-out;"],(function(e){return 70*e.layer}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.text}))),T=m.b.div.withConfig({displayName:"Point__Title",componentId:"sc-1aop68s-2"})(["margin-top:-10px;width:max-content;max-width:300px;"]),M=function(e){var t=e.point;e.maxYear;return a.a.createElement(S,{location:t.location},a.a.createElement(W,{layer:t.layer||1}),a.a.createElement(T,null,t.title))};M.maxWidth=300;var z=M,D=m.b.div.withConfig({displayName:"Info",componentId:"ye6kgs-0"})(["position:absolute;left:","px;top:10%;display:flex;flex-direction:column-reverse;"],(function(e){return e.location})),A=m.b.div.withConfig({displayName:"Info__Riser",componentId:"ye6kgs-1"})(["height:100%;"]),B=m.b.div.withConfig({displayName:"Info__Title",componentId:"ye6kgs-2"})(["width:80vw;max-width:600px;"]),P=function(e){var t=e.point,n=e.maxYear;return t.yearsFromToday>n?null:a.a.createElement(D,{location:t.location},a.a.createElement(A,null),a.a.createElement(B,null,t.title))},R=function(e){var t=e.point,n=e.maxYear;if(t.yearsFromToday>n)return null;switch(t.type){case"point":return a.a.createElement(z,{point:t});case"info":return a.a.createElement(P,{point:t});default:return null}},H=m.b.div.withConfig({displayName:"Data__DataContainer",componentId:"sc-1xysers-0"})(["height:100%;width:100%;position:relative;"]),J=function(e,t){var n=t.debouncedLocation;return e>=n-z.maxWidth&&e<=n+window.innerWidth},G=function(e){return e.debouncedLocation-X()},U=function(e){return e.debouncedLocation+window.innerWidth+X()},X=function(){return 10*window.innerWidth},$=function(e){return a.a.createElement(H,null,function(e){for(var t=e.data.filter((function(t){return t.location>=G(e)&&t.location<=U(e)})),n=1,o=0;o<t.length;o++){var a=t[o];"point"===a.type&&J(a.location,e)&&(t[o]=Object.assign({},a,{layer:n}),n+=1)}return t}(e).map((function(t){return a.a.createElement(R,{key:t.title,point:t,maxYear:e.maxYear})})))},q=Object(m.c)(m.b.div.attrs((function(e){var t=e.lineLength,n=e.location;return{style:{height:"".concat(t,"px"),left:"".concat(n,"px")}}})).withConfig({displayName:"Mark",componentId:"sc-1nxel93-0"})(["width:1px;background-color:",";position:absolute;top:0;"],(function(e){return e.theme.colors.primary}))),K=function(e){e.markingLocation;var t=e.location,n=10;return t%1e3===0?n=50:t%100===0&&(n=20),a.a.createElement(q,{lineLength:n,location:t})},Q=m.b.div.withConfig({displayName:"Counter",componentId:"sc-1sui342-0"})(["position:fixed;left:","px;bottom:20px;width:140px;transform:translateX(-50%);display:flex;flex-direction:column-reverse;justify-content:flex-end;align-items:center;z-index:10;opacity:",";transition:opacity 0.5s ease-out;"],(function(e){return e.innerWidth/2}),(function(e){return e.show?"1":"0"})),V=m.b.div.withConfig({displayName:"Counter__Arrow",componentId:"sc-1sui342-1"})(["height:0;width:0;margin-bottom:20px;border-bottom:20px solid #FFF5E9;border-left:20px solid transparent;border-right:20px solid transparent;"]),Z=m.b.div.withConfig({displayName:"Counter__TransparentBackground",componentId:"sc-1sui342-2"})(["position:absolute;height:150%;width:150%;background-image:radial-gradient(#140E06,transparent);z-index:-1;"]),ee=function(e){var t=e.year,n=!0;return(t>e.maxYear||isNaN(t))&&(n=!1),0===t&&(t+=0),a.a.createElement(Q,{show:n,innerWidth:window.innerWidth},a.a.createElement(Z,null),a.a.createElement("div",null,a.a.createElement("div",null,function(e){return e.toLocaleString("en")}(t)),a.a.createElement("div",null,"years ago")),a.a.createElement(V,null))},te=function(e){return Math.max(function(e){return 10*Math.round((e.debouncedLocation-5*window.innerWidth)/10)}(e),0)},ne=function(e){return Math.min(function(e){return e.debouncedLocation+5*window.innerWidth}(e),e.maxYear)},oe=function(e,t){return Math.round(te(e)+10*t)},ae=function(e){var t=e.location;return e.maxYear-Math.round(t+window.innerWidth/2)},ie=function(e){for(var t=[],n=function(e){return(ne(e)-te(e))/10}(e),o=0;o<=n;o++){var i=oe(e,o);t.push(a.a.createElement(K,{key:i,location:i}))}return t},re=m.b.div.withConfig({displayName:"Ruler__CounterContainer",componentId:"sc-4bvj51-0"})(["height:0;width:100%;"]),le=m.b.div.withConfig({displayName:"Ruler__MarksContainer",componentId:"sc-4bvj51-1"})(["width:100%;height:150px;position:relative;"]),ce=Object(m.c)(m.b.div.withConfig({displayName:"Ruler",componentId:"sc-4bvj51-2"})(["height:150px;width:100%;display:flex;flex-direction:column;border-top:1px solid ",";"],(function(e){return e.theme.colors.primary}))),se=function(e){return a.a.createElement(ce,null,a.a.createElement(re,null,a.a.createElement(ee,{year:ae(e),maxYear:e.maxYear})),a.a.createElement(le,null,ie(e)))},de=m.b.div.withConfig({displayName:"Timeline",componentId:"wofhas-0"})(["position:relative;width:100%;display:flex;flex-direction:column-reverse;"]),me=function(e){return a.a.createElement(de,null,a.a.createElement(se,e),a.a.createElement($,e))},ue=Object(m.c)(m.b.div.withConfig({displayName:"App__AppBase",componentId:"jag4nx-0"})(["color:",";background-color:",";"],(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.background}))),pe=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={data:[]},e}return Object(c.a)(n,null,[{key:"maxYear",get:function(){return 6e6}},{key:"offset",get:function(){return window.innerWidth}}]),Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.fetch("".concat(window.location,"/data.json")).then((function(e){return e.json()})).then((function(t){var o=new Date(Date.now()).getYear()+1900;t.forEach((function(e){if(e.year)e.yearsFromToday=0-(parseInt(e.year)-o),e.location=n.maxYear-e.yearsFromToday;else if(e.feet_from_beginning)e.location=parseInt(e.feet_from_beginning)*n.pixelsPerFoot,e.yearsFromToday=n.maxYear-e.location;else if(e.years_from_beginning)e.location=parseInt(e.years_from_beginning),e.yearsFromToday=n.maxYear-e.location;else if(e.years_ago)e.yearsFromToday=parseInt(e.years_ago),e.location=n.maxYear-e.yearsFromToday;else if("hide"!==e.type)throw new Error("data point missing location info: ".concat(e.title))}));var a=t.sort((function(e,t){return e.location<t.location}));e.setState({data:a})}))}},{key:"render",value:function(){return a.a.createElement(m.a,{theme:u},a.a.createElement(ue,{size:n.maxYear+n.offset},a.a.createElement(O,{size:n.maxYear+n.offset,offset:n.offset},a.a.createElement(N,{key:"intro",offset:n.offset}),a.a.createElement(me,{key:"timeline",data:this.state.data,maxYear:n.maxYear,offset:n.offset}))))}}],[{key:"pixelsPerFoot",get:function(){return 1560}}]),n}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.4a4832a0.chunk.js.map