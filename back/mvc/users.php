<?php

// magic constant
require_once ("DBAbstractModel.php");

class users extends DBAbstractModel {
  
  private $id;
  private $nombre;
  private $apellido;
  private $correo;
  private $contrasena;

 // public $message;
  
  function __construct() {
    $this->db_name = "a18marcastru_moviequiz4";
    }
  
  function __toString() {
    echo "entro string <br>";
    return "(" . $this->id . ", " . $this->nombre . ", " . $this->apellido . ", " .  
      $this->correo . ", " . $this->contrasena . ", " . ")";
  }
  
  function __destruct() {
  }

  public function selectAll($fields=array()) {
    $this->query="SELECT ";
    $firstField = true;
    for ($i=0; $i<count($fields); $i++) {
      if ($firstField) {
        $this->query .= $fields[$i];
        $firstField=false;
      }
      else $this->query .= ", " . $fields[$i];
    }
    $this->query .= " FROM users";
    // $this->query = "SELECT * FROM usuario";
    $this->get_results_from_query();
    return $this->rows;
    
  }
  
  public function select($correo="") {
      if (!empty($correo)) {
          $this->query = "SELECT *
                    FROM users
                    WHERE correo = '$correo'";
          $this->get_results_from_query();
      }

      if (count($this->rows)==1) {
          foreach ($this->rows[0] as $property => $value)
              $this->$property = $value;
      }
      return $this->rows;
  }

  public function insert($user_data = array()) {
    if (array_key_exists("correo", $user_data)) {
      $result = $this->select($user_data["correo"]);
      if (empty($result)) {
        foreach ($user_data as $field => $value)
          $$field = $value;
        $this->query="INSERT INTO users (nombre, apellido, correo, contrasena)
                      VALUES ('$nombre','$apellido','$correo','$contrasena')";
        $this->execute_single_query();
        $this->message = "Bienvenido a nuestra pagina web";
      } else $this->message = "Ya existe un usuario con estos datos";
    } else $this->message = "Usuario no insertado";
  }

  public function update ($userData = array()) {
      foreach ($userData as $field => $value)
          $$field = $value;
      $this->query = "UPDATE users
            SET contrasena='$userData[contrasena]'
            WHERE id='$userData[id]'";
      $this->execute_single_query();
      $this->message = "Contraseña cambiada con exito";
  }
 
  public function delete ($nom="") {
  
  }
  
}
?>