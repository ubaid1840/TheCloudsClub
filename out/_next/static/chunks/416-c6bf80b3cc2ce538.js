"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[416],{75267:function(e,t,n){n.d(t,{V:function(){return a}});var r=n(26387),i=n(57437),a=e=>(0,i.jsxs)(r.chakra.svg,{viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg",...e,children:[(0,i.jsx)("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),(0,i.jsx)("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"})]})},71300:function(e,t,n){n.d(t,{Z:function(){return r},d:function(){return i}});var[r,i]=(0,n(92730).k)({name:"AvatarStylesContext",hookName:"useAvatarStyles",providerName:"<Avatar/>"})},11308:function(e,t,n){n.d(t,{q:function(){return N},O:function(){return v}});var r=n(71300),i=n(26387),a=n(57437);function s(e){var t;let n=e.split(" "),r=null!=(t=n[0])?t:"",i=n.length>1?n[n.length-1]:"";return r&&i?"".concat(r.charAt(0)).concat(i.charAt(0)):r.charAt(0)}function l(e){let{name:t,getInitials:n,...s}=e,l=(0,r.d)();return(0,a.jsx)(i.chakra.div,{role:"img","aria-label":t,...s,__css:l.label,children:t?null==n?void 0:n(t):null})}l.displayName="AvatarName";var d=n(75267),o=n(1074),u=n(2265);function c(e){let{src:t,srcSet:n,onError:r,onLoad:s,getInitials:c,name:f,borderRadius:h,loading:m,iconLabel:g,icon:v=(0,a.jsx)(d.V,{}),ignoreFallback:N,referrerPolicy:b,crossOrigin:p}=e,x=(0,o.d)({src:t,onError:r,crossOrigin:p,ignoreFallback:N});return t&&"loaded"===x?(0,a.jsx)(i.chakra.img,{src:t,srcSet:n,alt:f,onLoad:s,referrerPolicy:b,crossOrigin:null!=p?p:void 0,className:"chakra-avatar__img",loading:m,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:h}}):f?(0,a.jsx)(l,{className:"chakra-avatar__initials",getInitials:c,name:f}):(0,u.cloneElement)(v,{role:"img","aria-label":g})}c.displayName="AvatarImage";var f=n(15151),h=n(18713),m=n(29506),g=n(99372),v={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},N=(0,f.forwardRef)((e,t)=>{let n=(0,h.useMultiStyleConfig)("Avatar",e),[l,o]=(0,u.useState)(!1),{src:f,srcSet:N,name:b,showBorder:p,borderRadius:x="full",onError:C,onLoad:I,getInitials:O=s,icon:E=(0,a.jsx)(d.V,{}),iconLabel:_=" avatar",loading:y,children:T,borderColor:w,ignoreFallback:k,crossOrigin:A,referrerPolicy:S,...j}=(0,m.Lr)(e),D={borderRadius:x,borderWidth:p?"2px":void 0,...v,...n.container};return w&&(D.borderColor=w),(0,a.jsx)(i.chakra.span,{ref:t,...j,className:(0,g.cx)("chakra-avatar",e.className),"data-loaded":(0,g.PB)(l),__css:D,children:(0,a.jsxs)(r.Z,{value:n,children:[(0,a.jsx)(c,{src:f,srcSet:N,loading:y,onLoad:(0,g.v0)(I,()=>{o(!0)}),onError:C,getInitials:O,name:b,borderRadius:x,icon:E,iconLabel:_,ignoreFallback:k,crossOrigin:A,referrerPolicy:S}),T]})})});N.displayName="Avatar"},1474:function(e,t,n){n.d(t,{n:function(){return b}});var r=n(2265),i=Object.defineProperty,a=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t,n)=>(a(e,"symbol"!=typeof t?t+"":t,n),n);function l(e){return e.sort((e,t)=>{let n=e.compareDocumentPosition(t);if(n&Node.DOCUMENT_POSITION_FOLLOWING||n&Node.DOCUMENT_POSITION_CONTAINED_BY)return -1;if(n&Node.DOCUMENT_POSITION_PRECEDING||n&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(!(n&Node.DOCUMENT_POSITION_DISCONNECTED)&&!(n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC))return 0;throw Error("Cannot sort the given nodes.")})}var d=e=>"object"==typeof e&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function o(e,t,n){let r=e+1;return n&&r>=t&&(r=0),r}function u(e,t,n){let r=e-1;return n&&r<0&&(r=t),r}var c="undefined"!=typeof window?r.useLayoutEffect:r.useEffect,f=e=>e,h=class{constructor(){var e=this;s(this,"descendants",new Map),s(this,"register",e=>{if(null!=e)return d(e)?this.registerNode(e):t=>{this.registerNode(t,e)}}),s(this,"unregister",e=>{this.descendants.delete(e);let t=l(Array.from(this.descendants.keys()));this.assignIndex(t)}),s(this,"destroy",()=>{this.descendants.clear()}),s(this,"assignIndex",e=>{this.descendants.forEach(t=>{let n=e.indexOf(t.node);t.index=n,t.node.dataset.index=t.index.toString()})}),s(this,"count",()=>this.descendants.size),s(this,"enabledCount",()=>this.enabledValues().length),s(this,"values",()=>Array.from(this.descendants.values()).sort((e,t)=>e.index-t.index)),s(this,"enabledValues",()=>this.values().filter(e=>!e.disabled)),s(this,"item",e=>{if(0!==this.count())return this.values()[e]}),s(this,"enabledItem",e=>{if(0!==this.enabledCount())return this.enabledValues()[e]}),s(this,"first",()=>this.item(0)),s(this,"firstEnabled",()=>this.enabledItem(0)),s(this,"last",()=>this.item(this.descendants.size-1)),s(this,"lastEnabled",()=>{let e=this.enabledValues().length-1;return this.enabledItem(e)}),s(this,"indexOf",e=>{var t,n;return e&&null!=(n=null==(t=this.descendants.get(e))?void 0:t.index)?n:-1}),s(this,"enabledIndexOf",e=>null==e?-1:this.enabledValues().findIndex(t=>t.node.isSameNode(e))),s(this,"next",function(t){let n=!(arguments.length>1)||void 0===arguments[1]||arguments[1],r=o(t,e.count(),n);return e.item(r)}),s(this,"nextEnabled",function(t){let n=!(arguments.length>1)||void 0===arguments[1]||arguments[1],r=e.item(t);if(!r)return;let i=o(e.enabledIndexOf(r.node),e.enabledCount(),n);return e.enabledItem(i)}),s(this,"prev",function(t){let n=!(arguments.length>1)||void 0===arguments[1]||arguments[1],r=u(t,e.count()-1,n);return e.item(r)}),s(this,"prevEnabled",function(t){let n=!(arguments.length>1)||void 0===arguments[1]||arguments[1],r=e.item(t);if(!r)return;let i=u(e.enabledIndexOf(r.node),e.enabledCount()-1,n);return e.enabledItem(i)}),s(this,"registerNode",(e,t)=>{if(!e||this.descendants.has(e))return;let n=l(Array.from(this.descendants.keys()).concat(e));(null==t?void 0:t.disabled)&&(t.disabled=!!t.disabled);let r={node:e,index:-1,...t};this.descendants.set(e,r),this.assignIndex(n)})}},m=n(92730),g=n(14697),[v,N]=(0,m.k)({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"});function b(){return[f(v),()=>f(N()),()=>(function(){let e=(0,r.useRef)(new h);return c(()=>()=>e.current.destroy()),e.current})(),e=>(function(e){let t=N(),[n,i]=(0,r.useState)(-1),a=(0,r.useRef)(null);c(()=>()=>{a.current&&t.unregister(a.current)},[]),c(()=>{if(!a.current)return;let e=Number(a.current.dataset.index);n==e||Number.isNaN(e)||i(e)});let s=e?f(t.register(e)):f(t.register);return{descendants:t,index:n,enabledIndex:t.enabledIndexOf(a.current),register:(0,g.lq)(s,a)}})(e)]}},1074:function(e,t,n){n.d(t,{d:function(){return a},z:function(){return s}});var r=n(94346),i=n(2265);function a(e){let{loading:t,src:n,srcSet:a,onLoad:s,onError:l,crossOrigin:d,sizes:o,ignoreFallback:u}=e,[c,f]=(0,i.useState)("pending");(0,i.useEffect)(()=>{f(n?"loading":"pending")},[n]);let h=(0,i.useRef)(),m=(0,i.useCallback)(()=>{if(!n)return;g();let e=new Image;e.src=n,d&&(e.crossOrigin=d),a&&(e.srcset=a),o&&(e.sizes=o),t&&(e.loading=t),e.onload=e=>{g(),f("loaded"),null==s||s(e)},e.onerror=e=>{g(),f("failed"),null==l||l(e)},h.current=e},[n,d,a,o,s,l,t]),g=()=>{h.current&&(h.current.onload=null,h.current.onerror=null,h.current=null)};return(0,r.G)(()=>{if(!u)return"loading"===c&&m(),()=>{g()}},[c,m,u]),u?"loaded":c}var s=(e,t)=>"loaded"!==e&&"beforeLoadOrError"===t||"failed"===e&&"onError"===t},89386:function(e,t,n){n.d(t,{U:function(){return s}});var r=n(10114),i=n(15151),a=n(57437),s=(0,i.forwardRef)((e,t)=>(0,a.jsx)(r.K,{align:"center",...e,direction:"row",ref:t}));s.displayName="HStack"},80230:function(e,t,n){n.d(t,{r:function(){return s}});var r=n(15151),i=n(26387),a=n(57437),s=(0,r.forwardRef)(function(e,t){let{templateAreas:n,gap:r,rowGap:s,columnGap:l,column:d,row:o,autoFlow:u,autoRows:c,templateRows:f,autoColumns:h,templateColumns:m,...g}=e;return(0,a.jsx)(i.chakra.div,{ref:t,__css:{display:"grid",gridTemplateAreas:n,gridGap:r,gridRowGap:s,gridColumnGap:l,gridAutoColumns:h,gridColumn:d,gridRow:o,gridAutoFlow:u,gridAutoRows:c,gridTemplateRows:f,gridTemplateColumns:m},...g})});s.displayName="Grid"},16122:function(e,t,n){n.d(t,{M:function(){return o}});var r=n(80230),i=n(15151),a=n(43983),s=n(91246),l=n(30643),d=n(57437),o=(0,i.forwardRef)(function(e,t){let{columns:n,spacingX:i,spacingY:o,spacing:u,minChildWidth:c,...f}=e,h=(0,a.useTheme)(),m=c?(0,l.XQ)(c,e=>{let t=(0,s.getToken)("sizes",e,"number"==typeof e?"".concat(e,"px"):e)(h);return null===e?null:"repeat(auto-fit, minmax(".concat(t,", 1fr))")}):(0,l.XQ)(n,e=>null===e?null:"repeat(".concat(e,", minmax(0, 1fr))"));return(0,d.jsx)(r.r,{ref:t,gap:u,columnGap:i,rowGap:o,templateColumns:m,...f})});o.displayName="SimpleGrid"},37132:function(e,t,n){n.d(t,{W:function(){return i}});var r=n(2265);function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=(0,r.useRef)(e);return(0,r.useEffect)(()=>{n.current=e}),(0,r.useCallback)(function(){for(var e,t=arguments.length,r=Array(t),i=0;i<t;i++)r[i]=arguments[i];return null==(e=n.current)?void 0:e.call(n,...r)},t)}},41861:function(e,t,n){n.d(t,{T:function(){return a}});var r=n(2265),i=n(37132);function a(e){let{value:t,defaultValue:n,onChange:a,shouldUpdate:s=(e,t)=>e!==t}=e,l=(0,i.W)(a),d=(0,i.W)(s),[o,u]=(0,r.useState)(n),c=void 0!==t,f=c?t:o,h=(0,i.W)(e=>{let t="function"==typeof e?e(f):e;d(f,t)&&(c||u(t),l(t))},[c,l,f,d]);return[f,h]}}}]);