const express = require("express");
const router = express.Router();
const SitemapController = require("../app/controllers/sitemapController");

router.get("/", SitemapController.sitemap);

module.exports = router;
