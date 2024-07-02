const { projectSchema, skillSchema, contactSchema } = require('../controller/joi.js')
const ExpressError = require('../utilities/expressError.js');


module.exports.validateSkill = (req, res, next) => {
    const { error } = skillSchema.validate(req.body);
    if (error) {
        const message = error.details.map(el => el.message).join(',');
        res.render('pages/error', {status: 400, message})
    }
    else {
        next();
    }
}
module.exports.validateProject = (req, res, next) => {
    const { error } = projectSchema.validate(req.body);
    if (error) {
        const message = error.details.map(el => el.message).join(',');
        res.render('pages/error', {status: 400, message})
    }
    else {
        next();
    }
}
module.exports.validateContact = (req, res, next) => {
    const { error } = contactSchema.validate(req.body)
    if (error) {
        const message = error.details.map(el => el.message).join(',');
        res.render('pages/error', {status: 400, message})
    }
    else {
        next();
    }
}


module.exports.isLoggedIn = (req, res, next) => {
    if (req.session.loggedIn){
        return next();
    }
    else {
        return res.redirect('/admin21ma8login')
    }
    next()
}

module.exports.validateAPI = (req, res, next) => {
    if (!req.session.loggedIn) {
        const message = "You are unathorized"
        res.render('pages/error', {status: 401, message})
    }
    else {
        next();
    }
}