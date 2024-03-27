const EventModel = require("../models/event");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");

const {
  mutipleMongooseToObject,
  mongooseToObject,
  staffMongooseToObject,
} = require("../../util/mongoose");

class HomeController {
  async home(req, res, next) {
    const event = await EventModel.find().sort({ createdAt: -1 }).limit(3);
    const password = "123";
    bcrypt.hash(password, 10, function (err, hash) {
      console.log(hash + " aaaaaaaa");
    });
    res.render("home", {
      title: "Trang Chủ",
      event: mutipleMongooseToObject(event),
    });
  }

  //[POST] feedback
  feedback(req, res, next) {
    const name = req.body.fullname;
    const mail = req.body.email;
    const phone = req.body.phone;
    const address = req.body.address;
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "duoc6694@gmail.com",
        pass: "wdymtvgbhblstfbj",
      },
    });
    const mailOptions = {
      from: `"${name}" <${mail}>`,
      to: "duoc6694@gmail.com", // list of receivers
      subject: "Có một đăng kí nhận thông tin sản phẩm mới", // Subject line
      html: `
      <p>Khách hàng đã đăng ký nhận tư vấn thông tin sản phẩm với thông tin như sau:</p>
      <ol>
        <li>Tên khách hàng: ${name}</li>
        <li>Email: ${mail}</li>
        <li>Số điện thoại liên hệ: ${phone}</li>
        <li>Địa chỉ liên hệ: ${address}</li>
      </ol>
    `,
    };
    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
        res.redirect("back");
      }
    });
  }
}

module.exports = new HomeController();
