CREATE DATABASE IF NOT EXISTS todo_db;

USE todo_db;

CREATE TABLE task (
    id INT(10) PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL
);

