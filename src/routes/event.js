const express = require("express")
const router = express.Router();
const eventController = require("../app/controllers/EventController")

router.get("/", eventController.event)

module.exports = router;