alert("allows you to edit the site");

javascript: if(document.body.contentEditable !== 'true') {
    document.body.contentEditable = 'true'; document.designMode='on'; void 0
} else {
    document.body.contentEditable = 'false'; document.designMode='off'; void 0
}
