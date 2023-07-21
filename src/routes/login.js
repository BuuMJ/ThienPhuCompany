const express = require("express");
const router = express.Router();
const loginController = require("../app/controllers/LoginController");

router.get("/resigter", loginController.resigter);
router.post("/apilogin", loginController.login);
router.get("/", loginController.index);

module.exports = router;
