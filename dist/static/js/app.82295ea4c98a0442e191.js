webpackJsonp([0],[,function(t,e,n){function o(t){n(22)}var i=n(0)(n(13),n(39),o,"data-v-d2fb6c04",null);t.exports=i.exports},function(t,e,n){"use strict";function o(t){this.state=st,this.value=void 0,this.deferred=[];var e=this;try{t(function(t){e.resolve(t)},function(t){e.reject(t)})}catch(t){e.reject(t)}}function i(t,e){t instanceof Promise?this.promise=t:this.promise=new Promise(t.bind(e)),this.context=e}function r(t){lt=t.util,ut=t.config.debug||!t.config.silent}function s(t){"undefined"!=typeof console&&ut&&console.warn("[VueResource warn]: "+t)}function a(t){"undefined"!=typeof console&&console.error(t)}function c(t,e){return lt.nextTick(t,e)}function u(t){return t.replace(/^\s*|\s*$/g,"")}function l(t){return t?t.toLowerCase():""}function f(t){return t?t.toUpperCase():""}function d(t){return"string"==typeof t}function h(t){return!0===t||!1===t}function p(t){return"function"==typeof t}function m(t){return null!==t&&"object"==typeof t}function v(t){return m(t)&&Object.getPrototypeOf(t)==Object.prototype}function g(t){return"undefined"!=typeof Blob&&t instanceof Blob}function y(t){return"undefined"!=typeof FormData&&t instanceof FormData}function w(t,e,n){var o=i.resolve(t);return arguments.length<2?o:o.then(e,n)}function T(t,e,n){return n=n||{},p(n)&&(n=n.call(e)),_(t.bind({$vm:e,$options:n}),t,{$options:n})}function b(t,e){var n,o;if(t&&"number"==typeof t.length)for(n=0;n<t.length;n++)e.call(t[n],t[n],n);else if(m(t))for(o in t)t.hasOwnProperty(o)&&e.call(t[o],t[o],o);return t}function _(t){return ft.call(arguments,1).forEach(function(e){D(t,e,!0)}),t}function x(t){return ft.call(arguments,1).forEach(function(e){for(var n in e)void 0===t[n]&&(t[n]=e[n])}),t}function C(t){return ft.call(arguments,1).forEach(function(e){D(t,e)}),t}function D(t,e,n){for(var o in e)n&&(v(e[o])||dt(e[o]))?(v(e[o])&&!v(t[o])&&(t[o]={}),dt(e[o])&&!dt(t[o])&&(t[o]=[]),D(t[o],e[o],n)):void 0!==e[o]&&(t[o]=e[o])}function E(t,e){var n=e(t);return d(t.root)&&!n.match(/^(https?:)?\//)&&(n=t.root+"/"+n),n}function O(t,e){var n=Object.keys(k.options.params),o={},i=e(t);return b(t.params,function(t,e){-1===n.indexOf(e)&&(o[e]=t)}),o=k.params(o),o&&(i+=(-1==i.indexOf("?")?"?":"&")+o),i}function j(t,e,n){var o=N(t),i=o.expand(e);return n&&n.push.apply(n,o.vars),i}function N(t){var e=["+","#",".","/",";","?","&"],n=[];return{vars:n,expand:function(o){return t.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g,function(t,i,r){if(i){var s=null,a=[];if(-1!==e.indexOf(i.charAt(0))&&(s=i.charAt(0),i=i.substr(1)),i.split(/,/g).forEach(function(t){var e=/([^:\*]*)(?::(\d+)|(\*))?/.exec(t);a.push.apply(a,P(o,s,e[1],e[2]||e[3])),n.push(e[1])}),s&&"+"!==s){var c=",";return"?"===s?c="&":"#"!==s&&(c=s),(0!==a.length?s:"")+a.join(c)}return a.join(",")}return q(r)})}}}function P(t,e,n,o){var i=t[n],r=[];if(I(i)&&""!==i)if("string"==typeof i||"number"==typeof i||"boolean"==typeof i)i=i.toString(),o&&"*"!==o&&(i=i.substring(0,parseInt(o,10))),r.push($(e,i,U(e)?n:null));else if("*"===o)Array.isArray(i)?i.filter(I).forEach(function(t){r.push($(e,t,U(e)?n:null))}):Object.keys(i).forEach(function(t){I(i[t])&&r.push($(e,i[t],t))});else{var s=[];Array.isArray(i)?i.filter(I).forEach(function(t){s.push($(e,t))}):Object.keys(i).forEach(function(t){I(i[t])&&(s.push(encodeURIComponent(t)),s.push($(e,i[t].toString())))}),U(e)?r.push(encodeURIComponent(n)+"="+s.join(",")):0!==s.length&&r.push(s.join(","))}else";"===e?r.push(encodeURIComponent(n)):""!==i||"&"!==e&&"?"!==e?""===i&&r.push(""):r.push(encodeURIComponent(n)+"=");return r}function I(t){return void 0!==t&&null!==t}function U(t){return";"===t||"&"===t||"?"===t}function $(t,e,n){return e="+"===t||"#"===t?q(e):encodeURIComponent(e),n?encodeURIComponent(n)+"="+e:e}function q(t){return t.split(/(%[0-9A-Fa-f]{2})/g).map(function(t){return/%[0-9A-Fa-f]/.test(t)||(t=encodeURI(t)),t}).join("")}function S(t){var e=[],n=j(t.url,t.params,e);return e.forEach(function(e){delete t.params[e]}),n}function k(t,e){var n,o=this||{},i=t;return d(t)&&(i={url:t,params:e}),i=_({},k.options,o.$options,i),k.transforms.forEach(function(t){n=R(t,n,o.$vm)}),n(i)}function R(t,e,n){return function(o){return t.call(n,o,e)}}function A(t,e,n){var o,i=dt(e),r=v(e);b(e,function(e,s){o=m(e)||dt(e),n&&(s=n+"["+(r||o?s:"")+"]"),!n&&i?t.add(e.name,e.value):o?A(t,e,s):t.add(s,e)})}function M(t){return new i(function(e){var n=new XDomainRequest,o=function(o){var i=o.type,r=0;"load"===i?r=200:"error"===i&&(r=500),e(t.respondWith(n.responseText,{status:r}))};t.abort=function(){return n.abort()},n.open(t.method,t.getUrl()),n.timeout=0,n.onload=o,n.onerror=o,n.ontimeout=o,n.onprogress=function(){},n.send(t.getBody())})}function L(t,e){!h(t.crossOrigin)&&F(t)&&(t.crossOrigin=!0),t.crossOrigin&&(gt||(t.client=M),delete t.emulateHTTP),e()}function F(t){var e=k.parse(k(t));return e.protocol!==vt.protocol||e.host!==vt.host}function B(t,e){y(t.body)?t.headers.delete("Content-Type"):(m(t.body)||dt(t.body))&&(t.emulateJSON?(t.body=k.params(t.body),t.headers.set("Content-Type","application/x-www-form-urlencoded")):t.body=JSON.stringify(t.body)),e(function(t){return Object.defineProperty(t,"data",{get:function(){return this.body},set:function(t){this.body=t}}),t.bodyText?w(t.text(),function(e){var n=t.headers.get("Content-Type");if(d(n)&&0===n.indexOf("application/json"))try{t.body=JSON.parse(e)}catch(e){t.body=null}else t.body=e;return t}):t})}function H(t){return new i(function(e){var n,o,i=t.jsonp||"callback",r="_jsonp"+Math.random().toString(36).substr(2),s=null;n=function(n){var i=n.type,a=0;"load"===i&&null!==s?a=200:"error"===i&&(a=500),e(t.respondWith(s,{status:a})),delete window[r],document.body.removeChild(o)},t.params[i]=r,window[r]=function(t){s=JSON.stringify(t)},o=document.createElement("script"),o.src=t.getUrl(),o.type="text/javascript",o.async=!0,o.onload=n,o.onerror=n,document.body.appendChild(o)})}function V(t,e){"JSONP"==t.method&&(t.client=H),e(function(e){if("JSONP"==t.method)return w(e.json(),function(t){return e.body=t,e})})}function J(t,e){p(t.before)&&t.before.call(this,t),e()}function X(t,e){t.emulateHTTP&&/^(PUT|PATCH|DELETE)$/i.test(t.method)&&(t.headers.set("X-HTTP-Method-Override",t.method),t.method="POST"),e()}function z(t,e){b(ht({},nt.headers.common,t.crossOrigin?{}:nt.headers.custom,nt.headers[l(t.method)]),function(e,n){t.headers.has(n)||t.headers.set(n,e)}),e()}function Y(t,e){var n;t.timeout&&(n=setTimeout(function(){t.abort()},t.timeout)),e(function(t){clearTimeout(n)})}function G(t){return new i(function(e){var n=new XMLHttpRequest,o=function(o){var i=t.respondWith("response"in n?n.response:n.responseText,{status:1223===n.status?204:n.status,statusText:1223===n.status?"No Content":u(n.statusText)});b(u(n.getAllResponseHeaders()).split("\n"),function(t){i.headers.append(t.slice(0,t.indexOf(":")),t.slice(t.indexOf(":")+1))}),e(i)};t.abort=function(){return n.abort()},t.progress&&("GET"===t.method?n.addEventListener("progress",t.progress):/^(POST|PUT)$/i.test(t.method)&&n.upload.addEventListener("progress",t.progress)),n.open(t.method,t.getUrl(),!0),"responseType"in n&&(n.responseType="blob"),!0===t.credentials&&(n.withCredentials=!0),t.headers.forEach(function(t,e){n.setRequestHeader(e,t)}),n.timeout=0,n.onload=o,n.onerror=o,n.send(t.getBody())})}function W(t){function e(e){return new i(function(i){function a(){n=o.pop(),p(n)?n.call(t,e,c):(s("Invalid interceptor of type "+typeof n+", must be a function"),c())}function c(e){if(p(e))r.unshift(e);else if(m(e))return r.forEach(function(n){e=w(e,function(e){return n.call(t,e)||e})}),void w(e,i);a()}a()},t)}var n,o=[K],r=[];return m(t)||(t=null),e.use=function(t){o.push(t)},e}function K(t,e){e((t.client||G)(t))}function Q(t,e){return Object.keys(t).reduce(function(t,n){return l(e)===l(n)?n:t},null)}function Z(t){if(/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return u(t)}function tt(t){return new i(function(e){var n=new FileReader;n.readAsText(t),n.onload=function(){e(n.result)}})}function et(t){return 0===t.type.indexOf("text")||-1!==t.type.indexOf("json")}function nt(t){var e=this||{},n=W(e.$vm);return x(t||{},e.$options,nt.options),nt.interceptors.forEach(function(t){n.use(t)}),n(new bt(t)).then(function(t){return t.ok?t:i.reject(t)},function(t){return t instanceof Error&&a(t),i.reject(t)})}function ot(t,e,n,o){var i=this||{},r={};return n=ht({},ot.actions,n),b(n,function(n,s){n=_({url:t,params:ht({},e)},o,n),r[s]=function(){return(i.$http||nt)(it(n,arguments))}}),r}function it(t,e){var n,o=ht({},t),i={};switch(e.length){case 2:i=e[0],n=e[1];break;case 1:/^(POST|PUT|PATCH)$/i.test(o.method)?n=e[0]:i=e[0];break;case 0:break;default:throw"Expected up to 4 arguments [params, body], got "+e.length+" arguments"}return o.body=n,o.params=ht({},o.params,i),o}function rt(t){rt.installed||(r(t),t.url=k,t.http=nt,t.resource=ot,t.Promise=i,Object.defineProperties(t.prototype,{$url:{get:function(){return T(t.url,this,this.$options.url)}},$http:{get:function(){return T(t.http,this,this.$options.http)}},$resource:{get:function(){return t.resource.bind(this)}},$promise:{get:function(){var e=this;return function(n){return new t.Promise(n,e)}}}}))}/*!
 * vue-resource v1.0.3
 * https://github.com/vuejs/vue-resource
 * Released under the MIT License.
 */
var st=2;o.reject=function(t){return new o(function(e,n){n(t)})},o.resolve=function(t){return new o(function(e,n){e(t)})},o.all=function(t){return new o(function(e,n){var i=0,r=[];0===t.length&&e(r);for(var s=0;s<t.length;s+=1)o.resolve(t[s]).then(function(n){return function(o){r[n]=o,(i+=1)===t.length&&e(r)}}(s),n)})},o.race=function(t){return new o(function(e,n){for(var i=0;i<t.length;i+=1)o.resolve(t[i]).then(e,n)})};var at=o.prototype;at.resolve=function(t){var e=this;if(e.state===st){if(t===e)throw new TypeError("Promise settled with itself.");var n=!1;try{var o=t&&t.then;if(null!==t&&"object"==typeof t&&"function"==typeof o)return void o.call(t,function(t){n||e.resolve(t),n=!0},function(t){n||e.reject(t),n=!0})}catch(t){return void(n||e.reject(t))}e.state=0,e.value=t,e.notify()}},at.reject=function(t){var e=this;if(e.state===st){if(t===e)throw new TypeError("Promise settled with itself.");e.state=1,e.value=t,e.notify()}},at.notify=function(){var t=this;c(function(){if(t.state!==st)for(;t.deferred.length;){var e=t.deferred.shift(),n=e[0],o=e[1],i=e[2],r=e[3];try{0===t.state?i("function"==typeof n?n.call(void 0,t.value):t.value):1===t.state&&("function"==typeof o?i(o.call(void 0,t.value)):r(t.value))}catch(t){r(t)}}})},at.then=function(t,e){var n=this;return new o(function(o,i){n.deferred.push([t,e,o,i]),n.notify()})},at.catch=function(t){return this.then(void 0,t)},"undefined"==typeof Promise&&(window.Promise=o),i.all=function(t,e){return new i(Promise.all(t),e)},i.resolve=function(t,e){return new i(Promise.resolve(t),e)},i.reject=function(t,e){return new i(Promise.reject(t),e)},i.race=function(t,e){return new i(Promise.race(t),e)};var ct=i.prototype;ct.bind=function(t){return this.context=t,this},ct.then=function(t,e){return t&&t.bind&&this.context&&(t=t.bind(this.context)),e&&e.bind&&this.context&&(e=e.bind(this.context)),new i(this.promise.then(t,e),this.context)},ct.catch=function(t){return t&&t.bind&&this.context&&(t=t.bind(this.context)),new i(this.promise.catch(t),this.context)},ct.finally=function(t){return this.then(function(e){return t.call(this),e},function(e){return t.call(this),Promise.reject(e)})};var ut=!1,lt={},ft=[].slice,dt=Array.isArray,ht=Object.assign||C,pt=document.documentMode,mt=document.createElement("a");k.options={url:"",root:null,params:{}},k.transforms=[S,O,E],k.params=function(t){var e=[],n=encodeURIComponent;return e.add=function(t,e){p(e)&&(e=e()),null===e&&(e=""),this.push(n(t)+"="+n(e))},A(e,t),e.join("&").replace(/%20/g,"+")},k.parse=function(t){return pt&&(mt.href=t,t=mt.href),mt.href=t,{href:mt.href,protocol:mt.protocol?mt.protocol.replace(/:$/,""):"",port:mt.port,host:mt.host,hostname:mt.hostname,pathname:"/"===mt.pathname.charAt(0)?mt.pathname:"/"+mt.pathname,search:mt.search?mt.search.replace(/^\?/,""):"",hash:mt.hash?mt.hash.replace(/^#/,""):""}};var vt=k.parse(location.href),gt="withCredentials"in new XMLHttpRequest,yt=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},wt=function(){function t(e){var n=this;yt(this,t),this.map={},b(e,function(t,e){return n.append(e,t)})}return t.prototype.has=function(t){return null!==Q(this.map,t)},t.prototype.get=function(t){var e=this.map[Q(this.map,t)];return e?e[0]:null},t.prototype.getAll=function(t){return this.map[Q(this.map,t)]||[]},t.prototype.set=function(t,e){this.map[Z(Q(this.map,t)||t)]=[u(e)]},t.prototype.append=function(t,e){var n=this.getAll(t);n.length?n.push(u(e)):this.set(t,e)},t.prototype.delete=function(t){delete this.map[Q(this.map,t)]},t.prototype.forEach=function(t,e){var n=this;b(this.map,function(o,i){b(o,function(o){return t.call(e,o,i,n)})})},t}(),Tt=function(){function t(e,n){var o=n.url,i=n.headers,r=n.status,s=n.statusText;yt(this,t),this.url=o,this.ok=r>=200&&r<300,this.status=r||0,this.statusText=s||"",this.headers=new wt(i),this.body=e,d(e)?this.bodyText=e:g(e)&&(this.bodyBlob=e,et(e)&&(this.bodyText=tt(e)))}return t.prototype.blob=function(){return w(this.bodyBlob)},t.prototype.text=function(){return w(this.bodyText)},t.prototype.json=function(){return w(this.text(),function(t){return JSON.parse(t)})},t}(),bt=function(){function t(e){yt(this,t),this.body=null,this.params={},ht(this,e,{method:f(e.method||"GET")}),this.headers instanceof wt||(this.headers=new wt(this.headers))}return t.prototype.getUrl=function(){return k(this)},t.prototype.getBody=function(){return this.body},t.prototype.respondWith=function(t,e){return new Tt(t,ht(e||{},{url:this.getUrl()}))},t}(),_t={"X-Requested-With":"XMLHttpRequest"},xt={Accept:"application/json, text/plain, */*"},Ct={"Content-Type":"application/json;charset=utf-8"};nt.options={},nt.headers={put:Ct,post:Ct,patch:Ct,delete:Ct,custom:_t,common:xt},nt.interceptors=[J,Y,X,B,V,z,L],["get","delete","head","jsonp"].forEach(function(t){nt[t]=function(e,n){return this(ht(n||{},{url:e,method:t}))}}),["post","put","patch"].forEach(function(t){nt[t]=function(e,n,o){return this(ht(o||{},{url:e,method:t,body:n}))}}),ot.actions={get:{method:"GET"},save:{method:"POST"},query:{method:"GET"},update:{method:"PUT"},remove:{method:"DELETE"},delete:{method:"DELETE"}},"undefined"!=typeof window&&window.Vue&&window.Vue.use(rt),t.exports=rt},function(t,e,n){function o(t){n(19)}var i=n(0)(n(5),n(36),o,null,null);t.exports=i.exports},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),i=n.n(o);e.default={name:"app",components:{Home:i.a},created:function(){}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"imgView",data:function(){return{title:"imgView"}},props:["imgUrl"],methods:{close:function(){console.log("close"),this.$emit("close")}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"loading",data:function(){return{msg:"loading..."}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"topBar",data:function(){return{title:"Gank Daily"}},props:["date","count"],methods:{goAbout:function(){this.$router.push({name:"about"})},goHome:function(){this.$router.push({name:"home"})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"topBar",data:function(){return{title:"topTip",msg:this.message}},props:["message"],methods:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"topBar",data:function(){return{title:"daily"}},props:["viewData"],methods:{goTo:function(t){window.location.href=t}},created:function(){console.log(this.viewData)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(25),i=n.n(o);e.default={name:"topBar",data:function(){return{title:"topTip",fuliData:this.viewData,imgUrl:"",isShowImg:!1,scrollTop:""}},props:["viewData"],methods:{showImg:function(t){this.isShowImg||(this.afterOpen(),this.imgUrl=t,this.isShowImg=!0)},closeView:function(){this.isShowImg=!1,this.beforeClose()},afterOpen:function(){this.scrollTop=document.scrollingElement.scrollTop,document.body.classList.add("modal-open"),document.body.style.top=-this.scrollTop+"px"},beforeClose:function(){this.scrollTop,document.body.classList.remove("modal-open"),document.scrollingElement.scrollTop=this.scrollTop,window.scroll(0,this.scrollTop)}},components:{imgView:i.a},created:function(){}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"topBar",data:function(){return{title:"iOS"}},props:["viewData"],methods:{goTo:function(t){window.location.href=t}},created:function(){}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(41),i=n.n(o),r=n(27),s=n.n(r),a=n(26),c=n.n(a),u=n(28),l=n.n(u),f=n(30),d=n.n(f),h=n(29),p=n.n(h),m=n(31),v=n.n(m);e.default={name:"home",components:{topBar:s.a,loading:c.a,topTip:l.a,viewFl:d.a,viewDaily:p.a,viewIOS:v.a,MugenScroll:i.a},data:function(){return{isLoading:!1,isloadmore:!1,homeData:{},viewData:{},startY:"",endY:"",nav:["all","Android","iOS","休息视频","福利","拓展资源","前端","瞎推荐","App"],showR:!0,selectedDate:"",dateTime:{year:"",month:"",day:""},today:"",showDate:"",isToday:!0,isToolbar:!1,reqName:"",sampleUrl:"https://gank.io/api/data/",reqUrl:"",itemCount:"10",pageNo:"1",msgText:""}},watch:{$route:"fetchData"},created:function(){this.fetchData()},filters:{moment:function(t){return t?t.split("T")[0]+" "+t.split("T")[1].split(".")[0]:t},resizeSM:function(t){return t+"?imageView2/0/w/100"},resizeMD:function(t){return t+"?imageView2/0/w/375"}},methods:{changeType:function(t){t!=this.reqName&&(this.reqUrl=this.sampleUrl+t+"/"+this.itemCount+"/",this.viewData={},this.pageNo=1,this.getInfoType(),this.reqName=t)},changeDaily:function(){this.reqName="",this.homeData={},this.pageNo=1,this.getInfo()},loadMore:function(){self=this,self.isloadmore=!0,console.log(this.reqUrl),""!=this.reqUrl&&(this.pageNo++,this.getInfoType())},getInfo:function(){this.isToolbar=!1;var t="https://gank.io/api/day/"+this.dateTime.year+"/"+ +this.dateTime.month+"/"+this.dateTime.day;this.isLoading=!0,this.$http.get(t).then(function(t){if(!t.error&&(this.homeData=t.data,this.homeData.category.length<1&&(this.isToday=!1,this.setYesterDay(this.dateTime.year,this.dateTime.month,this.dateTime.day),this.getInfo()),this.isLoading=!1,!this.isToday)){this.msgText="暂无今日数据, 将加载"+this.selectedDate+"的内容";var e=this;setTimeout(function(){e.isToday=!0},1800)}},function(t){console.log("网络链接有问题,3s后将自动重试");var e=this;setTimeout(function(){e.getInfo()},3e3)})},getInfoType:function(){this.isToolbar=!1;var t=this.reqUrl+this.pageNo;this.isLoading=!0,this.$http.get(t).then(function(t){if(!t.error){if(this.pageNo>1){this.viewData.results.concat(t.data.results);for(var e=0;e<t.data.results.length;e++)this.viewData.results.push(t.data.results[e]);console.log(this.viewData.results)}else this.viewData=t.data;this.isLoading=!1,this.isLoadmore=!1}},function(t){console.log("网络链接有问题,3s后将自动重试");var e=this;setTimeout(function(){e.getInfo()},3e3)})},fetchData:function(){this.setDateTime(),this.getInfo()},setDateTime:function(){var t=new Date;this.dateTime.year=t.getFullYear(),this.dateTime.month=t.getMonth()+1,this.dateTime.day=t.getDate(),this.setShowDate(this.dateTime.year,this.dateTime.month,this.dateTime.day)},setYesterDay:function(t,e,n){1==e&&1==n?(this.dateTime.year--,this.dateTime.month=12,this.dateTime.day=31):1==n?2==e||4==e||8==e||9==e||11==e?(this.dateTime.month--,this.dateTime.day=31):3==e?t%4==0||t%400==0?(this.dateTime.month--,this.dateTime.day=29):(this.dateTime.month--,this.dateTime.day=28):(this.dateTime.month--,this.dateTime.day=30):this.dateTime.day--,this.setShowDate(this.dateTime.year,this.dateTime.month,this.dateTime.day)},setShowDate:function(t,e,n){var o,i;o=e<10&&e.length<2?"0"+e:e,i=n<10&&n.length<2?"0"+n:n,this.selectedDate=t+"-"+o+"-"+i},clickDateBtn:function(){document.getElementById("selectDate").focus()},goTo:function(t){window.location.href=t},refresh:function(){if(self=this,this.isToolbar){var t=this.selectedDate.split("-");this.dateTime.year=t[0],this.dateTime.month=t[1],this.dateTime.day=t[2],self.reqName?this.isToolbar=!1:self.getInfo(),this.isToolbar=!1}else this.isToolbar=!0},toTop:function(){window.scrollTo(0,0)}},mounted:function(){self=this,PullToRefresh.init({mainElement:"#mainUl",onRefresh:function(){self.reqName?(self.pageNo=1,self.getInfoType()):self.getInfo()}})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(4),i=n(2),r=n.n(i),s=n(3),a=n.n(s),c=n(1),u=n.n(c);o.a.use(r.a),o.a.filter("moment",function(t){return t?t.split("T")[0]+" "+t.split("T")[1].split(".")[0]:t}),o.a.filter("resizeMD",function(t){return t+"?imageView2/0/w/375"}),o.a.config.debug=!0,o.a.http.options.emulateJSON=!0,o.a.config.productionTip=!1,new o.a({el:"#app",template:"<App/>",components:{App:a.a,home:u.a}})},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e,n){function o(t){n(16)}var i=n(0)(n(6),n(33),o,"data-v-2ab809cc",null);t.exports=i.exports},function(t,e,n){function o(t){n(21)}var i=n(0)(n(7),n(38),o,"data-v-93bcb43e",null);t.exports=i.exports},function(t,e,n){function o(t){n(23)}var i=n(0)(n(8),n(40),o,"data-v-fe10772e",null);t.exports=i.exports},function(t,e,n){function o(t){n(18)}var i=n(0)(n(9),n(35),o,"data-v-46b284f1",null);t.exports=i.exports},function(t,e,n){function o(t){n(17)}var i=n(0)(n(10),n(34),o,"data-v-3c16f048",null);t.exports=i.exports},function(t,e,n){function o(t){n(20)}var i=n(0)(n(11),n(37),o,"data-v-60c9d893",null);t.exports=i.exports},function(t,e,n){function o(t){n(15)}var i=n(0)(n(12),n(32),o,"data-v-27901290",null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{attrs:{id:"mainUl"}},t._l(t.viewData.results,function(e){return n("li",{staticClass:"card",on:{click:function(n){t.goTo(e.url)}}},[n("div",{staticClass:"card-info"},["福利"!=e.type?n("p",{staticClass:"card-desc"},[t._v(t._s(e.desc))]):t._e(),t._v(" "),e.type?n("p",{staticClass:"card-from"},[t._v("\n        类型: "+t._s(e.type)+"\n      ")]):t._e(),t._v(" "),n("p",{staticClass:"card-from"},[t._v("\n        来源: "+t._s(e.source)+"\n      ")]),t._v(" "),n("p",{staticClass:"card-author"},[t._v("\n        作者: "+t._s(e.who)+"\n      ")])])])}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"imgBox",on:{click:function(e){t.close()}}},[n("img",{staticClass:"viewImg",attrs:{src:t.imgUrl,alt:""}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{attrs:{id:"mainUl"}},t._l(t.viewData.results,function(e,o){return n("li",{staticClass:"card"},[n("div",{staticClass:"card-title"},[t._v(t._s(o))]),t._v(" "),n("ul",t._l(e,function(e){return n("li",{staticClass:"card-info",on:{click:function(n){t.goTo(e.url)}}},["福利"!=e.type?n("p",{staticClass:"card-desc"},[t._v(t._s(e.desc))]):t._e(),t._v(" "),"福利"==e.type?n("div",[n("img",{staticClass:"fuli",attrs:{src:t._f("resizeMD")(e.url),alt:"FULI PIC"}})]):t._e(),t._v(" "),n("p",{staticClass:"card-from"},[t._v("\n          来源: "+t._s(e.source)+"\n        ")]),t._v(" "),n("p",{staticClass:"card-author"},[t._v("\n          作者: "+t._s(e.who)+"\n        ")])])}))])}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"topTip"},[t._v(t._s(t.msg))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Home")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{attrs:{id:"typeUl"}},t._l(t.viewData.results,function(e,o){return n("li",{staticClass:"card",on:{click:function(n){t.showImg(e.url)}}},[n("div",{staticClass:"fuli-card"},[n("img",{staticClass:"fuli fuli-img",attrs:{src:t._f("resizeMD")(e.url),alt:"FULI PIC"}}),t._v(" "),n("p",{staticClass:"card-from"},[t._v("\n        来源: "+t._s(e.source)+"\n      ")]),t._v(" "),n("p",{staticClass:"card-author"},[t._v("\n        作者: "+t._s(e.who)+"\n      ")]),t._v(" "),n("p",{staticClass:"card-date"},[t._v("发布日期: "+t._s(t._f("moment")(e.publishedAt)))])])])})),t._v(" "),n("transition",{attrs:{name:"fade"}},[n("img-view",{directives:[{name:"show",rawName:"v-show",value:t.isShowImg,expression:"isShowImg"}],attrs:{imgUrl:t.imgUrl},on:{close:t.closeView,click:function(e){t.showImg()}}})],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading"},[n("div",{staticClass:"loader"},[n("div",{staticClass:"ball"},[n("div"),t._v(" "),n("div"),t._v(" "),n("div")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("transition",{attrs:{name:"fade"}},[n("loading",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}]})],1),t._v(" "),n("topBar",{attrs:{date:t.selectedDate}}),t._v(" "),n("transition",{attrs:{name:"transY"}},[n("nav",{directives:[{name:"show",rawName:"v-show",value:t.isToolbar,expression:"isToolbar"}]},[n("ul",{staticClass:"nav"},[n("li",{staticClass:"li",class:{active:""==t.reqName},on:{click:function(e){t.changeDaily()}}},[t._v("\n          daily\n        ")]),t._v(" "),t._l(t.nav,function(e,o,i){return n("li",{staticClass:"li",class:{active:e==t.reqName},on:{click:function(n){t.changeType(e)}}},[t._v("\n          "+t._s(e)+"\n        ")])})],2)])]),t._v(" "),n("transition",{attrs:{name:"upFade"}},[t.isToday?t._e():n("topTip",{attrs:{message:t.msgText}})],1),t._v(" "),n("div",[t.reqName?t._e():n("view-daily",{attrs:{viewData:t.homeData}}),t._v(" "),"iOS"==t.reqName||"Android"==t.reqName||"all"==t.reqName||"休息视频"==t.reqName||"拓展资源"==t.reqName||"瞎推荐"==t.reqName||"前端"==t.reqName||"App"==t.reqName?n("view-iOS",{attrs:{viewData:t.viewData}}):t._e(),t._v(" "),"福利"==t.reqName?n("view-fl",{attrs:{viewData:t.viewData}}):t._e(),t._v(" "),n("mugen-scroll",{attrs:{handler:t.loadMore}}),t._v(" "),n("div",[n("transition",{attrs:{name:"transX"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isToolbar&&""==t.reqName,expression:"isToolbar && reqName == ''"}],staticClass:"toolbar",on:{click:t.clickDateBtn}},[n("p",[t._v(t._s(t.selectedDate))])])]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedDate,expression:"selectedDate"}],staticClass:"hidden dateInput",attrs:{id:"selectDate",type:"date"},domProps:{value:t.selectedDate},on:{input:function(e){e.target.composing||(t.selectedDate=e.target.value)}}}),t._v(" "),n("transition",{attrs:{name:"up"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isToolbar,expression:"!isToolbar"}],staticClass:"random-button",on:{click:t.refresh}},[n("span",{staticClass:"icon iconfont icon-daohang"})])]),t._v(" "),n("transition",{attrs:{name:"up"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isToolbar,expression:"isToolbar"}],staticClass:"random-button",on:{click:t.refresh}},[""!=t.reqName?n("span",{staticClass:"icon iconfont icon-guanbi"}):t._e(),t._v(" "),""==t.reqName?n("span",{staticClass:"icon iconfont icon-guanbi"}):t._e()])]),t._v(" "),n("transition",{attrs:{name:"down"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isToolbar,expression:"isToolbar"}],staticClass:"toTop-button iconfont icon-mp-top",on:{click:function(e){t.toTop()}}})])],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"top-bar"},[n("p",{staticClass:"top-title"},[n("span",{on:{click:t.goHome}},[t._v(t._s(t.title))]),t._v(" "),t.date?n("span",{staticClass:"date"},[t._v(t._s(t.date)+" ")]):t._e()])])},staticRenderFns:[]}}],[14]);
//# sourceMappingURL=app.82295ea4c98a0442e191.js.map