(function(e){function n(n){for(var t,c,u=n[0],i=n[1],a=n[2],f=0,d=[];f<u.length;f++)c=u[f],r[c]&&d.push(r[c][0]),r[c]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);s&&s(n);while(d.length)d.shift()();return l.push.apply(l,a||[]),o()}function o(){for(var e,n=0;n<l.length;n++){for(var o=l[n],t=!0,u=1;u<o.length;u++){var i=o[u];0!==r[i]&&(t=!1)}t&&(l.splice(n--,1),e=c(c.s=o[0]))}return e}var t={},r={app:0},l=[];function c(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=e,c.c=t,c.d=function(e,n,o){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)c.d(o,t,function(n){return e[n]}.bind(null,t));return o},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=n,u=u.slice();for(var a=0;a<u.length;a++)n(u[a]);var s=i;l.push([0,"chunk-vendors"]),o()})({0:function(e,n,o){e.exports=o("cd49")},"5c0b":function(e,n,o){"use strict";var t=o("5e27"),r=o.n(t);r.a},"5e27":function(e,n,o){},b445:function(e){e.exports={example:{text:"hello world",phone:"4759349273"}}},cd49:function(e,n,o){"use strict";o.r(n);var t=o("2b0e"),r=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},l=[],c=o("b445"),u=t["default"].extend({name:"home",components:{},data:function(){return{json:{}}},mounted:function(){this.json=c,console.log(c)}}),i=u,a=(o("5c0b"),o("2877")),s=Object(a["a"])(i,r,l,!1,null,null,null),f=s.exports,d=o("8c4f"),p=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"home"},[o("b-container",{staticClass:"p-5",attrs:{fluid:""}},[o("b-row",[o("b-col",[e._v("component usage:")])],1),o("b-row",[o("b-col",[o("hello-world",{attrs:{msg:"TEXT THAT IS REACTIVE TO SCREEN SIZE"}})],1)],1),o("b-row",[o("b-col",[e._v("stuff from content.json: "+e._s(e.json.example))])],1)],1)],1)},b=[],v=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"hello"},[o("h1",[e._v(e._s(e.msg))]),o("b-btn",{attrs:{variant:"primary"}},[e._v("Super cool hover button")])],1)},h=[],m=o("b445"),g=t["default"].extend({name:"HelloWorld",props:{msg:String},data:function(){return{json:{}}},mounted:function(){this.json=m,console.log(m)}}),w=g,j=(o("f9af"),Object(a["a"])(w,v,h,!1,null,"2fdc3acd",null)),y=j.exports,_=o("b445"),x=t["default"].extend({name:"home",components:{HelloWorld:y},data:function(){return{json:{}}},mounted:function(){this.json=_,console.log(_)}}),O=x,S=Object(a["a"])(O,p,b,!1,null,null,null),E=S.exports;t["default"].use(d["a"]);var T=new d["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:E}]}),k=o("9483");Object(k["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});o("21b6");var C=o("5f5b");t["default"].use(C["a"]),t["default"].config.productionTip=!1,new t["default"]({router:T,render:function(e){return e(f)}}).$mount("#app")},f198:function(e,n,o){},f9af:function(e,n,o){"use strict";var t=o("f198"),r=o.n(t);r.a}});
//# sourceMappingURL=app.js.map