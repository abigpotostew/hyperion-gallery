(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(5768)}])},5768:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return j}});var t=r(5893),i=r(7294),s=r(1199),a=r(4051),o=r.n(a),c=r(5575),u=r(1608),l=r(1555),d=r(682),f=r(3117),h=r(5034);function x(n,e,r,t,i,s,a){try{var o=n[s](a),c=o.value}catch(u){return void r(u)}o.done?e(c):Promise.resolve(c).then(t,i)}var v=function(){var n=(0,h.o)().numTokens,e=(0,i.useState)("0"),r=e[0],s=e[1];return(0,i.useEffect)((function(){var e;n&&(e=o().mark((function e(){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(0===(r=n)?"1":(Math.floor(Math.random()*r)+1).toString());case 2:case"end":return e.stop()}}),e)})),function(){var n=this,r=arguments;return new Promise((function(t,i){var s=e.apply(n,r);function a(n){x(s,t,i,a,o,"next",n)}function o(n){x(s,t,i,a,o,"throw",n)}a(void 0)}))})()}),[n]),(0,t.jsx)(d.Z,{fluid:!0,children:"0"===r?(0,t.jsxs)("div",{style:{height:525},children:[" ",(0,t.jsx)(f.a,{})]}):(0,t.jsxs)(u.Z,{children:[(0,t.jsx)(l.Z,{}),(0,t.jsxs)(l.Z,{xs:12,md:7,lg:6,children:[(0,t.jsx)(c.G,{tokenId:r}),(0,t.jsxs)("h6",{children:["Showing token ",r," of ",n]})]}),(0,t.jsx)(l.Z,{})]})})},m=r(6549);var p=function(){return(0,t.jsxs)("div",{className:"App",children:[(0,t.jsx)(s.h,{}),(0,t.jsxs)(d.Z,{fluid:!0,children:[(0,t.jsx)(u.Z,{children:(0,t.jsx)(l.Z,{children:(0,t.jsx)(v,{})})}),(0,t.jsx)("br",{}),(0,t.jsx)("hr",{}),(0,t.jsx)(u.Z,{children:(0,t.jsx)(l.Z,{children:(0,t.jsx)(m.V,{})})})]})]})},j=function(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(p,{})})}},6549:function(n,e,r){"use strict";r.d(e,{V:function(){return v}});var t=r(5893),i=r(682),s=r(1608),a=r(1555),o=r(2205),c=r(3672),u=r(7294),l=r(6390);function d(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function f(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,i,s=[],a=!0,o=!1;try{for(r=r.call(n);!(a=(t=r.next()).done)&&(s.push(t.value),!e||s.length!==e);a=!0);}catch(c){o=!0,i=c}finally{try{a||null==r.return||r.return()}finally{if(o)throw i}}return s}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return d(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var h=function(n){var e=n.totalNumTokens,r=f((0,c.W)("page"),2),d=r[0],h=r[1],x=(0,u.useState)(1),v=x[0],m=x[1];(0,u.useEffect)((function(){m(parseInt(d||"1"))}),[d]);var p=(0,u.useMemo)((function(){for(var n=[],r=Math.ceil(e/16),t=0;t<r;t++)n.push(t+1);return n}),[e]),j=p.length>0?p[p.length-1]:1,y=(0,u.useMemo)((function(){for(var n=[],r=16*(v-1)+1,t=Math.min(r+16-1,e),i=r;i<=t;i++)n.push(i.toString());return n}),[e,v]),g=function(n){h(Math.max(p[0],Math.min(n,p[p.length-1])).toString()),window.scrollTo(0,0)};return(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(s.Z,{children:(0,t.jsx)(l.r,{tokenIds:y})}),(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(a.Z,{}),(0,t.jsx)(a.Z,{children:(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(o.Z.First,{disabled:1===v,onClick:function(){return g(1)}}),(0,t.jsx)(o.Z.Prev,{disabled:1===v,onClick:function(){return g(v-1)}}),p.map((function(n){return(0,t.jsx)(o.Z.Item,{active:n===v,onClick:function(){return g(n)},children:n},n)})),(0,t.jsx)(o.Z.Next,{disabled:v===j,onClick:function(){return g(v+1)}}),(0,t.jsx)(o.Z.Last,{disabled:v===j,onClick:function(){return g(p[p.length-1])}})]})}),(0,t.jsx)(a.Z,{})]})]})},x=r(5034),v=function(){var n=(0,x.o)().numTokens;return(0,t.jsxs)(i.Z,{children:[(0,t.jsxs)("p",{children:[(0,t.jsx)("b",{children:n||0})," of ",(0,t.jsx)("b",{children:"1024"})," tokens have been minted."]}),n?(0,t.jsx)(h,{totalNumTokens:n}):(0,t.jsx)("p",{children:"Loading..."})]})}},6390:function(n,e,r){"use strict";r.d(e,{r:function(){return a}});var t=r(5893),i=r(1555),s=r(4685);var a=function(n){var e=n.tokenIds;return(0,t.jsx)(t.Fragment,{children:e.map((function(n){return(0,t.jsx)(i.Z,{xs:12,md:3,lg:3,className:"Gallery-item",children:(0,t.jsx)(s.W,{tokenId:n})},n)}))})}},3117:function(n,e,r){"use strict";r.d(e,{a:function(){return i}});var t=r(5893),i=function(){return(0,t.jsx)("div",{className:"loader loader--style2",title:"1",children:(0,t.jsx)("svg",{version:"1.1",id:"loader-1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"40px",height:"40px",viewBox:"0 0 50 50",children:(0,t.jsx)("path",{fill:"#000",d:"M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z",children:(0,t.jsx)("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:"0.6s",repeatCount:"indefinite"})})})})}},5575:function(n,e,r){"use strict";r.d(e,{G:function(){return i}});var t=r(5893),i=function(n){var e=n.tokenId,r=n.minHeight,i=void 0===r?525:r;return(0,t.jsx)("iframe",{allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;",allowFullScreen:!0,frameBorder:"0",height:"100%",sandbox:"allow-scripts",src:"https://hyperion.stewart.codes/gen/".concat(e,"/"),width:"100%",style:{minHeight:i||525},title:"#"+e})}},5034:function(n,e,r){"use strict";r.d(e,{o:function(){return c}});var t=r(4051),i=r.n(t),s=r(7294),a=r(273);function o(n,e,r,t,i,s,a){try{var o=n[s](a),c=o.value}catch(u){return void r(u)}o.done?e(c):Promise.resolve(c).then(t,i)}var c=function(){var n=(0,s.useState)(void 0),e=n[0],r=n[1],t=(0,a.A)().queryClient;return(0,s.useEffect)((function(){var n;t&&(n=i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.getNumberTokensTotal();case 2:e=n.sent,r(e);case 4:case"end":return n.stop()}}),n)})),function(){var e=this,r=arguments;return new Promise((function(t,i){var s=n.apply(e,r);function a(n){o(s,t,i,a,c,"next",n)}function c(n){o(s,t,i,a,c,"throw",n)}a(void 0)}))})()}),[t]),{numTokens:e}}},2205:function(n,e,r){"use strict";r.d(e,{Z:function(){return j}});var t=r(4184),i=r.n(t),s=r(7294),a=r(6792),o=r(1546),c=r(5893);const u=s.forwardRef((({active:n,disabled:e,className:r,style:t,activeLabel:s,children:a,...u},l)=>{const d=n||e?"span":o.Z;return(0,c.jsx)("li",{ref:l,style:t,className:i()(r,"page-item",{active:n,disabled:e}),children:(0,c.jsxs)(d,{className:"page-link",disabled:e,...u,children:[a,n&&s&&(0,c.jsx)("span",{className:"visually-hidden",children:s})]})})}));u.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},u.displayName="PageItem";var l=u;function d(n,e,r=n){function t({children:n,...t}){return(0,c.jsxs)(u,{...t,children:[(0,c.jsx)("span",{"aria-hidden":"true",children:n||e}),(0,c.jsx)("span",{className:"visually-hidden",children:r})]})}return t.displayName=n,t}const f=d("First","\xab"),h=d("Prev","\u2039","Previous"),x=d("Ellipsis","\u2026","More"),v=d("Next","\u203a"),m=d("Last","\xbb"),p=s.forwardRef((({bsPrefix:n,className:e,size:r,...t},s)=>{const o=(0,a.vE)(n,"pagination");return(0,c.jsx)("ul",{ref:s,...t,className:i()(e,o,r&&`${o}-${r}`)})}));p.displayName="Pagination";var j=Object.assign(p,{First:f,Prev:h,Ellipsis:x,Item:l,Next:v,Last:m})}},function(n){n.O(0,[78,714,631,506,35,280,385,117,774,888,179],(function(){return e=5301,n(n.s=e);var e}));var e=n.O();_N_E=e}]);