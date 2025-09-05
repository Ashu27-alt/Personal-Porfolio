import { useEffect, useState } from "react"

export default function ProjectsPage() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState("")

  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    techStack: "",
    link: "",
  })

  const fetchProjects = async (query = "") => {
    try {
      setLoading(true)
      let url = "http://localhost:8001/api/v1/projects"
      if (query) {
        url += `?tech=${encodeURIComponent(query)}`
      }

      const res = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })

      if (!res.ok) {
        throw new Error("Failed to fetch projects")
      }

      const data = await res.json()
      setProjects(data.data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    fetchProjects(search)
  }

  const handleAddProject = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch("http://localhost:8001/api/v1/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: newProject.title,
          description: newProject.description,
          techStack: newProject.techStack.split(",").map((tech) => tech.trim()),
          link: newProject.link,
        }),
      })

      if (!res.ok) {
        throw new Error("Failed to add project")
      }

      const data = await res.json()
      setProjects((prev) => [...prev, data.data])
      setNewProject({ title: "", description: "", techStack: "", link: "" })
    } catch (err) {
      setError(err.message)
    }
  }

  const handleDeleteProject = async (id) => {
    try {
      const res = await fetch(`http://localhost:8001/api/v1/projects/${id}`, {
        method: "DELETE",
      })

      if (!res.ok) {
        throw new Error("Failed to delete project")
      }

      setProjects((prev) => prev.filter((p) => p._id !== id))
    } catch (err) {
      setError(err.message)
    }
  }

  if (loading) return <p className="text-center mt-10">Loading...</p>
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Projects</h1>

      <form onSubmit={handleSearch} className="mb-6 flex space-x-2">
        <input
          type="text"
          placeholder="Search by tech stack (e.g. React)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-amber-600 text-white font-semibold rounded-lg shadow hover:bg-amber-700 transition"
        >
          Search
        </button>
      </form>

      <div className="mb-8 p-4 bg-white rounded-xl shadow border border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Add New Project</h2>
        <form onSubmit={handleAddProject} className="grid gap-4">
          <input
            type="text"
            placeholder="Title"
            value={newProject.title}
            onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
            className="px-4 py-2 border border-gray-300 rounded-lg"
            required
          />
          <textarea
            placeholder="Description"
            value={newProject.description}
            onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
            className="px-4 py-2 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="text"
            placeholder="Tech Stack (comma separated, e.g. React, Node.js)"
            value={newProject.techStack}
            onChange={(e) => setNewProject({ ...newProject, techStack: e.target.value })}
            className="px-4 py-2 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="url"
            placeholder="Project Link (optional)"
            value={newProject.link}
            onChange={(e) => setNewProject({ ...newProject, link: e.target.value })}
            className="px-4 py-2 border border-gray-300 rounded-lg"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-gray-800 text-white font-semibold rounded-lg shadow hover:bg-gray-900 transition"
          >
            Add Project
          </button>
        </form>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.length > 0 ? (
          projects.map((project) => (
            <div
              key={project._id}
              className="p-4 bg-white rounded-xl shadow-md border border-gray-200 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
                <p className="text-gray-600 mb-2">{project.description}</p>
                <p className="text-sm text-gray-500 mb-2">
                  Tech Stack: {project.techStack.join(", ")}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:underline font-medium"
                  >
                    View Project
                  </a>
                )}
              </div>
              <button
                onClick={() => handleDeleteProject(project._id)}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No projects found.</p>
        )}
      </div>
    </div>
  )
}
