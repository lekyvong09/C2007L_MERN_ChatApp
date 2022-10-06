const User = require('../model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res, next) => {
    try {
        const email = req.body.email.toLowerCase();
        const username = req.body.username.toLowerCase();
        const userExists = await User.exists({email: email});
        if (userExists) {
            const error = new Error('E-mail already in use');
            error.statusCode = 400;
            throw error;
        }

        const hassedPassword = await bcrypt.hash(req.body.password, 12);
        const user = new User({
            email: email,
            username: username,
            password: hassedPassword,
        });

        const result = await user.save();

        const token = jwt.sign(
            {
                userId: result._id.toString(),
                email: result.email
            },
            process.env.JWT_TOKEN_KEY,
            {
                expiresIn: '72h'
            }
        );

        res.status(200).json({email: result.email, username: result.username, token: token})

    } catch (err) {
        next(err);
    }
}


exports.login = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email: email.toLowerCase()});

        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign(
                {
                    userId: user._id.toString(),
                    email: user.email
                },
                process.env.JWT_TOKEN_KEY,
                {
                    expiresIn: '72h'
                }
            );

            return res.status(200).json({
                email: user.email,
                token: token,
                username: user.username
            });
        }

        const error = new Error('Invalid credentials. Please try again');
        error.statusCode = 400;
        throw error;

    } catch (err) {
        next(err);
    }
}