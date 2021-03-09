const Room = require("../../models/Room");

class RoomService {
  constructor() {
    this.rooms = [];
  }

  joinRoom = (user, roomId) => {
    const room = this.getRoomById(roomId);

    if (!room) {
      throw new Error("Room doesn't exist");
    }

    room.addUser(user);
    console.log(this.rooms);
    return true;
  };

  createRoom = (user) => {
    const room = new Room();
    room.addUser(user);

    this.rooms.push(room);
    console.log(this.rooms);
    return room.id;
  };

  getRoomById = (roomId) => {
    return this.rooms.find((room) => room.id === roomId);
  };
}

const roomService = new RoomService();

module.exports = roomService;
