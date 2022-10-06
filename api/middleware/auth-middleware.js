const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const JWT_token = req.get('Authorization');

        if (typeof JWT_token === 'undefined') {
            throw new Error('Need a JWT token');
        }

        const token = JWT_token.split(' ')[1];

        if (!token) {
            throw new Error('Need a JWT token');
        }

        const decodedToken = jwt.verify(token, process.env.JWT_TOKEN_KEY);

        if (!decodedToken) {
            throw new Error('Invalid token');
        }
        req.userId = decodedToken.userId;

        return next();

    } catch (err) {
        next(err);
    }
}