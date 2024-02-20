const EventModel = require("../models/event");

class EventController {
  async event(req, res, next) {
    const listEvent = await EventModel.find({ category: "event" });
    const listNew = await EventModel.find({ category: "new" });
    console.log(
      listEvent +
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    );
    console.log(listNew);
    res.render("event", {
      title: "Sự Kiện",
    });
  }
}

module.exports = new EventController();
