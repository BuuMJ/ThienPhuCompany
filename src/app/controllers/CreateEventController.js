const EventModel = require("../models/event");
const UserModel = require("../models/user");
class CreateEventController {
  formCreate(req, res, next) {
    const user = req.user;
    console.log(user);
    res.render("createEvent", {
      title: "Quản Trị Viên",
      user: user,
    });
  }
  async create(req, res, next) {
    const text1 = req.body.text1;
    const text2 = req.body.text2;
    const text3 = req.body.text3;
    const text4 = req.body.text4;
    const text5 = req.body.text5;
    const text6 = req.body.text6;
    const text7 = req.body.text7;
    const text8 = req.body.text8;
    const text9 = req.body.text9;
    const text10 = req.body.text10;
    const title = req.body.title;
    const category = req.body.category;

    if (req.files) {
      const image1 = req.files["image1"]
        ? req.files["image1"][0].filename
        : undefined;
      const image2 = req.files["image2"]
        ? req.files["image2"][0].filename
        : undefined;
      const image3 = req.files["image3"]
        ? req.files["image3"][0].filename
        : undefined;
      const image4 = req.files["image4"]
        ? req.files["image4"][0].filename
        : undefined;
      const image5 = req.files["image5"]
        ? req.files["image5"][0].filename
        : undefined;
      const image6 = req.files["image6"]
        ? req.files["image6"][0].filename
        : undefined;
      const image7 = req.files["image7"]
        ? req.files["image7"][0].filename
        : undefined;
      const image8 = req.files["image8"]
        ? req.files["image8"][0].filename
        : undefined;
      const image9 = req.files["image9"]
        ? req.files["image9"][0].filename
        : undefined;
      const image10 = req.files["image10"]
        ? req.files["image10"][0].filename
        : undefined;

      await EventModel.create({
        category: category,
        title: title,
        text1: text1,
        text2: text2,
        text3: text3,
        text4: text4,
        text5: text5,
        text6: text6,
        text7: text7,
        text8: text8,
        text9: text9,
        text10: text10,
        image1: image1,
        image2: image2,
        image3: image3,
        image4: image4,
        image5: image5,
        image6: image6,
        image7: image7,
        image8: image8,
        image9: image9,
        image10: image10,
      });
      res.redirect("back");
    } else {
      await EventModel.create({
        category: category,
        title: title,
        text1: text1,
        text2: text2,
        text3: text3,
        text4: text4,
        text5: text5,
        text6: text6,
        text7: text7,
        text8: text8,
        text9: text9,
        text10: text10,
      });
      res.redirect("back");
    }
  }
}

module.exports = new CreateEventController();
