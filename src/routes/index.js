const homeRouter = require("./home");
const aboutRouter = require("./about");
const productRouter = require("./product");
const eventRouter = require("./event");
const contactRouter = require("./contact");
const awardRouter = require("./award");
const createEventRouter = require("./createEvent");
const loginRouter = require("./login");

function route(app) {
  app.use("/about", aboutRouter);
  app.use("/login", loginRouter);
  app.use("/create", createEventRouter);
  app.use("/award", awardRouter);
  app.use("/event", eventRouter);
  app.use("/contact", contactRouter);
  app.use("/product", productRouter);
  app.use("/", homeRouter);
}

module.exports = route;
