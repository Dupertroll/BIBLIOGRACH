import Header from "../components/Header/Header";
import { Link, useParams } from "react-router";
import { useCatalog } from "../hooks/useCatalog";
import { toast } from "sonner";

/**
 * Single‑file React component generated from the provided static HTML.
 * TailwindCSS utilities (including the `forms` and `container-queries` plugins)
 * must be loaded globally (e.g. in your main index.html or PostCSS config).
 * Google Fonts links and the <title> tag should also live in <head> of the host
 * HTML document.
 */
export const BookDescriptionPage = () => {
  const { id } = useParams();
  const { books } = useCatalog();
  const book = books.find((book) => book.id === parseInt(id));

  // Si el libro no existe, mostrar mensaje de error
  if (!book) {
    return (
      <div
        className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
        style={{ fontFamily: 'Newsreader, "Noto Sans", sans-serif' }}
      >
        <div className="layout-container flex h-full grow flex-col">
          <Header />
          <main className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
                <h1 className="text-[#121417] text-2xl font-bold mb-4">
                  Libro no encontrado
                </h1>
                <p className="text-[#677583] text-base">
                  El libro que buscas no existe en nuestro catálogo.
                </p>
                <Link
                  to="/catalog"
                  className="mt-6 px-6 py-3 bg-[#f1f2f4] text-[#121417] rounded-full font-medium hover:bg-[#e1e2e4] transition-colors"
                >
                  Volver al catálogo
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }

  const handlePrestar = () => {
    toast.success(`Se agregó "${book.nombre}" al carrito`);
  };

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Newsreader, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        {/* ---------- Main content ---------- */}
        <main className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Breadcrumbs */}
            <div className="flex flex-wrap gap-2 p-4">
              <Link
                className="text-[#677583] text-base font-medium leading-normal"
                to="/"
              >
                Libros
              </Link>
              <span className="text-[#677583] text-base font-medium leading-normal">
                /
              </span>
              <span className="text-[#121417] text-base font-medium leading-normal">
                {book.nombre}
              </span>
            </div>

            {/* Title & author */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#121417] tracking-light text-[32px] font-bold leading-tight">
                  {book.nombre}
                </p>
                <p className="text-[#677583] text-sm font-normal leading-normal">
                  Por {book.autor}
                </p>
              </div>
            </div>

            {/* Add to cart & cover */}
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-xl">
                {/* Left – actions */}
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <p className="text-[#121417] text-base leading-tight max-w-11/12">
                    {book.descripcion ||
                      "No existe descripción para este libro"}
                  </p>
                  <button
                    onClick={handlePrestar}
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#f1f2f4] text-[#121417] text-sm font-medium leading-normal w-fit"
                  >
                    <span className="truncate">Prestar libro</span>
                  </button>
                </div>
                {/* Right – book cover */}
                <div
                  className="w-full bg-center bg-no-repeat bg-cover rounded-xl flex-1 aspect-[3/4]"
                  style={{
                    backgroundImage: book.portada_url
                      ? `url("${book.portada_url}")`
                      : 'url("https://via.placeholder.com/300x400?text=Sin+Portada")',
                  }}
                />
              </div>
            </div>

            {/* Book details table */}
            <h3 className="text-[#121417] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Detalles del libro
            </h3>
            <div className="p-4 grid grid-cols-[1fr] gap-x-6">
              {[
                {
                  label: "Cantidad disponible",
                  value: book.cantidad?.toString() || "0",
                },
                {
                  label: "Año de publicación",
                  value: book.anio?.toString() || "No especificado",
                },
                {
                  label: "Editorial",
                  value: book.editorial || "No especificada",
                },
                { label: "Género", value: book.genero || "No especificado" },
                {
                  label: "Ubicación en estantería",
                  value: book.ubicacion || "No especificada",
                },
              ].map(({ label, value }, idx) => (
                <div key={idx}>
                  <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e4] py-5">
                    <p className="text-[#677583] text-sm font-normal leading-normal">
                      {label}
                    </p>
                    <p className="text-[#121417] text-sm font-normal leading-normal">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
