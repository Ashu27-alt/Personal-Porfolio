import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    techStack: [String],
    links: [String]
})

export const Project = mongoose.model("Project", projectSchema)