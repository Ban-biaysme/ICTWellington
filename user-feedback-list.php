
<!-- Establish connection -->

<?php
    session_start();

    if(!isset($_SESSION["username"])) {
        header("Location:login.html");
    }
?>

<!--  Access to the database in mysql -->
<?php
        include_once 'database.php';
        $result = mysqli_query($conn,"SELECT * FROM feedback");
?>

<!DOCTYPE html>

<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Login and Registration Form</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>

    <!-- <link rel='stylesheet' type='text/css' media='screen' href='css/login.css'> -->

    <link href="https://fonts.googleapis.com/css?family=Hind&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
    <script src="https://kit.fontawesome.com/a81368914c.js"></script>

    <link rel='stylesheet' type='text/css' media='screen' href='css/feedbacklist.css'>

</head>


<body>

        <?php
            if (mysqli_num_rows($result) > 0) {
        ?>

        <h1><span class="title">USER FEEDBACK </span> LIST</h1>


            <div class="inputDiv">
            
                
            <table>
            <tr>
                <th>USER NAME</th>
                <th>PHONE</th>
                <th>EMAIL</th>
                <th>DEGREE</th>
                <th>COMMENTS</th>
            </tr>

            <?php
            $i=0;

            while($row = mysqli_fetch_array($result)) {
            ?>
            <tr>
                <td><?php echo $row["username"]; ?></td>
                <td><?php echo $row["phone"]; ?></td>
                <td><?php echo $row["email"]; ?></td>
                <td><?php echo $row["degree"]; ?></td>
                <td><?php echo $row["comment"]; ?></td>
            </tr>
            <?php
                $i++;
                }
            ?>
            </table>
            <?php
            }
            else{
                echo "No result found";
            }
?>

            </div>

            <br><br>
        <div class="inputDiv">
        <form action="logout.php" method="post">
            <button type="submit" id="logoutbtn">LOG OUT</button>
        </form>
        </div>

</body>
</html>
