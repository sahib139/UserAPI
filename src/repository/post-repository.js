const { Post } = require("../models");
const CrudRepository = require("./crud-repository");

class PostRepository extends CrudRepository{

    constructor(){
        super(Post);
    }
}

module.exports = PostRepository;