# Actions

- USER_JOIN_ROOM
  - Permet à l'utilisateur de rejoindre une salle via son ID
  - Input : `{type: 'USER_JOIN_ROOM', roomId: 'ABCDE'}`
  - roomId : Id de la room communiqué par le créateur de la salle (sur 5 chars)
  - Réponse : `{type: 'USER_JOINED_ROOM', users: ['hugo', 'léo', 'sophie']}`
  - users: pseudo des utilisateurs connecté à la room

- USER_CREATE_ROOM
  - Permet à l'utilisateur de créer une nouvelle salle
  - Input : `{type: 'USER_CREATE_ROOM'}`
  - Réponse : `{type: 'USER_CREATED_ROOM', roomId: 'ABCDE'}`
  - roomId: Id de la room créée, à communiquer aux autres users
