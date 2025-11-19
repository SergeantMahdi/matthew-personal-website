import "dotenv/config"
import colors from "colors";
import express from "express";
import helmet from "helmet"
import setupAndRunDatabase from "./configs/database.config.js";


const app = express();
const port = process.env.PORT || 3000;
await setupAndRunDatabase();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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

app.disable('x-powered-by')

import projectRouter from "./apis/v1/project.api.js"

app.use("/", projectRouter)

app.get("/", async (req, res) => {
    res.status(200).send("<h1>The server is live</h1>")
});

app.listen(port, (error) => {
    if (error) {
        console.error(colors.bgRed(`Status: Offline | Port: ${port} `));
        console.error(colors.red(error));
    } else {
        console.table([{ status: "Online", port: parseInt(port), link: `http://localhost:${port}` }]);
    }
});