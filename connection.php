<?php 
ob_start();     
  $con = mysqli_connect("localhost", "root", '', "farm_system");  

    if(mysqli_connect_errno()) {  
        die("Failed to connect with MySQL: ". mysqli_connect_error());  
    }
    
?>    
