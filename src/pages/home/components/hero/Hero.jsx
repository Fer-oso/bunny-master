import bunnyImage from "/img/bunnymascota/bunny-mascota.png";

import { P } from "../../../../components/paragraph/P";
import { Title } from "../../../../components/titles/h2/Title";
import { Container } from "../../../../routes/layout/Container";
import { heroTitles } from "../../../../utils/titles/Titles";

export const Hero = () => {
 
  return (
    <Container className="flex-col lg:flex-row min-h-screen py-12 mt-8 lg:mt-0" id="home">
      {/* Texto principal */}
      <div className="flex-1 lg:items-start lg:text-left space-y-4 ">
        <div className="flex items-center space-x-2 text-xs sm:text-base md:text-lg lg:text-xl text-primary  ">
          <strong className="uppercase tracking-wide font-semibold m-auto lg:m-0">
            <span
              className="fi fi-rs-display-code px-0.5 "
              aria-hidden="true"
            ></span>{" "}
            Bunny creations world
          </strong>
        </div>

        <Title title={heroTitles}/>
        
        <div className="w-full md:w-5/6 space-y-4 m-auto lg:m-0">
          <P>
            En Bunny sabemos que tu negocio merece más que solo estar en
            internet: merece destacar. Por eso creamos soluciones ágiles,
            efectivas e innovadoras, pensadas al 100% para impulsar tu marca y
            hacerla imposible de ignorar.
          </P>
        </div>
      </div>

      {/* Imagen */}
      <div className="flex-1 flex justify-center lg:justify-end md:mt-8 ">
        <img
          src={bunnyImage}
          alt="Bunny Mascota"
          className="w-full h-80 md:h-full md:w-[300px] lg:w-[400px] 2xl:w-[500px] animate-float-pet"
        />
      </div>
    </Container>
  );
};
