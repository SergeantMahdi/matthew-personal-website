import userService from "../../services/user.service.js";
export async function updatePassword(req, res) {
    const updatedUser = await userService.updatePassword(req.user.id, req.body.newPassword, req.body.currentPassword);
    res.redirect("/login")
}

export async function updateUsername(req, res) {
    const updatedUser = await userService.updateUsername(req.user.id, req.body.newUsername, req.body.password);
    res.redirect("/login")
}