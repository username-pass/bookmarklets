/*does searches on multiple sites, good for research*/

javascript: (function() {

  var locations = ["https://google.com/search/?q=", "https://trends.google.com/trends/explore?q=", "https://en.wikipedia.org/w/index.php?search=", "https://www.wordtracker.com/search?query=", "https://www.etymonline.com/search?q=", "https://duckduckgo.com?q=", "http://web.archive.org/web/*/", "https://ourworldindata.org/search?q="];

  new Promise(setQuery => {
    var input = window.prompt('Enter your query:');
    if (input) setQuery(input);
  }).then(query => {
    alert("opening...");
    for (let i = 0; i<locations.length-1; i++) {

      window.open(locations[i] + query);
    }
  });
})();
