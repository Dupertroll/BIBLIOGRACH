import jwt from "jsonwebtoken";
import {
  existsUserByEmail,
  verifyPassword,
  registerUser,
} from "../services/authService.js";
import { JWT_SECRET } from "../config.js";

export const login = async (req, res) => {
  const { correo, contrasena } = req.body;

  const user = await existsUserByEmail(correo);
  if (!user) {
    return res.status(401).json({ error: "Correo no encontrado" });
  }

  const valid = await verifyPassword(contrasena, user.contrasena);
  if (!valid) {
    return res.status(401).json({ error: "Contraseña incorrecta" });
  }

  const token = jwt.sign(
    { userId: user.id, username: user.nombre },
    JWT_SECRET,
    {
      expiresIn: "7d",
    },
  );

  res.json("Usuario logeado correctamente", { token });
};

export const register = async (req, res) => {
  const { nombre, documento, correo, contrasena } = req.body;

  try {
    if (!nombre || !documento || !correo || !contrasena) {
      return res.status(400).json({ error: "Faltan datos" });
    }

    const newUser = await registerUser(nombre, documento, correo, contrasena);
    res.status(201).json({
      message: "Usuario registrado exitosamente",
      user: newUser,
    });
  } catch (error) {
    console.log("body recibido:", req.body);
    res.status(400).json({ error: error.message });
  }
};

export const verifyToken = (req, res) => {
  // Si el middleware authenticateToken no ha devuelto error, significa que el token es válido
  res.status(200).json({ message: "Token válido" });
};
