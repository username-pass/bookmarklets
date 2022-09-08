# My-Bookmarklets-Collection
Just all my bookmarklets in one place

If you have any new bookmarklets you wish to add, then please open a pull request with the bookmarklet so I can add it. (Not everything will be accepted)

# How to get it

paste the below code into the url of a bookmark, then click it!

javascript:void%20function(){function%20windwow(){function%20getlist(b){let%20c=[],d=0;for(let%20a=2;a%3Cb.length;a+=2)c[d]=b[a],d++;return%20c}var%20list=%22%22,toget=%22%22,url=%22https://raw.githubusercontent.com/Detadde/bookmarklets/main/%22;fetch(url+%22announcements.txt%22).then(function(resp){resp.text().then(function(announcement){fetch(url+%22list.txt%22).then(function(response){response.text().then(function(text){var%20list=text,listwindow=window.open(%22%22,%22listwindow%22,%22width=200,height=1000%22),splist=list.split(%22%20%22);splist.shift(),splist=splist.sort();var%20ltxt=%22%22;for(i=0;2%3Ei;i++)listwindow.document.write(%22%3Cbr%3E%22);listwindow.document.write(%22%3Cb%3E%22+announcement+%22%3C/b%3E%3Cbr%3E%3Cbr%3E%22);let%20urllist=url.split(%22/%22);listwindow.document.write(%22%3Cb%3E%22+urllist[5]+%22%20Branch%3C/b%3E%20%3Cbr%3E%22),setTimeout(()=%3E{function%20makelist(){for(i=0;i%3Csplist.length;i++){var%20a=i+%22:%20%22+splist[i]+%22%3Cbr%3E%22;ltxt+=a}listwindow.document.write(ltxt)}function%20makebuttons(){var%20a=document.createElement(%22button%22);a.style.position=%22fixed%22,a.id=%22button%22,a.style.zIndex=1e4,a.style.top=%2210px%22,a.style.right=%227px%22,a.innerHTML=%22Close%22,a.style.backgroundColor=%22%23333%22,a.style.color=%22%23ccc%22,a.onclick=function(){close()};var%20c=document.createElement(%22div%22);c.style.position=%22absolute%22,c.style.zIndex=9998,c.style.top=%2290px%22,c.innerHTML=%22%3Cb%3Ea%3C/b%3E%22,c.style.borderRadius=%2210px%22;var%20d=document.createElement(%22div%22);d.style.position=%22absolute%22,d.style.zIndex=9999,d.style.top=%2250px%22,d.innerHTML=%22%3Cb%3E%22+announcement+%22%3C/b%3E%22,d.style.borderRadius=%2210px%22,a.style.borderRadius=%225px%22,listwindow.document.body.appendChild(a);var%20b=document.createElement(%22textarea%22);b.style.position=%22fixed%22,b.id=%22textarea%22,b.style.zIndex=9999,b.style.top=%2210px%22,b.autofocus=%22true%22,listwindow.onblur=function(){close()},b.style.borderRadius=%2210px%22,listwindow.addEventListener(%22keydown%22,function(a){var%20b=`%20${a.code}`;(%22%20Enter%22==b||%22%20Escape%22==b)%26%26close()}),listwindow.document.body.appendChild(b)}function%20close(){setTimeout(()=%3E{function%20dobml(){toget-1!=isNaN%26%26(toget=splist[toget]),toget=url+toget+%22.js%22,fetch(toget).then(function(response){response.text().then(function(text){var%20txt=text;eval(txt)})})}toget=listwindow.textarea.value,toget=toget.slice(0,-1),listwindow.close(),setTimeout(()=%3E{dobml()},1e3)},100)}makelist(),makebuttons()},500)})})})})}windwow()}();

## Star if you enjoy this!



