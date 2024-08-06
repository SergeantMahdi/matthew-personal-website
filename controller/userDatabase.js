const userDB = require('../models/userSchema.js')
const bcrypt = require('bcrypt');
const dotenv = require('dotenv').config();
module.exports.checkUser = async function (req, res) {
    const { username, password } = req.body;
    const user = await userDB.findOne({ username: username.toLowerCase() })
    const result = await bcrypt.compare(password, user.password)
    if (result) {
        req.session.user_id = user._id;
        req.session.loggedIn = true;
        res.redirect('/admin21ma8')
    }
    else {
        return res.redirect('/login21ma8')
    }
};

module.exports.createUser = async function (req, res) {
    const userExist = await userDB.findOne({username:process.env.ADMIN_USERNAME})
    if(!userExist){
    const hash = await bcrypt.hash(process.env.ADMIN_PASSWORD, 12)
    const user = new userDB({ username: process.env.ADMIN_USERNAME.toLowerCase(), password: hash, email:process.env.ADMIN_EMAIL })
    const result = await user.save()
}
else{
    return ;
}
};