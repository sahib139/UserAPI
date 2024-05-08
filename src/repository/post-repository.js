const { Post } = require("../models");
const CrudRepository = require("./crud-repository");

class PostRepository extends CrudRepository{

    constructor(){
        super(Post);
    }

    async get(id){
        try {
            const response = await Post.findById(id).populate("comments likes");
            return response;
        } catch (error) {
            console.log("something went wrong at repository layer!");
            throw error;
        }
    }
}

module.exports = PostRepository;