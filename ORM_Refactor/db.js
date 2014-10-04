var mysql = require('mysql');
var db = require('./db');
var Sequelize = require("sequelize"),
  sequelize = new Sequelize("chatter", "root", "hack");



var User = sequelize.define('User', {
  userid: { type: Sequelize.INTEGER,
            autoincrement: true },
  username: Sequelize.STRING,
});

var Message = sequelize.define('Message', {
  userid: { type: Sequelize.INTEGER,
            autoincrement: true },
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

var Room = sequelize.define('Room', {
  userid: { type: Sequelize.INTEGER,
            autoincrement: true },
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});


exports.findAllMessages = function(cb){
  Message.sync().success(function() {
    Message.findAll().success(function(msgs) {
      cb(null, msgs);
    });
  });

  //invoke the callback with err and pass it an object with all messages;
  // dbConnection.query('SELECT * FROM messages', function(err, rows, fields) {
  //   cb(err, rows);
  // })
};

exports.findUser = function(username, cb){
  //invoke the callback with err and results message array as 2nd argument;
  dbConnection.query('SELECT * FROM users where username=?', [username], function(err, rows) {
    cb(err, rows);
  });
};

exports.saveUser = function(username, cb){
  dbConnection.query('INSERT INTO users (username) values (?)', [username], function(err, rows){
    dbConnection.query('SELECT * FROM users where username=?', [username], function(err, rows) {
      cb(rows);
    })
  });
};

exports.saveMessage = function(message, userid, roomname, cb){
  dbConnection.query('INSERT INTO messages (user_id, textMessage, roomname) values (?, ?, ?)', [userid, message, roomname], function(err, rows){
    cb();
  })
};
