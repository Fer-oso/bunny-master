import bunnyImage from "/img/bunnymascota/bunny-mascota.png";
import { useTypingEffect } from "../hooks/useTypingEffect";
import { P } from "../../../../components/paragraph/P";
import { H2 } from "../../../../components/titles/h2/H2";

const span1 = "Transformamos ideas en";
const span2 = "resultados digitales reales";

export const Hero = () => {
  const [display1, display2, active1, active2] = useTypingEffect(span1, span2);

  return (
    <div className="mx-auto flex flex-col lg:flex-row items-center py-4 md:py-0 h-auto md:h-[700px] lg:h-[540px] 2xl:min-h-screen px-2 xl:px-0">
      
      <div className="w-full lg:w-3/4 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
        
        <div className="flex items-center space-x-2 text-xs sm:text-base md:text-lg lg:text-xl text-primary mt-2 lg:mt-0 ">
          <i className="fi fi-rs-display-code px-0.5"></i>
          <strong className="uppercase tracking-wide font-semibold">
            Bunny creations world
          </strong>
        </div>
       
        <H2 className="text-3xl sm:text-5xl lg:text-6xl  ">
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
        </H2>

        <div className="w-full md:w-5/6 text-left text-lg space-y-4 mb-12 ">
          <P className="mt-6">
          En Bunny sabemos que tu negocio merece más que solo estar en internet: merece destacar. Por eso creamos soluciones ágiles, efectivas e innovadoras, pensadas al 100% para impulsar tu marca y hacerla imposible de ignorar.
          </P>
        </div>

      </div>

      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end  lg:-mt-5 2xl:mt-0">
        <img
          src={bunnyImage}
          alt="Bunny Mascota"
          className="w-72 md:w-[300px] lg:w-[400px] 2xl:w-[500px]"
        />
      </div>
    </div>
  );
};
