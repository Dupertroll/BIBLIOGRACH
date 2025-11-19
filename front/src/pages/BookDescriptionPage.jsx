import Header from "../components/Header/Header";
import { Link, useParams } from "react-router";
import { useCatalog } from "../hooks/useCatalog";
import { toast } from "sonner";
import { verify } from "../services/auth.js";

export const BookDescriptionPage = () => {
  const { id } = useParams();
  const { books } = useCatalog();
  const book = books.find((b) => b.id === Number(id));

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

  const handlePrestar = () => {
    if (!verify) {
      toast.error(`Debes tener una cuenta para poder hacer un prestamo`);
    }
    if (verify) {
      toast.success(`Se agregó "${book.nombre}" al carrito`);
    }
  };
  const generos = book.genero
    ? book.genero
        .split(/[,|]/)
        .map((g) => g.trim())
        .filter(Boolean)
    : [];

  return (
    <div className="relative flex flex-col bg-white overflow-x-hidden">
      <Header />
      <main className="flex flex-1 justify-center py-0 px-0 overflow-y-hidden">
        <div className="w-full border-[5px] border-[#ff7f00] bg-white p-4 md:p-11 max-h-[89.7vh]">
          <div className="relative flex flex-col md:flex-row gap-10 border max-h-[76vh] border-black/80 bg-[#D9D9D9] p-1 md:p-8 md:pr-0">
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-full">
                <div />
                <img
                  src={book.portada_url}
                  alt="nada"
                  className="relative top-[-15%] aspect-[3/4] w-[25vw] h-[66vh] border-15 border-white bg-cover bg-center outline-[1.5px]"
                />
              </div>

              <button
                onClick={handlePrestar}
                className="relative top-[-10%] w-full rounded-md bg-black py-3 text-m font-medium uppercase tracking-wider text-white transition-colors hover:bg-[#222]"
              >
                Solicitar préstamo
              </button>
            </div>

            <div className="relative flex flex-row gap-2">
              <div className="relative flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                  <span className="w-fit rounded-[10px] border-[1.5px] px-4 py-3 text-m font-extralight uppercase leading-none tracking-wider text-[#121417]">
                    Autor
                  </span>
                  <span className="w-fit rounded-[10px] border-[1.5px] border-black uppercase px-4 py-3 text-4xl font-bold leading-none text-[#082FF2]">
                    {book.autor}
                  </span>
                </div>

                <div className="top-[120%] flex flex-row gap-2">
                  <span className="w-fit rounded-[10px] border-[1.5px] px-3 py-2 text-m font-extralight uppercase leading-none tracking-wider text-[#121417]">
                    Año de publicación
                  </span>
                  <span className="w-fit rounded-[10px] border-[1.5px] px-3 py-2 text-xl font-bold leading-none border-black text-[#082FF2]">
                    {book.anio || "—"}
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="max-w-[35vw] text-2xl leading-relaxed font-light text-[#121417]">
                    {book.descripcion ||
                      "No existe descripción para este libro."}
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col gap-5">
                <div className="relative left-[20%] flex flex-col gap-3 w-[20vw]">
                  <span className="relative left-[50%] block w-fit whitespace-nowrap overflow-hidden text-ellipsis rounded-[10px] border-[1.5px] px-[9px] py-2 text-sm font-light uppercase tracking-wider text-[#121417]">
                    Título de la obra
                  </span>
                  <h1 className="block w-full uppercase text-5xl font-semibold leading-tight text-[#082FF2] min-h-[50vh] text-right">
                    {book.nombre}
                  </h1>
                </div>

                <div className="relative">
                  {generos.length > 0 && (
                    <div className="relative left-[85%] w-fit flex flex-wrap border-[1.5px] rounded-[8px] px-1 py-0.9 w-[5.5vw] gap-3">
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
        </div>
      </main>
    </div>
  );
};
