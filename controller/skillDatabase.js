const skillDB = require("../models/skillSchema.js");

module.exports.createSkill = async function(req, res) {
    const newSkill = new skillDB({
        name: req.body.name.toLowerCase(),
        description: req.body.description.toLowerCase(),
        percentage: req.body.percentage
    })
    await newSkill.save();
    res.redirect('/admin');
}
module.exports.editSkill = async function(req, res) {
    const { _Id, name, description , percentage} = req.body;
    const skill = await skillDB.findByIdAndUpdate(_Id, {
        name: name,
        description: description,
        percentage: percentage
    })
    await skill.save();
    res.redirect('/admin');
}
module.exports.deleteSkill = async function(req, res) {
    const { _Id, name, description , percentage} = req.body;
    const skill = await skillDB.findByIdAndDelete(_Id)
    res.redirect('/admin');
}