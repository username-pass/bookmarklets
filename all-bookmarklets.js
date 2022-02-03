javascript: var list = "";

function getlist(initial) {
  let out = [];
  let a = 0;
  for (let i = 2; i < initial.length; i = i + 2) {
    out[a] = initial[i];
    a++;
  }
  return out;
}
fetch("https://raw.githubusercontent.com/username-pass/bookmarklets/main/list.txt").then(function(response) {
  response.text().then(function(text) {
    var list = text;
    var toget = prompt("Which bookmarklet do you wish to use? \n current bookmarklets: \n " + list);
    var list = list.split(" ");
    if ((toget - 1) != isNaN) {
    let tlist = getlist(list);
    toget = tlist[toget];
    }
    var txt = "";
    var toget = "https://raw.githubusercontent.com/username-pass/bookmarklets/main/" + toget + ".js";
    fetch(toget).then(function(response) {
      response.text().then(function(text) {
        txt = text;
        eval(txt);
      });
    });
  });
});
