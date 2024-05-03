"use strict";(self.webpackChunk_minimal_kit_cra_js=self.webpackChunk_minimal_kit_cra_js||[]).push([[3330],{50933:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(1413),r=n(45987),i=n(64554),l=n(50533),s=n(36314),o=n(4567),u=n(93517),c=n(83854),d=n(80184);function f(e){var t=e.link,n=e.activeLast,r=e.disabled,s=t.name,o=t.href,u=t.icon,f=(0,a.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},r&&!n&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),m=(0,d.jsxs)(d.Fragment,{children:[u&&(0,d.jsx)(i.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:u}),s]});return o?(0,d.jsx)(l.Z,{component:c.r,href:o,sx:f,children:m}):(0,d.jsxs)(i.Z,{sx:f,children:[" ",m," "]})}var m=["links","action","heading","moreLink","activeLast","sx"];function h(e){var t=e.links,n=e.action,c=e.heading,h=e.moreLink,p=e.activeLast,g=e.sx,v=(0,r.Z)(e,m),Z=t[t.length-1].name;return(0,d.jsxs)(i.Z,{sx:(0,a.Z)({},g),children:[(0,d.jsxs)(s.Z,{direction:"row",alignItems:"center",children:[(0,d.jsxs)(i.Z,{sx:{flexGrow:1},children:[c&&(0,d.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:c}),!!t.length&&(0,d.jsx)(u.Z,(0,a.Z)((0,a.Z)({separator:(0,d.jsx)(x,{})},v),{},{children:t.map((function(e){return(0,d.jsx)(f,{link:e,activeLast:p,disabled:e.name===Z},e.name||"")}))}))]}),n&&(0,d.jsxs)(i.Z,{sx:{flexShrink:0},children:[" ",n," "]})]}),!!h&&(0,d.jsx)(i.Z,{sx:{mt:2},children:h.map((function(e){return(0,d.jsx)(l.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function x(){return(0,d.jsx)(i.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},33330:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var a=n(6907),r=n(29439),i=n(72791),l=n(16002),s=n(12065),o=n(64554),u=n(36314),c=n(59256),d=n(89164),f=n(4567),m=n(38072),h=n(44e3),x=n(50933),p=n(31562),g=n(80184),v=[{value:0,label:"0\xb0C"},{value:20,label:"20\xb0C"},{value:37,label:"37\xb0C"},{value:100,label:"100\xb0C"}],Z=[{value:0,label:"$0"},{value:25,label:"250"},{value:50,label:"500"},{value:75,label:"750"},{value:100,label:"1000"}];function b(e){return e>0?"$".concat(e,"0"):"".concat(e)}function j(e){return e>0?"$".concat(e):e}function y(e){return"$".concat(e,"\xb0C")}function k(e){return v.findIndex((function(t){return t.value===e}))+1}function w(){var e=(0,i.useState)(30),t=(0,r.Z)(e,2),n=t[0],a=t[1],w=(0,i.useState)([20,37]),C=(0,r.Z)(w,2),N=C[0],S=C[1];return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(o.Z,{sx:{py:5,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,g.jsx)(d.Z,{children:(0,g.jsx)(x.Z,{heading:"Slider",links:[{name:"Components",href:m.H.components},{name:"Slider"}],moreLink:["https://mui.com/components/slider"]})})}),(0,g.jsx)(d.Z,{sx:{my:10},children:(0,g.jsxs)(l.ZP,{columns:{xs:1,md:3},spacing:3,children:[(0,g.jsx)(p.Z,{title:"Volume",children:(0,g.jsxs)(u.Z,{direction:"row",alignItems:"center",spacing:1,width:1,children:[(0,g.jsx)(h.Z,{icon:"eva:volume-mute-fill",width:24}),(0,g.jsx)(c.ZP,{value:n,onChange:function(e,t){a(t)},"aria-labelledby":"continuous-slider"}),(0,g.jsx)(h.Z,{icon:"eva:volume-up-fill",width:24})]})}),(0,g.jsx)(p.Z,{title:"Disabled",children:(0,g.jsx)(c.ZP,{disabled:!0,defaultValue:30})}),(0,g.jsx)(p.Z,{title:"Temperature",children:(0,g.jsx)(c.ZP,{defaultValue:30,getAriaValueText:y,valueLabelDisplay:"auto",step:10,marks:!0,min:10,max:110})}),(0,g.jsxs)(p.Z,{title:"Sizes",children:[(0,g.jsx)(c.ZP,{size:"medium",marks:!0,min:10,step:10,max:110,defaultValue:30,valueLabelDisplay:"auto",getAriaValueText:y}),(0,g.jsx)(c.ZP,{marks:!0,min:10,step:10,max:110,defaultValue:30,valueLabelDisplay:"auto",getAriaValueText:y})]}),(0,g.jsx)(p.Z,{title:"Small steps",children:(0,g.jsx)(c.ZP,{defaultValue:5e-8,getAriaValueText:y,step:1e-8,marks:!0,min:-5e-8,max:1e-7,valueLabelDisplay:"auto"})}),(0,g.jsx)(p.Z,{title:"Custom marks",children:(0,g.jsx)(c.ZP,{defaultValue:20,getAriaValueText:y,step:10,valueLabelDisplay:"auto",marks:v})}),(0,g.jsx)(p.Z,{title:"Restricted values",children:(0,g.jsx)(c.ZP,{defaultValue:20,valueLabelFormat:k,getAriaValueText:y,step:null,valueLabelDisplay:"auto",marks:v})}),(0,g.jsxs)(p.Z,{title:"Range",children:[(0,g.jsx)(o.Z,{sx:{width:"100%"},children:(0,g.jsx)(c.ZP,{scale:function(e){return 10*e},step:10,marks:Z,value:N,onChange:function(e,t){S(t)},valueLabelDisplay:"on",getAriaValueText:b,valueLabelFormat:j})}),(0,g.jsxs)(o.Z,{sx:{p:2,width:"100%",borderRadius:1,bgcolor:function(e){return(0,s.Fq)(e.palette.grey[500],.12)}},children:[(0,g.jsxs)(f.Z,{variant:"subtitle2",gutterBottom:!0,children:["Min: ",b(N[0])]}),(0,g.jsxs)(f.Z,{variant:"subtitle2",children:["Max: ",b(N[1])]})]})]})]})})]})}function C(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a.ql,{children:(0,g.jsx)("title",{children:" MUI: Slider"})}),(0,g.jsx)(w,{})]})}},31562:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(1413),r=n(45987),i=n(12065),l=n(27938),s=n(9585),o=n(36314),u=n(80184),c=["title","sx","children"];function d(e){var t=e.title,n=e.sx,d=e.children,f=(0,r.Z)(e,c);return(0,u.jsxs)(l.Z,{variant:"outlined",sx:{borderRadius:1.5,borderStyle:"dashed",bgcolor:function(e){return(0,i.Fq)(e.palette.grey[500],.04)}},children:[t&&(0,u.jsx)(s.Z,{title:t}),(0,u.jsx)(o.Z,(0,a.Z)((0,a.Z)({spacing:3,direction:"row",alignItems:"center",justifyContent:"center",flexWrap:"wrap",sx:(0,a.Z)({p:5,minHeight:180},n)},f),{},{children:d}))]})}},16002:function(e,t,n){n.d(t,{ZP:function(){return C}});var a=n(93433),r=n(29439),i=n(63366),l=n(87462),s=n(94419),o=n(54164),u=n(66934),c=n(31402),d=n(51184),f=n(45682),m=n(82466),h=n(62876),x=n(6117),p=n(38717),g=n(72791),v=n(21217);function Z(e){return(0,v.Z)("MuiMasonry",e)}(0,n(75878).Z)("MuiMasonry",["root"]);var b=n(80184),j=["children","className","component","columns","spacing","defaultColumns","defaultHeight","defaultSpacing"],y=function(e){return Number(e.replace("px",""))},k={flexBasis:"100%",width:0,margin:0,padding:0},w=(0,u.ZP)("div",{name:"MuiMasonry",slot:"Root",overridesResolver:function(e,t){return[t.root]}})((function(e){var t=e.ownerState,n=e.theme,a={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"flex-start",boxSizing:"border-box","& > *":{boxSizing:"border-box"}},r={};if(t.isSSR){for(var i={},s=y(n.spacing(t.defaultSpacing)),o=1;o<=t.defaultColumns;o+=1)i["&:nth-of-type(".concat(t.defaultColumns,"n+").concat(o%t.defaultColumns,")")]={order:o};return r.height=t.defaultHeight,r.margin=-s/2,r["& > *"]=(0,l.Z)({},a["& > *"],i,{margin:s/2,width:"calc(".concat((100/t.defaultColumns).toFixed(2),"% - ").concat(s,"px)")}),(0,l.Z)({},a,r)}var u=(0,d.P$)({values:t.spacing,breakpoints:n.breakpoints.values}),c=(0,f.hB)(n);a=(0,m.Z)(a,(0,d.k9)({theme:n},u,(function(e){var n;if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e){var a=Number(e);n=(0,f.NA)(c,a)}else n=e;return(0,l.Z)({margin:"calc(0px - (".concat(n," / 2))"),"& > *":{margin:"calc(".concat(n," / 2)")}},t.maxColumnHeight&&{height:"number"===typeof n?Math.ceil(t.maxColumnHeight+y(n)):"calc(".concat(t.maxColumnHeight,"px + ").concat(n,")")})})));var h=(0,d.P$)({values:t.columns,breakpoints:n.breakpoints.values});return a=(0,m.Z)(a,(0,d.k9)({theme:n},h,(function(e){var t=Number(e),n="".concat((100/t).toFixed(2),"%"),a="string"===typeof u&&!Number.isNaN(Number(u))||"number"===typeof u?(0,f.NA)(c,Number(u)):"0px";return{"& > *":{width:"calc(".concat(n," - ").concat(a,")")}}}))),"object"===typeof u&&(a=(0,m.Z)(a,(0,d.k9)({theme:n},u,(function(e,t){if(t){var n=Number(e),a=Object.keys(h).pop(),r=(0,f.NA)(c,n),i="object"===typeof h?h[t]||h[a]:h,l="".concat((100/i).toFixed(2),"%");return{"& > *":{width:"calc(".concat(l," - ").concat(r,")")}}}return null})))),a})),C=g.forwardRef((function(e,t){var n=(0,c.Z)({props:e,name:"MuiMasonry"}),u=n.children,d=n.className,f=n.component,m=void 0===f?"div":f,v=n.columns,C=void 0===v?4:v,N=n.spacing,S=void 0===N?1:N,M=n.defaultColumns,L=n.defaultHeight,A=n.defaultSpacing,V=(0,i.Z)(n,j),P=g.useRef(),R=g.useState(),F=(0,r.Z)(R,2),H=F[0],T=F[1],_=!H&&L&&void 0!==M&&void 0!==A,D=g.useState(_?M-1:0),E=(0,r.Z)(D,2),I=E[0],z=E[1],$=(0,l.Z)({},n,{spacing:S,columns:C,maxColumnHeight:H,defaultColumns:M,defaultHeight:L,defaultSpacing:A,isSSR:_}),B=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},Z,t)}($),O=function(e){if(P.current&&e&&0!==e.length){var t=P.current,n=P.current.firstChild,r=t.clientWidth,i=n.clientWidth;if(0!==r&&0!==i){var l=window.getComputedStyle(n),s=y(l.marginLeft),u=y(l.marginRight),c=Math.round(r/(i+s+u)),d=new Array(c).fill(0),f=!1;t.childNodes.forEach((function(e){if(e.nodeType===Node.ELEMENT_NODE&&"line-break"!==e.dataset.class&&!f){var t=window.getComputedStyle(e),n=y(t.marginTop),r=y(t.marginBottom),i=y(t.height)?Math.ceil(y(t.height))+n+r:0;if(0!==i){for(var l=0;l<e.childNodes.length;l+=1){var s=e.childNodes[l];if("IMG"===s.tagName&&0===s.clientHeight){f=!0;break}}if(!f){var o=d.indexOf(Math.min.apply(Math,(0,a.Z)(d)));d[o]+=i;var u=o+1;e.style.order=u}}else f=!0}})),f||o.flushSync((function(){T(Math.max.apply(Math,(0,a.Z)(d))),z(c>0?c-1:0)}))}}};(0,h.Z)((function(){if("undefined"!==typeof ResizeObserver){var e,t=new ResizeObserver((function(){e=window.requestAnimationFrame(O)}));return P.current&&P.current.childNodes.forEach((function(e){t.observe(e)})),function(){e&&window.cancelAnimationFrame(e),t&&t.disconnect()}}}),[C,S,u]);var q=(0,x.Z)(t,P),W=new Array(I).fill("").map((function(e,t){return(0,b.jsx)("span",{"data-class":"line-break",style:(0,l.Z)({},k,{order:t+1})},t)}));return(0,b.jsxs)(w,(0,l.Z)({as:m,className:(0,p.Z)(B.root,d),ref:q,ownerState:$},V,{children:[u,W]}))}))},38717:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.Z=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}}}]);
//# sourceMappingURL=3330.debc2553.chunk.js.map