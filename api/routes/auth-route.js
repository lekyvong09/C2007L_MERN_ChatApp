const express = require('express');
const Joi = require('joi');
const router = express.Router();
const validator = require('express-joi-validation').createValidator({passError: true});
const authController = require('../controllers/auth-controller');

const registerSchema = Joi.object({
    username: Joi.string().min(3),
    password: Joi.string().min(6),
    email: Joi.string().email().required()
});

const loginSchema = Joi.object({
    password: Joi.string().min(6),
    email: Joi.string().email().required()
})


router.post('/register', validator.body(registerSchema), authController.register);

router.post('/login', validator.body(loginSchema), authController.login);

module.exports = router;