const express = require("express");
const route = require("./route/router.js");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://singhshreya425:shreyasingh1234@cluster0.yxxvuvg.mongodb.net/shreya526",
    { UseNewUrlParser: true }
  )
  .then(() => console.log("Mongo-Db is connected"))
  .catch((err) => console.log(err.message));

app.use("/", route);

app.listen(process.env.PORT || 4000, function () {
  console.log("listening at " + (process.env.PORT || 4000));
});
