import express from "express";
import { createLibro, deleteLibro } from "../controllers/inventoryControler.js";

const router = express.Router();

// Filtros de invenrario
router.post("/create", createLibro);
router.post("/delete", deleteLibro);

export default router;
