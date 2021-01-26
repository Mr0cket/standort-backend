const express = require("express");
const cors = require("cors");
const {PORT} = require("./config/constants");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hi from express");
});


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
