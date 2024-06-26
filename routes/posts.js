const express = require("express");
const router = express.Router();
const PostsControllers = require("../controllers/posts");

router.get("/", PostsControllers.getPosts);
router.post("/", PostsControllers.createPosts);
router.delete("/", PostsControllers.deleteAll);

module.exports = router;
