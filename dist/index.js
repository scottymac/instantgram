"use strict";function localize(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:LANG_DEFAULT;try{if(localization.langs.hasOwnProperty(a)||(a="en-US"),localization.langs[a][e])return localization.langs[a][e]}catch(t){return console.error("[instantgram]LOC error:",t),"ops, an error ocurred in localization system. Enter in https://github.com/theus/instantgram/issues/new and open an issue with this code: 'LOC_dont_found_str_neither_default:["+a+"->"+e+"]'\n    for more information open the console"}}function outdated(e){console.warn(localize("modules.update@oudated_outdated")),console.warn(localize("modules.update@oudated_localInfo").replace("${data.version}",e.version).replace("${data.gitVersion}",e.gitVersion))}function determineIfGetUpdateIsNecessary(){var e=window.localStorage.getItem("instantgram");return!e||(e=JSON.parse(e),e.version!==e.gitVersion&&outdated(e),Date.now()>e.dateExpiration)}function update(e){var a=e.replace(/\./g,"");if(a=parseInt(a),determineIfGetUpdateIsNecessary()){var t=new window.XMLHttpRequest;t.addEventListener("readystatechange",function(){if(console.info(localize("modules.update@determineIfGetUpdateIsNecessary_contacting")),4===this.readyState){var t=new Date;t.setDate(t.getDate()+2),window.localStorage.setItem("instantgram",JSON.stringify({version:e,gitVersion:JSON.parse(this.responseText).version,lastVerification:Date.now(),dateExpiration:t.valueOf()}));var n=JSON.parse(this.responseText).version;if(n=n.replace(/\./g,""),n=parseInt(n),console.info(localize("modules.update@determineIfGetUpdateIsNecessary_updated")),a<n){var r=JSON.parse(window.localStorage.getItem("instantgram"));window.alert(localize("modules.update@determineIfGetUpdateIsNecessary_@alert_found")),outdated(r)}else console.info(window.localStorage.getItem("instantgram"))}}),t.open("GET","https://theus.github.io/instantgram/package.json"),t.send()}}function forEach(e,a,t){for(var n=0;n<e.length;n++)a.call(t,n,e[n])}function searchImage(e){var a=!1;if(e.regexPath.test(e.path)&&!e.imageLink){if(!e.foundVideo&&!e.foundImage){try{if(2===document.getElementsByTagName("article").length){var t=document.getElementsByTagName("article")[1],n=t.querySelector("header + div img").src;n?(e.imageLink=e.regexOriginalImage.test(n)?n.replace(e.regexOriginalImage,""):n,window.open(e.imageLink),a=!0):e.context={hasMsg:!0,msg:"index#program#modal@alert_dontFound"}}}catch(a){console.error("searchImage()","[instantgram] "+e.VERSION,a)}try{if(1===document.getElementsByTagName("article").length){var r=document.querySelector("article > div img").src;e.imageLink=e.regexOriginalImage.test(r)?r.replace(regexOriginalImage,""):r,e.imageLink?(window.open(e.imageLink),a=!0):e.context={hasMsg:!0,msg:"index#program#post@alert_dontFound"}}}catch(a){console.error("searchImage()","[instantgram] "+e.VERSION,a)}}}else e.alertNotInInstagramPost=!0;return a}function isElementInViewport(e){var a=e.getBoundingClientRect();return a.bottom>0&&a.right>0&&a.left<(window.innerWidth||document.documentElement.clientWidth)&&a.top<(window.innerHeight||document.documentElement.clientHeight)}function searchVideoOnScreen(e){var a=!1;try{e:{var t=!0,n=!1,r=void 0;try{for(var o,i=e.videos[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var s=o.value;if(isElementInViewport(s)){var d=s.src;d&&(window.open(d),a=!0,e.foundVideo=!0,e.alertNotInInstagramPost=!0);break e}}}catch(e){n=!0,r=e}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}}}catch(a){console.error("searchVideoOnScreen()","[instantgram] "+e.VERSION,a)}return a}function getAllNodeParent(e){var a=[];for(a.push(e);e.parentNode;)a.unshift(e.parentNode),e=e.parentNode;return a}function searchImageOnScreen(e){var a=!1;try{if(!e.imageLink&&!e.foundVideo)e:{var t=!0,n=!1,r=void 0;try{for(var o,i=e.images[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var s=o.value,d="a"===s.parentElement.localName||getAllNodeParent(s).filter(function(e){return"HEADER"===e.nodeName}).length>0;if(isElementInViewport(s)&&!d){e.imageLink=e.regexOriginalImage.test(s.src)?s.src.replace(e.regexOriginalImage,""):s.src,e.imageLink?(window.open(e.imageLink),e.foundImage=!0,a=!0):e.context={hasMsg:!0,msg:"index#program#screen@alert_dontFound"},e.alertNotInInstagramPost=!1;break e}}}catch(e){n=!0,r=e}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}}}catch(e){console.error("searchImageOnScreen()","[instantgram] "+VERSION,e)}return a}var localization={langs:{"en-US":{"helpers.localize_defaultlang":"[instantgram] set language: ${LANG_DEFAULT} \n For more information about available languages please check http://theus.github.io/instantgram","modules.update@oudated_outdated":"[instantgram] is outdated. Please check http://theus.github.io/instantgram for available updates.","modules.update@oudated_localInfo":"[instantgram] Installed version: ${data.version} | New update: ${data.gitVersion}","modules.update@determineIfGetUpdateIsNecessary_contacting":"[instantgram] is looking for available updates…","modules.update@determineIfGetUpdateIsNecessary_updated":"[instantgram] updated your current version.","modules.update@determineIfGetUpdateIsNecessary_@alert_found":"[instantgram] found a new available update.\nPlease check http://theus.github.io/instantgram to install it.","index@alert_onlyWorks":"[instantgram] only works on instagram.com.","index#program#modal@alert_dontFound":"[instangram] didn't find any image in this Instagram post. Please try to open the link in a new tab.","index#program#post@alert_dontFound":"Ops, [instantgram] couldn't find any image  :-(","index#program#screen@alert_dontFound":"[instantgram] found more than 1 image. Are you on a profile page? If yes, please open a single post first and open [instantgram] again.","index#program@alert_dontFound":"Ops, did you open any Instagram post? Like for example instagram.com/p/82jd828jd"},"pt-BR":{"helpers.localize_defaultlang":"[instantgram] idioma configurado: ${LANG_DEFAULT} \npara mais informações sobre os idiomas suportados, acesse http://theus.github.io/instantgram","modules.update@oudated_outdated":"[instantgram] está desatualizado. Acesse http://theus.github.io/instantgram para atualizar","modules.update@oudated_localInfo":"[instantgram] versão local: ${data.version} | nova versão: ${data.gitVersion}","modules.update@determineIfGetUpdateIsNecessary_contacting":"[instantgram] está procurando atualizações...","modules.update@determineIfGetUpdateIsNecessary_updated":"[instantgram] informações locais atualizadas","modules.update@determineIfGetUpdateIsNecessary_@alert_found":"[instantgram] encontrou uma atualização.\n acesse theus.github.io/instantgram para atualizar","index@alert_onlyWorks":"[instantgram] somente funciona no instagram.com","index#program#modal@alert_dontFound":"[instantgram] não encontrou uma imagem em um post. Tente abrir o link em uma nova aba.","index#program#post@alert_dontFound":"ops, [instantgram] não encontrou a imagem :(","index#program#screen@alert_dontFound":"[instantgram] a procura por imagem na tela encontrou mais de 1 imagem. Você está em um perfil? Se sim, abra alguma imagem antes de rodar o [instantgram]","index#program@alert_dontFound":"ops, você está em algum post do instagram? ex: instagram.com/p/82jd828jd"},"de-DE":{"helpers.localize_defaultlang":"Ausgewählte Sprache: ${LANG_DEFAULT} \n Weitere Informationen zu den unterstützten Sprachen findest du auf http://theus.github.io/instantgram","modules.update@oudated_outdated":"[instantgram] ist veraltet. Bitte besuche die Seite http://theus.github.io/instantgram für ein Update.","modules.update@oudated_localInfo":"[instantgram] Installierte Version ${data.version} | Neue Version: ${data.gitVersion}","modules.update@determineIfGetUpdateIsNecessary_contacting":"[instantgram] sucht nach neuen verfügbaren Updates…","modules.update@determineIfGetUpdateIsNecessary_updated":"[instantgram] wurde aktualisiert.","modules.update@determineIfGetUpdateIsNecessary_@alert_found":"[instantgram] hat ein neues Update gefunden.\nBitte besuche die Seite http://theus.github.io/instantgram, um das Update zu installieren.","index@alert_onlyWorks":"[instantgram] funktioniert nur mit instagram.com.","index#program#modal@alert_dontFound":"[instantgram] konnte kein Bild in diesem Post finden. Bitte öffne den Link in einem neuen Tab.","index#program#post@alert_dontFound":"Ops, [instantgram] konnte leider kein Bild finden  :-(","index#program#screen@alert_dontFound":"[instantgram] hat mehr als 1 Bild gefunden. Bist du in der Profilansicht? Falls ja, öffne bitte zuerst einen einzelnen Post und führe [instantgram] erneut aus.","index#program@alert_dontFound":"Ops, hast du einen Instagram Post geöffnet? Zum Beispiel instagram.com/p/82jd828jd"}}},LANGS_NORMALIZE={de:"de-DE",pt:"pt-BR",en:"en-US","en-GB":"en-US"},LANG_DEFAULT=LANGS_NORMALIZE[navigator.language];console.info(localize("helpers.localize_defaultlang").replace("${LANG_DEFAULT}",LANG_DEFAULT));var program={VERSION:"2.3.3",hostname:window.location.hostname,path:window.location.pathname,images:[],videos:document.querySelectorAll("video"),regexOriginalImage:/\/[a-z]+\d+[a-z]?x\d+[a-z]?/,regexPath:/^\/p\//,regexHostname:/instagram\.com/,foundVideo:!1,foundImage:!1,imageLink:!1,alertNotInInstagramPost:!1,context:{hasMsg:!1,msg:""}};forEach(document.images,function(e,a){return program.images.push(a)}),program.regexHostname.test(program.hostname)||window.alert(localize("index@alert_onlyWorks")),program.regexHostname.test(program.hostname)&&(!1===searchVideoOnScreen(program)&&!1===searchImage(program)&&searchImageOnScreen(program)&&(program.context.hasMsg=!1),program.context.hasMsg&&window.alert(localize(program.context.msg)),!program.alertNotInInstagramPost||program.foundVideo||program.foundImage||window.alert(localize("index#program@alert_dontFound")),update(program.VERSION));
