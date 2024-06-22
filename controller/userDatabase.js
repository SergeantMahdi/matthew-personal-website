const userDB = require('../models/userSchema.js')

module.exports.checkUser = async function (req, res) {
    const { username, password } = req.body;
    const user = await userDB.findOne({ username: username })
    if (user.password === password && user.username === username) {
        res.redirect('/admin21ma8')
    }
        res.redirect('/admin21ma8login')
}