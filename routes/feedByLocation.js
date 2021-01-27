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
        Comments,
      ],
    });
    // const comments = await Comments.findAll({where: {postId: posts.map(post => post.id)}});

    /*             let newPosts = [];

            posts.forEach((post) => {
                newPosts.push({
                    "post": post,
                    "comments": comments.filter(comment => comment.postId === post.id)
                })
            });
 */
    const parsedPosts = posts.map((post) => post.get({ plain: true }));
    res.send(parsedPosts);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
