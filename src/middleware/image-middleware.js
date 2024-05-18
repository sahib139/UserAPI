const upload =  require("../config/file-upload-multer-s3");
const MultipleUpload =  upload.array('images', 10);

const uploadImages = (req,res,next)=>{
    try {
        MultipleUpload(req, res, function(error){
            if(error){
                console.log(error);
                return res.status(500).json({
                    message:"Unable to upload images",
                    err:error,
                });
            }
            if(!req.files || req.files.length === 0){
                return next();
            }
            req.body.images = req.files.map(file => file.location);
            next();
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"Unable to upload images",
            err:error,
        });
    }
}

module.exports = {uploadImages};