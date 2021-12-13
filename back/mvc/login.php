<?php

  require_once('users.php');

  if(!empty($_POST['correo']) && !empty($_POST['contrasena'])) {
    $comp = array ("correo" => $_POST['correo'],"contrasena" => $_POST['contrasena']);
    $user2 = new users();
    $user2->select($comp["correo"]);

    session_start();
    $arr = array('exito' => true, 'mensage' => $user2, "correo" => $_POST['correo']);
    $myJSON = json_encode($arr);
    echo $myJSON;
  }
  else echo "No funciona";
?>
