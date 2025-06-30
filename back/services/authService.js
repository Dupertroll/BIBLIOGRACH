import bcrypt from "bcrypt";
import { pool } from "../db.js";

// Error personalizado para indicar conflicto, p. ej. usuario ya existente
export class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.name = "ConflictError";
    this.statusCode = 409;
  }
}

// Hashea una contraseña en texto plano usando bcrypt
export const hashPassword = async (plainPassword) => {
  return await bcrypt.hash(plainPassword, 10);
};

// Verifica si la contraseña en texto plano coincide con la contraseña hasheada
export const verifyPassword = async (inputPassword, hashedPassword) => {
  return await bcrypt.compare(inputPassword, hashedPassword);
};

// Verifica si existe un usuario con un correo dado
export const existsUserByEmail = async (correo, identifier) => {
  const result = await pool.query(
    "SELECT * FROM usuarios WHERE TRIM(LOWER(correo)) = TRIM(LOWER($1))",
    [correo]);
  if (result.rows.length == 0 & identifier != null) {
    throw new Error("El usuario no existe con ese correo.");
  }
  return result.rows[0];
};

// Verifica si existe un usuario con un documento dado
export const existsUserByDocumento = async (documento) => {
  const result = await pool.query(
    "SELECT id FROM usuarios WHERE documento = $1",
    [documento]
  );
  return result.rows.length > 0;
};

// Registra un nuevo usuario
export const registerUser = async (
  nombre,
  documento,
  correo,
  plainPassword,
  tipo_usuario = "estudiante",
) => {
  const emailExists = await existsUserByEmail(correo);
  const documentoExists = await existsUserByDocumento(documento);

  if (emailExists || documentoExists) {
    throw new ConflictError("El usuario ya existe con ese correo o documento.");
  }

  const hashedPassword = await hashPassword(plainPassword);

  const result = await pool.query(
    `INSERT INTO usuarios (nombre, documento, correo, contrasena, tipo_usuario)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING id, nombre, documento, correo, tipo_usuario, creado_en`,
    [nombre, documento, correo, hashedPassword, tipo_usuario],
  );

  // No devolvemos la contraseña bajo ninguna circunstancia
  return result.rows[0];
};
