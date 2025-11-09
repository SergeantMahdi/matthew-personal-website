import colors from "colors";
import dotenv from "dotenv";
import express from "express";
import setupAndRunDatabase from "./configs/database.config.js";

dotenv.config();


const app = express();
const port = process.env.PORT || 3000;

await setupAndRunDatabase();

app.get("/", async (req, res) => {
    res.send("<h1>Hello World</h1>")
});

app.listen(port, (error) => {
    if (error) {
        console.error(colors.bgRed(`Status: Offline | Port: ${port} `));
        console.error(colors.red(error));
    } else {
        console.table([{ status: "Online", port: parseInt(port), link: `http://localhost:${port}` }]);
    }
});