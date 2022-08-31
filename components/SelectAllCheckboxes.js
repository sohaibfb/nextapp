//this function will select all  checkboxes once header checkbox has been selected.
import EnableOption from "./EnableOptions";
export default function selectAllcheckboxes(id,checkboxid,enableid) {

    //if(id=='benefitheadercheckbox'){
        
       
//}
    

    var headercheckbox = document.getElementById(id);

    if (headercheckbox.checked) {
       
        var allCheckboxes = document.querySelectorAll(checkboxid);

        for (var i = 0; i < allCheckboxes.length; i++) {

            allCheckboxes[i].checked = true;
        }
       


    }
    else {
        var allCheckboxes = document.querySelectorAll(checkboxid);

        for (var i = 0; i < allCheckboxes.length; i++) {

            allCheckboxes[i].checked = false;
        }
        EnableOption('deleteimage','input[id="benefitdatacheckbox"]');


    }

    EnableOption(enableid,checkboxid);


     }

  