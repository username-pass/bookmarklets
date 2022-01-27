javascript: 
var toget = prompt("Which bookmarklet do you wish to use? \n embedder, title game, etc...", "embedder");
if (toget == "embedder") {toget = "prompt("Which bookmarklet do you wish to use? \n embedder, title game, etc...", "embedder")");

fetch(toget).then(function(response){response.text().then(function(text){eval(text);});});
