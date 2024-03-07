const express = require("express");
const router = express.Router();
const loginController = require("../app/controllers/LoginController");
const { checkLogin } = require("../util/authorize");

router.post("/apilogin", loginController.login);
router.get("/", loginController.index);

module.exports = router;
