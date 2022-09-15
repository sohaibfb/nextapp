import DisableImage from "./DisableImg";
import EnableImage from "./EnableImage";

//this function will show the delete option once one or more checkboxes has been selected.
export default function EnableOption(id,checkboxid) {
    var allCheckboxes = document.querySelectorAll(checkboxid);
    var checkboxflag = false;

    for (var i = 0; i < allCheckboxes.length; i++) {

      checkboxflag ||= allCheckboxes[i].checked

    }




    if (checkboxflag == false) {

      //document.getElementById(id).style.opacity="0.2";
     // document.getElementById(id).style.cursor = "auto";
     DisableImage(id);

    }

    else {
      EnableImage(id);
   
    }

  }