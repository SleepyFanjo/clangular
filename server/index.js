#!/usr/bin/env node

const WebSocketServer = require("websocket").server;
const http = require("http");
const User = require("../models/User");
const messageService = require("./services/message.service");
const userService = require("./services/user.service");

const server = http.createServer(function (request, response) {
  console.log(new Date() + " Received request for " + request.url);
  response.writeHead(404);
  response.end();
});
server.listen(8080, function () {
  console.log(new Date() + " Server is listening on port 8080");
});

wsServer = new WebSocketServer({
  httpServer: server,
  // You should not use autoAcceptConnections for production
  // applications, as it defeats all standard cross-origin protection
  // facilities built into the protocol and the browser.  You should
  // *always* verify the connection's origin and decide whether or not
  // to accept it.
  autoAcceptConnections: false,
});

function originIsAllowed(origin) {
  // put logic here to detect whether the specified origin is allowed.
  return true;
}

wsServer.on("request", function (request) {
  if (!originIsAllowed(request.origin)) {
    // Make sure we only accept requests from an allowed origin
    request.reject();
    console.log(
      new Date() + " Connection from origin " + request.origin + " rejected."
    );
    return;
  }

  const connection = request.accept("echo-protocol", request.origin);
  const user = new User(connection);

  userService.addUser(user);

  connection.on("message", function (message) {
    if (message.type === "utf8" && user.name) {
      userService.handleMessage(JSON.parse(message.utf8Data), user);
      messageService.handleMessage(JSON.parse(message.utf8Data), user);
    } else if (message.type === "utf8") {
      userService.handleMessage(JSON.parse(message.utf8Data), user);
    }
  });

  connection.on("close", function (reasonCode, description) {
    userService.removeUser(user);
    console.log(
      new Date() + " Peer " + connection.remoteAddress + " disconnected."
    );
  });
});
