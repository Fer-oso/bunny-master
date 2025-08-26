import { useEffect, useState } from "react";

import bunnyImage from "/img/bunny-mascota.svg";
import { useTypingEffect } from "../hooks/useTypingEffect";

const span1 = "Transformamos ideas en";
const span2 = "resultados digitales reales";

export const Hero = () => {
  const [display1, display2, active1, active2] = useTypingEffect(span1, span2);

  return (
    <div className="mx-auto flex flex-col lg:flex-row items-center h-[650px] md:min-h-screen px-2 xl:px-0">
      <div className="w-full lg:w-3/4 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
        <div className="flex items-center space-x-2 text-xs sm:text-base md:text-lg lg:text-xl text-primary mt-2 lg:mt-0 px-1">
          <i className="fi fi-rs-display-code"></i>
          <strong className="uppercase tracking-wide font-semibold">
            Bunny creations world
          </strong>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
          <span
            className="bg-gradient-to-r from-[#ffb8b8] via-[#ffb8b8] to-[#ffb8b8] bg-clip-text text-transparent pr-1"
            style={{ borderRight: active1 ? "2px solid currentColor" : "none" }}
          >
            {display1}
          </span>{" "}
          <span
            className="bg-gradient-to-r from-[#46d5e7]/80 via-[#46d5e7]/80 to-[#46d5e7]/80 bg-clip-text text-transparent pr-1"
            style={{ borderRight: active2 ? "2px solid currentColor" : "none" }}
          >
            {display2}
          </span>
        </h2>

        <div className="w-full md:w-5/6 text-left text-lg space-y-4 mb-12 ">
          <p className="mt-6 text-sm sm:text-base md:text-lg text-slate-600 text-primary-color font-medium max-w-2xl leading-relaxed">
            En Bunny, soluciones ágiles, efectivas y pensadas 100% para tu
            negocio. Sabemos que hoy no basta con estar en internet: hay que
            destacarse. Y ahí entramos nosotros.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <img
          src={bunnyImage}
          alt="Bunny Mascota"
          className="w-72 md:w-[400px] lg:w-full"
        />
      </div>
    </div>
  );
};
