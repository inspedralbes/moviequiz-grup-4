<?php

  require 'database.php';
  $timer = rand(1,7);
  sleep($timer);

  $records = $conn->prepare('SELECT id, nombre, apellido, correo, contrasena FROM users WHERE correo = :correo');
  $records->bindParam(':correo', $_POST['correo']);
  $records->execute();
  $results = $records->fetch(PDO::FETCH_ASSOC);

  session_start();
  $arr = array('exito' => true, 'id' => $results['id'], 'nombre' => $results['nombre'], 'apellido' => $results['apellido'], 'correo' => $results['correo'], 'password' => $results['contrasena']);
  $myJSON = json_encode($arr);
  echo $myJSON;
?>
