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

    
router.all('*', function (req, res) {
    res.render('pages/error', {status: "404", message: "There is no such a directory in this universe"});
});

module.exports = router;