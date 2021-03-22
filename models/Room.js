const Game = require("./game");
const { randomCapitalString } = require("../server/utils/random");

class Room {
  constructor(admin) {
    this.id = randomCapitalString(5);
    this.users = [];
    this.game = new Game();
    this.admin = admin;
  }

  isUserAdmin = (user) => {
    return user === this.admin;
  };

  addUser = (user) => {
    this.users.push(user);
  };

  removeUser = (user) => {
    this.users = this.users.filter((u) => u.connection !== user.connection);

    return this.users.length;
  };

  hasUser = (user) => {
    return this.users.find((u) => u.connection === user.connection);
  };

  notifyUsers = (sendMessageToUser, action) => {
    const usersName = this.users.map((u) => u.name);

    // Notify users
    this.users.forEach((u) => {
      sendMessageToUser(
        {
          type: action,
          roomId: this.id,
          users: usersName,
          isAdmin: this.isUserAdmin(u),
        },
        u
      );
    });
  };
}

module.exports = Room;
