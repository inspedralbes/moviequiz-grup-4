<?php

  require 'database.php';

  if (!empty($_POST['correo']) && !empty($_POST['password'])) {
    $records = $conn->prepare("SELECT id, nombre, apellido, correo, password FROM users WHERE correo = '$_POST[correo]'");
    $records->bindParam(':correo', $_POST['correo']);
    $records->execute();
    $results = $records->fetch(PDO::FETCH_ASSOC);

    if (count($results) > 0 && password_verify($_POST['password'], $results['password'])) {
      session_start();
      $arr = array('exito'=>true,'id'=>$results['id'],'nombre'=>$results['nombre'],'apellido'=>$results['apellido'],'correo'=>$results['correo'],'password'=>$results['password']);
      $myJSON = json_encode($arr);
      echo $myJSON;
    }
    else array('exito'=>false);

  }
  else echo "<h1>No se conecta</h1>";
?>
