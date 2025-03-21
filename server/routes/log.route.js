import express from "express";
import { getAllLogs } from "../controllers/log.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

// Route to get all logs
router.get("/all", isAuthenticated, getAllLogs);

export default router;
