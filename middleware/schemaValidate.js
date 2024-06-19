const { projectSchema, skillSchema } = require('../controller/joi.js')
const skillsDB = require('../models/skillSchema.js');
const projectsDB = require('../models/projectSchema.js');
const ExpressError = require('../utilities/expressError.js');


module.exports.validateSkill = (req, res, next) => {
    const { error } = skillSchema.validate(req.body);
    if (error) {
        const message = error.details.map(el => el.message).join(',');
        throw new ExpressError(message, 400);
    }
    else {
        next();
    }
}
module.exports.validateProject = (req, res, next) => {
    const { error } = projectSchema.validate(req.body);
    if (error) {
        const message = error.details.map(el => el.message).join(',');
        throw new ExpressError(message, 400);
    }
    else {
        next();
    }
}