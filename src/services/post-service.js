const {PostRepository} = require("../repository");

class PostService{

    constructor(){
        this.postRepository = new PostRepository();
    }

    async create(data){
        try {
            const post = await this.postRepository.create(data);
            return post;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    
    async get(id){
        try {
            const post = await this.postRepository.get(id);
            return post;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async update(id,data){
        try {
            const post = await this.postRepository.update(id,data);
            return post;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async delete(id){
        try {
            const response = await this.postRepository.delete(id);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = PostService;