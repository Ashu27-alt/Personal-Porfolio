import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/Landing.jsx"
import ProfilePage from "./pages/Profile.jsx"
import ProjectsPage from "./pages/Projects.jsx"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
  )
}
