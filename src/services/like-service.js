const { LikeRepository, PostRepository, CommentRepository } = require("../repository");

class LikeService{

    constructor(){
        this.likeRepository = new LikeRepository();
        this.postRepository = new PostRepository();
        this.commentRepository = new CommentRepository();
    }

    async toggleLike({model,modelId,userId}){
        try {
            if (model === 'Post') {
                var likeable = await this.postRepository.get(modelId);
            } else if (model === 'Comment') {
                likeable = await this.commentRepository.get(modelId);
            } else {
                console.log("No model with a name " + error);
                throw new Error("Incorrect model name!!");
            }

            const likeExist = await this.likeRepository.findLike({
                onModel: model,
                likeable: modelId,
                user: userId,
            });

            if (likeExist) {
                likeable.likes.pull(likeExist.id)
                await likeable.save();
                await this.likeRepository.delete(likeExist.id);
                var isAdded = false;
            } else {
                const newLike = await this.likeRepository.create({
                    onModel: model,
                    likeable: modelId,
                    user: userId,
                });
                likeable.likes.push(newLike);
                await likeable.save();
                isAdded = true;
            }

            return true;

        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = LikeService; 

