const userDB = require('./models/userSchema.js')
const bcrypt = require('bcrypt');
const dotenv = require("dotenv").config();

module.exports.createUser = async function (req, res) {
    const hash = await bcrypt.hash(process.env.ADMIN_PASSWORD, 12)
    const user = new userDB({ username: process.env.ADMIN_USERNAME.toLowerCase(), password: hash, email:process.env.ADMIN_EMAIL })
    const result = await user.save()
    if (result) {
        return res.render("pages/error", {status: 1 , message: "User created successfully"})
    }
    else {
        return  res.render("pages/error", {status: 0 , message: "User did NOT created"})
    }
};