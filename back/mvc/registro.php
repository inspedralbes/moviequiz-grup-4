<?php
    require_once('users.php');

    if(!empty($_POST['nombre']) && !empty($_POST['apellido']) && !empty($_POST['correo']) && !empty($_POST['contrasena'])) {
        $newUser = array ("nombre" => $_POST['nombre'],"apellido" => $_POST['apellido'],"correo" => $_POST['correo'],
            "contrasena" => $_POST['contrasena']);
        $user2 = new users();
        $user2->insert($newUser);

        session_start();
        $arr = array('exito' => true, 'mensage' => $user2, 'nombre' => $_POST['nombre'], 'apellido' => $_POST['apellido'], 'correo' => $_POST['correo']);
        $myJSON = json_encode($arr);
        echo $myJSON;
    }
    else if (!empty($_POST['contrasena'])){
        session_start();
        if(isset($_SESSION['usuario'])) {
                $user = $_SESSION['usuario'];
                $newContrasena = array("id" => $user['id'], "contrasena" => $_POST['contrasena']);
                $contra = new users();
                $contra->update($newContrasena);
                $arr = array("exito" => true, "contrasena" => $contra);
                $myJSON = json_encode($arr);
                echo $myJSON;
        }
    }