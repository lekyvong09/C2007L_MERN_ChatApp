const authSocketMiddleware = require('./middleware/auth-socket-middleware');

const registerSocketServer = (httpServer) => {
    const io = require('socket.io')(httpServer, {
        cors: {
            origin: '*',
            method: ['GET', 'POST'],
        }
    });

    io.use((socket, next) => {
        authSocketMiddleware(socket, next);
    });

    io.on('connection', (socket) => {
        console.log(socket.id, ' connected');
    });
}

module.exports = {
    registerSocketServer: registerSocketServer,
}