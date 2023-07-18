const express = require("express")
const router = express.Router();
const aboutController = require("../app/controllers/AboutConntroller")

router.get("/", aboutController.about)

module.exports = router