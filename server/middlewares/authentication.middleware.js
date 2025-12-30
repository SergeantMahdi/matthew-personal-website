import { AppError } from "../helpers/appError.helper.js";

export function isAuthenticated(req, res, next) {

    if (!req.isAuthenticated()) {
        return res.redirect("/login");
    }
    next();
}