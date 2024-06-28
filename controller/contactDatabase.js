const {contactDB} = require("../models/contactSchema.js");
module.exports.createContact = async (req,res) => {
    const newContact = new contactDB({
        fullName: req.body.fullName,
        email: req.body.email,
        message: req.body.message
    })
    await newContact.save();

    res.redirect('/')
}