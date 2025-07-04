import { useState } from "react";

export const useLoginForm = () => {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [showContrasena, setShowContrasena] = useState(false);

  return {
    correo,
    setCorreo,
    contrasena,
    setContrasena,
    showContrasena,
    setShowContrasena,
  };
};
