// StartPage.jsx – Hero refinado con contorno blanco, márgenes y forma precisa
import { Link } from "react-router";
export const StartPage = () => {
  const navItems = [
    { label: "Nosotros", href: "/about" },
    { label: "Memorias", href: "/memories" },
  ];

  // Polígono escalonado (mockup) reutilizado dos veces para crear el borde blanco
  const heroShape =
    "polygon(0.20% 70%,0.20% 45%,15.20% 45%,15.20% 35.5%,6.9% 35.5%,6.9% 0.5%,35.1% 0.5%,35.1% 28.5%,44.9% 28.5%,44.9% 19.5%,64.9% 19.5%,64.9% 4.5%,70.1% 4.5%,70.1% 24.5%,84.1% 24.5%,84.1% 36.5%,94.1% 36.5%,94.1% 60.5%,85.1% 60.5%,85.1% 85.5%,69.9% 85.5%,69.9% 65.5%,60.1% 65.5%,60.1% 95.5%,44.9% 95.5%,44.9% 70.5%,37.1% 70.5%,37.1% 85.5%,16.9% 85.5%,16.9% 70%)";

  const heroShape2 =
    "polygon(0% 70.5%,0% 44.5%,15% 44.5%,15% 36%,6.73% 36%,6.73% 0%,35.23% 0%,35.23% 28%,44.73% 28%,44.73% 19%,64.73% 19%,64.73% 4%,70.23% 4%,70.23% 24%,84.23% 24%,84.23% 36%,94.23% 36%,94.23% 61%,85.23% 61%,85.23% 86%,69.73% 86%,69.73% 66%,60.23% 66%,60.23% 96%,44.73% 96%,44.73% 71%,37.23% 71%,37.23% 86%,16.73% 86%,16.73% 70.5%)";

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-['Bebas+Neue',sans-serif] overflow-x-hidden">
      {/* ——— NAVBAR ——— */}
      <header className="flex items-center justify-between px-8 md:px-16 py-6">
        <a href="#" className="text-2xl tracking-wider select-none">
          BIBLIOGRACH
        </a>
        <nav className="hidden md:flex gap-8 text-lg select-none">
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
            className="border border-white px-4 py-2 text-sm tracking-wider hover:bg-white hover:text-black transition-colors select-none rounded-[40px]"
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
            <div
              className="absolute inset-0 bg-white -z-10" /* -z-10 → debajo de la azul */
              style={{
                clipPath: heroShape2, // misma forma
                width: "85vw",
                maxWidth: "1350px",
                height: "70vh",
              }}
            />
            {/* Capa azul principal */}
            <div
              className="bg-[#244696] shadow-lg"
              style={{
                clipPath: heroShape,
                width: "85vw",
                maxWidth: "1350px",
                height: "70vh",
              }}
            />
          </div>
        </div>

        {/* Texto sobre la figura */}
        <div className="relative z-10 h-[80vh] w-full text-center px-6 w-full max-w-screen-lg">
          <p className="absolute top-[11%] left-[34%] text-sm md:text-base tracking-wide mb-2 text-left uppercase max-w-[320px] font-bold">
            UN LIBRO <br />
            ES MÁS <br />
            QUE
          </p>
          <h1 className="absolute top-[18%] left-[-6%] md:text-[160px] font-extrabold select-none">
            BIBLIOGRACH
          </h1>
          <p className="absolute top-[78%] left-[68%] text-sm md:text-base tracking-wide mb-6 text-right uppercase max-w-[240px] ml-auto font-bold">
            PAPEL Y TEXTO
          </p>

          <Link
            className="absolute top-[90%] left-[42.5%] border border-white px-6 py-3 tracking-wide hover:bg-white hover:text-black transition-colors text-sm md:text-base select-none rounded-[40px]"
            to="/books"
          >
            ¡EXPLORAR AHORA!
          </Link>
        </div>
      </section>
    </div>
  );
};
