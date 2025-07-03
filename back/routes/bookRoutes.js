import express from "express";
import { searchCatalog } from "../controllers/catalogControler.js";
import { searchByYear } from "../services/catalogService.js";
import { createLibro } from "../controllers/inventoryControler.js";

const router = express.Router();

// Filtros de libros
router.get("/", searchCatalog);
router.get("/year/:year", searchByYear);

// Filtros de invenrario
router.post("/create", createLibro)
export default router;
