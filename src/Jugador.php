<?php

class Usuario extends Conexion
{
  public $conexion=null;
  private $nombre;
  private $apellidos;
  private $edad;
  private $curso;

  function __construct()
  {
  }


  public function comprobarCampos($post){
    $error=null;
    if(!isset($post)||!isset($post["nombre"])||!isset($post["apellidos"])||!isset($post["edad"])||!isset($post["curso"])){
      $error="";
    }elseif($post["nombre"]==""){
      $error="No has introducido el nombre";
    }elseif($post["apellidos"]==""){
      $error="No has introducido el apellido";
    }elseif($post["edad"]==""){
      $error="No has introducido la edad";
    }elseif($post["curso"]==""){
      $error="No has introducido el curso";
    }else{
      $error=false;
      $this->nombre=$post["nombre"];
      $this->apellidos=$post["apellidos"];
      $this->edad=$post["edad"];
      $this->curso=$post["curso"];
    }
    return $error;
  }

  public function insertarJugador(){
                $consulta="INSERT INTO usuarios (nombre, apellidos, edad, curso)
                VALUES ('$this->nombre', '$this->apellidos', $this->edad, $this->curso)";
                  $this->conexion->query($consulta);
  }
  public function listarJugadores(){
    $resultado=$this->conexion->query("SELECT id, nombre, apellidos, edad, curso, puntuacion FROM usuarios");
    return $resultado;
  }
  public function cogerJugador(){
  $resultado3 = $this->conexion->query("SELECT *
FROM usuarios
where id=7");
    return $resultado3;
  }
  public function incrementarPunt(){
    $resultado2=$this->conexion->query("SELECT * FROM usuario_juego where id_usuario=3 && id_juego=1");


    if ($resultado2==false) {
    $consulta="INSERT INTO usuario_juego (id_usuario, id_juego)
    VALUES (4, 3)";
  $consulta2="INSERT INTO juego (nombre)
    VALUES ('Microrobots')";
      $this->conexion->query($consulta);
      $this->conexion->query($consulta2);
    }
    else {
    $actualizar=$this->conexion->query("UPDATE usuario_juego SET puntuacion=puntuacion+5 where id_usuario=3");
    }
  }
  }



 ?>
