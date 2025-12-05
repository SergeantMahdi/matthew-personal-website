export class AppError extends Error {
    constructor(message, statusCode = 500, errorCode = "SERVER_ERROR") {

        super(message);

        this.statusCode = statusCode;
        this.errorCode = errorCode;
        this.time = new Date().toISOString();
        Error.captureStackTrace(this, this.constructor);
    }
}