import projectService from "../../services/project.service.js";
import ImageKitHelper from "../../helpers/imageKit.helper.js"
import stackService from "../../services/stack.service.js";
import { AppError } from "../../helpers/appError.helper.js";


export async function getProjects(req, res) {
    const { skip, limit } = req.query;

    const { statusCode, projects, message } = await projectService.getProjects(limit, skip);
    res.status(statusCode).json({ projects, message });
}


export async function createNewProject(req, res) {

    const image = await ImageKitHelper.uploadImage(req.file);

    if (!image || !image?.filename) {
        throw new AppError("Failed to upload the image", 500, "IMAGE_UPLOAD_FAILED");
    }

    const { stacks } = req.body;

    let createdStacks = [];
    if (!Array.isArray(stacks)) {
        throw new AppError("Stacks should be an array", 400, "BAD_INPUT");
    } else {
        const newStacks = await Promise.all(stacks.map(async (stack) => {
            const result = await stackService.createIfNotExists(stack);
            return result.stack._id;
        }))

        //Removing duplicates by converting them from array to set and vice versa.
        createdStacks = [...new Set(newStacks.map(id => id.toString()))];
    }

    const { statusCode, message } = await projectService.createProject({ ...req.body, stacks: createdStacks, image })
    res.status(statusCode).json({ message })
}


export async function updateProject(req, res) {

    const { id } = req.params;

    const { project } = await projectService.getProjectById(id);

    if (!project) {
        throw new AppError("Project not found", 404, "PROJECT_NOT_FOUND")
    }

    let newImage;
    if (req.file) {

        newImage = await ImageKitHelper.uploadImage(req.file);

        if (newImage) {
            const isImageRemoved = await ImageKitHelper.deleteImage(project.image?.filename);

            if (!isImageRemoved) {
                await ImageKitHelper.deleteImage(newImage?.filename);
                newImage = null;
                throw new AppError("Failed to change the image", 500, "IMAGE_DELETION_FAILED");
            }
        }
    }

    const { stacks } = req.body;
    let uniqueStacks = [];
    if (!Array.isArray(stacks)) {
        throw new AppError("Stacks should be an array", 400, "BAD_INPUT");
    } else {
        const newStacks = await Promise.all(stacks.map(async (stack) => {
            const result = await stackService.createIfNotExists(stack);
            return result.stack._id;
        }))

        //Removing duplicates by converting them from array to set and vice versa.
        uniqueStacks = [...new Set(newStacks.map(id => id.toString()))];
    }

    const image = newImage ? newImage : project.image;
    const { statusCode, message, updatedProject } = await projectService.updateProjectById(id, { ...req.body, stacks: uniqueStacks, image });


    res.status(statusCode).json({ message, updatedProject });
}


export async function deleteProject(req, res) {
    const { id } = req.params;

    const { project } = await projectService.getProjectById(id);

    if (!project) {
        throw new AppError("Project not found", 404, "PROJECT_NOT_FOUND");
    }

    const isImageRemoved = await ImageKitHelper.deleteImage(project.image?.filename);

    if (!isImageRemoved) {
        throw new AppError("Failed to delete the image", 500, "IMAGE_DELETION_FAILED");
    }

    const { statusCode, message } = await projectService.deleteProjectById(id);
    res.status(statusCode).json({ message });
}