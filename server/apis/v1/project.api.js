import express from "express"
const router = express.Router();
import catchAsync from "../../helpers/catchAsync.helper.js";

import { validateProjectInput } from "../../middlewares/validator.middleware.js"
import uploadSingleFile from "../../middlewares/uploadFile.middleware.js"
import { createNewProject, getProjects, updateProject, deleteProject } from "../../controllers/v1/project.controller.js";

router.route("/projects")
    .get(catchAsync(getProjects))
    .post(uploadSingleFile, validateProjectInput, catchAsync(createNewProject))

router.route("/projects/:id")
    .put(uploadSingleFile, validateProjectInput, catchAsync(updateProject))
    .delete(catchAsync(deleteProject))


export default router;