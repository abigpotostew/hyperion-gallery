(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[117],{1199:function(e,t,n){"use strict";n.d(t,{h:function(){return o}});var r=n(5893),a=n(9912),i=n(6819),s=n(682),c=n(1664),o=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{bg:"white",expand:"lg",children:(0,r.jsxs)(s.Z,{children:[(0,r.jsxs)(a.Z.Brand,{href:"/",children:[(0,r.jsx)("img",{alt:"",src:"/hyperion-logo-square-small.svg",width:"50",height:"50",className:"d-inline-block align-top"})," ",(0,r.jsxs)("div",{className:"d-inline-block Header-title-container",children:[(0,r.jsx)("h2",{className:"Header-title",children:"Hyperion"}),(0,r.jsx)("h3",{className:"Header-subtitle",children:"on Stargaze"})]})]}),(0,r.jsx)(a.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,r.jsxs)(i.Z,{className:"me-auto",children:[(0,r.jsx)(c.default,{href:"/gallery",children:(0,r.jsx)("a",{className:"nav-link",children:"Gallery"})}),(0,r.jsx)(c.default,{href:"/wallet",children:(0,r.jsx)("a",{className:"nav-link",children:"My NFTs"})}),(0,r.jsx)(c.default,{href:"/about",children:(0,r.jsx)("a",{className:"nav-link",children:"About"})})]})]})}),(0,r.jsx)("hr",{style:{color:"black"}})]})}},4685:function(e,t,n){"use strict";n.d(t,{z:function(){return s},W:function(){return c}});var r=n(5893),a=n(1664),i=n(8182),s=function(e){return{live:"https://hyperion.stewart.codes/gen/".concat(e,"/"),imageUrl:"https://ipfs.io/ipfs/bafybeiaqkwid7mhfocnrizk3rfwqjm6o2s2o6teewoyite3upmifqdjrye/".concat(e,".jpg"),imageUrl4k:"https://ipfs.io/ipfs/bafybeiaqkwid7mhfocnrizk3rfwqjm6o2s2o6teewoyite3upmifqdjrye/".concat(e,".png"),thumbnail:"https://hyperion-images-stargaze.s3.us-west-1.amazonaws.com/thumbs-300/".concat(e,".jpg"),metadata:"https://ipfs.io/ipfs/bafybeiayug33vfrduvccjagfekrqp3qijru5qxtkb5q3gttkgd3uum4gxa/".concat(e)}},c=function(e){var t=e.tokenId,n=s(t);return(0,r.jsxs)(i.Z,{className:"text-center",border:"light",children:[(0,r.jsx)(i.Z.Img,{variant:"top",src:n.thumbnail}),(0,r.jsxs)(i.Z.Body,{children:[(0,r.jsxs)(i.Z.Title,{children:["#",t]}),(0,r.jsxs)(i.Z.Text,{children:[(0,r.jsx)(a.default,{href:"/token/",as:"/token/?id=".concat(encodeURIComponent(t)),children:(0,r.jsx)("a",{className:"Token-link",children:"Details"})})," |"," ",(0,r.jsx)("a",{href:n.imageUrl4k,className:"Token-link",children:"Image"})," |"," ",(0,r.jsx)("a",{href:n.live,className:"Token-link",children:"Live"})]})]})]})}},273:function(e,t,n){"use strict";n.d(t,{A:function(){return q}});var r=n(4051),a=n.n(r),i=n(7294),s={testnet:{rpcEndpoint:"https://rpc.big-bang-1.stargaze-apis.com/",restEndpoint:"https://rest.big-bang-1.stargaze-apis.com/",chainId:"big-bang-1",sg721:"stars1msfmkx4xmts3el3r46c2u2eehxkhahqzsa0crn0v58cncp7ztr7qrshkkh",minter:"stars1944la2whlrumpc80nhghr75djrz8pmk3ddufktp9087spssq2rwqnp57my",mintPriceStars:350,totalNumMints:1024,thumbFiletype:".jpg",metadataType:".json",rarityType:".json",fileBase:"https://files.endala.xyz/",fileUrlThumbnails:"https://files.endala.xyz/testnet/thumbnails",fileUrlMetadata:"https://files.endala.xyz/testnet/metadata",fileUrlRarities:"https://files.endala.xyz/testnet/rarities",testnet:!0},production:{rpcEndpoint:"https://rpc-stargaze.keplr.app",restEndpoint:"https://lcd-stargaze.keplr.app",chainId:"stargaze-1",sg721:"stars1msfmkx4xmts3el3r46c2u2eehxkhahqzsa0crn0v58cncp7ztr7qrshkkh",minter:"stars1944la2whlrumpc80nhghr75djrz8pmk3ddufktp9087spssq2rwqnp57my",mintPriceStars:200,totalNumMints:641,thumbFiletype:".jpg",metadataType:".json",rarityType:".json",fileBase:"https://files.endala.xyz/",fileUrlThumbnails:"https://files.endala.xyz/testnet/thumbnails",fileUrlMetadata:"https://files.endala.xyz/testnet/metadata",fileUrlRarities:"https://files.endala.xyz/testnet/rarities",testnet:!1},useTestnet:!0},c=s.useTestnet?s.testnet:s.production;c.testnet=s.useTestnet,Object.freeze(c);var o=c,u=n(4926);function l(e,t,n,r,a,i,s){try{var c=e[i](s),o=c.value}catch(u){return void n(u)}c.done?t(o):Promise.resolve(o).then(r,a)}var f={chainId:"big-bang-1",rpc:"https://rpc.big-bang-1.stargaze-apis.com/",rest:"https://rest.big-bang-1.stargaze-apis.com/",chainName:"Stargaze Test",bech32Config:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"val",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"cons",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"pub",a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"oper";return{bech32PrefixAccAddr:e,bech32PrefixAccPub:e+r,bech32PrefixValAddr:e+t+a,bech32PrefixValPub:e+t+a+r,bech32PrefixConsAddr:e+t+n,bech32PrefixConsPub:e+t+n+r}}("stars"),bip44:{coinType:118},stakeCurrency:{coinDenom:"STARS",coinMinimalDenom:"ustars",coinDecimals:6,coinGeckoId:"stargaze",coinImageUrl:"https://dhj8dql1kzq2v.cloudfront.net/white/stargaze.png"},nativeCurrency:"STARS",currencies:[{coinDenom:"STARS",coinMinimalDenom:"ustars",coinDecimals:6,coinGeckoId:"stargaze",coinImageUrl:"https://dhj8dql1kzq2v.cloudfront.net/white/stargaze.png"}],feeCurrencies:[{coinDenom:"STARS",coinMinimalDenom:"ustars",coinDecimals:6,coinGeckoId:"stargaze",coinImageUrl:"https://dhj8dql1kzq2v.cloudfront.net/white/stargaze.png"}],features:["stargate","no-legacy-stdTx","ibc-transfer","ibc-go"],chainSymbolImageUrl:"https://dhj8dql1kzq2v.cloudfront.net/white/stargaze.png",txExplorer:{name:"TestScan",txUrl:"http://38.242.223.192/big-bang-1/tx/{txHash}"}},p=function(){var e,t=(e=a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=window).keplr){e.next=12;break}return e.prev=3,e.next=6,t.keplr.enable(f.chainId);case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(3),e.next=12,t.keplr.experimentalSuggestChain(f);case 12:case"end":return e.stop()}}),e,null,[[3,8]])})),function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function s(e){l(i,r,a,s,c,"next",e)}function c(e){l(i,r,a,s,c,"throw",e)}s(void 0)}))});return function(){return t.apply(this,arguments)}}();function h(e,t,n,r,a,i,s){try{var c=e[i](s),o=c.value}catch(u){return void n(u)}c.done?t(o):Promise.resolve(o).then(r,a)}function d(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function s(e){h(i,r,a,s,c,"next",e)}function c(e){h(i,r,a,s,c,"throw",e)}s(void 0)}))}}var m=function(){var e=d(a().mark((function e(t){var n,r,i,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="wasm",null,e.next=4,new Promise((function(e){return setTimeout(e,200)}));case 4:return r=function(){var e=d(a().mark((function e(){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.testnet){e.next=6;break}return e.next=3,p();case 3:e.sent,e.next=11;break;case 6:return r=window,e.next=10,null===(n=r.keplr)||void 0===n?void 0:n.enable(t.chainId);case 10:e.sent;case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.next=7,r();case 7:if(!(i=window).getOfflineSignerAuto){e.next=19;break}return e.next=11,i.getOfflineSignerAuto(t.chainId);case 11:return s=e.sent,e.next=14,u.Fl.connectWithSigner(t.rpcEndpoint,s,{prefix:n});case 14:return e.t0=e.sent,e.t1=s,e.abrupt("return",{signer:e.t0,offlineSigner:e.t1});case 19:throw Error("Keplr not available");case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=m;function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function k(e,t,n,r,a,i,s){try{var c=e[i](s),o=c.value}catch(u){return void n(u)}c.done?t(o):Promise.resolve(o).then(r,a)}function x(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function s(e){k(i,r,a,s,c,"next",e)}function c(e){k(i,r,a,s,c,"throw",e)}s(void 0)}))}}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var w=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.config=t,this.client=n}var t,n,r;return t=e,r=[{key:"init",value:function(t){return x(a().mark((function n(){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.oJ.connect(t.rpcEndpoint);case 2:return r=n.sent,n.abrupt("return",new e(t,r));case 4:case"end":return n.stop()}}),n)})))()}}],(n=[{key:"getBalance",value:function(e){var t=this;return x(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.client.getBalance(e,"ustars"));case 1:case"end":return n.stop()}}),n)})))()}},{key:"getAllOwnedTokens",value:function(e){var t=this;return x(a().mark((function n(){var r,i,s,c,o;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=[],i=30,s="0";case 3:return n.next=7,t.client.queryContractSmart(t.config.sg721,{tokens:{owner:e,start_after:s,limit:i}});case 7:if((o=n.sent)&&o.tokens&&0!==o.tokens.length){n.next=10;break}return n.abrupt("break",14);case 10:s=o.tokens[o.tokens.length-1],(c=r).push.apply(c,y(o.tokens)),n.next=3;break;case 14:return n.abrupt("return",r.map((function(e){return parseInt(e)})).sort().map((function(e){return e.toString()})));case 15:case"end":return n.stop()}}),n)})))()}},{key:"getAllTokens",value:function(e){var t=e.limit,n=void 0===t?30:t,r=e.start_after,i=void 0===r?"0":r,s=this;return x(a().mark((function e(){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={limit:n,start_after:i},e.next=3,s.client.queryContractSmart(s.config.sg721,{all_tokens:t});case 3:return r=e.sent,e.abrupt("return",r.tokens);case 5:case"end":return e.stop()}}),e)})))()}},{key:"getNumberTokensTotal",value:function(){var e=this;return x(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.client.queryContractSmart(e.config.sg721,{num_tokens:{}});case 2:return n=t.sent,t.abrupt("return",n.count);case 4:case"end":return t.stop()}}),t)})))()}},{key:"getAccounts",value:function(){var e=this;return x(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.keplerOfflineClient){t.next=5;break}return n=e.keplerOfflineClient.getAccounts(),t.abrupt("return",n);case 5:throw new Error("Kepler Offline Client not initialized");case 6:case"end":return t.stop()}}),t)})))()}},{key:"connectKeplr",value:function(){var e=this;return x(a().mark((function t(){var n,r,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.keplrClient){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,v(o);case 4:n=t.sent,r=n.signer,i=n.offlineSigner,e.keplrClient=r,e.keplerOfflineClient=i;case 9:case"end":return t.stop()}}),t)})))()}}])&&b(t.prototype,n),r&&b(t,r),e}();function j(e,t,n,r,a,i,s){try{var c=e[i](s),o=c.value}catch(u){return void n(u)}c.done?t(o):Promise.resolve(o).then(r,a)}function z(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function s(e){j(i,r,a,s,c,"next",e)}function c(e){j(i,r,a,s,c,"throw",e)}s(void 0)}))}}var q=function(){var e=(0,i.useState)(void 0),t=e[0],n=e[1];return(0,i.useEffect)((function(){z(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.init(o);case 2:t=e.sent,n(t);case 4:case"end":return e.stop()}}),e)})))()}),[]),{queryClient:t}}},3672:function(e,t,n){"use strict";n.d(t,{W:function(){return i}});var r=n(7294),a=n(1163);function i(e){var t,n=(0,a.useRouter)(),i=n.query[e];t=void 0===i||"string"===typeof i?i:i.join("");var s=(0,r.useMemo)((function(){return t}),[t]),c=(0,r.useCallback)((function(t){n.isReady&&(n.query[e]=t,n.push(n))}),[e,n]);return n.isReady?[s,c]:[void 0,function(){}]}},6601:function(){},9214:function(){},5568:function(){},5992:function(){},2361:function(){},4616:function(){}}]);