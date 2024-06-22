const { projectSchema, skillSchema, userSchema } = require('../controller/joi.js')
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

module.exports.validateUser = (req, res, next) => {
    const { error } = userSchema.validate(req.body);
    if (error) {
        const message = error.details.map(el => el.message).join(',');
        throw new ExpressError(message, 400);
    }
    else {
        next();
    }
}