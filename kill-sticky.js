/*kills stickys*/

javascript:(function()%7B(function () %7Bvar i%2C elements %3D document.querySelectorAll("body *")%3Bfor (i %3D 0%3B i < elements.length%3B i%2B%2B) %7Bif (getComputedStyle(elements%5Bi%5D).position %3D%3D%3D "fixed") %7Belements%5Bi%5D.parentNode.removeChild(elements%5Bi%5D)%3B%7D%7D%7D)()%7D)()
