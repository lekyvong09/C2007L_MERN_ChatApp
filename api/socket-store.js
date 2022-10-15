const connectedUser = new Map();

const addNewConnectedUser = ({socketId, userId}) => {
    connectedUser.set(socketId, {userId});
    console.log('new connected users: ', connectedUser);
}

const removeConnectedUser = (socketId) => {
    if (connectedUser.has(socketId)) {
        connectedUser.delete(socketId);
    }
}

module.exports = {
    addNewConnectedUser,
    removeConnectedUser,
}