const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../middleware/schemaValidate.js');
const { checkUser, createUser } = require("../controller/userDatabase.js");

router.route("/login21ma8")
    .get(function (req, res) {
        createUser();
        if (!req.session.loggedIn) {
            res.render('pages/login', { title: "Login" });
        }
        else {
            res.redirect('/admin21ma8')
        }
    })
    .post(checkUser);

const { contactDB } = require("../models/contactSchema.js");

router.get('/admin21ma8', isLoggedIn, async function (req, res) {
    const contactData = await contactDB.find({}).sort({ created_at: -1 });
    res.render('pages/admin', { title: "Admin", contactData })
});

module.exports = router;