const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Role = new Schema(
  {
    role: String,
  },
  {
    timestamps: true,
    collection: "role",
  }
);

const RoleModel = mongoose.model("role", Role);

module.exports = RoleModel;
