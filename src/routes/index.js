const homeRouter = require("./home")
const aboutRouter = require("./about")

function route(app){
    app.use('/about', aboutRouter)
    app.use('/', homeRouter)
}

module.exports = route;