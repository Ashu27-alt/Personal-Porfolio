import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    name: String,
    email: String,
    education: [Object],
    experience: [String],
    socialLinks: [String]
})

export const Profile = mongoose.model("Profile", profileSchema)