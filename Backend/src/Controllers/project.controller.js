import { Project } from "../Models/projects.Model.js"

const createProject = async (req, res) => {
  const { title, description, techStack, link } = req.body
  try {
    const newProject = await Project.create({ title, description, techStack, link })
    res.status(201).json({ status: "ok", data: newProject })
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message })
  }
}

const getProjects = async (req, res) => {
  const { tech } = req.query
  try {
    let filter = {}
    if (tech) {
      filter = { techStack: { $regex: tech, $options: "i" } }
    }
    const projects = await Project.find(filter)
    res.status(200).json({ status: "ok", data: projects })
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message })
  }
}
const deleteProject = async (req, res) => {
  const { id } = req.params
  try {
    const deleted = await Project.findByIdAndDelete(id)
    if (!deleted) {
      return res.status(404).json({ status: "error", message: "Project not found" })
    }
    res.status(200).json({ status: "ok", message: "Project deleted successfully" })
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message })
  }
}

export {
    createProject,
    getProjects,
    deleteProject
}