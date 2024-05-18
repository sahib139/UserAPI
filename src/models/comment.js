const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true,
    },
    content:{
        type:String,
        require:true,
    },
    onModel : {
        type:String,
        require:true,
        enum:["Post","Comment"],
    },
    commentable:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        refPath:'onModel',
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"User",
    },
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment",
        }
    ],
    likes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Like",
        }
    ]
},{timestamps:true});

const Comment = mongoose.model("Comment",CommentSchema);

module.exports = Comment;