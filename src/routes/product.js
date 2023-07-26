const express = require("express");
const router = express.Router();
const productController = require("../app/controllers/ProductController");

router.get("/pcb40", productController.pcb40);
router.get("/dadung", productController.dadung);
router.get("/pcb40ms", productController.pcb40ms);
router.get("/longthanhpcb40", productController.longthanhpcb40);
router.get("/scg", productController.scg);
router.get("/", productController.list);

module.exports = router;
