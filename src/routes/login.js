const express = require("express");
const router = express.Router();
const loginController = require("../app/controllers/LoginController");
const { checkLogin } = require("../util/authorize");

router.get("/register", checkLogin, loginController.formRegister);
router.get("/apiRegister", checkLogin, loginController.register);
router.post("/apilogin", loginController.login);
router.get("/", loginController.index);

module.exports = router;
