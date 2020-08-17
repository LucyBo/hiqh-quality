exports.ids=[3],exports.modules={"0c171786d2509afad68a":function(e,t,r){"use strict";var n=r("d691ab6a01eacf6bd123");e.exports=function(e,t,r){return n.forEach(r,function(r){e=r(e,t)}),e}},"1753bbe43245bae19898":function(e,t,r){"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},"19425ead75bba88da318":function(e,t,r){"use strict";var n=r("ff2e668c0c59935e30de");e.exports=function(e,t,r){var o=r.config.validateStatus;!o||o(r.status)?e(r):t(n("Request failed with status code "+r.status,r.config,null,r.request,r))}},"289c96ed03271763a3a9":function(e,t,r){"use strict";var n=r("d691ab6a01eacf6bd123"),o=r("443f930b60798cfedf71"),a=r("5dfc216e0b9559a5e74b"),s=r("44c1fc35bd273cc4f7a9");function i(e){var t=new a(e),r=o(a.prototype.request,t);return n.extend(r,a.prototype,t),n.extend(r,t),r}var c=i(r("764eabf2370962c4cad0"));c.Axios=a,c.create=function(e){return i(s(c.defaults,e))},c.Cancel=r("f3f9cf0ae64305a42cd6"),c.CancelToken=r("efd0adb76568cdad4116"),c.isCancel=r("b8e7bb6f2e080f7f5d1b"),c.all=function(e){return Promise.all(e)},c.spread=r("8bd221e6c52c12f3bc2c"),e.exports=c,e.exports.default=c},"3541244d5a4ffc714985":function(e,t,r){"use strict";var n=r("d691ab6a01eacf6bd123"),o=r("0c171786d2509afad68a"),a=r("b8e7bb6f2e080f7f5d1b"),s=r("764eabf2370962c4cad0");function i(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return i(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||s.adapter)(e).then(function(t){return i(e),t.data=o(t.data,t.headers,e.transformResponse),t},function(t){return a(t)||(i(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},"443f930b60798cfedf71":function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},"44c1fc35bd273cc4f7a9":function(e,t,r){"use strict";var n=r("d691ab6a01eacf6bd123");e.exports=function(e,t){t=t||{};var r={},o=["url","method","params","data"],a=["headers","auth","proxy"],s=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];n.forEach(o,function(e){"undefined"!==typeof t[e]&&(r[e]=t[e])}),n.forEach(a,function(o){n.isObject(t[o])?r[o]=n.deepMerge(e[o],t[o]):"undefined"!==typeof t[o]?r[o]=t[o]:n.isObject(e[o])?r[o]=n.deepMerge(e[o]):"undefined"!==typeof e[o]&&(r[o]=e[o])}),n.forEach(s,function(n){"undefined"!==typeof t[n]?r[n]=t[n]:"undefined"!==typeof e[n]&&(r[n]=e[n])});var i=o.concat(a).concat(s),c=Object.keys(t).filter(function(e){return-1===i.indexOf(e)});return n.forEach(c,function(n){"undefined"!==typeof t[n]?r[n]=t[n]:"undefined"!==typeof e[n]&&(r[n]=e[n])}),r}},"48e5915ed6b2de40fdd7":function(e,t,r){"use strict";var n=r("d691ab6a01eacf6bd123");function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=o},"4f99c0c326ebbe735716":function(e,t,r){"use strict";var n=r("a79cb4368efe9573d743"),o=r("e97ff122bd8cd321b17e");e.exports=function(e,t){return e&&!n(t)?o(e,t):t}},"5dfc216e0b9559a5e74b":function(e,t,r){"use strict";var n=r("d691ab6a01eacf6bd123"),o=r("9c18c4e613628d1ec624"),a=r("48e5915ed6b2de40fdd7"),s=r("3541244d5a4ffc714985"),i=r("44c1fc35bd273cc4f7a9");function c(e){this.defaults=e,this.interceptors={request:new a,response:new a}}c.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=i(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[s,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)r=r.then(t.shift(),t.shift());return r},c.prototype.getUri=function(e){return e=i(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],function(e){c.prototype[e]=function(t,r){return this.request(n.merge(r||{},{method:e,url:t}))}}),n.forEach(["post","put","patch"],function(e){c.prototype[e]=function(t,r,o){return this.request(n.merge(o||{},{method:e,url:t,data:r}))}}),e.exports=c},"655bf49f5cf2372da693":function(e,t,r){"use strict";var n=r("d691ab6a01eacf6bd123"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,a,s={};return e?(n.forEach(e.split("\n"),function(e){if(a=e.indexOf(":"),t=n.trim(e.substr(0,a)).toLowerCase(),r=n.trim(e.substr(a+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([r]):s[t]?s[t]+", "+r:r}}),s):s}},"764eabf2370962c4cad0":function(e,t,r){"use strict";var n=r("d691ab6a01eacf6bd123"),o=r("f0fa722f89afc6c5f151"),a={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var i,c={adapter:("undefined"!==typeof XMLHttpRequest?i=r("8c7aae232bd71b30a8a9"):"undefined"!==typeof process&&"[object process]"===Object.prototype.toString.call(process)&&(i=r("fb2d3adcd1718947eec9")),i),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(s(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},n.forEach(["delete","get","head"],function(e){c.headers[e]={}}),n.forEach(["post","put","patch"],function(e){c.headers[e]=n.merge(a)}),e.exports=c},"8bd221e6c52c12f3bc2c":function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},"8c7aae232bd71b30a8a9":function(e,t,r){"use strict";var n=r("d691ab6a01eacf6bd123"),o=r("19425ead75bba88da318"),a=r("9c18c4e613628d1ec624"),s=r("4f99c0c326ebbe735716"),i=r("655bf49f5cf2372da693"),c=r("f1c2ad17bf5891207603"),f=r("ff2e668c0c59935e30de");e.exports=function(e){return new Promise(function(t,u){var d=e.data,p=e.headers;n.isFormData(d)&&delete p["Content-Type"];var h=new XMLHttpRequest;if(e.auth){var l=e.auth.username||"",m=e.auth.password||"";p.Authorization="Basic "+btoa(l+":"+m)}var b=s(e.baseURL,e.url);if(h.open(e.method.toUpperCase(),a(b,e.params,e.paramsSerializer),!0),h.timeout=e.timeout,h.onreadystatechange=function(){if(h&&4===h.readyState&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in h?i(h.getAllResponseHeaders()):null,n={data:e.responseType&&"text"!==e.responseType?h.response:h.responseText,status:h.status,statusText:h.statusText,headers:r,config:e,request:h};o(t,u,n),h=null}},h.onabort=function(){h&&(u(f("Request aborted",e,"ECONNABORTED",h)),h=null)},h.onerror=function(){u(f("Network Error",e,null,h)),h=null},h.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),u(f(t,e,"ECONNABORTED",h)),h=null},n.isStandardBrowserEnv()){var g=r("bbf908b1cf347edcd951"),v=(e.withCredentials||c(b))&&e.xsrfCookieName?g.read(e.xsrfCookieName):void 0;v&&(p[e.xsrfHeaderName]=v)}if("setRequestHeader"in h&&n.forEach(p,function(e,t){"undefined"===typeof d&&"content-type"===t.toLowerCase()?delete p[t]:h.setRequestHeader(t,e)}),n.isUndefined(e.withCredentials)||(h.withCredentials=!!e.withCredentials),e.responseType)try{h.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"===typeof e.onDownloadProgress&&h.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&h.upload&&h.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){h&&(h.abort(),u(e),h=null)}),void 0===d&&(d=null),h.send(d)})}},"9c18c4e613628d1ec624":function(e,t,r){"use strict";var n=r("d691ab6a01eacf6bd123");function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var a;if(r)a=r(t);else if(n.isURLSearchParams(t))a=t.toString();else{var s=[];n.forEach(t,function(e,t){null!==e&&"undefined"!==typeof e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),s.push(o(t)+"="+o(e))}))}),a=s.join("&")}if(a){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}},a79cb4368efe9573d743:function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},b8e7bb6f2e080f7f5d1b:function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},bbf908b1cf347edcd951:function(e,t,r){"use strict";var n=r("d691ab6a01eacf6bd123");e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,o,a,s){var i=[];i.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),n.isString(o)&&i.push("path="+o),n.isString(a)&&i.push("domain="+a),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},bd183afcc37eabd79225:function(e,t,r){e.exports=r("289c96ed03271763a3a9")},d691ab6a01eacf6bd123:function(e,t,r){"use strict";var n=r("443f930b60798cfedf71"),o=Object.prototype.toString;function a(e){return"[object Array]"===o.call(e)}function s(e){return"undefined"===typeof e}function i(e){return null!==e&&"object"===typeof e}function c(e){return"[object Function]"===o.call(e)}function f(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),a(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!==typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"===typeof e},isNumber:function(e){return"number"===typeof e},isObject:i,isUndefined:s,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:c,isStream:function(e){return i(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!==typeof window&&"undefined"!==typeof document},forEach:f,merge:function e(){var t={};function r(r,n){"object"===typeof t[n]&&"object"===typeof r?t[n]=e(t[n],r):t[n]=r}for(var n=0,o=arguments.length;n<o;n++)f(arguments[n],r);return t},deepMerge:function e(){var t={};function r(r,n){"object"===typeof t[n]&&"object"===typeof r?t[n]=e(t[n],r):t[n]="object"===typeof r?e({},r):r}for(var n=0,o=arguments.length;n<o;n++)f(arguments[n],r);return t},extend:function(e,t,r){return f(t,function(t,o){e[o]=r&&"function"===typeof t?n(t,r):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},e043e0a3231f3d9a19b2:function(e){e.exports={name:"axios",version:"0.19.2",description:"Promise based HTTP client for the browser and node.js",main:"index.js",scripts:{test:"grunt test && bundlesize",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",fix:"eslint --fix lib/**/*.js"},repository:{type:"git",url:"https://github.com/axios/axios.git"},keywords:["xhr","http","ajax","promise","node"],author:"Matt Zabriskie",license:"MIT",bugs:{url:"https://github.com/axios/axios/issues"},homepage:"https://github.com/axios/axios",devDependencies:{bundlesize:"^0.17.0",coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.0.2","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^20.1.0","grunt-karma":"^2.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^1.0.18","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^1.3.0","karma-chrome-launcher":"^2.2.0","karma-coverage":"^1.1.1","karma-firefox-launcher":"^1.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-opera-launcher":"^1.0.0","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^1.2.0","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^1.7.0","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^5.2.0",sinon:"^4.5.0",typescript:"^2.8.1","url-search-params":"^0.10.0",webpack:"^1.13.1","webpack-dev-server":"^1.14.1"},browser:{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},typings:"./index.d.ts",dependencies:{"follow-redirects":"1.5.10"},bundlesize:[{path:"./dist/axios.min.js",threshold:"5kB"}]}},e97ff122bd8cd321b17e:function(e,t,r){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},efd0adb76568cdad4116:function(e,t,r){"use strict";var n=r("f3f9cf0ae64305a42cd6");function o(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var r=this;e(function(e){r.reason||(r.reason=new n(e),t(r.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o(function(t){e=t}),cancel:e}},e.exports=o},f0fa722f89afc6c5f151:function(e,t,r){"use strict";var n=r("d691ab6a01eacf6bd123");e.exports=function(e,t){n.forEach(e,function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])})}},f1c2ad17bf5891207603:function(e,t,r){"use strict";var n=r("d691ab6a01eacf6bd123");e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(t){var r=n.isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},f3f9cf0ae64305a42cd6:function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},fb2d3adcd1718947eec9:function(e,t,r){"use strict";var n=r("d691ab6a01eacf6bd123"),o=r("19425ead75bba88da318"),a=r("4f99c0c326ebbe735716"),s=r("9c18c4e613628d1ec624"),i=r("e0603c499aae47eb8934"),c=r("3e1943522517e81328e3"),f=r("22d51e72674d96e6b59d").http,u=r("22d51e72674d96e6b59d").https,d=r("28e5ebabd9d8f6e237df"),p=r("0ea55c28f8014d8886b6"),h=r("e043e0a3231f3d9a19b2"),l=r("ff2e668c0c59935e30de"),m=r("1753bbe43245bae19898"),b=/https:?/;e.exports=function(e){return new Promise(function(t,r){var g=function(e){t(e)},v=function(e){r(e)},y=e.data,x=e.headers;if(x["User-Agent"]||x["user-agent"]||(x["User-Agent"]="axios/"+h.version),y&&!n.isStream(y)){if(Buffer.isBuffer(y));else if(n.isArrayBuffer(y))y=Buffer.from(new Uint8Array(y));else{if(!n.isString(y))return v(l("Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream",e));y=Buffer.from(y,"utf-8")}x["Content-Length"]=y.length}var w=void 0;e.auth&&(w=(e.auth.username||"")+":"+(e.auth.password||""));var C=a(e.baseURL,e.url),j=d.parse(C),E=j.protocol||"http:";if(!w&&j.auth){var k=j.auth.split(":");w=(k[0]||"")+":"+(k[1]||"")}w&&delete x.Authorization;var A=b.test(E),S=A?e.httpsAgent:e.httpAgent,R={path:s(j.path,e.params,e.paramsSerializer).replace(/^\?/,""),method:e.method.toUpperCase(),headers:x,agent:S,agents:{http:e.httpAgent,https:e.httpsAgent},auth:w};e.socketPath?R.socketPath=e.socketPath:(R.hostname=j.hostname,R.port=j.port);var B,N=e.proxy;if(!N&&!1!==N){var T=E.slice(0,-1)+"_proxy",O=process.env[T]||process.env[T.toUpperCase()];if(O){var L=d.parse(O),U=process.env.no_proxy||process.env.NO_PROXY,P=!0;if(U)P=!U.split(",").map(function(e){return e.trim()}).some(function(e){return!!e&&("*"===e||("."===e[0]&&j.hostname.substr(j.hostname.length-e.length)===e||j.hostname===e))});if(P&&(N={host:L.hostname,port:L.port},L.auth)){var q=L.auth.split(":");N.auth={username:q[0],password:q[1]}}}}if(N&&(R.hostname=N.host,R.host=N.host,R.headers.host=j.hostname+(j.port?":"+j.port:""),R.port=N.port,R.path=E+"//"+j.hostname+(j.port?":"+j.port:"")+R.path,N.auth)){var D=Buffer.from(N.auth.username+":"+N.auth.password,"utf8").toString("base64");R.headers["Proxy-Authorization"]="Basic "+D}var z=A&&(!N||b.test(N.protocol));e.transport?B=e.transport:0===e.maxRedirects?B=z?c:i:(e.maxRedirects&&(R.maxRedirects=e.maxRedirects),B=z?u:f),e.maxContentLength&&e.maxContentLength>-1&&(R.maxBodyLength=e.maxContentLength);var _=B.request(R,function(t){if(!_.aborted){var r=t;switch(t.headers["content-encoding"]){case"gzip":case"compress":case"deflate":r=204===t.statusCode?r:r.pipe(p.createUnzip()),delete t.headers["content-encoding"]}var n=t.req||_,a={status:t.statusCode,statusText:t.statusMessage,headers:t.headers,config:e,request:n};if("stream"===e.responseType)a.data=r,o(g,v,a);else{var s=[];r.on("data",function(t){s.push(t),e.maxContentLength>-1&&Buffer.concat(s).length>e.maxContentLength&&(r.destroy(),v(l("maxContentLength size of "+e.maxContentLength+" exceeded",e,null,n)))}),r.on("error",function(t){_.aborted||v(m(t,e,null,n))}),r.on("end",function(){var t=Buffer.concat(s);"arraybuffer"!==e.responseType&&(t=t.toString(e.responseEncoding)),a.data=t,o(g,v,a)})}}});_.on("error",function(t){_.aborted||v(m(t,e,null,_))}),e.timeout&&_.setTimeout(e.timeout,function(){_.abort(),v(l("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",_))}),e.cancelToken&&e.cancelToken.promise.then(function(e){_.aborted||(_.abort(),v(e))}),n.isStream(y)?y.on("error",function(t){v(m(t,e,null,_))}).pipe(_):_.end(y)})}},ff2e668c0c59935e30de:function(e,t,r){"use strict";var n=r("1753bbe43245bae19898");e.exports=function(e,t,r,o,a){var s=new Error(e);return n(s,t,r,o,a)}}};