const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://duoc6694:3NquY2UnztV5myrU@cluster0.rknczji.mongodb.net/ThienPhu" 
    );
    console.log("Truy cập DB thành công!");
  } catch (error) {
    console.log("Truy cập DB thất bại!!!!");
  }
}

module.exports = { connect };
