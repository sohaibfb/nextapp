import DisableImage from "./Disableimage";

//this function will clear all selected checkboxes once leaving the page
export default function ClearSelectedCheckboxes(id){
    var allCheckboxes = document.querySelectorAll('input[type=checkbox]');
    //document.getElementById(id).style.opacity = "0.2";
   // document.getElementById(id).style.cursor = "auto";
   DisableImage(id);

  
    for (var i = 0; i < allCheckboxes.length; i++) {

      allCheckboxes[i].checked = false;
    }

}