!function(e,t,n,i){var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r="function"==typeof o[i]&&o[i],s=r.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function a(t,n){if(!s[t]){if(!e[t]){var u="function"==typeof o[i]&&o[i];if(!n&&u)return u(t,!0);if(r)return r(t,!0);if(l&&"string"==typeof t)return l(t);var p=new Error("Cannot find module '"+t+"'");throw p.code="MODULE_NOT_FOUND",p}c.resolve=function(n){var i=e[t][1][n];return null!=i?i:n},c.cache={};var d=s[t]=new a.Module(t);e[t][0].call(d.exports,c,d,d.exports,this)}return s[t].exports;function c(e){var t=c.resolve(e);return!1===t?{}:a(t)}}a.isParcelRequire=!0,a.Module=function(e){this.id=e,this.bundle=a,this.exports={}},a.modules=e,a.cache=s,a.parent=r,a.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},Object.defineProperty(a,"root",{get:function(){return o[i]}}),o[i]=a;for(var u=0;u<t.length;u++)a(t[u]);if(n){var p=a(n);"object"==typeof exports&&"undefined"!=typeof module?module.exports=p:"function"==typeof define&&define.amd&&define((function(){return p}))}}({jYWDk:[function(e,t,n){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(n);e("dotenv/config");var i=e("5e0824294e45b74e").resolve(__dirname,"../..");const o={siteMetadata:{siteTitle:"Minimal Blog",siteTitleAlt:"Minimal Blog - Gatsby Theme",siteHeadline:"Minimal Blog - Gatsby Theme from @lekoarts",siteUrl:"https://minimal-blog.lekoarts.de",siteDescription:"Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and line highlighting.",siteImage:"/banner.jpg",siteLanguage:"en",author:"@lekoarts_de"},trailingSlash:"always",plugins:[{resolve:"@lekoarts/gatsby-theme-minimal-blog",options:{navigation:[{title:"Blog",slug:"/blog"},{title:"About",slug:"/about"}],externalLinks:[{name:"Twitter",url:"https://twitter.com/lekoarts_de"},{name:"Homepage",url:"https://www.lekoarts.de?utm_source=minimal-blog&utm_medium=Starter"}]}},{resolve:"gatsby-plugin-sitemap",options:{output:"/"}},{resolve:"gatsby-plugin-manifest",options:{name:"minimal-blog - @lekoarts/gatsby-theme-minimal-blog",short_name:"minimal-blog",description:"Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.",start_url:"/",background_color:"#fff",display:"standalone",icons:[{src:"/android-chrome-192x192.png",sizes:"192x192",type:"image/png"},{src:"/android-chrome-512x512.png",sizes:"512x512",type:"image/png"}]}},{resolve:"gatsby-plugin-feed",options:{query:"\n          {\n            site {\n              siteMetadata {\n                title: siteTitle\n                description: siteDescription\n                siteUrl\n                site_url: siteUrl\n              }\n            }\n          }\n        ",feeds:[{serialize:({query:{site:e,allPost:t}})=>t.nodes.map((t=>{const n=e.siteMetadata.siteUrl+t.slug,i=`<p>${t.excerpt}</p><div style="margin-top: 50px; font-style: italic;"><strong><a href="${n}">Keep reading</a>.</strong></div><br /> <br />`;return{title:t.title,date:t.date,excerpt:t.excerpt,url:n,guid:n,custom_elements:[{"content:encoded":i}]}})),query:'{\n  allPost(sort: {date: DESC}) {\n    nodes {\n      title\n      date(formatString: "MMMM D, YYYY")\n      excerpt\n      slug\n    }\n  }\n}',output:"rss.xml",title:"Minimal Blog - @lekoarts/gatsby-theme-minimal-blog"}]}},process.env.ANALYSE_BUNDLE&&{resolve:"gatsby-plugin-webpack-statoscope",options:{saveReportTo:`${i}/public/.statoscope/_bundle.html`,saveStatsTo:`${i}/public/.statoscope/_stats.json`,open:!1}}].filter(Boolean)};n.default=o},{"5e0824294e45b74e":"path","dotenv/config":"dotenv/config",path:"path","@parcel/transformer-js/src/esmodule-helpers.js":"iNk3N"}],iNk3N:[function(e,t,n){n.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},n.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.exportAll=function(e,t){return Object.keys(e).forEach((function(n){"default"===n||"__esModule"===n||t.hasOwnProperty(n)||Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[n]}})})),t},n.export=function(e,t,n){Object.defineProperty(e,t,{enumerable:!0,get:n})}},{}]},["jYWDk"],"jYWDk","parcelRequirea2a1");
//# sourceMappingURL=gatsby-config.js.map