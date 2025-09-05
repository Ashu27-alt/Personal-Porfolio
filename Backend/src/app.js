import bodyparser from "body-parser"
import cookieparser from "cookie-parser"
import express from "express"
import cors from "cors"

const app = express()
app.use(express.json())
app.use (bodyparser.urlencoded({ extended: true }))
app.use(cookieparser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

import health from "./Routes/health.route.js"
import user from "./Routes/user.routes.js"
import project from "./Routes/project.routes.js"

app.use("/api/v1/health", health);
app.use("/api/v1/profile", user);
app.use("/api/v1/projects", project);

export default app