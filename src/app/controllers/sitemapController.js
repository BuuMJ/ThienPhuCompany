const path = require("path");

class SitemapController {
  sitemap(req, res) {
    res.sendFile(path.join(__dirname, "..", "..", "public", "sitemap.xml"));
  }
}

module.exports = new SitemapController();
