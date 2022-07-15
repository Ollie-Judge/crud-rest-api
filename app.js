const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

const PORT = 3000;

app.use(bodyParser.json());

// import routes

const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

// routes
app.get("/", (req, res) => {
  res.send("We are on home");
});

mongoose.connect(process.env.DB_CONNECTION, () =>
  console.log("Connected to the database")
);

app.listen(PORT);
