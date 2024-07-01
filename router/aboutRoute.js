const express = require('express');
const router = express.Router();

const { createSkill, editSkill, deleteSkill } = require("../controller/skillDatabase.js");
const {validateSkill} = require('../middleware/schemaValidate.js');

router.route("/about")
    .get(function (req, res) { res.render('pages/about', { title: "About Me" });})
    .post(validateSkill, createSkill)
    .put(validateSkill, editSkill)
    .delete( deleteSkill);

module.exports = router;