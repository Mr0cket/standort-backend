const Router = require("express");
const router = new Router();
const Posts = require("../models").post;
const Comments = require("../models").comment;
const Users = require("../models").user;

router.get('/posts/:location', async (req, res) => {
        try {
            const location = req.params.location;

            const posts = await Posts.findAll({
                where: {location: location},
                include: {
                    model: Users,
                    required: true
                }
            });
            const comments = await Comments.findAll({where: {postId: posts.map(post => post.id)}});
            
            let newPosts = [];

            posts.forEach((post) => {
                newPosts.push({
                    "post": post,
                    "comments": comments.filter(comment => comment.postId === post.id)
                })
            });

            res.send(newPosts);
        } catch
            (error) {
            console.log(error.message);
        }
    }
);

module.exports = router;