const {StatusCodes} = require("http-status-codes");

const createMiddleware = (req,res,next)=>{
    try {
        const {content,images} = req.body;
        if(!content && !images){
            throw "Post must have content or images or both";
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
