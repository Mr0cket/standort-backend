const express = require("express");
const app = express();
const cors = require("cors");
const jsonParser = express.json();
const logMiddleware = require("morgan");

// Middleware
app.use(cors());
app.use(jsonParser);
app.use(logMiddleware("dev")); // level of verboseness

// Import routers
const postsRouter = require("./routes/posts");

// Routes
app.use("/posts", postsRouter);

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
app.listen(PORT, () => {
  console.log(`listening on:
    local:  localhost:${port}
    network:    ${internalIp}:${port}
    `);
});
