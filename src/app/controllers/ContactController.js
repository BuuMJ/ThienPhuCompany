const nodemailer = require("nodemailer");

class ContactController {
  contact(req, res, next) {
    res.render("contact", {
      title: "Liên Hệ",
    });
  }

  apicontact(req, res, next) {
    const name = req.body.fullname;
    const mail = req.body.email;
    const phone = req.body.phone;
    const address = req.body.address;
    const content = req.body.content;
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "nxt03091999@gmail.com",
        pass: "jepjoiucxskugono",
      },
    });
    const mailOptions = {
      from: `<${mail}>`,
      to: "nxt03091999@gmail.com", // list of receivers
      subject: "Có một yêu cầu liên hệ với khác hàng mới", // Subject line
      html: `
      <p>Thông tin khách hàng cần liên hệ như sau:</p>
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

module.exports = new ContactController();
