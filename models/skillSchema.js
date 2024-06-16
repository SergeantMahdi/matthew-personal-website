const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const skillSchema = new Schema({
    name: String,
    description: String,
    percentage: Number
}) 


module.exports = mongoose.model("Skill", skillSchema)