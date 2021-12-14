<?php
    require_once('users.php');

    if(!empty($_POST['nombre']) && !empty($_POST['apellido']) && !empty($_POST['correo']) && !empty($_POST['contrasena'])) {
        //$contrasena = password_hash($_POST['contrasena'], PASSWORD_BCRYPT);
        $newUser = array ("nombre" => $_POST['nombre'],"apellido" => $_POST['apellido'],"correo" => $_POST['correo'],
            "contrasena" => $_POST['contrasena']);
        $user2 = new users();
        $user2->insert($newUser);
        //$user2->select($newUser["correo"]);

        session_start();
        $arr = array('exito' => true, 'mensage' => $user2, 'nombre' => $_POST['nombre'], 'apellido' => $_POST['apellido']);
        $myJSON = json_encode($arr);
        echo $myJSON;
    }