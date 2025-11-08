import multer from "multer";

const maxFileSize = 1024 * 1024 * 2;
const allowedMimeTypes = ["image/jpeg", "image/png", "image/webp"]
const storage = multer.memoryStorage();

const multerUpload = multer({
    storage: storage,
    limits: {
        fileSize: maxFileSize,
    },
    fileFilter: (req, file, cd) => {
        if (!allowedMimeTypes.includes(file.mimetype)) {
            return cd(new Error("Invalid format", false));
        }
        cd(null, true);
    }
}).single("uploadedImage");

export default multerUpload;