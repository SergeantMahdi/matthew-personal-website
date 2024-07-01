const express = require('express');
const router = express.Router();

const { validateProject } = require('../middleware/schemaValidate.js');
const { createProject, editProject, deleteProject } = require("../controller/projectDatabase.js");


router.route("/projects")
.get(function (req, res) {res.render('pages/project', { title: "My Projects" })})
.post(validateProject, createProject)
.put(validateProject, editProject)
.delete(deleteProject);

module.exports = router;