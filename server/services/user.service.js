import userRepository from "../repositories/user.repository.js";
import { AppError } from "../helpers/appError.helper.js";
import logger from "../helpers/logger.helper.js";
import bcrypt from "bcrypt";

class UserService {

    async createUser({ username, email, password, role = "User" }) {
        try {
            const userFoundByUsername = await userRepository.findByUsername(username);
            const userFoundByEmail = await userRepository.findByEmail(email);

            if (userFoundByUsername) {
                throw new AppError("Failed to sign up, username already exists", 400, "USER_EXIST");
            }
            if (userFoundByEmail) {
                throw new AppError("Failed to sign up, email already exists", 400, "EMAIL_EXIST");
            }

            const hashedPassword = await bcrypt.hash(password, 12);
            const newUser = await userRepository.create({ username, email, password: hashedPassword, role });
            return newUser;

        } catch (error) {
            logger.error(error, "UserService.createUser", "services/ user.service.js");
            if (error instanceof AppError) {
                throw error;
            }
            throw new AppError("Failed to sign up, please try again later", 500, "SIGNUP_FAILURE");
        }
    }

    async getUserByUsername(username) {
        try {
            const foundUser = await userRepository.findByUsername(username);
            if (!foundUser) {
                throw new AppError("User not found", 404, "USER_NOT_FOUND");
            }
            return foundUser;

        } catch (error) {
            logger.error(error, "UserService.getUserByUsername", "services/ user.service.js");
            if (error instanceof AppError) {
                throw error;
            }
            throw new AppError("Failed to to find the user, please try again later", 500, "USER_SEARCH_FAILURE");
        }
    }

    async getUserById(id) {
        try {
            const foundUser = await userRepository.findById(id);
            if (!foundUser) {
                throw new AppError("User not found", 404, "USER_NOT_FOUND");
            }
            return foundUser;

        } catch (error) {
            logger.error(error, "UserService.getUserByUsername", "services/ user.service.js");
            if (error instanceof AppError) {
                throw error;
            }
            throw new AppError("Failed to to find the user, please try again later", 500, "USER_SEARCH_FAILURE");
        }
    }

    async getUserByEmail(email) {
        try {
            const foundUser = await userRepository.findByEmail(email);
            if (!foundUser) {
                throw new AppError("User not found", 404, "USER_NOT_FOUND");
            }
            return foundUser;

        } catch (error) {
            logger.error(error, "UserService.getUserByEmail", "services/ user.service.js");
            if (error instanceof AppError) {
                throw error;
            }
            throw new AppError("Failed to to find the user, please try again later", 500, "USER_SEARCH_FAILURE");
        }
    }

}

export default new UserService();