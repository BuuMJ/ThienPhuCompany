class AwardController {
    award(req, res, next){
        res.render("award")
    }
}

module.exports = new AwardController();