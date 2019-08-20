DROP DATABASE IF EXISTS hipherdToDo;

CREATE DATABASE hipherdToDo;

USE hipherdToDo;

CREATE TABLE mytodo (
  id INT NOT NULL AUTO_INCREMENT,
  todo VARCHAR(255) NOT NULL,
  completed ENUM('true', 'false') NOT NULL,
  PRIMARY KEY (id)
);

-- CREATE TABLE projectusers (
--   id INT NOT NULL AUTO_INCREMENT,
--   namefirst VARCHAR(255) NOT NULL,
--   namelast VARCHAR(255) NOT NULL,
--   PRIMARY KEY (id)
-- );