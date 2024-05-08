const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    content:{
        type:String,
        require:true,
    },
    likes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Like",
        }
    ],
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment",
        }
    ],
    images:[
        {
            type:String,
        }
    ]
},{timestamps:true});

const Post = mongoose.model("Post",PostSchema);

module.exports = Post;