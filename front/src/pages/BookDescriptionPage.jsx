// BookDescriptionPage.tsx – Diseño ajustado fielmente al mock‑up
// Usa TailwindCSS cargado globalmente (incl. forms + container‑queries)
// Colores de marca en hexadecimales para evitar dependencia del theme.

import Header from "../components/Header/Header";
import { Link, useParams } from "react-router";
import { useCatalog } from "../hooks/useCatalog";
import { toast } from "sonner";

export const BookDescriptionPage = () => {
  const { id } = useParams();
  const { books } = useCatalog();
  const book = books.find((b) => b.id === Number(id));

  /* --------------------- Página de error (libro no encontrado) -------------------- */
  if (!book) {
    return (
      <div className="relative flex min-h-screen flex-col bg-white overflow-x-hidden">
        <Header />
        <main className="flex flex-1 items-center justify-center p-10">
          <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="text-2xl font-bold text-[#121417]">
              Libro no encontrado
            </h1>
            <p className="text-base text-[#677583]">
              El libro que buscas no existe en nuestro catálogo.
            </p>
            <Link
              to="/catalog"
              className="rounded-full bg-[#f1f2f4] px-6 py-3 font-medium text-[#121417] transition-colors hover:bg-[#e1e2e4]"
            >
              Volver al catálogo
            </Link>
          </div>
        </main>
      </div>
    );
  }

  /* ------------------------------- Utilidades ------------------------------ */
  const handlePrestar = () =>
    toast.success(`Se agregó "${book.nombre}" al carrito`);
  const generos = book.genero
    ? book.genero
        .split(/[,|]/)
        .map((g) => g.trim())
        .filter(Boolean)
    : [];

  /* ------------------------------ Vista normal ----------------------------- */
  return (
    <div className="relative flex flex-col bg-white overflow-x-hidden">
      <Header />
      {/* ---------- Contenedor principal ---------- */}
      <main className="flex flex-1 justify-center py-0 px-0 overflow-y-hidden">
        {/* Marco naranja y fondo gris claro (según mock‑up) */}
        <div className="w-full border-[5px] border-[#ff7f00] h-[20%] bg-white p-4 md:p-11">
          {/* Tarjeta blanca con borde interno */}
          <div className="flex flex-col md:flex-row gap-10 h-[99%] border border-black/80 bg-[#D9D9D9] p-3 md:p-8">
            {/* ------------------ Columna izquierda: portada + botón ----------------- */}
            <div className="flex flex-col items-center">
              {/* Portada con marco blanco trasero desplazado */}
              <div className="relative w-full max-w-full">
                {/* Marco trasero */}
                <div />
                {/* Imagen */}
                <img
                  src={book.portada_url}
                  alt="nada"
                  className="relative top-[-15%] aspect-[3/4] w-[20vw] h-[56vh] border-15 border-white bg-cover bg-center outline-[1.5px]"
                />
              </div>

              {/* Botón "Solicitar préstamo" */}
              <button
                onClick={handlePrestar}
                className="relative top-[-10%] w-full rounded-md bg-black py-3 text-m font-medium uppercase tracking-wider text-white transition-colors hover:bg-[#222]"
              >
                Solicitar préstamo
              </button>
            </div>

            {/* -------------------- Columna derecha: metadatos -------------------- */}
            <div className="flex flex-col gap-6">
              {/* Autor y año */}
              <div className="relative flex flex-wrap gap-6">
                {/* Autor */}
                <div className="flex flex-col gap-2">
                  <span className="w-fit rounded-[10px] border-[1.5px] px-4 py-3 text-m font-extralight uppercase leading-none tracking-wider text-[#121417]">
                    Autor
                  </span>
                  <span className="w-fit rounded-[10px] border-[1.5px] border-black uppercase px-4 py-3 text-4xl font-bold leading-none text-white">
                    {book.autor}
                  </span>
                </div>

                {/* Año */}
                <div className="absolute top-[120%] left-[0%] flex flex-row gap-1">
                  <span className="w-fit rounded-[10px] border-[1.5px] px-4 py-3 text-m font-extralight uppercase leading-none tracking-wider text-[#121417] h-[40%]">
                    Año de publicación
                  </span>
                  <span className="w-fit rounded-[10px] border-[1.5px] px-3 py-3 text-xl font-bold leading-none text-white border-black h-[40%]">
                    {book.anio || "—"}
                  </span>
                </div>
              </div>

              {/* Título */}
              <div className="absolute right-[8%] flex flex-col gap-2">
                <span className="relative left-[70%] w-fit rounded-[10px] border-[1.5px] px-4 py-2 text-sm font-light uppercase tracking-wider text-[#121417]">
                  Título de la obra
                </span>
                <h1
                  className="relative
                  uppercase
                  text-right
                      text-[clamp(2rem,4vw+1rem,4rem)]
                       md:text-[3.5rem]
                       font-semibold
                       leading-tight
                      text-[#0050ff]
                      break-words                     
                      hyphens-auto                    
                      [text-wrap:balance]             
                      max-w-[min(90vw,15ch)]          
                      line-clamp-3                    
                      overflow-hidden
                      text-[#082FF2]
                      right-[-8%]    
                  "
                >
                  {book.nombre}
                </h1>
              </div>
              {/* Descripción */}
              <p className="relative top-[20%] max-w-[60ch] text-xl leading-relaxed font-light text-[#121417]">
                {book.descripcion || "No existe descripción para este libro."}
              </p>

              {/* Géneros */}
              <div className="absolute right-[16%] bottom-[11%]">
                {generos.length > 0 && (
                  <div className="absolute w-fit relative left-[115%] bottom-[-35%] flex flex-wrap border-[1.5px] rounded-[8px] px-1 py-0.9 w-[5.5vw] gap-3">
                    {generos.map((g, idx) => (
                      <span
                        key={idx}
                        className="rounded-md bg-[#dadbde] px-3 py-1 text-m font-medium text-[#121417]"
                      >
                        {g}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
