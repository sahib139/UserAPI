const express = require("express");
const router = express.Router();

const {LikeMiddleware,IsAuthenticate} = require("../../middleware/index");

const {LikeController} = require("../../controller/index");
const likeController = new LikeController();

router.post("/likes/toggle",IsAuthenticate,LikeMiddleware.toggleMiddleware,likeController.toggleLike.bind(likeController));

module.exports=router;