const express = require("express");
const router = express.Router();

const {PostMiddleware,ImageMiddleware} = require("../../middleware/index");

const {PostController} = require("../../controller/index");
const postController = new PostController();

router.get("/posts/:id",postController.get.bind(postController));
router.post("/posts",ImageMiddleware.uploadImages,PostMiddleware.createMiddleware,postController.create.bind(postController));
router.put("/posts/:id",ImageMiddleware.uploadImages,postController.update.bind(postController));
router.delete("/posts/:id",postController.delete.bind(postController));

module.exports=router;