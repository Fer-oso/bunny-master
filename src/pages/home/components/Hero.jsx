import bunnyImage from '/img/bunny-mascota.svg';

export const Hero = () => {
  return (

    <div className="mx-auto relative 2xl:min-h-[900px] mt-17 min-h-screen">

      <div className="absolute inset-0 overflow-hidden pointer-events-none" >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 lg:bg-amber-200/20 rounded-full blur-3xl :bg-amber-200/0" />
        <div className="absolute top-1/2 right-0 w-64 h-32 bg-purple-200/15 rounded-full blur-3xl transform translate-x-1/2" />
      </div>

      <div className=" flex flex-col lg:flex-row items-center px-3 xl:px-0  lg:py-0 xl:py-10  2xl:py-40">

        <div className="w-full lg:w-3/4 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">

          <div className="flex items-center space-x-2 text-xs sm:text-base md:text-lg lg:text-xl text-primary ">
            <i className="fi fi-rs-display-code"></i>
            <strong className="uppercase tracking-wide font-semibold">
              Bunny creations world
            </strong>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-[#ff66c4] to-[#46d5e7] 
                             bg-clip-text text-transparent">
              Transformamos ideas en resultados digitales reales
            </span>
          </h2>

          <p className="mt-6 text-sm sm:text-base md:text-lg text-slate-600  font-medium max-w-2xl leading-relaxed ">
            En Bunny, soluciones ágiles, efectivas y pensadas 100% para tu negocio. Sabemos que hoy no basta con estar en internet: hay que destacarse. Y ahí entramos nosotros.
          </p>

        </div>

        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
          <img src={bunnyImage} alt="Bunny Mascot" className="lg:w-full object-contain w-92" />
        </div>
      </div>
    </div>

  );
}
