import joi from "joi";

const usernameUpdateSchema = joi.object({
    username: joi.string().required().messages({
        "any.required": "Username is required",
    }),
    password: joi.string().required().messages({
        "any.required": "Password is required",
    }),
})

const passwordUpdateSchema = joi.object({
    username: joi.string().required().messages({
        "any.required": "Username is required",
    }),
    newPassword: joi.string().min(10).pattern(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/).required().messages({
        "any.required": "The new password is required",
        "string.min": "Password must be at least 10 characters long",
        "string.pattern.base":
            "Password must contain at least one uppercase letter, one number, and one special character",
    }),
    currentPassword: joi.string().required().messages({
        "any.required": "Your current password is required",
    }),
})

export { usernameUpdateSchema, passwordUpdateSchema }