-- Create burgers_db and specify it for use
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table
CREATE TABLE burgers (
id INTEGER(10) AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(100) NOT NULL,
devoured BOOLEAN NOT NULL DEFAULT 0,
date TIMESTAMP DEFAULT NOW(),
PRIMARY KEY (id)
);
