(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[214],{7994:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gallery",function(){return r(48963)}])},48963:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return b}});var t=r(85893),s=r(1199),a=r(10682),i=r(21608),o=r(31555),c=r(52205),l=r(53672),u=r(67294),d=r(56390);function f(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function h(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,s,a=[],i=!0,o=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(a.push(t.value),!n||a.length!==n);i=!0);}catch(c){o=!0,s=c}finally{try{i||null==r.return||r.return()}finally{if(o)throw s}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return f(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var m=function(e){var n=e.totalNumTokens,r=h((0,l.W)("page"),2),s=r[0],f=r[1],m=(0,u.useState)(1),x=m[0],j=m[1];(0,u.useEffect)((function(){j(parseInt(s||"1"))}),[s]);var p=(0,u.useMemo)((function(){for(var e=[],r=Math.ceil(n/15),t=0;t<r;t++)e.push(t+1);return e}),[n]),v=p.length>0?p[p.length-1]:1,g=(0,u.useMemo)((function(){for(var e=[],n=Math.max(1,x-3),r=Math.min(v,x+3),t=n;t<=r;t++)e.push(t);return{ellipsisStart:n>1&&e.length,ellipsisEnd:r<v,pagesToRender:e}}),[x,v]),y=(0,u.useMemo)((function(){for(var e=[],r=15*(x-1)+1,t=Math.min(r+15-1,n),s=r;s<=t;s++)e.push(s.toString());return e}),[v,x]),b=function(e){f(Math.max(p[0],Math.min(e,p[p.length-1])).toString()),window.scrollTo(0,0),console.log("scrolling")};return(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(i.Z,{children:(0,t.jsx)(d.r,{tokenIds:y})}),(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(o.Z,{}),(0,t.jsx)(o.Z,{children:(0,t.jsx)("div",{className:"text-center",style:{margin:"0 auto",width:"50%"},children:(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(c.Z.First,{disabled:1===x,onClick:function(){return b(1)}}),(0,t.jsx)(c.Z.Prev,{disabled:1===x,onClick:function(){return b(x-1)}}),g.ellipsisStart&&(0,t.jsx)(c.Z.Ellipsis,{}),g.pagesToRender.map((function(e){return(0,t.jsx)(c.Z.Item,{active:e===x,onClick:function(){return b(e)},children:e},e)})),g.ellipsisEnd&&(0,t.jsx)(c.Z.Ellipsis,{}),(0,t.jsx)(c.Z.Next,{disabled:x===v,onClick:function(){return b(x+1)}}),(0,t.jsx)(c.Z.Last,{disabled:x===v,onClick:function(){return b(p[p.length-1])}})]})})}),(0,t.jsx)(o.Z,{})]})]})},x=r(86135),j=function(){var e=(0,x.o)().numTokens;return(0,t.jsxs)(a.Z,{children:[(0,t.jsxs)("p",{children:[(0,t.jsx)("b",{children:e||0})," of ",(0,t.jsx)("b",{children:"1024"})," tokens have been minted."]}),void 0!==e?(0,t.jsx)(m,{totalNumTokens:e}):(0,t.jsx)("p",{children:"Loading..."})]})},p=r(579),v=r(9008),g=r(15295);function y(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(v.default,{children:(0,t.jsx)("title",{children:"Gallery"})}),(0,t.jsx)(s.h,{}),(0,t.jsx)("main",{style:{padding:"1rem 0"},children:(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(p.V,{children:"Gallery"}),(0,t.jsx)(j,{})]})}),(0,t.jsx)(g.$,{})]})}var b=function(){return(0,t.jsx)(y,{})}},15295:function(e,n,r){"use strict";r.d(n,{$:function(){return i}});var t=r(85893),s=r(21608),a=r(31555),i=(r(67294),function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("br",{}),(0,t.jsx)("hr",{}),(0,t.jsx)("footer",{children:(0,t.jsx)(s.Z,{children:(0,t.jsx)(a.Z,{className:"text-center",children:(0,t.jsx)("p",{className:"footer-text",children:" Created with \ud83d\udc99 by skymagic.eth"})})})})]})})},56390:function(e,n,r){"use strict";r.d(n,{r:function(){return i}});var t=r(85893),s=r(31555),a=r(84174);var i=function(e){var n=e.tokenIds;return(0,t.jsx)(t.Fragment,{children:n.map((function(e){return(0,t.jsx)(s.Z,{xs:12,md:6,lg:4,className:"Gallery-item",children:(0,t.jsx)(a.W,{tokenId:e})},e)}))})}},579:function(e,n,r){"use strict";r.d(n,{V:function(){return s}});var t=r(85893),s=function(e){var n=e.children;return(0,t.jsx)("div",{className:"PageTitle-title",children:n})}},84174:function(e,n,r){"use strict";r.d(n,{W:function(){return E},z:function(){return I}});var t=r(85893),s=r(41664),a=r(94184),i=r.n(a),o=r(67294),c=r(76792),l=r(66611),u=r(41822);const d=o.forwardRef((({bsPrefix:e,className:n,variant:r,as:s="img",...a},o)=>{const l=(0,c.vE)(e,"card-img");return(0,t.jsx)(s,{ref:o,className:i()(r?`${l}-${r}`:l,n),...a})}));d.displayName="CardImg";var f=d,h=r(49059);const m=o.forwardRef((({bsPrefix:e,className:n,as:r="div",...s},a)=>{const l=(0,c.vE)(e,"card-header"),u=(0,o.useMemo)((()=>({cardHeaderBsPrefix:l})),[l]);return(0,t.jsx)(h.Z.Provider,{value:u,children:(0,t.jsx)(r,{ref:a,...s,className:i()(n,l)})})}));m.displayName="CardHeader";var x=m;const j=(0,u.Z)("h5"),p=(0,u.Z)("h6"),v=(0,l.Z)("card-body"),g=(0,l.Z)("card-title",{Component:j}),y=(0,l.Z)("card-subtitle",{Component:p}),b=(0,l.Z)("card-link",{Component:"a"}),N=(0,l.Z)("card-text",{Component:"p"}),k=(0,l.Z)("card-footer"),Z=(0,l.Z)("card-img-overlay"),w=o.forwardRef((({bsPrefix:e,className:n,bg:r,text:s,border:a,body:o,children:l,as:u="div",...d},f)=>{const h=(0,c.vE)(e,"card");return(0,t.jsx)(u,{ref:f,...d,className:i()(n,h,r&&`bg-${r}`,s&&`text-${s}`,a&&`border-${a}`),children:o?(0,t.jsx)(v,{children:l}):l})}));w.displayName="Card",w.defaultProps={body:!1};var C=Object.assign(w,{Img:f,Title:g,Subtitle:y,Body:v,Link:b,Text:N,Header:x,Footer:k,ImgOverlay:Z}),I=function(e){return{live:"https://live.hyperionnft.art/id/".concat(e,"/"),imageUrl:"https://ipfs.io/ipfs/bafybeigqwoubjsr3jmxby6kjktqu3siob5fe5s5hdjwirxf3q4czmfhs3y/".concat(e,".jpg"),imageUrl4k:"https://hyperion-images-stargaze.s3.us-west-1.amazonaws.com/4k/".concat(e,".png"),thumbnail:"https://hyperion-images-stargaze.s3.us-west-1.amazonaws.com/thumbs-300/".concat(e,".jpg"),thumbnail400:"https://hyperion-images-stargaze.s3.us-west-1.amazonaws.com/thumbs-400/".concat(e,".jpg"),metadata:"https://hyperion-images-stargaze.s3.us-west-1.amazonaws.com/metadata/".concat(e,".json")}},E=function(e){var n=e.tokenId,r=I(n);return(0,t.jsxs)(C,{className:"text-center",border:"light",children:[(0,t.jsx)(s.default,{href:{pathname:"/token",query:{id:encodeURIComponent(n)}},as:"/token/?id=".concat(encodeURIComponent(n)),children:(0,t.jsx)("a",{children:(0,t.jsx)(C.Img,{variant:"top",src:r.thumbnail400})})}),(0,t.jsxs)(C.Body,{children:[(0,t.jsxs)(C.Title,{children:["#",n]}),(0,t.jsxs)(C.Text,{children:[(0,t.jsx)(s.default,{href:"/token/",as:"/token/?id=".concat(encodeURIComponent(n)),children:(0,t.jsx)("a",{className:"Token-link",children:"Details"})})," |"," ",(0,t.jsx)("a",{href:r.imageUrl4k,className:"Token-link",download:"true",children:"Image"})," |"," ",(0,t.jsx)("a",{href:r.live,className:"Token-link",children:"Live"})]})]})]})}},53672:function(e,n,r){"use strict";r.d(n,{W:function(){return a}});var t=r(67294),s=r(11163);function a(e){var n,r=(0,s.useRouter)(),a=r.query[e];n=void 0===a||"string"===typeof a?a:a.join("");var i=(0,t.useMemo)((function(){return n}),[n]),o=(0,t.useCallback)((function(n){r.isReady&&(r.query[e]=n,r.push(r))}),[e,r]);return r.isReady?[i,o]:[void 0,function(){}]}},9008:function(e,n,r){e.exports=r(5443)},11163:function(e,n,r){e.exports=r(90387)},52205:function(e,n,r){"use strict";r.d(n,{Z:function(){return v}});var t=r(94184),s=r.n(t),a=r(67294),i=r(76792),o=r(1546),c=r(85893);const l=a.forwardRef((({active:e,disabled:n,className:r,style:t,activeLabel:a,children:i,...l},u)=>{const d=e||n?"span":o.Z;return(0,c.jsx)("li",{ref:u,style:t,className:s()(r,"page-item",{active:e,disabled:n}),children:(0,c.jsxs)(d,{className:"page-link",disabled:n,...l,children:[i,e&&a&&(0,c.jsx)("span",{className:"visually-hidden",children:a})]})})}));l.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},l.displayName="PageItem";var u=l;function d(e,n,r=e){function t({children:e,...t}){return(0,c.jsxs)(l,{...t,children:[(0,c.jsx)("span",{"aria-hidden":"true",children:e||n}),(0,c.jsx)("span",{className:"visually-hidden",children:r})]})}return t.displayName=e,t}const f=d("First","\xab"),h=d("Prev","\u2039","Previous"),m=d("Ellipsis","\u2026","More"),x=d("Next","\u203a"),j=d("Last","\xbb"),p=a.forwardRef((({bsPrefix:e,className:n,size:r,...t},a)=>{const o=(0,i.vE)(e,"pagination");return(0,c.jsx)("ul",{ref:a,...t,className:s()(n,o,r&&`${o}-${r}`)})}));p.displayName="Pagination";var v=Object.assign(p,{First:f,Prev:h,Ellipsis:m,Item:u,Next:x,Last:j})}},function(e){e.O(0,[78,714,631,506,35,280,9,522,774,888,179],(function(){return n=7994,e(e.s=n);var n}));var n=e.O();_N_E=n}]);