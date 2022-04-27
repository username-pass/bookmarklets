 
javascript:
function windwow () {
		var list = "";
    var toget = "";
    var url = "https://raw.githubusercontent.com/username-pass/bookmarklets/main/";
function getlist(initial) {
  let out = [];
  let a = 0;
  for (let i = 2; i < initial.length; i = i + 2) {
    out[a] = initial[i];
    a++;
  }
  return out;
}
fetch(url+"list.txt").then(function(response) {
  response.text().then(function(text) {
    var list = text
    var listwindow = window.open("", "listwindow", "width=200,height=1000");
    
    
    
    var splist = list.split(" ");
    splist.shift();
    splist = splist.sort();	
    
		for (i=0; i<3; i++) {
    listwindow.document.write("<br>");
    }
   
   listwindow.document.write("<b>Common Release Branch</b> <br> <br>")
   
    setTimeout(() => {
      function makelist() {
      for (i=0; i<splist.length; i++) {
    listwindow.document.write(i+": "+splist[i]+"<br>");
    }
      }
     function makebuttons (){
        
        var c = document.createElement('button');
        c.style.position = 'fixed';
        c.id = "button";
        c.style.zIndex = 10000;
        c.style.top = '10px';
        c.style.right = '7px';
        c.innerHTML = 'Close';
        c.style.backgroundColor = '#333';
        c.style.color = '#ccc';
        c.onclick = function() {
          close();
        };
        c.style.borderRadius = "5px";
        listwindow.document.body.appendChild(c);
        var t = document.createElement('textarea');
        t.style.position = 'fixed';
        t.id = "textarea";
        t.style.zIndex = 9999;
       	t.style.top = '10px';
        t.autofocus = 'true';
        t.onblur = function() {
        	close();
        };
        t.style.borderRadius = "10px";
        
        t.addEventListener('keydown', enterclose);
        function enterclose(e) {
          var key = ` ${e.code}`;
          if (key == " Enter" || key == " Escape") {
          close();
          }
				}
        listwindow.document.body.appendChild(t);
        
     } 
     makelist();
     makebuttons();
      
      
      function close() {setTimeout(() => {
 				toget = listwindow.textarea.value;
				toget = toget.slice(0, -1);
			listwindow.close();
       
       function dobml() {
    
    if ((toget - 1) != isNaN) {
      toget = splist[toget];
    }
    toget = url + toget + ".js";
    fetch(toget).then(function(response) {
      response.text().then(function(text) {
        var txt = text;
        eval(txt);
        
      });
      
    });
    }
 
    setTimeout(() => {dobml();}, 1000);
    
    }, 100);}
      
    
    }, 500);
    
  });
});
}
windwow();

