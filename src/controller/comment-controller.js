const {CommentService} = require("../services")

class CommentController{

    constructor(){
        this.commentService = new CommentService();
    }

    async create(req,res){
        try {
            req.body.userId = req.user.userId;
            const response = await this.commentService.create(req.body);
            return res.status(200).json({
                data:response,
                message:"comment created successfully!",
                success:true,
                err:{},
            });
        } catch (error) {
            return res.status(500).json({
                data:{},
                message:"unable to create comment!",
                success:true,
                err:error,
            });
        }
    }
}

module.exports = CommentController;