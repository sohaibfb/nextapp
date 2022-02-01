<?php

$host="localhost";
$user="root";
$passwd="MyadminMe87";
$database="hrme";
$flag=0;

//create connection
$conn=new mysqli($host,$user,$passwd,$database);
if($conn->connect_error){

    die("connection failed :".$conn->connect_error);
  }


  

if(isset($_POST['submit'])){


 $engdesc=$_POST['engdesctext'];
 $arabicdesc=$_POST['arabicdesctext'];
 $scode=$_POST['scode'];
 $relatedcode=$_POST['function'];
 $code='1';
 $relatecode='0';


$sql1 = "SELECT max(code) from code_setup where code_type='$scode'";

$result=$conn->query($sql1);
if($result==true){

  if( $result->num_rows>0){
    $row=$result->fetch_assoc();
    $code=$row["max(code)"];
    $code=$code+1;
  }

   
 $sql2= "SELECT code from code_setup where english_description='$relatedcode'"; 
 
 $functionresult=$conn->query($sql2);
if($functionresult==true){

  if($functionresult->num_rows>0){
    $functionrow=$functionresult->fetch_assoc();
    $relatecode=$functionrow["code"];
  }
  
 
   

 $sql3= "INSERT INTO code_setup(code_type,code,related_code,english_description,arabic_description) VALUES ('$scode','$code','$relatecode','$engdesc','$arabicdesc')";

 

 if($conn->query($sql3)===true){
   switch($scode)
   {
   case 1 : 
    header("Location:/test/settings/mastersettings/personnelsettings/Nationality.html");
    
    break;
    case 2 :
    header("Location:/test/settings/mastersettings/personnelsettings/Religion.html");
    break;
    case 3 :
      header("Location:/test/settings/mastersettings/personnelsettings/HomeCountry.html");
      break;
    case 4 :
      header("Location:/test/settings/mastersettings/employementsettings/positions.html");
      break;
    case 5 :
      header("Location:/test/settings/mastersettings/structuresettings/Functions.html");
      break;
    case 6 :
      header("Location:/test/settings/mastersettings/structuresettings/Sections.html");
      break;
    case 7 :
      header("Location:/test/settings/mastersettings/structuresettings/Locations.html");
      break;
   }
   }
 
 else {
   // header("Location:/test/Employee Profile.php");
    echo "Error: " . $sql3 . "<br>" . $conn->error;
   }

  }
  else
{
    echo "Error: " . $sql2. "<br>" .$conn ->error;
}
  
}


else
{
    echo "Error: " . $sql1. "<br>" .$conn ->error;
}

}



$conn->close();



?>

