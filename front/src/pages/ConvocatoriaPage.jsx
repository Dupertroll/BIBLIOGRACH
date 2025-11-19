import { Link } from "react-router-dom";
export const ConvocatoriaPage = () => {
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
      <div className="absolute top-[22%] inset-0 flex justify-center items-center opacity-60 z-0">
        <svg
          width="1350"
          height="489"
          viewBox="0 0 1600 489"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="1209" y="108" width="448" height="672" fill="#082FF2" />
          <rect x="-140" y="274" width="480" height="546" fill="#082FF2" />
          <path d="M29.7289 191.954V1H160.718V191.954H29.7289Z" fill="white" />
          <path
            d="M-45.7562 264.487V43.9276H26.0286V195.655H164.418V43.9276H216.221V264.487H-45.7562Z"
            fill="white"
          />
          <path
            d="M124.455 340.72V270.408H219.922V25.4243H289.486V340.72H124.455Z"
            fill="white"
          />
          <path
            d="M383.473 284.47H294.667V63.9112H383.473V284.47Z"
            fill="white"
          />
          <path
            d="M347.21 1V56.5099H388.653V247.464H457.478V1H347.21Z"
            fill="white"
          />
          <path
            d="M181.439 451.74V346.641H294.667V291.132H388.653V254.125H421.215V451.74H181.439Z"
            fill="white"
          />
          <path
            d="M493 361.444H426.396V459.141H329.449V544.997H493V361.444Z"
            fill="white"
          />
          <path
            d="M476.719 732.99V552.398H321.308V459.141H254.704V732.99H476.719Z"
            fill="white"
          />
          <path
            d="M311.688 883.237V739.651H438.976V883.237H311.688Z"
            fill="white"
          />
          <path
            d="M248.784 459.141H197.72L196.98 862.513H305.027V739.651H248.784V459.141Z"
            fill="white"
          />
          <path
            d="M175.519 459.141H190.32V525.753H-62.0373V402.891H175.519V459.141Z"
            fill="white"
          />
          <path
            d="M-99.7799 211.938V396.23H175.519V346.641H116.315V270.408H-50.9366V211.938H-99.7799Z"
            fill="white"
          />
          <path d="M68.2114 901V698.204H190.32V901H68.2114Z" fill="white" />
          <path
            d="M190.32 690.062V532.414H-7.27363V749.273H60.8109V690.062H190.32Z"
            fill="white"
          />
          <path
            d="M60.8109 845.49V756.674H-13.194V602.727H-102V845.49H60.8109Z"
            fill="white"
          />
          <path
            d="M29.7289 191.954V1H160.718V191.954H29.7289Z"
            stroke="#082FF2"
          />
          <path
            d="M-45.7562 264.487V43.9276H26.0286V195.655H164.418V43.9276H216.221V264.487H-45.7562Z"
            stroke="#082FF2"
          />
          <path
            d="M124.455 340.72V270.408H219.922V25.4243H289.486V340.72H124.455Z"
            stroke="#082FF2"
          />
          <path
            d="M383.473 284.47H294.667V63.9112H383.473V284.47Z"
            stroke="#082FF2"
          />
          <path
            d="M347.21 1V56.5099H388.653V247.464H457.478V1H347.21Z"
            stroke="#082FF2"
          />
          <path
            d="M181.439 451.74V346.641H294.667V291.132H388.653V254.125H421.215V451.74H181.439Z"
            stroke="#082FF2"
          />
          <path
            d="M493 361.444H426.396V459.141H329.449V544.997H493V361.444Z"
            stroke="#082FF2"
          />
          <path
            d="M476.719 732.99V552.398H321.308V459.141H254.704V732.99H476.719Z"
            stroke="#082FF2"
          />
          <path
            d="M311.688 883.237V739.651H438.976V883.237H311.688Z"
            stroke="#082FF2"
          />
          <path
            d="M248.784 459.141H197.72L196.98 862.513H305.027V739.651H248.784V459.141Z"
            stroke="#082FF2"
          />
          <path
            d="M175.519 459.141H190.32V525.753H-62.0373V402.891H175.519V459.141Z"
            stroke="#082FF2"
          />
          <path
            d="M-99.7799 211.938V396.23H175.519V346.641H116.315V270.408H-50.9366V211.938H-99.7799Z"
            stroke="#082FF2"
          />
          <path d="M68.2114 901V698.204H190.32V901H68.2114Z" stroke="#082FF2" />
          <path
            d="M190.32 690.062V532.414H-7.27363V749.273H60.8109V690.062H190.32Z"
            stroke="#082FF2"
          />
          <path
            d="M60.8109 845.49V756.674H-13.194V602.727H-102V845.49H60.8109Z"
            stroke="#082FF2"
          />
          <rect x="539" y="352" width="606" height="468" fill="#082FF2" />
          <path d="M619.214 264.132V91H798.415V264.132H619.214Z" fill="white" />
          <path
            d="M515.945 329.895V129.921H614.152V267.487H803.478V129.921H874.348V329.895H515.945Z"
            fill="white"
          />
          <path
            d="M748.806 399.013V335.263H879.41V113.145H974.58V399.013H748.806Z"
            fill="white"
          />
          <path
            d="M1103.16 348.013H981.667V148.039H1103.16V348.013Z"
            fill="white"
          />
          <path
            d="M1053.55 91V141.329H1110.25V314.461H1204.4V91H1053.55Z"
            fill="white"
          />
          <path
            d="M826.764 499.671V404.382H981.667V354.053H1110.25V320.5H1154.79V499.671H826.764Z"
            fill="white"
          />
          <path
            d="M1253 417.803H1161.88V506.382H1029.25V584.224H1253V417.803Z"
            fill="white"
          />
          <path
            d="M1230.73 754.671V590.934H1018.11V506.382H926.995V754.671H1230.73Z"
            fill="white"
          />
          <path
            d="M1004.95 890.895V760.711H1179.09V890.895H1004.95Z"
            fill="white"
          />
          <path
            d="M918.895 506.382H849.037L848.025 872.105H995.841V760.711H918.895V506.382Z"
            fill="white"
          />
          <path
            d="M818.664 506.382H838.913V566.776H493.672V455.382H818.664V506.382Z"
            fill="white"
          />
          <path
            d="M442.037 282.25V449.342H818.664V404.382H737.669V335.263H508.858V282.25H442.037Z"
            fill="white"
          />
          <path
            d="M838.913 907H671.861V815.066V723.132H838.913V907Z"
            fill="white"
          />
          <path
            d="M838.913 715.75V572.816H568.592V769.434H661.736V715.75H838.913Z"
            fill="white"
          />
          <path
            d="M661.736 856.671V776.145H560.493V636.566H439V856.671H661.736Z"
            fill="white"
          />
          <path
            d="M619.214 264.132V91H798.415V264.132H619.214Z"
            stroke="#082FF2"
          />
          <path
            d="M515.945 329.895V129.921H614.152V267.487H803.478V129.921H874.348V329.895H515.945Z"
            stroke="#082FF2"
          />
          <path
            d="M748.806 399.013V335.263H879.41V113.145H974.58V399.013H748.806Z"
            stroke="#082FF2"
          />
          <path
            d="M1103.16 348.013H981.667V148.039H1103.16V348.013Z"
            stroke="#082FF2"
          />
          <path
            d="M1053.55 91V141.329H1110.25V314.461H1204.4V91H1053.55Z"
            stroke="#082FF2"
          />
          <path
            d="M826.764 499.671V404.382H981.667V354.053H1110.25V320.5H1154.79V499.671H826.764Z"
            stroke="#082FF2"
          />
          <path
            d="M1253 417.803H1161.88V506.382H1029.25V584.224H1253V417.803Z"
            stroke="#082FF2"
          />
          <path
            d="M1230.73 754.671V590.934H1018.11V506.382H926.995V754.671H1230.73Z"
            stroke="#082FF2"
          />
          <path
            d="M1004.95 890.895V760.711H1179.09V890.895H1004.95Z"
            stroke="#082FF2"
          />
          <path
            d="M918.895 506.382H849.037L848.025 872.105H995.841V760.711H918.895V506.382Z"
            stroke="#082FF2"
          />
          <path
            d="M818.664 506.382H838.913V566.776H493.672V455.382H818.664V506.382Z"
            stroke="#082FF2"
          />
          <path
            d="M442.037 282.25V449.342H818.664V404.382H737.669V335.263H508.858V282.25H442.037Z"
            stroke="#082FF2"
          />
          <path
            d="M838.913 907H671.861V815.066V723.132H838.913V907Z"
            stroke="#082FF2"
          />
          <path
            d="M838.913 715.75V572.816H568.592V769.434H661.736V715.75H838.913Z"
            stroke="#082FF2"
          />
          <path
            d="M661.736 856.671V776.145H560.493V636.566H439V856.671H661.736Z"
            stroke="#082FF2"
          />
          <path d="M1276.73 191.954V1H1407.72V191.954H1276.73Z" fill="white" />
          <path
            d="M1201.24 264.487V43.9276H1273.03V195.655H1411.42V43.9276H1463.22V264.487H1201.24Z"
            fill="white"
          />
          <path
            d="M1371.46 340.72V270.408H1466.92V25.4243H1536.49V340.72H1371.46Z"
            fill="white"
          />
          <path
            d="M1630.47 284.47H1541.67V63.9112H1630.47V284.47Z"
            fill="white"
          />
          <path
            d="M1594.21 1V56.5099H1635.65V247.464H1704.48V1H1594.21Z"
            fill="white"
          />
          <path
            d="M1428.44 451.74V346.641H1541.67V291.132H1635.65V254.125H1668.22V451.74H1428.44Z"
            fill="white"
          />
          <path
            d="M1740 361.444H1673.4V459.141H1576.45V544.997H1740V361.444Z"
            fill="white"
          />
          <path
            d="M1723.72 732.99V552.398H1568.31V459.141H1501.7V732.99H1723.72Z"
            fill="white"
          />
          <path
            d="M1558.69 883.237V739.651H1685.98V883.237H1558.69Z"
            fill="white"
          />
          <path
            d="M1495.78 459.141H1444.72L1443.98 862.513H1552.03V739.651H1495.78V459.141Z"
            fill="white"
          />
          <path
            d="M1422.52 459.141H1437.32V525.753H1184.96V402.891H1422.52V459.141Z"
            fill="white"
          />
          <path
            d="M1147.22 211.938V396.23H1422.52V346.641H1363.31V270.408H1196.06V211.938H1147.22Z"
            fill="white"
          />
          <path d="M1315.21 901V698.204H1437.32V901H1315.21Z" fill="white" />
          <path
            d="M1437.32 690.062V532.414H1239.73V749.273H1307.81V690.062H1437.32Z"
            fill="white"
          />
          <path
            d="M1307.81 845.49V756.674H1233.81V602.727H1145V845.49H1307.81Z"
            fill="white"
          />
          <path
            d="M1276.73 191.954V1H1407.72V191.954H1276.73Z"
            stroke="#082FF2"
          />
          <path
            d="M1201.24 264.487V43.9276H1273.03V195.655H1411.42V43.9276H1463.22V264.487H1201.24Z"
            stroke="#082FF2"
          />
          <path
            d="M1371.46 340.72V270.408H1466.92V25.4243H1536.49V340.72H1371.46Z"
            stroke="#082FF2"
          />
          <path
            d="M1630.47 284.47H1541.67V63.9112H1630.47V284.47Z"
            stroke="#082FF2"
          />
          <path
            d="M1594.21 1V56.5099H1635.65V247.464H1704.48V1H1594.21Z"
            stroke="#082FF2"
          />
          <path
            d="M1428.44 451.74V346.641H1541.67V291.132H1635.65V254.125H1668.22V451.74H1428.44Z"
            stroke="#082FF2"
          />
          <path
            d="M1740 361.444H1673.4V459.141H1576.45V544.997H1740V361.444Z"
            stroke="#082FF2"
          />
          <path
            d="M1723.72 732.99V552.398H1568.31V459.141H1501.7V732.99H1723.72Z"
            stroke="#082FF2"
          />
          <path
            d="M1558.69 883.237V739.651H1685.98V883.237H1558.69Z"
            stroke="#082FF2"
          />
          <path
            d="M1495.78 459.141H1444.72L1443.98 862.513H1552.03V739.651H1495.78V459.141Z"
            stroke="#082FF2"
          />
          <path
            d="M1422.52 459.141H1437.32V525.753H1184.96V402.891H1422.52V459.141Z"
            stroke="#082FF2"
          />
          <path
            d="M1147.22 211.938V396.23H1422.52V346.641H1363.31V270.408H1196.06V211.938H1147.22Z"
            stroke="#082FF2"
          />
          <path
            d="M1315.21 901V698.204H1437.32V901H1315.21Z"
            stroke="#082FF2"
          />
          <path
            d="M1437.32 690.062V532.414H1239.73V749.273H1307.81V690.062H1437.32Z"
            stroke="#082FF2"
          />
          <path
            d="M1307.81 845.49V756.674H1233.81V602.727H1145V845.49H1307.81Z"
            stroke="#082FF2"
          />
        </svg>
      </div>

      <section className="absolute left-[27%] top-[18%] z-10 flex flex-col items-center max-w-2xl px-6 text-center">
        <h2 className="text-4xl font-bold mb-2 font-ibm">
          ¿Y Aquí Nadie Escribe?
        </h2>
        <p className="text-xl italic text-gray-700 mb-8 font-ibm w-[180%]">
          LA LIBERTAD ES… EL DERECHO A ESCRIBIR LAS PALABRAS EQUIVOCADAS.
          <br />
          <span className="font-medium">— Patti Smith</span>
        </p>

        <div className="border border-black rounded-lg pb-22 pt-15 pl-25 pr-25 bg-white bg-opacity-90 shadow-sm mb-6 text-left">
          <p className="text-lg leading-relaxed font-ibm font-medium">
            CUENTAME ALTO <br />
            A TRAVÉS DE PALABRAS QUE LO DESCRIBAN <br />
            CUÉNTAME ALGO TEJIDO CON LETRAS ENTRE VERSOS. <br />
            CUÉNTAME ALGO QUE ME HAGA SALTAR LA COMA. <br />
            CUÉNTAME ALGO.
          </p>
          <button className=" font-ibm absolute rounded-lg top-[80%] left-[70%] border border-black px-6 py-2 uppercase text-sm font-semibold hover:bg-black hover:text-white transition-all">
            Enviar texto
          </button>
        </div>
      </section>
    </main>
  );
};
