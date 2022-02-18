//adds the inspect element (credit to snowlord)


  var x = document.createElement("script");
  x.src = "https://cdn.jsdelivr.net/gh/SnowLord7/devconsole@master/main.js";
  x.onload = alert("LoadedDeveloperConsole!");
  document.head.appendChild(x);
