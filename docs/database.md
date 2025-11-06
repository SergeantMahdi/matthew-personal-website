# Database

I used MongoDB and mongoose library in this project for better scalability

## Configuration

This configuration has three main events to show whether database is connected.

```JS
database.on("connected", () => {
    console.info(colors.green("[Mongoose]: Database successfully connected "));
})

database.on("disconnected", () => {
    console.warn(colors.yellow("[Mongoose]: Database disconnected "));
})

database.on("reconnected", () => {
    console.info(colors.blue("[Mongoose]: Database reconnected "));
})

```
The connection operation is wrapped into an `async function` for cleaner code

```JS
export default async function setupAndRunDatabase() {
    try {
        await mongoose.connect(process.env.DB_SERVER)
    } catch (error) {
        console.error(colors.bgRed("[Mongoose]: Initial connection failed "));
        console.error(error)
    }
}

```

> [!NOTE]
> It's going to use local server for development. But for production I will use Mongo Atlas