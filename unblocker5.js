//uses https://sciencehelp.herokuapp.com/c/ as a proxy and unblocks websites.
javascript: 

function    encode(str){
        if (!str) return str;
        return encodeURIComponent(str.toString().split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join(''));
    }
function    decode(str){
        if (!str) return str;
        return decodeURIComponent(str).split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join('');
    }



if (confirm("science help unblocker?")) {
var loc = prompt("URL? (HTTPS://)",window.getSelection());loc = encode(loc); /*window.location = */alert("https://sciencehelp.herokuapp.com/c/"+loc);
}


