import { Link } from "react-router-dom";
import imagenCuento from "../assets/imagenCuento.png";

export const ArchivoCuentoPage = () => {
  return (
    <main className="bg-white text-black min-h-screen">
      <header className="relative w-full border-b border-black flex justify-between items-center px-8 py-4">
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-4xl font-bold">
          <span className="font-cinzel text-5xl">THE</span> Archivo
        </h1>

        <nav className="absolute top-18 left-1/2 transform -translate-x-1/2 flex items-center gap-8 text-md font-semibold uppercase tracking-wide">
          <a href="/archivo/convocatoria" className="hover:underline font-ibm">
            Convocatorias
          </a>
          <a href="/archivo/cuento" className="hover:underline font-ibm">
            Antologías
          </a>
        </nav>

        <Link to="/">
          <div className="w-8 h-8 flex items-center justify-center cursor-pointer transition">
            <svg
              width="57"
              height="69"
              viewBox="0 0 57 69"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75469 68.1064C2.79844 68.1064 1.96875 67.7549 1.26563 67.0518C0.5625 66.3486 0.210938 65.519 0.210938 64.5627V55.7033C0.210938 50.6408 1.78594 46.1689 4.93594 42.2877C8.08594 38.4064 12.1359 35.9314 17.0859 34.8627C14.8359 36.4377 13.0922 38.4205 11.8547 40.8111C10.6172 43.2018 9.99844 45.7752 9.99844 48.5314V64.5627C9.99844 65.1814 10.0828 65.8002 10.2516 66.4189C10.4203 67.0377 10.7016 67.6002 11.0953 68.1064H3.75469ZM16.1578 68.1064C15.2016 68.1064 14.3719 67.7549 13.6688 67.0518C12.9656 66.3486 12.6141 65.519 12.6141 64.5627V48.5314C12.6141 44.5939 14.0063 41.2471 16.7906 38.4908C19.575 35.7346 22.9359 34.3564 26.8734 34.3564H42.8203C46.7578 34.3564 50.1047 35.7346 52.8609 38.4908C55.6172 41.2471 56.9953 44.5939 56.9953 48.5314V53.9314C56.9953 57.8689 55.6172 61.2158 52.8609 63.9721C50.1047 66.7283 46.7578 68.1064 42.8203 68.1064H16.1578ZM28.6453 27.2689C24.9328 27.2689 21.7828 25.9752 19.1953 23.3877C16.6078 20.8002 15.3141 17.6502 15.3141 13.9377C15.3141 10.2252 16.6078 7.0752 19.1953 4.4877C21.7828 1.9002 24.9328 0.606445 28.6453 0.606445C32.3578 0.606445 35.5078 1.9002 38.0953 4.4877C40.6828 7.0752 41.9766 10.2252 41.9766 13.9377C41.9766 17.6502 40.6828 20.8002 38.0953 23.3877C35.5078 25.9752 32.3578 27.2689 28.6453 27.2689Z"
                fill="#1C1B1F"
              />
            </svg>
          </div>
        </Link>
      </header>

      <section className="flex flex-col md:flex-row w-full min-h-screen px-8 py-10 md:px-16 md:py-12">
        <div className="flex-1 flex justify-center items-center mb-8 md:mb-0">
          <div className="items-center justify-center absolute left-[5%] top-[17%]">
            <img
              src={imagenCuento} // reemplaza por la ruta correcta
              alt="Portada The Archivo"
              className="w-98 h-auto shadow-lg border-4 border-black"
            />
          </div>
        </div>

        <div className="absolute left-[33%] top-[21%] flex-1 max-w-[800px] md:pl-12 text-left">
          <h3 className="text-3xl font-thin italic font-ibm text-gray-500 mb-2">
            Por JB
          </h3>
          <h2 className="text-4xl font-ibm italic font-semibold mb-4">
            ESTACIÓN GARDENIAS...
          </h2>
          <p className="text-justify leading-relaxed text-lg md:text-xl mb-8 font-ibm font-light">
            Vestido frente a la multitud de traje y corbata, con zapatos de mil
            alzas, se encontraba él, frente a la línea amarilla de la estación.
            Una reliquia de la era del tango caminando sobre la monotonía de lo
            moderno. ¿Quizás se perdía en el tiempo? Me pregunté cuando su
            curiosidad me atrajo. Quise saber sus aventuras, amores y sueños
            favoritos. Su sombrero clásico ocultaba su mirada y la revestía con
            un misticismo propio de una cantina en la oscuridad. Me sentí más
            cerca de Gardel, del viejo Medellín... y lo perdí entre estaciones o
            quizá entre otras sombras del maestro.
          </p>

          <Link to="/archivo/menu">
            <button className="border border-black rounded-lg px-4 py-2 text-lg font-semibold hover:bg-black hover:text-white transition-colors cursor-pointer">
              REGRESAR
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};
