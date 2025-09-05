import { Profile } from "../Models/profile.Model.js";

const createProfile = async (req,res)=>{
    const {name,email,education,experience,socialLinks} = req.body
    try {
        console.log(education)
       const newProfile = await Profile.create({name,email,education,experience,socialLinks});
       res.status(201).json({status:"ok",data:newProfile})
    } catch (error) {
        res.status(500).json({status:"error",error:error.message})
    }
}

const addExperince = async (req,res)=>{
    const {newExperience} = req.body
    try {
        const profile = await Profile.findOne({})
        profile.experience.push(newExperience)
        await profile.save({validateBeforeSave:false})
        res.status(201).json({status:"Experience added successfully",data:profile})
    } catch (error) {
        res.status(500).json({status:"error",error:error.message})
    }
}
const addSocial = async (req,res)=>{
    const {newsocial} = req.body
    try {
        const profile = await Profile.findOne({})
        profile.socialLinks.push(newsocial)
        await profile.save({validateBeforeSave:false})
        res.status(201).json({status:"new Social added successfully",data:profile})
    } catch (error) {
        res.status(500).json({status:"error",error:error.message})
    }
}

const addEducation = async (req, res) => {
  const { degree, field, year, college } = req.body
  try {
    const profile = await Profile.findOne({})
    profile.education.push({ degree, field, year, college })
    await profile.save({ validateBeforeSave: false })

    res.status(201).json({ status: "Education added successfully", data: profile })
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message })
  }
}

const updateExperience = async (req, res) => {
  const { index, updatedExperience } = req.body
  try {
    const profile = await Profile.findOne({})
    profile.experience[index] = updatedExperience
    await profile.save({ validateBeforeSave: false })
    res.status(200).json({ status: "Experience updated successfully", data: profile })
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message })
  }
}

const deleteExperience = async (req, res) => {
  const { index } = req.body
  try {
    const profile = await Profile.findOne({})
    profile.experience.splice(index, 1)
    await profile.save({ validateBeforeSave: false })
    res.status(200).json({ status: "Experience deleted successfully", data: profile })
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message })
  }
}

const updateSocial = async (req, res) => {
  const { index, updatedLink } = req.body
  try {
    const profile = await Profile.findOne({})
    profile.socialLinks[index] = updatedLink
    await profile.save({ validateBeforeSave: false })
    res.status(200).json({ status: "Social link updated successfully", data: profile })
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message })
  }
}

const deleteSocial = async (req, res) => {
  const { index } = req.body
  try {
    const profile = await Profile.findOne({})
    profile.socialLinks.splice(index, 1)
    await profile.save({ validateBeforeSave: false })
    res.status(200).json({ status: "Social link deleted successfully", data: profile })
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message })
  }
}

const updateEducation = async (req, res) => {
  const { index, degree, field, year, college } = req.body
  try {
    const profile = await Profile.findOne({})
    profile.education[index] = { degree, field, year, college }
    await profile.save({ validateBeforeSave: false })
    res.status(200).json({ status: "Education updated successfully", data: profile })
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message })
  }
}

const deleteEducation = async (req, res) => {
  const { index } = req.body
  try {
    const profile = await Profile.findOne({})
    profile.education.splice(index, 1)
    await profile.save({ validateBeforeSave: false })
    res.status(200).json({ status: "Education deleted successfully", data: profile })
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message })
  }
}


const getProfile = async (_,res)=>{
   try {
    const profile = await Profile.findOne({})
    res.status(200).json({status:"ok",data:profile})
   } catch (error) {
    res.status(500).json({status:"error",error:error.message})
   }
}
 
export {
    getProfile,
    createProfile,
    addExperince,
    addSocial,
    addEducation,
    updateExperience,
    deleteExperience,
    updateSocial,
    deleteSocial,
    updateEducation,
    deleteEducation
}