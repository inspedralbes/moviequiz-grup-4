<?php

  //require '../model/DBAbstractClass.php';
    require 'database.php';

  $message = '';

  if (!empty($_POST['nombre']) && !empty($_POST['apellido']) && !empty($_POST['correo']) && !empty($_POST['password'])) {

    $sql = "INSERT INTO users (nombre, apellido, correo, contrasena) VALUES (:nombre, :apellido, :correo, :password)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':nombre', $_POST['nombre']);
    $stmt->bindParam(':apellido', $_POST['apellido']);
    $stmt->bindParam(':correo', $_POST['correo']);
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);
    $stmt->bindParam(':password', $password);

    if ($stmt->execute()) {
      $message = "Bienvenido a nuestra pagina $_POST[nombre] $_POST[apellido]";
    } else {
      $message = 'Sorry there must have been an issue creating your account';
    }

    echo "<h1>$message</h1>";
    echo "<a href='../../index.html'>Volver a la pantalla inicial</a>";
  }
?>