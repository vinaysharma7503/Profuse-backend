const express = require("express");
const routes = express.Router();
const AuthRouter =  require('./Web/AuthRoutes')
const AdminAuthRouter =  require('./Admin/AuthRoutes')
const AdminUserRouter =  require('./Admin/UserRoutes')

function initilization() {
    app();
    admin();
    web();
}

initilization();

function app() {
    // routes.use('/app/user',RegistrationRouter)
    // routes.use('/app/contact',ContactRoutes)
    // routes.use('/app/project',ProjectRouter)
}

function admin() {
    routes.use('/admin/auth',AdminAuthRouter)
    routes.use('/admin/user',AdminUserRouter)
}

function web(){
    routes.use('/web/auth',AuthRouter);
}

module.exports = routes;