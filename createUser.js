const userDB = require('./models/userSchema.js')
const bcrypt = require('bcrypt');

module.exports.createUser = async function (req, res) {
    const hash = await bcrypt.hash("21ma8di79mh", 12)
    const user = new userDB({ username: "sergeant_mahdi".toLowerCase(), password: hash, email:"mahdi.sartipzadeh@gmail.com" })
    const result = await user.save()
    if (result) {
        return res.render("pages/error", {status: 1 , message: "User created successfully"})
    }
    else {
        return  res.render("pages/error", {status: 0 , message: "User did NOT created"})
    }
};