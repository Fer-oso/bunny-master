import bunnyImage from '/img/bunnymascota/bunny-mascota-computadora.png';
import TeamCardSection from "./components/TeamCardSection";
import { useTypingEffect } from '../home/components/hooks/useTypingEffect';
import { P } from '../../components/paragraph/P';

const texts = [
  "Sobre",
  "Nosotros"
];

const textColors = [
  "bg-gradient-to-r from-[#ffb8b8] via-[#ffb8b8] to-[#ffb8b8] bg-clip-text text-transparent",
  "bg-gradient-to-r from-[#46d5e7]/80 via-[#46d5e7]/80 to-[#46d5e7]/80 bg-clip-text text-transparent"
];


export default function SobreNosotros() {

 const { displays, activeStates } = useTypingEffect(texts, {
    typingSpeed: 80,
    eraseSpeed: 50,
    pauseBeforeErase: 500,
    pauseBeforeRestart: 200,
    randomVariation: 50
  });

  return (   
      <>
      <div className="absolute inset-0 overflow-hidden pointer-events-none" >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-64 h-32 bg-purple-200/15 rounded-full blur-3xl transform translate-x-1/2" />
      </div>
      <div className="mx-auto flex flex-col lg:flex-row items-center py-4 md:py-0 h-auto md:h-[700px] lg:h-[540px] 2xl:min-h-screen px-2 md:px-0">

        <div className="w-full lg:w-3/4 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">

        <div className="flex items-center space-x-2 text-xs sm:text-base md:text-lg lg:text-xl text-primary mt-2 lg:mt-0 px-1">
          <i className="fi fi-rs-display-code"></i>
          <strong className="uppercase tracking-wide font-semibold">
            Bunny creations world
          </strong>
        </div>
     {/* Título principal */}
     <h2 className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight">
     {displays.map((display, index) => (
            <span
              key={index}
              className={`${textColors[index] || textColors[0]} pr-1`}
              style={{ borderRight: activeStates[index] ? "2px solid currentColor" : "none" }}
            >
              {display}
              {index < displays.length - 1 && " "}
            </span>
          ))}
        </h2>

  {/* Descripción */}
              <div className="w-full md:w-5/6 text-left space-y-2 mb-12">

              <P className="mt-6">
              En <strong>Bunny Creation World</strong> somos un equipo creativo y
          multidisciplinario formado por estudiantes de Ingeniería en Sistemas
          con pasión por la tecnología, el diseño y la comunicación digital.
        </P>

        <P>
        Nos une el entusiasmo por crear, desarrollar y acompañar marcas en el
          mundo digital. Contamos con programadores, diseñadores gráficos y
          community manager, lo que nos permite ofrecer soluciones completas:
          desde el desarrollo de páginas web hasta la creación de contenido
          visual y estrategias para redes sociales.
        </P>

          <P >
          Creemos en el trabajo colaborativo, el aprendizaje constante y en el
          poder de las ideas bien ejecutadas.
        </P>
      </div>
    </div>

    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img src={bunnyImage} alt="Bunny Mascot" className="w-72 md:w-[300px] lg:w-[400px] 2xl:w-[500px]"/>
        </div>
      </div>


      {/* Sección equipo */}
 <div className="text-center text-3xl font-bold mb-4 rounded">
 <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-[#ffb8b8] via-[#ffb8b8] to-[#46d5e7]/80
                             bg-clip-text text-transparent">
                Organigrama
              </span>
              </h2>
      </div>
      <P className="text-center text-xl mb-10 max-w-xl mx-auto ">
        Nuestro equipo está conformado por programadores, diseñadores y
        community manager, que combinan sus talentos para dar vida a cada
        proyecto.
      </P>

      {/* Tarjetas de equipo */}
  
          <TeamCardSection  />
    </>

 

  );

  
}
