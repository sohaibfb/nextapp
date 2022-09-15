//var functionflag;
var Value= document.getElementById('scode').value;
window.onload=function(){
var data=new FormData();
//var Value= document.getElementById('scode').value;


data.append('code',Value);
//if(document.getElementById('functionflag').value!=null){
  //functionflag=document.getElementById('functionflag').value;
//data.append('functionflag',functionflag);
//}
//else{
 // functionflag=0;
  //data.append('functionflag',functionflag);

//}

  var xhttp=new this.XMLHttpRequest();
  
  xhttp.onreadystatechange=function() {
  
      if(this.readyState==4 && this.status==200){
  
          document.getElementById("tbody").innerHTML=this.responseText;
         
      }

    
      
  };
  
  xhttp.open("POST","../../loadsettings.php",true);
  xhttp.send(data);
  
  }


// Get the button that opens the modal
var btn = document.getElementById("addsettingsbtn");


// When the user clicks the button, open the modal 
btn.onclick = function() {

  var table =document.getElementById("tbody");
  var row = table.insertRow();
  var cell1=row.insertCell(0);
 // cell1.innerHTML="<input type='text'/>"
  var cell2=row.insertCell(1);
  var cell3;
  //var functionflag=0;
  //functionflag= document.getElementById('functionflag').value;
 
  if(Value==6){
   cell3=row.insertCell(2);
   var xhttpdepartment=new XMLHttpRequest(); 
   xhttpdepartment.onreadystatechange=function() {
  
    if(this.readyState==4 && this.status==200){

      cell3.innerHTML=this.responseText;  //"<input type='text', name='arabicdesctext11'/>";
       
    }

  };
  
  xhttpdepartment.open("POST","../../loaddepartmentsettings.php",true);
  xhttpdepartment.send();
  }
  var cell4=row.insertCell(-1);
  var cell5=row.insertCell(-1);
  cell4.innerHTML="<input type='text', name='engdesctext'/>";  
  
  cell5.innerHTML="<input type='text', name='arabicdesctext'/>";
  
}



