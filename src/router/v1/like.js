const express = require("express");
const router = express.Router();

const {LikeMiddleware} = require("../../middleware/index");

const {LikeController} = require("../../controller/index");
const likeController = new LikeController();

router.post("/likes/toggle",LikeMiddleware.toggleMiddleware,likeController.toggleLike.bind(likeController));

module.exports=router;