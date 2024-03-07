const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    username: String,
    password: String,
    role: String,
    email: String,
    city: String,
    district: String,
    fullname: String,
    avatar: String,
  },
  {
    timestamps: true,
    collection: "user",
  }
);
const UserModel = mongoose.model("user", User);

module.exports = UserModel;
