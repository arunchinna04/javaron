<?php

$details = json_decode(stripslashes($_POST['details']));
 
$to = 'aron.raj35@gmail.com';
$subject = 'Admission For Classes';
$headers .= 'Cc: arunchinna04@gmail.com' . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
$msg = '<html><p>Student Details</p>
<p>Name: '.$details->name.'<br />
Mobile: '.$details->mobile.'<br />
Email: '.$details->email.'<br />
I Am: '.$details->position.'<br>
Medium Spotted'.$details->medium .'</p></html>';


   // mail('aron.raj35@gmail.com','Admission','Sending Mail function is over. Send me the fields i will add in admission page');
	 mail($to,$subject,$msg,$headers);
?>