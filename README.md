# Personal Portfolio (MERN + Vite + Tailwind)

A full-stack personal portfolio web application where you can showcase your **profile, education, experience, social links, and projects**.  
The backend is built with **Express.js** and the frontend with **React (Vite) + Tailwind CSS**.  

---

## ✨ Features
- Display personal **profile details** (name, email, education, experience, social links).
- Add new **education entries**, **experience**, and **social links**.
- Add, view, search (by tech stack), and delete **projects**.
- Search projects via query parameter `?tech=<stack>`.
- Clean **Tailwind UI**.
- Backend and frontend run independently.

---

## 🛠️ Tech Stack
- **Frontend:** React (Vite), Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB
- **Deployment:** Render (backend), Vercel (frontend)

---

## 📂 Project Structure

Personal-Portfolio/
├── Backend/ # Express backend
│ ├── Routes/ # API routes (profile, projects, health)
│ ├── Controllers/ # Logic for each route
│ ├── Models/ # Mongoose models (Profile, Project)
│ ├── server.js # Server entry point
│ └── app.js # Express app config
│
├── Frontend/ # React + Vite frontend
│ ├── src/
│ │ ├── pages/ # ProfilePage.jsx, ProjectsPage.jsx, LandingPage.jsx
│ │ ├── App.jsx # Main app
│ │ ├── main.jsx # React entry
│ │ └── index.css # Tailwind setup
│ └── vite.config.js
│


---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/yourusername/personal-portfolio.git
cd personal-portfolio

cd Backend
npm install

PORT=8001
MONGO_URI=your-mongodb-connection-string

npm start
ackend runs on: http://localhost:8001

APIs:

GET /api/v1/profile

POST /api/v1/profile/add-Education

POST /api/v1/profile/add-Experience

POST /api/v1/profile/add-Social

GET /api/v1/projects

POST /api/v1/projects

DELETE /api/v1/projects/:id

3. Frontend Setup

cd Frontend
npm install

Run frontend:

npm run dev

Frontend runs on: http://localhost:5173
