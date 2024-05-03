"use strict";(self.webpackChunk_minimal_kit_cra_js=self.webpackChunk_minimal_kit_cra_js||[]).push([[6685],{50933:function(e,n,t){t.d(n,{Z:function(){return h}});var r=t(1413),i=t(45987),o=t(64554),l=t(50533),s=t(36314),a=t(4567),c=t(93517),d=t(83854),u=t(80184);function p(e){var n=e.link,t=e.activeLast,i=e.disabled,s=n.name,a=n.href,c=n.icon,p=(0,r.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},i&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),x=(0,u.jsxs)(u.Fragment,{children:[c&&(0,u.jsx)(o.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:c}),s]});return a?(0,u.jsx)(l.Z,{component:d.r,href:a,sx:p,children:x}):(0,u.jsxs)(o.Z,{sx:p,children:[" ",x," "]})}var x=["links","action","heading","moreLink","activeLast","sx"];function h(e){var n=e.links,t=e.action,d=e.heading,h=e.moreLink,f=e.activeLast,b=e.sx,Z=(0,i.Z)(e,x),j=n[n.length-1].name;return(0,u.jsxs)(o.Z,{sx:(0,r.Z)({},b),children:[(0,u.jsxs)(s.Z,{direction:"row",alignItems:"center",children:[(0,u.jsxs)(o.Z,{sx:{flexGrow:1},children:[d&&(0,u.jsx)(a.Z,{variant:"h4",gutterBottom:!0,children:d}),!!n.length&&(0,u.jsx)(c.Z,(0,r.Z)((0,r.Z)({separator:(0,u.jsx)(m,{})},Z),{},{children:n.map((function(e){return(0,u.jsx)(p,{link:e,activeLast:f,disabled:e.name===j},e.name||"")}))}))]}),t&&(0,u.jsxs)(o.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!h&&(0,u.jsx)(o.Z,{sx:{mt:2},children:h.map((function(e){return(0,u.jsx)(l.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function m(){return(0,u.jsx)(o.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},11633:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(1413),i=t(45987),o=t(12065),l=t(64554),s=t(4567),a=t(36314),c=t(80184),d=["title","imgUrl","action","filled","description","sx"];function u(e){var n=e.title,t=e.imgUrl,u=e.action,p=e.filled,x=e.description,h=e.sx,m=(0,i.Z)(e,d);return(0,c.jsxs)(a.Z,(0,r.Z)((0,r.Z)({flexGrow:1,alignItems:"center",justifyContent:"center",sx:(0,r.Z)((0,r.Z)({px:3,height:1},p&&{borderRadius:2,bgcolor:function(e){return(0,o.Fq)(e.palette.grey[500],.04)},border:function(e){return"dashed 1px ".concat((0,o.Fq)(e.palette.grey[500],.08))}}),h)},m),{},{children:[(0,c.jsx)(l.Z,{component:"img",alt:"empty content",src:t||"/assets/icons/empty/ic_content.svg",sx:{width:1,maxWidth:160}}),n&&(0,c.jsx)(s.Z,{variant:"h6",component:"span",sx:{mt:1,color:"text.disabled",textAlign:"center"},children:n}),x&&(0,c.jsx)(s.Z,{variant:"caption",sx:{mt:1,color:"text.disabled",textAlign:"center"},children:x}),u&&u]}))}},21362:function(e,n,t){t.d(n,{Z:function(){return j}});var r=t(36459),i=t(1413),o=t(45987),l=(t(88195),t(78082)),s=t(19945),a=t(71502),c=t(4204),d=t(50533),u=t(83854),p=t(32471),x=t(4942),h=t(66934),m=t(12065),f=(0,h.ZP)("div")((function(e){var n,t=e.theme,r="light"===t.palette.mode;return{h1:(0,i.Z)({margin:0},t.typography.h1),h2:(0,i.Z)({margin:0},t.typography.h2),h3:(0,i.Z)({margin:0},t.typography.h3),h4:(0,i.Z)({margin:0},t.typography.h4),h5:(0,i.Z)({margin:0},t.typography.h5),h6:(0,i.Z)({margin:0},t.typography.h6),p:(0,i.Z)({margin:0},t.typography.body1),br:{display:"grid",content:'""',marginTop:"0.75em"},hr:{margin:0,flexShrink:0,borderWidth:0,msFlexNegative:0,WebkitFlexShrink:0,borderStyle:"solid",borderBottomWidth:"thin",borderColor:t.palette.divider},"& ul, & ol":{margin:0,"& li":{lineHeight:2}},"& blockquote":(n={lineHeight:1.5,fontSize:"1.5em",margin:"40px auto",position:"relative",fontFamily:"Georgia, serif",padding:t.spacing(3,3,3,8),color:t.palette.text.secondary,borderRadius:2*t.shape.borderRadius,backgroundColor:t.palette.background.neutral},(0,x.Z)(n,t.breakpoints.up("md"),{width:"80%"}),(0,x.Z)(n,"& p, & span",{marginBottom:0,fontSize:"inherit",fontFamily:"inherit"}),(0,x.Z)(n,"&:before",{left:16,top:-8,display:"block",fontSize:"3em",content:'"\\201C"',position:"absolute",color:t.palette.text.disabled}),n),"& pre, & pre > code":{fontSize:16,overflowX:"auto",whiteSpace:"pre",padding:t.spacing(2),color:t.palette.common.white,borderRadius:t.shape.borderRadius,backgroundColor:r?t.palette.grey[900]:(0,m.Fq)(t.palette.grey[500],.16)},"& code":{fontSize:14,borderRadius:4,whiteSpace:"pre",padding:t.spacing(.2,.5),color:t.palette.warning[r?"darker":"lighter"],backgroundColor:t.palette.warning[r?"lighter":"darker"],"&.hljs":{padding:0,backgroundColor:"transparent"}},table:{width:"100%",borderCollapse:"collapse",border:"1px solid ".concat(t.palette.divider),"th, td":{padding:t.spacing(1),border:"1px solid ".concat(t.palette.divider)},"tbody tr:nth-of-type(odd)":{backgroundColor:t.palette.background.neutral}},input:{"&[type=checkbox]":{position:"relative",cursor:"pointer","&:before":{content:'""',top:-2,left:-2,width:17,height:17,borderRadius:3,position:"absolute",backgroundColor:t.palette.grey[r?300:700]},"&:checked":{"&:before":{backgroundColor:t.palette.primary.main},"&:after":{content:'""',top:1,left:5,width:4,height:9,position:"absolute",transform:"rotate(45deg)",msTransform:"rotate(45deg)",WebkitTransform:"rotate(45deg)",border:"solid ".concat(t.palette.common.white),borderWidth:"0 2px 2px 0"}}}}}})),b=t(80184),Z=["sx"];function j(e){var n=e.sx,t=(0,o.Z)(e,Z);return(0,b.jsx)(f,{sx:n,children:(0,b.jsx)(l.D,(0,i.Z)({rehypePlugins:[s.Z,c.Z,[a.Z,{singleTilde:!1}]],components:g},t))})}var g={img:function(e){var n=Object.assign({},((0,r.Z)(e),e));return(0,b.jsx)(p.Z,(0,i.Z)({alt:n.alt,ratio:"16/9",sx:{borderRadius:2}},n))},a:function(e){var n=Object.assign({},((0,r.Z)(e),e));return n.href.includes("http")?(0,b.jsx)(d.Z,(0,i.Z)({target:"_blank",rel:"noopener"},n)):(0,b.jsx)(d.Z,(0,i.Z)((0,i.Z)({component:u.r,href:n.href},n),{},{children:n.children}))}}},96685:function(e,n,t){t.d(n,{mW:function(){return Re},WI:function(){return Ae},S2:function(){return Le},JD:function(){return he}});var r=t(93433),i=t(4942),o=t(1413),l=t(29439),s=t(45812),a=t.n(s),c=t(18111),d=t.n(c),u=t(72791),p=t(36314),x=t(5849),h=t(89164),m=t(38072),f=t(83854),b=t(22459),Z=t(11908),j=t(66964),g=t(44e3),y=t(11633),v=t(60720),k=t(50933),w=t(64554),C=t(44369),S=t(86414),T=t(19208),O=t(50533),F=t(57621),E=t(60220),L=t(94721),R=t(82626),I=t(13400),q=t(4567),D=t(49900),P=t(9145),W=t(17070),z=t(52115),H=t(80184);function _(e){var n=e.job,t=e.onView,r=e.onEdit,i=e.onDelete,o=(0,z.S)(),l=n.id,s=n.title,a=n.company,c=n.createdAt,d=n.candidates,u=n.experience,x=n.employmentTypes,h=n.salary,b=n.role;return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(F.Z,{children:[(0,H.jsx)(I.Z,{onClick:o.onOpen,sx:{position:"absolute",top:8,right:8},children:(0,H.jsx)(g.Z,{icon:"eva:more-vertical-fill"})}),(0,H.jsxs)(p.Z,{sx:{p:3,pb:2},children:[(0,H.jsx)(E.Z,{alt:a.name,src:a.logo,variant:"rounded",sx:{width:48,height:48,mb:2}}),(0,H.jsx)(D.Z,{sx:{mb:1},primary:(0,H.jsx)(O.Z,{component:f.r,href:m.H.dashboard.job.details(l),color:"inherit",children:s}),secondary:"Posted date: ".concat((0,P.Mu)(c)),primaryTypographyProps:{typography:"subtitle1"},secondaryTypographyProps:{mt:1,component:"span",typography:"caption",color:"text.disabled"}}),(0,H.jsxs)(p.Z,{spacing:.5,direction:"row",alignItems:"center",sx:{color:"primary.main",typography:"caption"},children:[(0,H.jsx)(g.Z,{width:16,icon:"solar:users-group-rounded-bold"}),d.length," Candidates"]})]}),(0,H.jsx)(L.Z,{sx:{borderStyle:"dashed"}}),(0,H.jsx)(w.Z,{rowGap:1.5,display:"grid",gridTemplateColumns:"repeat(2, 1fr)",sx:{p:3},children:[{label:u,icon:(0,H.jsx)(g.Z,{width:16,icon:"carbon:skill-level-basic",sx:{flexShrink:0}})},{label:x.join(", "),icon:(0,H.jsx)(g.Z,{width:16,icon:"solar:clock-circle-bold",sx:{flexShrink:0}})},{label:h.negotiable?"Negotiable":(0,W.e_)(h.price),icon:(0,H.jsx)(g.Z,{width:16,icon:"solar:wad-of-money-bold",sx:{flexShrink:0}})},{label:b,icon:(0,H.jsx)(g.Z,{width:16,icon:"solar:user-rounded-bold",sx:{flexShrink:0}})}].map((function(e){return(0,H.jsxs)(p.Z,{spacing:.5,flexShrink:0,direction:"row",alignItems:"center",sx:{color:"text.disabled",minWidth:0},children:[e.icon,(0,H.jsx)(q.Z,{variant:"caption",noWrap:!0,children:e.label})]},e.label)}))})]}),(0,H.jsxs)(z.Z,{open:o.open,onClose:o.onClose,arrow:"right-top",sx:{width:140},children:[(0,H.jsxs)(R.Z,{onClick:function(){o.onClose(),t()},children:[(0,H.jsx)(g.Z,{icon:"solar:eye-bold"}),"View"]}),(0,H.jsxs)(R.Z,{onClick:function(){o.onClose(),r()},children:[(0,H.jsx)(g.Z,{icon:"solar:pen-bold"}),"Edit"]}),(0,H.jsxs)(R.Z,{onClick:function(){o.onClose(),i()},sx:{color:"error.main"},children:[(0,H.jsx)(g.Z,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})]})}function B(e){var n=e.jobs,t=(0,T.tv)(),r=(0,u.useCallback)((function(e){t.push(m.H.dashboard.job.details(e))}),[t]),o=(0,u.useCallback)((function(e){t.push(m.H.dashboard.job.edit(e))}),[t]),l=(0,u.useCallback)((function(e){console.info("DELETE",e)}),[]);return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(w.Z,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:n.map((function(e){return(0,H.jsx)(_,{job:e,onView:function(){return r(e.id)},onEdit:function(){return o(e.id)},onDelete:function(){return l(e.id)}},e.id)}))}),n.length>8&&(0,H.jsx)(C.Z,{count:8,sx:(0,i.Z)({mt:8},"& .".concat(S.Z.ul),{justifyContent:"center"})})]})}function A(e){var n=e.sort,t=e.onSort,r=e.sortOptions,i=(0,z.S)();return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(x.Z,{disableRipple:!0,color:"inherit",onClick:i.onOpen,endIcon:(0,H.jsx)(g.Z,{icon:i.open?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill"}),sx:{fontWeight:"fontWeightSemiBold"},children:["Sort By:",(0,H.jsx)(w.Z,{component:"span",sx:{ml:.5,fontWeight:"fontWeightBold",textTransform:"capitalize"},children:n})]}),(0,H.jsx)(z.Z,{open:i.open,onClose:i.onClose,sx:{width:140},children:r.map((function(e){return(0,H.jsx)(R.Z,{selected:e.value===n,onClick:function(){i.onClose(),t(e.value)},children:e.label},e.value)}))})]})}var G=t(34004),J=t.n(G),X=t(79085),M=t.n(X),K=t(48550),V=t(46314),N=t(63466),$=t(96349);function U(e){var n=e.query,t=e.results,r=e.onSearch,i=e.hrefItem,l=(0,T.tv)(),s=function(e){l.push(i(e))},a=function(e){if(n&&"Enter"===e.key){var r=t.filter((function(e){return e.title===n}))[0];s(r.id)}};return(0,H.jsx)(V.Z,{sx:{width:{xs:1,sm:260}},autoHighlight:!0,popupIcon:null,options:t,onInputChange:function(e,n){return r(n)},getOptionLabel:function(e){return e.title},noOptionsText:(0,H.jsx)($.Z,{query:n,sx:{bgcolor:"unset"}}),isOptionEqualToValue:function(e,n){return e.id===n.id},renderInput:function(e){return(0,H.jsx)(K.Z,(0,o.Z)((0,o.Z)({},e),{},{placeholder:"Search...",onKeyUp:a,InputProps:(0,o.Z)((0,o.Z)({},e.InputProps),{},{startAdornment:(0,H.jsx)(N.Z,{position:"start",children:(0,H.jsx)(g.Z,{icon:"eva:search-fill",sx:{ml:1,color:"text.disabled"}})})})}))},renderOption:function(e,n,t){var r=t.inputValue,i=M()(n.title,r),l=J()(n.title,i);return(0,u.createElement)(w.Z,(0,o.Z)((0,o.Z)({component:"li"},e),{},{onClick:function(){return s(n.id)},key:n.id}),(0,H.jsx)("div",{children:l.map((function(e,n){return(0,H.jsx)(q.Z,{component:"span",color:e.highlight?"primary":"textPrimary",sx:{typography:"body2",fontWeight:e.highlight?"fontWeightSemiBold":"fontWeightMedium"},children:e.text},n)}))}))}})}var Y=t(85771),Q=t(1503),ee=t(27029),ne=t(88654),te=t(20068),re=t(13034),ie=t(25801),oe=t(47974);function le(e){var n=e.open,t=e.onOpen,i=e.onClose,l=e.filters,s=e.onFilters,a=e.canReset,c=e.onResetFilters,d=e.roleOptions,h=e.locationOptions,m=e.benefitOptions,f=e.experienceOptions,b=e.employmentTypeOptions,Z=(0,u.useCallback)((function(e){var n=l.employmentTypes.includes(e)?l.employmentTypes.filter((function(n){return n!==e})):[].concat((0,r.Z)(l.employmentTypes),[e]);s("employmentTypes",n)}),[l.employmentTypes,s]),j=(0,u.useCallback)((function(e){s("experience",e)}),[s]),y=(0,u.useCallback)((function(e){s("roles",e)}),[s]),v=(0,u.useCallback)((function(e){s("locations",e)}),[s]),k=(0,u.useCallback)((function(e){var n=l.benefits.includes(e)?l.benefits.filter((function(n){return n!==e})):[].concat((0,r.Z)(l.benefits),[e]);s("benefits",n)}),[l.benefits,s]),w=(0,H.jsxs)(p.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{py:2,pr:1,pl:2.5},children:[(0,H.jsx)(q.Z,{variant:"h6",sx:{flexGrow:1},children:"Filters"}),(0,H.jsx)(te.Z,{title:"Reset",children:(0,H.jsx)(I.Z,{onClick:c,children:(0,H.jsx)(ee.Z,{color:"error",variant:"dot",invisible:!a,children:(0,H.jsx)(g.Z,{icon:"solar:restart-bold"})})})}),(0,H.jsx)(I.Z,{onClick:i,children:(0,H.jsx)(g.Z,{icon:"mingcute:close-line"})})]}),C=(0,H.jsxs)(p.Z,{children:[(0,H.jsx)(q.Z,{variant:"subtitle2",sx:{mb:1},children:"Employment Types"}),b.map((function(e){return(0,H.jsx)(ie.Z,{control:(0,H.jsx)(re.Z,{checked:l.employmentTypes.includes(e),onClick:function(){return Z(e)}}),label:e},e)}))]}),S=(0,H.jsxs)(p.Z,{children:[(0,H.jsx)(q.Z,{variant:"subtitle2",sx:{mb:1},children:"Experience"}),f.map((function(e){return(0,H.jsx)(ie.Z,{control:(0,H.jsx)(Q.Z,{checked:e===l.experience,onClick:function(){return j(e)}}),label:e,sx:(0,o.Z)({},"all"===e&&{textTransform:"capitalize"})},e)}))]}),T=(0,H.jsxs)(p.Z,{children:[(0,H.jsx)(q.Z,{variant:"subtitle2",sx:{mb:1.5},children:"Roles"}),(0,H.jsx)(V.Z,{multiple:!0,disableCloseOnSelect:!0,options:d.map((function(e){return e})),getOptionLabel:function(e){return e},value:l.roles,onChange:function(e,n){return y(n)},renderInput:function(e){return(0,H.jsx)(K.Z,(0,o.Z)({placeholder:"Select Roles"},e))},renderOption:function(e,n){return(0,u.createElement)("li",(0,o.Z)((0,o.Z)({},e),{},{key:n}),n)},renderTags:function(e,n){return e.map((function(e,t){return(0,u.createElement)(Y.Z,(0,o.Z)((0,o.Z)({},n({index:t})),{},{key:e,label:e,size:"small",variant:"soft"}))}))}})]}),O=(0,H.jsxs)(p.Z,{children:[(0,H.jsx)(q.Z,{variant:"subtitle2",sx:{mb:1.5},children:"Locations"}),(0,H.jsx)(V.Z,{multiple:!0,disableCloseOnSelect:!0,options:h.map((function(e){return e.label})),getOptionLabel:function(e){return e},value:l.locations,onChange:function(e,n){return v(n)},renderInput:function(e){return(0,H.jsx)(K.Z,(0,o.Z)({placeholder:"Select Locations"},e))},renderOption:function(e,n){var t=h.filter((function(e){return e.label===n}))[0],r=t.code,i=t.label,l=t.phone;return i?(0,u.createElement)("li",(0,o.Z)((0,o.Z)({},e),{},{key:i}),(0,H.jsx)(g.Z,{icon:"circle-flags:".concat(r.toLowerCase()),width:28,sx:{mr:1}},i),i," (",r,") +",l):null},renderTags:function(e,n){return e.map((function(e,t){return(0,u.createElement)(Y.Z,(0,o.Z)((0,o.Z)({},n({index:t})),{},{key:e,label:e,size:"small",variant:"soft"}))}))}})]}),F=(0,H.jsxs)(p.Z,{children:[(0,H.jsx)(q.Z,{variant:"subtitle2",sx:{mb:1},children:"Benefits"}),m.map((function(e){return(0,H.jsx)(ie.Z,{control:(0,H.jsx)(re.Z,{checked:l.benefits.includes(e),onClick:function(){return k(e)}}),label:e},e)}))]});return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(x.Z,{disableRipple:!0,color:"inherit",endIcon:(0,H.jsx)(ee.Z,{color:"error",variant:"dot",invisible:!a,children:(0,H.jsx)(g.Z,{icon:"ic:round-filter-list"})}),onClick:t,children:"Filters"}),(0,H.jsxs)(ne.ZP,{anchor:"right",open:n,onClose:i,slotProps:{backdrop:{invisible:!0}},PaperProps:{sx:{width:280}},children:[w,(0,H.jsx)(L.Z,{}),(0,H.jsx)(oe.Z,{sx:{px:2.5,py:3},children:(0,H.jsxs)(p.Z,{spacing:3,children:[C,S,T,O,F]})})]})]})}var se=t(45987),ae=t(27938),ce=["filters","onFilters","canReset","onResetFilters","results"],de=["label","children","sx"];function ue(e){var n=e.filters,t=e.onFilters,r=e.canReset,i=e.onResetFilters,l=e.results,s=(0,se.Z)(e,ce);return(0,H.jsxs)(p.Z,(0,o.Z)((0,o.Z)({spacing:1.5},s),{},{children:[(0,H.jsxs)(w.Z,{sx:{typography:"body2"},children:[(0,H.jsx)("strong",{children:l}),(0,H.jsx)(w.Z,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),(0,H.jsxs)(p.Z,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[!!n.employmentTypes.length&&(0,H.jsx)(pe,{label:"Employment Types:",children:n.employmentTypes.map((function(e){return(0,H.jsx)(Y.Z,{label:e,size:"small",onDelete:function(){return function(e){var r=n.employmentTypes.filter((function(n){return n!==e}));t("employmentTypes",r)}(e)}},e)}))}),"all"!==n.experience&&(0,H.jsx)(pe,{label:"Experience:",children:(0,H.jsx)(Y.Z,{size:"small",label:n.experience,onDelete:function(){t("experience","all")}})}),!!n.roles.length&&(0,H.jsx)(pe,{label:"Roles:",children:n.roles.map((function(e){return(0,H.jsx)(Y.Z,{label:e,size:"small",onDelete:function(){return function(e){var r=n.roles.filter((function(n){return n!==e}));t("role",r)}(e)}},e)}))}),!!n.locations.length&&(0,H.jsx)(pe,{label:"Locations:",children:n.locations.map((function(e){return(0,H.jsx)(Y.Z,{label:e,size:"small",onDelete:function(){return function(e){var r=n.locations.filter((function(n){return n!==e}));t("locations",r)}(e)}},e)}))}),!!n.benefits.length&&(0,H.jsx)(pe,{label:"Benefits:",children:n.benefits.map((function(e){return(0,H.jsx)(Y.Z,{label:e,size:"small",onDelete:function(){return function(e){var r=n.benefits.filter((function(n){return n!==e}));t("benefits",r)}(e)}},e)}))}),r&&(0,H.jsx)(x.Z,{color:"error",onClick:i,startIcon:(0,H.jsx)(g.Z,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]}))}function pe(e){var n=e.label,t=e.children,r=e.sx,i=(0,se.Z)(e,de);return(0,H.jsxs)(p.Z,(0,o.Z)((0,o.Z)({component:ae.Z,variant:"outlined",spacing:1,direction:"row",sx:(0,o.Z)({p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed"},r)},i),{},{children:[(0,H.jsx)(w.Z,{component:"span",sx:{typography:"subtitle2"},children:n}),(0,H.jsx)(p.Z,{spacing:1,direction:"row",flexWrap:"wrap",children:t})]}))}var xe={roles:[],locations:[],benefits:[],experience:"all",employmentTypes:[]};function he(){var e=(0,v.K$)(),n=(0,b.k)(),t=(0,u.useState)("latest"),s=(0,l.Z)(t,2),a=s[0],c=s[1],w=(0,u.useState)({query:"",results:[]}),C=(0,l.Z)(w,2),S=C[0],T=C[1],O=(0,u.useState)(xe),F=(0,l.Z)(O,2),E=F[0],L=F[1],R=me({inputData:Z.nb,filters:E,sortBy:a}),I=!d()(xe,E),q=!R.length&&I,D=(0,u.useCallback)((function(e,n){L((function(t){return(0,o.Z)((0,o.Z)({},t),{},(0,i.Z)({},e,n))}))}),[]),P=(0,u.useCallback)((function(e){c(e)}),[]),W=(0,u.useCallback)((function(e){if(T((function(n){return(0,o.Z)((0,o.Z)({},n),{},{query:e})})),e){var n=Z.nb.filter((function(e){return-1!==e.title.toLowerCase().indexOf(S.query.toLowerCase())}));T((function(e){return(0,o.Z)((0,o.Z)({},e),{},{results:n})}))}}),[S.query]),z=(0,u.useCallback)((function(){L(xe)}),[]),_=(0,H.jsxs)(p.Z,{spacing:3,justifyContent:"space-between",alignItems:{xs:"flex-end",sm:"center"},direction:{xs:"column",sm:"row"},children:[(0,H.jsx)(U,{query:S.query,results:S.results,onSearch:W,hrefItem:function(e){return m.H.dashboard.job.details(e)}}),(0,H.jsxs)(p.Z,{direction:"row",spacing:1,flexShrink:0,children:[(0,H.jsx)(le,{open:n.value,onOpen:n.onTrue,onClose:n.onFalse,filters:E,onFilters:D,canReset:I,onResetFilters:z,locationOptions:j.h,roleOptions:Z.YX,benefitOptions:Z.jK.map((function(e){return e.label})),experienceOptions:["all"].concat((0,r.Z)(Z.J$.map((function(e){return e.label})))),employmentTypeOptions:Z.yC.map((function(e){return e.label}))}),(0,H.jsx)(A,{sort:a,onSort:P,sortOptions:Z.vf})]})]}),G=(0,H.jsx)(ue,{filters:E,onResetFilters:z,canReset:I,onFilters:D,results:R.length});return(0,H.jsxs)(h.Z,{maxWidth:!e.themeStretch&&"lg",children:[(0,H.jsx)(k.Z,{heading:"List",links:[{name:"Dashboard",href:m.H.dashboard.root},{name:"Job",href:m.H.dashboard.job.root},{name:"List"}],action:(0,H.jsx)(x.Z,{component:f.r,href:m.H.dashboard.job.new,variant:"contained",startIcon:(0,H.jsx)(g.Z,{icon:"mingcute:add-line"}),children:"New Job"}),sx:{mb:{xs:3,md:5}}}),(0,H.jsxs)(p.Z,{spacing:2.5,sx:{mb:{xs:3,md:5}},children:[_,I&&G]}),q&&(0,H.jsx)(y.Z,{filled:!0,title:"No Data",sx:{py:10}}),(0,H.jsx)(B,{jobs:R})]})}var me=function(e){var n=e.inputData,t=e.filters,r=e.sortBy,i=t.employmentTypes,o=t.experience,l=t.roles,s=t.locations,c=t.benefits;return"latest"===r&&(n=a()(n,["createdAt"],["desc"])),"oldest"===r&&(n=a()(n,["createdAt"],["asc"])),"popular"===r&&(n=a()(n,["totalViews"],["desc"])),i.length&&(n=n.filter((function(e){return e.employmentTypes.some((function(e){return i.includes(e)}))}))),"all"!==o&&(n=n.filter((function(e){return e.experience===o}))),l.length&&(n=n.filter((function(e){return l.includes(e.role)}))),s.length&&(n=n.filter((function(e){return e.locations.some((function(e){return s.includes(e)}))}))),c.length&&(n=n.filter((function(e){return e.benefits.some((function(e){return c.includes(e)}))}))),n},fe=t(74165),be=t(15861),Ze=t(8007),je=t(44695),ge=t(61134),ye=t(12258),ve=t(53106),ke=t(89891),we=t(24308),Ce=t(95080),Se=t(9585),Te=t(38887),Oe=t(32869),Fe=t(39231);function Ee(e){var n=e.currentJob,t=(0,T.tv)(),r=(0,Te.F)("up","md"),i=(0,Oe.Ds)().enqueueSnackbar,l=Ze.Ry().shape({title:Ze.Z_().required("Title is required"),content:Ze.Z_().required("Content is required"),employmentTypes:Ze.IX().min(1,"Choose at least one option"),role:Ze.Z_().required("Role is required"),skills:Ze.IX().min(1,"Choose at least one option"),workingSchedule:Ze.IX().min(1,"Choose at least one option"),benefits:Ze.IX().min(1,"Choose at least one option"),locations:Ze.IX().min(1,"Choose at least one option"),expiredDate:Ze.nK().nullable().required("Expired date is required"),salary:Ze.Ry().shape({type:Ze.Z_(),price:Ze.Rx().min(1,"Price is required"),negotiable:Ze.O7()}),experience:Ze.Z_()}),s=(0,u.useMemo)((function(){return{title:(null===n||void 0===n?void 0:n.title)||"",content:(null===n||void 0===n?void 0:n.content)||"",employmentTypes:(null===n||void 0===n?void 0:n.employmentTypes)||[],experience:(null===n||void 0===n?void 0:n.experience)||"1 year exp",role:(null===n||void 0===n?void 0:n.role)||Z.YX[1],skills:(null===n||void 0===n?void 0:n.skills)||[],workingSchedule:(null===n||void 0===n?void 0:n.workingSchedule)||[],locations:(null===n||void 0===n?void 0:n.locations)||[],benefits:(null===n||void 0===n?void 0:n.benefits)||[],expiredDate:(null===n||void 0===n?void 0:n.expiredDate)||null,salary:(null===n||void 0===n?void 0:n.salary)||{type:"Hourly",price:0,negotiable:!1}}}),[n]),a=(0,ge.cI)({resolver:(0,je.X)(l),defaultValues:s}),c=a.reset,d=a.control,x=a.handleSubmit,h=a.formState.isSubmitting;(0,u.useEffect)((function(){n&&c(s)}),[n,s,c]);var f=x(function(){var e=(0,be.Z)((0,fe.Z)().mark((function e(r){return(0,fe.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:c(),i(n?"Update success!":"Create success!"),t.push(m.H.dashboard.job.root),console.info("DATA",r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}()),b=(0,H.jsxs)(H.Fragment,{children:[r&&(0,H.jsxs)(we.Z,{md:4,children:[(0,H.jsx)(q.Z,{variant:"h6",sx:{mb:.5},children:"Details"}),(0,H.jsx)(q.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Title, short description, image..."})]}),(0,H.jsx)(we.Z,{xs:12,md:8,children:(0,H.jsxs)(F.Z,{children:[!r&&(0,H.jsx)(Se.Z,{title:"Details"}),(0,H.jsxs)(p.Z,{spacing:3,sx:{p:3},children:[(0,H.jsxs)(p.Z,{spacing:1.5,children:[(0,H.jsx)(q.Z,{variant:"subtitle2",children:"Title"}),(0,H.jsx)(Fe.au,{name:"title",placeholder:"Ex: Software Engineer..."})]}),(0,H.jsxs)(p.Z,{spacing:1.5,children:[(0,H.jsx)(q.Z,{variant:"subtitle2",children:"Content"}),(0,H.jsx)(Fe.LM,{simple:!0,name:"content"})]})]})]})})]}),y=(0,H.jsxs)(H.Fragment,{children:[r&&(0,H.jsxs)(we.Z,{md:4,children:[(0,H.jsx)(q.Z,{variant:"h6",sx:{mb:.5},children:"Properties"}),(0,H.jsx)(q.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Additional functions and attributes..."})]}),(0,H.jsx)(we.Z,{xs:12,md:8,children:(0,H.jsxs)(F.Z,{children:[!r&&(0,H.jsx)(Se.Z,{title:"Properties"}),(0,H.jsxs)(p.Z,{spacing:3,sx:{p:3},children:[(0,H.jsxs)(p.Z,{spacing:1,children:[(0,H.jsx)(q.Z,{variant:"subtitle2",children:"Employment type"}),(0,H.jsx)(Fe.s2,{row:!0,spacing:4,name:"employmentTypes",options:Z.yC})]}),(0,H.jsxs)(p.Z,{spacing:1,children:[(0,H.jsx)(q.Z,{variant:"subtitle2",children:"Experience"}),(0,H.jsx)(Fe.km,{row:!0,spacing:4,name:"experience",options:Z.J$})]}),(0,H.jsxs)(p.Z,{spacing:1.5,children:[(0,H.jsx)(q.Z,{variant:"subtitle2",children:"Role"}),(0,H.jsx)(Fe.Fl,{name:"role",autoHighlight:!0,options:Z.YX.map((function(e){return e})),getOptionLabel:function(e){return e},renderOption:function(e,n){return(0,u.createElement)("li",(0,o.Z)((0,o.Z)({},e),{},{key:n}),n)}})]}),(0,H.jsxs)(p.Z,{spacing:1.5,children:[(0,H.jsx)(q.Z,{variant:"subtitle2",children:"Skills"}),(0,H.jsx)(Fe.Fl,{name:"skills",placeholder:"+ Skills",multiple:!0,disableCloseOnSelect:!0,options:Z.w_.map((function(e){return e})),getOptionLabel:function(e){return e},renderOption:function(e,n){return(0,u.createElement)("li",(0,o.Z)((0,o.Z)({},e),{},{key:n}),n)},renderTags:function(e,n){return e.map((function(e,t){return(0,u.createElement)(Y.Z,(0,o.Z)((0,o.Z)({},n({index:t})),{},{key:e,label:e,size:"small",color:"info",variant:"soft"}))}))}})]}),(0,H.jsxs)(p.Z,{spacing:1.5,children:[(0,H.jsx)(q.Z,{variant:"subtitle2",children:"Working schedule"}),(0,H.jsx)(Fe.Fl,{name:"workingSchedule",placeholder:"+ Schedule",multiple:!0,disableCloseOnSelect:!0,options:Z.Gn.map((function(e){return e})),getOptionLabel:function(e){return e},renderOption:function(e,n){return(0,u.createElement)("li",(0,o.Z)((0,o.Z)({},e),{},{key:n}),n)},renderTags:function(e,n){return e.map((function(e,t){return(0,u.createElement)(Y.Z,(0,o.Z)((0,o.Z)({},n({index:t})),{},{key:e,label:e,size:"small",color:"info",variant:"soft"}))}))}})]}),(0,H.jsxs)(p.Z,{spacing:1.5,children:[(0,H.jsx)(q.Z,{variant:"subtitle2",children:"Locations"}),(0,H.jsx)(Fe.Fl,{name:"locations",placeholder:"+ Locations",multiple:!0,disableCloseOnSelect:!0,options:j.h.map((function(e){return e.label})),getOptionLabel:function(e){return e},renderOption:function(e,n){var t=j.h.filter((function(e){return e.label===n}))[0],r=t.code,i=t.label,l=t.phone;return i?(0,u.createElement)("li",(0,o.Z)((0,o.Z)({},e),{},{key:i}),(0,H.jsx)(g.Z,{icon:"circle-flags:".concat(r.toLowerCase()),width:28,sx:{mr:1}},i),i," (",r,") +",l):null},renderTags:function(e,n){return e.map((function(e,t){return(0,u.createElement)(Y.Z,(0,o.Z)((0,o.Z)({},n({index:t})),{},{key:e,label:e,size:"small",color:"info",variant:"soft"}))}))}})]}),(0,H.jsxs)(p.Z,{spacing:1.5,children:[(0,H.jsx)(q.Z,{variant:"subtitle2",children:"Expired"}),(0,H.jsx)(ge.Qr,{name:"expiredDate",control:d,render:function(e){var n=e.field,t=e.fieldState.error;return(0,H.jsx)(ve.M,(0,o.Z)((0,o.Z)({},n),{},{format:"dd/MM/yyyy",slotProps:{textField:{fullWidth:!0,error:!!t,helperText:null===t||void 0===t?void 0:t.message}}}))}})]}),(0,H.jsxs)(p.Z,{spacing:2,children:[(0,H.jsx)(q.Z,{variant:"subtitle2",children:"Salary"}),(0,H.jsx)(ge.Qr,{name:"salary.type",control:d,render:function(e){var n=e.field;return(0,H.jsx)(w.Z,{gap:2,display:"grid",gridTemplateColumns:"repeat(2, 1fr)",children:[{label:"Hourly",icon:(0,H.jsx)(g.Z,{icon:"solar:clock-circle-bold",width:32,sx:{mb:2}})},{label:"Custom",icon:(0,H.jsx)(g.Z,{icon:"solar:wad-of-money-bold",width:32,sx:{mb:2}})}].map((function(e){return(0,H.jsxs)(ae.Z,{component:Ce.Z,variant:"outlined",onClick:function(){return n.onChange(e.label)},sx:(0,o.Z)({p:2.5,borderRadius:1,typography:"subtitle2",flexDirection:"column"},e.label===n.value&&{borderWidth:2,borderColor:"text.primary"}),children:[e.icon,e.label]},e.label)}))})}}),(0,H.jsx)(Fe.au,{name:"salary.price",placeholder:"0.00",type:"number",InputProps:{startAdornment:(0,H.jsx)(N.Z,{position:"start",children:(0,H.jsx)(w.Z,{sx:{typography:"subtitle2",color:"text.disabled"},children:"$"})})}}),(0,H.jsx)(Fe._e,{name:"salary.negotiable",label:"Salary is negotiable"})]}),(0,H.jsxs)(p.Z,{spacing:1,children:[(0,H.jsx)(q.Z,{variant:"subtitle2",children:"Benefits"}),(0,H.jsx)(Fe.s2,{name:"benefits",options:Z.jK,sx:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)"}})]})]})]})})]}),v=(0,H.jsxs)(H.Fragment,{children:[r&&(0,H.jsx)(we.Z,{md:4}),(0,H.jsxs)(we.Z,{xs:12,md:8,sx:{display:"flex",alignItems:"center"},children:[(0,H.jsx)(ie.Z,{control:(0,H.jsx)(ke.Z,{defaultChecked:!0}),label:"Publish",sx:{flexGrow:1,pl:3}}),(0,H.jsx)(ye.Z,{type:"submit",variant:"contained",size:"large",loading:h,sx:{ml:2},children:n?"Save Changes":"Create Job"})]})]});return(0,H.jsx)(Fe.ZP,{methods:a,onSubmit:f,children:(0,H.jsxs)(we.Z,{container:!0,spacing:3,children:[b,y,v]})})}function Le(e){var n=e.id,t=(0,v.K$)(),r=Z.nb.find((function(e){return e.id===n}));return(0,H.jsxs)(h.Z,{maxWidth:!t.themeStretch&&"lg",children:[(0,H.jsx)(k.Z,{heading:"Edit",links:[{name:"Dashboard",href:m.H.dashboard.root},{name:"Job",href:m.H.dashboard.job.root},{name:null===r||void 0===r?void 0:r.title}],sx:{mb:{xs:3,md:5}}}),(0,H.jsx)(Ee,{currentJob:r})]})}function Re(){var e=(0,v.K$)();return(0,H.jsxs)(h.Z,{maxWidth:!e.themeStretch&&"lg",children:[(0,H.jsx)(k.Z,{heading:"Create a new job",links:[{name:"Dashboard",href:m.H.dashboard.root},{name:"Job",href:m.H.dashboard.job.root},{name:"New job"}],sx:{mb:{xs:3,md:5}}}),(0,H.jsx)(Ee,{})]})}var Ie=t(61474),qe=t(2101),De=t(80160),Pe=["publish","backLink","editLink","liveLink","publishOptions","onChangePublish","sx"];function We(e){var n=e.publish,t=e.backLink,r=e.editLink,i=e.liveLink,l=e.publishOptions,s=e.onChangePublish,a=e.sx,c=(0,se.Z)(e,Pe),d=(0,z.S)();return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(p.Z,(0,o.Z)((0,o.Z)({spacing:1.5,direction:"row",sx:(0,o.Z)({mb:{xs:3,md:5}},a)},c),{},{children:[(0,H.jsx)(x.Z,{component:f.r,href:t,startIcon:(0,H.jsx)(g.Z,{icon:"eva:arrow-ios-back-fill",width:16}),children:"Back"}),(0,H.jsx)(w.Z,{sx:{flexGrow:1}}),"published"===n&&(0,H.jsx)(te.Z,{title:"Go Live",children:(0,H.jsx)(I.Z,{component:f.r,href:i,children:(0,H.jsx)(g.Z,{icon:"eva:external-link-fill"})})}),(0,H.jsx)(te.Z,{title:"Edit",children:(0,H.jsx)(I.Z,{component:f.r,href:r,children:(0,H.jsx)(g.Z,{icon:"solar:pen-bold"})})}),(0,H.jsx)(ye.Z,{color:"inherit",variant:"contained",loading:!n,loadingIndicator:"Loading\u2026",endIcon:(0,H.jsx)(g.Z,{icon:"eva:arrow-ios-downward-fill"}),onClick:d.onOpen,sx:{textTransform:"capitalize"},children:n})]})),(0,H.jsx)(z.Z,{open:d.open,onClose:d.onClose,arrow:"top-right",sx:{width:140},children:l.map((function(e){return(0,H.jsxs)(R.Z,{selected:e.value===n,onClick:function(){d.onClose(),s(e.value)},children:["published"===e.value&&(0,H.jsx)(g.Z,{icon:"eva:cloud-upload-fill"}),"draft"===e.value&&(0,H.jsx)(g.Z,{icon:"solar:file-text-bold"}),e.label]},e.value)}))})]})}var ze=t(21362);function He(e){var n=e.job,t=n.title,r=n.skills,i=n.salary,o=n.content,l=n.benefits,s=n.createdAt,a=n.experience,c=n.expiredDate,d=n.employmentTypes,u=(0,H.jsxs)(p.Z,{component:F.Z,spacing:3,sx:{p:3},children:[(0,H.jsx)(q.Z,{variant:"h4",children:t}),(0,H.jsx)(ze.Z,{children:o}),(0,H.jsxs)(p.Z,{spacing:2,children:[(0,H.jsx)(q.Z,{variant:"h6",children:"Skills"}),(0,H.jsx)(p.Z,{direction:"row",alignItems:"center",spacing:1,children:r.map((function(e){return(0,H.jsx)(Y.Z,{label:e,variant:"soft"},e)}))})]}),(0,H.jsxs)(p.Z,{spacing:2,children:[(0,H.jsx)(q.Z,{variant:"h6",children:"Benefits"}),(0,H.jsx)(p.Z,{direction:"row",alignItems:"center",spacing:1,children:l.map((function(e){return(0,H.jsx)(Y.Z,{label:e,variant:"soft"},e)}))})]})]}),x=(0,H.jsx)(p.Z,{component:F.Z,spacing:2,sx:{p:3},children:[{label:"Date Posted",value:(0,P.Mu)(s),icon:(0,H.jsx)(g.Z,{icon:"solar:calendar-date-bold"})},{label:"Expiration date",value:(0,P.Mu)(c),icon:(0,H.jsx)(g.Z,{icon:"solar:calendar-date-bold"})},{label:"Employment type",value:d,icon:(0,H.jsx)(g.Z,{icon:"solar:clock-circle-bold"})},{label:"Offered salary",value:i.negotiable?"Negotiable":(0,W.e_)(i.price),icon:(0,H.jsx)(g.Z,{icon:"solar:wad-of-money-bold"})},{label:"Experience",value:a,icon:(0,H.jsx)(g.Z,{icon:"carbon:skill-level-basic"})}].map((function(e){return(0,H.jsxs)(p.Z,{spacing:1.5,direction:"row",children:[e.icon,(0,H.jsx)(D.Z,{primary:e.label,secondary:e.value,primaryTypographyProps:{typography:"body2",color:"text.secondary",mb:.5},secondaryTypographyProps:{typography:"subtitle2",color:"text.primary",component:"span"}})]},e.label)}))}),h=(0,H.jsxs)(p.Z,{component:ae.Z,variant:"outlined",spacing:2,direction:"row",sx:{p:3,borderRadius:2,mt:3},children:[(0,H.jsx)(E.Z,{alt:n.company.name,src:n.company.logo,variant:"rounded",sx:{width:64,height:64}}),(0,H.jsxs)(p.Z,{spacing:1,children:[(0,H.jsx)(q.Z,{variant:"subtitle1",children:n.company.name}),(0,H.jsx)(q.Z,{variant:"body2",children:n.company.fullAddress}),(0,H.jsx)(q.Z,{variant:"body2",children:n.company.phoneNumber})]})]});return(0,H.jsxs)(we.Z,{container:!0,spacing:3,children:[(0,H.jsx)(we.Z,{xs:12,md:8,children:u}),(0,H.jsxs)(we.Z,{xs:12,md:4,children:[x,h]})]})}var _e=t(12065);function Be(e){var n=e.candidates;return(0,H.jsx)(w.Z,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},children:n.map((function(e){return(0,H.jsxs)(p.Z,{component:F.Z,direction:"row",spacing:2,sx:{p:3},children:[(0,H.jsx)(I.Z,{sx:{position:"absolute",top:8,right:8},children:(0,H.jsx)(g.Z,{icon:"eva:more-vertical-fill"})}),(0,H.jsx)(E.Z,{alt:e.name,src:e.avatarUrl,sx:{width:48,height:48}}),(0,H.jsxs)(p.Z,{spacing:2,children:[(0,H.jsx)(D.Z,{primary:e.name,secondary:e.role,secondaryTypographyProps:{mt:.5,component:"span",typography:"caption",color:"text.disabled"}}),(0,H.jsxs)(p.Z,{spacing:1,direction:"row",children:[(0,H.jsx)(I.Z,{size:"small",color:"error",sx:{borderRadius:1,bgcolor:function(e){return(0,_e.Fq)(e.palette.error.main,.08)},"&:hover":{bgcolor:function(e){return(0,_e.Fq)(e.palette.error.main,.16)}}},children:(0,H.jsx)(g.Z,{width:18,icon:"solar:phone-bold"})}),(0,H.jsx)(I.Z,{size:"small",color:"info",sx:{borderRadius:1,bgcolor:function(e){return(0,_e.Fq)(e.palette.info.main,.08)},"&:hover":{bgcolor:function(e){return(0,_e.Fq)(e.palette.info.main,.16)}}},children:(0,H.jsx)(g.Z,{width:18,icon:"solar:chat-round-dots-bold"})}),(0,H.jsx)(I.Z,{size:"small",color:"primary",sx:{borderRadius:1,bgcolor:function(e){return(0,_e.Fq)(e.palette.primary.main,.08)},"&:hover":{bgcolor:function(e){return(0,_e.Fq)(e.palette.primary.main,.16)}}},children:(0,H.jsx)(g.Z,{width:18,icon:"fluent:mail-24-filled"})}),(0,H.jsx)(te.Z,{title:"Download CV",children:(0,H.jsx)(I.Z,{size:"small",color:"secondary",sx:{borderRadius:1,bgcolor:function(e){return(0,_e.Fq)(e.palette.secondary.main,.08)},"&:hover":{bgcolor:function(e){return(0,_e.Fq)(e.palette.secondary.main,.16)}}},children:(0,H.jsx)(g.Z,{width:18,icon:"eva:cloud-download-fill"})})})]})]})]},e.id)}))})}function Ae(e){var n=e.id,t=(0,v.K$)(),r=Z.nb.filter((function(e){return e.id===n}))[0],i=(0,u.useState)(null===r||void 0===r?void 0:r.publish),o=(0,l.Z)(i,2),s=o[0],a=o[1],c=(0,u.useState)("content"),d=(0,l.Z)(c,2),p=d[0],x=d[1],f=(0,u.useCallback)((function(e,n){x(n)}),[]),b=(0,u.useCallback)((function(e){a(e)}),[]),j=(0,H.jsx)(qe.Z,{value:p,onChange:f,sx:{mb:{xs:3,md:5}},children:Z.Ux.map((function(e){return(0,H.jsx)(Ie.Z,{iconPosition:"end",value:e.value,label:e.label,icon:"candidates"===e.value?(0,H.jsx)(De.Z,{variant:"filled",children:null===r||void 0===r?void 0:r.candidates.length}):""},e.value)}))});return(0,H.jsxs)(h.Z,{maxWidth:!t.themeStretch&&"lg",children:[(0,H.jsx)(We,{backLink:m.H.dashboard.job.root,editLink:m.H.dashboard.job.edit("".concat(null===r||void 0===r?void 0:r.id)),liveLink:"#",publish:s||"",onChangePublish:b,publishOptions:Z.D5}),j,"content"===p&&(0,H.jsx)(He,{job:r}),"candidates"===p&&(0,H.jsx)(Be,{candidates:null===r||void 0===r?void 0:r.candidates})]})}}}]);
//# sourceMappingURL=6685.cdede8d4.chunk.js.map