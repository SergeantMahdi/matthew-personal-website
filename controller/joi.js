const BaseJoi = require('joi');
const sanitizeHTML = require('sanitize-html');

const HTMLextension = (joi) => ({
    type: 'string',
    base: joi.string(),
    messages: {
        'string.escapeHTML': '{{#label}} must not include HTML!',
    },
    rules: {
        escapeHTML: {
            validate(value, helpers) {
                const clean = sanitizeHTML(value, {
                    allowedTags: [],
                    allowedAttributes: [],
                });
                if (clean !== value) return helpers.error('string.escapeHTML', { value })
                return clean;
            }
        }
    }
})

const Joi = BaseJoi.extend(HTMLextension);


module.exports.projectSchema = Joi.object({
    _Id:Joi.string(),
    name: Joi.string().required().escapeHTML(),
    description: Joi.string().required().escapeHTML(),
    image: Joi.string().required(),
    link: Joi.string().required().escapeHTML()
});

module.exports.skillSchema = Joi.object({
    _Id: Joi.string(),
    name: Joi.string().required().escapeHTML(),
    description: Joi.string().required().escapeHTML(),
    percentage: Joi.number().required().min(0),
})

module.exports.contactSchema = Joi.object({
    fullName: Joi.string().required().escapeHTML(),
    email: Joi.string().required().escapeHTML(),
    message: Joi.string().required().escapeHTML(),
})