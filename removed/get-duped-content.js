/*gets duplicated content*/

javascript: (function() {
  function selection() {
    if (window.getSelection)
      return window.getSelection();
  }
  var targetUrl = "https://www.duckduckgo.com?q=";
  new Promise(setQuery => {
    var input = window.prompt('Enter your query:', window.getSelection());
    if (input) setQuery(input);
  }).then(query => window.open(targetUrl + 'site:' + location.hostname + ' "' + query + '"'));
})();
