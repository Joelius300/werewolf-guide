if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return r[s]||(e=new Promise((async e=>{if("document"in self){const r=document.createElement("script");r.src=s,document.head.appendChild(r),r.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!r[s])throw new Error(`Module ${s} didn’t register its module`);return r[s]}))},e=(e,r)=>{Promise.all(e.map(s)).then((s=>r(1===s.length?s[0]:s)))},r={require:Promise.resolve(e)};self.define=(e,l,a)=>{r[e]||(r[e]=Promise.resolve().then((()=>{let r={};const i={uri:location.origin+e.slice(1)};return Promise.all(l.map((e=>{switch(e){case"exports":return r;case"module":return i;default:return s(e)}}))).then((s=>{const e=a(...s);return r.default||(r.default=e),r}))})))}}define("./service-worker.js",["./workbox-543be79b"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"d8e35e0c214ec252ac8f7e864777a34b"},{url:"assets/css/918.styles.0e838b45.css",revision:null},{url:"assets/css/styles.5558264e.css",revision:null},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/search.b017a09f.svg",revision:null},{url:"assets/js/205.a36e6ff1.js",revision:null},{url:"assets/js/287.39e008e9.js",revision:null},{url:"assets/js/491.bd5a9bb5.js",revision:null},{url:"assets/js/752.61a97c48.js",revision:null},{url:"assets/js/774.b93b5718.js",revision:null},{url:"assets/js/app.53d61956.js",revision:null},{url:"assets/js/runtime~app.6aceabb8.js",revision:null},{url:"assets/js/v-0f1621a8.6c16a07b.js",revision:null},{url:"assets/js/v-1579e811.d29ec821.js",revision:null},{url:"assets/js/v-19ef4eac.79e12f52.js",revision:null},{url:"assets/js/v-1c32c082.c11fe60b.js",revision:null},{url:"assets/js/v-1e533ef4.b85469e0.js",revision:null},{url:"assets/js/v-288cdc5c.7ff2df21.js",revision:null},{url:"assets/js/v-291b1cc8.acde70ce.js",revision:null},{url:"assets/js/v-292f6045.e7e24925.js",revision:null},{url:"assets/js/v-2dcfcc14.997ca2b5.js",revision:null},{url:"assets/js/v-2fa6d57e.a8a85381.js",revision:null},{url:"assets/js/v-3706649a.206f5b17.js",revision:null},{url:"assets/js/v-3a3b91f4.e9fbbf34.js",revision:null},{url:"assets/js/v-4ae48cae.8eeaaf40.js",revision:null},{url:"assets/js/v-4c5e57cc.e89d7f30.js",revision:null},{url:"assets/js/v-5a954e54.22d7f1b3.js",revision:null},{url:"assets/js/v-6433faf6.f3d5cbb5.js",revision:null},{url:"assets/js/v-655c0bb4.566a46ed.js",revision:null},{url:"assets/js/v-698b001c.7001ee66.js",revision:null},{url:"assets/js/v-6bd6c814.edebec0a.js",revision:null},{url:"assets/js/v-70cf0714.e323c019.js",revision:null},{url:"assets/js/v-760992c0.2065a443.js",revision:null},{url:"assets/js/v-7a4d0aad.9c798fae.js",revision:null},{url:"assets/js/v-7cc397b4.9f25e5a5.js",revision:null},{url:"assets/js/v-85cbcca8.e789c043.js",revision:null},{url:"assets/js/v-8bc05c18.aae787d3.js",revision:null},{url:"assets/js/v-8daa1a0e.a3bf8e24.js",revision:null},{url:"assets/js/v-8ffca748.93db6fea.js",revision:null},{url:"assets/js/v-a2e39988.265f1f31.js",revision:null},{url:"assets/js/v-b6aa6e02.cdc924bd.js",revision:null},{url:"assets/js/v-d6e2d8ca.b6a1b3b9.js",revision:null},{url:"assets/js/v-da6e2b5e.84f6e5bd.js",revision:null},{url:"assets/js/v-f7e23c52.426542e6.js",revision:null},{url:"images/amor_bell_curve_meme.jpg",revision:"3d2287693608eaf706bb7a3b358d9143"},{url:"images/android-chrome-192x192.png",revision:"5f72797fca7bc39bc4e1437bf3049e78"},{url:"images/android-chrome-512x512.png",revision:"87d7abaed7a6fd27dd4b6a962b6df503"},{url:"images/apple-touch-icon.png",revision:"7b5079364ef0e5a74952bdd9b2dad40e"},{url:"images/favicon-16x16.png",revision:"994b71cf2a79f683b3bd0b865b38122b"},{url:"images/favicon-32x32.png",revision:"9555d4aa3a0055b77d746cd55bb75b72"},{url:"images/wolf_icon_black.svg",revision:"c609db75ab8c6d3dbd881e9c9c435de3"},{url:"images/wolf_icon_white.svg",revision:"7f2d8e13bb92a39daa58e245fc9bfb86"},{url:"index.html",revision:"387d918a71f16dba4a79a645c80cd983"},{url:"inspirations.html",revision:"91bee76410b37b080c46058898af4337"},{url:"rules/characters/bear.html",revision:"524cc8ff3f0de3b3426cfbc539fad690"},{url:"rules/characters/cupid.html",revision:"ab54692fc1f6bbe4b14af63a975a0072"},{url:"rules/characters/fox.html",revision:"3b54e1831669f16f2f437b24dfe0d6dd"},{url:"rules/characters/great_werewolf.html",revision:"070b88966133c4b94c4b410ee99d6304"},{url:"rules/characters/guardian.html",revision:"29471dd84e6fc21ae7b34bbccc64b6d7"},{url:"rules/characters/hangman.html",revision:"dbe9d8ce1aefac6cf768885de2c15d3a"},{url:"rules/characters/index.html",revision:"cfd1f1fefbf24d11944eceb02ee98e9c"},{url:"rules/characters/lucky_devil.html",revision:"2a1c69d0efaefc2eeb5233209f13bb1e"},{url:"rules/characters/mafiaboss.html",revision:"65cdb99474ed0b68ad826019bca8f4ec"},{url:"rules/characters/maid.html",revision:"3102b4caa9b9c59e14af2828a7e44bb8"},{url:"rules/characters/ogre.html",revision:"0472849dba0748ac11d2e33273d24e46"},{url:"rules/characters/old_dude.html",revision:"2c6fd180ac22bfe193ab904ef29b80c8"},{url:"rules/characters/pissoirschiisser.html",revision:"db65d5121903e34a47e9f1f21836191f"},{url:"rules/characters/rusty_knight.html",revision:"1d6daf0e151e459af5c5ce40fd6be762"},{url:"rules/characters/seer_apprentice.html",revision:"f35afa2c6f99541fd78b5b8a5cb88407"},{url:"rules/characters/seer.html",revision:"1a317c2f42f48f0aff623403fc590316"},{url:"rules/characters/siblings.html",revision:"f4522e691d3ac10b3fbf9368d337a096"},{url:"rules/characters/stuttering_judge.html",revision:"c57871aa9965ef7c28207b8904d6eb4b"},{url:"rules/characters/villager.html",revision:"4d32b042a41956aac58b94ebbb6e8294"},{url:"rules/characters/werewolf.html",revision:"0d416b459cb79d7e04359630f2cc97bd"},{url:"rules/characters/white_werewolf.html",revision:"5ed4b1725ff2cb969798add5b0801568"},{url:"rules/characters/whore.html",revision:"6e6f1baa5d2ace11b2da949a0644d55a"},{url:"rules/characters/wild_kid.html",revision:"5bbab85e2c414df0ca89b21611d86315"},{url:"rules/characters/witch.html",revision:"86d58f1f56b3201963171cf60f4193ed"},{url:"rules/characters/wolverine.html",revision:"ab1a007a60350f094e20689f9650843a"},{url:"rules/characterSummaries.html",revision:"b6e9f2806d7c4a91405349a089018e0e"},{url:"rules/index.html",revision:"c10e7f82049bf4209fe7b83420f89213"},{url:"rules/teams.html",revision:"372f37d63a47e4df5abf55cc8d8e14e3"},{url:"rules/variations.html",revision:"2fd79eb8a037243cadef3b85e9b9afef"}],{})}));
