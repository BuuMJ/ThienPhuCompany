const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user");

class LoginController {
  formRegister(req, res, next) {
    res.render("register", {
      title: "Đăng ký",
    });
  }

  async register(req, res, next) {
    // const username = "ctythienphu@ymail.com";
    // const password = "108lehongphong";
    const { username, password, role, email, city, district, fullnameUser } =
      req.body;

    if (req.file) {
      const avatar = fs.promises.readFile(req.file.path);
      console.log(avatar + "  aaaaaaaaaaaaaaaaaaassssssssssss");
      bcrypt.hash(password, 10, function (err, hash) {
        UserModel.create({
          avatar: avatar,
          username: username,
          password: hash,
          role: role,
          email: email,
          city: city,
          district: district,
          fullname: fullnameUser,
        });
      });
      await UserModel.save();
      return;
    } else {
      bcrypt.hash(password, 10, function (err, hash) {
        UserModel.create({
          username: username,
          password: hash,
          role: role,
          email: email,
          city: city,
          district: district,
          fullname: fullnameUser,
        });
      });
      await UserModel.save();
      return;
    }
  }

  index(req, res, next) {
    res.render("login");
  }

  login(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
    console.log(req.body.username + "daaaaaaaaaaaaaaaaaaaaaaaaaaấ");
    UserModel.findOne({
      username: username,
    }).then((data) => {
      if (data) {
        var token = jwt.sign(
          {
            _id: data._id,
          },
          "PW"
        );
        bcrypt.compare(password, data.password, function (err, result) {
          if (err) {
            console.log("không thể tìm thấy mật khẩu");
            return res.render("login", {
              msg: "The user or password is incorrect.",
            });
          }
          if (result) {
            res.cookie("token", token, {
              expires: new Date(Date.now() + 18000000000),
            });
            return res.redirect("/admin");
          } else {
            console.log("không thể tìm thấy mật khẩu");

            return res.render("login", {
              msg: "The user or password is incorrect.",
            });
          }
        });
      } else {
        console.log("không thể tìm thấy tài khoản");
        return res.render("login", {
          msg: "The user or password is incorrect.",
        });
      }
    });
  }
}

module.exports = new LoginController();
