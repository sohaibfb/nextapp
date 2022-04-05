//this function will update form reuqired  fields  border.
export default function UpdateFormFields(){
   
    var input1=document.querySelectorAll("[title='userdefined']");
  for(var i=0;i<input1.length;i++){
    
    if(input1[i].value==='' && input1[i].hasAttribute('required') ){
    
     input1[i].style.borderColor='red';
  
    }
    else{

      input1[i].style.borderColor='gray';
    
      
      
    }
  }

}