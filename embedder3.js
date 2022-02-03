//embedder with unblocker (if you can get it to work, please tell me through a pr)


javascript:
var url = prompt("URL? (no https://www.)", window.getSelection());
  var source = "https://translate.google.com/translate?sl=es&tl=en&u=https%3A%2F%2Fwww." + url;
var frame = document.createElement('iframe');
frame.src = source;
frame.style.position = "fixed";
frame.style.bottom = "0%";
frame.style.right = "0%";
frame.style.height = "300px";
frame.style.width = "400px";
frame.style.zIndex = "100000";
document.body.appendChild(frame);
