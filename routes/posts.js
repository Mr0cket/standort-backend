const router = require("express").Router();
const Post = require("../models").post;
// For all requests related to posts

// GET /posts

// POST /posts
router.post("/", async (req, res, next) => {
  // for later: picture, tags, votes, location
  const { title, message } = req.body;
  try {
    const newPost = await Post.create({ title, message });
    res.send(newPost);
  } catch (e) {
    console.log(`[posts]sequelize error: ${e.message}`);
  }
});

module.exports = router;
