<!DOCTYPE html>
<html>
<head>

<link rel="stylesheet" href="../../../style.css">

</head>
<body>
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

 else{

$sql = "select english_description from code_setup WHERE code_type='5'";

$result=$conn->query($sql);
if ($result == TRUE) {
    
    if( $result->num_rows>0){

      echo "<select name='function'>";  
     
while($row=$result->fetch_assoc()){
   
   

    echo "<option value='".$row['english_description']."'>".$row['english_description']."</option>";
    

   
   

}
echo "</select>";
}
}
    
 }
 

$conn->close();



?>
</body>
</html>
