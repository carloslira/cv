(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{179:function(e,t,n){},181:function(e,t,n){},183:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(29),o=n.n(i),c=n(2),l=n.n(c),s=n(10),p=n(48),m=n(65),u=n.n(m),d=n(66),h=n.n(d),b=n(19),f={};f={backend:{loadPath:"/cv/locales/{{lng}}/{{ns}}.json"}},p.a.use(u.a).use(h.a).use(b.b).init(Object(s.a)({debug:!0,fallbackLng:"en-US",ns:["translations"],defaultNS:"translations",react:{wait:!0}},f));p.a;var g=n(1),x=n(4),O=n(5),j=n(7),E=n(6),w=n(8),k=n(3),v=n.n(k),y=n(70),N=n(23),C=n(14),I=n(72),L=n.n(I),B=n(73),R=n.n(B),S=n(74),T=n.n(S),W=n(75),A=n.n(W),H={transition:"all .3s ease"},D={fontWeight:"300",lineHeight:"1.5em",fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif'},M=function(e){return{a:Object(s.a)({},D,{margin:"0",color:"white",outline:"none",fontWeight:"500",textDecoration:"none"})}},z=function(e){function t(){return Object(x.a)(this,t),Object(j.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.props,t=e.rel,n=e.href,a=e.target,i=e.classes,o=e.children,c=e.className;return r.a.createElement("a",{href:n,target:a,rel:t,className:v()(c,i.a)},o)}}]),t}(r.a.Component),P=l()(M)(z),_=function(e){return{list:{padding:"0",listStyle:"none"},listItem:{margin:"7px",display:"inline-block"},iconOutline:Object(s.a)({},H,{color:"white",padding:"5px",display:"flex",borderRadius:"50%",alignItems:"center",justifyContent:"center",border:"2px solid white",backgroundColor:"#DC3275","&:hover":{backgroundColor:"white",color:"#DC3275"}})}},K=function(e){function t(){return Object(x.a)(this,t),Object(j.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.className;return r.a.createElement("ul",{className:v()(n,t.list)},r.a.createElement("li",{className:t.listItem},r.a.createElement(P,{href:"https://github.com/carloslira",target:"_blank",rel:"noopener noreferrer",className:t.iconOutline},r.a.createElement(A.a,null))),r.a.createElement("li",{className:t.listItem},r.a.createElement(P,{href:"https://www.linkedin.com/in/carlos-lira-0938a5a2",target:"_blank",rel:"noopener noreferrer",className:t.iconOutline},r.a.createElement(R.a,null))),r.a.createElement("li",{className:t.listItem},r.a.createElement(P,{href:"https://www.facebook.com/carloshnlira",target:"_blank",rel:"noopener noreferrer",className:t.iconOutline},r.a.createElement(L.a,null))),r.a.createElement("li",{className:t.listItem},r.a.createElement(P,{href:"https://www.instagram.com/carloshenriquelira",target:"_blank",rel:"noopener noreferrer",className:t.iconOutline},r.a.createElement(T.a,null))))}}]),t}(r.a.Component),U=l()(_)(K),q=function(e){return{p:Object(s.a)({},D,{margin:"0",textAlign:"left"})}},F=function(e){function t(){return Object(x.a)(this,t),Object(j.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.children,a=e.className;return r.a.createElement("p",{className:v()(a,t.p)},n)}}]),t}(r.a.Component),G=l()(q)(F),J={"en-US":{nameI18nKey:"languages.en-US",flagIcon:"https://lipis.github.io/flag-icon-css/flags/4x3/us.svg"},"pt-BR":{nameI18nKey:"languages.pt-BR",flagIcon:"https://lipis.github.io/flag-icon-css/flags/4x3/br.svg"}},V=function(e){var t,n;return{list:Object(s.a)({},H,{padding:"0",float:"right",height:"40px",margin:"23px 7px",overflow:"hidden",verticalAlign:"top",borderRadius:"20px",display:"inline-block",backgroundColor:"white","&:hover":{height:"80px"}}),listItem:{padding:"0px 20px","&:hover":{cursor:"pointer",backgroundColor:"#E1E2E1"},"&:first-child":{border:"none",background:"white!important"}},listItemContainer:{height:"40px",display:"flex",alignItems:"center"},listItemIcon:(t={},Object(g.a)(t,e.breakpoints.down("xs"),{marginRight:"0"}),Object(g.a)(t,"height","15px"),Object(g.a)(t,"marginRight","5px"),t),listItemText:(n={},Object(g.a)(n,e.breakpoints.down("xs"),{display:"none"}),Object(g.a)(n,"lineHeight","15px"),Object(g.a)(n,"display","inline-block"),n)}},Y=function(e){function t(){return Object(x.a)(this,t),Object(j.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.className;return r.a.createElement(b.a,null,function(e,a){var i=a.i18n,o=a.lng;"en"===o?i.changeLanguage("en-US"):"pt"===o&&i.changeLanguage("pt-BR");var c=Object.keys(J).filter(function(e){return-1===e.indexOf(o)});return r.a.createElement("ul",{className:v()(n,t.list)},r.a.createElement("li",{className:t.listItem},r.a.createElement("div",{className:t.listItemContainer},r.a.createElement("img",{src:J[o].flagIcon,className:t.listItemIcon,alt:""}),r.a.createElement(G,{className:t.listItemText},e(J[o].nameI18nKey)))),c.map(function(n){return r.a.createElement("li",{className:t.listItem,onClick:function(e){return i.changeLanguage(n)},key:n},r.a.createElement("div",{className:t.listItemContainer},r.a.createElement("img",{src:J[n].flagIcon,className:t.listItemIcon,alt:""}),r.a.createElement(G,{className:t.listItemText},e(J[n].nameI18nKey))))}))})}}]),t}(r.a.Component),Q=l()(V)(Y),X=function(e){return{container:{minHeight:"200px",backgroundColor:"#DC3275"}}},Z=function(e){function t(){return Object(x.a)(this,t),Object(j.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.className;return r.a.createElement(b.a,null,function(e,a){a.i18n;return r.a.createElement("div",{className:v()(n,t.container)},r.a.createElement(C.Grid,{fluid:!0},r.a.createElement(C.Row,null,r.a.createElement(C.Col,{xs:8},r.a.createElement(U,null)),r.a.createElement(C.Col,{xs:4},r.a.createElement(Q,null)))))})}}]),t}(r.a.Component),$=l()(X)(Z),ee=n(76),te=n.n(ee),ne=n(77),ae=n.n(ne),re=n(78),ie=n.n(re),oe=function(e){return{container:{padding:"150px 0",position:"relative",backgroundColor:"#C2185B"},photoOutline:{left:"50%",top:"-84px",width:"208px",height:"208px",maxWidth:"100%",borderRadius:"50%",position:"absolute",marginLeft:"-104px",backgroundColor:"white"},photo:{left:"50%",top:"-80px",width:"200px",maxWidth:"100%",borderRadius:"50%",position:"absolute",marginLeft:"-100px"},photoButton:Object(s.a)(Object(g.a)({},e.printable,{display:"none"}),H,{left:"50%",width:"35px",height:"35px",border:"none",display:"flex",outline:"none",borderRadius:"50%",color:"#C2185B",position:"absolute",alignItems:"center",justifyContent:"center",backgroundColor:"white","&:hover":{color:"white",cursor:"pointer",backgroundColor:"#C2185B"}}),photoButtonIcon:{width:"20px",height:"20px"},hireMeButton:{top:"-80px",marginLeft:"50px"},downloadButton:{top:"-45px",marginLeft:"75px"},name:{color:"white",fontSize:"45px",fontWeight:"400",textAlign:"center"},role:{fontSize:"25px",textAlign:"center",color:"rgba(255, 255, 255, 0.8)"}}},ce=function(e){function t(){var e,n;Object(x.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(j.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).print=function(e){var t=document.body.innerHTML,n=document.getElementById("sections").innerHTML;document.body.innerHTML=n,window.print(),document.body.innerHTML=t},n}return Object(w.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.classes,a=t.className;return r.a.createElement(b.a,null,function(t,i){i.i18n;return r.a.createElement("div",{className:v()(a,n.container)},r.a.createElement("div",{className:n.photoOutline}),r.a.createElement("img",{src:ie.a,className:n.photo,alt:""}),r.a.createElement("button",{className:v()(n.photoButton,n.hireMeButton)},r.a.createElement(te.a,{className:n.photoButtonIcon})),r.a.createElement("button",{className:v()(n.photoButton,n.downloadButton),onClick:e.print},r.a.createElement(ae.a,{className:n.photoButtonIcon})),r.a.createElement(C.Grid,{fluid:!0},r.a.createElement(C.Row,{center:"xs"},r.a.createElement(C.Col,{xs:12},r.a.createElement(G,{className:n.name},"Carlos Lira")),r.a.createElement(C.Col,{xs:12},r.a.createElement(G,{className:n.role},t("summary.role"))))))})}}]),t}(r.a.Component),le=l()(oe)(ce),se=n(79),pe=n.n(se),me=n(80),ue=n.n(me),de=function(e){var t;return{container:{display:"flex",backgroundColor:"#A90042"},list:{margin:"0 auto",padding:"15px 0",listStyle:"none"},listItem:(t={},Object(g.a)(t,e.breakpoints.up("sm"),{display:"inline-block"}),Object(g.a)(t,"color","white"),Object(g.a)(t,"padding","0 20px"),t),listItemContainer:{display:"flex",alignItems:"center"},listItemIcon:{padding:"10px"}}},he=function(e){function t(){return Object(x.a)(this,t),Object(j.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.className;return r.a.createElement("div",{className:v()(n,t.container)},r.a.createElement("ul",{className:t.list},r.a.createElement("li",{className:t.listItem},r.a.createElement("div",{className:t.listItemContainer},r.a.createElement(ue.a,{className:t.listItemIcon}),r.a.createElement(P,{href:"tel:+5581991177852"},"+55 (81) 99117-7852"))),r.a.createElement("li",{className:t.listItem},r.a.createElement("div",{className:t.listItemContainer},r.a.createElement(pe.a,{className:t.listItemIcon}),r.a.createElement(P,{href:"mailto:carloshenriquen.lira@gmail.com"},"carloshenriquen.lira@gmail.com")))))}}]),t}(r.a.Component),be=l()(de)(he),fe=function(e){return{container:{display:"inline-block"},link:Object(s.a)({},H,D,{color:"white",display:"block",padding:"0 10px",fontWeight:"500",lineHeight:"".concat(64,"px"),"&:hover":{cursor:"pointer",backgroundColor:"#DC3275"}}),activeLink:{backgroundColor:"#C2185B"}}},ge=function(e){function t(){return Object(x.a)(this,t),Object(j.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.props,t=e.to,n=e.name,a=e.classes,i=e.className;return r.a.createElement("li",{className:v()(i,a.container)},r.a.createElement(N.Link,{to:t,spy:!0,smooth:!0,duration:250,containerId:"sections",className:a.link,activeClass:a.activeLink},n))}}]),t}(r.a.Component),xe=l()(fe)(ge),Oe=function(e){return{container:{width:"100%",display:"flex",height:"".concat(64,"px"),backgroundColor:"#8F0028"},list:{padding:"0",margin:"0 auto",alignSelf:"center"},listItem:{display:"inline-block"},listItemLink:Object(s.a)({},H,D,{color:"white",display:"block",padding:"0 10px",fontWeight:"500",lineHeight:"".concat(64,"px"),"&:hover":{cursor:"pointer",backgroundColor:"#DC3275"}}),listItemLinkActive:{backgroundColor:"#C2185B"}}},je=function(e){function t(){return Object(x.a)(this,t),Object(j.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.children,a=e.className;return r.a.createElement("nav",{className:v()(a,t.container)},r.a.createElement("ul",{className:t.list},n))}}]),t}(r.a.Component),Ee=l()(Oe)(je),we=n(81),ke=n.n(we),ve=function(e){var t,n,a,r;return{container:(t={},Object(g.a)(t,e.breakpoints.down("sm"),{paddingLeft:"70px",paddingRight:"25px",width:"calc(100% - 80px)","&:before":{left:"60px !important",borderWidth:"10px 10px 10px 0 !important",borderColor:"transparent white transparent transparent !important"}}),Object(g.a)(t,"padding","10px 40px"),Object(g.a)(t,"position","relative"),Object(g.a)(t,"width","calc(50% - 80px)"),Object(g.a)(t,"backgroundColor","inherit"),Object(g.a)(t,"&:after",{zIndex:1,top:"15px",content:'""',width:"25px",height:"25px",right:"-17px",borderRadius:"50%",position:"absolute",backgroundColor:"white",border:"4px solid ".concat("#C2185B")}),t),left:(n={},Object(g.a)(n,e.breakpoints.down("sm"),{"&:after":{left:"15px"}}),Object(g.a)(n,"left","0"),Object(g.a)(n,"&:before",{width:"0",height:"0",top:"22px",zIndex:"1",right:"30px",content:'" "',position:"absolute",border:"medium solid white",borderWidth:"10px 0 10px 10px",borderColor:"transparent transparent transparent white"}),n),right:(r={},Object(g.a)(r,e.breakpoints.down("sm"),{left:"0%"}),Object(g.a)(r,"left","50%"),Object(g.a)(r,"&:before",{width:"0",height:"0",top:"22px",zIndex:"1",left:"30px",content:'" "',position:"absolute",border:"medium solid white",borderWidth:"10px 10px 10px 0",borderColor:"transparent white transparent transparent"}),Object(g.a)(r,"&:after",(a={},Object(g.a)(a,e.breakpoints.down("sm"),{left:"15px"}),Object(g.a)(a,"left","-16px"),a)),r),content:{borderRadius:"6px",padding:"20px 30px",position:"relative",color:"#4C4C4C",backgroundColor:"white"},periodContainer:{display:"flex",alignItems:"center"},periodIcon:{marginRight:"10px"},period:{fontWeight:"400"},role:{marginTop:"10px",color:"#C2185B"},company:{fontSize:"13px"},companyLink:Object(s.a)({},H,{fontWeight:"400",color:"#4C4C4C","&:hover":{color:"#8F0028"}}),description:{marginTop:"15px"}}},ye=function(e){function t(){return Object(x.a)(this,t),Object(j.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.props,t=e.side,n=e.role,a=e.since,i=e.until,o=e.classes,c=e.className,l=e.description,s=e.companyLink,p=e.companyName;return r.a.createElement(b.a,null,function(e,m){m.i18n;return r.a.createElement("div",{className:v()(c,o.container,o[t])},r.a.createElement("div",{className:o.content},r.a.createElement("div",{className:o.periodContainer},r.a.createElement(ke.a,{className:o.periodIcon}),r.a.createElement(G,{className:o.period},a," - ",i)),r.a.createElement(G,{className:o.role},n),r.a.createElement(G,{className:o.company},e("at")," ",r.a.createElement(P,{href:s,target:"_blank",rel:"noopener noreferrer",className:o.companyLink},p)),r.a.createElement(G,{className:o.description},l)))})}}]),t}(r.a.Component),Ne=l()(ve)(ye),Ce=function(e){var t;return{container:{margin:"0 auto",maxWidth:"100%",position:"relative","&:after":(t={},Object(g.a)(t,e.breakpoints.down("sm"),{left:"31px"}),Object(g.a)(t,"left","50%"),Object(g.a)(t,"bottom","0"),Object(g.a)(t,"width","6px"),Object(g.a)(t,"content",'""'),Object(g.a)(t,"marginLeft","-3px"),Object(g.a)(t,"position","absolute"),Object(g.a)(t,"backgroundColor","white"),Object(g.a)(t,"top","-".concat(64,"px")),t)}}},Ie=function(e){function t(){return Object(x.a)(this,t),Object(j.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.children,a=e.className;return r.a.createElement("div",{className:v()(a,t.container)},n)}}]),t}(r.a.Component),Le=l()(Ce)(Ie),Be=function(e){return{}},Re=function(e){function t(){return Object(x.a)(this,t),Object(j.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.props,t=(e.classes,e.className);return r.a.createElement(b.a,null,function(e,n){n.i18n;return r.a.createElement(C.Grid,{fluid:!0,className:t},r.a.createElement(C.Row,{center:"xs"},r.a.createElement(C.Col,{xs:12,md:8},r.a.createElement(Le,null,r.a.createElement(Ne,{side:"left",since:2017,until:"Present",role:"Development Team Leader",companyLink:"https://coinwise.io/",companyName:"CoinWISE",description:e("experiences.coinwise")}),r.a.createElement(Ne,{side:"right",since:2014,until:2017,role:"Software Engineer",companyLink:"https://www.pitang.com/",companyName:"Pitang Agile IT",description:e("experiences.pitang2")}),r.a.createElement(Ne,{side:"left",since:2014,until:2014,role:"Intern",companyLink:"https://www.pitang.com/",companyName:"Pitang Agile IT",description:e("experiences.pitang1")}),r.a.createElement(Ne,{side:"right",since:2013,until:2014,role:"Intern",companyLink:"http://www.vianaemoura.com.br/",companyName:"Viana & Moura",description:e("experiences.viana&moura")})))))})}}]),t}(r.a.Component),Se=l()(Be)(Re),Te=function(e){return{wrapper:{height:"100vh",overflowY:"scroll",backgroundColor:"#E1E2E1"},stickyBox:{zIndex:"2"},section:{paddingTop:"".concat(64,"px")}}},We=function(e){function t(){var e,n;Object(x.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(j.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={sections:{}},n}return Object(w.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){N.scrollSpy.update()}},{key:"render",value:function(){var e=this.props.classes,t=this.state.sections,n=v()(e.section,Object(g.a)({},e.activeSection,t.experiences&&t.experiences.isActive));return r.a.createElement(N.Element,{id:"sections",className:e.wrapper},r.a.createElement($,null),r.a.createElement(le,null),r.a.createElement(be,null),r.a.createElement(y.a,{className:e.stickyBox},r.a.createElement(Ee,null,r.a.createElement(xe,{name:"Experiences",to:"experiences"}))),r.a.createElement(N.Element,{name:"experiences",className:n},r.a.createElement(Se,null)),r.a.createElement(N.Element,{name:"skills",className:e.section},"Skills"))}}]),t}(r.a.Component),Ae=l()(Te)(We),He=["xs","sm","md","lg","xl"],De={xs:0,sm:576,md:768,lg:992,xl:1200},Me=function(e){return"@media (min-width: ".concat(De[e],"px)")},ze=function(e,t){var n=He.indexOf(t)+1;return n===He.length?Me(e):"@media (min-width: ".concat(De[e],"px and max-width: ").concat(De[He[n]]-.05,"px)")},Pe={printable:"@media print",breakpoints:{up:Me,down:function(e){var t=He.indexOf(e)+1,n=De[He[t]];return t===He.length?Me("xs"):"@media (max-width: ".concat(n-.05,"px)")},keys:He,only:function(e){return ze(e,e)},width:function(e){return De[e]},values:De,between:ze}};n(179),n(181);o.a.render(r.a.createElement(c.ThemeProvider,{theme:Pe},r.a.createElement(Ae,null)),document.getElementById("root"))},78:function(e,t,n){e.exports=n.p+"static/media/placeholder.fc047347.png"},82:function(e,t,n){e.exports=n(183)}},[[82,2,1]]]);
//# sourceMappingURL=main.daee7382.chunk.js.map