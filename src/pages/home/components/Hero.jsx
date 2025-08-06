import bunnyImage from '/img/bunny-mascota.svg';

export const Hero = () => { 
  return (
    <div className="mx-auto mt-40 lg:mt-17 py-3 relative min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 lg:py-0  px-4 sm:px-6 lg:px-8">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-purple-200/15 rounded-full blur-3xl transform translate-x-1/2" />
      </div>
<div className="container flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-3/4 flex flex-col justify-center items-center lg:items-start text-center lg:text-left -mt-20">

          <div className="flex items-center space-x-2 text-xs sm:text-base md:text-lg lg:text-xl text-primary ">
            <i className="fi fi-rs-display-code"></i>
            <strong className="uppercase  tracking-wide font-semibold">
            Bunny creations world
          </strong>
          </div>
   
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
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
          <img src={bunnyImage} alt="Bunny Mascot" className="w-64 h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px] object-contain" />
        </div>
      </div>
    </div>
  );
}
