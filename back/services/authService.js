import fs from "fs/promises";
import path from "path";
import bcrypt from "bcrypt";
import { pool } from "../db.js";

const filePath = path.resolve("data", "users.json");

export const findUserByUsername = async (username) => {
  const users = JSON.parse(await fs.readFile(filePath, "utf-8"));
  return users.find((user) => user.username === username);
};

export const verifyPassword = async (inputPassword, hashedPassword) => {
  return await bcrypt.compare(inputPassword, hashedPassword);
};

// Registra un nuevo usuario
export const registerUser = async (
  nombre,
  documento,
  correo,
  plainPassword,
  tipo_usuario = "estudiante",
) => {
  // Verifica si ya existe usuario con ese correo o documento
  const existing = await pool.query(
    "SELECT * FROM usuarios WHERE correo = $1 OR documento = $2",
    [correo, documento],
  );
  if (existing.rows.length > 0) {
    throw new Error("El usuario ya existe con ese correo o documento.");
  }

  const hashedPassword = await bcrypt.hash(plainPassword, 10);

  const result = await pool.query(
    `INSERT INTO usuarios (nombre, documento, correo, contrasena, tipo_usuario)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING id, nombre, documento, correo, tipo_usuario, creado_en`,
    [nombre, documento, correo, hashedPassword, tipo_usuario],
  );

  return result.rows[0];
};
