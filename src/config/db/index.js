const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://nxt03091999_db_user:5XtgHN6hMsYRlWQy@buumj.c3svo67.mongodb.net/?retryWrites=true&w=majority&appName=BuuMJ"
    );
    console.log("Truy cập DB thành công!");
  } catch (error) {
    console.log("Truy cập DB thất bại!!!!");
  }
}

module.exports = { connect };
