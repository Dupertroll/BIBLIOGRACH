import { pool } from "../db.js";
import {
  searchGeneroId,
  searchEditorialId,
} from "../controllers/inventoryControler.js";
export const showCatalog = async () => {
  const result = await pool.query("SELECT * FROM libros");
  return result.rows;
};

export const searchByYear = async (req, res) => {
  const año = req.params.year;
  const result = await pool.query("SELECT * FROM libros WHERE anio = $1", [
    año,
  ]);
  if (result.rows.length == 0) {
    return res.status(500).send("No hay libros de ese año.");
  }
  res.json(result.rows);
  return result.rows[0];
};

export const searchByName = async (req, res) => {
  let nombre = req.params.name;
  nombre = decodeURIComponent(nombre);
  const result = await pool.query(
    "SELECT * FROM libros WHERE TRIM(LOWER(nombre)) = TRIM(LOWER($1))",
    [nombre],
  );
  if (result.rows.length == 0) {
    return res.status(500).send("No hay libros de con ese nombre.");
  }
  res.json(result.rows);
  return result.rows[0];
};

export const searchByAuthor = async (req, res) => {
  let autor = req.params.author;
  autor = decodeURIComponent(autor);
  const result = await pool.query("SELECT * FROM libros WHERE autor = $1", [
    autor,
  ]);
  if (result.rows.length == 0) {
    return res.status(500).send("No hay libros con ese autor.");
  }
  res.json(result.rows);
  return result.rows[0];
};

export const searchByGender = async (req, res) => {
  let genero = req.params.gender;
  genero = decodeURIComponent(genero);
  const generoId = await searchGeneroId(genero);
  const result = await pool.query("SELECT * FROM libros WHERE id_genero = $1", [
    generoId,
  ]);
  if (result.rows.length == 0) {
    return res.status(500).send("No hay libros de ese genero.");
  }
  res.json(result.rows);
  return result.rows[0];
};

export const searchByEditorial = async (req, res) => {
  let editoriale = req.params.editorial;
  editoriale = decodeURIComponent(editoriale);
  const editorialId = await searchEditorialId(editoriale);
  const result = await pool.query(
    "SELECT * FROM libros WHERE id_editorial = $1",
    [editorialId],
  );
  if (result.rows.length == 0) {
    return res.status(500).send("No hay libros de esa editorial.");
  }
  res.json(result.rows);
  return result.rows[0];
};
