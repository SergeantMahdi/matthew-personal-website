const express = require('express');
const router = express.Router();

const { validateContact } = require('../middleware/schemaValidate.js');
const { createContact } = require("../controller/contactDatabase.js");

router.get('/', function (req, res) {
    res.render('pages/home', { title: "Mahdi Sartipzadeh" });
});

router.route("/contact")
    .get(function (req, res) { res.render('pages/contact', { title: "Contact Me" }); })
    .post(validateContact, createContact)

module.exports = router;