import { AppError } from "../helpers/appError.helper.js";
import logger from "../helpers/logger.helper.js";
import StackRepository from "../repositories/stack.repository.js"

class StackService {
    async createIfNotExists(name) {
        try {
            const stackExists = await StackRepository.findOneByName(name);
            if (!stackExists) {
                const stack = await StackRepository.create(name);
                return { statusCode: 200, message: "Stack created successfully", stack };
            }
            return { statusCode: 200, message: "Stack already exists", stack: stackExists }
        }
        catch (error) {
            logger.error(error, "createIfNotExists", "service/ stackService.js");
            throw new AppError("Failed to create stacks", 500, "STACK_CREATION_FAILED", error)
        }
    }

    async find(name) {
        try {
            const foundStack = await StackRepository.findOneByName(name);

            if (!foundStack) {
                throw new AppError("Stack not Found", 404, "STACK_NOT_FOUND", error);
            }

            return { statusCode: 200, message: "Stack found successfully", foundStack };

        } catch (error) {
            logger.error(error, "find", "service/ stackService.js");
            if (error instanceof AppError) {
                throw error;
            }
            throw new AppError("Failed to fetch the stack", 500, "STACK_FETCH_FAILED", error);
        }

    }

    async remove(name) {
        try {
            const removedStack = StackRepository.findOneByNameAndDelete(name);

            if (!removedStack) {
                throw new AppError("Stack not Found", 404, "STACK_NOT_FOUND", error);
            }

            return { statusCode: 200, message: "Stack removed successfully", removedStack };
        }
        catch (error) {
            logger.error(error, "remove", "service/ stackService.js");
            if (error instanceof AppError) {
                throw error;
            }
            throw new AppError("Failed to remove the stack", 500, "STACK_REMOVAL_FAILED", error);

        }
    }
}

export default new StackService();