<?php
/**
 * Conexion
 */
class Conexion
{
  public $conexion=null;
  private $servername = "localhost";
  private $user = "root";
  private $pass = "";
  private $db = "juego";
  function __construct()
  {
  }
  public function conectar(){
    $this->conexion = new mysqli( $this->servername, $this->user, $this->pass, $this->db);
    if ($this->conexion->connect_errno) {
        echo "Fallo al conectar a MySQL: (" . $this->conexion->connect_errno . ") " . $this->conexion->connect_error;
    }
  }



    /**
     * Get the value of Conexion
     *
     * @return mixed
     */
    public function getConexion()
    {
        return $this->conexion;
    }

    /**
     * Set the value of Conexion
     *
     * @param mixed conexion
     *
     * @return self
     */
    public function setConexion($conexion)
    {
        $this->conexion = $conexion;

        return $this;
    }

    /**
     * Get the value of Servername
     *
     * @return mixed
     */
    public function getServername()
    {
        return $this->servername;
    }

    /**
     * Set the value of Servername
     *
     * @param mixed servername
     *
     * @return self
     */
    public function setServername($servername)
    {
        $this->servername = $servername;

        return $this;
    }

    /**
     * Get the value of User
     *
     * @return mixed
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * Set the value of User
     *
     * @param mixed user
     *
     * @return self
     */
    public function setUser($user)
    {
        $this->user = $user;

        return $this;
    }

    /**
     * Get the value of Pass
     *
     * @return mixed
     */
    public function getPass()
    {
        return $this->pass;
    }

    /**
     * Set the value of Pass
     *
     * @param mixed pass
     *
     * @return self
     */
    public function setPass($pass)
    {
        $this->pass = $pass;

        return $this;
    }

    /**
     * Get the value of Db
     *
     * @return mixed
     */
    public function getDb()
    {
        return $this->db;
    }

    /**
     * Set the value of Db
     *
     * @param mixed db
     *
     * @return self
     */
    public function setDb($db)
    {
        $this->db = $db;

        return $this;
    }

}
 ?>
