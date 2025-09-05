import bodyparser from "body-parser"
import cookieparser from "cookie-parser"
import express from "express"
import cors from "cors"

const app = express()
app.use(express.json())
app.use (bodyparser.urlencoded({ extended: true }))
app.use(cookieparser())
app.use(cors({
    origin: "https://personal-porfolio-dj4j.onrender.com/",
    credentials: true
}))

import health from "./Routes/health.route.js"
import user from "./Routes/user.routes.js"
import project from "./Routes/project.routes.js"

app.use("https://personal-porfolio1.onrender.com/health", health);
app.use("https://personal-porfolio1.onrender.com/profile", user);
app.use("https://personal-porfolio1.onrender.com/projects", project);

export default app