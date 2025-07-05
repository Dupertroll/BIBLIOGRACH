import { pool } from "../db.js";

export const genderService = async (genero) =>{
  const crearGenero = await pool.query('INSERT INTO generos(nombre) VALUES($1) ON CONFLICT (nombre) DO NOTHING RETURNING *', [genero])
  return crearGenero.rows
}

export const editorialService = async (editorial) =>{
  const crearEditorial = await pool.query('INSERT INTO editoriales (nombre) VALUES($1) ON CONFLICT (nombre) DO NOTHING RETURNING *', [editorial])
  return crearEditorial.rows
}

export const ubicationService = async (ubicacion) =>{
  const crearUbicacion = await pool.query('INSERT INTO ubicaciones (nombre) VALUES($1) ON CONFLICT (nombre) DO NOTHING RETURNING *', [ubicacion])
  return crearUbicacion.rows
}

export const bookService = async (nombre, autor, cantidad, portada_url, anio, id_editorial, id_genero, sistema_dewey, id_ubicacion) =>{
  const crearLibro = await pool.query('INSERT INTO libros (nombre, autor, cantidad, portada_url, anio, id_editorial, id_genero, sistema_dewey, id_ubicacion) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *', [nombre, autor, cantidad, portada_url, anio, id_editorial, id_genero, sistema_dewey, id_ubicacion])
  return crearLibro.rows
}

export const deleteService = async (nombre)=>{
  const idLibro = await pool.query('SELECT id FROM libros WHERE nombre = $1',[nombre])
  if (idLibro.rows.length == 0){
    return idLibro.rows
  }
  await pool.query('DELETE FROM libros WHERE (nombre) = $1', [nombre])
  return idLibro.rows
}
