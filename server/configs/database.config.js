import colors from "colors"
import mongoose from "mongoose";

const database = mongoose.connection;

database.on("connected", () => {
    console.info(colors.green("[Mongoose]: Database successfully connected "));
})

database.on("disconnected", () => {
    console.warn(colors.yellow("[Mongoose]: Database disconnected "));
})

database.on("reconnected", () => {
    console.info(colors.blue("[Mongoose]: Database reconnected "));
})

export default async function setupAndRunDatabase() {
    try {
        await mongoose.connect(process.env.DB_SERVER)
    } catch (error) {
        console.error(colors.bgRed("[Mongoose]: Initial connection failed "));
        console.error(error)
    }
}