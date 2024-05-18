const JWT = require("jsonwebtoken");
const {Secrete_kEY} = require("../config/server-config");

const isAuthenticate = async (req, res, next) => {
    try {
        const token = req.headers['x-access-token'];
        const decrypt = JWT.verify(token,Secrete_kEY);
        req.user = { userId: decrypt.id, emailId: decrypt.email }
        next();
    } catch (error) {
        console.log("something went wrong at controller layer");
        return res.status(401).json({
            data: {},
            success: false,
            message: "invalid token",
            err: error,
        });
    }
}

module.exports = isAuthenticate;