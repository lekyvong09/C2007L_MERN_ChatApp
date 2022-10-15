const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authMiddleware = require('./middleware/auth-middleware');
require('dotenv').config();

const authRoutes = require('./routes/auth-route');


const PORT = process.env.API_PORT || 8080;
const app = express();
console.log('Starting API server');

/**
 * middleware
 */
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/api/auth', authRoutes)

app.use('/api/test-auth-middleware', authMiddleware, (req, res, next) => {
    res.send('You are authorized');
});

/// handle error
app.use((err, req, res, next) => {
    if (err && err.error && err.error.isJoi) {
        res.status(400).json({
            type: err.type,
            message: err.error.toString()
        })
    } else {
        console.log(err);
        const status = err.statusCode || 500;
        const message = err.message;
        const data = err.data;
        res.status(status).json({message: message, data: data});
    }
})

mongoose.connect(process.env.MONGO_URI)
    .then(result => {
        const httpServer = app.listen(PORT, () => {
            console.log(`API is listening on port ${PORT}`);
        });
        require('./socket').registerSocketServer(httpServer);
    })
    .catch(err => {
        console.log('API fail to start');
        console.log(err);
    });
