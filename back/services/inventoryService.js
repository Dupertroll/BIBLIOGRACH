import { pool } from "../db.js";
// Filters
export const genderService = async (genero) => {
  const crearGenero = await pool.query(
    "INSERT INTO generos(nombre) VALUES($1) ON CONFLICT (nombre) DO NOTHING RETURNING *",
    [genero],
  );
  return crearGenero.rows;
};

export const editorialService = async (editorial) => {
  const crearEditorial = await pool.query(
    "INSERT INTO editoriales (nombre) VALUES($1) ON CONFLICT (nombre) DO NOTHING RETURNING *",
    [editorial],
  );
  return crearEditorial.rows;
};

export const ubicationService = async (ubicacion) => {
  const crearUbicacion = await pool.query(
    "INSERT INTO ubicaciones (nombre) VALUES($1) ON CONFLICT (nombre) DO NOTHING RETURNING *",
    [ubicacion],
  );
  return crearUbicacion.rows;
};
// Books
export const bookService = async (
  nombre,
  descripcion,
  autor,
  cantidad,
  portada_url,
  anio,
  id_editorial,
  id_genero,
  sistema_dewey,
  id_ubicacion,
) => {
  const crearLibro = await pool.query(
    "INSERT INTO libros (nombre, descripcion, autor, cantidad, portada_url, anio, id_editorial, id_genero, sistema_dewey, id_ubicacion) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
    [
      nombre,
      descripcion,
      autor,
      cantidad,
      portada_url,
      anio,
      id_editorial,
      id_genero,
      sistema_dewey,
      id_ubicacion,
    ],
  );
  return crearLibro.rows[0];
};

export const searchBookId = async (libro) => {
  const idLibro = await pool.query("SELECT id FROM libros WHERE nombre = $1", [
    libro,
  ]);
  return idLibro.rows[0];
};

export const deleteService = async (id) => {
  const verification = await pool.query(
    "SELECT * FROM libros WHERE (id) = $1",
    [id],
  );
  if (verification.rows.length == 0) {
    return verification.rows;
  }
  await pool.query("DELETE FROM libros WHERE (id) = $1", [id]);
  return verification.rows;
};
// Loans
export const loanService = async (
  id_usuario,
  id_libro,
  curso,
  fecha_limite,
) => {
  const crearPrestamo = await pool.query(
    "INSERT INTO prestamos (id_usuario, id_libro, curso, fecha_limite) VALUES($1, $2, $3, $4) RETURNING *",
    [id_usuario, id_libro, curso, fecha_limite],
  );
  return crearPrestamo.rows;
};
