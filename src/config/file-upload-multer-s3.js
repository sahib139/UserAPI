const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const {AWS_S3_Bucket,AWS_Access_KEY,AWS_Secret_KEY} = require("../config/server-config");

aws.config.update({
    region : "ap-south-1",
    accessKeyId : AWS_Access_KEY,
    secretAccessKey : AWS_Secret_KEY,
});

const S3 = new aws.S3();

const upload = multer({
    storage:multerS3({
        s3:S3,
        bucket:AWS_S3_Bucket,
        acl:"public-read",
        metadata: function (req, file, cb) {
            cb(null, {fieldName: file.fieldname});
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString())
        }
    }),
});

module.exports = upload;