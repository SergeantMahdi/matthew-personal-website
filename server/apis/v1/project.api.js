import express from "express"
const router = express.Router();

import { validateProjectInput } from "../../middlewares/validator.middleware.js"
import uploadSingleFile from "../../middlewares/uploadFile.middleware.js"
import { createNewProject } from "../../controllers/v1/project.controller.js";

router.route("/projects")
    .post(uploadSingleFile, validateProjectInput, createNewProject)


export default router;