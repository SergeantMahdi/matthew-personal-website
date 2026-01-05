import { Strategy } from "passport-local";
import { AppError } from "../helpers/appError.helper.js";
import logger from "../helpers/logger.helper.js";
import userService from "../services/user.service.js";
import bcrypt from "bcrypt";
import passport from "passport";

export const passportStrategy = new Strategy({ usernameField: "username" }, async (username, password, done) => {
    try {
        const user = await userService.getUserByUsername(username);
        if (!user) {
            throw new AppError("Invalid username or password", 400, "INVALID_CREDENTIALS");
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            throw new AppError("Invalid username or password", 400, "INVALID_CREDENTIALS");
        }
        done(null, user);

    } catch (error) {
        logger.error(error, "passportStrategy", "configs/ authentication.config.js");
        done(error, null)
    }
})

//Storing user information in a session
//*If you wanna change user's info in req.user, here is the place to do it
passport.serializeUser((user, done) => {
    done(null, { id: user._id, updatedAt: user.updatedAt })
});
passport.deserializeUser(async (sessionUser, done) => {
    try {
        const user = await userService.getUserById(sessionUser.id);

        if (!user) {
            return done(null, false)
        }

        if (sessionUser.updatedAt && user.updatedAt.toISOString() !== sessionUser.updatedAt) {
            done(null, false)
        }

        done(null, { id: user._id, username: user.username, email: user.email, updatedAt: user.updatedAt, role: user.role });
    } catch (error) {
        logger.error(error, "deserializeUser", "configs/ authentication.config.js");
        done(error, null);
    }
})