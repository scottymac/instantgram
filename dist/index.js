"use strict";function outdated(e){console.warn("[instantgram] is outdated. Please go to http://theus.github.io/instantgram to update"),console.warn("[instantgram] local version: "+e.version+" | new update: "+e.gitVersion)}function determineIfGetUpdateIsNecessary(){var e=localStorage.getItem("instantgram");return!e||(e=JSON.parse(e),e.version!==e.gitVersion&&outdated(e),Date.now()>e.dateExpiration)}function update(){var e="2.0.1",t=e.replace(/\./g,"");if(t=parseInt(t),determineIfGetUpdateIsNecessary()){var a=new XMLHttpRequest;a.addEventListener("readystatechange",function(){if(console.info("[instantgram] is contacting server looking for updates..."),4===this.readyState){var a=new Date;a.setDate(a.getDate()+2),localStorage.setItem("instantgram",JSON.stringify({version:e,gitVersion:JSON.parse(this.responseText).version,lastVerification:Date.now(),dateExpiration:a.valueOf()}));var n=JSON.parse(this.responseText).version;if(n=n.replace(/\./g,""),n=parseInt(n),console.info("[instantgram] updated local data"),t<n){var i=JSON.parse(localStorage.getItem("instantgram"));alert("[instantgram] found a update.\n please go to theus.github.io/instantgram for update"),outdated(i)}else console.info(localStorage.getItem("instantgram"))}}),a.open("GET","https://theus.github.io/instantgram/package.json"),a.send()}}var VERSION="2.0.1",hostname=location.hostname,path=location.pathname,regex_original_image=/\/[a-z]+\d+[a-z]?x\d+[a-z]?/,regex_path=/^\/p\//,regex_hostname=/instagram\.com/;if(regex_hostname.test(hostname)||alert("[instantgram] only works in instagram.com"),regex_hostname.test(hostname)){if(regex_path.test(path)){try{if(2===document.getElementsByTagName("article").length){var modal=document.getElementsByTagName("article")[1],modal_image=modal.querySelector("header + div img").src;if(modal_image){var image_link=regex_original_image.test(modal_image)?modal_image.replace(regex_original_image,""):modal_image;window.open(image_link)}else alert("[instantgram] don't found a image in instagram post. Try open the link in new tab.")}}catch(e){console.error("[instantgram] "+VERSION,e)}try{if(1===document.getElementsByTagName("article").length){var post=document.getElementsByTagName("article")[0],post_image=document.querySelector("article > div img").src,image_link=regex_original_image.test(post_image)?post_image.replace(regex_original_image,""):post_image;image_link?window.open(image_link):alert("ops, [instantgram] don't found the image :(")}}catch(e){console.error("[instantgram] "+VERSION,e)}}else alert("ops, are you in a instagram post? ex: instagram.com/p/82jd828jd");update()}