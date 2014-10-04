



-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Chatterbox'
--
-- ---


-- ---
-- Foreign Keys
-- ---


-- ---
-- Table Properties
-- ---

-- ALTER TABLE 'Chatterbox' ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE 'Friends' ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO 'Chatterbox' ('MSG ID','UserName','Text','Time','Room') VALUES
-- ('','','','','');
-- INSERT INTO 'Friends' ('id','UserName','Friends') VALUES
-- ('','','');



CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS chat;

CREATE TABLE messages (
  msg_id INTEGER(30) NOT NULL AUTO_INCREMENT,
  username VARCHAR(100),
  textMessage VARCHAR(100),
  time VARCHAR(100),
  roomname VARCHAR(100),
  PRIMARY KEY (msg_id)
);



-- ---
-- Table Friends
--
-- ---

DROP TABLE IF EXISTS friends;

CREATE TABLE friends (
  id INTEGER(30),
  username VARCHAR(100),
  friends VARCHAR(100),
  PRIMARY KEY (id)
);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql < schema.sql
 *  to create the database and the tables.*/




