(self.webpackChunk=self.webpackChunk||[]).push([["2"],{6324:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"SandpackRuntime",{enumerable:!0,get:function(){return l}});var i,o=n("7224"),s=n("1431"),r=n("1684");n("8790");var a=function(){function e(e,t,n){var i=this;this.type=e,this.handleMessage=t,this.protocol=n,this._disposeMessageListener=this.protocol.channelListen(function(e){return(0,o._)(i,void 0,void 0,function(){var t,n,i,s;return(0,o.a)(this,function(o){switch(o.label){case 0:if(!(e.type===this.getTypeId()&&e.method))return[3,4];t=e,o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this.handleMessage(t)];case 2:return n=o.sent(),i={type:this.getTypeId(),msgId:t.msgId,result:n},this.protocol.dispatch(i),[3,4];case 3:return s=o.sent(),i={type:this.getTypeId(),msgId:t.msgId,error:{message:s.message}},this.protocol.dispatch(i),[3,4];case 4:return[2]}})})})}return e.prototype.getTypeId=function(){return"protocol-"+this.type},e.prototype.dispose=function(){this._disposeMessageListener()},e}(),c=function(){function e(e,t){this.globalListeners={},this.globalListenersCount=0,this.channelListeners={},this.channelListenersCount=0,this.channelId=Math.floor(1e6*Math.random()),this.frameWindow=e.contentWindow,this.origin=t,this.globalListeners=[],this.channelListeners=[],this.eventListener=this.eventListener.bind(this),"undefined"!=typeof window&&window.addEventListener("message",this.eventListener)}return e.prototype.cleanup=function(){window.removeEventListener("message",this.eventListener),this.globalListeners={},this.channelListeners={},this.globalListenersCount=0,this.channelListenersCount=0},e.prototype.register=function(){this.frameWindow&&this.frameWindow.postMessage({type:"register-frame",origin:document.location.origin,id:this.channelId},this.origin)},e.prototype.dispatch=function(e){this.frameWindow&&this.frameWindow.postMessage((0,o.h)({$id:this.channelId,codesandbox:!0},e),this.origin)},e.prototype.globalListen=function(e){var t=this;if("function"!=typeof e)return function(){};var n=this.globalListenersCount;return this.globalListeners[n]=e,this.globalListenersCount++,function(){delete t.globalListeners[n]}},e.prototype.channelListen=function(e){var t=this;if("function"!=typeof e)return function(){};var n=this.channelListenersCount;return this.channelListeners[n]=e,this.channelListenersCount++,function(){delete t.channelListeners[n]}},e.prototype.eventListener=function(e){if(e.source!==this.frameWindow)return;var t=e.data;if(!!t.codesandbox)Object.values(this.globalListeners).forEach(function(e){return e(t)}),t.$id===this.channelId&&Object.values(this.channelListeners).forEach(function(e){return e(t)})},e}(),d="https://"+(i="2.6.3",i.replace(/\./g,"-"))+"-sandpack.codesandbox.io/",l=function(e){function t(t,n,i){void 0===i&&(i={});var s=e.call(this,t,n,i)||this;if(s.getTranspilerContext=function(){return new Promise(function(e){var t=s.listen(function(n){"transpiler-context"===n.type&&(e(n.data),t())});s.dispatch({type:"get-transpiler-context"})})},s.bundlerURL=i.bundlerURL||d,i.teamId&&(s.bundlerURL=s.bundlerURL.replace("https://","https://"+i.teamId+"-")+"?cache="+Date.now()),s.bundlerState=void 0,s.errors=[],s.status="initializing","string"==typeof t){s.selector=t;var r=document.querySelector(t);(0,o.n)(r,"The element '"+t+"' was not found"),s.element=r,s.iframe=document.createElement("iframe"),s.initializeElement()}else s.element=t,s.iframe=t;return!s.iframe.getAttribute("sandbox")&&(s.iframe.setAttribute("sandbox","allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"),s.iframe.setAttribute("allow","accelerometer; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; clipboard-write;")),s.setLocationURLIntoIFrame(),s.iframeProtocol=new c(s.iframe,s.bundlerURL),s.unsubscribeGlobalListener=s.iframeProtocol.globalListen(function(e){"initialized"===e.type&&s.iframe.contentWindow&&(s.iframeProtocol.register(),s.options.fileResolver&&(s.fileResolverProtocol=new a("fs",function(e){return(0,o._)(s,void 0,void 0,function(){return(0,o.a)(this,function(t){if("isFile"===e.method)return[2,this.options.fileResolver.isFile(e.params[0])];if("readFile"===e.method)return[2,this.options.fileResolver.readFile(e.params[0])];throw Error("Method not supported")})})},s.iframeProtocol)),s.updateSandbox(s.sandboxSetup,!0))}),s.unsubscribeChannelListener=s.iframeProtocol.channelListen(function(e){switch(e.type){case"start":s.errors=[];break;case"status":s.status=e.status;break;case"action":"show-error"===e.action&&(s.errors=(0,o.i)((0,o.i)([],s.errors,!0),[(0,o.e)(e)],!1));break;case"state":s.bundlerState=e.state}}),s}return(0,o.g)(t,e),t.prototype.setLocationURLIntoIFrame=function(){var e,t=this.options.startRoute?new URL(this.options.startRoute,this.bundlerURL).toString():this.bundlerURL;null===(e=this.iframe.contentWindow)||void 0===e||e.location.replace(t),this.iframe.src=t},t.prototype.destroy=function(){this.unsubscribeChannelListener(),this.unsubscribeGlobalListener(),this.iframeProtocol.cleanup()},t.prototype.updateOptions=function(e){!(0,s.dequal)(this.options,e)&&(this.options=e,this.updateSandbox())},t.prototype.updateSandbox=function(e,t){void 0===e&&(e=this.sandboxSetup),this.sandboxSetup=(0,o.h)((0,o.h)({},this.sandboxSetup),e);var n,i,s,r,a=this.getFiles(),c=Object.keys(a).reduce(function(e,t){var n;return(0,o.h)((0,o.h)({},e),((n={})[t]={code:a[t].code,path:t},n))},{}),d=JSON.parse((0,o.b)(this.sandboxSetup.dependencies,this.sandboxSetup.devDependencies,this.sandboxSetup.entry));try{d=JSON.parse(a["/package.json"].code)}catch(e){console.error((0,o.c)("could not parse package.json file: "+e.message))}var l=Object.keys(a).reduce(function(e,t){var n;return(0,o.h)((0,o.h)({},e),((n={})[t]={content:a[t].code,path:t},n))},{});this.dispatch({type:"compile",codesandbox:!0,version:3,isInitializationCompile:t,modules:c,reactDevTools:this.options.reactDevTools,externalResources:this.options.externalResources||[],hasFileResolver:!!this.options.fileResolver,disableDependencyPreprocessing:this.sandboxSetup.disableDependencyPreprocessing,template:this.sandboxSetup.template||function(e,t){if(!e)return"static";var n=e.dependencies,i=void 0===n?{}:n,s=e.devDependencies,r=(0,o.i)((0,o.i)([],Object.keys(i),!0),Object.keys(void 0===s?{}:s),!0),a=Object.keys(t),c=["@adonisjs/framework","@adonisjs/core"];if(r.some(function(e){return c.indexOf(e)>-1}))return"adonis";var d=["nuxt","nuxt-edge","nuxt-ts","nuxt-ts-edge","nuxt3"];if(r.some(function(e){return d.indexOf(e)>-1}))return"nuxt";if(r.indexOf("next")>-1)return"next";var l=["apollo-server","apollo-server-express","apollo-server-hapi","apollo-server-koa","apollo-server-lambda","apollo-server-micro"];if(r.some(function(e){return l.indexOf(e)>-1}))return"apollo";if(r.indexOf("mdx-deck")>-1)return"mdx-deck";if(r.indexOf("gridsome")>-1)return"gridsome";if(r.indexOf("vuepress")>-1)return"vuepress";if(r.indexOf("ember-cli")>-1)return"ember";if(r.indexOf("sapper")>-1)return"sapper";if(r.indexOf("gatsby")>-1)return"gatsby";if(r.indexOf("quasar")>-1)return"quasar";if(r.indexOf("@docusaurus/core")>-1)return"docusaurus";if(r.indexOf("remix")>-1)return"remix";if(r.indexOf("astro")>-1)return"node";if(a.some(function(e){return e.endsWith(".re")}))return"reason";var u=["parcel-bundler","parcel"];if(r.some(function(e){return u.indexOf(e)>-1}))return"parcel";var p=["@dojo/core","@dojo/framework"];if(r.some(function(e){return p.indexOf(e)>-1}))return"@dojo/cli-create-app";if(r.indexOf("@nestjs/core")>-1||r.indexOf("@nestjs/common")>-1)return"nest";if(r.indexOf("react-styleguidist")>-1)return"styleguidist";if(r.indexOf("react-scripts")>-1)return"create-react-app";if(r.indexOf("react-scripts-ts")>-1)return"create-react-app-typescript";if(r.indexOf("@angular/core")>-1)return"angular-cli";if(r.indexOf("preact-cli")>-1)return"preact-cli";if(r.indexOf("@sveltech/routify")>-1||r.indexOf("@roxi/routify")>-1||r.indexOf("vite")>-1||r.indexOf("@frontity/core")>-1)return"node";if(r.indexOf("svelte")>-1)return"svelte";if(r.indexOf("vue")>-1)return"vue-cli";if(r.indexOf("cx")>-1)return"cxjs";var h=["express","koa","nodemon","ts-node","@tensorflow/tfjs-node","webpack-dev-server","snowpack"];if(r.some(function(e){return h.indexOf(e)>-1})||Object.keys(i).length>=50)return"node"}(d,l),showOpenInCodeSandbox:null===(n=this.options.showOpenInCodeSandbox)||void 0===n||n,showErrorScreen:null===(i=this.options.showErrorScreen)||void 0===i||i,showLoadingScreen:null===(s=this.options.showLoadingScreen)||void 0===s||s,skipEval:this.options.skipEval||!1,clearConsoleDisabled:!this.options.clearConsoleOnFirstCompile,logLevel:null!==(r=this.options.logLevel)&&void 0!==r?r:o.S.Info,customNpmRegistries:this.options.customNpmRegistries,teamId:this.options.teamId})},t.prototype.dispatch=function(e){"refresh"===e.type&&this.setLocationURLIntoIFrame(),this.iframeProtocol.dispatch(e)},t.prototype.listen=function(e){return this.iframeProtocol.channelListen(e)},t.prototype.getCodeSandboxURL=function(){var e=this.getFiles(),t=Object.keys(e).reduce(function(t,n){var i;return(0,o.h)((0,o.h)({},t),((i={})[n.replace("/","")]={content:e[n].code,isBinary:!1},i))},{});return fetch("https://codesandbox.io/api/v1/sandboxes/define?json=1",{method:"POST",body:JSON.stringify({files:t}),headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return{sandboxId:e.sandbox_id,editorUrl:"https://codesandbox.io/s/"+e.sandbox_id,embedUrl:"https://codesandbox.io/embed/"+e.sandbox_id}})},t.prototype.getFiles=function(){var e=this.sandboxSetup;return void 0===e.files["/package.json"]?(0,o.d)(e.files,e.dependencies,e.devDependencies,e.entry):this.sandboxSetup.files},t.prototype.initializeElement=function(){this.iframe.style.border="0",this.iframe.style.width=this.options.width||"100%",this.iframe.style.height=this.options.height||"100%",this.iframe.style.overflow="hidden",(0,o.n)(this.element.parentNode,"The given iframe does not have a parent."),this.element.parentNode.replaceChild(this.iframe,this.element)},t}(r.S)}}]);
//# sourceMappingURL=2.c3d340dddb683797.js.map