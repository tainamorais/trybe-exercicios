DROP DATABASE IF EXISTS `movies-api_db`;

CREATE DATABASE `movies-api_db`;

USE `movies-api_db`;

CREATE TABLE movies (
	id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(40) NOT NULL,
  directed_by VARCHAR(40) NOT NULL,
  release_year INT(4)
);
