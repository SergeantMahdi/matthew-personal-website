import { AppError } from "../helpers/appError.helper.js";

export default function globalErrorHandler(error, req, res, next) {

    if (error instanceof AppError) {
        return res.status(error?.statusCode || 500).json({ message: error?.message || "Something went wrong", errorCode: error.errorCode || "UNKNOWN" });
    }
    res.status(500).json({ message: "Something went wrong", errorCode: "UNEXPECTED_ERROR" });
}