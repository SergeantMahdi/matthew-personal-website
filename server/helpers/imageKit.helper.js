import logger from "./logger.helper.js";
import { AppError } from "./appError.helper.js";
import imageKit from "../configs/imagekit.config.js"

class ImageKitService {

    async uploadImage(image = {}) {
        try {
            const uploadResult = await imageKit.upload({
                file: image.buffer,
                fileName: image.originalname,
                folder: "/matthew-website"
            })

            if (!uploadResult?.fileId || !uploadResult?.url) {
                return null;
            }

            return { filename: uploadResult?.fileId, url: uploadResult?.url };
        }
        catch (error) {
            logger.error(error, "uploadImage", "helpers/ imageKit.helper.js");
            throw new AppError("Failed to upload the image", 500, "UPLOAD_FAILED", error);
        }
    }

    async deleteImage(filename = "") {
        try {

            const removedFile = await imageKit.deleteFile(filename);

            if (removedFile?.message) {
                console.log(removedFile?.message);
                return null
            }

            return true;
        }
        catch (error) {
            logger.critical(error.message, "deleteImage", "helpers/ imageKit.helper.js");
            return null;
        }
    }
}

export default new ImageKitService();