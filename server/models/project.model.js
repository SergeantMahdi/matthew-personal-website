import mongoose from "mongoose";

const { Schema } = mongoose;

const ImageSchema = new Schema({
    filename: { type: String, required: true },
    url: { type: String, required: true }
})

const ProjectModel = new Schema({
    title: {
        type: String,
        maxLength: [60, "Title must be under 60 characters"],
        required: [true, "Please enter the title"]
    },
    description: {
        type: String,
        maxLength: [200, "Description must be under 200 characters"],
        required: [true, "Please enter the description"]
    },
    locationType: {
        type: String,
        enum: ["Remote", "On-site", "Hybrid"],
        required: [true, "Please enter the location type of the project"]
    },
    image: ImageSchema,
    stacks: [{
        type: Schema.Types.ObjectId,
        ref: "Stack"
    }],
    liveUrl: {
        type: String,
        match: [/^https:\/\/.+\..+/, "Invalid link (Protocol must be https and the link must be valid)"],

    },
    githubUrl: {
        type: String,
        match: [/^https:\/\/.+\..+/, "Invalid link (Protocol must be https and the link must be valid)"],
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

export default mongoose.model("Project", ProjectModel)