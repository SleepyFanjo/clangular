const Room = require("../../models/Room");
const actions = require("../consts/actions");

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
    return {
      type: actions.USER_JOINED_ROOM,
      users: room.users.map((u) => u.name),
    };
  };

  createRoom = (user) => {
    const room = new Room();
    room.addUser(user);

    this.rooms.push(room);
    return {
      type: actions.USER_CREATED_ROOM,
      roomId: room.id,
    };
  };

  getRoomById = (roomId) => {
    return this.rooms.find((room) => room.id === roomId);
  };
}

const roomService = new RoomService();

module.exports = roomService;
