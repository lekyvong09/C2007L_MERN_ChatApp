import io from 'socket.io-client';

export const connectWithSocketServer = (userDetails) => {
    const socket = io('http://localhost:8080', {
        auth: {
            token: userDetails.token
        }
    });

    socket.on('connect', () => {
        console.log('successful connect to socket server with socketId ', socket.id);
    })
}