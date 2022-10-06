 var data = [];
    var count = 0;
    var list = "";
    var toget = "";
    var url = "https://raw.githubusercontent.com/username-pass/bookmarklets/main/";
    const autocomplete = document.getElementById("autocomplete");
    const resultsHTML = document.getElementById("results");
    const iframe = document.getElementById("frame");
    fetch(url + "list.txt").then(function(response) {
      response.text().then(function(text) {
        var list = text
        var splist = list.split(" ");
        splist.shift();
        splist = splist.sort();
        var ltxt = '';
        console.log(splist);
        data = splist;
      });
    });
    autocomplete.oninput = function() {
      let results = [];
      const userInput = this.value;
      resultsHTML.innerHTML = "";
      if (userInput.length > 0) {
        results = getResults(userInput);
        resultsHTML.style.display = "block";
        for (i = 0; i < results.length; i++) {
          resultsHTML.innerHTML += "<li>" + results[i] + "</li>";
        }
      }
    };
    autocomplete.addEventListener('keydown', function(e) {
      let results = [];
      const userInput = this.value;
      resultsHTML.innerHTML = "";
      if (userInput.length > 0) {
        results = getResults(userInput);
        resultsHTML.style.display = "block";
        for (i = 0; i < results.length; i++) {
          resultsHTML.innerHTML += "<li>" + results[i] + "</li>";
        }
      }
      keyp(e, results);
    });

    function keyp(e, results) {
      var key = ` ${e.code}`;
      if (key == " Enter" || key == " Tab") {
        var isIn = results.includes(autocomplete.value + "\n");
        if (isIn) {
          submit(autocomplete.value);
        }
        autocomplete.value = results[0];
      }
    }

    function getResults(input) {
      const results = [];
      for (i = 0; i < data.length; i++) {
        if (input === data[i].slice(0, input.length)) {
          results.push(data[i]);
        }
      }
      return results;
    }

    function getlist(initial) {
      let out = [];
      let a = 0;
      for (let i = 2; i < initial.length; i = i + 2) {
        out[a] = initial[i];
        a++;
      }
      return out;
    }

    function submit(value) {
      let toget = value;
      toget = url + toget + ".js";
      fetch(toget).then(function(response) {
        response.text().then(function(text) {
          var txt = text;
          frame.eval(txt);
        });
      });
    }
