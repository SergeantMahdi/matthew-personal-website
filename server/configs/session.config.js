import MongoStore, { createKrupteinAdapter } from "connect-mongo";
export default {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.DB_SERVER,
        collectionName: "logins",
        cryptoAdapter: createKrupteinAdapter({ secret: process.env.SESSION_STORE_SECRET }),
        ttl: 7 * 24 * 60 * 60 // Expires in 7 days

    }),
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax"
    }
}