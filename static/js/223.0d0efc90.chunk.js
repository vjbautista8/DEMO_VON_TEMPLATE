"use strict";(self.webpackChunk_minimal_kit_cra_js=self.webpackChunk_minimal_kit_cra_js||[]).push([[223],{50933:function(e,r,n){n.d(r,{Z:function(){return x}});var t=n(1413),l=n(45987),o=n(64554),a=n(50533),i=n(36314),s=n(4567),d=n(93517),c=n(83854),u=n(80184);function m(e){var r=e.link,n=e.activeLast,l=e.disabled,i=r.name,s=r.href,d=r.icon,m=(0,t.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},l&&!n&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),p=(0,u.jsxs)(u.Fragment,{children:[d&&(0,u.jsx)(o.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:d}),i]});return s?(0,u.jsx)(a.Z,{component:c.r,href:s,sx:m,children:p}):(0,u.jsxs)(o.Z,{sx:m,children:[" ",p," "]})}var p=["links","action","heading","moreLink","activeLast","sx"];function x(e){var r=e.links,n=e.action,c=e.heading,x=e.moreLink,b=e.activeLast,f=e.sx,g=(0,l.Z)(e,p),j=r[r.length-1].name;return(0,u.jsxs)(o.Z,{sx:(0,t.Z)({},f),children:[(0,u.jsxs)(i.Z,{direction:"row",alignItems:"center",children:[(0,u.jsxs)(o.Z,{sx:{flexGrow:1},children:[c&&(0,u.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:c}),!!r.length&&(0,u.jsx)(d.Z,(0,t.Z)((0,t.Z)({separator:(0,u.jsx)(h,{})},g),{},{children:r.map((function(e){return(0,u.jsx)(m,{link:e,activeLast:b,disabled:e.name===j},e.name||"")}))}))]}),n&&(0,u.jsxs)(o.Z,{sx:{flexShrink:0},children:[" ",n," "]})]}),!!x&&(0,u.jsx)(o.Z,{sx:{mt:2},children:x.map((function(e){return(0,u.jsx)(a.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function h(){return(0,u.jsx)(o.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},2754:function(e,r,n){n.r(r),n.d(r,{default:function(){return G}});var t=n(6907),l=n(29439),o=n(72791),a=n(64554),i=n(36314),s=n(89891),d=n(94721),c=n(89164),u=n(4567),m=n(25801),p=n(38072),x=n(50933),h=n(1413),b=n(93433),f=n(74165),g=n(15861),j=n(44695),v=n(61134),Z=n(53106),y=n(12258),w=n(82626),k=n(52739),S=n(13400),C=n(63466),R=n(13239),q=n(22459),O=n(44e3),F=n(39231),U=n(8007),P=U.Ry().shape({fullName:U.Z_().required("Full name is required").min(6,"Mininum 6 characters").max(32,"Maximum 32 characters"),email:U.Z_().required("Email is required").email("Email must be a valid email address"),age:U.Rx().required("Age is required").moreThan(18,"Age must be between 18 and 100").lessThan(100,"Age must be between 18 and 100"),startDate:U.nK().nullable().required("Start date is required"),endDate:U.nK().required("End date is required").test("date-min","End date must be later than start date",(function(e,r){var n=r.parent;return e.getTime()>n.startDate.getTime()})),password:U.Z_().required("Password is required").min(6,"Password should be of minimum 6 characters length"),confirmPassword:U.Z_().required("Confirm password is required").oneOf([U.iH("password")],"Password's not match"),slider:U.Rx().required("Slider is required").min(10,"Mininum value is >= 10"),sliderRange:U.nK().required("Slider range is is required").test("min","Range must be between 20 and 80",(function(e){return e[0]>=20})).test("max","Range must be between 20 and 80",(function(e){return e[1]<=80})),singleUpload:U.nK().nullable().required("Single upload is required"),multiUpload:U.IX().min(2,"Must have at least 2 items"),checkbox:U.O7().oneOf([!0],"Checkbox is required"),multiCheckbox:U.IX().min(1,"Choose at least one option"),singleSelect:U.Z_().required("Single select is required"),multiSelect:U.IX().min(2,"Must have at least 2 items"),switch:U.O7().oneOf([!0],"Switch is required"),radioGroup:U.Z_().required("Choose at least one option"),editor:U.Z_().required("Editor is required"),autocomplete:U.nK().nullable().required("Autocomplete is required")}),I=n(13967),M=n(96174),A=n(74744),_=n(38887),H=n(18197),L=n(80184);function T(){var e=(0,I.Z)(),r=(0,_.F)("up","md"),n=(0,v.Gc)(),t=n.watch,l=n.formState.errors,o=t();return r?(0,L.jsx)(M.h,{children:(0,L.jsxs)(i.Z,{sx:(0,h.Z)({p:3,top:0,right:0,height:1,width:280,position:"fixed",overflowX:"auto",color:"common.white",zIndex:e.zIndex.drawer},(0,A.Ls)({color:e.palette.grey[900]})),children:[(0,L.jsx)(u.Z,{variant:"overline",sx:{mb:2,color:"success.light"},children:"Values"}),Object.keys(o).map((function(e){return(0,L.jsxs)(i.Z,{sx:{typography:"caption",mt:.5},children:[(0,L.jsxs)(u.Z,{variant:"body2",sx:{color:"warning.main"},children:[e," :"]}),N(o,e)]},e)})),(0,L.jsx)(d.Z,{sx:{my:2}}),(0,L.jsx)(u.Z,{variant:"overline",sx:{mb:2,color:"error.light"},children:"Errors"}),(0,L.jsx)(u.Z,{variant:"caption",sx:{color:"error.light"},children:JSON.stringify(Object.keys(l),null,2)})]})}):null}function N(e,r){return"singleUpload"===r?JSON.stringify(e.singleUpload&&(0,H.ht)(e.singleUpload)):"multiUpload"===r?JSON.stringify(e.multiUpload.map((function(e){return(0,H.ht)(e)}))):JSON.stringify(e[r])||"---"}var E=[{value:"option 1",label:"Option 1"},{value:"option 2",label:"Option 2"},{value:"option 3",label:"Option 3"},{value:"option 4",label:"Option 4"},{value:"option 5",label:"Option 5"},{value:"option 6",label:"Option 6"},{value:"option 7",label:"Option 7"},{value:"option 8",label:"Option 8"}],D={age:0,email:"",fullName:"",editor:"",switch:!1,radioGroup:"",autocomplete:null,password:"",confirmPassword:"",startDate:null,endDate:null,singleUpload:null,multiUpload:[],singleSelect:"",multiSelect:[],checkbox:!1,multiCheckbox:[],slider:8,sliderRange:[15,80]};function V(e){var r=e.debug,n=(0,q.k)(),t=(0,v.cI)({resolver:(0,j.X)(P),defaultValues:D}),l=t.watch,s=t.reset,c=t.control,u=t.setValue,m=t.handleSubmit,p=t.formState.isSubmitting,x=l(),U=m(function(){var e=(0,g.Z)((0,f.Z)().mark((function e(r){return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise((function(e){return setTimeout(e,3e3)}));case 3:s(),console.info("DATA",r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()),I=(0,o.useCallback)((function(e){var r=e[0],n=Object.assign(r,{preview:URL.createObjectURL(r)});n&&u("singleUpload",n,{shouldValidate:!0})}),[u]),M=(0,o.useCallback)((function(e){var r=x.multiUpload||[],n=e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})}));u("multiUpload",[].concat((0,b.Z)(r),(0,b.Z)(n)),{shouldValidate:!0})}),[u,x.multiUpload]);return(0,L.jsxs)(L.Fragment,{children:[p&&(0,L.jsx)(k.Z,{open:!0,sx:{zIndex:function(e){return e.zIndex.modal+1}},children:(0,L.jsx)(R.Z,{color:"primary"})}),(0,L.jsxs)(F.ZP,{methods:t,onSubmit:U,children:[(0,L.jsxs)(a.Z,{gap:5,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[(0,L.jsxs)(i.Z,{spacing:2,children:[(0,L.jsx)(z,{children:(0,L.jsx)(F.au,{name:"fullName",label:"Full Name"})}),(0,L.jsx)(z,{children:(0,L.jsx)(F.au,{name:"email",label:"Email address"})}),(0,L.jsx)(z,{children:(0,L.jsx)(F.au,{name:"age",label:"Age",type:"number"})}),(0,L.jsxs)(i.Z,{spacing:2,direction:{xs:"column",sm:"row"},children:[(0,L.jsx)(v.Qr,{name:"startDate",control:c,render:function(e){var r=e.field,n=e.fieldState.error;return(0,L.jsx)(Z.M,(0,h.Z)((0,h.Z)({},r),{},{label:"Start date",format:"dd/MM/yyyy",slotProps:{textField:{fullWidth:!0,error:!!n,helperText:null===n||void 0===n?void 0:n.message}}}))}}),(0,L.jsx)(v.Qr,{name:"endDate",control:c,render:function(e){var r=e.field,n=e.fieldState.error;return(0,L.jsx)(Z.M,(0,h.Z)((0,h.Z)({},r),{},{label:"End date",format:"dd/MM/yyyy",slotProps:{textField:{fullWidth:!0,error:!!n,helperText:null===n||void 0===n?void 0:n.message}}}))}})]}),(0,L.jsxs)(i.Z,{spacing:2,direction:{xs:"column",sm:"row"},children:[(0,L.jsx)(z,{children:(0,L.jsx)(F.au,{name:"password",label:"Password",type:n.value?"text":"password",InputProps:{endAdornment:(0,L.jsx)(C.Z,{position:"end",children:(0,L.jsx)(S.Z,{onClick:n.onToggle,edge:"end",children:(0,L.jsx)(O.Z,{icon:n.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}})}),(0,L.jsx)(z,{children:(0,L.jsx)(F.au,{name:"confirmPassword",label:"Confirm Password",type:n.value?"text":"password",InputProps:{endAdornment:(0,L.jsx)(C.Z,{position:"end",children:(0,L.jsx)(S.Z,{onClick:n.onToggle,edge:"end",children:(0,L.jsx)(O.Z,{icon:n.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}})})]}),(0,L.jsx)(z,{label:"RHFAutocomplete",children:(0,L.jsx)(F.Fl,{name:"autocomplete",label:"Autocomplete",options:E,getOptionLabel:function(e){return e.label},isOptionEqualToValue:function(e,r){return e.value===r.value},renderOption:function(e,r){return(0,o.createElement)("li",(0,h.Z)((0,h.Z)({},e),{},{key:r.value}),r.label)}})}),(0,L.jsx)(z,{label:"RHFSelect",children:(0,L.jsxs)(F.Cc,{name:"singleSelect",label:"Single select",children:[(0,L.jsx)(w.Z,{value:"",children:"None"}),(0,L.jsx)(d.Z,{sx:{borderStyle:"dashed"}}),E.map((function(e){return(0,L.jsx)(w.Z,{value:e.label,children:e.label},e.value)}))]})}),(0,L.jsx)(z,{label:"RHFMultiSelect",children:(0,L.jsx)(F.vA,{chip:!0,checkbox:!0,name:"multiSelect",label:"Multi select",options:E})}),(0,L.jsx)(z,{label:"RHFEditor",children:(0,L.jsx)(F.LM,{simple:!0,name:"editor",sx:{height:200}})})]}),(0,L.jsxs)(i.Z,{spacing:2,children:[(0,L.jsx)(z,{label:"RHFUpload",children:(0,L.jsx)(F.rd,{name:"singleUpload",maxSize:3145728,onDrop:I,onDelete:function(){return u("singleUpload",null,{shouldValidate:!0})}})}),(0,L.jsx)(z,{label:"RHFUpload",children:(0,L.jsx)(F.rd,{multiple:!0,thumbnail:!0,name:"multiUpload",maxSize:3145728,onDrop:M,onRemove:function(e){var r;return u("multiUpload",x.multiUpload&&(null===(r=x.multiUpload)||void 0===r?void 0:r.filter((function(r){return r!==e}))),{shouldValidate:!0})},onRemoveAll:function(){return u("multiUpload",[],{shouldValidate:!0})},onUpload:function(){return console.info("ON UPLOAD")}})}),(0,L.jsx)(F.jb,{name:"checkbox",label:"RHFCheckbox"}),(0,L.jsx)(F._e,{name:"switch",label:"RHFSwitch"}),(0,L.jsx)(F.km,{row:!0,name:"radioGroup",label:"RHFRadioGroup",spacing:4,options:[{value:"option 1",label:"Radio 1"},{value:"option 2",label:"Radio 2"},{value:"option 3",label:"Radio 3"}]}),(0,L.jsx)(F.s2,{row:!0,name:"multiCheckbox",label:"RHFMultiCheckbox",spacing:4,options:[{value:"option 1",label:"Checkbox 1"},{value:"option 2",label:"Checkbox 2"},{value:"option 3",label:"Checkbox 3"}]}),(0,L.jsx)(z,{label:"RHFSlider",children:(0,L.jsx)(F.kk,{name:"slider"})}),(0,L.jsx)(z,{label:"RHFSlider",children:(0,L.jsx)(F.kk,{name:"sliderRange"})}),(0,L.jsx)(y.Z,{fullWidth:!0,color:"info",size:"large",type:"submit",variant:"soft",loading:p,children:"Submit to Check"})]})]}),r&&(0,L.jsx)(T,{})]})]})}function z(e){var r=e.label,n=void 0===r?"RHFTextField":r,t=e.sx,l=e.children;return(0,L.jsxs)(i.Z,{spacing:1,sx:(0,h.Z)({width:1},t),children:[(0,L.jsx)(u.Z,{variant:"caption",sx:{textAlign:"right",fontStyle:"italic",color:"text.disabled"},children:n}),l]})}function B(){var e=(0,o.useState)(!0),r=(0,l.Z)(e,2),n=r[0],t=r[1];return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(a.Z,{sx:{py:5,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,L.jsx)(c.Z,{children:(0,L.jsx)(x.Z,{heading:"Form Validation",links:[{name:"Components",href:p.H.components},{name:"Form Validation"}],moreLink:["https://react-hook-form.com/","https://github.com/jquense/yup"]})})}),(0,L.jsxs)(c.Z,{sx:{my:10},children:[(0,L.jsxs)(i.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,L.jsx)(u.Z,{variant:"h4",children:" React Hook Form + Yup "}),(0,L.jsx)(m.Z,{control:(0,L.jsx)(s.Z,{checked:n,onChange:function(e){t(e.target.checked)}}),label:"Show Debug",labelPlacement:"start"})]}),(0,L.jsx)(d.Z,{sx:{my:5}}),(0,L.jsx)(V,{debug:n})]})]})}function G(){return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(t.ql,{children:(0,L.jsx)("title",{children:" Extra: Form Validation"})}),(0,L.jsx)(B,{})]})}},93517:function(e,r,n){n.d(r,{Z:function(){return I}});var t=n(93433),l=n(29439),o=n(4942),a=n(87462),i=n(63366),s=n(72791),d=(n(57441),n(59278)),c=n(94419),u=n(26912),m=n(66934),p=n(31402),x=n(4567),h=n(12065),b=n(74223),f=n(80184),g=(0,b.Z)((0,f.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),j=n(95080),v=["slots","slotProps"],Z=(0,m.ZP)(j.Z)((function(e){var r=e.theme;return(0,a.Z)({display:"flex",marginLeft:"calc(".concat(r.spacing(1)," * 0.5)"),marginRight:"calc(".concat(r.spacing(1)," * 0.5)")},"light"===r.palette.mode?{backgroundColor:r.palette.grey[100],color:r.palette.grey[700]}:{backgroundColor:r.palette.grey[700],color:r.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,a.Z)({},"light"===r.palette.mode?{backgroundColor:r.palette.grey[200]}:{backgroundColor:r.palette.grey[600]}),"&:active":(0,a.Z)({boxShadow:r.shadows[0]},"light"===r.palette.mode?{backgroundColor:(0,h._4)(r.palette.grey[200],.12)}:{backgroundColor:(0,h._4)(r.palette.grey[600],.12)})})})),y=(0,m.ZP)(g)({width:24,height:16});var w=function(e){var r=e.slots,n=void 0===r?{}:r,t=e.slotProps,l=void 0===t?{}:t,o=(0,i.Z)(e,v),s=e;return(0,f.jsx)("li",{children:(0,f.jsx)(Z,(0,a.Z)({focusRipple:!0},o,{ownerState:s,children:(0,f.jsx)(y,(0,a.Z)({as:n.CollapsedIcon,ownerState:s},l.collapsedIcon))}))})},k=n(75878),S=n(21217);function C(e){return(0,S.Z)("MuiBreadcrumbs",e)}var R=(0,k.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),q=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],O=(0,m.ZP)(x.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,r){return[(0,o.Z)({},"& .".concat(R.li),r.li),r.root]}})({}),F=(0,m.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,r){return r.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),U=(0,m.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,r){return r.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function P(e,r,n,t){return e.reduce((function(l,o,a){return a<e.length-1?l=l.concat(o,(0,f.jsx)(U,{"aria-hidden":!0,className:r,ownerState:t,children:n},"separator-".concat(a))):l.push(o),l}),[])}var I=s.forwardRef((function(e,r){var n=(0,p.Z)({props:e,name:"MuiBreadcrumbs"}),o=n.children,m=n.className,x=n.component,h=void 0===x?"nav":x,b=n.slots,g=void 0===b?{}:b,j=n.slotProps,v=void 0===j?{}:j,Z=n.expandText,y=void 0===Z?"Show path":Z,k=n.itemsAfterCollapse,S=void 0===k?1:k,R=n.itemsBeforeCollapse,U=void 0===R?1:R,I=n.maxItems,M=void 0===I?8:I,A=n.separator,_=void 0===A?"/":A,H=(0,i.Z)(n,q),L=s.useState(!1),T=(0,l.Z)(L,2),N=T[0],E=T[1],D=(0,a.Z)({},n,{component:h,expanded:N,expandText:y,itemsAfterCollapse:S,itemsBeforeCollapse:U,maxItems:M,separator:_}),V=function(e){var r=e.classes;return(0,c.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},C,r)}(D),z=(0,u.y)({elementType:g.CollapsedIcon,externalSlotProps:v.collapsedIcon,ownerState:D}),B=s.useRef(null),G=s.Children.toArray(o).filter((function(e){return s.isValidElement(e)})).map((function(e,r){return(0,f.jsx)("li",{className:V.li,children:e},"child-".concat(r))}));return(0,f.jsx)(O,(0,a.Z)({ref:r,component:h,color:"text.secondary",className:(0,d.Z)(V.root,m),ownerState:D},H,{children:(0,f.jsx)(F,{className:V.ol,ref:B,ownerState:D,children:P(N||M&&G.length<=M?G:function(e){return U+S>=e.length?e:[].concat((0,t.Z)(e.slice(0,U)),[(0,f.jsx)(w,{"aria-label":y,slots:{CollapsedIcon:g.CollapsedIcon},slotProps:{collapsedIcon:z},onClick:function(){E(!0);var e=B.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,t.Z)(e.slice(e.length-S,e.length)))}(G),V.separator,_,D)})}))}))}}]);
//# sourceMappingURL=223.0d0efc90.chunk.js.map