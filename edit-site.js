javascript: if(document.body.contentEditable !== 'true') {
    document.body.contentEditable = 'true'; document.designMode='on';alert("edit mode activated"); void 0} 
else {    document.body.contentEditable = 'false'; document.designMode='off';alert("edit mode deactivated"); void 0}
