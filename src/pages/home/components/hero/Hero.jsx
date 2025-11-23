import bunnyImage from "/img/bunnymascota/bunny-mascota.png";

import { P } from "../../../../components/paragraph/P";
import { Container } from "../../../../routes/layout/Container";
import { heroTitles } from "../../../../utils/titles/Titles";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <Container className="flex-col lg:flex-row mt-20 pb-20 lg:pb-10 lg:mt-0 lg:text-left text-center" id="home">
      {/* Texto principal */}
      <div className="flex-1 lg:items-start">

        <div className="w-[250px] flex justify-center m-auto items-center lg:m-0 lg:justify-start gap-3 px-4 py-2.5 backdrop-blur-md rounded-full border bg-blue-50 border-blue-100 transition-all duration-300 group lg:mt-15 xl:mt-0">
          <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-blue-600 font-semibold">PONTE EN CONTACTO</span>
          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
        </div>

        {heroTitles.map((title, index) => (
          <h1
            key={index}
            className={`text-4xl md:text-7xl lg:text-8xl  font-extrabold leading-tight -ml-0.5 ${title.color} `}
          >
            {title.text}
          </h1>
        ))}

        <div className="w-full md:w-5/6 space-y-4 m-auto lg:m-0 ">
          <P>
            En Bunny creamos soluciones ágiles, arquitecturas escalables,
            microservicios optimizados y soluciones backend que crecen con tu
            negocio. Desde diseño hasta producción.
          </P>
        </div>
      </div>

      {/* Imagen */}
      <div className=" flex justify-center lg:justify-end pt-10  md:pt-20 ">
        <img
          src={bunnyImage}
          alt="Bunny Mascota"
          className="w-full h-80 md:h-full md:w-[300px] lg:w-[400px] 2xl:w-[500px] animate-float-pet"
        />
      </div>
    </Container>
  );
};
