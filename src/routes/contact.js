const express = require("express");
const router = express.Router();
const contactController = require("../app/controllers/ContactController");

router.post("/api", contactController.apicontact);
router.get("/", contactController.contact);

module.exports = router;
