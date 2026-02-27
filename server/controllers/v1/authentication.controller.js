import userService from "../../services/user.service.js";

export async function login(req, res) {
    res.redirect("/admin/dashboard");
}

export async function logout(req, res, next) {
    req.logout((error) => {
        if (error) {
            return next(error);
        }
        req.session.destroy((error) => {
            if (error) {
                return next(error);
            }
        })
    })
    res.clearCookie('connect.sid');
    res.redirect("/login");
}

export async function forgetPassword(req, res) {
    const { email } = req.body;
    userService.generatePasswordResetToken(email);
    res.status(200).json({ message: "Please check your email" })
}