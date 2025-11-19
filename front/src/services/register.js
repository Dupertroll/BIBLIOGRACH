import { API_URL } from "../config";

const TOKEN_KEY = "token";

export const registerUser = async (nombre, documento, correo, contrasena) => {
  const res = await fetch(`${API_URL}/api/v1/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, documento, correo, contrasena }),
  });

  if (!res.ok) throw await res.json(); // lanza error para el catch
  const token = await res.json(); // ["Usuario logeado…", { token }]
  return token;
};
export const verify = localStorage.getItem("token");
