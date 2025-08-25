import bunnyImage from "/img/bunny-mascota.svg";
//import bunnyImage from "/img/bunnymascota/bunny-pet-2.png";

export const Hero = () => {
  return (
    <>
      <div className=" mx-auto flex flex-col lg:flex-row items-center min-h-screen px-2 lg:px-0">
        <div className=" w-full lg:w-3/4 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <div className="flex items-center space-x-2 text-xs sm:text-base md:text-lg lg:text-xl text-primary mt-2 lg:mt-0 px-1">
            <i className="fi fi-rs-display-code"></i>
            <strong className="uppercase tracking-wide font-semibold ">
              Bunny creations world
            </strong>
          </div>

          <h2 className="text-4xl sm:text-5xl  lg:text-6xl font-bold leading-tight tracking-tight">
            <span
              className="bg-gradient-to-r from-[#ffb8b8] via-[#ffb8b8]/90 to-[#ffb8b8]/80
                             bg-clip-text text-transparent"
            >
              Transformamos ideas en
            </span>
            <span> </span>
            <span
              className="bg-gradient-to-r from-[#46d5e7]/70 via-[#46d5e7]/80 to-[#46d5e7]
                             bg-clip-text text-transparent"
            >
              resultados digitales reales
            </span>
          </h2>

          <div className="w-full md:w-5/6 text-left text-lg space-y-4 mb-12 ">
            <p className="mt-6 text-sm sm:text-base md:text-lg text-slate-600 text-primary-color font-medium max-w-2xl leading-relaxed ">
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
            className=" "
          />
        </div>
      </div>
    </>
  );
};
