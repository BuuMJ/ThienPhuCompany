const EventModel = require("../models/event");
const {
  mutipleMongooseToObject,
  mongooseToObject,
  staffMongooseToObject,
} = require("../../util/mongoose");

class HomeController {
  async home(req, res, next) {
    const event = await EventModel.find().sort({ createdAt: -1 }).limit(3);
    console.log(event);
    res.render("home", {
      event: mutipleMongooseToObject(event),
    });
  }
}

module.exports = new HomeController();
