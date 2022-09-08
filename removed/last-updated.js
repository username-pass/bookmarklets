//sees when a site was last updated (credit to:https://gist.githubusercontent.com/adamddurrant/9a0236f201ed1f622679210650686554/raw/eb80b1c9507f4d74acb70662145b6b3c1c99f488/lastmodified) 
function Lmi(w, p) {
  var i, t = '';
  for (i = 0; i < w.frames.length; i++) t += Lmi(w.frames[i], p + '    ');
  return (p + w.document.lastModified + ' ' + w.location + ' ' + (w.name ? (' (' + w.name + ')') : '') + '\n' + t);
}
alert('Last modified:\n\n' + Lmi(window, ''));
