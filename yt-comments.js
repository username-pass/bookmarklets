//just shows the comments of any given youtube video 

javascript:
insert = function insert(main_string, ins_string, pos) {
  if (typeof(pos) == "undefined") {
    pos = 0;
  }
  if (typeof(ins_string) == "undefined") {
    ins_string = '';
  }
  return main_string.slice(0, pos) + ins_string + main_string.slice(pos);
}

location = insert(window.location.href, "xtras", 19);
