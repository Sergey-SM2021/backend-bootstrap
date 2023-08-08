import express from "express";
import { ProfileController } from "../controllers/profile.js";
const router = express.Router();

router.get("/", ProfileController.getProfile);

router.put("/:id", ProfileController.updateProfile);

export default router;
