# This Repo Is Under Construction

This project is being build for my portfolio. It's a 3D full-stack website that uses different technologies like Three.js. the purpose of not using any frameworks like React and Next.js is to show my understanding and skills of using vanilla programming and scripting language.

Express, MongoDB, Joi and many other technologies are being used in this project that I'll explain them in depth in the document.

## Error Handling

I provided my own error class with the name of `AppError`. And an global error handler as a middleware which is being used to get the custom errors and throw an appropriate message to the client.

See [AppError Class](/server/helpers/appError.helper.js)

See [Global Error Handler Middleware](/server/middlewares/globalErrorHandler.middleware.js)

## Database

| Name    | Type  | Library  | Development Host | Production Host |
| ------- | ----- | -------- | ---------------- | --------------- |
| MongoDB | NOSQL | Mongoose | Local            | Mongo Atlas     |

All the documents about database is in this file

[Database documentation](./docs/database.md)

## Project API Routes

| Package Name | Description                                     |
| ------------ | ----------------------------------------------- |
| Joi          | User's input validator                          |
| Multer       | File upload package                             |
| ImageKit     | CDN package for adding/updating/removing images |

this document explains how I structured classes and functions and how each operation is handled

[Project's API documentation](./docs/projectApi.md)

## Authentication

| Package name    | Description                    |
| --------------- | ------------------------------ |
| express-session | to save user's sessions        |
| connect-mongo   | as the main storage on session |
| passport        | for authentication             |
| passport-local  | for local strategy             |

in the document below, it's explained the necessary information about how the server authenticate user.

[Authentication documentation](./docs/authentication.md)