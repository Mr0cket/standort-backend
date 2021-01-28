const router = require("express").Router();
const Posts = require("../models").post;
const Comments = require("../models").comment;
const Users = require("../models").user;

router.get("/posts/:location", async (req, res) => {
  try {
    const location = req.params.location;

    const posts = await Posts.findAll({
      where: { location: location },
      include: [
        {
          model: Users,
          required: true,
          attributes: ["name", "id", "profilePic", "homeLocation"],
        },
        Comments, // may need to include Users model in comments
      ],
    });

    const parsedPosts = posts.map((post) => post.get({ plain: true }));
    res.send(parsedPosts);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
