const express = require("express");
const AdminRoutes = express.Router();
const UserController = require('../../Controllers/Admin/UserController')
const GlobalMiddlewares = require('../../Middlewares/GlobalMiddlewares')

function initilization() {
    getRoutes();
    postRoutes();
    putRoutes();
    patchRoutes();
}

initilization();

function getRoutes() {
    AdminRoutes.get('/get-users-list',GlobalMiddlewares.authenticate,GlobalMiddlewares.ractifyError,UserController.getUsersList)
}

function postRoutes() {
}

function putRoutes() {
}
function patchRoutes() {
}

module.exports = AdminRoutes;