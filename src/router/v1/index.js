const express = require("express");
const router = express.Router();

const usersRoutes = require("./user");
const postRoutes = require("./post");
const likeRoutes = require("./like");
const commentRoutes = require("./comment");

router.use("/users",usersRoutes);
router.use(postRoutes);
router.use(likeRoutes);
router.use(commentRoutes);

module.exports=router;