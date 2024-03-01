const EventModel = require("../models/event");
const {mutipleMongooseToObject} = require("../../util/mongoose")

class EventController {
  async event(req, res, next) {
    const listEvent = await EventModel.find({ category: "event" });
    const listNew = await EventModel.find({ category: "new" });
    console.log(
      listEvent +
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    );
    console.log(mutipleMongooseToObject(listEvent));
    res.render("event", {
      title: "Sự Kiện",
      listEvent: mutipleMongooseToObject(listEvent),
      listNew: mutipleMongooseToObject(listNew),
    });
  }
}

module.exports = new EventController();
