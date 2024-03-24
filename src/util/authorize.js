const jwt = require("jsonwebtoken");
// const { company } = require("../app/controllers/CompanyController");
const UserModel = require("../app/models/user");
//check login
function checkLogin(req, res, next) {
  //check
  try {
    var token = req.cookies.token;
    var idUser = jwt.verify(token, "PW");
    UserModel.findOne({
      _id: idUser,
    }).then((data) => {
      if (data) {
        req.user = data;
        // console.log(req.user);
        return next();
      } else {
        res.render("login", {
          title: "Login",
          msg: "Please login.",
        });
      }
    });
  } catch (err) {
    return res.render("login", {
      title: "Login",
      msg: "Please login.",
    });
  }
}

function checkAdmin(req, res, next) {
  if (req.user) {
    var role = req.user.role;
    if (role != "Giám Đốc" && role != "Quản Lý") {
      next();
    } else {
      return res.redirect("/admin?messenge=You are not authorized.");
    }
  } else {
    return next();
  }
}

module.exports = { checkLogin, checkAdmin };
