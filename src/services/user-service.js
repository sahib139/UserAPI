const { UserRepository } =  require("../repository/index.js");

class UserService{

    constructor(){
        this.userRepository = new UserRepository();
    }

    async signup(data){
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async signin(data){
        try {
            const user = await this.userRepository.findByEmail(data.email);
            if(!user){
                throw "No user found!";
            }
            if(!user.comparePassword(data.password)){
                throw "Incorrect Password!";
            }
            const token = user.genJWT();
            return token;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async forgetPassword(data){
        try {
            const user = await this.userRepository.findByEmail(data.email);
            if(!user){
                throw "No user found!";
            }
            user.password = data.newPassword;
            await user.save();
            return true;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = UserService;