(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[93],{7093:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var r=t(809),s=t.n(r),c=t(5893),o=t(2447),i=t(241),u=t(387),a=t(7616),d=t(7294),l=t(9669),f=t.n(l),p=t(2484),h=t.n(p),x=t(1163),k=t(2025),w=t(5675),v=t(1692);function m(){var e=(0,d.useState)([]),n=e[0],t=e[1],r=(0,d.useState)("not-loaded"),l=r[0],p=r[1],m=(0,x.useRouter)();function _(){return(_=(0,o.Z)(s().mark((function e(){var n,r,c,d,l,x,w;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new(h())({network:"mainnet",cacheProvider:!0}),e.next=3,n.connect();case 3:return r=e.sent,c=new i.Q(r),d=c.getSigner(),l=new u.CH(k.I,v.Mt,d),e.next=9,l.fetchMyNFTs();case 9:return x=e.sent,e.next=12,Promise.all(x.map(function(){var e=(0,o.Z)(s().mark((function e(n){var t,r,c,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.tokenURI(n.tokenId);case 2:return t=e.sent,e.next=5,f().get(t);case 5:return r=e.sent,c=a.bM(n.price.toString(),"ether"),o={price:c,tokenId:n.tokenId.toNumber(),seller:n.seller,owner:n.owner,image:r.data.image,tokenURI:t},e.abrupt("return",o);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()));case 12:w=e.sent,t(w),p("loaded");case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,d.useEffect)((function(){!function(){_.apply(this,arguments)}()}),[]),"loaded"!==l||n.length?(0,c.jsx)("div",{style:{border:"2px solid black"},children:(0,c.jsx)("div",{className:"p-4",children:(0,c.jsx)("div",{children:n.map((function(e,n){return(0,c.jsxs)("div",{children:[(0,c.jsx)(w.default,{src:e.image}),(0,c.jsxs)("div",{children:[(0,c.jsxs)("p",{children:["Price - ",e.price," Eth"]}),(0,c.jsx)("button",{onClick:function(){return function(e){console.log("nft:",e),m.push("/resell-nft?id=".concat(e.tokenId,"&tokenURI=").concat(e.tokenURI))}(e)},children:"List"})]})]},n)}))})})}):(0,c.jsx)("h1",{className:"py-10 px-20 text-3xl",children:"No NFTs owned"})}},8976:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my-assests",function(){return t(7093)}])},1163:function(e,n,t){e.exports=t(4651)}},function(e){e.O(0,[277,889,669,248,774,888,179],(function(){return n=8976,e(e.s=n);var n}));var n=e.O();_N_E=n}]);