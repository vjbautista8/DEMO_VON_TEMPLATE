(self.webpackChunk_minimal_kit_cra_js=self.webpackChunk_minimal_kit_cra_js||[]).push([[3574,2165],{93517:function(e,r,o){"use strict";o.d(r,{Z:function(){return T}});var t=o(93433),a=o(29439),n=o(4942),i=o(87462),s=o(63366),l=o(72791),c=(o(57441),o(59278)),d=o(94419),u=o(26912),p=o(66934),v=o(31402),h=o(4567),f=o(12065),m=o(74223),g=o(80184),b=(0,m.Z)((0,g.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),Z=o(95080),x=["slots","slotProps"],y=(0,p.ZP)(Z.Z)((function(e){var r=e.theme;return(0,i.Z)({display:"flex",marginLeft:"calc(".concat(r.spacing(1)," * 0.5)"),marginRight:"calc(".concat(r.spacing(1)," * 0.5)")},"light"===r.palette.mode?{backgroundColor:r.palette.grey[100],color:r.palette.grey[700]}:{backgroundColor:r.palette.grey[700],color:r.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,i.Z)({},"light"===r.palette.mode?{backgroundColor:r.palette.grey[200]}:{backgroundColor:r.palette.grey[600]}),"&:active":(0,i.Z)({boxShadow:r.shadows[0]},"light"===r.palette.mode?{backgroundColor:(0,f._4)(r.palette.grey[200],.12)}:{backgroundColor:(0,f._4)(r.palette.grey[600],.12)})})})),w=(0,p.ZP)(b)({width:24,height:16});var C=function(e){var r=e.slots,o=void 0===r?{}:r,t=e.slotProps,a=void 0===t?{}:t,n=(0,s.Z)(e,x),l=e;return(0,g.jsx)("li",{children:(0,g.jsx)(y,(0,i.Z)({focusRipple:!0},n,{ownerState:l,children:(0,g.jsx)(w,(0,i.Z)({as:o.CollapsedIcon,ownerState:l},a.collapsedIcon))}))})},S=o(75878),R=o(21217);function k(e){return(0,R.Z)("MuiBreadcrumbs",e)}var N=(0,S.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),P=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],M=(0,p.ZP)(h.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,r){return[(0,n.Z)({},"& .".concat(N.li),r.li),r.root]}})({}),j=(0,p.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,r){return r.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),z=(0,p.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,r){return r.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function I(e,r,o,t){return e.reduce((function(a,n,i){return i<e.length-1?a=a.concat(n,(0,g.jsx)(z,{"aria-hidden":!0,className:r,ownerState:t,children:o},"separator-".concat(i))):a.push(n),a}),[])}var T=l.forwardRef((function(e,r){var o=(0,v.Z)({props:e,name:"MuiBreadcrumbs"}),n=o.children,p=o.className,h=o.component,f=void 0===h?"nav":h,m=o.slots,b=void 0===m?{}:m,Z=o.slotProps,x=void 0===Z?{}:Z,y=o.expandText,w=void 0===y?"Show path":y,S=o.itemsAfterCollapse,R=void 0===S?1:S,N=o.itemsBeforeCollapse,z=void 0===N?1:N,T=o.maxItems,A=void 0===T?8:T,B=o.separator,H=void 0===B?"/":B,_=(0,s.Z)(o,P),F=l.useState(!1),V=(0,a.Z)(F,2),D=V[0],W=V[1],L=(0,i.Z)({},o,{component:f,expanded:D,expandText:w,itemsAfterCollapse:R,itemsBeforeCollapse:z,maxItems:A,separator:H}),O=function(e){var r=e.classes;return(0,d.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},k,r)}(L),q=(0,u.y)({elementType:b.CollapsedIcon,externalSlotProps:x.collapsedIcon,ownerState:L}),E=l.useRef(null),G=l.Children.toArray(n).filter((function(e){return l.isValidElement(e)})).map((function(e,r){return(0,g.jsx)("li",{className:O.li,children:e},"child-".concat(r))}));return(0,g.jsx)(M,(0,i.Z)({ref:r,component:f,color:"text.secondary",className:(0,c.Z)(O.root,p),ownerState:L},_,{children:(0,g.jsx)(j,{className:O.ol,ref:E,ownerState:L,children:I(D||A&&G.length<=A?G:function(e){return z+R>=e.length?e:[].concat((0,t.Z)(e.slice(0,z)),[(0,g.jsx)(C,{"aria-label":w,slots:{CollapsedIcon:b.CollapsedIcon},slotProps:{collapsedIcon:q},onClick:function(){W(!0);var e=E.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,t.Z)(e.slice(e.length-R,e.length)))}(G),O.separator,H,L)})}))}))},9585:function(e,r,o){"use strict";o.d(r,{Z:function(){return w}});var t=o(4942),a=o(63366),n=o(87462),i=o(72791),s=o(59278),l=o(94419),c=o(4567),d=o(31402),u=o(66934),p=o(75878),v=o(21217);function h(e){return(0,v.Z)("MuiCardHeader",e)}var f=(0,p.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),m=o(80184),g=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],b=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,r){var o;return(0,n.Z)((o={},(0,t.Z)(o,"& .".concat(f.title),r.title),(0,t.Z)(o,"& .".concat(f.subheader),r.subheader),o),r.root)}})({display:"flex",alignItems:"center",padding:16}),Z=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,r){return r.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),x=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,r){return r.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),y=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,r){return r.content}})({flex:"1 1 auto"}),w=i.forwardRef((function(e,r){var o=(0,d.Z)({props:e,name:"MuiCardHeader"}),t=o.action,i=o.avatar,u=o.className,p=o.component,v=void 0===p?"div":p,f=o.disableTypography,w=void 0!==f&&f,C=o.subheader,S=o.subheaderTypographyProps,R=o.title,k=o.titleTypographyProps,N=(0,a.Z)(o,g),P=(0,n.Z)({},o,{component:v,disableTypography:w}),M=function(e){var r=e.classes;return(0,l.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h,r)}(P),j=R;null==j||j.type===c.Z||w||(j=(0,m.jsx)(c.Z,(0,n.Z)({variant:i?"body2":"h5",className:M.title,component:"span",display:"block"},k,{children:j})));var z=C;return null==z||z.type===c.Z||w||(z=(0,m.jsx)(c.Z,(0,n.Z)({variant:i?"body2":"body1",className:M.subheader,color:"text.secondary",component:"span",display:"block"},S,{children:z}))),(0,m.jsxs)(b,(0,n.Z)({className:(0,s.Z)(M.root,u),as:v,ref:r,ownerState:P},N,{children:[i&&(0,m.jsx)(Z,{className:M.avatar,ownerState:P,children:i}),(0,m.jsxs)(y,{className:M.content,ownerState:P,children:[j,z]}),t&&(0,m.jsx)(x,{className:M.action,ownerState:P,children:t})]}))}))},97123:function(e,r,o){"use strict";o.d(r,{Z:function(){return m}});var t=o(63366),a=o(87462),n=o(72791),i=o(59278),s=o(94419),l=o(66934),c=o(31402),d=o(75878),u=o(21217);function p(e){return(0,u.Z)("MuiDialogActions",e)}(0,d.Z)("MuiDialogActions",["root","spacing"]);var v=o(80184),h=["className","disableSpacing"],f=(0,l.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:function(e,r){var o=e.ownerState;return[r.root,!o.disableSpacing&&r.spacing]}})((function(e){var r=e.ownerState;return(0,a.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!r.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),m=n.forwardRef((function(e,r){var o=(0,c.Z)({props:e,name:"MuiDialogActions"}),n=o.className,l=o.disableSpacing,d=void 0!==l&&l,u=(0,t.Z)(o,h),m=(0,a.Z)({},o,{disableSpacing:d}),g=function(e){var r=e.classes,o={root:["root",!e.disableSpacing&&"spacing"]};return(0,s.Z)(o,p,r)}(m);return(0,v.jsx)(f,(0,a.Z)({className:(0,i.Z)(g.root,n),ownerState:m,ref:r},u))}))},48240:function(e,r,o){"use strict";var t=o(4942),a=o(63366),n=o(87462),i=o(72791),s=o(59278),l=o(94419),c=o(95080),d=o(14036),u=o(31402),p=o(62430),v=o(66934),h=o(80184),f=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],m=(0,v.ZP)(c.Z,{name:"MuiFab",slot:"Root",shouldForwardProp:function(e){return(0,v.FO)(e)||"classes"===e},overridesResolver:function(e,r){var o=e.ownerState;return[r.root,r[o.variant],r["size".concat((0,d.Z)(o.size))],"inherit"===o.color&&r.colorInherit,r[(0,d.Z)(o.size)],r[o.color]]}})((function(e){var r,o,a=e.theme,i=e.ownerState;return(0,n.Z)({},a.typography.button,(0,t.Z)({minHeight:36,transition:a.transitions.create(["background-color","box-shadow","border-color"],{duration:a.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(a.vars||a).zIndex.fab,boxShadow:(a.vars||a).shadows[6],"&:active":{boxShadow:(a.vars||a).shadows[12]},color:a.vars?a.vars.palette.text.primary:null==(r=(o=a.palette).getContrastText)?void 0:r.call(o,a.palette.grey[300]),backgroundColor:(a.vars||a).palette.grey[300],"&:hover":{backgroundColor:(a.vars||a).palette.grey.A100,"@media (hover: none)":{backgroundColor:(a.vars||a).palette.grey[300]},textDecoration:"none"}},"&.".concat(p.Z.focusVisible),{boxShadow:(a.vars||a).shadows[6]}),"small"===i.size&&{width:40,height:40},"medium"===i.size&&{width:48,height:48},"extended"===i.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===i.variant&&"small"===i.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===i.variant&&"medium"===i.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===i.color&&{color:"inherit"})}),(function(e){var r=e.theme,o=e.ownerState;return(0,n.Z)({},"inherit"!==o.color&&"default"!==o.color&&null!=(r.vars||r).palette[o.color]&&{color:(r.vars||r).palette[o.color].contrastText,backgroundColor:(r.vars||r).palette[o.color].main,"&:hover":{backgroundColor:(r.vars||r).palette[o.color].dark,"@media (hover: none)":{backgroundColor:(r.vars||r).palette[o.color].main}}})}),(function(e){var r=e.theme;return(0,t.Z)({},"&.".concat(p.Z.disabled),{color:(r.vars||r).palette.action.disabled,boxShadow:(r.vars||r).shadows[0],backgroundColor:(r.vars||r).palette.action.disabledBackground})})),g=i.forwardRef((function(e,r){var o=(0,u.Z)({props:e,name:"MuiFab"}),t=o.children,i=o.className,c=o.color,v=void 0===c?"default":c,g=o.component,b=void 0===g?"button":g,Z=o.disabled,x=void 0!==Z&&Z,y=o.disableFocusRipple,w=void 0!==y&&y,C=o.focusVisibleClassName,S=o.size,R=void 0===S?"large":S,k=o.variant,N=void 0===k?"circular":k,P=(0,a.Z)(o,f),M=(0,n.Z)({},o,{color:v,component:b,disabled:x,disableFocusRipple:w,size:R,variant:N}),j=function(e){var r=e.color,o=e.variant,t=e.classes,a=e.size,i={root:["root",o,"size".concat((0,d.Z)(a)),"inherit"===r?"colorInherit":r]},s=(0,l.Z)(i,p.N,t);return(0,n.Z)({},t,s)}(M);return(0,h.jsx)(m,(0,n.Z)({className:(0,s.Z)(j.root,i),component:b,disabled:x,focusRipple:!w,focusVisibleClassName:(0,s.Z)(j.focusVisible,C),ownerState:M,ref:r},P,{classes:j,children:t}))}));r.Z=g},53849:function(e,r,o){var t=o(87927),a=o(21473);e.exports=function(e,r){var o=-1,n=a(e)?Array(e.length):[];return t(e,(function(e,t,a){n[++o]=r(e,t,a)})),n}},93226:function(e,r,o){var t=o(68950),a=o(98667),n=o(56025),i=o(53849),s=o(19179),l=o(16194),c=o(94480),d=o(2100),u=o(93629);e.exports=function(e,r,o){r=r.length?t(r,(function(e){return u(e)?function(r){return a(r,1===e.length?e[0]:e)}:e})):[d];var p=-1;r=t(r,l(n));var v=i(e,(function(e,o,a){return{criteria:t(r,(function(r){return r(e)})),index:++p,value:e}}));return s(v,(function(e,r){return c(e,r,o)}))}},19179:function(e){e.exports=function(e,r){var o=e.length;for(e.sort(r);o--;)e[o]=e[o].value;return e}},88558:function(e,r,o){var t=o(70152);e.exports=function(e,r){if(e!==r){var o=void 0!==e,a=null===e,n=e===e,i=t(e),s=void 0!==r,l=null===r,c=r===r,d=t(r);if(!l&&!d&&!i&&e>r||i&&s&&c&&!l&&!d||a&&s&&c||!o&&c||!n)return 1;if(!a&&!i&&!d&&e<r||d&&o&&n&&!a&&!i||l&&o&&n||!s&&n||!c)return-1}return 0}},94480:function(e,r,o){var t=o(88558);e.exports=function(e,r,o){for(var a=-1,n=e.criteria,i=r.criteria,s=n.length,l=o.length;++a<s;){var c=t(n[a],i[a]);if(c)return a>=l?c:c*("desc"==o[a]?-1:1)}return e.index-r.index}},45812:function(e,r,o){var t=o(93226),a=o(93629);e.exports=function(e,r,o,n){return null==e?[]:(a(r)||(r=null==r?[]:[r]),a(o=n?void 0:o)||(o=null==o?[]:[o]),t(e,r,o))}}}]);
//# sourceMappingURL=3574.33b030b1.chunk.js.map