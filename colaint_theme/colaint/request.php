<?php 
			
	/*if(isset($_POST['phone'])){*/
		$to = "apaswimmer21@gmail.com"; // this is your Email address
		$from = $_POST['email']; // this is the sender's Email address
		$first_name = $_POST['first_name'];
		$last_name = $_POST['last_name'];
		$subject = "Form submission";
		$email = $_POST['email'];
		$phone = $_POST['phone'];
		$subject2 = "Copy of your form submission";
		
		$message = '<html><body>';
		$message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
		$message .= "<tr><td><strong>First Name:</strong> </td><td>" . strip_tags($_POST['first_name']) . "</td></tr>";
		$message .= "<tr><td><strong>Last Name:</strong> </td><td>" . strip_tags($_POST['last_name']) . "</td></tr>";
		$message .= "<tr><td><strong>Email Address :</strong> </td><td>" . strip_tags($_POST['email']) . "</td></tr>";
		$message .= "<tr><td><strong>Phone :</strong> </td><td>" . strip_tags($_POST['phone']) . "</td></tr>";
		$message .= "<tr><td><strong>Message :</strong> </td><td>" . strip_tags($_POST['message']) . "</td></tr>";
		$message .= "</table>";
		$message .= "</body></html>";
		
		
		
		
		
		//$message = $first_name . " " . $last_name . " wrote the following:" . "\n\n" . $_POST['message'] . "\n\n" . $email . "\n\n" . $phone;
		//$message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];
		$headers = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-Type: text/html; charset=ISO-8859-1' . "\r\n";
		$headers .= 'From: <meet@colaint.co.uk>' . "\r\n";
		
		mail($to,$subject,$message,$headers);
		//mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
		echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
		// You can also use header('Location: thank_you.php'); to redirect to another page.
		//}
?>