<?php

  require 'database.php';

  if (!empty($_POST['correo']) && !empty($_POST['password'])) {
    header("Access-Control-Allow-Origin: http://moviequiz4.alumnes.inspedralbes.cat/");
    $records = $conn->prepare('SELECT id, correo, password FROM users WHERE correo = :correo');
    $records->bindParam(':correo', $_POST['correo']);
    $records->execute();
    $results = $records->fetch(PDO::FETCH_ASSOC);

    if (count($results) > 0 && password_verify($_POST['password'], $results['password'])) {
      session_start();
      $arr = array('exito'=>true,'nombre'=>$results['nombre'],'apellido'=>$results['apellido'],'correo'=>$results['correo']);
      $myJSON = json_encode($arr);
      echo $myJSON;
    }

  }
?>
