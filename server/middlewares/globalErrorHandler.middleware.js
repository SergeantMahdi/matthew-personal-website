import { AppError } from "../helpers/appError.helper.js";
import logger from "../helpers/logger.helper.js";

export default function globalErrorHandler(error, req, res, next) {

    if (error instanceof AppError) {
        return res.status(error?.statusCode || 500).json({ message: error?.message || "Something went wrong", errorCode: error.errorCode || "UNKNOWN" });
    }

    if (process.env.NODE_ENV === "development") {
        logger.error(error, "UNEXPECTED ERROR");
    }

    res.status(500).json({ message: "Something went wrong", errorCode: "UNEXPECTED_ERROR" });
}