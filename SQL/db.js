var mysql = require('mysql');
/* If the node mysql module is not found on your system, you may
 * need to do an "sudo npm install -g mysql". */

/* You'll need to fill the following out with your mysql username and password.
 * database: "chat" specifies that we're using the database called
 * "chat", which we created by running schema.sql.*/
var dbConnection = mysql.createConnection({
  user: "root",
  password: "hack",
  database: "chat"
});

dbConnection.connect();
/* Now you can make queries to the Mysql database using the
 * dbConnection.query() method.''
 * See https://github.com/felixge/node-mysql for more details about
 * using this module.*/




exports.findAllMessages = function(cb){
  //invoke the callback with err and pass it an object with all messages;
  dbConnection.query('SELECT * FROM messages', function(err, rows, fields) {
    cb(err, rows);
  })
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
