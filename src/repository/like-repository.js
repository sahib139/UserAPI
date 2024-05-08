const { Like } = require("../models");
const CrudRepository = require("./crud-repository");

class LikeRepository extends CrudRepository{

    constructor(){
        super(Like)
    }
    
    async findLike(data){
        try {
            const like = await Like.findOne(data);
            return like;
        } catch (error) {
            console.log("Something went wrong at like repository layer!");
            throw error;
        }
    }
}

module.exports = LikeRepository;