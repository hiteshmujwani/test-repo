import express from "express";
import { showAllController } from "../controllers/authController.js";
const router = express.Router();

router.get("/home", showAllController);

export default router;
