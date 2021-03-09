const roomService = require("./room.service");
const actions = require("../consts/actions");

class MessageService {
  constructor() {}

  handleMessage = (message, user) => {
    console.log(message);
    const result = this.handleAction(message, user);
    console.log(result);
  };

  handleAction = (message, user) => {
    switch (message.type) {
      case actions.USER_JOIN_ROOM:
        return roomService.joinRoom(user, message.roomId);
      case actions.USER_CREATE_ROOM:
        return roomService.createRoom(user);
    }
  };

  sendMessageToGroup = (message, users) => {
    users.forEach((user) => {
      user.connection.sendUTF(JSON.stringify(message));
    });
  };

  sendMessageToUser = (message, user) => {
    return this.sendMessageToGroup(message, [user]);
  };
}

const messageService = new MessageService();

module.exports = messageService;
