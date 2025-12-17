import multer from "multer";
import multerUpload from "../configs/multer.config.js";
import FileValidator from "../helpers/fileValidator.helper.js";
import { AppError } from "../helpers/appError.helper.js";
import logger from "../helpers/logger.helper.js";

export default async function uploadSingleFile(req, res, next) {
    multerUpload(req, res, (error) => {

        if (!req.file) {
            return next();
        }

        if (error instanceof multer.MulterError) {
            let errorMessage = "Failed to upload the file";
            let statusCode = 500;
            let errorCode = "MULTER_UPLOAD_FAILURE";
            if (error.code === "LIMIT_FILE_SIZE") {
                errorMessage = "File size must be under 2MB";
                statusCode = 413;
                errorCode = "LIMIT_FILE_SIZE"
            }
            throw new AppError(errorMessage, statusCode, errorCode)
        }

        if (error) {
            if (error.message === "Invalid format") {
                throw new AppError("File format is not valid", 415, "INVALID_FORMAT")
            }
            logger.error(error.message, "uploadSingleFile", "middlewares/uploadFile.middleware.js")
            throw new AppError("Something went wrong", 500, "MULTER_FAILURE");

        }

        if (!FileValidator.isFileSignatureValid(req.file)) {
            throw new AppError("File format is not valid", 415, "INVALID_FORMAT");
        }

        next();
    })
}