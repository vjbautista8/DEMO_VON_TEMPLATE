"use strict";(self.webpackChunk_minimal_kit_cra_js=self.webpackChunk_minimal_kit_cra_js||[]).push([[4857],{50933:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(1413),i=n(45987),a=n(64554),o=n(50533),l=n(36314),c=n(4567),s=n(93517),u=n(83854),d=n(80184);function h(e){var t=e.link,n=e.activeLast,i=e.disabled,l=t.name,c=t.href,s=t.icon,h=(0,r.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},i&&!n&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),p=(0,d.jsxs)(d.Fragment,{children:[s&&(0,d.jsx)(a.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:s}),l]});return c?(0,d.jsx)(o.Z,{component:u.r,href:c,sx:h,children:p}):(0,d.jsxs)(a.Z,{sx:h,children:[" ",p," "]})}var p=["links","action","heading","moreLink","activeLast","sx"];function f(e){var t=e.links,n=e.action,u=e.heading,f=e.moreLink,y=e.activeLast,Z=e.sx,g=(0,i.Z)(e,p),x=t[t.length-1].name;return(0,d.jsxs)(a.Z,{sx:(0,r.Z)({},Z),children:[(0,d.jsxs)(l.Z,{direction:"row",alignItems:"center",children:[(0,d.jsxs)(a.Z,{sx:{flexGrow:1},children:[u&&(0,d.jsx)(c.Z,{variant:"h4",gutterBottom:!0,children:u}),!!t.length&&(0,d.jsx)(s.Z,(0,r.Z)((0,r.Z)({separator:(0,d.jsx)(m,{})},g),{},{children:t.map((function(e){return(0,d.jsx)(h,{link:e,activeLast:y,disabled:e.name===x},e.name||"")}))}))]}),n&&(0,d.jsxs)(a.Z,{sx:{flexShrink:0},children:[" ",n," "]})]}),!!f&&(0,d.jsx)(a.Z,{sx:{mt:2},children:f.map((function(e){return(0,d.jsx)(o.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function m(){return(0,d.jsx)(a.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},94857:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var r=n(6907),i=n(1413),a=n(29439),o=n(72791),l=n(16002),c=n(64554),s=n(85771),u=n(13034),d=n(89164),h=n(48550),p=n(4567),f=n(46314),m=n(38072),y=n(66964),Z=n(44e3),g=n(50933),x=n(31562),v=n(80184),b=["Option 1","Option 2"];function k(){var e=(0,o.useState)(b[0]),t=(0,a.Z)(e,2),n=t[0],r=t[1],k=(0,o.useState)(""),S=(0,a.Z)(k,2),w=S[0],C=S[1];return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(c.Z,{sx:{py:5,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,v.jsx)(d.Z,{children:(0,v.jsx)(g.Z,{heading:"Autocomplete",links:[{name:"Components",href:m.H.components},{name:"Autocomplete"}],moreLink:["https://mui.com/components/autocomplete"]})})}),(0,v.jsx)(d.Z,{sx:{my:10},children:(0,v.jsxs)(l.ZP,{columns:{xs:1,sm:2,md:3},spacing:3,children:[(0,v.jsx)(x.Z,{title:"Combo box",children:(0,v.jsx)(f.Z,{fullWidth:!0,options:j,getOptionLabel:function(e){return e.title},renderInput:function(e){return(0,v.jsx)(h.Z,(0,i.Z)((0,i.Z)({},e),{},{label:"Combo box",margin:"none"}))},renderOption:function(e,t){return(0,o.createElement)("li",(0,i.Z)((0,i.Z)({},e),{},{key:t.title}),t.title)}})}),(0,v.jsx)(x.Z,{title:"Country Select",children:(0,v.jsx)(f.Z,{fullWidth:!0,autoHighlight:!0,options:y.h,getOptionLabel:function(e){return e.label},renderInput:function(e){return(0,v.jsx)(h.Z,(0,i.Z)((0,i.Z)({},e),{},{label:"Choose a country",inputProps:(0,i.Z)((0,i.Z)({},e.inputProps),{},{autoComplete:"new-password"})}))},renderOption:function(e,t){return t.label?(0,o.createElement)("li",(0,i.Z)((0,i.Z)({},e),{},{key:t.label}),(0,v.jsx)(Z.Z,{icon:"circle-flags:".concat(t.code.toLowerCase()),width:28,sx:{mr:1}},t.label),t.label," (",t.code,") +",t.phone):null}})}),(0,v.jsxs)(x.Z,{title:"Controllable states",sx:{flexDirection:"column"},children:[(0,v.jsx)(f.Z,{fullWidth:!0,value:n,options:b,onChange:function(e,t){r(t)},inputValue:w,onInputChange:function(e,t){C(t)},getOptionLabel:function(e){return e},renderInput:function(e){return(0,v.jsx)(h.Z,(0,i.Z)((0,i.Z)({},e),{},{label:"Controllable"}))},renderOption:function(e,t){return(0,o.createElement)("li",(0,i.Z)((0,i.Z)({},e),{},{key:t}),t)}}),(0,v.jsx)(p.Z,{variant:"body2",children:"value: ".concat(null!==n?"'".concat(n,"'"):"null")}),(0,v.jsx)(p.Z,{variant:"body2",children:"inputValue: '".concat(w,"'")})]}),(0,v.jsxs)(x.Z,{title:"Free solo",children:[(0,v.jsx)(f.Z,{fullWidth:!0,freeSolo:!0,options:j.map((function(e){return e.title})),getOptionLabel:function(e){return e},renderInput:function(e){return(0,v.jsx)(h.Z,(0,i.Z)((0,i.Z)({},e),{},{label:"freeSolo"}))},renderOption:function(e,t){return(0,o.createElement)("li",(0,i.Z)((0,i.Z)({},e),{},{key:t}),t)}}),(0,v.jsx)(f.Z,{fullWidth:!0,freeSolo:!0,disableClearable:!0,options:j.map((function(e){return e.title})),getOptionLabel:function(e){return e},renderInput:function(e){return(0,v.jsx)(h.Z,(0,i.Z)((0,i.Z)({},e),{},{label:"Search input",InputProps:(0,i.Z)((0,i.Z)({},e.InputProps),{},{type:"search"})}))},renderOption:function(e,t){return(0,o.createElement)("li",(0,i.Z)((0,i.Z)({},e),{},{key:t}),t)}})]}),(0,v.jsx)(x.Z,{title:"Multiple Values",children:(0,v.jsx)(f.Z,{fullWidth:!0,multiple:!0,limitTags:3,options:j,getOptionLabel:function(e){return e.title},defaultValue:j.slice(0,8),renderInput:function(e){return(0,v.jsx)(h.Z,(0,i.Z)((0,i.Z)({},e),{},{label:"filterSelectedOptions",placeholder:"Favorites"}))},renderOption:function(e,t){return(0,o.createElement)("li",(0,i.Z)((0,i.Z)({},e),{},{key:t.title}),t.title)},renderTags:function(e,t){return e.map((function(e,n){return(0,o.createElement)(s.Z,(0,i.Z)((0,i.Z)({},t({index:n})),{},{key:e.title,label:e.title,size:"small",variant:"soft"}))}))}})}),(0,v.jsx)(x.Z,{title:"Checkboxes",children:(0,v.jsx)(f.Z,{fullWidth:!0,multiple:!0,options:j,disableCloseOnSelect:!0,getOptionLabel:function(e){return e.title},renderInput:function(e){return(0,v.jsx)(h.Z,(0,i.Z)((0,i.Z)({},e),{},{label:"Checkboxes",placeholder:"Favorites"}))},renderOption:function(e,t,n){var r=n.selected;return(0,o.createElement)("li",(0,i.Z)((0,i.Z)({},e),{},{key:t.title}),(0,v.jsx)(u.Z,{size:"small",disableRipple:!0,checked:r},t.title),t.title)},renderTags:function(e,t){return e.map((function(e,n){return(0,o.createElement)(s.Z,(0,i.Z)((0,i.Z)({},t({index:n})),{},{key:e.title,label:e.title,size:"small"}))}))}})}),(0,v.jsxs)(x.Z,{title:"Sizes",children:[(0,v.jsx)(f.Z,{fullWidth:!0,options:j,getOptionLabel:function(e){return e.title},defaultValue:j[13],renderInput:function(e){return(0,v.jsx)(h.Z,(0,i.Z)((0,i.Z)({},e),{},{label:"Size Medium",placeholder:"Favorites"}))},renderOption:function(e,t){return(0,o.createElement)("li",(0,i.Z)((0,i.Z)({},e),{},{key:t.title}),t.title)}}),(0,v.jsx)(f.Z,{fullWidth:!0,multiple:!0,size:"small",options:j,getOptionLabel:function(e){return e.title},defaultValue:[j[13]],renderInput:function(e){return(0,v.jsx)(h.Z,(0,i.Z)((0,i.Z)({},e),{},{label:"Size small",placeholder:"Favorites"}))},renderOption:function(e,t){return(0,o.createElement)("li",(0,i.Z)((0,i.Z)({},e),{},{key:t.title}),t.title)},renderTags:function(e,t){return e.map((function(e,n){return(0,o.createElement)(s.Z,(0,i.Z)((0,i.Z)({},t({index:n})),{},{key:e.title,label:e.title,size:"small",color:"info",variant:"soft"}))}))}})]})]})})]})}var j=[{title:"The Shawshank Redemption",year:1994},{title:"The Godfather",year:1972},{title:"The Godfather: Part II",year:1974},{title:"The Dark Knight",year:2008},{title:"12 Angry Men",year:1957},{title:"Schindler's List",year:1993},{title:"Pulp Fiction",year:1994},{title:"The Lord of the Rings: The Return of the King",year:2003},{title:"The Good, the Bad and the Ugly",year:1966},{title:"Fight Club",year:1999},{title:"The Lord of the Rings: The Fellowship of the Ring",year:2001},{title:"Star Wars: Episode V - The Empire Strikes Back",year:1980},{title:"Forrest Gump",year:1994},{title:"Inception",year:2010},{title:"The Lord of the Rings: The Two Towers",year:2002},{title:"One Flew Over the Cuckoo's Nest",year:1975},{title:"Goodfellas",year:1990},{title:"The Matrix",year:1999},{title:"Seven Samurai",year:1954},{title:"Star Wars: Episode IV - A New Hope",year:1977},{title:"City of God",year:2002},{title:"Se7en",year:1995},{title:"The Silence of the Lambs",year:1991},{title:"It's a Wonderful Life",year:1946},{title:"Life Is Beautiful",year:1997},{title:"The Usual Suspects",year:1995},{title:"L\xe9on: The Professional",year:1994},{title:"Spirited Away",year:2001},{title:"Saving Private Ryan",year:1998},{title:"Once Upon a Time in the West",year:1968},{title:"American History X",year:1998},{title:"Interstellar",year:2014},{title:"Casablanca",year:1942},{title:"City Lights",year:1931},{title:"Psycho",year:1960},{title:"The Green Mile",year:1999},{title:"The Intouchables",year:2011},{title:"Modern Times",year:1936},{title:"Raiders of the Lost Ark",year:1981},{title:"Rear Window",year:1954},{title:"The Pianist",year:2002},{title:"The Departed",year:2006},{title:"Terminator 2: Judgment Day",year:1991},{title:"Back to the Future",year:1985},{title:"Whiplash",year:2014},{title:"Gladiator",year:2e3},{title:"Memento",year:2e3},{title:"The Prestige",year:2006},{title:"The Lion King",year:1994},{title:"Apocalypse Now",year:1979},{title:"Alien",year:1979},{title:"Sunset Boulevard",year:1950},{title:"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",year:1964},{title:"The Great Dictator",year:1940},{title:"Cinema Paradiso",year:1988},{title:"The Lives of Others",year:2006},{title:"Grave of the Fireflies",year:1988},{title:"Paths of Glory",year:1957},{title:"Django Unchained",year:2012},{title:"The Shining",year:1980},{title:"WALL\xb7E",year:2008},{title:"American Beauty",year:1999},{title:"The Dark Knight Rises",year:2012},{title:"Princess Mononoke",year:1997},{title:"Aliens",year:1986},{title:"Oldboy",year:2003},{title:"Once Upon a Time in America",year:1984},{title:"Witness for the Prosecution",year:1957},{title:"Das Boot",year:1981},{title:"Citizen Kane",year:1941},{title:"North by Northwest",year:1959},{title:"Vertigo",year:1958},{title:"Star Wars: Episode VI - Return of the Jedi",year:1983},{title:"Reservoir Dogs",year:1992},{title:"Braveheart",year:1995},{title:"M",year:1931},{title:"Requiem for a Dream",year:2e3},{title:"Am\xe9lie",year:2001},{title:"A Clockwork Orange",year:1971},{title:"Like Stars on Earth",year:2007},{title:"Taxi Driver",year:1976},{title:"Lawrence of Arabia",year:1962},{title:"Double Indemnity",year:1944},{title:"Eternal Sunshine of the Spotless Mind",year:2004},{title:"Amadeus",year:1984},{title:"To Kill a Mockingbird",year:1962},{title:"Toy Story 3",year:2010},{title:"Logan",year:2017},{title:"Full Metal Jacket",year:1987},{title:"Dangal",year:2016},{title:"The Sting",year:1973},{title:"2001: A Space Odyssey",year:1968},{title:"Singin' in the Rain",year:1952},{title:"Toy Story",year:1995},{title:"Bicycle Thieves",year:1948},{title:"The Kid",year:1921},{title:"Inglourious Basterds",year:2009},{title:"Snatch",year:2e3},{title:"3 Idiots",year:2009},{title:"Monty Python and the Holy Grail",year:1975}];function S(){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(r.ql,{children:(0,v.jsx)("title",{children:" MUI: Autocomplete"})}),(0,v.jsx)(k,{})]})}},31562:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(1413),i=n(45987),a=n(12065),o=n(27938),l=n(9585),c=n(36314),s=n(80184),u=["title","sx","children"];function d(e){var t=e.title,n=e.sx,d=e.children,h=(0,i.Z)(e,u);return(0,s.jsxs)(o.Z,{variant:"outlined",sx:{borderRadius:1.5,borderStyle:"dashed",bgcolor:function(e){return(0,a.Fq)(e.palette.grey[500],.04)}},children:[t&&(0,s.jsx)(l.Z,{title:t}),(0,s.jsx)(c.Z,(0,r.Z)((0,r.Z)({spacing:3,direction:"row",alignItems:"center",justifyContent:"center",flexWrap:"wrap",sx:(0,r.Z)({p:5,minHeight:180},n)},h),{},{children:d}))]})}},16002:function(e,t,n){n.d(t,{ZP:function(){return w}});var r=n(93433),i=n(29439),a=n(63366),o=n(87462),l=n(94419),c=n(54164),s=n(66934),u=n(31402),d=n(51184),h=n(45682),p=n(82466),f=n(62876),m=n(6117),y=n(38717),Z=n(72791),g=n(21217);function x(e){return(0,g.Z)("MuiMasonry",e)}(0,n(75878).Z)("MuiMasonry",["root"]);var v=n(80184),b=["children","className","component","columns","spacing","defaultColumns","defaultHeight","defaultSpacing"],k=function(e){return Number(e.replace("px",""))},j={flexBasis:"100%",width:0,margin:0,padding:0},S=(0,s.ZP)("div",{name:"MuiMasonry",slot:"Root",overridesResolver:function(e,t){return[t.root]}})((function(e){var t=e.ownerState,n=e.theme,r={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"flex-start",boxSizing:"border-box","& > *":{boxSizing:"border-box"}},i={};if(t.isSSR){for(var a={},l=k(n.spacing(t.defaultSpacing)),c=1;c<=t.defaultColumns;c+=1)a["&:nth-of-type(".concat(t.defaultColumns,"n+").concat(c%t.defaultColumns,")")]={order:c};return i.height=t.defaultHeight,i.margin=-l/2,i["& > *"]=(0,o.Z)({},r["& > *"],a,{margin:l/2,width:"calc(".concat((100/t.defaultColumns).toFixed(2),"% - ").concat(l,"px)")}),(0,o.Z)({},r,i)}var s=(0,d.P$)({values:t.spacing,breakpoints:n.breakpoints.values}),u=(0,h.hB)(n);r=(0,p.Z)(r,(0,d.k9)({theme:n},s,(function(e){var n;if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e){var r=Number(e);n=(0,h.NA)(u,r)}else n=e;return(0,o.Z)({margin:"calc(0px - (".concat(n," / 2))"),"& > *":{margin:"calc(".concat(n," / 2)")}},t.maxColumnHeight&&{height:"number"===typeof n?Math.ceil(t.maxColumnHeight+k(n)):"calc(".concat(t.maxColumnHeight,"px + ").concat(n,")")})})));var f=(0,d.P$)({values:t.columns,breakpoints:n.breakpoints.values});return r=(0,p.Z)(r,(0,d.k9)({theme:n},f,(function(e){var t=Number(e),n="".concat((100/t).toFixed(2),"%"),r="string"===typeof s&&!Number.isNaN(Number(s))||"number"===typeof s?(0,h.NA)(u,Number(s)):"0px";return{"& > *":{width:"calc(".concat(n," - ").concat(r,")")}}}))),"object"===typeof s&&(r=(0,p.Z)(r,(0,d.k9)({theme:n},s,(function(e,t){if(t){var n=Number(e),r=Object.keys(f).pop(),i=(0,h.NA)(u,n),a="object"===typeof f?f[t]||f[r]:f,o="".concat((100/a).toFixed(2),"%");return{"& > *":{width:"calc(".concat(o," - ").concat(i,")")}}}return null})))),r})),w=Z.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiMasonry"}),s=n.children,d=n.className,h=n.component,p=void 0===h?"div":h,g=n.columns,w=void 0===g?4:g,C=n.spacing,T=void 0===C?1:C,I=n.defaultColumns,O=n.defaultHeight,L=n.defaultSpacing,R=(0,a.Z)(n,b),N=Z.useRef(),F=Z.useState(),M=(0,i.Z)(F,2),P=M[0],z=M[1],E=!P&&O&&void 0!==I&&void 0!==L,A=Z.useState(E?I-1:0),B=(0,i.Z)(A,2),W=B[0],H=B[1],D=(0,o.Z)({},n,{spacing:T,columns:w,maxColumnHeight:P,defaultColumns:I,defaultHeight:O,defaultSpacing:L,isSSR:E}),G=function(e){var t=e.classes;return(0,l.Z)({root:["root"]},x,t)}(D),V=function(e){if(N.current&&e&&0!==e.length){var t=N.current,n=N.current.firstChild,i=t.clientWidth,a=n.clientWidth;if(0!==i&&0!==a){var o=window.getComputedStyle(n),l=k(o.marginLeft),s=k(o.marginRight),u=Math.round(i/(a+l+s)),d=new Array(u).fill(0),h=!1;t.childNodes.forEach((function(e){if(e.nodeType===Node.ELEMENT_NODE&&"line-break"!==e.dataset.class&&!h){var t=window.getComputedStyle(e),n=k(t.marginTop),i=k(t.marginBottom),a=k(t.height)?Math.ceil(k(t.height))+n+i:0;if(0!==a){for(var o=0;o<e.childNodes.length;o+=1){var l=e.childNodes[o];if("IMG"===l.tagName&&0===l.clientHeight){h=!0;break}}if(!h){var c=d.indexOf(Math.min.apply(Math,(0,r.Z)(d)));d[c]+=a;var s=c+1;e.style.order=s}}else h=!0}})),h||c.flushSync((function(){z(Math.max.apply(Math,(0,r.Z)(d))),H(u>0?u-1:0)}))}}};(0,f.Z)((function(){if("undefined"!==typeof ResizeObserver){var e,t=new ResizeObserver((function(){e=window.requestAnimationFrame(V)}));return N.current&&N.current.childNodes.forEach((function(e){t.observe(e)})),function(){e&&window.cancelAnimationFrame(e),t&&t.disconnect()}}}),[w,T,s]);var _=(0,m.Z)(t,N),q=new Array(W).fill("").map((function(e,t){return(0,v.jsx)("span",{"data-class":"line-break",style:(0,o.Z)({},j,{order:t+1})},t)}));return(0,v.jsxs)(S,(0,o.Z)({as:p,className:(0,y.Z)(G.root,d),ref:_,ownerState:D},R,{children:[s,q]}))}))},13034:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(4942),i=n(63366),a=n(87462),o=n(72791),l=n(59278),c=n(94419),s=n(12065),u=n(97278),d=n(74223),h=n(80184),p=(0,d.Z)((0,h.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),f=(0,d.Z)((0,h.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),m=(0,d.Z)((0,h.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),y=n(14036),Z=n(31402),g=n(66934),x=n(64178),v=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],b=(0,g.ZP)(u.Z,{shouldForwardProp:function(e){return(0,g.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.indeterminate&&t.indeterminate,"default"!==n.color&&t["color".concat((0,y.Z)(n.color))]]}})((function(e){var t,n=e.theme,i=e.ownerState;return(0,a.Z)({color:(n.vars||n).palette.text.secondary},!i.disableRipple&&{"&:hover":{backgroundColor:n.vars?"rgba(".concat("default"===i.color?n.vars.palette.action.activeChannel:n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,s.Fq)("default"===i.color?n.palette.action.active:n.palette[i.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==i.color&&(t={},(0,r.Z)(t,"&.".concat(x.Z.checked,", &.").concat(x.Z.indeterminate),{color:(n.vars||n).palette[i.color].main}),(0,r.Z)(t,"&.".concat(x.Z.disabled),{color:(n.vars||n).palette.action.disabled}),t))})),k=(0,h.jsx)(f,{}),j=(0,h.jsx)(p,{}),S=(0,h.jsx)(m,{}),w=o.forwardRef((function(e,t){var n,r,s=(0,Z.Z)({props:e,name:"MuiCheckbox"}),u=s.checkedIcon,d=void 0===u?k:u,p=s.color,f=void 0===p?"primary":p,m=s.icon,g=void 0===m?j:m,w=s.indeterminate,C=void 0!==w&&w,T=s.indeterminateIcon,I=void 0===T?S:T,O=s.inputProps,L=s.size,R=void 0===L?"medium":L,N=s.className,F=(0,i.Z)(s,v),M=C?I:g,P=C?I:d,z=(0,a.Z)({},s,{color:f,indeterminate:C,size:R}),E=function(e){var t=e.classes,n=e.indeterminate,r=e.color,i=e.size,o={root:["root",n&&"indeterminate","color".concat((0,y.Z)(r)),"size".concat((0,y.Z)(i))]},l=(0,c.Z)(o,x.y,t);return(0,a.Z)({},t,l)}(z);return(0,h.jsx)(b,(0,a.Z)({type:"checkbox",inputProps:(0,a.Z)({"data-indeterminate":C},O),icon:o.cloneElement(M,{fontSize:null!=(n=M.props.fontSize)?n:R}),checkedIcon:o.cloneElement(P,{fontSize:null!=(r=P.props.fontSize)?r:R}),ownerState:z,ref:t,className:(0,l.Z)(E.root,N)},F,{classes:E}))}))},97278:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(29439),i=n(63366),a=n(87462),o=n(72791),l=n(59278),c=n(94419),s=n(14036),u=n(66934),d=n(98278),h=n(52930),p=n(95080),f=n(75878),m=n(21217);function y(e){return(0,m.Z)("PrivateSwitchBase",e)}(0,f.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var Z=n(80184),g=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],x=(0,u.ZP)(p.Z)((function(e){var t=e.ownerState;return(0,a.Z)({padding:9,borderRadius:"50%"},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})})),v=(0,u.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),b=o.forwardRef((function(e,t){var n=e.autoFocus,o=e.checked,u=e.checkedIcon,p=e.className,f=e.defaultChecked,m=e.disabled,b=e.disableFocusRipple,k=void 0!==b&&b,j=e.edge,S=void 0!==j&&j,w=e.icon,C=e.id,T=e.inputProps,I=e.inputRef,O=e.name,L=e.onBlur,R=e.onChange,N=e.onFocus,F=e.readOnly,M=e.required,P=void 0!==M&&M,z=e.tabIndex,E=e.type,A=e.value,B=(0,i.Z)(e,g),W=(0,d.Z)({controlled:o,default:Boolean(f),name:"SwitchBase",state:"checked"}),H=(0,r.Z)(W,2),D=H[0],G=H[1],V=(0,h.Z)(),_=m;V&&"undefined"===typeof _&&(_=V.disabled);var q="checkbox"===E||"radio"===E,K=(0,a.Z)({},e,{checked:D,disabled:_,disableFocusRipple:k,edge:S}),U=function(e){var t=e.classes,n=e.checked,r=e.disabled,i=e.edge,a={root:["root",n&&"checked",r&&"disabled",i&&"edge".concat((0,s.Z)(i))],input:["input"]};return(0,c.Z)(a,y,t)}(K);return(0,Z.jsxs)(x,(0,a.Z)({component:"span",className:(0,l.Z)(U.root,p),centerRipple:!0,focusRipple:!k,disabled:_,tabIndex:null,role:void 0,onFocus:function(e){N&&N(e),V&&V.onFocus&&V.onFocus(e)},onBlur:function(e){L&&L(e),V&&V.onBlur&&V.onBlur(e)},ownerState:K,ref:t},B,{children:[(0,Z.jsx)(v,(0,a.Z)({autoFocus:n,checked:o,defaultChecked:f,className:U.input,disabled:_,id:q?C:void 0,name:O,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var t=e.target.checked;G(t),R&&R(e,t)}},readOnly:F,ref:I,required:P,ownerState:K,tabIndex:z,type:E},"checkbox"===E&&void 0===A?{}:{value:A},T)),D?u:w]}))}))},38717:function(e,t,n){function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.Z=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}}}]);
//# sourceMappingURL=4857.e3ded105.chunk.js.map