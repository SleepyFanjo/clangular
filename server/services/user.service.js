const actions = require("../consts/actions");
const roomService = require("./room.service");
const messageService = require("./message.service");

class UserService {
  constructor() {
    this.users = [];
  }

  addUser = (user) => {
    this.users.push(user);
  };

  removeUser = (user) => {
    this.users = this.users.filter((u) => u.connection !== user.connection);
    roomService.leaveRoom(user);
  };

  handleUserSetName = (user, name) => {
    if (!this.userExist(name)) {
      user.name = name;

      return { type: actions.USER_SET_NAME_SUCCESS, name: name };
    }

    return {
      type: actions.USER_SET_NAME_FAILED,
      error: "Ce pseudo est déjà pris",
    };
  };

  handleMessage = (message, user) => {
    switch (message.type) {
      case actions.USER_SET_NAME:
        const result = this.handleUserSetName(user, message.name);
        user.connection.sendUTF(JSON.stringify(result));
        break;
    }
  };

  userExist = (name) => {
    return this.users.find((u) => u.name === name);
  };
}

const userService = new UserService();

module.exports = userService;
