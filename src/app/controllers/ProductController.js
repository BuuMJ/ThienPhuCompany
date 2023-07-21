class ProductController {
  list(req, res, next) {
    res.render("product");
  }
}

module.exports = new ProductController();
