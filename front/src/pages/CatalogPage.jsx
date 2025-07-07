import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import ButtonFilter from "../components/ButtonFilter";
import BookGrid from "../components/BookGrid";
import { getCatalog } from "../services/catalog";

export const CatalogPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const data = await getCatalog();
        // Extraer las URLs de las portadas de los libros
        const bookImages = data.map(book => book.portada_url);
        setBooks(bookImages);
      } catch (err) {
        setError(err.message);
        console.error("Error al obtener el catálogo:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return (
      <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <Header />
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div className="flex items-center justify-center h-64">
                <p className="text-gray-600">Cargando catálogo...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <Header />
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div className="flex items-center justify-center h-64">
                <p className="text-red-600">Error: {error}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <h2 className="text-[#111418] text-[28px] font-bold px-4 text-left pb-3 pt-5">
              Explora nuestra colección
            </h2>
            <div className="flex gap-3 p-3 flex-wrap pr-4">
              {["Género", "Autor", "Popularidad"].map((label) => (
                <ButtonFilter key={label} label={label} />
              ))}
            </div>
            <BookGrid bookImages={books} />
          </div>
        </div>
      </div>
    </div>
  );
};
