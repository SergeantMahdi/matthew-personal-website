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
> I'm going to use local host for development, but eventually I will use Mongo Atlas

## Models
I created two models, one for projects and the other for stacks. I could integrate them together but I may use the stacks for skill section so I decided to separate them to avoid duplication.

### Project Model

| Property     | Validation                                                  | Required |
| ------------ | ----------------------------------------------------------- | -------- |
| title        | Text is limited to 60 characters                            | true     |
| description  | Text is limited to 200 characters                           | true     |
| locationType | Enum contains three fields `Remote`, `On-Site` and `Hybrid` | true     |
| image        | This will be managed by server                              | true     |
| liveUrl      | Link must have https protocol and be valid                  | false    |
| githubUrl    | Link must have https protocol and be valid                  | false    |
| createdAt    | It has current date default value                           | false    |

### Stack Model
| Property | Validation        | Required |
| -------- | ----------------- | -------- |
| name     | It must be unique | true     |