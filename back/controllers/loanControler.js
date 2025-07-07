import { searchBookId, loanService } from "../services/inventoryService.js";
import { searchUserById } from "../services/authService.js";

export const createPrestamo = async (req, res) => {
  const { id_usuario, libro, curso, fecha_limite } = req.body;
  const checkUser = await searchUserById(id_usuario);
  if (!checkUser) {
    return res.json("Usuario no válido");
  }
  const getBook = await searchBookId(libro);
  if (!getBook) {
    return res.json("Libro no válido");
  }
  const prestamoCrear = await loanService(
    id_usuario,
    getBook.id,
    curso,
    fecha_limite,
  );
  res.json(prestamoCrear);
};
