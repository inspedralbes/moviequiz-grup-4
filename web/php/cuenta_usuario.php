<?php
    session_start();
    if(isset($_SESSION['usuario'])){
        $user = $_SESSION['usuario'];
        print_r($user);
    }
    else echo "No hay session";
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link rel="stylesheet" type="text/css" href="../../web/css/cuenta_usuario.css"/>
    <link rel="apple-touch-icon" sizes="180x180" href="./web/img/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="./web/img/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="./web/img/favicon/favicon-16x16.png">
    <link rel="manifest" href="./web/img/favicon/site.webmanifest">
    <link rel="mask-icon" href="./web/img/favicon/safari-pinned-tab.svg" color="#5bbad5">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
    <title>InfoFilms</title>
</head>
<body>
    <?php
        echo "<center><h1>Cuenta de usuario</h1></center>";
        echo "<div id='informacion'>
                <h5>Informacion de usuario:</h5>
                <br>
                <ul>
                    <li>Nombre: $user[nombre]</li>
                    <li>Apellido: $user[apellido]</li>
                    <li>Correo: $user[correo]</li>
                </ul>
               </div>";
        echo "<h5>Cambiar de contraseña</h5>
                <input type='text' name='contrasena' id='contrasena' placeholder='Tu contraseña'>
                <button class='waves-effect waves-light btn' id='btn-contrasena' type='button'>Cambiar</button>";
        echo "<h5>Peliculas favoritas</h5>";
    ?>
    <script src="../../web/js/cuenta_usuario.js"></script>
</body>
</html>