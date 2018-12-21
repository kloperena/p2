create DATABASE football_lovers_DB;

use football_lovers_DB;

create users
(
	id int NOT NULL AUTO_INCREMENT,
	username varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	PRIMARY KEY (id)
);