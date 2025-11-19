import projectSchema from "../schemas/project.schema.js";

export function validateProjectInput(req, res, next) {
    const { error } = projectSchema.validate(req.body);

    if (error) {
        res.status(400).json({ message: error.message });
    }
    next();
};
