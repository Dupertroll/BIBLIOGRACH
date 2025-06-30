import { pool } from "../db.js";
export const showCatalog = async () =>{
  const result = await pool.query('SELECT * FROM libros')
  return result.rows;
}

export const searchByYear = async (req, res) => {
  const año = req.params.year;
  const result = await pool.query(
    'SELECT * FROM libros WHERE anio = $1',
    [año]
  );
  if (result.rows.length == 0) {
    res.status(500).send("No hay libros de ese año.");
  }
  res.json(result.rows);
  return result.rows[0];
};


