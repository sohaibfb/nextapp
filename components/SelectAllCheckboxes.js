//this function will select all  checkboxes once header checkbox has been selected.
import ShowDeleteOption from "./ShowDeleteOption";
export default function selectAllcheckboxes(id,checkboxid) {

    //if(id=='benefitheadercheckbox'){
        
       
//}
    

    var headercheckbox = document.getElementById(id);

    if (headercheckbox.checked) {
       
        var allCheckboxes = document.querySelectorAll(checkboxid);

        for (var i = 0; i < allCheckboxes.length; i++) {

            allCheckboxes[i].checked = true;
        }
        ShowDeleteOption('deleteimage','input[id="benefitdatacheckbox"]');


    }
    else {
        var allCheckboxes = document.querySelectorAll(checkboxid);

        for (var i = 0; i < allCheckboxes.length; i++) {

            allCheckboxes[i].checked = false;
        }
        ShowDeleteOption('deleteimage','input[id="benefitdatacheckbox"]');


    }


     }

  