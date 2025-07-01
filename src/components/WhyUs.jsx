import React from "react";

export const WhyUs = () => {
  return (
    <section class="w-full bg-[#23191A] text-white font-montserrat py-20 px-4">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-12">
          ¿Por qué contratarnos?
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          <div class="flex flex-col items-center text-center">
            <div class="bg-[#37292A] rounded-full p-6 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 text-pink-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 10h4l3-3 4 4 3-3 4 4M4 20h16M4 16h16"
                />
              </svg>
            </div>
            <h3 class="text-lg font-bold mb-1 text-white">RED AMPLIA</h3>
            <p class="text-sm text-gray-300">
              Te atendemos sin importar donde te encuentres.
            </p>
          </div>

          <div class="flex flex-col items-center text-center">
            <div class="bg-[#37292A] rounded-full p-6 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 text-pink-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 class="text-lg font-bold mb-1 text-white">
              ATENCIÓN INIGUALABLE
            </h3>
            <p class="text-sm text-gray-300">
              Asistencia virtual. Hablá con nosotros sobre cualquier inquietud,
              24/7.
            </p>
          </div>

          <div class="flex flex-col items-center text-center">
            <div class="bg-[#37292A] rounded-full p-6 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 text-pink-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.75 3v18m4.5-18v18M3 9.75h18m-18 4.5h18"
                />
              </svg>
            </div>
            <h3 class="text-lg font-bold mb-1 text-white">
              UNA IU FÁCIL Y APTA PARA PRINCIPIANTES
            </h3>
            <p class="text-sm text-gray-300">
              Nuestra interfaz es sencilla y fácil de usar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
