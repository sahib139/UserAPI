const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
dotenv.config();

module.exports={
    PORT : process.env.PORT,
    DB_URL : process.env.DB_URL,
    SALT : bcrypt.genSaltSync(10),
    Secrete_kEY : process.env.Secrete_kEY,
}