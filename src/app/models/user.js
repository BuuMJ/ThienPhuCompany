const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    username: String,
    password: String,
  },
  {
    collection: "user",
  }
);

const UserModel = mongoose.model("user", User);

module.exports = UserModel;
