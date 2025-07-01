import { useState } from "react";

export const useLoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return {
    username,
    setUsername,
    password,
    setPassword,
    showPassword,
    setShowPassword,
  };
};
