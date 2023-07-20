class EventController {
    event(req, res, next){
        res.render("event")
    }
}

module.exports = new EventController();