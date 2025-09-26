import bunnyImage from "/img/bunnymascota/bunny-mascota.png";

import { P } from "../../../../components/paragraph/P";
import { Title } from "../../../../components/titles/h2/Title";
import { useTypingEffect } from "../hooks/useTypingEffect";
import { Container } from "../../../../routes/layout/Container";

const texts = [
  {
    text: "Transformamos ideas en",
    color:
      "bg-gradient-to-r from-[#ffb8b8] via-[#ffb8b8] to-[#ffb8b8] bg-clip-text text-transparent",
  },
  {
    text: "resultados digitales reales",
    color:
      "bg-gradient-to-r from-[#46d5e7]/80 via-[#46d5e7]/80 to-[#46d5e7]/80 bg-clip-text text-transparent",
  },
];

export const Hero = () => {
  const { displays, activeStates } = useTypingEffect(texts, {
    typingSpeed: 80,
    eraseSpeed: 50,
    pauseBeforeErase: 500,
    pauseBeforeRestart: 200,
    randomVariation: 50,
  });

  return (
    <Container className={"flex-col lg:flex-row min-h-screen py-12 mt-8 lg:mt-0"}>
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

        <Title className="text-3xl sm:text-5xl lg:text-6xl leading-tight ">
          {displays.map((display, index) => (
            <span
              key={index}
              className={`${texts[index]?.color ?? texts[0].color} pr-1`}
              style={{
                borderRight: activeStates[index]
                  ? "2px solid currentColor"
                  : "none",
              }}
            >
              {display}
              {activeStates[index] && (
                <span className="border-r-2 border-primary ml-0.5" />
              )}
              {index < displays.length - 1 && " "}
            </span>
          ))}
        </Title>

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
