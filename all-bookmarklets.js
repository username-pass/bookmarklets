javascript: 
var toget = prompt("Which bookmarklet do you wish to use? \n embedder, title game, etc...", "embedder2");
if (toget == "embedder2") {toget = "https://raw.githubusercontent.com/mrphi06/My-Bookmarklets-Collection/main/"+toget+".js"};

fetch(toget).then(function(response){response.text().then(function(text){eval(text);});});
alert(toget);

/*
TESTING:

javascript:
var list = "";
var toget = "";
fetch("https://raw.githubusercontent.com/mrphi06/My-Bookmarklets-Collection/main/list.txt").then(function(response) {
  response.text().then(function(text) {
    var list = text;
    var toget = prompt("Which bookmarklet do you wish to use? \n"+list);
  });
});


var txt = "";
var toget = "https://raw.githubusercontent.com/mrphi06/My-Bookmarklets-Collection/main/" + toget + ".js";

fetch(toget).then(function(response) {
  response.text().then(function(text) {
    txt = text;
    alert("#1 \n"+text);
    eval(txt);
  });
});
*/
