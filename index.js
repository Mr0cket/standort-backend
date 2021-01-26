const express = require("express");
const cors = require("cors");
const {PORT} = require("./config/constants");
const feedByLocationRouter = require("./routers/feedByLocation");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hi from express");
});

app.use(feedByLocationRouter);

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
