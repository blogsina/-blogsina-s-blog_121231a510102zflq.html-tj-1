(function(a,b){if(typeof define==="function"&&define.amd){define(b)}else{a.logo=b()}}(typeof self!=="undefined"?self:this,function(){var d="";function o(){}function c(){var q=null;try{q=(window.baidu&&window.baidu.mobads&&window.baidu.mobads.Sdk)||(window.parent&&parent.baidu&&parent.baidu.mobads&&parent.baidu.mobads.Sdk)}catch(r){}return q}function f(r,q){var s=document.createElement("div");s.innerHTML=q;var t=document.createDocumentFragment();for(;s.childNodes.length>0;){t.appendChild(s.childNodes[0])}r.appendChild(t)}function b(r,q,s){if(r.addEventListener){r.addEventListener(q,s,false)}else{if(r.attachEvent){r.attachEvent("on"+q,s)}}}function e(q){if(q.stopPropagation){q.stopPropagation()}else{window.event.cancelBubble=true}if(q.preventDefault){q.preventDefault()}return false}function n(s){var r=null;var q=[];for(r in s){if(s.hasOwnProperty(r)){q.push(r+"="+encodeURIComponent(s[r]))}}return q.join("&")}function i(q,s){var t=s.type;if(t==="treatment"){var r=q.querySelector(".logo-container");console.log(r);r.style.cssText="opacity:0.5"}}function k(r,q){r.style.position="relative";var s=r.querySelector(".logo-container");var v=s.getAttribute("class");v=v.concat(" new-logo-container");s.setAttribute("class",v);s.style.cssText="background: transparent;";s.style.width="100%";var w=r.querySelector(".logo-con-wrapper");w.style.cssText="display: inline-block; height: 16px; background: transparent";var u=r.querySelector(".logo-close-img");var t=r.querySelector(".logo-link");if(q){u.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAAXNSR0IArs4c6QAAARVJREFUOBF9kzGWwjAMRGNKOEdSc6G9xzahoOIe1LkLPe1egW3DfOHxcxIHv6dne2Y0lkTo5nkeOi9dJp9Xuyntt0PmnnnvO6FHJ+g8BgCI3ATgDTAAMwBEysxd7E9K6d9pFqYKwAJhVCDxL5zL4nxRQF4VfXbuKGC0nYiyECimEBS0OmTBwBOntQOkcOr5ixwEFkEqJnbIugtPphdeWq67iOpFPut5hCDbxbCw1d1ucVm8aYFFjJrfubyJgJUFLwSj7mdFTLF+H+F6SU93TJ1mHtHlCmwa7WnKmHipJQLX8osb84XBR7sxAt4kWrsxaFSBln6bJsWgkXj1QL9x/kfs9uhS2VtGgIOCbz4+vjph74w25wxv9VjxEc3jX7MAAAAASUVORK5CYII=";t.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAAUCAYAAAA0nZtFAAAAAXNSR0IArs4c6QAAA/lJREFUWAnNmFmIjlEYx2esIyTGvlMijezDhYixZ7lhFMp6IbmQrShbcSESibhAslO2C4oRLpQbI5ms2YaJplD2iPH7f86j83297/st8w2e+s0553n+5znnfc95z5yZnJwAq6qqyoejUC8gXKMuxiyCcpiR6UD0XQ8rrD/1RnAQJpovrZKOm0B2Nq2OWRAzZj3QCynNJB39esJP2Gz9qTcD2SrzhZV1QgITnH8SSYpyc3Mvh+gycpOzKR2jdsBd4mPQbaB8HTLIF+a1NyC2HF8uBMUC5PEudYwzJlEfxxew2EkGLpaIWAeK/tAS3sMjKCVeRZmykacH4nspdwgWVjJuKz/k8t7Gp/lc8mL69EfDA9Ccg+ww+Y4F7ZDvqO1lPKSu73E85VoohER7RXwbzh0k1ItMxxYh3p9OB08btwjMoTWxC/AD7oAWzcyesyEO329xlYoFG8lfwk1oAXshFbuDqGtwxngvuh4u4fz4SGYtcjWGUvgOWrw4w1ftM2QfGcVOmOpl/0j9JmgF2sNAaAeyArjG4IXslFcxz9/70ZehesNcxj5fI8PyYAvBtyM08v3BaNeCxfAJzEp8TVAdYVZ3iMYgZ7+gsVwsvR1CsiI6LgWt+FMYBuvAbBeV3ZB4L+mE7ypMhougs0f3iFGslH+o4a45YzxdD/TZhA1S1wXmoRkZJpJfK7yaUqs6DprDDdCJ3AJkekHLQedDBfrXcA/e0H4C+Ty8+u8Bs5lWCSnznP9zSDzbbv2iuALPkybmwUbAIdD3fwoGwBYw26EkNFqaI6GMPRy+4Z7/cdTA6IY4rd13ouT/PsZkD3sPN0czoq3dpBugb+9stjibeIHIX7/oxjrtUOv/v5S1Qibib2V9RjLdLu1+EnPwQ9+t5TCdYn5/0/plW9eo9J3VrTOX3vAtA2bZ2HZhsbaV/pYvdM4+FvTK2tR7QhkM8vx+f8/9p6rz6CfoDMqmacF0gB4F3ViTmRZxGdiiBut5wwVgpsuOzpWJoL9tOkADaOfagynz4C6YrQnO/NuL6Dg8i9JkEiNnHzeBaan0R9vN6WPHQmQfhCVOrOI+dA7qgL8+7Aezj1TaBGnNR/wFnLF2tkpyVvuFRG2VxUz0k5tsd0pdzZdBL6gD2ilT8N+C2WC2JuqmSp8uCNvDVevwP5VhZ0gOD1XG5Kcz2ROgv4Abgf7HIH6Azo9E20O/rYnOhHaxa+teUFO2kbkvSSG53Yf+SENfiBQ83DkSD6N6ALRLzBJfxgcCq9FvN0FEOZtYGdpUDr2INJGht0QrIhW/g1rk9I2Xok9kBpyGcvgKlXAdVoLdapMmR1sMC5IKMxCQtzvcAt20kxq6jk6vPz1i9gtqG09/SO6d3QAAAABJRU5ErkJggg==";u.style.cssText="position: absolute; right: 0; margin: 0; padding: 4px; opacity: 0.3; background: #000000;";w.style.background="#000000";w.style.opacity="0.3"}else{u.src="https://render-server.cdn.bcebos.com/static/images/20210525/d5443f3a0c9fe8456beb5f50eb08ed60.png";t.src="https://render-server.cdn.bcebos.com/static/images/spring_festival/ad-logo.png";u.style.cssText="position: absolute; right: 0; margin: 0; padding: 4px; width: 10px; height: 10px";t.style.cssText="width: 32px;height: 11px"}}function j(w){w=w||{};var r=w.logoUrl||"https://union.baidu.com";var s=document.getElementById(w.containerId||"container");var x=w.containerId;var F=document.getElementById(w.feedbackParentId||"container");var y=!w.hideClose&&F;var E=w.closeDirect;var z=w.deviceType>1?" logo-mobile-container":"";var A=w.exps||{};var B=w.newLogoExps;var t=A["rs_logo"]||{};var D=w.isDarkLogo||false;var v=w.cloudConfiglogo||false;if(s===null){return}var u='<img class="logo-link" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAAUCAYAAAA0nZtFAAAAAXNSR0IArs4c6QAAA/lJREFUWAnNmFmIjlEYx2esIyTGvlMijezDhYixZ7lhFMp6IbmQrShbcSESibhAslO2C4oRLpQbI5ms2YaJplD2iPH7f86j83297/st8w2e+s0553n+5znnfc95z5yZnJwAq6qqyoejUC8gXKMuxiyCcpiR6UD0XQ8rrD/1RnAQJpovrZKOm0B2Nq2OWRAzZj3QCynNJB39esJP2Gz9qTcD2SrzhZV1QgITnH8SSYpyc3Mvh+gycpOzKR2jdsBd4mPQbaB8HTLIF+a1NyC2HF8uBMUC5PEudYwzJlEfxxew2EkGLpaIWAeK/tAS3sMjKCVeRZmykacH4nspdwgWVjJuKz/k8t7Gp/lc8mL69EfDA9Ccg+ww+Y4F7ZDvqO1lPKSu73E85VoohER7RXwbzh0k1ItMxxYh3p9OB08btwjMoTWxC/AD7oAWzcyesyEO329xlYoFG8lfwk1oAXshFbuDqGtwxngvuh4u4fz4SGYtcjWGUvgOWrw4w1ftM2QfGcVOmOpl/0j9JmgF2sNAaAeyArjG4IXslFcxz9/70ZehesNcxj5fI8PyYAvBtyM08v3BaNeCxfAJzEp8TVAdYVZ3iMYgZ7+gsVwsvR1CsiI6LgWt+FMYBuvAbBeV3ZB4L+mE7ypMhougs0f3iFGslH+o4a45YzxdD/TZhA1S1wXmoRkZJpJfK7yaUqs6DprDDdCJ3AJkekHLQedDBfrXcA/e0H4C+Ty8+u8Bs5lWCSnznP9zSDzbbv2iuALPkybmwUbAIdD3fwoGwBYw26EkNFqaI6GMPRy+4Z7/cdTA6IY4rd13ouT/PsZkD3sPN0czoq3dpBugb+9stjibeIHIX7/oxjrtUOv/v5S1Qibib2V9RjLdLu1+EnPwQ9+t5TCdYn5/0/plW9eo9J3VrTOX3vAtA2bZ2HZhsbaV/pYvdM4+FvTK2tR7QhkM8vx+f8/9p6rz6CfoDMqmacF0gB4F3ViTmRZxGdiiBut5wwVgpsuOzpWJoL9tOkADaOfagynz4C6YrQnO/NuL6Dg8i9JkEiNnHzeBaan0R9vN6WPHQmQfhCVOrOI+dA7qgL8+7Aezj1TaBGnNR/wFnLF2tkpyVvuFRG2VxUz0k5tsd0pdzZdBL6gD2ilT8N+C2WC2JuqmSp8uCNvDVevwP5VhZ0gOD1XG5Kcz2ROgv4Abgf7HIH6Azo9E20O/rYnOhHaxa+teUFO2kbkvSSG53Yf+SENfiBQ83DkSD6N6ALRLzBJfxgcCq9FvN0FEOZtYGdpUDr2INJGht0QrIhW/g1rk9I2Xok9kBpyGcvgKlXAdVoLdapMmR1sMC5IKMxCQtzvcAt20kxq6jk6vPz1i9gtqG09/SO6d3QAAAABJRU5ErkJggg==" />';if(v){u='<img class="logo-link" style="width:51px;" src="data:image/png;base64,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" />'}var q=['<div class="logo-container'+z+'">','<a href="'+r+'" target="_blank" class="logo-con-wrapper">',u,"</a>",a(y),"</div>"].join("");i(s,t);f(s,q);if(B){k(s,D)}if(!y){return}var C=l(F.clientWidth,F.clientHeight);f(F,C);m(w.trackingInfo,E,s);g()}function a(q){if(!q){return""}return['<div class="gap"></div>','<a href="javascript:;" id="logo-close-btn">','<img class="logo-close-img" ','src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAAXNSR0IArs4c6QAAARVJREFUOBF9kzGWwjAMRGNKOEdSc6G9xzahoOIe1LkLPe1egW3DfOHxcxIHv6dne2Y0lkTo5nkeOi9dJp9Xuyntt0PmnnnvO6FHJ+g8BgCI3ATgDTAAMwBEysxd7E9K6d9pFqYKwAJhVCDxL5zL4nxRQF4VfXbuKGC0nYiyECimEBS0OmTBwBOntQOkcOr5ixwEFkEqJnbIugtPphdeWq67iOpFPut5hCDbxbCw1d1ucVm8aYFFjJrfubyJgJUFLwSj7mdFTLF+H+F6SU93TJ1mHtHlCmwa7WnKmHipJQLX8osb84XBR7sxAt4kWrsxaFSBln6bJsWgkXj1QL9x/kfs9uhS2VtGgIOCbz4+vjph74w25wxv9VjxEc3jX7MAAAAASUVORK5CYII=" />',"</a>"].join("")}function l(s,q){var t=(q-250>0)?30:0;var r=320;if(s<320&&s>159){r=160}else{if(s<160){r=80}}var u=r<160?"feedback-container fd-small":"feedback-container";var v=h(s,q);return['<div id="feedback-container" class="'+u+'">','<div id="reason-content" class="reason-content" data-reason-num="'+v.length+'" style="width:'+r+"px;padding-top:"+t+'px;">','<div class="intro">反馈意见：</div>',v.join(""),'<a class="fb-btn-cancel" href="javascript:;">返回</a>',"</div>",'<div id="thx-content" class="thx-content">',"<h5>感谢您的反馈！</h5>","<p>您的反馈已记录，我们将努力改善您的浏览体验。</p>","</div>","</div>"].join("")}function h(r,q){var t=['<a href="javascript:;" data-value="1" class="reason-item">视觉干扰</a>','<a href="javascript:;" data-value="2" class="reason-item">内容不宜</a>','<a href="javascript:;" data-value="3" class="reason-item">不感兴趣</a>','<a href="javascript:;" data-value="0" class="reason-item">其他原因</a>'];function s(){var u=parseInt(Math.random()*3,10);return[t[u],t[3]]}if(r<160&&q<106){return[]}if(r>=80&&q>=106&&r<160&&q<168){return s()}if(r>=160&&q>=76&&r<320&&q<106){return s()}return t}function m(s,w,r){var v=document.getElementById("logo-close-btn");var u=document.getElementById("feedback-container");var q=document.getElementById("reason-content");var t=document.getElementById("thx-content");b(v,"click",function(x){var z=c();if(z&&w){z.onAdPlayEnd();p(s,0);return}if(window.parent&&window.postMessage&&window.parent.postMessage&&window.JSON&&JSON.stringify){var y={type:1,tuid:d,msg:"click"};parent.postMessage(JSON.stringify(y),"*")}return e(x)});b(u,"click",function(x){x=x||window.event;var y=x.target||x.srcElement;if(!(y&&y.getAttribute)){return}if(y.getAttribute("data-value")!=null){p(s,y.getAttribute("data-value"));q.style.display="none";t.style.display="block";setTimeout(function(){t.style.display="none"},2000);setTimeout(function(){var A=c();if(A){A.onAdPlayEnd()}else{if(window.parent&&window.postMessage&&window.parent.postMessage&&window.JSON&&JSON.stringify){var z={type:1,tuid:d,msg:"click"};parent.postMessage(JSON.stringify(z),"*")}}},2000)}if(y.className==="fb-btn-cancel"){u.style.display="none"}return e(x)})}function p(s,t){var r="https://eclick.baidu.com/close_feedback.jpg?";s=s||{};s.reasonid=t;s._=(new Date()).getTime();r=r+n(s);var q=document.createElement("img");q.onerror=o;q.src=r}function g(){if(window.parent&&window.postMessage&&window.parent.postMessage){var q=function(t){try{var u=JSON.parse(t.data);if(u&&u.type===1){d=u.tuid;var s={type:1,msg:"ok",tuid:d};window.parent.postMessage(JSON.stringify(s),"*")}}catch(r){}};if(window.addEventListener){window.addEventListener("message",q,false)}else{if(window.attachEvent){window.attachEvent("onmessage",q)}}}}return{init:j}}));