import image from "../assets/hero.jpg";
import { useLoginForm } from "../hooks/useLoginForm";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const AuthPage = () => {
  const {
    username,
    setUsername,
    password,
    setPassword,
    showPassword,
    setShowPassword,
  } = useLoginForm();
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-[375px] rounded-lg overflow-hidden shadow-lg">
          <div className="relative h-60 md:h-80 lg:h-[400px]">
            <img
              src={image}
              alt="Hero"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 p-6 text-white flex flex-col justify-end h-full">
              <h1 className="text-2xl font-semibold">
                Inicia sesión para continuar
              </h1>
              <p className="text-sm text-white/80 mt-1">
                Accede a tu cuenta de forma segura
              </p>
            </div>
          </div>

          <div className="bg-white px-6 py-8">
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Usuario"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black-400"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-6 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Contraseña"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black-400"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="absolute right-4 top-3 text-gray-400 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash size={20} />
                  ) : (
                    <FaEye size={20} />
                  )}
                </span>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition cursor-pointer"
              >
                Iniciar sesión
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
