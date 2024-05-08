const {StatusCodes} = require("http-status-codes");

const toggleMiddleware = (req,res,next)=>{
    try {
        const {model,modelId,userId} = req.body;
        if(!model || !modelId || !userId){
            throw "request must have model,modelId,userId parameters";
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

module.exports = {toggleMiddleware};
