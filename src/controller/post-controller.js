const {PostService} = require("../services");

class PostController {

    constructor(){
        this.postService = new PostService();
    }

    async create (req,res){
        try {
            req.body.userId = req.user.userId;
            const post = await this.postService.create(req.body);
            return res.status(200).json({
                data:post,
                message:"post successfully created!",
                success:true,
                err:{},
            });
        } catch (error) {
            return res.status(500).json({
                data:{},
                message:"unable to create post!",
                success:true,
                err:error,
            });
        }
    }

    async get (req,res){
        try {
            const post = await this.postService.get(req.params.id);
            return res.status(200).json({
                data:post,
                message:"post successfully fetched!",
                success:true,
                err:{},
            });
        } catch (error) {
            return res.status(500).json({
                data:{},
                message:"unable to fetch post!",
                success:true,
                err:error,
            });
        }
    }

    async update (req,res){
        try {
            req.body.userId = req.user.userId;
            const post = await this.postService.update(req.params.id,req.body);
            return res.status(200).json({
                data:post,
                message:"post successfully updated!",
                success:true,
                err:{},
            });
        } catch (error) {
            return res.status(500).json({
                data:{},
                message:"unable to update post!",
                success:true,
                err:error,
            });
        }
    }

    async delete (req,res){
        try {
            const post = await this.postService.delete(req.params.id);
            return res.status(200).json({
                data:post,
                message:"post successfully deleted!",
                success:true,
                err:{},
            });
        } catch (error) {
            return res.status(500).json({
                data:{},
                message:"unable to delete post!",
                success:true,
                err:error,
            });
        }
    }
}

module.exports = PostController;