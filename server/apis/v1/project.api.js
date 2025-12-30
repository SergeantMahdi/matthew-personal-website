import express from "express"
const router = express.Router();
import catchAsync from "../../helpers/catchAsync.helper.js";

import { validateProjectInput } from "../../middlewares/validator.middleware.js"
import uploadSingleFile from "../../middlewares/uploadFile.middleware.js"
import { createNewProject, getProjects, updateProject, deleteProject } from "../../controllers/v1/project.controller.js";
import { isAuthenticated } from "../../middlewares/authentication.middleware.js";

router.route("/projects")
    .get(catchAsync(getProjects))
    .post(isAuthenticated, uploadSingleFile, validateProjectInput, catchAsync(createNewProject))

router.route("/projects/:id")
    .put(isAuthenticated, uploadSingleFile, validateProjectInput, catchAsync(updateProject))
    .delete(isAuthenticated, catchAsync(deleteProject))


export default router;