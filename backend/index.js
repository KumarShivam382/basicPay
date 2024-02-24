const express = require("express");
const rootRouter = require("./routes/index");
const app = express();
const mongoose = require("mongoose");

// MongoDB connection URI for connecting to your cluster
const { mongoURL } = require("./config.js");

mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });
app.use(express.json()); // Middleware for parsing JSON
app.use("/app/v1", rootRouter);
app.listen(3000, () => {
  console.log("listening");
});
