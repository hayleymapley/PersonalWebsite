<?php
	ini_set('display_errors', 1);
	error_reporting(E_ALL);

/*SAVE MESSAGE TO FILE LOCALLY*/
	function savemessage($name, $email, $body) {
		$datetime = date("D j F : g:i a");
		$content = "\n" . $datetime . "\n" . $name . "\n"
				 . $email .  "\n" . $body . "\n";
		file_put_contents("messages.txt", $content, FILE_APPEND);
	}
	
	if (isset($_POST['newmessage'])) {
		savemessage($_POST['name'], $_POST['email'], $_POST['message']);
	}

/*SEND MESSAGE AS EMAIL - WORKS WHEN USED ON MY WEB HOSTING*/
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	
	$from = "$email";
	$to = "contact@hayleymapley.com";
	
	$subject = "Contact Form";
	$formcontent = "From: $name \n Message: $message";
	
	$headers = "From: $from";
	
	mail($to, $subject, $formcontent, $headers);
	header('Location: index.html'); /*REDIRECTS HOME*/
?>