const express = require("express");
const router = express.Router();
const Post = require("../models/post");
const asyncHandler = require("express-async-handler");

router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const allPosts = await Post.find().sort({createdAt: 1}).exec();

    res.json({posts: allPosts});
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const [post, comments] = await Promise.all([Post.findById(req.params.id).exec(), Post.find({comments: req.params.id}).populate("comments").exec()]);

    if (post === null) {
      const err = new Error("Post not found");
      err.status = 404;
      return next(err);
    }

    res.json({post_detail: post, comments: comments});
  })
);

module.exports = router;
