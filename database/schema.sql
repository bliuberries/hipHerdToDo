DROP DATABASE IF EXISTS hipherdToDo;

CREATE DATABASE hipherdToDo;

USE hipherdToDo;

CREATE TABLE mytodo (
  id int NOT NULL AUTO_INCREMENT,
  todo varchar(255) NOT NULL,
  completed boolean NOT NULL,
  PRIMARY KEY (id)
);