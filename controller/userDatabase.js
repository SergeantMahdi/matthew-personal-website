const userDB = require('../models/userSchema.js')
const bcrypt = require('bcrypt');

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
        return res.redirect('/admin21ma8login')
    }
};
