//executes code from a url (useful so I don't have to constantly add things)
//some code from a notepad bookmarklet (can't find source)

if (confirm("direct code?")) {
	function directCode() {
  var parentID = 'a3q_parent1';
  var dID = 'a3q_code';
  var buttonID = 'a3q_close_button1';
  var saveThrottleSpeed = 100;
  var lastSave = Date.now();
  var waitCallback;

  function a3q_Save(force) {
    force = force || false;
    clearTimeout(waitCallback);
    if (force || Date.now() - lastSave >= saveThrottleSpeed) {
      lastSave = Date.now();
      localStorage.setItem('note_code', a3q_GetContents());
    } else {
      waitCallback = setTimeout(function() {
        a3q_Save();
      }, saveThrottleSpeed - Date.now());
    }
  };

  function a3q_Load() {
    return localStorage.getItem('note_code') || '';
  };

  function a3q_GetContents() {
    return document.getElementById(dID).innerHTML;
  };

  function a3q_Unload() {
    var code = a3q_GetContents();
    a3q_Save(true); 
    c.removeEventListener('onclick', c.onclick);
    c.parentNode.removeChild(c);
    d.removeEventListener('onkeyup', a3q_Save);
    d.parentNode.removeChild(d);
    
    while (code.replace("</div>", "<div>") != code) {
code = code.replace("</div>", "<div>");}
		while (code.replace("<div>", "\n") != code) {
code = code.replace("<div>", "\n");}	
		while (code.replace("<br>", "\n") != code) {
code = code.replace("<br>", "\n");}
		while (code.replace("&nbsp;", "\n") != code) {
code = code.replace("&nbsp;", "\n");}	

    eval(code);
    

  };
  var d = document.getElementById(dID);
  var c = document.getElementById(buttonID);
  if (d) {
    a3q_Unload();
  } else {
    var d = document.createElement('textarea');
    d.id = dID;
    d.innerHTML = a3q_Load();
    d.style.backgroundColor = '#333';
    d.style.color = '#ccc';
    d.style.border = '1px solid #ccc';
    d.style.position = 'fixed';
    d.style.width = '50%';
    d.style.height = '50%';
    d.style.right = '2%';
    d.style.bottom = '2%';
    d.style.padding = '2px';
    d.style.zIndex = 10000;
    d.contentEditable = true;
    document.body.appendChild(d);
    d.focus();
    var lastRun = Date.now();
    d.onkeyup = a3q_Save;
    var c = document.createElement('button');
    c.style.position = 'fixed';
    c.id = buttonID;
    c.style.zIndex = 10000;
    c.style.bottom = '2%';
    c.style.right = '2%';
    c.innerHTML = 'Run';
    c.style.backgroundColor = '#333';
    c.style.color = '#ccc';
    c.onclick = function() {
      a3q_Unload();
    };
    document.body.appendChild(c);
  }
}
	directCode();
} else if (confirm("open from URL?")) {
  toget = prompt("URL to get code from?");
  fetch(toget).then(function(response) {
    response.text().then(function(text) {
      txt = text;
      eval(txt);
    })
  })
}
