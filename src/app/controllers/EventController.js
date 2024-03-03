const EventModel = require("../models/event");
const { mutipleMongooseToObject } = require("../../util/mongoose");

class EventController {
  async event(req, res, next) {
    const listNew = await EventModel.find({ category: "new" });

    const count = await EventModel.countDocuments({ category: "event" });
    var page = req.query.page;
    var PAGE_SIZE = 10;
    var total = Math.ceil(count / PAGE_SIZE);
    const pages = [];
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
    if (page) {
      page = parseInt(page);
      var skip = (page - 1) * PAGE_SIZE;
      var listEvent = await EventModel.find({ category: "event" })
        .skip(skip)
        .limit(PAGE_SIZE)
        .sort({ prioritize: -1, createdAt: -1 });
    } else {
      page = 1;
      var skip = (page - 1) * PAGE_SIZE;
      var listEvent = await EventModel.find({ category: "event" })
        .skip(skip)
        .limit(PAGE_SIZE)
        .sort({ prioritize: -1, createdAt: -1 });
    }

    res.render("event", {
      title: "Sự Kiện",
      listEvent: mutipleMongooseToObject(listEvent),
      listNew: mutipleMongooseToObject(listNew),
      pages,
    });
  }

  async detail(req, res, next) {
    const idEvent = req.params.id;
    const event = await EventModel.findById(idEvent);

    res.render("detailEvent", {
      title: "Chi Tiết Sự Kiện",
      event,
    });
  }
}

module.exports = new EventController();
