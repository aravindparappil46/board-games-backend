create table users ( email varchar(40) NOT NULL primary key, firstname varchar(256), lastname varchar(256), password varchar(256)  );

create table game_info (id int NOT NULL AUTO_INCREMENT PRIMARY KEY, name varchar(40) NOT NULL)

create table game_stats (id int NOT NULL AUTO_INCREMENT PRIMARY KEY, user_email varchar(40), game_id int, wins int, losses int, FOREIGN KEY (user_email) REFERENCES users(email), FOREIGN KEY (game_id) REFERENCES game_info(id) );


create table active_sessions (id int NOT NULL AUTO_INCREMENT PRIMARY KEY, player_1 varchar(40), player_2 varchar(40), game_id int, FOREIGN KEY (player_1) REFERENCES users(email), FOREIGN KEY (player_2) REFERENCES users(email), FOREIGN KEY (game_id) REFERENCES game_info(id)  );

create table ttt_moves (id int NOT NULL AUTO_INCREMENT PRIMARY KEY, session_id int, board_state varchar(256), FOREIGN KEY (session_id) REFERENCES active_sessions(id)  );