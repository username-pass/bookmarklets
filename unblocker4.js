//uses https://unblock.endinternetcensorship.repl.co/main/ as a proxy and unblocks websites.

javascript: 
if (confirm("fracital-static unblocker?")) {
var loc = prompt("URL? (no HTTPS://)",window.getSelection()); window.location = "https://fracital-static.username-pass.repl.co/"; navigator.clipboard.writeText(loc); prompt("just paste it!",loc);
}
