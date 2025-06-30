import express from "express";
import { searchCatalog } from "../controllers/catalogControler.js";
import { searchByYear } from "../services/catalogService.js";

const router = express.Router();

// Filtros de libros
router.get("/", searchCatalog);
router.get("/year/:year", searchByYear);

export default router;
