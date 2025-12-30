import projectService from "../../services/project.service.js";

export async function getProjects(req, res) {
    const { skip, limit } = req.query;
    const projects = await projectService.getProjects(limit, skip);
    res.status(200).json({ projects });
}


export async function createNewProject(req, res) {
    const createdProject = await projectService.createProject(req.body, req.file)
    res.status(200).json({ message: "Project created successfully" })
}


export async function updateProject(req, res) {
    const { id } = req.params;
    const updatedProject = await projectService.updateProjectById(id, req.body, req.file);
    res.status(200).json({ message: "Project updated successfully", updatedProject });
}


export async function deleteProject(req, res) {
    const { id } = req.params;
    const deletedProject = await projectService.deleteProjectById(id);
    res.status(200).json({ message: "Project removed successfully" });
}