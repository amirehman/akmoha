<!DOCTYPE html>
<html lang="zxx">

<head>
    <meta charset="UTF-8">
    <title>AKMOHA - Black & White HTML Perosnal Resume Template</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="favicon.png" type="image/png" sizes="128x128">


    <!-- TailwindCSS-->
    <link rel="stylesheet" href="assets/css/tailwind.min.css">

    <!-- Custom Style-->
    <link rel="stylesheet" href="assets/css/custom/stylesheets/screen.css">


</head>

<body class="">

<?php
if(isset($_POST['email'])) {
 
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "you@yourdomain.com";
    $email_subject = "Your email subject line";
 
    function died($error) {
        // your error code can go here
    ?>
    
        <div class="fixed inset-0 bg-black text-gray-100 flex items-center justify-center text-2xl font-thin">
            <div class="inner">
            <?php 
                
            echo "We are very sorry, but there were error(s) found with the form you submitted. ";
            echo "These errors appear below.<br /><br />";
            echo "<div class='text-red-300 leading-normal'>".$error."</div>";
            echo "<a href='/akmoha' class='block mt-4 text-yellow-200'>Please go back and fix these errors.</a>";
            die();
                
            ?>
            </div>
        </div>    

    <?php    
    }
 
 
    // validation expected data exists
    if(!isset($_POST['first_name']) ||
        !isset($_POST['last_name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['message'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
    }
 
     
 
    $first_name = $_POST['first_name']; // required
    $last_name = $_POST['last_name']; // required
    $email_from = $_POST['email']; // required
    $comments = $_POST['message']; // required
 
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(!preg_match($string_exp,$first_name)) {
    $error_message .= 'The First Name you entered does not appear to be valid.<br />';
  }
 
  if(!preg_match($string_exp,$last_name)) {
    $error_message .= 'The Last Name you entered does not appear to be valid.<br />';
  }
 
  if(strlen($comments) < 2) {
    $error_message .= 'The Comments you entered do not appear to be valid.<br />';
  }
 
  if(strlen($error_message) > 0) {
    died($error_message);
  }
 
    $email_message = "Form details below.\n\n";
 
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
     
 
    $email_message .= "First Name: ".clean_string($first_name)."\n";
    $email_message .= "Last Name: ".clean_string($last_name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Message: ".clean_string($comments)."\n";
 
// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>
 
<!-- include your own success html here -->
 
<div class="fixed inset-0 bg-black text-gray-100 flex items-center justify-center text-2xl font-thin">
    <div class="inner">
        Thank  you for contacting us. We will be in touch with you very soon :).
        <a href="/akmoha" class="block text-center mt-4 text-yellow-200">Go Back</a>
    </div>
</div>
 
<?php
 
}
?>
    
</body>

</html>    
    