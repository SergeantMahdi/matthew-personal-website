import "dotenv/config"
import colors from "colors";
import express from "express";
import helmet from "helmet"
import cors from "cors"
import setupAndRunDatabase from "./configs/database.config.js";
import globalErrorHandler from "./middlewares/globalErrorHandler.middleware.js";
import session from "express-session";
import sessionConfig from "./configs/session.config.js";
import passport from "passport";
import projectRouter from "./apis/v1/project.api.js"
import stackRouter from "./apis/v1/stack.api.js"
import { passportStrategy } from "./configs/authentication.config.js";

const app = express();
const port = process.env.PORT || 3000;
await setupAndRunDatabase();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sessionConfig))
app.use(passport.initialize());
app.use(passport.session());
passport.use(passportStrategy)

app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'"],
        workerSrc: ["'self'", "blob:"],
        childSrc: ["blob:"],
        imgSrc: [
            "'self'",
            "blob:",
            "data:",
            process.env.IMAGEKIT_URL_ENDPOINT,
        ]
    }
}));

const allowedOrigins = process.env.ALLOWED_ORIGINS;
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
}))

app.disable('x-powered-by')


//=========ROUTES & APIs==========
app.use("/api/v1", projectRouter);
app.use("/api/v1", stackRouter);
app.use(globalErrorHandler);

app.get("/", async (req, res) => {
    res.status(200).send("<h1>The server is live</h1>")
});
app.all(/.*/, (req, res) => {
    res.status(404).send('<h1>404! Page not found</h1>');
});

// Global Error handler for custom errors thrown by AppError

app.listen(port, (error) => {
    if (error) {
        console.error(colors.bgRed(`Status: Offline | Port: ${port} `));
        console.error(colors.red(error));
    } else {
        console.table([{ status: "Online", port: parseInt(port), link: `http://localhost:${port}` }]);
    }
});