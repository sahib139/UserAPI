const {LikeService} = require("../services")

class LikeController{

    constructor(){
        this.likeService = new LikeService();
    }

    async toggleLike(req,res){
        try {
            req.body.userId = req.user.userId;
            const response = await this.likeService.toggleLike(req.body);
            return res.status(200).json({
                data:response,
                message:"successfully toggled!",
                success:true,
                err:{},
            });
        } catch (error) {
            return res.status(500).json({
                data:{},
                message:"unable to toggle like!",
                success:true,
                err:error,
            });
        }
    }
}

module.exports = LikeController;