import express from "express";
import { login, register, verifyToken } from "../controllers/authController.js";
import { authenticateToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/verify", authenticateToken, verifyToken);

export default router;
