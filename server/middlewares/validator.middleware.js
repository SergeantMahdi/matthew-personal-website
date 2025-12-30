import projectSchema from "../schemas/project.schema.js";
import { loginSchema, signupSchema } from "../schemas/authentication.schema.js";
import { passwordUpdateSchema, usernameUpdateSchema } from "../schemas/credentialUpdate.schema.js";

export function validateProjectInput(req, res, next) {
    const { error } = projectSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ message: error.message });
    }
    next();
};

export function validateLoginInput(req, res, next) {
    const { error } = loginSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.message });
    }
    next();
}

export function validateSignupInput(req, res, next) {
    const { error } = signupSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.message });
    }
    next();
}

export function validateNewPasswordCredential(req, res, next) {
    const { error } = passwordUpdateSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.message });
    }
    next();
}

export function validateNewUsernameCredential(req, res, next) {
    const { error } = usernameUpdateSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.message });
    }
    next();
}