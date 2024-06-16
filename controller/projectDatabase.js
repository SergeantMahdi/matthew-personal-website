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