import { AppError } from "../helpers/appError.helper.js"
import multer from "multer";

const maxFileSize = 1024 * 1024 * 2;
const allowedMimeTypes = ["image/jpeg", "image/png", "image/webp", "image/jpg"]
const storage = multer.memoryStorage();

const multerUpload = multer({
    storage: storage,
    limits: {
        fileSize: maxFileSize,
    },
    fileFilter: (req, file, cd) => {
        if (!allowedMimeTypes.includes(file.mimetype)) {
            return cd(new AppError("Invalid file format", 400, "INVALID_FILE_FORMAT"), false);
        }
        cd(null, true);
    }
}).single("uploadedImage");

export default multerUpload;