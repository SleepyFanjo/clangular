const Game = require("./game");
const { randomCapitalString } = require("../server/utils/random");

class Room {
  constructor() {
    this.id = randomCapitalString(5);
    this.users = [];
    this.game = new Game();
  }

  addUser = (user) => {
    this.users.push(user);
  };

  removeUser = (user) => {
    this.users.filter((u) => u.connection !== user.connection);
  };
}

module.exports = Room;
