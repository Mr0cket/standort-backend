const router = require("express").Router();
const Comments = require("../models").comment;
const authMiddleware = require("../auth/middleware");
const {sequelize} = require("../models");
const Users = require("../models").user;

router.post('/addComment', authMiddleware, async (req, res) => {
    let transaction;
    let newComment;

    try {
        const userId = req.user.id;
        const text = req.body.commentMessage;
        const postId = req.body.postId;
        transaction = await sequelize.transaction();

         newComment = await Comments.create({
            postId: postId,
            userId: userId,
            text: text,
        });
        await transaction.commit();

    } catch (e) {
        console.log(e.message);
        if (transaction) await transaction.rollback();
    }

    res.send(newComment);
});

router.get('/comments/:postId',  async (req, res) => {
    const postId = req.params.postId;
    console.log("postId", postId);
    console.log("req.params", req.params);
    const comments = await Comments.findAll({
        where: {postId: postId},
        include: {
            model: Users,
            required: true
        }});
    
    res.send(comments);
});

module.exports = router;