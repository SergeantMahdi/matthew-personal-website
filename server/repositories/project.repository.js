import ProjectModel from "../models/project.model.js";

class ProjectRepository {

    async create(data) {

        const project = new ProjectModel({ ...data });
        const result = await project.save();
        return result;
    }

    async find(limit = 10, skip = 0, filter = {}) {

        const projects = await ProjectModel.find(filter, { __v: 0 })
            .limit(limit)
            .skip(skip)
            .populate({ path: "stacks", select: "name -_id" })
            .sort({ createdAt: -1 });

        return projects;
    }

    async findById(id) {
        const project = await ProjectModel.findById(id);
        return project;
    }

    async findAndUpdateById(id, data) {

        const project = await ProjectModel.findByIdAndUpdate(id, { ...data }, { new: true, runValidators: true });
        return project
    }

    async findAndDeleteById(id) {

        const deletedProject = await ProjectModel.findByIdAndDelete(id);
        return deletedProject;
    }

    async documentsCount(filter = {}) {
        return await ProjectModel.countDocuments(filter);
    }

}

export default new ProjectRepository();