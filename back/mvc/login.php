<?php
  require_once('users.php');

  if(!empty($_POST['correo']) && !empty($_POST['contrasena'])) {
    $comp = array ("correo" => $_POST['correo'],"contrasena" => $_POST['contrasena']);
    $user2 = new users();
    $usuario = $user2->select($comp["correo"]);

    if($_POST['contrasena'] == $usuario[0]['contrasena']) {
      session_start();
      $arr = array('exito' => true, 'id' => $usuario[0]['id'],'nombre' => $usuario[0]['nombre'], "apellido" => $usuario[0]['apellido'], "correo" => $usuario[0]['correo']);
      $_SESSION['usuario'] = $arr;
      $myJSON = json_encode($arr);
      echo $myJSON;
    }
    else {
      session_start();
      $arr = array('exito' => false, 'correo' => $usuario[0]['correo'], "contrasena" => $usuario[0]['contrasena']);
      $myJSON = json_encode($arr);
      echo $myJSON;
    }
  }
  else {
    session_start();
    if(isset($_SESSION['usuario'])) {
      $user = $_SESSION['usuario'];
      $arr = array('exito' => true, 'nombre' => $user['nombre'], 'apellido' => $user['apellido'], "correo" => $user['correo']);
      $myJSON = json_encode($arr);
      echo $myJSON;
    }
  }
?>
