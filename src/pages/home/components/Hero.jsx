import bunnyImage from '/img/bunny-mascota.svg';

export const Hero = () => { 
  return (
    <section className="w-full">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-3/4 flex flex-col justify-center items-center lg:items-start text-center lg:text-left -mt-20">
          <div className="flex items-center space-x-2 ">
            <i className="fi fi-rs-display-code text-4xl sm:text-5xl lg:text-4xl text-primary"></i>
            <strong className="uppercase  tracking-wide font-semibold">
            Bunny creations world
          </strong>
          </div>
   
     <h1 className="primary-color font-bold text-4xl sm:text-5xl md:text-6xl  leading-tight">
            Transformamos ideas en resultados digitales reales
          </h1>
          <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-950 max-w-2xl">
            En Bunny, soluciones ágiles, efectivas y pensadas 100% para tu negocio. Sabemos que hoy no basta con estar en internet: hay que destacarse. Y ahí entramos nosotros.
          </p>
     
    </div>

    <div className="w-full lg:w-1/3 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <img src={bunnyImage} alt="Bunny Mascot" className="w-64 h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px] object-contain" />
        </div>
      </div>
    </section>
  );
}
