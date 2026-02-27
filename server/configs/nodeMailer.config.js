import nodeMailer from "nodemailer";

let host, port, user, pass, secure = false;

if (process.env.NODE_ENV === "development") {
    host = process.env.MAILER_DEV_HOST;
    port = process.env.MAILER_DEV_PORT;
    user = process.env.MAILER_DEV_USER;
    pass = process.env.MAILER_DEV_PASSWORD;
} else {
    host = process.env.MAILER_HOST;
    port = process.env.MAILER_PORT;
    user = process.env.MAILER_USER;
    pass = process.env.MAILER_PASSWORD;
    secure = true;
}

const transporter = nodeMailer.createTransport({
    host,
    port,
    secure,
    auth: {
        user,
        pass
    }
})

export default transporter;