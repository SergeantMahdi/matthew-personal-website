import colors from "colors";
import dotenv from "dotenv";
import express from "express";

if (process.env.NODE_ENV === "development") {
    dotenv.config();
}

const app = express();
const port = process.env.PORT || 3000;

app.get("/", async (req, res) => {
    res.send("<h1>Hello World</h1>")
});

app.listen(port, (error) => {
    if (error) {
        console.error(colors.bgRed(`Status: Offline | Port: ${port} `));
        console.error(colors.red(error));
    } else {
        console.table([{ status: "Online", port: port, link: "http://localhost:3000" }]);
    }
});