(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/close-icon.59df06f1.svg"},,,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/logo-wordmark.2145b025.svg"},,,,function(e,a,t){e.exports=t.p+"static/media/arrow-down.79217294.svg"},function(e,a,t){e.exports=t.p+"static/media/logo.7bef3eb6.svg"},function(e,a,t){e.exports=t.p+"static/media/back-icon.6172a9b9.svg"},,function(e,a,t){e.exports=t(74)},,,,,function(e,a,t){},,,,,,,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,,function(e,a,t){},function(e,a,t){},,function(e,a,t){},,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),i=t(27),r=t.n(i),c=(t(44),t(11)),s=t(12),p=t(38),l=t(1),m=t(2),d=t(4),u=t(3),g=t(5),h=t(31),f=t.n(h),y=(t(58),function(e){function a(){return Object(l.a)(this,a),Object(d.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"header"},o.a.createElement("img",{src:f.a,className:"header logo-img",alt:"background"}))}}]),a}(n.Component)),v=t(16);function b(e,a){if(mixpanel&&window.__mmMetametrics&&mixpanel.track){var t=e.category;delete e.category,mixpanel.track(t,Object(v.a)({},e,a))}}var k=function(e,a,t){return{category:e,action:a,name:t}},w="Featured Dapp",E="Dapp Category",C="Homepage Tab",O="Opened Favorites",D="Search Used",j="Opened Dapp Category",S="Opened Listed Dapp",A="Click",F="Impression",N="Browser Home",x={CLICKS_DAPP:k(N,A,"Dapp"),CLICKS_FEATURED_DAPP:k(N,A,w),CLICKS_DAPP_CATEGORY:k(N,A,E),CLICKS_HOMEPAGE_TAB:k(N,A,C),IMPRESSION:k(N,F),CLICKS_FAVORITES_TAB:k(O),SEARCH_USED:k(D),OPEN_DAPP_CATEGORY:k(j),OPEN_LISTED_DAPP:k(S)},_=(t(59),function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=Object(d.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(o)))).onClick=function(){var e=t.props,a=e.label;(0,e.onClick)(a)},t}return Object(g.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.onClick,a=this.props,t=a.activeTab,n=a.label,i="tab-list-item";return t===n&&(i+=" tab-list-active"),o.a.createElement("li",{className:i,onClick:e},n)}}]),a}(n.Component)),T=(t(60),n.Component,t(32)),M=t.n(T);t(63);var P=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=Object(d.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(o)))).state={value:""},t.trackEventSearchUsed=function(){b(x.SEARCH_USED,{option_chosen:"Search bar on dapp listing",number_of_tabs:void 0})},t.handleChange=function(e){t.setState({value:e.target.value})},t.onFocus=function(e){e.preventDefault(),window.ethereum.send("metamask_showAutocomplete")},t.handleSubmit=function(e){e.preventDefault(),t.trackEventSearchUsed();var a=window.__mmSearchEngine||"DuckDuckGo",n=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"DuckDuckGo",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"https://";if(null===e.match(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!&',;=.+]+$/g)){var n="https://www.google.com/search?q="+escape(e);return"DuckDuckGo"===a&&(n="https://duckduckgo.com/?q="+escape(e)),n}return e.match(/^[a-z]*:\/\//)?e:"".concat(t).concat(e)}(t.state.value,a);window.location.href=n},t}return Object(g.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return o.a.createElement("form",{className:"autocomplete",onSubmit:this.handleSubmit},o.a.createElement("input",{autoCapitalize:"none",type:"text",placeholder:"Search or type web address",className:"autocomplete-input",value:this.state.value,onChange:this.handleChange,onFocus:this.onFocus}))}}]),a}(n.Component),I=(t(64),function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=Object(d.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(o)))).trackEventOpenDappCategory=function(){b(x.OPEN_DAPP_CATEGORY,{dapp_category_name:t.props.data.name})},t}return Object(g.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.data,a=e.name,t=e.icon,n="/".concat(a.toLowerCase().replace(" ","-"));return o.a.createElement(c.b,{className:"dapp-category-container",to:n,onClick:this.trackEventOpenDappCategory},o.a.createElement("div",{className:"dapp-category"},o.a.createElement("div",{className:"dapp-category-image-container"},o.a.createElement("div",{style:{backgroundColor:"#0066DA","-webkit-mask":"url(".concat(t,") no-repeat center / contain"),mask:"url(".concat(t,") no-repeat center / contain"),width:20,height:20}})),o.a.createElement("span",{className:"dapp-category-name"},a)))}}]),a}(n.Component)),B=(t(25),[{name:"Humaniq services",displayIos:!1,icon:"./images/categories/human.svg",color:"#E5F7DB",iconColor:"#A1D186",dapps:[{name:"Humaniq ID",url:"https://idapp.humaniq.com",description:"Humaniq identity service",icon:"./images/dapps/humaniq.svg"},{name:"$1 for lunch",url:"https://getlunch.humaniq.com/",description:"Donation service for lunches",icon:"./images/dapps/one-dollar-for-lunch.svg"}]},{name:"Borrow and supply",displayIos:!1,icon:"./images/categories/profits.svg",color:"#E5F7DB",iconColor:"#A1D186",dapps:[{name:"Compound",url:"https://app.compound.finance/",description:"Earn interest on your ETH",icon:"./images/dapps/compound.finance.png"},{name:"MakerDAO CDP",url:"https://oasis.app/",description:"Trade, borrow, and save using Dai",icon:"./images/dapps/cdp.makerdao.com.png"},{name:"PoolTogether",url:"https://app.pooltogether.us/",description:"A prize-linked savings account. By saving money you have a chance to win prizes",icon:"./images/dapps/pooltogether.us.png"},{name:"DeFi Saver",url:"https://defisaver.com/",description:"One-stop management solution for DeFi protocols",icon:"./images/dapps/defi_saver.png"},{name:"pTokens",url:"https://dapp.ptokens.io/",description:"Make your crypto compatible with any blockchain!",icon:"./images/dapps/pTokens.png"},{name:"Zapper",url:"https://zapper.fi",description:"Manage your DeFi assets and liabilities in one simple interface",icon:"./images/dapps/zapper.svg"},{name:"Yearn",url:"https://yearn.finance/",description:"An ecosystem of aggregators that utilize lending services to optimize your token lending",icon:"./images/dapps/yearn.finance.png"},{name:"Aave",url:"https://aave.com/",description:"An open-source, non-custodial protocol enabling the creation of money markets",icon:"./images/dapps/aave.svg"},{name:"Zerion",url:"https://zerion.io/",description:"Zerion is the easiest way to build and manage your entire DeFi portfolio from one place",icon:"./images/dapps/zerion.io.png"},{name:"Token Sets",url:"https://www.tokensets.com/",description:"Manage your crypto porfolio",icon:"./images/dapps/tokensets.com.png"},{name:"Pickle Finance",url:"https://pickle.finance",description:"Stabilize stablecoins",icon:"./images/dapps/pickle.finance.jpeg"},{name:"Nexus Mutual",url:"https://nexusmutual.io/",description:"A people-powered alternative to insurance",icon:"./images/dapps/nexusmutual.io.png"},{name:"Curve",url:"https://www.curve.fi/",description:"Creating deep on-chain liquidity using advanced bonding curves",icon:"./images/dapps/curve.fi.png"}]},{name:"Exchange",displayIos:!1,icon:"./images/categories/arrows.svg",color:"#D8F7F7",iconColor:"#76D3DF",dapps:[{name:"Uniswap",url:"https://uniswap.exchange/",description:"Swap and trade tokens",icon:"./images/dapps/uniswap.exchange.png"},{name:"dYdX",url:"https://trade.dydx.exchange/",description:"A decentralized and non-custodial trading platform offering perpetual margin, and spot trading",icon:"./images/dapps/dydx.png"},{name:"Kyber Swap",url:"https://kyberswap.com/",description:"A simple way to exchange tokens",icon:"./images/dapps/kyber.network.png"},{name:"Tokenlon",url:"https://tokenlon.im/",description:"Tokenlon DEX, powered by 0x protocol",icon:"./images/dapps/tokenlon.png"},{name:"1inch",url:"https://1inch.exchange",description:"1inch is a DEX aggregator with the best DEX prices and single point of entry for DeFi",icon:"./images/dapps/1inch.svg"},{name:"Totle Swap",url:"https://totle.exchange",description:"Swap any ERC-20 token at the best price",icon:"./images/dapps/totle.jpeg"},{name:"Radar Relay",url:"https://relay.radar.tech/",description:"Simple and secure wallet to wallet trading with the best prices in DeFi",icon:"./images/dapps/radar_relay.png"},{name:"AirSwap",url:"https://instant.airswap.io/",description:"Trade Tokens Easily, Securely, & Without Trading Fees",icon:"./images/dapps/instant.airswap.io.png"},{name:"Balancer",url:"https://balancer.exchange/#/swap",description:"Swap ERC20 tokens trustlessly across all Balancer liquidity pools.balancer.exchange",icon:"./images/dapps/balancer.exchange.png"},{name:"Matcha",url:"https://matcha.xyz/",description:"Simple crypto trading for everyone",icon:"./images/dapps/matcha.png"}]},{name:"Art and collectibles",displayIos:!1,icon:"./images/categories/art.svg",color:"#FFDAC6",iconColor:"#FFB68E",dapps:[{name:"miime",url:"https://miime.io/",description:"miime is an NFT marketplace catering to blockchain gamers in Japan and across the world",icon:"./images/dapps/miime.png"},{name:"Mintable",url:"https://mintable.app",description:"Mintable is a next generation NFT marketplace, the easiest place to trade NFTs and create your own.",icon:"./images/dapps/mintable.png"},{name:"OpenSea",url:"https://opensea.io/",description:"Buy, sell, and discover rare digital items",icon:"./images/dapps/opensea.io.png"},{name:"KnownOrigin",url:"https://knownorigin.io/",description:"Discover and collect rare digital artwork",icon:"./images/dapps/known_origin.png"},{name:"Mintbase",url:"https://mintbase.io",description:"Leading non-fungible token creation tool and marketplace",icon:"./images/dapps/mintbase.png"},{name:"Axie Infinity",url:"https://axieinfinity.com/#",description:"Collect and raise fantasy creatures called Axie",icon:"./images/dapps/axieinfinity.com.png"},{name:"Sorare",url:"https://sorare.com/",description:"Global Fantasy Football. Collect limited edition digital collectibles",icon:"./images/dapps/sorare.jpg"},{name:"Clovers Network",url:"https://clovers.network",description:"Discover, collect & trade cryptographic icons",icon:"./images/dapps/clovers.png"},{name:"CryptoKitties",url:"https://www.cryptokitties.co/",description:"Collect, breed and trade unique CryptoKitties",icon:"./images/dapps/cryptokitties.co.png"},{name:"Super Rare",url:"https://superrare.co/",description:"Discover and collect digital artworks",icon:"./images/dapps/superrare.co.jpg"},{name:"Rarible",url:"https://rarible.com/",description:"Create and sell digital collectibles",icon:"./images/dapps/rarible.com.jpg"},{name:"Makersplace",url:"https://makersplace.com/",description:"Collect truly rare digital artworks",icon:"./images/dapps/makersplace.com.jpg"},{name:"My Crypto Heroes",url:"https://www.mycryptoheroes.net/home",description:"Collect and battle heroes",icon:"./images/dapps/my_crypto_heroes.jpg"},{name:"CryptoDozer Marketplace",url:"https://market.playdapp.io",description:"From sales to purchases, marketplace is reliable and fast",icon:"./images/dapps/cryptodozer.io.png"},{name:"Brave Frontier Heroes",url:"https://bravefrontierheroes.com",description:"Use heroes in turn-based quests and battles.",icon:"./images/dapps/brave_frontier_heroes.png"},{name:"Blockchain Cuties",url:"https://blockchaincuties.com/",description:"Cuties are cats, dogs, and bears that go on adventures.",icon:"./images/dapps/blockchaincuties.com.png"},{name:"F1 Delta Time",url:"https://www.f1deltatime.com/",description:"Own F1 Delta collectibles & stake to earn",icon:"./images/dapps/f1deltatime.com.png"},{name:"MegaCryptoPolis",url:"https://mcp3d.com",description:"Collect land and build a blockchain city.",icon:"./images/dapps/megacryptopolis.png"}]},{name:"Get crypto",displayIos:!1,icon:"./images/categories/crypto.svg",color:"#DAE5FF",iconColor:"#8CAAF0",dapps:[{name:"Gitcoin",url:"https://gitcoin.co/",description:"Get paid in crypto for working on open source projects",icon:"./images/dapps/gitcoin.co.png"},{name:"Local Ethereum",url:"https://localethereum.com/",description:"Get ETH peer-to-peer in over 130 countries",icon:"./images/dapps/localethereum.com.png"},{name:"Cent",url:"https://beta.cent.co/",description:"Earn ETH by creating content",icon:"./images/dapps/cent.co.png"},{name:"Mirror",url:"https://mirror.xyz",description:"Mirror\u2014a crypto native creative suite, with crowdfunding & publishing tools for creators. ",icon:"./images/dapps/mirror.png"}]},{name:"Developer tools",displayIos:!1,icon:"./images/categories/settings.svg",color:"#DFE3E9",iconColor:"#ADB6C3",dapps:[{name:"Ethereum Name Service",url:"https://app.ens.domains/",description:"Have one name for all your cryptocurrency wallets, a decentralised website, & more",icon:"./images/dapps/ens.jpg"},{name:"Gnosis Safe Multisig",url:"https://gnosis-safe.io/app/#/",description:"Manage digital assets collectively",icon:"./images/dapps/gnosis_safe.png"},{name:"Microsponsors",url:"https://microsponsors.io",description:"Microsponsors is an auction house for tokenized Time",icon:"./images/dapps/microsponsors.png"},{name:"MythX",url:"https://mythx.io/",description:"Smart contract security service for Ethereum",icon:"./images/dapps/mythx.png"}]},{name:"Social communities",displayIos:!1,icon:"./images/categories/chat.svg",color:"#FFEDBE",iconColor:"#FFD361",dapps:[{name:"3Box",url:"https://3box.io/hub",description:"Social profiles for Ethereum",icon:"./images/dapps/3box.io.png"},{name:"Kauri",url:"https://kauri.io/",description:"Ethereum dev content in a decentralized knowledge base",icon:"./images/dapps/kauri.io.png"},{name:"FOAM",url:"https://map.foam.space",description:"Create, curate, and search a consensus-driven map",icon:"./images/dapps/foam.space.png"},{name:"Aragon",url:"https://aragon.org/discover/",description:"Create and manage communities, companies, organizations",icon:"./images/dapps/aragon.org.png"}]},{name:"Markets",displayIos:!1,icon:"./images/categories/shop.svg",color:"#DEEFFF",iconColor:"#8BBBE7",dapps:[{name:"Popula",url:"https://popula.com/",description:"News powered by Civil and Ethereum",icon:"./images/dapps/popula.com.png"},{name:"CoinDesk",url:"https://www.coindesk.com/",description:"Blockchain news",icon:"./images/dapps/coindesk.com.png"},{name:"CoinGecko",url:"https://www.coingecko.com/en",description:"Cryptocurrency Prices & Market Capitalization",icon:"./images/dapps/coingecko.com.png"},{name:"DeCrypt",url:"https://decrypt.co/",description:"News about Ethereum, Bitcoin and Web3",icon:"./images/dapps/decrypt.co.jpg"},{name:"Defipulse",url:"https://defipulse.com/",description:"The analytics + rankings hub for DeFi",icon:"./images/dapps/defipulse.com.png"}]}]),z=(t(66),function(e){function a(){return Object(l.a)(this,a),Object(d.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"explore-dapps"},B.map(function(e){return o.a.createElement(I,{data:e,key:e.name})}))}}]),a}(n.Component)),L=t(20),R=t.n(L),G=t(33),H=t(15),q=t.n(H),K=t(34),U=(t(69),t(35)),X=t.n(U),J=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(d.a)(this,Object(u.a)(a).call(this))).trackEventOpenListedDapp=function(a){a.preventDefault(),b(x.OPEN_LISTED_DAPP,{dapp_name:e.props.data.name,dapp_url:e.props.data.url,position:e.props.position+1}),window.location.href=e.props.data.url},e.renderDescription=function(e){return e&&o.a.createElement("div",null,o.a.createElement("p",{className:"dapp-desc"},e))},e.onClose=function(a){a.preventDefault(),e.props.onClose(e.props.data.url)},e.state={isOpen:!1},e}return Object(g.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.size,n=a.closable,i=a.data,r=i.name,c=i.description,s=i.url,p=i.icon;return o.a.createElement("div",{className:"dapp"},o.a.createElement("div",{className:"column"},o.a.createElement("img",{src:p,className:"dapp-logo ".concat("small"===t?"dapp-logo-small":""),alt:"".concat(r," logo")})),o.a.createElement("div",{className:"column grow",onClick:function(){return window.location=s}},o.a.createElement("div",{className:"dapp-row"},o.a.createElement("div",{className:"dapp-content"},o.a.createElement("p",{className:"dapp-name ".concat("small"===t?"dapp-name-small":"")},r),o.a.createElement("a",{href:s,className:"dapp-url"},s)),n&&o.a.createElement("button",{className:"dapp-close",onClick:this.onClose},o.a.createElement("img",{src:q.a,alt:"close button"}))),o.a.createElement("div",{className:"dapp-row"},o.a.createElement(K.Collapse,{isOpened:this.state.isOpen},c?this.renderDescription(c):null))),o.a.createElement("div",{className:"column",onClick:function(){return e.setState({isOpen:!e.state.isOpen})}},o.a.createElement("img",{src:X.a,className:"arrow ".concat(this.state.isOpen?"":"rotate")})))}}]),a}(n.Component),Y=(t(70),n.Component,t(36)),W=t.n(Y),Z=(t(71),n.Component,function(e){function a(){return Object(l.a)(this,a),Object(d.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){b(x.IMPRESSION)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(y,null),o.a.createElement(P,null),o.a.createElement("div",{label:"Explore sites",className:"tab-content"},o.a.createElement(z,null)))}}]),a}(n.Component)),$=t(37),V=t.n($),Q=(t(72),function(e){function a(){return Object(l.a)(this,a),Object(d.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.title;return o.a.createElement("div",{className:"navbar"},o.a.createElement(c.b,{to:"/",className:"navbar-back"},o.a.createElement("img",{src:V.a,alt:"go back"})),o.a.createElement("h1",null,e))}}]),a}(n.Component)),ee=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=Object(d.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(o)))).state={category:null},t.updateCategory=function(){var e=B.find(function(e){return e.name.toLowerCase().replace(" ","-")===t.props.match.params.category});JSON.stringify(e)!==JSON.stringify(t.state.category)&&t.setState({category:e})},t}return Object(g.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.updateCategory()}},{key:"componentDidUpdate",value:function(){this.updateCategory()}},{key:"render",value:function(){var e=(this.state||{}).category;return e?o.a.createElement("div",null,o.a.createElement(Q,{title:e.name}),o.a.createElement("div",{className:"category-wrapper"},e.dapps.sort(function(e,a){return e.name.charCodeAt(0)-a.name.charCodeAt(0)}).map(function(e,a){return o.a.createElement(J,{data:e,key:e.url,position:a})}))):null}}]),a}(n.Component),ae=function(e){function a(){return Object(l.a)(this,a),Object(d.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(m.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),a}(n.Component),te=Object(s.f)(ae);t(73);var ne=function(){return o.a.createElement(c.a,null,o.a.createElement(te,null,o.a.createElement("div",{className:"App"},o.a.createElement(s.a,{exact:!0,path:"/",component:Z}),o.a.createElement("div",{className:"animated-wrapper-rule"},o.a.createElement(p.a,{path:"/:category",component:ee,atEnter:{offset:50,opacity:0},atLeave:{offset:150,opacity:1},atActive:{offset:0,opacity:1},mapStyles:function(e){return{transform:"translateX(".concat(e.offset,"%)")}}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(ne,null),document.getElementById("root")),document.addEventListener("touchstart",function(){},!0),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[39,1,2]]]);
//# sourceMappingURL=main.3d0829a1.chunk.js.map