const express = require("express");
const routes = express.Router();
const AuthRouter =  require('./Web/AuthRoutes')

function initilization() {
    app();
    admin();
}

initilization();

function app() {
    // routes.use('/app/user',RegistrationRouter)
    // routes.use('/app/contact',ContactRoutes)
    // routes.use('/app/project',ProjectRouter)
}

function admin() {
    // routes.use('/admin/project',AdminProjectRouter)
}

function web(){
    routes.use('/web/auth',AuthRouter);
}

module.exports = routes;