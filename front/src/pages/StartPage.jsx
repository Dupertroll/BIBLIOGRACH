// StartPage.jsx – Hero refinado con contorno blanco, márgenes y forma precisa
import { Link } from "react-router";
export const StartPage = () => {
  const navItems = [{ label: "Nosotros", href: "/about" }];

  // Polígono escalonado (mockup) reutilizado dos veces para crear el borde blanco

  return (
    <div className="min-h-screen flex flex-col bg-black text-white overflow-x-hidden">
      {/* ——— NAVBAR ——— */}
      <header className="flex items-center justify-between px-8 md:px-16 py-6">
        <a href="#" className="text-2xl tracking-wider select-none">
          BIBLIOGRACH
        </a>
        <nav className="flex hidden md:flex gap-8 text-lg select-none items-center">
          {navItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="hover:text-gray-300 transition-colors"
            >
              {label}
            </a>
          ))}
          <Link
            className="border border-white px-4 py-2 text-sm tracking-wider hover:bg-white hover:text-black transition-colors select-none rounded-[10px]"
            to="/login"
          >
            INICIAR SESIÓN
          </Link>
        </nav>
      </header>

      {/* ——— HERO ——— */}
      <section className="relative flex flex-col items-center flex-1 mt-8 md:mt-0">
        {/* Figura azul con contorno blanco */}
        <div className="pointer-events-none absolute top-[43%] -translate-y-1/2 left-1/2 -translate-x-1/2">
          <div className="relative">
            <svg
              width="1230"
              height="485"
              viewBox="0 0 1230 565"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 284.793V404.697H226.83V504.24H449.342V438.632H521.195V563.061H778.474V404.697H903.637V520.077H1100.65V404.697H1228.13V284.793H1100.65V212.398H903.637V60.8209H815.56V158.102H521.195V212.398H382.125V2H97.0312V212.398H194.38V284.793H2Z"
                fill="#3B6FF2"
                fill-opacity="0.62"
                stroke="white"
                stroke-width="3.00033"
              />
            </svg>
          </div>
        </div>

        {/* Texto sobre la figura */}
        <div className="relative z-10 h-[80vh] w-full text-center px-6 w-full max-w-screen-lg">
          <p className="font-thin absolute top-[7%] left-[31.5%] text-sm md:text-[170%] tracking-wide mb-2 text-left uppercase max-w-[320px] leading-tight md:leading-[1.1]">
            <span className="font-bold">UN LIBRO</span>
            <br />
            ES MÁS <br />
            QUE
          </p>
          <h1 className="font-bebas absolute top-[12%] left-[0%] md:text-[1600%] select-none">
            BIBLIOGRACH
          </h1>
          <p className="font-semibold absolute top-[87%] left-[71%] text-sm md:text-[170%] tracking-wide mb-6 text-right uppercase max-w-[240px] ml-auto">
            PAPEL Y TEXTO
          </p>

          <Link
            className="font-ibm absolute top-[80%] left-[43%] border border-white px-6 py-3 tracking-wide hover:bg-white hover:text-black transition-colors text-sm md:text-base select-none rounded-[10px]"
            to="/books"
          >
            ¡EXPLORAR AHORA!
          </Link>
        </div>
      </section>
    </div>
  );
};
