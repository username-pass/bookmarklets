//uses https://unblock.endinternetcensorship.repl.co/main/ as a proxy and unblocks websites.
javascript: 
if (confirm("innerturtle unblocker?")) {
var loc = prompt("URL? (no HTTPS://)",window.getSelection()); loc = xor(loc); window.location = "https://uvproxy.innerturtle123.repl.co/main/"+loc;
}

function xor (str) {
    encode(str){
        if (!str) return str;
        return encodeURIComponent(str.toString().split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join(''));
    },
    decode(str){
        if (!str) return str;
        return decodeURIComponent(str).split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join('');
    },
};
