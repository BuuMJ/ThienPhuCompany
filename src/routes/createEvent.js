const express = require("express");
const router = express.Router();
const createEventController = require("../app/controllers/CreateEventController");
const { upload } = require("../util/data");

router.post(
  "/create_event",
  upload.fields([{ name: "image1" }, { name: "image2" }]),
  createEventController.create
);
router.get("/", createEventController.formCreate);

module.exports = router;
