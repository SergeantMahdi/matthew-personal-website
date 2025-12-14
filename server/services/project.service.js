import logger from "../helpers/logger.helper.js";
import { AppError } from "../helpers/appError.helper.js";
import ProjectRepo from "../repositories/project.repository.js";
import projectRepository from "../repositories/project.repository.js";

class ProjectService {

    async createProject(data) {
        try {
            const createdProject = await ProjectRepo.create(data);
            return { statusCode: 201, message: "Project created successfully" };
        }
        catch (error) {
            logger.error(error, "createProject", "services/ project.service.js");
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

            const projects = await ProjectRepo.find(Math.abs(limit), Math.abs(skip), filters);

            return { statusCode: 200, message: "success", projects };
        }
        catch (error) {
            logger.error(error, "getProjects", "services/ project.service.js");
            throw new AppError("Failed to fetch projects, try again later", 500, "PROJECT_FETCH_FAILED");

        }
    }

    async getProjectById(id) {
        try {
            const project = await projectRepository.findById(id);

            if (!project) {
                throw new AppError("Project not found", 404, "PROJECT_NOT_FOUND");
            }
            return { statusCode: 200, message: "Project found", project };

        } catch (error) {
            logger.error(error, "getProjectById", "services/ project.service.js");
            throw new AppError("Failed to fetch the project", 500, "PROJECT_FETCH_FAILED");
        }
    }

    async updateProjectById(id, data) {
        try {
            const updatedProject = await ProjectRepo.findAndUpdateById(id, data);

            if (!updatedProject) {
                throw new AppError("Project not found", 404, "PROJECT_NOT_FOUND");
            }

            return { statusCode: 200, message: "Project updated successfully", updatedProject };
        }
        catch (error) {
            logger.error(error.message, "updateProjectById", "services/ project.service.js");
            throw new AppError("Failed to update the project", 500, "PROJECT_FETCH_FAILED");
        }

    }

    async deleteProjectById(id = "") {
        try {
            const deletedProject = await ProjectRepo.findAndDeleteById(id);

            if (!deletedProject) {
                throw new AppError("Project not found", 404, "PROJECT_NOT_FOUND");
            }

            return { statusCode: 200, message: "Project removed successfully", deletedProject };
        }
        catch (error) {
            logger.error(error.message, "deleteProjectById", "services/ project.service.js");
            throw new AppError("Failed to delete the project", 500, "PROJECT_DELETION_FAILED");
        }

    }
}

export default new ProjectService();