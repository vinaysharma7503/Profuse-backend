const express = require("express");
const UserRoutes = express.Router();
const AuthController = require('../../Controllers/Web/AuthController')
const GlobalMiddlewares = require('../../Middlewares/GlobalMiddlewares')
const UserValidation = require('../../Validations/UserValidations')

function initilization() {
    getRoutes();
    postRoutes();
    putRoutes();
}

initilization();

function getRoutes() {
    // UserRoutes.get('/get-user-profile',GlobalMiddlewares.authenticate,GlobalMiddlewares.ractifyError,UserController.getUserProfile)
}

function postRoutes() {
    // UserRoutes.post('/login',UserValidation.userLogin(),GlobalMiddlewares.ractifyError,UserController.userLogin)
    UserRoutes.post('/register',UserValidation.userRegister(),GlobalMiddlewares.ractifyError,AuthController.userSignup)
}

function putRoutes() {
}

module.exports = UserRoutes;