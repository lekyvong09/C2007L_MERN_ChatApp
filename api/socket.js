const authSocketMiddleware = require('./middleware/auth-socket-middleware');
const {newConnectionHandler, disconnectHandler} = require('./socket-handlers/new-connection-handler');

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
        newConnectionHandler(socket);

        socket.on('disconnect', () => {
            disconnectHandler(socket);
        });
    });
}

module.exports = {
    registerSocketServer: registerSocketServer,
}