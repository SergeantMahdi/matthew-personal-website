import joi from "joi";

export default projectSchema = joi.object({
    title:
        joi.string()
            .max(60)
            .required()
            .messages({
                "string.max": "Title must be less than 60 characters",
                "any.required": "Please, enter the title",
            }),
    description:
        joi.string()
            .max(200)
            .required()
            .messages({
                "string.max": "Description must be less than 200 characters",
                "any.required": "Please, enter the description",
            }),
    locationType:
        joi.string()
            .valid("Remote", "On-site", "Hybrid")
            .required()
            .messages({
                "any.only": "Location type must be one of 'Remote', 'On-site' or 'Hybrid'",
                "any.required": "Please, enter the description",
            }),
    stacks:
        joi.array()
            .items(joi.string().uppercase())
            .min(1)
            .required()
            .messages({
                "array.min": "Please, enter at least one stack",
                "any.required": "At least one stack is required"
            }),
    liveUrl:
        joi.string()
            .uri({ scheme: ["https"] })
            .optional()
            .messages({
                "string.uri": "URL must be a https link"
            }),
    githubUrl:
        joi.string()
            .uri({ scheme: ["https"] })
            .optional()
            .messages({
                "string.uri": "URL must be a https link"
            })
})