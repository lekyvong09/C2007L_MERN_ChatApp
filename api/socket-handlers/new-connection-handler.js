const socketStore = require('../socket-store');

exports.newConnectionHandler = async(socket) => {
    const userDetails = socket.user;
    socketStore.addNewConnectedUser({
        socketId: socket.id,
        userId: userDetails.userId
    });
}


exports.disconnectHandler = async(socket) => {
    socketStore.removeConnectedUser(socket.id);
}
