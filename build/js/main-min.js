const headerToggler=document.getElementById("navbar__toggler"),togglerIcon=headerToggler.querySelector(".material-icons"),navbarMenu=document.getElementById("navbar__menu"),scrollbarWidth=window.innerWidth-document.body.clientWidth;headerToggler.addEventListener("click",()=>{navbarMenu.classList.toggle("open"),navbarMenu.classList.contains("open")?(togglerIcon.innerHTML="close",document.body.style.position="fixed",document.body.style.paddingRight=scrollbarWidth+"px"):(togglerIcon.innerHTML="menu",document.body.style.position="unset",document.body.style.paddingRight="0")});const bookForm=document.getElementById("book-form"),delivForm=document.getElementById("delivery-form");bookForm&&(bookForm.onsubmit=(e=>{e.preventDefault();const n={name:document.getElementById("name").value,phone:document.getElementById("phone").value,date:document.getElementById("date").value};console.log(n)})),delivForm&&(delivForm.onsubmit=(e=>{e.preventDefault();const n={name:document.getElementById("name").value,phone:document.getElementById("phone").value,date:document.getElementById("date").value};console.log(n)})),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){var n,t=navigator.userAgent,o=/iphone/i.test(t),a=/chrome/i.test(t),r=/android/i.test(t);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,n){var t;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(n="number"==typeof n?n:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,n):this.createTextRange&&((t=this.createTextRange()).collapse(!0),t.moveEnd("character",n),t.moveStart("character",e),t.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,n=this[0].selectionEnd):document.selection&&document.selection.createRange&&(t=document.selection.createRange(),e=0-t.duplicate().moveStart("character",-1e5),n=e+t.text.length),{begin:e,end:n})},unmask:function(){return this.trigger("unmask")},mask:function(t,i){var c,l,u,s,d,m,f;if(!t&&this.length>0){var g=e(this[0]).data(e.mask.dataName);return g?g():void 0}return i=e.extend({autoclear:e.mask.autoclear,placeholder:e.mask.placeholder,completed:null},i),c=e.mask.definitions,l=[],u=m=t.length,s=null,e.each(t.split(""),function(e,n){"?"==n?(m--,u=e):c[n]?(l.push(new RegExp(c[n])),null===s&&(s=l.length-1),u>e&&(d=l.length-1)):l.push(null)}),this.trigger("unmask").each(function(){function g(){if(i.completed){for(var e=s;d>=e;e++)if(l[e]&&x[e]===h(e))return;i.completed.call(I)}}function h(e){return i.placeholder.charAt(e<i.placeholder.length?e:0)}function v(e){for(;++e<m&&!l[e];);return e}function p(e,n){var t,o;if(!(0>e)){for(t=e,o=v(n);m>t;t++)if(l[t]){if(!(m>o&&l[t].test(x[o])))break;x[t]=x[o],x[o]=h(o),o=v(o)}k(),I.caret(Math.max(s,e))}}function b(){E(),I.val()!=B&&I.change()}function y(e,n){var t;for(t=e;n>t&&m>t;t++)l[t]&&(x[t]=h(t))}function k(){I.val(x.join(""))}function E(e){var n,t,o,a=I.val(),r=-1;for(n=0,o=0;m>n;n++)if(l[n]){for(x[n]=h(n);o++<a.length;)if(t=a.charAt(o-1),l[n].test(t)){x[n]=t,r=n;break}if(o>a.length){y(n+1,m);break}}else x[n]===a.charAt(o)&&o++,u>n&&(r=n);return e?k():u>r+1?i.autoclear||x.join("")===T?(I.val()&&I.val(""),y(0,m)):k():(k(),I.val(I.val().substring(0,r+1))),u?n:s}var I=e(this),x=e.map(t.split(""),function(e,n){return"?"!=e?c[e]?h(n):e:void 0}),T=x.join(""),B=I.val();I.data(e.mask.dataName,function(){return e.map(x,function(e,n){return l[n]&&e!=h(n)?e:null}).join("")}),I.one("unmask",function(){I.off(".mask").removeData(e.mask.dataName)}).on("focus.mask",function(){var e;I.prop("readonly")||(clearTimeout(n),B=I.val(),e=E(),n=setTimeout(function(){I.get(0)===document.activeElement&&(k(),e==t.replace("?","").length?I.caret(0,e):I.caret(e))},10))}).on("blur.mask",b).on("keydown.mask",function(e){if(!I.prop("readonly")){var n,t,a,r=e.which||e.keyCode;f=I.val(),8===r||46===r||o&&127===r?(t=(n=I.caret()).begin,(a=n.end)-t==0&&(t=46!==r?function(e){for(;--e>=0&&!l[e];);return e}(t):a=v(t-1),a=46===r?v(a):a),y(t,a),p(t,a-1),e.preventDefault()):13===r?b.call(this,e):27===r&&(I.val(B),I.caret(0,E()),e.preventDefault())}}).on("keypress.mask",function(n){if(!I.prop("readonly")){var t,o,a,i=n.which||n.keyCode,c=I.caret();n.ctrlKey||n.altKey||n.metaKey||32>i||!i||13===i||(c.end-c.begin!=0&&(y(c.begin,c.end),p(c.begin,c.end-1)),t=v(c.begin-1),m>t&&(o=String.fromCharCode(i),l[t].test(o))&&(function(e){var n,t,o,a;for(n=e,t=h(e);m>n;n++)if(l[n]){if(o=v(n),a=x[n],x[n]=t,!(m>o&&l[o].test(a)))break;t=a}}(t),x[t]=o,k(),a=v(t),r?setTimeout(function(){e.proxy(e.fn.caret,I,a)()},0):I.caret(a),c.begin<=d&&g()),n.preventDefault())}}).on("input.mask paste.mask",function(){I.prop("readonly")||setTimeout(function(){var e=E(!0);I.caret(e),g()},0)}),a&&r&&I.off("input.mask").on("input.mask",function(){var e=I.val(),n=I.caret();if(f&&f.length&&f.length>e.length){for(E(!0);n.begin>0&&!l[n.begin-1];)n.begin--;if(0===n.begin)for(;n.begin<s&&!l[n.begin];)n.begin++;I.caret(n.begin,n.begin)}else{for(E(!0);n.begin<m&&!l[n.begin];)n.begin++;I.caret(n.begin,n.begin)}g()}),E()})}})}),jQuery(function(e){e("#phone").mask("+380 (99) 999 99 99")});
//# sourceMappingURL=main-min.js.map
