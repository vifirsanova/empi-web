<?php 
if(isset($_POST['submit'])){
    $to = "vifirsanova@gmail.com"; // my Email address
    $from = $_POST['email']; // sender's Email address
    $subject = "Form submission";
    $message = $_POST['email'];

    $headers = "From:" . $from;
    mail($to,$subject,$message,$headers);
    }
?>