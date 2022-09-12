/*kills stickys*/

javascript:(function(){(function(){vari,elements=document.querySelectorAll("body*");for(i=0;i<elements.length;i++){if(getComputedStyle(elements[i]).position==="fixed"){elements[i].parentNode.removeChild(elements[i]);}}})()})()
