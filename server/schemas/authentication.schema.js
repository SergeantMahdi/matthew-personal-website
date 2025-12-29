import joi from "joi";

const loginSchema = joi.object({
    username: joi.string().required().messages({
        "any.required": "Username is required",
    }),
    password: joi.string().required().messages({
        "any.required": "Password is required",
    }),
})

const signupSchema = joi.object({
    username: joi.string().min(3).max(30).trim().pattern(/^[a-zA-Z]*[A-Za-z0-9._]*/).messages({
        "any.required": "Username is required",
        "string.min": "Username must be at least 3 characters long",
        "string.max": "Username must be at most 30 characters long",
        "string.pattern.base":
            "Username can only contain letters, numbers, dots, and underscores, and must start with a letter",
    }),
    password: joi.string().min(10).pattern(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/).required().messages({ /* At least one Uppercase letter, One number and One non-alphanumeric character*/
        "any.required": "Password is required",
        "string.min": "Password must be at least 10 characters long",
        "string.pattern.base":
            "Password must contain at least one uppercase letter, one number, and one special character",
    }),
    email: joi.string().email().required().messages({
        "string.email": "Email must be a valid email address",
        "any.required": "Email is required",
    }),
})

export { loginSchema, signupSchema };