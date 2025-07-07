import { showCatalog } from "../services/catalogService.js";

export const searchCatalog = async (req, res) => {
  const valid = await showCatalog();
  if (!valid) {
    return res.status(401).json({ error: "No hay libros en el catálogo" });
  }
  res.json(valid);
};
