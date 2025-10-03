import TeamCardSection from "./components/TeamCardSection";
import { useTypingEffect } from "../home/components/hooks/useTypingEffect";
import { P } from "../../components/paragraph/P";
import { BackgroundDecoration } from "../../components/background/BackgroundDecoration";

// Textos con sus colores asociados
const texts = [
  {
    text: "Sobre",
    color:
      "bg-gradient-to-r from-[#ffb8b8] via-[#ffb8b8] to-[#ffb8b8] bg-clip-text text-transparent",
  },
  {
    text: "Nosotros",
    color:
      "bg-gradient-to-r from-[#46d5e7]/80 via-[#46d5e7]/80 to-[#46d5e7]/80 bg-clip-text text-transparent",
  },
];

export default function SobreNosotros() {
  const { displays, activeStates } = useTypingEffect(texts, {
    typingSpeed: 80,
    eraseSpeed: 50,
    pauseBeforeErase: 500,
    pauseBeforeRestart: 200,
    randomVariation: 50,
  });

  return (
    <>
      {/* Fondos decorativos */}
      <BackgroundDecoration/>

      {/* Hero */}
      <section className="mx-auto flex flex-col lg:flex-row items-center justify-between md:min-h-screen px-4 md:px-8 mt-20 md:mt-0">
        {/* Texto principal */}
        <div className="w-full lg:w-3/4 flex flex-col justify-center items-start text-left space-y-2">
          <div className="flex items-center space-x-2 text-xs sm:text-base md:text-lg lg:text-xl text-primary">
            <span aria-hidden="true" className="fi fi-rs-display-code" />
            <strong className="uppercase tracking-wide font-semibold">
              Bunny creations world
            </strong>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight">
            {displays.map((display, index) => (
              <span
                key={index}
                className={`${texts[index]?.color ?? texts[0].color} pr-1`}
              >
                {display}
                {activeStates[index] && (
                  <span className="border-r-2 border-primary ml-0.5" />
                )}
                {index < displays.length - 1 && " "}
              </span>
            ))}
          </h1>

          <div className="w-full md:w-5/6 space-y-4 ">
            <P>
              En <strong>Bunny Creation World </strong>somos un equipo creativo de estudiantes de
              Ingeniería en Sistemas apasionados por la tecnología, el diseño y
              la comunicación digital.
              </P>

              <P>Nos especializamos en dar vida a marcas
              en el mundo online con un enfoque integral: desarrollo web, diseño
              gráfico y gestión de redes sociales. Creemos en el trabajo
              colaborativo, el aprendizaje constante y en el poder de las ideas
              bien ejecutadas.</P>
        

           
          </div>
        </div>

        {/* Imagen */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-10">
          <img
            src="/img/bunnymascota/bunny-mascota-computadora.png"
            alt="Bunny Mascot"
            loading="lazy"
            className="w-72 md:w-[300px] lg:w-[400px] 2xl:w-[500px] animate-float-pet"
          />
        </div>
      </section>

      {/* Organigrama */}
      <section className="text-center my-16">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight mb-6">
          <span className="bg-gradient-to-r from-[#ffb8b8] via-[#ffb8b8] to-[#46d5e7]/80 bg-clip-text text-transparent">
            Organigrama
          </span>
        </h2>

        <P className={"w-full md:w-5/6 text-lg space-y-4 m-auto my-10"}>
          Nuestro equipo está conformado por programadores, diseñadores y
          community manager, que combinan sus talentos para dar vida a cada
          proyecto.
        </P>

        <TeamCardSection />
      </section>
    </>
  );
}
