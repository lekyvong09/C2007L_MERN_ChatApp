
const registerSocketServer = (httpServer) => {
    const io = require('socket.io')(httpServer, {
        cors: {
            origin: '*',
            method: ['GET', 'POST'],
        }
    });

    io.on('connection', (socket) => {
        console.log(socket.id, ' connected');
    });
}

module.exports = {
    registerSocketServer: registerSocketServer,
}