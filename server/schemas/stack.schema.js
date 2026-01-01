import joi from "joi";

const stackSchema = joi.object({
    name: joi.string().uppercase().required()
})

export default stackSchema;