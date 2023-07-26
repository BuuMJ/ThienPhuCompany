class AboutController {
  about(req, res, next) {
    res.render("about", {
      title: "Giới Thiệu",
    });
  }
}
module.exports = new AboutController();
