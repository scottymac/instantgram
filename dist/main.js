!function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=4)}([function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=[];t.push(e);for(;e.parentNode;)t.unshift(e.parentNode),e=e.parentNode;return t}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){t=t||window||document.documentElement;var a=e.getBoundingClientRect();return a.bottom>0&&a.right>0&&a.left<(t.innerWidth||t.clientWidth)&&a.top<(t.innerHeight||t.clientHeight)}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(5),o=(n=r)&&n.__esModule?n:{default:n};var i={de:"de-DE",pt:"pt-BR",en:"en-US","en-GB":"en-US"}[navigator.language];function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;try{if(o.default.langs.hasOwnProperty(t)||(t="en-US"),o.default.langs[t][e])return o.default.langs[t][e]}catch(a){return console.error("[instantgram]LOC error:",a),"ops, an error ocurred in localization system. Enter in https://github.com/theus/instantgram/issues/new and open an issue with this code: 'LOC_dont_found_str_neither_default:["+t+"->"+e+"]'\n    for more information open the console"}}console.info(s("helpers.localize_defaultlang").replace("${LANG_DEFAULT}",i)),t.default=s},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){for(var n=0;n<e.length;n++)t.call(a,n,e[n])}},function(e,t,a){"use strict";var n=m(a(2)),r=(m(a(6)),m(a(3))),o=m(a(1)),i=m(a(7)),s=m(a(8)),d=m(a(9)),u=m(a(10)),l=m(a(13)),c=m(a(14));function m(e){return e&&e.__esModule?e:{default:e}}var g={VERSION:"3.0.2",hostname:window.location.hostname,path:window.location.pathname,images:[],imagesOnViewPort:[],videos:document.querySelectorAll("video"),regexOriginalImage:/\/[a-z]+\d+[a-z]?x\d+[a-z]?/,regexMaxResImage:/\/[a-z]+[1080]+[a-z]?x[1080]+[a-z]?/,regexPath:/^\/p\//,regexHostname:/instagram\.com/,regexStoriesURI:/stories\/(.*)+/,regexURL:/([--:\w?@%&+~#=]*\.[a-z]{2,4}\/{0,2})((?:[?&](?:\w+)=(?:\w+))+|[--:\w?@%&+~#=]+)?/,foundByModule:null,probablyHasAGallery:{check:null,byModule:""},setImageLink:function(e){this.imageLinkBeforeParse=e,this.regexMaxResImage.test(e)?this.imageLink=e:this.imageLink=this.regexOriginalImage.test(e)?e.replace(this.regexOriginalImage,""):e},foundVideo:!1,foundImage:!1,imageLink:!1,imageLinkBeforeParse:!1,alertNotInInstagramPost:!1,context:{hasMsg:!1,msg:""}},f=document.images;(0,r.default)(f,(function(e,t){((0,i.default)(t)||2===f.length)&&(g.images.push(t),(0,o.default)(t)&&g.imagesOnViewPort.push(t))})),g.regexHostname.test(g.hostname)||window.alert((0,n.default)("index@alert_onlyWorks")),g.regexHostname.test(g.hostname)&&(!1===(0,c.default)(g)&&!1===(0,l.default)(g)&&!1===(0,d.default)(g)&&!1===(0,s.default)(g)&&!1===(0,u.default)(g)&&(g.context.hasMsg=!1),g.context.hasMsg&&window.alert((0,n.default)(g.context.msg)),!g.alertNotInInstagramPost||g.foundVideo||g.foundImage||window.alert((0,n.default)("index#program@alert_dontFound")))},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={langs:{"en-US":{"helpers.localize_defaultlang":"[instantgram] set language: ${LANG_DEFAULT} \n For more information about available languages please check http://theus.github.io/instantgram","modules.update@oudated_outdated":"[instantgram] is outdated. Please check http://theus.github.io/instantgram for available updates.","modules.update@oudated_localInfo":"[instantgram] Installed version: ${data.version} | New update: ${data.gitVersion}","modules.update@determineIfGetUpdateIsNecessary_contacting":"[instantgram] is looking for available updates…","modules.update@determineIfGetUpdateIsNecessary_updated":"[instantgram] updated your current version.","modules.update@determineIfGetUpdateIsNecessary_@alert_found":'[instantgram] found a new available update.\nPlease check <a href="http://theus.github.io/instantgram">http://theus.github.io/instantgram</a> to install it.',"index@alert_onlyWorks":"[instantgram] only works on instagram.com.","index#program#modal@alert_dontFound":"[instantgram] didn't find any image in this Instagram post. Please try to open the link in a new tab.","index#program#post@alert_dontFound":"Ops, [instantgram] couldn't find any image  :-(","index#program#screen@alert_dontFound":"[instantgram] found more than 1 image. Are you on a profile page? If yes, please open a single post first and open [instantgram] again.","index#program@alert_dontFound":"Ops, did you open any Instagram post? Like for example instagram.com/p/82jd828jd","index#program@alert_videoBlob":"If you're trying open a video, try enter on Instagram post page. Like for example instagram.com/p/82jd828jd. If you're already in it, try refreshing the page before running [instantgram] or open the post in a new tab. (this proccess is neccessary only for videos)"},"pt-BR":{"helpers.localize_defaultlang":"[instantgram] idioma configurado: ${LANG_DEFAULT} \npara mais informações sobre os idiomas suportados, acesse http://theus.github.io/instantgram","modules.update@oudated_outdated":"[instantgram] está desatualizado. Acesse http://theus.github.io/instantgram para atualizar","modules.update@oudated_localInfo":"[instantgram] versão local: ${data.version} | nova versão: ${data.gitVersion}","modules.update@determineIfGetUpdateIsNecessary_contacting":"[instantgram] está procurando atualizações...","modules.update@determineIfGetUpdateIsNecessary_updated":"[instantgram] informações locais atualizadas","modules.update@determineIfGetUpdateIsNecessary_@alert_found":"[instantgram] encontrou uma atualização.\n acesse theus.github.io/instantgram para atualizar","index@alert_onlyWorks":"[instantgram] somente funciona no instagram.com","index#program#modal@alert_dontFound":"[instantgram] não encontrou uma imagem em um post. Tente abrir o link em uma nova aba.","index#program#post@alert_dontFound":"ops, [instantgram] não encontrou a imagem :(","index#program#screen@alert_dontFound":"[instantgram] a procura por imagem na tela encontrou mais de 1 imagem. Você está em um perfil? Se sim, abra alguma imagem antes de rodar o [instantgram]","index#program@alert_dontFound":"ops, você está em algum post do instagram? ex: instagram.com/p/82jd828jd","index#program@alert_videoBlob":"Se você está tentando abrir um vídeo, tente entrar na página do post do Instagram. ex: instagram.com/p/82jd828jd. Se você já está na página, tente atualizar a página antes de executar o [instantgram] ou abra o post em uma nova aba. (este processo só é necessário com vídeos)"},"de-DE":{"helpers.localize_defaultlang":"Ausgewählte Sprache: ${LANG_DEFAULT} \n Weitere Informationen zu den unterstützten Sprachen findest du auf http://theus.github.io/instantgram","modules.update@oudated_outdated":"[instantgram] ist veraltet. Bitte besuche die Seite http://theus.github.io/instantgram für ein Update.","modules.update@oudated_localInfo":"[instantgram] Installierte Version ${data.version} | Neue Version: ${data.gitVersion}","modules.update@determineIfGetUpdateIsNecessary_contacting":"[instantgram] sucht nach neuen verfügbaren Updates…","modules.update@determineIfGetUpdateIsNecessary_updated":"[instantgram] wurde aktualisiert.","modules.update@determineIfGetUpdateIsNecessary_@alert_found":"[instantgram] hat ein neues Update gefunden.\nBitte besuche die Seite http://theus.github.io/instantgram, um das Update zu installieren.","index@alert_onlyWorks":"[instantgram] funktioniert nur mit instagram.com.","index#program#modal@alert_dontFound":"[instantgram] konnte kein Bild in diesem Post finden. Bitte öffne den Link in einem neuen Tab.","index#program#post@alert_dontFound":"Ops, [instantgram] konnte leider kein Bild finden  :-(","index#program#screen@alert_dontFound":"[instantgram] hat mehr als 1 Bild gefunden. Bist du in der Profilansicht? Falls ja, öffne bitte zuerst einen einzelnen Post und führe [instantgram] erneut aus.","index#program@alert_dontFound":"Ops, hast du einen Instagram Post geöffnet? Zum Beispiel instagram.com/p/82jd828jd","index#program@alert_videoBlob":"If you're trying open a video, try enter on Instagram post page. Like for example instagram.com/p/82jd828jd. If you're already in it, try refreshing the page before running [instantgram] or open the post in a new tab. (this proccess is neccessary only for videos) // we need translate this string to Deutsch, if you can help us enter in contact by Github"}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(2),o=(n=r)&&n.__esModule?n:{default:n};function i(e){console.warn((0,o.default)("modules.update@oudated_outdated")),console.warn((0,o.default)("modules.update@oudated_localInfo").replace("${data.version}",e.version).replace("${data.gitVersion}",e.gitVersion))}t.default=function(e){var t,a=e.replace(/\./g,"");if(a=parseInt(a),!(t=window.localStorage.getItem("instantgram"))||((t=JSON.parse(t)).version!==t.gitVersion&&i(t),Date.now()>t.dateExpiration)){var n=new window.XMLHttpRequest;n.addEventListener("readystatechange",(function(){if(console.info((0,o.default)("modules.update@determineIfGetUpdateIsNecessary_contacting")),4===this.readyState){var t=new Date;t.setDate(t.getDate()+2),window.localStorage.setItem("instantgram",JSON.stringify({version:e,gitVersion:JSON.parse(this.responseText).version,lastVerification:Date.now(),dateExpiration:t.valueOf()}));var n=JSON.parse(this.responseText).version;if(n=n.replace(/\./g,""),n=parseInt(n),console.info((0,o.default)("modules.update@determineIfGetUpdateIsNecessary_updated")),a<n){var r=JSON.parse(window.localStorage.getItem("instantgram"));window.alert((0,o.default)("modules.update@determineIfGetUpdateIsNecessary_@alert_found")),i(r)}else console.info(window.localStorage.getItem("instantgram"))}})),n.open("GET","https://theus.github.io/instantgram/package.json"),n.send()}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,o.default)(e).filter((function(e){return"ARTICLE"===e.nodeName})).length>0};var n,r=a(0),o=(n=r)&&n.__esModule?n:{default:n}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=!1,a=e.images.length>2;a&&e.regexPath.test(e.path)&&(e.probablyHasAGallery.check=a,e.probablyHasAGallery.byModule="searchImage");if(e.regexPath.test(e.path)&&!e.imageLink&!1===a){if(!e.foundVideo&&!e.foundImage){try{if(2===document.getElementsByTagName("article").length){var n=document.getElementsByTagName("article")[1].querySelector("header + div img").src;n?(e.setImageLink(n),window.open(e.imageLink),t=!0,e.foundByModule="searchImage"):e.context={hasMsg:!0,msg:"index#program#modal@alert_dontFound"}}}catch(t){console.error("searchImage()","[instantgram] "+e.VERSION,t)}try{if(1===document.getElementsByTagName("article").length){var r=document.querySelector("article > div img").src;e.setImageLink(r),e.imageLink?(window.open(e.imageLink),t=!0,e.foundByModule="searchImage"):e.context={hasMsg:!0,msg:"index#program#post@alert_dontFound"}}}catch(t){console.error("searchImage()","[instantgram] "+e.VERSION,t)}}}else e.alertNotInInstagramPost=!0;return t}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=!1;try{e:{var a=!0,n=!1,r=void 0;try{for(var i,s=e.videos[Symbol.iterator]();!(a=(i=s.next()).done);a=!0){var d=i.value;if((0,o.default)(d)){var u=d.src;if(u){if(-1!==u.indexOf("blob:")){e.context={hasMsg:!0,msg:"index#program@alert_videoBlob"};break e}window.open(u),t=!0,e.foundVideo=!0,e.foundByModule="searchVideoOnScreen",e.alertNotInInstagramPost=!0}break e}}}catch(e){n=!0,r=e}finally{try{!a&&s.return&&s.return()}finally{if(n)throw r}}}}catch(t){console.error("searchVideoOnScreen()","[instantgram] "+e.VERSION,t)}return t};var n,r=a(1),o=(n=r)&&n.__esModule?n:{default:n}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=!1;try{if(!e.imageLink&&!e.foundVideo)e:{e.images.reverse();var a=!0,s=!1,d=void 0;try{for(var u,l=e.images[Symbol.iterator]();!(a=(u=l.next()).done);a=!0){var c=u.value;if((0,n.default)(c)&&!(0,o.default)(c)&&!(0,i.default)(c)){var m=(0,r.default)(c).filter((function(e){return"UL"===e.nodeName})).length>0;if(m){e.probablyHasAGallery.check=m,e.probablyHasAGallery.byModule="searchImageOnScreen";var g=(0,r.default)(c).filter((function(e){return e.style&&e.style.transform&&""!==e.style.transform}))[0].closest("ul"),f=g.children.length>3?2:1,p=g.children[f].querySelector("img");e.setImageLink(p.src),!0}else e.setImageLink(c.src);e.imageLink?(window.open(e.imageLink),e.foundImage=!0,t=!0,e.foundByModule="searchImageOnScreen"):e.context={hasMsg:!0,msg:"index#program#screen@alert_dontFound"},e.alertNotInInstagramPost=!1;break e}}}catch(e){s=!0,d=e}finally{try{!a&&l.return&&l.return()}finally{if(s)throw d}}}}catch(t){console.error("searchImageOnScreen()","[instantgram] "+e.VERSION,t)}return t};var n=s(a(1)),r=s(a(0)),o=s(a(11)),i=s(a(12));function s(e){return e&&e.__esModule?e:{default:e}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return"a"===e.parentElement.localName||(0,o.default)(e).filter((function(e){return"HEADER"===e.nodeName})).length>0};var n,r=a(0),o=(n=r)&&n.__esModule?n:{default:n}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return"SPAN"===e.parentElement.nodeName&&"link"===e.parentElement.getAttribute("role")};var n,r=a(0);(n=r)&&n.__esModule},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=!1;try{if(e.regexStoriesURI.test(e.path)){var a=document.getElementById("react-root").querySelectorAll("section section div"),n="";if((0,o.default)(a,(function(t,a){var r=a.style.backgroundImage.match(e.regexURL);null!==r&&(n=r[0])})),n.length>0&&(e.setImageLink(n),window.open(e.imageLink),t=!0,e.foundImage=!0,e.foundByModule="searchStories"),!1===t&&e.videos.length>0){var r=e.videos[0].src;!r&&e.videos[0].children&&(r=e.videos[0].children[0].src),r&&(window.open(r),t=!0,e.foundVideo=!0,e.alertNotInInstagramPost=!0,e.foundByModule="searchStories")}}}catch(t){console.error("searchStories()","[instantgram] "+e.VERSION,t)}return t};var n,r=a(3),o=(n=r)&&n.__esModule?n:{default:n}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=!1;try{if(!e.imageLink&&!e.foundVideo){var a=document.querySelector('[property="og:video"]')?document.querySelector('[property="og:video"]'):document.querySelector('[property="og:video:secure_url"]')?document.querySelector('[property="og:video:secure_url"]'):null,n=!!a&&a.content;n&&(window.open(n),t=!0,e.foundVideo=!0,e.alertNotInInstagramPost=!0)}}catch(e){console.error("getVideoOnPage()","[instantgram] 3.0.2",e)}return t}}]);