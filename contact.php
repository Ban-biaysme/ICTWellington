 <?php

    include "database.php";

    // define variables and set to empty values
    $name = $phoneNo  = $email = $degree = $comments = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = test_input($_POST["username"]);
    $phoneNo = test_input($_POST["phno"]);
    $email = test_input($_POST["email"]);
    $degree = test_input($_POST["degree"]);
    $comments = test_input($_POST["comments"]);
    
    
    $stmt = $conn->prepare("INSERT INTO feedback (username, phone, email, degree, comment) VALUES (?, ?, ?,?,?)");

    // prepare and bind
    $stmt->bind_param("sssss", $name,$phoneNo,$email,$degree,$comments);
    //Send data to the database
    $stmt->execute();

    //redirec the page to another page
    header("location:success-feedback.html");
    }

    function test_input($data) {

    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
    }

    $conn->close();
?> 