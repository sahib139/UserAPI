const  {UserService} = require("../services/index");
const {StatusCodes} = require("http-status-codes");

class UserController{

    constructor(){
        this.userService = new UserService();
    }

    async register(req,res){
        try {
            const response = await this.userService.signup(req.body);
            return res.status(StatusCodes.OK).json({
                data:response,
                success:true,
                message:"successfully created new user",
                err:{},
            });
        } catch (error) {
            console.log(error);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                data:{},
                success:false,
                message:"Unable to register new user",
                err:error,
            });
        }
    }

    async login(req,res){
        try {
            const response = await this.userService.signin(req.body);
            return res.status(StatusCodes.OK).json({
                data:{
                    token:response
                },
                success:true,
                message:"successfully login",
                err:{},
            });
        } catch (error) {
            console.log(error);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                data:{},
                success:false,
                message:"Unable to login",
                err:error,
            });
        }
    }

    async forgetPassword(req,res){
        try {
            const response = await this.userService.forgetPassword(req.body);
            return res.status(StatusCodes.OK).json({
                data:{},
                success:true,
                message:"successfully changed password",
                err:{},
            });
        } catch (error) {
            console.log(error);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                data:{},
                success:false,
                message:"Unable to update password",
                err:error,
            });
        }
    }
}

module.exports = UserController;