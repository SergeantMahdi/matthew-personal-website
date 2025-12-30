import logger from "../helpers/logger.helper.js";
import { AppError } from "../helpers/appError.helper.js";
import projectRepository from "../repositories/project.repository.js";
import stackService from "../services/stack.service.js";
import ImageKitHelper from "../helpers/imageKit.helper.js"

class ProjectService {

    async processStacks(stacks) {
        if (!Array.isArray(stacks)) {
            throw new AppError("Stacks should be an array", 400, "BAD_INPUT");
        }
        const stackIds = await Promise.all(stacks.map(async (stack) => {
            const newStack = await stackService.createIfNotExists(stack);
            return newStack._id;
        }))
        //Removing duplicates by converting them from array to set and vice versa.
        const uniqueStacks = [...new Set(stackIds.map(id => id.toString()))];
        return uniqueStacks;
    }

    async createProject(data, file) {
        try {
            const image = await ImageKitHelper.uploadImage(file);
            if (!image || !image?.filename) {
                throw new AppError("Failed to upload the image", 500, "IMAGE_UPLOAD_FAILED");
            }

            const stacks = await this.processStacks(data.stacks)
            const createdProject = await projectRepository.create({ ...data, stacks, image });
            return createdProject;
        }
        catch (error) {
            logger.error(error, "createProject", "services/ project.service.js");
            if (error instanceof AppError) {
                throw error;
            }
            throw new AppError("Failed to create the project", 500, "PROJECT_CREATION_FAILED");
        }
    }

    async getProjects(limit, skip, filters = {}) {
        try {
            if (isNaN(skip) || isNaN(limit)) {
                throw new AppError("Invalid query parameters", 400, "INVALID_QUERY");
            }
            if (limit > 50) {
                limit = 50
            }
            const projects = await projectRepository.find(Math.abs(limit), Math.abs(skip), filters);

            return projects;
        }
        catch (error) {
            logger.error(error, "getProjects", "services/ project.service.js");
            if (error instanceof AppError) {
                throw error;
            }
            throw new AppError("Failed to fetch projects, try again later", 500, "PROJECT_FETCH_FAILED");

        }
    }

    async getProjectById(id) {
        try {
            const project = await projectRepository.findById(id);
            if (!project) {
                throw new AppError("Project not found", 404, "PROJECT_NOT_FOUND");
            }

            return project;

        } catch (error) {
            logger.error(error, "getProjectById", "services/ project.service.js");
            if (error instanceof AppError) {
                throw error;
            }
            throw new AppError("Failed to fetch the project", 500, "PROJECT_FETCH_FAILED");
        }
    }

    async updateProjectById(id, updatedPayload, file = null) {
        try {
            const existingProject = await projectRepository.findById(id);
            if (!existingProject) {
                throw new AppError("Project not found", 404, "PROJECT_NOT_FOUND");
            }

            let newImage = null;
            if (file) {
                newImage = await ImageKitHelper.uploadImage(file);
                if (!newImage) {
                    throw new AppError("Failed to upload the image", 500, "IMAGE_UPLOAD_FAILURE")
                }

                const isImageRemoved = await ImageKitHelper.deleteImage(existingProject.image?.filename);
                if (!isImageRemoved) {
                    logger.error(`Failed to remove Image: \n[NAME]: ${deletedProject.image.filename}`, "updateProjectById", "services/ project.service.js")
                }
            }
            const finalImage = newImage ? newImage : existingProject.image;

            const stacks = await this.processStacks(updatedPayload.stacks)

            const updatedProject = await projectRepository.findAndUpdateById(id, { ...updatedPayload, stacks, image: finalImage });
            return updatedProject;
        }
        catch (error) {
            logger.error(error.message, "updateProjectById", "services/ project.service.js");
            if (error instanceof AppError) {
                throw error;
            }
            throw new AppError("Failed to update the project", 500, "PROJECT_FETCH_FAILED");
        }

    }

    async deleteProjectById(id = "") {
        try {
            const deletedProject = await projectRepository.findAndDeleteById(id);

            if (!deletedProject) {
                throw new AppError("Project not found", 404, "PROJECT_NOT_FOUND");
            }

            const isImageRemoved = await ImageKitHelper.deleteImage(deletedProject.image?.filename);
            if (!isImageRemoved) {
                logger.error(`Failed to remove Image: \n[NAME]: ${deletedProject.image.filename}`, "deleteProjectById", "services/ project.service.js")
            }

            return deletedProject;
        }
        catch (error) {
            logger.error(error.message, "deleteProjectById", "services/ project.service.js");
            if (error instanceof AppError) {
                throw error;
            }
            throw new AppError("Failed to delete the project", 500, "PROJECT_DELETION_FAILED");
        }

    }
}

export default new ProjectService();