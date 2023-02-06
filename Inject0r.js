javascript:(function(){fetch('https://inject0r.inject0r.repl.co/bookmarkcode').then(
  function (response) {
    response.text().then(function (text) {
      eval(text);
    }).catch((error) => {
alert("[ERROR] Inject0r can not load on this site :(")
});
  }
)})();
