var mysql = require('mysql');
var db = require('./db');
var Sequelize = require("sequelize"),
  sequelize = new Sequelize("chatter", "root", "hack");

var dbConnection = mysql.createConnection({
  user: "root",
  password: "hack",
  database: "chatter"
});

dbConnection.connect();

var User = sequelize.define('User', {
  username: Sequelize.STRING,
});

var Message = sequelize.define('Message', {
  textMessage: Sequelize.STRING,
  roomname: Sequelize.STRING
});

var Room = sequelize.define('Room', {
  textMessage: Sequelize.STRING,
  roomname: Sequelize.STRING
});

Message.belongsTo(User);

User.sync();
Message.sync();
Room.sync();

exports.findAllMessages = function(cb){
  Message.sync().success(function() {
    Message.findAll().success(function(msgs) {
      cb(null, msgs);
    });
  });
};

exports.findUser = function(username, cb){

  User.find({where: {username:username}}).success(function(usr) {
    cb(usr);
  })
};

exports.saveUser = function(username, cb){
  User.create({username: username}).success(function(rows) {
    cb([rows]);
  })
};

exports.saveMessage = function(message, userid, roomname, cb){
  Message.create({username:userid, message:message, roomname:roomname}).success(function(rows) {
    cb(rows);
  });
};
