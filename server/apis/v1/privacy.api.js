import express from "express"
import catchAsync from "../../helpers/catchAsync.helper.js";
import { isAuthenticated } from "../../middlewares/authentication.middleware.js";
import { validateNewPasswordCredential, validateNewUsernameCredential } from "../../middlewares/validator.middleware.js";
import { updatePassword, updateUsername } from "../../controllers/v1/privacy.controller.js";
const router = express.Router();

router.put("/password-change", isAuthenticated, validateNewPasswordCredential, catchAsync(updatePassword))
router.put("/username-change", isAuthenticated, validateNewUsernameCredential, catchAsync(updateUsername))


export default router;