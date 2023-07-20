const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Event = new Schema(
    {
        title: String,
        category:String,
        text1: String,
        text2: String,
        text3: String,
        text4: String,
        text5: String,
        text6: String,
        text7: String,
        text8: String,
        text9: String,
        text10: String,
        text11: String,
        image1: String,
        image2: String,
        image3: String,
        image4: String,
        image5: String,
        image6: String,
        image7: String,
        image8: String,
        image9: String,
        image10: String,
    },{
        timestamps: true,
      },
      {
        collection: "event",
      }
)
const EventModel = mongoose.model("event", Event);

module.exports = EventModel;