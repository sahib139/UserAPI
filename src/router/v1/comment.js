const express = require("express");
const router = express.Router();

const {CommentMiddleware,IsAuthenticate} = require("../../middleware/index");

const {CommentController} = require("../../controller/index");
const commentController = new CommentController();

router.post("/comments",IsAuthenticate,CommentMiddleware.createMiddleware,commentController.create.bind(commentController));

module.exports=router;