import { Link } from "react-router-dom"

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg text-gray-600 mb-8">
        Explore my projects, experience, and education
      </p>

      <div className="flex space-x-4">
        <Link
          to="/profile"
          className="px-6 py-3 rounded-xl bg-amber-600 text-white font-semibold shadow-md hover:bg-amber-700 transition"
        >
          View Portfolio
        </Link>

        <Link
          to="/projects"
          className="px-6 py-3 rounded-xl bg-gray-800 text-white font-semibold shadow-md hover:bg-gray-900 transition"
        >
          Projects
        </Link>
      </div>
    </div>
  )
}
