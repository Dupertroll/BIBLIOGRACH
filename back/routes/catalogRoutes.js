import express from "express";
import { searchCatalog } from "../controllers/catalogControler.js";
import {
  searchByYear,
  searchByName,
  searchByAuthor,
  searchByGender,
  searchByEditorial,
} from "../services/catalogService.js";

const router = express.Router();

// Filtros de libros
router.get("/", searchCatalog);
router.get("/year/:year", searchByYear);
router.get("/name/:name", searchByName);
router.get("/author/:author", searchByAuthor);
router.get("/gender/:gender", searchByGender);
router.get("/editorial/:editorial", searchByEditorial);

export default router;
