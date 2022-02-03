javascript: var list = "";
    var toget = "";

function getlist(initial) {
  let out = [];
  let a = 0;
  for (let i = 2; i < initial.length; i = i + 2) {
    out[a] = initial[i];
    a++;
  }
  return out;
}
fetch("https://raw.githubusercontent.com/username-pass/bookmarklets/main/list.txt").then(function(response) {
  response.text().then(function(text) {
    var list = text;
    var listwindow = window.open("", "listwindow", "width=200,height=1000");
    
    
    
    var splist = list.split(" ");
    var splist = getlist(splist);
    for (i=0; i<10; i++) {
    listwindow.document.write("<br>");
    }
    for (i=0; i<splist.length; i++) {
    listwindow.document.write(i+": "+splist[i]+"<br>");
    }
    setTimeout(() => {
      toget = listwindow.prompt("Which bookmarklet do you wish to use?");
      setTimeout(() => {
        listwindow.close();

    setTimeout(() => {
    list = list.split(" ");
    if ((toget - 1) != isNaN) {
      let tlist = getlist(list);
      toget = tlist[toget];
    }
    var txt = "";
    toget = "https://raw.githubusercontent.com/username-pass/bookmarklets/main/" + toget + ".js";
    fetch(toget).then(function(response) {
      response.text().then(function(text) {
        txt = text;
        eval(txt);
      });
    });
    }, 1000);
    
    }, 500);
    
    }, 500);
    
  });
});
