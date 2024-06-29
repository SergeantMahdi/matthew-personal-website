const projectDB = require("../models/projectSchema.js");
const skillDB = require("../models/skillSchema.js");

module.exports.homePageFetch = async function (req, res) {
    try {
        const data = await projectDB.find({}).sort({createdAt: -1}).limit(6);
        res.json(data);
    } catch (err) {
        res.status(500).send("Error fetching projects");
    }
}

module.exports.projectPageFetch =  async function (req, res) {
    try {
        const data = await projectDB.find({}).sort({createdAt: -1});
        res.json(data);
    } catch (err) {
        res.status(500).send("Error fetching projects");
    }
}
module.exports.skillCardFetch =  async function (req, res) {
    try {
        const data = await skillDB.find({});
        res.json(data);
    } catch (err) {
        res.status(500).send("Error fetching projects");
    }
}