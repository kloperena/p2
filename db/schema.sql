### Schema

CREATE DATABASE nfl_games_db;

USE nfl_games_db;


CREATE TABLE games
(
	id int NOT NULL AUTO_INCREMENT,
	week16 varchar (40) NOT NULL,
	Home varchar(40) NOT NULL,
	away varchar(40) NOT NULL,
	winner varchar(40),
	PRIMARY KEY (id)	
);