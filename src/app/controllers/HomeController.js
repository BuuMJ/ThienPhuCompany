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
        user: "nxt03091999@gmail.com",
        pass: "jepjoiucxskugono",
      },
    });
    const mailOptions = {
      from: `"${name}" <${mail}>`,
      to: "nxt03091999@gmail.com", // list of receivers
      subject: "Có một đăng kí nhận thông tin sản phẩm mới", // Subject line
      html: `
      <p>Khách hàng đã đăng ký nhận tư vấn thông tin sản phẩm với thông tin như sau:</p>
      <ol>
        <li>Số điện thoại liên hệ: ${phone}</li>
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
