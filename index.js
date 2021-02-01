const express = require("express");
const cors = require("cors");
const app = express();
const jsonParser = express.json();
const logMiddleware = require("morgan");
const proxy = require("express-http-proxy");

if (process.env.DELAY) {
  app.use((req, res, next) => {
    setTimeout(() => next(), parseInt(process.env.DELAY));
  });
}
app.use(cors());

// proxy for positionStack requests

// Middleware
app.use(jsonParser);
app.use(logMiddleware("dev")); // level of verboseness

// Import routers
const postsRouter = require("./routes/posts");
const authRouter = require("./routes/auth");
const feedByLocationRouter = require("./routes/feedByLocation");
const addCommentRouter = require("./routes/addComment");
const positionRouter = require("./routes/position");

// Routes
app.use("/", authRouter);
app.use("/position", positionRouter);
app.use("/posts", postsRouter);
app.use(feedByLocationRouter);
app.use(addCommentRouter);

// API test endpoint
app.get("/pancake", (req, res) => {
  res.send(
    `Sorry sir, 
    We don't serve "pancakes" in such a reputable establishment.
    have some waffles 
    🧇🧇🧇🧇`
  );
});

// initiate server process
const internalIp = require("internal-ip").v4.sync();
const { PORT } = require("./config/constants");
app.listen(PORT, () =>
  console.log(`listening on:
    local:  localhost:${PORT}
    network:    ${internalIp}:${PORT}
    `)
);
