const EventModel = require("../models/event");
const {
  mutipleMongooseToObject,
  staffMongooseToObject,
} = require("../../util/mongoose");

class EventController {
  async event(req, res, next) {
    var PAGE_SIZE = 10;
    const latestNews = await EventModel.find().sort({ createdAt: -1 }).limit(1);
    const threeLatestNews = await EventModel.find()
      .sort({ createdAt: -1 })
      .skip(1)
      .limit(3);
    //Phân trang của Remaining New
    var pageOfRemain = req.query.pageOfRemain;
    if (pageOfRemain) {
      const count = await EventModel.countDocuments()
        .sort({ createdAt: -1 })
        .skip(4);
      const total = Math.ceil(count / PAGE_SIZE);
      var pagesOfRemain = [];
      for (let i = 1; i <= total; i++) {
        pagesOfRemain.push(i);
      }
      pageOfRemain = parseInt(pageOfRemain);
      const skip = (pageOfRemain - 1) * PAGE_SIZE + 4;
      var remainingNews = await EventModel.find()
        .skip(skip)
        .limit(PAGE_SIZE)
        .sort({ createdAt: -1 });
    } else {
      const count = await EventModel.countDocuments()
        .sort({ createdAt: -1 })
        .skip(4);
      const total = Math.ceil(count / PAGE_SIZE);
      var pagesOfRemain = [];
      for (let i = 1; i <= total; i++) {
        pagesOfRemain.push(i);
      }
      pageOfRemain = 1;
      const skip = (pageOfRemain - 1) * PAGE_SIZE + 4;
      var remainingNews = await EventModel.find()
        .skip(skip)
        .limit(PAGE_SIZE)
        .sort({ createdAt: -1 });
    }

    //Phân trang New
    var pageOfNew = req.query.pagesOfNew;
    if (pageOfNew) {
      const countOfNew = await EventModel.countDocuments({ category: "new" });
      const total = Math.ceil(countOfNew / PAGE_SIZE);
      var pagesOfNew = [];
      for (let i = 1; i <= total; i++) {
        pagesOfNew.push(i);
      }
      pageOfNew = parseInt(pageOfNew);
      const skip = (pageOfNew - 1) * PAGE_SIZE;
      var listNew = await EventModel.find({ category: "new" })
        .skip(skip)
        .limit(PAGE_SIZE)
        .sort({ createdAt: -1 });
    } else {
      const countOfNew = await EventModel.countDocuments({ category: "new" });
      const total = Math.ceil(countOfNew / PAGE_SIZE);
      var pagesOfNew = [];
      for (let i = 1; i <= total; i++) {
        pagesOfNew.push(i);
      }
      pageOfNew = parseInt(pageOfNew);
      const skip = (pageOfNew - 1) * PAGE_SIZE;
      var listNew = await EventModel.find({ category: "new" })
        .skip(skip)
        .limit(PAGE_SIZE)
        .sort({ createdAt: -1 });
    }

    //Phân trang của Event
    var pageOfEvent = req.query.pageOfEvent;
    if (pageOfEvent) {
      const count = await EventModel.countDocuments({ category: "event" });
      const total = Math.ceil(count / PAGE_SIZE);
      var pagesOfEvent = [];
      for (let i = 1; i <= total; i++) {
        pagesOfEvent.push(i);
      }
      pageOfEvent = parseInt(pageOfEvent);
      const skip = (pageOfEvent - 1) * PAGE_SIZE;
      var listEvent = await EventModel.find({ category: "event" })
        .skip(skip)
        .limit(PAGE_SIZE)
        .sort({ prioritize: -1, createdAt: -1 });
    } else {
      const count = await EventModel.countDocuments({ category: "event" });
      const total = Math.ceil(count / PAGE_SIZE);
      var pagesOfEvent = [];
      for (let i = 1; i <= total; i++) {
        pagesOfEvent.push(i);
      }
      pageOfEvent = 1;
      const skip = (pageOfEvent - 1) * PAGE_SIZE;
      var listEvent = await EventModel.find({ category: "event" })
        .skip(skip)
        .limit(PAGE_SIZE)
        .sort({ prioritize: -1, createdAt: -1 });
    }

    res.render("event", {
      title: "Tin Tức Và Khuyến Mãi",
      listEvent: mutipleMongooseToObject(listEvent),
      listNew: mutipleMongooseToObject(listNew),
      pagesOfEvent,
      pagesOfRemain,
      pagesOfNew,
      latestNews: mutipleMongooseToObject(latestNews),
      threeLatestNews: mutipleMongooseToObject(threeLatestNews),
      remainingNews: mutipleMongooseToObject(remainingNews),
    });
  }

  async detail(req, res, next) {
    const idEvent = req.params.id;
    const event = await EventModel.findById(idEvent);
    const category = event.category;
    const suggestEvent = await EventModel.find({
      category: category,
      _id: {$ne: idEvent}
    }).sort({ createdAt: -1 }).limit(3);
    res.render("detailEvent", {
      title: "Chi Tiết Sự Kiện",
      event: staffMongooseToObject(event),
      suggestEvent: mutipleMongooseToObject(suggestEvent),
    });
  }
}

module.exports = new EventController();
