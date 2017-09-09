-- Create burgers_db and specify it for use
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table
CREATE TABLE burgers (
id INTEGER(10) AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(100) NOT NULL,
-- TA Does this default need to be False?
devoured BOOLEAN NOT NULL DEFAULT 0,
date TIMESTAMP DEFAULT NOW(),
PRIMARY KEY (id)
);
