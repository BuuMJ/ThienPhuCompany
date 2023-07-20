const express = require("express")
const router = express.Router()
const awardController = require("../app/controllers/AwardController")

router.get("/", awardController.award)

module.exports = router;