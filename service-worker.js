if(!self.define){let e,l={};const s=(s,r)=>(s=new URL(s+".js",r).href,l[s]||new Promise((l=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=l,document.head.appendChild(e)}else e=s,importScripts(s),l()})).then((()=>{let e=l[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(l[i])return;let o={};const a=e=>s(e,i),u={module:{uri:i},exports:o,require:a};l[i]=Promise.all(r.map((e=>u[e]||a(e)))).then((e=>(n(...e),o)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"1de0347349f43461c964bf5bd451aa7c"},{url:"assets/app.DYkaOnoJ.js",revision:null},{url:"assets/chunks/framework.DJT1Lw4G.js",revision:null},{url:"assets/chunks/index.B49wiAwd.js",revision:null},{url:"assets/chunks/theme.ByPbEYNV.js",revision:null},{url:"assets/chunks/workbox-window.prod.es5.D5gOYdM7.js",revision:null},{url:"assets/index.md.DGu5ddot.js",revision:null},{url:"assets/index.md.DGu5ddot.lean.js",revision:null},{url:"assets/inspirationen.md.BVIE3kN_.js",revision:null},{url:"assets/inspirationen.md.BVIE3kN_.lean.js",revision:null},{url:"assets/inter-italic-cyrillic-ext.r48I6akx.woff2",revision:null},{url:"assets/inter-italic-cyrillic.By2_1cv3.woff2",revision:null},{url:"assets/inter-italic-greek-ext.1u6EdAuj.woff2",revision:null},{url:"assets/inter-italic-greek.DJ8dCoTZ.woff2",revision:null},{url:"assets/inter-italic-latin-ext.CN1xVJS-.woff2",revision:null},{url:"assets/inter-italic-latin.C2AdPX0b.woff2",revision:null},{url:"assets/inter-italic-vietnamese.BSbpV94h.woff2",revision:null},{url:"assets/inter-roman-cyrillic-ext.BBPuwvHQ.woff2",revision:null},{url:"assets/inter-roman-cyrillic.C5lxZ8CY.woff2",revision:null},{url:"assets/inter-roman-greek-ext.CqjqNYQ-.woff2",revision:null},{url:"assets/inter-roman-greek.BBVDIX6e.woff2",revision:null},{url:"assets/inter-roman-latin-ext.4ZJIpNVo.woff2",revision:null},{url:"assets/inter-roman-latin.Di8DUHzh.woff2",revision:null},{url:"assets/inter-roman-vietnamese.BjW4sHH5.woff2",revision:null},{url:"assets/regeln_index.md.D8B9RhOW.js",revision:null},{url:"assets/regeln_index.md.D8B9RhOW.lean.js",revision:null},{url:"assets/regeln_rollen.md.CYoE7ryj.js",revision:null},{url:"assets/regeln_rollen.md.CYoE7ryj.lean.js",revision:null},{url:"assets/regeln_teams.md.D9OZ5XKz.js",revision:null},{url:"assets/regeln_teams.md.D9OZ5XKz.lean.js",revision:null},{url:"assets/regeln_varianten.md.lqnJm2O6.js",revision:null},{url:"assets/regeln_varianten.md.lqnJm2O6.lean.js",revision:null},{url:"assets/rollen_alter-sack.md.C7H1boP0.js",revision:null},{url:"assets/rollen_alter-sack.md.C7H1boP0.lean.js",revision:null},{url:"assets/rollen_amor.md.DVdM4NeV.js",revision:null},{url:"assets/rollen_amor.md.DVdM4NeV.lean.js",revision:null},{url:"assets/rollen_bar.md.CrwwLYgg.js",revision:null},{url:"assets/rollen_bar.md.CrwwLYgg.lean.js",revision:null},{url:"assets/rollen_beschutzer.md.uZGep4Rc.js",revision:null},{url:"assets/rollen_beschutzer.md.uZGep4Rc.lean.js",revision:null},{url:"assets/rollen_brandstifter.md.CstYY9zh.js",revision:null},{url:"assets/rollen_brandstifter.md.CstYY9zh.lean.js",revision:null},{url:"assets/rollen_dorfbewohner.md.Dnbt_oAT.js",revision:null},{url:"assets/rollen_dorfbewohner.md.Dnbt_oAT.lean.js",revision:null},{url:"assets/rollen_dorfmatratze.md.CmPCglHR.js",revision:null},{url:"assets/rollen_dorfmatratze.md.CmPCglHR.lean.js",revision:null},{url:"assets/rollen_fuchs.md.DGbHVi_X.js",revision:null},{url:"assets/rollen_fuchs.md.DGbHVi_X.lean.js",revision:null},{url:"assets/rollen_geschwister.md.GzoqpQV3.js",revision:null},{url:"assets/rollen_geschwister.md.GzoqpQV3.lean.js",revision:null},{url:"assets/rollen_gluckspilz.md.DFUjAhuU.js",revision:null},{url:"assets/rollen_gluckspilz.md.DFUjAhuU.lean.js",revision:null},{url:"assets/rollen_henker.md.jyGIn8rd.js",revision:null},{url:"assets/rollen_henker.md.jyGIn8rd.lean.js",revision:null},{url:"assets/rollen_hexe.md.CZrVTvHr.js",revision:null},{url:"assets/rollen_hexe.md.CZrVTvHr.lean.js",revision:null},{url:"assets/rollen_index.md.B8xB4nBx.js",revision:null},{url:"assets/rollen_index.md.B8xB4nBx.lean.js",revision:null},{url:"assets/rollen_mafiaboss.md.BIbenchR.js",revision:null},{url:"assets/rollen_mafiaboss.md.BIbenchR.lean.js",revision:null},{url:"assets/rollen_magd.md.wMJ2lyRv.js",revision:null},{url:"assets/rollen_magd.md.wMJ2lyRv.lean.js",revision:null},{url:"assets/rollen_oger.md.wJBVYRBr.js",revision:null},{url:"assets/rollen_oger.md.wJBVYRBr.lean.js",revision:null},{url:"assets/rollen_pissoirschiisser.md.-O6EsRog.js",revision:null},{url:"assets/rollen_pissoirschiisser.md.-O6EsRog.lean.js",revision:null},{url:"assets/rollen_rostiger-ritter.md.BET7HNuw.js",revision:null},{url:"assets/rollen_rostiger-ritter.md.BET7HNuw.lean.js",revision:null},{url:"assets/rollen_seher.md.C5r-4ofI.js",revision:null},{url:"assets/rollen_seher.md.C5r-4ofI.lean.js",revision:null},{url:"assets/rollen_seherlehrling.md.HuESHUIl.js",revision:null},{url:"assets/rollen_seherlehrling.md.HuESHUIl.lean.js",revision:null},{url:"assets/rollen_stotternder-richter.md.BV_v6r1l.js",revision:null},{url:"assets/rollen_stotternder-richter.md.BV_v6r1l.lean.js",revision:null},{url:"assets/rollen_the-queen.md.DQTE8MXd.js",revision:null},{url:"assets/rollen_the-queen.md.DQTE8MXd.lean.js",revision:null},{url:"assets/rollen_urwolf.md.Dn1r7kiK.js",revision:null},{url:"assets/rollen_urwolf.md.Dn1r7kiK.lean.js",revision:null},{url:"assets/rollen_weisser-werwolf.md.D_T3yagz.js",revision:null},{url:"assets/rollen_weisser-werwolf.md.D_T3yagz.lean.js",revision:null},{url:"assets/rollen_werwolf.md.BM9Ah5PZ.js",revision:null},{url:"assets/rollen_werwolf.md.BM9Ah5PZ.lean.js",revision:null},{url:"assets/rollen_wildes-kind.md.D67gWPIx.js",revision:null},{url:"assets/rollen_wildes-kind.md.D67gWPIx.lean.js",revision:null},{url:"assets/rollen_wolverine.md.xI9VUYnR.js",revision:null},{url:"assets/rollen_wolverine.md.xI9VUYnR.lean.js",revision:null},{url:"assets/style.CCqtG0DQ.css",revision:null},{url:"favicon.ico",revision:"d3bee20ee7ccf5703b8696559e8379b6"},{url:"images/amor_bell_curve_meme.jpg",revision:"3d2287693608eaf706bb7a3b358d9143"},{url:"images/android-chrome-192x192.png",revision:"5f72797fca7bc39bc4e1437bf3049e78"},{url:"images/android-chrome-512x512.png",revision:"87d7abaed7a6fd27dd4b6a962b6df503"},{url:"images/apple-touch-icon.png",revision:"7b5079364ef0e5a74952bdd9b2dad40e"},{url:"images/favicon-16x16.png",revision:"994b71cf2a79f683b3bd0b865b38122b"},{url:"images/favicon-32x32.png",revision:"9555d4aa3a0055b77d746cd55bb75b72"},{url:"images/wolf_icon_black.svg",revision:"c609db75ab8c6d3dbd881e9c9c435de3"},{url:"images/wolf_icon_white.svg",revision:"7f2d8e13bb92a39daa58e245fc9bfb86"},{url:"index.html",revision:"b8621325f53fd74b264dddd3a6a23da4"},{url:"inspirationen.html",revision:"aa82aaa708966183262d71a99172951e"},{url:"regeln/index.html",revision:"788fff980dc68df2f9c4397aaad15383"},{url:"regeln/rollen.html",revision:"51378a7df88beb37dd11a1423a22e4a4"},{url:"regeln/teams.html",revision:"69ed1d891fdfd870d67d4524a020e299"},{url:"regeln/varianten.html",revision:"e0eafd376f5bf435a61430f99b9d5488"},{url:"robots.txt",revision:"388c5f8f69975957d982e71a6ff88ea5"},{url:"rollen/alter-sack.html",revision:"5c7a1f5a54d5b2137cd339b0aae9b435"},{url:"rollen/amor.html",revision:"002fb8a13af899c10d9577f9e7205df5"},{url:"rollen/bar.html",revision:"0a986ad84c1e0ec8891b78fc9c2cc251"},{url:"rollen/beschutzer.html",revision:"c96a31ed07ba5d80e38ef4c86bf1f666"},{url:"rollen/brandstifter.html",revision:"229dc1158605c2a80e454bb5913ed22a"},{url:"rollen/dorfbewohner.html",revision:"fb8f7287d7c4587d633fb2da63dd7a44"},{url:"rollen/dorfmatratze.html",revision:"4bbf7e603f5a93353409e46838b55df8"},{url:"rollen/fuchs.html",revision:"c444a0aa16225335adc89df9f1648bd2"},{url:"rollen/geschwister.html",revision:"33c30d5dc3dfbc4aba0cdfc039ec2c77"},{url:"rollen/gluckspilz.html",revision:"58673bda183c3fb6ac63464181e502f7"},{url:"rollen/henker.html",revision:"ecd3651cf493c7b03b5f4ab1405aa4f3"},{url:"rollen/hexe.html",revision:"1066beb57d9c773fde4bd7210d054713"},{url:"rollen/index.html",revision:"a628a5fbaf244b6160b0963aa7b10113"},{url:"rollen/mafiaboss.html",revision:"539fda2980b45c00b818a1fca7ab22bd"},{url:"rollen/magd.html",revision:"5e7cde044d7034cd995bb2788a621594"},{url:"rollen/oger.html",revision:"d622b988c9e38b124e3bdd899ccb5bdd"},{url:"rollen/pissoirschiisser.html",revision:"9efd6249a65c0f0025f7ffc2e9ae3555"},{url:"rollen/rostiger-ritter.html",revision:"b200ab122ec384595d1eab095fb144e9"},{url:"rollen/seher.html",revision:"35ad34d2edca4431d95d25f245de2db9"},{url:"rollen/seherlehrling.html",revision:"8094142c0ee0ddd284fcb7b9423a0231"},{url:"rollen/stotternder-richter.html",revision:"ea639bf6e6c4ef4323fb5e4ee9b8a941"},{url:"rollen/the-queen.html",revision:"98cfa438e8672d659695aa50be3810d2"},{url:"rollen/urwolf.html",revision:"9b9642100e5a0c3f5bd1e5ca19cc33b1"},{url:"rollen/weisser-werwolf.html",revision:"91657e10536e0b76db48b653cfb51eb5"},{url:"rollen/werwolf.html",revision:"e6a0d4a80a34ce258f906073dc67bae6"},{url:"rollen/wildes-kind.html",revision:"0a72ca22ec60a276614c68db873e937f"},{url:"rollen/wolverine.html",revision:"3907da3554aa9b9e901e581e47bfc8d7"},{url:"sitemap.xml",revision:"4780e0c632b64a3cad7f6c83847ef654"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
