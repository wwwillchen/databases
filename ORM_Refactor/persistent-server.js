
/* You already know how to create an http server from the previous
 * assignment; you can re-use most of that code here. */

var http = require("http");
var url = require('url');
var Sequelize = require("sequelize");
var sequelize = new Sequelize("chatter", "root", "hack");

var handlers = require('./request-handler');
var serverHelpers = require('./server-helpers');

var port = 3000;
var ip = "127.0.0.1";
// console.log('right before router');
var router = function(req, res) {
  console.log('got to router');
  var path = url.parse(req.url).pathname;
  var method = req.method;

  console.log("%s -- %s", method, path);

  if (path === '/classes/messages') {
    if (method === 'POST') {
      console.log('got into post');
      handlers.postMessage(req, res);
    } else if (method === 'GET') {
      handlers.getMessages(req, res);
    } else if (method === 'OPTIONS') {
      handlers.sendOptionsResponse(req, res);
    }
  } else {
    serverHelpers.sendResponse(res, '', 404);
  }
};

var server = http.createServer(router);

console.log("Listening on http://" + ip + ":" + port);
server.listen(port, ip);

