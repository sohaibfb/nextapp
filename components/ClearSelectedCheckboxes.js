
//this function will clear all selected checkboxes once leaving the page
export default function ClearSelectedCheckboxes(input){
    var allCheckboxes = document.querySelectorAll(input);
  

  
    for (var i = 0; i < allCheckboxes.length; i++) {
      
      allCheckboxes[i].checked = false;
      console.log('Selected checkboxes');

    }

    console.log('Clear Selected checkboxes');

}