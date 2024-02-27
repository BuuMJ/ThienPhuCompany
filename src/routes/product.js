const express = require("express");
const router = express.Router();
const productController = require("../app/controllers/ProductController");

router.get("/xi-mang-ha-tien-pcb40", productController.pcb40);
router.get("/xi-mang-ha-tien-da-dung-pcb40", productController.dadung);
router.get(
  "/xi-mang-vicem-ha-tien-ben-sulfat-pcb40-ms",
  productController.pcb40ms
);
router.get("/xi-mang-long-thanh-pcb40", productController.longthanhpcb40);
router.get("/scg-super-xi-mang", productController.scg);
router.get("/power-cement", productController.powercement);
router.get("/", productController.list);

module.exports = router;
