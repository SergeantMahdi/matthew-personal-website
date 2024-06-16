const projectDB = require("../models/projectSchema.js");

module.exports.createProject = async function (req, res) {
    const newProject = new projectDB({
        name: req.body.projectName.toLowerCase(),
        description: req.body.projectDescription.toLowerCase(),
        image: req.body.projectImage,
        link: req.body.projectLink
    })
    await newProject.save();
    res.redirect('/projects');
}

module.exports.editProject = async function (req, res) {
    const { projectId, editName, editDescription, editImage, editLink } = req.body;
    const project = await projectDB.findByIdAndUpdate(projectId, {
        name: editName,
        description: editDescription,
        image: editImage,
        link: editLink
    })
    await project.save();
    res.redirect('/projects');
}