# Database

MongoDB with features like scalability and ease of use makes it a perfect choice for this simple project.

## Configuration

This configuration has three main events to show whether database is connected.

```JS
database.on("connected",...)

database.on("disconnected", ...)

database.on("reconnected", ...)

```
As the whole operation wrapped inside a function `setupAndRunDatabase` for better abstraction, this function is called inside `server.js`.

> [!NOTE]
> In development, I will use local server `mongodb://localhost:27017` but for production I'll use Mongo Atlas.

## Models
There is only three database models designed for this project. One for `projects` and one for `users` which is used for authentication and the last one is for `stacks`. `projects` and `stacks` could be integrated together but `stacks` can also be used for skill section where I eventually show my skills.

### Project Model

| Property     | Validation                                              | Required |
| ------------ | ------------------------------------------------------- | -------- |
| title        | Text limit: `60  characters`                            | true     |
| description  | Text limit: `200 characters`                            | true     |
| locationType | Enum: `Remote`, `On-Site` and `Hybrid`                  | true     |
| image        | Max-size: `2MB`, allowed formats: `JPEG`, `PNG`, `WEBP` | true     |
| Stacks       | Must be an array `Object IDs` from `stacks`             | true     |
| liveUrl      | Link must starts with `https`                           | false    |
| githubUrl    | Link must starts with `https`                           | false    |
| createdAt    | Date will be created automatically                      | false    |

### Stack Model
| Property | Validation     | Required |
| -------- | -------------- | -------- |
| name     | Must be unique | true     |

### User Model

| Property               | Validation                                       | Required |
| ---------------------- | ------------------------------------------------ | -------- |
| username               | Must be `unique`, converts letters to lowercase  | true     |
| password               | Minimum length: `10 characters`                  | true     |
| email                  | Must be `unique`,  converts letters to lowercase | true     |
| passwordResetToken     |                                                  | false    |
| role                   | Enum: `User`, `Admin`, default: `User`           | true     |
| createdAt (timestamps) |                                                  | true     |
| updatedAt (timestamps) |                                                  | true     |