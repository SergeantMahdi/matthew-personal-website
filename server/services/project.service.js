import colors from "colors";
import ProjectRepo from "../repositories/project.repository.js";
import imageKit from "../configs/imagekit.config.js"

class ProjectService {

    async uploadProjectImage(image) {
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
            console.error(colors.bgYellow("[Project Service][uploadProjectImage]: Failed to upload the image"));
            console.error(error.message);
            return null;
        }
    }

    async createProject(data) {
        try {
            const createdProject = await ProjectRepo.create(data);
            return { statusCode: 201, message: "Project created successfully" };
        }
        catch (error) {
            console.error(colors.bgYellow("[Project Service][createProject]: Cannot create the project"));
            console.error(error.message);
            return { statusCode: 500, message: "Failed to create the project, try again later" };
        }
    }

}

export default new ProjectService();