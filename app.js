const express = require("express");
const cors = require("cors");
require("./connections");

const app = express();

const postsRouter = require("./routes/posts");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/posts", postsRouter);

app.use((req, res) => {
  res.status(404).json({
    message: "No found",
  });
});

module.exports = app;
