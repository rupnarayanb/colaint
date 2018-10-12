<?php 
			
	/*if(isset($_POST['phone'])){*/
		$to = "apaswimmer21@gmail.com"; // this is your Email address
		//$from = $_POST['email']; // this is the sender's Email address
		//$attachment = $_FILES['file_attach'];
		
	$message = '<html><body>';
	$message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
	$message .= "<tr><td><strong>First Name:</strong> </td><td>" . strip_tags($_POST['first_names']) . "</td></tr>";
	$message .= "<tr><td><strong>Last Name:</strong> </td><td>" . strip_tags($_POST['last_names']) . "</td></tr>";
	$message .= "<tr><td><strong>Email Address :</strong> </td><td>" . strip_tags($_POST['career_email']) . "</td></tr>";
	$message .= "</table>";
	$message .= "</body></html>";
	
	
	$file_attached = false;
    if(isset($_POST['first_names'])) //check uploaded file
    {
		
        //get file details we need
        $file_tmp_name    = $_FILES['file_attach']['tmp_name'];
        $file_name        = $_FILES['file_attach']['name'];
        $file_size        = $_FILES['file_attach']['size'];
        $file_type        = $_FILES['file_attach']['type'];
        $file_error       = $_FILES['file_attach']['error'];
		
		
		$handle = fopen($file_tmp_name, "r");
        $content = fread($handle, $file_size);
        fclose($handle);
        $encoded_content = chunk_split(base64_encode($content));
        //now we know we have the file for attachment, set $file_attached to true
        $file_attached = true;
		
	}
	
	

	  if($file_attached) //continue if we have the file
    {
	
		// a random hash will be necessary to send mixed content
		$separator = md5(time());

		// carriage return type (RFC)
		$eol = "\r\n";
		$to = "apaswimmer21@gmail.com";
		 // main header (multipart mandatory)
		$headers = "From: name <apaswimmer21@gmail.com>" . $eol;
		$headers .= "MIME-Version: 1.0" . $eol;
		$headers .= "Content-Type: multipart/mixed; boundary=\"" . $separator . "\"" . $eol;
		$headers .= "Content-Transfer-Encoding: 7bit" . $eol;
		$headers .= "This is a MIME encoded message." . $eol;
		
		 // message
		$body="";
		$body .= "--" . $separator . $eol;
		$body .= "Content-type:text/html; charset=utf-8\n";
		$body .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
		$body .= $message . $eol;
	
			// attachment
		$body .= "--" . $separator . $eol;
		$body  .= "Content-Type:".$file_type." ";
		$body .= "Content-Type: application/octet-stream; name=\"" . $file_name . "\"" . $eol;
		$body .= "Content-Transfer-Encoding: base64" . $eol;
		$body .= "Content-Disposition: attachment; filename=\"".$file_name."\"". $eol;
		$body .= $encoded_content . $eol;
		
		
		
		$subject = "Form submission";
	
		
		//mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
			
		// You can also use header('Location: thank_you.php'); to redirect to another page.
		//}
		 $send_mail =  mail($to,$subject,$body,$headers);
		
		 if(!$send_mail)
    {
        //If mail couldn't be sent output error. Check your PHP email configuration (if it ever happens)
        $output = json_encode(array('type'=>'error', 'text' => 'Could not send mail! Please check your PHP mail configuration.'));
		 print_r( error_get_last() );
			die($output);
		}else{
			$output = json_encode(array('type'=>'message', 'text' => 'Success'));
			
			die($output);
		}
	}
?>	