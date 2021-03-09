const Room = require("../../models/Room");
const actions = require("../consts/actions");

class RoomService {
  constructor() {
    this.rooms = [];
  }

  createRoom = (user) => {
    const room = new Room();
    room.addUser(user);

    this.rooms.push(room);

    return {
      type: actions.USER_CREATED_ROOM,
      roomId: room.id,
    };
  };

  joinRoom = (user, roomId) => {
    const room = this.getRoomById(roomId);

    if (!room) {
      return {
        type: actions.USER_JOIN_ROOM_FAILED,
        error: "Cette salle n'existe pas",
      };
    }

    room.addUser(user);

    return {
      type: actions.USER_JOINED_ROOM,
      users: room.users.map((u) => u.name),
    };
  };

  leaveRoom = (user) => {
    const room = this.getRoomByUser(user);

    if (!room) {
      return;
    }

    const usersCount = room.removeUser(user);

    if (usersCount <= 0) {
      this.clearRoom(room);
    }
  };

  clearRoom = (room) => {
    this.rooms = this.rooms.filter((r) => r.id !== room.id);
  };

  getRoomByUser = (user) => {
    return this.rooms.find((r) => r.hasUser(user));
  };

  getRoomById = (roomId) => {
    return this.rooms.find((room) => room.id === roomId);
  };
}

const roomService = new RoomService();

module.exports = roomService;
