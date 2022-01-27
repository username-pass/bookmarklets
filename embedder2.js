/*second (better) embedder*/

javascript:void(document.body.innerHTML += "<iframe id='extent-frame' src='" + prompt("URL: ") + "' style='width: 40vw; height: 40vh; border: 1px outset #444444; position: absolute; bottom: 0vh; right: 0vw; z-index: 99999999999;'></iframe><button onclick='alert(); document.getElementById(\u0022extent-frame\u0022).remove();' style='background: #000000; border: none; border-radius: 10px; color: #00ff00; position: absolute; top: 5px; left: 5px; z-index: 9999999999;'>Close</button>");
