const express = require("express");
const router = express.Router();
const eventController = require("../app/controllers/EventController");

router.get("/:id", eventController.detail);
router.get("/", eventController.event);

module.exports = router;
