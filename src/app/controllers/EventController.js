const EventModel = require("../models/event");
const {mutipleMongooseToObject} = require("../../util/mongoose")

class EventController {
  async event(req, res, next) {
    const latestNews = await EventModel.find().sort({ createdAt: -1 }).limit(1);
    const threeLatestNews = await EventModel.find().sort({ createdAt: -1 }).skip(1).limit(3);
    const remainingNews = await EventModel.find().sort({ createdAt: -1 }).skip(4);
    const listEvent = await EventModel.find({ category: "event" }).sort({ createdAt: -1 });
    const listNew = await EventModel.find({ category: "new" }).sort({ createdAt: -1 });
    console.log(
      listEvent +
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    );
    console.log(mutipleMongooseToObject(listEvent));
    res.render("event", {
      title: "Tin Tức Và Khuyến Mãi",
      listEvent: mutipleMongooseToObject(listEvent),
      listNew: mutipleMongooseToObject(listNew),
      threeLatestNews: mutipleMongooseToObject(threeLatestNews),
      latestNews: mutipleMongooseToObject(latestNews),
      remainingNews: mutipleMongooseToObject(remainingNews),
    });
  }
}

module.exports = new EventController();
