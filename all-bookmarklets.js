function windwow() {
  var list = "";
  var toget = "";
  var url = "https://raw.githubusercontent.com/username-pass/bookmarklets/dev/";

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

          for (i = 0; i < 3; i++) {
            listwindow.document.write("<br>");
          }
          listwindow.document.write("<b>Dev Branch</b> <br><br>")
          setTimeout(() => {
            function makelist() {
              for (i = 0; i < splist.length; i++) {
                //experimental stuff

                var vtxt = i + ": " + splist[i] + "<br>";
                //listwindow.document.write("<a href="#" onclick="executeSomething(); return false">"+vtxt+"</a>");
                listwindow.document.write("<a href='javascript: alert(i);'>" + vtxt + "</a>");

                //listwindow.document.write(vtxt);

              }
            }



            function makebuttons() {

              var c = document.createElement('button');
              c.style.position = 'fixed';
              c.id = "button";
              c.style.zIndex = 10000;
              c.style.top = '50px';
              c.style.right = '7px';
              c.innerHTML = 'Close';
              c.style.backgroundColor = '#333';
              c.style.color = '#ccc';
              c.onclick = function() {
                close();
              };


              var b = document.createElement('div');
              b.style.position = 'fixed';
              b.editable = 'false';
              b.style.zIndex = 9999;
              b.style.top = '10px';
              b.autofocus = 'true';
              b.innerHTML = "<b>" + announcement + "</b>";
              b.style.borderRadius = "10px";
              listwindow.document.body.appendChild(b);

              c.style.borderRadius = "5px";
              listwindow.document.body.appendChild(c);
              var t = document.createElement('textarea');
              t.style.position = 'fixed';
              t.id = "textarea";
              t.style.zIndex = 9999;
              t.style.top = '50px';
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
