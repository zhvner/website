<form action="hire-me.php" method="post" enctype="text/plain">

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];
  $to = "szhanerz@gmail.com";
  $subject = "New Hire Me Form Submission";
  $body = "Name: $name\nEmail: $email\nMessage:\n$message";
  if (mail($to, $subject, $body)) {
    echo "Thank you for your message. I will get back to you as soon as possible.";
  } else {
    echo "There was a problem sending your message. Please try again later.";
  }
}
?>
