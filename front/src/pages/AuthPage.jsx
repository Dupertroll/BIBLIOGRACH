// AuthPage.jsx (todo en un solo archivo, con SVGs completos)

import React from "react";
import { Link } from "react-router";
import Header from "../components/Header/Header";
import imagenTrompeta from "../assets/imagenTrompeta.png";

export const AuthPage = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Navbar */}
      <Header />
      {/* Main grid */}
      <main className="flex-grow grid grid-cols-1 lg:grid-cols-2 bg-gray-300">
        {/* --- Bloque informativo --- */}
        <section className="p-6 lg:p-12 overflow-y-auto">
          <img
            src={imagenTrompeta}
            alt="Imagen de trompeta"
            className="absolute z-0 top-[10%] left-[00%] w-[45vw] h-[90vh]"
          />
        </section>

        {/* --- Formulario Login --- */}
        <section className="p-6 lg:p-1 flex flex-col items-center overflow-y-auto left-[50%] absolute w-[45%]">
          {/* Ícono de usuario */}
          <svg
            width="131"
            height="131"
            viewBox="0 0 131 131"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_173_7"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="131"
              height="131"
            >
              <rect width="131" height="131" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_173_7)">
              <path
                d="M25.2444 120.083C23.6979 120.083 22.3561 119.515 21.2189 118.378C20.0818 117.24 19.5132 115.899 19.5132 114.352V100.024C19.5132 91.8364 22.0604 84.6041 27.1549 78.327C32.2493 72.05 38.7993 68.0472 46.8049 66.3187C43.166 68.8659 40.3458 72.0727 38.3444 75.939C36.343 79.8053 35.3424 83.9673 35.3424 88.425V114.352C35.3424 115.353 35.4788 116.353 35.7517 117.354C36.0246 118.355 36.4795 119.265 37.1163 120.083H25.2444ZM45.3038 120.083C43.7573 120.083 42.4154 119.515 41.2783 118.378C40.1411 117.24 39.5726 115.899 39.5726 114.352V88.425C39.5726 82.0569 41.8241 76.6441 46.3272 72.1864C50.8304 67.7288 56.266 65.5 62.634 65.5H88.4246C94.7927 65.5 100.206 67.7288 104.663 72.1864C109.121 76.6441 111.35 82.0569 111.35 88.425V97.1583C111.35 103.526 109.121 108.939 104.663 113.397C100.206 117.854 94.7927 120.083 88.4246 120.083H45.3038ZM65.4996 54.0375C59.4955 54.0375 54.401 51.9451 50.2163 47.7604C46.0316 43.5757 43.9392 38.4812 43.9392 32.477C43.9392 26.4729 46.0316 21.3784 50.2163 17.1937C54.401 13.009 59.4955 10.9166 65.4996 10.9166C71.5038 10.9166 76.5983 13.009 80.783 17.1937C84.9677 21.3784 87.0601 26.4729 87.0601 32.477C87.0601 38.4812 84.9677 43.5757 80.783 47.7604C76.5983 51.9451 71.5038 54.0375 65.4996 54.0375Z"
                fill="#1C1B1F"
              />
            </g>
          </svg>

          <h3 className="text-xl lg:text-2xl text-center font-light mb-6 font-ibm">
            ¡BIENVENIDO DE NUEVO! INGRESE LOS
            <br className="hidden lg:block" /> SIGUIENTES DATOS DE TU CUENTA
          </h3>

          <form className="w-full max-w-md">
            {/* Email */}
            <label
              htmlFor="email"
              className="block mb-2 text-base lg:text-lg font-bold tracking-wide font-ibm"
            >
              EMAIL @
            </label>
            <input
              id="email"
              type="email"
              placeholder="CORREO ELECTRÓNICO..."
              className="w-[115%] mb-5 px-4 py-3 border border-black rounded focus:outline-none focus:ring-2 focus:ring-black font-ibm"
            />

            {/* Password */}
            <label
              htmlFor="password"
              className="inline-flex items-center text-base lg:text-lg font-bold tracking-wide font-ibm"
            >
              CONTRASEÑA
              {/* Candado SVG */}
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2"
              >
                <path
                  d="M0 24.037V19.8715C0 19.0285 0.216951 18.2537 0.650853 17.5471C1.08476 16.8404 1.66123 16.3011 2.38026 15.9292C3.91752 15.1606 5.47956 14.5841 7.06641 14.1998C8.65325 13.8155 10.2649 13.6234 11.9013 13.6234C12.3972 13.6234 12.8931 13.642 13.389 13.6791C13.8849 13.7163 14.3808 13.7721 14.8766 13.8465C14.7775 15.2846 15.0378 16.6421 15.6577 17.919C16.2775 19.1959 17.1825 20.2435 18.3727 21.0617V24.037H0ZM23.8026 28.5L21.5711 26.2685V19.3509C20.4802 19.0285 19.5876 18.4149 18.8933 17.5099C18.1991 16.6049 17.852 15.5573 17.852 14.3672C17.852 12.9291 18.3603 11.7018 19.3768 10.6852C20.3934 9.66865 21.6207 9.16036 23.0588 9.16036C24.4969 9.16036 25.7242 9.66865 26.7408 10.6852C27.7573 11.7018 28.2656 12.9291 28.2656 14.3672C28.2656 15.4829 27.9495 16.4747 27.3172 17.3425C26.685 18.2103 25.8854 18.8302 24.9184 19.2021L26.778 21.0617L24.5465 23.2932L26.778 25.5247L23.8026 28.5ZM11.9013 12.1357C10.2649 12.1357 8.864 11.553 7.69866 10.3877C6.53333 9.22235 5.95066 7.82146 5.95066 6.18503C5.95066 4.5486 6.53333 3.14772 7.69866 1.98238C8.864 0.817044 10.2649 0.234375 11.9013 0.234375C13.5377 0.234375 14.9386 0.817044 16.104 1.98238C17.2693 3.14772 17.852 4.5486 17.852 6.18503C17.852 7.82146 17.2693 9.22235 16.104 10.3877C14.9386 11.553 13.5377 12.1357 11.9013 12.1357ZM23.0588 15.111C23.4803 15.111 23.8336 14.9685 24.1188 14.6833C24.4039 14.3982 24.5465 14.0449 24.5465 13.6234C24.5465 13.2018 24.4039 12.8485 24.1188 12.5634C23.8336 12.2783 23.4803 12.1357 23.0588 12.1357C22.6373 12.1357 22.284 12.2783 21.9988 12.5634C21.7137 12.8485 21.5711 13.2018 21.5711 13.6234C21.5711 14.0449 21.7137 14.3982 21.9988 14.6833C22.284 14.9685 22.6373 15.111 23.0588 15.111Z"
                  fill="#1C1B1F"
                />
              </svg>
            </label>
            <input
              id="password"
              type="password"
              placeholder="********"
              className="w-[115%] mb-5 px-4 py-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-black"
            />

            {/* Info extra */}
            <p className="font-ibm font-light mb-6 text-center text-m leading-snug">
              ¿Aún no tienes una cuenta en{" "}
              <span className="font-bold">BIBLIOGRACH</span>? <br />
              ¡No pierdas tiempo y regístrate aquí!
            </p>

            {/* Botones */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <button
                type="button"
                className="font-ibm cursor-pointer flex items-center justify-center px-6 py-2 border-2 border-black rounded-[10px] text-[120%] font-bold tracking-wider hover:bg-black hover:text-white transition-colors"
              >
                REGISTRARSE
                {/* Spinner SVG */}
                <span className="ml-2">
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="43"
                      height="43"
                      rx="12.5"
                      fill="#D9D9D9"
                    />
                    <rect
                      x="0.5"
                      y="0.5"
                      width="43"
                      height="43"
                      rx="12.5"
                      stroke="black"
                    />
                    <path
                      d="M7.33325 22V18.3333H12.8333V22H7.33325ZM13.5666 32.175L10.9999 29.5167L14.8499 25.6667L17.5083 28.2333L13.5666 32.175ZM14.8499 14.6667L10.9999 10.8167L13.5666 8.15833L17.5083 12.1L14.8499 14.6667ZM36.6666 36.6667L27.9583 27.9583L25.6666 34.8333L20.1666 16.5L38.4999 22L31.7166 24.3833L40.3333 33L36.6666 36.6667ZM21.9999 11V5.5H25.6666V11H21.9999ZM32.8166 14.6667L30.1583 12.1L34.0999 8.15833L36.6666 10.725L32.8166 14.6667Z"
                      fill="#1C1B1F"
                    />
                  </svg>
                </span>
              </button>

              <button
                type="submit"
                className="font-ibm flex items-center justify-center px-6 py-3 border-2 border-black rounded-[10px] text-[130%] font-bold tracking-wide hover:bg-black hover:text-white transition-colors whitespace-nowrap"
              >
                {/* Flecha SVG */}
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"
                >
                  <rect
                    x="0.685444"
                    y="0.991841"
                    width="37.5968"
                    height="37.5968"
                    rx="13.1532"
                    fill="white"
                    fillOpacity="0.31"
                  />
                  <rect
                    x="0.685444"
                    y="0.991841"
                    width="37.5968"
                    height="37.5968"
                    rx="13.1532"
                    stroke="black"
                    strokeWidth="0.790323"
                  />
                  <path
                    d="M22.871 27.6934L21.2622 26.1128L26.4557 20.9192H8.1936V18.6612H26.4557L21.2904 13.4676L22.871 11.887L30.7742 19.7902L22.871 27.6934Z"
                    fill="#1C1B1F"
                  />
                </svg>
                BIENVENIDO
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};
