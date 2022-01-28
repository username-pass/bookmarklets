/*gets duplicated content*/

javascript:(function() {var targetUrl="https://www.google.com/search?q=";new Promise(setQuery => {var input = window.prompt('Enter your query:');if (input) setQuery(input); }).then(query =>window.open(targetUrl + 'site:' + location.hostname + ' "' + query + '"')); })();
