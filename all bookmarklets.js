javascript: fetch(prompt("Which bookmarklet do you wish to use? \n embedder, title game, etc...", "embedder")).then(function(response){response.text().then(function(text){eval(text);});});
