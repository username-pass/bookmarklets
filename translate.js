//unblocks any website >:D

javascript:(function(){
  if (confirm("translate unblocker?")){
  var val = prompt("Enter the url of the page you want to unblock, and exclude the https:// and the www. YOU MUST be on a website for this code to execute, if the url bar at the top of your screen is blank, this will not work. Made by Marc#8019", window.getSelection());location = "https://translate.google.com/translate?sl=es&tl=en&u=https%3A%2F%2Fwww." + escape(val);
}
})()
