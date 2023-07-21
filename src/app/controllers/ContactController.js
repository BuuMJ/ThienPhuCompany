class ContactController {
  contact(req, res, next) {
    res.render("contact");
  }
}

module.exports = new ContactController();
