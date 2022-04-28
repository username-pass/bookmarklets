//looks up information

javascript: 
var inf = prompt("info?");
inf = inf.replaceAll(' ', '-');
var tinf = inf-0;alert(inf.charAt(9));

var isnan = tinf != inf;
if (!isnan && inf.charAt(9)!=''){
let inft = '';
for (i=0;i<10;i++){
if(i==2 || i==5){
inft = inft+inf.charAt(i)+"-";
}else{inft = inft+inf.charAt(i)}
}
inf = inft
}
window.location = "https://www.usphonebook.com/" + inf;
