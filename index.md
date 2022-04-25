# Welcome to my bookmarklets... 
To get all of them in one handy package,    
copy from here, then put it as the URL to a bookmark:  

[🄱🄼🄻](<javascript: fetch("https://raw.githubusercontent.com/username-pass/bookmarklets/main/all-depbookmarklets.js").then(function(response){response.text().then(function(text) {eval(text);});});>)
```
javascript: fetch("https://raw.githubusercontent.com/username-pass/bookmarklets/main/all-depbookmarklets.js").then(function(response){response.text().then(function(text) {eval(text);});});
```
## Individual ones (not all by me):  

### Search Archive.org:  
[Archive-Search](<javascript: void(location.href = 'http://web.archive.org/web/*/' + prompt("Put URL (or search term) here, then press enter",window.getSelection()));>)
```
javascript: void(location.href = 'http://web.archive.org/web/*/' + prompt("Put URL (or search term) here, then press enter",window.getSelection()));
```

### Auto-clicker:  
[Auto-Clicker](<javascript:var DELAY = 1;var autoClickerStyleElement = document.createElement("style");autoClickerStyleElement.innerHTML="*{cursor: crosshair !important;}";document.body.appendChild(autoClickerStyleElement);function addClicker(e) {if(!e.isTrusted) {return;}if(e.target.classList.contains("auto-clicker-target")) {e.target.classList.remove("auto-clicker-target");} else {e.target.classList.add("auto-clicker-target");}document.body.removeChild(autoClickerStyleElement);document.body.removeEventListener("click", addClicker);e.preventDefault();autoClick(e.target);}function autoClick(element) {if(element.classList.contains("auto-clicker-target")) {element.click();setTimeout(function(){ autoClick(element); }, DELAY);}}document.body.addEventListener("click", addClicker, 0);>)
```
javascript:var DELAY = 1;var autoClickerStyleElement = document.createElement("style");autoClickerStyleElement.innerHTML="*{cursor: crosshair !important;}";document.body.appendChild(autoClickerStyleElement);function addClicker(e) {if(!e.isTrusted) {return;}if(e.target.classList.contains("auto-clicker-target")) {e.target.classList.remove("auto-clicker-target");} else {e.target.classList.add("auto-clicker-target");}document.body.removeChild(autoClickerStyleElement);document.body.removeEventListener("click", addClicker);e.preventDefault();autoClick(e.target);}function autoClick(element) {if(element.classList.contains("auto-clicker-target")) {element.click();setTimeout(function(){ autoClick(element); }, DELAY);}}document.body.addEventListener("click", addClicker, 0);
```
### Better ctrl+f:  
(I could not make a link)
```
javascript:(function(){var count=0, text, dv;text=prompt("Search phrase:", "");if(text==null || text.length==0)return;hlColor=prompt("Color:", "yellow");dv=document.defaultView;function searchWithinNode(node, te, len){var pos, skip, spannode, middlebit, endbit, middleclone;skip=0;if( node.nodeType==3 ){pos=node.data.toUpperCase().indexOf(te);if(pos>=0){spannode=document.createElement("SPAN");spannode.style.backgroundColor= hlColor;middlebit=node.splitText(pos);endbit=middlebit.splitText(len);middleclone=middlebit.cloneNode(true);spannode.appendChild(middleclone);middlebit.parentNode.replaceChild(spannode,middlebit);++count;skip=1;}}else if( node.nodeType==1&& node.childNodes && node.tagName.toUpperCase()!="SCRIPT" && node.tagName.toUpperCase!="STYLE"){for (var child=0; child < node.childNodes.length; ++child){child=child+searchWithinNode(node.childNodes[child], te, len);}}return skip;}window.status="Searching for '"+text+"'...";searchWithinNode(document.body, text.toUpperCase(), text.length);window.status="Found "+count+" occurrence"+(count==1?"":"s")+" of '"+text+"'.";})();
```

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://support.github.com/contact) and we’ll help you sort it out.
