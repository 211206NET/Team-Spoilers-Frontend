<?php
$host = "raja.db.elephantsql.com";  // IP of database
$userName = "cehbpygi"; //Username for database login
$userPass = "7vUJt1mcwFEnxl-bFNvrFSLLKbQg8LD2"; //Password 
$database = "example-database"; // database name

$connectQuery = mysqli_connect($host,$userName,$userPass,$database);

if(mysqli_connect_errno()){
    echo mysqli_connect_error();
    exit();
}else{
    $selectQuery = "SELECT * FROM `Leaderboards` ORDER BY `Score` ASC";
    $result = mysqli_query($connectQuery,$selectQuery);
    if(mysqli_num_rows($result) > 0){
        $result_array = array();
        while($row = mysqli_fetch_assoc($result)){
            array_push($result_array, $row);
        }

    }

    echo json_encode($result_array);

}
?>