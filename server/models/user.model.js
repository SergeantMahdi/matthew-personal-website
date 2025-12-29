import mongoose from "mongoose";
const { Schema } = mongoose;

const User = new Schema({
    username: {
        type: String,
        unique: [true, "Username must be unique"],
        lowercase: true,
        required: [true, "Username is required"],
    },
    password: {
        type: String,
        minLength: 10,
        required: [true, "Password is required"],
    },
    email: {
        type: String,
        unique: [true, "Email must be unique"],
        lowercase: true,
        required: [true, "Email is required"],
    },
    passwordResetToken: {
        type: String,
        default: null,
    },
    role: {
        type: String,
        enum: ["Admin", "User"],
        default: "User",
        require: true,
    },
}, { timestamps: true })

export default mongoose.model("User", User);