### Schema

CREATE DATABASE nfl_games_db;

USE nfl_games_db;


CREATE TABLE games
(
	id int NOT NULL AUTO_INCREMENT,
	Home varchar(40) NOT NULL,
	away varchar(40) NOT NULL,
	winner boolean default false,
	PRIMARY KEY (id)	
);