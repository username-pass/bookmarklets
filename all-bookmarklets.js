javascript: 
var toget = prompt("Which bookmarklet do you wish to use? \n embedder, title game, etc...", "embedder2");
if (toget == "embedder2") {toget = "https://raw.githubusercontent.com/mrphi06/My-Bookmarklets-Collection/main/"+toget+".js"};

fetch(toget).then(function(response){response.text().then(function(text){eval(text);});});
alert(toget);
