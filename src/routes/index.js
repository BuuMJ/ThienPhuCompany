const homeRouter = require("./home")
const aboutRouter = require("./about")
const productRouter = require("./product")
const eventRouter = require("./event")
const contactRouter = require("./contact")
const awardRouter = require("./award")

function route(app){
    app.use('/about', aboutRouter)
    app.use('/award', awardRouter)
    app.use('/event', eventRouter)
    app.use('/contact', contactRouter)
    app.use("/product", productRouter)
    app.use('/', homeRouter)
}

module.exports = route;