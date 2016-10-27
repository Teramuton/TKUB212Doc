!function(e){function t(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.type="text/javascript",n.charset="utf-8",n.src=u.p+""+e+"."+x+".hot-update.js",t.appendChild(n)}function n(e){if("undefined"==typeof XMLHttpRequest)return e(new Error("No browser support"));try{var t=new XMLHttpRequest,n=u.p+""+x+".hot-update.json";t.open("GET",n,!0),t.timeout=1e4,t.send(null)}catch(t){return e(t)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)e(new Error("Manifest request to "+n+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)e(new Error("Manifest request to "+n+" failed."));else{try{var p=JSON.parse(t.responseText)}catch(t){return void e(t)}e(null,p)}}}function p(e){function t(e,t){"ready"===w&&i("prepare"),O++,u.e(e,function(){function n(){O--,"prepare"===w&&(E[e]||a(e),0===O&&0===_&&g())}try{t.call(null,p)}finally{n()}})}var n=T[e];if(!n)return u;var p=function(t){return n.hot.active?T[t]?(T[t].parents.indexOf(e)<0&&T[t].parents.push(e),n.children.indexOf(t)<0&&n.children.push(t)):k=[e]:(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),k=[]),u(t)};for(var o in u)Object.prototype.hasOwnProperty.call(u,o)&&(l?Object.defineProperty(p,o,function(e){return{configurable:!0,enumerable:!0,get:function(){return u[e]},set:function(t){u[e]=t}}}(o)):p[o]=u[o]);return l?Object.defineProperty(p,"e",{enumerable:!0,value:t}):p.e=t,p}function o(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],active:!0,accept:function(e,n){if("undefined"==typeof e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var p=0;p<e.length;p++)t._acceptedDependencies[e[p]]=n;else t._acceptedDependencies[e]=n},decline:function(e){if("undefined"==typeof e)t._selfDeclined=!0;else if("number"==typeof e)t._declinedDependencies[e]=!0;else for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:s,apply:f,status:function(e){return e?void b.push(e):w},addStatusHandler:function(e){b.push(e)},removeStatusHandler:function(e){var t=b.indexOf(e);t>=0&&b.splice(t,1)},data:v[e]};return t}function i(e){w=e;for(var t=0;t<b.length;t++)b[t].call(null,e)}function r(e){var t=+e+""===e;return t?+e:e}function s(e,t){if("idle"!==w)throw new Error("check() is only allowed in idle status");"function"==typeof e?(h=!1,t=e):(h=e,t=t||function(e){if(e)throw e}),i("check"),n(function(e,n){if(e)return t(e);if(!n)return i("idle"),void t(null,null);H={},D={},E={};for(var p=0;p<n.c.length;p++)D[n.c[p]]=!0;m=n.h,i("prepare"),j=t,y={};var o=0;a(o),"prepare"===w&&0===O&&0===_&&g()})}function c(e,t){if(D[e]&&H[e]){H[e]=!1;for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(y[n]=t[n]);0===--_&&0===O&&g()}}function a(e){D[e]?(H[e]=!0,_++,t(e)):E[e]=!0}function g(){i("ready");var e=j;if(j=null,e)if(h)f(h,e);else{var t=[];for(var n in y)Object.prototype.hasOwnProperty.call(y,n)&&t.push(r(n));e(null,t)}}function f(t,n){function p(e){for(var t=[e],n={},p=t.slice();p.length>0;){var i=p.pop(),e=T[i];if(e&&!e.hot._selfAccepted){if(e.hot._selfDeclined)return new Error("Aborted because of self decline: "+i);if(0===i)return;for(var r=0;r<e.parents.length;r++){var s=e.parents[r],c=T[s];if(c.hot._declinedDependencies[i])return new Error("Aborted because of declined dependency: "+i+" in "+s);t.indexOf(s)>=0||(c.hot._acceptedDependencies[i]?(n[s]||(n[s]=[]),o(n[s],[i])):(delete n[s],t.push(s),p.push(s)))}}}return[t,n]}function o(e,t){for(var n=0;n<t.length;n++){var p=t[n];e.indexOf(p)<0&&e.push(p)}}if("ready"!==w)throw new Error("apply() is only allowed in ready status");"function"==typeof t?(n=t,t={}):t&&"object"==typeof t?n=n||function(e){if(e)throw e}:(t={},n=n||function(e){if(e)throw e});var s={},c=[],a={};for(var g in y)if(Object.prototype.hasOwnProperty.call(y,g)){var f=r(g),d=p(f);if(!d){if(t.ignoreUnaccepted)continue;return i("abort"),n(new Error("Aborted because "+f+" is not accepted"))}if(d instanceof Error)return i("abort"),n(d);a[f]=y[f],o(c,d[0]);for(var f in d[1])Object.prototype.hasOwnProperty.call(d[1],f)&&(s[f]||(s[f]=[]),o(s[f],d[1][f]))}for(var l=[],j=0;j<c.length;j++){var f=c[j];T[f]&&T[f].hot._selfAccepted&&l.push({module:f,errorHandler:T[f].hot._selfAccepted})}i("dispose");for(var h=c.slice();h.length>0;){var f=h.pop(),b=T[f];if(b){for(var _={},O=b.hot._disposeHandlers,E=0;E<O.length;E++){var H=O[E];H(_)}v[f]=_,b.hot.active=!1,delete T[f];for(var E=0;E<b.children.length;E++){var D=T[b.children[E]];if(D){var A=D.parents.indexOf(f);A>=0&&D.parents.splice(A,1)}}}}for(var f in s)if(Object.prototype.hasOwnProperty.call(s,f))for(var b=T[f],P=s[f],E=0;E<P.length;E++){var N=P[E],A=b.children.indexOf(N);A>=0&&b.children.splice(A,1)}i("apply"),x=m;for(var f in a)Object.prototype.hasOwnProperty.call(a,f)&&(e[f]=a[f]);var C=null;for(var f in s)if(Object.prototype.hasOwnProperty.call(s,f)){for(var b=T[f],P=s[f],S=[],j=0;j<P.length;j++){var N=P[j],H=b.hot._acceptedDependencies[N];S.indexOf(H)>=0||S.push(H)}for(var j=0;j<S.length;j++){var H=S[j];try{H(s)}catch(e){C||(C=e)}}}for(var j=0;j<l.length;j++){var q=l[j],f=q.module;k=[f];try{u(f)}catch(e){if("function"==typeof q.errorHandler)try{q.errorHandler(e)}catch(e){C||(C=e)}else C||(C=e)}}return C?(i("fail"),n(C)):(i("idle"),void n(null,c))}function u(t){if(T[t])return T[t].exports;var n=T[t]={exports:{},id:t,loaded:!1,hot:o(t),parents:k,children:[]};return e[t].call(n.exports,n,n.exports,p(t)),n.loaded=!0,n.exports}var d=this.webpackHotUpdate;this.webpackHotUpdate=function(e,t){c(e,t),d&&d(e,t)};var l=!1;try{Object.defineProperty({},"x",{get:function(){}}),l=!0}catch(e){}var j,y,m,h=!0,x="7484d8c4668655ba8c2d",v={},k=[],b=[],w="idle",_=0,O=0,E={},H={},D={},T={};return u.m=e,u.c=T,u.p="./",u.h=function(){return x},p(0)(0)}([function(e,t,n){n(83),n(2),n(1),n(82)},function(e,t){},function(e,t){},function(e,t,n){e.exports=n.p+"imgs/closebuilding1.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskcopy1.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskcopy10.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskcopy11.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskcopy12.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskcopy13.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskcopy14.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskcopy15.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskcopy16.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskcopy17.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskcopy18.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskcopy2.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskcopy3.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskcopy4.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskcopy5.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskcopy6.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskcopy7.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskcopy8.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskcopy9.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskscan1.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskscan2.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskscan3.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskscan4.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskscan5.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskscan6.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskscan7.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskscan8.jpg"},function(e,t,n){e.exports=n.p+"imgs/diskscan9.jpg"},function(e,t,n){e.exports=n.p+"imgs/fixcomputer1.jpg"},function(e,t,n){e.exports=n.p+"imgs/fprinter1.jpg"},function(e,t,n){e.exports=n.p+"imgs/fprinter2.jpg"},function(e,t,n){e.exports=n.p+"imgs/fprinter3.jpg"},function(e,t,n){e.exports=n.p+"imgs/ic_desktop_mac_36pt_2x.png"},function(e,t,n){e.exports=n.p+"imgs/ic_desktop_mac_black_36dp_2x.png"},function(e,t,n){e.exports=n.p+"imgs/index-1.png"},function(e,t,n){e.exports=n.p+"imgs/netcopy1.jpg"},function(e,t,n){e.exports=n.p+"imgs/netcopy10.jpg"},function(e,t,n){e.exports=n.p+"imgs/netcopy11.jpg"},function(e,t,n){e.exports=n.p+"imgs/netcopy12.jpg"},function(e,t,n){e.exports=n.p+"imgs/netcopy13.jpg"},function(e,t,n){e.exports=n.p+"imgs/netcopy14.jpg"},function(e,t,n){e.exports=n.p+"imgs/netcopy15.jpg"},function(e,t,n){e.exports=n.p+"imgs/netcopy16.jpg"},function(e,t,n){e.exports=n.p+"imgs/netcopy17.jpg"},function(e,t,n){e.exports=n.p+"imgs/netcopy18.jpg"},function(e,t,n){e.exports=n.p+"imgs/netcopy19.jpg"},function(e,t,n){e.exports=n.p+"imgs/netcopy2.jpg"},function(e,t,n){e.exports=n.p+"imgs/netcopy3.jpg"},function(e,t,n){e.exports=n.p+"imgs/netcopy4.jpg"},function(e,t,n){e.exports=n.p+"imgs/netcopy5.jpg"},function(e,t,n){e.exports=n.p+"imgs/netcopy6.jpg"},function(e,t,n){e.exports=n.p+"imgs/netcopy7.jpg"},function(e,t,n){e.exports=n.p+"imgs/netcopy8.jpg"},function(e,t,n){e.exports=n.p+"imgs/netcopy9.jpg"},function(e,t,n){e.exports=n.p+"imgs/printer1.jpg"},function(e,t,n){e.exports=n.p+"imgs/printer2.jpg"},function(e,t,n){e.exports=n.p+"imgs/printerip1.jpg"},function(e,t,n){e.exports=n.p+"imgs/printerip10.jpg"},function(e,t,n){e.exports=n.p+"imgs/printerip2.jpg"},function(e,t,n){e.exports=n.p+"imgs/printerip3.jpg"},function(e,t,n){e.exports=n.p+"imgs/printerip4.jpg"},function(e,t,n){e.exports=n.p+"imgs/printerip5.jpg"},function(e,t,n){e.exports=n.p+"imgs/printerip6.jpg"},function(e,t,n){e.exports=n.p+"imgs/printerip7.jpg"},function(e,t,n){e.exports=n.p+"imgs/printerip8.jpg"},function(e,t,n){e.exports=n.p+"imgs/printerip9.jpg"},function(e,t,n){e.exports=n.p+"imgs/rhd1.jpg"},function(e,t,n){e.exports=n.p+"imgs/rhd2.jpg"},function(e,t,n){e.exports=n.p+"imgs/rhd3.jpg"},function(e,t,n){e.exports=n.p+"imgs/rhd4.jpg"},function(e,t,n){e.exports=n.p+"imgs/system1.jpg"},function(e,t,n){e.exports=n.p+"imgs/system2.jpg"},function(e,t,n){e.exports=n.p+"imgs/system3.jpg"},function(e,t,n){e.exports=n.p+"imgs/system4.jpg"},function(e,t,n){e.exports=n.p+"imgs/system5.jpg"},function(e,t,n){e.exports=n.p+"imgs/system6.jpg"},function(e,t,n){e.exports=n.p+"imgs/system7.jpg"},function(e,t,n){e.exports=n.p+"imgs/system8.jpg"},function(e,t,n){e.exports=n.p+"imgs/system9.jpg"},function(e,t,n){function p(e){return n(o(e))}function o(e){return i[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var i={"./closebuilding1.jpg":3,"./diskcopy1.jpg":4,"./diskcopy10.jpg":5,"./diskcopy11.jpg":6,"./diskcopy12.jpg":7,"./diskcopy13.jpg":8,"./diskcopy14.jpg":9,"./diskcopy15.jpg":10,"./diskcopy16.jpg":11,"./diskcopy17.jpg":12,"./diskcopy18.jpg":13,"./diskcopy2.jpg":14,"./diskcopy3.jpg":15,"./diskcopy4.jpg":16,"./diskcopy5.jpg":17,"./diskcopy6.jpg":18,"./diskcopy7.jpg":19,"./diskcopy8.jpg":20,"./diskcopy9.jpg":21,"./diskscan1.jpg":22,"./diskscan2.jpg":23,"./diskscan3.jpg":24,"./diskscan4.jpg":25,"./diskscan5.jpg":26,"./diskscan6.jpg":27,"./diskscan7.jpg":28,"./diskscan8.jpg":29,"./diskscan9.jpg":30,"./fixcomputer1.jpg":31,"./fprinter1.jpg":32,"./fprinter2.jpg":33,"./fprinter3.jpg":34,"./ic_desktop_mac_36pt_2x.png":35,"./ic_desktop_mac_black_36dp_2x.png":36,"./index-1.png":37,"./netcopy1.jpg":38,"./netcopy10.jpg":39,"./netcopy11.jpg":40,"./netcopy12.jpg":41,"./netcopy13.jpg":42,"./netcopy14.jpg":43,"./netcopy15.jpg":44,"./netcopy16.jpg":45,"./netcopy17.jpg":46,"./netcopy18.jpg":47,"./netcopy19.jpg":48,"./netcopy2.jpg":49,"./netcopy3.jpg":50,"./netcopy4.jpg":51,"./netcopy5.jpg":52,"./netcopy6.jpg":53,"./netcopy7.jpg":54,"./netcopy8.jpg":55,"./netcopy9.jpg":56,"./printer1.jpg":57,"./printer2.jpg":58,"./printerip1.jpg":59,"./printerip10.jpg":60,"./printerip2.jpg":61,"./printerip3.jpg":62,"./printerip4.jpg":63,"./printerip5.jpg":64,"./printerip6.jpg":65,"./printerip7.jpg":66,"./printerip8.jpg":67,"./printerip9.jpg":68,"./rhd1.jpg":69,"./rhd2.jpg":70,"./rhd3.jpg":71,"./rhd4.jpg":72,"./system1.jpg":73,"./system2.jpg":74,"./system3.jpg":75,"./system4.jpg":76,"./system5.jpg":77,"./system6.jpg":78,"./system7.jpg":79,"./system8.jpg":80,"./system9.jpg":81};p.keys=function(){return Object.keys(i)},p.resolve=o,e.exports=p,p.id=82},function(e,t){!function(e){e(function(){function t(e){function t(e){return("0"+parseInt(e).toString(16)).slice(-2)}return/^#[0-9A-F]{6}$/i.test(e)?e:(e=e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/),null===e?"N/A":"#"+t(e[1])+t(e[2])+t(e[3]))}function n(){try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}}e(".dynamic-color .col").each(function(){e(this).children().each(function(){var n=e(this).css("background-color"),p=e(this).attr("class");e(this).html(t(n)+" "+p),(p.indexOf("darken")>=0||e(this).hasClass("black"))&&e(this).css("color","rgba(255,255,255,.9")})}),setTimeout(function(){var t=260,n=e(".toc-wrapper .table-of-contents").length?e(".toc-wrapper .table-of-contents").height():0,p=95,o=e("body > footer").first().length?e("body > footer").first().offset().top:0,i=o-p-n-t;e("nav").length?e(".toc-wrapper").pushpin({top:e("nav").height(),bottom:i}):e("#index-banner").length?e(".toc-wrapper").pushpin({top:e("#index-banner").height(),bottom:i}):e(".toc-wrapper").pushpin({top:0,bottom:i})},100);var p=e("#flow-toggle");p.click(function(){e("#flow-text-demo").children("p").each(function(){e(this).toggleClass("flow-text")})});var o=e("#container-toggle-button");o.click(function(){e("body .browser-window .container, .had-container").each(function(){e(this).toggleClass("had-container"),e(this).toggleClass("container"),e(this).hasClass("container")?o.text("Turn off Containers"):o.text("Turn on Containers")})}),n()&&e("#nav-mobile").css({overflow:"auto"}),e(".scrollspy").scrollSpy(),e(".button-collapse").sideNav(),e(".collapsible").collapsible(),e(".materialboxed").materialbox(),e(".parallax").parallax()})}(jQuery),function(e){var t,n={kitId:"xpl3urw",scriptTimeout:3e3,async:!0},p=e.documentElement,o=setTimeout(function(){p.className=p.className.replace(/\bwf-loading\b/g,"")+" wf-inactive"},n.scriptTimeout),i=e.createElement("script"),r=!1,s=e.getElementsByTagName("script")[0];p.className+=" wf-loading",i.src="https://use.typekit.net/"+n.kitId+".js",i.async=!0,i.onload=i.onreadystatechange=function(){if(t=this.readyState,!(r||t&&"complete"!=t&&"loaded"!=t)){r=!0,clearTimeout(o);try{Typekit.load(n)}catch(e){}}},s.parentNode.insertBefore(i,s)}(document)}]);