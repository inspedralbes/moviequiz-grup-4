<?php
  session_start();

  session_unset();

  session_destroy();

  header('Location: /moviequiz-grup-4');
?>
