import express from "express";
import { createLibro, deleteLibro } from "../controllers/inventoryControler.js";
import { createPrestamo } from "../controllers/loanControler.js";

const router = express.Router();

// Filtros de invenrario
router.post("/create", createLibro);
router.post("/delete", deleteLibro);
router.post("/loan", createPrestamo);

export default router;
