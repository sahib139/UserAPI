const {CommentRepository, PostRepository} = require("../repository");

class CommentService{
    constructor(){
        this.commentRepository = new CommentRepository();
        this.postRepository = new PostRepository();
    }

    async create({model,modelId,userId,content}){
        try{
            if(model === 'Post'){
                var commentable = await this.postRepository.get(modelId);
            }else if(model === 'Comment'){
                commentable = await this.commentRepository.get(modelId);
            }else{
                console.log("No such model found!!");
                throw new Error("no model match!");
            }
            console.log(commentable);
            const new_comment = await this.commentRepository.create({
                content:content,
                onModel:model,
                commentable:modelId,
                user:userId,
                comments:[],
            });
            commentable.comments.push(new_comment);
            await commentable.save();
    
            return new_comment;
        }catch(error){
            console.log(error);
            throw error;
        }
    }
}

module.exports = CommentService;