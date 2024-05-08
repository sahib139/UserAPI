const {StatusCodes} = require("http-status-codes");

const createMiddleware = (req,res,next)=>{
    try {
        const {content,model,modelId,userId} = req.body;
        console.log(req.body);
        if(!content || !model || !modelId || !userId){
            throw "request must have content,model,modelId,userId parameters";
        }
        if(model !== "Post" && model!== "Comment"){
            throw "model must only have 'Post' or 'Comment' as a value";
        }
        next();
    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json({ 
            message: "Bad Request!",
            err:error, 
        });
    }
}

module.exports = {createMiddleware};
