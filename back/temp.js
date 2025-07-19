// initDb.js
import { pool } from "./db.js";

export const createTables = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS usuarios (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(100) NOT NULL,
        documento VARCHAR(30) UNIQUE NOT NULL,
        correo VARCHAR(100) UNIQUE NOT NULL,
        contrasena TEXT NOT NULL,
        tipo_usuario VARCHAR(20) NOT NULL CHECK (tipo_usuario IN ('estudiante', 'profesor', 'administrador')),
        creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
      
      CREATE TABLE IF NOT EXISTS ubicaciones (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(100) UNIQUE NOT NULL,
        descripcion TEXT
      );
      
      CREATE TABLE IF NOT EXISTS generos (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(50) UNIQUE NOT NULL
      );
      
      CREATE TABLE IF NOT EXISTS editoriales (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(100) UNIQUE NOT NULL
      );
      
      CREATE TABLE IF NOT EXISTS libros (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(200) NOT NULL,
        descripcion VARCHAR(200) NOT NULL,
        autor VARCHAR(100) NOT NULL,
        cantidad INT NOT NULL CHECK (cantidad >= 0),
        portada_url TEXT,
        anio INT CHECK (anio >= 0),
        id_editorial INT REFERENCES editoriales(id),
        id_genero INT REFERENCES generos(id),
        sistema_dewey VARCHAR(20),
        id_ubicacion INT REFERENCES ubicaciones(id),
        creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
      
      CREATE TABLE IF NOT EXISTS prestamos (
        id SERIAL PRIMARY KEY,
        id_usuario INT REFERENCES usuarios(id) ON DELETE CASCADE,
        id_libro INT REFERENCES libros(id) ON DELETE CASCADE,
        curso VARCHAR(100),
        fecha_prestamo DATE NOT NULL DEFAULT CURRENT_DATE,
        fecha_limite DATE NOT NULL,
        fecha_devolucion DATE,
        estado VARCHAR(20) NOT NULL DEFAULT 'pendiente' CHECK (estado IN ('pendiente', 'devuelto', 'rechazado'))
      );
      
      CREATE TABLE IF NOT EXISTS solicitudes_prestamo (
        id SERIAL PRIMARY KEY,
        id_usuario INT REFERENCES usuarios(id) ON DELETE CASCADE,
        id_libro INT REFERENCES libros(id) ON DELETE CASCADE,
        fecha_solicitada DATE NOT NULL,
        cantidad INT NOT NULL CHECK (cantidad > 0),
        observaciones TEXT,
        creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    `);

    console.log("✅ Todas las tablas fueron creadas (o ya existen).");
  } catch (err) {
    console.error("❌ Error creando las tablas:", err);
  }
};
