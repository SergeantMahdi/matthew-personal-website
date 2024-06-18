const projectDB = require("../models/projectSchema.js");

module.exports.createProject = async function (req, res) {
    const newProject = new projectDB({
        name: req.body.name.toLowerCase(),
        description: req.body.description.toLowerCase(),
        image: req.body.image,
        link: req.body.link
    })
    await newProject.save();
    res.redirect('/admin');
}

module.exports.editProject = async function (req, res) {
    const { _Id, name, description , image, link } = req.body;
    const project = await projectDB.findByIdAndUpdate(_Id, {
        name: name,
        description: description,
        image: image,
        link: link
    })
    await project.save();
    res.redirect('/admin');
}
module.exports.deleteProject = async function (req, res) {
    const { _Id, name, description , image, link } = req.body;
    const project = await projectDB.findByIdAndDelete(_Id)
    res.redirect('/admin');
}