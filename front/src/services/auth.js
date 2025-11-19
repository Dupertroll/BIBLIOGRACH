import { API_URL } from "../config";

const TOKEN_KEY = "token";

export const setAuthToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getAuthToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const removeAuthToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const loginUser = async (correo, contrasena) => {
  const res = await fetch(`${API_URL}/api/v1/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ correo, contrasena }),
  });

  if (!res.ok) throw await res.json();

  const data = await res.json();
  // data = { token, tipo_usuario }

  return data;
};
export const verify = localStorage.getItem("token");
