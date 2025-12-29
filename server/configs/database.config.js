import logger from "../helpers/logger.helper.js"
import mongoose from "mongoose";

const database = mongoose.connection;

database.on("connected", () => {
    logger.info("Database successfully connected", "Mongoose", "database.config.js");
})

database.on("disconnected", () => {
    logger.warn("Database disconnected", "Mongoose", "database.config.js");
})

database.on("reconnected", () => {
    logger.info("Database reconnected", "Mongoose", "database.config.js");
})

export default async function setupAndRunDatabase() {
    try {
        await mongoose.connect(process.env.DB_SERVER)
    } catch (error) {
        logger.error("Initial connection failed", "Mongoose", "database.config.js");
        console.error(error);
    }
}