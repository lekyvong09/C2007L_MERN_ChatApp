const jwt = require('jsonwebtoken');

const verifyTokenSocket = (socket, next) => {
    const token = socket.handshake.auth?.token;
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_TOKEN_KEY);
        socket.user = decodedToken;
    } catch (err) {
        return next(new Error('NOT_AUTHORIZED'));
    }

    next();
}

module.exports = verifyTokenSocket;