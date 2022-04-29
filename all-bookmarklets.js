function windwow() {
  var list = "";
  var toget = "";
  var url = "https://raw.githubusercontent.com/username-pass/bookmarklets/main/";

  function getlist(initial) {
    let out = [];
    let a = 0;
    for (let i = 2; i < initial.length; i = i + 2) {
      out[a] = initial[i];
      a++;
    }
    return out;
  }

  fetch(url + "announcements.txt").then(function(resp) {
    resp.text().then(function(announcement) {


      fetch(url + "list.txt").then(function(response) {
        response.text().then(function(text) {
          var list = text
          var listwindow = window.open("", "listwindow", "width=200,height=1000");



          var splist = list.split(" ");
          splist.shift();
          splist = splist.sort();
          //The important stuff: 
          var ltxt = '';
          for (i = 0; i < 2; i++) {
            listwindow.document.write("<br>");
          }
          listwindow.document.write("<b>" + announcement + "</b><br><br>");
          let urllist = url.split("/");
          listwindow.document.write("<b>" + urllist[5] + " Branch</b> <br>")
          setTimeout(() => {
            function makelist() {
              for (i = 0; i < splist.length; i++) {
                //experimental stuff

                var vtxt = i + ": " + splist[i] + "<br>";
                //listwindow.document.write("<a href='javascript: alert(i);'>" + vtxt + "</a>");
                ltxt = ltxt + vtxt;


              }
              listwindow.document.write(ltxt);
            }



            function makebuttons() {

              var c = document.createElement('button');
              c.style.position = 'fixed';
              c.id = "button";
              c.style.zIndex = 10000;
              c.style.top = '10px';
              c.style.right = '7px';
              c.innerHTML = 'Close';
              c.style.backgroundColor = '#333';
              c.style.color = '#ccc';
              c.onclick = function() {
                close();
              };

              var listtxt = document.createElement('div');
              listtxt.style.position = 'absolute';
              listtxt.style.zIndex = 9998;
              listtxt.style.top = '90px';
              listtxt.innerHTML = "<b>a</b>";
              listtxt.style.borderRadius = "10px";
              //listtxt.document.body.appendChild(listtxt);


              var b = document.createElement('div');
              b.style.position = 'absolute';
              b.style.zIndex = 9999;
              b.style.top = '50px';
              b.innerHTML = "<b>" + announcement + "</b>";
              b.style.borderRadius = "10px";
              //listwindow.document.body.appendChild(b);




              c.style.borderRadius = "5px";
              listwindow.document.body.appendChild(c);
              var t = document.createElement('textarea');
              t.style.position = 'fixed';
              t.id = "textarea";
              t.style.zIndex = 9999;
              t.style.top = '10px';
              t.autofocus = 'true';
              listwindow.onblur = function() {
                close();
              };
              t.style.borderRadius = "10px";

              listwindow.addEventListener('keydown', enterclose);
              listwindow.document.body.appendChild(t);

              function enterclose(e) {
                var key = ` ${e.code}`;
                if (key == " Enter" || key == " Escape") {
                  close();
                }
              }

            }
            makelist();
            makebuttons();


            function close() {
              setTimeout(() => {
                toget = listwindow.textarea.value;
                toget = toget.slice(0, -1);
                listwindow.close();

                function dobml() {

                  if ((toget - 1) != isNaN) {
                    toget = splist[toget];
                  }
                  toget = url + toget + ".js";
                  fetch(toget).then(function(response) {
                    response.text().then(function(text) {
                      var txt = text;
                      eval(txt);

                    });

                  });
                }

                setTimeout(() => {
                  dobml();
                }, 1000);

              }, 100);
            }


          }, 500);

        });
      });

    })

  })


}
windwow();
