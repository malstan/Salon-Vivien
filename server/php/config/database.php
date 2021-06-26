<?php
/**
 * Stanislav Malik
 * 2021
 * connection to database
 */

class Database {
    /*
    private string $host = "mariadb103.r1.websupport.sk:3313";
    private string $db_name = "g5zzmiqy";
    private string $username = "g5zzmiqy";
    private string $password = "Hq1)<m43Ii";
    */

    private string $host = "localhost";
    private string $db_name = "salon_vivien";
    private string $username = "root";
    private string $password = "";

    public ?PDO $connection;

    public function getConnection(): ?PDO {
        $this->connection = null;

        try {
            $this->connection = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->connection->exec("set names utf8");
        } catch (PDOException $exception) {
            echo "Connection error: " . $exception->getMessage();
        }
        return $this->connection;
    }
}
