import multer from "multer";
import multerUpload from "../configs/multer.config.js";
import FileValidator from "../helpers/fileValidator.helper.js";

export default async function uploadSingleFile(req, res, next) {
    multerUpload(req, res, (error) => {

        if (!req.file) {
            res.status(400).json({ message: "Please upload an image" })
        }

        if (error instanceof multer.MulterError) {
            let errorMessage = "Failed to upload the file";
            let statusCode = 500;
            if (error.code === "LIMIT_FILE_SIZE") {
                errorMessage = "File size must be under 2MB";
                statusCode = 413;
            }
            return res.status(statusCode).json({ message: errorMessage });
        }

        if (error) {
            if (error.message === "Invalid format") {
                return res.status(415).json({ message: "File format is not valid" });
            }
            return res.status(500).json({ message: error.message });
        }

        if (!FileValidator.isFileSignatureValid(req.file)) {
            return res.status(415).json({ message: "File format is not valid" });
        }

        next();
    })
}