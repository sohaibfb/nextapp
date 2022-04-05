//this function will show the delete option once one or more checkboxes has been selected.
export default function ShowDeleteOption(id,checkboxid) {
    var allCheckboxes = document.querySelectorAll(checkboxid);
    var checkboxflag = false;

    for (var i = 0; i < allCheckboxes.length; i++) {

      checkboxflag ||= allCheckboxes[i].checked

    }




    if (checkboxflag == false) {

      document.getElementById(id).style.opacity="0.2";
      document.getElementById(id).style.cursor = "auto";

    }

    else {
      document.getElementById(id).style.opacity ="1";
      document.getElementById(id).style.cursor = "pointer";
   
    }

  }