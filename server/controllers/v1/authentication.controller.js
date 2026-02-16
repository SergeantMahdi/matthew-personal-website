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