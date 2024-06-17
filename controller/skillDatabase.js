const skillDB = require("../models/skillSchema.js");

module.exports.createSkill = async function(req, res) {
    const newSkill = new skillDB({
        name: req.body.name.toLowerCase(),
        description: req.body.description.toLowerCase(),
        percentage: req.body.percentage
    })
    await newSkill.save();
    res.redirect('/about');
}