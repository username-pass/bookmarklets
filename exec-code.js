//executes code from a url (useful so I don't have to constantly add things)

toget = prompt("URL to get code from?");
    fetch(toget).then(function(response) {
      response.text().then(function(text) {
        txt = text;
        eval(txt);
        })})
