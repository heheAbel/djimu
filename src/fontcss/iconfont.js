(function(window){var svgSprite='<svg><symbol id="icon-search" viewBox="0 0 1024 1024"><path d="M671.7821 251.627924c-60.920488-60.129472-141.900847-93.244684-228.024343-93.244684-86.123496 0-167.103856 33.115212-228.024343 93.244684-60.98598 60.193941-94.572936 140.244114-94.572936 225.40468s33.586956 165.210739 94.572936 225.40468c60.920488 60.130496 141.900847 93.244684 228.024343 93.244684 86.123496 0 167.103856-33.114189 228.024343-93.244684 60.987003-60.193941 94.572936-140.245138 94.572936-225.40468S732.769103 311.821865 671.7821 251.627924zM645.635603 675.945933c-53.91084 53.209876-125.604696 82.514295-201.876824 82.514295s-147.967006-29.30442-201.876824-82.514295c-53.844326-53.145407-83.497693-123.787304-83.497693-198.913329 0-75.126025 29.653367-145.767921 83.497693-198.912305 53.909817-53.209876 125.604696-82.514295 201.876824-82.514295s147.967006 29.30442 201.876824 82.514295c53.843302 53.145407 83.497693 123.787304 83.497693 198.912305C729.132272 552.158628 699.478905 622.800525 645.635603 675.945933z"  ></path><path d="M923.722132 861.613586 748.334613 707.434088c-7.717775-6.786567-19.47761-6.030343-26.266224 1.690502-6.786567 7.719822-6.02932 19.479657 1.690502 26.266224l175.387519 154.180522c3.5345 3.107781 7.916297 4.632507 12.280698 4.632507 5.16565 0 10.305717-2.13871 13.985526-6.324032C932.199201 880.159988 931.440931 868.400153 923.722132 861.613586z"  ></path></symbol><symbol id="icon-daosanjiao" viewBox="0 0 1024 1024"><path d="M1024 255.996 511.971 767.909 0 255.996 1024 255.996z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)