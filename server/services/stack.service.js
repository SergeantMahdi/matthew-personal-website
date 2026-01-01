import { AppError } from "../helpers/appError.helper.js";
import logger from "../helpers/logger.helper.js";
import StackRepository from "../repositories/stack.repository.js"

class StackService {
    async createIfNotExists(name) {
        try {
            const stack = await StackRepository.findOneByName(name);
            if (!stack) {
                const stack = await StackRepository.create(name);
                return stack;
            }
            return stack;
        }
        catch (error) {
            logger.error(error, "createIfNotExists", "service/ stackService.js");
            throw new AppError("Failed to create stacks", 500, "STACK_CREATION_FAILED", error);
        }
    }

    async createStack(name) {
        try {
            const stack = await StackRepository.findOneByName(name);
            if (!stack) {
                const stack = await StackRepository.create(name);
                return stack;
            }
            throw new AppError("Stack already exists", 200, "STACK_EXISTS")
        }
        catch (error) {
            logger.error(error, "createStack", "service/ stackService.js");
            if (error instanceof AppError) {
                throw error;
            }
            throw new AppError("Failed to create stacks", 500, "STACK_CREATION_FAILED", error);
        }
    }

    async getAllSacks() {
        try {
            const stacks = await StackRepository.findAll();
            return stacks;
        } catch (error) {
            logger.error(error, "getAllSacks", "service/ stackService.js");
            throw new AppError("Failed to get the stacks", 500, "STACK_FETCH_FAILED", error);
        }
    }

    async findStackById(id) {
        try {
            const foundStack = await StackRepository.findById(id);
            if (!foundStack) {
                throw new AppError("Stack not Found", 404, "STACK_NOT_FOUND");
            }
            return foundStack;
        } catch (error) {
            logger.error(error, "findStackById", "service/ stackService.js");
            if (error instanceof AppError) {
                throw error;
            }
            throw new AppError("Failed to fetch the stack", 500, "STACK_FETCH_FAILED", error);
        }
    }

    async updateStackById(id, name) {
        try {
            const updatedStack = await StackRepository.findByIdAndUpdate(id, name);
            if (!updatedStack) {
                throw new AppError("Stack not found", 404, "STACK_NOT_FOUND");
            }
            return updatedStack;

        } catch (error) {
            logger.error(error, "updateStackById", "service/ stackService.js");
            if (error instanceof AppError) {
                throw error;
            }
            throw new AppError("Failed update the stack", 500, "STACK_UPDATE_FAILED", error);
        }
    }

    async deleteStackById(id) {
        try {
            const removedStack = await StackRepository.findByIdAndDelete(id);
            if (!removedStack) {
                throw new AppError("Stack not Found", 404, "STACK_NOT_FOUND", error);
            }
            return removedStack;
        }
        catch (error) {
            logger.error(error, "deleteStackById", "service/ stackService.js");
            if (error instanceof AppError) {
                throw error;
            }
            throw new AppError("Failed to remove the stack", 500, "STACK_REMOVAL_FAILED", error);
        }
    }
}

export default new StackService();