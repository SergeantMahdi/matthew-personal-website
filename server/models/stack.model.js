import mongoose from "mongoose";

const { Schema } = mongoose;

const StackSchema = new Schema({
    name: {
        type: String,
        uppercase: true,
        unique: [true, "This stack already exists"],
        required: [true, "Please Enter the name of the stack"],
    }
})

export default mongoose.model("Stack", StackSchema);
