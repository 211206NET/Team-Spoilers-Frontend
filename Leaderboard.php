<!DOCTYPE html>
<html>
<head>
    <title>Leaderboard</title>
</head>
<body>
<table>
    <tr>
        <th></th>
        <th></th>
        <th></th>
    </tr>
    <?php	
    $conn = mysqli_connect("raja.db.elephantsql.com", "cehbpygi", "7vUJt1mcwFEnxl-bFNvrFSLLKbQg8LD2");
    if ($conn-> connect_error) 
        die("Connection failed:". $conn-> connect_error)
    ?>
</table>
</body>
</html>