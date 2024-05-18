const express = require("express");
const router = express.Router();

const {PostMiddleware,ImageMiddleware,IsAuthenticate} = require("../../middleware/index");

const {PostController} = require("../../controller/index");
const postController = new PostController();

router.get("/posts/:id",IsAuthenticate,postController.get.bind(postController));
router.post("/posts",IsAuthenticate,ImageMiddleware.uploadImages,PostMiddleware.createMiddleware,postController.create.bind(postController));
router.put("/posts/:id",IsAuthenticate,ImageMiddleware.uploadImages,postController.update.bind(postController));
router.delete("/posts/:id",IsAuthenticate,postController.delete.bind(postController));

module.exports=router;