const express = require("express");
const router = express.Router();

const {UserMiddleware} = require("../../middleware/index");

const {UserController} = require("../../controller/index");
const userController = new UserController();

router.post('/signup',UserMiddleware.checkSignUp,userController.register.bind(userController));
router.post('/signin',UserMiddleware.checkSignIn,userController.login.bind(userController));
router.patch('/forgot-password',UserMiddleware.checkForgetPassword,userController.forgetPassword.bind(userController));

module.exports=router;