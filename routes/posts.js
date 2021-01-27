const router = require("express").Router();
const Post = require("../models").post;
// For all requests related to posts

// GET /posts

// POST /posts
router.post("/", async (req, res, next) => {
  // for later: picture, votes, location
  const { title, message, tags, userId = 1 } = req.body;
  try {
    const newPost = await Post.create({ userId, title, message, tags });
    res.send(newPost.dataValues);
  } catch (e) {
    console.log(`[posts]sequelize error: ${e.message}`);
    next(e);
  }
});

module.exports = router;
