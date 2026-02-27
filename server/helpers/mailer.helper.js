import transporter from "../configs/nodeMailer.config.js";
import { AppError } from "./appError.helper.js";
import logger from "./logger.helper.js";

async function sendTokenEmailTo(email, token) {
    try {
        await transporter.sendMail({
            from: process.env.MAILER_DOMAIN,
            to: email,
            subject: "RESET PASSWORD",
            text: `Token: ${process.env.SERVER_DOMAIN}/reset-password/${token}`,
        })
    } catch (error) {
        logger.error(error, "sendEmailTo", "helper/ mailer.helper.js");
        throw new AppError("Failed to send email, please try again later", 500, "SENDING_EMAIL_FAILED");
    }
}

export default sendTokenEmailTo;