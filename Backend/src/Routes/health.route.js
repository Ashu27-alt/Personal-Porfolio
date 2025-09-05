import { getHealth } from "../Controllers/health.controller.js";
import { Router } from "express";

const router = Router();

router.route("/").get(getHealth);

export default router;