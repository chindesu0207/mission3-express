const express = require("express");
const router = express.Router();
const PostsControllers = require("../controllers/posts");

router.delete("/:id", PostsControllers.deleteOne);
router.patch("/:id", PostsControllers.updatePost);

module.exports = router;
