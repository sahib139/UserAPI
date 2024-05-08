const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
dotenv.config();

module.exports={
    PORT : process.env.PORT,
    DB_URL : process.env.DB_URL,
    SALT : bcrypt.genSaltSync(10),
    Secrete_kEY : process.env.Secrete_kEY,
    AWS_S3_Bucket :process.env.AWS_S3_Bucket,
    AWS_Access_KEY : process.env.AWS_Access_KEY,
    AWS_Secret_KEY : process.env.AWS_Secret_KEY,
    AWS_S3_Region : process.env.AWS_S3_Region,
}