//opens a window

javascript: {}
var kill = confirm("Kill on unfocus?");
var win = window.open(prompt("URL to open?", "about:blank"), "win", "width=400,height=400");
if (kill) {
win.onblur = function() {
  win.close()
};
}
