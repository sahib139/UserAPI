const mongoose = require("mongoose");

const LikeSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true,
    },
    onModel : {
        type:String,
        require:true,
        enum:["Post","Comment"],
    },
    likeable:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        refPath:'onModel',
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"User",
    }
},{timestamps:true});

const Like = mongoose.model("Like",LikeSchema);

module.exports = Like;