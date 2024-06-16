const skillDB = require("../models/skillSchema.js");

module.exports.createSkill = async function(req, res) {
    const newSkill = new skillDB({
        name: req.body.skillName.toLowerCase(),
        description: req.body.skillDescription.toLowerCase(),
        percentage: req.body.skillPercentage
    })
    await newSkill.save();
    res.redirect('/about');
}