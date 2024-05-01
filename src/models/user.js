const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const {SALT,Secrete_kEY} = require("../config/server-config");

const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    },
    username:{
        type:String,
        require:true,
        unique:true,
    }
},{timestamps:true});

UserSchema.pre("save",function process(next){
    const encryptedPassword = bcrypt.hashSync(this.password,SALT);
    this.password = encryptedPassword;
    next();
});

UserSchema.methods.comparePassword = function compare(password){
    return bcrypt.compareSync(password,this.password);
}

UserSchema.methods.genJWT = function generate(){
    return JWT.sign(
        {id : this.id ,email : this.email},
        Secrete_kEY,
        {expiresIn:'1d'}
    );
}

const User = mongoose.model("User",UserSchema);

module.exports = User;