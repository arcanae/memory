<?php

if(file_exists("ranking.json")){
$source = file_get_contents("ranking.json");
$data = json_decode($source);

$score = htmlspecialchars($_POST['score']);
$user = htmlspecialchars($_POST['username']);

$obj = new class {};
$obj->username = $user;
$obj->score = $score; 
array_push($data, $obj);
$encode = json_encode($data);
unlink("ranking.json");
$open = fopen("ranking.json", "w") or die();
fwrite($open, $encode);
fclose($open);
}

echo "<script>";
echo "location.href = \"index.php\"";
echo "</script>";
?>