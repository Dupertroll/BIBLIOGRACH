import { pool } from "../db.js"
import { genderService, editorialService, ubicationService, bookService } from "../services/inventoryService.js"
const searchGeneroId = async (genero) => {
  const genderId = await pool.query('SELECT id FROM generos WHERE TRIM(LOWER(nombre)) = TRIM(LOWER($1))', [genero]);
  if (genderId.rows.length == 1){
    return {mensaje:"Genero ya existente", id:genderId.rows[0].id}
  }
  const genderCreate = await genderService(genero)
  return {mensaje:"Genero regristado correctamente", id:genderCreate[0].id}
}

const searchEditorialId = async (editorial) => {
  const editorialId = await pool.query('SELECT id FROM editoriales WHERE TRIM(LOWER(nombre)) = TRIM(LOWER($1))', [editorial]);
  if (editorialId.rows.length == 1){
    return {mensaje:"Editorial ya existente", id:editorialId.rows[0].id}
  }
  const editorialCreate = await editorialService(editorial)
  return {mensaje:"Editorial regristado correctamente", id:editorialCreate[0].id}
}

const searchUbicationId = async (ubicacion) => {
  const ubicationId = await pool.query('SELECT id FROM ubicaciones WHERE TRIM(LOWER(nombre)) = TRIM(LOWER($1))', [ubicacion]);
  if (ubicationId.rows.length == 1){
    return {mensaje:"Ubicacion ya existente", id:ubicationId.rows[0].id}
  }
  const ubicationCreate = await ubicationService(ubicacion)
  return {mensaje:"Ubicacion regristada correctamente", id:ubicationCreate[0].id}
}

export const createLibro = async (req, res) => {
  const {nombre, autor, cantidad, portada_url, anio, editorial, genero, sistema_dewey, ubicacion} = req.body
  if (!nombre || !autor || cantidad == null || !editorial || !genero || !ubicacion || !anio || !portada_url) {
      return res.status(500).json("Faltan datos necesarios");
  }
  // Revisar si el libro ya existe
  const checkBook = await pool.query('SELECT id FROM libros WHERE TRIM(LOWER(nombre)) = TRIM(LOWER($1))', [nombre]);
  if (checkBook.rows.length == 1){
    return res.json(["Libro ya existente", checkBook.rows[0].id])
  }
  // Crear los datos en las otras tablas
  const gender = await searchGeneroId(genero)
  const editoriale = await searchEditorialId(editorial)
  const ubication = await searchUbicationId(ubicacion)
  // Crear el libro
  const book = await bookService(nombre, autor, cantidad, portada_url, anio, editoriale.id, gender.id, sistema_dewey, ubication.id)
  res.json(["Libro registrado", gender, editoriale, ubication, book])
}

