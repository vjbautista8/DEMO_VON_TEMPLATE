"use strict";(self.webpackChunk_minimal_kit_cra_js=self.webpackChunk_minimal_kit_cra_js||[]).push([[1391],{16002:function(e,t,o){o.d(t,{ZP:function(){return k}});var r=o(93433),a=o(29439),n=o(63366),i=o(87462),c=o(94419),s=o(54164),l=o(66934),d=o(31402),u=o(51184),h=o(45682),f=o(82466),m=o(62876),p=o(6117),v=o(38717),g=o(72791),b=o(21217);function w(e){return(0,b.Z)("MuiMasonry",e)}(0,o(75878).Z)("MuiMasonry",["root"]);var Z=o(80184),x=["children","className","component","columns","spacing","defaultColumns","defaultHeight","defaultSpacing"],y=function(e){return Number(e.replace("px",""))},N={flexBasis:"100%",width:0,margin:0,padding:0},C=(0,l.ZP)("div",{name:"MuiMasonry",slot:"Root",overridesResolver:function(e,t){return[t.root]}})((function(e){var t=e.ownerState,o=e.theme,r={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"flex-start",boxSizing:"border-box","& > *":{boxSizing:"border-box"}},a={};if(t.isSSR){for(var n={},c=y(o.spacing(t.defaultSpacing)),s=1;s<=t.defaultColumns;s+=1)n["&:nth-of-type(".concat(t.defaultColumns,"n+").concat(s%t.defaultColumns,")")]={order:s};return a.height=t.defaultHeight,a.margin=-c/2,a["& > *"]=(0,i.Z)({},r["& > *"],n,{margin:c/2,width:"calc(".concat((100/t.defaultColumns).toFixed(2),"% - ").concat(c,"px)")}),(0,i.Z)({},r,a)}var l=(0,u.P$)({values:t.spacing,breakpoints:o.breakpoints.values}),d=(0,h.hB)(o);r=(0,f.Z)(r,(0,u.k9)({theme:o},l,(function(e){var o;if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e){var r=Number(e);o=(0,h.NA)(d,r)}else o=e;return(0,i.Z)({margin:"calc(0px - (".concat(o," / 2))"),"& > *":{margin:"calc(".concat(o," / 2)")}},t.maxColumnHeight&&{height:"number"===typeof o?Math.ceil(t.maxColumnHeight+y(o)):"calc(".concat(t.maxColumnHeight,"px + ").concat(o,")")})})));var m=(0,u.P$)({values:t.columns,breakpoints:o.breakpoints.values});return r=(0,f.Z)(r,(0,u.k9)({theme:o},m,(function(e){var t=Number(e),o="".concat((100/t).toFixed(2),"%"),r="string"===typeof l&&!Number.isNaN(Number(l))||"number"===typeof l?(0,h.NA)(d,Number(l)):"0px";return{"& > *":{width:"calc(".concat(o," - ").concat(r,")")}}}))),"object"===typeof l&&(r=(0,f.Z)(r,(0,u.k9)({theme:o},l,(function(e,t){if(t){var o=Number(e),r=Object.keys(m).pop(),a=(0,h.NA)(d,o),n="object"===typeof m?m[t]||m[r]:m,i="".concat((100/n).toFixed(2),"%");return{"& > *":{width:"calc(".concat(i," - ").concat(a,")")}}}return null})))),r})),k=g.forwardRef((function(e,t){var o=(0,d.Z)({props:e,name:"MuiMasonry"}),l=o.children,u=o.className,h=o.component,f=void 0===h?"div":h,b=o.columns,k=void 0===b?4:b,S=o.spacing,R=void 0===S?1:S,M=o.defaultColumns,z=o.defaultHeight,F=o.defaultSpacing,H=(0,n.Z)(o,x),A=g.useRef(),j=g.useState(),_=(0,a.Z)(j,2),E=_[0],O=_[1],P=!E&&z&&void 0!==M&&void 0!==F,W=g.useState(P?M-1:0),I=(0,a.Z)(W,2),T=I[0],V=I[1],B=(0,i.Z)({},o,{spacing:R,columns:k,maxColumnHeight:E,defaultColumns:M,defaultHeight:z,defaultSpacing:F,isSSR:P}),D=function(e){var t=e.classes;return(0,c.Z)({root:["root"]},w,t)}(B),L=function(e){if(A.current&&e&&0!==e.length){var t=A.current,o=A.current.firstChild,a=t.clientWidth,n=o.clientWidth;if(0!==a&&0!==n){var i=window.getComputedStyle(o),c=y(i.marginLeft),l=y(i.marginRight),d=Math.round(a/(n+c+l)),u=new Array(d).fill(0),h=!1;t.childNodes.forEach((function(e){if(e.nodeType===Node.ELEMENT_NODE&&"line-break"!==e.dataset.class&&!h){var t=window.getComputedStyle(e),o=y(t.marginTop),a=y(t.marginBottom),n=y(t.height)?Math.ceil(y(t.height))+o+a:0;if(0!==n){for(var i=0;i<e.childNodes.length;i+=1){var c=e.childNodes[i];if("IMG"===c.tagName&&0===c.clientHeight){h=!0;break}}if(!h){var s=u.indexOf(Math.min.apply(Math,(0,r.Z)(u)));u[s]+=n;var l=s+1;e.style.order=l}}else h=!0}})),h||s.flushSync((function(){O(Math.max.apply(Math,(0,r.Z)(u))),V(d>0?d-1:0)}))}}};(0,m.Z)((function(){if("undefined"!==typeof ResizeObserver){var e,t=new ResizeObserver((function(){e=window.requestAnimationFrame(L)}));return A.current&&A.current.childNodes.forEach((function(e){t.observe(e)})),function(){e&&window.cancelAnimationFrame(e),t&&t.disconnect()}}}),[k,R,l]);var $=(0,p.Z)(t,A),q=new Array(T).fill("").map((function(e,t){return(0,Z.jsx)("span",{"data-class":"line-break",style:(0,i.Z)({},N,{order:t+1})},t)}));return(0,Z.jsxs)(C,(0,i.Z)({as:f,className:(0,v.Z)(D.root,u),ref:$,ownerState:B},H,{children:[l,q]}))}))},48240:function(e,t,o){var r=o(4942),a=o(63366),n=o(87462),i=o(72791),c=o(59278),s=o(94419),l=o(95080),d=o(14036),u=o(31402),h=o(62430),f=o(66934),m=o(80184),p=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],v=(0,f.ZP)(l.Z,{name:"MuiFab",slot:"Root",shouldForwardProp:function(e){return(0,f.FO)(e)||"classes"===e},overridesResolver:function(e,t){var o=e.ownerState;return[t.root,t[o.variant],t["size".concat((0,d.Z)(o.size))],"inherit"===o.color&&t.colorInherit,t[(0,d.Z)(o.size)],t[o.color]]}})((function(e){var t,o,a=e.theme,i=e.ownerState;return(0,n.Z)({},a.typography.button,(0,r.Z)({minHeight:36,transition:a.transitions.create(["background-color","box-shadow","border-color"],{duration:a.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(a.vars||a).zIndex.fab,boxShadow:(a.vars||a).shadows[6],"&:active":{boxShadow:(a.vars||a).shadows[12]},color:a.vars?a.vars.palette.text.primary:null==(t=(o=a.palette).getContrastText)?void 0:t.call(o,a.palette.grey[300]),backgroundColor:(a.vars||a).palette.grey[300],"&:hover":{backgroundColor:(a.vars||a).palette.grey.A100,"@media (hover: none)":{backgroundColor:(a.vars||a).palette.grey[300]},textDecoration:"none"}},"&.".concat(h.Z.focusVisible),{boxShadow:(a.vars||a).shadows[6]}),"small"===i.size&&{width:40,height:40},"medium"===i.size&&{width:48,height:48},"extended"===i.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===i.variant&&"small"===i.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===i.variant&&"medium"===i.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===i.color&&{color:"inherit"})}),(function(e){var t=e.theme,o=e.ownerState;return(0,n.Z)({},"inherit"!==o.color&&"default"!==o.color&&null!=(t.vars||t).palette[o.color]&&{color:(t.vars||t).palette[o.color].contrastText,backgroundColor:(t.vars||t).palette[o.color].main,"&:hover":{backgroundColor:(t.vars||t).palette[o.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[o.color].main}}})}),(function(e){var t=e.theme;return(0,r.Z)({},"&.".concat(h.Z.disabled),{color:(t.vars||t).palette.action.disabled,boxShadow:(t.vars||t).shadows[0],backgroundColor:(t.vars||t).palette.action.disabledBackground})})),g=i.forwardRef((function(e,t){var o=(0,u.Z)({props:e,name:"MuiFab"}),r=o.children,i=o.className,l=o.color,f=void 0===l?"default":l,g=o.component,b=void 0===g?"button":g,w=o.disabled,Z=void 0!==w&&w,x=o.disableFocusRipple,y=void 0!==x&&x,N=o.focusVisibleClassName,C=o.size,k=void 0===C?"large":C,S=o.variant,R=void 0===S?"circular":S,M=(0,a.Z)(o,p),z=(0,n.Z)({},o,{color:f,component:b,disabled:Z,disableFocusRipple:y,size:k,variant:R}),F=function(e){var t=e.color,o=e.variant,r=e.classes,a=e.size,i={root:["root",o,"size".concat((0,d.Z)(a)),"inherit"===t?"colorInherit":t]},c=(0,s.Z)(i,h.N,r);return(0,n.Z)({},r,c)}(z);return(0,m.jsx)(v,(0,n.Z)({className:(0,c.Z)(F.root,i),component:b,disabled:Z,focusRipple:!y,focusVisibleClassName:(0,c.Z)(F.focusVisible,N),ownerState:z,ref:t},M,{classes:F,children:r}))}));t.Z=g},95573:function(e,t){t.Z={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"}},38717:function(e,t,o){function r(e){var t,o,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=r(e[t]))&&(a&&(a+=" "),a+=o);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.Z=function(){for(var e,t,o=0,a="";o<arguments.length;)(e=arguments[o++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}}}]);
//# sourceMappingURL=1391.c925da17.chunk.js.map