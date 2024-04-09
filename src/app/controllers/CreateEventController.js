const EventModel = require("../models/event");
const UserModel = require("../models/user");
const RoleModel = require("../models/role");
const bcrypt = require("bcrypt");
const {
  mutipleMongooseToObject,
  mongooseToObject,
  staffMongooseToObject,
} = require("../../util/mongoose");

class CreateEventController {
  async formCreate(req, res, next) {
    const user = req.user;
    const role = await RoleModel.find();
    const roles = mutipleMongooseToObject(role);
    const listUser = await UserModel.find().sort({ createdAt: -1 });
    const listUsers = mutipleMongooseToObject(listUser);
    const listEvent = await EventModel.find().sort({ createdAt: -1 });
    const countUser = await UserModel.countDocuments();
    const countEvent = await EventModel.countDocuments();
    const userWithRoles = listUsers.map((user) => {
      const userRoles = roles.filter((role) => role.userId === user.id);
      const remainingRoles = userRoles.filter(
        (userRole) => userRole.role !== user.role
      );
      return {
        ...user,
        roles: remainingRoles,
      };
    });
    res.render("createEvent", {
      title: "Quản Trị Viên",
      user: user,
      countUser: countUser,
      countEvent: countEvent,
      roles: roles,
      listUser: userWithRoles,
      listEvent: mutipleMongooseToObject(listEvent),
    });
  }

  addRole(req, res, next) {
    const role = req.body.createRole;
    console.log("đã tới đâyyyyyyyyyyyyyyyyyy");
    console.log(role + " vvvvvvvvvvvvvvvvvv");
    RoleModel.create({ role: role });
    res.redirect("back");
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
    const status = req.body.status;
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
        status: status,
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
        status: status,
      });
      res.redirect("back");
    }
  }

  async editUser(req, res, next) {
    const idUser = req.params.id;
    const {
      role,
      password,
      email,
      city,
      district,
      fullnameUser,
      gender,
      nickname,
      username,
    } = req.body;

    if (req.file) {
      if (password) {
        const pass = await bcrypt.hash(password, 10);
        await UserModel.findByIdAndUpdate(idUser, {
          avatar: req.file.filename,
          username: username,
          password: pass,
          role: role,
          email: email,
          city: city,
          district: district,
          fullname: fullnameUser,
          gender: gender,
          nickname: nickname,
        });
      } else {
        await UserModel.findByIdAndUpdate(idUser, {
          avatar: req.file.filename,
          username: username,
          role: role,
          email: email,
          city: city,
          district: district,
          fullname: fullnameUser,
          gender: gender,
          nickname: nickname,
        });
      }
    } else {
      if (password) {
        const pass = await bcrypt.hash(password, 10);
        await UserModel.findByIdAndUpdate(idUser, {
          username: username,
          password: pass,
          role: role,
          email: email,
          city: city,
          district: district,
          fullname: fullnameUser,
          gender: gender,
          nickname: nickname,
        });
      } else {
        await UserModel.findByIdAndUpdate(idUser, {
          username: username,
          role: role,
          email: email,
          city: city,
          district: district,
          fullname: fullnameUser,
          gender: gender,
          nickname: nickname,
        });
      }
    }
    res.redirect("back");
  }

  async formEditEvent(req, res, next) {
    const idEvent = req.params.id;
    const event = await EventModel.findById(idEvent);
    res.render("editEvent", {
      event: staffMongooseToObject(event),
      title: "Chỉnh sửa sự kiện",
    });
  }

  async editEvent(req, res, next) {
    const idEvent = req.params.id;
    const {
      text1,
      text2,
      text3,
      text4,
      text5,
      text6,
      text7,
      text8,
      text9,
      text10,
      title,
      category,
      status,
    } = req.body;

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

      await EventModel.findByIdAndUpdate(idEvent, {
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
        status: status,
      });
      res.redirect("back");
    } else {
      await EventModel.findByIdAndUpdate(idEvent, {
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
        status: status,
      });
      res.redirect("back");
    }
  }
}

module.exports = new CreateEventController();
