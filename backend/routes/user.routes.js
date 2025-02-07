const express = require('express')
const router = express.Router()
const { body } = require('express-validator')
const userController = require('../controllers/user.controller')

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    bodu('fullname.firstname').isLength({ min: 3 }).withMessage('First name should be 3 chaarcters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be 6 characters long ')
],
    userController.registerUser
)

module.exports = router