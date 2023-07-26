class AwardController {
  award(req, res, next) {
    res.render("award", {
      title: "Giải Thưởng",
    });
  }
}

module.exports = new AwardController();
