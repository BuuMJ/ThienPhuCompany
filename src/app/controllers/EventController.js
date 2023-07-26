class EventController {
  event(req, res, next) {
    res.render("event", {
      title: "Sự Kiện",
    });
  }
}

module.exports = new EventController();
