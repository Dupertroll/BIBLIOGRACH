import { API_URL } from "../config";

export const getCatalog = async () => {
  const response = await fetch(`${API_URL}/api/v1/catalog/`, {
    method: "GET",
    headers: { 
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Error al obtener el catálogo");
  }

  return data;
}; 