import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function ProfilePage() {
  const [profile, setProfile] = useState(null)
  const [newEdu, setNewEdu] = useState({ degree: "", field: "", year: "", college: "" })
  const [newExp, setNewExp] = useState("")
  const [newSocial, setNewSocial] = useState("")

  const fetchProfile = () => {
    fetch("https://personal-porfolio1.onrender.com/profile")
      .then(res => res.json())
      .then(data => setProfile(data.data))
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  const addEducation = async () => {
    await fetch("https://personal-porfolio1.onrender.com/profile/add-Education", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEdu)
    })
    setNewEdu({ degree: "", field: "", year: "", college: "" })
    fetchProfile()
  }

  const addExperience = async () => {
    await fetch("https://personal-porfolio1.onrender.com/profile/add-Experience", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newExperience: newExp })
    })
    setNewExp("")
    fetchProfile()
  }

  const addSocial = async () => {
    await fetch("https://personal-porfolio1.onrender.com/profile/add-Social", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newsocial: newSocial })
    })
    setNewSocial("")
    fetchProfile()
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <Link to="/" className="text-ember-600 hover:underline">← Back</Link>

      <h1 className="text-3xl font-bold mt-4">{profile?.name}</h1>
      <p className="text-gray-600">{profile?.email}</p>

      {/* Education */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Education</h2>
        <ul className="list-disc pl-5">
          {profile?.education?.map((edu, i) => (
            <li key={i}>{edu.degree} in {edu.field} ({edu.year}) – {edu.college}</li>
          ))}
        </ul>
        <div className="mt-3 flex gap-2 flex-wrap">
          <input placeholder="Degree" className="border px-2 py-1 rounded" value={newEdu.degree} onChange={e => setNewEdu({ ...newEdu, degree: e.target.value })} />
          <input placeholder="Field" className="border px-2 py-1 rounded" value={newEdu.field} onChange={e => setNewEdu({ ...newEdu, field: e.target.value })} />
          <input placeholder="Year" className="border px-2 py-1 rounded" value={newEdu.year} onChange={e => setNewEdu({ ...newEdu, year: e.target.value })} />
          <input placeholder="College" className="border px-2 py-1 rounded" value={newEdu.college} onChange={e => setNewEdu({ ...newEdu, college: e.target.value })} />
          <button onClick={addEducation} className="bg-ember-600 text-white px-3 py-1 rounded">Add</button>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Experience</h2>
        <ul className="list-disc pl-5">
          {profile?.experience?.map((exp, i) => (
            <li key={i}>{exp}</li>
          ))}
        </ul>
        <div className="mt-3 flex gap-2">
          <input placeholder="New experience" className="border px-2 py-1 rounded w-full" value={newExp} onChange={e => setNewExp(e.target.value)} />
          <button onClick={addExperience} className="bg-ember-600 text-white px-3 py-1 rounded">Add</button>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Social Links</h2>
        <ul className="list-disc pl-5">
          {profile?.socialLinks?.map((link, i) => (
            <li key={i}><a href={link} target="_blank" className="text-ember-600 hover:underline">{link}</a></li>
          ))}
        </ul>
        <div className="mt-3 flex gap-2">
          <input placeholder="New social link" className="border px-2 py-1 rounded w-full" value={newSocial} onChange={e => setNewSocial(e.target.value)} />
          <button onClick={addSocial} className="bg-ember-600 text-white px-3 py-1 rounded">Add</button>
        </div>
      </section>
    </div>
  )
}
