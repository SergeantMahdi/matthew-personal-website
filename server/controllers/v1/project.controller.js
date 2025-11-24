import projectService from "../../services/project.service.js";
import stackService from "../../services/stack.service.js";

export async function getProjects(req, res) {
    const { skip, limit } = req.query;

    const { statusCode, projects, message } = await projectService.getProjects(parseInt(limit), parseInt(skip));
    res.status(statusCode).json({ projects, message });
}


export async function createNewProject(req, res) {

    const image = await projectService.uploadProjectImage(req.file);

    if (!image || !image?.filename) {
        return res.status(500).json({ message: "Failed to upload the image" });
    }

    const { stacks } = req.body;

    let createdStacks = [];
    if (!Array.isArray(req.body.stacks)) {
        const result = await stackService.createIfNotExists(stacks)
        createdStacks.push(result.stack._id);
    } else {
        const newStacks = await Promise.all(stacks.map(async (stack) => {
            const result = await stackService.createIfNotExists(stack);
            return result.stack._id;
        }))
        createdStacks = newStacks;
    }

    const { statusCode, message } = await projectService.createProject({ ...req.body, stacks: createdStacks, image })
    res.status(statusCode).json({ message })
}