(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[347],{34858:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/share",function(){return n(39821)}])},39821:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var r=n(85893),a=n(1199),o=n(10682),s=n(579),i=n(9008),c=n(34051),l=n.n(c),u=n(67294),d=n(56390),f=n(86464),h=n(21608),m=n(31555),p=n(35005),v=n(53672);function x(e){navigator.clipboard?navigator.clipboard.writeText(e).then((function(){console.log("Async: Copying to clipboard was successful!")}),(function(e){console.error("Async: Could not copy text: ",e)})):function(e){var t=document.createElement("textarea");t.value=e,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{var n=document.execCommand("copy")?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+n)}catch(r){console.error("Fallback: Oops, unable to copy",r)}document.body.removeChild(t)}(e)}var y=function(e){var t=e.classes,n=e.width,a=void 0===n?16:n;return(0,r.jsxs)("span",{className:t,children:["Copied URL!",(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,fill:"green",className:"bi bi-clipboard-check-fill",viewBox:"0 0 16 16",children:[(0,r.jsx)("path",{d:"M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z"}),(0,r.jsx)("path",{d:"M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1Zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708Z"})]})]})},j=n(86135),g=n(53117);function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function w(e,t,n,r,a,o,s){try{var i=e[o](s),c=i.value}catch(l){return void n(l)}i.done?t(c):Promise.resolve(c).then(r,a)}function k(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function s(e){w(o,r,a,s,i,"next",e)}function i(e){w(o,r,a,s,i,"throw",e)}s(void 0)}))}}function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],s=!0,i=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);s=!0);}catch(c){i=!0,a=c}finally{try{s||null==n.return||n.return()}finally{if(i)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var C=function(e){var t=e.account,n=(0,f.A)().queryClient,a=(0,u.useState)([]),s=a[0],i=a[1],c=(0,u.useState)(!0),b=c[0],w=c[1],C=((0,j.o)().numTokens,(0,u.useState)("hidden")),Z=C[0],A=C[1],T=N((0,v.W)("account"),2),I=T[0];T[1];"..."===I&&(I=void 0);var S=function(){var e=k(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x(window.location.href),A("visible"),setTimeout((function(){A("hidden")}),2e3);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){n&&k(l().mark((function e(){var r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,n.getAllOwnedTokens(t);case 3:r=e.sent,i(r),w(!1);case 6:case"end":return e.stop()}}),e)})))()}),[n,t]),(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(h.Z,{children:(0,r.jsxs)(m.Z,{xs:6,xxl:1,children:[b&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"Loading..."}),(0,r.jsx)(g.a,{})]}),!b&&(I?(0,r.jsx)(p.Z,{variant:"primary",onClick:S,children:"Share Gallery"}):null),(0,r.jsx)(y,{width:32,classes:Z})]})}),(0,r.jsxs)(h.Z,{children:[(0,r.jsx)(d.r,{tokenIds:s}),!b&&0===s.length&&(0,r.jsx)("p",{children:"This account doesn't own any Hyperion tokens."})]})]})},Z=n(15295);function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],s=!0,i=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);s=!0);}catch(c){i=!0,a=c}finally{try{s||null==n.return||n.return()}finally{if(i)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(){var e=T((0,v.W)("account"),2),t=e[0];e[1];"..."===t&&(t=void 0);var n,c=!(n=t)||n.length<=15?"stars...":n.slice(0,13)+"..."+n.slice(-6);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.default,{children:(0,r.jsx)("title",{children:"Check out my Hyperion NFTs"})}),(0,r.jsx)(a.h,{}),(0,r.jsx)("main",{style:{padding:"1rem 0"},children:(0,r.jsxs)(o.Z,{children:[(0,r.jsxs)(s.V,{children:["NFTs owned by ",c]}),void 0!==t&&(0,r.jsx)(C,{account:t}),void 0===t&&(0,r.jsx)("p",{children:"Oops something went wrong."})]})}),(0,r.jsx)(Z.$,{})]})}var S=function(){return(0,r.jsx)(I,{})}},15295:function(e,t,n){"use strict";n.d(t,{$:function(){return s}});var r=n(85893),a=n(21608),o=n(31555),s=(n(67294),function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("br",{}),(0,r.jsx)("hr",{}),(0,r.jsx)("footer",{children:(0,r.jsx)(a.Z,{children:(0,r.jsx)(o.Z,{className:"text-center",children:(0,r.jsx)("p",{className:"footer-text",children:" Created with \ud83d\udc99 by skymagic.eth"})})})})]})})},56390:function(e,t,n){"use strict";n.d(t,{r:function(){return s}});var r=n(85893),a=n(31555),o=n(84174);var s=function(e){var t=e.tokenIds;return(0,r.jsx)(r.Fragment,{children:t.map((function(e){return(0,r.jsx)(a.Z,{xs:12,md:6,lg:4,className:"Gallery-item",children:(0,r.jsx)(o.W,{tokenId:e})},e)}))})}},53117:function(e,t,n){"use strict";n.d(t,{a:function(){return a}});var r=n(85893),a=function(){return(0,r.jsx)("div",{className:"loader loader--style2",title:"1",children:(0,r.jsx)("svg",{version:"1.1",id:"loader-1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"40px",height:"40px",viewBox:"0 0 50 50",children:(0,r.jsx)("path",{fill:"#000",d:"M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z",children:(0,r.jsx)("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:"0.6s",repeatCount:"indefinite"})})})})}},579:function(e,t,n){"use strict";n.d(t,{V:function(){return a}});var r=n(85893),a=function(e){var t=e.children;return(0,r.jsx)("div",{className:"PageTitle-title",children:t})}},84174:function(e,t,n){"use strict";n.d(t,{W:function(){return T},z:function(){return A}});var r=n(85893),a=n(41664),o=n(94184),s=n.n(o),i=n(67294),c=n(76792),l=n(66611),u=n(41822);const d=i.forwardRef((({bsPrefix:e,className:t,variant:n,as:a="img",...o},i)=>{const l=(0,c.vE)(e,"card-img");return(0,r.jsx)(a,{ref:i,className:s()(n?`${l}-${n}`:l,t),...o})}));d.displayName="CardImg";var f=d,h=n(49059);const m=i.forwardRef((({bsPrefix:e,className:t,as:n="div",...a},o)=>{const l=(0,c.vE)(e,"card-header"),u=(0,i.useMemo)((()=>({cardHeaderBsPrefix:l})),[l]);return(0,r.jsx)(h.Z.Provider,{value:u,children:(0,r.jsx)(n,{ref:o,...a,className:s()(t,l)})})}));m.displayName="CardHeader";var p=m;const v=(0,u.Z)("h5"),x=(0,u.Z)("h6"),y=(0,l.Z)("card-body"),j=(0,l.Z)("card-title",{Component:v}),g=(0,l.Z)("card-subtitle",{Component:x}),b=(0,l.Z)("card-link",{Component:"a"}),w=(0,l.Z)("card-text",{Component:"p"}),k=(0,l.Z)("card-footer"),N=(0,l.Z)("card-img-overlay"),C=i.forwardRef((({bsPrefix:e,className:t,bg:n,text:a,border:o,body:i,children:l,as:u="div",...d},f)=>{const h=(0,c.vE)(e,"card");return(0,r.jsx)(u,{ref:f,...d,className:s()(t,h,n&&`bg-${n}`,a&&`text-${a}`,o&&`border-${o}`),children:i?(0,r.jsx)(y,{children:l}):l})}));C.displayName="Card",C.defaultProps={body:!1};var Z=Object.assign(C,{Img:f,Title:j,Subtitle:g,Body:y,Link:b,Text:w,Header:p,Footer:k,ImgOverlay:N}),A=function(e){return{live:"https://live.hyperionnft.art/id/".concat(e,"/"),imageUrl:"https://ipfs.io/ipfs/bafybeigqwoubjsr3jmxby6kjktqu3siob5fe5s5hdjwirxf3q4czmfhs3y/".concat(e,".jpg"),imageUrl4k:"https://hyperion-images-stargaze.s3.us-west-1.amazonaws.com/4k/".concat(e,".png"),thumbnail:"https://hyperion-images-stargaze.s3.us-west-1.amazonaws.com/thumbs-300/".concat(e,".jpg"),thumbnail400:"https://hyperion-images-stargaze.s3.us-west-1.amazonaws.com/thumbs-400/".concat(e,".jpg"),metadata:"https://hyperion-images-stargaze.s3.us-west-1.amazonaws.com/metadata/".concat(e,".json")}},T=function(e){var t=e.tokenId,n=A(t);return(0,r.jsxs)(Z,{className:"text-center",border:"light",children:[(0,r.jsx)(a.default,{href:{pathname:"/token",query:{id:encodeURIComponent(t)}},as:"/token/?id=".concat(encodeURIComponent(t)),children:(0,r.jsx)("a",{children:(0,r.jsx)(Z.Img,{variant:"top",src:n.thumbnail400})})}),(0,r.jsxs)(Z.Body,{children:[(0,r.jsxs)(Z.Title,{children:["#",t]}),(0,r.jsxs)(Z.Text,{children:[(0,r.jsx)(a.default,{href:"/token/",as:"/token/?id=".concat(encodeURIComponent(t)),children:(0,r.jsx)("a",{className:"Token-link",children:"Details"})})," |"," ",(0,r.jsx)("a",{href:n.imageUrl4k,className:"Token-link",download:"true",children:"Image"})," |"," ",(0,r.jsx)("a",{href:n.live,className:"Token-link",children:"Live"})]})]})]})}},53672:function(e,t,n){"use strict";n.d(t,{W:function(){return o}});var r=n(67294),a=n(11163);function o(e){var t,n=(0,a.useRouter)(),o=n.query[e];t=void 0===o||"string"===typeof o?o:o.join("");var s=(0,r.useMemo)((function(){return t}),[t]),i=(0,r.useCallback)((function(t){n.isReady&&(n.query[e]=t,n.push(n))}),[e,n]);return n.isReady?[s,i]:[void 0,function(){}]}},9008:function(e,t,n){e.exports=n(5443)},11163:function(e,t,n){e.exports=n(90387)},35005:function(e,t,n){"use strict";var r=n(94184),a=n.n(r),o=n(67294),s=n(70861),i=n(76792),c=n(85893);const l=o.forwardRef((({as:e,bsPrefix:t,variant:n,size:r,active:o,className:l,...u},d)=>{const f=(0,i.vE)(t,"btn"),[h,{tagName:m}]=(0,s.FT)({tagName:e,...u}),p=m;return(0,c.jsx)(p,{...h,...u,ref:d,className:a()(l,f,o&&"active",n&&`${f}-${n}`,r&&`${f}-${r}`,u.href&&u.disabled&&"disabled")})}));l.displayName="Button",l.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=l}},function(e){e.O(0,[78,714,631,506,35,280,9,522,774,888,179],(function(){return t=34858,e(e.s=t);var t}));var t=e.O();_N_E=t}]);