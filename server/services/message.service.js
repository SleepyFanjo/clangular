class MessageService {
  constructor() {
    this.onMessageHandler = [];
  }

  handleMessage = (message, user) => {
    this.onMessageHandler.forEach((handler) => {
      const result = handler(message, user);

      if (result && result.type) {
        this.sendMessageToUser(result, user);
      }
    });
  };

  sendMessageToGroup = (message, users) => {
    users.forEach((user) => {
      user.connection.sendUTF(JSON.stringify(message));
    });
  };

  sendMessageToUser = (message, user) => {
    return this.sendMessageToGroup(message, [user]);
  };

  setOnMessageHandler = (onMessage) => {
    this.onMessageHandler.push(onMessage);
  };
}

const messageService = new MessageService();

module.exports = messageService;
