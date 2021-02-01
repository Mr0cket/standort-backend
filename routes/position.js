const { default: axios } = require("axios");

const router = require("express").Router();

// GET /position/forward
// `http://api.positionstack.com/v1/reverse?access_key=${req.query.access_key}&query=${req.query.query}`;

// GET /position/backward
router.get("/:direction", async (req, res, next) => {
  const { direction } = req.params;
  try {
    const positionRes = await axios.get(
      `http://api.positionstack.com/v1/${direction}?access_key=${req.query.access_key}&query=${req.query.query}`
    );
    res.send(positionRes.data);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
