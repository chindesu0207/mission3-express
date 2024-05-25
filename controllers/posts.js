const Post = require("../models/post");
const handleSuccess = require("../service/handleSuccess");
const handleError = require("../service/handleError");

const posts = {
  async getPosts(req, res) {
    const allPosts = await Post.find();
    handleSuccess(res, allPosts);
  },
  async createPosts(req, res) {
    try {
      const data = req.body;
      if (data.content.trim()) {
        const newPost = await Post.create({
          content: data.content,
          name: data.name,
          tags: data.tags,
          likes: data.likes,
          comment: data.comment,
        });
        handleSuccess(res, newPost);
      } else {
        handleError(res);
      }
    } catch (error) {
      handleError(res, error);
    }
  },
  async deleteAll(req, res) {
    await Post.deleteMany({});
    handleSuccess(res, []);
  },
  async deleteOne(req, res) {
    try {
      const id = req.params.id;
      const isExist = await Post.findById(id);
      if (isExist) {
        await Post.findByIdAndDelete(id);
        let message = id + " has been deleted";
        handleSuccess(res, message);
      } else {
        handleError(res);
      }
    } catch (error) {
      handleError(res, error);
    }
  },
  async updatePost(req, res) {
    try {
      const data = req.body;
      const id = req.params.id;
      const isExist = await Post.findById(id);
      if (data.content.trim() && isExist) {
        const updatePost = await Post.findByIdAndUpdate(
          id,
          {
            content: data.content,
            name: data.name,
            tags: data.tags,
            likes: data.likes,
            comment: data.comment,
          },
          { new: true }
        );
        handleSuccess(res, updatePost);
      } else {
        handleError(res);
      }
    } catch {
      handleError(res);
    }
  },
};

module.exports = posts;
