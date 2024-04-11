const express = require("express");
const router = express.Router();
const createEventController = require("../app/controllers/CreateEventController");
const { upload } = require("../util/data");
const loginController = require("../app/controllers/LoginController");
const { checkLogin, checkAdmin } = require("../util/authorize");

router.post(
  "/create_event",
  upload.fields([
    { name: "image1" },
    { name: "image2" },
    { name: "image3" },
    { name: "image4" },
    { name: "image5" },
    { name: "image6" },
    { name: "image7" },
    { name: "image8" },
    { name: "image9" },
    { name: "image10" },
  ]),
  createEventController.create
);
router.post(
  "/editUser/:id",
  checkAdmin,
  upload.single("avatar"),
  createEventController.editUser
);
router.get("/editEvent/:id", checkAdmin, createEventController.formEditEvent);
router.post(
  "/apiEditEvent/:id",
  checkAdmin,
  upload.fields([
    { name: "image1" },
    { name: "image2" },
    { name: "image3" },
    { name: "image4" },
    { name: "image5" },
    { name: "image6" },
    { name: "image7" },
    { name: "image8" },
    { name: "image9" },
    { name: "image10" },
  ]),
  createEventController.editEvent
);
router.post("/role", checkAdmin, createEventController.addRole);
router.get("/register", checkLogin, loginController.formRegister);
router.post("/deleteEvent/:id", checkAdmin, createEventController.deleteEvent);
router.post(
  "/apiRegister",
  upload.single("avatar"),
  checkLogin,
  loginController.register
);
router.get("/", createEventController.formCreate);

module.exports = router;
