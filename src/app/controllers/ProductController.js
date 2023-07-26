class ProductController {
  list(req, res, next) {
    res.render("product");
  }

  pcb40(req, res, next) {
    res.render("pcb40");
  }

  dadung(req, res, next) {
    res.render("dadung");
  }

  pcb40ms(req, res, next) {
    res.render("pcb40ms");
  }

  scg(req, res, next) {
    res.render("scg");
  }

  longthanhpcb40(req, res, next) {
    res.render("longthanhpcb40");
  }
}

module.exports = new ProductController();
