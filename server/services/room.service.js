const Room = require("../../models/Room");
const actions = require("../consts/actions");
const messageService = require("./message.service");

class RoomService {
  constructor() {
    this.rooms = [];
    messageService.setOnMessageHandler(this.handleAction);
  }
  handleAction = (message, user) => {
    switch (message.type) {
      case actions.USER_JOIN_ROOM:
        return this.joinRoom(user, message.roomId);
      case actions.USER_CREATE_ROOM:
        return this.createRoom(user);
    }
  };

  createRoom = (user) => {
    const room = new Room(user);
    room.addUser(user);

    this.rooms.push(room);

    return {
      type: actions.USER_JOINED_ROOM,
      roomId: room.id,
      users: [user.name],
      isAdmin: true,
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
    room.notifyUsers(
      messageService.sendMessageToUser,
      actions.USER_JOINED_ROOM
    );
  };

  leaveRoom = (user) => {
    const room = this.getRoomByUser(user);

    if (!room) {
      return;
    }

    const usersCount = room.removeUser(user);

    if (usersCount <= 0) {
      this.clearRoom(room);
      return;
    }

    room.notifyUsers(
      messageService.sendMessageToUser,
      actions.USER_JOINED_ROOM
    );
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
