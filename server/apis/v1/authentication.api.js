import express from "express"
import catchAsync from "../../helpers/catchAsync.helper.js";
import passport from "passport"
import { isAuthenticated } from "../../middlewares/authentication.middleware.js";
import { validateLoginInput, validateEmail } from "../../middlewares/validator.middleware.js";
import { login, logout, forgetPassword } from "../../controllers/v1/authentication.controller.js";
const router = express.Router();

router.post("/login", validateLoginInput, passport.authenticate('local', { failureRedirect: "/login" }), catchAsync(login));
router.post("/logout", isAuthenticated, catchAsync(logout));
router.post("/forget-password", validateEmail, catchAsync(forgetPassword))

export default router;