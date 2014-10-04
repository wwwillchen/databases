CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS chat;

CREATE TABLE messages (
  msg_id INTEGER(30) NOT NULL AUTO_INCREMENT,
  user_id VARCHAR(100),
  textMessage VARCHAR(100),
  time VARCHAR(100),
  roomname VARCHAR(100),
  PRIMARY KEY (msg_id)
);

CREATE TABLE users (
  user_id INTEGER(30) NOT NULL AUTO_INCREMENT,
  username VARCHAR(100),
  PRIMARY KEY (user_id)
);


-- ---
-- Table Friends
--
-- ---

DROP TABLE IF EXISTS friends;

CREATE TABLE friends (
  id INTEGER(30),
  user_id VARCHAR(100),
  friends VARCHAR(100),
  PRIMARY KEY (id)
);

