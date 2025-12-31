import express from "express"
import catchAsync from "../../helpers/catchAsync.helper.js";
import { getStacks, createNewStack, updateStack, deleteStack } from "../../controllers/v1/stack.controller.js";
import { isAuthenticated } from "../../middlewares/authentication.middleware.js";
import { validateStackInput } from "../../middlewares/validator.middleware.js";

const router = express.Router();

router.route("/stacks")
    .get(catchAsync(getStacks))
    .post(isAuthenticated, validateStackInput, catchAsync(createNewStack));

router.route("/stacks/:id")
    .put(isAuthenticated, validateStackInput, catchAsync(updateStack))
    .delete(isAuthenticated, catchAsync(deleteStack));

export default router;