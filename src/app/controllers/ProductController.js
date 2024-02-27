class ProductController {
  list(req, res, next) {
    res.render("product", {
      title: "Sản Phẩm",
    });
  }

  pcb40(req, res, next) {
    res.render("pcb40", {
      title: "Xi măng hà Tiên pcb40",
    });
  }

  dadung(req, res, next) {
    res.render("dadung", {
      title: "Xi măng Hà Tiên Đa dụng PCB40",
    });
  }

  pcb40ms(req, res, next) {
    res.render("pcb40ms", {
      title: "Xi măng Vicem Hà Tiên BỀN SULFAT PCB40-MS",
    });
  }

  scg(req, res, next) {
    res.render("scg", {
      title: "SCG super xi măng",
    });
  }

  longthanhpcb40(req, res, next) {
    res.render("longthanhpcb40", {
      title: " Xi măng Long Thành PCB40",
    });
  }

  powercement(req, res, next) {
    res.render("powercement", {
      title: " Power Cement",
    });
  }
}

module.exports = new ProductController();
