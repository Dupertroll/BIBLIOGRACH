import Header from "../components/Header/Header";
import ButtonFilter from "../components/ButtonFilter";
import imagenMirando from "../assets/imagenMirando.png";
import imagenLeyendo from "../assets/imagenLeyendo.png";
import BookGrid from "../components/BookGrid";
import { useCatalog } from "../hooks/useCatalog";

export const CatalogPage = () => {
  const { books, loading, error } = useCatalog();

  /* ------------------------- ESTADOS UX ------------------------- */
  if (loading) {
    return (
      <div className="relative flex min-h-screen flex-col bg-white">
        <Header />
        <main className="flex flex-1 items-center justify-center">
          <p className="text-gray-600">Cargando catálogo…</p>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative flex min-h-screen flex-col bg-white">
        <Header />
        <main className="flex flex-1 items-center justify-center">
          <p className="text-red-600">Error: {error}</p>
        </main>
      </div>
    );
  }

  /* ----------------------------- UI ----------------------------- */
  return (
    <div className="relative flex min-h-screen flex-col bg-white">
      <Header />

      {/* ───── HERO (idéntico al mock-up) ───── */}
      <section className="border-x border-[#e5e5e5] border-t-4 border-b-4 border-t-[#ff7a00] border-b-[#ff7a00]">
        <div className="mx-0.5 grid max-w-[1040px] gap-6 px-6 py-6 md:grid-cols-2">
          {/* Imágenes */}
          <div className="flex flex-row gap-3">
            <img
              src={imagenLeyendo}
              alt="Virginia Woolf leyendo"
              className="w-[60vw] h-[70vh] object-cover"
            />
            <img
              src={imagenMirando}
              alt="Virginia Woolf retrato"
              className="w-[40vw] h-[55vh] object-cover"
            />
          </div>

          {/* Texto */}
          <div className="flex flex-col justify-center pr-3">
            <h1 className="relative top-[0%] left-[59%] text-4xl md:text-7xl leading-tight text-[#111418]">
              No se puede <br /> encontrar la paz
            </h1>

            <a
              href="#"
              className="relative top-[3%] left-[59%] mt-2 text-4xl md:text-7xl text-[#3B6FF2] font-light"
            >
              Evitando La Vida
            </a>

            <svg
              className="relative top-[5%] left-[58%]"
              width="423"
              height="22"
              viewBox="0 0 473 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M207.674 17.5271C204.411 17.208 201.269 17.3489 198.237 17.6649C191.492 18.3431 184.79 19.8455 175.974 19.0132C163.051 17.6488 161.357 15.6948 146.525 14.0396C141.811 13.4686 137.046 12.3518 133.062 11.6351C124.418 10.4966 115.95 9.7308 111.584 10.0633C105.114 10.6056 104.515 8.04795 95.2897 8.30419C86.0337 8.58296 80.528 8.14588 72.4511 7.21085C65.3733 6.36004 45.2313 5.6707 34.4004 6.38652L34.436 6.38573C32.974 6.50693 31.7104 6.64906 30.6689 6.80988C22.5361 8.07587 13.4059 7.21567 7.26954 8.29826C6.62961 8.38434 6.02269 8.45244 5.44547 8.50823C3.45696 8.70253 1.88522 8.54746 0.721844 8.37084C0.226945 8.29488 0.000401647 8.13117 0 7.9707C0 7.9706 0 7.97049 0 7.97039C-4.53433e-05 7.76987 0.354209 7.57534 0.981939 7.54553C2.60937 7.47617 4.62535 7.22065 6.86375 6.49011C8.821 5.82321 11.1765 5.0703 13.6815 4.4155C22.5933 2.2151 24.5727 3.25397 34.3147 2.64728C34.323 2.64724 34.3479 2.64623 34.3563 2.64636C35.6679 2.60158 37.1108 2.53464 38.7123 2.43821C52.3835 1.64067 60.6424 0.245325 76.7193 1.38628C92.8196 2.62433 96.6326 -1.16995 119.325 2.12091C125.444 3.05989 129.943 3.45996 134.215 3.87285C145.278 5.49703 150.608 4.61352 166.847 5.52796C176.744 6.06714 187.917 6.79211 198.435 7.38448C211.482 8.11408 223.619 8.83421 231.133 8.80487C244.764 8.748 263.06 8.40117 282.387 9.06577C296.263 9.55049 312.509 9.0973 328.459 9.40453C334.794 9.53251 340.999 9.799 347.076 10.3535C354.814 10.9401 364.449 12.5336 372.599 13.4907C387.54 14.5026 402.974 13.0549 411.713 12.45C425.561 11.3289 428.966 10.9234 442.06 8.16209C449.597 6.55097 460.036 4.82236 469.024 4.01951C473.554 3.61213 472.683 4.51822 468.307 5.75518C461.888 7.56318 456.474 8.26596 453.258 9.77524C446.851 12.7766 444.102 13.9809 435.363 14.4236C426.668 14.8346 422.962 17.7506 417.904 18.2087C412.799 18.4977 412.894 17.806 387.156 20.9424C381.807 21.4896 376.868 21.8026 372.32 21.8112C354.875 20.6843 345.342 20.45 337.562 20.4204C335.084 20.4072 331.884 20.2886 328.238 20.1387C317.845 19.7072 303.676 18.9819 291.976 19.203C276.18 19.496 244.076 18.9051 231.111 19.4906C218.159 20.0784 218.126 18.532 207.674 17.5271Z"
                fill="black"
              />
            </svg>
            <button
              type="button"
              className="relative top-[15%] left-[59%] w-[28vw] cursor-pointer flex items-center justify-center px-3 py-2 border-2 border-black rounded-[10px] text-[110%] font-normal tracking-wider hover:bg-black hover:text-white transition-colors"
            >
              BIENVENIDO A NUESTRO UNIVERSO LITERARIO
            </button>
            <button
              type="button"
              className="relative top-[4.5%] left-[140%] w-[4vw] cursor-pointer flex items-center justify-center px-3.5 py-2.5 border-2 border-black rounded-[10px] text-[110%] font-normal tracking-wider hover:bg-black hover:text-white transition-colors"
            >
              <svg
                width="16"
                height="22"
                viewBox="0 0 16 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.721699 14.1856L2.16798 12.6867L7.00721 17.4396L6.85535 0.575228L8.94059 0.556451L9.09244 17.4208L13.8455 12.6076L15.3183 14.0541L8.08573 21.4182L0.721699 14.1856Z"
                  fill="#1C1B1F"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ───── Filtros + Título ───── */}
      <section className="mx-auto max-w-[1040px] px-6 pt-10">
        <h2 className="pb-4 text-2xl font-medium text-[#111418] font-bebas">
          Explora nuestra colección
        </h2>
        <div className="flex flex-wrap gap-3">
          {["Género", "Autor", "Popularidad"].map((l) => (
            <ButtonFilter key={l} label={l} />
          ))}
        </div>
      </section>

      {/* ───── Grid de libros ───── */}
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[100vw] flex-1">
          <BookGrid books={books} />
        </div>
      </div>
    </div>
  );
};
