const {User} = require("../models/index");

class UserRepository{
    
    async create(data){
        try {
            const response = await User.create(data);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async findByEmail(email){
        try {
            const response = await User.findOne({email});
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = UserRepository;